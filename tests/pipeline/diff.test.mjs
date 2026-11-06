import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { checkCurrent, checkDataFile, CATEGORIES } from '../../pipeline/lib/data-files.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';
import { contentHash, diffCategory } from '../../pipeline/lib/diff-core.mjs';
import { itemFileName } from '../../pipeline/lib/cloud-dir.mjs';
import { parseGlossary, matchGlossary } from '../../pipeline/lib/glossary.mjs';

const repo = resolve('.'), fixture = join(repo, 'tests/pipeline/fixtures/diff');
if (process.env.NODE_TEST_CONTEXT) delete process.env.NODE_OPTIONS;
const meta = { gameVersion: '1.1', sourceCommit: '1'.repeat(40), textBatch: 'example-batch' };
const read = async (p) => JSON.parse(await readFile(p, 'utf8'));
async function setup(t) {
  const dir = await mkdtemp(join(tmpdir(), 'darktide-diff-')); t.after(() => rm(dir, { recursive: true, force: true }));
  const state = join(dir, 'state.json'), work = join(dir, 'work'), data = join(dir, 'data'), cloud = join(dir, 'cloud'), glossary = join(dir, 'glossary');
  await mkdir(join(work, 'extract'), { recursive: true }); await mkdir(cloud); await mkdir(glossary);
  await cp(join(fixture, 'data'), data, { recursive: true }); await cp(join(fixture, 'extract-1.1'), join(work, 'extract'), { recursive: true }); await cp(join(fixture, 'glossary.md'), join(glossary, 'Translation.md'));
  execFileSync('git', ['init', '-q', glossary]); execFileSync('git', ['-C', glossary, 'add', 'Translation.md']); execFileSync('git', ['-C', glossary, '-c', 'user.name=test', '-c', 'user.email=test@example.com', 'commit', '-qm', 'fixture'], { env: { ...process.env, GIT_AUTHOR_DATE: '2001-01-01T00:00:00Z', GIT_COMMITTER_DATE: '2001-01-01T00:00:00Z' } });
  await writeState(state, startRun(emptyState(), meta));
  const args = ['--state', state, '--work-dir', work, '--data-dir', data, '--cloud-dir', cloud, '--glossary', join(glossary, 'Translation.md')];
  const run = (...extra) => execFileSync(process.execPath, ['pipeline/diff.mjs', ...args, ...extra], { cwd: repo, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  const fail = (keyword, ...extra) => { const result = spawnSync(process.execPath, ['pipeline/diff.mjs', ...args, ...extra], { cwd: repo, encoding: 'utf8' }); assert.equal(result.status, 1); assert.match(result.stderr, keyword); return result; };
  return { dir, state, work, data, cloud, args, run, fail, base: join(cloud, '1.1') };
}
async function snapshot(dir) {
  const result = {};
  async function visit(path, prefix = '') { for (const entry of await readdir(path, { withFileTypes: true })) { const name = prefix ? `${prefix}/${entry.name}` : entry.name; if (entry.isDirectory()) await visit(join(path, entry.name), name); else result[name] = await readFile(join(path, entry.name)); } }
  await visit(dir); return result;
}
test('fixture 通過 WP1 驗證，比對與譯名規則', async () => {
  assert.equal(checkCurrent(await readFile(join(fixture, 'data/current.json'), 'utf8')).valid, true);
  for (const category of CATEGORIES) {
    const previous = await readFile(join(fixture, 'data/1.0', category + '.json'), 'utf8');
    assert.deepEqual(checkDataFile(category, previous).errors, []);
    const extract = await read(join(fixture, 'extract-1.1', category + '.json'));
    const old = JSON.parse(previous).items;
    const padded = extract.items.map((item) => ({ ...item, explanation: { effect: '-', conditions: '', calculation: '', notes: '', extra: '' }, errata: [] }));
    assert.deepEqual(checkDataFile(category, stringifyCanonical({ schemaVersion: '1.0.0', category, ...meta, items: padded })).errors, []);
    const diff = diffCategory(category, old, extract.items);
    const expected = {
      skills: { added: ['darktide:skill:psyker:fixture_d'], changed: ['darktide:skill:psyker:fixture_b'], removed: ['darktide:skill:psyker:fixture_c'], unchanged: ['darktide:skill:psyker:fixture_a'] },
      weapons: { added: ['darktide:weapon:example_family:fixture_d'], changed: ['darktide:weapon:example_family:fixture_b'], removed: ['darktide:weapon:example_family:fixture_c'], unchanged: ['darktide:weapon:example_family:fixture_a'] },
      blessings: { added: ['darktide:blessing:fixture_d'], changed: ['darktide:blessing:fixture_b'], removed: ['darktide:blessing:fixture_c'], unchanged: ['darktide:blessing:fixture_a'] },
      terms: { added: ['darktide:term:keyword:fixture_d'], changed: ['darktide:term:keyword:fixture_b'], removed: ['darktide:term:keyword:fixture_c'], unchanged: ['darktide:term:keyword:fixture_a'] },
    };
    assert.deepEqual(diff, expected[category]);
    assert.equal(contentHash(category, old[0]), contentHash(category, extract.items[0]));
  }
  assert.equal(itemFileName('darktide:skill:a'), 'darktide=skill=a.json');
  const entries = parseGlossary(await readFile(join(fixture, 'glossary.md'), 'utf8'));
  assert.deepEqual(entries, [{ en: 'Example', zh: '範例', line: 1 }, { en: 'ability', zh: '能力', line: 2 }, { en: 'ample', zh: '不應命中', line: 3 }, { en: 'Other', zh: '其他', line: 4 }]);
  assert.deepEqual(matchGlossary(entries, ['EXAMPLE ability exampled']).map((x) => x.en), ['Example', 'ability']);
  assert.deepEqual(matchGlossary(entries, ['exampled ampleton']).map((x) => x.en), []);
});
test('決定性、接續、舊輸出與移除項目', async (t) => {
  const a = await setup(t), b = await setup(t); a.run(); b.run();
  const compare = async (relative) => assert.equal(await readFile(join(a.base, relative), 'utf8'), await readFile(join(b.base, relative), 'utf8'));
  await compare('diff/diff.json'); assert.equal(await readFile(a.state, 'utf8'), await readFile(b.state, 'utf8'));
  const names = await readdir(join(a.base, 'ai/input')); for (const name of names) await compare('ai/input/' + name);
  const beforeInputs = await snapshot(join(a.base, 'ai/input'));
  assert.deepEqual(beforeInputs, await snapshot(join(b.base, 'ai/input')));
  const before = await readFile(a.state, 'utf8'), report = await readFile(join(a.base, 'diff/diff.json'), 'utf8'); a.run();
  assert.equal(await readFile(a.state, 'utf8'), before); assert.equal(await readFile(join(a.base, 'diff/diff.json'), 'utf8'), report);
  assert.deepEqual(await snapshot(join(a.base, 'ai/input')), beforeInputs);
  const state = await read(a.state), removed = Object.entries(state.run.items).find(([, x]) => x.change === 'removed'); assert.equal(removed[1].stage, 'described'); assert.ok(!names.includes(itemFileName(removed[0])));
  const id = Object.keys(state.run.items).find((x) => state.run.items[x].change === 'changed'); const input = await read(join(a.base, 'ai/input', itemFileName(id)));
  const outputDir = join(a.base, 'ai/output'); await mkdir(outputDir, { recursive: true }); const outputFile = join(outputDir, itemFileName(id));
  const output = { schemaVersion: '1.0.0', id, inputHash: input.inputHash, explanation: { effect: '效果', conditions: '', calculation: '', notes: '', extra: '' }, errata: [] };
  await writeFile(outputFile, JSON.stringify(output)); a.run('--mark-described', id); a.run();
  assert.equal((await read(a.state)).run.items[id].stage, 'described'); assert.deepEqual(JSON.parse(a.run('--pending', '--json')).map((x) => x.id), ['darktide:blessing:fixture_d', 'darktide:skill:psyker:fixture_b', 'darktide:skill:psyker:fixture_d', 'darktide:term:keyword:fixture_b', 'darktide:term:keyword:fixture_d', 'darktide:weapon:example_family:fixture_b', 'darktide:weapon:example_family:fixture_d']); assert.equal(await readFile(outputFile, 'utf8'), JSON.stringify(output));
  const category = state.run.items[id].category, extractPath = join(a.work, 'extract', category + '.json'), extract = await read(extractPath); extract.items.find((x) => x.id === id).values.params.test.value = 99; await writeFile(extractPath, stringifyCanonical(extract)); a.run();
  const updated = (await read(a.state)).run.items[id]; assert.notEqual(updated.inputHash, input.inputHash); assert.equal(updated.stage, 'extracted'); assert.ok(JSON.parse(a.run('--pending', '--json')).some((x) => x.id === id)); a.fail(/inputHash 不符/, '--mark-described', id);
});
test('輸出驗證拒絕錯誤及不存在的檔案', async (t) => {
  const a = await setup(t); a.run(); const state = await read(a.state), id = Object.keys(state.run.items).find((x) => state.run.items[x].change === 'added');
  const input = await read(join(a.base, 'ai/input', itemFileName(id))), dir = join(a.base, 'ai/output'), file = join(dir, itemFileName(id)); await mkdir(dir, { recursive: true });
  const valid = { schemaVersion: '1.0.0', id, inputHash: input.inputHash, explanation: { effect: '效果', conditions: '', calculation: '', notes: '', extra: '' }, errata: [] };
  const missing = a.fail(/ai\/output\/.*找不到檔案/, '--mark-described', id); assert.ok(!missing.stderr.includes(a.dir));
  for (const [output, error] of [[{ ...valid, id: 'darktide:skill:other' }, /id.*不符/], [{ ...valid, extra: 1 }, /驗證失敗/], [{ ...valid, explanation: { ...valid.explanation, effect: '' } }, /驗證失敗/], [{ ...valid, explanation: {} }, /驗證失敗/], [{ ...valid, errata: [{ locale: 'en', official: '1', corrected: '2', valueRef: '/missing' }] }, /驗證失敗/]]) { await writeFile(file, JSON.stringify(output)); a.fail(error, '--mark-described', id); }
  a.fail(/無法標記/, '--mark-described', Object.keys(state.run.items).find((x) => state.run.items[x].change === 'removed'));
  await writeFile(file, JSON.stringify(valid));
  const inputPath = join(a.base, 'ai/input', itemFileName(id)), before = await readFile(a.state), altered = { ...input, item: { ...input.item, id: 'darktide:blessing:fixture_b' } };
  await writeFile(inputPath, JSON.stringify(altered)); a.fail(/id.*不符/, '--mark-described', id); assert.deepEqual(await readFile(a.state), before);
  for (const [field, value] of [['category', 'skills'], ['change', 'changed']]) { await writeFile(inputPath, JSON.stringify({ ...input, [field]: value })); a.fail(/不符/, '--mark-described', id); assert.deepEqual(await readFile(a.state), before); }
});
test('缺少、結構不符、首次執行及版本錯誤', async (t) => {
  const a = await setup(t); await cp(join(fixture, 'terms-mismatch.json'), join(a.work, 'extract/terms.json')); await rm(join(a.work, 'extract/weapons.json')); a.run();
  const report = await read(join(a.base, 'diff/diff.json')); assert.equal(report.categories.terms.status, 'structure-mismatch'); assert.equal(report.categories.weapons.status, 'missing');
  assert.ok(Object.values((await read(a.state)).run.items).every((x) => !['terms', 'weapons'].includes(x.category)));
  const b = await setup(t); await rm(join(b.data, 'current.json')); b.run(); const first = await read(join(b.base, 'diff/diff.json')); for (const c of CATEGORIES) { assert.equal(first.categories[c].added.length, 3); assert.equal(first.categories[c].removed.length, 0); }
  const c = await setup(t), p = join(c.work, 'extract/skills.json'), extract = await read(p); extract.gameVersion = '1.2'; await writeFile(p, stringifyCanonical(extract)); const before = await readFile(c.state, 'utf8'); const failure = c.fail(/extract\/skills\.json.*gameVersion.*不符/); assert.ok(!failure.stderr.includes(c.dir)); assert.equal(await readFile(c.state, 'utf8'), before);
});
test('雲端目錄未設定或不存在時不寫狀態或暫存目錄', async (t) => {
  const a = await setup(t), before = await readFile(a.state), workBefore = await snapshot(a.work);
  const args = ['pipeline/diff.mjs', '--state', a.state, '--work-dir', a.work, '--data-dir', a.data]; const env = { ...process.env }; delete env.DARKTIDE_PIPELINE_CLOUD_DIR;
  for (const extra of [[], ['--cloud-dir', join(a.dir, 'absent')]]) { const result = spawnSync(process.execPath, [...args, ...extra], { cwd: repo, env, encoding: 'utf8' }); assert.equal(result.status, 1); assert.match(result.stderr, /雲端中間檔目錄/); assert.deepEqual(await readFile(a.state), before); assert.deepEqual(await snapshot(a.work), workBefore); }
  await assert.rejects(readdir(join(a.dir, 'absent')), { code: 'ENOENT' });
});

test('--mark-described 空白或缺少 ID 時拒絕且不改動 state/cloud', async (t) => {
  const a = await setup(t); a.run();
  const stateBefore = await readFile(a.state), cloudBefore = await snapshot(a.cloud);
  for (const extra of [['--mark-described', ''], ['--mark-described']]) {
    const result = spawnSync(process.execPath, ['pipeline/diff.mjs', ...a.args, ...extra], { cwd: repo, encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /錯誤/);
    assert.deepEqual(await readFile(a.state), stateBefore);
    assert.deepEqual(await snapshot(a.cloud), cloudBefore);
  }
});

// Scenario: AI errata anchors are checked against extracted English and Chinese text. Purpose: reject invalid locations without changing state.
test('InterT40_mark described validates errata anchors', async (t) => {
  const a = await setup(t), extractPath = join(a.work, 'extract/blessings.json'), extract = await read(extractPath);
  const item = extract.items.find((x) => x.id === 'darktide:blessing:fixture_d');
  item.official = { en: 'Gain 10% damage. Gain 10% damage.', zh: '提升傷害。' };
  await writeFile(extractPath, stringifyCanonical(extract)); a.run();
  const id = item.id, input = await read(join(a.base, 'ai/input', itemFileName(id))), dir = join(a.base, 'ai/output');
  await mkdir(dir, { recursive: true }); const outputPath = join(dir, itemFileName(id));
  const entry = { locale: 'en', official: '10%', corrected: '20%', valueRef: '/params/test/value', anchor: { field: 'official', locale: 'en', text: 'Gain 10% damage', occurrence: 1 } };
  const output = { schemaVersion: '1.0.0', id, inputHash: input.inputHash, explanation: { effect: '效果', conditions: '', calculation: '', notes: '', extra: '' }, errata: [entry] };
  const before = await readFile(a.state);
  for (const [bad, expected] of [
    [{ ...entry, anchor: undefined }, /anchor/],
    [{ ...entry, anchor: { ...entry.anchor, text: 'missing' } }, /Anchor text not found at occurrence/],
    [{ ...entry, anchor: { ...entry.anchor, occurrence: 3 } }, /Anchor text not found at occurrence/],
    [{ ...entry, anchor: { ...entry.anchor, locale: 'zh' } }, /Anchor locale must match errata locale/],
  ]) {
    await writeFile(outputPath, JSON.stringify({ ...output, errata: [bad] }));
    const result = a.fail(expected, '--mark-described', id);
    assert.match(result.stderr, /ai\/output\/.*驗證失敗/); assert.ok(!result.stderr.includes(a.dir)); assert.deepEqual(await readFile(a.state), before);
  }
  for (const good of [entry, { ...entry, anchor: { ...entry.anchor, occurrence: 2 } }, { ...entry, locale: 'zh', anchor: { field: 'official', locale: 'zh', text: '提升傷害', occurrence: 1 } }]) {
    await writeFile(outputPath, JSON.stringify({ ...output, errata: [good] }));
    const result = spawnSync(process.execPath, ['pipeline/diff.mjs', ...a.args, '--mark-described', id], { cwd: repo, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr); assert.equal((await read(a.state)).run.items[id].stage, 'described');
    await writeFile(a.state, before);
  }
});
