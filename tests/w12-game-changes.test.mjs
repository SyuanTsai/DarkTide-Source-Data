import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createReviewReceipt, loadContractSchema, loadRepresentativeFixture } from '../scripts/content/contract-validator.mjs';
import { analyzeGameChangeTransition, compareSemanticRecords, createTechnicalChangelog, renderTechnicalChangelogMarkdown, verifyW05TechnicalPackage } from '../scripts/content/w12-game-changes.mjs';
import { buildContractCandidate } from '../scripts/content/contract-w05-build.mjs';

const schema = await loadContractSchema();
const fixture = await loadRepresentativeFixture();
const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Scenario: A first import, unknown comparison, and a source-data correction are inspected.
// Purpose: Keep baseline, unknown identity, and same-snapshot database edits out of confirmed game changes.
// Given a valid synthetic Source contract, When each comparison state is analyzed, Then none is claimed as a confirmed game update.
test('UnitT18_classifies_baseline_unknown_and_same_snapshot_without_confirmed_changes', () => {
  const baseline = analyzeGameChangeTransition(fixture, { toGameReleaseId: 'fixture-r2', schema });
  assert.equal(baseline.classification, 'baseline');
  assert.deepEqual(baseline.confirmedChanges, []);
  assert.deepEqual(baseline.targetRelease, {
    gameReleaseId: 'fixture-r2',
    gameVersion: '1.0.1',
    gameBuild: 'synthetic-build-002',
    releaseOrder: 2,
    snapshot: structuredClone(fixture.gameReleases.find(row => row.gameReleaseId === 'fixture-r2').snapshot),
  });

  const unknownTarget = analyzeGameChangeTransition(fixture, { toGameReleaseId: 'does-not-exist', schema });
  assert.equal(unknownTarget.classification, 'unknown-comparison');
  assert.equal(unknownTarget.targetRelease, null);

  const unknown = analyzeGameChangeTransition(fixture, {
    fromGameReleaseId: 'fixture-missing', toGameReleaseId: 'fixture-r2', schema,
  });
  assert.equal(unknown.classification, 'unknown-comparison');
  assert.deepEqual(unknown.confirmedChanges, []);

  const sameSnapshot = structuredClone(fixture);
  const from = sameSnapshot.gameReleases.find(row => row.gameReleaseId === 'fixture-r1');
  const to = sameSnapshot.gameReleases.find(row => row.gameReleaseId === 'fixture-r2');
  to.snapshot.manifestSha256 = from.snapshot.manifestSha256;
  to.snapshot.contentSha256 = from.snapshot.contentSha256;
  for (const source of sameSnapshot.sourceRefs.filter(row => row.gameReleaseId === to.gameReleaseId)) {
    source.snapshot = structuredClone(to.snapshot);
  }
  sameSnapshot.records = sameSnapshot.records.filter(row => row.kind !== 'game-change');
  const databaseRevision = analyzeGameChangeTransition(sameSnapshot, {
    fromGameReleaseId: 'fixture-r1', toGameReleaseId: 'fixture-r2', schema,
  });
  assert.equal(databaseRevision.classification, 'database-revision');
  assert.deepEqual(databaseRevision.confirmedChanges, []);

  for (const gameBuild of ['unverified', ' Unverified ']) {
    const unverified = structuredClone(fixture);
    unverified.gameReleases.find(row => row.gameReleaseId === 'fixture-r2').gameBuild = gameBuild;
    for (const source of unverified.sourceRefs.filter(row => row.gameReleaseId === 'fixture-r2')) source.gameBuild = gameBuild;
    for (const change of unverified.records.filter(row => row.kind === 'game-change' && row.gameReleaseId === 'fixture-r2')) {
      change.payload.comparison.toGameBuild = gameBuild;
    }
    assert.equal(analyzeGameChangeTransition(unverified, {
      fromGameReleaseId: 'fixture-r1', toGameReleaseId: 'fixture-r2', schema,
    }).classification, 'unknown-comparison');
  }
});

