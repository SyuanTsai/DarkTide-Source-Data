import { createHash } from 'node:crypto';
import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createRecordDependencyWalker } from './authoring-walk.mjs';

export const W07_DIRECTORY = 'content/authoring/v2/w07';
export const W07_INDEX = `${W07_DIRECTORY}/index.json`;
const MAX_BYTES = 16 * 1024 * 1024;
const jsonBytes = (value) => Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8');
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const key = (item) => `${item.gameReleaseId}\0${item.recordId}`;
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;

export function splitAuthoringBundle(bundle) {
  const roots = new Map();
  const slugs = new Map();
  const addRoot = (owner, record) => {
    if (!roots.has(owner)) roots.set(owner, []);
    roots.get(owner).push(record);
  };
  for (const record of bundle.records) {
    if (record.kind === 'weapon') {
      const family = record.payload.familyId;
      if (typeof family !== 'string' || !/^[A-Za-z0-9._-]+$/u.test(family) || family === '.' || family === '..') throw new Error('Invalid weapon familyId');
      addRoot(`weapons/${family}`, record);
    } else if (record.kind === 'blessing') {
      if (!record.recordId.startsWith('darktide:blessing:')) throw new Error('Invalid blessing recordId');
      const slug = record.recordId.slice('darktide:blessing:'.length).replace(/[^A-Za-z0-9._-]/gu, '-');
      if (!slug || slug === '.' || slug === '..' || (slugs.has(slug) && slugs.get(slug) !== record.recordId)) throw new Error(`Duplicate or invalid blessing slug: ${slug}`);
      slugs.set(slug, record.recordId);
      addRoot(`blessings/${slug}`, record);
    }
  }
  for (const record of bundle.records) {
    if (record.kind !== 'blessing-variant') continue;
    const ref = record.payload.blessingRef;
    if (!ref || !ref.recordId?.startsWith('darktide:blessing:')) continue;
    const slug = ref.recordId.slice('darktide:blessing:'.length).replace(/[^A-Za-z0-9._-]/gu, '-');
    if (roots.has(`blessings/${slug}`)) addRoot(`blessings/${slug}`, record);
  }
  const walk = createRecordDependencyWalker(bundle);
  const ownership = new Map();
  for (const [owner, records] of roots) {
    const visited = new Set();
    for (const record of records) for (const dependency of walk(record)) visited.add(key(dependency));
    for (const id of visited) {
      if (!ownership.has(id)) ownership.set(id, new Set());
      ownership.get(id).add(owner);
    }
  }
  const ownerNames = [...roots.keys()].sort(compare);
  const groups = new Map(['shared', ...ownerNames].map((owner) => [owner, { records: [], reviewReceipts: [] }]));
  const assignment = new Map();
  for (const record of bundle.records) {
    const owners = ownership.get(key(record));
    const owner = owners?.size === 1 ? [...owners][0] : 'shared';
    assignment.set(key(record), owner);
    groups.get(owner).records.push(record);
  }
  for (const receipt of bundle.reviewReceipts) groups.get(assignment.get(key(receipt.target)) ?? 'shared').reviewReceipts.push(receipt);
  const shared = groups.get('shared');
  Object.assign(shared, { gameReleases: bundle.gameReleases, sourceRefs: bundle.sourceRefs, tombstones: bundle.tombstones, sourceSnapshots: bundle.sourceSnapshots });
  const output = new Map();
  const entries = [];
  const append = (name, part) => {
    if (output.has(`${W07_DIRECTORY}/${name}`)) throw new Error(`Duplicate authoring part path: ${name}`);
    const bytes = jsonBytes(part);
    if (bytes.length > MAX_BYTES) throw new Error(`Authoring part exceeds 16 MiB: ${name}`);
    entries.push({ path: name, sizeBytes: bytes.length, sha256: sha256(bytes) });
    output.set(`${W07_DIRECTORY}/${name}`, bytes);
  };
  append('shared.json', shared);
  for (const owner of ownerNames.filter((name) => name.startsWith('weapons/')).concat(ownerNames.filter((name) => name.startsWith('blessings/')))) {
    const part = groups.get(owner);
    if (jsonBytes(part).length <= MAX_BYTES) { append(`${owner}.json`, part); continue; }
    if (!owner.startsWith('weapons/')) throw new Error(`Authoring part exceeds 16 MiB: ${owner}`);
    const receipts = new Map();
    for (const receipt of part.reviewReceipts) {
      const id = key(receipt.target);
      if (!receipts.has(id)) receipts.set(id, []);
      receipts.get(id).push(receipt);
    }
    let start = 0;
    let number = 1;
    while (start < part.records.length) {
      const makeChunk = (end) => {
        const records = part.records.slice(start, end);
        return { records, reviewReceipts: records.flatMap((record) => receipts.get(key(record)) ?? []) };
      };
      let low = start + 1, high = part.records.length, best = start;
      while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        if (jsonBytes(makeChunk(middle)).length <= MAX_BYTES) { best = middle; low = middle + 1; }
        else high = middle - 1;
      }
      if (best === start) throw new Error(`Record exceeds 16 MiB: ${part.records[start].recordId}`);
      append(`${owner}.${number++}.json`, makeChunk(best));
      start = best;
    }
  }
  const { schemaVersion, contractKind, fixtureOnly, publicationEligible } = bundle;
  output.set(W07_INDEX, jsonBytes({ schema: 'w07-authoring-split/1', bundle: { schemaVersion, contractKind, fixtureOnly, publicationEligible }, parts: entries }));
  return output;
}

