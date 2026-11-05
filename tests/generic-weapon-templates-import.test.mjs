import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, rm, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { validateSourceContractFromDisk } from '../scripts/content/contract-validator.mjs';
import { readAuthoringBundle, readAuthoringBundleAtCommit } from '../scripts/content/lib/authoring-bundle.mjs';
import {
  PINNED_COMMIT,
  buildGenericWeaponTemplates,
  deriveUiWeaponMarks,
  inspectIndirectDamageProfileSupportFiles,
  loadGenericWeaponTemplateCandidate,
  matchIndirectDamageProfileSupportFailures,
  mergeGenericWeaponCandidate,
  writeGenericWeaponTemplates
} from '../scripts/content/imports/generic-weapon-templates.mjs';

const DEFAULT_SOURCE_REPO = 'F:/GitFile/Persion - Games/Darktide-Source-Code';
const sourceCodeRepo = process.env.DARKTIDE_SOURCE_CODE_REPO ?? DEFAULT_SOURCE_REPO;
const registryPath = 'scripts/settings/equipment/weapon_templates/weapon_templates.lua';
const probe = spawnSync('git', [
  '-c', `safe.directory=${sourceCodeRepo}`,
  '-C', sourceCodeRepo,
  'cat-file', 'blob', `${PINNED_COMMIT}:${registryPath}`
], { encoding: 'utf8' });
const integrationSkip = probe.status === 0
  ? false
  : `Set DARKTIDE_SOURCE_CODE_REPO to a clone containing ${PINNED_COMMIT}; ${probe.stderr.trim() || 'source clone unavailable'}`;

let builtPromise;
const baseCommit = '332aab5388050960f0d7f279f24b061282a6d038';
const build = () => (builtPromise ??= (async () => {
  const { bundle: baseAuthoring } = await readAuthoringBundleAtCommit((commit, name) => {
    const result = spawnSync('git', ['show', `${commit}:${name}`], { maxBuffer: 32 * 1024 * 1024 });
    if (result.error) throw result.error;
    assert.equal(result.status, 0, result.stderr.toString('utf8'));
    return result.stdout;
  }, baseCommit);
  return buildGenericWeaponTemplates({ sourceCodeRepo, commit: PINNED_COMMIT, baseAuthoring });
})());

async function outputFiles(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name, 'en'))) {
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) files.push(...await outputFiles(root, absolute));
    else files.push(path.relative(root, absolute).replaceAll(path.sep, '/'));
  }
  return files;
}

// Scenario: UI family keys can intentionally differ from the family-looking prefix embedded in a mark name.
// Purpose: Require pending weapons to preserve the UI-owned family instead of guessing it from the mark ID.
test('UnitT05_family_and_mark_derivation_preserves_the_ui_family', () => {
  const marks = deriveUiWeaponMarks(`
local ui_weapon_patterns_settings = {
  ogryn_thumper_p2 = {
    marks = {
      { name = "ogryn_thumper_p1_m2" },
    },
  },
  ogryn_thumper_p3 = {
    marks = {
      { name = "ogryn_thumper_p1_m3" },
    },
  },
}
return settings("UIWeaponPatternSettings", ui_weapon_patterns_settings)
`);

  assert.deepEqual(marks.map(({ familyId, markId }) => ({ familyId, markId })), [
    { familyId: 'ogryn_thumper_p2', markId: 'ogryn_thumper_p1_m2' },
    { familyId: 'ogryn_thumper_p3', markId: 'ogryn_thumper_p1_m3' }
  ]);
});

