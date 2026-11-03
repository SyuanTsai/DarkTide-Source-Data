import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applyTermName,
  chooseBlessingName,
  compareBlessingText,
  deriveLocalizationKeys,
  findUniqueSharedLocalizationKey,
  parseTermSourceText,
  renderDescriptionTemplate
} from '../scripts/content/imports/generic-blessing-text.mjs';

// Scenario: A standard bespoke trait includes its weapon-family prefix.
// Purpose: Keep localization key derivation aligned with the game's shared trait suffix.
test('UnitT10_derives_localization_keys_from_a_bespoke_trait', () => {
  assert.deepEqual(
    deriveLocalizationKeys('weapon_trait_bespoke_combatknife_p1_chained_weakspot_hits_increases_power'),
    {
      nameKey: 'loc_trait_bespoke_chained_weakspot_hits_increases_power',
      descriptionKey: 'loc_trait_bespoke_chained_weakspot_hits_increases_power_desc'
    }
  );
});

// Scenario: A glossary row has an exact English blessing-name match.
// Purpose: Prefer the reviewed term over the raw Traditional Chinese localization.
test('UnitT20_applies_an_exact_term_name_match', () => {
  assert.deepEqual(
    applyTermName('Adhesive Charge', '粘性炸藥', new Map([['Adhesive Charge', '黏著炸藥']])),
    { nameZhTw: '黏著炸藥', nameSource: 'term' }
  );
});

// Scenario: A description has tier-specific percent values and a missing format key.
// Purpose: Render known values faithfully while preserving unresolved placeholders for review.
test('UnitT30_renders_tier_values_and_keeps_unknown_placeholders', () => {
  assert.deepEqual(
    renderDescriptionTemplate('Power {power_level:%s}; stacks {stacks:%s}.', {
      power_level: [
        { tier: 1, decimal: '4.5', unit: 'percent' },
        { tier: 2, decimal: '5', unit: 'percent' },
        { tier: 3, decimal: '5.5', unit: 'percent' },
        { tier: 4, decimal: '6', unit: 'percent' }
      ]
    }),
    {
      text: 'Power 4.5／5／5.5／6%; stacks {stacks:%s}.',
      unresolvedPlaceholders: ['stacks']
    }
  );
});

// Scenario: A term's English spelling contains the delimiter used between source and translation.
// Purpose: Split at the final delimiter so the full English blessing name remains an exact lookup key.
test('UnitT35_parses_a_term_with_a_hyphenated_english_name', () => {
  assert.deepEqual(
    parseTermSourceText("- Run 'n' Gun - Run and Gun - 連跑帶打"),
    { nameEn: "Run 'n' Gun - Run and Gun", nameZhTw: '連跑帶打' }
  );
});

// Scenario: A retained 1.13.1 variant has the same English name as its baseline.
// Purpose: Preserve the published Traditional Chinese naming decision ahead of a glossary candidate.
test('UnitT37_prefers_retained_name_only_when_english_is_unchanged', () => {
  const terms = new Map([['Adhesive Charge', '黏著炸藥']]);
  assert.deepEqual(
    chooseBlessingName({ nameEn: 'Adhesive Charge', rawZhTw: '粘性炸藥', retainedZhTw: '已發布名稱', baselineNameEn: 'Adhesive Charge', terms }),
    { nameZhTw: '已發布名稱', nameSource: 'retained-1.13.1' }
  );
  assert.deepEqual(
    chooseBlessingName({ nameEn: 'Renamed Charge', rawZhTw: '原始名稱', retainedZhTw: '已發布名稱', baselineNameEn: 'Adhesive Charge', terms }),
    { nameZhTw: '原始名稱', nameSource: 'raw' }
  );
});

// Scenario: A derived key is absent but the batch has one unambiguous same-stem replacement.
// Purpose: Recover only source-proven keys and reject ambiguous fuzzy matches.
test('UnitT38_accepts_only_a_unique_shared_name_key', () => {
  const keys = new Map([
    ['loc_trait_bespoke_custom_movement_speed_name', '00000001'],
    ['loc_trait_bespoke_custom_movement_speed_name_desc', '00000002'],
    ['loc_trait_bespoke_other_movement_speed_name', '00000003']
  ]);
  assert.equal(findUniqueSharedLocalizationKey(keys, 'custom_movement_speed', false), 'loc_trait_bespoke_custom_movement_speed_name');
  assert.equal(findUniqueSharedLocalizationKey(keys, 'custom_movement_speed', true), 'loc_trait_bespoke_custom_movement_speed_name_desc');
  assert.equal(findUniqueSharedLocalizationKey(keys, 'movement_speed', false), null);
});

// Scenario: A baseline contains unchanged, changed, and removed traits while current data adds one.
// Purpose: Classify every comparison result and identify changed text fields precisely.
test('UnitT40_classifies_baseline_text_differences', () => {
  const current = new Map([
    ['same', { traitName: 'same', nameEn: 'Same', nameZhTw: '相同', descriptionEnTemplate: 'One', descriptionZhTwTemplate: '一' }],
    ['changed', { traitName: 'changed', nameEn: 'Changed', nameZhTw: '新的', descriptionEnTemplate: 'New', descriptionZhTwTemplate: '新' }],
    ['new', { traitName: 'new', nameEn: 'New', nameZhTw: '新增', descriptionEnTemplate: 'New', descriptionZhTwTemplate: '新' }]
  ]);
  const baseline = new Map([
    ['same', { traitName: 'same', nameEn: 'Same', nameZhTw: '相同', descriptionEnTemplate: 'One', descriptionZhTwTemplate: '一' }],
    ['changed', { traitName: 'changed', nameEn: 'Changed', nameZhTw: '舊的', descriptionEnTemplate: 'Old', descriptionZhTwTemplate: '舊' }],
    ['removed', { traitName: 'removed', nameEn: 'Removed', nameZhTw: '移除', descriptionEnTemplate: 'Old', descriptionZhTwTemplate: '舊' }]
  ]);

  const compared = compareBlessingText(current, baseline);
  assert.deepEqual(compared.get('same').comparison, { status: 'unchanged', changedFields: [] });
  assert.deepEqual(compared.get('changed').comparison, { status: 'changed', changedFields: ['nameZhTw', 'descriptionEnTemplate', 'descriptionZhTwTemplate'] });
  assert.deepEqual(compared.get('new').comparison, { status: 'new', changedFields: [] });
  assert.deepEqual(compared.get('removed').comparison, { status: 'removed', changedFields: [] });
});
