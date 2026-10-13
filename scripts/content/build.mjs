import { mkdir, lstat, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileSource } from './compile.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const DEFAULT_AUTHORING = 'w01-preview.json';
const ALLOWED_AUTHORING = new Set([DEFAULT_AUTHORING, 'w01-real-claim-candidate.json']);

export function parseBuildOptions(args) {
  const options = { mode: 'preview', input: DEFAULT_AUTHORING };
  const seen = new Set();
  for (let index = 0; index < args.length; index += 1) {
    const flag = args[index];
    if (!['--mode', '--input'].includes(flag) || seen.has(flag)) {
      throw new Error('usage: node scripts/content/build.mjs [--mode preview|formal] [--input w01-preview.json|w01-real-claim-candidate.json]');
    }
    const value = args[index + 1];
    if (typeof value !== 'string' || value.length === 0 || value.startsWith('--')) {
      throw new Error('usage: node scripts/content/build.mjs [--mode preview|formal] [--input w01-preview.json|w01-real-claim-candidate.json]');
    }
    seen.add(flag);
    index += 1;
    if (flag === '--mode') {
      if (!['preview', 'formal'].includes(value)) throw new Error('mode must be preview or formal');
      options.mode = value;
    } else {
      validateAuthoringInput(value);
      options.input = value;
    }
  }
  return options;
}

function validateAuthoringInput(inputName) {
  if (!ALLOWED_AUTHORING.has(inputName)) {
    throw new Error('input must be exactly w01-preview.json or w01-real-claim-candidate.json');
  }
  return inputName;
}

export async function loadAuthoring(inputName = DEFAULT_AUTHORING) {
  const safeName = validateAuthoringInput(inputName);
  return JSON.parse(await readFile(join(ROOT, 'content', 'authoring', safeName), 'utf8'));
}

async function ensurePlainDirectory(root, segments) {
  let current = root;
  for (const segment of segments) {
    current = join(current, segment);
    try {
      const info = await lstat(current);
      if (info.isSymbolicLink() || !info.isDirectory()) {
        throw new Error('output path segment must be a real directory: ' + relative(root, current));
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      await mkdir(current);
    }
  }
  return current;
}

async function writeImmutable(path, bytes) {
  try {
    const existing = await readFile(path);
    if (!existing.equals(bytes)) throw new Error('immutable output already differs: ' + path);
    return;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  try {
    await writeFile(path, bytes, { flag: 'wx' });
  } catch (error) {
    if (error.code !== 'EEXIST') throw error;
    const existing = await readFile(path);
    if (!existing.equals(bytes)) throw new Error('immutable output changed during write: ' + path);
  }
}

export async function buildSource({ mode = 'preview', input = DEFAULT_AUTHORING } = {}) {
  const authoring = await loadAuthoring(input);
  const result = compileSource(authoring, { mode });
  const directorySegments = ['dist-w01', 'source', result.sourceRevision];
  const destination = await ensurePlainDirectory(ROOT, directorySegments);

  for (const [name, bytes] of result.files) {
    await writeImmutable(join(destination, name), bytes);
  }

  const outputFiles = result.manifest.files.concat([{
    path: 'source-manifest.json',
    sizeBytes: result.files.get('source-manifest.json').length,
    sha256: result.manifestSha256
  }]).sort((left, right) => left.path < right.path ? -1 : left.path > right.path ? 1 : 0);
  const receipt = {
    schemaVersion: '1.0.0',
    mode,
    previewOnly: mode === 'preview',
    fixtureOnly: result.fixtureOnly,
    publicationEligible: result.publicationEligible,
    sourceRevision: result.sourceRevision,
    manifestSha256: result.manifestSha256,
    outputDirectory: ['dist-w01', 'source', result.sourceRevision].join('/'),
    files: outputFiles
  };
  await writeImmutable(join(destination, 'receipt.json'), Buffer.from(JSON.stringify(receipt, null, 2) + '\n', 'utf8'));
  return receipt;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const options = parseBuildOptions(process.argv.slice(2));
    const receipt = await buildSource(options);
    process.stdout.write(JSON.stringify(receipt, null, 2) + '\n');
  } catch (error) {
    process.stderr.write(String(error.message || error) + '\n');
    process.exitCode = 1;
  }
}
