import { checkDataFile, checkCurrent, checkVersionDir, checkFileConsistency } from '../data-files.mjs';
import { stringifyCanonical, writeCanonicalFile } from '../canonical-json.mjs';
import { join } from 'node:path';
import { compare, failure, itemIndex, validationMessage } from './common.mjs';
import { composeFinal } from './compose.mjs';
import { checkErrata } from './text.mjs';
import { releaseSchemaVersion } from '../schema-migration.mjs';

export function decide(row, previous) {
  row.decision = row.failures.length ? previous?.items?.some((i) => i?.id === row.id) ? 'kept-previous' : 'excluded' : 'pass';
}
export function verifyMerged(loaded, categories, rows, checker = checkDataFile, version, targetSchemaVersion) {
  try {
    targetSchemaVersion = releaseSchemaVersion([
      targetSchemaVersion, ...Object.values(loaded).map(entry => entry.candidate?.schemaVersion ?? entry.releaseSchemaVersion ?? entry.extract?.schemaVersion),
    ]);
  } catch (error) {
    return { merged: {}, errors: [{ code: 'SCHEMA_VERSION_MISMATCH', path: '/schemaVersion', message: error.message }] };
  }
  // Each retry must reject at least one previously passing row; termination is bounded by rows.length.
  for (let attempt = 0; attempt <= rows.length; attempt++) {
    const merged = {}, errors = [];
    let changed = false;
    for (const [category, entry] of Object.entries(loaded)) {
      const categoryRows = rows.filter((r) => r.category === category);
      let data;
      try { data = composeFinal({ category, status: categories[category].status, candidate: entry.candidate,
        previous: entry.previous, rows: categoryRows, version: version ?? entry.candidate, targetSchemaVersion }); }
      catch (error) {
        if (!error.message.includes('schemaVersion')) throw error;
        return { merged, errors: [{ code: 'SCHEMA_VERSION_MISMATCH', category, path: '/schemaVersion', message: error.message }] };
      }
      merged[category] = data;
    }
    const versionItems = Object.values(merged).flatMap(data => data.items ?? []);
    for (const [category, data] of Object.entries(merged)) {
      const entry = loaded[category];
      const selected = categories[category].status === 'ok'
        ? rows.filter(row => row.category === category && row.decision !== 'excluded').sort((a,b) => compare(a.id,b.id)) : [];
      for (const [index, item] of data.items.entries()) {
        if (!Array.isArray(item?.errata) || !item.errata.some(entry => entry?.anchor?.itemId !== undefined)) continue;
        const row = selected[index];
        for (const error of checkErrata(item, versionItems)) {
          if (row?.decision === 'pass') {
            row.failures.push(failure('output', 'O_MERGED_INVALID', error.path, error.message));
            decide(row, entry.previous); changed = true;
          } else errors.push({category, path:`/items/${index}${error.path}`, message:error.message});
        }
      }
      for (const error of checker(category, stringifyCanonical(data), versionItems).errors) {
        const index = itemIndex(error.path), row = index === undefined ? null : selected[Number(index)];
        if (row?.decision === 'pass') {
          row.failures.push(failure('output', 'O_MERGED_INVALID', error.path.replace(/^\/items\/\d+/, ''), validationMessage(error.message)));
          decide(row, entry.previous); changed = true;
        } else errors.push({ category, path: error.path, message: validationMessage(error.message) });
      }
    }
    if (changed) continue;
    errors.push(...checkFileConsistency(Object.entries(merged).map(([category, value]) => ({ category, value })), ['schemaVersion'])
      .map((e) => ({ code: 'SCHEMA_VERSION_MISMATCH', path: e.path, message: '合併後類別的 schemaVersion 不一致，包含保留上一版時須人工處理' })));
    errors.sort((a, b) => compare(a.category ?? '', b.category ?? '') || compare(a.path, b.path) || compare(a.message, b.message));
    return { merged, errors, targetSchemaVersion };
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
    await writeCanonicalFile(join(outDir, 'data', gameVersion, `${category}.json`), merged[category]);
}
