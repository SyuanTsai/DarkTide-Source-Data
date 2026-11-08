import { createHash } from 'node:crypto';
import { tokenizeLua } from './lua-static-reader.mjs';
import { luaBlockEnd } from './lua-effects.mjs';
import { parseRequires } from './lua-closure.mjs';

/** C3: the tokenizer excludes comments without mistaking string contents for
 * comments. Preserve the original lexemes, then remove ALL whitespace. */
export function normalizeLua(source) {
 return tokenizeLua(source).filter(t=>t.type!=='eof').map(t=>source.slice(t.start,t.end)).join('').replace(/\s/g,'');
}
const validSymbol=s=>/^[A-Za-z0-9_.:\[\]-]+$/.test(s);

/** Lexical definition index. Never executes Lua or hashes a guessed range.
 * Stable lexical paths distinguish nested tables and repeated assignments. */
function definitions(source) {
 const t=tokenizeLua(source),out=[],counts=new Map(),writes=new Map();let exported;
 const is=(i,value)=>t[i]?.type!=='string'&&t[i]?.value===value;
 const write=name=>writes.set(name,(writes.get(name)??0)+1);
 function close(i){let depth=1,j=i+1;for(;j<t.length;j++){if(t[j].type==='string')continue;if(t[j].value==='{')depth++;if(t[j].value==='}'&&!--depth)return j;}return -1;}
 function path(i,end=t.length){if(t[i]?.type!=='identifier')return null;let name=t[i++].value;while(i<end){if(['.',':'].includes(t[i]?.value)&&t[i]?.type!=='string'&&t[i+1]?.type==='identifier'){name+=t[i++].value+t[i++].value;}else if(is(i,'[')&&['string','number'].includes(t[i+1]?.type)&&is(i+2,']')){name+='['+String(t[i+1].value)+']';i+=3;}else break;}return {name,end:i};}
 function inlineCalls(begin,end){const shadowed=new Set();let params=begin+1;while(params<end&&t[params].value!=='(')params++;for(let j=params+1;j<end&&t[j].value!==')';j++)if(t[j].type==='identifier')shadowed.add(t[j].value);
  for(let j=begin;j<end;j++)if(is(j,'local')){let k=j+1;if(is(k,'function'))k++;while(t[k]?.type==='identifier'){shadowed.add(t[k].value);if(!is(k+1,','))break;k+=2;}}
  const refs=[];for(let j=begin;j<end;j++){if(['.',':'].includes(t[j-1]?.value))continue;const p=path(j,end);if(p&&t[p.end]?.value==='('&&!shadowed.has(p.name.split(/[.:[]/)[0])&&!p.name.includes(':'))refs.push({name:p.name,key:'call',call:true});if(p)j=p.end-1;}return refs;
 }
 function add(name,i,end,kind){if(!validSymbol(name)||end<0)return;const n=(counts.get(name)??0)+1;counts.set(name,n);const symbol=n===1?name:name+'['+n+']';const d={symbol,start:t[i].start,end:t[end].end,line:t[i].line,endLine:t[end].line,kind,raw:source.slice(t[i].start,t[end].end),references:[]};out.push(d);return d;}
 function table(name,i,end){const d=add(name,i,end,'table');if(!d)return;let index=0;
  for(let j=i+1;j<end;){let key,value=j;
   if(t[j]?.type==='identifier'&&t[j+1]?.value==='='){key=t[j].value;value=j+2;}
   else if(is(j,'[')){let k=j+1;while(k<end&&!is(k,']'))k++;if(is(k+1,'=')){key=t.slice(j+1,k).map(x=>String(x.value)).join('.');value=k+2;}}
   else key=String(++index);
   if(is(value,'{')){const stop=close(value);if(stop<0)return;table(name+'.'+key,value,stop);j=stop+1;}
   else if(is(value,'function')){const end=luaBlockEnd(t,value);add(name+'.'+key,value,end,'function');d.references.push(...inlineCalls(value,end));j=end+1;}
   else {const p=path(value,end);if(p&&['}',',',';'].includes(t[p.end]?.value))d.references.push({name:p.name,key});j=Math.max(value+1,p?.end??0);}
   while(j<end&&!(t[j].type!=='string'&&[';',','].includes(t[j].value))){
    if(is(j,'function')){j=luaBlockEnd(t,j)+1;continue;}
    if(is(j,'{')){const stop=close(j);if(stop<0)return;j=stop+1;continue;}j++;
   }if(t[j]?.type!=='string'&&[';',','].includes(t[j]?.value))j++;
  }
 }
 for(let i=0;i<t.length-1;i++){
  if(is(i,'function')&&t[i+1]?.type==='identifier'){const p=path(i+1),end=luaBlockEnd(t,i);write(p.name);add(p.name,i,end,'function');i=end;continue;}
  const p=path(i);if(p&&t[p.end]?.value==='='){
   write(p.name);
   const v=p.end+1;if(is(v,'{')){const end=close(v);table(p.name,v,end);i=end<0?t.length:end;}
   else if(is(v,'function')){const end=luaBlockEnd(t,v);add(p.name,v,end,'function');i=end;}
   else i=p.end;
  }else if(is(i,'return')&&is(i+1,'{')){const end=close(i+1);table('return_table',i+1,end);exported='return_table';i=end<0?t.length:end;}
  else if(is(i,'return')&&t[i+1]?.type==='identifier')exported=path(i+1)?.name;
 }
 out.writes=writes;out.exported=exported;
 return out;
}

export function createCodeRefs(reader,cache=new Map()) {
 const refs={},skipped=new Set();
 function index(file){if(!cache.has(file))cache.set(file,reader.exists(file)?{defs:definitions(reader.read(file)),requires:parseRequires(reader.read(file))}:{defs:[],requires:{}});return cache.get(file);}
 function find(file,symbol){const ix=index(file),direct=ix.defs.find(d=>d.symbol===symbol);if(direct&&(ix.defs.writes?.get(symbol)??1)===1)return {file,d:direct};const [alias,...parts]=symbol.split('.'),required=ix.requires[alias];
  if(required&&(ix.defs.writes?.get(alias)??1)===1){const target=index(required),name=target.defs.exported+(parts.length?'.'+parts.join('.'):'');const d=target.defs.find(d=>d.symbol===name);if(d&&(target.defs.writes?.get(name)??1)===1&&(target.defs.writes?.get(target.defs.exported)??1)===1)return {file:required,d};}
  return null;
 }
 function include(file,d,follow=true){const key=file+'#'+d.symbol;if(refs[key])return;refs[key]={path:file,symbol:d.symbol,sha256:createHash('sha256').update(normalizeLua(d.raw),'utf8').digest('hex')};
  if(follow&&d.kind==='table'){
   // Nested constructors belong to the selected table; inline function bodies
   // already belong to its hash. Follow NAME references to functions one level.
   const tables=index(file).defs.filter(x=>x.kind==='table'&&x.start>=d.start&&x.end<=d.end);
   for(const table of tables)for(const ref of table.references){const found=find(file,ref.name);if(found?.d.kind==='function')include(found.file,found.d,false);else if(ref.call||/func|callback|condition/.test(ref.key))skipped.add(file+'#'+ref.name);}
  }
 }
 return {refs,skipped,add(file,symbol){const found=find(file,symbol);if(found)include(found.file,found.d);else skipped.add(file+'#'+symbol);},
  definition(file,symbol){const found=find(file,symbol);return found?{...found.d,file:found.file}:null;},
  functions(){return Object.values(refs).flatMap(ref=>{const d=index(ref.path).defs.find(d=>d.symbol===ref.symbol);return d?.kind==='function'?[{...d,file:ref.path}]:[];});},
  location(file,line){const d=index(file).defs.filter(d=>d.line<=line&&d.endLine>=line).sort((a,b)=>(a.end-a.start)-(b.end-b.start))[0];if(d)include(file,d);},
  node(node){const file=node?.file??node?._file;if(!file)return;const start=node.start??node.startOffset;
   const candidates=index(file).defs.filter(d=>d.start===start || start===undefined&&d.line===(node.line??node.startLine));
   const d=candidates.sort((a,b)=>(a.end-a.start)-(b.end-b.start))[0];if(d)include(file,d);else skipped.add(file+'#unresolved_definition');},
 };
}
