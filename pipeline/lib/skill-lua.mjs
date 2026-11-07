import { tokenizeLua } from './lua-static-reader.mjs';
import { conditionalWrites } from './lua-effects.mjs';
import {createSharedBindingGuard,invalidateReachable,verifiedBinding,applyCallMutations} from './lua-effects.mjs';

// A deliberately bounded Lua expression reader. It builds data, never runs Lua.
// Unsupported operators/calls remain nodes and cannot become numeric values.
const precedence = {or:1,and:2,'==':3,'~=':3,'<':3,'>':3,'<=':3,'>=':3,'..':4,'+':5,'-':5,'*':6,'/':6,'%':6,'^':7};
export class SkillLua {
  constructor(source, file, env = new Map()) {
    this.source=source; this.file=file; this.env=env; this.tokens=tokenizeLua(source); this.i=0;
    this.assignments=[]; this.calls=[];
  }
  peek(n=0) { return this.tokens[this.i+n] ?? this.tokens.at(-1); }
  take() { return this.tokens[this.i++]; }
  match(v) { if(!['string','number'].includes(this.peek().type) && this.peek().value===v) {this.take();return true;} return false; }
  expect(v) { if(!this.match(v)) throw new Error(`${this.file}:${this.peek().line}: expected ${v}`); }
  node(type, data, start) { return {type,...data,file:this.file,line:start.line,start:start.start,raw:this.source.slice(start.start,this.tokens[this.i-1]?.end)}; }
  block() {
    const start=this.take(), stack=[{close:start.value==='repeat'?'until':'end',awaitDo:['for','while'].includes(start.value)}];
    while(stack.length && this.peek().type!=='eof') {
      const t=this.take();
      if(t.type!=='keyword') continue;
      if(['function','if','for','while'].includes(t.value)) stack.push({close:'end',awaitDo:['for','while'].includes(t.value)});
      else if(t.value==='repeat') stack.push({close:'until'});
      else if(t.value==='do') {
        if(stack.at(-1)?.awaitDo) stack.at(-1).awaitDo=false;
        else stack.push({close:'end'});
      }
      else if(t.value===stack.at(-1)?.close) stack.pop();
    }
    return this.node('function',{capture:new Map(this.env)},start);
  }
  expression(min=0) {
    const start=this.peek(); let n;
    if(this.match('-') || this.match('#') || this.match('not')) n=this.node('unary',{op:start.value,arg:this.expression(8)},start);
    else if(this.match('(')) {n=this.expression();this.expect(')');}
    else if(start.type==='keyword' && start.value==='function') n=this.block();
    else if(this.match('{')) {
      const entries=[];let index=0;
      while(this.peek().type!=='eof' && !this.match('}')) {
        let key;
        if(this.match('[')) {key=this.expression();this.expect(']');this.expect('=');}
        else if(this.peek().type==='identifier' && this.peek(1).value==='=') {key=this.node('literal',{value:this.take().value},this.tokens[this.i-1]);this.take();}
        else key={type:'literal',value:++index,file:this.file,line:this.peek().line};
        entries.push({key,value:this.expression()});
        if(!this.match(',') && !this.match(';') && this.peek().value!=='}') throw new Error(`${this.file}:${this.peek().line}: table separator`);
      }
      n=this.node('table',{entries},start);
      this.onTable?.(n);
    } else if(['string','number'].includes(start.type)) {this.take();n=this.node('literal',{value:start.value},start);}
    else if(['true','false','nil'].includes(start.value)) {this.take();n=this.node('literal',{value:start.value==='nil'?null:start.value==='true'},start);}
    else {this.take();n=this.node('reference',{name:start.value,binding:this.env.get(start.value)},start);}
    while(true) {
      if(this.match('.')) {const key=this.take();n=this.node('index',{base:n,key:{type:'literal',value:key.value,file:this.file,line:key.line}},start);}
      else if(this.match('[')) {const key=this.expression();this.expect(']');n=this.node('index',{base:n,key},start);}
      else if(this.match('(')) {const args=[];if(this.peek().value!==')') {do {args.push(this.expression());} while(this.match(','));}this.expect(')');n=this.node('call',{callee:n,args},start);}
      else if(this.peek().type==='string' || this.peek().value==='{') {n=this.node('call',{callee:n,args:[this.expression(8)]},start);}
      else break;
      if(n.type==='call')this.onCall?.(n);
    }
    while((precedence[this.peek().value] ?? -1)>=min) {const op=this.take().value; n=this.node('binary',{op,left:n,right:this.expression(precedence[op]+1)},start);}
    return n;
  }
  chunk(set, staticLoop, finiteKeys) {
    let returned;
    while(this.peek().type!=='eof') {
      const before=this.i;
      if(this.match(';')) continue;
      if(['function','if','for','while','repeat','do'].includes(this.peek().value)) {
        const start=this.i,kind=this.peek().value;this.block();
        if(kind==='for' && staticLoop?.(this.source.slice(this.tokens[start].start,this.tokens[this.i-1].end)))continue;
        if(kind!=='function') for(const path of conditionalWrites(this.tokens.slice(start,this.i),finiteKeys?.(this.tokens.slice(start,this.i))??new Map())) {
          let target={type:'reference',name:path[0],binding:this.env.get(path[0]),file:this.file,line:this.tokens[start].line};
          if(!target.binding)continue;
          for(const key of path.slice(1))target={type:'index',base:target,key:{type:'literal',value:key},file:this.file,line:target.line};
          const value={type:'unknown',reason:'CONDITIONAL_ASSIGNMENT',file:this.file,line:target.line};
          if(target.type==='reference') {
            // Mutate table identity as well so aliases cannot expose stale fields.
            const retained=set(target,value);this.env.set(target.name,retained??value);
          } else set(target,value);
        }
        continue;
      }
      if(this.match('return')) {returned=this.expression();break;}
      const local=this.match('local');
      if(local && this.peek().value==='function') {this.block();continue;}
      const target=this.expression();
      if(this.match('=')) {
        const value=this.expression();
        if(target.type==='reference') this.env.set(target.name,value);
        else set(target,value);
        this.assignments.push({target,value});
      } else if(target.type==='call') this.calls.push(target);
      // Consume multi-local declarations safely (their values are not static).
      if(this.peek().value===',') while(this.peek().type!=='eof' && this.peek().line===this.tokens[this.i-1].line) this.take();
      if(this.i<=before) this.take();
    }
    return {returned,env:this.env,assignments:this.assignments,calls:this.calls};
  }
}

