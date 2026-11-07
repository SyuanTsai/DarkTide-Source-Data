import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkText } from '../../pipeline/lib/verify/text.mjs';

// Scenario: official text has a template identifier containing a digit and a literal unsupported percentage.
// Purpose: Ignore only template identifiers while retaining the official number and explanation gates.
test('UnitT10_模板識別字不產生錯數且真正錯數仍被檢出', () => {
  const item = { values: { params: { ammo_2: { value: 25 } } }, official: { en: '{ammo_2:%s}', zh: '{ammo_2:%s}' }, explanation: { effect: '彈藥25%', conditions: '', calculation: '', notes: '', extra: '' }, errata: [] };
  const check = () => checkText(item, null, [], [], new Map()).failures;
  assert.equal(check().some(f => f.code === 'T_ERRATA_MISSING'), false);
  item.official.zh += ' 固定2.5%';
  item.explanation.effect += '，固定2.5%';
  assert.ok(check().some(f => f.code === 'T_ERRATA_MISSING'));
  assert.ok(check().some(f => f.code === 'T_NUMBER'));
});
