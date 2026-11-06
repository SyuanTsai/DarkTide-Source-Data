import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, writeFileSync, cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import {
  checkDataFile,
  checkCurrent,
  checkVersionDir,
  compareVersions,
} from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical, isCanonicalText } from '../../pipeline/lib/canonical-json.mjs';
import { readState } from '../../pipeline/lib/state.mjs';
const base = 'pipeline/schema/examples',
  read = (p) => JSON.parse(readFileSync(p, 'utf8'));
const file = (c) => read(`${base}/0.0.0-example/${c}.json`);
test('canonical JSON', () => {
  assert.equal(stringifyCanonical({ b: 1, a: 2 }), stringifyCanonical({ a: 2, b: 1 }));
  assert.match(stringifyCanonical({}), /\n$/);
  assert.throws(() => stringifyCanonical({ a: NaN }), TypeError);
  assert.throws(() => stringifyCanonical({ a: undefined }), TypeError);
});
// Scenario: exercise the CLI fixture. Purpose: protect data validation.
test('UnitT10_examples and CLI', async (t) => {
  const root = mkdtempSync(join(tmpdir(), 'data-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'data'));
  cpSync(`${base}/0.0.0-example`, join(root, 'data', '0.0.0'), { recursive: true });
  cpSync(`${base}/current.json`, join(root, 'data', 'current.json'));
  mkdirSync(join(root, 'pipeline'));
  cpSync('pipeline/state.json', join(root, 'pipeline', 'state.json'));
  for (const c of ['skills', 'weapons', 'blessings', 'terms'])
    assert.equal(
      checkDataFile(c, readFileSync(`${base}/0.0.0-example/${c}.json`, 'utf8')).valid,
      true,
    );
  assert.equal(checkCurrent(readFileSync(`${base}/current.json`, 'utf8')).valid, true);
  assert.equal(checkVersionDir(join(root, 'data', '0.0.0')).valid, true);
  assert.equal(spawnSync(process.execPath, ['pipeline/validate.mjs', '--root', root]).status, 0);
  assert.equal(isCanonicalText(readFileSync('pipeline/state.json', 'utf8')), true);
  await readState('pipeline/state.json');
  assert.equal(spawnSync(process.execPath, ['pipeline/validate.mjs']).status, 0);
});
test('invalid data are rejected', () => {
  const mutate = (c, fn) => {
    const x = file(c);
    fn(x);
    assert.equal(checkDataFile(c, stringifyCanonical(x)).valid, false);
  };
  mutate('skills', (x) => delete x.items[0].explanation.notes);
  mutate('skills', (x) => (x.items[0].explanation.effect = ''));
  mutate('skills', (x) => (x.items[0].id = 'darktide:weapon:wrong'));
  mutate('skills', (x) => (x.items[0].values.params.bonus.unknown = 'DYNAMIC_VALUE'));
  mutate('skills', (x) => delete x.items[0].values.params.unknown_example.unknown);
  mutate('skills', (x) => (x.items[0].name.en = null));
  mutate('blessings', (x) => (x.items[0].values.tiers[1].tier = 1));
  mutate('blessings', (x) => (x.items[0].values.tiers[1].tier = 5));
  mutate('terms', (x) => delete x.items[0].source.glossary);
  mutate('terms', (x) => x.items.reverse());
  mutate('terms', (x) => x.items.push(x.items[1]));
  mutate('skills', (x) => (x.items[0].source.scriptVersion = 'bad'));
  mutate('skills', (x) => (x.extra = true));
  assert.equal(checkDataFile('skills', JSON.stringify(file('skills'), null, 2)).valid, false);
  const c = read(`${base}/current.json`);
  c.path = 'data/wrong';
  assert.equal(checkCurrent(stringifyCanonical(c)).valid, false);
  assert.equal(compareVersions('1.9', '1.10'), -1);
});
// Scenario: exercise the CLI fixture. Purpose: protect data validation.
test('UnitT20_current and directory consistency failures', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'data-invalid-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'data'));
  cpSync(`${base}/0.0.0-example`, join(root, 'data', '0.0.0'), { recursive: true });
  mkdirSync(join(root, 'pipeline'));
  cpSync('pipeline/state.json', join(root, 'pipeline', 'state.json'));
  let current = read(`${base}/current.json`);
  current.versions = ['1.10.0', '1.9.0'];
  assert.equal(checkCurrent(stringifyCanonical(current)).valid, false);
  current = read(`${base}/current.json`);
  current.versions = ['0.0.1'];
  assert.equal(checkCurrent(stringifyCanonical(current)).valid, false);
  current = read(`${base}/current.json`);
  writeFileSync(join(root, 'data', 'current.json'), stringifyCanonical(current));
  mkdirSync(join(root, 'data', '1.0'));
  assert.equal(spawnSync(process.execPath, ['pipeline/validate.mjs', '--root', root]).status, 1);
  const weapon = join(root, 'data', '0.0.0', 'weapons.json');
  const w = read(weapon);
  w.sourceCommit = '1'.repeat(40);
  w.items[0].source.commit = w.sourceCommit;
  writeFileSync(weapon, stringifyCanonical(w));
  assert.equal(checkVersionDir(join(root, 'data', '0.0.0')).valid, false);
});
// Scenario: exercise the CLI fixture. Purpose: protect data validation.
test('UnitT30_missing current is allowed', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'data-empty-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const r = spawnSync(process.execPath, ['pipeline/validate.mjs', '--root', root], {
    encoding: 'utf8',
  });
  assert.equal(r.status, 0);
  assert.match(r.stdout, /尚無正式版本/);
});

