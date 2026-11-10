import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from './test-env.mjs';
import { writeCanonicalFile, stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { CATEGORIES, checkDataFile, retainItem } from '../../pipeline/lib/data-files.mjs';
import * as stateApi from '../../pipeline/lib/state.mjs';
import { runVerify } from '../../pipeline/lib/verify/index.mjs';
import { verifyMerged } from '../../pipeline/lib/verify/output.mjs';
import { combineItem } from '../../pipeline/lib/verify/compose.mjs';
import { runWrite } from '../../pipeline/lib/write.mjs';
import { diffCategory } from '../../pipeline/lib/diff-core.mjs';

const old = { gameVersion: '1.1.0', sourceCommit: 'b'.repeat(40), textBatch: 'old' };
const meta = { gameVersion: '1.2.0', sourceCommit: 'a'.repeat(40), textBatch: 'new' };
const ref = 'scripts/example.lua#templates.example';
const read = async path => JSON.parse(await readFile(path, 'utf8'));
const strip = ({ explanation, citations, errata, retainedFrom, ...item }) => structuredClone(item);
async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'combined-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const previous = {}, extract = {}, candidate = {};
  for (const category of CATEGORIES) {
    const sample = await read(`pipeline/schema/examples/${category === 'weapons' ? '1.1.0' : '0.0.0'}-example/${category}.json`);
    const item = sample.items[0];
    item.source.commit = old.sourceCommit; item.source.text.batch = old.textBatch;
    item.official = { en: null, zh: null }; item.errata = [];
    item.explanation = { effect: '提升25%', conditions: '', calculation: '', notes: '', extra: '' };
    item.values.params = { bonus: { value: 0.25 } };
    if (category === 'weapons') {
      Object.assign(item.values, { bars: [], curves: [], attackCombos: [], damageProfiles: [] });
    }
    if (category === 'skills') {
      item.explanation.effectOrigin = 'unofficial-translation';
      item.source.codeRefs = { [ref]: { path: 'scripts/example.lua', symbol: 'templates.example', sha256: 'c'.repeat(64) } };
      item.source.valueSources = { '/params/bonus/value': [{ path: 'scripts/example.lua', line: 1 }] };
      item.citations = [{ section: 'effect', text: '提升25%', codeRefs: [ref], valueRefs: ['/params/bonus/value'] }];
    }
    previous[category] = { ...sample, schemaVersion: '1.2.0', ...old, items: [item] };
    const fresh = strip(item); fresh.source.commit = meta.sourceCommit; fresh.source.text.batch = meta.textBatch;
    extract[category] = { schemaVersion: '1.2.0', category, ...meta, status: 'ok', reason: null, items: [fresh] };
    candidate[category] = { ...previous[category], ...meta, items: category === 'skills' ? [] : [{ ...fresh, explanation: item.explanation, errata: item.errata }] };
    assert.deepEqual(checkDataFile(category, stringifyCanonical(previous[category])).errors, []);
  }
  const id = previous.skills.items[0].id, state = join(root, 'state.json');
  let s = stateApi.startRun(stateApi.emptyState(), meta);
  s = stateApi.registerItem(s, id, { category: 'skills', change: 'changed', inputHash: '0'.repeat(64) });
  await stateApi.writeState(state, s);
  await writeFile(join(root, 'Translation.md'), '# 譯名\n');
  const options = { root, state, candidateDir: join(root, 'candidate'), extractDir: join(root, 'extract'),
    previousDir: join(root, 'previous'), versionInfo: join(root, 'version.json'), translation: join(root, 'Translation.md'),
    report: join(root, 'report.json'), outDir: join(root, 'out'), issues: 'off', sourceCodeRepo: join(root, 'no-source'),
    exec: () => { throw Error('禁止外部呼叫'); } };
  const save = async () => {
    const run = (await stateApi.readState(state)).run;
    await writeCanonicalFile(options.versionInfo, { sourceGameVersion: run.gameVersion, textGameVersion: run.gameVersion, sourceCommit: run.sourceCommit, textBatch: run.textBatch });
    for (const c of CATEGORIES) {
      await writeCanonicalFile(join(options.previousDir, `${c}.json`), previous[c]);
      await writeCanonicalFile(join(options.extractDir, `${c}.json`), extract[c]);
      await writeCanonicalFile(join(options.candidateDir, `${c}.json`), candidate[c]);
    }
  };
  const run = async () => { await save(); return runVerify(options); };
  return { root, id, state, previous, extract, candidate, options, run, save };
}
const rowFor = (r, id) => r.report.items.find(row => row.id === id);

