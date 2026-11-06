import { readFile, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { CATEGORIES, checkDataFile } from '../data-files.mjs';
import { readState } from '../state.mjs';
import { itemIndex } from './common.mjs';

export class InputError extends Error {}
export async function readText(path, optional = false) {
  try { return await readFile(path, 'utf8'); }
  catch (error) {
    if (optional && error.code === 'ENOENT') return null;
    throw new InputError(`無法讀取檔案：${path}（${error.code ?? '讀取失敗'}）`);
  }
}
export async function readJson(path, optional = false) {
  const text = await readText(path, optional);
  if (text === null) return null;
  try { return { value: JSON.parse(text), text }; }
  catch { throw new InputError(`無法解析 JSON：${path}`); }
}
export async function loadInput(options) {
  for (const key of ['candidateDir', 'extractDir', 'versionInfo'])
    if (typeof options[key] !== 'string' || !options[key]) throw new InputError(`缺少必要參數：${key}`);
  if (!['create', 'dry-run', 'off'].includes(options.issues)) throw new InputError('Issue 模式必須是 create、dry-run 或 off');
  for (const dir of [options.candidateDir, options.extractDir, ...(options.previousDir && options.previousDir !== 'none' ? [options.previousDir] : [])]) {
    try { if (!(await stat(dir)).isDirectory()) throw new Error(); }
    catch { throw new InputError(`無法讀取資料目錄：${dir}`); }
  }
  const version = (await readJson(options.versionInfo)).value;
  if (!version || !['sourceGameVersion', 'textGameVersion'].every((key) => typeof version[key] === 'string' && /^[0-9]+(\.[0-9]+){1,3}$/.test(version[key])) ||
    !/^[0-9a-fA-F]{40}$/.test(version.sourceCommit ?? '') || !/^[A-Za-z0-9._-]{1,128}$/.test(version.textBatch ?? ''))
    throw new InputError('版本資訊缺少必要欄位或格式不符');
  const translation = await readText(options.translation);
  const current = await readJson(join(options.root, 'data/current.json'), true);
  let previousDir = options.previousDir;
  if (!previousDir && current) {
    if (typeof current.value?.path !== 'string') throw new InputError('目前版本索引缺少 path 欄位');
    previousDir = resolve(options.root, current.value.path);
  }
  let state = null;
  if (options.state) {
    // readState deliberately accepts a missing state; CLI explicitly supplied files must exist.
    await readText(options.state);
    try { state = await readState(options.state); }
    catch { throw new InputError('無法讀取狀態檔，JSON 或狀態結構不符'); }
  }
  const loaded = {};
  for (const category of [...CATEGORIES].sort()) {
    const candidate = await readJson(join(options.candidateDir, `${category}.json`), true);
    const extract = await readJson(join(options.extractDir, `${category}.json`), true);
    const previous = previousDir && previousDir !== 'none' ? await readJson(join(previousDir, `${category}.json`), true) : null;
    loaded[category] = { candidate: candidate?.value ?? null, extract: extract?.value ?? null, previous: previous?.value ?? null,
      schemaErrors: candidate ? checkDataFile(category, candidate.text).errors : [] };
  }
  return { version, translation, current, loaded, state };
}
export function inputHalt({ version, loaded }) {
  if (version.sourceGameVersion !== version.textGameVersion)
    return `Source-Code ${version.sourceGameVersion}（${version.sourceCommit.slice(0, 7)}）與解包批次 ${version.textBatch}（${version.textGameVersion}）遊戲版本不一致`;
  const keys = { gameVersion: 'sourceGameVersion', sourceCommit: 'sourceCommit', textBatch: 'textBatch' };
  for (const [category, entry] of Object.entries(loaded))
    for (const kind of ['candidate', 'extract'])
      for (const [key, versionKey] of Object.entries(keys))
        if (entry[kind] && Object.hasOwn(entry[kind], key) && entry[kind][key] !== version[versionKey])
          return `${category} 的${kind === 'candidate' ? '候選資料' : '取數輸出'} ${key} 與版本資訊不一致`;
  return null;
}
export function categoryReason(entry) {
  if (!entry.extract) return '缺少 extract 輸出';
  if (entry.extract.status !== 'ok') return typeof entry.extract.reason === 'string' && entry.extract.reason.trim() ? entry.extract.reason : 'extract 輸出結構不符';
  if (!entry.candidate) return '缺少候選檔';
  const errors = entry.schemaErrors.filter((e) => itemIndex(e.path) === undefined);
  if (errors.length) return '候選檔標頭或 canonical 結構不符';
  if (!Array.isArray(entry.extract.items)) return 'extract 項目結構不符';
  return null;
}
