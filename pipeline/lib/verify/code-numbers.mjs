import { createHash } from 'node:crypto';
import { resolveSourceRepo } from '../inputs.mjs';
import { createSourceReader } from '../source-reader.mjs';
import { createCodeRefs, normalizeLua } from '../mechanics-code-refs.mjs';
import { tokenizeLua } from '../lua-static-reader.mjs';

// A minus following an expression-start token belongs to the next literal.
const unaryMinusAfter = new Set([
  '=', '(', '{', ',', '[', ';', '+', '-', '*', '/', '%', '^', '..',
  '==', '~=', '<', '>', '<=', '>=', '#', 'return', 'and', 'or', 'not',
]);
function luaNumbers(raw) {
  const tokens = tokenizeLua(raw);
  return tokens.flatMap((token, index) => {
    if (token.type !== 'number' || !Number.isFinite(token.value)) return [];
    const minus = tokens[index - 1], before = tokens[index - 2];
    const unary = minus?.type === 'symbol' && minus.value === '-' &&
      (!before || ((before.type === 'symbol' || before.type === 'keyword') && unaryMinusAfter.has(before.value)));
    return [unary ? -token.value : token.value];
  });
}
// Cache both successful and unsuccessful lookups for each immutable commit.
export function createCodeNumbers({ repo } = {}) {
  const commits = new Map();
  return (item, id) => {
    try {
      const commit = item?.source?.commit, ref = item?.source?.codeRefs?.[id];
      if (!ref || typeof ref.path !== 'string' || typeof ref.symbol !== 'string') return [];
      if (!commits.has(commit)) {
        try {
          const reader = createSourceReader({ repo: resolveSourceRepo({ repo }), commit });
          commits.set(commit, { refs: createCodeRefs(reader), cache: new Map() });
        } catch { commits.set(commit, null); }
      }
      const source = commits.get(commit);
      if (!source) return [];
      const key = `${ref.path}#${ref.symbol}`;
      if (!source.cache.has(key)) {
        let result = null;
        try {
          const def = source.refs.definition(ref.path, ref.symbol);
          if (def && def.file === ref.path) result = {
            hash: createHash('sha256').update(normalizeLua(def.raw), 'utf8').digest('hex'),
            numbers: luaNumbers(def.raw),
          };
        } catch { /* Invalid source cannot be evidence. */ }
        source.cache.set(key, result);
      }
      const result = source.cache.get(key);
      return result?.hash === ref.sha256 ? result.numbers : [];
    } catch { return []; }
  };
}
