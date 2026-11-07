import path from 'node:path';
import { existsSync } from 'node:fs';
import { checkDataFile } from './data-files.mjs';
import { stringifyCanonical, writeCanonicalFile } from './canonical-json.mjs';
import { parseArgs, REPO_ROOT, resolveSourceCode, workDir as resolveWorkDir } from './inputs.mjs';
import { createSourceReader } from './source-reader.mjs';
import { loadTextIndex } from './official-text.mjs';
import { readState, writeState, setCategory } from './state.mjs';
import { StructureError } from './errors.mjs';

const singular = {skills:'skill', weapons:'weapon', blessings:'blessing', terms:'term'};
/** Create an ID conforming to the common data schema. */
export function itemId(category, ...parts) {
  const id = `darktide:${singular[category]}:${parts.join(':')}`.toLowerCase();
  if (!singular[category] || !/^darktide:(skill|weapon|blessing|term):[a-z0-9_.:-]+$/.test(id)) throw new Error(`無效項目 ID：${id}`);
  return id;
}
/** Validate extract items against WP1's data schema using envelope metadata. */
export function validateExtractItems(category, items, envelope = {gameVersion:'0.0',sourceCommit:items[0]?.source?.commit ?? '0'.repeat(40),textBatch:items[0]?.source?.text?.batch ?? '0'}) {
  const value = {schemaVersion:'1.1.0', category, gameVersion:envelope.gameVersion, sourceCommit:envelope.sourceCommit, textBatch:envelope.textBatch,
    items:items.map(item => ({...item, explanation:{effect:'-',conditions:'',calculation:'',notes:'',extra:''}, errata:[]}))};
  const errors = checkDataFile(category, stringifyCanonical(value)).errors;
  items.forEach((item, i) => {
    if (item === null || typeof item !== 'object') return;
    for (const field of ['explanation','errata']) if (Object.hasOwn(item, field)) errors.push({path:`/items/${i}/${field}`,message:'extract 不得包含 explanation/errata'});
  });
  return errors;
}
/** Write a deterministic extract after schema validation. */
export async function writeExtract({workDir, category, envelope, items = [], problems = [], excluded = []}) {
  const sorted = [...items].sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  if (sorted.some((x,i) => i > 0 && x.id === sorted[i-1].id)) throw new Error('重複項目 ID');
  const errors = validateExtractItems(category, sorted, envelope);
  if (errors.length) throw new Error(`extract 驗證失敗：${JSON.stringify(errors)}`);
  const compare = (a,b) => { const x = stringifyCanonical(a), y = stringifyCanonical(b); return x < y ? -1 : x > y ? 1 : 0; };
  await writeCanonicalFile(path.join(workDir,'extract',`${category}.json`), {schemaVersion:'1.1.0', category, ...envelope, status:envelope.status || 'ok', reason:envelope.reason || null, problems:[...problems].sort(compare), excluded:[...excluded].sort(compare), items:sorted});
}
/** Execute an extractor with pinned inputs, state updates, and structural fallback. */
export async function runExtractCli({category, scriptVersion, build}) {
  try {
    const a = parseArgs(process.argv.slice(2), {'source-code-repo':'value',commit:'value','text-batch':'value','work-dir':'value',state:'value',text:'value'});
    const stateFile = path.resolve(a.state || path.join(REPO_ROOT,'pipeline/state.json'));
    let state = await readState(stateFile);
    if (!a.commit && !state.run) throw new Error('請先執行 check-version');
    const source = resolveSourceCode({repo:a['source-code-repo'], ref:a.commit || state.run.sourceCommit});
    const gameVersion = a.commit ? source.gameVersion : state.run.gameVersion;
    const textBatch = a['text-batch'] || state.run?.textBatch;
    if (!textBatch) throw new Error('缺少 text-batch，請先執行 check-version');
    const envelope = {gameVersion, sourceCommit:source.commit, textBatch, scriptVersion};
    const wd = resolveWorkDir({override:a['work-dir'], gameVersion});
    const textFile = a.text || path.join(wd,'extract/text.json');
    if (!existsSync(textFile)) throw new Error('找不到 text.json，請先執行 extract-text');
    const text = loadTextIndex(textFile);
    if (text.batch !== textBatch) throw new Error('文字批次不符');
    const reader = createSourceReader({repo:source.repo,commit:source.commit});
    const matches = state.run && ['gameVersion','sourceCommit','textBatch'].every(k => state.run[k] === envelope[k]);
    try {
      const {items = [], problems = [], excluded = []} = await build({reader,text,envelope,workDir:wd});
      if (!items.length) throw new StructureError(category,'EMPTY','解析後沒有項目');
      await writeExtract({workDir:wd,category,envelope,items,problems,excluded});
      if (matches) { state = setCategory(state,category,{status:'ok',reason:null}); await writeState(stateFile,state); }
      const countUnknown = v => !v || typeof v !== 'object' ? 0 : (v.value === null && typeof v.unknown === 'string' ? 1 : 0) + Object.values(v).reduce((n,x) => n + countUnknown(x),0);
      console.log(`${category}：項目 ${items.length}、unknown ${countUnknown(items)}、problems ${problems.length}、excluded ${excluded.length}`);
    } catch (e) {
      if (!(e instanceof StructureError)) throw e;
      await writeExtract({workDir:wd,category,envelope:{...envelope,status:'structure-mismatch',reason:e.detail},items:[],problems:[],excluded:[]});
      if (matches) { state = setCategory(state,category,{status:'kept-previous',reason:e.detail}); await writeState(stateFile,state); }
      console.log(`結構不符：${category}：${e.detail}（該類別保留上一版）`);
    }
  } catch (e) { console.error(e.message); process.exitCode = 1; }
}

/** Resolve the shared name policy. Callers attach the item's id to a returned problem.
 * @returns {{name:{en:string,zh:string|null,origin:string},problem:object|null}}
 */
export function nameFromText(text, locKey, fallbackKey) {
  const value = locKey ? text.lookup(locKey) : null;
  if (value?.conflict) return {name:{en:fallbackKey,zh:null,origin:'internal'},problem:{code:'TEXT_CONFLICT',message:`官方文字衝突：${locKey}`}};
  if (typeof value?.en === 'string') return {name:{en:value.en,zh:value.zh ?? null,origin:'official'},problem:null};
  return {name:{en:fallbackKey,zh:null,origin:'internal'},problem:typeof value?.zh === 'string' ? {code:'MISSING_EN_TEXT',message:`缺少官方英文名稱：${locKey}`} : null};
}
