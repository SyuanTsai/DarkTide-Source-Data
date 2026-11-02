import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { validateSourceContractFromDisk } from '../scripts/content/contract-validator.mjs';
import {
  PINNED_COMMIT,
  buildGenericWeaponTemplates,
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
const build = () => (builtPromise ??= buildGenericWeaponTemplates({ sourceCodeRepo, commit: PINNED_COMMIT }));

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
    for (const knot of record.payload.knots) {
      const line = result.reader.read(knot.sourceLocator.path).split(/\r\n|\n|\r/u)[knot.sourceLocator.line - 1];
      assert.ok(line.includes(knot.rawEndpoint), `${record.recordId} endpoint must match its pinned source line`);
      assert.equal(knot.input, knot.rawEndpoint);
      assert.equal(knot.output, knot.rawEndpoint);
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

// Scenario: The same pinned source is imported twice into independent directories.
// Purpose: Guarantee byte-for-byte deterministic promotion inputs and snapshots.
test('InterT50_two_writes_are_byte_identical', { skip: integrationSkip }, async () => {
  const temporaryRoot = await mkdtemp(path.join(os.tmpdir(), 'generic-weapons-'));
  const left = path.join(temporaryRoot, 'left');
  const right = path.join(temporaryRoot, 'right');
  try {
    const first = await writeGenericWeaponTemplates({ sourceCodeRepo, commit: PINNED_COMMIT, outputDir: left });
    const second = await writeGenericWeaponTemplates({ sourceCodeRepo, commit: PINNED_COMMIT, outputDir: right });
    assert.deepEqual(first.outputSizes, second.outputSizes);
    for (const filename of ['weapon-template-candidates.json', 'weapons-snapshot.json']) {
      assert.deepEqual(await readFile(path.join(left, filename)), await readFile(path.join(right, filename)));
    }
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true });
  }
});
