import { createHash } from 'node:crypto';
import { tokenizeLua } from './lua-static-reader.mjs';
import { callName } from './skill-lua.mjs';

const ARC_KEY='cryptic_arc_grenades_brittleness';
const PASSIVE_KEY='cryptic_electrocution_applies_brittleness';
const RULE='cryptic_arc_grenade_gives_brittleness';
const ARC='scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua';
const PASSIVE='scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua';
const REGISTRY='scripts/settings/buff/buff_templates.lua';
const WEAPON='scripts/settings/buff/weapon_buff_templates.lua';
const SETTINGS='scripts/settings/talent/talent_settings';
const BUFF_SETTINGS='scripts/settings/buff/buff_settings';

// Audited e46b892 token shapes, retained as readable Lua in the matching fixture.
// The arc module proves rule -> context -> registered callbacks -> debuff call,
// including all intervening bindings. Conservatively revoke it on ANY token
// change; comments/spacing may move source lines. The passive proof is scoped to
// its complete table, then checks effective fields and captured imports below.
const ARC_SHAPE='0d60244942de8d157a942e1224a6d18544a68ce1ed64bcdb67d9cb72b20bafe5';
const PASSIVE_SHAPE='3b30a0f626d9a846748d65ca0448ac555b6b18740aad4e65f4174c6e411747c7';
const signature=raw=>createHash('sha256').update(JSON.stringify(tokenizeLua(raw).map(t=>[t.type,t.value]))).digest('hex');

/** Only these two audited application chains may add an otherwise absent ratio.
 * No Lua body is executed and no localization number supplies a fallback. */
export function supplementBrittleness(r,reader,definition,id,params,problems,trace) {
  const key=id.slice('darktide:skill:cryptic:'.length);
  if(id!==`darktide:skill:cryptic:${key}` || ![ARC_KEY,PASSIVE_KEY].includes(key))return;
  const proof=[];
  const get=(n,k)=>r.get(n,k,proof),scalar=n=>r.scalar(n,proof);
  const fail=()=>problems.push({code:'BRITTLENESS_SOURCE_UNPROVEN',id,message:'每層脆弱值的固定套用形狀或靜態引用鏈無法核實，未補收參數'});
  function include(registry,name,file) {
    const value=get(registry,name);
    if(!value || value.file!==file || value!==get(r.returned(file),name))return;
    const calls=r.load(REGISTRY).calls.filter(c=>callName(c.callee)==='_create_entry'&&r.scalar(c.args[0])===file.slice(0,-4));
    if(calls.length!==1)return;
    proof.push({path:REGISTRY,line:calls[0].line});return value;
  }
  // Compare both lexical capture and the final binding: later rebindings must
  // not leave a stale capture looking like a valid runtime reference.
  function binding(fn,name,path,module) {
    const env=r.load(PASSIVE).env,n=fn.capture?.get(name),root=path.split('.')[0];
    if(!n || env.get(name)!==n || (path.includes('.')&&callName(n)!==path))return false;
    let base=n;while(base?.type==='index')base=base.base;
    const imported=path.includes('.')?base.binding:n;
    if(imported!==fn.capture.get(root) || env.get(root)!==imported || imported?.type!=='call' || callName(imported.callee)!=='require' || imported.callee.binding || imported.args.length!==1 || scalar(imported.args[0])!==module)return false;
    return r.resolve(n,proof)?.type==='table';
  }
  try {
    if(Object.hasOwn(params,'brittleness_per_stack'))return fail();
    const registry=r.returned(REGISTRY);
    if(key===ARC_KEY) {
      const rule=get(definition,'special_rule');
      for(const field of ['identifier','special_rule_name']) {
        const names=r.entries(get(rule,field));
        if(names.length!==1 || scalar(names[0][1])!==RULE)return fail();
      }
      if(!reader.exists(ARC) || signature(reader.read(ARC))!==ARC_SHAPE)return fail();
      // These locations are read from the verified tokens, never fixed lines.
      for(const t of tokenizeLua(reader.read(ARC)))if(t.type==='string'&&[RULE,'rending_debuff'].includes(t.value))proof.push({path:ARC,line:t.line});
      const settings=get(get(r.returned(SETTINGS+'.lua'),'cryptic'),'arc_grenade');
      const stacks=scalar(get(settings,'rending_stacks_on_minions_hit_by_arc'));
      if(!Number.isFinite(stacks) || stacks!==params.stacks?.value)return fail();
    } else {
      const passive=get(definition,'passive');
      if(scalar(get(passive,'buff_template_name'))!==PASSIVE_KEY || scalar(get(passive,'identifier'))!==PASSIVE_KEY)return fail();
      const buff=include(registry,PASSIVE_KEY,PASSIVE);
      if(buff?.type!=='table' || buff.dynamic || signature(buff.raw)!==PASSIVE_SHAPE || buff.entries.length!==5)return fail();
      if(scalar(get(buff,'class_name'))!=='server_only_proc_buff' || scalar(get(buff,'predicted'))!==false)return fail();
      const events=get(buff,'proc_events'),names=['on_buff_added','on_buff_stack_added','on_max_stack_refresh_buff','on_stackable_buff_refresh_duration'];
      if(events?.dynamic || r.entries(events).length!==names.length || names.some(n=>scalar(get(events,n))!==1))return fail();
      const check=get(buff,'check_proc_func'),proc=get(buff,'proc_func');
      if(check?.type!=='function' || proc?.type!=='function')return fail();
      if(!binding(proc,'talent_settings','TalentSettings.cryptic',SETTINGS) || !binding(proc,'FixedFrame','FixedFrame','scripts/utilities/fixed_frame') ||
        !binding(check,'group_to_keywords','BuffSettings.group_to_keywords',BUFF_SETTINGS) || !binding(check,'group_keywords','BuffSettings.group_keywords',BUFF_SETTINGS))return fail();
      for(const [fn,names] of [[check,['ipairs']],[proc,['ScriptUnit','HEALTH_ALIVE']]])if(names.some(n=>fn.capture.has(n)||r.load(PASSIVE).env.has(n)))return fail();
      const settings=get(proc.capture.get('talent_settings'),PASSIVE_KEY),stacks=scalar(get(settings,'stacks'));
      if(!Number.isFinite(stacks) || stacks!==params.stacks?.value)return fail();
      // The table's exact shape proves these expressions belong to proc_func.
      for(const t of tokenizeLua(reader.read(PASSIVE)))if(t.start>=proc.start && t.start<proc.start+proc.raw.length && (t.value==='rending_debuff'||t.value==='stacks'))proof.push({path:PASSIVE,line:t.line});
    }
    const debuff=include(registry,'rending_debuff',WEAPON);
    const value=scalar(get(get(debuff,'stat_buffs'),'rending_multiplier'));
    if(typeof value!=='number' || !Number.isFinite(value))return fail();
    params.brittleness_per_stack={value,unit:'ratio'};
    trace.push(...proof);
  } catch {
    // A supplementary proof failure cannot create an unknown or a guessed value.
    fail();
  }
}
