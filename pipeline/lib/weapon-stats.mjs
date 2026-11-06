import {parseRequires} from './lua-closure.mjs';
import {parseLuaStatic, getTableField as field, getTableArray as array} from './lua-static-reader.mjs';

const ROOT='scripts/settings/equipment/weapon_templates/';
const PATHS={explosion:'scripts/settings/damage/explosion_templates.lua',projectile:'scripts/settings/projectile/projectile_templates.lua',burninating:'scripts/settings/equipment/weapon_handling_templates/weapon_burninating_templates.lua',size_of_flame:'scripts/settings/equipment/weapon_handling_templates/weapon_size_of_flame_templates.lua',recoil:'scripts/settings/equipment/recoil_templates.lua',spread:'scripts/settings/equipment/spread_templates.lua',sway:'scripts/settings/equipment/sway_templates.lua',damage:'scripts/settings/damage/damage_profile_templates.lua',hit_scan:'scripts/settings/projectile/hit_scan_templates.lua',ammo:'scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua',dodge:'scripts/settings/dodge/weapon_dodge_templates.lua',sprint:'scripts/settings/sprint/weapon_sprint_templates.lua',stamina:'scripts/settings/stamina/weapon_stamina_templates.lua',movement_curve_modifier:'scripts/settings/equipment/weapon_handling_templates/weapon_movement_curve_modifier_templates.lua',charge:'scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua',warp_charge:'scripts/settings/warp_charge/weapon_warp_charge_templates.lua',weapon_handling:'scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua',weapon_chain_lightning:'scripts/settings/equipment/weapon_handling_templates/weapon_chain_lightning_templates.lua',weapon_shout:'scripts/settings/equipment/weapon_handling_templates/weapon_shout_templates.lua'};
const component=n=>n?.type==='reference'?n.ref:n?.value;
function child(node,key) {
 let index=0;
 return node?.type==='table'?node.entries.find(e=>{if(e.key==null)index++;return (e.key==null?index:component(e.key))===key;})?.value:null;
}
function annotate(node,file) {
 if(!node||typeof node!=='object')return;
 node._file=file;
 if(node.type==='table')for(const e of node.entries)annotate(e.value,file);
}
function setPath(root,keys,value) {
 let node=root;
 for(const [i,key] of keys.entries()) {
  if(node?.type!=='table')return false;
  let next=child(node,key);
  if(!next){next={type:'table',entries:[]};node.entries.push({key:{type:typeof key==='number'?'number':'string',value:key},value:next});}
  if(i===keys.length-1){const e=node.entries.find(e=>e.value===next);e.value=value;}else node=next;
 }
 return true;
}

// Bound unsupported scalar expressions to their own statement. The shared reader
// otherwise consumes the next declaration when Lua omits an optional semicolon.
// This preserves the unsupported node and original line numbers; it evaluates nothing.
function statementBoundaries(source) {
 return source.replace(/^((?:local[ \t]+)?[A-Za-z_][\w.]*[ \t]*=[ \t]*)([^\r\n]+)$/gm,(line,lhs,rhs)=>{
  if(/[{};]/.test(rhs)||/\bfunction\b/.test(rhs))return line;
  if((rhs.match(/\(/g)??[]).length!==(rhs.match(/\)/g)??[]).length)return line;
  return lhs+rhs+';';
 });
}

