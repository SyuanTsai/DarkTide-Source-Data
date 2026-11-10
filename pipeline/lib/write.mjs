import { readFile, readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES, checkDataFile, checkCurrent, checkFileConsistency, compareVersions } from './data-files.mjs';
import { stringifyCanonical, writeCanonicalFile } from './canonical-json.mjs';
import { readState, writeState, advanceItem, keepPrevious, completeRun } from './state.mjs';
import { resolveCloudRoot } from './cloud-dir.mjs';
import { composeFinal } from './verify/compose.mjs';
import { InputError, readJson, readCandidateBytes, sha256 } from './verify/input.mjs';

export class WriteError extends Error {}
export function parseWriteArgs(args) {
  const names = { root: 'root', state: 'state', 'cloud-dir': 'cloudDir', report: 'report',
    'candidate-dir': 'candidateDir', 'extract-dir': 'extractDir', 'previous-dir': 'previousDir' }, options = {};
  for (let i = 0; i < args.length; i += 2) {
    const flag = args[i], key = flag.slice(2);
    if (!flag.startsWith('--') || !Object.hasOwn(names, key)) throw new InputError(`未知參數：${flag}`);
    const name = names[key];
    if (Object.hasOwn(options, name)) throw new InputError(`參數重複：${flag}`);
    if (!args[i + 1] || args[i + 1].startsWith('--')) throw new InputError(`參數缺少值：${flag}`);
    options[name] = args[i + 1];
  }
  return options;
}
async function sameFile(file, value) {
  try { return (await readFile(file)).equals(Buffer.from(stringifyCanonical(value))); }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}
async function writeChanged(file, value, writer = writeCanonicalFile) {
  if (!await sameFile(file, value)) await writer(file, value);
}
function checked(check, label) {
  if (!check.valid) throw new WriteError(`${label}驗證失敗：${check.errors.map((e) => `${e.path} ${e.message}`).join('；')}`);
}
const inconsistent = () => new WriteError('檢查報告與狀態檔不一致，請重跑 node pipeline/verify.mjs');
const writtenConflict = (id) => new WriteError(`已寫入的項目 ${id} 與新的檢查報告衝突：請把該項目的說明改回能通過檢查的內容後重跑 verify`);
function checkReportState(run, report) {
  for (const category of CATEGORIES) {
    if (run.categories[category]?.status !== report.categories[category].status ||
      run.categories[category]?.reason !== report.categories[category].reason) throw inconsistent();
  }
  for (const [id, item] of Object.entries(run.items)) {
    if (item.stage === 'written' && ['updated', 'removed'].includes(item.outcome)) {
      const rows = report.items.filter((row) => row.category === item.category && row.id === id);
      if (report.categories[item.category]?.status !== 'ok' ||
        (item.change !== 'removed' && item.outcome === 'updated' && (rows.length !== 1 || !['pass', 'combined'].includes(rows[0].decision)))) throw writtenConflict(id);
      continue;
    }
    if (report.categories[item.category]?.status !== 'ok' || item.stage === 'written' || item.change === 'removed') continue;
    const rows = report.items.filter((row) => row.category === item.category && row.id === id);
    if (rows.length !== 1 || !((['pass', 'combined'].includes(rows[0].decision) && item.outcome === null && item.stage === 'verified') ||
      (['kept-previous', 'excluded'].includes(rows[0].decision) && item.outcome === 'kept-previous'))) throw inconsistent();
    if (rows[0].decision === 'combined' && (!item.explanationFrom || typeof item.valuesChanged !== 'boolean' || typeof item.officialChanged !== 'boolean' ||
      (rows[0].officialChanged === true && !item.officialChanged))) throw inconsistent();
  }
}
async function safeJson(path, label, optional = false) {
  try { return await readJson(path, optional); }
  catch (error) {
    const code = error.message.match(/（([^（）]+)）$/)?.[1];
    throw new InputError(`${label}無法讀取或解析${code ? `（${code}）` : ''}`);
  }
}
function updateCategory(state, category, info, rows) {
  let next = state;
  for (const [id, item] of Object.entries(state.run.items).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0)) {
    if (item.category !== category || item.stage === 'written' || item.outcome !== null) continue;
    if (info.status === 'kept-previous') next = keepPrevious(next, id, `類別保留上一版：${info.reason}`);
    else if (item.change === 'removed' && ['described', 'verified'].includes(item.stage)) {
      if (item.stage === 'described') next = advanceItem(next, id, 'verified');
      next = advanceItem(next, id, 'written');
    } else if (item.stage === 'verified') {
      if (!rows.some((row) => row.category === category && row.id === id && ['pass', 'combined'].includes(row.decision))) throw inconsistent();
      next = advanceItem(next, id, 'written');
    }
    else throw new WriteError(`項目尚未通過檢查，請重跑 verify：${id}`);
  }
  return next;
}
export function writeSummary(run, report, final) {
  const lines = [];
  lines.push(`組合採用 ${report.items.filter(row => row.decision === 'combined').length}／退回 ${report.items.filter(row => row.decision === 'kept-previous' && row.combinationFailures?.length).length}`);
  for (const category of CATEGORIES) {
    lines.push(`${category}：寫入 ${final[category].items.length} 項`);
    const kept = final[category].items.filter((item) => item.retainedFrom);
    lines.push(`${category}：保留上一版 ${kept.length} 項`);
    for (const item of kept) {
      const row = report.items.find((row) => row.category === category && row.id === item.id);
      lines.push(`${item.id}：${report.categories[category].status === 'kept-previous'
        ? `類別保留上一版：${report.categories[category].reason}` : run.items[item.id]?.reason ?? row?.failures?.map((f) => `${f.code}：${f.message}`).join('、') ?? '保留上一版'}`);
    }
  }
  const keptCategories = CATEGORIES.filter((c) => report.categories[c].status === 'kept-previous');
  lines.push(`保留上一版的類別：${keptCategories.map((c) => `${c}：${report.categories[c].reason}`).join('、') || '無'}`);
  lines.push(`輸出空檔的類別：${CATEGORIES.filter((c) => final[c].items.length === 0).join('、') || '無'}`);
  lines.push(`寫入完成：${run.gameVersion}，請執行 node pipeline/validate.mjs`);
  return `${lines.join('\n')}\n`;
}

