import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { CATEGORIES, checkDataFile, retainItem } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical, isCanonicalText } from '../../pipeline/lib/canonical-json.mjs';
import * as stateApi from '../../pipeline/lib/state.mjs';
import { runVerify } from '../../pipeline/lib/verify/index.mjs';
import { verifyMerged } from '../../pipeline/lib/verify/output.mjs';
import { extractNumbers, checkNumbers } from '../../pipeline/lib/verify/numbers.mjs';
import { parseTranslation } from '../../pipeline/lib/verify/translation.mjs';

const cli = resolve('pipeline/verify.mjs');
const meta = { gameVersion: '1.2.0', sourceCommit: 'a'.repeat(40), textBatch: 'batch-new' };
const old = { gameVersion: '1.1.0', sourceCommit: 'b'.repeat(40), textBatch: 'batch-old' };
const json = async (path, value) => writeFile(path, stringifyCanonical(value));
const retainedFile = (file) => ({ ...file, ...meta, items: file.items.map((item) => retainItem(item, file)) });
const strip = ({ explanation, errata, ...item }) => item;
const fakeExec = () => { throw new Error('測試禁止執行外部指令'); };

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'verify-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const dirs = Object.fromEntries(['candidate', 'extract', 'previous', 'out'].map((k) => [k, join(root, k)]));
  for (const dir of Object.values(dirs)) await mkdir(dir);
  const data = {}, previous = {}, extracts = {};
  for (const c of CATEGORIES) {
    const sample = JSON.parse(await readFile(new URL(`../../pipeline/schema/examples/0.0.0-example/${c}.json`, import.meta.url), 'utf8'));
    data[c] = { ...sample, ...meta, items: Array.from({ length: 3 }, (_, n) => {
      const item = structuredClone(sample.items[0]);
      item.id = `darktide:${{ skills: 'skill', weapons: 'weapon', blessings: 'blessing', terms: 'term' }[c]}:test_${n}`;
      item.key = `test_${n}`;
      item.name = { origin: 'official', en: `Example ${n}`, zh: `範例${n}` };
      item.source.commit = meta.sourceCommit;
      item.source.text.batch = meta.textBatch;
      item.official = { en: null, zh: null };
      item.errata = [];
      item.values.params = { bonus: { value: 0.25 }, dynamic: { value: null, unknown: 'DYNAMIC_VALUE' } };
      if (c === 'blessings') item.values.tiers = [{ tier: 1, params: { power: { value: 0.25 } } }];
      item.explanation = { effect: '效果提升25%。', conditions: '', calculation: '', notes: '', extra: '' };
      return item;
    }) };
    previous[c] = structuredClone(data[c]);
    Object.assign(previous[c], old);
    for (const item of previous[c].items) {
      item.source.commit = old.sourceCommit;
      item.source.text.batch = old.textBatch;
      item.explanation.notes = '上一版說明';
    }
    assert.equal(checkDataFile(c, stringifyCanonical(data[c])).valid, true, c);
    assert.equal(checkDataFile(c, stringifyCanonical(previous[c])).valid, true, c);
    extracts[c] = { category: c, status: 'ok', reason: null, items: structuredClone(data[c].items.map(strip)) };
  }
  const versionInfo = join(root, 'version.json'), translation = join(root, 'Translation.md');
  await json(versionInfo, { ...meta, sourceGameVersion: meta.gameVersion, textGameVersion: meta.gameVersion });
  await writeFile(translation, '# 譯名\n');
  const options = { root, candidateDir: dirs.candidate, extractDir: dirs.extract, previousDir: dirs.previous,
    versionInfo, translation, outDir: dirs.out, issues: 'dry-run', modsCommit: 'c'.repeat(40), exec: fakeExec };
  const save = async () => {
    for (const c of CATEGORIES) {
      await json(join(dirs.candidate, `${c}.json`), data[c]);
      await json(join(dirs.extract, `${c}.json`), extracts[c]);
      await json(join(dirs.previous, `${c}.json`), previous[c]);
    }
  };
  await save();
  return { root, dirs, data, previous, extracts, options, save, run: async (extra = {}) => { await save(); return runVerify({ ...options, ...extra }); } };
}
const failures = (r, code) => r.report.items.filter((i) => i.failures.some((f) => f.code === code));
const args = (f) => [cli, '--root', f.root, '--candidate-dir', f.dirs.candidate, '--extract-dir', f.dirs.extract,
  '--previous-dir', f.dirs.previous, '--version-info', f.options.versionInfo, '--translation', f.options.translation,
  '--issues', 'dry-run', '--mods-commit', 'c'.repeat(40), '--out-dir', f.dirs.out];

// Scenario: candidate or retained category has a different schema version. Purpose: halt before writing mixed output.
test('InterT09_合併後 schema 版本不一致停止寫入', async (t) => {
  for (const mode of ['candidate', 'retained', 'consistent']) {
    const f = await fixture(t);
    for (const c of CATEGORIES) f.data[c].schemaVersion = '1.1.0';
    f.data.skills.items[0].explanation.effectOrigin = 'unofficial-translation';
    f.data.blessings.items[0].explanation.effectOrigin = 'official';
    const weapon = JSON.parse(await readFile(new URL('../../pipeline/schema/examples/1.1.0-example/weapons.json', import.meta.url), 'utf8'));
    for (const item of f.data.weapons.items) {
      item.values.curves = structuredClone(weapon.items[0].values.curves);
      item.values.attackCombos = structuredClone(weapon.items[0].values.attackCombos);
      item.values.bars[0].stats[0].curveId = 'example.example';
    }
    f.extracts.weapons.items = f.data.weapons.items.map(strip);
    if (mode === 'retained') f.extracts.skills.status = 'structure-mismatch';
    if (mode === 'candidate') f.data.skills.schemaVersion = '1.0.0';
    const r = await f.run();
    if (mode === 'consistent') {
      assert.equal(r.exitCode, 0);
      assert.equal(r.report.result, 'pass');
      assert.ok(await readFile(join(f.dirs.out, 'data', meta.gameVersion, 'weapons.json')));
      for (const [category, origin] of [['skills', 'unofficial-translation'], ['blessings', 'official']]) {
        const written = JSON.parse(await readFile(join(f.dirs.out, 'data', meta.gameVersion, `${category}.json`), 'utf8'));
        assert.equal(written.items[0].explanation.effectOrigin, origin);
      }
      continue;
    }
    assert.equal(r.exitCode, 3);
    assert.equal(r.report.gates.output.status, 'halted');
    assert.ok(r.report.gates.output.errors.some((e) => e.code === 'SCHEMA_VERSION_MISMATCH'));
    await assert.rejects(readFile(join(f.dirs.out, 'data', meta.gameVersion, 'weapons.json')), { code: 'ENOENT' });
  }
});

