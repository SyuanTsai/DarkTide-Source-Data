import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, mkdirSync, cpSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from './test-env.mjs';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';
import { checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { emptyState } from '../../pipeline/lib/state.mjs';
import { contentHash } from '../../pipeline/lib/diff-core.mjs';
import { composeCandidate } from '../../pipeline/lib/candidate.mjs';
import { checkText } from '../../pipeline/lib/verify/text.mjs';

const schemas = loadSchemas(resolve('pipeline/schema'));
const sample = c => JSON.parse(readFileSync(`pipeline/schema/examples/1.1.0-example/${c}.json`, 'utf8'));
const check = (c, x) => checkDataFile(c, stringifyCanonical(x));

test('effectOrigin contract across schema and data validation', () => {
  for (const c of ['blessings', 'skills']) {
    const x = sample(c);
    delete x.items[0].explanation.effectOrigin;
    assert.equal(check(c, x).valid, true);
    for (const origin of ['official', 'unofficial-translation']) {
      x.items[0].explanation.effectOrigin = origin;
      assert.equal(schemas.validate(`${c}.schema.json`, x).valid, true);
      assert.deepEqual(check(c, x).errors, []);
    }
    for (const origin of ['other', '', 1, null, false]) {
      x.items[0].explanation.effectOrigin = origin;
      assert.equal(schemas.validate(`${c}.schema.json`, x).valid, false);
      assert.equal(check(c, x).valid, false);
    }
    x.schemaVersion = '1.0.0'; x.items[0].explanation.effectOrigin = 'official';
    assert.equal(check(c, x).valid, false);
  }
  for (const c of ['weapons', 'terms']) {
    const x = sample(c); x.items[0].explanation.effectOrigin = 'official';
    assert.equal(check(c, x).valid, false);
  }
});

test('AI output cannot claim effectOrigin', () => {
  const item = sample('skills').items[0];
  const output = { schemaVersion: '1.0.0', id: item.id, inputHash: 'a'.repeat(64), explanation: { ...item.explanation }, errata: [] };
  delete output.explanation.effectOrigin;
  assert.equal(schemas.validate('ai-output.schema.json', output).valid, true);
  for (const origin of ['official', 'unofficial-translation']) {
    output.explanation.effectOrigin = origin;
    assert.equal(schemas.validate('ai-output.schema.json', output).valid, false);
  }
});

test('effectOrigin survives candidate and canonical JSON without affecting source hash or text checks', () => {
  const previous = sample('skills'), item = previous.items[0];
  item.explanation = { effect: '效果', conditions: '', calculation: '', notes: '', extra: '', effectOrigin: 'unofficial-translation' };
  item.errata = []; item.official = { en: null, zh: null }; item.values.params = {};
  const { explanation, errata, ...extracted } = item;
  assert.equal(contentHash('skills', item), contentHash('skills', extracted));
  const candidate = composeCandidate({ category: 'skills', run: { gameVersion: previous.gameVersion, sourceCommit: previous.sourceCommit, textBatch: previous.textBatch, items: {} }, extract: { status: 'ok', schemaVersion: '1.1.0', items: [extracted] }, previous, unchanged: [item.id] });
  assert.equal(JSON.parse(stringifyCanonical(candidate)).items[0].explanation.effectOrigin, 'unofficial-translation');
  assert.deepEqual(checkText(item, extracted, [], [], new Map()).failures, []);
});

test('validate CLI accepts legal origins and rejects disallowed category', t => {
  const root = mkdtempSync(join(tmpdir(), 'effect-origin-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'data')); mkdirSync(join(root, 'pipeline'));
  cpSync('pipeline/schema/examples/1.1.0-example', join(root, 'data', '0.0.0'), { recursive: true });
  const current = JSON.parse(readFileSync('pipeline/schema/examples/current.json', 'utf8')); current.schemaVersion = '1.1.0';
  writeFileSync(join(root, 'data', 'current.json'), stringifyCanonical(current));
  writeFileSync(join(root, 'pipeline', 'state.json'), stringifyCanonical(emptyState()));
  const run = () => spawnSync(process.execPath, ['pipeline/validate.mjs', '--root', root], { encoding: 'utf8' });
  for (const origin of ['official', 'unofficial-translation']) {
    for (const c of ['blessings', 'skills']) {
      const x = sample(c); x.items[0].explanation.effectOrigin = origin;
      writeFileSync(join(root, 'data', '0.0.0', `${c}.json`), stringifyCanonical(x));
    }
    const result = run();
    assert.equal(result.status, 0, result.stderr);
  }
  const bad = sample('terms'); bad.items[0].explanation.effectOrigin = 'official';
  writeFileSync(join(root, 'data', '0.0.0', 'terms.json'), stringifyCanonical(bad));
  assert.notEqual(run().status, 0);
});
