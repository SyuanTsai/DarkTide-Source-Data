import assert from 'node:assert/strict';
import test from 'node:test';

import {
  LuaStaticError,
  parseLuaStatic,
  toPlainValue
} from '../scripts/content/lib/lua-static-reader.mjs';

// Scenario: A literal contains keyed fields, array entries, a computed symbolic key, and nested tables.
// Purpose: Preserve the source shape and symbolic references without executing Lua.
test('UnitT10_nested_tables_and_symbolic_members_preserve_locations', () => {
  const source = [
    'local stat_buffs = BuffSettings.stat_buffs',
    'local value = {',
    '  name = "example",',
    '  nested = { 10, { enabled = true } },',
    '  [stat_buffs.movement_speed] = 0.17,',
    '}',
    'return value'
  ].join('\n');

  const parsed = parseLuaStatic(source, { filename: 'fixture.lua' });
  const plain = toPlainValue(parsed.returned);

  assert.deepEqual(plain, {
    name: 'example',
    nested: [10, { enabled: true }],
    $computed: [{ key: { ref: 'stat_buffs.movement_speed' }, value: 0.17 }]
  });
  assert.equal(parsed.returned.startLine, 2);
  assert.equal(parsed.returned.endLine, 6);
  assert.equal(parsed.returned.start, source.indexOf('{'));
  assert.equal(parsed.returned.end, source.lastIndexOf('}') + 1);
});

// Scenario: Quoted strings, long strings, long comments, negative numbers, and scientific notation occur together.
// Purpose: Tokenize Lua 5.1 lexical forms without comments changing source lines or string escapes being lost.
test('UnitT20_strings_comments_and_numeric_literals_are_tokenized_statically', () => {
  const source = [
    '--[=[ ignored { "text" }',
    'still ignored ]=]',
    'return {',
    '  escaped = "line\\nquote\\\"hex\\x21",',
    "  single = 'it\\'s',",
    '  long = [==[alpha',
    'beta]==],',
    '  negative = -12.5,',
    '  scientific = 6.02e-3,',
    '}'
  ].join('\n');

  const parsed = parseLuaStatic(source);

  assert.deepEqual(toPlainValue(parsed.returned), {
    escaped: 'line\nquote"hex!',
    single: "it's",
    long: 'alpha\nbeta',
    negative: -12.5,
    scientific: 0.00602
  });
  assert.equal(parsed.returned.startLine, 3);
  assert.equal(parsed.returned.endLine, 10);
});

// Scenario: A value-manipulation callback is embedded in a static table.
// Purpose: Capture exact function source and line range while proving the reader never evaluates it.
test('UnitT30_function_values_are_captured_as_raw_source', () => {
  const source = [
    'return {',
    '  value_manipulation = function (value)',
    '    error("must not run")',
    '    return value * 10',
    '  end,',
    '}'
  ].join('\n');

  const plain = toPlainValue(parseLuaStatic(source).returned);

  assert.equal(plain.value_manipulation.function, true);
  assert.equal(plain.value_manipulation.startLine, 2);
  assert.equal(plain.value_manipulation.endLine, 5);
  assert.match(plain.value_manipulation.raw, /error\("must not run"\)/u);
});

// Scenario: Locals use require, clone a table, fill missing fields, and append list entries.
// Purpose: Supply the non-executing table semantics needed by later source extractors.
test('UnitT40_require_clone_add_missing_and_append_have_static_semantics', () => {
  const source = [
    'local dependency = require("scripts/example")',
    'local base = { a = 1, list = { 1 } }',
    'local copy = table.clone(base)',
    'table.add_missing(copy, { a = 9, b = dependency.value })',
    'table.append(copy.list, { 3, 4 })',
    'return copy'
  ].join('\n');

  const parsed = parseLuaStatic(source);

  assert.equal(parsed.requires.dependency, 'scripts/example');
  assert.deepEqual(toPlainValue(parsed.returned), {
    a: 1,
    list: [1, 3, 4],
    b: { ref: 'dependency.value' }
  });
});

// Scenario: add_missing receives implicit numeric keys and a computed symbolic key already present in the destination.
// Purpose: Match Lua table key semantics instead of duplicating existing array or symbolic entries.
test('UnitT45_add_missing_respects_array_indexes_and_computed_keys', () => {
  const source = [
    'local destination = { 10, [symbols.value] = 1 }',
    'table.add_missing(destination, { 20, 30, [symbols.value] = 9 })',
    'return destination'
  ].join('\n');

  assert.deepEqual(toPlainValue(parseLuaStatic(source).returned), {
    $array: [10, 30],
    $computed: [{ key: { ref: 'symbols.value' }, value: 1 }]
  });
});

// Scenario: An arithmetic expression has no supported static semantics.
// Purpose: Fail closed with a stable machine-readable error instead of guessing the result.
test('UnitT50_unsupported_expression_reports_unsupported_construct', () => {
  assert.throws(
    () => parseLuaStatic('return { value = 1 + 2 }'),
    (error) => {
      assert.ok(error instanceof LuaStaticError);
      assert.equal(error.code, 'UNSUPPORTED_CONSTRUCT');
      assert.equal(error.line, 1);
      return true;
    }
  );
});
