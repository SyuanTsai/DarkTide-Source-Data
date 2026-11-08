import { createSkillResolver } from './skill-lua.mjs';
import { createCodeRefs } from './mechanics-code-refs.mjs';
import { tokenizeLua } from './lua-static-reader.mjs';
import { luaBlockEnd } from './lua-effects.mjs';
import { specialMechanics } from './mechanics-special.mjs';
import { stimmDefinitions } from './skill-structure.mjs';
import { buffRules } from './mechanics-buff-rules.mjs';

const BUFFS='scripts/settings/buff/buff_templates.lua';
const TYPES='scripts/settings/buff/buff_settings.lua';
const DAMAGE='scripts/utilities/attack/damage_calculation.lua';
const AMMO='scripts/extension_systems/weapon/player_unit_weapon_extension.lua';
const component=x=>String(x).toLowerCase().replace(/[^a-z0-9_]/g,'_');
const keyOf=parts=>{const p=parts.map(component);return p.length<=8?p.join('.'):[...p.slice(0,7),p.slice(7).join('_')].join('.');};
const locations=trace=>[...new Map(trace.filter(x=>x?.path&&Number.isInteger(x.line)&&x.line>0).map(x=>[x.path+':'+x.line,{path:x.path,line:x.line}])).values()].sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:a.line-b.line);

/** Separate traversal runs after the pre-existing extractor and its audited
 * brittle-source read-set check; no existing display param or source.files is
 * mutated. Only verified resolver scalars become known values. */
