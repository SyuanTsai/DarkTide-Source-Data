import { readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isCanonicalText } from './canonical-json.mjs';
import { loadSchemas } from './json-schema.mjs';
const schemas = loadSchemas(fileURLToPath(new URL('../schema/', import.meta.url)));
export const CATEGORIES = ['skills', 'weapons', 'blessings', 'terms'];
const prefix = { skills: 'skill', weapons: 'weapon', blessings: 'blessing', terms: 'term' };

function parse(text, schema) {
  const errors = [];
  if (!isCanonicalText(text)) errors.push({ path: '', message: 'not canonical JSON' });
  let value;
  try {
    value = JSON.parse(text);
  } catch {
    errors.push({ path: '', message: 'invalid JSON' });
    return { errors };
  }
  errors.push(...schemas.validate(schema, value).errors);
  return { errors, value };
}
const result = (errors) => ({ valid: errors.length === 0, errors });

export function checkDataFile(category, text) {
  if (!CATEGORIES.includes(category)) throw new Error(`Unknown category ${category}`);
  const { errors, value } = parse(text, `${category}.schema.json`);
  if (!value || !Array.isArray(value.items)) return result(errors);
  const add = (path, message) => errors.push({ path, message });
  let prev;
  value.items.forEach((x, i) => {
    if (!x || typeof x !== 'object') return;
    const p = `/items/${i}`;
    if (x.name?.origin === 'internal' && x.name.en !== x.key)
      add(`${p}/name/en`, 'Internal name must match key');
    if (Array.isArray(x.errata))
      x.errata.forEach((entry, j) => {
        const anchor = entry?.anchor;
        if (anchor && typeof anchor === 'object'
          && ['official', 'name'].includes(anchor.field) && ['en', 'zh'].includes(anchor.locale)
          && typeof anchor.text === 'string' && anchor.text.length > 0
          && Number.isInteger(anchor.occurrence) && anchor.occurrence >= 1) {
          const path = `${p}/errata/${j}/anchor`;
          if (anchor.locale !== entry.locale) add(path, 'Anchor locale must match errata locale');
          else {
            const target = x[anchor.field]?.[anchor.locale];
            if (typeof target !== 'string') add(path, 'Anchor target text does not exist');
            else {
              let from = 0, count = 0, position;
              while ((position = target.indexOf(anchor.text, from)) !== -1) {
                count++;
                from = position + 1;
              }
              if (count < anchor.occurrence) add(path, 'Anchor text not found at occurrence');
            }
          }
        }
        if (typeof entry?.valueRef !== 'string' || !/^(\/([^~\/]|~[01])*)+$/.test(entry.valueRef))
          return;
        let current = x.values;
        for (const part of entry.valueRef.slice(1).split('/')) {
          const key = part.replaceAll('~1', '/').replaceAll('~0', '~');
          if (Array.isArray(current)
            ? !/^(0|[1-9][0-9]*)$/.test(key) || Number(key) >= current.length
            : current === null || typeof current !== 'object' || !Object.hasOwn(current, key)) {
            add(`${p}/errata/${j}/valueRef`, 'Referenced value does not exist');
            return;
          }
          current = current[key];
        }
      });
    if (typeof x.id === 'string') {
      if (prev !== undefined && prev >= x.id) add(`${p}/id`, 'IDs must be sorted and unique');
      prev = x.id;
      if (!x.id.startsWith(`darktide:${prefix[category]}:`)) add(`${p}/id`, 'ID category mismatch');
    }
    if (x.source?.commit !== value.sourceCommit) add(`${p}/source/commit`, 'Commit mismatch');
    if (x.source?.text && x.source.text.batch !== value.textBatch)
      add(`${p}/source/text/batch`, 'Batch mismatch');
    if (category === 'blessings' && Array.isArray(x.values?.tiers)) {
      let last = 0;
      x.values.tiers.forEach((t, j) => {
        if (t?.tier <= last) add(`${p}/values/tiers/${j}/tier`, 'Tiers must be sorted and unique');
        last = t?.tier;
      });
    }
    if (category === 'weapons' && value.schemaVersion === '1.1.0') {
      const curves = x.values?.curves, combos = x.values?.attackCombos;
      if (Array.isArray(curves)) {
        const ids = new Set(), expected = new Set();
        for (const bar of Array.isArray(x.values?.bars) ? x.values.bars : []) for (const stat of Array.isArray(bar?.stats) ? bar.stats : []) {
          if (!stat || typeof stat !== 'object') continue;
          const id = `${bar.id}.${stat.key}`; expected.add(id);
          const matches = curves.filter(c => c?.id === stat.curveId);
          if (stat.curveId !== id || matches.length !== 1 || matches[0]?.bar !== bar.id || matches[0]?.stat !== stat.key)
            add(`${p}/values/curves`, 'Every stat must have exactly one matching curve');
        }
        curves.forEach((curve, j) => {
          const cp = `${p}/values/curves/${j}`;
          if (!curve || typeof curve !== 'object') return;
          if (ids.has(curve.id) || !expected.has(curve.id)) add(`${cp}/id`, 'Curve IDs must uniquely match stats');
          ids.add(curve.id);
          if (curve.knots?.[0]?.input !== 0 || curve.knots?.[1]?.input !== 1)
            add(`${cp}/knots`, 'Knots must be ordered endpoints 0 and 1');
          const outputs = Array.isArray(curve.knots) ? curve.knots.map(k => k?.output) : [];
          if (curve.interpolation === 'unknown' && outputs.some(v => v !== null))
            add(`${cp}/knots`, 'Unknown interpolation must have null outputs');
          if (outputs.some(Array.isArray) && (!outputs.every(Array.isArray) || outputs[0].length !== outputs[1]?.length))
            add(`${cp}/knots`, 'Array endpoints must have equal lengths');
        });
      }
      if (Array.isArray(combos)) {
        const ids = new Set();
        combos.forEach((combo, j) => {
          if (!combo || typeof combo !== 'object') return;
          if (ids.has(combo.id) || combo.id !== combo.kind) add(`${p}/values/attackCombos/${j}/id`, 'Combo IDs must be unique kinds');
          ids.add(combo.id);
          if (combo.loopsTo !== null && (!Number.isInteger(combo.loopsTo) || combo.loopsTo < 0 || combo.loopsTo >= (combo.steps?.length ?? 0)))
            add(`${p}/values/attackCombos/${j}/loopsTo`, 'Loop must refer to an existing step');
        });
      }
    }
  });
  return result(errors);
}

