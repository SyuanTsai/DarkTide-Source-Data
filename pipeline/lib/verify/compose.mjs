import { retainItem } from '../data-files.mjs';
import { dataFile } from '../candidate.mjs';
import { compare } from './common.mjs';

// Shared by verification and publication: no IO or mutation of its inputs.
export function composeFinal({ category, status, candidate, previous, rows, version }) {
  if (status === 'kept-previous')
    return dataFile(category, version, (previous?.items ?? []).map((item) => retainItem(item, previous))
      .sort((a, b) => compare(a.id, b.id)), previous?.schemaVersion);
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
  return dataFile(category, version, items, candidate?.schemaVersion);
}
