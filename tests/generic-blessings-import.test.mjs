import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import test from 'node:test';

import { validateSourceContractFromDisk } from '../scripts/content/contract-validator.mjs';
import {
  PINNED_COMMIT,
  buildGenericBlessings,
  makeBuffTemplateResolver,
  mergeGenericBlessingsCandidate,
  stripGenericBlessingsFold,
  resolveTraitPath,
  writeGenericBlessings
} from '../scripts/content/imports/generic-blessings.mjs';

const DEFAULT_SOURCE_REPO = 'F:/GitFile/Persion - Games/Darktide-Source-Code';
const sourceCodeRepo = process.env.DARKTIDE_SOURCE_CODE_REPO ?? DEFAULT_SOURCE_REPO;
const registryPath = 'scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua';
const authoringUrl = new URL('../content/authoring/v2/w07-weapons.json', import.meta.url);
const probe = spawnSync('git', [
  '-c', `safe.directory=${sourceCodeRepo}`,
  '-C', sourceCodeRepo,
  'cat-file', 'blob', `${PINNED_COMMIT}:${registryPath}`
], { encoding: 'utf8' });
const integrationSkip = probe.status === 0
  ? false
  : `Set DARKTIDE_SOURCE_CODE_REPO to a clone containing ${PINNED_COMMIT}; ${probe.stderr.trim() || 'source clone unavailable'}`;

let builtPromise;
const build = () => (builtPromise ??= buildGenericBlessings({ sourceCodeRepo, commit: PINNED_COMMIT }));

function fixtureReader(files) {
  const values = new Map(Object.entries(files));
  return {
    paths: [...values.keys()],
    read(sourcePath) {
      if (!values.has(sourcePath)) throw new Error(`Missing fixture source ${sourcePath}`);
      return values.get(sourcePath);
    }
  };
}

const fixtureBuffSettings = [
  'local buff_settings = { stat_buff_types = { rending_multiplier = {} } }',
  'local stat_buff_names = table.keys(buff_settings.stat_buff_types)',
  'buff_settings.stat_buffs = table.enum(unpack(stat_buff_names))'
].join('\n');

// Scenario: An approved generic record and its receipt and exclusive source are folded into a base containing a golden record.
// Purpose: Restore the unfurled base without mutating inputs or removing shared sources and non-generated records.
test('UnitT50_strip_fold_restores_base_and_preserves_golden_and_shared_sources', () => {
  const golden = { recordId: 'golden', sourceRefs: [{ sourceId: 'shared' }] };
  const original = {
    records: [golden], reviewReceipts: [{ target: { recordId: 'golden' } }],
    sourceRefs: [{ sourceId: 'shared', snapshot: { snapshotId: 'shared-snapshot' } }],
    sourceSnapshots: [{ snapshot: { snapshotId: 'shared-snapshot' } }]
  };
  const folded = structuredClone(original);
  folded.records.push({ recordId: 'generated', sourceRefs: [{ sourceId: 'exclusive' }] });
  folded.reviewReceipts.push({ target: { recordId: 'generated' } });
  folded.sourceRefs.push({ sourceId: 'exclusive', snapshot: { snapshotId: 'exclusive-snapshot' } });
  folded.sourceSnapshots.push({ snapshot: { snapshotId: 'exclusive-snapshot' } });
  const candidate = { sourceRefs: [{ sourceId: 'exclusive' }, { sourceId: 'shared' }], sourceSnapshots: [{ snapshot: { snapshotId: 'exclusive-snapshot' } }, { snapshot: { snapshotId: 'shared-snapshot' } }] };
  const before = structuredClone(folded);
  assert.deepEqual(stripGenericBlessingsFold(folded, new Set(['generated']), candidate), original);
  assert.deepEqual(folded, before);
});

// Scenario: A buff template merges an inline destination with a required source template.
// Purpose: Preserve Lua table.merge(dest, source) precedence, where the second argument overwrites the first.
test('UnitT10_buff_template_merge_uses_second_argument_as_source_override', () => {
  const resolver = makeBuffTemplateResolver(fixtureReader({
    'scripts/settings/buff/buff_settings.lua': fixtureBuffSettings,
    'scripts/settings/buff/base.lua': 'local templates = {}\ntemplates.base = { value = 9 }\nreturn templates',
    'scripts/settings/buff/derived.lua': [
      'local Base = require("scripts/settings/buff/base")',
      'local templates = {}',
      'templates.example = table.merge({ value = 1 }, Base.base)',
      'return templates'
    ].join('\n')
  }));

  const template = resolver('example');
  assert.equal(resolveTraitPath(template.node, ['value'], {}).node.value, 9);
});

