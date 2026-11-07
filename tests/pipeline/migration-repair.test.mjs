import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir, readdir, lstat, symlink } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { buildMigration, applyPatch, checkCandidate } from '../../scripts/migration/lib/repair-tasks.mjs';
import { writePrepared, applyPrepared, assertExternalOutput, loadLegacyCache } from '../../scripts/migration/lib/migration-io.mjs';
import { itemFileName } from '../../pipeline/lib/cloud-dir.mjs';
import { inputs, term, hash } from './fixtures/migration.mjs';

async function out(t) {
  const dir = await mkdtemp(join(tmpdir(), 'syp391-migration-'));
  // Keep generated fixture data: the migration workflow never deletes existing data.
  t.diagnostic(`fixture: ${dir}`);
  return dir;
}
async function snapshot(dir, prefix = '') {
  const result = {};
  for (const name of (await readdir(dir)).sort()) {
    const relative = prefix + name, path = join(dir, name);
    if ((await lstat(path)).isDirectory()) Object.assign(result, await snapshot(path, relative + '/'));
    else result[relative] = hash(await readFile(path));
  }
  return result;
}
const patchFor = task => ({ id: task.id, taskHash: task.taskHash, extractHash: task.extractHash,
  replacements: task.allowedChanges.ranges.map(r => ({ rangeId: r.id, originalHash: r.sha256, text: '修復。' })), errata: [] });

// Scenario: Valid copy passes the existing gates. Purpose: avoid requesting unnecessary edits.
test('UnitT10_valid_copy_produces_no_repair_task', () => {
  const plan = buildMigration(inputs());
  assert.equal(plan.tasks.length, 0);
  assert.equal(plan.report.totals.passed, 1);
});

// Scenario: One sentence contains English and another an unsupported value. Purpose: restrict edits to the actual failed sentences.
test('UnitT20_tasks_include_originals_hashes_and_sentence_locations', () => {
  const plan = buildMigration(inputs('保留。broken。數值 7654321。末句。'));
  const task = plan.tasks[0];
  assert.equal(task.originalExplanation.effect, '保留。broken。數值 7654321。末句。');
  assert.ok(task.extracted.values);
  assert.deepEqual(task.allowedChanges.ranges.map(r => r.text), ['broken。', '數值 7654321。']);
  assert.deepEqual(task.allowedChanges.ranges.map(r => r.index), [1, 2]);
  assert.ok(task.failures.every(f => f.locations.length && f.message && f.path && f.code));
  assert.ok(task.immutable.ranges.some(r => r.text === '保留。'));
  assert.ok(task.taskHash && task.extractHash);
});

// Scenario: A placeholder spans a newline, and coverage is absent from all sentences. Purpose: report explicit section fallback.
test('UnitT25_cross_sentence_and_values_coverage_use_section_scope', () => {
  const plan = buildMigration(inputs('前文 {\n標記}。'));
  assert.equal(plan.report.scopeSectionTasks, 1);
  assert.ok(plan.tasks[0].allowedChanges.ranges.some(r => r.scope === 'section'));
  const item = term(); item.values.params = { damage: { value: 17 } };
  const coverage = buildMigration(inputs('有效。', item)).tasks[0];
  assert.ok(coverage.failures.some(f => f.path === '/values' && f.locations.some(l => l.scope === 'section')));
});

// Scenario: A patch names an intact sentence or adds unrelated fields. Purpose: prevent wholesale or out-of-scope rewrites.
test('UnitT30_reject_out_of_scope_patch_and_unknown_fields', () => {
  const task = buildMigration(inputs('保留。broken。')).tasks[0];
  const patch = patchFor(task);
  patch.replacements[0].rangeId = 'effect:0';
  assert.throws(() => applyPatch(task, patch), /scope/);
  assert.throws(() => applyPatch(task, { ...patchFor(task), name: '偷偷改名' }), /field/);
  assert.throws(() => applyPatch(task, { ...patchFor(task), errata: [{}] }), /errata/);
});

// Scenario: Task, extract or range hashes differ. Purpose: reject stale or tampered repairs.
test('UnitT40_reject_task_extract_and_original_hash_mismatch', () => {
  const task = buildMigration(inputs('broken。')).tasks[0];
  for (const field of ['taskHash', 'extractHash']) assert.throws(() => applyPatch(task, { ...patchFor(task), [field]: 'bad' }), /hash/);
  const patch = patchFor(task); patch.replacements[0].originalHash = 'bad';
  assert.throws(() => applyPatch(task, patch), /hash/);
  const changed = structuredClone(task); changed.allowedChanges.ranges[0].text = '保留。';
  assert.throws(() => applyPatch(changed, patchFor(changed)), /hash/);
});

