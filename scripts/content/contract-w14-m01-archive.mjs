import { createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { lstat, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const W14_M01_INVENTORY_SCHEMA = 'w14.m01-fixed-hash-inventory/1';
export const W14_M01_ARCHIVE_SCHEMA = 'w14.m01-mods-legacy-archive/1';
export const W14_M01_SOURCE_COMMIT = '241ad76ce62330472aa423055a5b85db59bb6c0d';
export const W14_M01_LEDGER_SHA256 = '90d1d27ed7673db16ff3c5b82640f2af7847466fc5a7a4fcd7d1f9795ee9af16';
export const W14_M01_INVENTORY_SHA256 = 'ee841b36463248003cf490344979170fb67b860ea39b70295dcc4c65a8de3307';
export const W14_M01_EXPECTED_FILE_COUNT = 3071;
export const W14_M01_EXPECTED_RAW_BYTES = 25070107;
export const W14_M01_MAPPING_ROW_COUNT = 107060;
export const W14_M01_SOURCE_REPOSITORY = 'https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods';
export const W14_M01_MANIFEST_FILENAME = 'm01-manifest.json';
export const W14_M01_MAPPING_LEDGER_PATH = 'docs/contracts/w03/mods/mapping-ledger.json';
export const W14_M01_ARCHIVE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../content/legacy/mods/241ad76');

const SHA256_RE = /^[a-f0-9]{64}$/u;
const GIT_ID_RE = /^[a-f0-9]{40}$/u;
const CONTROL_RE = /[\u0000-\u001f\u007f]/u;
const WINDOWS_INVALID_RE = /[<>:"|?*]/u;
const WINDOWS_RESERVED_RE = /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\..*)?$/iu;

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function gitBlobOid(bytes) {
  return createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${bytes.length}\0`, 'utf8'), bytes])).digest('hex');
}

function comparePath(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function isSafeSourcePath(value) {
  if (typeof value !== 'string' || value.length === 0 || value.includes('\\') || value.startsWith('/')
    || CONTROL_RE.test(value) || /^[a-z][a-z0-9+.-]*:/iu.test(value)) return false;
  const segments = value.split('/');
  return segments.every(segment => segment.length > 0 && segment !== '.' && segment !== '..'
    && !WINDOWS_INVALID_RE.test(segment) && !/[. ]$/u.test(segment) && !WINDOWS_RESERVED_RE.test(segment));
}

function sourceUrl(sourcePath) {
  const encodedPath = sourcePath.split('/').map(segment => encodeURIComponent(segment)).join('/');
  return `${W14_M01_SOURCE_REPOSITORY}/blob/${W14_M01_SOURCE_COMMIT}/${encodedPath}`;
}

function assertInventory(inventory) {
  if (!inventory || typeof inventory !== 'object' || Array.isArray(inventory)
    || inventory.schema !== W14_M01_INVENTORY_SCHEMA
    || inventory.sourceCommit !== W14_M01_SOURCE_COMMIT
    || inventory.sourceLedgerSha256 !== W14_M01_LEDGER_SHA256
    || !Array.isArray(inventory.files) || inventory.files.length === 0) {
    throw new Error('invalid fixed W14 M01 inventory identity');
  }
  const paths = new Set();
  const foldedPaths = new Set();
  for (const [index, entry] of inventory.files.entries()) {
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)
      || !isSafeSourcePath(entry.sourcePath) || !entry.sourcePath.startsWith('Game Info/')
      || !GIT_ID_RE.test(entry.gitBlobOid ?? '') || !SHA256_RE.test(entry.sha256 ?? '')
      || !Number.isSafeInteger(entry.byteLength) || entry.byteLength < 0
      || typeof entry.utf8 !== 'boolean') {
      throw new Error(`invalid W14 M01 source descriptor at files[${index}]`);
    }
    const foldedPath = entry.sourcePath.toLocaleLowerCase('en-US');
    if (paths.has(entry.sourcePath) || foldedPaths.has(foldedPath)) {
      throw new Error(`duplicate W14 M01 source path: ${entry.sourcePath}`);
    }
    paths.add(entry.sourcePath);
    foldedPaths.add(foldedPath);
  }
}

async function pathExists(pathname) {
  try {
    await lstat(pathname);
    return true;
  } catch (error) {
    if (error?.code === 'ENOENT') return false;
    throw error;
  }
}

function safeArchivePath(archiveRoot, relativePath) {
  if (!isSafeSourcePath(relativePath) || !relativePath.startsWith('Game Info/')) {
    throw new Error(`unsafe W14 M01 archive path: ${relativePath}`);
  }
  const resolvedRoot = path.resolve(archiveRoot);
  const resolvedPath = path.resolve(resolvedRoot, ...relativePath.split('/'));
  const relative = path.relative(resolvedRoot, resolvedPath);
  if (!relative || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error('W14 M01 archive path escapes the archive root');
  }
  return resolvedPath;
}

function createManifest(inventory, mappingRowCount, files, inventorySha256) {
  return {
    schema: W14_M01_ARCHIVE_SCHEMA,
    archiveRole: 'historical-mods-content-preservation',
    sourceSelection: 'pinned-git-objects-only',
    currentApproval: 'not-current-approved',
    sourceVersionStatus: 'unverified',
    readOnly: true,
    protectedWorkingTreeBodiesRead: false,
    sourceRepository: W14_M01_SOURCE_REPOSITORY,
    sourceCommit: W14_M01_SOURCE_COMMIT,
    inventorySha256,
    mapping: {
      ledgerPath: W14_M01_MAPPING_LEDGER_PATH,
      sourceLedgerSha256: inventory.sourceLedgerSha256,
      scopeGroupId: 'M01',
      rowCount: mappingRowCount,
    },
    fileCount: files.length,
    rawBytes: files.reduce((total, file) => total + file.byteLength, 0),
    files,
  };
}

function assertManifest(manifest) {
  const manifestKeys = [
    'schema', 'archiveRole', 'sourceSelection', 'currentApproval', 'sourceVersionStatus', 'readOnly',
    'protectedWorkingTreeBodiesRead', 'sourceRepository', 'sourceCommit', 'inventorySha256', 'mapping',
    'fileCount', 'rawBytes', 'files',
  ];
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)
    || Object.keys(manifest).sort().join('\0') !== manifestKeys.sort().join('\0')
    || manifest.schema !== W14_M01_ARCHIVE_SCHEMA
    || manifest.archiveRole !== 'historical-mods-content-preservation'
    || manifest.sourceSelection !== 'pinned-git-objects-only'
    || manifest.currentApproval !== 'not-current-approved'
    || manifest.sourceVersionStatus !== 'unverified'
    || manifest.readOnly !== true || manifest.protectedWorkingTreeBodiesRead !== false
    || manifest.sourceRepository !== W14_M01_SOURCE_REPOSITORY || manifest.sourceCommit !== W14_M01_SOURCE_COMMIT
    || !SHA256_RE.test(manifest.inventorySha256 ?? '')
    || manifest.mapping?.ledgerPath !== W14_M01_MAPPING_LEDGER_PATH
    || manifest.mapping?.sourceLedgerSha256 !== W14_M01_LEDGER_SHA256
    || manifest.mapping?.scopeGroupId !== 'M01'
    || !Number.isSafeInteger(manifest.mapping?.rowCount) || manifest.mapping.rowCount < 1
    || !Array.isArray(manifest.files) || manifest.files.length === 0
    || manifest.fileCount !== manifest.files.length) {
    throw new Error('invalid W14 M01 archive manifest');
  }
  const paths = new Set();
  const foldedPaths = new Set();
  let rawBytes = 0;
  for (const [index, entry] of manifest.files.entries()) {
    const fileKeys = ['sourcePath', 'archivePath', 'gitBlobOid', 'normalization', 'sha256', 'byteLength', 'utf8', 'sourceUrl'];
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)
      || Object.keys(entry).sort().join('\0') !== fileKeys.sort().join('\0')
      || !isSafeSourcePath(entry.sourcePath) || !entry.sourcePath.startsWith('Game Info/')
      || entry.archivePath !== entry.sourcePath || !GIT_ID_RE.test(entry.gitBlobOid ?? '')
      || !SHA256_RE.test(entry.sha256 ?? '') || !Number.isSafeInteger(entry.byteLength) || entry.byteLength < 0
      || entry.normalization !== 'raw' || typeof entry.utf8 !== 'boolean'
      || entry.sourceUrl !== sourceUrl(entry.sourcePath)) {
      throw new Error(`invalid W14 M01 archive entry at files[${index}]`);
    }
    const foldedPath = entry.sourcePath.toLocaleLowerCase('en-US');
    if (paths.has(entry.sourcePath) || foldedPaths.has(foldedPath)) {
      throw new Error(`duplicate W14 M01 archive path: ${entry.sourcePath}`);
    }
    paths.add(entry.sourcePath);
    foldedPaths.add(foldedPath);
    rawBytes += entry.byteLength;
  }
  if (manifest.rawBytes !== rawBytes) throw new Error('W14 M01 archive raw byte total mismatch');
}

async function assertNoManifestCollision(archiveRoot) {
  const manifestPath = path.join(archiveRoot, W14_M01_MANIFEST_FILENAME);
  const filesRoot = path.join(archiveRoot, 'Game Info');
  if (await pathExists(manifestPath) || await pathExists(filesRoot)) {
    throw new Error('W14 M01 archive output already contains M01 files');
  }
}

/** Copy exact pinned public M01 Git blobs into the original relative hierarchy without line-ending conversion. */
export async function buildW14M01Archive({ inventory, inventorySha256: providedInventorySha256, outputRoot, mappingRowCount, readSourceBlob }) {
  if (typeof outputRoot !== 'string' || !outputRoot || typeof readSourceBlob !== 'function'
    || !Number.isSafeInteger(mappingRowCount) || mappingRowCount < 1) {
    throw new TypeError('outputRoot, a positive mappingRowCount, and readSourceBlob are required');
  }
  assertInventory(inventory);
  const inventorySha256 = providedInventorySha256 ?? sha256(Buffer.from(JSON.stringify(inventory), 'utf8'));
  if (!SHA256_RE.test(inventorySha256)) throw new TypeError('inventorySha256 must be a lowercase SHA-256 digest');
  const resolvedOutputRoot = path.resolve(outputRoot);
  const rootExisted = await pathExists(resolvedOutputRoot);
  if (rootExisted) {
    const rootStat = await lstat(resolvedOutputRoot);
    if (!rootStat.isDirectory() || rootStat.isSymbolicLink()) throw new Error('W14 M01 archive root must be a real directory');
    await assertNoManifestCollision(resolvedOutputRoot);
  }
  await mkdir(path.dirname(resolvedOutputRoot), { recursive: true });
  const stagingRoot = await mkdtemp(path.join(path.dirname(resolvedOutputRoot), '.w14-m01-archive-'));
  const files = [];
  try {
    for (const entry of [...inventory.files].sort((left, right) => comparePath(left.sourcePath, right.sourcePath))) {
      const rawResult = await readSourceBlob({ commit: inventory.sourceCommit, path: entry.sourcePath });
      if (!(Buffer.isBuffer(rawResult) || rawResult instanceof Uint8Array)) {
        throw new TypeError(`W14 M01 source reader must return bytes: ${entry.sourcePath}`);
      }
      const raw = Buffer.from(rawResult);
      if (raw.length !== entry.byteLength || sha256(raw) !== entry.sha256 || gitBlobOid(raw) !== entry.gitBlobOid) {
        throw new Error(`W14 M01 source blob integrity mismatch: ${entry.sourcePath}`);
      }
      let actualUtf8 = true;
      try { new TextDecoder('utf-8', { fatal: true }).decode(raw); }
      catch { actualUtf8 = false; }
      if (actualUtf8 !== entry.utf8) throw new Error(`W14 M01 source UTF-8 metadata mismatch: ${entry.sourcePath}`);
      const stagedPath = safeArchivePath(stagingRoot, entry.sourcePath);
      await mkdir(path.dirname(stagedPath), { recursive: true });
      await writeFile(stagedPath, raw, { flag: 'wx' });
      files.push({
        sourcePath: entry.sourcePath,
        archivePath: entry.sourcePath,
        gitBlobOid: entry.gitBlobOid,
        normalization: 'raw',
        sha256: entry.sha256,
        byteLength: entry.byteLength,
        utf8: entry.utf8,
        sourceUrl: sourceUrl(entry.sourcePath),
      });
    }
    const manifest = createManifest(inventory, mappingRowCount, files, inventorySha256);
    const manifestBytes = Buffer.from(`${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
    await writeFile(path.join(stagingRoot, W14_M01_MANIFEST_FILENAME), manifestBytes, { flag: 'wx' });

    if (rootExisted) {
      let movedFilesRoot = false;
      try {
        await rename(path.join(stagingRoot, 'Game Info'), path.join(resolvedOutputRoot, 'Game Info'));
        movedFilesRoot = true;
        await rename(path.join(stagingRoot, W14_M01_MANIFEST_FILENAME), path.join(resolvedOutputRoot, W14_M01_MANIFEST_FILENAME));
      } catch (error) {
        if (movedFilesRoot) await rm(path.join(resolvedOutputRoot, 'Game Info'), { recursive: true, force: true });
        throw error;
      }
      await rm(stagingRoot, { recursive: true, force: true });
    } else {
      await rename(stagingRoot, resolvedOutputRoot);
    }
    return { fileCount: files.length, rawBytes: manifest.rawBytes, manifestSha256: sha256(manifestBytes) };
  } catch (error) {
    await rm(stagingRoot, { recursive: true, force: true });
    throw error;
  }
}

async function listRelativeFiles(root, relativeRoot = '') {
  const result = [];
  for (const entry of await readdir(path.join(root, relativeRoot), { withFileTypes: true })) {
    const childRelative = relativeRoot ? `${relativeRoot}/${entry.name}` : entry.name;
    if (entry.isSymbolicLink()) throw new Error(`W14 M01 archive contains a symbolic link: ${childRelative}`);
    if (entry.isDirectory()) result.push(...await listRelativeFiles(root, childRelative));
    else if (entry.isFile()) result.push(childRelative);
    else throw new Error(`W14 M01 archive contains a non-regular entry: ${childRelative}`);
  }
  return result;
}

/** Verify every archived M01 file against its immutable manifest and reject extras in the source hierarchy. */
export async function verifyW14M01Archive({ archiveRoot }) {
  if (typeof archiveRoot !== 'string' || !archiveRoot) throw new TypeError('archiveRoot is required');
  const resolvedRoot = path.resolve(archiveRoot);
  const rootStat = await lstat(resolvedRoot);
  if (!rootStat.isDirectory() || rootStat.isSymbolicLink()) throw new Error('W14 M01 archive root must be a real directory');
  const manifestPath = path.join(resolvedRoot, W14_M01_MANIFEST_FILENAME);
  const manifestStat = await lstat(manifestPath);
  if (!manifestStat.isFile() || manifestStat.isSymbolicLink()) throw new Error('W14 M01 manifest must be a regular file');
  const manifestBytes = await readFile(manifestPath);
  let manifest;
  try { manifest = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(manifestBytes)); }
  catch { throw new Error('W14 M01 archive manifest is not valid UTF-8 JSON'); }
  assertManifest(manifest);

  const filesRoot = path.join(resolvedRoot, 'Game Info');
  const filesRootStat = await lstat(filesRoot);
  if (!filesRootStat.isDirectory() || filesRootStat.isSymbolicLink()) throw new Error('W14 M01 source hierarchy must be a real directory');
  const actualFiles = (await listRelativeFiles(resolvedRoot, 'Game Info')).sort(comparePath);
  const expectedFiles = manifest.files.map(entry => entry.archivePath).sort(comparePath);
  if (actualFiles.length !== expectedFiles.length || actualFiles.some((relativePath, index) => relativePath !== expectedFiles[index])) {
    throw new Error('W14 M01 archive file membership differs from its manifest');
  }
  for (const entry of manifest.files) {
    const targetPath = safeArchivePath(resolvedRoot, entry.archivePath);
    const stat = await lstat(targetPath);
    if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`W14 M01 archived payload is not a regular file: ${entry.archivePath}`);
    const raw = await readFile(targetPath);
    if (raw.length !== entry.byteLength || sha256(raw) !== entry.sha256 || gitBlobOid(raw) !== entry.gitBlobOid) {
      throw new Error(`W14 M01 archive raw integrity mismatch: ${entry.sourcePath}`);
    }
  }
  return {
    fileCount: manifest.fileCount,
    rawBytes: manifest.rawBytes,
    manifestSha256: sha256(manifestBytes),
    sourceCommit: manifest.sourceCommit,
    sourceLedgerSha256: manifest.mapping.sourceLedgerSha256,
    inventorySha256: manifest.inventorySha256,
  };
}

