import { pathToFileURL } from 'node:url';
import { itemId, nameFromText, runExtractCli } from './lib/extract-output.mjs';
import { skillStructure } from './lib/skill-structure.mjs';
import { skillParams } from './lib/skill-values.mjs';
import { createBrittlenessSupplement } from './lib/skill-brittleness.mjs';
import { createMechanics } from './lib/mechanics.mjs';

export const SCRIPT_VERSION='pipeline/extract-skills.mjs@1.2.0';
const NODE_TYPES=new Set(['ability','ability_modifier','aura','keystone','keystone_modifier','tactical','tactical_modifier','stat','start','default','broker_stimm']);

export function validateSkillParents(items) {
  const emitted=new Set(items.map(i=>i.id));
  for(const item of items)for(const parent of item.values.parents) {
    if(!emitted.has(parent))throw new Error('腳本 bug：技能 '+item.id+' 引用了未輸出的 parent '+parent);
  }
}

export function buildSkills({reader,text,envelope}) {
  const supplementBrittleness=createBrittlenessSupplement(reader,text);
  const {data,skills}=readSkillData({reader:supplementBrittleness.reader,text,envelope});
  for(const {item,definition,trace,textKeys,textSnapshot} of skills)supplementBrittleness(item.id,item.values.params,data.problems,trace,definition,textKeys,textSnapshot);
  supplementBrittleness.finish();
  for(const {item,trace} of skills)item.source.files=sourceFiles(trace);
  const mechanics=createMechanics(reader);
  for(const {item,definition} of skills)mechanics.skill(item,definition,{sourceRejected:data.problems.some(p=>p.id===item.id&&/^BRITTLENESS_SOURCE_/.test(p.code))});
  data.mechanicsStats=mechanics.stats;
  data.problems.push(...mechanics.problems);
  return data;
}

const sourceFiles=trace=>[...new Map(trace.filter(x=>x.path && x.line).map(x=>[`${x.path}:${x.line}`,x])).values()].sort((a,b)=>a.path<b.path?-1:a.path>b.path?1:a.line-b.line);

/** Shared complete main traversal, without the separately audited supplement.
 * The candidate pin collector uses this exact path without applying old pins. */
export function readSkillData({reader,text,envelope}) {
  const {r,trees,definitions,problems}=skillStructure(reader),items=[],skills=[],excluded=[],seen=new Set(),used=new Map(),effectFormats={};
  for(const {file,node:tree} of trees) {
    const str=(n,k)=>r.scalar(r.get(n,k)),archetype=str(tree,'archetype_name'),treeName=str(tree,'name');
    const nodes=r.entries(r.get(tree,'nodes')).map(([,n])=>r.resolve(n));
    const widgets=new Map(nodes.map(n=>[str(n,'widget_name'),n]));
    const defs=new Map([...(definitions.get('base') ?? []),...(definitions.get(archetype) ?? [])]);
    for(const node of nodes) {
      const key=str(node,'talent');if(typeof key!=='string') continue;
      const id=itemId('skills',archetype,key);
      if(!used.has(archetype)) used.set(archetype,new Set());used.get(archetype).add(key);
      if(seen.has(id)) {problems.push({code:'MULTI_NODE',id,path:file,line:node.line,message:'同職業多個節點引用，採第一個節點'});continue;}seen.add(id);
      const definition=r.resolve(defs.get(key));
      if(!definition) {problems.push({code:'MISSING_DEFINITION',id,path:file,line:node.line,message:`找不到天賦 ${key}`});continue;}
      const trace=[{path:definition.file,line:definition.line},{path:file,line:node.line}];
      let nodeType=file.includes('/broker_stimm_builder_view/')?'broker_stimm':str(node,'type');
      if(!NODE_TYPES.has(nodeType)) {problems.push({code:'UNKNOWN_NODE_TYPE',id,message:`未知節點類型 ${nodeType}`});nodeType='default';}
      const nameKey=str(definition,'display_name'),descNode=r.get(definition,'description');
      const descKeys=descNode?.type==='table'?r.entries(descNode).map(([,v])=>r.scalar(v)):[r.scalar(descNode)];
      const textValues=new Map(),usedText={lookup(k){if(!textValues.has(k))textValues.set(k,text.lookup(k));return textValues.get(k);}};
      const named=nameFromText(usedText,nameKey,key);if(named.problem) problems.push({...named.problem,id});
      const descriptions=descKeys.map(k=>typeof k==='string'?usedText.lookup(k):null);
      for(let i=0;i<descriptions.length;i++) {
        if(!descriptions[i] || descriptions[i].conflict || descriptions[i].en==null || descriptions[i].zh==null) problems.push({code:descriptions[i]?.conflict?'TEXT_CONFLICT':'MISSING_TEXT',id,message:`缺少官方說明：${descKeys[i] ?? key}`});
      }
      const official=Object.fromEntries(['en','zh'].map(lang=>[lang,descriptions.length && descriptions.every(d=>!d?.conflict && typeof d?.[lang]==='string')?descriptions.map(d=>d[lang]).join('\n'):null]));
      const parents=[...new Set(r.entries(r.get(node,'parents')).map(([,v])=>str(widgets.get(r.scalar(v)),'talent')).filter(k=>typeof k==='string').map(k=>itemId('skills',archetype,k)))].sort();
      const formats={params:{},descriptions:descNode?.type==='table'?descKeys.map((key,n)=>({key:key??null,index:n+1})):[],perIndex:r.entries(r.get(definition,'format_values_per_index')).map(([key])=>key)};
      const literalTokens=new Set(Object.values(official).flatMap(s=>[...(s??'').matchAll(/\{([A-Za-z_][A-Za-z0-9_]*)(?=[:}])/g)].map(m=>m[1])));
      const params=skillParams(r,definition,id,problems,trace,formats,literalTokens);
      effectFormats[id]=formats;
      const item={id,key,name:named.name,official,
        values:{archetype,tree:treeName,nodeType,icon:str(node,'icon') ?? str(definition,'icon') ?? null,maxPoints:str(node,'max_points') ?? 1,parents,params},
        source:{commit:reader.commit,files:sourceFiles(trace),scriptVersion:SCRIPT_VERSION,
          text:{batch:envelope.textBatch,keys:{...(typeof nameKey==='string'?{name:nameKey}:{}),...(typeof descKeys[0]==='string'?{description:descKeys[0]}:{})}}}};
      items.push(item);skills.push({item,definition,trace,textKeys:{name:nameKey,descriptions:descKeys},textSnapshot:usedText});
    }
  }
  for(const [archetype,defs] of definitions) for(const [key] of defs) {
    const referenced=archetype==='base'?[...used.values()].some(keys=>keys.has(key)):used.get(archetype)?.has(key);
    if(!referenced) excluded.push({key,archetype,reason:'not-in-tree'});
  }
  const emitted=new Set(items.map(i=>i.id));
  // Placeholder nodes have no emitted skill and contribute no parent edge.
  for(const item of items)item.values.parents=item.values.parents.filter(id=>emitted.has(id));
  validateSkillParents(items);
  return {data:{items,problems,excluded,effectFormats},skills};
}

if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) await runExtractCli({category:'skills',scriptVersion:SCRIPT_VERSION,build:buildSkills});
