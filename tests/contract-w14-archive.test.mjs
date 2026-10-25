import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

import { buildW14ExtensionArchive, verifyW14ExtensionArchive } from '../scripts/content/contract-w14-archive.mjs';

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const gitBlobOid = bytes => createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${bytes.length}\0`), bytes])).digest('hex');

function inventoryFor(bytes) {
  return {
    schemaVersion: 'w14.extension-source-inventory.v1',
    sourceScope: {
      repository: 'https://github.com/SyuanTsai/Darktide-GamesLantern-Assisted-Translation',
      scopeManifestPath: 'docs/contracts/w03/scope-manifest.json',
      scopeManifestSha256: 'a'.repeat(64),
    },
    sourceSelection: 'pinned-git-objects-only',
    currentApproval: 'not-current-approved',
    protectedWorkingTreePaths: ['docs/protected-review.json'],
    files: [{
      sourceCommit: 'b'.repeat(40),
      sourcePath: 'data/v1/abilities.json',
      gitBlobOid: gitBlobOid(bytes),
      normalization: 'raw',
      sha256: sha256(bytes),
      byteLength: bytes.length,
    }],
  };
}

// Scenario: fixed source blobs are archived in a deterministic, verifiable legacy package.
// Purpose: preserve original bytes, commit/path/blob identity, and explicit protected omissions without treating the archive as current approved data.
// Given one pinned source inventory and exact Git blob bytes, when the archive is built twice, then both archive manifests and compressed files are byte-identical and verify back to the source bytes.
test('UnitT10_w14_extension_archive_roundtrips_exact_source_bytes_deterministically', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-archive-test-'));
  try {
    const outputOne = path.join(tempRoot, 'archive-one');
    const outputTwo = path.join(tempRoot, 'archive-two');
    const sourceBytes = Buffer.from('{"legacy":"raw\r\nbytes"}\n', 'utf8');
    const inventory = inventoryFor(sourceBytes);
    const readSourceBlob = async ({ commit, path: sourcePath }) => {
      assert.equal(commit, inventory.files[0].sourceCommit);
      assert.equal(sourcePath, inventory.files[0].sourcePath);
      return sourceBytes;
    };

    const first = await buildW14ExtensionArchive({ inventory, outputRoot: outputOne, readSourceBlob });
    const firstManifest = await readFile(path.join(outputOne, 'manifest.json'));
    const firstEntry = JSON.parse(firstManifest.toString('utf8')).files[0];
    const firstCompressed = await readFile(path.join(outputOne, ...firstEntry.archivePath.split('/')));
    const verified = await verifyW14ExtensionArchive({ archiveRoot: outputOne });
    const second = await buildW14ExtensionArchive({ inventory, outputRoot: outputTwo, readSourceBlob });

    assert.equal(first.fileCount, 1);
    assert.equal(firstManifest.toString('utf8').includes('not-current-approved'), true);
    assert.deepEqual(verified.files, [{ sourcePath: inventory.files[0].sourcePath, sha256: sha256(sourceBytes), byteLength: sourceBytes.length }]);
    assert.deepEqual(second, first);
    assert.deepEqual(await readFile(path.join(outputTwo, 'manifest.json')), firstManifest);
    assert.deepEqual(await readFile(path.join(outputTwo, ...firstEntry.archivePath.split('/'))), firstCompressed);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: unsafe or changed source metadata cannot create a partial archive.
// Purpose: fail closed on path traversal, duplicate source paths, and source bytes whose SHA/size/blob identity differs from the pinned inventory.
// Given malformed inventory or mismatching Git bytes, when archive creation runs, then it rejects before exposing the output directory.
test('UnitT20_w14_extension_archive_rejects_unsafe_or_mismatched_source_without_output', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-archive-invalid-test-'));
  try {
    const outputRoot = path.join(tempRoot, 'archive');
    const bytes = Buffer.from('{"ok":true}', 'utf8');
    const inventory = inventoryFor(bytes);
    const unsafe = structuredClone(inventory);
    unsafe.files[0].sourcePath = '../secret.json';
    await assert.rejects(buildW14ExtensionArchive({ inventory: unsafe, outputRoot, readSourceBlob: async () => bytes }), /source-path/i);

    const duplicate = structuredClone(inventory);
    duplicate.files.push(structuredClone(duplicate.files[0]));
    await assert.rejects(buildW14ExtensionArchive({ inventory: duplicate, outputRoot, readSourceBlob: async () => bytes }), /duplicate/i);

    await assert.rejects(buildW14ExtensionArchive({ inventory, outputRoot, readSourceBlob: async () => Buffer.from('{"ok":false}', 'utf8') }), /source.*(hash|size|blob)|integrity/i);
    await assert.rejects(readFile(outputRoot), { code: 'ENOENT' });
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: archived payload corruption is detected before it can be called a valid legacy restore.
// Purpose: verify archive manifest, compressed payload digest, decompressed Git blob identity, and raw SHA/length on readback.
// Given a completed archive, when one compressed file is modified, then full verification rejects it.
test('UnitT30_w14_extension_archive_detects_compressed_payload_tampering', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-archive-tamper-test-'));
  try {
    const outputRoot = path.join(tempRoot, 'archive');
    const sourceBytes = Buffer.from('{"name":"legacy"}', 'utf8');
    const inventory = inventoryFor(sourceBytes);
    await buildW14ExtensionArchive({ inventory, outputRoot, readSourceBlob: async () => sourceBytes });
    const manifest = JSON.parse((await readFile(path.join(outputRoot, 'manifest.json'))).toString('utf8'));
    const archivePath = path.join(outputRoot, ...manifest.files[0].archivePath.split('/'));
    const tampered = await readFile(archivePath);
    tampered[tampered.length - 1] ^= 1;
    await writeFile(archivePath, tampered);
    await assert.rejects(verifyW14ExtensionArchive({ archiveRoot: outputRoot }), /archive.*(hash|integrity)|compressed/i);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