// Scenario: Support files are visited out of order and one contains syntax the static parser cannot accept.
// Purpose: Preserve a deterministic, path-safe coverage gap instead of silently dropping indirect bindings.
test('UnitT07_indirect_support_parse_failures_are_deterministic_and_path_safe', () => {
  const sources = new Map([
    ['scripts/settings/projectile/z_projectile_templates.lua', `
local projectile_templates = {}
projectile_templates.failed_round = {
  damage = @unsupported,
}
return projectile_templates
`],
    ['scripts/settings/projectile/a_shotshell_templates.lua', `
local shotshell_templates = {}
shotshell_templates.valid_round = {}
return shotshell_templates
`]
  ]);
  const reader = {
    paths: [...sources.keys()].reverse(),
    read: (sourcePath) => sources.get(sourcePath)
  };

  const first = inspectIndirectDamageProfileSupportFiles(reader);
  const second = inspectIndirectDamageProfileSupportFiles(reader);

  assert.deepEqual(first.failures, second.failures);
  assert.equal(first.failures.length, 1);
  assert.deepEqual(first.failures[0].templateKeys, ['failed_round']);
  assert.equal(first.failures[0].sourcePath, 'scripts/settings/projectile/z_projectile_templates.lua');
  assert.equal(first.failures[0].reasonCode, 'INDIRECT_DAMAGE_PROFILE_SUPPORT_PARSE_FAILED');
  assert.equal(typeof first.failures[0].parserErrorMessage, 'string');
  assert.ok(first.failures[0].parserErrorMessage.length > 0);
  assert.doesNotMatch(first.failures[0].parserErrorMessage, /(?:file:\/\/\/)?[A-Za-z]:[\\/]/u);
  assert.deepEqual(
    matchIndirectDamageProfileSupportFailures(
      ['damage = ProjectileTemplates.failed_round'],
      first.failures
    ).map((gap) => gap.sourcePath),
    ['scripts/settings/projectile/z_projectile_templates.lua']
  );
});

// Scenario: Every registered template in the pinned 1.13.4 registry is scanned without executing Lua.
// Purpose: Freeze the bounded inventory and the source constructs that the generic importer must not silently skip.
test('InterT10_pinned_weapon_template_inventory_counts_match', { skip: integrationSkip }, async () => {
  const result = await build();

  assert.deepEqual(result.stats.inventory, {
    traitDeclarationCount: 148,
    playerMarkTraitDeclarationCount: 144,
    botTraitDeclarationCount: 3,
    otherTraitDeclarationCount: 1,
    baseStatsDeclarationCount: 144,
    displayedAttacksDeclarationCount: 146,
    topLevelActionCount: 2038,
    directDamageProfileReferenceCount: 1059,
    tableAddMissingCallCount: 299,
    tableCloneCallCount: 153
  });
  assert.equal(result.stats.authoringWeaponCount, 82);
  assert.equal(result.stats.partialAuthoringWeaponCount, 80);
  assert.ok(Array.isArray(result.coverageGaps.indirectDamageProfileSupportParseFailures));
  assert.equal(
    result.stats.indirectDamageProfileSupportParseFailureCount,
    result.coverageGaps.indirectDamageProfileSupportParseFailures.length
  );
  assert.deepEqual(
    result.coverageGaps.indirectDamageProfileSupportParseFailures,
    [...result.coverageGaps.indirectDamageProfileSupportParseFailures]
      .sort((left, right) => left.sourcePath.localeCompare(right.sourcePath, 'en'))
  );
  for (const gap of result.coverageGaps.indirectDamageProfileSupportParseFailures) {
    assert.equal(gap.reasonCode, 'INDIRECT_DAMAGE_PROFILE_SUPPORT_PARSE_FAILED');
    assert.equal(typeof gap.sourcePath, 'string');
    assert.doesNotMatch(gap.sourcePath, /(?:file:\/\/\/)?[A-Za-z]:[\\/]/u);
    assert.ok(gap.parserErrorCode || gap.parserErrorMessage);
    assert.doesNotMatch(gap.parserErrorMessage ?? '', /(?:file:\/\/\/)?[A-Za-z]:[\\/]/u);
    for (const weaponId of gap.affectedWeaponRecordIds) {
      const candidateWeapon = result.candidate.patches.find((item) => item.recordId === weaponId)
        ?? result.candidate.records.find((item) => item.kind === 'weapon' && item.recordId === weaponId);
      assert.ok(candidateWeapon, `${weaponId} must exist in the candidate`);
      assert.ok(candidateWeapon.dataCoverage.missing.some((missing) =>
        missing.reasonCode === 'SOURCE_UNAVAILABLE'
        && missing.field.startsWith('/payload/attackProfileRefs/supportFiles/')),
      `${weaponId} must carry its failed indirect support-file coverage gap`);
    }
  }
});

