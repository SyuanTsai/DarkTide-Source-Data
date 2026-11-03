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
  mergeGenericBlessingsCandidate,
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
    weaponTemplateCount: 144,
    linkedBespokeFileCount: 69,
    unlinkedBespokeFiles: ['weapon_traits_bespoke_dual_stubpistols_p1']
  });
  assert.equal(result.generatedRecords.length, 1384);
  assert.equal(result.candidate.records.length, 1384);
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
});

// Scenario: The minimal pending candidate is combined in memory with the existing authoring bundle.
// Purpose: Prevent approved-record copies while exercising all cross-bundle references with the real v2 validator.
test('InterT30_minimal_candidate_is_disjoint_and_merged_bundle_passes_validator', { skip: integrationSkip }, async () => {
  const result = await build();
  const authoring = JSON.parse(await readFile(authoringUrl, 'utf8'));
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
