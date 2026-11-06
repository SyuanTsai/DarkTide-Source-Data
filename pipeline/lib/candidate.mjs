import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CATEGORIES } from './data-files.mjs';
import { canonicalize } from './canonical-json.mjs';
import { itemFileName } from './cloud-dir.mjs';
import { loadSchemas } from './json-schema.mjs';

const schemas = loadSchemas(fileURLToPath(new URL('../schema/', import.meta.url)));
export const DATA_SCHEMA_VERSION = '1.0.0';
export function dataFile(category, run, items, schemaVersion = DATA_SCHEMA_VERSION) {
  return { schemaVersion, category, gameVersion: run.gameVersion ?? run.sourceGameVersion,
    sourceCommit: run.sourceCommit, textBatch: run.textBatch, items };
}

export function composeCandidate({ category, run, extract, previous, unchanged = [], outputs = {} }) {
  if (extract?.status !== 'ok') return null;
  const old = new Map((previous?.items ?? []).map((item) => [item.id, item]));
  const unchangedIds = new Set(unchanged), items = [];
  for (const item of extract.items) {
    let description;
    if (unchangedIds.has(item.id)) description = old.get(item.id);
    else {
      const entry = run.items[item.id], output = outputs[item.id];
      if (entry?.category === category && ['added', 'changed'].includes(entry.change) && output &&
        schemas.validate('ai-output.schema.json', output).valid && output.id === item.id && output.inputHash === entry.inputHash)
        description = output;
    }
    if (description) items.push({ ...item, explanation: description.explanation, errata: description.errata });
  }
  items.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  return canonicalize(dataFile(category, run, items));
}

async function optionalJson(file, tolerateInvalid = false) {
  let text;
  try { text = await readFile(file, 'utf8'); }
  catch (error) { if (error.code === 'ENOENT') return null; throw error; }
  try { return JSON.parse(text); }
  catch (error) { if (tolerateInvalid) return null; throw error; }
}
export async function buildCandidates({ run, extractDir, aiOutputDir, previousDir, diffReport }) {
  const result = {};
  for (const category of CATEGORIES) {
    const extract = await optionalJson(join(extractDir, `${category}.json`));
    if (extract?.status !== 'ok') { result[category] = null; continue; }
    const previous = previousDir && previousDir !== 'none' ? await optionalJson(join(previousDir, `${category}.json`)) : null;
    const outputs = Object.create(null);
    for (const item of extract.items) {
      if (['added', 'changed'].includes(run.items[item.id]?.change))
        outputs[item.id] = await optionalJson(join(aiOutputDir, itemFileName(item.id)), true);
    }
    result[category] = composeCandidate({ category, run, extract, previous,
      unchanged: diffReport.categories?.[category]?.unchanged ?? [], outputs });
  }
  return result;
}