// Scenario: Official text has an unresolved template. Purpose: block promotion and lock effect pending the next work package.
test('UnitT45_official_effect_is_blocked_and_immutable', () => {
  const input = inputs(); const item = input.extracts.terms.items[0];
  item.id = 'darktide:skill:test'; item.values = { archetype: 'test', tree: 'test', nodeType: 'stat', icon: null, parents: [], maxPoints: 1, params: {} };
  item.source.text.keys.name = 'loc_test'; item.official.zh = '{damage:%s}傷害';
  input.extracts.skills.items = [item]; input.extracts.terms.items = [];
  input.documents = [{ path: 'domains/skills.json', value: { kind: 'skills', source: { records: [{ recordId: 'old:skill', kind: 'skill', payload: { nameKey: 'loc_test' } }] },
    web: { presentations: [{ locale: 'zh-TW', entityRef: { recordId: 'old:skill' }, detailSections: [{ sectionId: 'effects', items: [{ text: '舊機制。' }] }] }] } } }];
  const plan = buildMigration(input);
  assert.equal(plan.rows[0].status, 'blocked:official-effect');
  assert.equal(plan.report.totals.blocked, 1);
  assert.ok(!plan.tasks[0].allowedChanges.ranges.some(r => r.section === 'effect'));
});

// Scenario: Official text has a wrong number and an exact values reference exists. Purpose: allow narrowly authorized errata and validate its anchor.
test('UnitT47_append_errata_requires_a_real_anchor_and_passes_existing_gates', () => {
  const item = term(); item.values.params = { damage: { value: 10 } }; item.official.en = 'Damage 20';
  const plan = buildMigration(inputs('造成 10 傷害。', item)), task = plan.tasks[0], patch = patchFor(task);
  assert.equal(task.allowedChanges.appendErrata, true);
  assert.deepEqual(task.allowedChanges.ranges, []);
  const entry = { locale: 'en', official: '20', corrected: '10', valueRef: '/params/damage/value',
    anchor: { field: 'official', locale: 'en', text: '20', occurrence: 1 } };
  patch.errata = [entry];
  const candidate = applyPatch(task, patch);
  assert.deepEqual(checkCandidate('terms', candidate, task.extracted, plan.context).failures, []);
  patch.errata = [{ ...entry, anchor: { ...entry.anchor, text: 'missing' } }];
  assert.ok(checkCandidate('terms', applyPatch(task, patch), task.extracted, plan.context).failures.length);
});

// Scenario: An official name conflicts with a glossary variant. Purpose: reuse the real translation rules without weakening the check.
test('UnitT48_glossary_conflicts_produce_local_repair', () => {
  const item = term(); item.name = { origin: 'official', en: 'Stagger', zh: '官方名稱' };
  const input = inputs('保留。舊譯名。', item); input.translation = '- Stagger - 舊譯名';
  const task = buildMigration(input).tasks[0];
  assert.ok(task.failures.some(f => f.code === 'T_NAME_NOT_OFFICIAL'));
  assert.deepEqual(task.allowedChanges.ranges.map(r => r.text), ['舊譯名。']);
});

// Scenario: An unresolved repair is applied twice. Purpose: never promote failed copy and ensure byte-identical output.
test('InterT50_unresolved_prevents_baseline_and_outputs_are_repeatable', async t => {
  const dir = await out(t), plan = buildMigration(inputs('保留。broken。'));
  await writePrepared(plan, dir); const first = await snapshot(dir);
  await writePrepared(plan, dir); assert.deepEqual(await snapshot(dir), first);
  const report = await applyPrepared(plan, dir);
  assert.equal(report.baselineReady, false);
  assert.ok(!(await readdir(dir)).includes('baseline'));
  const after = await snapshot(dir); await applyPrepared(plan, dir); assert.deepEqual(await snapshot(dir), after);
  await mkdir(join(dir, 'repair/patches'), { recursive: true });
  const patch = patchFor(plan.tasks[0]); patch.replacements[0].text = 'stillbroken。';
  await writeFile(join(dir, 'repair/patches', itemFileName(patch.id)), JSON.stringify(patch));
  assert.equal((await applyPrepared(plan, dir)).baselineReady, false);
  assert.ok(!(await readdir(dir)).includes('baseline'));
});

// Scenario: An authorized sentence replacement passes all gates. Purpose: publish only the complete validated non-blocked set.
test('InterT60_successful_apply_preserves_intact_copy_and_repeats_bytes', async t => {
  const dir = await out(t), plan = buildMigration(inputs('保留。broken。末句。'));
  await writePrepared(plan, dir); await mkdir(join(dir, 'repair/patches'), { recursive: true });
  const patch = patchFor(plan.tasks[0]);
  await writeFile(join(dir, 'repair/patches', itemFileName(patch.id)), JSON.stringify(patch));
  assert.equal((await applyPrepared(plan, dir)).baselineReady, true);
  const data = JSON.parse(await readFile(join(dir, 'baseline/data/1.13.4/terms.json')));
  assert.equal(data.items[0].explanation.effect, '保留。修復。末句。');
  assert.equal(data.items[0].retainedFrom, undefined);
  const first = await snapshot(dir); await applyPrepared(plan, dir); assert.deepEqual(await snapshot(dir), first);
});

