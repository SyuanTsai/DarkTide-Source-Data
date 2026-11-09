import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { anchorTarget, checkSchema12 } from '../../pipeline/lib/schema12.mjs';
import { checkErrata, checkText } from '../../pipeline/lib/verify/text.mjs';

const entry = () => ({ locale: 'en', official: '5', corrected: '7', valueRefs: ['/mechanics/correct'], sources: [{path: 'x.lua', line: 1}], anchor: {field: 'displayParameter', locale: 'en', text: '5', occurrence: 1, param: 'duration', tier: 1} });
const blessing = () => ({ id: 'darktide:blessing:test', values: {params: {duration: {value: 5}}, tiers: [{tier: 1, params: {}}], mechanics: {correct: {value: 7}}}, errata: [entry()] });
const schemaErrors = item => {
  const errors = [];
  const source = {'/mechanics/correct': [{path: 'x.lua', line: 1}]};
  for (const key of Object.keys(item.values.mechanics ?? {})) source[`/mechanics/${key}`] = [{path: 'x.lua', line: 1}];
  for (const [i, tier] of (item.values.tiers ?? []).entries()) for (const key of Object.keys(tier.mechanics ?? {})) source[`/tiers/${i}/mechanics/${key}`] = [{path: 'x.lua', line: 1}];
  item.source = {valueSources: source};
  if (!item.values.mechanics?.correct) delete source['/mechanics/correct'];
  checkSchema12(item.id.startsWith('darktide:blessing:') ? 'blessings' : 'skills', {schemaVersion: '1.2.0'}, item, '/items/0', [item], (path, message) => errors.push({path, message}));
  return errors;
};
const valid = item => { assert.deepEqual(schemaErrors(item), []); assert.deepEqual(checkErrata(item), []); const textItem = {...item, explanation: {effect: '效果', conditions: '', calculation: '', notes: '', extra: ''}}; assert.deepEqual(checkText(textItem, null, [], [], new Map()).failures.filter(f => f.code.startsWith('T_ERRATA_')), []); };

// Scenario: the selected tier lacks the root parameter. Purpose: preserve root fallback in both validation paths.
test('UnitT10_blessing root parameter passes schema and text verification', () => { valid(blessing()); });
// Scenario: the parameter exists only in the selected tier. Purpose: accept tier-only display values in both validation paths.
test('UnitT20_blessing tier parameter passes schema and text verification', () => { const x = blessing(); x.values.tiers[0].params.duration = x.values.params.duration; delete x.values.params.duration; valid(x); });
// Scenario: root and tier contain different values. Purpose: ensure the selected tier takes precedence.
test('UnitT30_blessing tier parameter takes precedence over root', () => { const x = blessing(); x.values.params.duration.value = 9; x.values.tiers[0].params.duration = {value: 5}; assert.equal(anchorTarget(x, x.errata[0].anchor), '5'); valid(x); });
// Scenario: the requested parameter is absent from both valid locations. Purpose: reject unresolved parameters.
test('UnitT40_blessing missing parameter is rejected', () => { const x = blessing(); delete x.values.params.duration; assert.ok(schemaErrors(x).some(e => e.path.endsWith('/anchor/param'))); assert.equal(checkErrata(x)[0]?.code, 'T_ERRATA_INVALID'); });
// Scenario: an otherwise valid blessing anchor has no tier. Purpose: keep tier mandatory.
test('UnitT50_blessing missing tier is rejected', () => { const x = blessing(); delete x.errata[0].anchor.tier; assert.ok(schemaErrors(x).some(e => e.path.endsWith('/anchor/tier'))); });
// Scenario: an otherwise valid blessing anchor selects an absent tier. Purpose: forbid root fallback without an existing tier.
test('UnitT60_blessing nonexistent tier is rejected', () => { for (const tier of [2, 5]) { const x = blessing(); x.errata[0].anchor.tier = tier; assert.ok(schemaErrors(x).some(e => e.path.endsWith('/anchor'))); assert.equal(checkErrata(x)[0]?.code, 'T_ERRATA_INVALID'); } });
// Scenario: a skill is missing its root parameter. Purpose: keep non-blessing lookups restricted to the root.
test('UnitT70_skill missing root parameter is rejected', () => { const x = blessing(); x.id = 'darktide:skill:test'; delete x.errata[0].anchor.tier; delete x.values.tiers; delete x.values.params.duration; assert.ok(schemaErrors(x).some(e => e.path.endsWith('/anchor/param'))); assert.equal(checkErrata(x)[0]?.code, 'T_ERRATA_INVALID'); });
// Scenario: the four rejected 1.13.4 errata use actual extracted values. Purpose: cover both observed regressions end to end.
test('UnitT80_1.13.4 rejected blessing errata pass schema and text verification', () => { const items = JSON.parse(readFileSync(new URL('./fixtures/schema12-anchor-1.13.4.json', import.meta.url))); assert.deepEqual(items.map(x => x.errata.length), [3, 1]); for (const item of items) for (const erratum of item.errata) { const x = structuredClone(item); x.errata = [erratum]; valid(x); } });
