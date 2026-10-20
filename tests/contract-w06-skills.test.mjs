import test from 'node:test';
import assert from 'node:assert/strict';
import { loadContractSchema, validateSourceContract } from '../scripts/content/contract-validator.mjs';
import { buildSkillsBlessingsBundle, writeSkillsBlessingsOutputs } from '../scripts/content/contract-w06-skills.mjs';
import { readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const schema = await loadContractSchema();
const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Scenario: The fixed W01 input is projected into the W06 Source contract with a displayed skill claim and one partial chainaxe blessing closure.
// Purpose: Protect exact typed values, four blessing tiers, pending state, evidence links, source snapshots, and explicit W07/localization limits.
test('UnitT10_projects-w01-skill-display-and-blessing-closure-with-explicit-limits', async () => {
  const authoring = JSON.parse(await readFile(path.join(sourceRoot, 'content', 'authoring', 'w01-real-representative-candidate.json'), 'utf8'));
  const authoredRecords = new Map(authoring.records.map((record) => [record.recordId, record]));
  const { contract, manifest } = await buildSkillsBlessingsBundle();
  const records = new Map(contract.records.map((record) => [record.recordId, record]));
  const skill = records.get('darktide:skill:psyker:brain-burst-improved');
  const displayClaimId = 'darktide:claim:psyker:brain-burst-improved-description-display-percent';
  const displayClaim = records.get(displayClaimId);
  const blessing = records.get('darktide:blessing:chainaxe:p1-movement-speed-on-activation');
  const variant = records.get('darktide:blessing-variant:chainaxe:p1-movement-speed-on-activation');
  const duration = records.get('darktide:claim:chainaxe:p1-movement-speed-on-activation-duration');

  assert.ok(skill.payload.claimRefs.some((ref) => ref.recordId === displayClaimId));
  assert.equal(displayClaim.payload.value.decimal, '50');
  assert.equal(displayClaim.payload.value.unit, 'percent');
  assert.deepEqual(variant.payload.tierValues.map((entry) => entry.value.decimal), ['0.17', '0.18', '0.19', '0.2']);
  assert.deepEqual(variant.payload.weaponRefs, []);
  assert.deepEqual(variant.dataCoverage.missing, [{ field: '/payload/weaponRefs', reasonCode: 'NOT_IMPORTED' }]);
  assert.equal(duration.payload.value.decimal, '2');
  assert.equal(duration.payload.value.unit, 's');
  assert.equal(blessing.payload.nameKey.status, 'unknown');
  assert.equal(blessing.payload.nameKey.reasonCode, 'NOT_VERIFIED');
  assert.deepEqual(blessing.dataCoverage.missing, [{ field: '/payload/nameKey', reasonCode: 'NOT_VERIFIED' }]);
  const expectedSkillClaims = [
    ...authoredRecords.get(skill.recordId).payload.claimRefs,
    displayClaimId
  ];
  assert.deepEqual(skill.payload.claimRefs.map((ref) => ref.recordId), expectedSkillClaims);
  assert.deepEqual(variant.payload.definedTiers, authoredRecords.get(variant.recordId).payload.definedTiers);
  assert.deepEqual(variant.payload.obtainableTiers, authoredRecords.get(variant.recordId).payload.obtainableTiers);
  for (const claimId of [
    displayClaimId,
    'darktide:claim:chainaxe:p1-movement-speed-on-activation-duration',
    ...[1, 2, 3, 4].map((tier) => 'darktide:claim:chainaxe:p1-movement-speed-on-activation-tier' + tier + '-display-percent')
  ]) {
    const authored = authoredRecords.get(claimId);
    const projected = records.get(claimId);
    assert.deepEqual(projected.payload.value, authored.payload.value);
    assert.deepEqual(projected.payload.context, authored.payload.context);
    assert.equal(projected.payload.property, authored.payload.property);
    assert.equal(projected.payload.basis, authored.payload.basis);
    assert.deepEqual(projected.payload.evidenceRefs.map((ref) => ref.recordId), authored.payload.evidenceRefs);
    assert.deepEqual(projected.sourceRefs.map((ref) => ref.sourceId), authored.sourceRefs);
  }
  for (const evidenceId of [
    'darktide:evidence:psyker:brain-burst-improved-description-display-percent-code',
    'darktide:evidence:chainaxe:p1-movement-speed-on-activation-code',
    ...[1, 2, 3, 4].map((tier) => 'darktide:evidence:chainaxe:p1-movement-speed-on-activation-tier' + tier + '-display-percent-code')
  ]) {
    const authored = authoredRecords.get(evidenceId);
    const projected = records.get(evidenceId);
    assert.equal(projected.payload.safeSummary, authored.payload.safeSummary);
    assert.equal(projected.payload.sourceRef.sourceId, authored.payload.sourceRef);
    assert.deepEqual(projected.sourceRefs.map((ref) => ref.sourceId), authored.sourceRefs);
  }
  assert.deepEqual(contract.reviewReceipts, []);
  assert.equal(contract.publicationEligible, false);
  assert.ok(contract.records.every((record) => record.reviewState === 'pending'));
  assert.equal(contract.records.length, 31);
  assert.equal(contract.records.filter((record) => record.kind === 'claim').length, 10);
  assert.equal(contract.records.filter((record) => record.kind === 'evidence').length, 16);
  assert.equal(contract.gameReleases[0].snapshot.snapshotId, 'psyker-cited-code-1.13.1-15-files');
  assert.equal(contract.gameReleases[0].snapshot.manifestSha256, '28bcb2490b628da9506e0face79266ec8714e919789b9cdb4ee471098f709e38');
  assert.ok(contract.sourceRefs.filter((source) => source.gameReleaseId === 'darktide:1.13.2').every((source) =>
    source.snapshot.manifestSha256 === '1f5d669eb90d117bee30ce4399d975ca274ecb0092cc4e3b457225a374f6b33a'));
  assert.equal(contract.gameReleases.find((release) => release.gameReleaseId === 'darktide:1.13.2').snapshot.manifestSha256, '1f5d669eb90d117bee30ce4399d975ca274ecb0092cc4e3b457225a374f6b33a');
  assert.equal(contract.gameReleases.find((release) => release.gameReleaseId === 'darktide:1.13.2').snapshot.contentSha256, '71b643339af89547c47c84453382723d63a1c7cb1936f68e314a06dd124fca9a');
  assert.equal(manifest.sourceCodeComparison.uniqueFileCount, 15);
  assert.equal(manifest.currentCodeSnapshot.files.length, 18);
  assert.equal(manifest.currentCodeSnapshot.previousW05Snapshot.fileCount, 15);
  assert.equal(manifest.currentCodeSnapshot.addedW06Sources.length, 3);
  assert.equal(manifest.sourceInput.projectedOriginalRecordCount, 29);
  assert.equal(manifest.weaponAssociations[0].recordId, authoredRecords.get(variant.recordId).payload.weaponRefs[0]);
  assert.equal(manifest.weaponAssociations[0].status, 'NOT_IMPORTED');
  assert.equal(manifest.review.receipts, 0);
  assert.equal(manifest.steamBuild.status, 'UNVERIFIED');
  assert.equal(validateSourceContract(contract, { schema }).valid, true);
});

// Scenario: Given identical fixed W01 inputs and output paths, when W06 builds and writes the candidate twice, the contract, manifest, docs, and generated files remain byte-for-byte stable.
// Purpose: Guard against accidental mapper nondeterminism before human review and against overwriting reviewed edits.
test('InterT10_build-and-output-are-deterministic-and-protect-existing-review-bytes', async () => {
  const first = await buildSkillsBlessingsBundle({ sourceRoot });
  const second = await buildSkillsBlessingsBundle({ sourceRoot });
  assert.deepEqual(second, first);

  const tempRoot = await import('node:fs/promises').then(({ mkdtemp }) => mkdtemp(path.join(os.tmpdir(), 'w06-skills-output-')));
  const candidatePath = path.join(tempRoot, 'content', 'authoring', 'v2', 'w06-skills-blessings.json');
  const manifestPath = path.join(tempRoot, 'docs', 'contracts', 'w06', 'source-import.json');
  const docsPath = path.join(tempRoot, 'docs', 'contracts', 'w06', 'source-import.md');
  try {
    await writeSkillsBlessingsOutputs({ outRoot: tempRoot, bundle: first });
    const originalCandidate = await readFile(candidatePath);
    const originalManifest = await readFile(manifestPath);
    const originalDocs = await readFile(docsPath);
    await writeSkillsBlessingsOutputs({ outRoot: tempRoot, bundle: second });
    assert.deepEqual(await readFile(candidatePath), originalCandidate);
    assert.deepEqual(await readFile(manifestPath), originalManifest);
    assert.deepEqual(await readFile(docsPath), originalDocs);

    await writeFile(manifestPath, Buffer.from('human edit\n'));
    const editedManifest = await readFile(manifestPath);
    await assert.rejects(
      writeSkillsBlessingsOutputs({ outRoot: tempRoot, bundle: first }),
      /Refusing to overwrite existing W06 output with different bytes: docs\/contracts\/w06\/source-import\.json/u
    );
    assert.deepEqual(await readFile(candidatePath), originalCandidate);
    assert.deepEqual(await readFile(manifestPath), editedManifest);
    assert.deepEqual(await readFile(docsPath), originalDocs);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
