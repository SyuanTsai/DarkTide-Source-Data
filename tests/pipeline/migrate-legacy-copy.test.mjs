import test from 'node:test';
import assert from 'node:assert/strict';
import { convertLegacy, mapLegacy } from '../../scripts/migration/lib/legacy-copy.mjs';
import { buildMigration } from '../../scripts/migration/lib/repair-tasks.mjs';
import { inputs, empty } from './fixtures/migration.mjs';

// Scenario: A note and all four tier options contain bound parts. Purpose: preserve each source fragment and tier.
test('UnitT10_convert_note_parts_and_all_four_tiers', () => {
  const document = { source: { records: [{ recordId: 'claim', kind: 'claim', payload: { value: { decimal: '-20' } } }] } };
  const item = { parts: [{ kind: 'literal', text: '速度 ' }, { kind: 'unsigned-percent', bindingRef: { recordId: 'claim' } }] };
  const presentation = { weaponView: { note: '武器備註。' }, detailSections: [{ sectionId: 'conditions', items: [{ text: '條件。' }] }],
    tierPresentations: { defaultTier: 4, options: [1, 2, 3, 4].map(tier => ({ tier, detailSections: [{ sectionId: 'effects', items: [item] }] })) } };
  const result = convertLegacy({ category: 'weapons', document, presentation, path: '/web/presentations/0' });
  for (const tier of [1, 2, 3, 4]) assert.ok(result.explanation.effect.includes(`第${tier}階：速度 20%`));
  assert.ok(result.explanation.effect.endsWith('武器備註。'));
  assert.equal(result.explanation.conditions, '條件。');
  assert.equal(result.fragments.length, 6);
  assert.ok(result.fragments.every(f => f.path && f.sha256));
});

// Scenario: Old effects and old notes coexist. Purpose: keep mechanics and lock the raw official effect without expanding it.
test('UnitT20_move_mechanics_to_notes_and_preserve_raw_official', () => {
  const result = convertLegacy({ category: 'skills', document: {}, extracted: { official: { zh: '{damage:%s} 傷害' } },
    presentation: { detailSections: [{ sectionId: 'effects', items: [{ text: '舊效果。' }] }, { sectionId: 'notes', items: [{ text: '原備註。' }] }] }, path: '/web/presentations/0' });
  assert.equal(result.explanation.effect, '{damage:%s} 傷害');
  assert.equal(result.explanation.notes, '舊效果。\n原備註。');
  assert.equal(result.originalExplanation.effect, '舊效果。');
});

// Scenario: A term has an exact context and definition. Purpose: preserve prose and Web metadata while taking all identity fields from extract.
test('UnitT30_map_term_by_key_and_exact_context', () => {
  const input = inputs('舊定義。');
  const plan = buildMigration(input);
  assert.equal(plan.rows.length, 1);
  assert.deepEqual(plan.rows[0].candidate.explanation, { ...empty(), effect: '舊定義。' });
  assert.equal(plan.rows[0].candidate.values.context, 'test.context');
  assert.equal(plan.mapping[0].original.localization.label, '舊標籤');
  input.extracts.terms.items[0].values.context = 'different';
  assert.throws(() => mapLegacy(input.documents, input.extracts), /mapping/);
});

// Scenario: Binding or part kind is unsupported. Purpose: stop instead of losing or inventing content.
test('UnitT40_reject_unknown_kind_missing_binding_and_section', () => {
  const convert = part => convertLegacy({ category: 'weapons', document: { source: { records: [] } },
    presentation: { detailSections: [{ sectionId: 'effects', items: [{ parts: [part] }] }] }, path: '/web/presentations/0' });
  assert.throws(() => convert({ kind: 'mystery' }), /kind/);
  assert.throws(() => convert({ kind: 'number', bindingRef: { recordId: 'missing' } }), /binding/);
  assert.throws(() => convertLegacy({ category: 'weapons', document: {}, presentation: { detailSections: [{ sectionId: 'unknown', items: [] }] }, path: '' }), /section/);
});

// Scenario: Two extract items match one identity. Purpose: enforce zero ambiguous mappings even on entities with no prose.
test('UnitT50_reject_ambiguous_mapping', () => {
  const input = inputs();
  input.documents[0].value.web.termLocalizations[0].definition = '';
  input.extracts.terms.items.push({ ...input.extracts.terms.items[0], id: 'darktide:term:other' });
  assert.throws(() => mapLegacy(input.documents, input.extracts), /mapping/);
});
