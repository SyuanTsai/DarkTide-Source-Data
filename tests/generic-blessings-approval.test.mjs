import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { readAuthoringBundle, writeAuthoringBundle } from '../scripts/content/lib/authoring-bundle.mjs';
import { createReviewReceipt, validateSourceContractFromDisk } from '../scripts/content/contract-validator.mjs';
import {
  applyGenericBlessingsApproval,
  prepareGenericBlessingsApproval
} from '../scripts/content/imports/generic-blessings-approval.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const candidatePath = path.join(ROOT, 'content', 'imports', 'generic', 'blessings-candidates.json');
const textPath = path.join(ROOT, 'content', 'imports', 'generic', 'blessings-text.json');

// Scenario: The apply CLI receives a valid option shape with a nonexistent approval file.
// Purpose: Confirm argument parsing reaches file validation instead of rejecting the valid invocation as usage.
test('UnitT40_apply_cli_accepts_three_arguments_before_checking_approval_file', () => {
  const script = path.join(ROOT, 'scripts', 'content', 'imports', 'generic-blessings-approval.mjs');
  const result = spawnSync(process.execPath, [script, '--apply', '--approval', path.join(os.tmpdir(), 'nonexistent-syp-288-approval.json')], { encoding: 'utf8' });
  assert.notEqual(result.status, 0);
  assert.doesNotMatch(result.stderr, /Usage:/u);
});

function identityFor(traitName) {
  const match = /^weapon_trait_bespoke_(.+)_p(\d+)_(.+)$/u.exec(traitName);
  if (!match) throw new Error(`Unexpected fixture trait: ${traitName}`);
  const stable = `${match[1]}:p${match[2]}-${match[3].replaceAll('_', '-')}`;
  return `darktide:blessing:${stable}`;
}

function closure(records, startingId) {
  const byId = new Map(records.map((record) => [record.recordId, record]));
  const wanted = new Set([startingId]);
  for (const recordId of wanted) {
    const record = byId.get(recordId);
    for (const match of JSON.stringify(record).matchAll(/"recordId":"([^"]+)"/gu)) {
      if (byId.has(match[1])) wanted.add(match[1]);
    }
  }
  return records.filter((record) => wanted.has(record.recordId));
}

async function writeFixture(root) {
  const [candidate, text] = await Promise.all([
    readFile(candidatePath, 'utf8').then(JSON.parse),
    readFile(textPath, 'utf8').then(JSON.parse)
  ]);
  const [trait, existingTrait] = text.traits.filter((item) => item.nameHash !== 'NOT_FOUND').slice(0, 2);
  const records = closure(candidate.records, identityFor(trait.traitName));
  const existingRecords = closure(candidate.records, identityFor(existingTrait.traitName));
  const bundleFor = (sourceRecords) => {
    const sourceIds = new Set(sourceRecords.flatMap((record) => record.sourceRefs.map((ref) => ref.sourceId)));
    return {
      ...candidate,
      sourceRefs: candidate.sourceRefs.filter((source) => sourceIds.has(source.sourceId)),
      records: structuredClone(sourceRecords),
      tombstones: [],
      reviewReceipts: [],
      publicationEligible: false
    };
  };
  const fixtureCandidate = bundleFor(records);
  const fixtureAuthoring = bundleFor(existingRecords);
  for (const record of fixtureAuthoring.records) record.reviewState = 'approved';
  fixtureAuthoring.reviewReceipts = fixtureAuthoring.records.flatMap((record) => (record.reviewTargets ?? []).map((target) =>
    createReviewReceipt(fixtureAuthoring, { recordId: record.recordId, gameReleaseId: record.gameReleaseId, ...target }, {
      reviewer: { kind: 'human', id: 'synthetic-existing-reviewer' }, reviewedAt: '2026-11-01T00:00:00.000Z'
    })));
  fixtureAuthoring.publicationEligible = true;
  const fixtureText = { ...text, traits: [trait] };
  await mkdir(path.join(root, 'content', 'imports', 'generic'), { recursive: true });
  await mkdir(path.join(root, 'content', 'authoring', 'v2'), { recursive: true });
  await Promise.all([
    writeFile(path.join(root, 'content', 'imports', 'generic', 'blessings-candidates.json'), `${JSON.stringify(fixtureCandidate, null, 2)}\n`),
    writeFile(path.join(root, 'content', 'imports', 'generic', 'blessings-text.json'), `${JSON.stringify(fixtureText, null, 2)}\n`),
    writeAuthoringBundle(root, fixtureAuthoring)
  ]);
  return { trait, records };
}