// Scenario: only extracted name/official/source change, or values gain a derivable number.
// Purpose: publish fresh fields without adding release keys and track values against the explanation baseline.
test('InterT10_combined uses extract fields and values fingerprint', async t => {
  for (const changed of [false, true]) {
    const f = await fixture(t), fresh = f.extract.skills.items[0];
    fresh.name.zh = '新名稱'; fresh.official.en = 'New official text';
    fresh.source.codeRefs[ref].sha256 = 'f'.repeat(64);
    fresh.source.valueSources['/params/bonus/value'][0].line = 9;
    f.previous.skills.items[0].aliases = { gameslantern: { ids: ['old'] } };
    fresh.aliases = { gameslantern: { ids: ['new'] } };
    if (changed) fresh.values.params.bonus.value = 0.75;
    const r = await f.run(), row = rowFor(r, f.id), item = r.merged.skills.items[0];
    assert.equal(r.exitCode, 0); assert.equal(row.decision, 'combined', JSON.stringify(row));
    assert.deepEqual(row.combinationFailures, []);
    assert.deepEqual(item, { ...fresh, explanation: f.previous.skills.items[0].explanation,
      citations: f.previous.skills.items[0].citations, errata: [] });
    assert.deepEqual(Object.keys(item).sort(), Object.keys(f.previous.skills.items[0]).sort());
    for (const key of ['retainedFrom', 'explanationFrom', 'valuesChanged']) assert.ok(!Object.hasOwn(item, key));
    const state = await stateApi.readState(f.state);
    assert.deepEqual(state.run.items[f.id].explanationFrom, old);
    assert.equal(state.run.items[f.id].valuesChanged, changed);
    assert.equal(state.retainedExplanations[f.id].valuesChanged, changed);
    assert.equal(diffCategory('skills', [item], [strip(item)]).changed.length, 0);
  }
});

// Scenario: each combined item violates just one semantic rule; prior published data remains legal.
// Purpose: exercise text, citation, errata and value checks separately, preserving their failure codes.
test('InterT20_combination failures fall back with existing reason codes', async t => {
  for (const mode of ['number', 'citation', 'valueRef', 'anchor', 'errata', 'unknown']) {
    const f = await fixture(t), prev = f.previous.skills.items[0], fresh = f.extract.skills.items[0];
    let code;
    if (mode === 'number') {
      prev.explanation.effect = '提升25%，最多60%';
      prev.values.params.other = { value: 0.6 }; fresh.values.params.other = { value: 0.6 };
      fresh.values.params.bonus.value = 0.6; code = 'T_NUMBER';
    }
    if (mode === 'citation') { fresh.source.codeRefs = {}; code = 'V_CITATION_CODE'; }
    if (mode === 'valueRef') { fresh.source.valueSources = {}; code = 'V_CITATION_VALUE'; }
    if (['anchor', 'errata'].includes(mode)) {
      prev.official.en = 'Damage 10%'; fresh.official.en = mode === 'anchor' ? 'Power 10%' : 'Damage 10%';
      prev.errata = [{ locale: 'en', official: '10%', corrected: '25%', valueRefs: ['/params/bonus/value'],
        sources: [{ path: 'scripts/example.lua', line: 1 }], anchor: { field: 'official', locale: 'en', text: 'Damage 10%', occurrence: 1 } }];
      if (mode === 'errata') {
        prev.explanation.effect = '提升25%，最多50%';
        prev.values.params.other = { value: 0.5 };
        fresh.values.params.bonus.value = 0.5;
        fresh.values.params.other = { value: 0.25 };
      }
      code = mode === 'anchor' ? 'V_SCHEMA' : 'T_ERRATA_INVALID';
    }
    if (mode === 'unknown') {
      prev.values.params.other = { value: 0.25 }; fresh.values.params.other = { value: 0.25 };
      fresh.values.params.bonus = { value: null, unknown: 'DYNAMIC_VALUE' }; code = 'V_UNKNOWN_REGRESSION';
    }
    assert.deepEqual(checkDataFile('skills', stringifyCanonical(f.previous.skills)).errors, []);
    const r = await f.run(), row = rowFor(r, f.id);
    assert.equal(r.exitCode, 0, mode); assert.equal(row.decision, 'kept-previous', mode);
    assert.ok(row.combinationFailures.some(x => x.code === code), `${mode}: ${JSON.stringify(row)}`);
    assert.deepEqual([...new Set(row.combinationFailures.map(x => x.code))], [code], mode);
    assert.deepEqual(r.merged.skills.items[0], retainItem(prev, f.previous.skills));
    assert.deepEqual((await stateApi.readState(f.state)).run.items[f.id].explanationFrom, old);
    assert.equal((await stateApi.readState(f.state)).run.items[f.id].valuesChanged, false);
  }
});