// Scenario: weapon curves and combos contain source lines and structural indexes. Purpose: accept only game values while retaining WP4 integers.
test('UnitT15_來源行號與結構數字不得推導說明', () => {
  const values = { maxPoints: 7, tiers: [{ tier: 3 }], curves: [{ input: { min: 0, max: 1 }, source: { path: 'weapon.lua', line: 54 }, knots: [{ input: 0, output: [0.42, 0.65] }] }], attackCombos: [{ source: { path: 'combo.lua', line: 73 }, loopsTo: 2, steps: [] }] };
  for (const text of ['54', '5400%', '73', '2']) assert.equal(checkNumbers(values, text).failures[0]?.code, 'T_NUMBER', text);
  for (const text of ['42%', '65%', '7', '3']) assert.deepEqual(checkNumbers(values, text).failures, [], text);
});

// Scenario: an extracted item is missing from the candidate, with and without previous data or state. Purpose: keep reports, output and state consistent.
test('InterT11_未說明項目依上一版保留或排除', async (t) => {
  for (const mode of ['previous', 'new', 'state']) {
    const f = await fixture(t), item = f.data.skills.items.shift(), id = item.id;
    if (mode === 'new') f.previous.skills.items.shift();
    let state;
    if (mode === 'state') {
      state = join(f.root, 'state.json');
      let s = stateApi.startRun(stateApi.emptyState(), meta);
      s = stateApi.registerItem(s, id, { category: 'skills', change: 'changed', inputHash: '0'.repeat(64) });
      await stateApi.writeState(state, s);
    }
    const r = await f.run(state ? { state } : {}), row = failures(r, 'V_NOT_DESCRIBED').find((x) => x.id === id);
    assert.equal(row?.decision, mode === 'new' ? 'excluded' : 'kept-previous');
    assert.deepEqual(row.failures[0], { gate: 'values', code: 'V_NOT_DESCRIBED', path: '/explanation', message: '候選資料缺少此項目，尚未完成說明' });
    assert.equal(r.report.result, 'degraded');
    assert.deepEqual(r.merged.skills.items.find((x) => x.id === id), mode === 'new' ? undefined : retainItem(f.previous.skills.items.find((x) => x.id === id), f.previous.skills));
    assert.equal(Object.hasOwn(r.report.gates.output, 'knownExceptions'), false);
    assert.deepEqual(r.report.gates.output.errors, []);
    if (state) {
      const saved = await stateApi.readState(state);
      assert.equal(saved.run.items[id].outcome, 'kept-previous');
      assert.match(saved.run.items[id].reason, /V_NOT_DESCRIBED/);
    }
  }
});

// Scenario: a category disappears on a second run in the same output directory. Purpose: replace its stale fixed-name file with an empty envelope.
test('InterT12_重用輸出目錄覆寫空類別檔', async (t) => {
  const f = await fixture(t); await f.run();
  const dir = join(f.dirs.out, 'data', meta.gameVersion);
  await writeFile(join(dir, 'keep.txt'), 'keep');
  f.extracts.skills.status = 'structure-mismatch';
  await f.run({ previousDir: 'none' });
  assert.deepEqual(JSON.parse(await readFile(join(dir, 'skills.json'), 'utf8')).items, []);
  for (const c of ['weapons', 'blessings', 'terms']) assert.ok(await readFile(join(dir, `${c}.json`)));
  assert.equal(await readFile(join(dir, 'keep.txt'), 'utf8'), 'keep');
});

// Scenario: inherited object property names are passed as CLI flags. Purpose: reject every unknown flag.
test('InterT13_CLI 拒絕繼承屬性參數', async (t) => {
  const f = await fixture(t);
  for (const flag of ['--constructor', '--toString', '--__proto__'])
    assert.equal(spawnSync(process.execPath, [...args(f), flag, 'x'], { encoding: 'utf8' }).status, 2);
});

// Scenario: hyphens separate ranges or precede signed values. Purpose: distinguish range endpoints from direction.
test('UnitT14_範圍連字號與正負號', () => {
  assert.deepEqual(checkNumbers({ params: { a: { value: 3 }, b: { value: 5 } } }, '3-5 秒').failures, []);
  assert.deepEqual(checkNumbers({ params: { a: { value: 0.1 }, b: { value: 0.2 } } }, '10%-20%').failures, []);
  assert.equal(extractNumbers('造成 -25% 傷害')[0].value, -25);
  assert.deepEqual(extractNumbers('3 - 5、10% −20%').map((x) => x.value), [3, 5, 10, 20]);
  assert.equal(checkNumbers({ params: { a: { value: -0.25 } } }, '+25%').failures[0].code, 'T_DIRECTION');
});

