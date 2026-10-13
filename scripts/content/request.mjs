import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalJsonBytes, sha256 } from './compile.mjs';
import { buildSource, parseBuildOptions } from './build.mjs';

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

export function parseCompositionRequestOptions(args) {
  const options = parseBuildOptions(args);
  if (options.mode !== 'preview') fail('composition requests are preview-only; formal mode is not supported');
  return { input: options.input };
}

export function assertPreviewRequestReceipt(receipt) {
  if (receipt === null || typeof receipt !== 'object' || Array.isArray(receipt) ||
      receipt.mode !== 'preview' || receipt.previewOnly !== true) {
    fail('composition requests require a preview-only Source build');
  }
  if (typeof receipt.fixtureOnly !== 'boolean' || typeof receipt.publicationEligible !== 'boolean' ||
      (receipt.fixtureOnly && receipt.publicationEligible)) {
    fail('composition requests require compiler-derived preview status booleans');
  }
  return receipt;
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

export async function generateCompositionRequest({ input } = {}) {
  const selectedInput = parseBuildOptions(input === undefined ? [] : ['--input', input]).input;
  const root = ROOT;
  const remote = normalizeRemote(execFileSync('git', ['remote', 'get-url', 'origin'], { cwd: root, encoding: 'utf8' }));
  if (remote !== SOURCE_REPOSITORY) fail('origin is not the pinned public Source repository');
  const dirtyWorkingTree = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], {
    cwd: root,
    encoding: 'utf8'
  }).trim();
  if (dirtyWorkingTree) fail('commit or discard Source working-tree changes before generating a composition request');
  const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
  if (!/^[a-f0-9]{40}$/.test(commit)) fail('Source HEAD is not a full Git SHA');

  const receipt = assertPreviewRequestReceipt(await buildSource({ mode: 'preview', input: selectedInput }));
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
    const options = parseCompositionRequestOptions(process.argv.slice(2));
    const result = await generateCompositionRequest(options);
    process.stdout.write('Wrote Source composition request ' + result.requestPath + '\n' + JSON.stringify(result.request, null, 2) + '\n');
  } catch (error) {
    process.stderr.write(String(error?.message ?? error) + '\n');
    process.exitCode = 1;
  }
}
