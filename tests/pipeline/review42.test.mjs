import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkNumbers, extractNumbers } from '../../pipeline/lib/verify/numbers.mjs';

// Scenario: ranges and lists contain independently supported values. Purpose: delimit every numeric token without swallowing its neighbor.
test('UnitT10_範圍與並列符號分隔數值', () => {
  for (const [text, values] of [['25～40、250～400',[25,40,250,400]], ['5%～10%',[5,10]], ['10／15／20',[10,15,20]]]) {
    assert.deepEqual(checkNumbers({values}, text).failures, [], text);
  }
  for (const separator of ['～','~','-','—','－','／','/','、','，',',',' ','×','±','→','↑','(',')','（','）']) {
    assert.equal(extractNumbers(`25${separator}40`)[0].suffix, undefined, separator);
  }
});
// Scenario: locked negative percentages use a list separator. Purpose: retain direction warnings for both values.
test('UnitT20_並列負百分比保留方向例外', () => {
  const text = '-10%／-30%';
  const result = checkNumbers({values:[{value:10,unit:'percent'},{value:30,unit:'percent'}]}, text, text);
  assert.deepEqual(result.failures, []);
  assert.equal(result.warnings.length, 2);
});
// Scenario: units contain modifiers or a supported per-second percentage. Purpose: retain strict unit validation.
test('UnitT30_複合單位仍嚴格檢查', () => {
  for (const text of ['5公尺²','5m/s']) assert.ok(checkNumbers({values:[5]}, text).failures.length, text);
  assert.deepEqual(checkNumbers({values:[5]}, '5%/秒').failures, []);
});