// Scenario: four valid categories include unknown parameters. Purpose: protect pass, canonical output and determinism.
test('InterT10_合法候選與 unknown 通過且輸出可重現', async (t) => {
  const f = await fixture(t), a = await f.run(), b = await f.run();
  assert.equal(a.exitCode, 0);
  assert.equal(a.report.result, 'pass');
  assert.equal(a.report.items.length, 12);
  assert.equal(stringifyCanonical(a.report), stringifyCanonical(b.report));
  assert.equal(a.report.gates.deploy.status, 'not-run');
  assert.ok(a.report.notAutomated.length >= 2);
  for (const c of CATEGORIES) {
    const text = await readFile(join(f.dirs.out, 'data', meta.gameVersion, `${c}.json`), 'utf8');
    assert.ok(isCanonicalText(text));
    assert.match(a.report.categories[c].candidateSha256, /^[a-f0-9]{64}$/);
    assert.ok(checkDataFile(c, text).valid);
  }
  assert.ok(a.report.items.every((i) => i.notes.some((n) => n.code === 'ERRATA_CHECK_SKIPPED_UNKNOWN')));
});

const cases = [
  ['V_SCHEMA', (f, x) => { x.values.params.bonus.value = {}; }],
  ['V_NOT_EXTRACTED', (f) => { f.extracts.skills.items.shift(); }],
  ['V_FIELD_CHANGED', (f, x) => { x.values.params.bonus.value = 0.3; }],
  ['V_UNKNOWN_REGRESSION', (f, x) => { f.previous.skills.items[0].values.params.dynamic = { value: 8 }; }],
  ['T_FORMAT', (f, x) => { x.explanation.effect = '   '; }],
  ['T_PLACEHOLDER', (f, x) => { x.explanation.notes = '待補'; }],
  ['T_ENGLISH', (f, x) => { x.explanation.notes = 'damage'; }],
  ['T_NUMBER', (f, x) => { x.explanation.notes = '數值987654'; }],
  ['T_DIRECTION', (f, x) => { x.values.params.bonus.value = -0.25; f.extracts.skills.items[0].values.params.bonus.value = -0.25; x.explanation.effect = '提升+25%'; x.values.maxPoints = 2; f.extracts.skills.items[0].values.maxPoints = 2; }],
  ['T_COVERAGE', (f, x) => { x.explanation.effect = '效果提升'; }],
  ['T_OFFICIAL_CHANGED', (f, x) => { x.name.zh = '變更'; }],
  ['T_ERRATA_INVALID', (f, x) => { x.errata = [{ locale: 'en', official: '10%', corrected: '25%', valueRef: '/params/bonus/value' }]; }],
  ['T_ERRATA_UNKNOWN', (f, x) => { x.errata = [{ locale: 'en', official: '10%', corrected: '25%', valueRef: '/params/dynamic' }]; }],
  ['T_ERRATA_MISSING', (f, x) => { delete x.values.params.dynamic; delete f.extracts.skills.items[0].values.params.dynamic; x.official.en = '987654%'; f.extracts.skills.items[0].official.en = x.official.en; }],
  ['T_NAME_NOT_OFFICIAL', async (f, x) => { await writeFile(f.options.translation, '- Example 0 - 私譯\n'); x.explanation.notes = '私譯'; }],
];
for (const [n, [code, mutate]] of cases.entries()) {
  // Scenario: mutate one field after validating fixtures. Purpose: independently protect every failure code and item fallback.
  test(`InterT${String(n + 20).padStart(2, '0')}_${code} 僅降級單一項目`, async (t) => {
    const f = await fixture(t);
    await mutate(f, f.data.skills.items[0]);
    const r = await f.run();
    assert.equal(r.exitCode, 0);
    assert.equal(r.report.result, 'degraded');
    assert.equal(failures(r, code).length, 1, stringifyCanonical(r.report.items));
    assert.deepEqual(r.merged.skills.items[0], retainItem(f.previous.skills.items[0], f.previous.skills));
    assert.deepEqual(r.merged.skills.items.slice(1), f.data.skills.items.slice(1));
    assert.deepEqual(r.merged.terms, f.data.terms);
    assert.equal(Object.hasOwn(r.report.gates.output, 'knownExceptions'), false);
    assert.deepEqual(r.report.gates.output.errors, []);
  });
}

// Scenario: failing new items and a missing category have no previous data. Purpose: protect exclusion boundaries.
test('InterT40_沒有上一版則排除且新 unknown 不誤判', async (t) => {
  const f = await fixture(t);
  f.data.skills.items[0].explanation.notes = 'TODO';
  const r = await f.run({ previousDir: 'none' });
  assert.equal(r.merged.skills.items.length, 2);
  assert.equal(r.report.items.find((i) => i.id === f.data.skills.items[0].id).decision, 'excluded');
  assert.equal(failures(r, 'V_UNKNOWN_REGRESSION').length, 0);
  assert.equal(failures(r, 'T_COVERAGE').length, 0);
});

// Scenario: structure mismatch or envelope schema errors affect a category. Purpose: protect category fallback and missing output.
test('InterT42_類別結構不符與非 canonical 保留上一版', async (t) => {
  const f = await fixture(t);
  f.extracts.skills.status = 'structure-mismatch'; f.extracts.skills.reason = '結構已變更';
  let r = await f.run();
  assert.deepEqual(r.merged.skills, retainedFile(f.previous.skills));
  assert.equal(r.report.items.length, 9);
  assert.equal(r.report.categories.skills.reason, '結構已變更');
  await writeFile(join(f.dirs.candidate, 'terms.json'), JSON.stringify(f.data.terms, null, 2));
  r = await runVerify(f.options);
  assert.equal(r.report.categories.terms.status, 'kept-previous');
  r = await runVerify({ ...f.options, previousDir: 'none' });
  assert.deepEqual(r.merged.skills.items, []);
  assert.equal(r.merged.skills.gameVersion, meta.gameVersion);
  assert.ok(r.report.categories.skills.anomalies.some((a) => a.code === 'missing-no-previous'));
});

