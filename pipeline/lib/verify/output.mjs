import { checkDataFile, checkCurrent, checkVersionDir, checkFileConsistency } from '../data-files.mjs';
import { stringifyCanonical, writeCanonicalFile } from '../canonical-json.mjs';
import { join } from 'node:path';
import { rm } from 'node:fs/promises';
import { compare, failure, itemIndex, validationMessage } from './common.mjs';

export function decide(row, previous) {
  row.decision = row.failures.length ? previous?.items?.some((i) => i?.id === row.id) ? 'kept-previous' : 'excluded' : 'pass';
}
export function verifyMerged(loaded, categories, rows, checker = checkDataFile) {
  // Each retry must reject at least one previously passing row; termination is bounded by rows.length.
  for (let attempt = 0; attempt <= rows.length; attempt++) {
    const merged = {}, errors = [], knownExceptions = [];
    let changed = false;
    for (const [category, entry] of Object.entries(loaded)) {
      const categoryRows = rows.filter((r) => r.category === category);
      let data, selected = [];
      if (categories[category].status === 'kept-previous') data = entry.previous;
      else {
        selected = entry.candidate.items.map((item, index) => ({ item, row: categoryRows[index] }))
          .filter(({ row }) => row.decision !== 'excluded')
          .map(({ item, row }) => ({ item: row.decision === 'kept-previous' ? entry.previous.items.find((old) => old?.id === row.id) : item, row }))
          .concat(categoryRows.slice(entry.candidate.items.length).filter((row) => row.decision === 'kept-previous')
            .map((row) => ({ item: entry.previous.items.find((old) => old?.id === row.id), row })))
          .sort((a, b) => compare(a.item?.id ?? '', b.item?.id ?? ''));
        data = { ...entry.candidate, items: selected.map(({ item }) => item) };
      }
      if (!data) continue;
      merged[category] = data;
      for (const error of checker(category, stringifyCanonical(data)).errors) {
        const index = itemIndex(error.path), row = index === undefined ? null : selected[Number(index)]?.row;
        const knownPath = /^(\/items\/\d+\/source\/commit|\/items\/\d+\/source\/text\/batch)$/.test(error.path);
        if (row?.decision === 'kept-previous' && knownPath && ['Commit mismatch', 'Batch mismatch'].includes(error.message)) {
          knownExceptions.push({ category, id: row.id, message: validationMessage(error.message) });
        } else if (row?.decision === 'pass') {
          row.failures.push(failure('output', 'O_MERGED_INVALID', error.path.replace(/^\/items\/\d+/, ''), validationMessage(error.message)));
          decide(row, entry.previous); changed = true;
        } else errors.push({ category, path: error.path, message: validationMessage(error.message) });
      }
    }
    if (changed) continue;
    errors.push(...checkFileConsistency(Object.entries(merged).map(([category, value]) => ({ category, value })), ['schemaVersion'])
      .map((e) => ({ code: 'SCHEMA_VERSION_MISMATCH', path: e.path, message: '合併後類別的 schemaVersion 不一致，包含保留上一版時須人工處理' })));
    knownExceptions.sort((a, b) => compare(a.category, b.category) || compare(a.id, b.id) || compare(a.message, b.message));
    errors.sort((a, b) => compare(a.category ?? '', b.category ?? '') || compare(a.path, b.path) || compare(a.message, b.message));
    return { merged, errors, knownExceptions };
  }
  throw new Error('合併資料重試超過項目數');
}
export function checkOldVersions(root, current) {
  if (!current) return [];
  const check = checkCurrent(current.text);
  const errors = check.errors.map((e) => ({ path: `/data/current.json${e.path}`, message: validationMessage(e.message) }));
  if (check.valid)
    for (const version of [...current.value.versions].sort(compare))
      errors.push(...checkVersionDir(join(root, 'data', version)).errors.map((e) => ({ path: `/data/${version}${e.path}`, message: validationMessage(e.message) })));
  return errors;
}
export async function writeMerged(outDir, gameVersion, merged) {
  for (const category of ['skills', 'weapons', 'blessings', 'terms'])
    if (!Object.hasOwn(merged, category)) await rm(join(outDir, 'data', gameVersion, `${category}.json`), { force: true });
  for (const category of Object.keys(merged).sort(compare))
    await writeCanonicalFile(join(outDir, 'data', gameVersion, `${category}.json`), merged[category]);
}
