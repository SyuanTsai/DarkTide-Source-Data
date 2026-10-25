# Thy Wrath be Swift: source evidence

[繁體中文](../zealot_damage_boosts_movement.md) | [Player description](README.md#zealot_damage_boosts_movement) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_damage_boosts_movement)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_damage_boosts_movement`; name key `loc_talent_zealot_movement_speed_on_damaged`; description key `loc_talent_zealot_movement_speed_on_damaged_desc`. Node `node_9b7ccd7d-8eba-4b0e-9759-7e674c7dfde9`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_damage_taken` checks only `attacked_unit == holder`, not `health damage > 0`. It grants `movement_speed +0.15` for `active_duration = 2`.
- `slowdown_immune` and `stun_immune` are permanent `keywords`, not `proc_keywords`.
- `Stun.apply` retains an `ignore_stun_immunity` entry. This talent does not provide immunity to all crowd control or to force from the Push system.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3702-L3729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3702-L3729)
- [scripts/settings/talent/talent_settings_zealot.lua — L397-L401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L397-L401)
- [scripts/utilities/attack/stun.lua — L11-L38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stun.lua#L11-L38)
- [scripts/utilities/attack/stun.lua — L74-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stun.lua#L74-L94)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3042-L3062](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3042-L3062)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L725-L751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L725-L751)

## Example assumptions and limits

- **Operation**: Taking damage grants +15% Movement Speed for 2 seconds; further damage can restart the timer.
- **Permanent protection**: Immunity to ordinary hit slowdown and stun does not require taking damage first. This does not establish protection from nets, pounces or other disabling effects, or attacks that explicitly ignore immunity.
- **Speed example**: With base Movement Speed 5 metres/second and no other modifiers, the speed becomes 5 × 1.15 = 5.75 metres/second.

- The accepted Chinese comparison at hash `bdaf3ea6` finds no explicit effect-direction contradiction. Unlisted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_movement_speed_on_damaged`, hash `2b1f657c`, entry 2792: **Thy Wrath be Swift**.
- Description key `loc_talent_zealot_movement_speed_on_damaged_desc`, hash `bdaf3ea6`, entry 12232.

Full raw template:

~~~json
"Enemy Melee Attacks cannot Stun you. On taking Damage, gain {movement_speed:%s} Movement Speed for {time:%s}s. "
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `movement_speed` | 0.15 → +15% | `percentage`, prefix `+`; `talent_settings_2.defensive_2.movement_speed` |
| `time` | 2 → 2 | `number`; `talent_settings_2.defensive_2.active_duration` |

The minimal display mapping at `zealot_talents.lua` L3042-L3062 supplies the accepted speed bonus and duration. Raw trailing whitespace is retained in the JSON quotation.

Static reconstruction; not an observed game screen:

~~~text
Enemy Melee Attacks cannot Stun you. On taking Damage, gain +15% Movement Speed for 2s.
~~~

## English comparison

The English separates enemy-Melee Stun protection from the damage-triggered +15% Movement Speed for 2 seconds, agreeing with permanent immunity and the timed bonus. It does not explicitly restrict all immunity to Melee damage or promise immunity to every crowd-control effect. Permanent slowdown protection, the trigger's lack of a positive-Health-damage requirement, refresh, ignore_stun_immunity/Push limits and the original speed example supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_damage_boosts_movement.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/52db08a6-3729-466e-ac16-d02a1a7ebecb). The icon identifies the talent; it is not mechanism evidence.