export function compareVersions(a, b) {
  const x = a.split('.').map(BigInt),
    y = b.split('.').map(BigInt);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const u = x[i] ?? 0n,
      v = y[i] ?? 0n;
    if (u !== v) return u < v ? -1 : 1;
  }
  return 0;
}

export function checkCurrent(text) {
  const { errors, value } = parse(text, 'current.schema.json');
  if (!value) return result(errors);
  if (value.path !== `data/${value.gameVersion}`)
    errors.push({ path: '/path', message: 'Path does not match gameVersion' });
  if (Array.isArray(value.versions)) {
    if (!value.versions.includes(value.gameVersion))
      errors.push({ path: '/versions', message: 'Missing current version' });
    for (let i = 1; i < value.versions.length; i++) {
      try {
        if (compareVersions(value.versions[i - 1], value.versions[i]) >= 0)
          errors.push({ path: `/versions/${i}`, message: 'Versions must be sorted and unique' });
      } catch {}
    }
  }
  return result(errors);
}

export function checkVersionDir(dir) {
  const errors = [],
    values = [];
  for (const category of CATEGORIES) {
    const file = join(dir, `${category}.json`);
    let text;
    try {
      text = readFileSync(file, 'utf8');
    } catch (e) {
      errors.push({ path: `/${category}.json`, message: e.message });
      continue;
    }
    const check = checkDataFile(category, text);
    errors.push(
      ...check.errors.map((e) => ({ path: `/${category}.json${e.path}`, message: e.message })),
    );
    try {
      values.push({ category, value: JSON.parse(text) });
    } catch {}
  }
  for (const { category, value } of values) {
    if (value?.gameVersion !== basename(dir))
      errors.push({
        path: `/${category}.json/gameVersion`,
        message: 'Version does not match directory',
      });
    for (const key of ['schemaVersion', 'gameVersion', 'sourceCommit', 'textBatch'])
      if (values[0]?.value?.[key] !== value?.[key])
        errors.push({ path: `/${category}.json/${key}`, message: 'Files disagree' });
  }
  return result(errors);
}
