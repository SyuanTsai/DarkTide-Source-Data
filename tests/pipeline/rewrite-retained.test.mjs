import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { cp, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from './test-env.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { itemFileName } from '../../pipeline/lib/cloud-dir.mjs';
import { CATEGORIES } from '../../pipeline/lib/data-files.mjs';
import { inputHashFor } from '../../pipeline/lib/diff-core.mjs';
import { valuesFingerprint } from '../../pipeline/lib/retained-explanations.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';

const fixture = 'tests/pipeline/fixtures/diff';
const meta = { gameVersion: '1.1', sourceCommit: '1'.repeat(40), textBatch: 'example-batch' };
const skill = 'darktide:skill:psyker:fixture_a';
const changed = 'darktide:skill:psyker:fixture_b';
const removed = 'darktide:skill:psyker:fixture_c';
const added = 'darktide:skill:psyker:fixture_d';
const blessing = 'darktide:blessing:fixture_a';
const unselected = 'darktide:weapon:example_family:fixture_a';
const unmarked = 'darktide:term:keyword:fixture_a';
const read = async (path) => JSON.parse(await readFile(path, 'utf8'));
const save = (path, value) => writeFile(path, stringifyCanonical(value));

async function setup(t, gameVersion = meta.gameVersion) {
  const root = await mkdtemp(join(tmpdir(), 'darktide-rewrite-retained-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const state = join(root, 'state.json'), cloud = join(root, 'cloud'), list = join(root, 'ids.json');
  const data = join(root, 'data'), work = join(root, 'work'), extract = join(work, 'extract');
  const base = join(cloud, gameVersion), translation = join(root, 'Translation.md');
  await mkdir(work);
  await mkdir(cloud);
  await cp(join(fixture, 'data'), data, { recursive: true });
  await cp(join(fixture, 'extract-1.1'), extract, { recursive: true });
  await save(list, [skill, blessing]);
  const initial = startRun(emptyState(), { ...meta, gameVersion });
  initial.retainedExplanations = {};
  for (const [category, ids] of [['skills', [skill, changed, removed, added]], ['blessings', [blessing]], ['weapons', [unselected]]]) {
    const { items, gameVersion, sourceCommit, textBatch } = await read(join(data, '1.0', category + '.json'));
    for (const id of ids) {
      initial.retainedExplanations[id] = {
        category, explanationFrom: { gameVersion, sourceCommit, textBatch },
        valuesFingerprint: valuesFingerprint(category, items.find(item => item.id === id)?.values ?? {}),
        valuesChanged: false,
      };
    }
  }
  await writeState(state, initial);
  const args = ['--state', state, '--work-dir', work, '--data-dir', data, '--cloud-dir', cloud, '--glossary', translation];
  const cli = (script, ...extra) => spawnSync(process.execPath, ['pipeline/' + script + '.mjs', ...extra], { encoding: 'utf8' });
  const diff = (...extra) => cli('diff', ...args, ...extra);
  const run = (...extra) => {
    const result = diff(...extra);
    assert.equal(result.status, 0, result.stderr);
    return result.stdout;
  };
  const rewrite = ['--rewrite-retained', list];
  const input = id => read(join(base, 'ai/input', itemFileName(id)));
  const report = () => read(join(base, 'diff/diff.json'));
  return { root, state, cloud, list, data, extract, base, translation, cli, diff, run, rewrite, input, report };
}

async function snapshot(dir) {
  const files = {};
  for (const entry of await readdir(dir, { recursive: true, withFileTypes: true })) {
    const path = join(entry.parentPath, entry.name);
    if (entry.isFile()) files[path.slice(dir.length + 1).replaceAll('\\', '/')] = await readFile(path);
  }
  return files;
}

async function describe(f, overrides = {}) {
  const { id, inputHash, previous } = await f.input(skill);
  const { effectOrigin, ...explanation } = previous.explanation;
  const output = { schemaVersion: '1.0.0', id, inputHash,
    explanation: { ...explanation, notes: '重新撰寫的補充' }, errata: [], ...overrides };
  const dir = join(f.base, 'ai/output');
  await mkdir(dir, { recursive: true });
  await save(join(dir, itemFileName(id)), output);
  assert.match(f.run('--mark-described', id), /已標記/);
  assert.equal((await read(f.state)).run.items[id].stage, 'described');
  return output;
}

async function rejectsWithoutWrites(f, args, message, problem) {
  const stateBefore = await readFile(f.state), cloudBefore = await snapshot(f.cloud);
  const result = f.diff(...args);
  assert.equal(result.status, 1, result.stderr);
  assert.match(result.stderr, /^錯誤：/);
  assert.match(result.stderr, message);
  if (problem !== undefined) assert.ok(result.stderr.includes(problem), result.stderr);
  assert.deepEqual(await readFile(f.state), stateBefore);
  assert.deepEqual(await snapshot(f.cloud), cloudBefore);
}

// Scenario: a list selects unchanged retained items and an already changed retained item. Purpose: enroll only the selected unchanged items without duplicating existing changes.
test('InterT10_selected retained items become changed and enter pending', async t => {
  const f = await setup(t);
  await save(f.list, [changed, blessing, skill]);
  assert.match(f.run(...f.rewrite), /沿用說明改寫：3 項/);
  const state = await read(f.state), report = await f.report();
  const pending = JSON.parse(f.run('--pending', '--json')).map(item => item.id);
  for (const [id, category] of [[skill, 'skills'], [blessing, 'blessings'], [changed, 'skills']]) {
    const input = await f.input(id);
    const previous = (await read(join(f.data, '1.0', category + '.json'))).items.find(item => item.id === id);
    assert.equal(state.run.items[id].change, 'changed');
    assert.equal(state.run.items[id].inputHash, inputHashFor(category, 'changed', input.item, previous));
    assert.equal(input.inputHash, state.run.items[id].inputHash);
    assert.equal(input.change, 'changed');
    assert.deepEqual(input.previous.explanation, previous.explanation);
    assert.deepEqual(input.previous.citations, previous.citations);
    assert.deepEqual(input.previous.errata, previous.errata);
    assert.ok(pending.includes(id));
  }
  assert.deepEqual(report.categories.skills.changed, [skill, changed]);
  assert.deepEqual(report.categories.blessings.changed, [blessing, 'darktide:blessing:fixture_b']);
  assert.ok(report.categories.weapons.unchanged.includes(unselected));
  assert.ok(!Object.hasOwn(state.run.items, unselected));
  assert.ok(!pending.includes(unselected));
  await assert.rejects(f.input(unselected), { code: 'ENOENT' });
});

// Scenario: during same-version regeneration, only one of two selected items receives rewritten output. Purpose: clear the passing rewrite's marker and preserve the fallback's marker.
test('InterT20_mark-described and verify clear only the passing rewrite marker', async t => {
  const gameVersion = '1.0';
  const f = await setup(t, gameVersion);
  const sources = [{ path: 'scripts/example.lua', line: 1 }];
  const valueRefs = ['/params/bonus/value', '/params/test/value'];
  const conditions = '提升25%，最多10層';
  const citations = [{ section: 'conditions', text: conditions, codeRefs: [], valueRefs }];
  const errata = [{ locale: 'en', official: '9', corrected: '10', valueRefs: ['/params/test/value'], sources,
    anchor: { field: 'official', locale: 'en', text: 'Example ability 9', occurrence: 1 } }];
  for (const category of CATEGORIES) {
    const paths = [join(f.data, '1.0', category + '.json'), join(f.extract, category + '.json')];
    for (const path of paths) {
      const file = await read(path);
      file.schemaVersion = '1.2.0';
      file.gameVersion = gameVersion;
      for (const item of file.items) {
        if (category === 'weapons') Object.assign(item.values, { bars: [], curves: [], attackCombos: [] });
        if (item.explanation && ['skills', 'blessings'].includes(category)) {
          Object.assign(item.explanation, { effect: item.official.zh, effectOrigin: 'official' });
          if (item.id === blessing) item.explanation.conditions = '效果為20%，最多10層';
        }
        if (item.id === skill) {
          item.official.en = 'Example ability 9';
          item.source.valueSources = Object.fromEntries(valueRefs.map(ref => [ref, sources]));
          if (item.explanation) {
            item.explanation.conditions = conditions;
            Object.assign(item, { citations, errata });
          }
        }
      }
      await save(path, file);
    }
  }
  f.run();
  const baseline = await f.report();
  assert.ok(baseline.categories.skills.unchanged.includes(skill));
  assert.ok(baseline.categories.blessings.unchanged.includes(blessing));
  f.run(...f.rewrite);
  const { previous, lockedEffect } = await f.input(skill);
  assert.deepEqual(previous.citations, citations);
  assert.deepEqual(previous.errata, errata);
  const notes = '重新撰寫的補充';
  const output = await describe(f, {
    explanation: { effect: lockedEffect, conditions, calculation: '', notes, extra: '' },
    citations: [...citations, { section: 'notes', text: notes, codeRefs: [], valueRefs }],
    errata,
  });
  await writeFile(f.translation, '# 譯名\n');
  const verified = f.cli('verify', '--root', f.root, '--state', f.state, '--cloud-dir', f.cloud, '--translation', f.translation, '--issues', 'off');
  assert.equal(verified.status, 0, verified.stderr || verified.stdout);
  const report = await read(join(f.base, 'verify/report.json'));
  const rewritten = report.items.find(item => item.id === skill);
  const fallback = report.items.find(item => item.id === blessing);
  assert.equal(rewritten.decision, 'pass', JSON.stringify(rewritten));
  assert.ok(['combined', 'kept-previous'].includes(fallback.decision), JSON.stringify(fallback));
  const state = await read(f.state);
  assert.equal(state.run.items[skill].stage, 'verified');
  assert.ok(!Object.hasOwn(state.retainedExplanations, skill));
  assert.ok(Object.hasOwn(state.retainedExplanations, blessing));
  const merged = await read(join(f.base, 'verify/out/data', gameVersion, 'skills.json'));
  assert.deepEqual(merged.items.find(item => item.id === skill).explanation, { ...output.explanation, effectOrigin: 'official' });
});

// Scenario: the same list is reused after marking one item described, then omitted. Purpose: preserve bytes and stage on resume and remove unwritten registrations without the option.
test('InterT30_repeating the list preserves bytes and described stage', async t => {
  const f = await setup(t);
  f.run(...f.rewrite);
  await describe(f);
  const before = await snapshot(f.cloud), stateBefore = await readFile(f.state);
  for (let attempt = 0; attempt < 2; attempt++) {
    f.run(...f.rewrite);
    assert.deepEqual(await snapshot(f.cloud), before);
    assert.deepEqual(await readFile(f.state), stateBefore);
    assert.equal((await read(f.state)).run.items[skill].stage, 'described');
  }
  f.run();
  const state = await read(f.state), report = await f.report();
  assert.ok(report.categories.skills.unchanged.includes(skill));
  assert.ok(report.categories.blessings.unchanged.includes(blessing));
  for (const id of [skill, blessing]) {
    assert.ok(!Object.hasOwn(state.run.items, id));
    assert.ok(Object.hasOwn(state.retainedExplanations, id));
  }
});

const invalidLists = [
  ['unreadable file', null, /無法讀取/, 'ids.json'],
  ['malformed JSON', '{', /JSON 格式錯誤/, 'ids.json'],
  ['non-array JSON', '{}', /陣列/, 'ids.json'],
  ['empty array', '[]', /不可為空/, 'ids.json'],
  ['non-string element', JSON.stringify([skill, 42]), /非空字串/, '42'],
  ['empty string element', JSON.stringify([skill, '']), /非空字串/, '""'],
  ['whitespace-only element', JSON.stringify([skill, ' ']), /非空字串/, '" "'],
  ['duplicate id', JSON.stringify([skill, skill]), /重複/, skill],
  ['id absent from retainedExplanations', JSON.stringify([skill, unmarked]), /沿用說明標記/, unmarked],
  ['marker category mismatch', JSON.stringify([skill, blessing]), /類別.*不符/, blessing, async f => {
    const state = await read(f.state);
    state.retainedExplanations[blessing].category = 'skills';
    await writeState(f.state, state);
  }],
  ['missing extract', JSON.stringify([skill, blessing]), /missing/, blessing, f => rm(join(f.extract, 'blessings.json'))],
  ['structure-mismatch extract', JSON.stringify([skill, blessing]), /structure-mismatch/, blessing, async f => {
    const file = join(f.extract, 'blessings.json');
    const extract = await read(file);
    await save(file, { ...extract, status: 'structure-mismatch', reason: '測試結構不符', items: [] });
  }],
  ['added id', JSON.stringify([skill, added]), /added/, added],
  ['removed id', JSON.stringify([skill, removed]), /removed/, removed],
  ['id absent from both versions', JSON.stringify([skill, removed]), /unchanged.*changed/, removed, async f => {
    const file = join(f.data, '1.0/skills.json'), previous = await read(file);
    await save(file, { ...previous, items: previous.items.filter(item => item.id !== removed) });
  }],
];

for (const [scenario, contents, message, problem, prepare] of invalidLists) {
  // Scenario: a retained rewrite list fails one validation rule. Purpose: identify the invalid value or ID and leave existing state and cloud bytes intact.
  test(`InterT40_rejects ${scenario} without writing files`, async t => {
    const f = await setup(t);
    f.run();
    if (prepare) await prepare(f);
    if (contents === null) await rm(f.list);
    else await writeFile(f.list, contents);
    await rejectsWithoutWrites(f, f.rewrite, message, problem);
  });
}

// Scenario: the option is combined with another mode, repeated, or missing its value. Purpose: reject invalid CLI invocations before changing files.
test('InterT50_rejects conflicting modes and invalid option usage', async t => {
  const f = await setup(t);
  for (const args of [['--pending'], ['--mark-described', skill]]) {
    await rejectsWithoutWrites(f, [...args, ...f.rewrite], /不能同時指定/, args[0]);
  }
  await rejectsWithoutWrites(f, [...f.rewrite, ...f.rewrite], /參數重複/, '--rewrite-retained');
  await rejectsWithoutWrites(f, ['--rewrite-retained'], /參數缺少值/, '--rewrite-retained');
});

// Scenario: a diff runs with no rewrite option despite existing retained markers. Purpose: preserve the pre-change CLI summary and every output byte.
test('InterT60_plain diff matches the pre-change output bytes', async t => {
  const f = await setup(t);
  const stdout = f.run(), cloud = await snapshot(f.cloud);
  const output = { stdout, state: (await readFile(f.state)).toString('hex'),
    cloud: Object.fromEntries(Object.entries(cloud).map(([path, bytes]) => [path, bytes.toString('hex')])) };
  const digest = createHash('sha256').update(stringifyCanonical(output)).digest('hex');
  // Captured from the unmodified diff CLI at 14f0b49.
  assert.equal(digest, '5a3acbb3e7efa478714a9c7c57f8efd84574efd239b7886a6d8abe80a9c79418');
});
