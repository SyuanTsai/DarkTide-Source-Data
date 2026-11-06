import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { StructureError } from './errors.mjs';

/** Absolute path to the repository containing this module. */
export const REPO_ROOT = fileURLToPath(new URL('../../', import.meta.url));
/** Worktrees live one directory deeper than the ordinary checkout. */
export function siblingRepo(name, root=REPO_ROOT) {
  const adjacent=path.resolve(root,'..',name);
  const parent=path.resolve(root,'../..',name);
  return existsSync(adjacent)?adjacent:existsSync(parent)?parent:adjacent;
}

/** Parse named options. spec maps option names to 'value' or 'flag'. */
export function parseArgs(argv, spec) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (!arg.startsWith('--') || !Object.hasOwn(spec, arg.slice(2))) throw new Error(`未知參數：${arg}`);
    const name = arg.slice(2);
    if (Object.hasOwn(result, name)) throw new Error(`重複參數：${arg}`);
    if (spec[name] === 'flag') result[name] = true;
    else {
      if (!argv[i + 1] || argv[i + 1].startsWith('--')) throw new Error(`缺少參數值：${arg}`);
      result[name] = argv[++i];
    }
  }
  return result;
}

/** Read Git objects from the named repository without invoking a shell. */
export function git(repo, args) {
  return execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8', maxBuffer: 1 << 30, stdio: ['pipe','pipe','pipe'] });
}

/** Resolve a Source-Code ref once and obtain its release version. */
export function resolveSourceCode({ repo, ref } = {}) {
  repo = path.resolve(repo || process.env.DARKTIDE_SOURCE_CODE_REPO || siblingRepo('Darktide-Source-Code'));
  const commit = git(repo, ['rev-parse', '--verify', `${ref || 'HEAD'}^{commit}`]).trim();
  const subject = git(repo, ['log', '-1', '--format=%s', commit]).trim();
  const match = /^Added Version (\d+(?:\.\d+){1,3})\b/.exec(subject);
  if (!match) throw new StructureError('source', 'INVALID_SUBJECT', `無法由 commit subject 取得遊戲版本：${subject}`);
  return { repo, commit, gameVersion: match[1], subject };
}

/** Resolve a Private ref and read a numeric localization batch manifest. */
export function resolvePrivate({ repo, ref, batch } = {}) {
  repo = path.resolve(repo || process.env.DARKTIDE_PRIVATE_REPO || siblingRepo('DARKTIDE User Setting'));
  ref = ref || process.env.DARKTIDE_PRIVATE_REF || 'origin/master';
  const refCommit = git(repo, ['rev-parse', '--verify', `${ref}^{commit}`]).trim();
  if (!batch) {
    let entries;
    try { entries = git(repo, ['ls-tree', `${refCommit}:localization`]).split(/\r?\n/).filter(Boolean); }
    catch { throw new StructureError('text', 'BATCH_MISSING', '找不到 localization 目錄'); }
    const numbers = entries.map(x => /^040000 tree [0-9a-f]{40}\t(\d+)$/.exec(x)?.[1]).filter(Boolean);
    numbers.sort((a, b) => BigInt(a) < BigInt(b) ? -1 : BigInt(a) > BigInt(b) ? 1 : a < b ? -1 : 1);
    batch = numbers.at(-1);
  }
  if (!batch || !/^\d+$/.test(String(batch))) throw new StructureError('text', 'BATCH_MISSING', '找不到數字解包批次');
  let manifest;
  try { manifest = JSON.parse(git(repo, ['show', `${refCommit}:localization/${batch}/manifest.json`])); }
  catch { throw new StructureError('text', 'MANIFEST_INVALID', `無法讀取批次 ${batch} manifest`); }
  if (typeof manifest?.gameVersion !== 'string' || !/^\d+(?:\.\d+){1,3}$/.test(manifest.gameVersion) || !Array.isArray(manifest.resources))
    throw new StructureError('text', 'MANIFEST_INVALID', `批次 ${batch} manifest 格式不符`);
  return { repo, ref, refCommit, batch: String(batch), manifest, gameVersion: manifest.gameVersion };
}

/** Choose the output working directory. */
export function workDir({ root = REPO_ROOT, override, gameVersion }) {
  if (!override && !gameVersion) throw new Error('缺少遊戲版本');
  return path.resolve(override || path.join(root, '.pipeline-work', gameVersion));
}
