import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const RELEASE_ID = 'darktide:1.13.2';
const CURRENT_CODE_COMMIT = 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e';
const CURRENT_SNAPSHOT_ID = 'chainaxe-weapons-1.13.2-37-files';
const APPROVED_ADDITIONAL_SOURCE_IDS = Object.freeze({
  'scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua': 'public-code:w07-common-damage-profile-templates-ba6c148',
  'scripts/settings/damage/power_level_settings.lua': 'public-code:w07-power-level-settings-ba6c148',
  'scripts/settings/equipment/weapon_templates/weapon_trait_templates/movement_curve_modifier_trait_templates.lua': 'public-code:w07-movement-curve-modifier-trait-templates-ba6c148'
});
const EXPECTED_MANIFEST_SHA256 = 'f9848201c04ca7433b01491137bd2a324befd48bb8383505e3c7ce1eac19ecfc';
const EXPECTED_CONTENT_SHA256 = '515edda57e47cdbba60013bb0f946b022b985eb65e571bdf4ed79f03aa1363bd';
const EXPECTED_PROFILES = 19;
const EXPECTED_LOCAL_STICKY = 6;
const EXPECTED_EMPTY_TABLES = 7;
const EXPECTED_ALIAS_KEYS = Object.freeze([
  'chain_axe_heavy_mod', 'chain_axe_light_mod', 'chain_sword_crit_mod',
  'chainsword_sawing', 'chainsword_sawing_rip', 'chainsword_sawing_tick',
  'damage_lerp_values.lerp_0_1', 'damage_lerp_values.lerp_0_25',
  'damage_lerp_values.lerp_0_3', 'damage_lerp_values.lerp_0_5',
  'damage_lerp_values.lerp_0_6', 'damage_lerp_values.lerp_0_65',
  'damage_lerp_values.lerp_0_75', 'damage_lerp_values.lerp_0_9',
  'damage_lerp_values.lerp_1', 'damage_lerp_values.lerp_1_1',
  'damage_lerp_values.lerp_1_25', 'damage_lerp_values.lerp_1_33',
  'damage_lerp_values.lerp_1_5', 'damage_lerp_values.lerp_1_75',
  'damage_lerp_values.lerp_2', 'damage_lerp_values.no_damage',
  'double_cleave', 'large_cleave', 'medium_cleave', 'no_cleave'
]);
const STICKY_KEYS = Object.freeze([
  'chainaxe_p1_m1:hit_stickyness_settings_heavy_special',
  'chainaxe_p1_m1:hit_stickyness_settings_light',
  'chainaxe_p1_m1:hit_stickyness_settings_light_special',
  'chainaxe_p1_m2:hit_stickyness_settings_heavy',
  'chainaxe_p1_m2:hit_stickyness_settings_heavy_special',
  'chainaxe_p1_m2:hit_stickyness_settings_light_special'
]);
const bytesSha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const stableJson = (value) => JSON.stringify(value);
const link = (sourceId) => ({ sourceId, gameReleaseId: RELEASE_ID });
const ref = (recordId) => ({ recordId, gameReleaseId: RELEASE_ID });
const isDecimal = (value) => /^-?\d+(?:\.\d+)?$/.test(String(value));

function invariant(ok, message) {
  if (!ok) throw new Error(message);
}

function getReachableAliasKeys(facts) {
  const rowsByKey = new Map();
  for (const row of facts.referencedAliasTables ?? []) {
    const list = rowsByKey.get(row.aliasTableKey) ?? [];
    list.push(row);
    rowsByKey.set(row.aliasTableKey, list);
  }
  const known = new Set(facts.aliasTableKeys ?? []);
  const queue = [];
  for (const profile of facts.profileDefinitions ?? []) {
    for (const row of profile.rows ?? []) {
      const key = keyFromProfileReference(row.rawValue, known);
      if (key) queue.push(key);
    }
  }
  const reached = new Set();
  while (queue.length) {
    const key = queue.pop();
    if (reached.has(key)) continue;
    reached.add(key);
    const rows = rowsByKey.get(key);
    invariant(rows?.length, 'Missing selected alias table: ' + key);
    for (const row of rows) {
      const child = keyFromProfileReference(row.rawValue, known);
      if (child && !reached.has(child)) queue.push(child);
    }
  }
  for (const key of EXPECTED_ALIAS_KEYS) {
    invariant(known.has(key), 'Missing selected alias table key: ' + key);
    invariant(rowsByKey.get(key)?.length, 'Missing selected alias table: ' + key);
  }
  return { rowsByKey, reached };
}

export function validateCuratedWeaponFacts(facts, pinnedSnapshot = facts?.sourceSnapshot) {
  invariant(facts?.schemaVersion === 'w07-curated-source-facts/1.0.0', 'Unsupported W07 curated source facts schema.');
  invariant(facts.sourceCommit === CURRENT_CODE_COMMIT, 'Curated source facts must use the pinned public-code commit.');
  invariant(facts.sourceSnapshot?.currentCommit === CURRENT_CODE_COMMIT, 'Curated source snapshot commit differs from the pinned commit.');
  invariant(stableJson(facts.sourceSnapshot) === stableJson(pinnedSnapshot), 'Curated facts and the selected raw Git snapshot metadata must match.');
  invariant(pinnedSnapshot?.files?.length === 37, 'The W07 selected source snapshot must contain exactly 37 files.');
  invariant(pinnedSnapshot.manifestSha256 === EXPECTED_MANIFEST_SHA256, 'The W07 source snapshot manifest digest is not the reviewed pin.');
  invariant(pinnedSnapshot.contentSha256 === EXPECTED_CONTENT_SHA256, 'The W07 source snapshot content digest is not the reviewed pin.');

  const manifestRows = pinnedSnapshot.files
    .map(({ path: sourcePath, gitBlobSha1, byteCount, artifactSha256 }) => ({ path: sourcePath, gitBlobSha1, byteCount, artifactSha256 }))
    .sort((left, right) => left.path.localeCompare(right.path, 'en'));
  invariant(bytesSha256(Buffer.from(JSON.stringify(manifestRows), 'utf8')) === EXPECTED_MANIFEST_SHA256, 'W07 source snapshot manifest rows do not match the fixed manifest digest.');
  invariant(new Set(pinnedSnapshot.files.map((file) => file.path)).size === 37, 'W07 source snapshot contains duplicate paths.');
  invariant(new Set(pinnedSnapshot.files.map((file) => file.gitBlobSha1)).size > 1, 'W07 source snapshot rows are malformed.');

  invariant(facts.profileKeys?.length === EXPECTED_PROFILES, 'W07 must retain the exact 19-profile selected closure.');
  invariant(facts.profileDefinitions?.length === EXPECTED_PROFILES, 'W07 profile definitions are incomplete.');
  const profileKeys = new Set(facts.profileDefinitions.map((profile) => profile.profileKey));
  invariant(profileKeys.size === EXPECTED_PROFILES && facts.profileKeys.every((key) => profileKeys.has(key)), 'W07 profile keys and definitions differ.');
  invariant(facts.actionBindings?.m1?.profileBindings?.length === 36, 'W07 Mk IV must retain all 36 damage profile bindings.');
  invariant(facts.actionBindings?.m2?.profileBindings?.length === 24, 'W07 Mk XII must retain all 24 damage profile bindings.');
  invariant(facts.actionBindings?.m1?.actionEdges?.length === 58, 'W07 Mk IV must retain all 58 declared action edges.');
  invariant(facts.actionBindings?.m2?.actionEdges?.length === 32, 'W07 Mk XII must retain all 32 declared action edges.');
  invariant(facts.localStickyDefinitions?.length === EXPECTED_LOCAL_STICKY, 'W07 must retain all six mark-bound sticky definitions.');
  const stickyKeys = facts.localStickyDefinitions.map((item) => item.markId + ':' + item.templateKey).sort();
  invariant(stableJson(stickyKeys) === stableJson([...STICKY_KEYS].sort()), 'W07 local sticky definition identities differ from the fixed source.');
  invariant(facts.explicitEmptyTables?.length === EXPECTED_EMPTY_TABLES, 'W07 must retain all seven explicitly empty source tables.');
  invariant(facts.explicitEmptyTables.every((item) => item.rawValue === '{}'), 'W07 empty table declarations must preserve the raw empty table token.');
  const aliases = getReachableAliasKeys(facts);
  invariant(facts.weaponStatFacts?.m1?.rows?.length > 0 && facts.weaponStatFacts?.m2?.rows?.length > 0, 'W07 weapon stat source rows are missing.');
  invariant(facts.traitTemplateFacts?.length === 6, 'W07 must retain the six selected trait template facts.');
  invariant(facts.outputTableFacts?.length === 5, 'W07 must retain the five selected output tables.');
  return { valid: true, aliasKeys: [...aliases.reached].sort(), aliasRowCount: [...aliases.rowsByKey.values()].reduce((sum, rows) => sum + rows.length, 0) };
}

async function readInputs(root = ROOT) {
  const facts = JSON.parse(await readFile(path.join(root, 'content/imports/w07/weapon-source-facts.json'), 'utf8'));
  const snapshot = JSON.parse(await readFile(path.join(root, 'content/imports/w07/source-code-snapshot.json'), 'utf8'));
  const current = JSON.parse(await readFile(path.join(root, 'content/authoring/v2/w06-skills-blessings.json'), 'utf8'));
  const w01 = JSON.parse(await readFile(path.join(root, 'content/authoring/w01-real-representative-candidate.json'), 'utf8'));
  validateCuratedWeaponFacts(facts, snapshot);
  return { facts, snapshot, current, w01 };
}


