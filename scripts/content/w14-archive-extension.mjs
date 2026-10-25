#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { buildW14ExtensionArchive, verifyW14ExtensionArchive } from './contract-w14-archive.mjs';

const SOURCE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const DEFAULT_INVENTORY = path.join(SOURCE_ROOT, 'docs', 'legacy', 'w14', 'extension-source-inventory.json');
const DEFAULT_OUTPUT = path.join(SOURCE_ROOT, 'content', 'legacy', 'w14', 'extension-inputs');

function readOption(args, name) {
  const index = args.indexOf(name);
  if (index < 0 || !args[index + 1] || args[index + 1].startsWith('--')) return undefined;
  return args[index + 1];
}

function runGit(repoRoot, args, options = {}) {
  return execFileSync('git', args, { cwd: repoRoot, encoding: options.encoding, maxBuffer: 128 * 1024 * 1024 });
}

function normalizedGitHubOrigin(value) {
  try {
    const url = new URL(value);
    const pathname = url.pathname.replace(/\.git$/u, '').replace(/\/$/u, '');
    if (url.protocol !== 'https:' || url.hostname !== 'github.com' || url.username || url.password || url.port) return null;
    return `${url.protocol}//${url.hostname}${pathname}`.toLowerCase();
  } catch {
    return null;
  }
}

async function main() {
  const args = process.argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) {
    process.stdout.write('Usage: node scripts/content/w14-archive-extension.mjs --extension-git-root <clone> [--inventory <json>] [--output <directory>]\n');
    return;
  }
  const extensionGitRootInput = readOption(args, '--extension-git-root');
  if (!extensionGitRootInput) throw new Error('--extension-git-root is required');
  const extensionGitRoot = path.resolve(extensionGitRootInput);
  const inventoryPath = path.resolve(readOption(args, '--inventory') ?? DEFAULT_INVENTORY);
  const outputRoot = path.resolve(readOption(args, '--output') ?? DEFAULT_OUTPUT);
  const inventory = JSON.parse((await readFile(inventoryPath)).toString('utf8'));
  const root = runGit(extensionGitRoot, ['rev-parse', '--show-toplevel'], { encoding: 'utf8' }).trim();
  if (path.resolve(root) !== extensionGitRoot) throw new Error('extension Git root does not resolve to the requested repository');
  const remote = runGit(extensionGitRoot, ['remote', 'get-url', 'origin'], { encoding: 'utf8' }).trim();
  const expectedOrigin = normalizedGitHubOrigin(inventory.sourceScope?.repository);
  if (!expectedOrigin || normalizedGitHubOrigin(remote) !== expectedOrigin) throw new Error('extension Git origin does not match the pinned source repository');

  const readSourceBlob = async ({ commit, path: sourcePath }) => {
    const type = runGit(extensionGitRoot, ['cat-file', '-t', `${commit}^{commit}`], { encoding: 'utf8' }).trim();
    if (type !== 'commit') throw new Error(`pinned Extension source commit is unavailable: ${commit}`);
    return runGit(extensionGitRoot, ['show', `${commit}:${sourcePath}`]);
  };
  const built = await buildW14ExtensionArchive({ inventory, outputRoot, readSourceBlob });
  const verified = await verifyW14ExtensionArchive({ archiveRoot: outputRoot });
  if (verified.fileCount !== built.fileCount || verified.manifestSha256 !== built.manifestSha256) {
    throw new Error('W14 Extension legacy archive readback differs from the generated package');
  }
  process.stdout.write(`${JSON.stringify({ ...built, verifiedFiles: verified.fileCount, outputRoot }, null, 2)}\n`);
}

main().catch(error => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
