import { parseLuaStatic, getTableField as field, getTableArray as array, getTableEntries as entries, tokenizeLua } from './lua-static-reader.mjs';
import { staticBuffModules } from './blessing-buff-index.mjs';

export const str = n => n?.type === 'string' ? n.value : null;
export function expression(fn, value) {
  const m = /^function\s*\(\s*([a-zA-Z_]\w*)\s*\)\s*return\s+([\s\S]*?)\s*end$/.exec(fn?.raw ?? '');
  if (!m) return null;
  try {
    const t = tokenizeLua(m[2]); let i=0;
    function atom() {
      const x=t[i++];
      if (x.value==='-') return -atom();
      if (x.value==='+') return atom();
      if (x.value==='(') { const v=sum(); if(t[i++].value!==')') throw 0; return v; }
      if (x.type==='number') return x.value;
      if (x.value===m[1]) return value;
      if (x.value==='math' && t[i++]?.value==='.') {
        const name=t[i++]?.value; if (!['abs','floor','ceil','round'].includes(name) || t[i++]?.value!=='(') throw 0;
        const v=sum(); if(t[i++]?.value!==')') throw 0;
        return name==='round' ? Math.floor(v+0.5) : Math[name](v);
      }
      throw 0;
    }
    function product() { let v=atom(); while(['*','/'].includes(t[i].value)) { const op=t[i++].value, b=atom(); v=op==='*'?v*b:v/b; } return v; }
    function sum() { let v=product(); while(['+','-'].includes(t[i].value)) { const op=t[i++].value,b=product(); v=op==='+'?v+b:v-b; } return v; }
    const out=sum(); return t[i].type==='eof' && Number.isFinite(out) ? out : null;
  } catch { return null; }
}
export function resolver(reader) {
  const cache=new Map(), modules=staticBuffModules(reader); let buff, statBuffs;
  function parsed(file) { if(!cache.has(file)) cache.set(file,parseLuaStatic(reader.read(file),{filename:file,allowUnsupported:true})); return cache.get(file); }
  function deref(node,file) {
    if(node?.type==='lazy') { const value=modules.force(node); return {node:value,file:value._file??file}; }
    if(node?._file) return {node,file:node._file};
    if(node?.type==='call' && node.ref==='table.clone' && node.args?.length===1) return deref(node.args[0],file);
    if(node?.type!=='reference') return node ? {node,file} : null;
    const value=modules.reference(file,node.ref); return {node:value,file:value._file??file};
  }
  function enumKey(node,file) {
    if(node?.type==='string' || node?.type==='number') return node.value;
    if(node?.type!=='reference') return null;
    const parts=node.ref.split('.'), root=parsed(file).locals[parts[0]];
    const ref=root?.type==='reference' ? [root.ref,...parts.slice(1)].join('.') : node.ref;
    if (/^(?:BuffSettings|buff_settings)\.stat_buffs\.[a-zA-Z_][\w]*$/.test(ref)) {
      const settings='scripts/settings/buff/buff_settings.lua'; if(!reader.exists(settings)) return null;
      const member=parts.at(-1), src=reader.read(settings), match=/buff_settings\.stat_buffs\s*=\s*table\.enum\s*\(([\s\S]*?)\)/.exec(src);
      if (statBuffs === undefined) {
        const settingsRoot=parsed(settings).locals.buff_settings;
        statBuffs = new Set(entries(field(settingsRoot,'stat_buff_types')).map(e=>str(e.key)).filter(Boolean));
        if (match) for(const token of tokenizeLua(match[1])) if(token.type==='string') statBuffs.add(token.value);
      }
      if (statBuffs.has(member)) return member;
    }
    return deref(node,file)?.node?.value ?? null;
  }
  function walk(start, parts) {
    let cur=start;
    for(const part of parts) {
      cur=deref(cur?.node,cur?.file);
      if(cur?.node?._file) { const value=modules.get(cur.node,part); cur={node:value,file:value._file??cur.file}; continue; }
      if(cur?.node?.type!=='table') return cur?.node?.type==='unknown'?cur:null;
      let found;
      if(typeof part==='number') found=array(cur.node)[part-1];
      else found=entries(cur.node).find(e=>enumKey(e.key,cur.file)===part)?.value;
      cur=found ? {node:found,file:cur.file} : null;
    }
    return cur && deref(cur.node,cur.file);
  }
  function buffTemplate(name) {
    buff ??= modules.index();
    const entry=buff.get(name), node=modules.force(entry?.value);
    return node ? {node,file:node._file,definition:entry.definition} : null;
  }
  return {parsed,deref,enumKey,walk,buffTemplate};
}
