import { test, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';
const dir = mkdtempSync(join(tmpdir(), 'schema-'));
after(() => rmSync(dir, { recursive: true, force: true }));
function writeOtherSchema() {
  writeFileSync(join(dir, 'other.schema.json'), JSON.stringify({ $defs: { x: { type: 'integer' } } }));
}

function validate(schema, value) {
  writeFileSync(join(dir, 'case.schema.json'), JSON.stringify(schema));
  return loadSchemas(dir).validate('case.schema.json', value);
}
test('supported assertions accept and reject', () => {
  const cases = [
    [{ type: 'integer' }, 1, 1.5],
    [{ enum: ['a', 'b'] }, 'a', 'c'],
    [{ const: 2 }, 2, 3],
    [
      {
        type: 'object',
        properties: { a: { type: 'string' } },
        required: ['a'],
        additionalProperties: false,
      },
      { a: 'x' },
      { a: 1, b: 2 },
    ],
    [{ propertyNames: { pattern: '^a' } }, { abc: 1 }, { bad: 1 }],
    [{ patternProperties: { '^a': { type: 'integer' } } }, { abc: 1 }, { abc: 'x' }],
    [{ items: { type: 'integer' } }, [1], ['x']],
    [{ minItems: 1 }, [1], []],
    [{ maxItems: 1 }, [1], [1, 2]],
    [{ uniqueItems: true }, [1, 2], [1, 1]],
    [{ minLength: 2 }, 'ab', 'a'],
    [{ maxLength: 2 }, 'ab', 'abc'],
    [{ pattern: '^a' }, 'abc', 'b'],
    [{ minimum: 1 }, 1, 0],
    [{ maximum: 1 }, 1, 2],
    [{ exclusiveMinimum: 1 }, 2, 1],
    [{ minProperties: 1 }, { a: 1 }, {}],
    [{ oneOf: [{ type: 'string' }, { type: 'number' }] }, 'x', null],
    [{ anyOf: [{ type: 'string' }, { type: 'number' }] }, 1, null],
    [{ allOf: [{ type: 'string' }, { minLength: 2 }] }, 'ab', 'a'],
    [{ not: { type: 'string' } }, 1, 'x'],
    [{ if: { type: 'string' }, then: { minLength: 2 }, else: { type: 'number' } }, 'ab', 'a'],
  ];
  for (const [schema, yes, no] of cases) {
    assert.equal(validate(schema, yes).valid, true, JSON.stringify(schema));
    assert.equal(validate(schema, no).valid, false, JSON.stringify(schema));
  }
});
// Scenario: resolve a cross-file reference. Purpose: preserve escaped error pointers.
test('UnitT10_references and error pointers', () => {
  writeOtherSchema();
  const result = validate(
    { properties: { 'a/b': { $ref: 'other.schema.json#/$defs/x' } } },
    { 'a/b': 'x' },
  );
  assert.equal(result.errors[0].path, '/a~1b');
  assert.equal(validate({ $defs: { x: { type: 'string' } }, $ref: '#/$defs/x' }, 'ok').valid, true);
});
test('unsupported keyword is rejected at load', () => {
  assert.throws(() => validate({ format: 'date' }, 'x'), /format/);
});

// Scenario: validate independent schema cases. Purpose: preserve reference resolution and JSON equality.
test('UnitT20_isolated schema cases and JSON equality', () => {
  writeOtherSchema();
  for (const [schema, yes, no] of [
    [{ required: ['a'] }, { a: 1 }, {}],
    [
      { properties: { a: { type: 'string' } }, additionalProperties: false },
      { a: 'x' },
      { a: 'x', b: 1 },
    ],
    [{ additionalProperties: { type: 'integer' } }, { a: 1 }, { a: 'x' }],
    [{ type: ['string', 'null'] }, null, 1],
    [{ if: { type: 'string' }, then: { minLength: 2 }, else: { type: 'number' } }, 1, false],
  ]) {
    assert.equal(validate(schema, yes).valid, true);
    assert.equal(validate(schema, no).valid, false);
  }
  assert.equal(
    validate({ properties: { a: { $ref: 'other.schema.json#/$defs/x' } } }, { a: 1 }).valid,
    true,
  );
  assert.equal(validate({ $defs: { x: { type: 'string' } }, $ref: '#/$defs/x' }, 1).valid, false);
  assert.equal(validate({ const: 0 }, -0).valid, true);
  assert.equal(validate({ enum: [0] }, -0).valid, true);
  assert.equal(validate({ uniqueItems: true }, [0, -0]).valid, false);
});
