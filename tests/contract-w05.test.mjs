import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import os from 'node:os';
import path from 'node:path';
import {
  mergeContractDocuments,
  mergeThreeWayValue,
  sha256Canonical
} from '../scripts/content/contract-w05-merge.mjs';
import {
  buildContractCandidate
} from '../scripts/content/contract-w05-build.mjs';
import {
  computeReviewDigests,
  createReviewReceipt,
  loadRepresentativeFixture,
  validateSourceContract
} from '../scripts/content/contract-validator.mjs';

const fixture = await loadRepresentativeFixture();
const canonical = (value) => Array.isArray(value)
  ? `[${value.map(canonical).join(',')}]`
  : value && typeof value === 'object'
    ? `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${canonical(value[key])}`).join(',')}}`
    : JSON.stringify(value);
const digest = (value) => createHash('sha256').update(canonical(value), 'utf8').digest('hex');
const sortReceipts = (items) => items.slice().sort((left, right) => JSON.stringify([left.target.gameReleaseId, left.target.recordId, left.target.fieldPath, left.target.dimension]).localeCompare(JSON.stringify([right.target.gameReleaseId, right.target.recordId, right.target.fieldPath, right.target.dimension])));
const copy = (value) => structuredClone(value);
const findRecord = (contract, recordId, gameReleaseId = 'fixture-r1') => {
  const record = contract.records.find((item) => item.recordId === recordId && item.gameReleaseId === gameReleaseId);
  assert.ok(record, `Missing record ${gameReleaseId}:${recordId}`);
  return record;
};
const createTarget = (record, target) => ({ recordId: record.recordId, gameReleaseId: record.gameReleaseId, ...target });

function approveRecord(contract, recordId, gameReleaseId) {
  const record = findRecord(contract, recordId, gameReleaseId);
  for (const target of record.reviewTargets) {
    contract.reviewReceipts.push(createReviewReceipt(contract, createTarget(record, target), {
      reviewer: { kind: 'human', id: 'reviewer-001' },
      reviewedAt: '2026-10-18T00:00:00Z'
    }));
  }
  record.reviewState = 'approved';
  return record;
}

function fullyApproveContract(contract) {
  contract.fixtureOnly = false;
  for (const item of [...contract.records, ...contract.tombstones]) {
    for (const target of item.reviewTargets) {
      contract.reviewReceipts.push(createReviewReceipt(contract, createTarget(item, target), {
        reviewer: { kind: 'human', id: 'reviewer-001' },
        reviewedAt: '2026-10-18T00:00:00Z'
      }));
    }
    item.reviewState = 'approved';
  }
  contract.publicationEligible = true;
  return contract;
}
async function withTempRoot(run) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'source-w05-test-'));
  try { await run(root); } finally { await rm(root, { recursive: true, force: true }); }
}

function legacyV1SourceRevisionAddress(baseline, output, mode = 'candidate') {
  const semanticBaseline = copy(baseline);
  semanticBaseline.publicationEligible = false;
  for (const item of [...semanticBaseline.records, ...semanticBaseline.tombstones]) item.reviewState = 'pending';
  const keys = {
    gameReleases: (item) => [item.gameReleaseId],
    sourceRefs: (item) => [item.gameReleaseId, item.sourceId],
    records: (item) => [item.gameReleaseId, item.recordId],
    tombstones: (item) => [item.gameReleaseId, item.recordId],
    reviewReceipts: (item) => [item.target.gameReleaseId, item.target.recordId, item.target.fieldPath, item.target.dimension]
  };
  for (const name of Object.keys(keys)) {
    semanticBaseline[name].sort((left, right) => {
      const leftKey = JSON.stringify(keys[name](left));
      const rightKey = JSON.stringify(keys[name](right));
      return leftKey < rightKey ? -1 : leftKey > rightKey ? 1 : 0;
    });
  }
  return sha256Canonical({ format: 'w05-source-revision/1', mode, baseline: semanticBaseline, output });
}

// Scenario: The author changes one record by hand while the new Source candidate changes a different field; registry arrays are reordered.
// Purpose: Preserve the hand edit, accept the candidate's independent update, and key same record IDs by game release rather than array position.
test('UnitT00_merges_independent_edits_by_release_scoped_registry_identity', () => {
  const baseline = copy(fixture);
  const authoring = copy(fixture);
  const candidate = copy(fixture);
  findRecord(authoring, 'fixture:claim:damage').payload.property = 'human-reviewed-property';
  findRecord(candidate, 'fixture:claim:damage').payload.value.decimal = '0.5';
  findRecord(authoring, 'fixture:weapon:alpha', 'fixture-r2').payload.markId = 'manual-r2-mark';
  findRecord(candidate, 'fixture:weapon:alpha', 'fixture-r1').payload.markId = 'candidate-r1-mark';
  authoring.records.reverse();
  candidate.records.reverse();
  candidate.sourceRefs.reverse();
  const before = [canonical(baseline), canonical(authoring), canonical(candidate)];

  const result = mergeContractDocuments({ baseline, authoring, candidate });

  assert.deepEqual(result.conflicts, []);
  assert.equal(findRecord(result.merged, 'fixture:claim:damage').payload.property, 'human-reviewed-property');
  assert.equal(findRecord(result.merged, 'fixture:claim:damage').payload.value.decimal, '0.5');
  assert.equal(findRecord(result.merged, 'fixture:weapon:alpha', 'fixture-r1').payload.markId, 'candidate-r1-mark');
  assert.equal(findRecord(result.merged, 'fixture:weapon:alpha', 'fixture-r2').payload.markId, 'manual-r2-mark');
  assert.deepEqual([canonical(baseline), canonical(authoring), canonical(candidate)], before);
});

// Scenario: Both the authoring branch and the generated candidate change the same claim value differently.
// Purpose: Return a stable composite identity and exact field pointer, with the three input documents unchanged.
test('UnitT01_reports_same_field_dual_edit_as_an_isolated_conflict', () => {
  const baseline = copy(fixture);
  const authoring = copy(fixture);
  const candidate = copy(fixture);
  findRecord(authoring, 'fixture:claim:damage').payload.value.decimal = '2';
  findRecord(candidate, 'fixture:claim:damage').payload.value.decimal = '3';
  const before = [canonical(baseline), canonical(authoring), canonical(candidate)];

  const result = mergeContractDocuments({ baseline, authoring, candidate });

  assert.equal(result.merged, null);
  assert.deepEqual(result.conflicts, [{
    code: 'three-way-conflict',
    registry: 'records',
    entityKey: 'records:["fixture-r1","fixture:claim:damage"]',
    path: '/payload/value/decimal',
    baseline: { present: true, value: '0' },
    authoring: { present: true, value: '2' },
    candidate: { present: true, value: '3' }
  }]);
  assert.deepEqual([canonical(baseline), canonical(authoring), canonical(candidate)], before);
});

// Scenario: One side deletes a registry record while the other leaves it unchanged, then while the other edits it.
// Purpose: Apply a one-sided deletion and isolate delete-versus-edit instead of silently losing either change.
test('UnitT02_handles_registry_deletion_and_delete_vs_edit', () => {
  const baseline = copy(fixture);
  const authoring = copy(fixture);
  const candidate = copy(fixture);
  const removedId = 'fixture:term:alpha';
  authoring.records = authoring.records.filter((record) => record.recordId !== removedId);
  let result = mergeContractDocuments({ baseline, authoring, candidate });
  assert.deepEqual(result.conflicts, []);
  assert.equal(result.merged.records.some((record) => record.recordId === removedId), false);

  const editedCandidate = copy(fixture);
  editedCandidate.records.find((record) => record.recordId === removedId).payload.technicalDefinitionEn = 'Candidate-side edit.';
  result = mergeContractDocuments({ baseline, authoring, candidate: editedCandidate });
  assert.equal(result.merged, null);
  assert.equal(result.conflicts.length, 1);
  assert.equal(result.conflicts[0].entityKey, 'records:["fixture-r1","fixture:term:alpha"]');
  assert.equal(result.conflicts[0].path, '');
  assert.equal(result.conflicts[0].baseline.present, true);
  assert.equal(result.conflicts[0].authoring.present, false);
  assert.equal(result.conflicts[0].candidate.present, true);
});


// Scenario: The baseline has no registry entry, while one or both branches add the same composite key.
// Purpose: Include a one-sided new record, coalesce byte-equivalent two-sided additions, and isolate conflicting two-sided additions.
test('UnitT02a_merges_new_registry_records_by_composite_identity', () => {
  const baseline = copy(fixture);
  const authoring = copy(fixture);
  const candidate = copy(fixture);
  const oneSided = copy(findRecord(fixture, 'fixture:term:alpha'));
  oneSided.recordId = 'fixture:term:w05-one-sided';
  oneSided.payload.technicalDefinitionEn = 'Candidate-only new record.';
  candidate.records.push(oneSided);

  let result = mergeContractDocuments({ baseline, authoring, candidate });
  assert.deepEqual(result.conflicts, []);
  assert.equal(findRecord(result.merged, 'fixture:term:w05-one-sided').payload.technicalDefinitionEn, 'Candidate-only new record.');

  const sameAuthoring = copy(fixture);
  const sameCandidate = copy(fixture);
  const sameRecord = copy(findRecord(fixture, 'fixture:term:alpha'));
  sameRecord.recordId = 'fixture:term:w05-both-sides';
  sameRecord.payload.technicalDefinitionEn = 'Identical new record.';
  sameAuthoring.records.push(copy(sameRecord));
  sameCandidate.records.push(copy(sameRecord));
  result = mergeContractDocuments({ baseline: copy(fixture), authoring: sameAuthoring, candidate: sameCandidate });
  assert.deepEqual(result.conflicts, []);
  assert.equal(result.merged.records.filter((item) => item.recordId === sameRecord.recordId).length, 1);

  const differentAuthoring = copy(fixture);
  const differentCandidate = copy(fixture);
  const authorAddition = copy(sameRecord);
  const candidateAddition = copy(sameRecord);
  authorAddition.recordId = 'fixture:term:w05-conflict';
  candidateAddition.recordId = authorAddition.recordId;
  authorAddition.payload.technicalDefinitionEn = 'Human-side new record.';
  candidateAddition.payload.technicalDefinitionEn = 'Candidate-side new record.';
  differentAuthoring.records.push(authorAddition);
  differentCandidate.records.push(candidateAddition);
  result = mergeContractDocuments({ baseline: copy(fixture), authoring: differentAuthoring, candidate: differentCandidate });
  assert.equal(result.merged, null);
  assert.equal(result.conflicts.length, 1);
  assert.equal(result.conflicts[0].entityKey, 'records:["fixture-r1","fixture:term:w05-conflict"]');
  assert.equal(result.conflicts[0].path, '/payload/technicalDefinitionEn');
});

// Scenario: A merge receives null or a malformed contract root, then the CLI receives bad arguments or an invalid JSON contract.
// Purpose: Fail closed before creating an output root and verify the public command boundary, including same-file candidate smoke input.
test('UnitT04a_rejects_null_malformed_and_bad_cli_inputs_without_output', async () => {
  assert.throws(() => mergeContractDocuments({ baseline: null, authoring: fixture, candidate: fixture }), /contract object/u);
  assert.throws(() => mergeContractDocuments({ baseline: [], authoring: fixture, candidate: fixture }), /contract object/u);

  await withTempRoot(async (root) => {
    const inputPath = path.join(root, 'input.json');
    const invalidPath = path.join(root, 'invalid.json');
    await writeFile(inputPath, JSON.stringify(fixture), 'utf8');
    await writeFile(invalidPath, 'null', 'utf8');
    const cliPath = fileURLToPath(new URL('../scripts/content/contract-w05-build.mjs', import.meta.url));

    const badArgsRoot = path.join(root, 'bad-args-out');
    const badArgs = spawnSync(process.execPath, [cliPath, '--baseline', inputPath, '--out-root', badArgsRoot], { encoding: 'utf8' });
    assert.notEqual(badArgs.status, 0);
    await assert.rejects(readdir(badArgsRoot));

    const invalidOutRoot = path.join(root, 'invalid-contract-out');
    const invalidArgs = [
      cliPath, '--baseline', invalidPath, '--authoring', invalidPath,
      '--candidate', invalidPath, '--out-root', invalidOutRoot
    ];
    const invalid = spawnSync(process.execPath, invalidArgs, { encoding: 'utf8' });
    assert.notEqual(invalid.status, 0);
    await assert.rejects(readdir(invalidOutRoot));

    const sameFileOutRoot = path.join(root, 'same-file-smoke');
    const smokeArgs = [
      cliPath, '--baseline', inputPath, '--authoring', inputPath,
      '--candidate', inputPath, '--out-root', sameFileOutRoot
    ];
    const smoke = spawnSync(process.execPath, smokeArgs, { encoding: 'utf8' });
    assert.equal(smoke.status, 0, smoke.stderr || smoke.stdout);
    assert.match(smoke.stdout, /previewOnly.*true/u);
  });
});
// Scenario: A JSON property is absent on the baseline but present as null on one side, while both sides reorder an ordered array differently.
// Purpose: Keep absence distinct from null and treat semantic arrays atomically so an order conflict cannot be partially merged.
test('UnitT03_distinguishes_absent_from_null_and_keeps_array_order_atomic', () => {
  const absent = { present: false };
  const nullValue = { present: true, value: null };
  const candidateValue = { present: true, value: 'candidate' };
  const missingConflict = mergeThreeWayValue({ baseline: absent, authoring: nullValue, candidate: candidateValue }, {
    entityKey: 'records:["fixture-r1","fixture:claim:damage"]', path: '/payload/optional'
  });
  assert.deepEqual(missingConflict.value, { present: false });
  assert.equal(missingConflict.conflicts.length, 1);
  assert.deepEqual(missingConflict.conflicts[0].baseline, absent);
  assert.deepEqual(missingConflict.conflicts[0].authoring, nullValue);
  assert.deepEqual(missingConflict.conflicts[0].candidate, candidateValue);

  const arrayConflict = mergeThreeWayValue({
    baseline: { present: true, value: ['first', 'second'] },
    authoring: { present: true, value: ['second', 'first'] },
    candidate: { present: true, value: ['first', 'second', 'third'] }
  }, { entityKey: 'records:["fixture-r1","fixture:claim:damage"]', path: '/payload/ordered' });
  assert.equal(arrayConflict.conflicts.length, 1);
  assert.equal(arrayConflict.conflicts[0].path, '/payload/ordered');
  assert.deepEqual(arrayConflict.conflicts[0].baseline.value, ['first', 'second']);
});

// Scenario: A registry repeats a composite key or an input object contains a prototype-pollution property.
// Purpose: Reject ambiguous registry identity and unsafe object keys before attempting a merge.
test('UnitT04_rejects_duplicate_registry_keys_and_unsafe_properties', () => {
  const baseline = copy(fixture);
  const authoring = copy(fixture);
  const candidate = copy(fixture);
  candidate.records.push(copy(candidate.records[0]));
  assert.throws(() => mergeContractDocuments({ baseline, authoring, candidate }), /duplicate records registry key/);

  const unsafe = copy(fixture);
  Object.defineProperty(unsafe.records[0].payload, '__proto__', { enumerable: true, value: { polluted: true } });
  assert.throws(() => mergeContractDocuments({ baseline, authoring, candidate: unsafe }), /unsafe object key/);
});

// Scenario: A Source commit locator moves without changing source content, then a claim value changes under the same pinned evidence.
// Purpose: Preserve receipt bytes and unaffected approvals for trace-only changes, while marking only the changed claim review stale.
test('UnitT05_reuses_v2_review_digests_without_fake_approval_or_global_staleness', async () => {
  const baseline = copy(fixture);
  approveRecord(baseline, 'fixture:claim:r2', 'fixture-r2');
  approveRecord(baseline, 'fixture:claim:damage', 'fixture-r1');
  const originalReceipts = copy(baseline.reviewReceipts);
  const commitCandidate = copy(baseline);
  const release = commitCandidate.gameReleases.find((item) => item.gameReleaseId === 'fixture-r2');
  const source = commitCandidate.sourceRefs.find((item) => item.sourceId === 'fixture-public-code-r2');
  const movedCommit = 'dddddddddddddddddddddddddddddddddddddddd';
  release.snapshot.commit = movedCommit;
  source.commit = movedCommit;
  source.snapshot.commit = movedCommit;

  await withTempRoot(async (outRoot) => {
    const commitBuild = await buildContractCandidate({
      baseline, authoring: baseline, candidate: commitCandidate, outRoot: path.join(outRoot, 'commit')
    });
    assert.equal(findRecord(commitBuild.contract, 'fixture:claim:r2', 'fixture-r2').reviewState, 'approved');
    assert.equal(findRecord(commitBuild.contract, 'fixture:claim:damage', 'fixture-r1').reviewState, 'approved');
    assert.deepEqual(sortReceipts(commitBuild.contract.reviewReceipts), sortReceipts(originalReceipts));

    const contentCandidate = copy(baseline);
    findRecord(contentCandidate, 'fixture:claim:r2', 'fixture-r2').payload.value.decimal = '1.5';
    const contentBuild = await buildContractCandidate({
      baseline, authoring: baseline, candidate: contentCandidate, outRoot: path.join(outRoot, 'content')
    });
    assert.equal(findRecord(contentBuild.contract, 'fixture:claim:r2', 'fixture-r2').reviewState, 'stale');
    assert.equal(findRecord(contentBuild.contract, 'fixture:claim:damage', 'fixture-r1').reviewState, 'approved');
    assert.deepEqual(sortReceipts(contentBuild.contract.reviewReceipts), sortReceipts(originalReceipts));
    assert.equal(validateSourceContract(contentBuild.contract).valid, true);
    assert.equal(contentBuild.receipt.publicationEligible, false);
  });
});

// Scenario: A conflict is found or formal mode receives a pending fixture.
// Purpose: Fail before creating the output root and never turn author-supplied state flags into an approval.
test('UnitT06_conflict_and_formal_gate_leave_no_output_and_do_not_accept_self_approval', async () => {
  await withTempRoot(async (root) => {
    const baseline = copy(fixture);
    const authoring = copy(fixture);
    const candidate = copy(fixture);
    findRecord(authoring, 'fixture:claim:damage').payload.value.decimal = '2';
    findRecord(candidate, 'fixture:claim:damage').payload.value.decimal = '3';
    const conflictRoot = path.join(root, 'conflict-output');
    await assert.rejects(buildContractCandidate({ baseline, authoring, candidate, outRoot: conflictRoot }), /merge conflict/);
    await assert.rejects(readdir(conflictRoot));

    const selfApproved = copy(fixture);
    findRecord(selfApproved, 'fixture:claim:damage').reviewState = 'approved';
    const formalRoot = path.join(root, 'formal-output');
    await assert.rejects(buildContractCandidate({
      baseline: selfApproved, authoring: selfApproved, candidate: selfApproved,
      outRoot: formalRoot, mode: 'formal'
    }), /formal output requires/);
    await assert.rejects(readdir(formalRoot));
  });
});

// Scenario: The same valid source contract is built twice in separate checkout roots.
// Purpose: Emit deterministic canonical technical, per-claim English analysis, Source-only revision logs, manifests and receipts independent of absolute path.
test('UnitT07_builds_stable_pending_candidate_with_claim_analysis_and_source_revision_log', async () => {
  await withTempRoot(async (root) => {
    const first = await buildContractCandidate({
      baseline: fixture, authoring: fixture, candidate: fixture, outRoot: path.join(root, 'checkout-a')
    });
    const second = await buildContractCandidate({
      baseline: fixture, authoring: fixture, candidate: fixture, outRoot: path.join(root, 'checkout-b')
    });
    assert.equal(first.receipt.previewOnly, true);
    assert.equal(first.receipt.publicationEligible, false);
    assert.equal(first.receipt.outputDirectory, second.receipt.outputDirectory);
    assert.deepEqual([...first.files.keys()].sort(), [
      'analysis.md', 'source-manifest.json', 'source-receipt.json', 'source-revision.json', 'source-revision.md', 'technical.json'
    ]);
    for (const [name, bytes] of first.files) assert.ok(bytes.equals(second.files.get(name)), `Different bytes for ${name}`);
    const analysis = first.files.get('analysis.md').toString('utf8');
    assert.match(analysis, /Technical claim analysis/u);
    assert.match(analysis, /fixture:claim:damage/u);
    assert.match(analysis, /Known value: `0` `damage`/u);
    assert.match(analysis, /fixture:evidence:alpha/u);
    const revisionLog = first.files.get('source-revision.md').toString('utf8');
    assert.match(revisionLog, /Source data revision/u);
    assert.match(revisionLog, /does not assert an official game change/u);
    assert.doesNotMatch(revisionLog, /official game changes: .*added/iu);
    assert.deepEqual(validateSourceContract(first.contract).issues, []);
    assert.equal(first.receipt.manifestSha256, createHash('sha256').update(first.files.get('source-manifest.json')).digest('hex'));
  });
});


// Scenario: A claim carries each schema-supported non-scalar claimValue form.
// Purpose: Report range bounds/inclusivity/step, unknown reasonCode, not-applicable status and ruleRef details without printing undefined or evaluating the rule.
test('UnitT07a_analysis_renders_range_unknown_not_applicable_and_rule_reference', async () => {
  await withTempRoot(async (root) => {
    const cases = [
      {
        name: 'range',
        value: {
          status: 'known', min: '0', max: '2', unit: 'damage',
          inclusive: { min: true, max: false }, step: '0.1'
        },
        expected: /Known range: minimum \x600\x60 \(inclusive\), maximum \x602\x60 \(exclusive\), unit \x60damage\x60, step \x600\.1\x60/u
      },
      {
        name: 'unknown',
        value: { status: 'unknown', reasonCode: 'SOURCE_UNAVAILABLE' },
        expected: /Unknown value: reason code \x60SOURCE_UNAVAILABLE\x60/u
      },
      {
        name: 'not-applicable',
        value: { status: 'not-applicable' },
        expected: /Value: Not applicable \(status \x60not-applicable\x60\)/u
      },
      {
        name: 'rule-reference',
        value: { ruleRef: { recordId: 'fixture:rule:alpha', gameReleaseId: 'fixture-r1' } },
        expected: /Rule reference: \x60fixture-r1:fixture:rule:alpha\x60[\s\S]*Rule key: \x60fixture\.multiply\x60[\s\S]*Trigger: Synthetic trigger\.[\s\S]*Operation: \x60multiply\x60[\s\S]*Stacking group: \x60fixture-additive-group\x60[\s\S]*Expiry: Synthetic expiry\.[\s\S]*Rounding: Synthetic rounding\.[\s\S]*Clamp: Synthetic clamp\.[\s\S]*fixture:evidence:alpha/u
      }
    ];
    for (const item of cases) {
      const contract = copy(fixture);
      findRecord(contract, 'fixture:claim:damage').payload.value = item.value;
      assert.equal(validateSourceContract(contract).valid, true, item.name + ' fixture must satisfy v2 schema');
      const build = await buildContractCandidate({
        baseline: contract, authoring: contract, candidate: contract,
        outRoot: path.join(root, item.name)
      });
      const analysis = build.files.get('analysis.md').toString('utf8');
      assert.match(analysis, item.expected, item.name);
      assert.doesNotMatch(analysis, /undefined/u, item.name);
    }
  });
});

// Scenario: A content-addressed output folder already exists but is missing a required file or contains an unexpected file.
// Purpose: Treat the folder as immutable and refuse both repair-by-overwrite and silent acceptance of extra content.
test('UnitT08_rejects_incomplete_or_extra_content_addressed_output', async () => {
  for (const damage of ['missing', 'extra']) {
    await withTempRoot(async (root) => {
      const outRoot = path.join(root, 'out');
      const built = await buildContractCandidate({ baseline: fixture, authoring: fixture, candidate: fixture, outRoot });
      const directory = path.join(outRoot, built.receipt.outputDirectory);
      if (damage === 'missing') await rm(path.join(directory, 'analysis.md'));
      else await writeFile(path.join(directory, 'unexpected.txt'), 'extra');
      await assert.rejects(buildContractCandidate({ baseline: fixture, authoring: fixture, candidate: fixture, outRoot }), /immutable output/);
      if (damage === 'missing') await assert.rejects(readFile(path.join(directory, 'analysis.md')));
      else assert.equal((await readFile(path.join(directory, 'unexpected.txt'), 'utf8')), 'extra');
    });
  }
});


// Scenario: The same merged contract is derived from different baselines, and the same approved contract is built in candidate and formal modes.
// Purpose: Bind every output-affecting baseline and mode to the content address so different logs or receipts never collide or overwrite each other.
test('UnitT10_content_address_covers_baseline_log_and_build_mode', async () => {
  await withTempRoot(async (root) => {
    const baselineA = copy(fixture);
    const baselineB = copy(fixture);
    findRecord(baselineB, 'fixture:claim:damage').payload.value.decimal = '9';
    const stableOutput = copy(fixture);
    const buildA = await buildContractCandidate({
      baseline: baselineA, authoring: stableOutput, candidate: stableOutput, outRoot: path.join(root, 'baseline-address')
    });
    const buildB = await buildContractCandidate({
      baseline: baselineB, authoring: stableOutput, candidate: stableOutput, outRoot: path.join(root, 'baseline-address')
    });
    assert.notEqual(buildA.receipt.outputDirectory, buildB.receipt.outputDirectory);
    assert.notDeepEqual(buildA.files.get('source-revision.md'), buildB.files.get('source-revision.md'));

    const approved = fullyApproveContract(copy(fixture));
    const modeRoot = path.join(root, 'mode-address');
    const preview = await buildContractCandidate({
      baseline: approved, authoring: approved, candidate: approved, outRoot: modeRoot, mode: 'candidate'
    });
    const candidateReceiptBytes = await readFile(path.join(modeRoot, preview.receipt.outputDirectory, 'source-receipt.json'));
    const formal = await buildContractCandidate({
      baseline: approved, authoring: approved, candidate: approved, outRoot: modeRoot, mode: 'formal'
    });
    const formalReceiptBytes = await readFile(path.join(modeRoot, formal.receipt.outputDirectory, 'source-receipt.json'));
    assert.notEqual(preview.receipt.outputDirectory, formal.receipt.outputDirectory);
    assert.notDeepEqual(candidateReceiptBytes, formalReceiptBytes);
    assert.equal((await readFile(path.join(modeRoot, preview.receipt.outputDirectory, 'source-receipt.json'))).equals(candidateReceiptBytes), true);
    assert.equal(preview.receipt.previewOnly, true);
    assert.equal(formal.receipt.previewOnly, false);
    assert.equal(formal.receipt.publicationEligible, true);
  });
});

// Scenario: A valid no-receipt draft state is unchanged, then set by only the authoring side; a current rejected receipt also exists.
// Purpose: Preserve legitimate human draft state while continuing to derive receipt-backed rejected state from W02 digest rules.
test('UnitT11_preserves_no_receipt_draft_and_derives_receipt_backed_state', async () => {
  const recordId = fixture.records[0].recordId;
  const releaseId = fixture.records[0].gameReleaseId;
  const drafted = copy(fixture);
  findRecord(drafted, recordId, releaseId).reviewState = 'draft';
  assert.equal(validateSourceContract(drafted).valid, true);

  const unchanged = mergeContractDocuments({ baseline: drafted, authoring: drafted, candidate: drafted });
  assert.deepEqual(unchanged.conflicts, []);
  assert.equal(findRecord(unchanged.merged, recordId, releaseId).reviewState, 'draft');

  const authoring = copy(fixture);
  findRecord(authoring, recordId, releaseId).reviewState = 'draft';
  const oneSided = mergeContractDocuments({ baseline: copy(fixture), authoring, candidate: copy(fixture) });
  assert.deepEqual(oneSided.conflicts, []);
  assert.equal(findRecord(oneSided.merged, recordId, releaseId).reviewState, 'draft');

  await withTempRoot(async (root) => {
    const draftOutRoot = path.join(root, 'draft-output');
    const built = await buildContractCandidate({
      baseline: copy(fixture), authoring, candidate: copy(fixture), outRoot: draftOutRoot
    });
    assert.equal(findRecord(built.contract, recordId, releaseId).reviewState, 'draft');
    const pendingBuilt = await buildContractCandidate({
      baseline: copy(fixture), authoring: copy(fixture), candidate: copy(fixture), outRoot: draftOutRoot
    });
    assert.equal(findRecord(pendingBuilt.contract, recordId, releaseId).reviewState, 'pending');
    assert.notEqual(built.receipt.outputDirectory, pendingBuilt.receipt.outputDirectory);
  });

  const rejected = copy(fixture);
  const rejectedRecord = findRecord(rejected, 'fixture:claim:damage');
  const rejectedTarget = createTarget(rejectedRecord, rejectedRecord.reviewTargets[0]);
  rejected.reviewReceipts.push(createReviewReceipt(rejected, rejectedTarget, {
    decision: 'rejected',
    reviewer: { kind: 'human', id: 'reviewer-001' },
    reviewedAt: '2026-10-18T00:00:00Z'
  }));
  rejectedRecord.reviewState = 'rejected';
  assert.equal(validateSourceContract(rejected).valid, true);
  await withTempRoot(async (root) => {
    const built = await buildContractCandidate({
      baseline: rejected, authoring: rejected, candidate: rejected, outRoot: path.join(root, 'rejected-output')
    });
    assert.equal(findRecord(built.contract, 'fixture:claim:damage').reviewState, 'rejected');
  });
});

// Scenario: Every claim has current human receipts, but the game release and public source build are explicitly unverified.
// Purpose: Keep formal output blocked by missing build identity even when review-state and publication flags would otherwise qualify.
test('UnitT09_formal_gate_rejects_unverified_build_metadata_with_current_receipts', async () => {
  const unverified = fullyApproveContract(copy(fixture));
  for (const release of unverified.gameReleases) release.gameBuild = 'UNVERIFIED';
  for (const source of unverified.sourceRefs) source.gameBuild = 'UNVERIFIED';
  const changeComparison = findRecord(unverified, 'fixture:game-change:curve', 'fixture-r2').payload.comparison;
  changeComparison.fromGameBuild = 'UNVERIFIED';
  changeComparison.toGameBuild = 'UNVERIFIED';
  // Receipts bind source metadata, so recompute them after setting the explicit unknown build marker.
  unverified.reviewReceipts = [];
  for (const item of [...unverified.records, ...unverified.tombstones]) {
    for (const target of item.reviewTargets) {
      unverified.reviewReceipts.push(createReviewReceipt(unverified, createTarget(item, target), {
        reviewer: { kind: 'human', id: 'reviewer-001' },
        reviewedAt: '2026-10-18T00:00:00Z'
      }));
    }
    item.reviewState = 'approved';
  }
  assert.equal(validateSourceContract(unverified).valid, true);
  assert.equal(validateSourceContract(unverified).publicationEligible, true);

  await withTempRoot(async (root) => {
    const candidateOutRoot = path.join(root, 'candidate-unverified');
    await assert.rejects(buildContractCandidate({
      baseline: unverified, authoring: unverified, candidate: unverified,
      outRoot: candidateOutRoot
    }), /UNVERIFIED/);
    await assert.rejects(readdir(candidateOutRoot));

    const formalOutRoot = path.join(root, 'formal-unverified');
    await assert.rejects(buildContractCandidate({
      baseline: unverified, authoring: unverified, candidate: unverified,
      outRoot: formalOutRoot, mode: 'formal'
    }), /UNVERIFIED/);
    await assert.rejects(readdir(formalOutRoot));

    const pendingUnverified = copy(unverified);
    pendingUnverified.reviewReceipts = [];
    for (const item of [...pendingUnverified.records, ...pendingUnverified.tombstones]) item.reviewState = 'pending';
    pendingUnverified.publicationEligible = false;
    const preview = await buildContractCandidate({
      baseline: pendingUnverified, authoring: pendingUnverified, candidate: pendingUnverified,
      outRoot: path.join(root, 'pending-unverified')
    });
    assert.equal(preview.contract.gameReleases[0].gameBuild, 'UNVERIFIED');
    assert.equal(preview.receipt.previewOnly, true);
    assert.equal(preview.receipt.publicationEligible, false);
    assert.equal(preview.receipt.buildIdentityVerified, false);
    assert.match(preview.files.get('technical.json').toString('utf8'), /UNVERIFIED/u);
    assert.match(JSON.stringify(preview.manifest.buildIdentity), /UNVERIFIED/u);
    assert.ok(preview.manifest.limitations.some((item) => /formal output is blocked/u.test(item)));
    assert.ok(preview.receipt.limitations.some((item) => /formal output is blocked/u.test(item)));
  });
});

function makeW07SourceSnapshot(snapshotId, options = {}) {
  return {
    gameReleaseId: options.gameReleaseId || 'fixture-r1',
    snapshot: {
      snapshotId,
      commit: options.commit || 'e'.repeat(40),
      manifestSha256: options.manifestSha256 || 'a'.repeat(64),
      contentSha256: options.contentSha256 || 'b'.repeat(64)
    }
  };
}

// Scenario: Two valid Source branches add different snapshots and independently edit different fields of a shared snapshot.
// Purpose: Merge sourceSnapshots as a global snapshotId registry, preserve reorder-insensitive identity, and isolate only real edit/delete conflicts.
test('UnitT12_merges_source_snapshots_by_global_snapshot_id', async () => {
  const baseline = copy(fixture);
  baseline.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-base')];
  const authoring = copy(baseline);
  const candidate = copy(baseline);
  authoring.sourceSnapshots[0].snapshot.commit = '1'.repeat(40);
  authoring.sourceSnapshots.push(makeW07SourceSnapshot('snapshot-w07-author'));
  candidate.sourceSnapshots[0].snapshot.contentSha256 = '2'.repeat(64);
  candidate.sourceSnapshots.push(makeW07SourceSnapshot('snapshot-w07-candidate'));
  authoring.sourceSnapshots.reverse();
  candidate.sourceSnapshots.reverse();

  const merged = mergeContractDocuments({ baseline, authoring, candidate });
  assert.deepEqual(merged.conflicts, []);
  const byId = new Map(merged.merged.sourceSnapshots.map((item) => [item.snapshot.snapshotId, item]));
  assert.deepEqual([...byId.keys()], ['snapshot-w07-author', 'snapshot-w07-base', 'snapshot-w07-candidate']);
  assert.equal(byId.get('snapshot-w07-base').snapshot.commit, '1'.repeat(40));
  assert.equal(byId.get('snapshot-w07-base').snapshot.contentSha256, '2'.repeat(64));

  const reorderBase = copy(fixture);
  reorderBase.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-alpha'), makeW07SourceSnapshot('snapshot-w07-beta')];
  const reorderAuthor = copy(reorderBase);
  const reorderCandidate = copy(reorderBase);
  reorderAuthor.sourceSnapshots.reverse();
  reorderCandidate.sourceSnapshots.reverse();
  const reordered = mergeContractDocuments({ baseline: reorderBase, authoring: reorderAuthor, candidate: reorderCandidate });
  assert.deepEqual(reordered.conflicts, []);
  assert.deepEqual(reordered.merged.sourceSnapshots.map((item) => item.snapshot.snapshotId), ['snapshot-w07-alpha', 'snapshot-w07-beta']);

  const conflictingAuthor = copy(baseline);
  const conflictingCandidate = copy(baseline);
  conflictingAuthor.sourceSnapshots[0].snapshot.manifestSha256 = 'c'.repeat(64);
  conflictingCandidate.sourceSnapshots[0].snapshot.manifestSha256 = 'd'.repeat(64);
  const editConflict = mergeContractDocuments({ baseline, authoring: conflictingAuthor, candidate: conflictingCandidate });
  assert.equal(editConflict.merged, null);
  assert.equal(editConflict.conflicts.length, 1);
  assert.equal(editConflict.conflicts[0].registry, 'sourceSnapshots');
  assert.equal(editConflict.conflicts[0].entityKey, 'sourceSnapshots:["snapshot-w07-base"]');
  assert.equal(editConflict.conflicts[0].path, '/snapshot/manifestSha256');

  const deletingAuthor = copy(baseline);
  const editingCandidate = copy(baseline);
  deletingAuthor.sourceSnapshots = [];
  editingCandidate.sourceSnapshots[0].snapshot.commit = '3'.repeat(40);
  const deleteConflict = mergeContractDocuments({ baseline, authoring: deletingAuthor, candidate: editingCandidate });
  assert.equal(deleteConflict.merged, null);
  assert.equal(deleteConflict.conflicts.length, 1);
  assert.equal(deleteConflict.conflicts[0].entityKey, 'sourceSnapshots:["snapshot-w07-base"]');
  assert.equal(deleteConflict.conflicts[0].path, '');

  await withTempRoot(async (root) => {
    const outRoot = path.join(root, 'snapshot-conflict');
    await assert.rejects(buildContractCandidate({
      baseline, authoring: conflictingAuthor, candidate: conflictingCandidate, outRoot
    }), /merge conflict/u);
    await assert.rejects(readdir(outRoot));
  });
});

// Scenario: The optional snapshot registry is omitted in legacy contracts, partially omitted across branches, or malformed/duplicated.
// Purpose: Preserve legacy omission, treat only absent properties as an empty registry, and reject ambiguous global identities fail-closed.
test('UnitT12a_source_snapshots_are_optional_but_duplicate_and_malformed_registries_fail_closed', () => {
  const legacy = copy(fixture);
  delete legacy.sourceSnapshots;
  const legacyMerge = mergeContractDocuments({ baseline: legacy, authoring: legacy, candidate: legacy });
  assert.deepEqual(legacyMerge.conflicts, []);
  assert.equal(Object.hasOwn(legacyMerge.merged, 'sourceSnapshots'), false);

  const candidate = copy(legacy);
  candidate.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-partial')];
  const partialMerge = mergeContractDocuments({ baseline: legacy, authoring: legacy, candidate });
  assert.deepEqual(partialMerge.conflicts, []);
  assert.deepEqual(partialMerge.merged.sourceSnapshots.map((item) => item.snapshot.snapshotId), ['snapshot-w07-partial']);

  const duplicate = copy(legacy);
  duplicate.sourceSnapshots = [
    makeW07SourceSnapshot('snapshot-w07-global-duplicate', { gameReleaseId: 'fixture-r1' }),
    makeW07SourceSnapshot('snapshot-w07-global-duplicate', { gameReleaseId: 'fixture-r2' })
  ];
  assert.throws(() => mergeContractDocuments({ baseline: duplicate, authoring: duplicate, candidate: duplicate }), /duplicate sourceSnapshots registry key/u);

  const malformedKey = copy(legacy);
  malformedKey.sourceSnapshots = [{ gameReleaseId: 'fixture-r1', snapshot: { manifestSha256: 'a'.repeat(64) } }];
  assert.throws(() => mergeContractDocuments({ baseline: malformedKey, authoring: malformedKey, candidate: malformedKey }), /malformed sourceSnapshots registry key/u);

  const malformedRegistry = copy(legacy);
  malformedRegistry.sourceSnapshots = null;
  assert.throws(() => mergeContractDocuments({ baseline: malformedRegistry, authoring: malformedRegistry, candidate: malformedRegistry }), /sourceSnapshots must be an array/u);
});

// Scenario: A W07 Source snapshot is added, edited, or removed between valid baseline and merged contracts.
// Purpose: Include exact snapshot registry additions/removals/field paths in both machine-readable and English revision records.
test('UnitT13_revision_outputs_cover_source_snapshot_add_update_remove', async (t) => {
  await t.test('addition appears in revision JSON and Markdown', async () => {
    await withTempRoot(async (root) => {
      const baseline = copy(fixture);
      delete baseline.sourceSnapshots;
      const authoring = copy(baseline);
      const candidate = copy(baseline);
      candidate.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-added')];
      assert.equal(validateSourceContract(candidate).valid, true);
      const built = await buildContractCandidate({ baseline, authoring, candidate, outRoot: path.join(root, 'add') });
      assert.equal(JSON.parse(built.files.get('technical.json')).sourceSnapshots[0].snapshot.snapshotId, 'snapshot-w07-added');
      const revision = JSON.parse(built.files.get('source-revision.json'));
      assert.equal(revision.schema, 'w05-source-revision/2');
      const legacyV1Address = legacyV1SourceRevisionAddress(baseline, built.contract);
      assert.notEqual(built.receipt.outputDirectory, legacyV1Address);
      assert.deepEqual(revision.changes.sourceSnapshots, {
        added: ['["snapshot-w07-added"]'], removed: [], updated: []
      });
      const markdown = built.files.get('source-revision.md').toString('utf8');
      const tick = String.fromCharCode(96);
      assert.ok(markdown.includes('## Source snapshots'));
      assert.ok(markdown.includes('Added ' + tick + '["snapshot-w07-added"]' + tick));
    });
  });

  await t.test('field update appears in revision JSON and Markdown', async () => {
    await withTempRoot(async (root) => {
      const baseline = copy(fixture);
      baseline.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-updated')];
      const authoring = copy(baseline);
      const candidate = copy(baseline);
      candidate.sourceSnapshots[0].snapshot.contentSha256 = 'c'.repeat(64);
      assert.equal(validateSourceContract(candidate).valid, true);
      const built = await buildContractCandidate({ baseline, authoring, candidate, outRoot: path.join(root, 'update') });
      const revision = JSON.parse(built.files.get('source-revision.json'));
      assert.deepEqual(revision.changes.sourceSnapshots, {
        added: [], removed: [], updated: [{ key: '["snapshot-w07-updated"]', fields: ['/snapshot/contentSha256'] }]
      });
      const markdown = built.files.get('source-revision.md').toString('utf8');
      const tick = String.fromCharCode(96);
      assert.ok(markdown.includes('Updated ' + tick + '["snapshot-w07-updated"]' + tick + ': ' + tick + '/snapshot/contentSha256' + tick));
    });
  });

  await t.test('removal appears in revision JSON and Markdown', async () => {
    await withTempRoot(async (root) => {
      const baseline = copy(fixture);
      baseline.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-removed')];
      const authoring = copy(baseline);
      const candidate = copy(baseline);
      candidate.sourceSnapshots = [];
      assert.equal(validateSourceContract(candidate).valid, true);
      const built = await buildContractCandidate({ baseline, authoring, candidate, outRoot: path.join(root, 'remove') });
      const revision = JSON.parse(built.files.get('source-revision.json'));
      assert.deepEqual(revision.changes.sourceSnapshots, {
        added: [], removed: ['["snapshot-w07-removed"]'], updated: []
      });
      const markdown = built.files.get('source-revision.md').toString('utf8');
      const tick = String.fromCharCode(96);
      assert.ok(markdown.includes('Removed ' + tick + '["snapshot-w07-removed"]' + tick));
    });
  });
});

// Scenario: Snapshot ordering differs while the semantic registry contents and legacy omission remain identical.
// Purpose: Canonicalize sourceSnapshots in the merge, revision baseline, and content address without adding an empty legacy registry.
test('UnitT14_source_snapshot_order_is_canonical_and_legacy_revision_omits_registry', async () => {
  await withTempRoot(async (root) => {
    const ordered = copy(fixture);
    ordered.sourceSnapshots = [makeW07SourceSnapshot('snapshot-w07-alpha'), makeW07SourceSnapshot('snapshot-w07-beta')];
    const reversed = copy(ordered);
    reversed.sourceSnapshots.reverse();
    const orderRoot = path.join(root, 'order');
    const first = await buildContractCandidate({
      baseline: ordered, authoring: ordered, candidate: ordered, outRoot: orderRoot
    });
    const second = await buildContractCandidate({
      baseline: reversed, authoring: reversed, candidate: reversed, outRoot: orderRoot
    });
    assert.equal(first.receipt.outputDirectory, second.receipt.outputDirectory);
    for (const [name, bytes] of first.files) assert.deepEqual(bytes, second.files.get(name), 'Snapshot order changed ' + name);
    assert.equal(JSON.parse(first.files.get('source-revision.json')).schema, 'w05-source-revision/2');
    assert.deepEqual(JSON.parse(first.files.get('source-revision.json')).changes.sourceSnapshots, {
      added: [], removed: [], updated: []
    });

    const legacy = copy(fixture);
    delete legacy.sourceSnapshots;
    const legacyBuild = await buildContractCandidate({
      baseline: legacy, authoring: legacy, candidate: legacy, outRoot: path.join(root, 'legacy')
    });
    assert.equal(Object.hasOwn(legacyBuild.contract, 'sourceSnapshots'), false);
    const legacyRevision = JSON.parse(legacyBuild.files.get('source-revision.json'));
    assert.equal(legacyRevision.schema, 'w05-source-revision/1');
    assert.equal(legacyBuild.receipt.outputDirectory, legacyV1SourceRevisionAddress(legacy, legacyBuild.contract));
    assert.equal(Object.hasOwn(legacyRevision.changes, 'sourceSnapshots'), false);
  });
});
