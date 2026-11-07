import { checkDataFile, CATEGORIES } from '../../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../../pipeline/lib/canonical-json.mjs';
import { checkValues } from '../../../pipeline/lib/verify/values.mjs';
import { checkText, EXPLANATION_SECTIONS } from '../../../pipeline/lib/verify/text.mjs';
import { parseTranslation, translationConflicts } from '../../../pipeline/lib/verify/translation.mjs';
import { validateExtractItems } from '../../../pipeline/lib/extract-output.mjs';
import { mapLegacy, VERSION, emptyExplanation, sha256, hashObject } from './legacy-copy.mjs';

const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const sortFailures = failures => failures.sort((a, b) => compare(stringifyCanonical(a), stringifyCanonical(b)));
export const dataFile = (category, items) => ({ ...VERSION, category, items: [...items].sort((a, b) => compare(a.id, b.id)) });
export const currentFile = () => ({ ...VERSION, path: `data/${VERSION.gameVersion}`, versions: [VERSION.gameVersion] });

export function checkCandidate(category, candidate, extracted, context) {
  const schema = checkDataFile(category, stringifyCanonical(dataFile(category, [candidate])));
  const text = checkText(candidate, extracted, context.allowedNames, context.conflicts, context.table);
  return { failures: sortFailures([...checkValues(candidate, extracted, null, schema.errors), ...text.failures]), notes: text.notes };
}

/** Offsets are UTF-16 string offsets, so slicing preserves every delimiter and whitespace byte. */
export function sentences(text) {
  const result = []; let start = 0;
  for (const match of text.matchAll(/[。；;！？!?\n]|\r(?!\n)/g)) {
    const end = match.index + match[0].length;
    result.push({ index: result.length, start, end, text: text.slice(start, end) }); start = end;
  }
  if (start < text.length) result.push({ index: result.length, start, end: text.length, text: text.slice(start) });
  return result;
}
const range = (section, part, scope = 'sentence') => ({ id: `${section}:${scope === 'section' ? '*' : part.index}`,
  section, scope, ...part, sha256: sha256(part.text) });

function locateFailures(candidate, extracted, failures, context, lockedEffect) {
  const exp = candidate.explanation, chunks = Object.fromEntries(EXPLANATION_SECTIONS.map(section => [section, sentences(exp[section])]));
  const textFailures = explanation => checkText({ ...candidate, explanation }, extracted,
    context.allowedNames, context.conflicts, context.table).failures;
  // These calls use the very same rules as the complete candidate, never a relaxed copy.
  const probes = Object.fromEntries(EXPLANATION_SECTIONS.map(section => [section, chunks[section].map(part =>
    textFailures({ ...emptyExplanation(), [section]: part.text }))]));
  const allowed = new Map(); let appendErrata = false;
  const located = failures.map(failure => {
    const locations = [];
    if (failure.code === 'T_ERRATA_MISSING') {
      appendErrata = true;
      locations.push({ scope: 'errata', section: null, token: failure.message });
    } else if (failure.path.startsWith('/errata')) {
      locations.push({ scope: 'immutable', section: null, token: failure.message });
    } else {
      const explicit = /^\/explanation\/(effect|conditions|calculation|notes|extra)(?:\/|$)/.exec(failure.path)?.[1];
      const eligible = failure.code.startsWith('T_') && !['T_OFFICIAL_CHANGED', 'T_ERRATA_INVALID', 'T_ERRATA_UNKNOWN'].includes(failure.code) || explicit;
      if (eligible) {
        const sections = explicit ? [explicit] : EXPLANATION_SECTIONS;
        // Coverage is an absence over the whole explanation; isolated sentences would give false positives.
        if (!['T_COVERAGE', 'T_FORMAT', 'V_SCHEMA'].includes(failure.code))
          for (const section of sections) for (const part of chunks[section]) {
            const triggered = probes[section][part.index].filter(f => f.code === failure.code);
            if (triggered.length) locations.push({ ...range(section, part), token: triggered.map(f => f.message).join('\n') });
          }
        if (!locations.length) {
          let fallback = explicit ? [explicit] : failure.code === 'T_FORMAT' ? ['effect'] : failure.code === 'T_COVERAGE'
            ? [exp.calculation ? 'calculation' : 'notes']
            : sections.filter(section => textFailures({ ...emptyExplanation(), [section]: exp[section] }).some(f => f.code === failure.code));
          if (!fallback.length) fallback = sections.filter(section => exp[section].length);
          for (const section of fallback) locations.push({ ...range(section,
            { index: null, start: 0, end: exp[section].length, text: exp[section] }, 'section'),
            token: failure.message, reason: 'Failure could not be isolated to a single sentence using the existing checker' });
        }
      } else locations.push({ scope: 'immutable', section: null, token: failure.message });
    }
    for (const location of locations) if (location.section) {
      location.locked = lockedEffect && location.section === 'effect';
      if (!location.locked) {
        const { token, reason, locked, ...permission } = location;
        allowed.set(permission.id, permission);
      }
    }
    return { ...failure, locations };
  });
  // A section fallback subsumes its sentence permissions; never permit overlapping replacements.
  for (const permission of [...allowed.values()]) if (permission.scope === 'sentence' && allowed.has(`${permission.section}:*`)) allowed.delete(permission.id);
  const ranges = [...allowed.values()].sort((a, b) => EXPLANATION_SECTIONS.indexOf(a.section) - EXPLANATION_SECTIONS.indexOf(b.section) || a.start - b.start);
  const immutable = EXPLANATION_SECTIONS.flatMap(section => chunks[section].filter(part =>
    !ranges.some(r => r.section === section && r.start <= part.start && r.end >= part.end)).map(part => range(section, part)));
  return { failures: located, allowedChanges: { ranges, appendErrata }, immutable: {
    fields: ['id', 'key', 'name', 'official', 'values', 'aliases', 'source', 'existing errata'],
    lockedSections: lockedEffect ? ['effect'] : [], ranges: immutable } };
}

