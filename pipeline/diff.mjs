import { readFile, mkdir, writeFile, rename } from 'node:fs/promises';
import { join, resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { stringifyCanonical } from './lib/canonical-json.mjs';
import { checkCurrent, checkDataFile, CATEGORIES } from './lib/data-files.mjs';
import { readState, writeState, registerItem, advanceItem, pendingItems, STAGES } from './lib/state.mjs';
import { loadSchemas } from './lib/json-schema.mjs';
import { diffCategory, inputHashFor } from './lib/diff-core.mjs';
import { resolveCloudRoot, cloudLayout, itemFileName, copyIfChanged } from './lib/cloud-dir.mjs';
import { resolveGlossary, matchGlossary } from './lib/glossary.mjs';
import { dataFile } from './lib/candidate.mjs';

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
  const names = new Set(['--state', '--work-dir', '--data-dir', '--cloud-dir', '--glossary', '--mark-described']);
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
  if (options['--json'] && !options['--pending']) throw new Error('--json 僅適用於 --pending');
}
async function optional(file) { try { return await readFile(file, 'utf8'); } catch (e) { if (e.code === 'ENOENT') return null; throw e; } }
function parse(text, file) { try { return JSON.parse(text); } catch { throw new Error(`JSON 格式錯誤：${file}`); } }
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
    if (!entry || entry.change === 'removed' || entry.outcome !== null) throw new Error(`無法標記項目：${id}`);
    if (STAGES.indexOf(entry.stage) >= STAGES.indexOf('described')) { console.log(`已標記：${id}`); return; }
    const { input: inputPath, output: outputPath } = paths(id);
    const inputText = await optional(inputPath), outputText = await optional(outputPath);
    if (inputText === null || outputText === null) throw new Error(`${logical(inputText === null ? inputPath : outputPath)}：找不到檔案`);
    const input = parse(inputText, logical(inputPath)), output = parse(outputText, logical(outputPath));
    checked(schemas.validate('ai-input.schema.json', input), logical(inputPath));
    checked(schemas.validate('ai-output.schema.json', output), logical(outputPath));
    if (input.id !== id || input.item.id !== id || output.id !== id || input.category !== entry.category || input.change !== entry.change) throw new Error('項目 id、category 或 change 不符');
    if (input.inputHash !== entry.inputHash || output.inputHash !== entry.inputHash || inputHashFor(entry.category, entry.change, input.item) !== entry.inputHash) throw new Error('inputHash 不符；說明可能已過期，請依新輸入重寫');
    checked(checkDataFile(entry.category, stringifyCanonical(dataFile(entry.category, run, [{ ...input.item, explanation: output.explanation, errata: output.errata }]))), logical(outputPath));
    state = advanceItem(state, id, 'described'); await writeState(stateFile, state);
    console.log(`已標記：${id}`); return;
  }
  const work = resolve(options['--work-dir'] || join(repo, '.pipeline-work', run.gameVersion));
  const dataDir = resolve(options['--data-dir'] || join(repo, 'data'));
  logicalRoots.push([join(work, 'extract'), 'extract'], [dataDir, 'data']);
  const glossary = resolveGlossary({ override: options['--glossary'] });
  if (!glossary) console.log('找不到 Translation.md，AI 輸入不含譯名對照');
  const currentPath = join(dataDir, 'current.json'), currentText = await optional(currentPath);
  let previousVersion = null;
  if (currentText !== null) { checked(checkCurrent(currentText), logical(currentPath)); previousVersion = parse(currentText, logical(currentPath)).gameVersion; }
  const report = { schemaVersion: '1.0.0', ...Object.fromEntries(fields.map((k) => [k, run[k]])), previousGameVersion: previousVersion, categories: {} };
  const registrations = [], inputs = [];
  for (const category of CATEGORIES) {
    const file = join(work, 'extract', `${category}.json`), text = await optional(file);
    const blank = { added: [], changed: [], removed: [], unchanged: [] };
    if (text === null) { report.categories[category] = { status: 'missing', reason: null, ...blank }; console.log(`缺少 extract：${category}（該類別保留上一版）`); continue; }
    const extract = parse(text, logical(file));
    if (!extract || typeof extract !== 'object' || extract.category !== category || extract.schemaVersion !== '1.0.0' || !['ok', 'structure-mismatch'].includes(extract.status) || !Array.isArray(extract.items) || !Array.isArray(extract.problems) || !Array.isArray(extract.excluded) || !(extract.reason === null || typeof extract.reason === 'string') || typeof extract.scriptVersion !== 'string') throw new Error(`extract 格式錯誤：${logical(file)}`);
    for (const key of fields) if (extract[key] !== run[key]) throw new Error(`${logical(file)} 的 ${key} 與 state 不符`);
    if (extract.status === 'structure-mismatch') { report.categories[category] = { status: extract.status, reason: extract.reason, ...blank }; continue; }
    checked(checkDataFile(category, stringifyCanonical(dataFile(category, run, extract.items.map((item) => ({ ...item, explanation: emptyExplanation, errata: [] }))))), logical(file));
    let previous = [];
    if (previousVersion !== null) {
      const prevFile = join(dataDir, previousVersion, `${category}.json`), prevText = await optional(prevFile);
      if (prevText !== null) { checked(checkDataFile(category, prevText), logical(prevFile)); const prev = parse(prevText, logical(prevFile)); if (prev.gameVersion !== previousVersion) throw new Error(`${logical(prevFile)} 的 gameVersion 不符`); previous = prev.items; }
    }
    const diff = diffCategory(category, previous, extract.items);
    report.categories[category] = { status: 'ok', reason: null, ...diff };
    const oldMap = new Map(previous.map((item) => [item.id, item])), newMap = new Map(extract.items.map((item) => [item.id, item]));
    for (const change of ['added', 'changed', 'removed']) for (const id of diff[change]) {
      const item = newMap.get(id), old = oldMap.get(id), inputHash = inputHashFor(category, change, item, old);
      registrations.push({ id, category, change, inputHash });
      if (change !== 'removed') {
        const prev = old ? { gameVersion: previousVersion, name: old.name, official: old.official, values: old.values, explanation: old.explanation, errata: old.errata } : null;
        const input = { schemaVersion: '1.0.0', id, category, change, ...Object.fromEntries(fields.map((k) => [k, run[k]])), inputHash, item, previous: prev, glossary: { source: glossary?.source ?? null, matches: matchGlossary(glossary?.entries ?? [], [item.name.en, item.official.en, prev?.name.en, prev?.official.en]) }, outputFile: `ai/output/${itemFileName(id)}` };
        checked(schemas.validate('ai-input.schema.json', input), `AI 輸入 ${id}`); inputs.push(input);
      }
    }
  }
  checked(schemas.validate('diff-report.schema.json', report), 'diff 報告');
  const active = new Set(registrations.map((x) => x.id));
  for (const id of Object.keys(run.items).sort()) if (!active.has(id)) console.log(`警告：已登記項目不在本次差異中：${id}`);
  for (const { id, ...info } of registrations.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)) {
    state = registerItem(state, id, info);
    if (info.change === 'removed' && state.run.items[id].stage === 'extracted') state = advanceItem(state, id, 'described');
  }
  await writeState(stateFile, state);
  for (const category of [...CATEGORIES, 'text']) { const src = join(work, 'extract', `${category}.json`); if (await optional(src) !== null) await copyIfChanged(src, join(layout.extract, `${category}.json`)); }
  await writeChanged(join(layout.diff, 'diff.json'), report);
  for (const input of inputs) await writeChanged(join(layout.aiInput, itemFileName(input.id)), input);
  for (const category of CATEGORIES) { const c = report.categories[category]; console.log(c.status === 'ok' ? `${category}：新增 ${c.added.length}、變動 ${c.changed.length}、移除 ${c.removed.length}、沿用 ${c.unchanged.length}` : `${category}：${c.status}${c.reason ? `（${c.reason}）` : ''}`); }
  console.log(`待寫說明：${pendingItems(state, 'described').filter((id) => state.run.items[id].change !== 'removed').length} 項`);
}
main().catch((e) => { console.error(`錯誤：${e.code ? `${logical(e.path)}：${e.code === 'ENOENT' ? '找不到檔案' : `讀取失敗（${e.code}）`}` : e.message}`); process.exitCode = 1; });
