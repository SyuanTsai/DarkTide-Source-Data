export const escapePointer = (s) => String(s).replaceAll('~', '~0').replaceAll('/', '~1');

export function atPointer(value, pointer) {
  if (typeof pointer !== 'string' || !/^(\/([^~/]|~[01])*)+$/.test(pointer)) return undefined;
  for (const key of pointer.slice(1).split('/').map(s => s.replaceAll('~1', '/').replaceAll('~0', '~'))) {
    if (!value || typeof value !== 'object' ||
        (Array.isArray(value) && !/^(0|[1-9][0-9]*)$/.test(key)) || !Object.hasOwn(value, key)) return undefined;
    value = value[key];
  }
  return value;
}
