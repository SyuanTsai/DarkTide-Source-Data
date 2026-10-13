import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalJsonBytes, sha256 } from './compile.mjs';
import { buildSource } from './build.mjs';

export const SOURCE_REPOSITORY = 'https://github.com/SyuanTsai/DarkTide-Source-Data';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const REQUEST_KEYS = ['repository', 'commit', 'sourceRevision', 'manifestSha256'];

function fail(message) {
  throw new Error(message);
}

function assertExactKeys(value, keys, label) {
  if (value === null || typeof value !== 'object' || Array.isArray(value) ||
      Object.keys(value).sort().join('\n') !== [...keys].sort().join('\n')) {
    fail(label + ' must contain only ' + keys.join(', '));
  }
}

function normalizeRemote(value) {
  return value.trim().replace(/\.git$/i, '').replace(/\/+$/, '');
}

export function createCompositionRequest(value) {
  assertExactKeys(value, REQUEST_KEYS, 'composition request');
  if (value.repository !== SOURCE_REPOSITORY) fail('composition request repository is not the public Source repository');
  if (typeof value.commit !== 'string' || !/^[a-f0-9]{40}$/.test(value.commit)) fail('composition request commit must be a full Git SHA');
  if (typeof value.sourceRevision !== 'string' || !/^[a-f0-9]{64}$/.test(value.sourceRevision)) fail('composition request sourceRevision must be SHA-256');
  if (typeof value.manifestSha256 !== 'string' || !/^[a-f0-9]{64}$/.test(value.manifestSha256)) fail('composition request manifestSha256 must be SHA-256');
  return {
    repository: value.repository,
    commit: value.commit,
    sourceRevision: value.sourceRevision,
    manifestSha256: value.manifestSha256
  };
}

async function writeImmutable(filePath, bytes) {
  await mkdir(path.dirname(filePath), { recursive: true });
  try {
    const existing = await readFile(filePath);
    if (!existing.equals(bytes)) fail('composition request output already differs: ' + filePath);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await writeFile(filePath, bytes, { flag: 'wx' });
  }
}

export async function generateCompositionRequest() {
  const root = ROOT;
  const remote = normalizeRemote(execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: root, encoding: 'utf8' }));
  if (remote !== SOURCE_REPOSITORY) fail('origin is not the pinned public Source repository');
  const dirtyAuthoring = execFileSync('git', ['status', '--porcelain', '--untracked-files=all', '--', 'content/authoring', 'content/schema'], {
    cwd: root,
    encoding: 'utf8'
  }).trim();
  if (dirtyAuthoring) fail('commit or discard Source authoring/schema changes before generating a composition request');
  const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
  if (!/^[a-f0-9]{40}$/.test(commit)) fail('Source HEAD is not a full Git SHA');

  const receipt = await buildSource({ mode: 'preview' });
  if (receipt.previewOnly !== true || receipt.fixtureOnly !== true || receipt.publicationEligible !== false) {
    fail('composition requests require a quarantined fixture-only Source preview build');
  }
  const outputDirectory = path.join(root, ...receipt.outputDirectory.split('/'));
  const manifestBytes = await readFile(path.join(outputDirectory, 'source-manifest.json'));
  const sourceManifest = JSON.parse(manifestBytes.toString('utf8'));
  if (sha256(manifestBytes) !== receipt.manifestSha256 ||
      sourceManifest.sourceRevision !== receipt.sourceRevision ||
      !receipt.files.some(file => file.path === 'source-manifest.json' && file.sha256 === receipt.manifestSha256)) {
    fail('Source preview receipt does not match its generated manifest');
  }
  const request = createCompositionRequest({
    repository: SOURCE_REPOSITORY,
    commit,
    sourceRevision: receipt.sourceRevision,
    manifestSha256: receipt.manifestSha256
  });
  const requestPath = path.join(root, 'dist-w01', 'requests', request.sourceRevision + '-' + request.commit + '.json');
  await writeImmutable(requestPath, canonicalJsonBytes(request));
  return { request, requestPath };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await generateCompositionRequest();
    process.stdout.write('Wrote Source composition request ' + result.requestPath + '\n' + JSON.stringify(result.request, null, 2) + '\n');
  } catch (error) {
    process.stderr.write(String(error?.message ?? error) + '\n');
    process.exitCode = 1;
  }
}