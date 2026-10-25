# Toughness Damage Reduction: source evidence

[繁體中文](../base_toughness_damage_reduction_node_buff_medium_1.md) | [Player description](README.md#base_toughness_damage_reduction_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toughness_damage_reduction_node_buff_medium_1`; name key `loc_talent_toughness_damage_reduction_medium`; description key `loc_talent_toughness_damage_reduction_medium_desc`. Node `node_9d635d3a-59ef-4d38-96ac-51ab2c8828bf`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Tier 1 of `player_toughness_damage_reduction_node_buff_medium_1` grants `toughness_damage_taken_modifier=-0.1`. The tree node costs one point and uses tier 1, rather than another tier's value.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L432-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L460)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L437-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L883-L912](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L883-L912)

## Example assumptions and limits

- **Effect**: Reduce incoming Toughness damage by 10%. This does not directly increase maximum Toughness or reduce Health damage.

- **Damage-reduction example**: With only this bonus, Toughness damage of 100 becomes `100 × (1 − 10%) = 90`. With an existing 20% reduction at the same calculation stage, it becomes `100 × (1 − 20% − 10%) = 70`. Other independent reduction multipliers apply separately.

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
| toughness | Tier-1 player_toughness_damage_reduction_node_buff_medium_1.stat_buffs.toughness_damage_taken_modifier = −0.1 | abs(value) × 100; percentage with explicit + prefix → +10% |

Only the missing display mapping in the cited talent definition, lines 437–463, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Toughness Damage Reduction.
~~~

## English comparison

The independently read English states +10% Toughness damage reduction, matching the accepted tier-1 modifier. It makes no claim about maximum Toughness or Health damage. The tier selection, same-stage addition and independent multipliers supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/stat/base_toughness_damage_reduction_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/a51567af-44cb-46ba-9908-3e3502dcbcdb). The icon identifies the talent; it is not mechanism evidence.