// Scenario: Lua table.merge receives a source table with a nested field already present in the destination.
// Purpose: Preserve Lua's shallow assignment semantics so the source nested table replaces, rather than recursively extends, the destination table.
test('UnitT15_buff_template_merge_replaces_nested_table_shallowly', () => {
  const resolver = makeBuffTemplateResolver(fixtureReader({
    'scripts/settings/buff/buff_settings.lua': fixtureBuffSettings,
    'scripts/settings/buff/base.lua': 'local templates = {}\ntemplates.base = { nested = { destination = 1, shared = 2 } }\nreturn templates',
    'scripts/settings/buff/derived.lua': [
      'local Base = require("scripts/settings/buff/base")',
      'local templates = {}',
      'templates.example = table.merge(Base.base, { nested = { source = 9 } })',
      'return templates'
    ].join('\n')
  }));

  const template = resolver('example');
  assert.equal(resolveTraitPath(template.node, ['nested', 'source'], {}).node.value, 9);
  assert.throws(() => resolveTraitPath(template.node, ['nested', 'destination'], {}));
  assert.throws(() => resolveTraitPath(template.node, ['nested', 'shared'], {}));
});

// Scenario: Lua table.merge receives a source array portion with positions that exist in the destination.
// Purpose: Overwrite matching numeric indexes instead of appending source array entries after destination entries.
test('UnitT16_buff_template_merge_overwrites_array_indexes', () => {
  const resolver = makeBuffTemplateResolver(fixtureReader({
    'scripts/settings/buff/buff_settings.lua': fixtureBuffSettings,
    'scripts/settings/buff/base.lua': 'local templates = {}\ntemplates.base = { 10, 20, 30 }\nreturn templates',
    'scripts/settings/buff/derived.lua': [
      'local Base = require("scripts/settings/buff/base")',
      'local templates = {}',
      'templates.example = table.merge(Base.base, { 99, 88 })',
      'return templates'
    ].join('\n')
  }));

  const template = resolver('example');
  assert.equal(resolveTraitPath(template.node, [1], {}).node.value, 99);
  assert.equal(resolveTraitPath(template.node, [2], {}).node.value, 88);
  assert.equal(resolveTraitPath(template.node, [3], {}).node.value, 30);
});
// Scenario: A cloned template receives a later concrete assignment in the same module.
// Purpose: Ensure post-clone assignments supersede inherited fields before a format path is read.
test('UnitT20_buff_template_post_assignment_overrides_clone_value', () => {
  const resolver = makeBuffTemplateResolver(fixtureReader({
    'scripts/settings/buff/buff_settings.lua': fixtureBuffSettings,
    'scripts/settings/buff/base.lua': 'local templates = {}\ntemplates.base = { value = 1 }\nreturn templates',
    'scripts/settings/buff/derived.lua': [
      'local Base = require("scripts/settings/buff/base")',
      'local templates = {}',
      'templates.example = table.clone(Base.base)',
      'templates.example.value = 2',
      'return templates'
    ].join('\n')
  }));

  const template = resolver('example');
  assert.equal(resolveTraitPath(template.node, ['value'], {}).node.value, 2);
});

// Scenario: A cloned template receives a later arithmetic assignment that cannot be statically evaluated.
// Purpose: Prevent an inherited value being reported when a relevant later override is opaque.
test('UnitT30_buff_template_unsupported_post_assignment_makes_path_unknown', () => {
  const resolver = makeBuffTemplateResolver(fixtureReader({
    'scripts/settings/buff/buff_settings.lua': fixtureBuffSettings,
    'scripts/settings/buff/base.lua': 'local templates = {}\ntemplates.base = { value = 1 }\nreturn templates',
    'scripts/settings/buff/derived.lua': [
      'local Base = require("scripts/settings/buff/base")',
      'local templates = {}',
      'templates.example = table.clone(Base.base)',
      'templates.example.value = 1 + 2',
      'return templates'
    ].join('\n')
  }));

  const template = resolver('example');
  assert.equal(resolveTraitPath(template.node, ['value'], {}).node.type, 'unsupported');
});

// Scenario: Two independent buff modules declare the same template name.
// Purpose: Fail closed rather than selecting a lexically first source with unproven identity.
test('UnitT40_duplicate_buff_template_definitions_are_unknown', () => {
  const resolver = makeBuffTemplateResolver(fixtureReader({
    'scripts/settings/buff/buff_settings.lua': fixtureBuffSettings,
    'scripts/settings/buff/first.lua': 'local templates = {}\ntemplates.example = { value = 1 }\nreturn templates',
    'scripts/settings/buff/second.lua': 'local templates = {}\ntemplates.example = { value = 2 }\nreturn templates'
  }));

  assert.equal(resolver('example'), null);
});

