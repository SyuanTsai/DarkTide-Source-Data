import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { tokenizeLua, findLuaTableAssignment, getLuaTableFields, parseLuaStatic, getTableField, getTableArray } from './lib/lua-static-reader.mjs';
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
  // This parameter is a definition in a particular buff, not a glossary key.
  const buffFile = 'scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua';
  if (!reader.exists(buffFile)) structure(`找不到 ${buffFile}`);
  const buffFields = fields(reader.read(buffFile), 'templates.psyker_brain_burst_improved', buffFile);
  const statBuffs = buffFields.find(f => f.key === 'stat_buffs');
  if (!statBuffs) structure(`${buffFile} 缺少 psyker_brain_burst_improved.stat_buffs`);
  let table;
  try { table = parseLuaStatic(`return ${statBuffs.rawValue}`, {filename:buffFile}).returned; }
  catch (e) { if (e.name !== 'LuaStaticError') throw e; structure(`${buffFile} stat_buffs：${e.message}`); }
  if (table?.type !== 'table') structure(`${buffFile} stat_buffs 不是靜態 table`);
  const matches = table.entries.filter(e => e.key?.type === 'reference' && e.key.ref === 'stat_buffs.smite_damage_multiplier');
  if (matches.length !== 1) structure(`${buffFile} 缺少唯一的 smite_damage_multiplier`);
  if (matches[0].value?.type !== 'number') structure(`${buffFile} smite_damage_multiplier 不是靜態數值`);
  // Match complete, contiguous token sequences so comments or unrelated occurrences cannot supply evidence.
  function evidence(file, sequence, offsets) {
    if (!reader.exists(file)) structure(`找不到 ${file}`);
    const tokens = tokenizeLua(reader.read(file), {filename:file});
    const hits = [];
    for (let i=0;i<tokens.length;i++) if (sequence.every((v,j) => tokens[i+j]?.value === v)) hits.push(i);
    if (hits.length !== 1) structure(`${file} 缺少唯一的必要引用：${sequence.join(' ')}`);
    return offsets.map(n => ({path:file,line:tokens[hits[0]+n].line}));
  }
  const talentFile = 'scripts/settings/ability/archetype_talents/talents/psyker_talents.lua';
  const damageFile = 'scripts/utilities/attack/damage_calculation.lua';
  const smiteFile = 'scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua';
  const talentSource = reader.exists(talentFile) ? reader.read(talentFile) : '';
  // Restrict the find_value match to this talent's table.
  const talentFields = fields(talentSource,'psyker_brain_burst_improved',talentFile);
  const format = talentFields.find(f => f.key === 'format_values');
  if (!format) structure(`${talentFile} 缺少 format_values`);
  let formatTable;
  try { formatTable = parseLuaStatic(`return ${format.rawValue}`, {filename:talentFile}).returned; }
  catch (e) { if (e.name !== 'LuaStaticError') throw e; structure(`${talentFile} format_values：${e.message}`); }
  const findValue = getTableField(getTableField(formatTable, 'damage'), 'find_value');
  const findPath = getTableArray(getTableField(findValue, 'path'));
  if (formatTable?.type !== 'table' || findValue?.type !== 'table' ||
    getTableField(findValue, 'buff_template_name')?.value !== 'psyker_brain_burst_improved' ||
    getTableField(findValue, 'find_value_type')?.value !== 'buff_template' || findPath.length !== 2 ||
    findPath[0]?.type !== 'string' || findPath[0].value !== 'stat_buffs' ||
    findPath[1]?.type !== 'reference' || findPath[1].ref !== 'stat_buffs.smite_damage_multiplier') {
    structure(`${talentFile} format_values.damage.find_value 無法靜態確認`);
  }
  const talentTokens = tokenizeLua(format.rawValue,{filename:talentFile});
  const findSequence = ['find_value','=','{','buff_template_name','=','psyker_brain_burst_improved',',','find_value_type','=','buff_template',',','path','=','{','stat_buffs',',','stat_buffs','.','smite_damage_multiplier'];
  const findHits = talentTokens.flatMap((t,i) => findSequence.every((v,j) => talentTokens[i+j]?.value === v) ? [i] : []);
  if (findHits.length !== 1) structure(`${talentFile} 缺少唯一的 format_values 引用`);
  const files = [
    {path:buffFile,line:statBuffs.startLine + matches[0].key.startLine - 1},
    {path:talentFile,line:format.startLine + talentTokens[findHits[0]+18].line - 1},
    ...evidence(smiteFile,['damage_profile','=','DamageProfileTemplates','.','psyker_smite_kill',',','damage_type','=','damage_types','.','smite'],[6]),
    ...evidence(damageFile,['local','is_smite_attack','=','damage_type','==','damage_types','.','smite'],[0]),
    ...evidence(damageFile,['local','smite_damage_multiplier_stat_buff','=','is_smite_attack','and','attacker_stat_buffs','.','smite_damage_multiplier','or',1],[0]),
    ...evidence(damageFile,['damage_multiplier','=','damage_multiplier','*','smite_damage_multiplier_stat_buff'],[0])
  ].sort((a,b) => compare(a.path,b.path) || a.line-b.line);
  items.push({id:'darktide:term:psyker:smite-damage-multiplier-parameter',key:'smite_damage_multiplier',
    name:{en:'smite_damage_multiplier',zh:null,origin:'internal'},official:{en:null,zh:null},
    values:{category:'keyword',context:'psyker_brain_burst_improved.stat_buffs',refs:['darktide:skill:psyker:psyker_brain_burst_improved'],params:{}},
    source:{commit:envelope.sourceCommit,files,scriptVersion:SCRIPT_VERSION,text:{batch:envelope.textBatch,keys:{}}}});
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
