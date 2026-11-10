import { checkDataFileShape, retainItem } from '../data-files.mjs';
import { dataFile } from '../candidate.mjs';
import { compare } from './common.mjs';
import { checkSchemaMigration, RELEASE_SCHEMA_VERSION } from '../schema-migration.mjs';

export function combineItem(extracted, previous) {
  const item = structuredClone(extracted);
  delete item.retainedFrom;
  for (const field of ['explanation', 'citations', 'errata']) {
    delete item[field];
    if (Object.hasOwn(previous, field)) item[field] = structuredClone(previous[field]);
  }
  return item;
}

// Shared by verification and publication: no IO or mutation of its inputs.
export function composeFinal({ category, status, candidate, extract, previous, rows, version,
  targetSchemaVersion = candidate?.schemaVersion ?? previous?.schemaVersion ?? RELEASE_SCHEMA_VERSION }) {
  checkSchemaMigration(targetSchemaVersion, targetSchemaVersion);
  if (candidate && candidate.schemaVersion !== targetSchemaVersion)
    throw new Error('候選 schemaVersion 與發布目標不一致');
  const retaining = status === 'kept-previous' || rows.some(row => row.category === category && ['kept-previous', 'combined'].includes(row.decision));
  if (retaining && previous) checkSchemaMigration(previous.schemaVersion, targetSchemaVersion);
  if (status === 'kept-previous')
    return dataFile(category, version, (previous?.items ?? []).map((item) => retainItem(item, previous))
      .sort((a, b) => compare(a.id, b.id)), targetSchemaVersion);
  const current = new Map((candidate?.items ?? []).map((item) => [item?.id, item]));
  const old = new Map((previous?.items ?? []).map((item) => [item?.id, item]));
  const fresh = new Map((extract?.items ?? []).map(item => [item?.id, item]));
  const items = rows.filter((row) => row.category === category && row.decision !== 'excluded').map((row) => {
    if (row.decision === 'kept-previous') {
      if (!old.has(row.id)) throw new Error(`缺少上一版項目：${row.id}`);
      return retainItem(old.get(row.id), previous);
    }
    if (row.decision === 'combined') {
      if (!old.has(row.id) || !fresh.has(row.id)) throw new Error(`缺少組合項目：${row.id}`);
      if (previous.schemaVersion !== targetSchemaVersion) {
        // Fresh extract fields must not conceal an invalid predecessor promotion.
        const promoted = dataFile(category, version, [retainItem(old.get(row.id), previous)], targetSchemaVersion);
        const check = checkDataFileShape(category, promoted);
        if (!check.valid) throw new Error(`schemaVersion 保留提升驗證失敗：${check.errors.map(error => `${error.path} ${error.message}`).join('；')}`);
      }
      return combineItem(fresh.get(row.id), old.get(row.id));
    }
    if (row.decision !== 'pass' || !current.has(row.id)) throw new Error(`候選項目或檢查決策不符：${row.id}`);
    return structuredClone(current.get(row.id));
  }).sort((a, b) => compare(a.id, b.id));
  return dataFile(category, version, items, targetSchemaVersion);
}