function canonicalCoverage(status = 'complete', missing = []) {
  return { status, missing };
}
function sourceIdsForPath(pathname, snapshot) {
  return snapshot.weaponSourceIdsByPath[pathname] ?? (APPROVED_ADDITIONAL_SOURCE_IDS[pathname] ? [APPROVED_ADDITIONAL_SOURCE_IDS[pathname]] : undefined);
}
function sourceLinkForPath(pathname, state, preferredId) {
  const existing = preferredId && state.sourcesById.get(preferredId);
  if (existing) return link(existing.sourceId);
  const old = state.sourcesByPath.get(pathname)?.find((source) => source.commit === CURRENT_CODE_COMMIT);
  if (old) return link(old.sourceId);
  const ids = sourceIdsForPath(pathname, state.snapshot);
  invariant(ids?.length, 'Selected source path has no stable source ID: ' + pathname);
  const source = ids.map((id) => state.sourcesById.get(id)).find(Boolean);
  invariant(source, 'Selected source path has no declared source record: ' + pathname);
  return link(source.sourceId);
}
function makeLocator(row, state, preferredId) {
  invariant(row?.sourcePath && row.line && row.fieldPath, 'Curated row lacks an exact source locator.');
  return {
    sourceRef: sourceLinkForPath(row.sourcePath, state, preferredId),
    path: row.sourcePath,
    line: row.line,
    fieldPath: row.fieldPath
  };
}
function rawSourceRow(row, state, preferredId) {
  return { rawValue: row.rawValue, sourceLocator: makeLocator(row, state, preferredId) };
}
function dataRecord(recordId, kind, payload, sourceRefs, extra = {}) {
  invariant(sourceRefs.length > 0, 'W07 source record needs at least one source reference: ' + recordId);
  return {
    recordId,
    owner: 'source',
    kind,
    gameReleaseId: RELEASE_ID,
    payload,
    sourceRefs: [...new Map(sourceRefs.map((item) => [item.sourceId, item])).values()],
    dataCoverage: canonicalCoverage(),
    reviewState: 'pending',
    ...extra
  };
}
function mapW01Reference(value) {
  if (typeof value === 'string') return ref(value);
  return structuredClone(value);
}
function mapW01Record(record, sourcesById, attackRefsByWeapon = new Map()) {
  const sourceRefs = (record.sourceRefs ?? []).map((sourceId) => {
    invariant(sourcesById.has(sourceId), 'W01 closure references an undeclared source: ' + sourceId);
    return link(sourceId);
  });
  const base = {
    recordId: record.recordId,
    owner: 'source',
    kind: record.kind,
    gameReleaseId: RELEASE_ID,
    sourceRefs,
    reviewState: 'pending'
  };
  if (record.kind === 'claim') {
    const context = structuredClone(record.payload.context ?? {});
    for (const key of ['weaponRef', 'attackProfileRef', 'targetProfileRef', 'armorClassRef', 'variantRef', 'damageProfileRef']) {
      if (context[key]) context[key] = mapW01Reference(context[key]);
    }
    for (const key of ['talentRefs', 'blessingVariantRefs', 'perkRefs', 'modifierRuleRefs']) {
      if (Array.isArray(context[key])) context[key] = context[key].map(mapW01Reference);
    }
    return {
      ...base,
      payload: {
        targetRef: mapW01Reference(record.payload.targetRef),
        property: record.payload.property,
        value: structuredClone(record.payload.value),
        context,
        basis: record.payload.basis,
        ...(record.payload.displayValue ? { displayValue: structuredClone(record.payload.displayValue) } : {}),
        ...(record.payload.displayFormat ? { displayFormat: record.payload.displayFormat } : {}),
        evidenceRefs: (record.payload.evidenceRefs ?? []).map(mapW01Reference)
      },
      dataCoverage: structuredClone(record.dataCoverage ?? canonicalCoverage()),
      reviewTargets: [
        { fieldPath: '/payload/targetRef', dimension: 'identity' },
        { fieldPath: '/payload/value', dimension: 'technical' },
        { fieldPath: '/payload/context', dimension: 'context' },
        { fieldPath: '/payload/basis', dimension: 'technical' },
        { fieldPath: '/payload/evidenceRefs', dimension: 'evidence' }
      ]
    };
  }
  if (record.kind === 'evidence') {
    const sourceId = typeof record.payload.sourceRef === 'string' ? record.payload.sourceRef : record.payload.sourceRef?.sourceId;
    invariant(sourcesById.has(sourceId), 'W01 evidence references an undeclared source: ' + sourceId);
    return {
      ...base,
      payload: { evidenceKind: 'code-observed', sourceRef: link(sourceId), safeSummary: record.payload.safeSummary },
      dataCoverage: structuredClone(record.dataCoverage ?? canonicalCoverage()),
      reviewTargets: [{ fieldPath: '/payload', dimension: 'evidence' }]
    };
  }
  if (record.kind === 'weapon') {
    const payload = structuredClone(record.payload);
    payload.statRefs = (payload.statRefs ?? []).map(mapW01Reference);
    payload.claimRefs = (payload.claimRefs ?? []).map(mapW01Reference);
    payload.attackProfileRefs = attackRefsByWeapon.get(record.recordId) ?? [];
    payload.displayedAttacks = (payload.displayedAttacks ?? []).map((item) => ({
      ...structuredClone(item),
      sourceRefs: (item.sourceRefs ?? []).map((sourceId) => link(sourceId)),
      evidenceRefs: (item.evidenceRefs ?? []).map(mapW01Reference)
    }));
    const coverage = structuredClone(payload.dataCoverage ?? record.dataCoverage ?? canonicalCoverage());
    coverage.missing = (coverage.missing ?? []).map((item) => ({
      ...item,
      field: item.field.startsWith('/') ? item.field : '/payload/actionProfileResolution'
    }));
    delete payload.dataCoverage;
    return {
      ...base,
      payload,
      dataCoverage: coverage,
      reviewTargets: [
        { fieldPath: '/payload/templateKey', dimension: 'identity' },
        { fieldPath: '/payload/statRefs', dimension: 'technical' },
        { fieldPath: '/payload/claimRefs', dimension: 'evidence' },
        { fieldPath: '/payload/attackProfileRefs', dimension: 'technical' },
        { fieldPath: '/payload/displayedAttacks', dimension: 'evidence' }
      ]
    };
  }
  if (record.kind === 'stat-definition') {
    const payload = structuredClone(record.payload);
    payload.curveRef = mapW01Reference(payload.curveRef);
    payload.claimRefs = (payload.claimRefs ?? []).map(mapW01Reference);
    payload.panelInputRange ??= { status: 'not-applicable' };
    if (payload.theoreticalInputRange?.status === 'known' && typeof payload.theoreticalInputRange.inclusive === 'boolean') {
      payload.theoreticalInputRange.inclusive = { min: payload.theoreticalInputRange.inclusive, max: payload.theoreticalInputRange.inclusive };
    }
    return { ...base, payload, dataCoverage: structuredClone(record.dataCoverage ?? canonicalCoverage()), reviewTargets: [{ fieldPath: '/payload', dimension: 'technical' }] };
  }
  if (record.kind === 'stat-curve') {
    const payload = structuredClone(record.payload);
    payload.knots = payload.knots.map((knot) => ({
      input: knot.input ?? knot.x,
      output: knot.output ?? knot.y
    }));
    return { ...base, payload, dataCoverage: structuredClone(record.dataCoverage ?? canonicalCoverage()), reviewTargets: [{ fieldPath: '/payload', dimension: 'technical' }] };
  }
  throw new Error('Unsupported record kind in W07 W01 closure: ' + record.kind);
}