// Scenario: official Chinese changes while the previous locked effect still contains valid numeric evidence.
// Purpose: reject a stale locked effect independently of numbers, citations and schema.
test('InterT25_combination checks the current locked effect', async t => {
  const f = await fixture(t), prev = f.previous.skills.items[0], fresh = f.extract.skills.items[0];
  prev.official.zh = '提升25%'; prev.explanation.effectOrigin = 'official';
  fresh.official.zh = '增加25%';
  delete prev.citations;
  const r = await f.run(), row = rowFor(r, f.id);
  assert.equal(row.decision, 'combined', JSON.stringify(row));
  assert.equal(r.merged.skills.items[0].explanation.effect, '增加25%');
  assert.equal(row.officialChanged, true);
  assert.equal((await stateApi.readState(f.state)).retainedExplanations[f.id].officialChanged, true);
});

// Scenario: the predecessor has an older supported schema and already satisfies the target shape.
// Purpose: keep legal cross-schema combinations available while rejecting invalid migrations.
test('InterT27_combined accepts a supported predecessor with a valid promoted shape', async t => {
  const f = await fixture(t);
  f.previous.weapons.schemaVersion = '1.1.0';
  f.candidate.weapons.items = [];
  assert.deepEqual(checkDataFile('weapons', stringifyCanonical(f.previous.weapons)).errors, []);
  const result = await f.run();
  assert.equal(result.exitCode, 0);
  assert.equal(rowFor(result, f.previous.weapons.items[0].id).decision, 'combined');
  assert.deepEqual(result.report.gates.output.errors, []);
});

// Scenario: a valid combination changes only its predecessor's schema to an unsupported future version.
// Purpose: verify and write must independently halt instead of bypassing the retention migration check.
for (const path of ['verify', 'write']) test(`InterT28_combined rejects unmigratable previous schema in ${path}`, async t => {
  const f = await fixture(t), good = await f.run();
  assert.equal(good.exitCode, 0);
  assert.equal(rowFor(good, f.id).decision, 'combined');
  assert.deepEqual(rowFor(good, f.id).combinationFailures, []);
  assert.deepEqual(good.report.gates.output.errors, []);
  f.previous.skills.schemaVersion = '1.3.0';
  await f.save();
  const before = await readFile(f.state);
  if (path === 'verify') {
    const result = await runVerify(f.options), row = rowFor(result, f.id);
    assert.equal(result.exitCode, 3);
    assert.equal(result.report.result, 'halted');
    assert.equal(result.report.gates.output.status, 'halted');
    assert.deepEqual(row.combinationFailures, []);
    assert.deepEqual(result.report.gates.output.errors, [{ code: 'SCHEMA_VERSION_MISMATCH', category: 'skills',
      path: '/schemaVersion', message: 'schemaVersion 不允許保留提升：1.3.0 → 1.2.0' }]);
    assert.equal((await stateApi.readState(f.state)).run.status, 'halted');
  } else {
    await assert.rejects(runWrite({ root: f.root, state: f.state, report: f.options.report,
      candidateDir: f.options.candidateDir, extractDir: f.options.extractDir, previousDir: f.options.previousDir }),
    /schemaVersion 不允許保留提升：1\.3\.0 → 1\.2\.0/);
    assert.deepEqual(await readFile(f.state), before);
  }
  await assert.rejects(readFile(join(f.root, 'data/current.json')), { code: 'ENOENT' });
});

