import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkNumbers } from '../../pipeline/lib/verify/numbers.mjs';

// Scenario: numeric strings inherit units and explicit suffixes agree. Purpose: prevent cross-unit and repeated percent conversion.
test('UnitT10_父單位套用一般比對並保留相容對照', () => {
  for (const [value, unit, text, pass] of [['5','seconds','5%',false],['5秒','seconds','5%',false],['5','seconds','5秒',true],['5','percent','500%',false],['5%','percent','500%',false],['5','percent','5%',true],['5m','seconds','5公尺',false]]) {
    assert.equal(checkNumbers({params:{x:{value,unit}}},text).failures.length === 0, pass, `${value} ${unit} ${text}`);
  }
});
// Scenario: description contains length, area, speed, or unknown suffixes. Purpose: reject unsupported complete units for every value and direction.
test('UnitT20_不支援的完整單位一律失敗', () => {
  for (const text of ['5公尺²','5m²','5公尺/秒','5m/s','5秒²','5mX','5/秒','5/s']) {
    for (const value of ['5m', '5', 5]) {
      assert.ok(checkNumbers({params:{x:{value}}},text).failures.length, `${value} ${text}`);
      assert.ok(checkNumbers({params:{x:{value}}},`-${text}`,`-${text}`).failures.length, `${value} -${text}`);
    }
  }
  for (const text of ['5公尺','5m']) assert.deepEqual(checkNumbers({params:{x:{value:'5m'}}},text).failures, []);
});
// Scenario: Chinese unit words extend a recognized prefix or are not in the whitelist. Purpose: prevent unit-prefix truncation and treating unknown units as unitless.
test('UnitT30_未知中文單位不得被截斷或忽略', () => {
  for (const text of ['5公斤']) {
    assert.ok(checkNumbers({params:{x:{value:5}}}, text).failures.length, text);
  }
  assert.deepEqual(checkNumbers({params:{x:{value:'5秒'}}}, '5秒內').failures, []);
});

// Scenario: numeric text precedes a noun or a blacklisted Chinese unit. Purpose: distinguish nouns from unsupported units.
test('UnitT40_中文名詞無單位但黑名單單位失敗', () => {
  const check = text => checkNumbers({params:{x:{value:2}}}, text);
  assert.deepEqual(check('+2耐力').failures, []);
  assert.ok(checkNumbers({params:{x:{value:5}}}, '5倍').failures.length);
  for (const text of ['2公斤','2公克','2克','2公分','2釐米','2厘米','2毫米','2公里','2平方','2立方','2小時','2分鐘','2毫秒','2度','2倍']) assert.ok(check(text).failures.length, text);
});
