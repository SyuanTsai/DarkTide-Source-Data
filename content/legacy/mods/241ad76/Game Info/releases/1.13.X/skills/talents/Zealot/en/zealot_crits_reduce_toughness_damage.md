# Enduring Faith: source evidence

[繁體中文](../zealot_crits_reduce_toughness_damage.md) | [Player description](README.md#zealot_crits_reduce_toughness_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_crits_reduce_toughness_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_crits_reduce_toughness_damage`; name key `loc_talent_zealot_toughness_melee_effectiveness`; description key `loc_talent_zealot_toughness_melee_effectiveness_desc`. Node `node_0dbb9346-b495-40d9-81d2-3d69b24056f7`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger checks only `on_crit(params.is_critical_strike)`, with no Melee restriction. The child effect has `max_stacks=1`, `refresh_duration_on_stack=true`, `duration=4`, and `toughness_damage_taken_multiplier=.6`, a damage-taken multiplier.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1447-L1477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1447-L1477)
- [scripts/settings/talent/talent_settings_zealot.lua — L347-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L347-L350)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L336-L338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L338)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2955-L2978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2955-L2978)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L233-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L233-L258)

## Example assumptions and limits

- **Operation**: A Critical Hit reduces Toughness damage taken by 40% for 4 seconds. Both Melee and Ranged Critical Hits can trigger it.
- **Refresh**: Another Critical Hit resets the 4-second countdown without applying multiple copies of the reduction.
- **Reduction example**: Counting only this effect, 100 Toughness damage becomes 100 × 0.6 = 60. With another independent 10% Toughness reduction, it becomes 100 × 0.6 × 0.9 = 54, a total reduction of 46%. This is not Health damage reduction.

- The accepted Chinese comparison at hash `56b689eb` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps and finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_toughness_melee_effectiveness`, hash `8ef2c52d`, entry 9250: **Enduring Faith**.
- Description key `loc_talent_zealot_toughness_melee_effectiveness_desc`, hash `56b689eb`, entry 5631.

Full raw template:

~~~text
{toughness_damage_reduction:%s} Toughness Damage Reduction on Critical Hit for {time:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness_damage_reduction` | 0.6 → +40% | `percentage`, `+` prefix; `(1−value)×100` from `talent_settings_2.toughness_2.toughness_damage_taken_multiplier` |
| `time` | 4 | `number`; corresponding `duration` |

The minimal display mapping at `zealot_talents.lua` L2955-L2973 converts the accepted damage-taken multiplier to displayed reduction and supplies its duration.

Static reconstruction; not an observed game screen:

~~~text
+40% Toughness Damage Reduction on Critical Hit for 4s.
~~~

## English comparison

The English gives +40% Toughness Damage Reduction on a Critical Hit for 4 seconds. It places no Melee restriction, matching the accepted crit-only check, and explicitly targets Toughness rather than Health. The one-stack cap, refresh behavior and multiplicative combination with another independent reduction, illustrated by 100→60→54, supplement the description; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_crits_reduce_toughness_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/c3395dd2-63a2-430a-9eec-fb9ecd995308). The icon identifies the talent; it is not mechanism evidence.