// Scenario: One known localized trait and its transitive references are prepared twice from a reduced temporary input.
// Purpose: Keep the reviewed canonical package deterministic while excluding unmatched records and retaining their full claim/evidence closure.
test('UnitT10_prepare_is_deterministic_and_selects_the_complete_known_trait_closure', async (context) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'generic-blessings-approval-'));
  context.after(() => rm(root, { recursive: true, force: true }));
  const fixture = await writeFixture(root);
  const sourceId = fixture.records[0].sourceRefs[0].sourceId;
  const nameKeyEvidenceByKey = new Map([[fixture.trait.nameKey, { sourceId }]]);
  const first = await prepareGenericBlessingsApproval({ root, outputDir: path.join(root, 'first'), nameKeyEvidenceByKey });
  const second = await prepareGenericBlessingsApproval({ root, outputDir: path.join(root, 'second'), nameKeyEvidenceByKey });

  assert.equal(first.package.packageDigest, second.package.packageDigest);
  assert.deepEqual(first.subset.records.map((record) => record.recordId), fixture.records.map((record) => record.recordId));
  const blessing = first.subset.records.find((record) => record.kind === 'blessing');
  assert.equal(blessing.payload.nameKey, fixture.trait.nameKey);
  assert.equal(blessing.dataCoverage.missing.some((missing) => missing.field === '/payload/nameKey'), false);
  assert.ok(blessing.sourceRefs.some((source) => source.sourceId === sourceId));
  assert.deepEqual(Object.keys(first.package).sort(), ['inputSha256', 'packageDigest', 'recordIds', 'schema', 'summary']);
  assert.equal(first.package.recordIds.includes(blessing.recordId), true);
  assert.equal(await readFile(path.join(root, 'first', 'review-package.json'), 'utf8'), await readFile(path.join(root, 'second', 'review-package.json'), 'utf8'));
});

// Scenario: A text name key has no public code location that contains the key.
// Purpose: Keep the blessing name unknown and its NOT_VERIFIED coverage intact instead of treating a trait-definition source as localization proof.
test('UnitT15_prepare_keeps_name_key_unknown_without_exact_public_source_evidence', async (context) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'generic-blessings-approval-'));
  context.after(() => rm(root, { recursive: true, force: true }));
  await writeFixture(root);
  const prepared = await prepareGenericBlessingsApproval({ root, outputDir: path.join(root, 'review'), nameKeyEvidenceByKey: new Map() });
  const blessing = prepared.subset.records.find((record) => record.kind === 'blessing');

  assert.deepEqual(blessing.payload.nameKey, { status: 'unknown', reasonCode: 'NOT_VERIFIED' });
  assert.ok(blessing.dataCoverage.missing.some((missing) => missing.field === '/payload/nameKey' && missing.reasonCode === 'NOT_VERIFIED'));
  assert.equal(prepared.package.summary.nameKey.publiclyVerified, 0);
  assert.equal(prepared.package.summary.nameKey.unknown, 1);
});

