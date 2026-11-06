import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { tokenizeLua, findLuaTableAssignment, getLuaTableFields } from './lib/lua-static-reader.mjs';
import { StructureError } from './lib/errors.mjs';
import { runExtractCli, itemId, nameFromText } from './lib/extract-output.mjs';

const SCRIPT_VERSION = 'pipeline/extract-terms.mjs@1.0.0';
const ARCHETYPES = 'scripts/settings/archetype/archetypes/';
const PATTERNS = 'scripts/settings/ui/ui_weapon_pattern_settings.lua';
const compare = (a,b) => a < b ? -1 : a > b ? 1 : 0;
function structure(detail) { throw new StructureError('terms','INVALID_TABLE',detail); }
function fields(source, reference, file) {
  try { return getLuaTableFields(findLuaTableAssignment(source,reference,{filename:file})); }
  catch (e) { if (e.name !== 'LuaStaticError') throw e; structure(`${file}：${e.message}`); }
}
function literal(raw) {
  if (!raw) return null;
  const t = tokenizeLua(raw);
  return t[0]?.type === 'string' && t[1]?.type === 'eof' ? t[0].value : null;
}
/** Build the four source-backed term categories. No Lua is executed. */
export async function buildTerms({reader,text,envelope,workDir}) {
  const problems = [], items = [], keys = new Map();
  const archetypes = reader.list(ARCHETYPES).filter(f => /\/[^/]+_archetype\.lua$/.test(f));
  if (!archetypes.length) structure('找不到 archetype 目錄或 archetype 檔案');
  if (!reader.exists(PATTERNS)) structure(`找不到 ${PATTERNS}`);
  const dependencies = {};
  for (const category of ['skills','weapons']) {
    let data;
    try { data = JSON.parse(await readFile(path.join(workDir,'extract',`${category}.json`),'utf8')); }
    catch (e) { if (e.code !== 'ENOENT') throw e; }
    if (data?.status === 'ok' && Array.isArray(data.items)) dependencies[category] = data.items;
    else { dependencies[category] = []; problems.push({code:'DEPENDENCY_UNAVAILABLE',message:`${category}.json 不存在或不可用`}); }
  }
  function add({type,suffix,key,locKey,description,files,refs=[]}) {
    const id = itemId('terms',type,suffix), resolved = nameFromText(text,locKey,key);
    if (resolved.problem) problems.push({...resolved.problem,id});
    const official = text.lookup(description || locKey);
    if (description && official?.conflict) problems.push({code:'TEXT_CONFLICT',message:`官方文字衝突：${description}`,id});
    items.push({id,key,name:resolved.name,official:{en:official?.conflict ? null : official?.en ?? null,zh:official?.conflict ? null : official?.zh ?? null},
      values:{category:type,context:null,refs:[...new Set(refs)].sort(),params:{}},
      source:{commit:envelope.sourceCommit,files:[...files].sort((a,b) => compare(a.path,b.path) || a.line-b.line),scriptVersion:SCRIPT_VERSION,text:{batch:envelope.textBatch,keys:{name:locKey,...(description ? {description} : {})}}}});
  }
  for (const file of reader.list('scripts/').filter(f => f.endsWith('.lua'))) {
    const tokens = tokenizeLua(reader.read(file),{filename:file});
    for (let i=0;i<tokens.length;i++) {
      const t=tokens[i];
      if (t.type !== 'string') continue;
      if (/^(?:loc_glossary_term_|loc_term_glossary_|loc_glossary_talent_)$/.test(t.value) && tokens[i+1]?.value === '..') {
        problems.push({code:'DYNAMIC_KEY',message:`動態術語前綴：${t.value}`,path:`${file}:${t.line}`}); continue;
      }
      const match = /^(loc_glossary_term_|loc_term_glossary_|loc_glossary_talent_)([a-z0-9_]+)$/.exec(t.value);
      if (!match) continue;
      // A literal extended by concatenation is not a complete static key.
      if (tokens[i+1]?.value === '..' || tokens[i-1]?.value === '..') {
        problems.push({code:'DYNAMIC_KEY',message:`動態術語 key：${t.value}`,path:`${file}:${t.line}`}); continue;
      }
      if (!keys.has(t.value)) keys.set(t.value,{prefix:match[1],suffix:match[2],files:[]});
      const list=keys.get(t.value).files;
      if (!list.some(p => p.path === file && p.line === t.line)) list.push({path:file,line:t.line});
    }
  }
  for (const prefix of ['keyword','skill-type']) {
    if (![...keys.values()].some(k => (k.prefix === 'loc_glossary_talent_' ? 'skill-type' : 'keyword') === prefix)) structure(`掃描後沒有 ${prefix} 術語`);
  }
  for (const [key,value] of keys) {
    const type = value.prefix === 'loc_glossary_talent_' ? 'skill-type' : 'keyword';
    const other = (value.prefix === 'loc_glossary_term_' ? 'loc_term_glossary_' : 'loc_glossary_term_') + value.suffix;
    const suffix = type === 'keyword' && keys.has(other) ? `${value.suffix}:${value.prefix === 'loc_glossary_term_' ? 'term' : 'glossary'}` : value.suffix;
    add({type,suffix,key,locKey:key,files:value.files});
  }
  for (const file of archetypes) {
    const fs = fields(reader.read(file),'archetype_data',file), name = fs.find(f => f.key === 'archetype_name'), desc = fs.find(f => f.key === 'archetype_description');
    const locKey = literal(name?.rawValue), description = literal(desc?.rawValue);
    if (!locKey || !description) structure(`${file} archetype_name/archetype_description 不是字串常值`);
    const key = path.posix.basename(file,'_archetype.lua');
    add({type:'class',suffix:key,key,locKey,description,files:[{path:file,line:name.startLine},{path:file,line:desc.startLine}].filter((v,i,a) => a.findIndex(x => x.line === v.line) === i)});
  }
  const patterns = fields(reader.read(PATTERNS),'ui_weapon_patterns_settings',PATTERNS);
  if (!patterns.length) structure('ui_weapon_patterns_settings 沒有 pattern');
  for (const pattern of patterns) {
    const fs = fields(`local pattern = ${pattern.rawValue}`,'pattern',PATTERNS), name = fs.find(f => f.key === 'display_name');
    const locKey = literal(name?.rawValue);
    if (!locKey) structure(`${PATTERNS} ${pattern.key} 沒有 display_name 字串`);
    add({type:'weapon-type',suffix:pattern.key,key:locKey,locKey,files:[{path:PATTERNS,line:pattern.startLine + name.startLine - 1}],refs:dependencies.weapons.filter(w => w.values?.family === pattern.key).map(w => w.id)});
  }
  return {items,problems,excluded:[]};
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await runExtractCli({category:'terms',scriptVersion:SCRIPT_VERSION,build:buildTerms});