function makeTask(row, context, inputHash) {
  const scoped = locateFailures(row.candidate, row.extracted, row.failures, context, ['blessings', 'skills'].includes(row.category));
  const task = { schemaVersion: '1.0.0', id: row.id, category: row.category, status: row.status, inputHash,
    sourceHash: row.sourceHash, extractHash: hashObject(row.extracted), originalExplanation: row.originalExplanation,
    candidate: row.candidate, extracted: row.extracted, ...scoped };
  return { ...task, taskHash: hashObject(task) };
}

export function summarize(rows, tasks, stage = 'prepare', baselineReady = false) {
  const counts = subset => ({ total: subset.length, passed: subset.filter(r => r.status === 'passed').length,
    repair: subset.filter(r => r.status === 'repair').length, blocked: subset.filter(r => r.status.startsWith('blocked:')).length,
    excluded: subset.filter(r => r.status === 'excluded').length });
  const codes = [...new Set(rows.flatMap(r => r.failures.map(f => f.code)))].sort(compare);
  return { schemaVersion: '1.0.0', ...VERSION, stage, baselineReady, totals: counts(rows),
    categories: Object.fromEntries(CATEGORIES.map(category => [category, counts(rows.filter(r => r.category === category))])),
    scopeSectionTasks: tasks.filter(t => t.failures.some(f => f.locations.some(l => l.scope === 'section'))).length,
    failureCodes: Object.fromEntries(codes.map(code => [code, { items: rows.filter(r => r.failures.some(f => f.code === code)).length,
      failures: rows.reduce((n, r) => n + r.failures.filter(f => f.code === code).length, 0) }])),
    unresolved: rows.filter(r => r.status === 'repair').map(r => r.id),
    blocked: rows.filter(r => r.status.startsWith('blocked:')).map(r => ({ id: r.id, reason: r.status })),
    excluded: rows.filter(r => r.status === 'excluded').map(r => ({ id: r.id, ...r.exclusion })),
    excludedReasons: Object.fromEntries(['insufficient-after-cleanup', 'nd-strict-unresolved'].map(reason =>
      [reason, rows.filter(r => r.status === 'excluded' && r.exclusion.reason === reason).length])),
    items: rows.map(r => ({ id: r.id, category: r.category, status: r.status, failures: r.failures, notes: r.notes })),
    notAutomated: ['文字條件、限制及機制語意仍須人工確認；數字與 schema 通過不代表語意正確'] };
}

