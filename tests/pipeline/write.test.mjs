import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, readdir, rm, rmdir, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { CATEGORIES, checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical, writeCanonicalFile } from '../../pipeline/lib/canonical-json.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';
import { itemFileName } from '../../pipeline/lib/cloud-dir.mjs';

const repo = resolve('.'), meta = { gameVersion: '1.2.0', sourceCommit: 'a'.repeat(40), textBatch: 'new' };
const old = { gameVersion: '1.1.0', sourceCommit: 'b'.repeat(40), textBatch: 'old' };
const read = async (file) => JSON.parse(await readFile(file, 'utf8'));
const explanation = (value) => ({ effect: `提升${value * 100}%`, conditions: '', calculation: '', notes: '', extra: '' });
const errata = (value) => [{ locale: 'en', official: '10%', corrected: `${value * 100}%`, valueRef: '/params/bonus/value',
  anchor: { field: 'official', locale: 'en', text: 'Damage 10%', occurrence: 1 } }];
async function snapshot(dir) {
  const result = {};
  async function visit(path, prefix = '') {
    let entries; try { entries = await readdir(path, { withFileTypes: true }); } catch (e) { if (e.code === 'ENOENT') return; throw e; }
    for (const entry of entries) {
      const name = `${prefix}${entry.name}`;
      if (entry.isDirectory()) await visit(join(path, entry.name), `${name}/`);
      else result[name] = await readFile(join(path, entry.name), 'utf8');
    }
  }
  await visit(dir); return result;
}
async function fixture(t, { previous = false, mismatch = false, repeated = false } = {}) {
  const root = await mkdtemp(join(tmpdir(), 'darktide-write-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const state = join(root, 'pipeline/state.json'), cloud = join(root, 'cloud'), work = join(root, 'work');
  const base = join(cloud, meta.gameVersion), translation = join(root, 'Translation.md'), previousData = {};
  await mkdir(cloud); await writeFile(translation, '# 譯名\n');
  await writeState(state, startRun(emptyState(), meta));
  for (const category of CATEGORIES) {
    const sample = await read(join(repo, 'pipeline/schema/examples/0.0.0-example', `${category}.json`));
    const template = sample.items[0];
    template.official = { en: 'Damage 10%', zh: null };
    template.values.params = { bonus: { value: 0.25 } };
    if (category === 'weapons') template.values.bars = [];
    if (category === 'blessings') template.values.tiers = [{ tier: 1, params: {} }];
    const make = (suffix, version, value = 0.25) => {
      const item = structuredClone(template);
      item.id += `:${suffix}`; item.source.commit = version.sourceCommit; item.source.text.batch = version.textBatch;
      item.values.params.bonus.value = value; item.explanation = explanation(value); item.errata = errata(value);
      return item;
    };
    previousData[category] = { ...sample, ...old, items: ['a', 'b', 'c'].map((s) => make(s, old)) };
    if (repeated) {
      const item = previousData[category].items[1];
      item.retainedFrom = { gameVersion: '1.0.0', sourceCommit: 'c'.repeat(40), textBatch: 'earliest' };
      item.source.commit = item.retainedFrom.sourceCommit; item.source.text.batch = item.retainedFrom.textBatch;
    }
    assert.deepEqual(checkDataFile(category, stringifyCanonical(previousData[category])).errors, []);
    if (previous) await writeCanonicalFile(join(root, 'data', old.gameVersion, `${category}.json`), previousData[category]);
    const items = [make('a', meta), make('b', meta, 0.5), make('d', meta)].map(({ explanation, errata, ...item }) => item);
    await writeCanonicalFile(join(work, 'extract', `${category}.json`), { schemaVersion: '1.0.0', category, ...meta,
      scriptVersion: `pipeline/extract-${category}.mjs@1.0.0`, status: mismatch && category === 'terms' ? 'structure-mismatch' : 'ok',
      reason: mismatch && category === 'terms' ? '測試結構不符' : null, problems: [], excluded: [], items: mismatch && category === 'terms' ? [] : items });
  }
  if (previous) await writeCanonicalFile(join(root, 'data/current.json'), { schemaVersion: '1.0.0', ...old, path: `data/${old.gameVersion}`, versions: [old.gameVersion] });
  const env = { ...process.env }; delete env.NODE_OPTIONS; delete env.DARKTIDE_PIPELINE_CLOUD_DIR;
  const cli = (script, args = []) => spawnSync(process.execPath, [join(repo, 'pipeline', `${script}.mjs`), ...args], { cwd: repo, env, encoding: 'utf8' });
  const success = (result) => { assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`); return result; };
  const diffArgs = ['--state', state, '--cloud-dir', cloud, '--work-dir', work, '--data-dir', join(root, 'data'), '--glossary', join(root, 'missing.md')];
  success(cli('diff', diffArgs));
  const ai = {};
  for (const file of await readdir(join(base, 'ai/input')).catch((e) => e.code === 'ENOENT' ? [] : Promise.reject(e))) {
    const input = await read(join(base, 'ai/input', file)), value = input.item.values.params.bonus.value;
    ai[input.id] = { schemaVersion: '1.0.0', id: input.id, inputHash: input.inputHash, explanation: explanation(value), errata: errata(value) };
    await writeCanonicalFile(join(base, 'ai/output', itemFileName(input.id)), ai[input.id]);
    success(cli('diff', [...diffArgs, '--mark-described', input.id]));
  }
  const writeArgs = ['--root', root, '--state', state, '--cloud-dir', cloud];
  const verifyArgs = [...writeArgs, '--translation', translation, '--issues', 'off'];
  const verify = () => success(cli('verify', verifyArgs));
  const write = () => cli('write', writeArgs);
  const validate = () => success(cli('validate', ['--root', root]));
  return { root, state, cloud, base, ai, previousData, cli, success, verify, write, validate, writeArgs, verifyArgs };
}

// Scenario: initial publication traverses real diff, mark, verify, write and validate CLIs. Purpose: prove defaults and durable state work together.
test('InterT10_first version CLI chain hashes candidates and matches verify bytes', async (t) => {
  const f = await fixture(t); f.verify();
  const report = await read(join(f.base, 'verify/report.json'));
  assert.equal(report.result, 'pass');
  for (const c of CATEGORIES) {
    const bytes = await readFile(join(f.base, 'candidate', `${c}.json`));
    assert.equal(report.categories[c].candidateSha256, createHash('sha256').update(bytes).digest('hex'));
  }
  f.success(f.write()); f.validate();
  const current = await read(join(f.root, 'data/current.json')), state = await read(f.state);
  assert.deepEqual(current.versions, [meta.gameVersion]); assert.equal(state.run.status, 'completed'); assert.deepEqual(state.lastProcessed, meta);
  for (const c of CATEGORIES) {
    assert.deepEqual(await readFile(join(f.root, 'data', meta.gameVersion, `${c}.json`)), await readFile(join(f.base, 'verify/out/data', meta.gameVersion, `${c}.json`)));
    for (const item of (await read(join(f.root, 'data', meta.gameVersion, `${c}.json`))).items) assert.deepEqual(item.errata, f.ai[item.id].errata);
  }
  const before = await snapshot(join(f.root, 'data')), stateBefore = await readFile(f.state), mtime = (await stat(f.state)).mtimeMs;
  f.success(f.write()); assert.deepEqual(await snapshot(join(f.root, 'data')), before); assert.deepEqual(await readFile(f.state), stateBefore);
  assert.equal((await stat(f.state)).mtimeMs, mtime);
});

for (const repeated of [false, true]) {
  // Scenario: a changed AI description invents a number. Purpose: preserve old content, anchors and earliest provenance through publication.
  test(`InterT${repeated ? '22' : '20'}_single fallback retains ${repeated ? 'earliest' : 'previous'} provenance and unchanged anchors`, async (t) => {
    const f = await fixture(t, { previous: true, repeated }), id = f.previousData.skills.items[1].id;
    const output = f.ai[id]; output.explanation.effect = '提升987654%';
    await writeCanonicalFile(join(f.base, 'ai/output', itemFileName(id)), output);
    f.verify(); f.success(f.write()); f.validate();
    const data = await read(join(f.root, 'data', meta.gameVersion, 'skills.json')), oldItem = f.previousData.skills.items[1];
    assert.deepEqual(data.items[1], { ...oldItem, retainedFrom: oldItem.retainedFrom ?? old });
    assert.deepEqual(data.items[0].errata, f.previousData.skills.items[0].errata);
    assert.equal(data.items[0].source.commit, meta.sourceCommit);
    const state = await read(f.state); assert.equal(state.run.items[id].outcome, 'kept-previous'); assert.match(state.run.items[id].reason, /T_NUMBER/);
    assert.ok(Object.values(state.run.items).filter((item) => item.change === 'removed').every((item) => item.outcome === 'removed'));
    assert.deepEqual((await read(join(f.root, 'data/current.json'))).versions, [old.gameVersion, meta.gameVersion]);
    assert.deepEqual(await readFile(join(f.root, 'data', meta.gameVersion, 'skills.json')), await readFile(join(f.base, 'verify/out/data', meta.gameVersion, 'skills.json')));
  });
}

for (const previous of [false, true]) {
  // Scenario: extractor rejects a whole category. Purpose: emit four valid new envelopes with retained items or an empty category.
  test(`InterT${previous ? '32' : '30'}_category fallback ${previous ? 'retains all' : 'emits empty file'}`, async (t) => {
    const f = await fixture(t, { previous, mismatch: true });
    await writeCanonicalFile(join(f.base, 'candidate/terms.json'), { stale: true });
    await writeFile(join(f.base, 'candidate/keep.txt'), 'keep');
    f.verify(); await assert.rejects(readFile(join(f.base, 'candidate/terms.json')), { code: 'ENOENT' });
    assert.equal(await readFile(join(f.base, 'candidate/keep.txt'), 'utf8'), 'keep');
    f.success(f.write()); f.validate();
    const data = await read(join(f.root, 'data', meta.gameVersion, 'terms.json'));
    assert.equal(data.gameVersion, meta.gameVersion);
    assert.deepEqual(data.items, previous ? f.previousData.terms.items.map((item) => ({ ...item, retainedFrom: old })) : []);
    assert.deepEqual(await readFile(join(f.root, 'data', meta.gameVersion, 'terms.json')), await readFile(join(f.base, 'verify/out/data', meta.gameVersion, 'terms.json')));
  });
}

// Scenario: a kept category still has pending registered items. Purpose: settle every pending item with a reason before completion.
test('InterT34_category fallback settles pending registrations', async (t) => {
  const f = await fixture(t, { previous: true, mismatch: true }); f.verify();
  const state = await read(f.state), id = f.previousData.terms.items[0].id;
  state.run.items[id] = { category: 'terms', change: 'changed', inputHash: '0'.repeat(64), stage: 'extracted', outcome: null, reason: null };
  await writeState(f.state, state); f.success(f.write()); f.validate();
  assert.equal((await read(f.state)).run.items[id].outcome, 'kept-previous');
  assert.equal((await read(f.state)).run.items[id].reason, '類別保留上一版：測試結構不符');
});

// Scenario: writing stops after the first category checkpoint. Purpose: resume without reprocessing written items or changing bytes.
test('InterT40_interrupted write converges with uninterrupted publication', async (t) => {
  const f = await fixture(t); f.verify();
  const { runWrite } = await import('../../pipeline/lib/write.mjs');
  const options = { root: f.root, state: f.state, cloudDir: f.cloud };
  await assert.rejects(runWrite({ ...options, afterCategory: (category) => { if (category === 'skills') throw new Error('interrupted'); } }), /interrupted/);
  const checkpoint = await read(f.state); assert.ok(Object.values(checkpoint.run.items).filter((i) => i.category === 'skills').every((i) => i.stage === 'written'));
  const firstBytes = await readFile(join(f.root, 'data', meta.gameVersion, 'skills.json')), firstTime = (await stat(join(f.root, 'data', meta.gameVersion, 'skills.json'))).mtimeMs;
  f.success(f.write()); f.validate();
  const data = await snapshot(join(f.root, 'data')), state = await readFile(f.state);
  for (const c of CATEGORIES) assert.equal(data[`${meta.gameVersion}/${c}.json`], await readFile(join(f.base, 'verify/out/data', meta.gameVersion, `${c}.json`), 'utf8'));
  assert.deepEqual(await readFile(join(f.root, 'data', meta.gameVersion, 'skills.json')), firstBytes);
  assert.equal((await stat(join(f.root, 'data', meta.gameVersion, 'skills.json'))).mtimeMs, firstTime);
  // Restore the verified checkpoint and data to compare a clean uninterrupted run of the same inputs.
  const reset = structuredClone(checkpoint); for (const item of Object.values(reset.run.items)) { item.stage = 'verified'; item.outcome = null; }
  await writeState(f.state, reset); f.success(f.write());
  assert.deepEqual(await snapshot(join(f.root, 'data')), data); assert.deepEqual(await readFile(f.state), state);
});

// Scenario: current.json was published but completion checkpoint was interrupted. Purpose: resolve the original predecessor and complete without changing data.
test('InterT42_resume after current publication and completed fallback replay preserve bytes', async (t) => {
  const f = await fixture(t, { previous: true, mismatch: true }); f.verify(); f.success(f.write());
  const data = await snapshot(join(f.root, 'data')), completed = await readFile(f.state), state = await read(f.state);
  state.run.status = 'running'; state.lastProcessed = null; await writeState(f.state, state);
  f.success(f.write()); assert.deepEqual(await snapshot(join(f.root, 'data')), data); assert.deepEqual(await readFile(f.state), completed);
  f.success(f.write()); assert.deepEqual(await snapshot(join(f.root, 'data')), data); assert.deepEqual(await readFile(f.state), completed);
});

// Scenario: reports, candidates or publication version are unsafe. Purpose: reject before creating any output or changing state.
test('InterT50_write guards reject halted changed mismatched older and invalid inputs', async (t) => {
  const f = await fixture(t); f.verify();
  const reportPath = join(f.base, 'verify/report.json'), report = await read(reportPath), before = await snapshot(join(f.root, 'data')), state = await readFile(f.state);
  for (const [change, code, message] of [
    [{ result: 'halted' }, 3, /檢查結果為整批停止，不寫入/],
    [{ gameVersion: '9.9' }, 2, /版本/],
    [{ sourceCommit: 'b'.repeat(40) }, 2, /版本/],
    [{ textBatch: 'different' }, 2, /版本/],
  ]) {
    await writeCanonicalFile(reportPath, { ...report, ...change }); const r = f.write(); assert.equal(r.status, code, r.stderr); assert.match(r.stdout + r.stderr, message);
    assert.deepEqual(await snapshot(join(f.root, 'data')), before); assert.deepEqual(await readFile(f.state), state);
  }
  await writeCanonicalFile(reportPath, report);
  const candidate = join(f.base, 'candidate/skills.json'), bytes = await readFile(candidate);
  await writeFile(candidate, Buffer.concat([bytes, Buffer.from(' ')]));
  const changed = f.write(); assert.equal(changed.status, 1); assert.match(changed.stderr, /候選資料在檢查後已變動/);
  assert.deepEqual(await snapshot(join(f.root, 'data')), before); assert.deepEqual(await readFile(f.state), state); await writeFile(candidate, bytes);
  await writeCanonicalFile(join(f.root, 'data/current.json'), { schemaVersion: '1.0.0', ...meta, gameVersion: '9.9', path: 'data/9.9', versions: ['9.9'] });
  const newer = await snapshot(join(f.root, 'data')); assert.equal(f.write().status, 1); assert.deepEqual(await snapshot(join(f.root, 'data')), newer);
  for (const args of [['--constructor', 'x'], ['--root'], ['--root', f.root, '--root', f.root]]) assert.equal(f.cli('write', args).status, 2);
});

// Scenario: verified output is structurally corrupt or an item has not passed verification. Purpose: validate the whole batch before writes and retain prior checkpoints on late errors.
test('InterT60_invalid final output is rejected and earlier item stages require verification', async (t) => {
  const f = await fixture(t); f.verify();
  const candidatePath = join(f.base, 'candidate/terms.json'), candidate = await read(candidatePath), reportPath = join(f.base, 'verify/report.json'), report = await read(reportPath);
  candidate.items[0].key = ''; await writeCanonicalFile(candidatePath, candidate);
  report.categories.terms.candidateSha256 = createHash('sha256').update(await readFile(candidatePath)).digest('hex'); await writeCanonicalFile(reportPath, report);
  const stateBefore = await readFile(f.state); assert.equal(f.write().status, 1); assert.deepEqual(await snapshot(join(f.root, 'data')), {}); assert.deepEqual(await readFile(f.state), stateBefore);
  f.verify(); const state = await read(f.state), id = Object.keys(state.run.items).find((id) => state.run.items[id].category === 'weapons');
  state.run.items[id].stage = 'described'; await writeState(f.state, state);
  const result = f.write(); assert.equal(result.status, 1); assert.match(result.stderr, /檢查報告與狀態檔不一致/);
  assert.deepEqual(await snapshot(join(f.root, 'data')), {});
});

// Scenario: a prior publication was interrupted before its version was registered. Purpose: prevent a new version from hiding orphaned data while allowing same-version resumption.
test('InterT61_unregistered version blocks writes but current run resumes', async (t) => {
  const f = await fixture(t); f.verify();
  await writeCanonicalFile(join(f.root, 'data', old.gameVersion, 'skills.json'), f.previousData.skills);
  const before = await snapshot(join(f.root, 'data')), state = await readFile(f.state);
  const result = f.write(); assert.equal(result.status, 1); assert.match(result.stderr, /未登記的版本目錄 1\.1\.0/);
  assert.deepEqual(await snapshot(join(f.root, 'data')), before); assert.deepEqual(await readFile(f.state), state);
});

// Scenario: a later verify degrades an item while an earlier verified state is restored. Purpose: reject stale state before writing any output.
test('InterT62_report and restored state mismatch blocks writes', async (t) => {
  const f = await fixture(t, { previous: true }); f.verify();
  const saved = await readFile(f.state), id = f.previousData.skills.items[1].id;
  f.ai[id].explanation.effect = '提升987654%';
  await writeCanonicalFile(join(f.base, 'ai/output', itemFileName(id)), f.ai[id]); f.verify();
  await writeFile(f.state, saved);
  const before = await snapshot(join(f.root, 'data')), result = f.write();
  assert.equal(result.status, 1); assert.match(result.stderr, /檢查報告與狀態檔不一致/);
  assert.deepEqual(await snapshot(join(f.root, 'data')), before); assert.deepEqual(await readFile(f.state), saved);
});

// Scenario: an extract version disagrees with the running state. Purpose: propagate the genuine halted result without writing.
test('InterT63_genuine halted verify propagates exit 3', async (t) => {
  const f = await fixture(t), path = join(f.base, 'extract/skills.json'), extract = await read(path);
  extract.gameVersion = '9.9'; await writeCanonicalFile(path, extract);
  assert.equal(f.cli('verify', f.verifyArgs).status, 3);
  const before = await snapshot(join(f.root, 'data')), state = await readFile(f.state), result = f.write();
  assert.equal(result.status, 3); assert.match(result.stdout, /檢查結果為整批停止，不寫入/);
  assert.deepEqual(await snapshot(join(f.root, 'data')), before); assert.deepEqual(await readFile(f.state), state);
});

// Scenario: report, candidate directory or state cannot be read. Purpose: preserve useful errors without disclosing local absolute paths.
test('InterT64_input errors do not disclose absolute paths', async (t) => {
  const f = await fixture(t); f.verify();
  const missingReport = f.cli('write', [...f.writeArgs, '--report', join(f.root, 'absent.json')]);
  const missingCandidate = f.cli('write', [...f.writeArgs, '--candidate-dir', join(f.root, 'absent')]);
  await writeFile(f.state, '{broken'); const corruptState = f.write();
  for (const result of [missingReport, missingCandidate, corruptState]) {
    assert.notEqual(result.status, 0); assert.ok(!result.stderr.includes(f.root)); assert.ok(!result.stderr.includes(tmpdir()));
  }
  assert.match(missingReport.stderr, /ENOENT/);
});

// Scenario: all default extracts are absent and no state run exists in another root. Purpose: distinguish empty-category degradation from missing workflow setup.
test('InterT70_default state and missing extracts produce four empty files', async (t) => {
  const f = await fixture(t);
  for (const c of CATEGORIES) await rm(join(f.base, 'extract', `${c}.json`));
  // Diff may never create extract/ when every source category is missing.
  await rmdir(join(f.base, 'extract'));
  f.success(f.cli('verify', ['--root', f.root, '--cloud-dir', f.cloud, '--translation', join(f.root, 'Translation.md'), '--issues', 'off']));
  f.success(f.cli('write', ['--root', f.root, '--cloud-dir', f.cloud])); f.validate();
  for (const c of CATEGORIES) assert.deepEqual((await read(join(f.root, 'data', meta.gameVersion, `${c}.json`))).items, []);
  const empty = join(f.root, 'no-run'); await mkdir(empty);
  const result = f.cli('verify', ['--root', empty, '--issues', 'off']); assert.equal(result.status, 2); assert.match(result.stderr, /check-version/);
  assert.equal(f.cli('write', ['--root', empty]).status, 2);
});

// Scenario: all explicit file inputs are provided without cloud configuration. Purpose: retain independent CLI use and reject modified completed outputs.
test('InterT72_explicit paths bypass cloud and completed replays are read only', async (t) => {
  const f = await fixture(t); f.verify();
  const explicit = ['--root', f.root, '--state', f.state, '--report', join(f.base, 'verify/report.json'), '--candidate-dir', join(f.base, 'candidate'), '--previous-dir', 'none'];
  f.success(f.cli('write', explicit));
  await writeFile(join(f.root, 'data', meta.gameVersion, 'skills.json'), '{}\n');
  const bytes = await readFile(f.state), data = await snapshot(join(f.root, 'data'));
  assert.equal(f.cli('write', explicit).status, 2); assert.deepEqual(await readFile(f.state), bytes); assert.deepEqual(await snapshot(join(f.root, 'data')), data);
});

// Scenario: candidate, extract and version inputs are explicit while cloud is available. Purpose: still apply report/out defaults without breaking legacy offline invocation.
test('InterT74_explicit inputs with cloud still use default report and output paths', async (t) => {
  const f = await fixture(t); f.verify();
  const versionInfo = join(f.root, 'version.json');
  await writeCanonicalFile(versionInfo, { ...meta, sourceGameVersion: meta.gameVersion, textGameVersion: meta.gameVersion });
  await writeFile(join(f.base, 'verify/report.json'), 'old report');
  const preview = join(f.base, 'verify/out/data', meta.gameVersion, 'skills.json');
  await writeFile(preview, 'old preview');
  const result = f.cli('verify', [...f.verifyArgs, '--candidate-dir', join(f.base, 'candidate'), '--extract-dir', join(f.base, 'extract'), '--version-info', versionInfo]);
  f.success(result); assert.equal((await read(join(f.base, 'verify/report.json'))).gameVersion, meta.gameVersion);
  assert.equal((await read(preview)).gameVersion, meta.gameVersion);
});
