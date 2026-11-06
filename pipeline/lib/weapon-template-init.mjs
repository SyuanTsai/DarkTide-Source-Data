import {parseLuaStatic,getTableField as field,getTableArray as array} from './lua-static-reader.mjs';

// Audited registry initialization: inheritance is handled by weapon-stats.
// Recoil fills absent offset entries (never individual missing pitch/yaw fields).
// Spread/sway add list lengths; the other registries have no numeric fill loops.
// Defaults are read from source, and only recognized source forms are applied.
// Pinned ba6c148 audit: all 179 registry/include files, 9 top-level blocks.
// ammo/dodge/sprint/stamina/charge/warp_charge/weapon_handling/burninating/
// size_of_flame/movement_curve_modifier/weapon_chain_lightning/weapon_shout
// have no fill loops. Damage adds names; explosion additionally sorts VFX.
export function createTemplateInitializer(reader,paths,{setPath,annotate}) {
 const sources=new Map(),cache=new WeakMap();
 const source=kind=>{if(!sources.has(kind))sources.set(kind,reader.exists(paths[kind])?reader.read(paths[kind]):'');return sources.get(kind);};
 function number(value,kind,offset) {return {type:'number',value,_file:paths[kind],startLine:source(kind).slice(0,offset).split('\n').length};}
 function state(node,kind) {
  if(node?.type!=='table'||!['recoil','spread','sway'].includes(kind))return node;
  if(cache.has(node))return cache.get(node);
  const s=source(kind),out=structuredClone(node);cache.set(node,out);cache.set(out,out);
  if(kind==='recoil'&&field(out,'rise')) {
   const rises=/move_state_settings\.num_rises\s*=\s*#move_state_settings\.rise/.exec(s);
   if(rises)setPath(out,['num_rises'],number(array(field(out,'rise')).length,kind,rises.index));
   const ranges=field(out,'offset_range'),offset=field(out,'offset'),random=field(out,'offset_random_range');
   const count=/move_state_settings\.num_offset_ranges\s*=\s*#move_state_settings\.offset_range/.exec(s);
   const fill=/local num_offset_ranges\s*=\s*#move_state_settings\.offset\s+move_state_settings\.num_offset_ranges\s*=\s*num_offset_ranges\s+local offset_random_range\s*=\s*move_state_settings\.offset_random_range\s+for i = 1, num_offset_ranges do\s+if not offset_random_range\[i\] then\s+offset_random_range\[i\]\s*=\s*({[^{}]*})\s+end\s+end/.exec(s);
   if(ranges&&count)setPath(out,['num_offset_ranges'],number(array(ranges).length,kind,count.index));
   else if(!ranges&&offset?.type==='table'&&random?.type==='table'&&fill) {
    setPath(out,['num_offset_ranges'],number(array(offset).length,kind,fill.index));
    const defaults=parseLuaStatic('return '+fill[1]).returned;
    annotate(defaults,paths[kind]);for(const e of defaults.entries)e.value.startLine=s.slice(0,s.indexOf(fill[1],fill.index)).split('\n').length+fill[1].slice(0,e.value.start).split('\n').length-1;
    for(let i=1;i<=array(offset).length;i++)if(!field(random,i))setPath(random,[i],structuredClone(defaults));
   }
  }
  if(kind==='spread'||kind==='sway') {
   const property=kind==='spread'?'immediate_spread':'immediate_sway',counter=kind==='spread'?'num_spreads':'num_sway_values';
   const pattern=new RegExp(`move_state_settings\\.${property}\\[immediate_${kind}_type\\]\\.${counter}\\s*=\\s*#move_state_settings\\.${property}\\[immediate_${kind}_type\\]`);
   const match=pattern.exec(s);
   const types=new RegExp(`local _immediate_${kind}_types\\s*=\\s*({[^{}]*})`).exec(s);
   const names=types?array(parseLuaStatic('return '+types[1]).returned).map(n=>n.value):[];
   if(match)for(const e of field(out,property)?.entries??[])if(names.includes(e.key?.value)&&e.value.type==='table'&&array(e.value).length)setPath(e.value,[counter],number(array(e.value).length,kind,match.index));
  }
  return out;
 }
 function template(node,kind,name) {
  if(node?.type!=='table')return node;
  const s=source(kind),out=structuredClone(node);
  if(['projectile','hit_scan'].includes(kind)&&/template\.same_side_suppression_enabled\s*=\s*false/.test(s))setPath(out,['same_side_suppression_enabled'],{type:'boolean',value:false,_file:paths[kind]});
  const naming=kind==='damage'?'damage_profile':kind==='explosion'?'explosion_template':'template';
  if(new RegExp(`\\b${naming}\\.name\\s*=\\s*name`).test(s))setPath(out,['name'],{type:'string',value:name,_file:paths[kind]});
  if(kind==='explosion'&&/table\.sort\(scalable_vfx, function \(a, b\)\s+return a\.min_radius < b\.min_radius\s+end\)/.test(s)) {
   const vfx=field(out,'scalable_vfx');
   if(vfx?.type==='table'&&vfx.entries.every(e=>e.key==null&&field(e.value,'min_radius')?.type==='number'))vfx.entries.sort((a,b)=>field(a.value,'min_radius').value-field(b.value,'min_radius').value);
  }
  // Projectile type/item defaults are references/strings, never numeric stats.
  if(kind==='projectile')for(const key of ['projectile_type','item_name']) {
   const match=new RegExp(`if ${key==='projectile_type'?'projectil_type':key} == nil then\\s+template\\.${key} = ([^\\n]+)`).exec(s);
   if(!field(out,key)&&match){const n=parseLuaStatic('return '+match[1],{allowUnsupported:true}).returned;annotate(n,paths[kind]);setPath(out,[key],n);}
  }
  return out;
 }
 return {state,template};
}