export async function runWrite(inputOptions = {}) {
  const root = resolve(inputOptions.root ?? fileURLToPath(new URL('../../', import.meta.url)));
  const stateFile = inputOptions.state ?? join(root, 'pipeline/state.json');
  let state;
  try { state = await readState(stateFile); }
  catch (error) { throw new InputError(`無法讀取狀態檔，JSON 或狀態結構不符${error.code ? `（${error.code}）` : ''}`); }
  const run = state.run;
  // A completed run is accepted only as an exact, read-only replay below.
  if (!run || !['running', 'completed', 'halted'].includes(run.status)) throw new InputError('尚無執行中的工作，請先跑 node pipeline/check-version.mjs');
  let base;
  if (!inputOptions.report || !inputOptions.candidateDir) {
    try { base = join(resolveCloudRoot({ override: inputOptions.cloudDir }), run.gameVersion); }
    catch (error) { throw new InputError(error.message); }
  }
  const report = (await safeJson(inputOptions.report ?? join(base, 'verify/report.json'), '檢查報告')).value;
  if (!report || !['gameVersion', 'sourceCommit', 'textBatch'].every((key) => report[key] === run[key]))
    throw new InputError('檢查報告版本與 state.run 不符，請重跑 node pipeline/verify.mjs');
  if (report.result === 'halted') return { exitCode: 3, stdout: '檢查結果為整批停止，不寫入\n' };
  if (run.status === 'halted') throw new InputError('尚無執行中的工作，請先跑 node pipeline/check-version.mjs');
  if (!['pass', 'degraded'].includes(report.result) || !Array.isArray(report.items) ||
    CATEGORIES.some((c) => !['ok', 'kept-previous'].includes(report.categories?.[c]?.status)))
    throw new InputError('檢查報告結構不符，請重跑 node pipeline/verify.mjs');
  checkReportState(run, report);
  const candidateDir = inputOptions.candidateDir ?? join(base, 'candidate'), candidates = {};
  for (const category of CATEGORIES) {
    let bytes;
    try { bytes = await readCandidateBytes(join(candidateDir, `${category}.json`)); }
    catch (error) { const code = error.message.match(/（([^（）]+)）$/)?.[1]; throw new InputError(`無法讀取 candidate/${category}.json${code ? `（${code}）` : ''}`); }
    if (sha256(bytes) !== report.categories[category].candidateSha256)
      throw new WriteError('候選資料在檢查後已變動，請重跑 node pipeline/verify.mjs');
    try { candidates[category] = bytes === null || report.categories[category].status === 'kept-previous' ? null : JSON.parse(bytes.toString('utf8')); }
    catch { throw new WriteError(`候選資料 JSON 無法解析：${category}`); }
  }
  const current = await safeJson(join(root, 'data/current.json'), 'data/current.json', true);
  if (current) {
    checked(checkCurrent(current.text), '目前版本索引');
    if (compareVersions(run.gameVersion, current.value.gameVersion) < 0) throw new WriteError('新版本小於目前版本，不寫入');
  }
  let dirs;
  try { dirs = await readdir(join(root, 'data'), { withFileTypes: true }); }
  catch (error) { if (error.code !== 'ENOENT') throw new InputError(`無法讀取 data 目錄（${error.code ?? '讀取失敗'}）`); dirs = []; }
  for (const entry of dirs) {
    if (entry.isDirectory() && /^[0-9]+(\.[0-9]+){1,3}$/.test(entry.name) && entry.name !== run.gameVersion && !current?.value.versions.includes(entry.name))
      throw new WriteError(`data 下有未登記的版本目錄 ${entry.name}：可能是先前寫入中斷，請先完成該版本的寫入或手動移除後再執行`);
  }
  let previousDir = inputOptions.previousDir;
  if (!previousDir && current) {
    // After current.json is published, replay still needs the verified predecessor.
    previousDir = current.value.gameVersion === run.gameVersion
      ? report.previousGameVersion ? join(root, 'data', report.previousGameVersion) : 'none'
      : resolve(root, current.value.path);
  }
  const final = {};
  const legacyReport = !Object.hasOwn(report, 'targetSchemaVersion');
  for (const category of CATEGORIES) {
    const previous = previousDir && previousDir !== 'none' ? (await safeJson(join(previousDir, `${category}.json`), `上一版/${category}.json`, true))?.value : null;
    let extract;
    if (report.items.some(row => row.category === category && row.decision === 'combined')) {
      const bytes = await readCandidateBytes(join(inputOptions.extractDir ?? join(candidateDir, '..', 'extract'), `${category}.json`));
      if (bytes === null || sha256(bytes) !== report.categories[category].extractSha256)
        throw new WriteError('extract 在檢查後已變動，請重跑 node pipeline/verify.mjs');
      try { extract = JSON.parse(bytes.toString('utf8')); }
      catch { throw new WriteError(`extract JSON 無法解析：${category}`); }
    }
    try {
      // Legacy verify approved each category's original schema, never a promotion.
      // Only a new verify report can authorize the current release target.
      const targetSchemaVersion = legacyReport
        ? report.categories[category].status === 'kept-previous' ? previous?.schemaVersion : candidates[category]?.schemaVersion
        : report.targetSchemaVersion;
      if (typeof targetSchemaVersion !== 'string') throw new Error('缺少已核准的發布目標 schemaVersion，請重跑 node pipeline/verify.mjs');
      if (legacyReport && report.categories[category].status === 'ok' &&
        report.items.some(row => row.category === category && row.decision === 'kept-previous') &&
        candidates[category]?.schemaVersion !== previous?.schemaVersion)
        throw new Error('保留項目的 schemaVersion 與候選資料不一致');
      final[category] = composeFinal({ category, status: report.categories[category].status,
        candidate: candidates[category], extract, previous, rows: report.items, version: run, targetSchemaVersion });
    }
    catch (error) { throw new WriteError(error.message); }
    for (const [id, item] of Object.entries(run.items)) {
      if (report.categories[category].status === 'ok' && item.category === category && item.change === 'removed' && item.stage !== 'written' &&
        final[category].items.some((entry) => entry.id === id)) throw new WriteError(`項目 ${id} 登記為移除但仍在本次資料中，請重跑 node pipeline/diff.mjs 再執行 verify`);
      if (item.category === category && item.stage === 'written' && item.outcome === 'removed' &&
        final[category].items.some((entry) => entry.id === id)) throw writtenConflict(id);
    }
  }
  const versionItems = Object.values(final).flatMap(file => file.items ?? []);
  for (const category of CATEGORIES)
    checked(checkDataFile(category, stringifyCanonical(final[category]), versionItems), `${category} 最終資料`);
  for (const category of CATEGORIES)
    if (report.categories[category].mergedSha256 && sha256(Buffer.from(stringifyCanonical(final[category]))) !== report.categories[category].mergedSha256) throw inconsistent();
  if (checkFileConsistency(Object.entries(final).map(([category, value]) => ({ category, value })), ['schemaVersion']).length)
    throw new WriteError('最終資料的 schemaVersion 不一致');
  const index = { schemaVersion: final[CATEGORIES[0]].schemaVersion, gameVersion: run.gameVersion, path: `data/${run.gameVersion}`,
    sourceCommit: run.sourceCommit, textBatch: run.textBatch,
    versions: [...new Set([...(current?.value.versions ?? []), run.gameVersion])].sort(compareVersions) };
  checked(checkCurrent(stringifyCanonical(index)), '新版本索引');
  if (run.status === 'completed') {
    if (Object.values(run.items).some((item) => item.outcome === null) ||
      !await sameFile(join(root, 'data/current.json'), index) ||
      !(await Promise.all(CATEGORIES.map((c) => sameFile(join(root, 'data', run.gameVersion, `${c}.json`), final[c])))).every(Boolean))
      throw new InputError('已完成工作與輸出不同，請先跑 node pipeline/check-version.mjs');
    return { exitCode: 0, stdout: writeSummary(run, report, final) };
  }
  for (const category of CATEGORIES) {
    await writeChanged(join(root, 'data', run.gameVersion, `${category}.json`), final[category]);
    state = updateCategory(state, category, report.categories[category], report.items);
    await writeChanged(stateFile, state, writeState);
    await inputOptions.afterCategory?.(category);
  }
  await writeChanged(join(root, 'data/current.json'), index);
  state = completeRun(state);
  await writeChanged(stateFile, state, writeState);
  return { exitCode: 0, stdout: writeSummary(state.run, report, final) };
}
