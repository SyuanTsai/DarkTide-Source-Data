import { readFile, lstat, realpath, readdir } from 'node:fs/promises';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { stringifyCanonical, writeCanonicalFile } from '../../../pipeline/lib/canonical-json.mjs';
import { CATEGORIES, checkDataFile, checkCurrent, checkFileConsistency } from '../../../pipeline/lib/data-files.mjs';
import { itemFileName } from '../../../pipeline/lib/cloud-dir.mjs';
import { siblingRepo } from '../../../pipeline/lib/inputs.mjs';
import { translationConflicts } from '../../../pipeline/lib/verify/translation.mjs';
import { sha256, VERSION } from './legacy-copy.mjs';
import { applyPatch, buildMigration, checkCandidate, currentFile, dataFile, summarize } from './repair-tasks.mjs';

export const PIN = Object.freeze({ contentVersion: '1.13.4.5',
  dataRevision: '3688cf214c4498d88dd8b1be42c423cb363f9602e7031b9d7a556abacddb2ea7',
  manifestSha256: 'f196af262902394369bc8ad35beff50215f1c5ed77ae7bc5f865446107327e96' });
async function exists(path) {
  try { await lstat(path); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}
async function resolvedPath(path) {
  if (await exists(path)) return realpath(path);
  const parent = dirname(path);
  if (parent === path) throw new Error('Cannot resolve output path');
  return join(await resolvedPath(parent), relative(parent, path));
}
export async function assertExternalOutput(path) {
  if (typeof path !== 'string' || !isAbsolute(path)) throw new Error('Output requires an explicit absolute path');
  const canonical = await resolvedPath(resolve(path));
  for (let ancestor = canonical; ; ancestor = dirname(ancestor)) {
    const marker = join(ancestor, '.git');
    // An empty directory has no Git metadata. Keep scanning ancestors; do not change it.
    const gitMarker = await exists(marker) && (!(await lstat(marker)).isDirectory() || (await readdir(marker)).length > 0);
    if (gitMarker || (await exists(join(ancestor, 'HEAD')) && await exists(join(ancestor, 'objects')) && await exists(join(ancestor, 'refs'))))
      throw new Error(`Output must be outside any git repository: ${path}`);
    if (dirname(ancestor) === ancestor) break;
  }
  return canonical;
}
async function safePath(root, name) {
  const path = resolve(root, name), rel = relative(root, path);
  if (!rel || rel.startsWith(`..${sep}`) || isAbsolute(rel)) throw new Error('Output path escapes root');
  const actual = await assertExternalOutput(path), resolvedRelative = relative(root, actual);
  if (resolvedRelative.startsWith(`..${sep}`) || isAbsolute(resolvedRelative)) throw new Error('Output symlink escapes root');
  // Reject symlink destinations even if still inside root; tasks must name ordinary files.
  for (let part = path; part !== root; part = dirname(part)) if (await exists(part) && (await lstat(part)).isSymbolicLink()) throw new Error('Output symlink is not allowed');
  return path;
}
const json = async path => JSON.parse(await readFile(path, 'utf8'));
const mapFile = plan => ({ schemaVersion: '1.0.0', inputHash: plan.inputHash, provenance: plan.provenance, items: plan.mapping });
function draftFiles(plan, prefix = 'draft', rows = plan.rows) {
  return new Map([[`${prefix}/data/current.json`, currentFile()], ...CATEGORIES.map(category =>
    [`${prefix}/data/${VERSION.gameVersion}/${category}.json`, dataFile(category, rows.filter(r => r.category === category).map(r => r.candidate))])]);
}
function preparationFiles(plan) {
  return new Map([['migration-map.json', mapFile(plan)], ...draftFiles(plan),
    ...plan.tasks.map(task => [`repair/tasks/${itemFileName(task.id)}`, task])]);
}
async function requireIdentical(root, name, value, optional = false) {
  const path = await safePath(root, name);
  if (optional && !await exists(path)) return;
  if ((await readFile(path, 'utf8')) !== stringifyCanonical(value)) throw new Error(`Prepared input/task/draft hash mismatch: ${name}`);
}
async function directoryFiles(root, name) {
  const path = await safePath(root, name);
  if (!await exists(path)) return [];
  const entries = await readdir(path, { withFileTypes: true });
  if (entries.some(entry => !entry.isFile() || entry.isSymbolicLink())) throw new Error(`Unexpected file type: ${name}`);
  return entries.map(entry => entry.name).sort();
}
async function writeOutputs(root, files, immutable = false) {
  // Check every destination before the first write; never delete or clean an output tree.
  for (const [name, value] of files) {
    await safePath(root, name);
    if (immutable) await requireIdentical(root, name, value, true);
  }
  for (const [name, value] of files) {
    const path = await safePath(root, name), text = stringifyCanonical(value);
    if (await exists(path) && await readFile(path, 'utf8') === text) continue;
    await writeCanonicalFile(path, value);
  }
}
async function checkTaskNames(root, plan, allowMissing) {
  const names = await directoryFiles(root, 'repair/tasks'), expected = plan.tasks.map(t => itemFileName(t.id)).sort();
  if (names.some(name => !expected.includes(name)) || !allowMissing && names.length !== expected.length) throw new Error('Unexpected/missing task files');
}

export async function writePrepared(plan, out) {
  const root = await assertExternalOutput(out);
  if (await exists(await safePath(root, 'baseline'))) throw new Error('Existing baseline is immutable; prepare requires a fresh out');
  await checkTaskNames(root, plan, true);
  await writeOutputs(root, preparationFiles(plan), true);
  await writeOutputs(root, new Map([['report.json', plan.report]]));
  return plan.report;
}

export async function applyPrepared(plan, out) {
  const root = await assertExternalOutput(out);
  for (const [name, value] of preparationFiles(plan)) await requireIdentical(root, name, value);
  await checkTaskNames(root, plan, false);
  const patchNames = await directoryFiles(root, 'repair/patches'), tasks = new Map(plan.tasks.map(t => [itemFileName(t.id), t]));
  if (patchNames.some(name => !tasks.has(name))) throw new Error('Patch outside task scope');
  const rows = structuredClone(plan.rows);
  for (const name of patchNames) {
    const task = tasks.get(name), row = rows.find(r => r.id === task.id);
    row.candidate = applyPatch(task, await json(await safePath(root, `repair/patches/${name}`)));
  }
  const ready = rows.filter(row => !row.status.startsWith('blocked:'));
  const candidates = ready.map(row => row.candidate);
  const context = { table: plan.context.table, conflicts: translationConflicts(candidates, plan.context.table),
    allowedNames: candidates.filter(i => i.name.zh === null).map(i => i.name.en) };
  for (const row of rows) {
    Object.assign(row, checkCandidate(row.category, row.candidate, row.extracted, row.status.startsWith('blocked:') ? plan.context : context));
    if (!row.status.startsWith('blocked:')) row.status = row.failures.length ? 'repair' : 'passed';
  }
  const baselineReady = ready.every(row => row.status === 'passed');
  const report = { ...plan.report, ...summarize(rows, plan.tasks, 'apply', baselineReady) };
  const baseline = draftFiles(plan, 'baseline', ready);
  if (baselineReady) {
    const values = CATEGORIES.map(category => ({ category, value: baseline.get(`baseline/data/${VERSION.gameVersion}/${category}.json`) }));
    const errors = [...checkCurrent(stringifyCanonical(currentFile())).errors, ...checkFileConsistency(values),
      ...values.flatMap(({ category, value }) => checkDataFile(category, stringifyCanonical(value)).errors)];
    if (errors.length) throw new Error(`Baseline schema check failed: ${JSON.stringify(errors.slice(0, 3))}`);
    await writeOutputs(root, baseline, true);
  } else if (await exists(await safePath(root, 'baseline'))) throw new Error('Existing baseline conflicts with unresolved repairs; use a fresh out');
  await writeOutputs(root, new Map([['report.json', report]]));
  return report;
}

/** Verify every source file, including auxiliary files, before using any old text. */
export async function loadLegacyCache(cache) {
  const root = await realpath(cache), bytes = await readFile(join(root, 'manifest.json'));
  if (sha256(bytes) !== PIN.manifestSha256) throw new Error('Pinned legacy snapshot manifest hash mismatch');
  const manifest = JSON.parse(bytes);
  if (manifest.contentVersion !== PIN.contentVersion || manifest.dataRevision !== PIN.dataRevision || manifest.gameVersion !== VERSION.gameVersion || manifest.files.length !== 656)
    throw new Error('Pinned legacy snapshot metadata mismatch');
  const documents = [], files = [], used = new Set();
  for (const entry of manifest.files) {
    if (typeof entry.path !== 'string' || !/^domains\/[a-z0-9_./-]+\.json$/.test(entry.path) || entry.path.split('/').includes('..') || used.has(entry.path)) throw new Error('Invalid cache source path');
    used.add(entry.path);
    const file = await realpath(join(root, entry.path)), rel = relative(root, file);
    if (rel.startsWith(`..${sep}`) || isAbsolute(rel)) throw new Error('Cache source escapes root');
    const sourceBytes = await readFile(file), digest = sha256(sourceBytes);
    if (digest !== entry.sha256 || sourceBytes.length !== entry.sizeBytes) throw new Error(`Legacy source hash mismatch: ${entry.path}`);
    files.push({ path: entry.path, sha256: digest, sizeBytes: sourceBytes.length });
    if (['weapon-family', 'blessing', 'skills', 'terms'].includes(entry.kind)) {
      const value = JSON.parse(sourceBytes);
      if (value.kind !== entry.kind) throw new Error(`Legacy source kind mismatch: ${entry.path}`);
      documents.push({ path: entry.path, sha256: digest, value });
    }
  }
  return { documents, provenance: { ...PIN, files: files.sort((a, b) => a.path < b.path ? -1 : 1) } };
}

export async function loadMigration({ extractDir, legacyCache, translation }) {
  const extracts = Object.fromEntries(await Promise.all(CATEGORIES.map(async category => [category, await json(join(extractDir, `${category}.json`))])));
  const expected = { weapons: 137, blessings: 682, skills: 618, terms: 103 };
  for (const category of CATEGORIES) if (extracts[category]?.items?.length !== expected[category]) throw new Error(`Extract count mismatch: ${category}; expected ${expected[category]}`);
  const legacy = await loadLegacyCache(legacyCache);
  const translationFile = translation || process.env.DARKTIDE_GLOSSARY_FILE || join(siblingRepo('Warhammer-40-000-DARKTIDE-Mods'), 'Referneces/Translation.md');
  const plan = buildMigration({ extracts, ...legacy, translation: await readFile(translationFile, 'utf8') });
  const expectedMapping = { weapons: 82, blessings: 610, skills: 1, terms: 1 }, expectedLegacy = { weapons: 78, blessings: 1, skills: 1, terms: 1 };
  for (const category of CATEGORIES) if (plan.report.mapping.categories[category] !== expectedMapping[category] ||
    plan.report.categories[category].total !== expectedLegacy[category]) throw new Error(`Legacy mapping/coverage count mismatch: ${category}`);
  return plan;
}