export function createMechanics(reader) {
 const r=createSkillResolver(reader),buffs=()=>r.returned(BUFFS);
 r.setStimmDefinitions(stimmDefinitions(r,reader));
 // The minion loop writes ONLY these two generated prefixes. For other stat
 // names it is a proven no-op. Keep line/offset positions and run the normal
 // binding/mutation checks on all remaining code; changed loops stay unknown.
 const typeReader={...reader,read(file){const source=reader.read(file);if(file!==TYPES)return source;const t=tokenizeLua(source);let out=source;
  const signature=s=>JSON.stringify(tokenizeLua(s).map(t=>[t.type,t.value]));
  const expected=signature('for name, _ in pairs(minion_breeds) do buff_settings.stat_buff_types["damage_vs_" .. name] = "additive_multiplier" buff_settings.stat_buff_types["damage_taken_by_" .. name .. "_multiplier"] = "multiplicative_multiplier" end');
  for(let i=t.length-1;i>=0;i--)if(t[i].value==='for'){const end=luaBlockEnd(t,i),raw=source.slice(t[i].start,t[end].end);if(signature(raw)===expected)out=out.slice(0,t[i].start)+raw.replace(/[^\r\n]/g,' ')+out.slice(t[end].end);}
  return out;
 }};
 const typeResolver=createSkillResolver(typeReader),statTypes=()=>typeResolver.get(typeResolver.returned(TYPES),'stat_buff_types');
 const stats={codeRefs:0,skippedSymbols:0};
 const problems=[];
 const codeCache=new Map();
 let specialIndex;
 function specialBuffs(identifier){if(!specialIndex){specialIndex=new Map();
  const scan=(n,name,seen=new Set())=>{n=r.resolve(n);if(!n||seen.has(n))return;seen.add(n);
   if(n.type==='table')for(const [,v]of r.entries(n))scan(v,name,seen);
   else if(n.type==='function'){const t=tokenizeLua(n.raw);for(let i=0;i<t.length-2;i++){
    let id;if(t[i].type==='identifier'&&t[i].value==='special_rules'&&t[i+1].value==='.'&&t[i+2].type==='identifier'&&r.scalar(r.get(n.capture?.get('special_rules'),t[i+2].value))===t[i+2].value)id=t[i+2].value;
    if(t[i].value==='has_special_rule'&&t[i+1].value==='('&&t[i+2].type==='string')id=t[i+2].value;
    if(id){if(!specialIndex.has(id))specialIndex.set(id,new Set());specialIndex.get(id).add(name);}
   }}
  };for(const [name,n]of r.entries(buffs()))scan(n,name);
 }return specialIndex.get(identifier)??[];}
 function context(item) {
  const code=createCodeRefs(reader,codeCache),values=item.values.mechanics??={},sources=item.source.valueSources??={};
  for(const loc of item.source.files??[])code.location(loc.path,loc.line);
  const seen=new Set();
  const origins=new Map();
  const problem=(key,path,message)=>problems.push({code:'MECHANICS_UNKNOWN',id:item.id,key,path,message});
  function put(parts,value,trace,unknown=false,target=values,pointer='/mechanics/'){
   const key=keyOf(parts),loc=locations(trace);if(!loc.length){problem(key,'', '預期欄位沒有可驗證的來源');return;}
   const identity=JSON.stringify(parts),pointerKey=pointer+key;
   if(origins.has(pointerKey)&&origins.get(pointerKey)!==identity)throw new Error('mechanics path collision: '+key);
   origins.set(pointerKey,identity);
   const param=unknown?{value:null,unknown:'DYNAMIC_VALUE'}:{value};
   if(Object.hasOwn(target,key)&&JSON.stringify(target[key])!==JSON.stringify(param))throw new Error('mechanics key collision: '+key);
   target[key]=param;sources[pointer+key]=locations([...(sources[pointer+key]??[]),...loc]);
  }
  const nodeSource=n=>n?.file?[{path:n.file,line:n.line}]:[];
  function scalar(parts,n,extra=[],target,pointer){const trace=[...extra];const v=r.scalar(n,trace);put(parts,v,trace,v===null||!['number','boolean','string'].includes(typeof v),target,pointer);}
  function rule(parts,file,pattern,value,scope){if(!reader.exists(file)){problem(keyOf(parts),file,'找不到規則來源');return false;}const tokens=tokenizeLua(scope?.raw??reader.read(file)),expected=tokenizeLua(pattern).filter(t=>t.type!=='eof'),offset=scope?(scope.line??1)-1:0;
   for(let i=0;i+expected.length<=tokens.length;i++)if(expected.every((t,j)=>t.type===tokens[i+j].type&&t.value===tokens[i+j].value)){
    put(parts,value,[{path:file,line:tokens[i].line+offset},{path:file,line:tokens[i+expected.length-1].line+offset}]);return true;
   }
   problem(keyOf(parts),file,'來源不符合固定 token 規則');return false;
  }
  function flatten(n,parts,depth=0,target,pointer){n=r.resolve(n);if(!n||depth>10)return;
   if(n.type==='table'){code.node(n);for(const [k,v] of r.entries(n))flatten(v,[...parts,k],depth+1,target,pointer);}
   else if(n.type==='function')code.node(n);
   else scalar(parts,n,[],target,pointer);
  }
  function linkNames(n,depth=0){if(!n||depth>8)return;n=r.resolve(n);
   if(n?.type==='table'){for(const [key,v] of r.entries(n)){
    const value=r.scalar(v);if(['buff_template_name','child_buff_template','buff_to_add','buff_to_add_special_rule','improved_buff_to_add'].includes(key)&&typeof value==='string'&&!r.get(buffs(),value))problem('buff.'+value,v.file??n.file,'明示連結找不到 buff template');
    linkNames(v,depth+1);
   }}
   else if(n?.type==='literal'&&typeof n.value==='string'&&r.get(buffs(),n.value))buff(n.value);
   else if(n?.type==='function'){
    // Only literal names occurring in the linked function and explicit
    // templates.<name> references link another buff. No name synthesis.
    const t=tokenizeLua(n.raw);for(let i=0;i<t.length;i++){
     const name=t[i].type==='string'?t[i].value:t[i].type==='identifier'&&t[i-1]?.value==='.'&&t[i-2]?.value==='templates'?t[i].value:null;
     if(typeof name==='string'&&r.get(buffs(),name))buff(name);
    }
   }
  }
  function statRules(n,name,path=[],target,pointer){n=r.resolve(n);if(n?.type!=='table')return;
   for(const [k,raw] of r.entries(n)){
    const v=r.resolve(raw),p=[...path,k];
    if(k==='stepped_stat_buffs'){
     for(const [step,table]of r.entries(v))statRules({type:'table',entries:[{key:{type:'literal',value:'stat_buffs'},value:table}]},name,[...path,k,step],target,pointer);
    }else if(['stat_buffs','conditional_stat_buffs','proc_stat_buffs','lerped_stat_buffs'].includes(String(k))){
     for(const [stat,value] of r.entries(v)){
      const base=['stat_rule',name,...path,k,stat];if(r.resolve(value)?.type==='table')flatten(value,[...base,'raw'],0,target,pointer);else scalar([...base,'raw'],value,[],target,pointer);
      let type=typeResolver.get(statTypes(),stat);
      // Generated prefixes can collide only with the identical declared type.
      if(String(stat).startsWith('damage_vs_')&&typeResolver.scalar(type)!=='additive_multiplier'||String(stat).startsWith('damage_taken_by_')&&typeResolver.scalar(type)!=='multiplicative_multiplier')type=null;
      if(type)scalar([...base,'aggregation'],type,[],target,pointer);
      if(/finesse|weakspot|critical.*damage/.test(String(stat))){
       scalar(['finesse',name,...path,k,stat,'raw'],value,[],target,pointer);
       rule(['finesse',name,'scope'],DAMAGE,'local final_finesse_damage = base_finesse_damage * finesse_buff_damage_multiplier','finesse_bonus');
       rule(['finesse',name,'critical_weakspot_single_bonus'],DAMAGE,'local is_finesse_hit = is_critical_strike or hit_weakspot',true);
      }
      if(stat==='ammo_reserve_capacity'){
       scalar(['ammo',name,...path,'reserve_bonus'],value,[],target,pointer);
       rule(['ammo',name,'rounding'],AMMO,'inventory_slot_component.max_ammunition_reserve = math.clamp(math.floor(inventory_slot_component.max_ammunition_reserve * capacity_modifier), 0, ammo_large_hard_limit)','floor');
       // Explicit separate reserve/clip assignments are both required.
       const clipSeparate=rule(['ammo',name,'clip_uses_separate_stat'],AMMO,'inventory_slot_component.max_ammunition_clip[i] = math.clamp(math.floor(inventory_slot_component.max_ammunition_clip[i] * clip_size_modifier), 0, ammo_small_hard_limit)',true);
       if(clipSeparate)rule(['ammo',name,'affects_clip'],AMMO,'local capacity_modifier = stat_buffs.ammo_reserve_capacity local clip_size_modifier = stat_buffs.clip_size_modifier',false);
      }
     }
    }else if(v?.type==='table')statRules(v,name,p,target,pointer);
   }
  }
  function buff(name){if(seen.has('buff:'+name))return;seen.add('buff:'+name);const n=r.get(buffs(),name);
   if(!n)return;code.node(n);if(n.type!=='table'){scalar(['buff',name,'definition'],n);return;}
   flatten(n,['buff',name]);statRules(n,name);buffRules({r,reader,rule,put,scalar,code},n,name);
   for(const [stat,value]of r.entries(r.get(n,'stat_buffs')))if(/finesse|weakspot|critical.*damage/.test(String(stat))){const raw=r.scalar(value),capNode=r.get(n,'max_stacks'),cap=r.scalar(capNode);if(typeof raw==='number'&&typeof cap==='number'&&cap>=1)put(['finesse',name,stat,'maximum_raw'],raw*cap,[...nodeSource(value),...nodeSource(capNode)]);}
   const refresh=r.get(n,'refresh_duration_on_stack'),allow=r.get(n,'allow_proc_while_active');
   if(r.scalar(refresh)===true)put(['buff',name,'refresh'],'restart_shared_timer',nodeSource(refresh));
   // Standard ProcBuff updates one active window; it does not create a stack
   // for each proc. Require the class AND an explicit true field/effect table.
   if(r.scalar(r.get(n,'class_name'))==='proc_buff'&&r.scalar(allow)===true&&(r.get(n,'proc_stat_buffs')?.type==='table'||r.get(n,'proc_keywords')?.type==='table')&&!r.get(n,'child_buff_template')){
    put(['buff',name,r.scalar(refresh)===true?'proc_window_refresh':'refresh'],'restart_proc_active_window',[...nodeSource(allow),...nodeSource(r.get(n,'class_name'))]);
    if(!r.get(n,'proc_func'))put(['buff',name,'trigger_count_multiplies_effect'],false,[...nodeSource(n),...nodeSource(r.get(n,'proc_stat_buffs'))]);
   }
   // ProcBuff always stores one proc_stat_buffs contribution per instance,
   // independent of a separate proc_func side effect.
   if(r.scalar(r.get(n,'class_name'))==='proc_buff'&&r.get(n,'proc_stat_buffs')?.type==='table')rule(['buff',name,'trigger_count_multiplies_effect'],'scripts/extension_systems/buff/buffs/proc_buff.lua','self:_calculate_stat_buffs(current_stat_buffs, proc_stat_buffs)',false);
   if(r.scalar(r.get(n,'class_name'))==='proc_buff'&&r.scalar(allow)===true)rule(['buff',name,r.scalar(refresh)===true?'proc_window_refresh':'refresh'],'scripts/extension_systems/buff/buffs/proc_buff.lua','self._active_start_time = t','restart_proc_active_window');
   linkNames(n);
   for(const fn of code.functions())if(!seen.has('function:'+fn.file+'#'+fn.symbol)){seen.add('function:'+fn.file+'#'+fn.symbol);linkNames({...fn,type:'function'});}
  }
  function ability(n,name='linked'){n=r.resolve(n);if(!n)return;code.node(n);flatten(n,['ability',name]);linkNames(n);
   const template=r.scalar(r.get(n,'ability_template'));if(typeof template==='string'){
    const file=`scripts/settings/ability/ability_templates/${template}.lua`;if(reader.exists(file)){const t=r.returned(file);code.node(t);linkNames(t);}
   }
  }
  function finish(){item.source.codeRefs=code.refs;stats.codeRefs+=Object.keys(code.refs).length;stats.skippedSymbols+=code.skipped.size;return code.skipped.size;}
  return {item,r,reader,code,values,sources,put,scalar,rule,flatten,buff,ability,linkNames,statRules,finish};
 }
 function skill(item,definition,{sourceRejected=false}={}){const c=context(item);c.code.node(definition);
  // The existing cryptic full-source proof remains authoritative. Mechanics
  // must not provide the same rejected number through a second path.
  if(sourceRejected)return c.finish();
  c.linkNames(definition);
  const special=r.get(definition,'special_rule'),names=r.get(special,'special_rule_name');
  for(const name of [r.scalar(names),...r.entries(names).map(([,n])=>r.scalar(n))])if(typeof name==='string')for(const buff of specialBuffs(name))c.buff(buff);
  for(const fn of c.code.functions())c.linkNames({...fn,type:'function'});
  const pa=r.get(r.get(definition,'player_ability'),'ability');c.ability(pa);
  specialMechanics(c,definition);
  return c.finish();
 }
 function blessing(item,definition){const c=context(item);c.code.node(definition);c.linkNames(definition);
  const overrides=r.get(definition,'buffs');for(const [name,tiers] of r.entries(overrides)){
   c.buff(name);for(const [number,n] of r.entries(tiers)){
    const tier=item.values.tiers.find(t=>t.tier===number);if(!tier)continue;tier.mechanics??={};
    c.flatten(n,['buff',name,'override'],0,tier.mechanics,`/tiers/${item.values.tiers.indexOf(tier)}/mechanics/`);
    c.statRules(n,name,['override'],tier.mechanics,`/tiers/${item.values.tiers.indexOf(tier)}/mechanics/`);
    if(!Object.keys(tier.mechanics).length)delete tier.mechanics;
   }
  }specialMechanics(c,definition);return c.finish();
 }
 return {skill,blessing,stats,problems,context,r};
}
