# Anoint in Blood: source evidence

[繁體中文](../zealot_increase_ranged_close_damage.md) | [Player description](README.md#zealot_increase_ranged_close_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_increase_ranged_close_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_increase_ranged_close_damage`; name key `loc_talent_zealot_ranged_damage_increased_to_close`; description key `loc_talent_zealot_ranged_damage_increased_to_close_desc`. Node `node_80eebf49-eccb-40ef-b6ca-5916f3f088b0`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `conditional_stat_buffs` requires only `slot_secondary` and grants `damage_near +0.25`.
- Shared close-range damage uses `t = clamp((d − 12.5) / 17.5, 0, 1)` and near weight `1 − sqrt(t)`.
- The condition is the wielded slot. Do not rewrite it as an `attack_type ranged` requirement for every damage path.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3840-L3862](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3840-L3862)
- [scripts/settings/talent/talent_settings_zealot.lua — L407-L409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L407-L409)
- [scripts/utilities/attack/damage_calculation.lua — L280-L297](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L280-L297)
- [scripts/settings/damage/damage_settings.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1716-L1732](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1716-L1732)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1112-L1137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1112-L1137)

## Example assumptions and limits

- **Operation**: While holding a Ranged weapon, gain up to 25% damage against targets within 12.5 metres. Beyond 12.5 metres it gradually falls, reaching zero at 30 metres.
- **Distance example**: With other conditions fixed and base damage 100, within 12.5 metres the result is 100 × 1.25 = 125. At 16.875 metres, the bonus is 25% × [1 − √((16.875 − 12.5) ÷ 17.5)] = 12.5%, giving 112.5 damage.
- **Other bonuses**: This adds to same-stage damage bonuses. The weapon's own distance falloff is calculated separately; the fixed base 100 above is not measured weapon damage at every distance.

- The accepted Chinese comparison at hash `7504148a` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_ranged_damage_increased_to_close`, hash `e5a06eb7`, entry 14899: **Anoint in Blood**.
- Description key `loc_talent_zealot_ranged_damage_increased_to_close_desc`, hash `7504148a`, entry 7605.

Full raw template:

~~~text
Up to {damage:%s} Base Ranged Damage, reduced the further you are from the target.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.25 → +25% | `percentage`, prefix `+`; `talent_settings_2.offensive_2_1.damage` |

The minimal display mapping at `zealot_talents.lua` L1716-L1732 supplies the accepted maximum damage bonus.

Static reconstruction; not an observed game screen:

~~~text
Up to +25% Base Ranged Damage, reduced the further you are from the target.
~~~

## English comparison

The English states an up-to-25% Ranged damage bonus that decreases with distance, agreeing with the accepted ranged-use effect. It does not explicitly say every affected path must have attack_type ranged. The slot_secondary condition, 12.5–30-metre curve, same-stage addition and separate weapon falloff supplement the text; no explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_increase_ranged_close_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/f1f336d8-dc80-46a3-b756-2df08b26f541). The icon identifies the talent; it is not mechanism evidence.