// Scenario: version metadata differs before item checks. Purpose: protect batch halt and CLI first line.
test('InterT44_版本不一致與候選或 extract metadata 不符整批停止', async (t) => {
  const f = await fixture(t);
  for (const target of [f.data.skills, f.extracts.terms]) {
    target.sourceCommit = 'd'.repeat(40);
    const r = await f.run();
    assert.equal(r.exitCode, 3); assert.deepEqual(r.report.items, []);
    assert.equal(r.report.gates.output.status, 'skipped');
    delete target.sourceCommit;
    if (target === f.data.skills) target.sourceCommit = meta.sourceCommit;
  }
  await f.save();
  await json(f.options.versionInfo, { sourceGameVersion: '1.2.0', textGameVersion: '1.3.0', ...meta });
  const r = spawnSync(process.execPath, args(f), { encoding: 'utf8' });
  assert.equal(r.status, 3); assert.match(r.stdout, /^整批停止：Source-Code 1\.2\.0（aaaaaaa）/);
});

// Scenario: old data or post-merge build is broken. Purpose: protect final batch halt after degradation.
test('InterT46_舊版本損壞或建置失敗停止', async (t) => {
  const f = await fixture(t);
  await mkdir(join(f.root, 'data'));
  await json(join(f.root, 'data/current.json'), { schemaVersion: '1.0.0', ...old, path: 'data/1.1.0', versions: ['1.1.0'] });
  assert.equal((await f.run()).exitCode, 3);
  await rm(join(f.root, 'data/current.json'));
  let called = false;
  const r = await f.run({ buildCmd: '建置', exec: (cmd, argv, opts) => {
    called = true; assert.equal(opts.shell, true); assert.equal(opts.env.DARKTIDE_DATA_ROOT, f.dirs.out);
    return { status: 1, stderr: Array.from({ length: 25 }, (_, n) => `錯誤${n}`).join('\n') };
  } });
  assert.ok(called); assert.equal(r.exitCode, 3);
  assert.equal(r.report.gates.output.build.stderrTail.split('\n').length, 20);
  const cliResult = spawnSync(process.execPath, [...args(f), '--build-cmd', 'node -e "process.exit(1)"'], { encoding: 'utf8' });
  assert.equal(cliResult.status, 3);
});

// Scenario: checker finds a new merged-item error, then a non-item error. Purpose: protect bounded output retry and halt.
test('UnitT48_O_MERGED_INVALID 重新降級並驗證保留資料', () => {
  const candidate = { schemaVersion: '1.0.0', ...meta, category: 'terms', items: [{ id: 'a' }, { id: 'b' }] };
  const rows = candidate.items.map(({ id }) => ({ id, category: 'terms', decision: 'pass', failures: [], notes: [] }));
  const loaded = { terms: { candidate, previous: { schemaVersion: '1.0.0', ...old, items: [{ id: 'a', old: true }] } } };
  const categories = { terms: { status: 'ok' } };
  const checker = (c, text) => ({ errors: JSON.parse(text).items[0]?.old ? [] : [{ path: '/items/0/source', message: '合併後無效' }] });
  const r = verifyMerged(loaded, categories, rows, checker);
  assert.equal(rows[0].failures[0].code, 'O_MERGED_INVALID');
  assert.equal(r.merged.terms.items[0].old, true);
  assert.equal(r.errors.length, 0);
  const bad = verifyMerged(loaded, categories, rows, () => ({ errors: [{ path: '', message: '無法讀取' }] }));
  assert.equal(bad.errors.length, 1);
});

// Scenario: ratios, signs, fullwidth and ranks appear in descriptions. Purpose: protect rounding and coverage rules.
test('UnitT50_數字比例方向階數與精度', () => {
  for (const [value, text] of [[0.25, '25%'], [1.15, '15%'], [0.8, '20%'], [-0.25, '-25%'], [0.251, '25%']]) {
    assert.deepEqual(checkNumbers({ params: { bonus: { value } } }, text).failures, []);
  }
  assert.equal(checkNumbers({ params: { bonus: { value: -0.25 } } }, '+25%').failures[0].code, 'T_DIRECTION');
  assert.deepEqual(extractNumbers('LV3、第 2 階、Lv4、第1、３階'), []);
  assert.equal(extractNumbers('＋２５．５％')[0].value, 25.5);
  assert.ok(checkNumbers({ params: { bonus: { value: 0.25 }, dynamic: { value: null } } }, '25%').failures.length === 0);
  assert.deepEqual(checkNumbers({ params: { bonus: { value: 0.002 } } }, '+0%').failures, []);
  assert.deepEqual(checkNumbers({ params: { bonus: { value: -0.002 } } }, '-0%').failures, []);
});

