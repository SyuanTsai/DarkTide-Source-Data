# Servo-Sinew Surge: source evidence

[繁體中文](../cryptic_dissector_crit_attack_speed.md) | [Player description](README.md#cryptic_dissector_crit_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_dissector_crit_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_dissector_crit_attack_speed`; name key `loc_talent_cryptic_dissector_finesse`; description key `loc_talent_cryptic_dissector_crit_attack_speed_desc`. Node `node_aafbd29f-1545-4e6c-bcee-660f62f96f95`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node at `cryptic_tree.lua` L1101–L1123 uses a talent definition with two per-stack values of 1.5% and enables the special rule `cryptic_dissector_gives_crit_and_attack_speed`. `cryptic_dissector_stack` enables its `conditional_stat_buffs` only while that rule is active. The base Buff `stat_buffs` calculation applies the effects repeatedly according to the stack count.
- `critical_strike_chance` is a `value`, adding `0.015` per stack. Six stacks total `0.09`, or 9 percentage points. `melee_attack_speed` is an `additive_multiplier`, adding `0.015` per stack; six stacks give +9%. Both use the current Flensing Protocols count and its 6- or 8-stack cap.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1101-L1123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1101-L1123)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1178-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1178-L1199)
- [scripts/settings/talent/talent_settings_cryptic.lua — L251-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1488-L1518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1488-L1518)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/settings/buff/buff_settings.lua — L700-L700](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L700-L700)
- [scripts/settings/buff/buff_settings.lua — L757-L757](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L757-L757)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua — L10-L32](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L10-L32)
- [scripts/utilities/action/action_handler.lua — L385-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L385-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1178-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1178-L1199)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1101-L1123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1101-L1123)

## Example assumptions and limits

- **Trigger**: With this modifier selected, each Flensing Protocols stack also grants **1.5 percentage points of Critical Strike Chance** and **+1.5% Melee Attack Speed**.
- **Changing stacks**: Losing or restoring Flensing Protocols stacks decreases or increases both bonuses at the same time. Zero stacks give no bonus.
- **Stack examples**: At 6 stacks, gain **9 percentage points** of Critical Strike Chance and **+9% Melee Attack Speed**. At 8, gain **12 percentage points** and **+12%**, respectively.
- **Calculation examples**: An original Critical Strike Chance of `7.5%` becomes `7.5% + 6 × 1.5% = 16.5%` at 6 stacks. A melee attack that originally takes 1 second takes approximately `1 ÷ 1.09 = 0.917` seconds with no other attack-speed bonus.

- `6 × 0.015 = 0.09`: six stacks give 9 percentage points of Critical Strike Chance and +9% Melee Attack Speed. Eight stacks give 12 percentage points and +12%.
- The bonuses follow the Flensing Protocols stack count, decreasing when taking damage removes stacks.
- Critical Strike Chance increases by percentage points. Melee Attack Speed is a multiplier increase and does not change damage dealt by a single hit.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_dissector_finesse`, hash `a5d94f72`, entry 10684: **Servo-Sinew Surge**.
- Description key `loc_talent_cryptic_dissector_crit_attack_speed_desc`, hash `7ddcfcd5`, entry 8163.

Full raw template:

~~~text
Each stack also grants {crit_chance:%s} Critical Hit Chance, and {attack_speed:%s} Melee Attack Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `crit_chance` | +1.5% | `percentage`, prefix `+`: `critical_strike_chance = 0.015` |
| `attack_speed` | +1.5% | `percentage`, prefix `+`: `melee_attack_speed = 0.015` |

The mappings in `cryptic_talents.lua` L1188–L1198 use the already verified settings. The raw English calls the chance Critical Hit Chance; the documented `critical_strike_chance` is the corresponding probability stat.

Static reconstruction; not an observed game screen:

~~~text
Each stack also grants +1.5% Critical Hit Chance, and +1.5% Melee Attack Speed.
~~~

## English comparison

The English explicitly says each stack grants both Critical Hit Chance and Melee Attack Speed, with +1.5% for each. That matches the verified per-stack values. Following changes in the current Flensing Protocols count, percentage-point addition and action-time calculations are supplementary explanations. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_crit_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/08678745-4375-4d48-bdde-6fbc209d6402). The icon identifies the talent; it is not mechanism evidence.
