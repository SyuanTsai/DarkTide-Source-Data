import { mkdir, writeFile, rename } from 'node:fs/promises';
import { dirname } from 'node:path';

export function canonicalize(value) {
  const visit = (v, path, ancestors) => {
    if (v === null || typeof v === 'string' || typeof v === 'boolean') return v;
    if (typeof v === 'number' && Number.isFinite(v)) return v;
    if (typeof v !== 'object') throw new TypeError(`Invalid value at ${path}`);
    if (ancestors.has(v)) throw new TypeError(`Circular value at ${path}`);
    if (
      !Array.isArray(v) &&
      Object.getPrototypeOf(v) !== Object.prototype &&
      Object.getPrototypeOf(v) !== null
    )
      throw new TypeError(`Non-plain object at ${path}`);
    const next = new Set(ancestors).add(v);
    if (Array.isArray(v))
      return Array.from({ length: v.length }, (_, i) => visit(v[i], `${path}/${i}`, next));
    return Object.fromEntries(
      Object.keys(v)
        .sort()
        .map((k) => [
          k,
          visit(v[k], `${path}/${k.replaceAll('~', '~0').replaceAll('/', '~1')}`, next),
        ]),
    );
  };
  return visit(value, '', new Set());
}
export const stringifyCanonical = (value) => JSON.stringify(canonicalize(value)) + '\n';

export function isCanonicalText(text) {
  try {
    return text === stringifyCanonical(JSON.parse(text));
  } catch {
    return false;
  }
}

export async function writeCanonicalFile(file, value) {
  const text = stringifyCanonical(value);
  await mkdir(dirname(file), { recursive: true });
  const temp = `${file}.${process.pid}.tmp`;
  await writeFile(temp, text);
  await rename(temp, file);
}
