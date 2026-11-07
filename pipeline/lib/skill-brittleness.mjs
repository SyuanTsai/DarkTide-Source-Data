import { createHash } from 'node:crypto';
import { tokenizeLua } from './lua-static-reader.mjs';
import { callName, createSkillResolver } from './skill-lua.mjs';
import { analyzeLuaEffects } from './lua-effects.mjs';
import { readTalentDefinitions } from './skill-structure.mjs';
import sourcePins from './cryptic-brittleness-sources.json' with { type: 'json' };

const ARC_KEY='cryptic_arc_grenades_brittleness';
const PASSIVE_KEY='cryptic_electrocution_applies_brittleness';
const RULE='cryptic_arc_grenade_gives_brittleness';
const ARC='scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua';
const PASSIVE='scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua';
const REGISTRY='scripts/settings/buff/buff_templates.lua';
const WEAPON='scripts/settings/buff/weapon_buff_templates.lua';
const SETTINGS='scripts/settings/talent/talent_settings';
const BUFF_SETTINGS='scripts/settings/buff/buff_settings';
export const BRITTLENESS_SOURCE_PINS=Object.freeze(sourcePins.files);
export const BRITTLENESS_SOURCE_COMMIT=sourcePins.sourceCommit;
export const BRITTLENESS_DIRECTORY_PINS=Object.freeze(sourcePins.directories??{});

/** Snapshot every proof read, including recursive resolver/effects reads. The
 * injected pins parameter is only for unit-testing this low-level audit; the
 * production supplement always uses the fixed, reviewed manifest above. */
export function createBrittlenessSourceAudit(reader,pins=BRITTLENESS_SOURCE_PINS,directoryPins={}) {
  const snapshots=new Map(),readFiles=new Set(),changed=new Set(),lists=new Map(),listReads=new Set(),changedDirectories=new Set();
  function snapshot(file) {
    if(snapshots.has(file))return snapshots.get(file);
    try {
      if(!reader.exists(file))throw new Error('Missing source');
      const text=reader.read(file),bytes=reader.readBytes?.(file)??Buffer.from(text);
      if(createHash('sha256').update(bytes).digest('hex')!==pins[file] ||
        bytes.toString('utf8').replace(/^\uFEFF/,'')!==text)changed.add(file);
      const source={text,bytes:Buffer.from(bytes)};snapshots.set(file,source);return source;
    } catch(error) {changed.add(file);throw error;}
  }
  // Check ALL pins even if a changed file makes the static proof exit early.
  for(const file of Object.keys(pins))try {snapshot(file);} catch { /* reported below */ }
  function listSnapshot(prefix) {
    if(!lists.has(prefix))try {
      const paths=[...reader.list(prefix)];lists.set(prefix,paths);
      if(JSON.stringify(paths)!==JSON.stringify(directoryPins[prefix]))changedDirectories.add(prefix);
    } catch(error) {changedDirectories.add(prefix);throw error;}
    return [...lists.get(prefix)];
  }
  for(const prefix of Object.keys(directoryPins))try {listSnapshot(prefix);} catch { /* reported below */ }
  return {
    reader:{...reader,
      list(prefix=''){listReads.add(prefix);return listSnapshot(prefix);},
      read(file){readFiles.add(file);return snapshot(file).text;},
      readBytes(file){readFiles.add(file);return Buffer.from(snapshot(file).bytes);}},
    filesRead:()=>[...readFiles].sort(),
    changedFiles:()=>[...changed].sort(),
    changedDirectories:()=>[...changedDirectories].sort(),
    directoriesRead:()=>Object.fromEntries([...listReads].sort().filter(p=>lists.has(p)).map(p=>[p,[...lists.get(p)]])),
  };
}

/** Each extraction gets a separate resolver so a warmed shared cache cannot
 * hide reads from the audit. Stage values and trace until both gates pass. */
