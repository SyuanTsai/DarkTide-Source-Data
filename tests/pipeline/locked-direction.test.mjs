import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkText } from '../../pipeline/lib/verify/text.mjs';
import { summary } from '../../pipeline/lib/verify/report.mjs';

const item = (effect = '減少-10%', values = [0.1]) => ({ explanation: { effect, effectOrigin: 'official', conditions: '', calculation: '', notes: '', extra: '' }, values: { params: Object.fromEntries(values.map((value, i) => [`v${i}`, { value }])) }, official: {}, errata: [] });
const check = (i, locked = i.explanation.effect) => checkText(i, undefined, [], [], new Map(), locked);
// Scenario: locked official text expresses a positive reduction with a minus sign. Purpose: report the accepted difference.
test('UnitT10_鎖定官方負號符合正降幅時警告', () => {
  const result = check(item());
  assert.deepEqual(result.failures, []);
  assert.match(JSON.stringify(result.warnings), /W_OFFICIAL_TEXT_DIRECTION.*-10.*0.1/);
  assert.match(summary({ result: 'pass', items: [{ id: 'skill', decision: 'pass', warnings: result.warnings }], categories: {}, translationConflicts: [] }, 'off'), /官方原文 warning.*-10.*0.1/);
});
// Scenario: official signed magnitude differs. Purpose: retain numeric failure.
test('UnitT20_鎖定官方數值不符仍失敗', () => assert.ok(check(item('減少-15%')).failures.some(f => f.code === 'T_NUMBER')));
// Scenario: each AI-authored section has an opposite direction. Purpose: preserve strict checks.
for (const [n, section] of ['conditions', 'calculation', 'notes', 'extra'].entries()) test(`UnitT${30+n}_${section}方向相反仍失敗`, () => {
  const i = item(); i.explanation[section] = '-10%';
  assert.ok(check(i).failures.some(f => f.code === 'T_DIRECTION'));
});
// Scenario: official claim does not match lock. Purpose: reject the direction mismatch.
test('UnitT40_官方標記但不符鎖定結果仍失敗', () => assert.ok(check(item(), '其他').failures.some(f => f.code === 'T_DIRECTION')));
// Scenario: unofficial effect has a minus sign. Purpose: reject the direction mismatch.
test('UnitT50_非官方效果方向相反仍失敗', () => { const i = item(); i.explanation.effectOrigin = 'unofficial-translation'; assert.ok(check(i).failures.some(f => f.code === 'T_DIRECTION')); });
// Scenario: signed positive and negative tiers coexist. Purpose: accept only matching negative reductions.
test('UnitT60_混合正負號及多階逐一比對', () => {
  const result = check(item('提升+10%，減少-10%／-30%', [0.1, 0.3]));
  assert.deepEqual(result.failures, []);
  assert.match(JSON.stringify(result.warnings), /-10/); assert.match(JSON.stringify(result.warnings), /-30/);
  assert.ok(check(item('減少-10%／-35%', [0.1, 0.3])).failures.some(f => f.code === 'T_NUMBER'));
});
// Scenario: positive text opposes a negative value. Purpose: do not broaden the exception.
test('UnitT70_正號對負值仍失敗', () => assert.ok(check(item('提升+25%', [-0.25])).failures.some(f => f.code === 'T_DIRECTION')));