// Scenario: The two complete chainaxe marks are rebuilt through the generic path from the same pinned Lua nodes.
// Purpose: Protect exact action-resolution and displayed-summary compatibility without copying complete authoring records.
test('InterT20_chainaxe_action_and_display_goldens_match', { skip: integrationSkip }, async () => {
  const result = await build();
  const fieldValue = (patch, fieldPath) => patch.fields.find((field) => field.fieldPath === fieldPath)?.value;

  for (const markId of ['chainaxe_p1_m1', 'chainaxe_p1_m2']) {
    const approved = result.authoring.records.find((record) => record.gameReleaseId === 'darktide:1.13.4'
      && record.kind === 'weapon' && record.payload.markId === markId);
    const patch = result.candidate.patches.find((item) => item.recordId === approved.recordId);

    assert.deepEqual(fieldValue(patch, '/payload/actionProfileResolution'), approved.payload.actionProfileResolution);
    assert.deepEqual(fieldValue(patch, '/payload/displayedAttacks'), approved.payload.displayedAttacks);
    assert.equal(Object.hasOwn(patch, 'payload'), false);
  }
});

// Scenario: The generic path rebuilds lasgun_p1_m1 from the pinned Lua while its approved W13 profile/stat facts already exist.
// Purpose: Keep the generated action/display closure aligned with approved related records without replacing those records.
test('InterT25_lasgun_action_display_and_related_record_goldens_match', { skip: integrationSkip }, async () => {
  const result = await build();
  const weapon = result.authoring.records.find((record) => record.gameReleaseId === 'darktide:1.13.4'
    && record.kind === 'weapon' && record.payload.markId === 'lasgun_p1_m1');
  const patch = result.candidate.patches.find((item) => item.recordId === weapon.recordId);
  const fieldValue = (fieldPath) => patch.fields.find((field) => field.fieldPath === fieldPath)?.value;
  const resolution = fieldValue('/payload/actionProfileResolution');
  const displayed = fieldValue('/payload/displayedAttacks');
  const approvedById = new Map(result.authoring.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  const mergedById = new Map(result.merged.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));

  assert.deepEqual(displayed.map((item) => ({ key: item.key, mode: item.mode, roleProfileKey: item.segments[0].roleProfileKey })), [
    { key: 'primary', mode: 'hipfire', roleProfileKey: 'lasgun_p1_m1_killshot' },
    { key: 'secondary', mode: 'ads', roleProfileKey: 'lasgun_p1_m1_killshot' }
  ]);
  for (const profileRef of weapon.payload.attackProfileRefs) {
    const approved = approvedById.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`);
    const merged = mergedById.get(`${profileRef.gameReleaseId}\0${profileRef.recordId}`);
    assert.deepEqual(merged.payload, approved.payload);
    assert.deepEqual(merged.sourceRefs, approved.sourceRefs);
    assert.ok(resolution.localActions.some((action) => action.action === approved.payload.action));
    for (const damageRef of approved.payload.damageProfileRefs) {
      assert.deepEqual(
        mergedById.get(`${damageRef.gameReleaseId}\0${damageRef.recordId}`).payload,
        approvedById.get(`${damageRef.gameReleaseId}\0${damageRef.recordId}`).payload
      );
    }
  }
  for (const statRef of weapon.payload.statRefs) {
    assert.deepEqual(
      mergedById.get(`${statRef.gameReleaseId}\0${statRef.recordId}`).payload,
      approvedById.get(`${statRef.gameReleaseId}\0${statRef.recordId}`).payload
    );
  }
});

// Scenario: Minimal field patches and new records are merged into a clone of the approved authoring bundle.
// Purpose: Ensure all 80 partial weapons gain both requested static fields while the real validator accepts the merged graph.
test('InterT30_candidate_is_minimal_and_merged_bundle_passes_validator', { skip: integrationSkip }, async () => {
  const result = await build();
  const existingIds = new Set(result.authoring.records.map((record) => `${record.gameReleaseId}\0${record.recordId}`));
  const merged = mergeGenericWeaponCandidate(result.authoring, result.candidate);
  const validation = await validateSourceContractFromDisk(merged);
  const weapons = merged.records.filter((record) => record.gameReleaseId === 'darktide:1.13.4' && record.kind === 'weapon');

  assert.equal(result.candidate.patches.length, 82);
  assert.ok(result.candidate.patches.every((patch) => !Object.hasOwn(patch, 'payload')));
  assert.ok(result.candidate.records.every((record) => record.reviewState === 'pending'));
  assert.ok(result.candidate.records.every((record) => !existingIds.has(`${record.gameReleaseId}\0${record.recordId}`)));
  assert.ok(weapons.every((weapon) => weapon.payload.actionProfileResolution));
  assert.ok(weapons.every((weapon) => Array.isArray(weapon.payload.displayedAttacks)));
  assert.ok(weapons.every((weapon) => !(weapon.dataCoverage.missing ?? []).some((missing) =>
    ['/payload/actionProfileResolution', '/payload/all-actions-and-display-segments'].includes(missing.field)
      && missing.reasonCode === 'NOT_IMPORTED')));
  assert.equal(validation.valid, true, JSON.stringify(validation.issues, null, 2));
  assert.deepEqual(validation.issues, []);
});

// Scenario: The candidate has been folded into the current authoring bundle.
// Purpose: Verify every candidate record and patch has an approved current counterpart.
test('InterT32_candidate_records_and_patches_are_approved_in_current_authoring', { skip: integrationSkip }, async () => {
  const { candidate } = await build();
  const { bundle } = await readAuthoringBundle(process.cwd());
  const current = new Map(bundle.records.map((record) => [`${record.gameReleaseId}\0${record.recordId}`, record]));
  for (const record of [...candidate.records, ...candidate.patches]) {
    assert.equal(current.get(`${record.gameReleaseId}\0${record.recordId}`)?.reviewState, 'approved', record.recordId);
  }
});

// Scenario: A pinned UI player mark has a registered template but no approved 1.13.4 weapon record.
// Purpose: Add exactly one pending source-traced weapon for every such mark without colliding with authoring IDs.
test('InterT35_missing_ui_weapons_are_pending_registered_and_collision_free', { skip: integrationSkip }, async () => {
  const result = await build();
  const existingIds = new Set(result.authoring.records.map((record) => `${record.gameReleaseId}\0${record.recordId}`));
  const uiByMark = new Map(result.uiMarks.map((mark) => [mark.markId, mark]));
  const registeredKeys = new Set(result.registeredTemplates.map((template) => template.templateKey));
  const authoringMarks = new Set(result.authoring.records
    .filter((record) => record.gameReleaseId === 'darktide:1.13.4' && record.kind === 'weapon')
    .map((record) => record.payload.markId));
  const expected = result.uiMarks.filter((mark) => registeredKeys.has(mark.markId) && !authoringMarks.has(mark.markId));
  const weapons = result.candidate.records.filter((record) => record.kind === 'weapon');
  const registeredWithoutUi = result.registeredTemplates
    .filter((template) => !uiByMark.has(template.templateKey))
    .map((template) => template.templateKey);

  assert.equal(weapons.length, expected.length);
  assert.deepEqual(weapons.map((record) => record.payload.markId).sort(), expected.map((mark) => mark.markId).sort());
  assert.deepEqual(result.coverageGaps.uiMarksWithoutRegisteredTemplate.map((gap) => gap.markId), ['laspistol_p1_m2']);
  assert.deepEqual(
    result.coverageGaps.registeredTemplatesWithoutUiMark.map((gap) => gap.templateKey),
    registeredWithoutUi
  );
  for (const weapon of weapons) {
    const uiMark = uiByMark.get(weapon.payload.markId);
    const recordIdentity = /^(.*)_p(\d+)_m(\d+)$/u.exec(weapon.payload.markId);
    assert.ok(uiMark, `${weapon.recordId} must belong to the pinned UI list`);
    assert.equal(weapon.reviewState, 'pending');
    assert.equal(weapon.payload.familyId, uiMark.familyId);
    assert.equal(weapon.payload.templateKey, weapon.payload.markId);
    assert.equal(weapon.recordId, `darktide:weapon:${recordIdentity[1]}:p${recordIdentity[2]}-m${recordIdentity[3]}`);
    assert.equal(existingIds.has(`${weapon.gameReleaseId}\0${weapon.recordId}`), false);
    assert.equal(weapon.payload.sourceRows.length, 3);
    for (const sourceRow of weapon.payload.sourceRows) {
      const line = result.reader.read(sourceRow.sourceLocator.path).split(/\r\n|\n|\r/u)[sourceRow.sourceLocator.line - 1];
      assert.ok(line.includes(sourceRow.rawValue.replace(/^"|"$/gu, '')), `${weapon.recordId} identity must match its source line`);
      assert.ok(weapon.sourceRefs.some((sourceRef) => sourceRef.sourceId === sourceRow.sourceLocator.sourceRef.sourceId
        && sourceRef.gameReleaseId === sourceRow.sourceLocator.sourceRef.gameReleaseId));
    }
  }
});

// Scenario: Static action bindings and base-stat trait ranges are absent from the existing authoring graph.
// Purpose: Require genuinely new pending profile/stat records rather than renamed copies of existing records.
test('InterT40_candidate_adds_only_new_source_traced_profile_and_stat_records', { skip: integrationSkip }, async () => {
  const result = await build();
  const existingIds = new Set(result.authoring.records.map((record) => `${record.gameReleaseId}\0${record.recordId}`));
  const byKind = Object.groupBy(result.candidate.records, (record) => record.kind);

  for (const kind of ['attack-profile', 'damage-profile', 'stat-definition', 'stat-curve']) {
    assert.ok((byKind[kind] ?? []).length > 0, `expected generated ${kind} records`);
    assert.ok(byKind[kind].every((record) => record.reviewState === 'pending'));
    assert.ok(byKind[kind].every((record) => !existingIds.has(`${record.gameReleaseId}\0${record.recordId}`)));
  }

  for (const record of byKind['attack-profile']) {
    assert.ok(record.payload.sourceBindings.length > 0);
    for (const binding of record.payload.sourceBindings) {
      const line = result.reader.read(binding.sourceLocator.path).split(/\r\n|\n|\r/u)[binding.sourceLocator.line - 1];
      assert.ok(line.includes(binding.rawValue), `${record.recordId} binding must match its pinned source line`);
    }
  }
  for (const record of byKind['damage-profile']) {
    for (const leaf of record.payload.rawSourceDefinition.leaves) {
      const line = result.reader.read(record.payload.rawSourceDefinition.path).split(/\r\n|\n|\r/u)[leaf.line - 1];
      assert.ok(line.includes(leaf.rawValue), `${record.recordId} leaf must match its pinned source line`);
    }
  }
  for (const record of byKind['stat-curve']) {
    assert.equal(record.payload.knots.length, 2);
    for (const [index, knot] of record.payload.knots.entries()) {
      const line = result.reader.read(knot.sourceLocator.path).split(/\r\n|\n|\r/u)[knot.sourceLocator.line - 1];
      assert.ok(line.includes(knot.rawEndpoint), `${record.recordId} endpoint must match its pinned source line`);
      assert.equal(knot.input, String(index));
      assert.equal(Number(knot.output), Number(knot.rawEndpoint));
    }
  }

  for (const patch of result.candidate.patches) {
    const resolution = patch.fields.find((field) => field.fieldPath === '/payload/actionProfileResolution').value;
    for (const generator of resolution.actionGenerators) {
      assert.equal(generator.effectiveDefinitionIndex, generator.definitions.at(-1).definitionIndex);
    }
    const duplicateDefinition = resolution.actionGenerators.find((generator) => generator.generatorKey === 'generate_inspect_action');
    assert.equal(duplicateDefinition.definitions.length, 2);
    assert.equal(duplicateDefinition.effectiveDefinitionIndex, 2);
    for (const binding of resolution.generatorBindings) {
      const line = result.reader.read(binding.callsite.sourceLocator.path).split(/\r\n|\n|\r/u)[binding.callsite.sourceLocator.line - 1];
      assert.ok(line.includes(binding.generatorKey), `${patch.recordId} generator binding must match its pinned source line`);
    }
  }
});

// Scenario: Referenced damage profiles and every previously missing weapon base-stat graph are imported from pinned Lua values.
// Purpose: Prevent the value importer from regressing to action-only profile keys or trait-range placeholders without affected fields.
test('InterT45_damage_profile_bodies_and_base_stat_rating_mappings_are_source_traced', { skip: integrationSkip }, async () => {
  const result = await build();
  const byKind = Object.groupBy(result.candidate.records, (record) => record.kind);
  const generatedDamage = byKind['damage-profile'] ?? [];
  const originallyMissingBaseStats = result.authoring.records.filter((record) => record.gameReleaseId === 'darktide:1.13.4'
    && record.kind === 'weapon'
    && (record.dataCoverage.missing ?? []).some((missing) =>
      missing.field === '/payload/all-base-stat-definitions-and-rating-mapping'));

  assert.equal(result.stats.values.referencedDamageProfileCount, 290);
  assert.equal(result.stats.values.resolvedDamageProfileCount, 290);
  assert.equal(generatedDamage.length, 290);
  assert.ok(generatedDamage.every((record) => record.payload.rawSourceDefinition.leaves.length > 1));
  assert.ok(generatedDamage.every((record) => !(record.dataCoverage.missing ?? []).some((missing) =>
    missing.field === '/payload/rawSourceDefinition/profileBody')));

  assert.equal(originallyMissingBaseStats.length, 70);
  assert.equal(result.stats.values.resolvedBaseStatWeaponCount, 70);
  for (const weapon of originallyMissingBaseStats) {
    const patch = result.candidate.patches.find((item) => item.recordId === weapon.recordId);
    assert.ok(patch.fields.some((field) => field.fieldPath === '/payload/statBindings'));
    assert.ok(patch.fields.some((field) => field.fieldPath === '/payload/statTables'));
    assert.ok(!(patch.dataCoverage.missing ?? []).some((missing) =>
      missing.field === '/payload/all-base-stat-definitions-and-rating-mapping'));
  }

  const curvesById = new Map((byKind['stat-curve'] ?? []).map((record) => [record.recordId, record]));
  for (const definition of byKind['stat-definition'] ?? []) {
    const curve = curvesById.get(definition.payload.curveRef.recordId);
    assert.ok(curve, `${definition.recordId} must reference a generated curve`);
    for (const knot of curve.payload.knots) {
      const line = result.reader.read(knot.sourceLocator.path).split(/\r\n|\n|\r/u)[knot.sourceLocator.line - 1];
      assert.ok(line.includes(knot.rawEndpoint), `${curve.recordId} endpoint must match its pinned source line`);
    }
  }
});

// Scenario: The in-memory candidate is written as family-owned parts plus a hash index and loaded from those parts.
// Purpose: Keep every Git artifact below the hosting limit without changing the candidate object accepted by the validator.
test('InterT47_sharded_candidate_reassembles_to_the_identical_in_memory_candidate', { skip: integrationSkip }, async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'generic-weapons-shards-'));
  try {
    const written = await writeGenericWeaponTemplates({ sourceCodeRepo, commit: PINNED_COMMIT, outputDir: temporaryRoot });
    const loaded = await loadGenericWeaponTemplateCandidate({ outputDir: temporaryRoot });
    const filenames = await outputFiles(temporaryRoot);
    const index = JSON.parse(await readFile(path.join(temporaryRoot, 'weapon-templates', 'index.json'), 'utf8'));

    assert.deepEqual(loaded, written.candidate);
    assert.equal(filenames.includes('weapon-template-candidates.json'), false);
    const familyIds = new Set([
      ...written.authoring.records
        .filter((record) => record.gameReleaseId === 'darktide:1.13.4' && record.kind === 'weapon')
        .map((record) => record.payload.familyId),
      ...written.candidate.records.filter((record) => record.kind === 'weapon').map((record) => record.payload.familyId)
    ]);
    assert.equal(index.files.length, familyIds.size + 1);
    assert.equal(index.counts.fileCount, index.files.length);
    assert.equal(index.counts.patchCount, written.candidate.patches.length);
    assert.equal(index.counts.recordCount, written.candidate.records.length);
    assert.equal(index.counts.pendingWeaponCount, written.stats.pendingWeaponCount);
    assert.equal(
      index.counts.indirectDamageProfileSupportParseFailureCount,
      written.stats.indirectDamageProfileSupportParseFailureCount
    );
    assert.deepEqual(index.coverageGaps, written.coverageGaps);
    for (const filename of index.files.map((item) => path.join(temporaryRoot, 'weapon-templates', item.filename))) {
      assert.ok((await stat(filename)).size < 10_000_000, `${path.basename(filename)} must stay below 10 MB`);
    }
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});

// Scenario: The same pinned source is imported twice into independent directories.
// Purpose: Guarantee byte-for-byte deterministic promotion inputs, every family shard, its hash index, and the snapshot.
test('InterT50_two_writes_are_byte_identical', { skip: integrationSkip }, async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'generic-weapons-'));
  const left = path.join(temporaryRoot, 'left');
  const right = path.join(temporaryRoot, 'right');
  try {
    const run = (outputDir) => spawnSync(process.execPath, [
      path.resolve('scripts/content/imports/generic-weapon-templates.mjs'),
      '--source-code-repo', sourceCodeRepo,
      '--commit', PINNED_COMMIT,
      '--output-dir', outputDir
    ], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 });
    const first = run(left);
    assert.equal(first.status, 0, first.stderr);
    const second = run(right);
    assert.equal(second.status, 0, second.stderr);
    const firstFiles = await outputFiles(left);
    const secondFiles = await outputFiles(right);
    assert.deepEqual(firstFiles, secondFiles);
    for (const filename of firstFiles) {
      assert.deepEqual(await readFile(path.join(left, filename)), await readFile(path.join(right, filename)));
    }
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});
