import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { composeCandidate, buildCandidates } from '../../pipeline/lib/candidate.mjs';
import { writeCanonicalFile } from '../../pipeline/lib/canonical-json.mjs';
import { itemFileName } from '../../pipeline/lib/cloud-dir.mjs';
import { composeFinal } from '../../pipeline/lib/verify/compose.mjs';
import { retainItem, checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';

const previous = JSON.parse(await readFile(new URL('../../pipeline/schema/examples/0.0.0-example/skills.json', import.meta.url), 'utf8'));
const run = { gameVersion: '1.0', sourceCommit: 'a'.repeat(40), textBatch: 'new', items: {} };
const item = structuredClone(previous.items[0]);
item.source.commit = run.sourceCommit; item.source.text.batch = run.textBatch;
const extract = { status: 'ok', items: [item] };

// Scenario: unchanged extracts reuse descriptions and anchors. Purpose: preserve exact AI fields while updating source data.
test('UnitT10_unchanged candidate preserves descriptions without retaining stale sources', () => {
  const result = composeCandidate({ category: 'skills', run, extract, previous, unchanged: [item.id], outputs: {} });
  assert.deepEqual(result.items, [{ ...item, explanation: previous.items[0].explanation, errata: previous.items[0].errata }]);
  assert.equal(result.gameVersion, run.gameVersion);
  assert.equal(composeCandidate({ category: 'skills', run, extract: null }), null);
  assert.equal(composeCandidate({ category: 'skills', run, extract: { status: 'structure-mismatch' } }), null);
});

// Scenario: added output is absent, malformed, mismatched or stale. Purpose: omit unsafe descriptions for verify to diagnose.
test('UnitT20_candidate requires schema id and current inputHash', () => {
  const inputHash = '0'.repeat(64), active = { ...run, items: { [item.id]: { category: 'skills', change: 'added', inputHash } } };
  const output = { schemaVersion: '1.0.0', id: item.id, inputHash, explanation: previous.items[0].explanation, errata: [] };
  const build = (value) => composeCandidate({ category: 'skills', run: active, extract, outputs: { [item.id]: value } });
  for (const value of [undefined, {}, { ...output, id: 'darktide:skill:other' }, { ...output, inputHash: '1'.repeat(64) }, { ...output, extra: true }])
    assert.deepEqual(build(value).items, []);
  assert.equal(build(output).items.length, 1);
});

// Scenario: a fallback repeats across versions. Purpose: retain earliest provenance, deep copy and validate new envelopes.
test('UnitT30_compose retains earliest provenance and always emits a new envelope', () => {
  const retained = retainItem(previous.items[0], previous), next = retainItem(retained, run);
  assert.deepEqual(next, retained); assert.notEqual(next.source, retained.source);
  const data = composeFinal({ category: 'skills', status: 'kept-previous', previous, version: run, rows: [] });
  assert.equal(data.gameVersion, run.gameVersion); assert.deepEqual(data.items[0], retained);
  assert.deepEqual(checkDataFile('skills', stringifyCanonical(data)).errors, []);
  assert.deepEqual(composeFinal({ category: 'skills', status: 'kept-previous', version: run, rows: [] }).items, []);
});

// Scenario: filesystem outputs are missing, broken JSON, invalid schema or stale. Purpose: isolate tolerant AI reads from deterministic candidate composition.
test('InterT40_candidate IO omits unsafe output and canonicalizes valid output', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'candidate-test-')); t.after(() => rm(root, { recursive: true, force: true }));
  const extractDir = join(root, 'extract'), aiOutputDir = join(root, 'ai'), previousDir = join(root, 'previous');
  await mkdir(aiOutputDir); await writeCanonicalFile(join(extractDir, 'skills.json'), extract);
  await writeCanonicalFile(join(previousDir, 'skills.json'), previous);
  const inputHash = '0'.repeat(64), active = { ...run, items: { [item.id]: { category: 'skills', change: 'changed', inputHash } } };
  const output = { schemaVersion: '1.0.0', id: item.id, inputHash, explanation: previous.items[0].explanation, errata: previous.items[0].errata };
  const build = () => buildCandidates({ run: active, extractDir, aiOutputDir, previousDir, diffReport: { categories: { skills: { status: 'ok' } } } });
  assert.deepEqual((await build()).skills.items, []);
  for (const text of ['{', '{}', JSON.stringify({ ...output, inputHash: '1'.repeat(64) }), JSON.stringify({ ...output, id: 'darktide:skill:other' })]) {
    await writeFile(join(aiOutputDir, itemFileName(item.id)), text); assert.deepEqual((await build()).skills.items, []);
  }
  await writeFile(join(aiOutputDir, itemFileName(item.id)), JSON.stringify(output, null, 2));
  const a = await build(), b = await build();
  assert.equal(stringifyCanonical(a), stringifyCanonical(b)); assert.deepEqual(a.skills.items[0].errata, output.errata);
  assert.equal(a.weapons, null); assert.equal(a.blessings, null); assert.equal(a.terms, null);
});

// Scenario: diff marks a category missing while an old extract exists. Purpose: avoid reading stale extract bytes.
test('InterT50_candidate ignores extract when diff status is not ok', async (t) => {
  const root = await mkdtemp(join(tmpdir(), 'candidate-test-')); t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(root, { recursive: true }); await writeFile(join(root, 'skills.json'), '{invalid');
  const result = await buildCandidates({ run, extractDir: root, aiOutputDir: root, previousDir: root, diffReport: { categories: { skills: { status: 'missing' } } } });
  assert.equal(result.skills, null);
});
