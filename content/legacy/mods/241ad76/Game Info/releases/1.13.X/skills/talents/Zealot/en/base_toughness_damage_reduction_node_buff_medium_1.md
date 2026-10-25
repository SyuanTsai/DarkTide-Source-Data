# Toughness Damage Reduction: source evidence

[繁體中文](../base_toughness_damage_reduction_node_buff_medium_1.md) | [Player description](README.md#base_toughness_damage_reduction_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toughness_damage_reduction_node_buff_medium_1`; name key `loc_talent_toughness_damage_reduction_medium`; description key `loc_talent_toughness_damage_reduction_medium_desc`. Node `node_13a3b9c2-d919-4e05-9ec4-01ee813c01f1`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current one-point node uses tier 1 `toughness_damage_taken_modifier = -0.1`. This is an additive modifier, not `multiplier = 0.9`. Shared damage calculation combines the modifier stage before applying the independent `toughness_damage_taken_multiplier`.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L432-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L460)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L437-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L426-L458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L426-L458)

## Example assumptions and limits

- **How it works:** damage taken by Toughness is reduced by 10%.
- **Reduction example:** without other bonuses, 100 × (1 − 10%) = 90 points of Toughness damage. With an existing 20% Toughness reduction in the same additive stage, the result is 100 × (1 − 20% − 10%) = 70. Independent damage-reduction effects multiply separately.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `1272bcc0` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_toughness_damage_reduction_medium`, hash `4cf5defc`, entry 5002: **Toughness Damage Reduction**.
- Description key `loc_talent_toughness_damage_reduction_medium_desc`, hash `1272bcc0`, entry 1194.

Full raw template:

~~~text
{toughness:%s} Toughness Damage Reduction.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | Tier 1 `player_toughness_damage_reduction_node_buff_medium_1.stat_buffs.toughness_damage_taken_modifier = -0.1` | `abs(value) × 100`; `percentage`, `+` prefix: `+10%` |

The identical base-talent display mapping and common formatter are reused from the accepted Ogryn document. The one-point Zealot node likewise uses the verified tier-1 value.

Static reconstruction; not an observed game screen:

~~~text
+10% Toughness Damage Reduction.
~~~

## English comparison

The English independently agrees on Toughness damage reduction and 10%. It does not identify this as an independent 0.9 multiplier. Tier selection, additive combination and separate multipliers are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/stat/base_toughness_damage_reduction_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/f86258bf-77ad-44c3-99b0-628042e47315). The icon identifies the talent; it is not mechanism evidence.
