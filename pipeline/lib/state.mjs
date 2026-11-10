import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { loadSchemas } from './json-schema.mjs';
import { writeCanonicalFile } from './canonical-json.mjs';
const schemas = loadSchemas(fileURLToPath(new URL('../schema/', import.meta.url)));
export const STAGES = ['extracted', 'described', 'verified', 'written'];
const types = { skill: 'skills', weapon: 'weapons', blessing: 'blessings', term: 'terms' };
export const emptyState = () => ({ schemaVersion: '1.0.0', lastProcessed: null, run: null });

function validate(s) {
  const errors = schemas.validate('state.schema.json', s).errors;
  for (const [id, item] of Object.entries(s?.run?.items || {}))
    if (
      item !== null &&
      typeof item === 'object' &&
      !Array.isArray(item) &&
      types[id.split(':')[1]] !== item.category
    )
      errors.push({ path: `/run/items/${id}/category`, message: 'Category does not match ID' });
  if (errors.length) throw new Error(errors.map((e) => `${e.path} ${e.message}`).join('\n'));
}

export async function readState(file) {
  let text;
  try {
    text = await readFile(file, 'utf8');
  } catch (e) {
    if (e.code === 'ENOENT') return emptyState();
    throw e;
  }
  const s = JSON.parse(text);
  validate(s);
  return s;
}

export async function writeState(file, s) {
  validate(s);
  await writeCanonicalFile(file, s);
}
const copy = (s) => structuredClone(s);
const active = (s) => {
  if (!s.run) throw new Error('No run');
  return s.run;
};

export function startRun(s, meta) {
  const n = copy(s);
  if (
    n.run &&
    ['running', 'halted'].includes(n.run.status) &&
    ['gameVersion', 'sourceCommit', 'textBatch'].every((k) => n.run[k] === meta[k])
  ) {
    n.run.status = 'running';
    n.run.haltReason = null;
  } else n.run = { ...meta, status: 'running', haltReason: null, categories: {}, items: {} };
  return n;
}

export function setCategory(s, category, info) {
  const n = copy(s);
  active(n).categories[category] = { ...info };
  return n;
}

export function registerItem(s, id, info) {
  const n = copy(s),
    items = active(n).items;
  if (!items[id] || items[id].inputHash !== info.inputHash)
    items[id] = { ...info, stage: 'extracted', outcome: null, reason: null };
  const marker = n.retainedExplanations?.[id];
  if (marker) Object.assign(items[id], { explanationFrom: structuredClone(marker.explanationFrom), valuesChanged: marker.valuesChanged, officialChanged: marker.officialChanged ?? false });
  return n;
}

export function unregisterItem(s, id) {
  const n = copy(s), items = active(n).items;
  if (items[id]?.stage === 'written') throw new Error('Cannot unregister written item');
  delete items[id];
  return n;
}

export function advanceItem(s, id, stage) {
  const n = copy(s),
    item = active(n).items[id];
  if (!item) throw new Error(`Unknown item ${id}`);
  const from = STAGES.indexOf(item.stage),
    to = STAGES.indexOf(stage);
  if (to < 0 || to < from || to > from + 1) throw new Error('Invalid stage transition');
  if (to !== from) {
    item.stage = stage;
    if (stage === 'written') {
      item.outcome = item.change === 'removed' ? 'removed' : 'updated';
      item.reason = null;
    }
  }
  return n;
}

export function keepPrevious(s, id, reason) {
  if (typeof reason !== 'string' || !reason.length) throw new Error('Reason required');
  const n = copy(s),
    item = active(n).items[id];
  if (!item) throw new Error(`Unknown item ${id}`);
  item.outcome = 'kept-previous';
  item.reason = reason;
  return n;
}

export function reopenItem(s, id) {
  const n = copy(s), item = active(n).items[id];
  if (!item) throw new Error(`Unknown item ${id}`);
  if (item.stage === 'written') throw new Error('Cannot reopen written item');
  item.outcome = null;
  item.reason = null;
  return n;
}

export function pendingItems(s, stage) {
  const target = STAGES.indexOf(stage);
  if (target < 0) throw new Error('Unknown stage');
  return Object.entries(active(s).items)
    .filter(([, v]) => v.outcome === null && STAGES.indexOf(v.stage) < target)
    .map(([id]) => id)
    .sort();
}

export function haltRun(s, reason) {
  if (typeof reason !== 'string' || !reason.length) throw new Error('Reason required');
  const n = copy(s),
    r = active(n);
  r.status = 'halted';
  r.haltReason = reason;
  return n;
}

export function completeRun(s) {
  const n = copy(s),
    r = active(n);
  if (Object.values(r.items).some((v) => v.outcome === null)) throw new Error('Items pending');
  r.status = 'completed';
  r.haltReason = null;
  n.lastProcessed = Object.fromEntries(
    ['gameVersion', 'sourceCommit', 'textBatch'].map((k) => [k, r[k]]),
  );
  return n;
}

export function summarize(s) {
  const r = s.run,
    entries = Object.entries(r?.items || {});
  return {
    updated: entries.filter(([, v]) => v.outcome === 'updated').length,
    keptPrevious: entries
      .filter(([, v]) => v.outcome === 'kept-previous')
      .map(([id, v]) => ({ id, reason: v.reason }))
      .sort((a, b) => a.id.localeCompare(b.id)),
    removed: entries.filter(([, v]) => v.outcome === 'removed').length,
    pending: entries.filter(([, v]) => v.outcome === null).length,
    categoriesKept: Object.entries(r?.categories || {})
      .filter(([, v]) => v.status === 'kept-previous')
      .map(([category, v]) => ({ category, reason: v.reason })),
    status: r?.status ?? null,
    haltReason: r?.haltReason ?? null,
  };
}
