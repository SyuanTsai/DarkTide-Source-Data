import { tokenizeLua, parseLuaStatic, getTableField } from './lua-static-reader.mjs';

/** @param {string} source @returns {Object<string,string>} alias → repo-relative Lua module path. */
export function parseRequires(source) {
  const t = tokenizeLua(source), result = {};
  for (let i = 0; i < t.length - 4; i++) {
    if (t[i].value !== 'local' || t[i+1].type !== 'identifier' || t[i+2].value !== '=' || t[i+3].value !== 'require') continue;
    const value = t[i+4].value === '(' ? t[i+5] : t[i+4];
    if (value?.type === 'string') result[t[i+1].value] = value.value.replace(/\.lua$/, '') + '.lua';
  }
  return result;
}

/** Resolve a static local/require path. Unsupported expressions and cycles return null.
 * @returns {{node:object,file:string,line:number}|null}
 */
export function resolveReference(reader, file, dottedRef) {
  const chunks = new Map(), active = new Set();
  function chunk(f) {
    if (!chunks.has(f)) chunks.set(f, parseLuaStatic(reader.read(f), {filename:f, allowUnsupported:true}));
    return chunks.get(f);
  }
  function deref(f, node) {
    if (node?.type === 'reference') return resolve(f, node.ref);
    if (node?.type === 'require') {
      const target = node.path.replace(/\.lua$/, '') + '.lua';
      return returned(target);
    }
    return node && !['unsupported','call','function'].includes(node.type) ? {node,file:f,line:node.startLine} : null;
  }
  function guard(key, fn) {
    if (active.has(key)) return null;
    active.add(key);
    try { return fn(); } finally { active.delete(key); }
  }
  function returned(f) { return guard(f + ':return', () => deref(f, chunk(f).returned)); }
  function resolve(f, ref) {
    return guard(f + ':' + ref, () => {
      const [root,...parts] = ref.split('.');
      let result = deref(f, chunk(f).locals[root]);
      for (const part of parts) {
        if (!result) return null;
        result = deref(result.file, getTableField(result.node, part));
      }
      return result;
    });
  }
  try { return resolve(file, dottedRef); } catch (e) {
    if (e.name === 'LuaStaticError' || e.name === 'StructureError') return null;
    throw e;
  }
}