export function createBrittlenessSupplement(reader) {
  let audit,r,definitions;
  function supplement(id,params,problems,trace,actualDefinition) {
    if(![ARC_KEY,PASSIVE_KEY].some(key=>id===`darktide:skill:cryptic:${key}`))return;
    audit??=createBrittlenessSourceAudit(reader,BRITTLENESS_SOURCE_PINS,BRITTLENESS_DIRECTORY_PINS);
    const pending={...params},proof=[],failures=[];
    const mismatched=new Set();
    if(!audit.changedFiles().length && !audit.changedDirectories().length)try {
      r??=createSkillResolver(audit.reader);
      definitions??=readTalentDefinitions(r,audit.reader);
      const key=id.slice('darktide:skill:cryptic:'.length);
      const selected=new Map([...(definitions.get('base')??[]),...(definitions.get('cryptic')??[])]);
      const definition=r.resolve(selected.get(key));
      if(!definition || !actualDefinition || ['file','start','line','raw'].some(k=>definition[k]!==actualDefinition[k])) {
        for(const node of [definition,actualDefinition])if(node?.file)mismatched.add(node.file);
        if(!mismatched.size)mismatched.add('scripts/settings/ability/archetype_talents/talents/');
      } else proveBrittleness(r,audit.reader,definition,id,pending,failures,proof);
    } catch {failures.push({code:'BRITTLENESS_SOURCE_UNPROVEN',id,message:'每層脆弱值的靜態引用鏈無法核實，未補收參數'});}
    const files=[...new Set([...audit.changedFiles(),...mismatched])].sort(),directories=audit.changedDirectories();
    if(files.length || directories.length) {
      problems.push({code:'BRITTLENESS_SOURCE_CHANGED',id,message:'引用鏈來源已變更，需重新核實；未補收每層脆弱值',files,...(directories.length?{directories}:{})});return;
    }
    if(failures.length) {problems.push(...failures);return;}
    if(Object.hasOwn(pending,'brittleness_per_stack'))params.brittleness_per_stack=pending.brittleness_per_stack;
    trace.push(...proof);
  }
  supplement.filesRead=()=>audit?.filesRead()??[];
  supplement.directoriesRead=()=>audit?.directoriesRead()??{};
  return supplement;
}

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
export function proveBrittleness(r,reader,definition,id,params,problems,trace) {
  const key=id.slice('darktide:skill:cryptic:'.length);
  if(id!==`darktide:skill:cryptic:${key}` || ![ARC_KEY,PASSIVE_KEY].includes(key))return;
  const proof=[];
  const get=(n,k)=>r.get(n,k,proof),scalar=n=>r.scalar(n,proof);
  const fail=()=>problems.push({code:'BRITTLENESS_SOURCE_UNPROVEN',id,message:'每層脆弱值的固定套用形狀或靜態引用鏈無法核實，未補收參數'});
  function include(registry,name,file) {
    const effects=analyzeLuaEffects(reader.read(REGISTRY),{file:REGISTRY});
    if(effects.exports.size!==1)return;
    const root=[...effects.exports][0],target=root+'.'+name;
    const metadata=new Set(['name','predicted','icon']);
    if(effects.writes.some(p=>p===root || p===target || p.startsWith(target+'.') ||
      p.startsWith(root+'.*') && !metadata.has(p.slice((root+'.*.').length))))return;
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
      const effects=analyzeLuaEffects(reader.read(PASSIVE),{file:PASSIVE});
      if(['ipairs','ScriptUnit','HEALTH_ALIVE'].some(n=>effects.bindings.has(n) || effects.writes.some(p=>p===n || p.startsWith(n+'.'))))return fail();
      const groups=proc.capture.get('BuffSettings') ?? check.capture.get('BuffSettings');
      const groupKey=scalar(get(get(groups,'group_keywords'),'electrocuted'));
      const keywords=get(get(groups,'group_to_keywords'),groupKey);
      const expected=['electrocuted_arc_ability','electrocuted_arc_grenade','electrocuted_arc','electrocuted_chain_lightning','electrocuted_shock_mine','electrocuted'];
      const entries=r.entries(keywords);
      if(groupKey!=='electrocuted' || keywords?.type!=='table' || keywords.dynamic || keywords.entries.length!==expected.length || entries.length!==expected.length || expected.some(k=>scalar(get(keywords,k))!==true))return fail();
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