// Scenario: the assembled category fails a final checker after a combined item passed item verification.
// Purpose: downgrade that row and retry rather than halt the batch.
test('UnitT30_combined merged failure retries whole-item retention', async t => {
  const f = await fixture(t), r = await f.run(), row = rowFor(r, f.id);
  assert.equal(row.decision, 'combined');
  const loaded = Object.fromEntries(CATEGORIES.map(c => [c, { candidate: f.candidate[c], extract: f.extract[c], previous: f.previous[c] }]));
  const output = verifyMerged(loaded, r.report.categories, r.report.items, (c, text, items) => {
    const data = JSON.parse(text);
    if (c === 'skills' && !data.items[0].retainedFrom) return { errors: [{ path: '/items/0/name', message: 'late validation' }] };
    return checkDataFile(c, text, items);
  }, { sourceGameVersion: meta.gameVersion, ...meta });
  assert.deepEqual(output.errors, []); assert.equal(row.decision, 'kept-previous');
  assert.ok(row.combinationFailures.some(x => x.code === 'O_MERGED_INVALID'));
  assert.deepEqual(output.merged.skills.items[0], retainItem(f.previous.skills.items[0], f.previous.skills));
});

// Scenario: an undescribed weapon now has a populated combo, and write is replayed after completion.
// Purpose: preserve new combo steps, guard extract bytes and publish exactly the verified output.
test('InterT40_weapon combos publish and write replay is byte identical', async t => {
  const f = await fixture(t), fresh = f.extract.weapons.items[0], id = fresh.id;
  const sample = await read('pipeline/schema/examples/1.1.0-example/weapons.json');
  fresh.values.attackCombos = sample.items[0].values.attackCombos;
  fresh.values.damageProfiles = sample.items[0].values.damageProfiles;
  f.candidate.weapons.items = [];
  let state = await stateApi.readState(f.state);
  state = stateApi.registerItem(state, id, { category: 'weapons', change: 'changed', inputHash: '1'.repeat(64) });
  await stateApi.writeState(f.state, state);
  const r = await f.run(); assert.equal(rowFor(r, id).decision, 'combined', JSON.stringify(rowFor(r, id)));
  const args = { root: f.root, state: f.state, candidateDir: f.options.candidateDir, extractDir: f.options.extractDir,
    previousDir: f.options.previousDir, report: f.options.report };
  const path = join(f.options.extractDir, 'weapons.json'), bytes = await readFile(path);
  await writeFile(path, Buffer.concat([bytes, Buffer.from(' ')]));
  await assert.rejects(runWrite(args), /extract.*變動/); await writeFile(path, bytes);
  await assert.rejects(runWrite({ ...args, afterCategory: category => {
    if (category === 'skills') throw Error('interrupted');
  } }), /interrupted/);
  const reverified = await runVerify(f.options);
  assert.deepEqual(reverified.writtenWarnings, []);
  assert.equal((await runWrite(args)).exitCode, 0);
  const outputPath = join(f.root, 'data', meta.gameVersion, 'weapons.json');
  const published = await read(outputPath);
  assert.ok(published.items[0].values.attackCombos.some(c => c.steps.length > 0));
  assert.deepEqual(published, r.merged.weapons);
  assert.deepEqual(await readFile(outputPath), await readFile(join(f.options.outDir, 'data', meta.gameVersion, 'weapons.json')));
  const paths = [...CATEGORIES.map(c => join(f.root, 'data', meta.gameVersion, `${c}.json`)), join(f.root, 'data/current.json'), f.state];
  const before = await Promise.all(paths.map(path => readFile(path)));
  assert.equal((await runWrite(args)).exitCode, 0);
  assert.deepEqual(await Promise.all(paths.map(path => readFile(path))), before);
});