// Scenario: The pinned 1.13.4 registries and every registered bespoke trait file are imported.
// Purpose: Freeze the bounded source inventory and distribution so missing or silently skipped traits fail loudly.
test('InterT10_pinned_registry_counts_and_format_distribution_match', { skip: integrationSkip }, async () => {
  const result = await build();

  assert.deepEqual(result.stats, {
    bespokeFileCount: 70,
    traitCount: 693,
    tierValueRowCount: 2772,
    oneTraitOverrideFormatValueCount: 483,
    multipleTraitOverrideFormatValueCount: 187,
    zeroTraitOverrideFormatValueCount: 23,
    valueManipulationCount: 61,
    formatClaimCount: 3162,
    knownFormatClaimCount: 3162,
    unknownFormatClaimCount: 0,
    postAssignmentClaimCount: 0,
    generatedPostAssignmentClaimCount: 0,
    weaponTemplateCount: 144,
    linkedBespokeFileCount: 69,
    unlinkedBespokeFiles: ['weapon_traits_bespoke_dual_stubpistols_p1']
  });
  assert.equal(result.generatedRecords.length, 5742);
  assert.equal(result.candidate.records.length, 5742);
});

// Scenario: The already-approved chainaxe blessing is parsed from the new generic path.
// Purpose: Prevent duplicate pending records while proving the generic values exactly match the approved golden record.
test('InterT20_chainaxe_golden_matches_and_approved_ids_are_not_emitted', { skip: integrationSkip }, async () => {
  const result = await build();
  const trait = result.extractedTraits.find((item) => item.traitName === 'weapon_trait_bespoke_chainaxe_p1_movement_speed_on_activation');
  const approved = result.approvedGolden.payload.tierValues;

  assert.deepEqual(trait.variantPayload.tierValues, approved);
  assert.deepEqual(approved.map((row) => row.value.decimal), ['0.17', '0.18', '0.19', '0.2']);
  assert.equal(result.generatedRecords.some((record) => record.recordId === trait.blessingId), false);
  assert.equal(result.generatedRecords.some((record) => record.recordId === trait.variantId), false);
  assert.equal(result.candidate.records.some((record) => record.recordId === trait.blessingId), false);
  assert.equal(result.candidate.records.some((record) => record.recordId === trait.variantId), false);
  assert.equal(result.candidate.records.some((record) => record.payload?.targetRef?.recordId === trait.variantId), false);
});

// Scenario: A bespoke trait describes values from both its tier override and a shared buff template.
// Purpose: Keep static duration and stack-limit descriptions as per-tier claims instead of silently omitting secondary format values.
test('InterT25_buff_template_format_values_emit_known_per_tier_claims', { skip: integrationSkip }, async () => {
  const result = await build();
  const trait = result.extractedTraits.find((item) => item.traitName === 'weapon_trait_bespoke_combatknife_p1_stacking_rending_on_weakspot');
  const blessing = result.candidate.records.find((record) => record.recordId === trait.blessingId);
  const claims = blessing.payload.claimRefs.map((ref) => result.candidate.records.find((record) => record.recordId === ref.recordId));

  assert.equal(claims.length, 7);
  assert.deepEqual(
    claims.filter((claim) => claim.payload.property.endsWith('.time.display_value')).map((claim) => claim.payload.value),
    [{ status: 'known', decimal: '5', unit: 's' }]
  );
  assert.deepEqual(
    claims.filter((claim) => claim.payload.property.endsWith('.max_stacks.display_value')).map((claim) => claim.payload.value),
    [{ status: 'known', decimal: '16', unit: 'point' }]
  );
  assert.deepEqual(
    claims.filter((claim) => claim.payload.property.endsWith('.rending.display_percent')).map((claim) => claim.payload.value),
    [{ status: 'known', decimal: '2.5', unit: 'percent' }]
  );
  assert.equal(new Set(claims.flatMap((claim) => claim.payload.evidenceRefs.map((ref) => ref.recordId))).size, 4);
});

// Scenario: Description formatting configures a callback instead of an evaluable static transformation.
// Purpose: Ensure the importer records an explicit unknown claim rather than executing or guessing the display value.
test('InterT27_function_value_manipulations_emit_unknown_claims', { skip: integrationSkip }, async () => {
  const result = await build();
  const trait = result.extractedTraits.find((item) => item.formatValues.some((format) => format.hasValueManipulation));
  const blessing = result.candidate.records.find((record) => record.recordId === trait.blessingId);
  const functionKeys = new Set(trait.formatValues.filter((format) => format.hasValueManipulation).map((format) => format.key));
  const claims = blessing.payload.claimRefs
    .map((ref) => result.candidate.records.find((record) => record.recordId === ref.recordId))
    .filter((claim) => [...functionKeys].some((key) => claim.payload.property.includes(`format_values.${key}.`)));

  assert.equal(claims.length, 0);
  assert.ok(functionKeys.size > 0);
  assert.ok([...functionKeys].every((key) => trait.variant.dataCoverage.missing.some((missing) => missing.field === `/payload/formatValues/${key}` && missing.reasonCode === 'NOT_EXPOSED_BY_SOURCE')));
});