// Scenario: A verified Source package is reported without a from-release baseline.
// Purpose: Keep the target release identity visible without inventing a Web content version.
// Given a valid target release, When the baseline changelog is rendered, Then its game/build/snapshot identity is shown as Source-only metadata.
test('UnitT24_renders_complete_target_identity_for_source_baseline', () => {
  const report = createTechnicalChangelog({
    technical: fixture,
    sourceRevision: 'a'.repeat(64),
    manifestSha256: 'b'.repeat(64),
    mode: 'formal',
    publicationEligible: true,
    buildIdentityVerified: true,
  }, { toGameReleaseId: 'fixture-r2', schema });
  const markdown = renderTechnicalChangelogMarkdown(report);

  assert.equal(report.classification, 'baseline');
  assert.equal(report.targetRelease.gameReleaseId, 'fixture-r2');
  assert.equal(report.targetRelease.snapshot.snapshotId, 'fixture-snapshot-r2');
  assert.match(markdown, /Target release: `1\.0\.1` \(`fixture-r2`\)/u);
  assert.match(markdown, /Snapshot: `fixture-snapshot-r2`/u);
  assert.match(markdown, /Commit: `c{40}`/u);
  assert.match(markdown, /Manifest SHA-256: `c{64}`/u);
  assert.match(markdown, /Content SHA-256: `d{64}`/u);
  assert.match(markdown, /does not declare a contentVersion/u);
});

// Scenario: Two release-scoped records differ only in key order and non-semantic timestamps, then in typed game facts.
// Purpose: Ignore serialization noise while preserving units, applicability conditions, tier values, and ordered arrays.
// Given equivalent payloads, When semantic comparison runs, Then noise disappears but meaningful typed changes remain.
test('UnitT19_compares_semantic_values_and_preserves_typed_context_and_array_order', () => {
  const before = [{ recordId: 'fixture:claim', kind: 'claim', gameReleaseId: 'fixture-r1', updatedAt: '2026-01-01T00:00:00Z', payload: {
    value: { status: 'known', decimal: '0.5', unit: 's' }, context: { tier: 3, mode: ['first', 'second'] },
    localTargetRef: { recordId: 'fixture:shared-entity', gameReleaseId: 'fixture-r1' },
    historicalTargetRef: { recordId: 'fixture:shared-entity', gameReleaseId: 'fixture-r0', compatibilityRef: 'fixture:compat-prior' },
  } }];
  const noiseOnly = [{ recordId: 'fixture:claim', kind: 'claim', gameReleaseId: 'fixture-r2', updatedAt: '2026-02-01T00:00:00Z', payload: {
    context: { mode: ['first', 'second'], tier: 3 }, value: { unit: 's', decimal: '0.500', status: 'known' },
    localTargetRef: { recordId: 'fixture:shared-entity', gameReleaseId: 'fixture-r2' },
    historicalTargetRef: { recordId: 'fixture:shared-entity', gameReleaseId: 'fixture-r0', compatibilityRef: 'fixture:compat-prior' },
  } }];
  assert.deepEqual(compareSemanticRecords(before, noiseOnly), []);

  const changedHistoricalReference = structuredClone(noiseOnly);
  changedHistoricalReference[0].payload.historicalTargetRef.gameReleaseId = 'fixture-r1';
  const historicalDiff = compareSemanticRecords(before, changedHistoricalReference);
  assert.equal(historicalDiff.length, 1);
  assert.deepEqual(historicalDiff[0].changedFields.map(row => row.path), ['/payload/historicalTargetRef/gameReleaseId']);

  const changed = structuredClone(noiseOnly);
  changed[0].payload.value.unit = 'ms';
  changed[0].payload.context.tier = 4;
  changed[0].payload.context.mode.reverse();
  const diff = compareSemanticRecords(before, changed);
  assert.equal(diff.length, 1);
  assert.deepEqual(diff[0].changedFields.map(row => row.path), ['/payload/context/mode', '/payload/context/tier', '/payload/value/unit']);
  assert.deepEqual(diff[0].changedFields[0].before, ['first', 'second']);
  assert.deepEqual(diff[0].changedFields[0].after, ['second', 'first']);

  const nestedTimestampChange = structuredClone(noiseOnly);
  nestedTimestampChange[0].payload.context.updatedAt = '2026-03-01T00:00:00Z';
  assert.deepEqual(compareSemanticRecords(noiseOnly, nestedTimestampChange).map(row => row.changedFields[0].path), ['/payload/context/updatedAt']);
});

