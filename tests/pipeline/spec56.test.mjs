import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkNumbers } from '../../pipeline/lib/verify/numbers.mjs';
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
