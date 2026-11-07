import { createHash } from 'node:crypto';
export const header = { schemaVersion: '1.1.0', gameVersion: '1.13.4', sourceCommit: 'e46b8926cfa3fa35503e4b80b15aab7a804314e4', textBatch: '26101089' };
export const empty = () => ({ effect: '', conditions: '', calculation: '', notes: '', extra: '' });
export const hash = (bytes) => createHash('sha256').update(bytes).digest('hex');
export function term() {
  return { id: 'darktide:term:test', key: 'test', name: { en: 'Test', zh: '測試', origin: 'official' },
    official: { en: null, zh: null }, values: { category: 'keyword', context: 'test.context', refs: [], params: {} },
    source: { commit: header.sourceCommit, files: [{ path: 'scripts/test.lua', line: 1 }],
      scriptVersion: 'pipeline/extract-terms.mjs@1.0.0', text: { batch: header.textBatch, keys: {} } } };
}
export function inputs(text = '有效。', item = term()) {
  const extracts = Object.fromEntries(['weapons', 'blessings', 'skills', 'terms'].map(category =>
    [category, { ...header, category, status: 'ok', items: category === 'terms' ? [item] : [] }]));
  const value = { kind: 'terms', source: { records: [{ kind: 'term', recordId: 'old:term', payload: { termKey: item.key } }] },
    web: { termLocalizations: [{ locale: 'zh-TW', termRef: { recordId: 'old:term' }, contextKey: item.values.context, definition: text, label: '舊標籤' }] } };
  return { extracts, documents: [{ path: 'domains/terms.json', sha256: hash(JSON.stringify(value)), value }],
    provenance: { contentVersion: '1.13.4.5', dataRevision: 'fixture', files: [] }, translation: '' };
}
