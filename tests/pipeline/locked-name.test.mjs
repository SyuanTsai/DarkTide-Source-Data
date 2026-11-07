import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkText } from '../../pipeline/lib/verify/text.mjs';
import { summary } from '../../pipeline/lib/verify/report.mjs';

const conflicts = [{ en: 'Stance', officialZh: '懲罰者姿態' }];
const table = new Map([['stance', { variants: ['懲戒者姿態'] }]]);
const locked = '進入懲戒者姿態。';
const item = () => ({ explanation: { effect: locked, effectOrigin: 'official', conditions: '', calculation: '', notes: '', extra: '' }, values: {}, official: {}, errata: [] });
const check = (i, expected = locked) => checkText(i, undefined, [], conflicts, table, expected);

test('鎖定官方效果只產生名稱 warning，摘要列出內容', () => {
  const result = check(item());
  assert.equal(result.failures.some(f => f.code === 'T_NAME_NOT_OFFICIAL'), false);
  assert.match(JSON.stringify(result.warnings), /W_OFFICIAL_TEXT_NAME_MISMATCH.*懲戒者姿態.*懲罰者姿態/);
  const report = { result: 'pass', items: [{ id: 'skill', decision: 'pass', warnings: result.warnings }], categories: {}, translationConflicts: [] };
  assert.match(summary(report, 'off'), /官方原文 warning.*skill.*懲戒者姿態.*懲罰者姿態/);
});
for (const section of ['conditions', 'calculation', 'notes', 'extra']) test(`AI ${section} 錯誤名稱仍失敗`, () => {
  const i = item(); i.explanation[section] = '懲戒者姿態';
  assert.ok(check(i).failures.some(f => f.code === 'T_NAME_NOT_OFFICIAL'));
});
test('官方標記但未符合鎖定結果仍檢查', () => {
  assert.ok(check(item(), '其他原文').failures.some(f => f.code === 'T_NAME_NOT_OFFICIAL'));
});
test('非官方 effect 錯誤名稱仍失敗', () => {
  const i = item(); i.explanation.effectOrigin = 'unofficial-translation';
  assert.ok(check(i).failures.some(f => f.code === 'T_NAME_NOT_OFFICIAL'));
});
