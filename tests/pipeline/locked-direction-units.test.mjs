import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkText } from '../../pipeline/lib/verify/text.mjs';

const check = (effect, entries) => {
  const item = { explanation: { effect, effectOrigin: 'official', conditions: '', calculation: '', notes: '', extra: '' }, values: { params: Object.fromEntries(entries.map((param, i) => [`v${i}`, param])) }, official: {}, errata: [] };
  return checkText(item, undefined, [], [], new Map(), effect);
};

// Scenario: locked negative numbers have incompatible units or are converted twice. Purpose: reject non-direction differences.
test('UnitT10_方向例外拒絕錯誤單位與重複百分比換算', () => {
  for (const [effect, param] of [['-10%', { value: 0.1, unit: 'seconds' }], ['-10秒', { value: 10, unit: 'percent' }], ['-1000%', { value: 10, unit: 'percent' }]]) {
    const result = check(effect, [param]);
    assert.ok(result.failures.some(f => f.code === 'T_DIRECTION'), effect);
    assert.ok(!result.warnings.some(w => w.code === 'W_OFFICIAL_TEXT_DIRECTION'), effect);
  }
});

// Scenario: locked negative ratios and display percentages match positive parameters. Purpose: preserve legitimate direction warnings.
test('UnitT20_方向例外接受相容單位與多階', () => {
  for (const [effect, entries] of [['-10%', [{ value: 0.1, unit: 'ratio' }]], ['-10%／-30%', [{ value: 10, unit: 'percent' }, { value: 30, unit: 'percent' }]], ['-10秒', [{ value: 10, unit: 'seconds' }]]]) {
    const result = check(effect, entries);
    assert.deepEqual(result.failures, [], effect);
    assert.ok(result.warnings.some(w => w.code === 'W_OFFICIAL_TEXT_DIRECTION'), effect);
  }
});
