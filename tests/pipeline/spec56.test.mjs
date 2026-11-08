import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkNumbers, extractNumbers } from '../../pipeline/lib/verify/numbers.mjs';
import { effectTaskFor } from '../../pipeline/lib/official-effect.mjs';
import { applyEffectTask } from '../../pipeline/lib/candidate.mjs';

// Scenario: numeric strings include explicit units and invalid text. Purpose: require matching value and unit without accepting fragments.
test('UnitT10_numeric strings respect values and units', () => {
  const check=(value,text)=>checkNumbers({params:{x:{value}}},text).failures;
  assert.deepEqual(check('5%','5%'),[]);
  assert.ok(check('5%','6%').some(x=>x.code==='T_NUMBER'));
  assert.ok(check('5m','5%').some(x=>x.code==='T_NUMBER'));
  assert.deepEqual(check('5','5%'),check(5,'5%'));
  assert.ok(check('about 5%','5%').some(x=>x.code==='T_NUMBER'));
  assert.deepEqual(check('5m','5公尺'),[]);
});
// Scenario: locked negative effect uses a positive numeric string. Purpose: retain unit-sensitive direction exception.
test('UnitT20_numeric strings obey direction compatibility', () => {
  const check=(value,text)=>checkNumbers({params:{x:{value}}},text,text);
  assert.equal(check('5%','-5%').warnings.length,1);
  assert.ok(check('5m','-5%').failures.length);
});
// Scenario: Chinese official text is absent, equal, or translated. Purpose: generate translation tasks only where needed and label candidates.
test('UnitT30_missing untranslated and translated official effects', () => {
  for(const zh of [null,'English']) {
    const task=effectTaskFor({official:{en:'English',zh},values:{} });
    assert.deepEqual(task,{effectTask:'translate-official-en'});
    assert.equal(applyEffectTask({effect:'譯文',effectOrigin:'official'},task).effectOrigin,'unofficial-translation');
  }
  assert.deepEqual(effectTaskFor({official:{en:null,zh:null},values:{}}),{effectTask:'translate-official-en'});
  assert.equal(applyEffectTask({effect:'補寫'}, {effectTask:'translate-official-en'}).effectOrigin,'unofficial-translation');
  assert.deepEqual(effectTaskFor({official:{en:'English',zh:'中文'},values:{}}),{lockedEffect:'中文'});
});

// Scenario: multiplier suffixes are compared with unitless values, while unrelated units and values still fail.
// Purpose: prevent multiplier notation from being treated as an unsupported unit or matching percent, time, or distance values.
test('UnitT40_倍與倍率符號只匹配無單位數值', () => {
  const check = (text, param) => checkNumbers({ params: { x: param } }, text);
  assert.deepEqual(check('2倍', { value: 2 }).failures, []);
  assert.deepEqual(check('2x', { value: 2 }).failures, []);
  assert.deepEqual(check('2×', { value: 2 }).failures, []);
  assert.ok(check('3倍', { value: 2 }).failures.some((failure) => failure.code === 'T_NUMBER'));
  assert.ok(check('2倍', { value: 2, unit: 'percent' }).failures.some((failure) => failure.code === 'T_NUMBER'));
  assert.ok(check('2倍', { value: 2, unit: 'seconds' }).failures.some((failure) => failure.code === 'T_NUMBER'));
  assert.ok(check('2倍', { value: 2, unit: 'meters' }).failures.some((failure) => failure.code === 'T_NUMBER'));
});

// Scenario: adjacent numbers follow Chinese unit labels or list separators. Purpose: keep the tokenizer from merging those numbers into a unit suffix.
test('UnitT50_中文單位與數字列舉分開剖析', () => {
  assert.deepEqual(
    extractNumbers('1／+2 4層2.5%').map(({ raw, suffix }) => ({ raw, suffix })),
    [
      { raw: '1', suffix: undefined },
      { raw: '+2', suffix: undefined },
      { raw: '4', suffix: '層' },
      { raw: '2.5', suffix: '%' }
    ]
  );
  assert.deepEqual(
    extractNumbers('10 jump angle; 1 additional targets; 5 kg; 5kg').map(({ raw, suffix }) => ({ raw, suffix })),
    [
      { raw: '10', suffix: undefined },
      { raw: '1', suffix: undefined },
      { raw: '5', suffix: 'kg' },
      { raw: '5', suffix: 'kg' }
    ]
  );
  const check = (text, param) => checkNumbers({ params: { x: param } }, text);
  assert.deepEqual(check('10 jump angle', { value: 10 }).failures, []);
  assert.ok(check('5 kg', { value: 5 }).failures.some((failure) => failure.code === 'T_NUMBER'));
  assert.ok(check('5kg', { value: 5 }).failures.some((failure) => failure.code === 'T_NUMBER'));
});

// Scenario: raw ratio values are written as the same fraction without a display unit. Purpose: accept exact ratio values without treating a percent or multiplier as interchangeable.
test('UnitT60_無後綴比例只匹配原始比例數值', () => {
  const check = (text, param) => checkNumbers({ params: { x: param } }, text);
  assert.deepEqual(check('0.025', { value: 0.025, unit: 'ratio' }).failures, []);
  assert.ok(check('2.5', { value: 0.025, unit: 'ratio' }).failures.some((failure) => failure.code === 'T_NUMBER'));
  assert.ok(check('2倍', { value: 2, unit: 'ratio' }).failures.some((failure) => failure.code === 'T_NUMBER'));
  assert.ok(check('1%／秒', { value: 1, unit: 'percent' }).failures.some((failure) => failure.code === 'T_NUMBER'));
});