// Scenario: Every emitted blessing has a claim closure, including a trait whose display value only uses a tier override.
// Purpose: Prevent dangling evidence and incomplete blessing claimRefs as more format-value sources are added.
test('InterT28_blessing_claim_refs_cover_each_format_tier_and_evidence', { skip: integrationSkip }, async () => {
  const result = await build();
  const trait = result.extractedTraits.find((item) => item.traitName === 'weapon_trait_bespoke_ogryn_thumper_p2_grenades_stick_to_monsters');
  const blessing = result.candidate.records.find((record) => record.recordId === trait.blessingId);
  const claims = blessing.payload.claimRefs.map((ref) => result.candidate.records.find((record) => record.recordId === ref.recordId));

  assert.equal(claims.length, 4);
  assert.deepEqual(claims.map((claim) => claim.payload.value.decimal), ['6', '9', '12', '15']);
  assert.ok(claims.every((claim) => claim.kind === 'claim' && claim.payload.evidenceRefs.length === 1));
  assert.ok(claims.every((claim) => claim.payload.evidenceRefs.every((ref) => result.candidate.records.some((record) => record.recordId === ref.recordId && record.kind === 'evidence'))));
});

// Scenario: The minimal pending candidate is combined in memory with the existing authoring bundle.
// Purpose: Prevent approved-record copies while exercising all cross-bundle references with the real v2 validator.
test('InterT30_minimal_candidate_is_disjoint_and_merged_bundle_passes_validator', { skip: integrationSkip }, async () => {
  const result = await build();
  const authoring = stripGenericBlessingsFold(JSON.parse(await readFile(authoringUrl, 'utf8')), new Set(result.generatedRecords.map((record) => record.recordId)), result.candidate);
  const existingRecordIds = new Set(authoring.records.map((record) => record.recordId));
  const merged = mergeGenericBlessingsCandidate({ authoringBundles: [authoring], candidate: result.candidate });
  const validation = await validateSourceContractFromDisk(merged);

  assert.equal(validation.valid, true, JSON.stringify(validation.issues, null, 2));
  assert.deepEqual(validation.issues, []);
  assert.equal(result.candidate.publicationEligible, false);
  assert.ok(result.candidate.records.every((record) => record.reviewState === 'pending'));
  assert.ok(result.candidate.records.every((record) => !existingRecordIds.has(record.recordId)));
  assert.equal(merged.records.length, authoring.records.length + result.candidate.records.length);
});

// Scenario: The same fixed source pin is written into two clean output directories.
// Purpose: Guarantee byte-for-byte deterministic candidate and snapshot artifacts.
test('InterT40_repeated_writes_are_byte_identical', { skip: integrationSkip }, async (context) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'generic-blessings-'));
  context.after(() => rm(root, { recursive: true, force: true }));
  const first = path.join(root, 'first');
  const second = path.join(root, 'second');

  await writeGenericBlessings({ sourceCodeRepo, commit: PINNED_COMMIT, outputDir: first });
  await writeGenericBlessings({ sourceCodeRepo, commit: PINNED_COMMIT, outputDir: second });

  for (const filename of ['blessings-candidates.json', 'blessings-snapshot.json']) {
    assert.deepEqual(await readFile(path.join(first, filename)), await readFile(path.join(second, filename)));
  }
});

// Scenario: Every emitted known decimal is inspected after source-path traversal.
// Purpose: Prove no tier number is hand-entered or synthesized outside a parsed numeric Lua node.
test('InterT50_all_known_tier_values_trace_to_numeric_source_nodes', { skip: integrationSkip }, async () => {
  const result = await build();
  const traces = result.extractedTraits.flatMap((trait) => trait.tierTraces);

  assert.ok(traces.length > 0);
  for (const trace of traces) {
    assert.equal(trace.sourceNode.type, 'number');
    assert.equal(trace.decimal, trace.sourceNode.raw);
    assert.ok(Number.isInteger(trace.sourceNode.startLine));
    assert.ok(trace.path.every((part) => typeof part === 'string' || Number.isInteger(part) || typeof part?.ref === 'string'));
  }
});
