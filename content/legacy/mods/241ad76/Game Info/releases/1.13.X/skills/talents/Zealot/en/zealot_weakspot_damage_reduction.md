# Hubris: source evidence

[繁體中文](../zealot_weakspot_damage_reduction.md) | [Player description](README.md#zealot_weakspot_damage_reduction) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_weakspot_damage_reduction)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_weakspot_damage_reduction`; name key `loc_talent_zealot_weakspot_damage_reduction`; description key `loc_talent_zealot_weakspot_damage_reduction_desc`. Node `node_df2f87b7-6abf-45d0-b9a7-bc99a34d5f82`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_kill` is paired with `on_weakspot_kill`. The effect has a single stack, lasts 4 seconds and refreshes, with `damage_taken_multiplier` = 0.85.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2115-L2151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2115-L2151)
- [scripts/settings/talent/talent_settings_zealot.lua — L60-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L60-L64)
- [scripts/utilities/attack/damage_calculation.lua — L590-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2001-L2024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2001-L2024)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1784-L1806](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1784-L1806)

## Example assumptions and limits

- **Trigger:** killing an enemy with a Weakspot Hit reduces damage taken by 15% for 4 seconds. Melee and Ranged attacks both qualify; a Weakspot Hit alone does not trigger it.
- **Duration and example:** the effect does not gain stacks, and another trigger restarts the timer. This talent alone gives 100 × 0.85 = 85 points of damage. With a separate 25% reduction, the result is 100 × 0.85 × 0.75 = 63.75 points.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `b3615f2a` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_weakspot_damage_reduction`, hash `d2297aa1`, entry 13571: **Hubris**.
- Description key `loc_talent_zealot_weakspot_damage_reduction_desc`, hash `b3615f2a`, entry 11562.

Full raw template:

~~~text
{damage_resistance:%s} Damage Resistance after Weakspot Kill. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_resistance` | `0.85` | `value_manipulation`: `(1 − 0.85) × 100 = 15`; `percentage`, `+` prefix: `+15%` |
| `duration` | `4` | `number`: `4` |

The existing display mapping uses `damage_taken_multiplier` and `duration`. The previously verified percentage formatter accepts the manipulated percentage directly, so the resistance value is not multiplied by 100 a second time.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage Resistance after Weakspot Kill. Lasts 4s.
~~~

## English comparison

The English independently agrees with a Weakspot Kill as trigger, 15% resistance and 4 seconds. Single-stack refresh, eligibility of both attack types and multiplicative reduction examples are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_weakspot_damage_reduction.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/2ea26a3b-1222-4c56-8120-26a65b4595fa). The icon identifies the talent; it is not mechanism evidence.
