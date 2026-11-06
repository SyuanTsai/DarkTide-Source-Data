import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import * as state from '../../pipeline/lib/state.mjs';
import { isCanonicalText } from '../../pipeline/lib/canonical-json.mjs';
const meta = { gameVersion: '1.2', sourceCommit: '0'.repeat(40), textBatch: 'example' };
const id = 'darktide:skill:example';
const info = { category: 'skills', change: 'changed', inputHash: '0'.repeat(64) };
// Scenario: reopen a retained item and try again after it is written. Purpose: clear stale outcomes immutably without reopening published items.
test('UnitT05_reopen clears retained outcome and rejects written items', () => {
  let s = state.registerItem(state.startRun(state.emptyState(), meta), id, info);
  s = state.keepPrevious(s, id, 'old failure');
  const reopened = state.reopenItem(s, id);
  assert.equal(s.run.items[id].outcome, 'kept-previous');
  assert.deepEqual([reopened.run.items[id].outcome, reopened.run.items[id].reason], [null, null]);
  for (const stage of ['described', 'verified', 'written']) s = state.advanceItem(s, id, stage);
  assert.throws(() => state.reopenItem(s, id));
});
// Scenario: exercise state persistence or validation. Purpose: protect state behavior.
test('UnitT10_state persistence and resumption', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'state-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const path = join(dir, 'state.json');
  assert.deepEqual(await state.readState(path), state.emptyState());
  let s = state.startRun(state.emptyState(), meta);
  s = state.registerItem(s, id, info);
  s = state.advanceItem(s, id, 'described');
  await state.writeState(path, s);
  assert.equal(isCanonicalText(await readFile(path, 'utf8')), true);
  assert.deepEqual(await state.readState(path), s);
  s = state.startRun(await state.readState(path), meta);
  assert.deepEqual(state.pendingItems(s, 'described'), []);
  assert.equal(state.registerItem(s, id, info).run.items[id].stage, 'described');
  assert.equal(
    state.registerItem(s, id, { ...info, inputHash: '1'.repeat(64) }).run.items[id].stage,
    'extracted',
  );
  assert.deepEqual(state.startRun(s, { ...meta, gameVersion: '1.3' }).run.items, {});
});
test('transitions, halt and completion are immutable', () => {
  let s = state.startRun(state.emptyState(), meta);
  s = state.registerItem(s, id, info);
  const original = structuredClone(s);
  assert.throws(() => state.advanceItem(s, id, 'verified'));
  assert.throws(() => state.completeRun(s));
  assert.deepEqual(s, original);
  s = state.haltRun(s, 'reason');
  s = state.startRun(s, meta);
  assert.equal(s.run.status, 'running');
  for (const stage of ['described', 'verified', 'written']) s = state.advanceItem(s, id, stage);
  assert.equal(s.run.items[id].outcome, 'updated');
  assert.equal(state.summarize(s).updated, 1);
  s = state.completeRun(s);
  assert.deepEqual(s.lastProcessed, meta);
});
// Scenario: exercise state persistence or validation. Purpose: protect state behavior.
test('UnitT20_invalid state cannot be written', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'state-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const path = join(dir, 'state.json');
  const s = state.startRun(state.emptyState(), meta);
  s.run.status = 'halted';
  await assert.rejects(state.writeState(path, s));
});
// Scenario: exercise state persistence or validation. Purpose: protect state behavior.
test('UnitT30_invalid states fail read and write', async (t) => {
  const { writeFile } = await import('node:fs/promises');
  const dir = await mkdtemp(join(tmpdir(), 'badstate-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const path = join(dir, 'state.json');
  let base = state.registerItem(state.startRun(state.emptyState(), meta), id, info);
  for (const mutate of [
    (s) => {
      s.run.status = 'halted';
    },
    (s) => {
      s.run.items[id].stage = 'unknown';
    },
    (s) => {
      s.run.items[id].category = 'terms';
    },
    (s) => {
      s.run.items[id].outcome = 'kept-previous';
    },
  ]) {
    const s = structuredClone(base);
    mutate(s);
    await assert.rejects(state.writeState(path, s));
    await writeFile(path, JSON.stringify(s));
    await assert.rejects(state.readState(path));
  }
});
test('pending, removed, kept and category summaries', () => {
  let s = state.startRun(state.emptyState(), meta);
  const ids = ['darktide:skill:a', 'darktide:skill:b', 'darktide:skill:c'];
  for (const id of ids)
    s = state.registerItem(s, id, { ...info, change: id.endsWith('a') ? 'removed' : 'changed' });
  s = state.advanceItem(s, ids[0], 'described');
  s = state.advanceItem(s, ids[1], 'described');
  assert.deepEqual(state.pendingItems(s, 'described'), [ids[2]]);
  assert.throws(() => state.advanceItem(s, ids[0], 'extracted'));
  assert.deepEqual(state.advanceItem(s, ids[0], 'described'), s);
  s = state.advanceItem(s, ids[0], 'verified');
  s = state.advanceItem(s, ids[0], 'written');
  s = state.keepPrevious(s, ids[1], '原因');
  s = state.keepPrevious(s, ids[2], '原因二');
  s = state.setCategory(s, 'weapons', { status: 'kept-previous', reason: '缺資料' });
  const summary = state.summarize(s);
  assert.equal(summary.removed, 1);
  assert.equal(summary.keptPrevious.length, 2);
  assert.deepEqual(summary.categoriesKept, [{ category: 'weapons', reason: '缺資料' }]);
  assert.equal(state.completeRun(s).run.status, 'completed');
});

// Scenario: exercise state persistence or validation. Purpose: protect state behavior.
test('UnitT40_resume, resets, summaries and immutable inputs', async (t) => {
  const call = (fn, input, ...args) => {
    const before = structuredClone(input);
    const result = fn(input, ...args);
    assert.deepEqual(input, before);
    return result;
  };
  const ids = ['darktide:skill:a', 'darktide:skill:b', 'darktide:skill:c'];
  let s = call(state.startRun, state.emptyState(), meta);
  for (const item of ids) s = call(state.registerItem, s, item, info);
  for (const item of ids.slice(0, 2)) s = call(state.advanceItem, s, item, 'described');
  const dir = await mkdtemp(join(tmpdir(), 'resume-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const path = join(dir, 'state.json');
  await state.writeState(path, s);
  s = call(state.startRun, await state.readState(path), meta);
  assert.deepEqual(Object.keys(s.run.items).sort(), ids);
  assert.equal(state.pendingItems(s, 'described').length, 1);
  s = call(state.keepPrevious, s, ids[0], 'reason');
  const reset = call(state.registerItem, s, ids[0], { ...info, inputHash: '1'.repeat(64) });
  assert.deepEqual(
    [
      reset.run.items[ids[0]].stage,
      reset.run.items[ids[0]].outcome,
      reset.run.items[ids[0]].reason,
    ],
    ['extracted', null, null],
  );
  s = call(state.setCategory, s, 'weapons', { status: 'kept-previous', reason: 'missing' });
  s = call(state.haltRun, s, 'halt');
  const summary = state.summarize(s);
  assert.equal(summary.pending, 2);
  assert.equal(summary.status, 'halted');
  assert.equal(summary.haltReason, 'halt');
  assert.deepEqual(summary.keptPrevious, [{ id: ids[0], reason: 'reason' }]);
  s = call(state.startRun, s, meta);
  assert.equal(s.run.items[ids[1]].stage, 'described');
  for (const item of ids.slice(1)) s = call(state.keepPrevious, s, item, 'other');
  s = call(state.completeRun, s);
  const next = call(state.startRun, s, { ...meta, gameVersion: '1.3' });
  assert.deepEqual(next.lastProcessed, meta);
});

// Scenario: exercise state persistence or validation. Purpose: protect state behavior.
test('UnitT50_null item produces schema error', async (t) => {
  const { writeFile } = await import('node:fs/promises');
  const dir = await mkdtemp(join(tmpdir(), 'null-item-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const path = join(dir, 'state.json');
  const s = state.registerItem(state.startRun(state.emptyState(), meta), id, info);
  s.run.items[id] = null;
  await writeFile(path, JSON.stringify(s));
  await assert.rejects(
    state.readState(path),
    (error) => error.message.includes('/run') && !error.message.includes('Cannot read properties'),
  );
});

// Scenario: obsolete registrations are removed unless already written. Purpose: preserve immutable state and completed items.
test('UnitT90_unregister removes pending items and rejects written items', () => {
  const original = state.registerItem(state.startRun(state.emptyState(), meta), id, info);
  const updated = state.unregisterItem(original, id);
  assert.ok(original.run.items[id]); assert.equal(updated.run.items[id], undefined);
  let written = original; for (const stage of ['described', 'verified', 'written']) written = state.advanceItem(written, id, stage);
  assert.throws(() => state.unregisterItem(written, id)); assert.ok(written.run.items[id]);
});
