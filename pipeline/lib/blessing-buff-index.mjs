import {createSharedBindingGuard,invalidateReachable,applyCallMutations,verifiedBinding} from './lua-effects.mjs';
import { parseLuaStatic, tokenizeLua } from './lua-static-reader.mjs';
import { conditionalWrites } from './lua-effects.mjs';

const unknown = (reason, detail, file, line=1) => ({type:'unknown',reason,detail,_file:file,startLine:line});
const modulePath = p => p.replace(/\.lua$/, '') + '.lua';

// Split only at top-level statement boundaries. Function bodies and table literals
// stay intact; no Lua is executed. Unsupported blocks are retained as unknowns.
function statements(source) {
  const tokens=tokenizeLua(source), out=[];
  let start=0, braces=0, parens=0, brackets=0, blocks=[];
  for(let i=0;i<tokens.length-1;i++) {
    const t=tokens[i], v=t.type==='string' || t.type==='number' ? null : t.value;
    if(v==='{') braces++; else if(v==='}') braces--;
    if(v==='(') parens++; else if(v===')') parens--;
    if(v==='[') brackets++; else if(v===']') brackets--;
    if(['function','if','for','while'].includes(v)) blocks.push(v);
    else if(v==='repeat') blocks.push(v);
    else if(v==='do' && !['for','while'].includes(blocks.at(-1))) blocks.push(v);
    else if(v==='end' || v==='until') blocks.pop();
    if(!braces && !parens && !brackets && !blocks.length &&
      (tokens[i+1].line>t.endLine || tokens[i+1].type==='eof' || v===';')) {
      out.push({raw:source.slice(tokens[start].start,t.end),line:tokens[start].line}); start=i+1;
    }
  }
  return out;
}