// Scenario: A confirmed change has an optional entity kind, a public evidence source, and a correction predecessor.
// Purpose: Preserve resolved provenance and the full supersedes chain in the Source-only projection and Markdown.
// Given a validator-approved synthetic contract, When a correction is projected, Then entity type, public URLs, snapshots, commits, and predecessor IDs remain traceable.
test('UnitT23_projects_resolved_entity_public_evidence_and_correction_chain', async () => {
  const contract = structuredClone(fixture);
  contract.fixtureOnly = false;
  const previous = contract.records.find(row => row.recordId === 'fixture:game-change:curve');
  previous.recordId = 'fixture:game-change:root';
  const correction = structuredClone(previous);
  correction.recordId = 'fixture:game-change:previous';
  correction.payload.supersedesChangeRef = { recordId: previous.recordId, gameReleaseId: previous.gameReleaseId };
  const current = structuredClone(correction);
  current.recordId = 'fixture:game-change:curve';
  current.payload.entityRef.kind = undefined;
  delete current.payload.entityRef.kind;
  current.payload.supersedesChangeRef = { recordId: correction.recordId, gameReleaseId: correction.gameReleaseId };
  current.payload.changedFields[0].field = 'damage|range\ncondition';
  contract.records.find(row => row.recordId === 'fixture:evidence:r2').payload.safeSummary = 'Code observation | approved\nsecond line';
  contract.records.push(correction, current);
  contract.publicationEligible = false;
  for (const record of contract.records) record.reviewState = 'approved';
  for (const tombstone of contract.tombstones) tombstone.reviewState = 'approved';
  contract.reviewReceipts = [];
  for (const record of contract.records) for (const target of record.reviewTargets ?? []) {
    contract.reviewReceipts.push(createReviewReceipt(contract, { ...target, recordId: record.recordId, gameReleaseId: record.gameReleaseId }, {
      reviewer: { kind: 'human', id: 'reviewer:synthetic-test' }, reviewedAt: '2026-01-01T00:00:00Z',
    }));
  }
  for (const tombstone of contract.tombstones) for (const target of tombstone.reviewTargets ?? []) {
    contract.reviewReceipts.push(createReviewReceipt(contract, { ...target, recordId: tombstone.recordId, gameReleaseId: tombstone.gameReleaseId }, {
      reviewer: { kind: 'human', id: 'reviewer:synthetic-test' }, reviewedAt: '2026-01-01T00:00:00Z',
    }));
  }
  contract.publicationEligible = true;
  const result = analyzeGameChangeTransition(contract, {
    fromGameReleaseId: 'fixture-r1', toGameReleaseId: 'fixture-r2', schema,
  });
  assert.equal(result.confirmedChanges.length, 3);
  const projected = result.confirmedChanges.find(row => row.changeId === 'fixture:game-change:curve');
  assert.equal(projected.entityKind, 'weapon');
  assert.deepEqual(projected.supersedesChangeRef, { recordId: 'fixture:game-change:previous', gameReleaseId: 'fixture-r2' });
  assert.deepEqual(projected.correctionChain.map(row => row.changeId), ['fixture:game-change:previous', 'fixture:game-change:root']);
  assert.equal(projected.evidence[0].publicUrl, 'https://example.invalid/synthetic/game-code/blob/cccccccccccccccccccccccccccccccccccccccc/fixture.lua');
  assert.equal(projected.evidence[0].sourceCommit, 'cccccccccccccccccccccccccccccccccccccccc');
  assert.equal(projected.comparison.fromCommit, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  assert.equal(projected.comparison.toCommit, 'cccccccccccccccccccccccccccccccccccccccc');
  const report = { sourceRevision: 'fixture-revision', webPublicationState: 'not-web-published', classification: result.classification, confirmedChanges: result.confirmedChanges };
  const markdown = (await import('../scripts/content/w12-game-changes.mjs')).renderTechnicalChangelogMarkdown(report);
  assert.match(markdown, /fixture:game-change:previous/u);
  assert.match(markdown, /fixture:game-change:root/u);
  assert.match(markdown, /https:\/\/example\.invalid\/synthetic\/game-code\/blob/u);
  assert.match(markdown, /cccccccccccccccccccccccccccccccccccccccc/u);
  assert.match(markdown, /damage\\\|range\\\\ncondition/u);
  assert.match(markdown, /Code observation \\\| approved second line/u);
});

// Scenario: A synthetic game-change row says approved without a current receipt and the package is fixture-only.
// Purpose: Never treat an author-controlled state flag or a test fixture as a publishable Source change.
// Given the representative fixture, When the review state is forged, Then validation rejects it; the valid pending row remains only a candidate.
test('UnitT20_requires_validator_derived_review_and_keeps_source_only_status', () => {
  const pending = analyzeGameChangeTransition(fixture, {
    fromGameReleaseId: 'fixture-r1', toGameReleaseId: 'fixture-r2', schema,
  });
  assert.equal(pending.classification, 'review-required');
  assert.equal(pending.confirmedChanges.length, 0);
  assert.equal(pending.webPublicationState, 'not-web-published');
  assert.equal(pending.candidateChanges.some(row => row.changeId === 'fixture:game-change:curve'), true);

  const forged = structuredClone(fixture);
  forged.records.find(row => row.kind === 'game-change').reviewState = 'approved';
  assert.throws(() => analyzeGameChangeTransition(forged, {
    fromGameReleaseId: 'fixture-r1', toGameReleaseId: 'fixture-r2', schema,
  }), /review-state-mismatch/i);
});

// Scenario: The existing W05 compiler creates an immutable candidate package with matching manifest and receipt.
// Purpose: Exercise the W12 CLI against real W05 artifact bytes without adding files to its immutable package.
// Given a synthetic candidate package, When the CLI derives its technical changelog, Then sourceRevision stays pinned and nothing claims Web publication.
test('UnitT21_cli_derives_idempotent_source_only_log_from_verified_w05_artifacts', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'w12-src-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const packageRoot = path.join(root, 'w05');
  const built = await buildContractCandidate({
    baseline: structuredClone(fixture), authoring: structuredClone(fixture), candidate: structuredClone(fixture), outRoot: packageRoot,
  });
  const packageDirectory = path.join(packageRoot, built.receipt.outputDirectory);
  const beforeBytes = await Promise.all(['technical.json', 'source-manifest.json', 'source-receipt.json']
    .map(name => readFile(path.join(packageDirectory, name))));
  const cli = path.join(sourceRoot, 'scripts/w12-game-changes.mjs');
  const outputRoot = path.join(root, 'w12-output');
  const args = [cli, '--package-dir', packageDirectory, '--from-release', 'fixture-r1', '--to-release', 'fixture-r2', '--out-dir', outputRoot];
  const first = spawnSync(process.execPath, args, { cwd: sourceRoot, encoding: 'utf8' });
  assert.equal(first.status, 0, first.stderr);
  const summary = JSON.parse(first.stdout);
  assert.equal(summary.sourceRevision, built.receipt.sourceRevision);
  assert.equal(summary.confirmedChangeCount, 0);
  assert.equal(summary.webPublicationState, 'not-web-published');
  const reportPath = path.join(summary.outputDirectory, 'game-changes.json');
  const report = JSON.parse(await readFile(reportPath, 'utf8'));
  assert.equal(report.sourceRevision, built.receipt.sourceRevision);
  assert.equal(Object.hasOwn(report, 'contentVersion'), false);
  const second = spawnSync(process.execPath, args, { cwd: sourceRoot, encoding: 'utf8' });
  assert.equal(second.status, 0, second.stderr);
  const afterBytes = await Promise.all(['technical.json', 'source-manifest.json', 'source-receipt.json']
    .map(name => readFile(path.join(packageDirectory, name))));
  assert.deepEqual(afterBytes, beforeBytes, 'the W12 report must leave the W05 package byte-identical');
});

