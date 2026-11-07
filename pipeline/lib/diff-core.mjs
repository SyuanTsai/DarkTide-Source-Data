import { createHash } from 'node:crypto';
import { stringifyCanonical } from './canonical-json.mjs';

export const COMPARED_FIELDS = ['key', 'name', 'official', 'values', 'aliases'];
export function contentHash(category, item) {
  const value = { category };
  for (const field of COMPARED_FIELDS) if (Object.hasOwn(item, field)) value[field] = item[field];
  return createHash('sha256').update(stringifyCanonical(value)).digest('hex');
}
export function diffCategory(category, previousItems, currentItems) {
  const previous = new Map(previousItems.map((item) => [item.id, item]));
  const current = new Map(currentItems.map((item) => [item.id, item]));
  const result = { added: [], changed: [], removed: [], unchanged: [] };
  for (const id of [...new Set([...previous.keys(), ...current.keys()])].sort()) {
    const a = previous.get(id), b = current.get(id);
    result[!a ? 'added' : !b ? 'removed' : contentHash(category, a) === contentHash(category, b) ? 'unchanged' : 'changed'].push(id);
  }
  return result;
}
export function inputHashFor(category, change, currentItem, previousItem, effectTask) {
  const hash=contentHash(category, change === 'removed' ? previousItem : currentItem);
  return effectTask?createHash('sha256').update(stringifyCanonical({contentHash:hash,effectPolicy:'official-effect-v1',...effectTask})).digest('hex'):hash;
}