// Scenario: repeated translation entries include notes and variants. Purpose: protect parsing, grouping and safe issue modes.
test('InterT52_譯名解析衝突與 dry-run 不執行外部指令', async (t) => {
  const f = await fixture(t);
  const translation = '- Example 0 - 私譯（註解） / 別譯\n* example 0 - 三譯(註解)、四譯／五譯\n- 中文 - 中文\n- English - Latin\n';
  const table = parseTranslation(translation);
  assert.deepEqual(table.get('example 0').variants, ['三譯', '五譯', '別譯', '四譯', '私譯'].sort());
  await writeFile(f.options.translation, translation);
  const r = await f.run();
  assert.equal(r.report.result, 'pass');
  assert.equal(r.report.translationConflicts.length, 1);
  assert.equal(r.report.translationConflicts[0].locations.length, 4);
  assert.equal(r.report.issues[0].mode, 'dry-run');
  assert.match(r.report.issues[0].body, /#L1/);
  assert.deepEqual((await f.run({ issues: 'off' })).report.issues, []);
});

for (const [n, mode] of ['existing', 'created', 'failed'].entries()) {
  // Scenario: fake gh list/create returns an existing issue, success or failure. Purpose: never create real issues while testing.
  test(`InterT${54 + n}_假 runner 譯名 Issue ${mode}`, async (t) => {
    const f = await fixture(t); await writeFile(f.options.translation, '- Example 0 - 私譯\n');
    const calls = [];
    const r = await f.run({ issues: 'create', exec: (cmd, argv) => {
      assert.equal(cmd, 'gh'); calls.push(argv);
      if (argv[1] === 'list') return { status: 0, stdout: JSON.stringify(mode === 'existing' ? [{ title: '譯名衝突：Example 0（既有）', url: 'https://example.test/1' }] : []) };
      assert.ok(argv.includes('-R') && argv.includes('--title') && argv.includes('--body-file'));
      return mode === 'failed' ? { status: 1, stderr: '權限不足' } : { status: 0, stdout: 'https://example.test/2\n' };
    } });
    assert.equal(r.report.issues[0].mode, mode);
    assert.equal(calls.length, mode === 'existing' ? 1 : 2);
    assert.equal(r.exitCode, 0);
  });
}

// Scenario: matching run includes described, verified and extracted items. Purpose: protect state transitions and incomplete descriptions.
test('InterT60_狀態通過失敗尚未說明與類別降級', async (t) => {
  const f = await fixture(t), state = join(f.root, 'state.json');
  let s = stateApi.startRun(stateApi.emptyState(), meta);
  for (const [n, item] of f.data.skills.items.entries()) {
    s = stateApi.registerItem(s, item.id, { category: 'skills', change: 'changed', inputHash: '0'.repeat(64) });
    if (n < 2) s = stateApi.advanceItem(s, item.id, 'described');
  }
  await stateApi.writeState(state, s);
  f.data.skills.items[1].explanation.notes = 'TODO';
  f.extracts.terms.status = 'structure-mismatch';
  const r = await f.run({ state });
  const result = await stateApi.readState(state), ids = f.data.skills.items.map((x) => x.id);
  assert.equal(result.run.items[ids[0]].stage, 'verified');
  assert.equal(result.run.items[ids[1]].outcome, 'kept-previous');
  assert.match(result.run.items[ids[1]].reason, /T_PLACEHOLDER/);
  assert.equal(failures(r, 'V_NOT_DESCRIBED').length, 1);
  assert.equal(result.run.categories.terms.status, 'kept-previous');
  const before = await readFile(state, 'utf8');
  await json(f.options.versionInfo, { sourceGameVersion: '1.3.0', textGameVersion: '1.2.0', ...meta });
  const mismatch = await f.run({ state });
  assert.ok(mismatch.report.stateNote); assert.equal(await readFile(state, 'utf8'), before);
  await json(f.options.versionInfo, { sourceGameVersion: meta.gameVersion, textGameVersion: '1.3.0', ...meta });
  await f.run({ state });
  assert.equal((await stateApi.readState(state)).run.status, 'halted');
});

// Scenario: full CLI writes two identical reports; bad arguments and IO fail. Purpose: protect public CLI and no state writes on IO errors.
test('InterT70_CLI canonical 報告與使用錯誤', async (t) => {
  const f = await fixture(t), report = join(f.root, 'report.json');
  const run = () => spawnSync(process.execPath, [...args(f), '--report', report], { encoding: 'utf8' });
  assert.equal(run().status, 0);
  const first = await readFile(report, 'utf8');
  assert.equal(run().status, 0); assert.equal(await readFile(report, 'utf8'), first);
  assert.match(run().stdout, /^檢查結果：通過\n通過項目：12\n/);
  for (const bad of [[], ['--unknown', 'x'], [...args(f).slice(1), '--issues', 'invalid']])
    assert.equal(spawnSync(process.execPath, [cli, ...bad], { encoding: 'utf8' }).status, 2);
  await writeFile(join(f.dirs.candidate, 'skills.json'), '{');
  const result = run(); assert.equal(result.status, 2); assert.match(result.stderr, /無法/);
});

// Scenario: an allowed English name belongs to a category kept from the previous run. Purpose: use all candidate names for the allowlist.
test('InterT72_全部候選英文名稱都可作為允許詞', async (t) => {
  const f = await fixture(t);
  f.data.terms.items[0].name = { en: 'Untranslated Name', zh: null, origin: 'official' };
  f.extracts.terms.status = 'structure-mismatch';
  f.data.skills.items[0].explanation.notes = 'Untranslated Name，LV3，Lv4';
  const r = await f.run();
  assert.equal(failures(r, 'T_ENGLISH').length, 0);
});

// Scenario: errata references a known number, unknown param/value, or an unrelated null. Purpose: distinguish valid corrections and unknown references.
test('InterT74_勘誤數字引用與跨語系數字涵蓋', async (t) => {
  const f = await fixture(t), item = f.data.skills.items[0], extracted = f.extracts.skills.items[0];
  delete item.values.params.dynamic; delete extracted.values.params.dynamic;
  item.official = { en: 'Damage 10%', zh: '傷害10%' }; extracted.official = structuredClone(item.official);
  item.errata = [{ locale: 'en', official: '10%', corrected: '25%', valueRef: '/params/bonus/value' }];
  assert.equal((await f.run()).report.result, 'pass');
  for (const entry of [
    { official: '10%', corrected: '10%', valueRef: '/params/bonus' },
    { official: '10%', corrected: '987654%', valueRef: '/params/bonus/value' },
    { official: '10%', corrected: '25%', valueRef: '/icon' },
  ]) {
    item.errata = [{ locale: 'en', ...entry }];
    const r = await f.run();
    assert.equal(failures(r, 'T_ERRATA_INVALID').length, 1);
    assert.equal(failures(r, 'T_ERRATA_UNKNOWN').length, 0);
  }
  item.values.params.dynamic = { value: null, unknown: 'DYNAMIC_VALUE' };
  extracted.values.params.dynamic = structuredClone(item.values.params.dynamic);
  item.errata = [{ locale: 'en', official: '10%', corrected: '25%', valueRef: '/params/dynamic/value' }];
  assert.equal(failures(await f.run(), 'T_ERRATA_UNKNOWN').length, 1);
});

// Scenario: errata references a weapon curve source line or a real output endpoint. Purpose: reject structural numbers while accepting game values.
test('InterT75_勘誤只能引用合法遊戲數值', async (t) => {
  const f = await fixture(t);
  for (const c of CATEGORIES) f.data[c].schemaVersion = '1.1.0';
  const example = JSON.parse(await readFile(new URL('../../pipeline/schema/examples/1.1.0-example/weapons.json', import.meta.url), 'utf8'));
  for (const weapon of f.data.weapons.items) {
    weapon.values.curves = structuredClone(example.items[0].values.curves);
    weapon.values.attackCombos = structuredClone(example.items[0].values.attackCombos);
    weapon.values.bars[0].stats[0].curveId = 'example.example';
  }
  f.extracts.weapons.items = f.data.weapons.items.map(strip);
  const item = f.data.weapons.items[0];
  item.values.curves = structuredClone(example.items[0].values.curves);
  item.values.attackCombos = structuredClone(example.items[0].values.attackCombos);
  item.values.bars[0].stats[0].curveId = 'example.example';
  item.values.curves[0].source.line = 54;
  item.values.curves[0].knots[0].output = 180;
  item.official = { en: null, zh: '備用彈藥140發。' };
  item.errata = [{ locale: 'zh', official: '140', corrected: '54', valueRef: '/curves/0/source/line' }];
  f.extracts.weapons.items[0] = strip(structuredClone(item));
  assert.equal(failures(await f.run(), 'T_ERRATA_INVALID').length, 1);
  item.errata[0] = { locale: 'zh', official: '140', corrected: '180', valueRef: '/curves/0/knots/0/output' };
  const result = await f.run(); assert.equal(result.report.result, 'pass', JSON.stringify(result.report));
});

// Scenario: malformed explanation fields or nested unknown regressions reach item checks. Purpose: avoid crashes and preserve JSON pointer evidence.
test('InterT76_錯誤欄位型別與參數陣列降級', async (t) => {
  const f = await fixture(t);
  f.data.skills.items[0].explanation.effect = { trim: '錯誤型別' };
  assert.equal(failures(await f.run(), 'T_FORMAT').length, 1);
  f.data.skills.items[0].explanation.effect = '效果提升25%';
  f.data.blessings.items[0].values.tiers[0].params.extra = { value: null, unknown: 'NOT_VERIFIED' };
  f.extracts.blessings.items[0].values.tiers[0].params.extra = { value: null, unknown: 'NOT_VERIFIED' };
  f.previous.blessings.items[0].values.tiers[0].params.extra = { value: [1, 2] };
  const r = await f.run(), row = failures(r, 'V_UNKNOWN_REGRESSION')[0];
  assert.equal(row.failures.find((e) => e.code === 'V_UNKNOWN_REGRESSION').path, '/values/tiers/0/params/extra');
  assert.match(row.failures.find((e) => e.code === 'V_UNKNOWN_REGRESSION').message, /\[1,2\]/);
});

// Scenario: omitted files and candidate items occur. Purpose: protect fallback, missing-item failures and informational anomalies.
test('InterT78_缺檔與數量異常正確降級', async (t) => {
  const f = await fixture(t);
  f.data.skills.items = []; f.data.weapons.items.pop();
  f.data.terms.items[0].values.params.extra = { value: null, unknown: 'DYNAMIC_VALUE' };
  f.extracts.terms.items[0].values.params.extra = { value: null, unknown: 'DYNAMIC_VALUE' };
  let r = await f.run();
  assert.equal(r.report.result, 'degraded');
  assert.ok(r.report.categories.skills.anomalies.some((a) => a.code === 'EMPTY_CATEGORY'));
  assert.ok(r.report.categories.weapons.anomalies.some((a) => a.code === 'COUNT_CHANGED'));
  assert.ok(r.report.categories.weapons.anomalies.some((a) => a.code === 'NOT_DESCRIBED'));
  assert.ok(r.report.categories.terms.anomalies.some((a) => a.code === 'UNKNOWN_INCREASED'));
  await rm(join(f.dirs.candidate, 'skills.json')); await rm(join(f.dirs.extract, 'weapons.json'));
  r = await runVerify(f.options);
  assert.equal(r.report.categories.skills.reason, '缺少候選檔');
  assert.equal(r.report.categories.skills.candidateSha256, null);
  assert.equal(r.report.categories.weapons.reason, '缺少 extract 輸出');
  assert.equal(r.report.gates.values.failedItems, 0);
  assert.deepEqual(r.merged.weapons, retainedFile(f.previous.weapons));
});

// Scenario: current.json selects readable historical files and default translation. Purpose: verify real default paths and old-version checks.
test('InterT80_預設上一版索引與暫存輸出清理', async (t) => {
  const f = await fixture(t), versionDir = join(f.root, 'data', old.gameVersion);
  await mkdir(versionDir, { recursive: true });
  for (const c of CATEGORIES) await json(join(versionDir, `${c}.json`), f.previous[c]);
  await json(join(f.root, 'data/current.json'), { schemaVersion: '1.0.0', ...old, path: `data/${old.gameVersion}`, versions: [old.gameVersion] });
  f.data.skills.items[0].explanation.notes = 'TODO';
  let buildRoot;
  const r = await f.run({ previousDir: undefined, outDir: undefined, buildCmd: '假建置', exec: (cmd, argv, options) => {
    buildRoot = options.env.DARKTIDE_DATA_ROOT;
    assert.ok(buildRoot.startsWith(tmpdir())); return { status: 0 };
  } });
  assert.equal(r.report.result, 'degraded');
  assert.deepEqual(r.merged.skills.items[0], retainItem(f.previous.skills.items[0], f.previous.skills));
  await assert.rejects(readFile(join(buildRoot, 'data', meta.gameVersion, 'skills.json')), { code: 'ENOENT' });
});

// Scenario: input or report IO fails while a matching state exists. Purpose: prevent partial state updates on exit 2.
test('InterT82_IO 錯誤不寫狀態', async (t) => {
  const f = await fixture(t), state = join(f.root, 'state.json');
  const s = stateApi.startRun(stateApi.emptyState(), meta); await stateApi.writeState(state, s);
  const before = await readFile(state, 'utf8');
  for (const options of [
    { translation: join(f.root, 'missing.md') }, { candidateDir: join(f.root, 'missing') },
    { report: f.dirs.candidate },
  ]) {
    await assert.rejects(f.run({ state, ...options })); assert.equal(await readFile(state, 'utf8'), before);
  }
  await writeFile(join(f.dirs.extract, 'terms.json'), '{');
  await assert.rejects(runVerify({ ...f.options, state })); assert.equal(await readFile(state, 'utf8'), before);
  await writeFile(state, '{}'); await assert.rejects(f.run({ state }));
});

// Scenario: issue lookup/git fails, or a fake create reads its temporary body file. Purpose: protect non-blocking failure and cleanup.
test('InterT84_Issue 失敗與暫存內文清理', async (t) => {
  const f = await fixture(t); await writeFile(f.options.translation, '- Example 0 - 私譯\n');
  let gitCalls = 0, bodyPath;
  const { readFileSync, existsSync } = await import('node:fs');
  const r = await f.run({ issues: 'create', modsCommit: undefined, exec: (cmd, argv) => {
    if (cmd === 'git') { gitCalls++; return { status: 1 }; }
    assert.equal(cmd, 'gh');
    if (argv[1] === 'list') return { status: 0, stdout: '[]' };
    bodyPath = argv[argv.indexOf('--body-file') + 1];
    assert.match(readFileSync(bodyPath, 'utf8'), /Translation\.md，第 1 行/);
    return { status: 0, stdout: '建立完成\nhttps://example.test/3\n' };
  } });
  assert.equal(gitCalls, 1); assert.equal(r.report.issues[0].url, 'https://example.test/3');
  assert.equal(existsSync(bodyPath), false);
  for (const response of [{ status: 1, stderr: '無權限' }, { status: 0, stdout: '{' }]) {
    const bad = await f.run({ issues: 'create', exec: () => response });
    assert.equal(bad.report.issues[0].mode, 'failed'); assert.equal(bad.exitCode, 0);
  }
  const dry = await f.run({ modsCommit: undefined });
  assert.equal(dry.report.issues[0].mode, 'dry-run');
});

// Scenario: one retained item remains structurally invalid. Purpose: halt only after no passing item can be excluded.
test('InterT86_保留上一版仍無法讀取整批停止', async (t) => {
  const f = await fixture(t);
  f.previous.skills.items[0].key = '';
  f.data.skills.items[0].explanation.notes = 'TODO';
  const r = await f.run();
  assert.equal(r.exitCode, 3); assert.equal(r.report.gates.output.status, 'halted');
  assert.ok(r.report.gates.output.errors.length > 0);
});

// Scenario: each placeholder syntax appears, and unexplained numeric paths include tiers and bars. Purpose: protect the full text rule surface.
test('InterT88_佔位詞全集與數值來源涵蓋', async (t) => {
  const f = await fixture(t);
  for (const text of ['{數字}', '%s', '%d', '${', 'TODO', 'TBD', 'FIXME', 'XXX', 'LoReM', 'PlaceHolder', '<標籤>', '待補', '待確認', '暫譯', '（略）']) {
    f.data.skills.items[0].explanation.notes = text;
    assert.equal(failures(await f.run(), 'T_PLACEHOLDER').length, 1, text);
  }
  f.data.skills.items[0].explanation.notes = '';
  f.data.blessings.items[0].values.tiers[0].params.power.value = 0.4321;
  f.extracts.blessings.items[0].values.tiers[0].params.power.value = 0.4321;
  let r = await f.run();
  assert.match(failures(r, 'T_COVERAGE')[0].failures.find((e) => e.code === 'T_COVERAGE').message, /\/values\/tiers\/0\/params\/power/);
  f.data.blessings.items[0].explanation.notes = '額外43.21%';
  f.data.weapons.items[0].explanation.notes = '最小12.34567%';
  r = await f.run(); assert.equal(r.report.result, 'pass');
});

// Scenario: raw candidate formatting differs from canonical JSON. Purpose: hash actual input bytes even when that category degrades.
test('InterT90_候選雜湊對應原始 bytes', async (t) => {
  const f = await fixture(t), bytes = Buffer.from(JSON.stringify(f.data.skills, null, 2).replaceAll('\n', '\r\n'));
  await writeFile(join(f.dirs.candidate, 'skills.json'), bytes);
  const r = await runVerify(f.options);
  assert.equal(r.report.categories.skills.candidateSha256, createHash('sha256').update(bytes).digest('hex'));
  assert.equal(r.report.categories.skills.status, 'kept-previous');
});

// Scenario: translation comes from environment or is explicitly overridden. Purpose: retain path precedence and provide a worktree-specific diagnostic.
test('InterT92_譯名環境變數與 worktree 提示', async (t) => {
  const f = await fixture(t), before = process.env.DARKTIDE_GLOSSARY_FILE;
  t.after(() => { if (before === undefined) delete process.env.DARKTIDE_GLOSSARY_FILE; else process.env.DARKTIDE_GLOSSARY_FILE = before; });
  process.env.DARKTIDE_GLOSSARY_FILE = f.options.translation;
  assert.equal((await runVerify({ ...f.options, translation: undefined })).exitCode, 0);
  process.env.DARKTIDE_GLOSSARY_FILE = join(f.root, 'absent.md');
  assert.equal((await runVerify(f.options)).exitCode, 0);
  await assert.rejects(runVerify({ ...f.options, translation: undefined }), /在 worktree 中執行時請用 --translation 指定 Translation.md/);
});

// Scenario: malformed candidate items are null. Purpose: degrade schema-invalid items without crashing shared composition.
test('InterT94_null 候選項目逐項排除', async (t) => {
  const f = await fixture(t); f.data.skills.items[0] = null;
  const r = await f.run();
  assert.equal(r.exitCode, 0); assert.equal(r.report.result, 'degraded');
  assert.ok(r.report.items.some((row) => row.id === 'skills/items/0' && row.decision === 'excluded'));
  assert.equal(r.merged.skills.items.length, 3);
});

test('verify 重新展開 extract 並在報告保留官方名稱 warning', async (t) => {
  const f = await fixture(t);
  for (const c of CATEGORIES) { f.data[c].schemaVersion = '1.1.0'; f.extracts[c].schemaVersion = '1.1.0'; }
  const example = JSON.parse(await readFile(new URL('../../pipeline/schema/examples/1.1.0-example/weapons.json', import.meta.url), 'utf8'));
  for (const weapon of f.data.weapons.items) {
    weapon.values.curves = structuredClone(example.items[0].values.curves);
    weapon.values.attackCombos = structuredClone(example.items[0].values.attackCombos);
    weapon.values.bars[0].stats[0].curveId = 'example.example';
  }
  f.extracts.weapons.items = f.data.weapons.items.map(strip);
  const item = f.data.skills.items[0], extracted = f.extracts.skills.items[0];
  item.official.zh = '私譯效果提升25%。'; extracted.official.zh = item.official.zh;
  item.explanation.effect = item.official.zh; item.explanation.effectOrigin = 'official';
  await writeFile(f.options.translation, '- Example 0 - 私譯\n');
  const result = await f.run(), row = result.report.items.find(x => x.id === item.id);
  assert.equal(row.decision, 'pass');
  assert.equal(row.warnings[0].code, 'W_OFFICIAL_TEXT_NAME_MISMATCH');
  item.explanation.effect += '私譯';
  const changed = await f.run();
  assert.ok(changed.report.items.find(x => x.id === item.id).failures.some(x => x.code === 'T_NAME_NOT_OFFICIAL'));
});

// Scenario: this run marks its text index unavailable but leaves malformed text.json behind. Purpose: ignore stale JSON and keep the ordinary effect name check active.
test('InterT96_文字索引不可用時略過損壞殘留並檢查效果譯名', async (t) => {
  const f = await fixture(t);
  for (const c of CATEGORIES) { f.data[c].schemaVersion = '1.1.0'; f.previous[c].schemaVersion = '1.1.0'; f.extracts[c].schemaVersion = '1.1.0'; }
  const example = JSON.parse(await readFile(new URL('../../pipeline/schema/examples/1.1.0-example/weapons.json', import.meta.url), 'utf8'));
  for (const weapon of f.data.weapons.items) {
    weapon.values.curves = structuredClone(example.items[0].values.curves);
    weapon.values.attackCombos = structuredClone(example.items[0].values.attackCombos);
    weapon.values.bars[0].stats[0].curveId = 'example.example';
  }
  f.extracts.weapons.items = f.data.weapons.items.map(strip);

  const item = f.data.skills.items[0], extracted = f.extracts.skills.items[0];
  const keyword = { value: 'loc_effect_name' };
  item.values.params.keyword = keyword;
  extracted.values.params.keyword = structuredClone(keyword);
  item.official.zh = '獲得{keyword:%s}，效果提升25%。';
  extracted.official.zh = item.official.zh;
  item.explanation.effect = '私譯效果提升25%。';
  item.explanation.effectOrigin = 'official';
  f.extracts.skills.effectFormats = { [item.id]: { params: { keyword: {
    type: 'loc_string', numDecimals: null, prefix: '', suffix: '', valueSpace: 'display', manipulation: null,
  } } } };
  await writeFile(f.options.translation, '- Example 0 - 私譯\n');

  const diffDir = join(f.root, 'diff'), reportFile = join(f.root, 'report.json');
  await mkdir(diffDir);
  await json(join(diffDir, 'text-current.json'), { available: false });
  await writeFile(join(f.dirs.extract, 'text.json'), '{');

  const result = await f.run({ report: reportFile });
  const row = result.report.items.find((entry) => entry.id === item.id);
  assert.equal(result.exitCode, 0, JSON.stringify(result.report));
  assert.equal(result.report.result, 'degraded');
  assert.ok(row.failures.some((failure) => failure.code === 'T_NAME_NOT_OFFICIAL'));
  const written = JSON.parse(await readFile(reportFile, 'utf8'));
  assert.ok(written.items.find((entry) => entry.id === item.id).failures.some((failure) => failure.code === 'T_NAME_NOT_OFFICIAL'));
});