export async function assembleAuthoringBundle(readPart) {
  const index = JSON.parse((await readPart(W07_INDEX)).toString('utf8'));
  if (index.schema !== 'w07-authoring-split/1' || !Array.isArray(index.parts) || index.parts[0]?.path !== 'shared.json' || !index.bundle) throw new Error('Invalid authoring index');
  const names = index.parts.map((entry) => entry.path);
  const valid = /^(?:shared|weapons\/[A-Za-z0-9._-]+|blessings\/[A-Za-z0-9._-]+)\.json$/u;
  if (names.some((name) => typeof name !== 'string' || !valid.test(name)) || new Set(names).size !== names.length) throw new Error('Invalid authoring part paths');
  const parts = [];
  for (const entry of index.parts) {
    const bytes = await readPart(`${W07_DIRECTORY}/${entry.path}`);
    if (bytes.length > MAX_BYTES || bytes.length !== entry.sizeBytes || sha256(bytes) !== entry.sha256) throw new Error(`Authoring part integrity mismatch: ${entry.path}`);
    parts.push(JSON.parse(bytes.toString('utf8')));
  }
  const shared = parts[0];
  const { schemaVersion, contractKind, fixtureOnly, publicationEligible } = index.bundle;
  const bundle = { schemaVersion, contractKind, fixtureOnly, publicationEligible, gameReleases: shared.gameReleases, sourceRefs: shared.sourceRefs, records: parts.flatMap((part) => part.records), tombstones: shared.tombstones, reviewReceipts: parts.flatMap((part) => part.reviewReceipts), sourceSnapshots: shared.sourceSnapshots };
  return { bundle, bytes: jsonBytes(bundle) };
}

export const readAuthoringBundle = (root) => assembleAuthoringBundle((name) => readFile(path.join(root, name)));
export const readAuthoringBundleAtCommit = (gitShow, commit) => assembleAuthoringBundle((name) => gitShow(commit, name));
export async function writeAuthoringBundle(root, bundle) {
  const output = splitAuthoringBundle(bundle);
  let indexBytes;
  try { indexBytes = await readFile(path.join(root, W07_INDEX)); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  let oldNames = [];
  if (indexBytes) {
    const index = JSON.parse(indexBytes);
    await readAuthoringBundle(root);
    oldNames = index.parts.map((entry) => `${W07_DIRECTORY}/${entry.path}`);
  }
  for (const [name, bytes] of output) {
    await mkdir(path.dirname(path.join(root, name)), { recursive: true });
    await writeFile(path.join(root, name), bytes);
  }
  for (const name of oldNames) if (!output.has(name)) await unlink(path.join(root, name));
}
