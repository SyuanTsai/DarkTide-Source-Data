import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function jsonEqual(a, b) {
  if (a === b) return true;
  if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') return false;
  if (Array.isArray(a) || Array.isArray(b)) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((value, i) => jsonEqual(value, b[i]))
    );
  }
  const keys = Object.keys(a);
  return (
    keys.length === Object.keys(b).length &&
    keys.every((key) => Object.hasOwn(b, key) && jsonEqual(a[key], b[key]))
  );
}

const keywords = new Set(
  '$schema $id title description $comment examples $defs type enum const properties required additionalProperties propertyNames patternProperties items minItems maxItems uniqueItems minLength maxLength pattern minimum maximum exclusiveMinimum minProperties oneOf anyOf allOf not if then else $ref'.split(
    ' ',
  ),
);
const schemaMaps = new Set(['$defs', 'properties', 'patternProperties']);
const schemaSingles = new Set([
  'additionalProperties',
  'propertyNames',
  'items',
  'not',
  'if',
  'then',
  'else',
]);
const schemaArrays = new Set(['oneOf', 'anyOf', 'allOf']);
const esc = (s) => String(s).replaceAll('~', '~0').replaceAll('/', '~1');

export function loadSchemas(dir) {
  const files = Object.fromEntries(
    readdirSync(dir)
      .filter((f) => f.endsWith('.schema.json'))
      .map((f) => [f, JSON.parse(readFileSync(join(dir, f), 'utf8'))]),
  );
  function inspect(s, where) {
    if (typeof s === 'boolean') return;
    if (!s || typeof s !== 'object' || Array.isArray(s))
      throw new Error(`Invalid schema at ${where}`);
    for (const [k, v] of Object.entries(s)) {
      if (!keywords.has(k)) throw new Error(`Unsupported keyword ${k} at ${where}`);
      if (schemaMaps.has(k))
        for (const [name, sub] of Object.entries(v)) inspect(sub, `${where}/${k}/${name}`);
      if (schemaSingles.has(k)) inspect(v, `${where}/${k}`);
      if (schemaArrays.has(k)) v.forEach((sub, i) => inspect(sub, `${where}/${k}/${i}`));
      if (k === 'pattern') new RegExp(v, 'u');
      if (k === 'patternProperties') for (const p of Object.keys(v)) new RegExp(p, 'u');
    }
  }
  for (const [f, s] of Object.entries(files)) inspect(s, f);
  function validate(schemaFile, value) {
    if (!(schemaFile in files)) throw new Error(`Unknown schema ${schemaFile}`);
    function run(s, v, path, file) {
      const errors = [];
      const add = (message) => errors.push({ path, message });
      const sub = (schema, val = v, p = path, f = file) => run(schema, val, p, f);
      if (s === false) return [{ path, message: 'Schema rejects value' }];
      if (s === true) return [];
      if ('$ref' in s) {
        const match = /^(?:(.+\.schema\.json))?#\/\$defs\/([^/]+)$/.exec(s.$ref);
        if (!match) throw new Error(`Unsupported reference ${s.$ref}`);
        const target = match[1] || file;
        const name = match[2].replaceAll('~1', '/').replaceAll('~0', '~');
        if (!files[target]?.$defs || !Object.hasOwn(files[target].$defs, name))
          throw new Error(`Unknown reference ${s.$ref}`);
        errors.push(...sub(files[target].$defs[name], v, path, target));
      }
      const types = s.type === undefined ? [] : Array.isArray(s.type) ? s.type : [s.type];
      const matches = (t) =>
        ({
          null: v === null,
          boolean: typeof v === 'boolean',
          string: typeof v === 'string',
          number: typeof v === 'number' && Number.isFinite(v),
          integer: Number.isInteger(v),
          array: Array.isArray(v),
          object: v !== null && typeof v === 'object' && !Array.isArray(v),
        })[t] === true;
      if (types.length && !types.some(matches)) add(`Expected ${types.join(' or ')}`);
      if ('const' in s && !jsonEqual(v, s.const)) add('Value does not match const');
      if (s.enum && !s.enum.some((x) => jsonEqual(x, v))) add('Value is not in enum');
      if (typeof v === 'string') {
        const n = [...v].length;
        if (s.minLength !== undefined && n < s.minLength) add('String shorter than minLength');
        if (s.maxLength !== undefined && n > s.maxLength) add('String longer than maxLength');
        if (s.pattern !== undefined && !new RegExp(s.pattern, 'u').test(v))
          add('String does not match pattern');
      }
      if (typeof v === 'number') {
        if (s.minimum !== undefined && v < s.minimum) add('Number below minimum');
        if (s.maximum !== undefined && v > s.maximum) add('Number above maximum');
        if (s.exclusiveMinimum !== undefined && v <= s.exclusiveMinimum)
          add('Number below exclusiveMinimum');
      }
      if (Array.isArray(v)) {
        if (s.minItems !== undefined && v.length < s.minItems) add('Too few items');
        if (s.maxItems !== undefined && v.length > s.maxItems) add('Too many items');
        if (s.uniqueItems && v.some((x, i) => v.slice(0, i).some((y) => jsonEqual(x, y))))
          add('Items are not unique');
        if (s.items !== undefined)
          v.forEach((x, i) => errors.push(...sub(s.items, x, `${path}/${i}`)));
      }
      if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
        const keys = Object.keys(v);
        if (s.minProperties !== undefined && keys.length < s.minProperties)
          add('Too few properties');
        for (const key of s.required || [])
          if (!Object.hasOwn(v, key))
            errors.push({ path: `${path}/${esc(key)}`, message: 'Required property missing' });
        for (const key of keys) {
          const p = `${path}/${esc(key)}`;
          if (s.propertyNames !== undefined) errors.push(...sub(s.propertyNames, key, p));
          let matched = false;
          if (s.properties && Object.hasOwn(s.properties, key)) {
            matched = true;
            errors.push(...sub(s.properties[key], v[key], p));
          }
          for (const [pattern, schema] of Object.entries(s.patternProperties || {}))
            if (new RegExp(pattern, 'u').test(key)) {
              matched = true;
              errors.push(...sub(schema, v[key], p));
            }
          if (!matched && s.additionalProperties !== undefined)
            errors.push(...sub(s.additionalProperties, v[key], p));
        }
      }
      for (const key of ['oneOf', 'anyOf'])
        if (s[key]) {
          const count = s[key].filter((x) => sub(x).length === 0).length;
          if (key === 'oneOf' ? count !== 1 : count === 0) add(`${key} did not match`);
        }
      for (const x of s.allOf || []) errors.push(...sub(x));
      if (s.not !== undefined && sub(s.not).length === 0) add('not matched');
      if (s.if !== undefined) {
        const branch = sub(s.if).length === 0 ? s.then : s.else;
        if (branch !== undefined) errors.push(...sub(branch));
      }
      return errors;
    }
    const errors = run(files[schemaFile], value, '', schemaFile);
    return { valid: errors.length === 0, errors };
  }
  return { validate };
}
