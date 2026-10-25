import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import {
  buildW14M01Archive,
  verifyW14M01Archive,
} from '../scripts/content/contract-w14-m01-archive.mjs';

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const gitBlobOid = bytes => createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${bytes.length}\0`), bytes])).digest('hex');

function inventoryFor(files) {
  return {
    schema: 'w14.m01-fixed-hash-inventory/1',
    sourceCommit: '241ad76ce62330472aa423055a5b85db59bb6c0d',
    sourceLedgerSha256: '90d1d27ed7673db16ff3c5b82640f2af7847466fc5a7a4fcd7d1f9795ee9af16',
    files: files.map(({ sourcePath, bytes }) => ({
      sourcePath,
      gitBlobOid: gitBlobOid(bytes),
      byteLength: bytes.length,
      sha256: sha256(bytes),
      utf8: true,
    })),
  };
}

// Scenario: a pinned M01 source inventory is copied into the historical archive with its original paths and bytes.
// Purpose: preserve Git blob identity, line endings, readable hierarchy, and an explicit non-current version marker.
// Given two verified Git blobs including CRLF and Unicode; when building and verifying the archive; then every raw byte and fixed-source link remains intact.
test('UnitT10_w14_m01_archive_preserves_raw_bytes_paths_and_historical_identity', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-m01-archive-'));
  try {
    const outputRoot = path.join(tempRoot, 'archive');
    const firstBytes = Buffer.from('# 護甲\r\n原始行尾\r\n', 'utf8');
    const secondBytes = Buffer.from('{"version":"unverified"}\n', 'utf8');
    const inventory = inventoryFor([
      { sourcePath: 'Game Info/releases/1.13.X/護甲.md', bytes: firstBytes },
      { sourcePath: 'Game Info/releases/1.13.X/metadata.json', bytes: secondBytes },
    ]);
    const source = new Map(inventory.files.map((entry, index) => [entry.sourcePath, [firstBytes, secondBytes][index]]));

    const built = await buildW14M01Archive({
      inventory,
      outputRoot,
      mappingRowCount: 7,
      readSourceBlob: async ({ commit, path: sourcePath }) => {
        assert.equal(commit, inventory.sourceCommit);
        return source.get(sourcePath);
      },
    });
    const manifestBytes = await readFile(path.join(outputRoot, 'm01-manifest.json'));
    const manifest = JSON.parse(manifestBytes.toString('utf8'));
    const verified = await verifyW14M01Archive({ archiveRoot: outputRoot });

    assert.equal(manifest.archiveRole, 'historical-mods-content-preservation');
    assert.equal(manifest.sourceVersionStatus, 'unverified');
    assert.equal(manifest.currentApproval, 'not-current-approved');
    assert.equal(manifest.readOnly, true);
    assert.equal(manifest.mapping.sourceLedgerSha256, inventory.sourceLedgerSha256);
    assert.equal(manifest.mapping.rowCount, 7);
    assert.equal(manifest.files[0].archivePath, manifest.files[0].sourcePath);
    const localizedEntry = manifest.files.find(entry => entry.sourcePath.endsWith('護甲.md'));
    assert.ok(localizedEntry);
    assert.equal(localizedEntry.sourceUrl.includes(encodeURIComponent('護甲.md')), true);
    assert.deepEqual(await readFile(path.join(outputRoot, ...localizedEntry.archivePath.split('/'))), firstBytes);
    assert.equal(verified.fileCount, 2);
    assert.equal(verified.rawBytes, firstBytes.length + secondBytes.length);
    assert.equal(verified.manifestSha256, built.manifestSha256);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: an M01 inventory contains an unsafe, duplicate, or altered source descriptor.
// Purpose: reject path escapes and mismatched Git bytes before any archive becomes visible.
// Given malformed inventory rows or a source blob that differs from its descriptor; when archive construction runs; then it fails and leaves no output directory.
test('UnitT20_w14_m01_archive_rejects_unsafe_duplicate_or_mismatched_inputs', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-m01-invalid-'));
  try {
    const outputRoot = path.join(tempRoot, 'archive');
    const bytes = Buffer.from('raw bytes\r\n', 'utf8');
    const inventory = inventoryFor([{ sourcePath: 'Game Info/a.md', bytes }]);
    const traversal = structuredClone(inventory);
    traversal.files[0].sourcePath = '../outside.md';
    await assert.rejects(buildW14M01Archive({ inventory: traversal, outputRoot, mappingRowCount: 1, readSourceBlob: async () => bytes }), /descriptor|path/i);

    const duplicate = structuredClone(inventory);
    duplicate.files.push(structuredClone(duplicate.files[0]));
    await assert.rejects(buildW14M01Archive({ inventory: duplicate, outputRoot, mappingRowCount: 1, readSourceBlob: async () => bytes }), /duplicate/i);

    await assert.rejects(buildW14M01Archive({ inventory, outputRoot, mappingRowCount: 1, readSourceBlob: async () => Buffer.from('changed', 'utf8') }), /integrity/i);
    const wrongUtf8Metadata = structuredClone(inventory);
    wrongUtf8Metadata.files[0].utf8 = false;
    await assert.rejects(buildW14M01Archive({ inventory: wrongUtf8Metadata, outputRoot, mappingRowCount: 1, readSourceBlob: async () => bytes }), /UTF-8 metadata/i);
    await assert.rejects(readFile(outputRoot), { code: 'ENOENT' });
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: a file is changed or added after an M01 archive has been generated.
// Purpose: ensure readback verifies both all pinned bytes and the exact archive membership.
// Given a valid archive; when a raw file is altered or an unlisted file is added; then verification rejects it.
test('UnitT30_w14_m01_archive_detects_tampered_or_unlisted_files', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-m01-tamper-'));
  try {
    const outputRoot = path.join(tempRoot, 'archive');
    const bytes = Buffer.from('source\r\n', 'utf8');
    const inventory = inventoryFor([{ sourcePath: 'Game Info/a.md', bytes }]);
    await buildW14M01Archive({ inventory, outputRoot, mappingRowCount: 1, readSourceBlob: async () => bytes });
    const archived = path.join(outputRoot, 'Game Info', 'a.md');
    await writeFile(archived, Buffer.from('tampered\r\n', 'utf8'));
    await assert.rejects(verifyW14M01Archive({ archiveRoot: outputRoot }), /integrity/i);

    await writeFile(archived, bytes);
    await writeFile(path.join(outputRoot, 'Game Info', 'unexpected.txt'), 'unexpected', 'utf8');
    await assert.rejects(verifyW14M01Archive({ archiveRoot: outputRoot }), /unexpected|membership/i);
    await rm(path.join(outputRoot, 'Game Info', 'unexpected.txt'));
    const manifestPath = path.join(outputRoot, 'm01-manifest.json');
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    manifest.currentApproval = 'approved';
    await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
    await assert.rejects(verifyW14M01Archive({ archiveRoot: outputRoot }), /manifest/i);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: the fixed output root already contains a separate historical Extension archive.
// Purpose: add the M01 hierarchy without replacing unrelated archive owners or accepting an existing M01 collision.
// Given a real archive root with a preserved sibling and no M01 paths; when M01 is added; then the sibling is unchanged and the new archive verifies.
test('UnitT40_w14_m01_archive_merges_only_its_new_scope_into_an_existing_root', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-m01-merge-'));
  try {
    const outputRoot = path.join(tempRoot, 'archive');
    const oldPath = path.join(outputRoot, 'psyker', 'existing.md');
    const oldBytes = Buffer.from('existing historical owner\r\n', 'utf8');
    await mkdir(path.dirname(oldPath), { recursive: true });
    await writeFile(oldPath, oldBytes);

    const bytes = Buffer.from('M01 raw bytes\r\n', 'utf8');
    const inventory = inventoryFor([{ sourcePath: 'Game Info/a.md', bytes }]);
    await buildW14M01Archive({ inventory, outputRoot, mappingRowCount: 1, readSourceBlob: async () => bytes });
    const verified = await verifyW14M01Archive({ archiveRoot: outputRoot });
    assert.equal(verified.fileCount, 1);
    assert.deepEqual(await readFile(oldPath), oldBytes);
    assert.deepEqual(await readFile(path.join(outputRoot, 'Game Info', 'a.md')), bytes);

    const colliding = inventoryFor([{ sourcePath: 'Game Info/other.md', bytes }]);
    await assert.rejects(buildW14M01Archive({ inventory: colliding, outputRoot, mappingRowCount: 1, readSourceBlob: async () => bytes }), /already contains M01/i);
    assert.deepEqual(await readFile(oldPath), oldBytes);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

// Scenario: an operator supplies a changed inventory file and an invalid source path.
// Purpose: reject nonfixed metadata by its frozen raw hash before reading Git or writing the public archive.
// Given a temporary altered inventory; when the real CLI runs; then it exits on the pin mismatch without reaching Git.
test('UnitT50_w14_m01_cli_rejects_inventory_changes_before_source_access', async () => {
  const tempRoot = await mkdtemp(path.join(process.cwd(), '.tmp-w14-m01-cli-'));
  try {
    const inventoryFile = path.join(tempRoot, 'inventory.json');
    await writeFile(inventoryFile, JSON.stringify({ schema: 'w14.m01-fixed-hash-inventory/1' }), 'utf8');
    const script = fileURLToPath(new URL('../scripts/content/contract-w14-m01-archive.mjs', import.meta.url));
    const result = spawnSync(process.execPath, [script, '--inventory-file', inventoryFile,
      '--source-repository', path.join(tempRoot, 'missing-git-repository')], { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /fixed W14 M01 inventory SHA-256 mismatch/);
    assert.doesNotMatch(result.stderr, /missing-git-repository/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