// Scenario: new version/startRun and new inputHash rebuild registrations, then a genuinely rewritten explanation passes.
// Purpose: retain the earliest source and baseline across both combination and full retention, clearing only on rewrite.
test('InterT50_earliest explanation survives runs and clears only after rewrite', async t => {
  const f = await fixture(t);
  f.extract.skills.items[0].values.params.bonus.value = 0.75;
  const first = await f.run(); assert.equal(rowFor(first, f.id).decision, 'combined', JSON.stringify(rowFor(first, f.id)));
  const origin = (await stateApi.readState(f.state)).retainedExplanations[f.id];
  for (const mode of ['combined', 'kept-previous', 'unchanged', 'rewrite']) {
    const next = { gameVersion: `1.${3 + ['combined', 'kept-previous', 'unchanged', 'rewrite'].indexOf(mode)}.0`, sourceCommit: 'd'.repeat(40), textBatch: mode };
    const prior = mode === 'combined' ? first.merged : (await f.last).merged;
    for (const c of CATEGORIES) {
      f.previous[c] = structuredClone(prior[c]);
      f.extract[c] = { ...f.extract[c], ...next, items: prior[c].items.map(strip) };
      for (const item of f.extract[c].items) { item.source.commit = next.sourceCommit; item.source.text.batch = next.textBatch; }
      f.candidate[c] = { ...prior[c], ...next, items: f.extract[c].items.map((item, i) => ({ ...item,
        explanation: prior[c].items[i].explanation, errata: prior[c].items[i].errata,
        ...(prior[c].items[i].citations ? { citations: prior[c].items[i].citations } : {}) })) };
    }
    let state = stateApi.startRun(await stateApi.readState(f.state), next);
    state = stateApi.registerItem(state, f.id, { category: 'skills', change: 'changed', inputHash: '2'.repeat(64) });
    state = stateApi.registerItem(state, f.id, { category: 'skills', change: 'changed', inputHash: '3'.repeat(64) });
    assert.deepEqual(state.run.items[f.id].explanationFrom, old);
    if (mode === 'kept-previous') f.extract.skills.items[0].source.codeRefs = {};
    if (['unchanged', 'rewrite'].includes(mode)) state = stateApi.advanceItem(state, f.id, 'described');
    if (mode === 'rewrite') {
      f.candidate.skills.items[0].explanation = { ...f.candidate.skills.items[0].explanation, notes: '重新撰寫說明' };
      f.candidate.skills.items[0].citations = [...f.candidate.skills.items[0].citations,
        { section: 'notes', text: '重新撰寫說明', codeRefs: [ref], valueRefs: [] }];
    }
    await stateApi.writeState(f.state, state);
    f.last = f.run(); const result = await f.last;
    assert.equal(result.exitCode, 0); assert.equal(rowFor(result, f.id).decision, ['unchanged', 'rewrite'].includes(mode) ? 'pass' : mode);
    state = await stateApi.readState(f.state);
    if (mode === 'rewrite') {
      assert.ok(!state.retainedExplanations?.[f.id]);
      assert.ok(!Object.hasOwn(state.run.items[f.id], 'explanationFrom'));
      assert.ok(!Object.hasOwn(state.run.items[f.id], 'valuesChanged'));
    } else {
      assert.deepEqual(state.retainedExplanations[f.id], origin);
      assert.deepEqual(state.run.items[f.id].explanationFrom, old);
    }
  }
});

// Scenario: a prior retainedFrom predates the file header, and an entire category degrades.
// Purpose: honor provenance priority while leaving category retention unchanged.
test('InterT60_retainedFrom priority and whole category retention remain intact', async t => {
  const f = await fixture(t), prev = f.previous.skills.items[0];
  const earliest = { gameVersion: '1.0.0', sourceCommit: 'e'.repeat(40), textBatch: 'earliest' };
  prev.retainedFrom = earliest; prev.source.commit = earliest.sourceCommit; prev.source.text.batch = earliest.textBatch;
  const r = await f.run(); assert.equal(rowFor(r, f.id).decision, 'combined');
  assert.ok(!Object.hasOwn(r.merged.skills.items[0], 'retainedFrom'));
  assert.deepEqual((await stateApi.readState(f.state)).run.items[f.id].explanationFrom, earliest);
  f.extract.skills.status = 'structure-mismatch'; f.extract.skills.reason = 'fixture mismatch';
  const degraded = await f.run(); assert.equal(degraded.report.categories.skills.status, 'kept-previous');
  assert.deepEqual(degraded.merged.skills.items[0], retainItem(prev, f.previous.skills));
  assert.ok(!degraded.report.items.some(row => row.category === 'skills'));
});

