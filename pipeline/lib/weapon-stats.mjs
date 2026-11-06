import {conditionalWrites,luaBlockEnd} from './lua-mutations.mjs';
import {parseRequires} from './lua-closure.mjs';
import {evaluateFiniteHelper,finiteHelperName} from './lua-finite-helpers.mjs';
import {parseLuaStatic, getTableField as field, getTableArray as array, tokenizeLua} from './lua-static-reader.mjs';
import {createTemplateInitializer} from './weapon-template-init.mjs';
import {createSharedBindingGuard} from './lua-effects.mjs';

const ROOT='scripts/settings/equipment/weapon_templates/';
const PATHS={shotshell:'scripts/settings/projectile/shotshell_templates.lua',explosion:'scripts/settings/damage/explosion_templates.lua',projectile:'scripts/settings/projectile/projectile_templates.lua',burninating:'scripts/settings/equipment/weapon_handling_templates/weapon_burninating_templates.lua',size_of_flame:'scripts/settings/equipment/weapon_handling_templates/weapon_size_of_flame_templates.lua',recoil:'scripts/settings/equipment/recoil_templates.lua',spread:'scripts/settings/equipment/spread_templates.lua',sway:'scripts/settings/equipment/sway_templates.lua',damage:'scripts/settings/damage/damage_profile_templates.lua',hit_scan:'scripts/settings/projectile/hit_scan_templates.lua',ammo:'scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua',dodge:'scripts/settings/dodge/weapon_dodge_templates.lua',sprint:'scripts/settings/sprint/weapon_sprint_templates.lua',stamina:'scripts/settings/stamina/weapon_stamina_templates.lua',movement_curve_modifier:'scripts/settings/equipment/weapon_handling_templates/weapon_movement_curve_modifier_templates.lua',charge:'scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua',warp_charge:'scripts/settings/warp_charge/weapon_warp_charge_templates.lua',weapon_handling:'scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua',weapon_chain_lightning:'scripts/settings/equipment/weapon_handling_templates/weapon_chain_lightning_templates.lua',weapon_shout:'scripts/settings/equipment/weapon_handling_templates/weapon_shout_templates.lua'};
const sentinel=(key,name)=>typeof key==='string'&&key.split('.').at(-1)===name;
const DEFAULT_LERP='DEFAULT_LERP_VALUE';