export function callName(n) {
  if(n?.type==='reference') return n.name;
  if(n?.type==='index' && n.key.type==='literal') return `${callName(n.base)}.${n.key.value}`;
  return '';
}

export function createSkillResolver(reader) {
  const chunks=new Map(), active=new Set(), compositions=new Map(), revoked=new WeakSet();
  const effects=createSharedBindingGuard(reader);
  let stimmDefinitions=new Map();
  const unknown=(n,reason) => ({...n,type:'unknown',reason});
  const literal=(value,n) => ({type:'literal',value,file:n.file,line:n.line});
  function load(file) {
    effects.load(file);
    if(chunks.has(file)) return chunks.get(file);
    if(!reader.exists(file)) return {};
    const pending={}; chunks.set(file,pending);
    const parser=new SkillLua(reader.read(file),file);
    parser.onTable=table=>{
      for(const entry of table.entries) {
        const key=keyScalar(entry.key);
        if(['string','number','boolean'].includes(typeof key))entry.resolvedKey=literal(key,entry.key);
      }
      table.hasUnknownKeys=table.entries.some(e=>!e.resolvedKey);
    };
    parser.onCall=n=>{
      applyCallMutations(callName(n.callee),n.args,{analysis:effects.analysis(file),resolve,field,entries,capture:(path,owner)=>{const [root,...parts]=path.split('.');let value=(owner===file?parser.env:load(owner).env)?.get(root);for(const part of parts)value=get(value,part);return value;},handled:['_create_entry','_add_template_entries','_require_templates','extract_weapon_tweaks'],dynamic:{type:'unknown',reason:'DYNAMIC_VALUE',file,line:n.line}});
      // Snapshot copied children before subsequent source writes.
      if(['table.clone','table.clone_instance','table.shallow_copy'].includes(callName(n.callee)))resolve(n);
    };
    Object.assign(pending,parser.chunk((target,value) => {
      if(value.reason==='CONDITIONAL_ASSIGNMENT') {
        const existing=resolve(target);
        if(existing?.type==='table') {
          invalidateReachable(existing,{resolve,dynamic:value});return existing;
        }
      }
      if(target.type==='reference') {const root=resolve(target);if(root?.type==='table')invalidateReachable(root,{resolve,dynamic:value});return;}
      const base=resolve(target.base),key=keyScalar(target.key);
      if(base?.possibleValues||base?.type==='table'&&(key===undefined||unknownKeys(base)))invalidateReachable(base,{resolve,dynamic:unknown(target,'DYNAMIC_VALUE')});
      else if(base?.type==='table') base.entries.push({key:literal(key,target),value});
    },raw=>{
      // The existing bounded stimm DSL supplies this exact data-copy loop.
      // Any change to its body/iterator falls back to conditional invalidation.
      if(file!=='scripts/settings/ability/archetype_talents/talents/broker_talents.lua'||!stimmDefinitions.size||
        !/^for\s+talent_name\s*,\s*data\s+in\s+pairs\(stimm_talent_settings\)\s+do\s+archetype_talents\.talents\[talent_name\]\s*=\s*table\.clone\(data\.talent_data\)\s+end$/.test(raw))return false;
      const source=parser.env.get('stimm_talent_settings'),binding=source?.base?.binding;
      if(callName(source)!=='TalentSettings.broker_stimm'||binding?.type!=='call'||callName(binding.callee)!=='require'||scalar(binding.args[0])!=='scripts/settings/talent/talent_settings')return false;
      const target=get(parser.env.get('archetype_talents'),'talents');
      if(target?.type!=='table')return false;
      for(const [key,value] of stimmDefinitions)target.entries.push({key:literal(key,value),value});
      return true;
    },tokens=>{
      // The domain comes from the already validated stimm DSL, and applies only
      // to this exact pairs iterator and its verified settings binding.
      if(!stimmDefinitions.size||tokens.slice(0,10).map(t=>t.value).join(' ')!=='for talent_name , data in pairs ( stimm_talent_settings ) do')return new Map();
      const source=parser.env.get('stimm_talent_settings'),binding=source?.base?.binding;
      if(callName(source)!=='TalentSettings.broker_stimm'||binding?.type!=='call'||callName(binding.callee)!=='require'||scalar(binding.args[0])!=='scripts/settings/talent/talent_settings')return new Map();
      return new Map([['talent_name',[...stimmDefinitions.keys()]]]);
    }));
    // Recognized data-only registry includes. No function bodies are evaluated.
    for(const c of pending.calls) {
      const name=callName(c.callee);
      const binding=c.callee?.base?.binding;
      if(effects.analysis(file)?.models.get(name)?.kind==='extract_weapon_tweaks') {
        const path=scalar(c.args[0]);
        if(typeof path==='string')merge(resolve(c.args[1]),damageProfiles(path+'.lua'));
      }
      if(['table.merge','table.add_missing','table.append'].includes(name)) mergeCall(c);
      const model=effects.analysis(file)?.models.get(name),kind=model?.kind;
      const includeTarget=kind==='_create_entry'?'templates':
        kind==='_add_template_entries'?'explosion_templates':
        kind==='_require_templates'?'projectile_templates':null;
      if(includeTarget && c.args[0]?.type==='literal' && typeof c.args[0].value==='string') {
        const target=resolve((model.file===file?pending.env:load(model.file).env)?.get(includeTarget)),source=returned(c.args[0].value+'.lua');
        merge(target,source);
      }
    }
    if(file==='scripts/settings/ability/player_abilities/player_abilities.lua') {
      const target=resolve(pending.env.get('player_abilities'));
      for(const p of reader.list('scripts/settings/ability/player_abilities/abilities/').filter(p=>p.endsWith('_abilities.lua'))) merge(target,returned(p));
      pending.returned=target;
    }
    if(file==='scripts/settings/ability/ability_templates/ability_templates.lua') {
      const target=resolve(pending.env.get('ability_templates'));
      const abilities=returned('scripts/settings/ability/player_abilities/player_abilities.lua');
      for(const [,ability] of entries(abilities)) {
        const name=scalar(get(ability,'ability_template'));
        if(typeof name!=='string' || !/^[a-z0-9_]+$/.test(name)) continue;
        const template=returned(`scripts/settings/ability/ability_templates/${name}.lua`);
        if(target?.type==='table' && template) target.entries.push({key:literal(name,template),value:template});
      }
      pending.returned=target;
    }
    if(Number.isFinite(effects.analysis(file)?.dirtyFrom)||effects.moduleTainted(file)) {
      const dynamic={type:'unknown',reason:'DYNAMIC_VALUE',file,line:1};
      for(const [name,n] of pending.env) {
        invalidateReachable(n,{resolve,dynamic});
        if(n?.type!=='table'&&n?.start>=effects.analysis(file).dirtyFrom)pending.env.set(name,dynamic);
      }
      invalidateReachable(pending.returned,{resolve,dynamic});
      if(resolve(pending.returned)?.type!=='table')pending.returned=dynamic;
    }
    return pending;
  }
  function damageProfiles(file) {
    const c=load(file),data=resolve(c.returned),base=get(data,'base_templates'),overrides=get(data,'overrides');
    if(base?.type!=='table')return data;
    const result={...base,entries:[...base.entries]},cache=new Map();
    function effective(name,seen=new Set()) {
      if(cache.has(name))return cache.get(name);
      if(seen.has(name)||seen.size>=64)return unknown(data,'damage profile parent 循環或過深');
      const override=resolve(field(overrides,name));if(!override)return resolve(field(base,name));
      const parent=effective(scalar(get(override,'parent_template_name')),new Set([...seen,name]));
      if(parent?.type!=='table')return unknown(override,'未解析 damage profile parent');
      // Copy only the overridden path, preserving untouched AST bindings and
      // their source locations. Never mutate the parent's shared sub-tables.
      let out={...parent,entries:[...parent.entries]};
      for(const [,row] of entries(get(override,'overrides'))) {
        const parts=entries(row).map(([,v])=>v),keys=parts.slice(0,-1).map(v=>scalar(v));
        if(parts.length<2||keys.some(k=>!['string','number'].includes(typeof k)))return unknown(override,'非靜態 damage profile override');
        let target=out;
        for(const key of keys.slice(0,-1)) {
          const child=resolve(field(target,key));if(child?.type!=='table')return unknown(override,'未解析 override 路徑');
          const copy={...child,entries:[...child.entries]};target.entries.push({key:literal(key,row),value:copy});target=copy;
        }
        target.entries.push({key:literal(keys.at(-1),row),value:parts.at(-1)});
      }
      cache.set(name,out);return out;
    }
    for(const [name] of entries(overrides))result.entries.push({key:literal(name,data),value:effective(name)});
    return result;
  }
  function merge(target,source,missing=false,append=false) {
    if(target?.type!=='table' || source?.type!=='table') return;
    target.hasUnknownKeys ||= unknownKeys(source);
    const entries=[...source.entries];
    for(const e of entries) {
      const key=scalar(e.resolvedKey??(e.key?.type==='literal'?e.key:undefined));
      if(missing && field(target,key)) continue;
      const appendedKey=append?literal(target.entries.length+1,e.key):undefined;
      target.entries.push(append?{...e,key:appendedKey,resolvedKey:appendedKey}:e);
    }
  }
  function builtinCallIntact(n) {
    const name=callName(n.callee),root=name.split('.')[0];let binding=n.callee;
    while(binding?.type==='index')binding=binding.base;
    return verifiedBinding({name:root,bound:Boolean(binding?.binding),intact:roots=>effects.intact(roots)});
  }
  function mergeCall(n) {
    if(compositions.has(n)) return compositions.get(n);
    if(!builtinCallIntact(n))return unknown(n,'binding 未驗證');
    const name=callName(n.callee), target=resolve(n.args[0]);
    for(const arg of n.args.slice(1)) merge(target,resolve(arg),name==='table.add_missing',name==='table.append');
    compositions.set(n,target);
    return target;
  }
  function returned(file) {const c=load(file);return resolve(c.returned);}
  function resolve(n,trace) {
    if(!n) return undefined;
    if(n.type==='table'&&!revoked.has(n)&&effects.moduleTainted(n.file)) {
      revoked.add(n);invalidateReachable(n,{resolve,dynamic:unknown(n,'DYNAMIC_VALUE')});
    }
    if(active.has(n)) return unknown(n,'循環參照');
    active.add(n);
    try {
      if(trace && n.file) trace.push({path:n.file,line:n.line});
      if(n.type==='reference') return n.binding?resolve(n.binding,trace):unknown(n,`未解析參照 ${n.name}`);
      if(n.type==='index') {
        const base=resolve(n.base,trace),key=keyScalar(n.key,trace);
        if(base?.type==='unknown')return base;
        return resolve(field(base,key),trace) ?? unknown(n,`未解析索引 ${String(key)}`);
      }
      if(n.type==='call') {
        const name=callName(n.callee);
        if(/^(?:math\.|table\.|require$|settings$|unpack$)/.test(name)&&!builtinCallIntact(n))return unknown(n,'binding 未驗證');
        if(name==='require' && typeof scalar(n.args[0])==='string') return resolve(returned(scalar(n.args[0]).replace(/\.lua$/,'')+'.lua'),trace);
        if(name==='settings') return resolve(n.args[1],trace);
        if(['table.enum','table.keys','unpack','table.unpack'].includes(name)) {
          if(compositions.has(n)) return compositions.get(n);
          let values;
          if(name==='table.keys') {
            const table=resolve(n.args[0],trace);
            if(table?.type!=='table') return unknown(n,'table.keys 非靜態 table');
            if(unknownKeys(table))return unknown(n,'DYNAMIC_VALUE');
            values=[...new Map(table.entries.map(e=>{const key=e.resolvedKey??(e.key?.type==='literal'?e.key:undefined);return [scalar(key,trace),key];})).values()];
          } else if(name==='unpack' || name==='table.unpack') {
            const table=resolve(n.args[0],trace);
            if(table?.type!=='table') return unknown(n,'unpack 非靜態 table');
            values=table.entries.map(e=>e.value);
          } else {
            values=[];
            for(const arg of n.args) {
              const value=resolve(arg,trace);
              if(value?.type==='spread') values.push(...value.values);
              else values.push(value);
            }
          }
          const result=name==='unpack' || name==='table.unpack'?{...n,type:'spread',values}:
            {...n,type:'table',entries:values.map((v,i)=>({key:name==='table.enum'?v:literal(i+1,n),value:v}))};
          compositions.set(n,result);return result;
        }
        if(['table.clone','table.clone_instance','table.shallow_copy'].includes(name)) {
          if(compositions.has(n)) return compositions.get(n);
          const value=resolve(n.args[0],trace);
          if(value?.type!=='table') return unknown(n,'clone 非靜態 table');
          // Track ancestors for cycles; sibling references are copied independently.
          const copies=new Map();
          const copy=table=>{if(copies.has(table))return copies.get(table);const out={...table,entries:[]};copies.set(table,out);out.entries=table.entries.map(e=>{const child=resolve(e.value);return {...e,value:child?.type==='table'?copy(child):child};});copies.delete(table);return out;};
          const clone=name==='table.shallow_copy'?{...value,entries:value.entries.map(e=>({...e,value:resolve(e.value)}))}:copy(value);compositions.set(n,clone);return clone;
        }
        if(['table.merge','table.add_missing','table.append'].includes(name)) return mergeCall(n);
        if(/^math\.(max|min|abs|floor|ceil|round)$/.test(name)) {
          const base=n.callee.base;
          if(!verifiedBinding({name,bound:base?.type!=='reference'||base.name!=='math'||Boolean(base.binding),intact:roots=>effects.intact(roots)}))return unknown(n,'math binding 未驗證');
          const values=n.args.map(arg=>scalar(arg,trace));
          if(values.length&&values.every(v=>typeof v==='number'&&Number.isFinite(v)))return literal(['max','min'].includes(name.slice(5))?Math[name.slice(5)](...values):math(name.slice(5),values[0]),n);
          return unknown(n,'math 參數非靜態常數');
        }
        return unknown(n,`函式 ${name}`);
      }
      if(n.type==='unary') {const v=scalar(n.arg,trace);return n.op==='-' && typeof v==='number'?literal(-v,n):unknown(n,'非靜態 unary');}
      if(n.type==='binary') {
        const a=scalar(n.left,trace),b=scalar(n.right,trace);
        if(typeof a==='number' && typeof b==='number' && ['+','-','*','/'].includes(n.op)) {
          const v=n.op==='+'?a+b:n.op==='-'?a-b:n.op==='*'?a*b:a/b;
          return Number.isFinite(v)?literal(v,n):unknown(n,'非有限數值');
        }
        return unknown(n,`不支援運算 ${n.op}`);
      }
      if(n.type==='function')n.mathVerified=verifiedBinding({name:'math',bound:Boolean(n.capture?.has('math'))||/^function\s*\([^)]*\bmath\b/.test(n.raw),intact:roots=>effects.intact(roots)});
      return n;
    } finally {active.delete(n);}
  }
  function scalar(n,trace) {const v=resolve(n,trace);return v?.type==='literal'?v.value:undefined;}
  function keyScalar(n,trace,seen=new Set()) {
    if(!n||seen.has(n))return undefined;
    seen.add(n);
    if(n.type==='reference'&&n.binding)return keyScalar(n.binding,trace,seen);
    if(n.type==='binary'&&['and','or'].includes(n.op)) {
      const value=keyScalar(n.left,trace,new Set(seen));
      if(value===undefined)return undefined;
      const truthy=value!==null&&value!==false;
      return (n.op==='and'?truthy:!truthy)?keyScalar(n.right,trace,seen):value;
    }
    return scalar(n,trace);
  }
  function unknownKeys(table) {
    return table.hasUnknownKeys ??= table.entries.some(e=>!['string','number','boolean'].includes(typeof keyScalar(e.key)));
  }
  function field(table,key) {
    if(table?.type==='unknown')return table;
    if(table?.type!=='table') return undefined;
    if(unknownKeys(table)||key===undefined)return {...unknown(table,'DYNAMIC_VALUE'),possibleValues:[...table.entries.map(e=>e.value),...(table.dynamic?[table.dynamic]:[])]};
    for(let i=table.entries.length-1;i>=0;i--) if(keyScalar(table.entries[i].resolvedKey??table.entries[i].key)===key) return table.entries[i].value;
    return table.dynamic;
  }
  function get(n,key,trace) {return resolve(field(resolve(n,trace),key),trace);}
  function entries(n) {const t=resolve(n);if(t?.type!=='table') return [];const map=new Map();for(const e of t.entries) {const k=scalar(e.resolvedKey??(e.key?.type==='literal'?e.key:undefined));if(k!==undefined) map.set(k,unknownKeys(t)?field(t,k):e.value);}return [...map];}
  return {load,returned,resolve,scalar,field,get,entries,literal,setStimmDefinitions(value){stimmDefinitions=value;}};
}
function math(name,value) {return name==='round'?(value<0?-Math.floor(-value+0.5):Math.floor(value+0.5)):Math[name](value);}

