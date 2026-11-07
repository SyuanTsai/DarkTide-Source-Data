import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkNumbers } from '../../pipeline/lib/verify/numbers.mjs';

// Scenario: scalar and array numeric strings inherit a parameter unit. Purpose: match number direction decisions and reject conflicting units.
test('UnitT10_數字字串沿用父單位並拒絕衝突', () => {
  for (const [unit, text] of [['seconds', '-5%'], ['percent', '-500%']]) {
    for (const array of [false, true]) {
      const check = value => checkNumbers({params:{x:{value:array ? [value] : value, unit}}}, text, text);
      const number = check(5), string = check('5');
      assert.deepEqual(string.failures.map(f => f.code), number.failures.map(f => f.code));
      assert.equal(string.warnings.length, number.warnings.length);
      assert.ok(string.failures.some(f => f.code === 'T_DIRECTION'));
    }
  }
  assert.ok(checkNumbers({params:{x:{value:'5m',unit:'seconds'}}}, '5公尺').failures.length);
});

// Scenario: text describes length and compound speed units. Purpose: reject partial unit matches while preserving supported length units.
test('UnitT20_完整比對單位並拒絕複合單位', () => {
  const check = text => checkNumbers({params:{x:{value:'5m'}}}, text);
  for (const text of ['5公尺/秒', '5m/s', '5%/秒']) assert.ok(check(text).failures.length, text);
  for (const text of ['5公尺', '5米', '5m']) assert.deepEqual(check(text).failures, [], text);
  assert.ok(checkNumbers({params:{x:{value:5,unit:'meters'}}}, '-5公尺/秒', '-5公尺/秒').failures.length);
});
