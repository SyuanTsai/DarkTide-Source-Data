import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const IMPORT_ROOT = 'content/imports/w13';
const RELEASE_ID = 'darktide:1.13.2';
const PUBLIC_CODE_COMMIT = 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e';
const PUBLIC_CODE_REPOSITORY = 'https://github.com/Aussiemon/Darktide-Source-Code';
const SOURCE_SNAPSHOT_ID = 'lasgun-p1-m1-w13-1.13.2-16-files';
const AUTHORING_PATH = 'content/authoring/v2/w07-weapons.json';
const FACTS_PATH = `${IMPORT_ROOT}/lasgun-p1-m1-facts.json`;
const INVENTORY_PATH = `${IMPORT_ROOT}/closure-inventory.json`;
const MANIFEST_PATH = `${IMPORT_ROOT}/source-snapshot.json`;
const GENERATED_FACTS_PATH = 'docs/contracts/w13/lasgun-p1-m1-source-facts.json';
export const EXPECTED_BASE_SHA256 = 'cc7975845b98eb3b82e24357c29f72e47569f063efd4f4ab10bd701798057d77';
const EXPECTED_FACTS_TEXT_SHA256 = '11e3f030a192492a239b4ddb837f4167d3fa6851e1d3fa3b89807e44ecd23720';
const EXPECTED_WEAPON_ID = 'darktide:weapon:lasgun:p1-m1';
const EXPECTED_PARENT_PROFILE_ID = 'darktide:damage-profile:lasgun-p1:default_lasgun_killshot';
const EXPECTED_M1_PROFILE_ID = 'darktide:damage-profile:lasgun-p1:lasgun_p1_m1_killshot';
const EXPECTED_ATTACKS = Object.freeze([
  { id: 'darktide:attack-profile:lasgun:p1:lasgun_p1_m1:action_shoot_hip', action: 'action_shoot_hip', mode: 'hipfire', actionFact: 'hipAction', hitScanFact: 'hipHitScan' },
  { id: 'darktide:attack-profile:lasgun:p1:lasgun_p1_m1:action_shoot_zoomed', action: 'action_shoot_zoomed', mode: 'ads', actionFact: 'adsAction', hitScanFact: 'adsHitScan' }
]);
const bytesSha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
export const sourceTextSha256 = (text) => bytesSha256(Buffer.from(text.replace(/\r\n?/gu, '\n'), 'utf8'));
const gitBlobSha1 = (bytes) => createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
const jsonBytes = (value) => Buffer.from(JSON.stringify(value, null, 2) + '\n', 'utf8');
const clone = (value) => structuredClone(value);

function invariant(ok, message) {
  if (!ok) throw new Error(message);
}