function assertFixedInventory(inventory) {
  assertInventory(inventory);
  const rawBytes = inventory.files.reduce((total, entry) => total + entry.byteLength, 0);
  if (inventory.files.length !== W14_M01_EXPECTED_FILE_COUNT || rawBytes !== W14_M01_EXPECTED_RAW_BYTES
    || inventory.files.some(entry => entry.utf8 !== true)) {
    throw new Error('fixed W14 M01 inventory count, raw byte total, or UTF-8 metadata mismatch');
  }
}

function parseCliArguments(args) {
  if (args.length === 1 && args[0] === '--verify') return { mode: 'verify' };
  if (args.length !== 4) throw new Error('Usage: node contract-w14-m01-archive.mjs --inventory-file <fixed-inventory.json> --source-repository <fixed-local-git-repository> | --verify');
  const values = new Map();
  for (let index = 0; index < args.length; index += 2) {
    const flag = args[index];
    const value = args[index + 1];
    if (!['--inventory-file', '--source-repository'].includes(flag) || !value || values.has(flag)) {
      throw new Error('Usage: node contract-w14-m01-archive.mjs --inventory-file <fixed-inventory.json> --source-repository <fixed-local-git-repository> | --verify');
    }
    values.set(flag, value);
  }
  if (!values.has('--inventory-file') || !values.has('--source-repository')) {
    throw new Error('Usage: node contract-w14-m01-archive.mjs --inventory-file <fixed-inventory.json> --source-repository <fixed-local-git-repository> | --verify');
  }
  return {
    mode: 'archive',
    inventoryFile: values.get('--inventory-file'),
    sourceRepositoryRoot: values.get('--source-repository'),
  };
}