/** Only a single return of whitelisted arithmetic is accepted; no eval/Function. */
export function manipulate(node,value) {
  if(node?.type!=='function') return undefined;
  const match=/^function\s*\(\s*([a-zA-Z_]\w*)\s*\)\s*return\s+([\s\S]*?)\s*end$/.exec(node.raw);
  if(!match) return undefined;
  const env=new Map([[match[1],{type:'literal',value}]]),p=new SkillLua(match[2],node.file,env);
  let ast;try {ast=p.expression();} catch {return undefined;}
  if(p.peek().type!=='eof') return undefined;
  function calc(n) {
    if(n.type==='literal') return typeof n.value==='number'?n.value:undefined;
    if(n.type==='reference') return n.name===match[1]?value:undefined;
    if(n.type==='unary' && n.op==='-') return -calc(n.arg);
    if(n.type==='binary' && ['+','-','*','/'].includes(n.op)) {const a=calc(n.left),b=calc(n.right);return n.op==='+'?a+b:n.op==='-'?a-b:n.op==='*'?a*b:a/b;}
    const name=callName(n.callee);
    if(n.type==='call' && /^math\.(abs|floor|ceil|round)$/.test(name) && n.args.length===1 && verifiedBinding({name,bound:node.mathVerified===false})) return math(name.slice(5),calc(n.args[0]));
    return undefined;
  }
  const result=calc(ast);return Number.isFinite(result)?result:undefined;
}
