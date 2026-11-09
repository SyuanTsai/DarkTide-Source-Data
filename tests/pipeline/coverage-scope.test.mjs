import {test} from 'node:test';
import assert from 'node:assert/strict';
import {checkNumbers} from '../../pipeline/lib/verify/numbers.mjs';

const codes = (values, text = '') => checkNumbers(values, text).failures.map(({code}) => code);

// Scenario: mechanics contains a non-zero numeric value while the explanation has no numbers.
// Purpose: mechanics values are not displayed-param coverage obligations.
test('UnitT10_機制數值不納入說明涵蓋檢查', () => {
  assert.deepEqual(codes({mechanics: {damage: {value: 25}}}), []);
});

// Scenario: a root params value is non-zero and absent from the explanation.
// Purpose: displayed root params remain required coverage.
test('UnitT20_根層顯示參數缺少說明時回報涵蓋失敗', () => {
  assert.deepEqual(codes({params: {damage: {value: 25}}}), ['T_COVERAGE']);
});

// Scenario: a blessing tier param is non-zero and absent from the explanation.
// Purpose: displayed tier params remain required coverage.
test('UnitT30_祝福階級顯示參數缺少說明時回報涵蓋失敗', () => {
  assert.deepEqual(codes({tiers: [{params: {damage: {value: 25}}}]}), ['T_COVERAGE']);
});

// Scenario: the explanation states a percentage derived from a mechanics ratio.
// Purpose: mechanics remain valid evidence for T_NUMBER derivation.
test('UnitT40_說明數字可由機制數值推導', () => {
  assert.equal(codes({mechanics: {damage: {value: 0.25}}}, '造成25%傷害').includes('T_NUMBER'), false);
});

// Scenario: the explanation states a number absent from all values.
// Purpose: unsupported explanation numbers continue to fail T_NUMBER.
test('UnitT50_說明數字無法由資料推導時仍回報錯數', () => {
  assert.deepEqual(codes({}, '造成999%傷害'), ['T_NUMBER']);
});
