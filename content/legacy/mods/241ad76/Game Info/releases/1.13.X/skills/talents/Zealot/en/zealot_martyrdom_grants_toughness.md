# I Shall Not Fall: source evidence

[繁體中文](../zealot_martyrdom_grants_toughness.md) | [Player description](README.md#zealot_martyrdom_grants_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_martyrdom_grants_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_martyrdom_grants_toughness`; name key `loc_talent_zealot_martyrdom_grants_toughness`; description key `loc_talent_zealot_martyrdom_grants_toughness_upd_desc`. Node `node_2d176f63-527c-4758-a1c1-eed8dfd6ac78`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node grants `zealot_martyrdom_toughness`. Its maximum `toughness_damage_taken_modifier` is −7.5% per segment × 5. Interpolation uses the same missing-Wound count as Martyrdom divided by 5, clamped between 0 and 1.
- This bonus affects only the Toughness damage-taken stat, not Health damage reduction. It has no independent trigger, timer or stack counter; it follows the missing segment count.
- The Martyrdom Keystone and this upgrade share the same segment calculation. `health_step=.15` is unused on this path as well.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3115-L3135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3115-L3135)
- [scripts/settings/talent/talent_settings_zealot.lua — L329-L339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L329-L339)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L633-L678](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L678)
- [scripts/utilities/health.lua — L117-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3115-L3135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3115-L3135)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1062-L1086](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1062-L1086)

## Example assumptions and limits

- **Effect**: Each fully missing Health Wound reduces damage taken by Toughness by 7.5%, counting at most 5 Wounds for a maximum 37.5% reduction.
- **Reduction example**: 3 stacks give 22.5% Toughness damage reduction: 100 × (1 − 22.5%) = 77.5. At 5 stacks, the result is 62.5. With another same-stage 10% Toughness damage reduction, full stacks give 100 × (1 − 37.5% − 10%) = 52.5. Independent reductions multiply afterwards.

- The percentage modifies Toughness damage taken; it must not be rewritten as Health damage reduction or reduction of all damage.
- The example shows additive stat modifiers only. It does not derive the final combined result of other Toughness modifiers.
- The accepted Chinese comparison at hash `15546289` records Martyrdom stacks improving Toughness damage reduction in both languages. Segment count, amount per segment and cap are supplied by the accepted implementation. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_martyrdom_grants_toughness`, hash `92244e63`, entry 9448: **I Shall Not Fall**.
- Description key `loc_talent_zealot_martyrdom_grants_toughness_upd_desc`, hash `15546289`, entry 1379.

Full raw template:

~~~text
{talent_name:%s} grants {toughness_damage_reduction:%s} Toughness Damage Reduction per stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_zealot_martyrdom`: Martyrdom | `loc_string`; hash `15d87f95`, entry 1420 |
| `toughness_damage_reduction` | abs(−0.075) → +7.5% | `percentage`, `+` prefix; `toughness_reduction_per_stack` |

The minimal display mapping at `zealot_talents.lua` L3115-L3129 supplies the Martyrdom name and absolute per-segment reduction. Accepted mechanism values are reused.

Static reconstruction; not an observed game screen:

~~~text
Martyrdom grants +7.5% Toughness Damage Reduction per stack.
~~~

## English comparison

The English specifically says Toughness Damage Reduction, and its +7.5% per Martyrdom stack matches the accepted −0.075 damage-taken modifier. It does not claim Health or all-damage reduction. The 5-segment cap, lack of an independent timer, unused Health-step setting and same-stage versus independent combination are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_martyrdom_grants_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/3e61d06f-e542-40cc-acf4-88e2493cc594). The icon identifies the talent; it is not mechanism evidence.
