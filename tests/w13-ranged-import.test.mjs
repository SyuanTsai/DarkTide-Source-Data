import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReviewReceipt } from '../scripts/content/contract-validator.mjs';
import { buildW13LasgunP1M1Import, EXPECTED_BASE_SHA256, sourceTextSha256, writeW13LasgunP1M1Import } from '../scripts/content/imports/w13-lasgun-p1-m1.mjs';

const SOURCE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const FROZEN_BASE_COMMIT = 'a2f613edb37ea2653ed08d1fc1f65ea62a669528';
const FROZEN_BASE_PATH = 'content/authoring/v2/w07-weapons.json';
const FROZEN_BASE_SHA256 = 'cc7975845b98eb3b82e24357c29f72e47569f063efd4f4ab10bd701798057d77';
const W13_ID_PREFIXES = [
  'darktide:attack-profile:lasgun:p1:lasgun_p1_m1:',
  'darktide:stat-curve:lasgun-p1-m1-ammo-',
  'darktide:stat-definition:lasgun-p1-m1-ammo-'
];
const isW13Record = (record) => record.recordId === 'darktide:weapon:lasgun:p1-m1'
  || record.recordId === 'darktide:damage-profile:lasgun-p1:default_lasgun_killshot'
  || record.recordId === 'darktide:damage-profile:lasgun-p1:lasgun_p1_m1_killshot'
  || W13_ID_PREFIXES.some((prefix) => record.recordId.startsWith(prefix));

async function copyRelative(sourceRoot, targetRoot, relativePath) {
  const source = path.join(sourceRoot, relativePath);
  const target = path.join(targetRoot, relativePath);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(source, target);
}

async function makePortableImportRoot() {
  const root = await mkdtemp(path.join(os.tmpdir(), 'w13-source-import-'));
  try {
    const requiredFiles = [
      'content/imports/w13/closure-inventory.json',
      'content/imports/w13/lasgun-p1-m1-facts.json',
      'content/schema/v2/source-contract.schema.json'
    ];
    for (const relativePath of requiredFiles) await copyRelative(SOURCE_ROOT, root, relativePath);
    const frozenBaselineBytes = execFileSync('git', ['-C', SOURCE_ROOT, 'show', `${FROZEN_BASE_COMMIT}:${FROZEN_BASE_PATH}`], {
      encoding: null,
      maxBuffer: 16 * 1024 * 1024
    });
    assert.equal(createHash('sha256').update(frozenBaselineBytes).digest('hex'), FROZEN_BASE_SHA256,
      'The isolated writer fixture must restore the exact historical W07 authoring blob');
    const authoringPath = path.join(root, FROZEN_BASE_PATH);
    await mkdir(path.dirname(authoringPath), { recursive: true });
    await writeFile(authoringPath, frozenBaselineBytes);
    const rawSource = path.join(SOURCE_ROOT, 'content/imports/w13/raw');
    const rawTarget = path.join(root, 'content/imports/w13/raw');
    await mkdir(rawTarget, { recursive: true });
    for (const name of await readdir(rawSource)) await copyFile(path.join(rawSource, name), path.join(rawTarget, name));
    const authoring = JSON.parse(await readFile(authoringPath, 'utf8'));
    const baselineBytes = await readFile(authoringPath);
    assert.equal(createHash('sha256').update(baselineBytes).digest('hex'), EXPECTED_BASE_SHA256,
      'The frozen historical Git blob must match the exact approved W07 baseline bytes');
    assert.ok(!authoring.records.some(isW13Record), 'The isolated writer root must not contain W13 records before apply');
    return root;
  } catch (error) {
    await rm(root, { recursive: true, force: true });
    throw error;
  }
}