function lexical(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function releaseLink(recordId) {
  return { recordId, gameReleaseId: RELEASE_ID };
}

function sourceLink(sourceId) {
  return { sourceId, gameReleaseId: RELEASE_ID };
}

function record(reviewTargets, recordId, kind, payload, sourceIds, dataCoverage = { status: 'complete', missing: [] }) {
  return {
    recordId,
    kind,
    owner: 'source',
    gameReleaseId: RELEASE_ID,
    payload,
    sourceRefs: sourceIds.map(sourceLink),
    dataCoverage,
    reviewTargets,
    reviewState: 'pending'
  };
}

function target(fieldPath, dimension) {
  return { fieldPath, dimension };
}

function missing(field, reasonCode = 'NOT_IMPORTED') {
  return { field, reasonCode };
}

function makeSourceSnapshot(inventory) {
  invariant(inventory?.schema === 'w13-public-code-closure-inputs/1', 'Unsupported W13 public source inventory schema.');
  invariant(inventory.gameReleaseId === RELEASE_ID && inventory.commit === PUBLIC_CODE_COMMIT, 'W13 source inventory release or commit differs from the fixed pin.');
  invariant(inventory.fixtureOnly === false && inventory.publicationEligible === false, 'W13 source inventory must remain a non-publishable acquisition input.');
  invariant(Array.isArray(inventory.files) && inventory.files.length === 16, 'The bounded W13 lasgun source closure must retain exactly 16 pinned files.');
  invariant(inventory.files.every((file) => file.gitBlobVerified === true), 'Every W13 source file must have a verified Git blob pin.');
  const rows = inventory.files.map((file) => ({
    path: file.path,
    gitBlobSha1: file.expectedGitBlobSha1,
    byteCount: file.sizeBytes,
    artifactSha256: file.sha256
  })).sort((left, right) => lexical(left.path, right.path));
  invariant(new Set(rows.map((row) => row.path)).size === rows.length, 'W13 source snapshot contains duplicate paths.');
  invariant(new Set(inventory.files.map((file) => file.file)).size === inventory.files.length, 'W13 flattened raw snapshot filenames must be unique.');
  const manifestSha256 = bytesSha256(Buffer.from(JSON.stringify(rows), 'utf8'));
  const contentSha256 = bytesSha256(Buffer.from(rows.map((row) => `${row.path}\0${row.artifactSha256}\n`).join(''), 'utf8'));
  return {
    gameReleaseId: RELEASE_ID,
    snapshot: {
      snapshotId: SOURCE_SNAPSHOT_ID,
      commit: PUBLIC_CODE_COMMIT,
      manifestSha256,
      contentSha256
    },
    rows
  };
}

export function verifyW13RawSnapshot(inventory, rawFiles) {
  const snapshot = makeSourceSnapshot(inventory);
  invariant(rawFiles instanceof Map, 'W13 raw snapshot must be supplied as a filename-to-bytes Map.');
  for (const input of inventory.files) {
    const bytes = rawFiles.get(input.file);
    invariant(Buffer.isBuffer(bytes), `Missing decoded W13 raw source file: ${input.file}`);
    invariant(bytes.length === input.sizeBytes, `W13 raw source byte count mismatch: ${input.file}`);
    invariant(bytesSha256(bytes) === input.sha256, `W13 raw source SHA-256 mismatch: ${input.file}`);
    invariant(gitBlobSha1(bytes) === input.expectedGitBlobSha1, `W13 raw source Git blob SHA-1 mismatch: ${input.file}`);
    invariant(bytes.toString('utf8').includes('\uFFFD') === false, `W13 raw source is not valid UTF-8: ${input.file}`);
  }
  return snapshot;
}

function sourceIdForPath(sourcePath) {
  const digest = bytesSha256(Buffer.from(sourcePath, 'utf8')).slice(0, 12);
  return `public-code:w13-lasgun-p1-m1-${digest}`;
}

function makeSourceRefs(inventory, rawFiles, snapshot, toolSha256) {
  const byPath = new Map();
  const byFile = new Map();
  const refs = inventory.files.map((input) => {
    const sourceId = sourceIdForPath(input.path);
    const source = {
      sourceId,
      gameReleaseId: RELEASE_ID,
      sourceKind: 'public-code',
      repository: PUBLIC_CODE_REPOSITORY,
      publicUrl: `${PUBLIC_CODE_REPOSITORY}/blob/${PUBLIC_CODE_COMMIT}/${input.path}`,
      commit: PUBLIC_CODE_COMMIT,
      path: input.path,
      gameBuild: '25681127',
      snapshot: clone(snapshot.snapshot),
      tool: { name: 'w13-lasgun-p1-m1-bounded-import', version: '1.0.0', sha256: toolSha256 },
      artifactSha256: bytesSha256(rawFiles.get(input.file)),
      safeSummary: 'Pinned public client-code input retained for a bounded lasgun_p1_m1 Source candidate. Static source only; no Lua execution or in-game behavior is asserted.'
    };
    byPath.set(input.path, source);
    byFile.set(input.file, source);
    return source;
  });
  return { refs, byPath, byFile };
}

function validateFixedFacts(facts, inventory, rawFiles) {
  invariant(facts?.schemaVersion === 'w13-lasgun-p1-m1-fixed-facts/1.0.0', 'Unsupported W13 lasgun facts schema.');
  invariant(facts.fixtureOnly === false && facts.publicationEligible === false && facts.reviewState === 'pending', 'W13 lasgun facts must remain pending and ineligible for publication.');
  invariant(facts.gameReleaseId === RELEASE_ID && facts.sourceCommit === PUBLIC_CODE_COMMIT, 'W13 lasgun facts must retain the selected 1.13.2 source pin.');
  invariant(facts.weapon?.recordId === EXPECTED_WEAPON_ID && facts.weapon?.familyId === 'lasgun_p1'
    && facts.weapon?.markId === 'lasgun_p1_m1' && facts.weapon?.templateKey === 'lasgun_p1_m1', 'W13 lasgun facts must identify only the fixed p1_m1 candidate.');
  invariant(facts.fixedRows?.damageOverride?.rawValue === 'overrides.lasgun_p1_m1_killshot = {'
    && facts.fixedRows?.damageOverrideParent?.rawValue === '"default_lasgun_killshot"', 'W13 damage override must remain bound to the M1 profile and exact parent.');
  const fixedDamageRows = {
    damageParentAttackMin: ['50', 183],
    damageParentAttackMax: ['125', 184],
    damageOverrideAttackMin: ['150', 309],
    damageOverrideAttackMax: ['300', 310],
    damageOverrideImpactMin: ['4', 317],
    damageOverrideImpactMax: ['10', 318],
    damageOverrideNearResistant: ['damage_lerp_values.lerp_0_75', 326],
    damageOverrideFarResistant: ['damage_lerp_values.lerp_0_8', 333]
  };
  for (const [key, [rawValue, line]] of Object.entries(fixedDamageRows)) {
    invariant(facts.fixedRows?.[key]?.rawValue === rawValue && facts.fixedRows?.[key]?.line === line,
      `W13 fixed damage fact ${key} must remain scoped to its pinned M1 or parent source row.`);
  }
  const knownFiles = new Set(inventory.files.map((file) => file.file));
  const result = new Map();
  for (const [key, spec] of Object.entries(facts.fixedRows ?? {})) {
    invariant(knownFiles.has(spec.file), `W13 fact ${key} references a file outside the fixed source closure.`);
    const bytes = rawFiles.get(spec.file);
    const lines = bytes.toString('utf8').split(/\r\n|\n|\r/u);
    const text = lines[spec.line - 1];
    invariant(typeof text === 'string' && text.includes(spec.rawValue), `W13 fixed source fact does not match ${spec.file}:${spec.line} (${key}).`);
    result.set(key, { ...spec, lineText: text });
  }
  for (const attack of EXPECTED_ATTACKS) {
    const actionFact = result.get(attack.actionFact);
    const hitScanFact = result.get(attack.hitScanFact);
    invariant(actionFact?.rawValue === `${attack.action} = {`, `W13 ranged action identity mismatch: ${attack.action}`);
    invariant(hitScanFact?.rawValue === 'HitScanTemplates.lasgun_p1_m1_beam', `W13 action ${attack.action} must resolve to the M1 hit-scan template.`);
  }
  invariant(result.get('hipAmmoUsage')?.rawValue === '3' && result.get('adsAmmoUsage')?.rawValue === '3', 'Both M1 firing actions must preserve the exact per-action ammunition_usage source value.');
  invariant(result.get('hipPartialAmmo')?.rawValue === 'true' && result.get('adsPartialAmmo')?.rawValue === 'true', 'Both M1 firing actions must preserve allow_shots_with_less_than_required_ammo.');
  invariant(result.get('ammoClipBasic')?.rawValue === '80' && result.get('ammoClipPerfect')?.rawValue === '120'
    && result.get('ammoReserveBasic')?.rawValue === '480' && result.get('ammoReservePerfect')?.rawValue === '960', 'W13 ammo endpoints differ from the fixed M1 source rows.');
  invariant(result.get('ammoClipTraitMin')?.rawValue === '0' && result.get('ammoClipTraitMax')?.rawValue === '1'
    && result.get('ammoReserveTraitMin')?.rawValue === '0' && result.get('ammoReserveTraitMax')?.rawValue === '1', 'W13 ammo trait endpoints must retain their exact normalized source input range.');
  invariant(result.get('ammoClipLerpEndpoints')?.rawValue === 'local lerp_basic, lerp_perfect = template.lerp_basic, template.lerp_perfect'
    && result.get('ammoTemplateLerpCaller')?.rawValue === 'local lerped_value = math.lerp(lerp_basic, lerp_perfect, t)'
    && result.get('ammoTemplateBuildCaller')?.rawValue === 'templates[template_types.ammo] = _build_templates(WeaponAmmoTemplates, base_template_lookup[template_types.ammo], lerp_values[template_types.ammo], override_lerp_value_or_nil)'
    && result.get('ammoTemplateModuleRequire')?.rawValue === 'local WeaponAmmoTemplates = require("scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates")', 'W13 ammo template endpoint values must be connected through the pinned caller.');
  invariant(result.get('ammoStatEndpoints')?.rawValue === 'lerp_basic, lerp_perfect = resolved_table.lerp_basic, resolved_table.lerp_perfect'
    && result.get('ammoStatMinimumBinding')?.rawValue === 'local min = math.lerp(lerp_basic, lerp_perfect, real_min_lerp)'
    && result.get('ammoStatMaximumBinding')?.rawValue === 'local max = math.lerp(lerp_basic, lerp_perfect, real_max_lerp)', 'W13 ammo stat min/max endpoints must remain bound to the caller-resolved basic/perfect values.');
  invariant(result.get('ammoStatTraitDefault')?.rawValue === 'default = 0.5,', 'W13 ammo trait caller must retain its exact default t value.');
  invariant(result.get('ammoMathLerp')?.rawValue === 'math.lerp = function (a, b, p)'
    && result.get('ammoMathLerpFormula')?.rawValue === 'return a * (1 - p) + b * p', 'W13 ammo stat interpolation must retain the pinned unclamped linear math.lerp implementation.');
  invariant(result.get('flashlightActivationTime')?.rawValue === '0', 'W13 source parsing must preserve the flashlight zero activation value.');
  return result;
}

function makeLocator(fact, sources) {
  const source = sources.byFile.get(fact.file);
  invariant(source, `W13 locator has no source ref for ${fact.file}.`);
  return {
    sourceRef: sourceLink(source.sourceId),
    path: source.path,
    line: fact.line,
    fieldPath: fact.fieldPath
  };
}

function makeSourceRows(keys, facts, sources) {
  return keys.map((key) => {
    const fact = facts.get(key);
    return { rawValue: fact.rawValue, sourceLocator: makeLocator(fact, sources) };
  });
}

function recordSourceIds(sources, files) {
  return [...new Set(files.map((file) => {
    const source = sources.byFile.get(file);
    invariant(source, `W13 record source file is outside its pinned closure: ${file}`);
    return source.sourceId;
  }))];
}

function makeLeaf(fact, facts) {
  return {
    line: fact.line,
    fieldPath: fact.fieldPath,
    rawValue: fact.rawValue
  };
}

function makeTablePoint(fact, facts, sources, ordinal, { decimal = false } = {}) {
  return {
    ordinal,
    rawValue: fact.rawValue,
    ...(decimal ? { decimal: fact.rawValue } : {}),
    sourceLocator: makeLocator(fact, sources)
  };
}

function makeDamageTable(tableKey, quantity, unit, locatorFact, valueFacts, facts, sources, { decimal = false } = {}) {
  return {
    tableKey,
    quantity,
    unit,
    sourceLocator: makeLocator(facts.get(locatorFact), sources),
    orderedValues: valueFacts.map((factKey, index) => makeTablePoint(facts.get(factKey), facts, sources, index + 1, { decimal }))
  };
}

function parseParentArmorTables(rawFiles, facts, sources) {
  const file = 'lasgun_damage_profile_templates.lua';
  const lines = rawFiles.get(file).toString('utf8').split(/\r\n|\n|\r/u);
  const start = lines.findIndex((line) => line.trim() === 'local lasgun_armor_mod_default = {');
  const end = lines.findIndex((line, index) => index > start && line.trim() === 'local lasgun_p2_armor_mod_charged = {');
  invariant(start >= 0 && end > start, 'W13 parent armor table boundaries are missing from the fixed source file.');
  const groups = new Map();
  let distance;
  let attackType;
  for (let index = start; index < end; index += 1) {
    const line = lines[index];
    const scope = line.match(/^\s*(near|far)\s*=\s*\{/u);
    const branch = line.match(/^\s*(attack|impact)\s*=\s*\{/u);
    if (scope) distance = scope[1];
    if (branch) attackType = branch[1];
    const entry = line.match(/^\s*\[armor_types\.([A-Za-z0-9_]+)\]\s*=\s*(damage_lerp_values\.[A-Za-z0-9_]+),\s*$/u);
    if (!entry) continue;
    invariant(distance && attackType, `W13 parent armor row has no near/far attack/impact scope at line ${index + 1}.`);
    const key = `${distance}.${attackType}`;
    const rows = groups.get(key) ?? [];
    rows.push({ armor: entry[1], rawValue: entry[2], line: index + 1,
      fieldPath: `lasgun_armor_mod_default.${distance}.${attackType}.${entry[1]}` });
    groups.set(key, rows);
  }
  const expectedArmorKeys = ['unarmored', 'armored', 'resistant', 'player', 'berserker', 'super_armor', 'disgustingly_resilient', 'void_shield'];
  const source = sources.byFile.get(file);
  return ['near.attack', 'near.impact', 'far.attack', 'far.impact'].map((key) => {
    const rows = groups.get(key) ?? [];
    invariant(JSON.stringify(rows.map((row) => row.armor)) === JSON.stringify(expectedArmorKeys), `W13 parent ${key} armor rows differ from the complete pinned M1 parent branch.`);
    const [distance, attackType] = key.split('.');
    return {
      tableKey: `lasgun_armor_mod_default.${key}`,
      quantity: `armor_damage_modifier_ranged.${key}`,
      unit: 'ratio',
      sourceLocator: { sourceRef: sourceLink(source.sourceId), path: source.path, line: start + 1, fieldPath: `lasgun_armor_mod_default.${key}` },
      orderedValues: rows.map((row, index) => ({
        ordinal: index + 1,
        rawValue: row.rawValue,
        sourceLocator: { sourceRef: sourceLink(source.sourceId), path: source.path, line: row.line, fieldPath: row.fieldPath }
      }))
    };
  });
}

function buildDamageProfiles(facts, sources, rawFiles) {
  const parentLeaves = ['damageParentRangeMax', 'damageParentRangeMin'].map((key) => makeLeaf(facts.get(key), facts));
  const parentTables = [
    makeDamageTable('power_distribution.attack', 'power_distribution.attack', 'attack-power-point', 'damageParentAttackMin', ['damageParentAttackMin', 'damageParentAttackMax'], facts, sources, { decimal: true }),
    makeDamageTable('power_distribution.impact', 'power_distribution.impact', 'impact', 'damageParentImpactMin', ['damageParentImpactMin', 'damageParentImpactMax'], facts, sources, { decimal: true }),
    ...parseParentArmorTables(rawFiles, facts, sources)
  ];
  const parent = record([
    target('/payload/profileKey', 'identity'),
    target('/payload/rawSourceDefinition', 'technical')
  ], EXPECTED_PARENT_PROFILE_ID, 'damage-profile', {
    profileKey: 'default_lasgun_killshot',
    rawSourceDefinition: {
      sourceRef: sourceLink(sources.byFile.get('lasgun_damage_profile_templates.lua').sourceId),
      path: sources.byFile.get('lasgun_damage_profile_templates.lua').path,
      line: facts.get('damageParent').line,
      fieldPath: facts.get('damageParent').fieldPath,
      leaves: parentLeaves,
      tables: parentTables
    }
  }, recordSourceIds(sources, ['lasgun_damage_profile_templates.lua']), {
    status: 'partial',
    missing: [missing('/payload/rawSourceDefinition/otherProfileFields')]
  });

  const m1Rows = ['damageOverrideParent', 'damageOverrideAttackMin', 'damageOverrideAttackMax', 'damageOverrideImpactMin',
    'damageOverrideImpactMax', 'damageOverrideNearResistant', 'damageOverrideFarResistant'];
  const m1Leaves = m1Rows.map((key) => makeLeaf(facts.get(key), facts));
  const overrideTables = [
    makeDamageTable('lasgun_p1_m1_killshot.power_distribution.attack', 'power_distribution.attack', 'attack-power-point', 'damageOverrideAttackMin', ['damageOverrideAttackMin', 'damageOverrideAttackMax'], facts, sources, { decimal: true }),
    makeDamageTable('lasgun_p1_m1_killshot.power_distribution.impact', 'power_distribution.impact', 'impact', 'damageOverrideImpactMin', ['damageOverrideImpactMin', 'damageOverrideImpactMax'], facts, sources, { decimal: true }),
    {
      tableKey: 'lasgun_p1_m1_killshot.armor_damage_modifier_ranged.near.attack',
      quantity: 'armor_damage_modifier_ranged.near.attack',
      unit: 'ratio',
      sourceLocator: makeLocator(facts.get('damageOverrideNearResistant'), sources),
      orderedValues: [{ ordinal: 1, rawValue: facts.get('damageOverrideNearResistant').rawValue,
        sourceLocator: makeLocator(facts.get('damageOverrideNearResistant'), sources) }]
    },
    {
      tableKey: 'lasgun_p1_m1_killshot.armor_damage_modifier_ranged.far.attack',
      quantity: 'armor_damage_modifier_ranged.far.attack',
      unit: 'ratio',
      sourceLocator: makeLocator(facts.get('damageOverrideFarResistant'), sources),
      orderedValues: [{ ordinal: 1, rawValue: facts.get('damageOverrideFarResistant').rawValue,
        sourceLocator: makeLocator(facts.get('damageOverrideFarResistant'), sources) }]
    }
  ];
  const m1 = record([
    target('/payload/profileKey', 'identity'),
    target('/payload/rawSourceDefinition/parentProfileRef', 'technical'),
    target('/payload/rawSourceDefinition/tables', 'technical')
  ], EXPECTED_M1_PROFILE_ID, 'damage-profile', {
    profileKey: 'lasgun_p1_m1_killshot',
    rawSourceDefinition: {
      sourceRef: sourceLink(sources.byFile.get('lasgun_damage_profile_templates.lua').sourceId),
      path: sources.byFile.get('lasgun_damage_profile_templates.lua').path,
      line: facts.get('damageOverride').line,
      fieldPath: facts.get('damageOverride').fieldPath,
      parentProfileRef: releaseLink(EXPECTED_PARENT_PROFILE_ID),
      leaves: m1Leaves,
      tables: overrideTables
    }
  }, recordSourceIds(sources, ['lasgun_damage_profile_templates.lua']), {
    status: 'partial',
    missing: [missing('/payload/rawSourceDefinition/otherOverrideFields')]
  });
  return [parent, m1];
}

function statTable(facts, sources, quantity, tableFact, basicFact, perfectFact, statDefinitionId) {
  const rows = [basicFact, perfectFact].map((key) => facts.get(key));
  return {
    statKey: quantity,
    tableKey: `weapon_ammo_templates.lasgun_p1_m1.${quantity}`,
    sourceLocator: makeLocator(facts.get(tableFact), sources),
    properties: [{
      property: quantity,
      unit: 'instance-count',
      sourceLocator: makeLocator(facts.get(tableFact), sources),
      orderedValues: rows.map((fact, index) => ({
        key: index === 0 ? 'lerp_basic' : 'lerp_perfect',
        rawValue: fact.rawValue,
        decimal: fact.rawValue,
        line: fact.line,
        fieldPath: fact.fieldPath
      }))
    }]
  };
}

function buildStatRecords(facts, sources) {
  const descriptors = [
    { key: 'clips', quantity: 'ammunition_clips', basic: 'ammoClipBasic', perfect: 'ammoClipPerfect', min: 'ammoClipTraitMin', max: 'ammoClipTraitMax' },
    { key: 'reserve', quantity: 'ammunition_reserve', basic: 'ammoReserveBasic', perfect: 'ammoReservePerfect', min: 'ammoReserveTraitMin', max: 'ammoReserveTraitMax' }
  ];
  const curves = [];
  const definitions = [];
  const tables = [];
  for (const descriptor of descriptors) {
    const curveId = `darktide:stat-curve:lasgun-p1-m1-ammo-${descriptor.key}`;
    const definitionId = `darktide:stat-definition:lasgun-p1-m1-ammo-${descriptor.key}`;
    const basic = facts.get(descriptor.basic);
    const perfect = facts.get(descriptor.perfect);
    const minFact = facts.get(descriptor.min);
    const maxFact = facts.get(descriptor.max);
    const sourceFiles = ['lasgun_p1_m1.lua', 'ammo_trait_templates.lua', 'weapon_ammo_templates.lua',
      'weapon_tweak_template_settings.lua', 'weapon_tweak_templates.lua', 'math.lua'];
    curves.push(record([
      target('/payload/knots', 'technical'),
      target('/payload/interpolation', 'technical'),
      target('/payload/edgePolicy', 'technical')
    ], curveId, 'stat-curve', {
      inputUnit: 'ratio',
      outputUnit: 'instance-count',
      panelInputRange: { status: 'not-applicable' },
      knots: [
        { input: minFact.rawValue, output: basic.rawValue, sourceOrdinal: 1, rawEndpoint: basic.rawValue, sourceLocator: makeLocator(basic, sources) },
        { input: maxFact.rawValue, output: perfect.rawValue, sourceOrdinal: 2, rawEndpoint: perfect.rawValue, sourceLocator: makeLocator(perfect, sources) }
      ],
      interpolation: { value: 'linear', sourceLocator: makeLocator(facts.get('ammoMathLerpFormula'), sources) },
      edgePolicy: { value: 'extrapolate', scope: 'math.lerp function only', sourceLocator: makeLocator(facts.get('ammoMathLerp'), sources) },
      callsiteLocators: [makeLocator(facts.get('ammoTemplateLerpCaller'), sources), makeLocator(facts.get('ammoMathLerp'), sources)]
    }, recordSourceIds(sources, sourceFiles), {
      status: 'complete',
      missing: []
    }));
    definitions.push(record([
      target('/payload', 'technical')
    ], definitionId, 'stat-definition', {
      quantity: descriptor.quantity,
      inputUnit: 'ratio',
      outputUnit: 'instance-count',
      panelInputRange: { status: 'not-applicable' },
      theoreticalInputRange: { status: 'known', min: minFact.rawValue, max: maxFact.rawValue, unit: 'ratio', inclusive: { min: true, max: true } },
      obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_EXPOSED_BY_SOURCE' },
      rangeEvidence: {
        checkedSources: [
          { sourceLocator: makeLocator(minFact, sources), summary: 'Fixed default ammo stat input minimum.' },
          { sourceLocator: makeLocator(maxFact, sources), summary: 'Fixed default ammo stat input maximum.' },
          { sourceLocator: makeLocator(facts.get('ammoStatEndpoints'), sources), summary: 'The selected weapon stat caller resolves the ammo template basic and perfect endpoints.' },
          { sourceLocator: makeLocator(facts.get('ammoStatMinimumBinding'), sources), summary: 'The selected weapon stat caller maps the trait minimum through math.lerp.' },
          { sourceLocator: makeLocator(facts.get('ammoStatMaximumBinding'), sources), summary: 'The selected weapon stat caller maps the trait maximum through math.lerp.' },
          { sourceLocator: makeLocator(facts.get('ammoMathLerp'), sources), summary: 'The fixed math.lerp implementation defines the local linear interpolation formula.' },
          { sourceLocator: makeLocator(facts.get('ammoStatTraitDefault'), sources), summary: 'The fixed default stat trait t value used when no stat-specific t is supplied.' }
        ],
        serverBoundary: 'The selected public client sources do not establish server-generated or player-obtainable ammunition capacities.',
        impact: 'The caller-resolved source endpoints are preserved separately from any claim about player-obtainable ammunition.'
      },
      curveRef: releaseLink(curveId),
      claimRefs: []
    }, recordSourceIds(sources, sourceFiles), {
      status: 'partial',
      missing: [missing('/payload/claimRefs')]
    }));
    tables.push(statTable(facts, sources, descriptor.quantity,
      descriptor.key === 'clips' ? 'ammoClipTable' : 'ammoReserveTable', descriptor.basic, descriptor.perfect, definitionId));
  }
  return { curves, definitions, tables };
}

function buildAttackProfiles(facts, sources) {
  return EXPECTED_ATTACKS.map((attack) => {
    const actionFact = facts.get(attack.actionFact);
    const hitScanFact = facts.get(attack.hitScanFact);
    const actionRows = attack.mode === 'hipfire'
      ? ['hipKind', 'hipStartInput', 'hipAmmoUsage', 'hipPartialAmmo', 'hipTotalTime', 'hipSingleShotHandling', 'hipChainTime']
      : ['adsKind', 'adsStartInput', 'adsAmmoUsage', 'adsPartialAmmo', 'adsTotalTime', 'adsSingleShotHandling', 'adsChainTime'];
    const sourceFiles = ['lasgun_p1_m1.lua', 'hit_scan_templates.lua', 'lasgun_hitscan_templates.lua'];
    return record([
      target('/payload/action', 'identity'),
      target('/payload/mode', 'context'),
      target('/payload/damageProfileRefs', 'technical'),
      target('/payload/contexts', 'technical')
    ], attack.id, 'attack-profile', {
      familyId: 'lasgun_p1',
      markId: 'lasgun_p1_m1',
      templateKey: 'lasgun_p1_m1',
      action: attack.action,
      mode: attack.mode,
      weaponRef: releaseLink(EXPECTED_WEAPON_ID),
      damageProfileRefs: [releaseLink(EXPECTED_M1_PROFILE_ID)],
      targetProfileRefs: [],
      contexts: [{
        weaponRef: releaseLink(EXPECTED_WEAPON_ID),
        markKey: 'lasgun_p1_m1',
        attackMode: attack.mode,
        action: attack.action,
        mode: attack.mode,
        damageProfileRef: releaseLink(EXPECTED_M1_PROFILE_ID)
      }]
    }, recordSourceIds(sources, sourceFiles), {
      status: 'partial',
      missing: [missing('/payload/targetProfileRefs'), missing('/payload/sourceBindings'), missing('/payload/actionResolution')]
    });
  });
}

function buildWeaponRecord(facts, sources, statTables, statDefinitions) {
  const sourceRowKeys = [
    'entryPrimary', 'entrySecondary', 'displayedPrimaryFireMode', 'displayedPrimaryType',
    'displayedSecondaryFireMode', 'displayedSecondaryType', 'displayedSpecialType',
    'hipAction', 'hipKind', 'hipStartInput', 'hipAmmoUsage', 'hipPartialAmmo', 'hipTotalTime',
    'hipSingleShotHandling', 'hipHitScan', 'hipChainTime',
    'adsAction', 'adsKind', 'adsStartInput', 'adsAmmoUsage', 'adsPartialAmmo', 'adsTotalTime',
    'adsSingleShotHandling', 'adsHitScan', 'adsChainTime', 'flashlightAction',
    'flashlightActivationTime', 'flashlightStartInput', 'ammoTemplate', 'flashlightTemplate',
    'hitScanTemplate', 'hitScanRange', 'hitScanDamageProfile', 'ammoStatBinding'
  ];
  const sourceFiles = [
    'lasgun_p1_m1.lua', 'hit_scan_templates.lua', 'lasgun_hitscan_templates.lua',
    'ammo_trait_templates.lua', 'weapon_ammo_templates.lua'
  ];
  return record([
    target('/payload/markId', 'identity'),
    target('/payload/attackProfileRefs', 'technical'),
    target('/payload/statRefs', 'technical'),
    target('/payload/statTables', 'technical'),
    target('/payload/sourceRows', 'technical')
  ], EXPECTED_WEAPON_ID, 'weapon', {
    familyId: 'lasgun_p1',
    markId: 'lasgun_p1_m1',
    templateKey: 'lasgun_p1_m1',
    statRefs: statDefinitions.map((item) => releaseLink(item.recordId)),
    attackProfileRefs: EXPECTED_ATTACKS.map((attack) => releaseLink(attack.id)),
    statTables,
    sourceRows: makeSourceRows(sourceRowKeys, facts, sources)
  }, recordSourceIds(sources, sourceFiles), {
    status: 'partial',
    missing: [missing('/payload/actionProfileResolution')]
  });
}

function mergeDelta(base, delta) {
  const candidate = clone(base);
  const deltaIds = new Set(delta.records.map((item) => item.recordId));
  invariant(!candidate.records.some((item) => deltaIds.has(item.recordId)), 'W13 lasgun records already exist in the candidate before merge.');
  const sourceIds = new Set(delta.sourceRefs.map((item) => item.sourceId));
  invariant(!candidate.sourceRefs.some((item) => sourceIds.has(item.sourceId)), 'W13 lasgun source refs already exist in the candidate before merge.');
  invariant(!candidate.sourceSnapshots.some((item) => item.snapshot.snapshotId === delta.sourceSnapshot.snapshot.snapshotId), 'W13 lasgun source snapshot already exists in the candidate before merge.');
  candidate.records.push(...clone(delta.records));
  candidate.sourceRefs.push(...clone(delta.sourceRefs));
  candidate.sourceSnapshots.push(clone(delta.sourceSnapshot));
  candidate.publicationEligible = false;
  return candidate;
}

function isW13Record(recordId) {
  return recordId === EXPECTED_WEAPON_ID || recordId.startsWith('darktide:attack-profile:lasgun:p1:lasgun_p1_m1:')
    || recordId === EXPECTED_PARENT_PROFILE_ID || recordId === EXPECTED_M1_PROFILE_ID
    || recordId.startsWith('darktide:stat-curve:lasgun-p1-m1-ammo-')
    || recordId.startsWith('darktide:stat-definition:lasgun-p1-m1-ammo-');
}

function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  if (value && typeof value === 'object') {
    return `{${Object.keys(value).sort(lexical).map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

function assertExistingDeltaMatches(candidate, delta) {
  const expectedById = new Map(delta.records.map((item) => [item.recordId, item]));
  const currentRecords = candidate.records.filter((item) => isW13Record(item.recordId));
  invariant(currentRecords.length === expectedById.size, 'Existing W13 authoring candidate has a missing or unexpected ranged record.');
  for (const current of currentRecords) {
    const expected = expectedById.get(current.recordId);
    invariant(expected, `Existing W13 authoring candidate contains an unexpected record: ${current.recordId}`);
    const normalized = clone(current);
    normalized.reviewState = 'pending';
    invariant(canonicalJson(normalized) === canonicalJson(expected),
      `Existing W13 record differs from pinned generated facts: ${current.recordId}`);
  }
  const expectedSourceIds = new Set(delta.sourceRefs.map((source) => source.sourceId));
  const currentSources = candidate.sourceRefs.filter((source) => expectedSourceIds.has(source.sourceId));
  invariant(currentSources.length === expectedSourceIds.size, 'Existing W13 authoring candidate has missing or duplicate pinned source refs.');
  const expectedSourcesById = new Map(delta.sourceRefs.map((source) => [source.sourceId, source]));
  for (const source of currentSources) {
    invariant(canonicalJson(source) === canonicalJson(expectedSourcesById.get(source.sourceId)),
      `Existing W13 source ref differs from the pinned snapshot: ${source.sourceId}`);
  }
  const snapshots = candidate.sourceSnapshots.filter((item) => item.snapshot.snapshotId === delta.sourceSnapshot.snapshot.snapshotId);
  invariant(snapshots.length === 1 && canonicalJson(snapshots[0]) === canonicalJson(delta.sourceSnapshot),
    'Existing W13 authoring candidate has a missing, duplicated, or changed source snapshot.');
}

function withoutDelta(candidate, sourceRefs, sourceSnapshot) {
  const base = clone(candidate);
  const removedIds = new Set(base.records.filter((item) => isW13Record(item.recordId)).map((item) => item.recordId));
  base.records = base.records.filter((item) => !isW13Record(item.recordId));
  base.sourceRefs = base.sourceRefs.filter((item) => !sourceRefs.some((source) => source.sourceId === item.sourceId));
  base.sourceSnapshots = base.sourceSnapshots.filter((item) => item.snapshot.snapshotId !== sourceSnapshot.snapshot.snapshotId);
  base.reviewReceipts = base.reviewReceipts.filter((receipt) => receipt.target.gameReleaseId !== RELEASE_ID || !removedIds.has(receipt.target.recordId));
  base.publicationEligible = true;
  return base;
}

async function loadInputs(root) {
  const [inventoryBytes, factsBytes, authoringBytes, moduleBytes] = await Promise.all([
    readFile(path.join(root, INVENTORY_PATH)),
    readFile(path.join(root, FACTS_PATH)),
    readFile(path.join(root, AUTHORING_PATH)),
    readFile(fileURLToPath(import.meta.url))
  ]);
  invariant(sourceTextSha256(factsBytes.toString('utf8')) === EXPECTED_FACTS_TEXT_SHA256,
    'W13 fixed facts input SHA-256 mismatch; refusing unpinned extraction locators or values.');
  const inventory = JSON.parse(inventoryBytes.toString('utf8'));
  const factsObject = JSON.parse(factsBytes.toString('utf8'));
  const authoring = JSON.parse(authoringBytes.toString('utf8'));
  const rawFiles = new Map();
  for (const input of inventory.files ?? []) {
    const encoded = (await readFile(path.join(root, IMPORT_ROOT, 'raw', `${input.file}.b64`), 'utf8')).trim();
    const bytes = Buffer.from(encoded, 'base64');
    invariant(bytes.toString('base64') === encoded, `W13 Base64 snapshot is not canonical: ${input.file}`);
    rawFiles.set(input.file, bytes);
  }
  const snapshot = verifyW13RawSnapshot(inventory, rawFiles);
  const facts = validateFixedFacts(factsObject, inventory, rawFiles);
  const toolSha256 = sourceTextSha256(moduleBytes.toString('utf8'));
  const sources = makeSourceRefs(inventory, rawFiles, snapshot, toolSha256);
  return { inventory, factsObject, facts, rawFiles, snapshot, sources, authoring, authoringBytes };
}

export async function buildW13LasgunP1M1Import({ root = ROOT } = {}) {
  const inputs = await loadInputs(root);
  const stats = buildStatRecords(inputs.facts, inputs.sources);
  const damageProfiles = buildDamageProfiles(inputs.facts, inputs.sources, inputs.rawFiles);
  const weapon = buildWeaponRecord(inputs.facts, inputs.sources, stats.tables, stats.definitions);
  const attackProfiles = buildAttackProfiles(inputs.facts, inputs.sources);
  const records = [...damageProfiles, ...stats.curves, ...stats.definitions, weapon, ...attackProfiles];
  const sourceSnapshot = { gameReleaseId: inputs.snapshot.gameReleaseId, snapshot: clone(inputs.snapshot.snapshot) };
  const delta = {
    sourceSnapshot,
    sourceRefs: inputs.sources.refs,
    records
  };
  const currentAuthoringSha256 = sourceTextSha256(inputs.authoringBytes.toString('utf8'));
  let candidate;
  const existingCandidate = currentAuthoringSha256 !== EXPECTED_BASE_SHA256;
  if (!existingCandidate) {
    candidate = mergeDelta(inputs.authoring, delta);
  } else {
    const baseAuthoring = withoutDelta(inputs.authoring, inputs.sources.refs, sourceSnapshot);
    invariant(sourceTextSha256(jsonBytes(baseAuthoring).toString('utf8')) === EXPECTED_BASE_SHA256,
      'Refusing to apply W13 lasgun delta to an unrecognized W07 authoring candidate.');
    assertExistingDeltaMatches(inputs.authoring, delta);
    candidate = inputs.authoring;
  }
  const { validateSourceContract, loadContractSchema } = await import('../contract-validator.mjs');
  const schema = await loadContractSchema({ sourceRoot: root });
  const validation = validateSourceContract(candidate, { schema, sourceRoot: root });
  if (!validation.valid) {
    throw new Error('Generated W13 lasgun Source candidate is invalid:\n' + JSON.stringify(validation.issues, null, 2));
  }
  const factsOutput = {
    ...inputs.factsObject,
    sourceSnapshot: sourceSnapshot.snapshot,
    fileRows: inputs.snapshot.rows,
    extractedFacts: Object.fromEntries([...inputs.facts.entries()].map(([key, row]) => [key, {
      file: row.file,
      line: row.line,
      fieldPath: row.fieldPath,
      rawValue: row.rawValue
    }])),
    generatedRecordIds: records.map((item) => item.recordId),
    generatedRecordCount: records.length,
    generatedReviewTargetCount: records.reduce((sum, item) => sum + item.reviewTargets.length, 0)
  };
  return {
    candidate,
    delta,
    facts: factsOutput,
    validation,
    existingCandidate,
    reviewState: [...new Set(candidate.records.filter((item) => isW13Record(item.recordId)).map((item) => item.reviewState))].join(','),
    sourceByteCount: inputs.snapshot.rows.reduce((sum, row) => sum + row.byteCount, 0),
    baseAuthoringSha256: EXPECTED_BASE_SHA256,
    authoringSha256: bytesSha256(jsonBytes(candidate))
  };
}

export async function writeW13LasgunP1M1Import({ root = ROOT } = {}) {
  const built = await buildW13LasgunP1M1Import({ root });
  const outputs = new Map([
    [AUTHORING_PATH, jsonBytes(built.candidate)],
    [MANIFEST_PATH, jsonBytes({ schemaVersion: 'w13-public-code-snapshot/1.0.0', ...built.delta.sourceSnapshot, files: built.facts.fileRows })],
    [GENERATED_FACTS_PATH, jsonBytes(built.facts)]
  ]);
  const destinations = [...outputs].map(([relative, bytes]) => ({ relative, targetPath: path.join(root, relative), expected: bytes }));
  const baseAuthoringPath = path.join(root, AUTHORING_PATH);
  const baseAuthoringBytes = await readFile(baseAuthoringPath);
  const parsedAuthoring = JSON.parse(baseAuthoringBytes.toString('utf8'));
  const expectedCandidate = outputs.get(AUTHORING_PATH);
  const authoringIsBase = sourceTextSha256(jsonBytes(parsedAuthoring).toString('utf8')) === EXPECTED_BASE_SHA256;
  const authoringIsCandidate = canonicalJson(parsedAuthoring) === canonicalJson(JSON.parse(expectedCandidate.toString('utf8')));
  invariant(authoringIsBase || authoringIsCandidate,
    'Refusing to overwrite an unrelated W07 or W13 Source candidate.');

  const checked = [];
  for (const destination of destinations) {
    if (destination.relative === AUTHORING_PATH) {
      checked.push({ ...destination, actual: baseAuthoringBytes });
      continue;
    }
    try {
      checked.push({ ...destination, actual: await readFile(destination.targetPath) });
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      checked.push({ ...destination, actual: null });
    }
  }
  for (const item of checked) {
    if (item.actual !== null && item.relative !== AUTHORING_PATH && !item.actual.equals(item.expected)) {
      throw new Error(`Refusing to overwrite changed W13 generated output: ${item.relative}`);
    }
  }
  const idempotent = authoringIsCandidate && checked.every((item) => item.actual !== null
    && (item.relative === AUTHORING_PATH || item.actual.equals(item.expected)));
  if (idempotent) return { written: false, idempotent: true, existingCandidate: built.existingCandidate,
    reviewState: built.reviewState, outputPaths: destinations.map(({ targetPath }) => targetPath) };

  for (const { targetPath } of destinations) await mkdir(path.dirname(targetPath), { recursive: true });
  let written = false;
  for (const item of checked) {
    if (item.relative === AUTHORING_PATH) {
      if (authoringIsBase) {
        await writeFile(item.targetPath, item.expected);
        written = true;
      }
    } else if (item.actual === null) {
      await writeFile(item.targetPath, item.expected, { flag: 'wx' });
      written = true;
    }
  }
  return { written, idempotent: !written, existingCandidate: built.existingCandidate,
    reviewState: built.reviewState, outputPaths: destinations.map(({ targetPath }) => targetPath) };
}

async function main(argv) {
  if (argv.length > 1 || (argv.length === 1 && argv[0] !== '--write')) {
    throw new Error('Usage: node scripts/content/imports/w13-lasgun-p1-m1.mjs [--write]');
  }
  if (argv[0] === '--write') {
    const result = await writeW13LasgunP1M1Import({ root: ROOT });
    const message = result.idempotent
      ? 'W13 lasgun candidate already matches; no files changed.'
      : result.existingCandidate
        ? 'W13 candidate already existed; missing generated metadata was written without changing its review state or receipts.'
        : 'W13 pending lasgun candidate and generated source facts written.';
    process.stdout.write(`${message}\n${result.outputPaths.join('\n')}\n`);
    return;
  }
  const result = await buildW13LasgunP1M1Import({ root: ROOT });
  process.stdout.write(`W13 lasgun Source candidate valid: ${result.delta.records.length} generated records, ${result.delta.records.reduce((sum, item) => sum + item.reviewTargets.length, 0)} targets; current state ${result.reviewState}. ${result.sourceByteCount} raw bytes. No files written.\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(String(error.stack ?? error) + '\n');
    process.exitCode = 1;
  });
}