// Scenario: One valid term and one blocked skill remain. Purpose: exclude blocked copy explicitly while promoting the complete eligible subset.
test('InterT65_baseline_excludes_official_effect_blockers', async t => {
  const dir = await out(t), input = inputs(), item = term();
  item.id = 'darktide:skill:test'; item.values = { archetype: 'test', tree: 'test', nodeType: 'stat', icon: null, parents: [], maxPoints: 1, params: {} };
  item.source.text.keys.name = 'loc_test'; item.official.zh = '';
  input.extracts.skills.items = [item];
  input.documents.push({ path: 'domains/skills.json', value: { kind: 'skills', source: { records: [{ recordId: 'old:skill', kind: 'skill', payload: { nameKey: 'loc_test' } }] },
    web: { presentations: [{ locale: 'zh-TW', entityRef: { recordId: 'old:skill' }, detailSections: [{ sectionId: 'effects', items: [{ text: '舊機制。' }] }] }] } } });
  const plan = buildMigration(input); await writePrepared(plan, dir);
  const report = await applyPrepared(plan, dir);
  assert.equal(report.baselineReady, true); assert.equal(report.totals.blocked, 1);
  assert.equal(JSON.parse(await readFile(join(dir, 'baseline/data/1.13.4/skills.json'))).items.length, 0);
  assert.equal(JSON.parse(await readFile(join(dir, 'baseline/data/1.13.4/terms.json'))).items.length, 1);
});

// Scenario: A caller changes source inputs or persisted draft after prepare. Purpose: enforce immutable task inputs through apply.
test('InterT70_reject_changed_extract_draft_and_task', async t => {
  const dir = await out(t), plan = buildMigration(inputs('broken。'));
  await writePrepared(plan, dir);
  const changed = inputs('broken。'); changed.extracts.terms.items[0].key = 'changed';
  changed.documents[0].value.source.records[0].payload.termKey = 'changed';
  await assert.rejects(applyPrepared(buildMigration(changed), dir), /input|hash/);
  const taskFile = join(dir, 'repair/tasks', itemFileName(plan.tasks[0].id));
  const original = await readFile(taskFile); await writeFile(taskFile, '{}\n');
  await assert.rejects(applyPrepared(plan, dir), /task|hash/);
  await writeFile(taskFile, original);
  await writeFile(join(dir, 'draft/data/1.13.4/terms.json'), '{}\n');
  await assert.rejects(applyPrepared(plan, dir), /draft|hash/);
});

// Scenario: Output is inside a repo or a worktree containing a .git file. Purpose: enforce external-only output before creating files.
test('InterT80_reject_git_output_and_require_absolute_path', async t => {
  const dir = await out(t); execFileSync('git', ['init', '--quiet', dir]);
  await assert.rejects(assertExternalOutput(join(dir, 'nested/new')), /git/i);
  const worktree = await out(t); await writeFile(join(worktree, '.git'), 'gitdir: C:/missing\n');
  await assert.rejects(assertExternalOutput(join(worktree, 'nested')), /git/i);
  await assert.rejects(assertExternalOutput('relative'), /absolute/);
});

// Scenario: A nested output junction points into a repo, or the output is a bare repo. Purpose: prevent physical writes into any repository.
test('InterT85_reject_junction_escape_and_bare_repository', async t => {
  const dir = await out(t), repo = await out(t); execFileSync('git', ['init', '--quiet', repo]);
  await symlink(repo, join(dir, 'draft'), 'junction');
  await assert.rejects(writePrepared(buildMigration(inputs()), dir), /git|symlink/i);
  assert.ok(!(await readdir(dir)).includes('migration-map.json'));
  const bare = await out(t); execFileSync('git', ['init', '--bare', '--quiet', bare]);
  await assert.rejects(assertExternalOutput(join(bare, 'new')), /git/i);
});

// Scenario: An ancestor contains an empty .git directory with no repository metadata. Purpose: accept the specified external workspace without touching that directory.
test('InterT87_empty_git_directory_is_not_a_repository', async t => {
  const dir = await out(t); await mkdir(join(dir, '.git'));
  assert.equal(await assertExternalOutput(join(dir, 'new')), join(dir, 'new'));
  assert.deepEqual(await readdir(join(dir, '.git')), []);
});

// Scenario: A cache claims another revision. Purpose: reject unpinned snapshots before reading domain data.
test('InterT90_reject_unpinned_cache', async t => {
  const dir = await out(t); await writeFile(join(dir, 'manifest.json'), JSON.stringify({ contentVersion: 'wrong', files: [] }));
  await assert.rejects(loadLegacyCache(dir), /snapshot|hash/);
});