function captureGit(repositoryRoot, args, input = null) {
  return new Promise((resolve, reject) => {
    const child = spawn('git', ['-C', repositoryRoot, ...args], {
      windowsHide: true,
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    const stdout = [];
    const stderr = [];
    child.stdout.on('data', chunk => stdout.push(Buffer.from(chunk)));
    child.stderr.on('data', chunk => {
      if (Buffer.concat(stderr).length < 8192) stderr.push(Buffer.from(chunk));
    });
    child.once('error', () => reject(new Error('fixed source Git object reader could not start')));
    child.once('close', code => {
      const result = Buffer.concat(stdout);
      if (code !== 0) return reject(new Error('fixed source Git object read failed'));
      resolve(result);
    });
    child.stdin.on('error', () => {});
    child.stdin.end(input ?? undefined);
  });
}

function parseCatFileBatch(bytes, inventory) {
  const objects = new Map();
  let offset = 0;
  for (const entry of inventory.files) {
    const lineEnd = bytes.indexOf(0x0a, offset);
    if (lineEnd < 0) throw new Error('fixed source Git object batch response is truncated');
    const header = bytes.toString('ascii', offset, lineEnd);
    const match = /^([a-f0-9]{40}) blob ([0-9]+)$/u.exec(header);
    if (!match) throw new Error('fixed source Git object batch returned a missing or invalid blob');
    const size = Number(match[2]);
    if (!Number.isSafeInteger(size) || size !== entry.byteLength || match[1] !== entry.gitBlobOid) {
      throw new Error(`fixed source Git blob identity differs: ${entry.sourcePath}`);
    }
    offset = lineEnd + 1;
    const end = offset + size;
    if (end >= bytes.length || bytes[end] !== 0x0a) throw new Error('fixed source Git object batch payload is truncated');
    objects.set(entry.sourcePath, bytes.subarray(offset, end));
    offset = end + 1;
  }
  if (offset !== bytes.length) throw new Error('fixed source Git object batch has trailing bytes');
  return objects;
}

async function readFixedGitBlobs(repositoryRoot, inventory) {
  const requests = inventory.files.map(entry => `${W14_M01_SOURCE_COMMIT}:${entry.sourcePath}\n`).join('');
  const batch = await captureGit(repositoryRoot, ['cat-file', '--batch'], Buffer.from(requests, 'utf8'));
  return parseCatFileBatch(batch, inventory);
}

function assertFixedRepositoryOrigin(value) {
  const accepted = new Set([
    'https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods',
    'https://github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods.git',
    'git@github.com:SyuanTsai/Warhammer-40-000-DARKTIDE-Mods.git',
    'ssh://git@github.com/SyuanTsai/Warhammer-40-000-DARKTIDE-Mods.git',
  ]);
  if (!accepted.has(value.trim())) throw new Error('local Git origin does not match the fixed public Mods repository');
}

async function readFixedInventory(inventoryFile) {
  const inventoryPath = path.resolve(inventoryFile);
  const info = await lstat(inventoryPath);
  if (!info.isFile() || info.isSymbolicLink()) throw new Error('fixed W14 M01 inventory must be a regular file');
  const bytes = await readFile(inventoryPath);
  if (sha256(bytes) !== W14_M01_INVENTORY_SHA256) throw new Error('fixed W14 M01 inventory SHA-256 mismatch');
  let inventory;
  try { inventory = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes)); }
  catch { throw new Error('fixed W14 M01 inventory is not valid UTF-8 JSON'); }
  assertFixedInventory(inventory);
  return inventory;
}