/** Ordered, lazy, static Lua tables with per-value provenance and cycle guards. */
export function staticBuffModules(reader) {
  const effects=createSharedBindingGuard(reader);
  const cache=new Map(), environments=new Map(), active=new Set(), revoked=new WeakSet();
  function force(node) {
    if(node?.type==='table'&&!revoked.has(node)&&effects.moduleTainted(node._file)) {
      revoked.add(node);invalidateReachable(node,{resolve:force,dynamic:unknown('DYNAMIC_VALUE','共享目的表已改寫',node._file)});
    }
    if(node?.type!=='lazy') return node;
    if(node.resolved) return node.resolved;
    if(active.has(node)) return unknown('RUNTIME_REFERENCE','循環參照',node._file,node.startLine);
    active.add(node);
    try { return node.resolved=evaluate(node.expression,node.env,node._file); } finally { active.delete(node); }
  }
  function get(node,key) {
    node=force(node);
    if(node?.type!=='table') return node?.type==='unknown'?node:unknown('PATH_MISSING',`非 table 無法讀取 ${key}`,node?._file,node?.startLine);
    let index=0;
    const entry=node.entries.find(e => (e.key ? force(e.key)?.value : ++index)===key);
    return entry ? force(entry.value) : node.dynamic ?? unknown('PATH_MISSING',`路徑不存在：${key}`,node._file,node.startLine);
  }
  function set(table,key,value,missing=false,definition) {
    table=force(table); if(table?.type!=='table') return;
    const found=table.entries.find(e=>force(e.key)?.value===key);
    if(found) { if(!missing) { found.value=value; found.definition=definition; } }
    else table.entries.push({key:{type:typeof key,value:key},value,definition});
  }
  function lazy(expression,env,file) {
    return {type:'lazy',expression,env:new Map(env),_file:file,startLine:expression?.startLine};
  }
  function evaluate(n,env,file) {
    if(!n) return unknown('PATH_MISSING','來源沒有值',file);
    if(n.type==='reference') {
      const [root,...parts]=n.ref.split('.');
      let value=force(env.get(root));
      if(!value) return unknown('RUNTIME_REFERENCE',`無法靜態解析參照 ${n.ref}`,file,n.startLine);
      for(const part of parts) value=get(value,part);
      return force(value);
    }
    if(n.type==='table') return {...n,_file:file,entries:n.entries.map(e=>({...e,key:e.key?lazy(e.key,env,file):null,value:lazy(e.value,env,file)}))};
    if(n.type==='call') {
      const root=n.ref?.split('.')[0];
      if(/^(?:math\.|table\.|require$|settings$|unpack$)/.test(n.ref)&&!verifiedBinding({name:root,bound:env.has(root)||effects.analysis(file)?.bindings.has(root),intact:roots=>effects.intact(roots)}))return unknown('DYNAMIC_VALUE','binding 未驗證',file,n.startLine);
      applyCallMutations(n.ref,n.args,{analysis:effects.analysis(file),capture:(path,owner)=>{const [root,...parts]=path.split('.');let value=force((environments.get(owner)??env).get(root));for(const part of parts)value=get(value,part);return value;},handled:['_create_entry'],resolve:n=>n?._file?force(n):force(evaluate(n,env,file)),field:get,entries:n=>(n?.entries??[]).map((e,i)=>[force(e.key)?.value??i+1,e.value]),dynamic:unknown('DYNAMIC_VALUE','有限 table helper 的寫入',file,n.startLine)});
      if(n.ref==='require' && n.args[0]?.type==='string') return load(modulePath(n.args[0].value));
      if(file==='scripts/settings/buff/buff_templates.lua' && n.ref==='settings' && n.args[0]?.value==='BuffTemplates') return evaluate(n.args[1],env,file);
      if(effects.analysis(file)?.models.get(n.ref)?.kind==='_create_entry' && n.args[0]?.type==='string') {
        const source=load(modulePath(n.args[0].value)),model=effects.analysis(file).models.get(n.ref),target=force((environments.get(model.file)??env).get('templates'));
        if(source?.type==='table') for(const entry of source.entries) {
          const key=force(entry.key)?.value;
          if(typeof key==='string') set(target,key,entry.value,false,entry.definition);
        }
        return target;
      }
      if(n.ref==='table.clone' || n.ref==='table.clone_instance') return clone(evaluate(n.args[0],env,file));
      if(n.ref==='table.shallow_copy') {const value=force(evaluate(n.args[0],env,file));return value?.type==='table'?{...value,entries:value.entries.map(e=>({...e}))}:value;}
      if(['table.merge','table.add_missing'].includes(n.ref)) {
        const target=evaluate(n.args[0],env,file), source=evaluate(n.args[1],env,file);
        if(target?.type!=='table') return target;
        const dynamic=source?.type!=='table'?source:source.dynamic;
        if(dynamic) {
          target.dynamic=dynamic;
          if(n.ref==='table.merge') for(const entry of target.entries) entry.value=dynamic;
        }
        if(source?.type!=='table') return target;
        for(const entry of source.entries) {
          const key=force(entry.key)?.value;
          if(key!==undefined) set(target,key,entry.value,n.ref==='table.add_missing',entry.definition??{path:source._file,line:entry.startLine??source.startLine});
          else {
            target.dynamic=unknown('RUNTIME_REFERENCE','合併含動態 key',file,n.startLine);
            if(n.ref==='table.merge') for(const existing of target.entries) existing.value=target.dynamic;
          }
        }
        return target;
      }
      if(n.ref==='table.enum') {
        const values=n.args.flatMap(arg=> {
          const value=evaluate(arg,env,file);
          return value?.type==='table'?value.entries.map(e=>force(e.value)):[value];
        });
        return {type:'table',_file:file,entries:values.filter(a=>a?.type==='string').map(a=>({key:a,value:a}))};
      }
      if(n.ref==='unpack') return evaluate(n.args[0],env,file);
      if(n.ref==='table.keys' || n.ref==='table.ukeys') {
        const table=evaluate(n.args[0],env,file);
        if(table?.type!=='table') return table;
        return {type:'table',_file:file,entries:table.entries.map(e=>({key:null,value:force(e.key)}))};
      }
      return unknown('FUNCTION_GENERATED',`函式產生的值：${n.ref}`,file,n.startLine);
    }
    if(n.type==='unsupported'&&n.reason==='DYNAMIC_VALUE')return unknown('DYNAMIC_VALUE','不純或未知函式呼叫',file,n.startLine);
    if(n.type==='unsupported') return unknown(/\b(?:and|or)\b/.test(n.raw)?'CONDITIONAL_EXPRESSION':'RUNTIME_EXPRESSION',n.raw.trim(),file,n.startLine);
    if(n.type==='function') return unknown('FUNCTION_GENERATED','函式值需要執行期求值',file,n.startLine);
    return {...n,_file:file};
  }
  // Ancestor tracking breaks cycles without sharing copied sibling tables.
  function clone(n,copies=new Map()) {
    n=force(n);
    if(copies.has(n))return copies.get(n);
    if(n?.type==='table') {const out={...n,entries:[]};copies.set(n,out);out.entries=n.entries.map(e=>({...e,value:clone(e.value,copies)}));copies.delete(n);return out;}
    return n;
  }
  function assign(env,path,value,definition) {
    const [root,...parts]=path.split('.');
    if(!parts.length) { env.set(root,value); return; }
    let target=force(env.get(root));
    for(const part of parts.slice(0,-1)) target=get(target,part);
    set(target,parts.at(-1),value,false,definition);
  }
  function load(file) {
    if(cache.has(file)) return cache.get(file);
    if(!reader.exists(file)) return unknown('MODULE_MISSING',`模組不存在：${file}`,file);
    cache.set(file,unknown('RUNTIME_REFERENCE','循環 require',file));
    const env=new Map(); environments.set(file,env); let returned;
    for(const statement of statements(reader.read(file))) {
      const {raw,line}=statement;
      if(/^(?:local\s+)?function\b/.test(raw)) continue;
      if(/^(?:if|for|while|repeat|do)\b/.test(raw)) {
        // A conditional/loop write must never leave an earlier static value visible.
        for(const path of conditionalWrites(tokenizeLua(raw))) {
          if(!env.has(path[0]))continue;
          const value=unknown('CONDITIONAL_ASSIGNMENT','條件或迴圈中的覆寫',file,line);
          let existing=force(env.get(path[0]));for(const key of path.slice(1))existing=get(existing,key);
          if(existing?.type==='table') {
            invalidateReachable(existing,{resolve:force,dynamic:value});
          } else {
            assign(env,path.join('.'),value);
          }
        }
        continue;
      }
      const assignment=/^(?:local\s+)?([A-Za-z_]\w*(?:\.\w+)*)\s*=\s*([\s\S]*)$/.exec(raw);
      const expr=assignment?assignment[2]:raw.replace(/^return\s+/, '');
      let node;
      try { node=parseLuaStatic('\n'.repeat(line-1)+'return '+expr,{allowUnsupported:true,filename:file,effects:{dirtyFrom:Infinity}}).returned; }
      catch(e) {
        if(e.name!=='LuaStaticError') throw e;
        node=unknown('RUNTIME_EXPRESSION',`不支援的靜態語法：${expr.slice(0,120)}`,file,line);
      }
      const result=evaluate(node,env,file);
      if(assignment) assign(env,assignment[1],result,{path:file,line});
      else if(/^return\b/.test(raw)) returned=result;
    }
    if(Number.isFinite(effects.analysis(file)?.dirtyFrom)||effects.moduleTainted(file)) {
      const dynamic=unknown('DYNAMIC_VALUE','不純或未知函式呼叫',file);
      for(const n of [...env.values(),returned])invalidateReachable(n,{resolve:force,dynamic});
      if(force(returned)?.type!=='table')returned=dynamic;
    }
    returned ??= unknown('FUNCTION_GENERATED','模組沒有靜態回傳 table',file);
    cache.set(file,returned); return returned;
  }
  function index() {
    const result=new Map(), file='scripts/settings/buff/buff_templates.lua';
    if(!reader.exists(file)) return result;
    // Evaluate only static requires/merges and the registry's known entry loader.
    const root=load(file);
    for(const entry of root?.entries??[]) {
      const key=force(entry.key)?.value;
      if(typeof key==='string') result.set(key,{value:entry.value,definition:entry.definition??{path:root._file,line:entry.startLine??root.startLine}});
    }
    return result;
  }
  function reference(file,ref) { load(file); return evaluate({type:'reference',ref},environments.get(file)??new Map(),file); }
  return {load,force,get,index,reference};
}
