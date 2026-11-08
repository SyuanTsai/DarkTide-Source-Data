import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';
import { checkSchema12 } from '../../pipeline/lib/schema12.mjs';

const schemas = loadSchemas('pipeline/schema');
const fields = {
  valueSources: { '/params': [{ path: 'scripts/example.lua', line: 1 }] },
  codeRefs: { 'scripts/example.lua#x': { path: 'scripts/example.lua', symbol: 'x', sha256: 'a'.repeat(64) } },
};
const sample = category => {
  const file = JSON.parse(readFileSync(`pipeline/schema/examples/1.2.0-example/${category}.json`, 'utf8'));
  file.items = [file.items[0]];
  file.items[0].errata = [];
  return file;
};
const inputFor = file => {
  const { explanation, errata, citations, ...item } = file.items[0];
  return {
    schemaVersion: '1.0.0', dataSchemaVersion: file.schemaVersion,
    id: item.id, category: file.category, change: 'added', gameVersion: file.gameVersion,
    sourceCommit: file.sourceCommit, textBatch: file.textBatch, inputHash: 'a'.repeat(64),
    item, previous: null, glossary: { source: null, matches: [] }, outputFile: 'ai/output/example.json',
  };
};
const semanticErrors = file => {
  const errors = [];
  checkSchema12(file.category, file, file.items[0], '/items/0', file.items,
    (path, message) => errors.push({ path, message }));
  return errors;
};

// Scenario: add one well-formed source field to a valid weapons/terms item, including an empty object.
// Purpose: each validation layer must reject only the C2/C3 category violation.
for (const category of ['weapons', 'terms']) for (const field of Object.keys(fields))
test(`UnitT10_C2 C3 ${category} rejects source.${field}`, () => {
  const file = sample(category);
  const schemaCheck = () => schemas.validate(`${category}.schema.json`, file);
  const dataCheck = () => checkDataFile(category, stringifyCanonical(file));
  const inputCheck = () => schemas.validate('ai-input.schema.json', inputFor(file));
  for (const result of [schemaCheck(), dataCheck(), inputCheck()]) assert.deepEqual(result.errors, []);
  assert.deepEqual(semanticErrors(file), []);
  for (const value of [fields[field], {}]) {
    file.items[0].source[field] = structuredClone(value);
    const path = `/items/0/source/${field}`;
    assert.deepEqual(schemaCheck().errors, [{ path, message: 'Schema rejects value' }]);
    assert.deepEqual(semanticErrors(file), [{ path, message: `${field} requires skills or blessings` }]);
    assert.deepEqual(dataCheck().errors, [
      { path, message: 'Schema rejects value' },
      { path, message: `${field} requires skills or blessings` },
    ]);
    assert.deepEqual(inputCheck().errors, [{ path: `/item/source/${field}`, message: 'Schema rejects value' }]);
  }
});

// Scenario: valid skills/blessings source fields are populated or empty, with no mechanics requiring sources.
// Purpose: retain C2/C3 acceptance in both supported categories across all validation layers.
for (const category of ['skills', 'blessings'])
test(`UnitT20_C2 C3 ${category} accepts source.valueSources and source.codeRefs`, () => {
  const file = sample(category), item = file.items[0];
  delete item.values.mechanics;
  for (const tier of item.values.tiers ?? []) delete tier.mechanics;
  delete item.citations;
  for (const empty of [false, true]) {
    for (const [field, value] of Object.entries(fields)) item.source[field] = empty ? {} : structuredClone(value);
    assert.deepEqual(schemas.validate(`${category}.schema.json`, file).errors, []);
    assert.deepEqual(semanticErrors(file), []);
    assert.deepEqual(checkDataFile(category, stringifyCanonical(file)).errors, []);
    assert.deepEqual(schemas.validate('ai-input.schema.json', inputFor(file)).errors, []);
  }
});