/** Cached static catalogs; no Lua execution, including require and registry inheritance. */
export function createWeaponStats(reader) {
 const chunks=new Map(),catalogs=new Map(),parseFailures=new Set(),catalogFailures=new Set();
 function chunk(file) {
  if(!chunks.has(file)) {
   let p=null;
   if(reader.exists(file))try{p=parseLuaStatic(statementBoundaries(reader.read(file)),{filename:file,allowUnsupported:true});for(const n of Object.values(p.locals))annotate(n,file);annotate(p.returned,file);}catch{
    parseFailures.add(file);
    // Require declarations remain statically readable even if an unrelated
    // statement (for example appending runtime trait keys) cannot be parsed.
    p={locals:Object.fromEntries(Object.entries(parseRequires(reader.read(file))).map(([alias,path])=>[alias,{type:'require',path}])),partial:true};
   }
   chunks.set(file,p);
  }
  return chunks.get(file);
 }
 function catalog(kind) {
  if(catalogs.has(kind))return catalogs.get(kind);
  const definitions=new Map(),visited=new Set();catalogs.set(kind,definitions);
  function load(file) {
   if(visited.has(file))return;visited.add(file);
   const p=chunk(file);if(!p)return;if(p.partial)catalogFailures.add(kind);
   const roots=['hit_scan_templates',kind==='damage'?'damage_templates':kind==='hit_scan'?'hitscan_templates':`${kind}_templates`,`weapon_${kind}_templates`,'templates'];
   for(const root of roots)for(const e of p.locals[root]?.entries??[])if(e.key?.type==='string')definitions.set(e.key.value,{node:e.value,file});
   for(const e of p.locals.overrides?.entries??[])if(e.key?.type==='string')definitions.set(e.key.value,{node:e.value,file,override:true});
   for(const m of reader.read(file).matchAll(/(?:extract_weapon_tweaks|_add_template_entries|_require_templates)\("([^"]+)"/g))load(m[1]+'.lua');
  }
  if(PATHS[kind])load(PATHS[kind]);
  return definitions;
 }
 function deref(node,seen=new Set()) {
  if(node?.type!=='reference')return node;
  const file=node._file,key=file+':'+node.ref;if(!file||seen.has(key))return node;
  const nextSeen=new Set([...seen,key]),p=chunk(file);if(!p)return node;
  const [alias,...parts]=node.ref.split('.');let n=p.locals[alias];
  if(n?.type==='require') {
   const target=n.path.replace(/\.lua$/,'')+'.lua',q=chunk(target);
   n=q?.returned;
   if(n?.type==='call'&&n.ref==='settings')n=n.args[1];
   // Registry modules assemble tables through extract_weapon_tweaks calls.
   if(parts.length&&Object.values(PATHS).includes(target)) {
    const kind=Object.keys(PATHS).find(k=>PATHS[k]===target),d=effective(kind,parts.shift());n=d;
   }
  }
  n=deref(n,nextSeen);
  for(const part of parts)n=deref(child(n,part),nextSeen);
  return n??node;
 }
 function effective(kind,name,seen=new Set()) {
  const key=kind+':'+name;if(seen.has(key))return null;
  const d=catalog(kind).get(name);if(!d)return null;
  const n=deref(d.node);if(!d.override)return n;
  const parent=field(n,'parent_template_name');
  const base=effective(kind,parent?.value,new Set([...seen,key]));if(!base)return null;
  const out=structuredClone(base);
  for(const row of array(field(n,'overrides'))) {
   const values=array(row),keys=values.slice(0,-1).map(component);
   if(values.length>=2&&keys.every(x=>x!=null))setPath(out,keys,values.at(-1));
  }
  return out;
 }
 function inheritedState(node,kind,seen=new Set()) {
  const inheritance=array(field(node,'inherits')).map(component);
  if(inheritance.length!==2)return node;
  const identity=kind+':'+inheritance.join('.');if(seen.has(identity))return null;
  const parent=inheritedState(child(effective(kind,inheritance[0]),inheritance[1]),kind,new Set([...seen,identity]));
  if(parent?.type!=='table')return null;
  // The game clones the movement state and replaces each overridden property.
  const copy=structuredClone(parent);
  for(const entry of node.entries)if(component(entry.key)!=='inherits')setPath(copy,[component(entry.key)],entry.value);
  return copy;
 }
 function traverse(node,keys,kind) {for(const key of keys){node=inheritedState(deref(node),kind);if(['function','call','unsupported','reference'].includes(node?.type))return {type:'blocked',cause:node};node=child(node,key);}return deref(node);}
 function identifier(source,kind,target,actions,alternate) {
  const special=target.endsWith('_special'),suffix=`${special?'special_':''}${kind}_template`,name=target.replace(/_special$/,'');
  if(name==='base')return new RegExp(`\\bweapon_template\\.${suffix}\\s*=\\s*["']([^"']+)["']`).exec(source)?.[1];
  const node=field(field(actions,target),`${kind}_template`)??field(name==='alternate_fire'?alternate:field(actions,name),suffix);
  return node?.value??(node?.type==='reference'?node.ref.split('.').at(-1):null);
 }
 function profiles(action,file) {
  const found=new Set(),seen=new Set();
  function visit(n,context) {
   if(!n)return;
   if(n.type==='reference') {
    const k=(n._file??context)+':'+n.ref;if(seen.has(k))return;seen.add(k);
    if(!n._file)n={...n,_file:context};const resolved=deref(n);if(resolved!==n&&resolved?.type!=='reference')visit(resolved,resolved?._file??context);return;
   }
   if(n.type!=='table')return;
   for(const e of n.entries){const key=component(e.key);
    if(typeof key==='string'&&/^damage_profile(?:_|$)/.test(key)) {
     const v=e.value;
     if(v.type==='reference') {
      const [alias,name]=v.ref.split('.'),p=chunk(v._file??context),required=p?.locals[alias];
      if(name&&required?.type==='require'&&required.path.replace(/\.lua$/,'')+'.lua'===PATHS.damage)found.add(name);
     }else if(v.type==='string')found.add(v.value);
    }else if(key==='hit_scan_template'&&e.value.type==='string')visit(effective('hit_scan',e.value.value),context);
    else visit(e.value,n._file??context);
   }
  }
  visit(action,file);return [...found];
 }
 function reason(node) {if(node?.type==='blocked')return reason(node.cause);if(node?.type==='table'){for(const e of node.entries){if(['function','call','unsupported','reference'].includes(e.value?.type))return reason(e.value);}}return node?.type==='function'||node?.type==='call'?'FUNCTION_VALUE':node?.type==='unsupported'?'CONDITIONAL_OR_EXPRESSION':node?.type==='reference'?'REFERENCE_NOT_FOUND':!node?'PATH_NOT_FOUND':'NON_NUMERIC_VALUE';}
 function values(node,tmin,tmax) {
  node=deref(node);
  if(node?.type==='number')return [{suffix:'',min:node.value,max:node.value}];
  const basic=deref(field(node,'lerp_basic')),perfect=deref(field(node,'lerp_perfect'));
  const pairs=basic||perfect?[basic,perfect]:array(node);
  const lerp=(a,b,t)=>Number((a+(b-a)*Math.max(0,Math.min(1,t))).toPrecision(12));
  if(pairs.length===2&&pairs.every(x=>x?.type==='number'))return [{suffix:'',min:lerp(pairs[0].value,pairs[1].value,tmin),max:lerp(pairs[0].value,pairs[1].value,tmax)}];
  if(basic?.type==='table'&&perfect?.type==='table') {
   const a=array(basic),b=array(perfect);
   if(a.length&&a.length===b.length&&[...a,...b].every(x=>x.type==='number'))return a.map((x,i)=>({suffix:`.${i+1}`,min:lerp(x.value,b[i].value,tmin),max:lerp(x.value,b[i].value,tmax)}));
  }
  return null;
 }
 function label(node,file) {
  node=node?{...node,_file:node._file??file}:null;node=deref(node);
  return node?.type==='call'&&node.ref.endsWith('create_template')?node.args[1]?.value:null;
 }
 return {label,extract({source,file,kind,target,group,actions,alternate,emit,unknown,files}) {
  function groupRows(group,explicitProfile=null) {
   for(const ref of array(group)) {
    const match=/^([a-z0-9_]+_trait_templates)\.([a-z0-9_]+)$/.exec(ref.ref??'');
    const traitFile=match?`${ROOT}weapon_trait_templates/${match[1]}.lua`:null;
    const p=traitFile&&chunk(traitFile),trait=p&&field(p.locals[match[1]]??p.returned,match[2]);
    const prefix=`${kind}.${target}`;
    if(!trait){unknown(prefix,parseFailures.has(traitFile)?'TRAIT_PARSE_FAILED':'TRAIT_NOT_FOUND');continue;}
    const rows=array(trait);if(!rows.length){unknown(prefix,'TRAIT_ROWS_NOT_FOUND');continue;}
    const names=kind==='damage'?(explicitProfile?
     (catalog('damage').has(explicitProfile)?[explicitProfile]:['hit_scan','explosion','projectile'].flatMap(type=>profiles(effective(type,explicitProfile),file))):profiles(field(actions,target),file)):[identifier(source,kind,target,actions,alternate)].filter(Boolean);
    for(const row of rows) {
     const parts=array(row),keys=parts.slice(0,-1).map(component),param=deref(parts.at(-1)),key=`${prefix}.${keys.join('.')}`;
     if(parts.length<2||keys.some(x=>x==null)){unknown(key,'INVALID_TRAIT_ROW');continue;}
     const lo=param?.type==='number'?param:field(param,'min'),hi=param?.type==='number'?param:field(param,'max');
     if(lo?.type!=='number'||hi?.type!=='number'){unknown(key,reason(param));continue;}
     if(!names.length){const action=field(actions,target);unknown(key,action?.type==='call'||action?.type==='function'?'ACTION_FUNCTION_VALUE':kind==='damage'?'DAMAGE_PROFILE_BINDING_NOT_FOUND':'TEMPLATE_BINDING_NOT_FOUND');continue;}
     let failure=null;const selected=[];
     for(const name of names) {
      const base=effective(kind,name);
      if(!base){failure??=catalogFailures.has(kind)?'BASE_TEMPLATE_PARSE_FAILED':kind==='damage'?'DAMAGE_PROFILE_NOT_FOUND':'BASE_TEMPLATE_NOT_FOUND';continue;}
      const node=traverse(base,keys,kind),result=values(node,lo.value,hi.value);
      if(!result){failure??=keys.includes('ALL_WEAPON_MOVEMENT_STATES')?'MOVEMENT_STATE_SENTINEL':reason(node);continue;}
      selected.push({node,base,result});
     }
     if(!selected.length){unknown(key,failure);continue;}
     for(const {node,base,result} of selected){
     files.push({path:traitFile,line:param.startLine??row.startLine??1});
     files.push({path:node._file??base._file,line:node.startLine??1});
     for(const v of result)emit({key:key+v.suffix,min:v.min,max:v.max});
     }
    }
   }
   for(const e of field(group,'overrides')?.entries??[])groupRows(e.value,component(e.key));
  }
  groupRows(group);
 }};
}