// Scenario: retained explanations include changed and unchanged values across categories.
// Purpose: provide a sorted read-only query that needs no cloud or active run.
test('InterT70_retained explanations query sorts changed first and never writes', async t => {
  const f = await fixture(t); await f.run();
  const state = await stateApi.readState(f.state), marker = state.retainedExplanations[f.id];
  state.retainedExplanations['darktide:weapon:z'] = { ...marker, category: 'weapons', valuesChanged: true, officialChanged: true };
  state.retainedExplanations['darktide:skill:b'] = { ...marker, officialChanged: true };
  state.retainedExplanations['darktide:skill:a'] = { ...marker, valuesChanged: true };
  state.run = null; await stateApi.writeState(f.state, state);
  const before = await readFile(f.state), files = await readdir(f.root);
  const result = spawnSync(process.execPath, [resolve('pipeline/retained-explanations.mjs'), '--state', f.state], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), [
    { id: 'darktide:weapon:z', category: 'weapons', explanationFrom: old, valuesChanged: true, officialChanged: true },
    { id: 'darktide:skill:a', category: 'skills', explanationFrom: old, valuesChanged: true, officialChanged: false },
    { id: 'darktide:skill:b', category: 'skills', explanationFrom: old, valuesChanged: false, officialChanged: true },
    { id: f.id, category: 'skills', explanationFrom: old, valuesChanged: false, officialChanged: false },
  ]);
  assert.deepEqual(await readFile(f.state), before); assert.deepEqual(await readdir(f.root), files);
});


test('SYP391 citation coverage and invalid existing citations', async t => {
  for (const mode of ['missing', 'text', 'code', 'value', 'candidate']) {
    const f = await fixture(t), prev = f.previous.skills.items[0], fresh = f.extract.skills.items[0];
    if (mode === 'missing') delete prev.citations;
    if (mode === 'text') prev.citations[0].text = '錯誤';
    if (mode === 'code') fresh.source.codeRefs = {};
    if (mode === 'value') fresh.source.valueSources = {};
    if (mode === 'candidate') {
      f.candidate.skills.items = [{ ...fresh, explanation: { ...prev.explanation, notes: '新說明' }, errata: [] }];
      let state = await stateApi.readState(f.state);
      state = stateApi.advanceItem(state, f.id, 'described'); await stateApi.writeState(f.state, state);
    }
    const r = await f.run(), row = rowFor(r, f.id);
    if (mode === 'missing') assert.equal(row.decision, 'combined', JSON.stringify(row));
    else if (mode === 'candidate') assert.ok(row.failures.some(x => x.code === 'V-CITE'), JSON.stringify(row));
    else {
      assert.equal(row.decision, 'kept-previous');
      assert.deepEqual([...new Set(row.combinationFailures.map(x => x.code))], [{ text: 'V_CITATION_TEXT', code: 'V_CITATION_CODE', value: 'V_CITATION_VALUE' }[mode]]);
    }
  }
});