export function buildMigration({ extracts, documents, provenance, translation }) {
  for (const category of CATEGORIES) {
    const extract = extracts[category];
    if (!extract || extract.category !== category || extract.status !== 'ok' ||
      Object.entries(VERSION).some(([key, value]) => extract[key] !== value)) throw new Error(`Invalid extract metadata: ${category}`);
    const errors = validateExtractItems(category, extract.items, extract);
    if (errors.length) throw new Error(`Invalid extract: ${category}: ${JSON.stringify(errors.slice(0, 3))}`);
  }
  const mapping = mapLegacy(documents, extracts);
  const context = { table: parseTranslation(translation), conflicts: [], allowedNames: [] };
  const rows = mapping.filter(row => row.hasExplanation).map(row => {
    const extracted = extracts[row.category].items.find(i => i.id === row.id), converted = row.conversion;
    return { id: row.id, category: row.category, sourceHash: row.originalHash, originalExplanation: converted.originalExplanation,
      extracted, candidate: { ...structuredClone(extracted), explanation: converted.explanation, errata: converted.errata } };
  });
  // Match verify's candidate set, including the blocked candidates in draft.
  const candidates = rows.map(row => row.candidate);
  context.allowedNames = candidates.filter(i => i.name.zh === null).map(i => i.name.en);
  context.conflicts = translationConflicts(candidates, context.table);
  const inputHash = hashObject({ extracts, provenance, mapping, translationHash: sha256(translation) });
  for (const row of rows) {
    Object.assign(row, checkCandidate(row.category, row.candidate, row.extracted, context));
    const officialGate = ['blessings', 'skills'].includes(row.category) && checkText({ ...row.candidate,
      explanation: { ...emptyExplanation(), effect: row.candidate.explanation.effect } }, row.extracted,
    context.allowedNames, context.conflicts, context.table).failures.some(f => !['T_COVERAGE', 'T_ERRATA_MISSING'].includes(f.code));
    row.status = officialGate ? 'blocked:official-effect' : row.failures.length ? 'repair' : 'passed';
  }
  const tasks = rows.filter(row => row.failures.length).map(row => makeTask(row, context, inputHash));
  const report = summarize(rows, tasks);
  report.mapping = { total: mapping.length, categories: Object.fromEntries(CATEGORIES.map(category =>
    [category, mapping.filter(r => r.category === category).length])), ambiguous: 0, unmatched: 0 };
  report.provenance = provenance;
  report.translationHash = sha256(translation);
  return { inputHash, provenance, mapping, rows, tasks, context, report };
}

const onlyFields = (value, fields) => {
  if (!value || typeof value !== 'object' || Array.isArray(value) || Object.keys(value).some(key => !fields.includes(key))) throw new Error('Unknown patch field');
};
/** Construct from the immutable candidate; a patch never supplies a replacement item. */
export function applyPatch(task, patch) {
  const { taskHash, ...body } = task;
  if (hashObject(body) !== taskHash) throw new Error('Task hash mismatch');
  onlyFields(patch, ['id', 'taskHash', 'extractHash', 'replacements', 'errata', 'exclude']);
  if (patch.id !== task.id || patch.taskHash !== task.taskHash || patch.extractHash !== task.extractHash ||
    hashObject(task.extracted) !== task.extractHash) throw new Error('Patch task/extract hash mismatch');
  if (Object.hasOwn(patch, 'exclude')) {
    if (Object.hasOwn(patch, 'replacements') || Object.hasOwn(patch, 'errata')) throw new Error('Exclusion cannot include replacements or errata');
    onlyFields(patch.exclude, ['reason', 'detail']);
    if (!['insufficient-after-cleanup', 'nd-strict-unresolved'].includes(patch.exclude.reason)) throw new Error('Invalid exclusion reason');
    if (typeof patch.exclude.detail !== 'string' || !patch.exclude.detail.trim()) throw new Error('Invalid exclusion detail');
    return { exclude: structuredClone(patch.exclude) };
  }
  if (!Array.isArray(patch.replacements) || !Array.isArray(patch.errata)) throw new Error('Invalid patch arrays');
  const candidate = structuredClone(task.candidate), replacements = [], used = new Set();
  for (const edit of patch.replacements) {
    onlyFields(edit, ['rangeId', 'originalHash', 'text']);
    const permission = task.allowedChanges.ranges.find(r => r.id === edit.rangeId);
    if (!permission || used.has(edit.rangeId) || task.immutable.lockedSections.includes(permission.section)) throw new Error('Patch outside allowed scope');
    used.add(edit.rangeId);
    if (edit.originalHash !== permission.sha256 || sha256(candidate.explanation[permission.section].slice(permission.start, permission.end)) !== permission.sha256)
      throw new Error('Patch original hash mismatch');
    if (typeof edit.text !== 'string') throw new Error('Invalid patch text');
    replacements.push({ ...permission, replacement: edit.text });
  }
  for (const edit of replacements.sort((a, b) => b.start - a.start)) {
    const text = candidate.explanation[edit.section];
    candidate.explanation[edit.section] = text.slice(0, edit.start) + edit.replacement + text.slice(edit.end);
  }
  if (patch.errata.length && !task.allowedChanges.appendErrata) throw new Error('Patch errata outside allowed scope');
  // Anchor is required for new migration errata, as with the existing AI output contract.
  for (const entry of patch.errata) if (!entry?.anchor) throw new Error('Missing errata anchor');
  candidate.errata.push(...structuredClone(patch.errata));
  return candidate;
}
