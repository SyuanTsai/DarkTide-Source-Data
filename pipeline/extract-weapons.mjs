import {createSharedBindingGuard,invalidateReachable} from './lib/lua-effects.mjs';
import path from 'node:path';
import {createWeaponStats} from './lib/weapon-stats.mjs';
import {weaponCombos} from './lib/weapon-combos.mjs';
import { fileURLToPath } from 'node:url';
import { parseLuaStatic, findLuaTableAssignment, getLuaTableFields, getTableField, getTableArray, tokenizeLua } from './lib/lua-static-reader.mjs';
import {controlFlowWrites} from './lib/lua-effects.mjs';
import { playerWeaponTemplates, weaponPattern, bespokeTraitsForTemplate } from './lib/weapon-inventory.mjs';
import { StructureError } from './lib/errors.mjs';
import { runExtractCli, itemId, nameFromText } from './lib/extract-output.mjs';

const VERSION='pipeline/extract-weapons.mjs@1.1.0';
const ROOT='scripts/settings/equipment/weapon_templates/';
const UI='scripts/settings/ui/ui_weapon_pattern_settings.lua';
const paths={ammo:'scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua',dodge:'scripts/settings/dodge/weapon_dodge_templates.lua',sprint:'scripts/settings/sprint/weapon_sprint_templates.lua',stamina:'scripts/settings/stamina/weapon_stamina_templates.lua',movement_curve_modifier:'scripts/settings/equipment/weapon_handling_templates/weapon_movement_curve_modifier_templates.lua',charge:'scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua',warp_charge:'scripts/settings/warp_charge/weapon_warp_charge_templates.lua'};
const field=(n,k)=>getTableField(n,k);
const entries=n=>n?.type==='table' ? n.entries.map((e,i)=>({key:e.key?.value ?? String(i+1),node:e.value})) : [];
function parse(raw) { try {return parseLuaStatic(`local x = ${raw}\nreturn x`,{allowUnsupported:true,effects:{dirtyFrom:Infinity}}).returned;} catch {return null;} }
const writesCache=new Map();
function table(source,ref,analysis) {
 try {
  const literal=findLuaTableAssignment(source,ref),node=parse(literal.raw),prefix=ref.split('.');
  const relocate=n=>{if(!n||typeof n!=='object')return;if(n.startLine)n.startLine+=literal.startLine-1;if(n.type==='table')for(const e of n.entries){relocate(e.key);relocate(e.value);}};
  relocate(node);
  if(!writesCache.has(source))writesCache.set(source,controlFlowWrites(tokenizeLua(source)));
  for(const path of writesCache.get(source)) {
   if(!path.slice(0,Math.min(path.length,prefix.length)).every((k,i)=>k===prefix[i]))continue;
   let parent=node;
   for(const key of path.slice(prefix.length,-1))parent=field(parent,key);
   const value={type:'unsupported',reason:'CONDITIONAL_ASSIGNMENT'};
   const poison=n=>{if(n?.type==='table')for(const e of n.entries)poison(e.value);else if(n)Object.assign(n,value);};
   if(path.length<=prefix.length)poison(node);
   else {const affected=field(parent,path.at(-1));if(affected)poison(affected);}
  }
  if(Number.isFinite(analysis?.dirtyFrom))invalidateReachable(node,{dynamic:{type:'unsupported',reason:'DYNAMIC_VALUE'}});
  return node;
 } catch {return null;}
}
function string(n) {return n?.type==='string'?n.value:null;}
function endpoints(n) { if(n?.type!=='table') return null; const a=field(n,'lerp_basic'),b=field(n,'lerp_perfect'); if(a||b) return a?.type==='number'&&b?.type==='number'?[a.value,b.value]:null; const arr=getTableArray(n); return arr.length>=2&&arr.every(x=>x.type==='number')?[arr[0].value,arr.at(-1).value]:null; }
function textValue(text,key) {const v=key&&text.lookup(key); return {en:v&&!v.conflict?v.en??null:null,zh:v&&!v.conflict?v.zh??null:null};}
function assigned(source,key) { const m=new RegExp(`\\bweapon_template\\.${key}\\s*=\\s*["']([^"']+)["']`).exec(source); return m?.[1]??null; }
export async function buildWeapons({reader,text,envelope}) {
 const templates=playerWeaponTemplates(reader), problems=[{code:'ARCHETYPES_NOT_EXPOSED',message:'可用職業不在 Source-Code，留空'}],items=[];
 if(!reader.list(ROOT).length||!templates.length) throw new StructureError('weapons','MISSING_TEMPLATES','找不到玩家武器模板');
 let patterns=[]; if(reader.exists(UI)) {try {patterns=getLuaTableFields(findLuaTableAssignment(reader.read(UI),'ui_weapon_patterns_settings')).map(x=>x.key);} catch {}}
 const statReader=createWeaponStats(reader),effects=createSharedBindingGuard(reader);
 const cache=new Map();
 function catalog(file,local) {if(!reader.exists(file)) return null; if(!cache.has(file)) {try {cache.set(file,parseLuaStatic(reader.read(file),{filename:file,allowUnsupported:true,effects:effects.analysis(file)}));} catch {cache.set(file,null);}} const p=cache.get(file);return p?.locals[local]??p?.returned??null;}
 let missing=0;
 for(const t of templates) {
  const source=reader.read(t.file), id=itemId('weapons',t.name), {family,mark}=weaponPattern(t.name), loc=`loc_${t.name}`, resolved=nameFromText(text,loc,t.name), files=[{path:t.file,line:source.slice(0,source.search(/\blocal\s+weapon_template\b/)).split('\n').length}],params={},actions=[],bars=[];
  if(resolved.problem) problems.push({...resolved.problem,id});
  if(!t.registered) problems.push({code:'UNREGISTERED_TEMPLATE',message:`未註冊模板：${t.name}`,id});
  if(!patterns.includes(family)) problems.push({code:'PATTERN_NOT_IN_UI',message:`UI 缺少 pattern：${family}`,id});
  const analysis=effects.analysis(t.file),readTable=ref=>table(source,ref,analysis);
  const attacks=readTable('weapon_template.displayed_attacks'), stats=readTable('weapon_template.base_stats');
  const contributions=[],curves=[];let notApplicable=0;
  if(!attacks||!stats) missing++;
  if(!attacks) problems.push({code:'NO_DISPLAYED_ATTACKS',message:'沒有 displayed_attacks',id});
  function visitAttack(node,slot,top=false) {if(node?.type!=='table') return; const type=string(field(node,'type')),name=string(field(node,'display_name')); if(top||type||name) actions.push({slot,id:slot,type:type??'unknown',name:textValue(text,name)}); for(const e of entries(node)) if(e.node?.type==='table') visitAttack(e.node,`${slot}.${e.key}`);}
  for(const e of entries(attacks)) visitAttack(e.node,e.key,true);
  for(const [index,bar] of entries(stats).entries()) {
   const output={id:bar.key,name:textValue(text,string(field(bar.node,'display_name'))),stats:[]}; bars.push(output);
   const seen=new Set();
   function duplicate(key) {if(!seen.has(key)){seen.add(key);return false;}problems.push({code:'DUPLICATE_STAT',message:`重複 stat：${key}`,id,bar:bar.key,key});return true;}
   function unknown(key,reason) {if(duplicate(key))return;const param=`bar_${index+1}_${key.toLowerCase().replace(/[^a-z0-9_]/g,'_')}`;params[param]={value:null,unknown:'DYNAMIC_VALUE'};problems.push({code:'UNRESOLVED_STAT',message:`無法解析 ${bar.key}：${key}（${reason}）`,id,bar:bar.key,key,reason});}
   for(const kind of entries(bar.node)) {if(kind.node?.type!=='table')continue;for(const target of entries(kind.node)){if(target.node?.type!=='table')continue;
    const name=textValue(text,statReader.label(field(target.node,'display_data'),t.file));
    statReader.extract({source,file:t.file,kind:kind.key,target:target.key,group:target.node,actions:readTable('weapon_template.actions'),alternate:readTable('weapon_template.alternate_fire_settings'),files,unknown,contributions,notApplicable(){notApplicable++;},emit(stat){
     if(!duplicate(stat.key)) {
      const {curveUnknown,curveSource,...value}=stat,curveId=bar.key+'.'+stat.key;
      output.stats.push({...value,name,curveId});
      curves.push({id:curveId,bar:bar.key,stat:stat.key,name,input:{source:'base_stat_value',unit:'ratio',min:0,max:1},interpolation:curveUnknown?'unknown':'linear',knots:[{input:0,output:curveUnknown?null:stat.min},{input:1,output:curveUnknown?null:stat.max}],outputUnit:null,unknown:curveUnknown,source:curveSource});
      if(curveUnknown)problems.push({code:'CURVE_UNKNOWN',message:`曲線未確認：${curveId}`,id,bar:bar.key,key:stat.key,reason:curveUnknown});
     }
    }});
   }}
  }
  statReader.finish(contributions);
  curves.sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0);
  const attackCombos=weaponCombos({actions:statReader.actions(t.file)??readTable('weapon_template.actions'),displayed:attacks,file:t.file,profiles:statReader.profiles,textValue:key=>textValue(text,key)});
  for(const combo of attackCombos)if(combo.unknown)problems.push({code:'COMBO_UNKNOWN',message:`連段未確認：${combo.kind}`,id,kind:combo.kind,reason:combo.unknown});
  if(notApplicable)problems.push({code:'NOT_APPLICABLE_STAT',id,message:`遊戲不讀取的 stat 路徑：${notApplicable} 筆`});
  for(const k of ['keywords','displayed_keywords']) {const n=readTable(`weapon_template.${k}`); if(n){const values=getTableArray(n).map(x=>k==='keywords'?string(x):string(field(x,'display_name'))).filter(x=>x!==null);params[k]={value:values};}}
  const ammo=assigned(source,'ammo_template'); if(ammo&&ammo!=='no_ammo'){const file=paths.ammo,node=field(catalog(file,'weapon_ammo_templates'),ammo); for(const [key,names] of [['ammo_reserve',['ammo_amount_capacity_lerp','ammunition_reserve']],['ammo_clip',['ammo_amount_clip_lerp','ammunition_clips']]]) {let v=null;for(const name of names){let x=field(node,name);v=endpoints(x);if(!v&&getTableArray(x).length===1)v=endpoints(getTableArray(x)[0]);if(v) break;} params[key]=v?{value:v}:{value:null,unknown:'DYNAMIC_VALUE'};}}
  const unique=[...new Map(files.map(x=>[`${x.path}:${x.line}`,x])).values()].sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:a.line-b.line);
  items.push({id,key:t.name,name:resolved.name,official:{en:null,zh:null},values:{family,mark,weaponType:itemId('terms','weapon-type',family),archetypes:[],actions,bars,curves,attackCombos,blessings:[...new Set(bespokeTraitsForTemplate(reader,t).map(x=>itemId('blessings',x.traitKey)))].sort(),params},source:{commit:envelope.sourceCommit,files:unique,scriptVersion:VERSION,text:{batch:envelope.textBatch,keys:{name:loc}}}});
 }
 if(missing>templates.length/2) throw new StructureError('weapons','INVALID_STRUCTURE','超過半數模板缺少 base_stats 或 displayed_attacks');
 return {items,problems,excluded:[]};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) await runExtractCli({category:'weapons',scriptVersion:VERSION,build:buildWeapons});
