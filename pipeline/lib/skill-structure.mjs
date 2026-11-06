import { callName, createSkillResolver } from './skill-lua.mjs';
import { StructureError } from './errors.mjs';

export const REGISTRY='scripts/settings/ability/archetype_talents/archetype_talents.lua';
export const LAYOUT_PARSER='scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua';
const TALENTS='scripts/settings/ability/archetype_talents/talents/';

/** Expand only the documented stimm data DSL, without interpreting Lua bodies. */
function stimmDefinitions(r,reader) {
  const file='scripts/settings/talent/talent_settings_broker.lua';
  if(!reader.exists(file)) return new Map();
  const chunk=r.load(file), result=new Map(), aliases=chunk.env.get('STAT_NAME_ALIAS');
  for(const outer of chunk.calls) {
    const methods=[];let root=outer;
    while(root?.type==='call' && root.callee?.type==='index' && root.callee.base?.type==='call') {
      methods.unshift({name:r.scalar(root.callee.key),args:root.args});root=root.callee.base;
    }
    if(root?.type!=='call' || callName(root.callee)!=='_generate_stimm_talent') continue;
    const [key,name,,description]=root.args;
    if(typeof r.scalar(key)!=='string') continue;
    const n=root, lit=v=>r.literal(v,n), table=()=>({...n,type:'table',entries:[]});
    const talent=table(),params=table(),perIndex=table(),descriptions=table();let count=0;
    const add=(t,k,v)=>t.entries.push({key:lit(k),value:v});
    const appendDescription=v=>{if(v && r.scalar(v)!==null && r.scalar(v)!==undefined) add(descriptions,++count,v);};
    appendDescription(description);
    add(talent,'display_name',name);add(talent,'description',descriptions);
    add(talent,'format_values',params);add(talent,'format_values_per_index',perIndex);
    for(const method of methods) {
      const a=method.args;
      if(method.name==='stat') for(let i=0;i+1<a.length;i+=2) {
        const stat=r.scalar(a[i]),alias=r.scalar(r.get(aliases,stat)) ?? stat;
        if(typeof alias!=='string') continue;
        appendDescription(lit('loc_talent_stat_'+alias));add(params,alias,a[i+1]);
      }
      else if(method.name==='keyword') for(let i=0;i+4<a.length;i+=5) {
        const key=r.scalar(a[i+2]);if(typeof key!=='string') continue;
        appendDescription(lit('loc_talent_keyword_'+key));
        const config=table();add(config,'format_type',a[i]);add(config,'value',a[i+3]);add(config,'value_manipulation',a[i+4]);add(params,key,config);
      }
      else if(method.name==='buff' && r.scalar(a[2])) {
        appendDescription(a[2]);const p=table();
        for(let i=3;i+1<a.length;i+=2) {const key=r.scalar(a[i]);if(typeof key==='string') add(p,key,a[i+1]);}
        if(p.entries.length) add(perIndex,count,p);
      }
    }
    result.set(r.scalar(key),talent);
  }
  return result;
}

/** Discover committed trees and class/base talent tables; last duplicate wins. */
export function skillStructure(reader) {
  const treeFiles=reader.list('scripts/ui/views/').filter(p=>/^scripts\/ui\/views\/(talent_builder_view|broker_stimm_builder_view)\/layouts\/[^/]+_tree\.lua$/.test(p));
  if(!treeFiles.length) throw new StructureError('skills','TREES_MISSING','找不到技能樹檔');
  for(const file of [REGISTRY,LAYOUT_PARSER]) if(!reader.exists(file)) throw new StructureError('skills','FILE_MISSING',`找不到必要檔案：${file}`);
  // Validate the named table, rather than matching an unrelated occurrence.
  const r=createSkillResolver(reader),parserChunk=r.load(LAYOUT_PARSER);
  if(!r.field(r.resolve(parserChunk.env.get('FIND_VALUE_FUNCTIONS')),'buff_template')) throw new StructureError('skills','FINDER_MISSING','FIND_VALUE_FUNCTIONS 缺少 buff_template');
  const problems=[], definitions=new Map();
  const generated=stimmDefinitions(r,reader);
  r.setStimmDefinitions(generated);
  for(const file of reader.list(TALENTS).filter(p=>p.endsWith('_talents.lua'))) {
    const definition=r.returned(file),archetype=file===TALENTS+'base_talents.lua'?'base':r.scalar(r.get(definition,'archetype')) ?? file.slice(TALENTS.length).replace(/_talents\.lua$/,'');
    const talents=r.get(definition,'talents');const map=new Map();
    // Inspect raw entries as well as the effective map, so shadowing is visible.
    for(const e of talents?.entries ?? []) {
      const key=r.scalar(e.key);if(typeof key!=='string') continue;
      if(map.has(key)) problems.push({code:'SHADOWED_DEFINITION',key,path:file,line:e.value.line,message:`後者覆蓋 ${key}`});
      map.set(key,e.value);
    }
    definitions.set(archetype,map);
  }
  if(generated.size) {
    const broker=definitions.get('broker') ?? new Map();
    for(const [k,v] of generated) broker.set(k,v);
    definitions.set('broker',broker);
  }
  const trees=treeFiles.map(file=>({file,node:r.returned(file)}));
  return {r,trees,definitions,problems};
}
