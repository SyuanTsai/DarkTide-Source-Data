import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMigration, applyPatch } from '../../scripts/migration/lib/repair-tasks.mjs';
import { inputs, term } from './fixtures/migration.mjs';

function skillInput(official) {
  const input = inputs(), item = term();
  item.id = 'darktide:skill:test';
  item.values = { archetype: 'test', tree: 'test', nodeType: 'stat', icon: null, parents: [], maxPoints: 1, params: {} };
  item.source.text.keys.name = 'loc_test'; item.official.zh = official;
  input.extracts.skills.items = [item]; input.extracts.terms.items = [];
  input.documents = [{ path: 'domains/skills.json', value: { kind: 'skills', source: { records: [{ recordId: 'old:skill', kind: 'skill', payload: { nameKey: 'loc_test' } }] }, web: { presentations: [{ locale: 'zh-TW', entityRef: { recordId: 'old:skill' }, detailSections: [{ sectionId: 'effects', items: [{ text: '舊機制。' }] }] }] } } }];
  input.textIndex = { batch: '26101089', lookup: () => null };
  input.textHash = 'fixture';
  return input;
}
test('complete official effect is locked and keeps old mechanics in notes', () => {
  const plan = buildMigration(skillInput('官方效果。')), row = plan.rows[0], task = plan.tasks[0];
  assert.equal(row.candidate.explanation.effect, '官方效果。');
  assert.equal(row.candidate.explanation.effectOrigin, 'official');
  assert.equal(row.candidate.explanation.notes, '舊機制。');
  assert.ok(task.immutable.lockedSections.includes('effect'));
  assert.throws(() => applyPatch(task, {id: task.id, taskHash: task.taskHash, extractHash: task.extractHash, replacements:[{rangeId:'effect:0', originalHash:'x', text:'改寫'}], errata:[]}), /scope|exclusion/);
});
test('incomplete official effect is excluded from baseline eligibility', () => {
  const plan = buildMigration(skillInput('{damage:%s}傷害'));
  assert.equal(plan.rows[0].status, 'excluded');
  assert.equal(plan.report.excluded[0].reason, 'official-effect-incomplete');
});

test('template expands from display values and task input binds the text index hash', () => {
  const input = skillInput('{damage:%s}傷害');
  input.extracts.skills.items[0].values.params = { damage: { value: 12 } };
  input.extracts.skills.effectFormats = { 'darktide:skill:test': { params: { damage: { token: 'damage', type: 'number', valueSpace: 'display', prefix: '', suffix: '', numDecimals: 0 } } } };
  const plan = buildMigration(input);
  assert.equal(plan.rows[0].candidate.explanation.effect, '12傷害');
  assert.equal(plan.rows[0].candidate.explanation.effectOrigin, 'official');
  assert.notEqual(plan.inputHash, buildMigration({ ...input, textHash: 'other' }).inputHash);
});
