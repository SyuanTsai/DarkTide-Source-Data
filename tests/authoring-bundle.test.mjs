import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { test } from 'node:test';
import { readFile } from 'node:fs/promises';
import { readAuthoringBundle, splitAuthoringBundle, assembleAuthoringBundle, readAuthoringBundleAtCommit, AUTHORING_PART_TARGET_BYTES, W07_INDEX } from '../scripts/content/lib/authoring-bundle.mjs';
import { validateSourceContract } from '../scripts/content/contract-validator.mjs';

const legacy = JSON.parse(execFileSync('git', ['show', 'e2020f1851951b1ada0824d652ec7032076b151b:content/authoring/v2/w07-weapons.json'], { maxBuffer: 64 * 1024 * 1024 }));
const split = splitAuthoringBundle(legacy);
const assembled = await assembleAuthoringBundle((name) => split.get(name));

test('real bundle preserves review state and every receipt digest', () => {
  const before = validateSourceContract(legacy);
  const after = validateSourceContract(assembled.bundle);
  assert.equal(before.valid, true, JSON.stringify(before.issues));
  assert.equal(after.valid, true, JSON.stringify(after.issues));
  const counts = (bundle) => bundle.records.reduce((result, record) => (result[record.reviewState] = (result[record.reviewState] ?? 0) + 1, result), {});
  assert.deepEqual(counts(assembled.bundle), counts(legacy));
  // Validation derives approved state only when both receipt digests are current.
  assert.equal(after.issues.filter((issue) => issue.code === 'review-state-mismatch').length, 0);
  assert.ok(assembled.bundle.records.every((record) => record.reviewState === 'approved'));
  assert.equal(assembled.bundle.reviewReceipts.length, legacy.reviewReceipts.length);
});

test('split assembly is byte stable', async () => {
  const disk = await readAuthoringBundle(process.cwd());
  assert.deepEqual(disk.bundle, assembled.bundle);
  const again = splitAuthoringBundle(assembled.bundle);
  assert.deepEqual([...again.keys()], [...split.keys()]);
  assert.ok([...split].filter(([name]) => name !== W07_INDEX).every(([, bytes]) => bytes.length <= 16 * 1024 * 1024));
  assert.ok(split.has('content/authoring/v2/w07/weapons/chainaxe_p1.1.json'));
  assert.ok(split.has('content/authoring/v2/w07/weapons/chainaxe_p1.2.json'));
  for (const [name, bytes] of split) assert.deepEqual(again.get(name), bytes, name);
});

test('real on-disk parts meet the 8 MiB target', async () => {
  const index = JSON.parse(await readFile(W07_INDEX, 'utf8'));
  for (const part of index.parts) {
    const bytes = await readFile(`content/authoring/v2/w07/${part.path}`);
    assert.ok(bytes.length <= AUTHORING_PART_TARGET_BYTES, `${part.path} is ${bytes.length} bytes`);
  }
});

test('chunks an oversized synthetic owner into consecutive parts', () => {
  const padding = 'x'.repeat(4 * 1024 * 1024);
  const synthetic = {
    ...legacy,
    records: [...legacy.records,
      { recordId: 'darktide:weapon:synthetic:first', gameReleaseId: 'darktide:1.13.2', kind: 'weapon', payload: { familyId: 'synthetic', padding } },
      { recordId: 'darktide:weapon:synthetic:second', gameReleaseId: 'darktide:1.13.2', kind: 'weapon', payload: { familyId: 'synthetic', padding } }
    ]
  };
  const output = splitAuthoringBundle(synthetic);
  const names = [...output.keys()];
  const first = names.indexOf('content/authoring/v2/w07/weapons/synthetic.1.json');
  assert.ok(first >= 0);
  assert.equal(names[first + 1], 'content/authoring/v2/w07/weapons/synthetic.2.json');
  for (const suffix of ['1', '2']) {
    const bytes = output.get(`content/authoring/v2/w07/weapons/synthetic.${suffix}.json`);
    assert.ok(bytes.length <= AUTHORING_PART_TARGET_BYTES);
  }
});

test('rejects a tampered part', async () => {
  const index = JSON.parse(split.get(W07_INDEX));
  const tampered = `${W07_INDEX.slice(0, -10)}${index.parts[0].path}`;
  const bytes = Buffer.from(split.get(tampered));
  bytes[bytes.length - 2] ^= 1;
  await assert.rejects(assembleAuthoringBundle((name) => name === tampered ? bytes : split.get(name)), /integrity mismatch/u);
});

test('rejects duplicate blessing slugs', () => {
  const blessing = legacy.records.find((record) => record.kind === 'blessing');
  const copy = structuredClone(blessing);
  copy.recordId = copy.recordId.replace(':', '-');
  copy.recordId = 'darktide:blessing:a:b';
  const other = { ...copy, recordId: 'darktide:blessing:a-b' };
  assert.throws(() => splitAuthoringBundle({ ...legacy, records: [...legacy.records, copy, other] }), /slug/u);
});

test('rejects a record too large for a part', () => {
  const record = { ...legacy.records.find((item) => item.kind === 'weapon'), payload: { ...legacy.records.find((item) => item.kind === 'weapon').payload, oversized: 'x'.repeat(17 * 1024 * 1024) } };
  const bundle = { ...legacy, records: legacy.records.map((item) => item === legacy.records.find((entry) => entry.kind === 'weapon') ? record : item) };
  assert.throws(() => splitAuthoringBundle(bundle), /exceeds 8 MiB authoring part target/u);
});

test('ownership walker stays identical to validator dependency traversal', async () => {
  const validator = await readFile(new URL('../scripts/content/contract-validator.mjs', import.meta.url), 'utf8');
  const walker = await readFile(new URL('../scripts/content/lib/authoring-walk.mjs', import.meta.url), 'utf8');
  for (const [begin, end] of [
    ['const DIGEST_BACKLINK_FIELDS', 'const REF_EXPECTED_KINDS'],
    ['function walkObjects(', 'function getRecordRefEdges('],
    ['function reviewProjection(', 'function releaseReviewProjection('],
    ['function collectSourceLinks(', 'function expectedKindIssue('],
    ['function dependencyClosure(', 'function createReviewDigestContext(']
  ]) {
    const expected = validator.slice(validator.indexOf(begin), validator.indexOf(end));
    assert.ok(walker.includes(expected), `${begin} differs from validator`);
  }
});

test('commit reader uses the same pin for the index and every part', async () => {
  const commit = 'a'.repeat(40);
  const reads = [];
  const result = await readAuthoringBundleAtCommit((pin, name) => {
    reads.push([pin, name]);
    return split.get(name);
  }, commit);
  assert.ok(reads.length > 1);
  assert.ok(reads.every(([pin]) => pin === commit));
  assert.deepEqual(result.bytes, assembled.bytes);
});