// Scenario: A technical file differs from the exact bytes listed by its W05 manifest.
// Purpose: Stop report generation before projecting tampered or unverified Source facts.
// Given a candidate package with one changed byte, When W12 verifies the package, Then it rejects the mismatch.
test('UnitT22_rejects_changed_w05_technical_bytes', async t => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'w12-src-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const built = await buildContractCandidate({
    baseline: structuredClone(fixture), authoring: structuredClone(fixture), candidate: structuredClone(fixture), outRoot: path.join(root, 'w05'),
  });
  const packageDirectory = path.join(root, 'w05', built.receipt.outputDirectory);
  const analysisPath = path.join(packageDirectory, 'analysis.md');
  const analysisBytes = await readFile(analysisPath);
  await writeFile(analysisPath, Buffer.concat([analysisBytes, Buffer.from(' ')]));
  await assert.rejects(verifyW05TechnicalPackage(packageDirectory), /artifact bytes do not match source manifest: analysis\.md/i);
  await writeFile(analysisPath, analysisBytes);
  const technicalPath = path.join(packageDirectory, 'technical.json');
  await writeFile(technicalPath, Buffer.concat([await readFile(technicalPath), Buffer.from(' ')]));
  await assert.rejects(verifyW05TechnicalPackage(packageDirectory), /artifact bytes do not match source manifest: technical\.json/i);
});
