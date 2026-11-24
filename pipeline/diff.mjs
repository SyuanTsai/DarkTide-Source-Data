import { readFile, mkdir, writeFile, rename } from 'node:fs/promises';
import { basename, join, resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { stringifyCanonical } from './lib/canonical-json.mjs';
import { checkCurrent, checkDataFile, CATEGORIES } from './lib/data-files.mjs';
import { readState, writeState, registerItem, unregisterItem, advanceItem, reopenItem, pendingItems, STAGES } from './lib/state.mjs';
import { loadSchemas } from './lib/json-schema.mjs';
import { diffCategory, inputHashFor } from './lib/diff-core.mjs';
import { resolveCloudRoot, cloudLayout, itemFileName, copyIfChanged } from './lib/cloud-dir.mjs';
import { resolveGlossary, matchGlossary } from './lib/glossary.mjs';
import { dataFile, applyEffectTask } from './lib/candidate.mjs';
import { loadTextIndex } from './lib/official-text.mjs';
import { effectTaskFor, effectNeedsRefresh } from './lib/official-effect.mjs';

const repo = fileURLToPath(new URL('../', import.meta.url));
const schemas = loadSchemas(join(repo, 'pipeline/schema'));
const emptyExplanation = { effect: '-', conditions: '', calculation: '', notes: '', extra: '' };
const fields = ['gameVersion', 'sourceCommit', 'textBatch'];
const args = process.argv.slice(2), options = {};
let logicalRoots = [];
function logical(file) {
  if (!file) return '檔案';
  for (const [root, label] of logicalRoots) {
    const part = relative(root, resolve(file));
    if (!part || (!part.startsWith('..') && !isAbsolute(part))) return [label, part.replaceAll('\\', '/')].filter(Boolean).join('/');
  }
  return '檔案';
}
function parseArgs() {
  const names = new Set(['--state', '--work-dir', '--data-dir', '--cloud-dir', '--glossary', '--mark-described', '--rewrite-retained']);
  while (args.length) {
    const arg = args.shift();
    if (Object.hasOwn(options, arg)) throw new Error(`參數重複：${arg}`);
    if (names.has(arg)) {
      if (!args.length || args[0].startsWith('--')) { if (arg === '--mark-described') throw new Error('--mark-described 缺少項目 ID'); throw new Error(`參數缺少值：${arg}`); }
      options[arg] = args.shift();
      if (arg === '--mark-described' && options[arg] === '') throw new Error('--mark-described 項目 ID 不可為空');
    } else if (arg === '--pending' || arg === '--json') options[arg] = true;
    else throw new Error(`未知參數：${arg}`);
  }
  if (options['--pending'] && Object.hasOwn(options, '--mark-described')) throw new Error('不能同時指定 --pending 與 --mark-described');
  for (const mode of ['--pending', '--mark-described'])
    if (Object.hasOwn(options, '--rewrite-retained') && Object.hasOwn(options, mode)) throw new Error(`不能同時指定 --rewrite-retained 與 ${mode}`);
  if (options['--json'] && !options['--pending']) throw new Error('--json 僅適用於 --pending');
}
async function optional(file) { try { return await readFile(file, 'utf8'); } catch (e) { if (e.code === 'ENOENT') return null; throw e; } }
function parse(text, file) { try { return JSON.parse(text); } catch { throw new Error(`JSON 格式錯誤：${file}`); } }
async function readRewriteList(file, { retainedExplanations: markers = {} }, recordedRewrites) {
  const label = basename(file) || '--rewrite-retained';
  let text;
  try { text = await readFile(file, 'utf8'); }
  catch { throw new Error(`無法讀取沿用說明改寫清單：${label}`); }
  const ids = parse(text, label);
  if (!Array.isArray(ids)) throw new Error(`沿用說明改寫清單須為 JSON 陣列：${label}`);
  if (ids.length === 0) throw new Error(`沿用說明改寫清單不可為空：${label}`);
  const categories = { skill: 'skills', weapon: 'weapons', blessing: 'blessings', term: 'terms' };
  const seen = new Set(), byCategory = new Map();
  for (const [index, id] of ids.entries()) {
    if (typeof id !== 'string' || !id.trim()) throw new Error(`沿用說明改寫清單第 ${index + 1} 項須為非空字串：${JSON.stringify(id)}`);
    if (seen.has(id)) throw new Error(`沿用說明改寫清單的 ID 重複：${id}`);
    seen.add(id);
    const type = id.split(':')[1];
    const category = Object.hasOwn(categories, type) ? categories[type] : undefined;
    const marker = Object.hasOwn(markers, id) ? markers[id] : undefined;
    if (marker && marker.category !== category) throw new Error(`沿用說明標記的類別與 ID 不符：${id}（${marker.category}）`);
    if (!marker && !(category && recordedRewrites.has(id))) throw new Error(`找不到沿用說明標記：${id}`);
    if (!byCategory.has(category)) byCategory.set(category, []);
    byCategory.get(category).push(id);
  }
  return { ids: seen, byCategory };
}
function promoteRetained(diff, ids) {
  const unchanged = new Set(diff.unchanged), changed = new Set(diff.changed);
  for (const id of ids) {
    if (unchanged.has(id)) {
      unchanged.delete(id);
      changed.add(id);
    } else if (!changed.has(id)) {
      const change = ['added', 'removed'].find(kind => diff[kind].includes(id));
      throw new Error(`沿用說明改寫項目須為 unchanged 或 changed：${id}${change ? `（本次為 ${change}）` : ''}`);
    }
  }
  diff.unchanged = [...unchanged];
  diff.changed = [...changed].sort();
}
function checked(result, file) {
  if (!result.valid) throw new Error(`${file} 驗證失敗：\n${result.errors.slice(0, 20).map((e) => `${e.path} ${e.message}`).join('\n')}`);
}
async function writeChanged(file, value) {
  const text = stringifyCanonical(value);
  if (await optional(file) === text) return;
  await mkdir(dirname(file), { recursive: true });
  const temp = `${file}.${randomUUID()}.tmp`;
  await writeFile(temp, text); await rename(temp, file);
}
async function main() {
  parseArgs();
  const stateFile = resolve(options['--state'] || join(repo, 'pipeline/state.json'));
  logicalRoots.push([stateFile, 'state.json']);
  let state = await readState(stateFile);
  if (!state.run || state.run.status !== 'running') throw new Error('尚無執行中的工作，請先跑 node pipeline/check-version.mjs');
  const run = state.run;
  const layout = cloudLayout(resolveCloudRoot({ override: options['--cloud-dir'] }), run.gameVersion);
  logicalRoots.push([layout.aiInput, 'ai/input'], [layout.aiOutput, 'ai/output'], [layout.extract, 'extract'], [layout.diff, 'diff']);
  if (options['--glossary'] || process.env.DARKTIDE_GLOSSARY_FILE) logicalRoots.push([resolve(options['--glossary'] || process.env.DARKTIDE_GLOSSARY_FILE), 'glossary']);
  const paths = (id) => ({ input: join(layout.aiInput, itemFileName(id)), output: join(layout.aiOutput, itemFileName(id)) });
  if (options['--pending']) {
    const pending = pendingItems(state, 'described').filter((id) => run.items[id].change !== 'removed').map((id) => ({ id, ...paths(id) }));
    console.log(options['--json'] ? JSON.stringify(pending) : pending.length ? pending.map(({ id, input, output }) => `${id}\t${input}\t${output}`).join('\n') : '沒有待寫說明的項目');
    return;
  }
  if (Object.hasOwn(options, '--mark-described')) {
    const id = options['--mark-described'], entry = run.items[id];
    if (!entry || entry.change === 'removed' || (entry.outcome !== null && !(entry.outcome === 'kept-previous' && STAGES.indexOf(entry.stage) < STAGES.indexOf('described')))) throw new Error(`無法標記項目：${id}`);
    if (STAGES.indexOf(entry.stage) >= STAGES.indexOf('described')) { console.log(`已標記：${id}`); return; }
    const { input: inputPath, output: outputPath } = paths(id);
    const inputText = await optional(inputPath), outputText = await optional(outputPath);
    if (inputText === null || outputText === null) throw new Error(`${logical(inputText === null ? inputPath : outputPath)}：找不到檔案`);
    const input = parse(inputText, logical(inputPath)), output = parse(outputText, logical(outputPath));
    checked(schemas.validate('ai-input.schema.json', input), logical(inputPath));
    checked(schemas.validate('ai-output.schema.json', output), logical(outputPath));
    if (input.id !== id || input.item.id !== id || output.id !== id || input.category !== entry.category || input.change !== entry.change) throw new Error('項目 id、category 或 change 不符');
    const effectTask=Object.hasOwn(input,'lockedEffect')?{lockedEffect:input.lockedEffect}:Object.hasOwn(input,'effectTask')?{effectTask:input.effectTask}:undefined;
    if (input.inputHash !== entry.inputHash || output.inputHash !== entry.inputHash || inputHashFor(entry.category, entry.change, input.item, undefined, effectTask) !== entry.inputHash) throw new Error('inputHash 不符；說明可能已過期，請依新輸入重寫');
    const explanation=effectTask?applyEffectTask(output.explanation,effectTask):output.explanation;
    const versionItems = [input.item];
    for (const category of CATEGORIES) {
      const text = await optional(join(layout.extract, `${category}.json`));
      if (text !== null) versionItems.push(...(parse(text, `extract/${category}.json`).items ?? []));
    }
    checked(checkDataFile(entry.category, stringifyCanonical(dataFile(entry.category, run, [{ ...input.item, explanation, errata: output.errata, ...(output.citations === undefined ? {} : {citations: output.citations}) }], input.dataSchemaVersion ?? (entry.category === 'weapons' && !Object.hasOwn(input.item.values, 'curves') ? '1.0.0' : '1.1.0'))), versionItems), logical(outputPath));
    if (entry.outcome === 'kept-previous') state = reopenItem(state, id);
    state = advanceItem(state, id, 'described'); await writeState(stateFile, state);
    console.log(`已標記：${id}`); return;
  }
  const work = resolve(options['--work-dir'] || join(repo, '.pipeline-work', run.gameVersion));
  const dataDir = resolve(options['--data-dir'] || join(repo, 'data'));
  const recordedRewrites = new Set(run.rewriteRetained);
  const rewrite = Object.hasOwn(options, '--rewrite-retained')
    ? await readRewriteList(options['--rewrite-retained'], state, recordedRewrites) : undefined;
  const omittedRewrites = [...recordedRewrites].filter(id =>
    Object.hasOwn(run.items, id) && !rewrite?.ids.has(id));
  if (omittedRewrites.length) throw new Error(`本輪已選取的沿用說明改寫項目不可移除：${omittedRewrites.sort().join('、')}。請帶同一份清單，或重新建立重產工作目錄`);
  const textFile=join(work,'extract','text.json');
  const textIndex=await optional(textFile)!==null?loadTextIndex(textFile):undefined;
  logicalRoots.push([join(work, 'extract'), 'extract'], [dataDir, 'data']);
  const glossary = resolveGlossary({ override: options['--glossary'] });
  if (!glossary) console.log('找不到 Translation.md，AI 輸入不含譯名對照');
  const currentPath = join(dataDir, 'current.json'), currentText = await optional(currentPath);
  let previousVersion = null;
  if (currentText !== null) { checked(checkCurrent(currentText), logical(currentPath)); previousVersion = parse(currentText, logical(currentPath)).gameVersion; }
  const previousItems = [];
  if (previousVersion !== null) for (const category of CATEGORIES) {
    const file = join(dataDir, previousVersion, `${category}.json`), text = await optional(file);
    if (text !== null) previousItems.push(...(parse(text, logical(file)).items ?? []));
  }
  const report = { schemaVersion: '1.0.0', ...Object.fromEntries(fields.map((k) => [k, run[k]])), previousGameVersion: previousVersion, categories: {} };
  const registrations = [], inputs = [];
  let extractVersion, previousSchemaVersion;
  for (const category of CATEGORIES) {
    const file = join(work, 'extract', `${category}.json`), text = await optional(file);
    const blank = { added: [], changed: [], removed: [], unchanged: [] };
    if (text === null) { report.categories[category] = { status: 'missing', reason: null, ...blank }; console.log(`缺少 extract：${category}（該類別保留上一版）`); continue; }
    const extract = parse(text, logical(file));
    if (!extract || typeof extract !== 'object' || extract.category !== category || !['1.0.0', '1.1.0', '1.2.0'].includes(extract.schemaVersion) || !['ok', 'structure-mismatch'].includes(extract.status) || !Array.isArray(extract.items) || !Array.isArray(extract.problems) || !Array.isArray(extract.excluded) || !(extract.reason === null || typeof extract.reason === 'string') || typeof extract.scriptVersion !== 'string') throw new Error(`extract 格式錯誤：${logical(file)}`);
    if (extractVersion && extractVersion !== extract.schemaVersion) throw new Error('extract schemaVersion 不一致');
    extractVersion = extract.schemaVersion;
    for (const key of fields) if (extract[key] !== run[key]) throw new Error(`${logical(file)} 的 ${key} 與 state 不符`);
    if (extract.status === 'structure-mismatch') { report.categories[category] = { status: extract.status, reason: extract.reason, ...blank }; continue; }
    checked(checkDataFile(category, stringifyCanonical(dataFile(category, run, extract.items.map((item) => ({ ...item, explanation: emptyExplanation, errata: [] })), extract.schemaVersion))), logical(file));
    let previous = [];
    if (previousVersion !== null) {
      const prevFile = join(dataDir, previousVersion, `${category}.json`), prevText = await optional(prevFile);
      if (prevText !== null) { checked(checkDataFile(category, prevText, previousItems), logical(prevFile)); const prev = parse(prevText, logical(prevFile)); if (previousSchemaVersion && previousSchemaVersion !== prev.schemaVersion) throw new Error('資料檔 schemaVersion 不一致'); previousSchemaVersion = prev.schemaVersion; if (prev.gameVersion !== previousVersion) throw new Error(`${logical(prevFile)} 的 gameVersion 不符`); previous = prev.items; }
    }
    const diff = diffCategory(category, previous, extract.items);
    if (['1.1.0','1.2.0'].includes(extract.schemaVersion) && ['skills','blessings'].includes(category)) {
      const oldById=new Map(previous.map(item=>[item.id,item])), newById=new Map(extract.items.map(item=>[item.id,item]));
      diff.unchanged=diff.unchanged.filter(id=>{
        const task=effectTaskFor(newById.get(id),textIndex,extract.effectFormats?.[id]);
        if (!effectNeedsRefresh(oldById.get(id)?.explanation,task)) return true;
        diff.changed.push(id); return false;
      });
      diff.changed.sort();
    }
    const rewriteIds = rewrite?.byCategory.get(category);
    if (rewriteIds) promoteRetained(diff, rewriteIds);
    report.categories[category] = { status: 'ok', reason: null, ...diff };
    const oldMap = new Map(previous.map((item) => [item.id, item])), newMap = new Map(extract.items.map((item) => [item.id, item]));
    for (const change of ['added', 'changed', 'removed']) for (const id of diff[change]) {
      const item = newMap.get(id), old = oldMap.get(id);
      const effectTask=change!=='removed' && ['1.1.0','1.2.0'].includes(extract.schemaVersion) && ['skills','blessings'].includes(category)?effectTaskFor(item,textIndex,extract.effectFormats?.[id]):undefined;
      const inputHash = inputHashFor(category, change, item, old, effectTask);
      registrations.push({ id, category, change, inputHash });
      if (change !== 'removed') {
        const prev = old ? { gameVersion: previousVersion, name: old.name, official: old.official, values: old.values, explanation: old.explanation, errata: old.errata, ...(old.citations === undefined ? {} : {citations: old.citations}) } : null;
        const input = { schemaVersion: '1.0.0', dataSchemaVersion: extract.schemaVersion, id, category, change, ...Object.fromEntries(fields.map((k) => [k, run[k]])), inputHash, item, previous: prev, glossary: { source: glossary?.source ?? null, matches: matchGlossary(glossary?.entries ?? [], [item.name.en, item.official.en, prev?.name.en, prev?.official.en]) }, outputFile: `ai/output/${itemFileName(id)}`,...effectTask };
        checked(schemas.validate('ai-input.schema.json', input), `AI 輸入 ${id}`); inputs.push(input);
      }
    }
  }
  if (rewrite) for (const [category, ids] of rewrite.byCategory) {
    const { status } = report.categories[category];
    if (status !== 'ok') throw new Error(`沿用說明改寫項目的類別 ${category} 本次狀態為 ${status}：${ids.join('、')}`);
  }
  checked(schemas.validate('diff-report.schema.json', report), 'diff 報告');
  const active = new Set(registrations.map((x) => x.id));
  for (const [id, item] of Object.entries(run.items))
    if (item.change === 'removed' && report.categories[item.category]?.status === 'structure-mismatch') active.add(id);
  for (const id of Object.keys(run.items).sort()) if (!active.has(id)) {
    if (run.items[id].stage === 'written') console.log(`警告：已登記項目不在本次差異中：${id}`);
    else { state = unregisterItem(state, id); console.log(`已移除過期登記：${id}`); }
  }
  for (const { id, ...info } of registrations.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)) {
    state = registerItem(state, id, info);
    if (info.change === 'removed' && state.run.items[id].stage === 'extracted') state = advanceItem(state, id, 'described');
  }
  if (rewrite) state.run.rewriteRetained = [...new Set([...recordedRewrites, ...rewrite.ids])].sort();
  await writeState(stateFile, state);
  for (const category of [...CATEGORIES, 'text']) { const src = join(work, 'extract', `${category}.json`); if (await optional(src) !== null) await copyIfChanged(src, join(layout.extract, `${category}.json`)); }
  await writeChanged(join(layout.diff, 'text-current.json'), {available: await optional(textFile) !== null});
  await writeChanged(join(layout.diff, 'diff.json'), report);
  for (const input of inputs) await writeChanged(join(layout.aiInput, itemFileName(input.id)), input);
  for (const category of CATEGORIES) { const c = report.categories[category]; console.log(c.status === 'ok' ? `${category}：新增 ${c.added.length}、變動 ${c.changed.length}、移除 ${c.removed.length}、沿用 ${c.unchanged.length}` : `${category}：${c.status}${c.reason ? `（${c.reason}）` : ''}`); }
  if (rewrite) console.log(`沿用說明改寫：${rewrite.ids.size} 項`);
  console.log(`待寫說明：${pendingItems(state, 'described').filter((id) => state.run.items[id].change !== 'removed').length} 項`);
}
main().catch((e) => { console.error(`錯誤：${e.code ? `${logical(e.path)}：${e.code === 'ENOENT' ? '找不到檔案' : `讀取失敗（${e.code}）`}` : e.message}`); process.exitCode = 1; });
