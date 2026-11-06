import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, cp, mkdir, readFile, writeFile, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';
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
  return { dir, state, work, data, cloud, args, run, base: join(cloud, '1.1') };
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
    for (const ids of Object.values(diff)) assert.equal(ids.length, 1);
    assert.equal(contentHash(category, old[0]), contentHash(category, extract.items[0]));
  }
  assert.equal(itemFileName('darktide:skill:a'), 'darktide=skill=a.json');
  const entries = parseGlossary(await readFile(join(fixture, 'glossary.md'), 'utf8'));
  assert.deepEqual(matchGlossary(entries, ['EXAMPLE ability exampled']), entries.slice(0, 2));
});
test('決定性、接續、舊輸出與移除項目', async (t) => {
  const a = await setup(t), b = await setup(t); a.run(); b.run();
  const compare = async (relative) => assert.equal(await readFile(join(a.base, relative), 'utf8'), await readFile(join(b.base, relative), 'utf8'));
  await compare('diff/diff.json'); assert.equal(await readFile(a.state, 'utf8'), await readFile(b.state, 'utf8'));
  const names = await readdir(join(a.base, 'ai/input')); for (const name of names) await compare('ai/input/' + name);
  const before = await readFile(a.state, 'utf8'), report = await readFile(join(a.base, 'diff/diff.json'), 'utf8'); a.run();
  assert.equal(await readFile(a.state, 'utf8'), before); assert.equal(await readFile(join(a.base, 'diff/diff.json'), 'utf8'), report);
  const state = await read(a.state), removed = Object.entries(state.run.items).find(([, x]) => x.change === 'removed'); assert.equal(removed[1].stage, 'described'); assert.ok(!names.includes(itemFileName(removed[0])));
  const id = Object.keys(state.run.items).find((x) => state.run.items[x].change === 'changed'); const input = await read(join(a.base, 'ai/input', itemFileName(id)));
  const outputDir = join(a.base, 'ai/output'); await mkdir(outputDir, { recursive: true }); const outputFile = join(outputDir, itemFileName(id));
  const output = { schemaVersion: '1.0.0', id, inputHash: input.inputHash, explanation: { effect: '效果', conditions: '', calculation: '', notes: '', extra: '' }, errata: [] };
  await writeFile(outputFile, JSON.stringify(output)); a.run('--mark-described', id); a.run();
  assert.equal((await read(a.state)).run.items[id].stage, 'described'); assert.ok(!JSON.parse(a.run('--pending', '--json')).some((x) => x.id === id)); assert.equal(await readFile(outputFile, 'utf8'), JSON.stringify(output));
  const category = state.run.items[id].category, extractPath = join(a.work, 'extract', category + '.json'), extract = await read(extractPath); extract.items.find((x) => x.id === id).values.params.test.value = 99; await writeFile(extractPath, stringifyCanonical(extract)); a.run();
  assert.equal((await read(a.state)).run.items[id].stage, 'extracted'); assert.ok(JSON.parse(a.run('--pending', '--json')).some((x) => x.id === id)); assert.throws(() => a.run('--mark-described', id));
});
test('輸出驗證拒絕錯誤及不存在的檔案', async (t) => {
  const a = await setup(t); a.run(); const state = await read(a.state), id = Object.keys(state.run.items).find((x) => state.run.items[x].change === 'added');
  const input = await read(join(a.base, 'ai/input', itemFileName(id))), dir = join(a.base, 'ai/output'), file = join(dir, itemFileName(id)); await mkdir(dir, { recursive: true });
  const valid = { schemaVersion: '1.0.0', id, inputHash: input.inputHash, explanation: { effect: '效果', conditions: '', calculation: '', notes: '', extra: '' }, errata: [] };
  assert.throws(() => a.run('--mark-described', id));
  for (const output of [{ ...valid, id: 'darktide:skill:other' }, { ...valid, extra: 1 }, { ...valid, explanation: { ...valid.explanation, effect: '' } }, { ...valid, explanation: {} }, { ...valid, errata: [{ locale: 'en', official: '1', corrected: '2', valueRef: '/missing' }] }]) { await writeFile(file, JSON.stringify(output)); assert.throws(() => a.run('--mark-described', id)); }
  assert.throws(() => a.run('--mark-described', Object.keys(state.run.items).find((x) => state.run.items[x].change === 'removed')));
});
test('缺少、結構不符、首次執行及版本錯誤', async (t) => {
  const a = await setup(t); await cp(join(fixture, 'terms-mismatch.json'), join(a.work, 'extract/terms.json')); await rm(join(a.work, 'extract/weapons.json')); a.run();
  const report = await read(join(a.base, 'diff/diff.json')); assert.equal(report.categories.terms.status, 'structure-mismatch'); assert.equal(report.categories.weapons.status, 'missing');
  assert.ok(Object.values((await read(a.state)).run.items).every((x) => !['terms', 'weapons'].includes(x.category)));
  const b = await setup(t); await rm(join(b.data, 'current.json')); b.run(); const first = await read(join(b.base, 'diff/diff.json')); for (const c of CATEGORIES) { assert.equal(first.categories[c].added.length, 3); assert.equal(first.categories[c].removed.length, 0); }
  const c = await setup(t), p = join(c.work, 'extract/skills.json'), extract = await read(p); extract.gameVersion = '1.2'; await writeFile(p, stringifyCanonical(extract)); const before = await readFile(c.state, 'utf8'); assert.throws(() => c.run()); assert.equal(await readFile(c.state, 'utf8'), before);
});
test('雲端目錄未設定或不存在時不寫狀態或暫存目錄', async (t) => {
  const a = await setup(t), before = await readFile(a.state, 'utf8'), extract = await readFile(join(a.work, 'extract/skills.json'), 'utf8');
  const args = ['pipeline/diff.mjs', '--state', a.state, '--work-dir', a.work, '--data-dir', a.data]; const env = { ...process.env }; delete env.DARKTIDE_PIPELINE_CLOUD_DIR;
  assert.throws(() => execFileSync(process.execPath, args, { cwd: repo, env, stdio: 'pipe' })); assert.throws(() => execFileSync(process.execPath, [...args, '--cloud-dir', join(a.dir, 'absent')], { cwd: repo, env, stdio: 'pipe' }));
  assert.equal(await readFile(a.state, 'utf8'), before); assert.equal(await readFile(join(a.work, 'extract/skills.json'), 'utf8'), extract);
});