test('review data invariants', async () => {
  await readState(`${base}/state.json`);
  const text = stringifyCanonical({});
  assert.ok(text.endsWith('\n') && !text.endsWith('\n\n'));
  const x = file('skills');
  const { category, ...rest } = x;
  const unsorted = JSON.stringify({ ...rest, category }) + '\n';
  assert.deepEqual(
    checkDataFile('skills', unsorted).errors.map((e) => e.message),
    ['not canonical JSON'],
  );
  const current = read(`${base}/current.json`);
  Object.assign(current, {
    gameVersion: '1.10.0',
    path: 'data/1.10.0',
    versions: ['1.10.0', '1.9.0'],
  });
  const errors = checkCurrent(stringifyCanonical(current)).errors;
  assert.equal(errors.length, 1);
  assert.match(errors[0].message, /sorted/);
  const internal = file('skills');
  internal.items[0].name = { origin: 'internal', en: null, zh: null };
  assert.equal(checkDataFile('skills', stringifyCanonical(internal)).valid, false);
  internal.items[0].name.en = 'different';
  assert.ok(
    checkDataFile('skills', stringifyCanonical(internal)).errors.some(
      (e) => e.path === '/items/0/name/en',
    ),
  );
  for (const pointer of ['/params/~2/value', '/params/missing/value']) {
    const blessing = file('blessings');
    blessing.items[0].errata[0].valueRef = pointer;
    assert.ok(
      checkDataFile('blessings', stringifyCanonical(blessing)).errors.some(
        (e) => e.path === '/items/0/errata/0/valueRef',
      ),
    );
  }
});

test('attributes and files use LF and no BOM', async () => {
  const { readdirSync } = await import('node:fs');
  const attributes = readFileSync('.gitattributes', 'utf8').split(/\r?\n/);
  for (const root of ['pipeline', 'data', 'docs/pipeline', 'tests/pipeline']) {
    assert.ok(attributes.includes(`/${root}/** text eol=lf`));
    const scan = (dir) => {
      for (const entry of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) scan(path);
        else
          assert.notDeepEqual(
            readFileSync(path).subarray(0, 3),
            Buffer.from([0xef, 0xbb, 0xbf]),
            path,
          );
      }
    };
    scan(root);
  }
});

// Scenario: errata references use invalid array tokens. Purpose: reject invalid indexes.
test('UnitT40_errata references reject invalid array indexes', () => {
  for (const pointer of ['/tiers/length', '/tiers/01', '/tiers/99']) {
    const blessing = file('blessings');
    blessing.items[0].errata[0].valueRef = pointer;
    assert.ok(checkDataFile('blessings', stringifyCanonical(blessing)).errors.some(
      (e) => e.path === '/items/0/errata/0/valueRef',
    ), pointer);
  }
});

// Scenario: state has multiple schema violations. Purpose: prefix every CLI error with its file.
test('InterT10_multiple state errors each include the file', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'state-cli-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, 'pipeline'));
  writeFileSync(join(root, 'pipeline', 'state.json'), stringifyCanonical({ schemaVersion: 'bad', extra: true, lastProcessed: null, run: null }));
  const result = spawnSync(process.execPath, ['pipeline/validate.mjs', '--root', root], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  const lines = result.stderr.trim().split(/\r?\n/);
  assert.ok(lines.length >= 2);
  assert.ok(lines.every((line) => line.startsWith(`${join(root, 'pipeline', 'state.json')}: `)));
});