// Scenario: The pinned public-code closure contains one same-release ranged weapon candidate.
// Purpose: Protect the W13 addition from becoming an unpinned or publication-ready data copy.
test('UnitT10_w13-lasgun-import-retains-pinned-ranged-candidate', async () => {
  const root = await makePortableImportRoot();
  try {
    const result = await buildW13LasgunP1M1Import({ root });
    const w13Records = result.candidate.records.filter(isW13Record);
    const weapon = w13Records.find((record) => record.recordId === 'darktide:weapon:lasgun:p1-m1');
    const attackProfiles = w13Records.filter((record) => record.kind === 'attack-profile');
    const m1Profile = w13Records.find((record) => record.recordId === 'darktide:damage-profile:lasgun-p1:lasgun_p1_m1_killshot');
    const parentProfile = w13Records.find((record) => record.recordId === 'darktide:damage-profile:lasgun-p1:default_lasgun_killshot');

    assert.ok(weapon, 'The importer must produce the selected real lasgun record');
    assert.equal(weapon.gameReleaseId, 'darktide:1.13.2');
    assert.ok(['pending', 'approved', 'rejected', 'stale'].includes(weapon.reviewState));
    assert.equal(result.validation.valid, true);
    assert.equal(result.validation.publicationEligible, result.candidate.publicationEligible);
    assert.equal(result.delta.sourceSnapshot.snapshot.snapshotId, 'lasgun-p1-m1-w13-1.13.2-16-files');
    assert.equal(result.sourceByteCount, 244937);
    assert.equal(result.delta.sourceRefs.length, 16);
    assert.ok(result.delta.sourceRefs.every((source) => source.commit === 'ba6c148f3c2768ca3ce20d846a12e56e2f433f3e'
      && source.gameReleaseId === 'darktide:1.13.2' && source.snapshot.snapshotId === result.delta.sourceSnapshot.snapshot.snapshotId));
    assert.ok(w13Records.every((record) => ['pending', 'approved', 'rejected', 'stale'].includes(record.reviewState)
      && record.gameReleaseId === 'darktide:1.13.2'));
    assert.deepEqual(attackProfiles.map(({ payload }) => [payload.action, payload.mode]), [
      ['action_shoot_hip', 'hipfire'],
      ['action_shoot_zoomed', 'ads']
    ]);
    assert.deepEqual(weapon.payload.attackProfileRefs.map((ref) => ref.recordId), attackProfiles.map((record) => record.recordId));
    assert.deepEqual(weapon.payload.statTables.map((table) => table.properties[0].orderedValues.map((value) => value.rawValue)), [
      ['80', '120'],
      ['480', '960']
    ]);
    assert.deepEqual(weapon.payload.statRefs.map((ref) => ref.gameReleaseId), ['darktide:1.13.2', 'darktide:1.13.2']);
    assert.ok(m1Profile && parentProfile, 'The candidate must preserve the M1 override and its parent profile separately');
    assert.deepEqual(m1Profile.payload.rawSourceDefinition.parentProfileRef, {
      recordId: 'darktide:damage-profile:lasgun-p1:default_lasgun_killshot',
      gameReleaseId: 'darktide:1.13.2'
    });
    const parentNearResistant = parentProfile.payload.rawSourceDefinition.tables
      .find((table) => table.tableKey === 'lasgun_armor_mod_default.near.attack').orderedValues
      .find((point) => point.sourceLocator.fieldPath.endsWith('.resistant'));
    const m1NearResistant = m1Profile.payload.rawSourceDefinition.tables
      .find((table) => table.tableKey === 'lasgun_p1_m1_killshot.armor_damage_modifier_ranged.near.attack').orderedValues[0];
    assert.equal(parentNearResistant.rawValue, 'damage_lerp_values.lerp_0_4');
    assert.equal(m1NearResistant.rawValue, 'damage_lerp_values.lerp_0_75');
    assert.equal(result.reviewState.split(',').every((state) => ['pending', 'approved', 'rejected', 'stale'].includes(state)), true);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: The W13 importer is checked out with CRLF on Windows or LF in a clean clone.
// Purpose: Keep the pinned importer source digest stable across Git line-ending conversion.
test('UnitT11_w13-tool-source-hash-normalizes-windows-line-endings', () => {
  const lf = 'const pinned = true;\nexport default pinned;\n';
  const crlf = lf.replace(/\n/gu, '\r\n');
  assert.equal(sourceTextSha256(crlf), sourceTextSha256(lf));
});

// Scenario: A clean temporary checkout contains only the importer inputs and schema.
// Purpose: Prove initial apply, repeat apply, and rejection of unrelated edits without external W13 evidence paths.
test('UnitT12_w13-writer-applies-once-repeats-and-refuses-unrelated-authoring-change', async () => {
  const root = await makePortableImportRoot();
  try {
    const inputFactsPath = path.join(root, 'content/imports/w13/lasgun-p1-m1-facts.json');
    const inputFactsBefore = await readFile(inputFactsPath);
    const first = await writeW13LasgunP1M1Import({ root });
    assert.equal(first.written, true);
    assert.equal(first.idempotent, false);
    assert.deepEqual(await readFile(inputFactsPath), inputFactsBefore, 'The fixed input facts must remain unchanged');

    const generatedPaths = first.outputPaths;
    const firstOutputBytes = await Promise.all(generatedPaths.map((filePath) => readFile(filePath)));
    const second = await writeW13LasgunP1M1Import({ root });
    assert.equal(second.written, false);
    assert.equal(second.idempotent, true);
    assert.deepEqual(await Promise.all(generatedPaths.map((filePath) => readFile(filePath))), firstOutputBytes);

    const authoringPath = path.join(root, 'content/authoring/v2/w07-weapons.json');
    const changedAuthoring = JSON.parse((await readFile(authoringPath, 'utf8')));
    changedAuthoring.records[0].payload.unrelatedW13WriterProbe = true;
    await writeFile(authoringPath, `${JSON.stringify(changedAuthoring, null, 2)}\n`);
    await assert.rejects(writeW13LasgunP1M1Import({ root }), /unrecognized W07 authoring candidate|unrelated W07 or W13 Source candidate/u);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: A pinned raw input is modified while its path and declared inventory stay fixed.
// Purpose: Reject same-path source edits before they can produce a candidate or change the snapshot digest.
test('UnitT13_w13-raw-snapshot-tampering-is-rejected', async () => {
  const root = await makePortableImportRoot();
  try {
    const rawPath = path.join(root, 'content/imports/w13/raw/lasgun_p1_m1.lua.b64');
    const original = Buffer.from((await readFile(rawPath, 'utf8')).trim(), 'base64');
    original[0] ^= 0x01;
    await writeFile(rawPath, `${original.toString('base64')}\n`);
    await assert.rejects(buildW13LasgunP1M1Import({ root }), /raw source SHA-256 mismatch|raw source Git blob SHA-1 mismatch/u);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: The M1 override fact is redirected to the parent profile's nearby value 50 at line 183.
// Purpose: Prevent a parent-profile row from being relabeled as an M1 override while the raw file pin remains unchanged.
test('UnitT14_w13-parent-row-cannot-be-relabelled-as-m1-override', async () => {
  const root = await makePortableImportRoot();
  try {
    const factsPath = path.join(root, 'content/imports/w13/lasgun-p1-m1-facts.json');
    const facts = JSON.parse(await readFile(factsPath, 'utf8'));
    facts.fixedRows.damageOverrideAttackMin.line = 183;
    facts.fixedRows.damageOverrideAttackMin.rawValue = '50';
    await writeFile(factsPath, `${JSON.stringify(facts, null, 2)}\n`);
    await assert.rejects(buildW13LasgunP1M1Import({ root }), /fixed facts input SHA-256 mismatch/u);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

// Scenario: The pending W13 candidate receives isolated synthetic approvals in a temporary root.
// Purpose: Validate the later approved state without writing synthetic receipts into the real authoring candidate.
test('UnitT15_w13-approved-candidate-is-read-only-and-preserves-receipts', async () => {
  const root = await makePortableImportRoot();
  try {
    const pending = await buildW13LasgunP1M1Import({ root });
    const approved = structuredClone(pending.candidate);
    const records = approved.records.filter(isW13Record);
    const targets = records.flatMap((record) => record.reviewTargets.map((target) => ({
      recordId: record.recordId,
      gameReleaseId: record.gameReleaseId,
      ...target
    })));
    const syntheticReceipts = targets.map((target) => createReviewReceipt(approved, target, {
      reviewer: { kind: 'human', id: 'synthetic-test-reviewer' },
      reviewedAt: '2026-10-24T00:00:00Z'
    }));
    approved.reviewReceipts.push(...syntheticReceipts);
    for (const record of records) record.reviewState = 'approved';
    approved.publicationEligible = true;

    const authoringPath = path.join(root, 'content/authoring/v2/w07-weapons.json');
    await writeFile(authoringPath, `${JSON.stringify(approved, null, 2)}\n`);
    const bytesBeforeReadOnly = await readFile(authoringPath);
    const revalidated = await buildW13LasgunP1M1Import({ root });
    assert.equal(revalidated.existingCandidate, true);
    assert.equal(revalidated.reviewState, 'approved');
    assert.equal(revalidated.validation.valid, true);
    assert.equal(revalidated.validation.publicationEligible, true);
    assert.deepEqual(revalidated.candidate.reviewReceipts.filter((receipt) => isW13Record({ recordId: receipt.target.recordId })), syntheticReceipts);

    const written = await writeW13LasgunP1M1Import({ root });
    assert.equal(written.written, true, 'Only missing generated metadata may be written for an existing approved candidate');
    assert.equal(written.idempotent, false);
    assert.equal(written.existingCandidate, true);
    assert.deepEqual(await readFile(authoringPath), bytesBeforeReadOnly);
    const afterWrite = JSON.parse(await readFile(authoringPath, 'utf8'));
    assert.deepEqual(afterWrite.reviewReceipts.filter((receipt) => isW13Record({ recordId: receipt.target.recordId })), syntheticReceipts);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
