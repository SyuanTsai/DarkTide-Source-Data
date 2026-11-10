import { readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { isCanonicalText } from './canonical-json.mjs';
import { checkSchema12 } from './schema12.mjs';
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

export function checkDataFile(category, text, versionItems) {
  if (!CATEGORIES.includes(category)) throw new Error(`Unknown category ${category}`);
  const { errors, value } = parse(text, `${category}.schema.json`);
  if (!value || !Array.isArray(value.items)) return result(errors);
  const add = (path, message) => errors.push({ path, message });
  let prev;
  value.items.forEach((x, i) => {
    if (!x || typeof x !== 'object') return;
    const p = `/items/${i}`;
    if (x.values && Object.hasOwn(x.values, 'damageProfiles')) {
      let supportedVersion = false;
      try { supportedVersion = compareVersions(value.schemaVersion, '1.1.0') >= 0; }
      catch { /* Schema validation reports malformed versions. */ }
      if (category !== 'weapons' || !supportedVersion)
        add(`${p}/values/damageProfiles`, 'damageProfiles requires schema 1.1.0 or later and weapons');
      if (category === 'weapons' && Array.isArray(x.values.damageProfiles)) {
        const ids = new Set(x.values.damageProfiles.map(profile => profile?.id));
        for (const [j, combo] of (Array.isArray(x.values.attackCombos) ? x.values.attackCombos : []).entries())
          for (const [k, step] of (Array.isArray(combo?.steps) ? combo.steps : []).entries())
            if (step?.damageProfile != null && !ids.has(step.damageProfile))
              add(`${p}/values/attackCombos/${j}/steps/${k}/damageProfile`, 'Damage profile must refer to an existing profile');
      }
    }
    if (x.explanation && Object.hasOwn(x.explanation, 'effectOrigin')) {
      let supportedVersion = false;
      try { supportedVersion = compareVersions(value.schemaVersion, '1.1.0') >= 0; }
      catch { /* Schema validation reports malformed versions. */ }
      if (!supportedVersion || !['blessings', 'skills'].includes(category))
        add(`${p}/explanation/effectOrigin`, 'effectOrigin requires schema 1.1.0 or later and blessings or skills');
    }
    if (x.name?.origin === 'internal' && x.name.en !== x.key)
      add(`${p}/name/en`, 'Internal name must match key');
    checkSchema12(category, value, x, p, versionItems ?? value.items, add);
    if (typeof x.id === 'string') {
      if (prev !== undefined && prev >= x.id) add(`${p}/id`, 'IDs must be sorted and unique');
      prev = x.id;
      if (!x.id.startsWith(`darktide:${prefix[category]}:`)) add(`${p}/id`, 'ID category mismatch');
    }
    const retained = x.retainedFrom;
    if (x.source?.commit !== (retained ? retained.sourceCommit : value.sourceCommit))
      add(`${p}/source/commit`, retained ? 'Retained commit mismatch' : 'Commit mismatch');
    if (x.source?.text && x.source.text.batch !== (retained ? retained.textBatch : value.textBatch))
      add(`${p}/source/text/batch`, retained ? 'Retained batch mismatch' : 'Batch mismatch');
    if (retained) {
      // TEMPORARY (SYP-403): same-version retention allowed for same-version regeneration. Restore conditions in SYP-420 comment 12724.
      try {
        if (compareVersions(retained.gameVersion, value.gameVersion) > 0)
          add(`${p}/retainedFrom/gameVersion`, 'Retained version must not be newer');
      } catch { /* Schema validation reports malformed versions. */ }
    }
    if (category === 'blessings' && Array.isArray(x.values?.tiers)) {
      let last = 0;
      x.values.tiers.forEach((t, j) => {
        if (t?.tier <= last) add(`${p}/values/tiers/${j}/tier`, 'Tiers must be sorted and unique');
        last = t?.tier;
      });
    }
    if (category === 'weapons' && ['1.1.0', '1.2.0'].includes(value.schemaVersion)) {
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

export function retainItem(previousItem, previousFileHeader) {
  const item = structuredClone(previousItem);
  item.retainedFrom ??= {
    gameVersion: previousFileHeader.gameVersion,
    sourceCommit: previousFileHeader.sourceCommit,
    textBatch: previousFileHeader.textBatch,
  };
  return item;
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

export function checkFileConsistency(values, keys = ['schemaVersion', 'gameVersion', 'sourceCommit', 'textBatch']) {
  const errors = [];
  for (const { category, value } of values)
    for (const key of keys)
      if (values[0]?.value?.[key] !== value?.[key])
        errors.push({ path: `/${category}.json/${key}`, message: 'Files disagree' });
  return errors;
}

export function checkVersionDir(dir, currentSchemaVersion) {
  const errors = [],
    values = [];
  const versionItems = CATEGORIES.flatMap(category => {
    try { return JSON.parse(readFileSync(join(dir, `${category}.json`), 'utf8')).items ?? []; } catch { return []; }
  });
  for (const category of CATEGORIES) {
    const file = join(dir, `${category}.json`);
    let text;
    try {
      text = readFileSync(file, 'utf8');
    } catch (e) {
      errors.push({ path: `/${category}.json`, message: e.message });
      continue;
    }
    const check = checkDataFile(category, text, versionItems);
    errors.push(
      ...check.errors.map((e) => ({ path: `/${category}.json${e.path}`, message: e.message })),
    );
    try {
      values.push({ category, value: JSON.parse(text) });
    } catch {}
  }
  for (const { category, value } of values) {
    if (currentSchemaVersion !== undefined && value?.schemaVersion !== currentSchemaVersion)
      errors.push({ path: `/${category}.json/schemaVersion`, message: `Current schemaVersion ${currentSchemaVersion} differs from data schemaVersion ${value?.schemaVersion}` });
    if (value?.gameVersion !== basename(dir))
      errors.push({
        path: `/${category}.json/gameVersion`,
        message: 'Version does not match directory',
      });
  }
  errors.push(...checkFileConsistency(values));
  return result(errors);
}