async function runM01Cli(args) {
  const options = parseCliArguments(args);
  if (options.mode === 'verify') {
    const verified = await verifyW14M01Archive({ archiveRoot: W14_M01_ARCHIVE_ROOT });
    if (verified.fileCount !== W14_M01_EXPECTED_FILE_COUNT || verified.rawBytes !== W14_M01_EXPECTED_RAW_BYTES
      || verified.sourceLedgerSha256 !== W14_M01_LEDGER_SHA256 || verified.inventorySha256 !== W14_M01_INVENTORY_SHA256) {
      throw new Error('W14 M01 archive does not match the fixed public inventory');
    }
    process.stdout.write(`W14 M01 archive verified: ${verified.fileCount} files, ${verified.rawBytes} bytes\n`);
    return;
  }

  const inventory = await readFixedInventory(options.inventoryFile);
  const repositoryRoot = path.resolve(options.sourceRepositoryRoot);
  const repositoryInfo = await lstat(repositoryRoot);
  if (!repositoryInfo.isDirectory() || repositoryInfo.isSymbolicLink()) throw new Error('fixed source repository path must be a real directory');
  const remote = await captureGit(repositoryRoot, ['remote', 'get-url', 'origin']);
  assertFixedRepositoryOrigin(new TextDecoder('utf-8', { fatal: true }).decode(remote));
  const blobs = await readFixedGitBlobs(repositoryRoot, inventory);
  const built = await buildW14M01Archive({
    inventory,
    inventorySha256: W14_M01_INVENTORY_SHA256,
    outputRoot: W14_M01_ARCHIVE_ROOT,
    mappingRowCount: W14_M01_MAPPING_ROW_COUNT,
    readSourceBlob: async ({ path: sourcePath }) => blobs.get(sourcePath),
  });
  const verified = await verifyW14M01Archive({ archiveRoot: W14_M01_ARCHIVE_ROOT });
  if (built.fileCount !== W14_M01_EXPECTED_FILE_COUNT || built.rawBytes !== W14_M01_EXPECTED_RAW_BYTES
    || verified.fileCount !== W14_M01_EXPECTED_FILE_COUNT || verified.rawBytes !== W14_M01_EXPECTED_RAW_BYTES
    || verified.sourceLedgerSha256 !== W14_M01_LEDGER_SHA256 || verified.inventorySha256 !== W14_M01_INVENTORY_SHA256) {
    throw new Error('W14 M01 archive readback differs from the fixed public inventory');
  }
  process.stdout.write(`W14 M01 archive created and verified: ${verified.fileCount} files, ${verified.rawBytes} bytes, manifest ${verified.manifestSha256}\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { await runM01Cli(process.argv.slice(2)); }
  catch (error) {
    process.stderr.write('W14 M01 archive failed: ' + (error?.message ?? 'unknown error') + '\n');
    process.exitCode = 1;
  }
}
