import {tokenizeLua} from './lua-static-reader.mjs';
import {conditionalWrites,luaBlockEnd} from './lua-mutations.mjs';

/** Preflight the loaded require closure before folding any calls. No Lua runs.
 * Module tables have canonical identities so aliases in other chunks cannot
 * hide writes. Function bodies are excluded; conditional assignments are not.
 */
export function createSharedBindingGuard(reader) {
 const modules=new Map();
 const identity=p=>'@'+p.replace(/\.lua$/,'');
 function load(file) {
  if(modules.has(file)||!reader.exists(file))return;
  const record={writes:[]};modules.set(file,record);
  const tokens=tokenizeLua(reader.read(file)),normalized=[],dependencies=[];
  // Canonicalize require results before alias discovery, including bare requires.
  for(let i=0;i<tokens.length;i++) {
   const t=tokens[i];
   // Declaring a function does not load the requires in its unexecuted body.
   if(t.type==='keyword'&&t.value==='function') {
    const end=luaBlockEnd(tokens,i);normalized.push(...tokens.slice(i,end+1));i=end;continue;
   }
   if(t.value==='require'&&tokens[i+1]?.value==='('&&tokens[i+2]?.type==='string'&&tokens[i+3]?.value===')') {
    const path=tokens[i+2].value;dependencies.push(path.replace(/\.lua$/,'')+'.lua');
    normalized.push({...t,type:'identifier',value:identity(path)});i+=3;
   }else normalized.push(t);
  }
  const returned=normalized.findLastIndex((t,i)=>t.value==='return'&&normalized[i+1]?.type==='identifier'&&normalized[i+2]?.type==='eof');
  const returnedName=returned>=0?normalized[returned+1].value:null;
  const exported=normalized.some((t,i)=>t.value==='local'&&normalized[i+1]?.value===returnedName&&normalized[i+2]?.value==='='&&normalized[i+3]?.value==='{')?returnedName:null,initialized=new Map();
  // Initial top-level member definitions create the module. A second write,
  // an alias write, or a conditional write is a mutation, even to a function.
  for(let i=0;i<normalized.length;i++) {
   const t=normalized[i];
   if(t.value===exported&&normalized[i+1]?.value==='.'&&normalized[i+2]?.type==='identifier'&&normalized[i+3]?.value==='=') {
    const name=normalized[i+2].value;
    const fn=normalized[i+4]?.value==='function'?i+4:null;
    const body=fn===null?null:JSON.stringify(normalized.slice(fn,luaBlockEnd(normalized,fn)+1).map(t=>[t.type,t.value]));
    // The audited base settings contain two token-identical inspect factories.
    // This repeated declaration is initialization, with no body execution or
    // dependency change. No other repeated member assignment is exempt.
    const duplicate=file==='scripts/settings/equipment/weapon_templates/base_template_settings.lua'&&name==='generate_inspect_action'&&body!==null&&initialized.get(name)===body;
    if(!initialized.has(name)||duplicate){initialized.set(name,body);normalized[i]={...t,value:'@initial'};}
   }
   if(t.type==='keyword'&&['function','if','for','while','repeat','do'].includes(t.value))i=luaBlockEnd(normalized,i);
  }
  const rootAliases=exported?new Map([[exported,[identity(file)]]]):new Map();
  // Shared roots are tables; their fields here are functions/scalars (e.g.
  // Base.NIL_VALUE_OVERRIDE), not table arguments. Concrete sub-tables and
  // their descendants are invalidated by the reader at the actual call.
  record.writes=[...conditionalWrites(normalized,new Map(),{assignmentsOnly:true,rootAliases}),...conditionalWrites(normalized,new Map(),{callsOnly:true,rootAliases}).filter(p=>p.length===1&&(['math','table','MathUtils'].includes(p[0])||p[0].startsWith('@')))];
  dependencies.forEach(load);
 }
 function intact(roots,{moduleFile}={}) {
  const wanted=new Set([...roots,...(moduleFile?[identity(moduleFile)]:[])]);
  return ![...modules.values()].some(m=>m.writes.some(p=>wanted.has(p[0])));
 }
 return {load,intact};
}