// Scenario: A synthetic human approval names the digest prepared from a reduced temporary candidate and is then applied to a temporary w07 copy.
// Purpose: Require a package-bound human decision before receipts can promote every selected record to a formal compilable source contract.
test('UnitT20_apply_writes_complete_human_receipts_and_formal_compile_accepts_the_temporary_copy', async (context) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'generic-blessings-approval-'));
  context.after(() => rm(root, { recursive: true, force: true }));
  await writeFixture(root);
  const candidate = JSON.parse(await readFile(path.join(root, 'content', 'imports', 'generic', 'blessings-candidates.json'), 'utf8'));
  const trait = (JSON.parse(await readFile(path.join(root, 'content', 'imports', 'generic', 'blessings-text.json'), 'utf8'))).traits[0];
  const sourceId = candidate.records[0].sourceRefs[0].sourceId;
  const nameKeyEvidenceByKey = new Map([[trait.nameKey, { sourceId }]]);
  const prepared = await prepareGenericBlessingsApproval({ root, outputDir: path.join(root, 'review'), nameKeyEvidenceByKey });
  const approvalPath = path.join(root, 'approval.json');
  await writeFile(approvalPath, `${JSON.stringify({
    decision: 'approved',
    reviewer: { kind: 'human', id: 'synthetic-test-reviewer' },
    reviewedAt: '2026-11-03T00:00:00.000Z',
    reviewedPackage: { packageDigest: prepared.package.packageDigest }
  }, null, 2)}\n`);

  const result = await applyGenericBlessingsApproval({ root, approvalPath, nameKeyEvidenceByKey });
  const { bundle: applied } = await readAuthoringBundle(root);
  const appliedIds = new Set(prepared.subset.records.map((record) => record.recordId));
  const validation = await validateSourceContractFromDisk(applied);

  const authoringPath = path.join(root, 'content', 'authoring', 'v2', 'w07');
  const entries = await readdir(authoringPath, { recursive: true, withFileTypes: true });
  const files = entries.filter((entry) => entry.isFile()).map((entry) => path.join(entry.parentPath, entry.name));
  const fileBytes = await Promise.all(files.map((file) => readFile(file)));
  assert.equal(result.authoringFileCount, files.length);
  assert.equal(result.authoringBytes, fileBytes.reduce((total, bytes) => total + bytes.length, 0));
  assert.equal(result.addedReceiptCount, prepared.subset.records.reduce((count, record) => count + (record.reviewTargets?.length ?? 0), 0));
  assert.equal(validation.valid, true, JSON.stringify(validation.issues, null, 2));
  assert.equal(result.formalReceipt.publicationEligible, true);
  assert.equal(result.formalReceipt.previewOnly, false);
  assert.ok(applied.records.filter((record) => appliedIds.has(record.recordId)).every((record) => record.reviewState === 'approved'));
});

// Scenario: An approval is malformed or names a different package digest.
// Purpose: Fail before any authoring write so a stale or rejected decision cannot alter w07.
test('UnitT30_rejects_nonapproved_or_mismatched_approval_without_writing_the_temporary_copy', async (context) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'generic-blessings-approval-'));
  context.after(() => rm(root, { recursive: true, force: true }));
  await writeFixture(root);
  await prepareGenericBlessingsApproval({ root, outputDir: path.join(root, 'review'), nameKeyEvidenceByKey: new Map() });
  const authoringPath = path.join(root, 'content', 'authoring', 'v2', 'w07');
  const snapshot = async () => {
    const entries = await readdir(authoringPath, { recursive: true, withFileTypes: true });
    const files = entries.filter((entry) => entry.isFile()).map((entry) => path.join(entry.parentPath, entry.name)).sort();
    return Promise.all(files.map(async (file) => [path.relative(authoringPath, file), await readFile(file)]));
  };
  const before = await snapshot();
  const approvalPath = path.join(root, 'bad-approval.json');
  await writeFile(approvalPath, JSON.stringify({
    decision: 'rejected',
    reviewer: { kind: 'human', id: 'synthetic-test-reviewer' },
    reviewedAt: '2026-11-03T00:00:00.000Z',
    reviewedPackage: { packageDigest: '0'.repeat(64) }
  }));

  await assert.rejects(applyGenericBlessingsApproval({ root, approvalPath }), /approved/);
  assert.deepEqual(await snapshot(), before);
  await writeFile(approvalPath, JSON.stringify({
    decision: 'approved', reviewer: { kind: 'human', id: 'synthetic-test-reviewer' },
    reviewedAt: '2026-11-03T00:00:00.000Z', reviewedPackage: { packageDigest: '0'.repeat(64) }
  }));
  await assert.rejects(applyGenericBlessingsApproval({ root, approvalPath, nameKeyEvidenceByKey: new Map() }), /packageDigest/);
  assert.deepEqual(await snapshot(), before);
});
