import { readFile, stat, mkdir, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { CATEGORIES, checkDataFile } from '../data-files.mjs';
import { readState } from '../state.mjs';
import { itemIndex } from './common.mjs';
import { resolveCloudRoot } from '../cloud-dir.mjs';
import { buildCandidates } from '../candidate.mjs';
import { writeCanonicalFile } from '../canonical-json.mjs';

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
  if (!['create', 'dry-run', 'off'].includes(options.issues)) throw new InputError('Issue 模式必須是 create、dry-run 或 off');
  // Preserve the original fully explicit input interface without requiring state or cloud.
  const defaults = !options.candidateDir || !options.extractDir || !options.versionInfo;
  const defaultExtract = !options.extractDir;
  const stateFile = options.state ?? join(options.root, 'pipeline/state.json');
  let state;
  try {
    if (options.state) await readText(stateFile);
    state = await readState(stateFile);
  } catch { throw new InputError('無法讀取狀態檔，JSON 或狀態結構不符'); }
  if (defaults && !state.run) throw new InputError('尚無執行中的工作，請先跑 node pipeline/check-version.mjs');
  options.state = state.run || options.state ? stateFile : undefined;
  let base;
  const cloudBase = () => {
    if (!base) {
      try { base = join(resolveCloudRoot({ override: options.cloudDir }), state.run?.gameVersion ?? version.sourceGameVersion); }
      catch (error) { throw new InputError(error.message); }
    }
    return base;
  };
  const version = options.versionInfo ? (await readJson(options.versionInfo)).value : {
    sourceGameVersion: state.run.gameVersion, textGameVersion: state.run.gameVersion,
    sourceCommit: state.run.sourceCommit, textBatch: state.run.textBatch,
  };
  if (!version || !['sourceGameVersion', 'textGameVersion'].every((key) => typeof version[key] === 'string' && /^[0-9]+(\.[0-9]+){1,3}$/.test(version[key])) ||
    !/^[0-9a-fA-F]{40}$/.test(version.sourceCommit ?? '') || !/^[A-Za-z0-9._-]{1,128}$/.test(version.textBatch ?? ''))
    throw new InputError('版本資訊缺少必要欄位或格式不符');
  options.translation ??= process.env.DARKTIDE_GLOSSARY_FILE || join(options.root, '../Warhammer-40-000-DARKTIDE-Mods/Referneces/Translation.md');
  let translation;
  try { translation = await readText(options.translation); }
  catch (error) { throw new InputError(`${error.message}；在 worktree 中執行時請用 --translation 指定 Translation.md`); }
  const current = await readJson(join(options.root, 'data/current.json'), true);
  let previousDir = options.previousDir;
  if (!previousDir && current) {
    if (typeof current.value?.path !== 'string') throw new InputError('目前版本索引缺少 path 欄位');
    previousDir = resolve(options.root, current.value.path);
  }
  options.extractDir ??= join(cloudBase(), 'extract');
  if (!options.candidateDir) {
    options.candidateDir = join(cloudBase(), 'candidate');
    const diffReport = (await readJson(join(cloudBase(), 'diff/diff.json'))).value;
    const candidates = await buildCandidates({ run: state.run, extractDir: options.extractDir,
      aiOutputDir: join(cloudBase(), 'ai/output'), previousDir, diffReport });
    await mkdir(options.candidateDir, { recursive: true });
    for (const category of CATEGORIES) {
      const file = join(options.candidateDir, `${category}.json`);
      if (candidates[category] === null) await rm(file, { force: true });
      else await writeCanonicalFile(file, candidates[category]);
    }
  }
  if (defaults || options.cloudDir || (state.run && process.env.DARKTIDE_PIPELINE_CLOUD_DIR)) {
    options.report ??= join(cloudBase(), 'verify/report.json');
    options.outDir ??= join(cloudBase(), 'verify/out');
  }
  for (const dir of [options.candidateDir, options.extractDir, ...(options.previousDir && options.previousDir !== 'none' ? [options.previousDir] : [])]) {
    try { if (!(await stat(dir)).isDirectory()) throw new Error(); }
    catch (error) {
      if (defaultExtract && dir === options.extractDir && error.code === 'ENOENT') continue;
      throw new InputError(`無法讀取資料目錄：${dir}`);
    }
  }
  const loaded = {};
  for (const category of [...CATEGORIES].sort()) {
    const bytes = await readCandidateBytes(join(options.candidateDir, `${category}.json`));
    let candidate = null;
    if (bytes) {
      const text = bytes.toString('utf8');
      try { candidate = { value: JSON.parse(text), text }; }
      catch { throw new InputError(`無法解析 JSON：${join(options.candidateDir, `${category}.json`)}`); }
    }
    const extract = await readJson(join(options.extractDir, `${category}.json`), true);
    const previous = previousDir && previousDir !== 'none' ? await readJson(join(previousDir, `${category}.json`), true) : null;
    loaded[category] = { candidate: candidate?.value ?? null, extract: extract?.value ?? null, previous: previous?.value ?? null,
      candidateSha256: sha256(bytes), schemaErrors: candidate ? checkDataFile(category, candidate.text).errors : [] };
  }
  return { version, translation, current, loaded, state };
}
export async function readCandidateBytes(file) {
  try { return await readFile(file); }
  catch (error) { if (error.code === 'ENOENT') return null; throw new InputError(`無法讀取檔案：${file}（${error.code ?? '讀取失敗'}）`); }
}
export const sha256 = (bytes) => bytes === null ? null : createHash('sha256').update(bytes).digest('hex');
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