// DamageProfile.lerp_value_from_path: only the current target/root scope's
// default is inherited. A default_target field never fills an existing target.
export function damageLerpValue(lerpValues,keys,fallback) {
 const defaultValue=lerpValues instanceof Map?lerpValues.get(DEFAULT_LERP):undefined;
 let node=lerpValues;
 for(const key of keys.slice(0,-1))node=node instanceof Map?node.get(key):undefined;
 return (node instanceof Map?node.get(keys.at(-1)):undefined)??defaultValue??fallback;
}
function annotate(node,file) {
 if(!node||typeof node!=='object')return;
 node._file??=file;
 if(node.type==='table')for(const e of node.entries){annotate(e.key,file);annotate(e.value,file);}
 if(node.type==='call')for(const arg of node.args)annotate(arg,file);
 if(node.type==='reference')for(const part of node.parts??[])annotate(part,file);
}
function setPath(root,keys,value,child) {
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
 const effects=createSharedBindingGuard(reader);
 const chunks=new Map(),catalogs=new Map(),parseFailures=new Set(),catalogFailures=new Set(),effectiveCache=new Map(),stateCache=new WeakMap();
 const component=n=>{
  // These two table-valued constants are identity sentinels, not enum values.
  if(n?.type==='reference'&&[DEFAULT_LERP,'ALL_WEAPON_MOVEMENT_STATES'].some(name=>sentinel(n.ref,name)))return n.ref;
  const resolved=deref(n);return resolved?.type==='reference'?resolved.ref:resolved?.value;
 };
 function child(node,key) {
  if(node?.type!=='table')return null;
  let index=0;
  return (node.entries.findLast(e=>e.key!=null&&component(e.key)===key)??node.entries.filter(e=>e.key==null).find(()=>++index===key))?.value??node.dynamic;
 }
 const set=(root,keys,value)=>setPath(root,keys,value,child);
 const initialization=createTemplateInitializer(reader,PATHS,{setPath:set,annotate});
 const mathProofs=new Map();
 function mathVerified(name) {
  if(mathProofs.has(name))return mathProofs.get(name);
  const file='scripts/foundation/utilities/math.lua';let valid=false;
  if(reader.exists(file)) {
   const source=reader.read(file),tokens=tokenizeLua(source),writes=conditionalWrites(tokens);
   const relevant=writes.filter(p=>p[0]==='math'&&(p.length===1||p[1]===name||p[1]==='rad'&&name==='degrees_to_radians'));
   const expected=name==='degrees_to_radians'?'math.degrees_to_radians=math.rad':'math.lerp=function(a,b,p)return a*(1-p)+b*p end';
   const wanted=tokenizeLua(expected).slice(0,-1);let matched=false;
   for(let i=0;i<tokens.length;i++) {
    if(wanted.every((t,j)=>t.type===tokens[i+j]?.type&&t.value===tokens[i+j]?.value))matched=true;
    if(tokens[i].type==='keyword'&&['function','if','for','while','repeat','do'].includes(tokens[i].value))i=luaBlockEnd(tokens,i);
   }
   valid=relevant.length===1&&relevant[0].join('.')==='math.'+name&&matched;
  }
  mathProofs.set(name,valid);return valid;
 }
 function finite(call,fn,resolve) {
  const p=fn?._file&&chunk(fn._file);if(!p||p.partial)return null;
  if(!effects.intact(['math','table','MathUtils','rawget','select','type'],{moduleFile:fn._file}))return {...call,type:'unsupported',reason:'DYNAMIC_VALUE'};
  const dependencies=fn._file==='scripts/utilities/recoil_template.lua'?['_math','math','MathUtils','rawget']:['table','select','type','NIL_VALUE_OVERRIDE'];
  if((p.bindingChanges??[]).some(path=>dependencies.some(d=>path===d||path.startsWith(d+'.'))))return null;
  if(fn._file==='scripts/utilities/recoil_template.lua') {
   if(p.locals.math||p.locals.MathUtils||p.locals.rawget||p.locals._math?.raw!=='rawget(_G, "EditorApi") and MathUtils or math'||!mathVerified('lerp'))return null;
   } else if(p.locals.table||p.locals.select||p.locals.type||p.locals.NIL_VALUE_OVERRIDE?.value!=='__NIL_VALUE__')return null;
  call.provenPure=Boolean(finiteHelperName(fn));
  return evaluateFiniteHelper(call,fn,resolve);
 }
 function imported(path) {
  const node=chunk(path.replace(/\.lua$/,'')+'.lua')?.returned;
  return node?.type==='call'&&node.ref==='settings'?deref(node.args[1]):node;
 }
 function chunk(file) {
  effects.load(file);
  if(!chunks.has(file)) {
   let p=null;
   chunks.set(file,null); // Require cycles cannot acquire speculative bindings.
   if(reader.exists(file))try{p=parseLuaStatic(statementBoundaries(reader.read(file)),{filename:file,allowUnsupported:true,staticArithmetic:true,resolveImport:imported,resolveNode:deref,evaluateFinite:finite,builtinIntact:ref=>effects.intact([ref.split('.')[0]]),mathRadiansVerified:mathVerified('degrees_to_radians')});for(const n of Object.values(p.locals))annotate(n,file);annotate(p.returned,file);}catch{
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
  const alias=node.root??node.ref.split('.')[0],parts=node.parts?.map(component)??node.ref.split('.').slice(1);let n=p.locals[alias];
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
  if(effectiveCache.has(key))return effectiveCache.get(key);
  const d=catalog(kind).get(name);if(!d)return null;
  const n=deref(d.node);if(!d.override){const result=initialization.template(n,kind,name);effectiveCache.set(key,result);return result;}
  const parent=field(n,'parent_template_name');
  const base=effective(kind,parent?.value,new Set([...seen,key]));if(!base)return null;
  const out=structuredClone(base);
  for(const row of array(field(n,'overrides'))) {
   const values=array(row),keys=values.slice(0,-1).map(component);
   if(values.length>=2&&keys.every(x=>x!=null))set(out,keys,values.at(-1));
  }
  const result=initialization.template(out,kind,name);effectiveCache.set(key,result);return result;
 }
 function inheritedState(node,kind,seen=new Set()) {
  if(node&&stateCache.has(node))return stateCache.get(node);
  const inheritance=array(field(node,'inherits')).map(component);
  if(inheritance.length!==2)return initialization.state(node,kind);
  const identity=kind+':'+inheritance.join('.');if(seen.has(identity))return null;
  const parent=inheritedState(child(effective(kind,inheritance[0]),inheritance[1]),kind,new Set([...seen,identity]));
  if(parent?.type!=='table')return null;
  // The game clones the movement state and replaces each overridden property.
  const copy=structuredClone(parent);
  for(const entry of node.entries)if(component(entry.key)!=='inherits')set(copy,[component(entry.key)],entry.value);
  const result=initialization.state(copy,kind);stateCache.set(node,result);return result;
 }
 function traverse(node,keys,kind) {for(const key of keys){node=inheritedState(deref(node),kind);if(['function','call','unsupported','reference'].includes(node?.type))return {type:'blocked',cause:node};node=child(node,key);}return deref(node);}
 function identifier(source,kind,target,actions,alternate,files) {
  const special=target.endsWith('_special'),suffix=`${special?'special_':''}${kind}_template`,name=target.replace(/_special$/,'');
  if(name==='base')return new RegExp(`\\bweapon_template\\.${suffix}\\s*=\\s*["']([^"']+)["']`).exec(source)?.[1];
  const node=field(field(actions,target),`${kind}_template`)??field(name==='alternate_fire'?alternate:field(actions,name),suffix);
  if(node)return node?.value??(node?.type==='reference'?node.ref.split('.').at(-1):null);
  if(kind==='explosion') {
   const action=field(actions,target),projectile=field(action,'projectile_template')??field(field(action,'fire_configuration'),'projectile');
   const templateName=(n,type)=>{
    if(n?.type==='string')return n.value;
    if(n?.type!=='reference')return null;
    const [alias,name,...rest]=n.ref.split('.'),binding=chunk(n._file)?.locals[alias];
    return !rest.length&&binding?.type==='require'&&binding.path.replace(/\.lua$/,'')+'.lua'===PATHS[type]?name:null;
   };
   const name=templateName(projectile,'projectile');
   const found=new Set(),seen=new Set();
   const visit=n=>{n=deref(n);if(n?.type!=='table'||seen.has(n))return;seen.add(n);if(n._file)files.push({path:n._file,line:n.startLine??1});for(const e of n.entries){if(component(e.key)==='explosion_template'){const v=e.value;const id=templateName(v,'explosion');if(id)found.add(id);}else visit(e.value);}};
   visit(effective('projectile',name));return [...found];
  }
  return null;
 }
 function profiles(action,file,files=[]) {
  const found=new Set(),seen=new Set();
  function visit(n,context) {
   if(!n)return;
   if(n.type==='reference') {
    const k=(n._file??context)+':'+n.ref;if(seen.has(k))return;seen.add(k);
    if(!n._file)n={...n,_file:context};const resolved=deref(n);if(resolved!==n&&resolved?.type!=='reference')visit(resolved,resolved?._file??context);return;
   }
   if(n.type!=='table')return;
   for(const e of n.entries){const key=component(e.key);
    if(typeof key==='string'&&/^(?:damage_profile(?:_|$)|.+_damage_profile$)/.test(key)) {
     const v=e.value;
     files.push({path:v._file??context,line:v.startLine??n.startLine??1});
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
 function reason(node) {if(['CONDITIONAL_ASSIGNMENT','DYNAMIC_VALUE'].includes(node?.reason))return node.reason;if(node?.type==='blocked')return reason(node.cause);if(node?.type==='table'){for(const e of node.entries){if(['function','call','unsupported','reference'].includes(e.value?.type))return reason(e.value);}}return node?.type==='function'||node?.type==='call'?'FUNCTION_VALUE':node?.type==='unsupported'?'CONDITIONAL_OR_EXPRESSION':node?.type==='reference'?'REFERENCE_NOT_FOUND':!node?'PATH_NOT_FOUND':'NON_NUMERIC_VALUE';}
 function values(node,tmin,tmax) {
  node=deref(node);
  if(node?.type==='number')return [{suffix:'',min:node.value,max:node.value}];
  const basic=deref(field(node,'lerp_basic')),perfect=deref(field(node,'lerp_perfect'));
  const pairs=(basic||perfect?[basic,perfect]:array(node)).map(n=>deref(n));
  const lerp=(a,b,t)=>Number((a+(b-a)*Math.max(0,Math.min(1,t))).toPrecision(12));
  if(pairs.length===2&&pairs.every(x=>x?.type==='number'))return [{suffix:'',min:lerp(pairs[0].value,pairs[1].value,tmin),max:lerp(pairs[0].value,pairs[1].value,tmax)}];
  if(basic?.type==='table'&&perfect?.type==='table') {
   const a=array(basic).map(n=>deref(n)),b=array(perfect).map(n=>deref(n));
   if(a.length&&a.length===b.length&&[...a,...b].every(x=>x.type==='number'))return a.map((x,i)=>({suffix:`.${i+1}`,min:lerp(x.value,b[i].value,tmin),max:lerp(x.value,b[i].value,tmax)}));
  }
  return null;
 }
 function label(node,file) {
  node=node?{...node,_file:node._file??file}:null;node=deref(node);
  return node?.type==='call'&&node.ref.endsWith('create_template')?node.args[1]?.value:null;
 }
 function movementStates() {
  const file='scripts/settings/equipment/weapon_movement_state_settings.lua';
  const n=field(chunk(file)?.locals.weapon_movement_state_settings,'weapon_movement_states');
  return n?.type==='table'?n.entries.map(e=>component(e.value)):n?.type==='call'&&n.ref==='table.enum'?n.args.map(component):[];
 }
 function damageNode(base,keys) {
  if(keys[0]!=='targets')return traverse(base,keys,'damage');
  const targets=deref(child(base,'targets'));
  // A missing target falls back as a whole; an existing target's missing fields do not.
  const target=deref(child(targets,keys[1]))??deref(child(targets,'default_target'));
  return traverse(target,keys.slice(2),'damage');
 }
 function endpointPaths(node,keys,kind,out=[],seen=new Set()) {
  node=inheritedState(deref(node),kind);
  if(!node||seen.has(node))return out;
  if(values(node,0,1)){out.push(keys);return out;}
  if(node.type==='table') {
   const next=new Set([...seen,node]);let index=0;
   for(const e of node.entries){const key=e.key?component(e.key):++index;if(key!=='inherits')endpointPaths(e.value,[...keys,key],kind,out,next);}
  }
  return out;
 }
 function finish(contributions) {
  const groups=new Map(),trees=new Map();
  for(const c of contributions) {
   const identity=JSON.stringify([c.kind,c.target,c.profile]);
   if(!c.override&&contributions.overrideProfiles?.has(identity)){c.notApplicable();continue;}
   if(c.error){c.unknown(c.key,c.error);continue;}
   if(!trees.has(identity))trees.set(identity,new Map());
   c.tree=trees.get(identity);let tree=c.tree;
   const path=c.rawKeys.map(k=>sentinel(k,DEFAULT_LERP)?DEFAULT_LERP:k);
   for(const key of path.slice(0,-1)){if(!tree.has(key))tree.set(key,new Map());tree=tree.get(key);}
   const last=path.at(-1);if(!tree.has(last))tree.set(last,[]);
   const leaf=tree.get(last);
   // A default row can expand to several endpoints; it contributes once.
   if(!leaf.some(r=>r.row===c.row&&r.emit===c.emit))leaf.push(c);
   const k=JSON.stringify([c.kind,c.target,c.profile,c.keys]);
   if(!groups.has(k))groups.set(k,[]);groups.get(k).push(c);
  }
  for(const allRows of groups.values()) {
   const example=allRows[0];let scope=example.tree,keys=example.keys;
   if(example.kind==='damage'&&keys[0]==='targets') {
    const targets=scope.get('targets');scope=targets?.get(keys[1])??targets?.get('default_target');keys=keys.slice(2);
   }
   const settings=chunk(ROOT+'weapon_tweak_template_settings.lua')?.locals.WeaponTweakTemplateSettings;
   const fallback=field(settings,'DEFAULT_FALLBACK_LERP_VALUE')?.value;
   const rows=damageLerpValue(scope,keys,fallback);
   // A fallback-only endpoint has no contributing bar and is not a stat.
   if(!Array.isArray(rows)||!rows.length)continue;
   const lo=rows.reduce((n,r)=>n+r.lo,0),hi=rows.reduce((n,r)=>n+r.hi,0);
   const dynamic=rows.find(r=>r.dynamic),result=dynamic?null:values(example.node,lo,hi),sent=new Set();
   for(const row of rows) {
    if(sent.has(row.emit))continue;sent.add(row.emit);
    if(dynamic){row.unknown(example.key,dynamic.dynamic);continue;}
    for(const v of result??[])row.emit({key:example.key+v.suffix,min:v.min,max:v.max});
   }
  }
 }
 return {label,finish,extract({source,file,kind,target,group,actions,alternate,emit,unknown,files,notApplicable=()=>{},contributions=null}) {
  actions=field(chunk(file)?.locals.weapon_template,'actions')??actions;
  annotate(actions,file);annotate(alternate,file);
  const collected=contributions??[],pending=[];
  collected.overrideProfiles??=new Set();
  function groupRows(group,explicitProfile=null) {
   const names=kind==='damage'?(explicitProfile?
    (catalog('damage').has(explicitProfile)?[explicitProfile]:['hit_scan','explosion','projectile'].flatMap(type=>profiles(effective(type,explicitProfile),file,files))):profiles(field(actions,target),file,files)):[explicitProfile??identifier(source,kind,target,actions,alternate,files)].flat().filter(Boolean);
   if(explicitProfile!==null)for(const name of names)collected.overrideProfiles.add(JSON.stringify([kind,target,name]));
   for(const ref of array(group)) {
    if(ref.type!=='reference'){unknown(kind+'.'+target,reason(ref));continue;}
    const match=/^([a-z0-9_]+_trait_templates)\.([a-z0-9_]+)$/.exec(ref.ref??'');
    const traitFile=match?ROOT+'weapon_trait_templates/'+match[1]+'.lua':null;
    const p=traitFile&&chunk(traitFile),trait=p&&field(p.locals[match[1]]??p.returned,match[2]);
    const prefix=kind+'.'+target;
    if(!trait){unknown(prefix,parseFailures.has(traitFile)?'TRAIT_PARSE_FAILED':'TRAIT_NOT_FOUND');continue;}
    const rows=array(trait);if(!rows.length){unknown(prefix,'TRAIT_ROWS_NOT_FOUND');continue;}
    for(const row of rows) {
     const parts=array(row),rawKeys=parts.slice(0,-1).map(component),param=deref(parts.at(-1));
     const key=prefix+'.'+rawKeys.join('.');
     if(parts.length<2||rawKeys.some(x=>x==null)){unknown(key,'INVALID_TRAIT_ROW');continue;}
     const lo=param?.type==='number'?param:field(param,'min'),hi=param?.type==='number'?param:field(param,'max');
     if(!names.length){const action=field(actions,target);unknown(key,action?.type==='call'||action?.type==='function'?'ACTION_FUNCTION_VALUE':kind==='damage'?'DAMAGE_PROFILE_BINDING_NOT_FOUND':'TEMPLATE_BINDING_NOT_FOUND');continue;}
     let paths=[rawKeys];
     if(rawKeys.some(k=>sentinel(k,'ALL_WEAPON_MOVEMENT_STATES'))) {
      const states=movementStates();
      if(!states.length){unknown(key,'MOVEMENT_STATES_NOT_FOUND');continue;}
      paths=states.map(state=>rawKeys.map(k=>sentinel(k,'ALL_WEAPON_MOVEMENT_STATES')?state:k));
     }
     for(const name of new Set(names))for(const keys of paths)pending.push({name,keys,distinct:names.length>1,override:explicitProfile!==null,lo:lo?.value,hi:hi?.value,traitFile,param,row,...(lo?.type!=='number'||hi?.type!=='number'?{dynamic:reason(param)}:{})});
    }
   }
   for(const e of field(group,'overrides')?.entries??[])groupRows(e.value,component(e.key));
  }
  groupRows(group);
  for(const entry of pending) {
   const {name,keys,lo,hi,traitFile,param,row,dynamic,override,distinct}=entry,base=effective(kind,name);
   const prefix=kind+'.'+target+(kind==='damage'||override||distinct?'.'+name:'');
   const report=(key,error)=>collected.push({kind,target,profile:name,key,error,unknown,override,notApplicable});
   if(!base){report(prefix+'.'+keys.join('.'),catalogFailures.has(kind)?'BASE_TEMPLATE_PARSE_FAILED':kind==='damage'?'DAMAGE_PROFILE_NOT_FOUND':'BASE_TEMPLATE_NOT_FOUND');continue;}
   const isDefault=sentinel(keys.at(-1),'DEFAULT_LERP_VALUE'),scope=keys.slice(0,-1);
   const read=k=>kind==='damage'?damageNode(base,k):traverse(base,k,kind);
   const paths=isDefault?endpointPaths(read(scope),scope,kind):[keys];
   if(isDefault&&!paths.length){const n=read(scope);if(n&&['blocked','reference','call','unsupported'].includes(n.type))report(prefix+'.'+keys.join('.'),reason(n));else notApplicable();}
   for(const actual of paths) {
    // Explicit paths take precedence over the scope's default lerp value.
    const key=prefix+'.'+actual.join('.'),node=read(actual),result=values(node,0,1);
    if(!result){if(!node){notApplicable();continue;}report(key,reason(node));continue;}
    files.push({path:traitFile,line:param.startLine??row.startLine??1});
    files.push({path:node._file??base._file,line:node.startLine??1});
    const traced=new Set();
    function dependencies(n) {
     n=deref(n);if(!n||traced.has(n))return;traced.add(n);
     files.push(...(n._sources??[]));
     if(n.type==='table')for(const e of n.entries)dependencies(e.value);
    }
    dependencies(node);
    collected.push({kind,target,profile:name,keys:actual,rawKeys:keys,row,key,node,lo,hi,emit,unknown,dynamic,override,notApplicable});
   }
  }
  if(!contributions)finish(collected);
 }};
}
