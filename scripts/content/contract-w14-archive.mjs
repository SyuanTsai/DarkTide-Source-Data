import { createHash } from 'node:crypto';
import { lstat, mkdir, mkdtemp, readFile, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { gunzipSync, gzipSync } from 'node:zlib';

export const W14_EXTENSION_SOURCE_INVENTORY_SCHEMA = 'w14.extension-source-inventory.v1';
export const W14_EXTENSION_ARCHIVE_SCHEMA = 'w14.extension-legacy-archive.v1';

const SHA256_RE = /^[a-f0-9]{64}$/u;
const GIT_ID_RE = /^[a-f0-9]{40}$/u;

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function gitBlobOid(bytes) {
  return createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${bytes.length}\0`, 'utf8'), bytes])).digest('hex');
}

function isSafeSourcePath(value) {
  return typeof value === 'string'
    && value.length > 0
    && !value.includes('\\')
    && !value.includes('\0')
    && !value.startsWith('/')
    && !/^[a-z][a-z0-9+.-]*:/iu.test(value)
    && value.split('/').every(segment => segment && segment !== '.' && segment !== '..');
}

function isSafeArchivePath(value) {
  return isSafeSourcePath(value) && value.startsWith('files/') && value.endsWith('.gz');
}

function validateInventory(inventory) {
  const issues = [];
  if (!inventory || typeof inventory !== 'object' || Array.isArray(inventory)) return [{ code: 'inventory-object' }];
  if (inventory.schemaVersion !== W14_EXTENSION_SOURCE_INVENTORY_SCHEMA) issues.push({ code: 'inventory-schema' });
  const sourceScope = inventory.sourceScope;
  if (!sourceScope || typeof sourceScope !== 'object'
    || sourceScope.repository !== 'https://github.com/SyuanTsai/Darktide-GamesLantern-Assisted-Translation'
    || sourceScope.scopeManifestPath !== 'docs/contracts/w03/scope-manifest.json'
    || !SHA256_RE.test(sourceScope.scopeManifestSha256 ?? '')) issues.push({ code: 'source-scope' });
  if (!Array.isArray(inventory.protectedWorkingTreePaths)
    || inventory.protectedWorkingTreePaths.some(value => !isSafeSourcePath(value))) issues.push({ code: 'protected-working-tree-paths' });
  if (inventory.sourceSelection !== 'pinned-git-objects-only' || inventory.currentApproval !== 'not-current-approved') {
    issues.push({ code: 'legacy-not-current' });
  }
  if (!Array.isArray(inventory.files) || inventory.files.length === 0) return [...issues, { code: 'files-empty' }];
  const seen = new Set();
  for (const [index, entry] of inventory.files.entries()) {
    const base = `files[${index}]`;
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      issues.push({ code: 'file-object', path: base });
      continue;
    }
    if (!GIT_ID_RE.test(entry.sourceCommit ?? '')) issues.push({ code: 'source-commit', path: base });
    if (!isSafeSourcePath(entry.sourcePath)) issues.push({ code: 'source-path', path: base });
    if (!GIT_ID_RE.test(entry.gitBlobOid ?? '')) issues.push({ code: 'git-blob-oid', path: base });
    if (!SHA256_RE.test(entry.sha256 ?? '')) issues.push({ code: 'source-sha256', path: base });
    if (!Number.isSafeInteger(entry.byteLength) || entry.byteLength < 0) issues.push({ code: 'source-size', path: base });
    if (!['raw', 'lf'].includes(entry.normalization)) issues.push({ code: 'normalization', path: base });
    const key = `${entry.sourceCommit}:${entry.sourcePath}`;
    if (seen.has(key)) issues.push({ code: 'duplicate-source-path', path: base });
    seen.add(key);
  }
  return issues;
}

function assertNoOutput(outputRoot) {
  return lstat(outputRoot).then(() => {
    throw new Error('W14 archive output already exists');
  }, error => {
    if (error?.code !== 'ENOENT') throw error;
  });
}

function resolveArchiveFilePath(archiveRoot, archivePath) {
  if (!isSafeArchivePath(archivePath)) throw new Error(`unsafe W14 archive path: ${archivePath}`);
  const resolvedRoot = path.resolve(archiveRoot);
  const resolvedFile = path.resolve(resolvedRoot, ...archivePath.split('/'));
  const relative = path.relative(resolvedRoot, resolvedFile);
  if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) throw new Error('W14 archive path escapes root');
  return resolvedFile;
}

function assertManifest(manifest) {
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)
    || manifest.schemaVersion !== W14_EXTENSION_ARCHIVE_SCHEMA
    || manifest.currentApproval !== 'not-current-approved'
    || manifest.sourceSelection !== 'pinned-git-objects-only'
    || !manifest.sourceScope || !Array.isArray(manifest.protectedWorkingTreePaths)
    || !Array.isArray(manifest.files) || manifest.files.length === 0) {
    throw new Error('invalid W14 legacy archive manifest');
  }
  const seen = new Set();
  for (const entry of manifest.files) {
    if (!entry || !GIT_ID_RE.test(entry.sourceCommit ?? '') || !isSafeSourcePath(entry.sourcePath)
      || !GIT_ID_RE.test(entry.gitBlobOid ?? '') || !SHA256_RE.test(entry.sha256 ?? '')
      || !Number.isSafeInteger(entry.byteLength) || entry.byteLength < 0
      || !isSafeArchivePath(entry.archivePath) || !SHA256_RE.test(entry.compressedSha256 ?? '')
      || !Number.isSafeInteger(entry.compressedBytes) || entry.compressedBytes < 1) {
      throw new Error('invalid W14 legacy archive file entry');
    }
    const key = `${entry.sourceCommit}:${entry.sourcePath}`;
    if (seen.has(key)) throw new Error('duplicate W14 legacy archive source path');
    seen.add(key);
  }
}

/**
 * Archive exact files from pinned Extension Git objects. The caller owns source access; this module never reads an arbitrary worktree.
 */
export async function buildW14ExtensionArchive({ inventory, outputRoot, readSourceBlob }) {
  if (typeof outputRoot !== 'string' || !outputRoot || typeof readSourceBlob !== 'function') {
    throw new TypeError('outputRoot and readSourceBlob are required');
  }
  const issues = validateInventory(inventory);
  if (issues.length) throw new Error(`invalid W14 extension source inventory: ${issues[0].code}`);
  await assertNoOutput(outputRoot);
  await mkdir(path.dirname(outputRoot), { recursive: true });
  const stagingRoot = await mkdtemp(path.join(path.dirname(outputRoot), '.w14-extension-archive-'));
  const manifest = {
    schemaVersion: W14_EXTENSION_ARCHIVE_SCHEMA,
    archiveRole: 'historical-extension-input-preservation',
    currentApproval: 'not-current-approved',
    sourceSelection: 'pinned-git-objects-only',
    sourceScope: structuredClone(inventory.sourceScope),
    protectedWorkingTreePaths: [...inventory.protectedWorkingTreePaths].sort(),
    protectedWorkingTreeBodiesRead: false,
    fileCount: inventory.files.length,
    rawBytes: 0,
    compressedBytes: 0,
    files: [],
  };
  const archivePayloads = new Set();
  try {
    const entries = [...inventory.files].sort((left, right) => left.sourcePath.localeCompare(right.sourcePath));
    for (const entry of entries) {
      const sourceBytes = Buffer.from(await readSourceBlob({ commit: entry.sourceCommit, path: entry.sourcePath }));
      const actualSha256 = sha256(sourceBytes);
      const actualGitBlobOid = gitBlobOid(sourceBytes);
      if (sourceBytes.length !== entry.byteLength || actualSha256 !== entry.sha256 || actualGitBlobOid !== entry.gitBlobOid) {
        throw new Error(`W14 source blob integrity mismatch: ${entry.sourcePath}`);
      }
      const compressed = gzipSync(sourceBytes, { level: 9, mtime: 0 });
      const archivePath = `files/${actualSha256}.gz`;
      const localPath = resolveArchiveFilePath(stagingRoot, archivePath);
      await mkdir(path.dirname(localPath), { recursive: true });
      if (!archivePayloads.has(archivePath)) {
        await writeFile(localPath, compressed, { flag: 'wx' });
        archivePayloads.add(archivePath);
        manifest.compressedBytes += compressed.length;
      }
      const existing = await readFile(localPath);
      if (sha256(existing) !== sha256(compressed)) throw new Error(`W14 duplicate archive payload mismatch: ${entry.sourcePath}`);
      manifest.rawBytes += sourceBytes.length;
      manifest.files.push({
        sourceCommit: entry.sourceCommit,
        sourcePath: entry.sourcePath,
        gitBlobOid: entry.gitBlobOid,
        normalization: entry.normalization,
        sha256: actualSha256,
        byteLength: sourceBytes.length,
        archivePath,
        compressedSha256: sha256(compressed),
        compressedBytes: compressed.length,
      });
    }
    const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    await writeFile(path.join(stagingRoot, 'manifest.json'), manifestBytes, { flag: 'wx' });
    await rename(stagingRoot, outputRoot);
    return {
      fileCount: manifest.fileCount,
      rawBytes: manifest.rawBytes,
      compressedBytes: manifest.compressedBytes,
      manifestSha256: sha256(manifestBytes),
    };
  } catch (error) {
    await rm(stagingRoot, { recursive: true, force: true });
    throw error;
  }
}

/** Re-open an archive from disk and verify every compressed and decompressed byte against its manifest. */
export async function verifyW14ExtensionArchive({ archiveRoot }) {
  if (typeof archiveRoot !== 'string' || !archiveRoot) throw new TypeError('archiveRoot is required');
  const manifestBytes = await readFile(path.join(archiveRoot, 'manifest.json'));
  const manifest = JSON.parse(manifestBytes.toString('utf8'));
  assertManifest(manifest);
  const result = [];
  for (const entry of manifest.files) {
    const localPath = resolveArchiveFilePath(archiveRoot, entry.archivePath);
    const stat = await lstat(localPath);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`W14 archive payload is not a regular file: ${entry.archivePath}`);
    const compressed = await readFile(localPath);
    if (compressed.length !== entry.compressedBytes || sha256(compressed) !== entry.compressedSha256) {
      throw new Error(`W14 archive compressed integrity mismatch: ${entry.archivePath}`);
    }
    let raw;
    try {
      raw = gunzipSync(compressed, { maxOutputLength: entry.byteLength + 1 });
    } catch {
      throw new Error(`W14 archive compressed payload is invalid: ${entry.archivePath}`);
    }
    if (raw.length !== entry.byteLength || sha256(raw) !== entry.sha256 || gitBlobOid(raw) !== entry.gitBlobOid) {
      throw new Error(`W14 archive raw integrity mismatch: ${entry.sourcePath}`);
    }
    result.push({ sourcePath: entry.sourcePath, sha256: entry.sha256, byteLength: entry.byteLength });
  }
  return {
    fileCount: result.length,
    rawBytes: manifest.rawBytes,
    compressedBytes: manifest.compressedBytes,
    manifestSha256: sha256(manifestBytes),
    files: result,
  };
}
