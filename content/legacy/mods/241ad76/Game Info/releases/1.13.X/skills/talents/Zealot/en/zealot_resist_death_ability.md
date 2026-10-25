# Zealous Pilgrim: source evidence

[繁體中文](../zealot_resist_death_ability.md) | [Player description](README.md#zealot_resist_death_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_resist_death_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_resist_death_ability`; name key `loc_talent_zealot_resist_death_ability`; description key `loc_talent_zealot_resist_death_ability_offensive_desc`. Node `node_3483d4d7-3f13-48de-8055-ecfc04d70aae`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The tree node attaches both `zealot_resist_death_ability` and `zealot_resist_death_offensive`. The first listens to `on_combat_ability`, adding `zealot_resist_death_temp` on ordinary Ability use. This timed Buff lasts 4 seconds and grants `unkillable`. The second applies +10% `damage` and +10% `attack_speed` only while the player has that keyword.
- Stealth and relic use are handled by their respective end paths: the Stealth Buff's `stop_func` adds the temporary Buff on leaving Stealth; the channel action adds it after Ability completion and charge restoration. The shared handler returns early for these two action types to avoid premature activation.
- `zealot_resist_death_temp` has no `max_stacks`. BuffExtension creates separate instances for same-named Buffs without that field, so repeated Ability uses can create overlapping 4-second instances rather than one shared reset countdown.
- This modifier shares `exclusive_group=resist_death_1` with Holy Revenant and cannot be selected together with it. Fire and Fury and Risen can accompany it.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3288-L3330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3288-L3330)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L5062-L5084](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5062-L5084)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L5086-L5101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5086-L5101)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4299-L4329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4299-L4329)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L5144-L5157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5144-L5157)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L455-L489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L455-L489)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L470)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1990-L2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2012)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1270-L1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1270-L1295)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3288-L3330](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3288-L3330)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1990-L2013](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1990-L2013)

## Example assumptions and limits

- **Trigger**: Ability use grants 4 seconds of Unkillable. Shroudfield starts this when Stealth ends; Chorus of Spiritual Fortitude starts it when the relic is unwielded.
- **Offensive bonuses**: While Unkillable, gain 10% Damage and 10% Attack Speed.
- **Damage and speed example**: Counting only this bonus, base damage 100 becomes 100 × 1.1 = 110. An affected 1-second action becomes 1 ÷ 1.1 ≈ 0.909 seconds. Other bonuses in the same stage add first.

- This Unkillable effect does not shorten Until Death's own 120-second cooldown.
- Overlapping instances follow the accepted BuffExtension creation path for Buffs with no `max_stacks`. UI presentation is outside that analysis.
- The accepted Chinese comparison at hash `ccea0bcc` records agreement on Ability use, Stealth/relic start timing and both offensive bonus directions.
- Actual game behavior and presentation remain unobserved; omitted details supplement the description.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_resist_death_ability`, hash `a196609b`, entry 10433: **Zealous Pilgrim**.
- Description key `loc_talent_zealot_resist_death_ability_offensive_desc`, hash `ccea0bcc`, entry 13246.

Full raw template:

~~~text
Using your Ability grants Unkillable for {duration:%s}s. When using {stealth_name:%s}, this begins when exiting Stealth. When using {relic_name:%s}, this begins upon unwielding the relic.

In addition, while Unkillable, you have {attack_speed:%s} Attack Speed and {damage:%s} Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | 4 | `number`; `talent_settings.zealot_resist_death_subnodes.temp_duration` |
| `stealth_name` | `loc_ability_zealot_stealth`: Shroudfield | `loc_string`; hash `e94fd822`, entry 15155 |
| `relic_name` | `loc_talent_zealot_bolstering_prayer`: Chorus of Spiritual Fortitude | `loc_string`; hash `b1a2ee76`, entry 11442 |
| `attack_speed` | 0.10 → +10% | `percentage`, `+` prefix; corresponding `attack_speed` |
| `damage` | 0.10 → +10% | `percentage`, `+` prefix; corresponding `damage` |

The minimal display mapping at `zealot_talents.lua` L3288-L3325 supplies the accepted duration and offensive values with both localized Ability names.

Static reconstruction; not an observed game screen:

~~~text
Using your Ability grants Unkillable for 4s. When using Shroudfield, this begins when exiting Stealth. When using Chorus of Spiritual Fortitude, this begins upon unwielding the relic.

In addition, while Unkillable, you have +10% Attack Speed and +10% Damage.
~~~

## English comparison

The English explicitly gives 4 seconds of Unkillable from Ability use and names the delayed starts for Shroudfield and Chorus. Its second paragraph gates +10% Attack Speed and Damage on being Unkillable, matching the accepted keyword condition. Instance overlap, Holy Revenant exclusivity, compatible upgrades, unchanged Until Death cooldown and the damage/action-time calculation supplement the description; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/121a9a79-f78e-4274-a0ac-4a1683244ae7). The icon identifies the talent; it is not mechanism evidence.
