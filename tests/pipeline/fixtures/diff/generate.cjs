const fs = require('node:fs');
const path = require('node:path');
const base = __dirname;
const sort = (o) => Array.isArray(o) ? o.map(sort) : o && typeof o === 'object' ? Object.fromEntries(Object.keys(o).sort().map((k) => [k, sort(o[k])])) : o;
function write(file, data) { const target = path.join(base, file); fs.mkdirSync(path.dirname(target), { recursive: true }); fs.writeFileSync(target, JSON.stringify(sort(data)) + '\n'); }
const a = '0'.repeat(40), b = '1'.repeat(40);
write('data/current.json', { schemaVersion: '1.0.0', gameVersion: '1.0', path: 'data/1.0', sourceCommit: a, textBatch: 'example-batch', versions: ['1.0'] });
for (const category of ['skills', 'weapons', 'blessings', 'terms']) {
  const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../../../pipeline/schema/examples/0.0.0-example', category + '.json')));
  const template = data.items[0];
  const items = ['a', 'b', 'c'].map((suffix) => { const item = structuredClone(template); item.id = item.id.replace(/[^:]+$/, 'fixture_' + suffix); item.name.en = 'Example ' + suffix; item.official = { en: 'Example ability', zh: '範例' }; item.values.params.test = { value: 10 }; return item; });
  data.gameVersion = '1.0'; data.items = items; write('data/1.0/' + category + '.json', data);
  const now = items.filter((x) => !x.id.endsWith('_c')).map((x) => { const item = structuredClone(x); delete item.errata; delete item.explanation; item.source.commit = b; item.source.files[0].line = 20; if (item.id.endsWith('_b')) item.values.params.test.value = 11; return item; });
  const added = structuredClone(now[0]); added.id = added.id.replace(/_a$/, '_d'); now.push(added);
  if (category === 'weapons') { now[1].values.params.test.value = 10; now[1].official.zh = '變更'; }
  write('extract-1.1/' + category + '.json', { schemaVersion: '1.0.0', category, gameVersion: '1.1', sourceCommit: b, textBatch: 'example-batch', scriptVersion: 'pipeline/extract-skills.mjs@1.0.0', status: 'ok', reason: null, problems: [], excluded: [], items: now });
}
const mismatch = JSON.parse(fs.readFileSync(path.join(base, 'extract-1.1/terms.json'))); mismatch.status = 'structure-mismatch'; mismatch.reason = '結構不符'; mismatch.items = []; write('terms-mismatch.json', mismatch);
fs.writeFileSync(path.join(base, 'glossary.md'), '- Example - 範例\n- ability - 能力\n- ample - 不應命中\n- Other - 其他\n');