function profileId(profileKey) {
  return 'darktide:damage-profile:chainaxe-p1:' + profileKey;
}
function tokenValue(rawValue) {
  return String(rawValue).replace(/^["']|["']$/g, '');
}
function keyFromProfileReference(rawValue, aliasKeys) {
  const value = tokenValue(rawValue);
  if (aliasKeys.has(value)) return value;
  const clone = value.match(/^table\.clone\(([A-Za-z0-9_]+)\)$/);
  if (clone && aliasKeys.has(clone[1])) return clone[1];
  return undefined;
}
function rowsToSourceRefs(rows, state) {
  return rows.map((row) => sourceLinkForPath(row.sourcePath, state));
}
function makeEmptyTable(item, state, tableKey = item.fieldPath) {
  return {
    tableKey,
    state: 'empty',
    rawValue: '{}',
    sourceLocator: makeLocator(item, state)
  };
}
function rangeKnown(decimal, unit) {
  return { status: 'known', decimal: String(decimal), unit };
}
function tableUnit(key) {
  if (/(?:cleave)$/.test(key)) return { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
  return 'ratio';
}
function mapAliasTable(key, rows, state) {
  const first = rows[0];
  const aliasKeys = new Set(state.aliasState.rowsByKey.keys());
  return {
    tableKey: key,
    quantity: key,
    unit: tableUnit(key),
    sourceLocator: makeLocator(first, state),
    orderedValues: rows.map((row, index) => {
      const tableRefKey = keyFromProfileReference(row.rawValue, aliasKeys);
      return {
        ordinal: index + 1,
        rawValue: row.rawValue,
        ...(isDecimal(row.rawValue) ? { decimal: row.rawValue } : tableRefKey ? { tableRefKey } : {}),
        sourceLocator: makeLocator(row, state)
      };
    })
  };
}
function numericTableGroups(rows) {
  const groups = new Map();
  for (const row of rows) {
    const match = row.fieldPath.match(/^(.*)\.(\d+)$/);
    if (!match || !isDecimal(row.rawValue)) continue;
    if (!/(?:power_distribution\.attack|power_distribution\.impact|impact|armor_damage_modifier\.impact\.\[armor_types\.super_armor\]|boost_curve_multiplier_finesse|power_level_multiplier|stagger_duration_modifier)$/.test(match[1])) continue;
    const group = groups.get(match[1]) ?? [];
    group.push({ ...row, ordinal: Number(match[2]) });
    groups.set(match[1], group);
  }
  return groups;
}
function mapNumericProfileTable(quantity, rows, state) {
  const first = rows[0];
  const unit = /power_distribution\.attack$/.test(quantity) ? 'attack-power-point'
    : /(?:power_distribution\.impact|\.impact)$/.test(quantity) ? 'impact'
      : /(?:armor_damage_modifier\.impact\.\[armor_types\.super_armor\]|boost_curve_multiplier_finesse|power_level_multiplier)$/.test(quantity) ? 'ratio'
        : /stagger_duration_modifier$/.test(quantity) ? { status: 'unknown', reasonCode: 'NOT_VERIFIED' }
          : { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
  return {
    tableKey: quantity,
    quantity,
    unit,
    sourceLocator: makeLocator(first, state),
    orderedValues: rows.sort((a, b) => a.ordinal - b.ordinal).map((row) => ({
      ordinal: row.ordinal,
      rawValue: row.rawValue,
      decimal: row.rawValue,
      sourceLocator: makeLocator(row, state)
    }))
  };
}
function profileDependencyTables(profile, aliasState, state) {
  const aliasKeys = new Set(aliasState.rowsByKey.keys());
  const reachable = new Set();
  const queue = [];
  for (const row of profile.rows) {
    const key = keyFromProfileReference(row.rawValue, aliasKeys);
    if (key) queue.push(key);
  }
  while (queue.length) {
    const key = queue.pop();
    if (reachable.has(key)) continue;
    reachable.add(key);
    const rows = aliasState.rowsByKey.get(key);
    invariant(rows?.length, 'Missing selected alias table: ' + key);
    for (const row of rows) {
      const child = keyFromProfileReference(row.rawValue, aliasKeys);
      if (child && !reachable.has(child)) queue.push(child);
    }
  }
  const tables = [...reachable].sort().map((key) => mapAliasTable(key, aliasState.rowsByKey.get(key), state));
  const numericGroups = numericTableGroups(profile.rows);
  for (const [quantity, rows] of numericGroups) tables.push(mapNumericProfileTable(quantity, rows, state));
  for (const row of profile.rows) {
    const raw = tokenValue(row.rawValue);
    const match = raw.match(/^(?:DamageProfileTemplates|damage_profiles)\.([A-Za-z0-9_]+)$/);
    if (match && state.profileIds.has(match[1])) {
      tables.push({
        tableKey: row.fieldPath,
        quantity: row.fieldPath,
        unit: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
        sourceLocator: makeLocator(row, state),
        orderedValues: [{ ordinal: 1, rawValue: row.rawValue, tableRefKey: match[1], sourceLocator: makeLocator(row, state) }]
      });
    }
  }
  for (const row of profile.rows) {
    if (tokenValue(row.rawValue) !== 'PowerLevelSettings.boost_curves.default') continue;
    const sourceTable = state.facts.outputTableFacts.find((item) => item.tableKey === 'power_level_settings.boost_curves.default');
    invariant(sourceTable?.rows?.length === 5, 'Referenced default boost curve must retain its five pinned source points.');
    tables.push({
      tableKey: 'PowerLevelSettings.boost_curves.default',
      quantity: 'PowerLevelSettings.boost_curves.default',
      unit: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      sourceLocator: makeLocator(sourceTable.rows[0], state),
      orderedValues: sourceTable.rows.map((point, index) => ({
        ordinal: index + 1,
        rawValue: point.rawValue,
        ...(isDecimal(point.rawValue) ? { decimal: point.rawValue } : {}),
        sourceLocator: makeLocator(point, state)
      }))
    });
  }
  return { tables, reachable };
}
function makeProfileRecords(facts, state) {
  const records = [];
  for (const profile of facts.profileDefinitions) {
    const first = profile.rows[0];
    const rootPath = first.fieldPath.split('.').slice(0, 2).join('.');
    const parentRow = profile.rows.find((row) => /\.parent_template_name$/.test(row.fieldPath));
    const parentKey = parentRow ? tokenValue(parentRow.rawValue) : undefined;
    const aliasState = state.aliasState;
    const dependency = profileDependencyTables(profile, aliasState, state);
    const targetOrderByKey = new Map();
    for (const row of profile.rows) {
      const match = row.fieldPath.match(/\.targets\.(\d+)\./);
      if (!match) continue;
      const ordinal = Number(match[1]);
      if (!targetOrderByKey.has(String(ordinal))) targetOrderByKey.set(String(ordinal), {
        targetKey: String(ordinal),
        sourceOrdinal: ordinal,
        sourceLocator: makeLocator(row, state)
      });
    }
    const emptyTables = facts.explicitEmptyTables
      .filter((item) => !item.markId && item.fieldPath.includes('.' + profile.profileKey + '.') || (!item.markId && profile.profileKey === item.fieldPath.match(/damage_templates\.([^.]+)/)?.[1]))
      .map((item) => makeEmptyTable(item, state));
    const rowRefs = rowsToSourceRefs(profile.rows, state);
    const rawSourceDefinition = {
      sourceRef: makeLocator(first, state).sourceRef,
      path: first.sourcePath,
      line: first.line,
      fieldPath: first.fieldPath.split('.').slice(0, 2).join('.'),
      leaves: profile.rows.map((row) => ({
        line: row.line,
        fieldPath: row.fieldPath,
        rawValue: row.rawValue,
        sourceRef: sourceLinkForPath(row.sourcePath, state),
        path: row.sourcePath
      })),
      ...(parentKey && state.profileIds.has(parentKey) ? { parentProfileRef: ref(profileId(parentKey)) } : {}),
      tables: dependency.tables,
      targetOrder: [...targetOrderByKey.values()].sort((a, b) => a.sourceOrdinal - b.sourceOrdinal),
      ...(emptyTables.length ? { emptyTables } : {})
    };
    records.push(dataRecord(profileId(profile.profileKey), 'damage-profile', {
      profileKey: profile.profileKey,
      rawSourceDefinition
    }, [...rowRefs, ...dependency.tables.flatMap((table) => [table.sourceLocator.sourceRef])], {
      dataCoverage: canonicalCoverage('partial', [
        { field: '/payload/rawSourceDefinition.finalDamage', reasonCode: 'NOT_IMPORTED' },
        { field: '/payload/rawSourceDefinition.runtimeOverrideResolution', reasonCode: 'NOT_IMPORTED' }
      ]),
      reviewTargets: [
        { fieldPath: '/payload/profileKey', dimension: 'identity' },
        { fieldPath: '/payload/rawSourceDefinition/leaves', dimension: 'technical' },
        { fieldPath: '/payload/rawSourceDefinition/tables', dimension: 'technical' },
        { fieldPath: '/payload/rawSourceDefinition/targetOrder', dimension: 'technical' }
      ]
    }));
  }
  return records;
}


function claimProfileKey(claim) {
  return claim.payload.context?.profile;
}
function profileBindingAction(row) {
  const match = row.fieldPath.match(/^weapon_template\.actions\.(action_[A-Za-z0-9_]+)\.(.+)$/);
  return match ? { action: match[1], branchField: match[2] } : undefined;
}
function branchFromField(fieldPath) {
  if (fieldPath.endsWith('damage_profile_on_abort')) return 'abort';
  if (fieldPath.endsWith('damage_profile_special_active')) return 'special-active';
  if (fieldPath.endsWith('inner_damage_profile')) return 'inner';
  if (fieldPath.endsWith('outer_damage_profile')) return 'outer';
  if (fieldPath.endsWith('damage_profile')) return 'normal';
  return undefined;
}
function actionMode(action) {
  if (action === 'action_push') return 'push';
  if (action.includes('light')) return 'light';
  if (action.includes('heavy')) return 'heavy';
  return 'special';
}
function mapContinuations(edges, state) {
  return edges.map((edge) => {
    const sourceLocator = makeLocator({ line: edge.line, fieldPath: edge.fieldPath, sourcePath: state.actionPath }, state);
    const inputKey = edge.fieldPath.split('.allowed_chain_actions.')[1]?.split('.action_name')[0];
    invariant(inputKey, 'Action continuation lacks a declared input key: ' + edge.fieldPath);
    const conditions = (edge.declaredContext ?? []).map((condition) => ({
      fieldPath: condition.fieldPath,
      rawValue: condition.rawValue,
      sourceLocator: makeLocator({ line: condition.line, fieldPath: condition.fieldPath, sourcePath: state.actionPath }, state)
    }));
    return { fromAction: edge.fromAction, inputKey, toAction: edge.actionName, sourceLocator, conditions };
  });
}
function mapStickyDefinition(item, facts, state) {
  const rows = item.rows;
  const find = (suffix) => rows.find((row) => row.fieldPath === item.templateKey + '.' + suffix);
  const duration = find('duration');
  const instances = find('damage.instances');
  const damageType = find('damage.damage_type');
  const startModifier = find('movement_curve.start_modifier');
  invariant(duration && instances && damageType && startModifier, 'Sticky definition is missing a required known mechanic: ' + item.markId + ':' + item.templateKey);
  const flagNames = new Set(['always_sticky', 'disallow_chain_actions', 'disallow_dodging', 'disable_vertical_force_view']);
  const flags = rows.filter((row) => {
    const suffix = row.fieldPath.slice((item.templateKey + '.').length);
    return flagNames.has(suffix);
  }).map((row) => ({
    key: row.fieldPath.slice((item.templateKey + '.').length),
    value: row.rawValue === 'nil' ? { status: 'explicit-nil' } : row.rawValue === 'true' ? true : row.rawValue === 'false' ? false : (() => { throw new Error('Sticky flag is not a literal boolean or nil: ' + row.fieldPath); })(),
    sourceLocator: makeLocator(row, state)
  }));
  const profileRefs = rows.filter((row) => /\.damage\.(?:damage_profile|last_damage_profile|dodge_damage_profile)$/.test(row.fieldPath))
    .map((row) => {
      const match = tokenValue(row.rawValue).match(/(?:DamageProfileTemplates|damage_profiles)\.([A-Za-z0-9_]+)/);
      invariant(match && state.profileIds.has(match[1]), 'Sticky damage profile has no selected record: ' + row.rawValue);
      return ref(profileId(match[1]));
    });
  const pointRows = new Map();
  for (const row of rows) {
    const match = row.fieldPath.match(/\.movement_curve\.(\d+)\.(t|modifier)$/);
    if (!match) continue;
    const point = pointRows.get(Number(match[1])) ?? {};
    point[match[2]] = row;
    pointRows.set(Number(match[1]), point);
  }
  const points = [...pointRows.entries()].sort((a, b) => a[0] - b[0]).map(([ordinal, point]) => {
    invariant(point.t && point.modifier, 'Sticky movement curve point is incomplete: ' + item.templateKey + ':' + ordinal);
    return {
      ordinal,
      t: rangeKnown(point.t.rawValue, 's'),
      modifier: rangeKnown(point.modifier.rawValue, 'ratio'),
      sourceLocator: makeLocator(point.t, state)
    };
  });
  invariant(points.length > 0, 'Sticky movement curve source points are missing: ' + item.templateKey);
  const exclusionRows = rows.filter((row) => /\.disallowed_(?:hit_zones|armor_types)$/.test(row.fieldPath));
  const exclusions = exclusionRows.flatMap((row) => {
    const key = tokenValue(row.rawValue);
    return facts.explicitEmptyTables
      .filter((table) => table.markId === item.markId && table.fieldPath === key)
      .map((table) => makeEmptyTable(table, state));
  });
  return {
    templateKey: item.templateKey,
    duration: rangeKnown(duration.rawValue, 's'),
    instances: rangeKnown(instances.rawValue, 'instance-count'),
    flags,
    damage: { profileRefs, damageTypeRawValue: damageType.rawValue },
    movementCurve: {
      startModifier: rangeKnown(startModifier.rawValue, 'ratio'),
      points
    },
    exclusions,
    rawRows: rows.map((row) => rawSourceRow(row, state))
  };
}
function makeStickyBindings(mark, state) {
  const result = [];
  const definitions = new Map(state.facts.localStickyDefinitions
    .filter((item) => item.markId === state.markIdByKey[mark])
    .map((item) => [item.templateKey, item]));
  for (const item of state.facts.actionBindings[mark].stickyBindings) {
    const parts = item.fieldPath.match(/^weapon_template\.actions\.(action_[A-Za-z0-9_]+)\.(.+)$/);
    if (!parts) continue;
    if (item.tableKey === 'nil') {
      result.push({
        action: parts[1],
        fieldPath: item.fieldPath,
        binding: {
          state: 'explicit-nil',
          fieldPath: item.fieldPath,
          rawValue: 'nil',
          sourceLocator: makeLocator({ line: item.line, fieldPath: item.fieldPath, sourcePath: state.actionPath }, state)
        }
      });
      continue;
    }
    const definition = definitions.get(item.tableKey);
    invariant(definition, 'Action references a missing local sticky definition: ' + state.markIdByKey[mark] + ':' + item.tableKey);
    result.push({
      action: parts[1],
      fieldPath: item.fieldPath,
      binding: {
        state: 'defined',
        fieldPath: item.fieldPath,
        tableKey: item.tableKey,
        sourceLocator: makeLocator({ line: item.line, fieldPath: item.fieldPath, sourcePath: state.actionPath }, state),
        definition: mapStickyDefinition(definition, state.facts, state)
      }
    });
  }
  return result;
}
function mapSourceBindings(rows, state) {
  return rows.map((row) => {
    const profileKey = row.profileKey;
    invariant(typeof profileKey === 'string' && state.profileIds.has(profileKey), 'Action binding points outside the selected damage-profile closure: ' + profileKey);
    const action = profileBindingAction(row);
    invariant(action, 'Action binding does not identify an action: ' + row.fieldPath);
    const branch = branchFromField(action.branchField);
    invariant(branch, 'Action damage branch is unrecognized: ' + row.fieldPath);
    return {
      action: action.action,
      branch,
      profileKey,
      profileRef: ref(profileId(profileKey)),
      rawValue: profileKey,
      sourceLocator: makeLocator({ line: row.line, fieldPath: row.fieldPath, sourcePath: state.actionPath }, state)
    };
  });
}
function makeAttackProfiles(facts, mark, weaponRecord, state) {
  const actionData = facts.actionBindings[mark];
  const mappedRows = mapSourceBindings(actionData.profileBindings.filter((row) => row.fieldPath.startsWith('weapon_template.actions.')), { ...state, actionPath: actionData.path });
  const edgeRows = mapContinuations(actionData.actionEdges, { ...state, actionPath: actionData.path });
  const stickyBindings = makeStickyBindings(mark, { ...state, actionPath: actionData.path, markIdByKey: facts.weaponTemplateKeys });
  const grouped = new Map();
  for (const row of mappedRows) {
    const list = grouped.get(row.action) ?? [];
    list.push(row);
    grouped.set(row.action, list);
  }
  const byActionEdges = new Map();
  for (const edge of edgeRows) {
    const list = byActionEdges.get(edge.fromAction) ?? [];
    list.push(edge);
    byActionEdges.set(edge.fromAction, list);
  }
  const byActionSticky = new Map();
  for (const item of stickyBindings) {
    const list = byActionSticky.get(item.action) ?? [];
    list.push(item.binding);
    byActionSticky.set(item.action, list);
  }
  const profiles = [];
  for (const [action, rows] of grouped) {
    const mode = actionMode(action);
    const damageProfileRefs = [...new Map(rows.map((row) => [row.profileRef.recordId, row.profileRef])).values()];
    const sourceBindings = rows.map(({ action: _action, profileKey: _profileKey, ...binding }) => binding);
    const recordId = 'darktide:attack-profile:chainaxe:p1:' + weaponRecord.payload.markId + ':' + action;
    profiles.push(dataRecord(recordId, 'attack-profile', {
      familyId: weaponRecord.payload.familyId,
      markId: weaponRecord.payload.markId,
      templateKey: weaponRecord.payload.templateKey,
      action,
      mode,
      weaponRef: ref(weaponRecord.recordId),
      damageProfileRefs,
      targetProfileRefs: [],
      contexts: [{
        weaponRef: ref(weaponRecord.recordId),
        templateKey: weaponRecord.payload.templateKey,
        markKey: weaponRecord.payload.markId,
        action,
        mode
      }],
      sourceBindings,
      continuations: byActionEdges.get(action) ?? [],
      stickyBindings: byActionSticky.get(action) ?? []
    }, [
      link(state.weaponSourceIdByMark.get(weaponRecord.payload.markId)),
      ...rows.map((row) => row.sourceLocator.sourceRef),
      ...(byActionEdges.get(action) ?? []).map((edge) => edge.sourceLocator.sourceRef)
    ], {
      dataCoverage: canonicalCoverage('partial', [
        { field: '/payload/continuations.conditionFunctionExecution', reasonCode: 'NOT_IMPORTED' },
        { field: '/payload/targetProfileRefs', reasonCode: 'NOT_IMPORTED' }
      ]),
      reviewTargets: [
        { fieldPath: '/payload/templateKey', dimension: 'identity' },
        { fieldPath: '/payload/action', dimension: 'identity' },
        { fieldPath: '/payload/mode', dimension: 'context' },
        { fieldPath: '/payload/sourceBindings', dimension: 'technical' },
        { fieldPath: '/payload/continuations', dimension: 'technical' },
        { fieldPath: '/payload/stickyBindings', dimension: 'technical' }
      ]
    }));
  }
  return { records: profiles, edgeRows, stickyBindings };
}
function mapWeaponEmptyTables(facts, mark, state) {
  const markId = state.markIdByKey[mark];
  return facts.explicitEmptyTables
    .filter((item) => item.markId === markId)
    .map((item) => makeEmptyTable(item, state));
}
function mapWeaponSourceRows(facts, mark, state) {
  return facts.weaponStatFacts[mark].rows.map((row) => rawSourceRow(row, state));
}
function tablePropertyName(tableKey, row) {
  const suffix = row.fieldPath.startsWith(tableKey + '.') ? row.fieldPath.slice(tableKey.length + 1) : row.fieldPath;
  const parts = suffix.split('.');
  if (/^(?:lerp_basic|lerp_perfect|\d+)$/.test(parts.at(-1))) parts.pop();
  return parts.join('.') || 'value';
}
function unitForOutputProperty(property) {
  if (property === 'stamina_modifier' || property === 'push_cost' || property === 'block_cost_default'
    || property === 'block_cost_default.inner' || property === 'block_cost_default.outer') return 'stamina-point';
  if (property === 'sprint_cost_per_second') return 'stamina-point-per-second';
  if (property === 'dodge_count' || property === 'diminishing_return_start') return 'dodge-count';
  if (property === 'distance_scale' || property === 'speed_modifier' || property === 'sprint_speed_mod') return 'ratio';
  return { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
}
function mapOutputTable(fact, statKey, state) {
  const root = fact.tableKey + '.';
  const groups = new Map();
  for (const row of fact.rows) {
    const suffix = row.fieldPath.startsWith(root) ? row.fieldPath.slice(root.length) : row.fieldPath;
    const parts = suffix.split('.');
    const property = tablePropertyName(fact.tableKey, row);
    const marker = parts.at(-1);
    const key = /^(?:lerp_basic|lerp_perfect|\d+)$/.test(marker) ? marker : 'value';
    const list = groups.get(property) ?? [];
    list.push({ ...row, key });
    groups.set(property, list);
  }
  const first = fact.rows[0];
  return {
    statKey,
    tableKey: fact.tableKey,
    sourceLocator: makeLocator(first, state),
    properties: [...groups.entries()].map(([property, rows]) => ({
      property,
      unit: unitForOutputProperty(property),
      sourceLocator: makeLocator(rows[0], state),
      orderedValues: rows.map((row, index) => ({
        key: row.key && !/^\d+$/.test(row.key) ? row.key : String(index + 1),
        rawValue: row.rawValue,
        ...(isDecimal(row.rawValue) ? { decimal: row.rawValue } : {}),
        line: row.line,
        fieldPath: row.fieldPath
      }))
    }))
  };
}
function rowTraitTemplate(row) {
  const match = row.rawValue.match(/([A-Za-z0-9_]+_trait_templates\.[A-Za-z0-9_]+)/);
  return match?.[1];
}
function traitRangeGroup(template, property) {
  const last = String(property ?? '').split('.').at(-1);
  const lastTwo = String(property ?? '').split('.').slice(-2).join('.');
  const byProperty = {
    'stamina_trait_templates.thunderhammer_p1_m1_defence_stat': {
      sprint_cost_per_second: 1,
      'block_cost_default.inner': 2,
      'block_cost_default.outer': 3,
      push_cost: 4
    },
    'dodge_trait_templates.default_dodge_stat': {
      distance_scale: 1,
      diminishing_return_distance_modifier: 2,
      diminishing_return_start: 3,
      diminishing_return_limit: 4,
      speed_modifier: 5
    },
    'sprint_trait_templates.default_sprint_stat': {
      sprint_speed_mod: 1,
      sprint_forward_acceleration: 2
    },
    'movement_curve_modifier_trait_templates.default_movement_curve_modifier_stat': {
      modifier: 1
    }
  };
  return byProperty[template]?.[lastTwo] ?? byProperty[template]?.[last];
}
function traitRangeRows(template, facts, property) {
  const source = facts.traitTemplateFacts.find((item) => item.templateKey === template);
  if (!source) return {};
  const group = traitRangeGroup(template, property);
  const prefix = group === undefined ? template + '.' : template + '.' + group + '.';
  const min = source.rows.find((row) => row.fieldPath.startsWith(prefix) && row.fieldPath.endsWith('.min'));
  const max = source.rows.find((row) => row.fieldPath.startsWith(prefix) && row.fieldPath.endsWith('.max'));
  return { source, min, max };
}
function traitRange(template, facts, property) {
  if (template === 'stamina_trait_templates.thunderhammer_p1_m1_defence_stat'
    && String(property ?? '').split('.').at(-1) === 'stamina_modifier') return { status: 'not-applicable' };
  const { min, max } = traitRangeRows(template, facts, property);
  if (!min || !max || !isDecimal(min.rawValue) || !isDecimal(max.rawValue)) return { status: 'unknown', reasonCode: 'NOT_VERIFIED' };
  return { status: 'known', min: min.rawValue, max: max.rawValue, unit: 'ratio' };
}
function profileKeysForAction(mark, action) {
  return new Set();
}
function makeWeaponStatBindings(w01Records, weaponRecord, facts, mark, state) {
  const claims = w01Records.filter((record) => record.kind === 'claim' && record.payload.context?.weaponRef === weaponRecord.recordId);
  const statFact = facts.weaponStatFacts[mark];
  const bindingsByStat = new Map();
  for (const row of statFact.rows) {
    const actionMatch = row.fieldPath.match(/^weapon_template\.base_stats\.([^.]+)\.damage\.(action_[^.]+)(?:\.overrides\.([^.]+))?\.(\d+)$/);
    const baseMatch = row.fieldPath.match(/^weapon_template\.base_stats\.([^.]+)\.(stamina|dodge|sprint|movement_curve_modifier)\.base\.1$/);
    if (!actionMatch && !baseMatch) continue;
    const statKey = (actionMatch ?? baseMatch)[1];
    const action = actionMatch?.[2];
    const overrideProfile = actionMatch?.[3];
    const template = rowTraitTemplate(row);
    if (!template) continue;
    const traitFact = facts.traitTemplateFacts.find((item) => item.templateKey === template);
    if (!traitFact) continue;
    const list = bindingsByStat.get(statKey) ?? [];
    const mode = action ? actionMode(action) : undefined;
    if (baseMatch) {
      const tableRoot = template.startsWith('stamina_trait_templates.') ? 'weapon_stamina_templates.'
        : template.startsWith('dodge_trait_templates.') ? 'weapon_dodge_templates.'
          : template.startsWith('sprint_trait_templates.') ? 'weapon_sprint_templates.'
            : undefined;
      const outputTable = tableRoot && facts.outputTableFacts.find((item) => item.tableKey.startsWith(tableRoot));
      if (!outputTable) {
        const property = row.fieldPath.replace(/^weapon_template\.base_stats\.[^.]+\./, '');
        const rangeRows = traitRangeRows(template, facts, property);
        list.push({
          property,
          weaponLocator: makeLocator(row, state),
          traitTemplateKey: template,
          traitLocator: makeLocator(rangeRows.min ?? traitFact.rows[0], state),
          traitParameterRange: traitRange(template, facts, property)
        });
      } else {
        const propertyRows = new Map();
        for (const outputRow of outputTable.rows) {
          const property = tablePropertyName(outputTable.tableKey, outputRow);
          const rows = propertyRows.get(property) ?? [];
          rows.push(outputRow);
          propertyRows.set(property, rows);
        }
        for (const [outputProperty, outputRows] of propertyRows) {
          const property = outputTable.tableKey + '.' + outputProperty;
          const propertyClaims = claims.filter((claim) =>
            claim.payload.context?.weaponStat === statKey && claim.payload.property === property);
          const groups = new Map();
          for (const claim of propertyClaims) {
            const ctx = claim.payload.context ?? {};
            const key = [ctx.profile ?? '', ctx.armorClass ?? '', ctx.attackMode ?? ''].join('|');
            const group = groups.get(key) ?? { claim, claims: [] };
            group.claims.push(claim);
            groups.set(key, group);
          }
          const rangeRows = traitRangeRows(template, facts, outputProperty);
          const emit = (group) => {
            const context = group?.claim.payload.context ?? {};
            list.push({
              property,
              ...(context.profile ? { profileKey: context.profile } : { profileKey: outputTable.tableKey.split('.').at(-1) }),
              ...(context.attackMode ? { mode: context.attackMode } : {}),
              ...(context.armorClass ? { armorClass: context.armorClass } : {}),
              weaponLocator: makeLocator(row, state),
              traitTemplateKey: template,
              traitLocator: makeLocator(rangeRows.min ?? traitFact.rows[0], state),
              traitParameterRange: traitRange(template, facts, property),
              ...(group?.claims.length ? { claimRefs: group.claims.map((claim) => ref(claim.recordId)) } : {})
            });
          };
          if (groups.size) for (const group of groups.values()) emit(group);
          else emit(undefined);
        }
      }
      bindingsByStat.set(statKey, list);
      continue;
    }
    const applicableClaims = claims.filter((claim) => {
      const ctx = claim.payload.context ?? {};
      return ctx.weaponStat === statKey && ctx.attackMode === mode &&
        (!overrideProfile || ctx.profile === overrideProfile) &&
        (ctx.profile === undefined || facts.profileKeys.includes(ctx.profile));
    });
    const properties = new Map();
    for (const claim of applicableClaims) {
      const ctx = claim.payload.context ?? {};
      const key = [claim.payload.property, ctx.profile ?? '', ctx.armorClass ?? '', ctx.attackMode ?? ''].join('|');
      const group = properties.get(key) ?? { claim, claims: [] };
      group.claims.push(claim);
      properties.set(key, group);
    }
    let emitted = false;
    for (const group of properties.values()) {
      const ctx = group.claim.payload.context ?? {};
      const profileMatch = overrideProfile
        ? ctx.profile === overrideProfile
        : facts.actionBindings[mark].profileBindings.some((binding) =>
          binding.fieldPath.startsWith('weapon_template.actions.' + action + '.') &&
          tokenValue(binding.rawValue ?? binding.profileKey).includes(ctx.profile ?? '__never__'));
      if (ctx.profile && !profileMatch) continue;
      list.push({
        property: group.claim.payload.property,
        action,
        mode,
        ...(ctx.profile ? { profileKey: ctx.profile } : {}),
        ...(ctx.armorClass ? { armorClass: ctx.armorClass } : {}),
        weaponLocator: makeLocator(row, state),
        traitTemplateKey: template,
        traitLocator: makeLocator(traitRangeRows(template, facts, group.claim.payload.property).min ?? traitFact.rows[0], state),
        traitParameterRange: traitRange(template, facts, group.claim.payload.property),
        claimRefs: group.claims.map((claim) => ref(claim.recordId))
      });
      emitted = true;
    }
    if (!emitted) {
      const property = row.fieldPath.replace(/^weapon_template\.base_stats\.[^.]+\./, '');
      list.push({
        property,
        action,
        mode,
        ...(overrideProfile ? { profileKey: overrideProfile } : {}),
        weaponLocator: makeLocator(row, state),
        traitTemplateKey: template,
        traitLocator: makeLocator(traitRangeRows(template, facts, property).min ?? traitFact.rows[0], state),
        traitParameterRange: traitRange(template, facts, property)
      });
    }
    bindingsByStat.set(statKey, list);
  }
  return [...bindingsByStat.entries()].map(([statKey, bindings]) => ({ statKey, bindings }));
}


function closureFromW01(w01) {
  const weapons = w01.records.filter((record) => record.kind === 'weapon' &&
    record.payload.familyId === 'chainaxe_p1' &&
    ['chainaxe_p1_m1', 'chainaxe_p1_m2'].includes(record.payload.markId));
  invariant(weapons.length === 2, 'W01 selected input must contain the two chainaxe P1 marks.');
  const weaponIds = new Set(weapons.map((record) => record.recordId));
  const claimIds = new Set(weapons.flatMap((record) => record.payload.claimRefs ?? []));
  const claims = w01.records.filter((record) => claimIds.has(record.recordId));
  invariant(claims.length === 76, 'W01 chainaxe closure must retain all 76 claims.');
  const evidenceIds = new Set([...claims.flatMap((record) => record.payload.evidenceRefs ?? []), ...weapons.flatMap((record) => (record.payload.displayedAttacks ?? []).flatMap((attack) => attack.evidenceRefs ?? []))]);
  const evidence = w01.records.filter((record) => evidenceIds.has(record.recordId));
  invariant(evidence.length === 12, 'W01 chainaxe closure must retain all 12 claim evidence records.');
  const statIds = new Set(weapons.flatMap((record) => record.payload.statRefs ?? []));
  const statDefinitions = w01.records.filter((record) => statIds.has(record.recordId));
  invariant(statDefinitions.length === 2, 'W01 chainaxe closure must retain both original stat definitions.');
  const curveIds = new Set(statDefinitions.map((record) => record.payload.curveRef));
  const curves = w01.records.filter((record) => curveIds.has(record.recordId));
  invariant(curves.length === 2, 'W01 chainaxe closure must retain both original stat curves.');
  const selectedIds = new Set([
    ...weaponIds, ...claimIds, ...evidenceIds, ...statIds, ...curveIds
  ]);
  const records = w01.records.filter((record) => selectedIds.has(record.recordId));
  invariant(records.length === 94, 'W01 selected chainaxe closure must contain exactly 94 records.');
  return { weapons, claims, evidence, statDefinitions, curves, records };
}
function makeSourceState(inputs, closure, mapperSha256) {
  const sourcesById = new Map();
  const sourcesByPath = new Map();
  const appendSource = (source, preserveFirst = true) => {
    const existing = sourcesById.get(source.sourceId);
    if (existing) {
      invariant(existing.path === source.path && existing.commit === source.commit &&
        existing.artifactSha256 === source.artifactSha256, 'Conflicting source identity in W06/W01 input: ' + source.sourceId);
      return;
    }
    sourcesById.set(source.sourceId, source);
    if (source.path) {
      const list = sourcesByPath.get(source.path) ?? [];
      if (!preserveFirst) list.push(source);
      else list.unshift(source);
      sourcesByPath.set(source.path, list);
    }
  };
  const snapshot = {
    snapshotId: CURRENT_SNAPSHOT_ID,
    commit: CURRENT_CODE_COMMIT,
    manifestSha256: inputs.snapshot.manifestSha256,
    contentSha256: inputs.snapshot.contentSha256
  };
  const mapperTool = {
    name: 'w07-weapons-contract-mapper',
    version: '1.0.0',
    sha256: mapperSha256
  };
  const codeFilesByPath = new Map(inputs.snapshot.files.map((file) => [file.path, file]));
  const release = inputs.current.gameReleases.find((item) => item.gameReleaseId === RELEASE_ID);
  invariant(release, 'Selected W07 game release is missing from the W06 contract.');
  for (const source of inputs.current.sourceRefs ?? []) appendSource(source, true);
  const closureSourceIds = new Set(closure.records.flatMap((record) => record.sourceRefs ?? []));
  for (const source of inputs.w01.sourceRefs ?? []) {
    if (!closureSourceIds.has(source.sourceId)) continue;
    const file = codeFilesByPath.get(source.path);
    invariant(file && source.commit === CURRENT_CODE_COMMIT, 'W01 closure source is not in the pinned W07 code snapshot: ' + source.sourceId);
    const existing = sourcesById.get(source.sourceId);
    if (existing) {
      invariant(existing.path === source.path && existing.commit === source.commit && existing.artifactSha256 === file.artifactSha256,
        'W01 stable source ID disagrees with the existing W06 raw code identity: ' + source.sourceId);
      continue;
    }
    const normalized = {
      ...source,
      gameReleaseId: RELEASE_ID,
      sourceKind: 'public-code',
      repository: source.repository ?? 'https://github.com/Aussiemon/Darktide-Source-Code',
      publicUrl: 'https://github.com/Aussiemon/Darktide-Source-Code/blob/' + CURRENT_CODE_COMMIT + '/' + file.path,
      commit: CURRENT_CODE_COMMIT,
      path: file.path,
      gameBuild: release.gameBuild,
      snapshot: structuredClone(snapshot),
      tool: mapperTool,
      artifactSha256: file.artifactSha256
    };
    delete normalized.fixtureOnly;
    appendSource(normalized, false);
  }
  for (const file of inputs.snapshot.files) {
    const existingForPath = sourcesByPath.get(file.path)?.find((source) =>
      source.commit === CURRENT_CODE_COMMIT && source.artifactSha256 === file.artifactSha256);
    if (existingForPath) continue;
    const ids = sourceIdsForPath(file.path, inputs.snapshot) ?? [];
    invariant(ids.length > 0, 'Selected W07 code path is missing its stable source identifier: ' + file.path);
    const sourceId = ids.find((id) => !sourcesById.has(id)) ?? ids[0];
    const source = {
      sourceId,
      gameReleaseId: RELEASE_ID,
      sourceKind: 'public-code',
      repository: 'https://github.com/Aussiemon/Darktide-Source-Code',
      publicUrl: 'https://github.com/Aussiemon/Darktide-Source-Code/blob/' + CURRENT_CODE_COMMIT + '/' + file.path,
      commit: CURRENT_CODE_COMMIT,
      path: file.path,
      gameBuild: release.gameBuild,
      snapshot: structuredClone(snapshot),
      tool: mapperTool,
      artifactSha256: file.artifactSha256,
      safeSummary: 'Pinned public-code Git blob ' + file.gitBlobSha1 + ' at ' + file.path + '. It supports the selected W07 source locators only; runtime behavior and final damage are not established.'
    };
    appendSource(source, false);
  }
  const sources = [...sourcesById.values()];
  const sourceIdsByPath = {};
  for (const [sourcePath, values] of sourcesByPath) sourceIdsByPath[sourcePath] = values.map((source) => source.sourceId);
  const profileIds = new Set(inputs.facts.profileKeys);
  const markIdByKey = inputs.facts.weaponTemplateKeys;
  const weaponSourceIdByMark = new Map([
    [markIdByKey.m1, sourceLinkForPath(inputs.facts.actionBindings.m1.path, { sourcesById, sourcesByPath, snapshot: inputs.snapshot }).sourceId],
    [markIdByKey.m2, sourceLinkForPath(inputs.facts.actionBindings.m2.path, { sourcesById, sourcesByPath, snapshot: inputs.snapshot }).sourceId]
  ]);
  const aliasState = getReachableAliasKeys(inputs.facts);
  return {
    ...inputs,
    sources,
    sourcesById,
    sourcesByPath,
    sourceIdsByPath,
    snapshot,
    mapperTool,
    profileIds,
    markIdByKey,
    weaponSourceIdByMark,
    aliasState
  };
}
function sourceRefsForRecords(records, state) {
  const ids = new Set(records.flatMap((record) => record.sourceRefs ?? []));
  return [...ids].map((id) => {
    invariant(state.sourcesById.has(id), 'Selected record references a missing source: ' + id);
    return link(id);
  });
}
function sourceRefsForProfileRows(rows, state) {
  const ids = new Set(rows.map((row) => sourceLinkForPath(row.sourcePath, state).sourceId));
  return [...ids].map((id) => link(id));
}
function profileRecordMap(records) {
  return new Map(records.map((record) => [record.payload.profileKey, record.recordId]));
}
function mapW01ClaimsWithProfileRefs(records, profileRecordIds) {
  for (const record of records) {
    if (record.kind !== 'claim') continue;
    const profileKey = record.payload.context?.profile;
    if (profileKey && profileRecordIds.has(profileKey)) {
      record.payload.context.damageProfileRef = ref(profileRecordIds.get(profileKey));
    }
  }
}
function collectEmbeddedSourceLinks(value, result = new Map()) {
  if (!value || typeof value !== 'object') return result;
  if (Array.isArray(value)) {
    for (const item of value) collectEmbeddedSourceLinks(item, result);
    return result;
  }
  if (typeof value.sourceId === 'string' && typeof value.gameReleaseId === 'string') {
    result.set(value.sourceId + '\u0000' + value.gameReleaseId, { sourceId: value.sourceId, gameReleaseId: value.gameReleaseId });
  }
  for (const child of Object.values(value)) collectEmbeddedSourceLinks(child, result);
  return result;
}
function appendWeaponSourceFacts(weapon, facts, mark, state, attackResult) {
  const markId = weapon.payload.markId;
  const markFacts = facts.weaponStatFacts[mark];
  const statKeyByTable = {
    'weapon_dodge_templates.smiter_plus': 'chainaxe_mobility_stat',
    'weapon_stamina_templates.linesman': 'chainaxe_defence_stat',
    'weapon_sprint_templates.default': 'chainaxe_mobility_stat',
    'movement_curve_modifier_trait_templates.default_movement_curve_modifier_stat': 'chainaxe_mobility_stat'
  };
  weapon.payload.statBindings = makeWeaponStatBindings(state.closure.records, weapon, facts, mark, state);
  weapon.payload.statTables = facts.outputTableFacts
    .filter((table) => statKeyByTable[table.tableKey])
    .map((table) => mapOutputTable(table, statKeyByTable[table.tableKey], state));
  weapon.payload.sourceRows = mapWeaponSourceRows(facts, mark, state);
  weapon.payload.emptyTables = mapWeaponEmptyTables(facts, mark, state);
  weapon.payload.actionContinuations = attackResult.edgeRows;
  const declared = new Map(weapon.sourceRefs.map((item) => [item.sourceId + '\u0000' + item.gameReleaseId, item]));
  for (const sourceRef of collectEmbeddedSourceLinks(weapon.payload).values()) {
    invariant(state.sourcesById.has(sourceRef.sourceId), 'Weapon locator references an undeclared source: ' + sourceRef.sourceId);
    declared.set(sourceRef.sourceId + '\u0000' + sourceRef.gameReleaseId, sourceRef);
  }
  weapon.sourceRefs = [...declared.values()];
}
function sourceTextSha(value) {
  return bytesSha256(Buffer.from(String(value).replace(/\r\n/g, '\n'), 'utf8'));
}
function claimMatchesMark(claim, weapon) {
  return claim.payload.context?.weaponRef === weapon.recordId;
}
function numericRowValue(row) {
  const value = tokenValue(row.rawValue);
  return isDecimal(value) ? value : undefined;
}
function rawProfileClaimRefs(claims, weapon, profileKey, property) {
  return claims.filter((claim) => claimMatchesMark(claim, weapon) &&
    claim.payload.context?.profile === profileKey &&
    claim.payload.property.includes(property)).map((claim) => ref(claim.recordId));
}
function m2RawStatRecords(facts, weapon, state, claims) {
  if (weapon.payload.markId !== facts.weaponTemplateKeys.m2) return [];
  const profileKey = 'light_chainaxe_tank';
  const profile = facts.profileDefinitions.find((item) => item.profileKey === profileKey);
  invariant(profile, 'Mk XII selected attack profile source is missing.');
  const statRecords = [];
  const curveSpecs = [
    {
      suffix: 'light-chainaxe-tank-attack-power',
      property: 'power_distribution.attack',
      unit: 'attack-power-point',
      rows: profile.rows.filter((row) => /\.targets\.1\.power_distribution\.attack\.\d+$/.test(row.fieldPath))
    },
    {
      suffix: 'light-chainaxe-tank-armored-modifier',
      property: 'armor_damage_modifier.attack[armor_types.armored]',
      unit: 'ratio',
      rows: (() => {
        const refRow = profile.rows.find((row) => row.fieldPath.endsWith('.targets.1.armor_damage_modifier.attack.[armor_types.armored]'));
        if (!refRow) return [];
        const key = tokenValue(refRow.rawValue);
        const tableRows = state.aliasState.rowsByKey.get(key);
        return tableRows ?? [];
      })()
    }
  ];
  for (const spec of curveSpecs) {
    invariant(spec.rows.length === 2, 'Mk XII selected raw stat must retain its exact two source points: ' + spec.property);
    const definitionId = 'darktide:stat-definition:chainaxe-p1-m2:' + spec.suffix;
    const curveId = 'darktide:stat-curve:chainaxe-p1-m2:' + spec.suffix;
    const sourceRows = spec.rows;
    const knots = sourceRows.map((row, index) => ({
      input: String(index + 1),
      output: tokenValue(row.rawValue)
    }));
    const statClaims = rawProfileClaimRefs(claims, weapon, profileKey, spec.property);
    const sourceLinks = sourceRefsForProfileRows(sourceRows, state);
    const definition = dataRecord(definitionId, 'stat-definition', {
      quantity: 'damage_templates.' + profileKey + '.targets[1].' + spec.property,
      inputUnit: 'point',
      outputUnit: spec.unit,
      panelInputRange: { status: 'not-applicable' },
      theoreticalInputRange: {
        status: 'known',
        min: '1',
        max: '2',
        unit: 'point',
        step: '1',
        inclusive: { min: true, max: true }
      },
      obtainableInputRange: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      curveRef: ref(curveId),
      claimRefs: statClaims
    }, sourceLinks, {
      dataCoverage: canonicalCoverage('partial', [
        { field: '/payload/obtainableInputRange', reasonCode: 'NOT_VERIFIED' },
        { field: '/payload/panelInputRange', reasonCode: 'NOT_EXPOSED_BY_SOURCE' }
      ]),
      reviewTargets: [{ fieldPath: '/payload', dimension: 'technical' }]
    });
    const curve = dataRecord(curveId, 'stat-curve', {
      inputUnit: 'point',
      outputUnit: spec.unit,
      knots,
      interpolation: { status: 'unknown', reasonCode: 'NOT_VERIFIED' },
      edgePolicy: { status: 'unknown', reasonCode: 'NOT_VERIFIED' }
    }, sourceLinks, {
      dataCoverage: canonicalCoverage('partial', [
        { field: '/payload/interpolation', reasonCode: 'NOT_VERIFIED' },
        { field: '/payload/edgePolicy', reasonCode: 'NOT_VERIFIED' }
      ]),
      reviewTargets: [{ fieldPath: '/payload', dimension: 'technical' }]
    });
    weapon.payload.statRefs.push(ref(definitionId));
    statRecords.push(definition, curve);
  }
  return statRecords;
}
function makeW07Bundle(inputs, state) {
  const closure = state.closure;
  const sourceById = state.sourcesById;
  const weaponSourceRows = closure.weapons.map((raw) => mapW01Record(raw, sourceById));
  const weaponByMark = new Map(weaponSourceRows.map((record) => [record.payload.markId, record]));
  const profileRecords = makeProfileRecords(inputs.facts, state);
  const profileRecordIds = new Map(profileRecords.map((record) => [record.payload.profileKey, record.recordId]));
  const attackRecords = [];
  const attackResultsByMark = new Map();
  for (const [mark, markId] of Object.entries(inputs.facts.weaponTemplateKeys)) {
    const result = makeAttackProfiles(inputs.facts, mark, weaponByMark.get(markId), state);
    attackRecords.push(...result.records);
    attackResultsByMark.set(mark, result);
    weaponByMark.get(markId).payload.attackProfileRefs = result.records.map((record) => ref(record.recordId));
  }
  const mappedW01Records = closure.records
    .filter((record) => record.kind !== 'weapon')
    .map((record) => mapW01Record(record, sourceById));
  mapW01ClaimsWithProfileRefs(mappedW01Records, profileRecordIds);
  for (const [mark, markId] of Object.entries(inputs.facts.weaponTemplateKeys)) {
    const weapon = weaponByMark.get(markId);
    appendWeaponSourceFacts(weapon, inputs.facts, mark, state, attackResultsByMark.get(mark));
  }
  const newStatRecords = [];
  for (const weapon of weaponByMark.values()) {
    newStatRecords.push(...m2RawStatRecords(inputs.facts, weapon, state, closure.claims));
  }
  const allNewRecords = [
    ...weaponSourceRows,
    ...mappedW01Records,
    ...profileRecords,
    ...attackRecords,
    ...newStatRecords
  ];
  const recordsById = new Map();
  for (const record of [...inputs.current.records, ...allNewRecords]) {
    invariant(!recordsById.has(record.recordId), 'Duplicate W07 candidate record ID: ' + record.recordId);
    recordsById.set(record.recordId, record);
  }
  const candidate = structuredClone(inputs.current);
  candidate.sourceRefs = [...inputs.current.sourceRefs];
  const currentSourceIds = new Set(candidate.sourceRefs.map((source) => source.sourceId));
  for (const source of state.sources) {
    if (currentSourceIds.has(source.sourceId)) continue;
    candidate.sourceRefs.push(source);
    currentSourceIds.add(source.sourceId);
  }
  candidate.records = [...inputs.current.records, ...allNewRecords];
  candidate.sourceSnapshots = [
    ...(candidate.sourceSnapshots ?? []),
    { gameReleaseId: RELEASE_ID, snapshot: structuredClone(state.snapshot) }
  ];
  candidate.fixtureOnly = false;
  candidate.publicationEligible = false;
  return {
    candidate,
    manifest: {
      schemaVersion: 'w07-weapons-source-import/1.0.0',
      status: 'pending-review',
      publicationEligible: false,
      sourceInput: {
        priorW06Bundle: 'content/authoring/v2/w06-skills-blessings.json',
        w01Candidate: 'content/authoring/w01-real-representative-candidate.json',
        curatedFacts: 'content/imports/w07/weapon-source-facts.json',
        gameReleaseId: RELEASE_ID,
        gameBuild: 'UNVERIFIED',
        includedW01Closure: { total: closure.records.length, weapons: closure.weapons.length, claims: closure.claims.length, evidence: closure.evidence.length, statDefinitions: closure.statDefinitions.length, statCurves: closure.curves.length },
        selectedCodeSnapshot: structuredClone(state.snapshot),
        selectedSourceRows: inputs.snapshot.files.length,
        selectedProfiles: inputs.facts.profileKeys.length,
        selectedAliasTables: state.aliasState.rowsByKey.size,
        selectedActionBindings: Object.fromEntries(Object.entries(inputs.facts.actionBindings).map(([key, item]) => [key, { profiles: item.profileBindings.length, actionEdges: item.actionEdges.length, stickyBindings: item.stickyBindings.length }])),
        selectedAttackProfiles: attackRecords.length,
        localStickyDefinitions: inputs.facts.localStickyDefinitions.length,
        explicitEmptyTables: inputs.facts.explicitEmptyTables.length
      },
      recordCounts: candidate.records.reduce((result, record) => {
        result[record.kind] = (result[record.kind] ?? 0) + 1;
        return result;
      }, {}),
      excluded: [
        { field: 'finalDamage', reasonCode: 'NOT_IMPORTED' },
        { field: 'enemySpecificHitZoneAndCriticalJointMappings', reasonCode: 'NOT_IMPORTED' },
        { field: 'secondaryPushAndDodgeRuntimeResolution', reasonCode: 'NOT_IMPORTED' },
        { field: 'actionConditionFunctionExecution', reasonCode: 'NOT_IMPORTED' },
        { field: 'SteamBuild', value: 'UNVERIFIED' }
      ],
      review: { reviewReceipts: 0, allNewRecordsPending: true, priorW06RecordsRetained: inputs.current.records.length }
    }
  };
}
export async function buildW07WeaponBundle({ root = ROOT } = {}) {
  const inputs = await readInputs(root);
  const closure = closureFromW01(inputs.w01);
  const mapperBytes = await readFile(fileURLToPath(import.meta.url));
  const mapperSha256 = sourceTextSha(mapperBytes.toString('utf8'));
  const state = makeSourceState(inputs, closure, mapperSha256);
  state.closure = closure;
  state.facts = inputs.facts;
  const built = makeW07Bundle(inputs, state);
  const { validateSourceContract } = await import('./contract-validator.mjs');
  const { loadContractSchema } = await import('./contract-validator.mjs');
  const schema = await loadContractSchema(root);
  const result = validateSourceContract(built.candidate, { schema });
  if (!result.valid) {
    throw new Error('Generated W07 Source contract is invalid:\n' + JSON.stringify(result.issues, null, 2));
  }
  return { ...built, validation: result };
}
function jsonBytes(value) {
  return Buffer.from(JSON.stringify(value, null, 2) + '\n', 'utf8');
}
function markdownForManifest(manifest) {
  return [
    '# W07 Source weapon import candidate',
    '',
    'Status: pending human review. Publication eligibility is false and no review receipts are included.',
    '',
    'The bundle extends the fixed W06 Source contract and imports the complete selected W01 chainaxe P1 closure: 2 weapons, 76 claims, 12 evidence records, and the original 2 stat definitions with their 2 curves.',
    '',
    'The current-code snapshot is the independently fixed 37-file manifest at commit ' + CURRENT_CODE_COMMIT + '. It is an expanded selected-input snapshot, not a claim that all game code was imported. Steam build remains UNVERIFIED.',
    '',
    'The curated bundle contains ' + manifest.sourceInput.selectedProfiles + ' damage profiles, ' + manifest.sourceInput.selectedAliasTables + ' referenced alias tables, ' + manifest.sourceInput.selectedAttackProfiles + ' action-specific attack profiles, all declared continuation rows, six local sticky definitions, and seven explicitly empty source tables.',
    '',
    'The pinned movement code subtracts sticky start time from elapsed time and compares the result with each movement-curve t coordinate, so t is seconds while modifiers are ratios ([movement update, lines 30–40](https://github.com/Aussiemon/Darktide-Source-Code/blob/' + CURRENT_CODE_COMMIT + '/scripts/extension_systems/weapon/weapon_action_movement.lua#L30-L40), [sticky start-time setup, lines 15–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/' + CURRENT_CODE_COMMIT + '/scripts/extension_systems/weapon/weapon_action_movement_shared.lua#L15-L29)). These links document unit interpretation; the selected 37-file snapshot remains a bounded input set, not all source code.',
    '',
    'Raw action and profile tables remain source descriptions. The mapper does not execute Lua conditions or profile overrides and does not calculate final damage. Enemy-specific hit-zone and critical/weakspot joint mappings are NOT_IMPORTED; secondary push/dodge runtime resolution is also NOT_IMPORTED.',
    '',
    'The exact selected rows and locator paths are retained in the JSON contract and source import manifest. All new records are pending review; no human approval is asserted.',
    ''
  ].join('\n');
}
export async function writeW07WeaponBundle({ root = ROOT, outputRoot = root } = {}) {
  const built = await buildW07WeaponBundle({ root });
  const outputs = new Map([
    ['content/authoring/v2/w07-weapons.json', jsonBytes(built.candidate)],
    ['docs/contracts/w07/source-import.json', jsonBytes(built.manifest)],
    ['docs/contracts/w07/source-import.md', Buffer.from(markdownForManifest(built.manifest), 'utf8')]
  ]);
  const destinations = [...outputs].map(([relative, bytes]) => [path.join(outputRoot, relative), bytes]);
  const existing = [];
  for (const [target, expected] of destinations) {
    try {
      existing.push({ target, actual: await readFile(target), expected });
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
  if (existing.length > 0) {
    invariant(existing.length === destinations.length, 'Refusing partial W07 output set; remove or restore the complete reviewed set before regenerating.');
    for (const item of existing) invariant(item.actual.equals(item.expected), 'Refusing to overwrite a changed W07 output: ' + item.target);
    return { written: false, outputPaths: destinations.map(([target]) => target), idempotent: true };
  }
  for (const [target] of destinations) await mkdir(path.dirname(target), { recursive: true });
  const written = [];
  try {
    for (const [target, bytes] of destinations) {
      await writeFile(target, bytes, { flag: 'wx' });
      written.push(target);
    }
  } catch (error) {
    for (const target of written) {
      try {
        const expected = destinations.find(([candidate]) => candidate === target)?.[1];
        const actual = await readFile(target);
        if (expected && actual.equals(expected)) await import('node:fs/promises').then(({ unlink }) => unlink(target));
      } catch {}
    }
    throw error;
  }
  return { written: true, outputPaths: destinations.map(([target]) => target), idempotent: false };
}
async function main(argv) {
  const writeIndex = argv.indexOf('--write');
  const outIndex = argv.indexOf('--out-root');
  const outputRoot = outIndex >= 0 ? path.resolve(argv[outIndex + 1] ?? '') : ROOT;
  const allowedArgs = argv.filter((item) => item !== '--write');
  if (allowedArgs.some((item, index) => item === '--out-root' || (index > 0 && argv[index - 1] === '--out-root'))) {
    if (outIndex < 0 || !argv[outIndex + 1]) throw new Error('--out-root requires a directory path.');
  } else if (allowedArgs.length) {
    throw new Error('Usage: node scripts/content/contract-w07-weapons.mjs [--write] [--out-root <directory>]');
  }
  if (writeIndex < 0) {
    const built = await buildW07WeaponBundle({ root: ROOT });
    process.stdout.write('W07 Source contract valid: ' + built.candidate.records.length + ' records; no files written.\n');
    return;
  }
  const result = await writeW07WeaponBundle({ root: ROOT, outputRoot });
  process.stdout.write((result.idempotent ? 'W07 outputs already match; no files changed.\n' : 'W07 review outputs written.\n') + result.outputPaths.join('\n') + '\n');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2)).catch((error) => {
    process.stderr.write(String(error.stack ?? error) + '\n');
    process.exitCode = 1;
  });
}
