import { mkdir, lstat, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { compileSource } from './compile.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const AUTHORING = join(ROOT, 'content', 'authoring', 'w01-preview.json');

function parseMode(args) {
  let mode = 'preview';
  for (let index = 0; index < args.length; index += 1) {
    if (args[index] !== '--mode' || !args[index + 1]) {
      throw new Error('usage: node scripts/content/build.mjs --mode preview|formal');
    }
    mode = args[index + 1];
    index += 1;
  }
  if (!['preview', 'formal'].includes(mode)) {
    throw new Error('mode must be preview or formal');
  }
  return mode;
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

export async function buildSource({ mode = 'preview' } = {}) {
  const authoring = JSON.parse(await readFile(AUTHORING, 'utf8'));
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
    const mode = parseMode(process.argv.slice(2));
    const receipt = await buildSource({ mode });
    process.stdout.write(JSON.stringify(receipt, null, 2) + '\n');
  } catch (error) {
    process.stderr.write(String(error.message || error) + '\n');
    process.exitCode = 1;
  }
}
