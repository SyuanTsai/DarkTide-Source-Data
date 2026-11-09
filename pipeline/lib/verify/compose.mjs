import { retainItem } from '../data-files.mjs';
import { dataFile } from '../candidate.mjs';
import { compare } from './common.mjs';
import { checkSchemaMigration, RELEASE_SCHEMA_VERSION } from '../schema-migration.mjs';

// Shared by verification and publication: no IO or mutation of its inputs.
export function composeFinal({ category, status, candidate, previous, rows, version,
  targetSchemaVersion = candidate?.schemaVersion ?? previous?.schemaVersion ?? RELEASE_SCHEMA_VERSION }) {
  checkSchemaMigration(targetSchemaVersion, targetSchemaVersion);
  if (candidate && candidate.schemaVersion !== targetSchemaVersion)
    throw new Error('候選 schemaVersion 與發布目標不一致');
  const retaining = status === 'kept-previous' || rows.some(row => row.category === category && row.decision === 'kept-previous');
  if (retaining && previous) checkSchemaMigration(previous.schemaVersion, targetSchemaVersion);
  if (status === 'kept-previous')
    return dataFile(category, version, (previous?.items ?? []).map((item) => retainItem(item, previous))
      .sort((a, b) => compare(a.id, b.id)), targetSchemaVersion);
  const current = new Map((candidate?.items ?? []).map((item) => [item?.id, item]));
  const old = new Map((previous?.items ?? []).map((item) => [item?.id, item]));
  const items = rows.filter((row) => row.category === category && row.decision !== 'excluded').map((row) => {
    if (row.decision === 'kept-previous') {
      if (!old.has(row.id)) throw new Error(`缺少上一版項目：${row.id}`);
      return retainItem(old.get(row.id), previous);
    }
    if (row.decision !== 'pass' || !current.has(row.id)) throw new Error(`候選項目或檢查決策不符：${row.id}`);
    return structuredClone(current.get(row.id));
  }).sort((a, b) => compare(a.id, b.id));
  return dataFile(category, version, items, targetSchemaVersion);
}