test('SYP391 official replacement persists across runs, writes identically and clears on rewrite', async t => {
  const f = await fixture(t), prev = f.previous.blessings.items[0], fresh = f.extract.blessings.items[0], id = prev.id;
  prev.official.zh = '提升25%'; prev.explanation.effectOrigin = 'official';
  fresh.official.zh = '增加25%'; fresh.name.zh = '新名稱'; f.candidate.blessings.items = [];
  let state = await stateApi.readState(f.state);
  state = stateApi.registerItem(state, id, { category: 'blessings', change: 'changed', inputHash: '4'.repeat(64) });
  await stateApi.writeState(f.state, state);
  const first = await f.run(), row = rowFor(first, id), item = first.merged.blessings.items[0];
  assert.equal(row.decision, 'combined', JSON.stringify(row)); assert.equal(row.officialChanged, true);
  assert.equal(item.explanation.effect, '增加25%'); assert.deepEqual(item.name, fresh.name); assert.deepEqual(item.official, fresh.official);
  assert.deepEqual(Object.keys(item).sort(), Object.keys(prev).sort());
  assert.ok(!Object.hasOwn(item, 'officialChanged') && !Object.hasOwn(item, 'retainedFrom'));
  const args = { root: f.root, state: f.state, candidateDir: f.options.candidateDir, extractDir: f.options.extractDir, previousDir: f.options.previousDir, report: f.options.report };
  const savedReport = await readFile(f.options.report);
  const altered = JSON.parse(savedReport); altered.items.find(x => x.id === id).lockedEffect = '修改25%';
  await writeCanonicalFile(f.options.report, altered);
  await assert.rejects(runWrite(args), /不一致/);
  await writeFile(f.options.report, savedReport);
  assert.equal((await runWrite(args)).exitCode, 0);
  const path = join(f.root, 'data', meta.gameVersion, 'blessings.json'), bytes = await readFile(path);
  assert.deepEqual(bytes, await readFile(join(f.options.outDir, 'data', meta.gameVersion, 'blessings.json')));
  assert.equal((await runWrite(args)).exitCode, 0); assert.deepEqual(await readFile(path), bytes);
  const next = { gameVersion: '1.3.0', sourceCommit: 'd'.repeat(40), textBatch: 'next' };
  for (const c of CATEGORIES) {
    f.previous[c] = structuredClone(first.merged[c]);
    f.extract[c] = { ...f.extract[c], ...next, items: first.merged[c].items.map(strip) };
    for (const x of f.extract[c].items) { x.source.commit = next.sourceCommit; x.source.text.batch = next.textBatch; }
    f.candidate[c] = { ...f.previous[c], ...next, items: [] };
  }
  state = stateApi.startRun(await stateApi.readState(f.state), next);
  state = stateApi.registerItem(state, id, { category: 'blessings', change: 'changed', inputHash: '5'.repeat(64) });
  await stateApi.writeState(f.state, state);
  const second = await f.run(); assert.equal(rowFor(second, id).decision, 'combined');
  state = await stateApi.readState(f.state); assert.equal(state.retainedExplanations[id].officialChanged, true);
  assert.equal(state.run.items[id].officialChanged, true); assert.deepEqual(state.retainedExplanations[id].explanationFrom, old);
  f.candidate.blessings.items = [{ ...f.extract.blessings.items[0], explanation: { ...item.explanation, notes: '重新撰寫' }, errata: [], citations: [{ section: 'notes', text: '重新撰寫', codeRefs: [], valueRefs: ['/params/bonus/value'] }] }];
  f.extract.blessings.items[0].source.valueSources = { '/params/bonus/value': [{ path: 'scripts/example.lua', line: 1 }] };
  f.candidate.blessings.items[0].source = structuredClone(f.extract.blessings.items[0].source);
  const rewritten = await f.run(); assert.equal(rowFor(rewritten, id).decision, 'pass', JSON.stringify(rowFor(rewritten, id)));
  state = await stateApi.readState(f.state); assert.ok(!state.retainedExplanations[id]); assert.ok(!Object.hasOwn(state.run.items[id], 'officialChanged'));
});

test('SYP391 non-official effect is not replaced and updated numbers can reject replacement', async t => {
  for (const mode of ['nonofficial', 'number']) {
    const f = await fixture(t), prev = f.previous.skills.items[0], fresh = f.extract.skills.items[0];
    delete prev.citations; prev.official.zh = '提升25%'; fresh.official.zh = '增加25%';
    if (mode === 'nonofficial') assert.equal(combineItem(fresh, prev, '增加25%').explanation.effect, prev.explanation.effect);
    if (mode === 'number') { prev.explanation.effectOrigin = 'official'; prev.explanation.notes = '提升50%'; prev.values.params.other = { value: 0.5 }; fresh.values.params.other = { value: 0.25 }; }
    const r = await f.run(), row = rowFor(r, f.id);
    assert.equal(row.decision, 'kept-previous', JSON.stringify(row));
    assert.ok(row.combinationFailures.some(x => x.code === (mode === 'number' ? 'T_NUMBER' : 'T_OFFICIAL_CHANGED')), JSON.stringify(row));
    assert.deepEqual(r.merged.skills.items[0], retainItem(prev, f.previous.skills));
  }
});
