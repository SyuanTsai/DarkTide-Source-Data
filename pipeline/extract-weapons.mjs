import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseLuaStatic, findLuaTableAssignment, getLuaTableFields, getTableField, getTableArray } from './lib/lua-static-reader.mjs';
import { playerWeaponTemplates, weaponPattern, bespokeTraitsForTemplate } from './lib/weapon-inventory.mjs';
import { StructureError } from './lib/errors.mjs';
import { runExtractCli, itemId, nameFromText } from './lib/extract-output.mjs';

const VERSION='pipeline/extract-weapons.mjs@1.0.0';
const ROOT='scripts/settings/equipment/weapon_templates/';
const UI='scripts/settings/ui/ui_weapon_pattern_settings.lua';
const paths={ammo:'scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua',dodge:'scripts/settings/dodge/weapon_dodge_templates.lua',sprint:'scripts/settings/sprint/weapon_sprint_templates.lua',stamina:'scripts/settings/stamina/weapon_stamina_templates.lua',movement_curve_modifier:'scripts/settings/equipment/weapon_handling_templates/weapon_movement_curve_modifier_templates.lua',charge:'scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua',warp_charge:'scripts/settings/warp_charge/weapon_warp_charge_templates.lua'};
const field=(n,k)=>getTableField(n,k);
const entries=n=>n?.type==='table' ? n.entries.map((e,i)=>({key:e.key?.value ?? String(i+1),node:e.value})) : [];
function parse(raw) { try {return parseLuaStatic(`local x = ${raw}\nreturn x`,{allowUnsupported:true}).returned;} catch {return null;} }
function table(source,ref) { try {return parse(findLuaTableAssignment(source,ref).raw);} catch {return null;} }
function string(n) {return n?.type==='string'?n.value:null;}
function endpoints(n) { if(n?.type!=='table') return null; const a=field(n,'lerp_basic'),b=field(n,'lerp_perfect'); if(a||b) return a?.type==='number'&&b?.type==='number'?[a.value,b.value]:null; const arr=getTableArray(n); return arr.length>=2&&arr.every(x=>x.type==='number')?[arr[0].value,arr.at(-1).value]:null; }
function textValue(text,key) {const v=key&&text.lookup(key); return {en:v&&!v.conflict?v.en??null:null,zh:v&&!v.conflict?v.zh??null:null};}
function assigned(source,key) { const m=new RegExp(`\\bweapon_template\\.${key}\\s*=\\s*["']([^"']+)["']`).exec(source); return m?.[1]??null; }
export async function buildWeapons({reader,text,envelope}) {
 const templates=playerWeaponTemplates(reader), problems=[{code:'ARCHETYPES_NOT_EXPOSED',message:'可用職業不在 Source-Code，留空'}],items=[];
 if(!reader.list(ROOT).length||!templates.length) throw new StructureError('weapons','MISSING_TEMPLATES','找不到玩家武器模板');
 let patterns=[]; if(reader.exists(UI)) {try {patterns=getLuaTableFields(findLuaTableAssignment(reader.read(UI),'ui_weapon_patterns_settings')).map(x=>x.key);} catch {}}
 const cache=new Map();
 function catalog(file,local) {if(!reader.exists(file)) return null; if(!cache.has(file)) {try {cache.set(file,parseLuaStatic(reader.read(file),{filename:file,allowUnsupported:true}));} catch {cache.set(file,null);}} const p=cache.get(file);return p?.locals[local]??p?.returned??null;}
 let missing=0;
 for(const t of templates) {
  const source=reader.read(t.file), id=itemId('weapons',t.name), {family,mark}=weaponPattern(t.name), loc=`loc_${t.name}`, resolved=nameFromText(text,loc,t.name), files=[{path:t.file,line:source.slice(0,source.search(/\blocal\s+weapon_template\b/)).split('\n').length}],params={},actions=[],bars=[];
  if(resolved.problem) problems.push({...resolved.problem,id});
  if(!t.registered) problems.push({code:'UNREGISTERED_TEMPLATE',message:`未註冊模板：${t.name}`,id});
  if(!patterns.includes(family)) problems.push({code:'PATTERN_NOT_IN_UI',message:`UI 缺少 pattern：${family}`,id});
  const attacks=table(source,'weapon_template.displayed_attacks'), stats=table(source,'weapon_template.base_stats');
  if(!attacks||!stats) missing++;
  if(!attacks) problems.push({code:'NO_DISPLAYED_ATTACKS',message:'沒有 displayed_attacks',id});
  function visitAttack(node,slot,top=false) {if(node?.type!=='table') return; const type=string(field(node,'type')),name=string(field(node,'display_name')); if(top||type||name) actions.push({slot,id:slot,type:type??'unknown',name:textValue(text,name)}); for(const e of entries(node)) if(e.node?.type==='table') visitAttack(e.node,`${slot}.${e.key}`);}
  for(const e of entries(attacks)) visitAttack(e.node,e.key,true);
  for(const [index,bar] of entries(stats).entries()) {
   const output={id:bar.key,name:textValue(text,string(field(bar.node,'display_name'))),stats:[]}; bars.push(output);
   function unknown(key) {const param=`bar_${index+1}_${key.toLowerCase().replace(/[^a-z0-9_]/g,'_')}`;params[param]={value:null,unknown:'DYNAMIC_VALUE'};problems.push({code:'UNRESOLVED_STAT',message:`無法解析 ${bar.key}：${key}`,id,bar:bar.key,key});}
   for(const kind of entries(bar.node)) {if(kind.node?.type!=='table') continue; for(const target of entries(kind.node)) {if(target.node?.type!=='table') continue;
    const label=field(target.node,'display_data')?.args?.[1]; const labelText=textValue(text,string(label));
    for(const ref of getTableArray(target.node)) {if(ref.type!=='reference') {unknown(`${kind.key}.${target.key}`);continue;} const match=/^([a-z0-9_]+_trait_templates)\.([a-z0-9_]+)$/.exec(ref.ref); if(!match){unknown(`${kind.key}.${target.key}`);continue;}
     const file=`${ROOT}weapon_trait_templates/${match[1]}.lua`, root=catalog(file,match[1]), trait=field(root,match[2]); if(!trait){unknown(`${kind.key}.${target.key}`);continue;}
     const rows=getTableArray(trait); let found=false;
     for(const row of rows) {const parts=getTableArray(row); if(parts.length<2) continue; const keys=parts.slice(0,-1).map(n=>n.value??n.ref); if(keys.some(x=>x==null)) continue; const key=`${kind.key}.${target.key}.${keys.join('.')}`;
      let value=null, valueFile=file, valueLine=parts.at(-1).startLine??1;
      const direct=endpoints(parts.at(-1)); if(direct) value=direct;
      else {const targetName=target.key.replace(/_special$/,''); const suffix=target.key.endsWith('_special')?`special_${kind.key}_template`:`${kind.key}_template`; let identifier=targetName==='base'?assigned(source,suffix):null; if(targetName==='alternate_fire') identifier=string(field(table(source,'weapon_template.alternate_fire_settings'),suffix)); else if(targetName!=='base') identifier=string(field(field(table(source,'weapon_template.actions'),targetName),suffix)); const cp=paths[kind.key]; let node=cp&&identifier?field(catalog(cp,`weapon_${kind.key}_templates`),identifier):null; for(const k of keys) node=typeof k==='number'?getTableArray(node)[k-1]:field(node,k); value=endpoints(node); if(value) {valueFile=cp;valueLine=node.startLine??1;}}
      if(value){output.stats.push({key,name:labelText,min:value[0],max:value[1]});files.push({path:valueFile,line:valueLine});found=true;} else unknown(key);
     }
     if(!rows.length) unknown(`${kind.key}.${target.key}`);
    }
   }}
  }
  for(const k of ['keywords','displayed_keywords']) {const n=table(source,`weapon_template.${k}`); if(n){const values=getTableArray(n).map(x=>k==='keywords'?string(x):string(field(x,'display_name'))).filter(x=>x!==null);params[k]={value:values};}}
  const ammo=assigned(source,'ammo_template'); if(ammo){const file=paths.ammo,node=field(catalog(file,'weapon_ammo_templates'),ammo); for(const [key,names] of [['ammo_reserve',['ammo_amount_capacity_lerp','ammunition_reserve']],['ammo_clip',['ammo_amount_clip_lerp','ammunition_clips']]]) {let v=null;for(const name of names){let x=field(node,name);v=endpoints(x);if(!v&&getTableArray(x).length===1)v=endpoints(getTableArray(x)[0]);if(v) break;} params[key]=v?{value:v}:{value:null,unknown:'DYNAMIC_VALUE'};}}
  const unique=[...new Map(files.map(x=>[`${x.path}:${x.line}`,x])).values()].sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:a.line-b.line);
  items.push({id,key:t.name,name:resolved.name,official:{en:null,zh:null},values:{family,mark,weaponType:itemId('terms','weapon-type',family),archetypes:[],actions,bars,blessings:[...new Set(bespokeTraitsForTemplate(reader,t).map(x=>itemId('blessings',x.traitKey)))].sort(),params},source:{commit:envelope.sourceCommit,files:unique,scriptVersion:VERSION,text:{batch:envelope.textBatch,keys:{name:loc}}}});
 }
 if(missing>templates.length/2) throw new StructureError('weapons','INVALID_STRUCTURE','超過半數模板缺少 base_stats 或 displayed_attacks');
 return {items,problems,excluded:[]};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)) await runExtractCli({category:'weapons',scriptVersion:VERSION,build:buildWeapons});
