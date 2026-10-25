# Indomitable: source evidence

[繁體中文](../ogryn_longer_charge.md) | [Player description](README.md#ogryn_longer_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_longer_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_longer_charge`; name key `loc_talent_ogryn_bull_rush_distance`; description key `loc_talent_ogryn_bull_rush_distance_desc`. Node `node_3bdab07a-e8d9-4afb-8f66-71c94c9a546d`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `combat_ability_2` has distance 24, `increase_visualizer = 1`, cooldown 25 and maximum charges 1; the base combat ability distance is 12. The longer lunge copies the base template, overrides distance, retains `stop_tags = {monster = true}`, removes `stop_armor_types` and enables `force_stagger`.
- Charge speed curve: 0s → 0, 0.2s → 4, 0.3s → 6, 0.4s → 8, 0.5s → 10. The combat ability radius is 2m.
- At lunge end, `ogryn_charge_speed_on_lunge` triggers the 5s buff with 100% probability. `movement_speed` and `melee_attack_speed` are each 0.25.
- The base `ogryn_charge` talent still provides identifier `ogryn_base_combat_ability_pasive` and `ogryn_base_lunge_toughness_and_damage_resistance`. While `is_lunging`, this buff applies `melee_heavy_damage = 0.5` and `damage_taken_multiplier = 0.75`. The longer-charge node defines only a player ability, without a replacement passive. Existing CharacterSheet evidence collects base talent passives before selected nodes, preserving that base charge passive.

## Fixed source evidence

- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L59-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L59-L74)
- [scripts/settings/talent/talent_settings_ogryn.lua — L284-L294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L284-L294)
- [scripts/settings/talent/talent_settings_ogryn.lua — L385-L390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L385-L390)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L35-L71](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L35-L71)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1393-L1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1393-L1433)
- [scripts/settings/lunge/ogryn_lunge_templates.lua — L14-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/ogryn_lunge_templates.lua#L14-L94)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L893-L909](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L893-L909)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L987-L996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L987-L996)
- [scripts/utilities/character_sheet.lua — L135-L160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L135-L160)
- [scripts/utilities/character_sheet.lua — L322-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L322-L350)
- [scripts/utilities/character_sheet.lua — L441-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L441-L460)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L987-L996](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L987-L996)
- [scripts/settings/talent/talent_settings_ogryn.lua — L308-L310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L308-L310)
- [scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua — L54-L156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua#L54-L156)
- [scripts/utilities/character_sheet.lua — L185-L264](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L185-L264)
- [scripts/utilities/player_talents/player_talents.lua — L5-L41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/player_talents/player_talents.lua#L5-L41)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1393-L1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1393-L1433)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1184-L1214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1184-L1214)

## Example assumptions and limits

- **Charge and cooldown**: Charge forward, increasing maximum distance from 12m to 12 × 2 = 24m and knocking aside enemies along the path. Colliding with a Monstrosity stops the charge; terrain can also limit distance. One charge, base cooldown 25s.

- **After-charge bonuses**: When the charge ends, gain +25% Melee Attack Speed and +25% Movement Speed for 5s. A 1s action controlled by attack speed takes 1 ÷ 1.25 = 0.8s; movement of 5m/s becomes 6.25m/s.

- **Charge protection**: Retain the base charge's 25% damage reduction while charging. Counting only this effect, 100 incoming damage becomes 75. Collision and the end impact do not directly deal Health damage; Bleed from Pulverise is calculated separately.

Monstrosities can still stop travel through the monster stop tag. The former Super Armour, resistant armour and Void Shield stop conditions are removed. Charge speed follows a segmented curve; actual travel depends on turning, collisions and path geometry, with 24m as the template maximum. The English distance display of 100% describes the visualizer value. Its added-versus-final percentage wording remains ambiguous. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_bull_rush_distance`, hash `71d7d60a`, entry 7401: **Indomitable**. The [Writer] suffix is resource metadata.
- Description key `loc_talent_ogryn_bull_rush_distance_desc`, hash `64c5f9de`, entry 6557.

Full raw template:

~~~text
Charge forward with great force, knocking back Enemies and Staggering them. Gain {attack_speed:%s} Attack Speed and {move_speed:%s} Movement Speed for {duration:%s}s. Charge is stopped on collision with Monstrosities.

Base Cooldown: {cooldown:%s}s

This is an augmented version of {talent_name:%s} with an increased charge distance of {distance:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| attack_speed | combat_ability.melee_attack_speed = 0.25 | Percentage × 100, explicit + prefix → +25% |
| move_speed | combat_ability.movement_speed = 0.25 | Percentage × 100, explicit + prefix → +25% |
| duration | combat_ability.active_duration = 5 | Number → 5 |
| cooldown | ogryn_charge_increased_distance.cooldown = 25 | Number → 25 |
| talent_name | loc_ability_ogryn_charge | Localized name → Bull Rush |
| distance | combat_ability_2.increase_visualizer = 1 | Percentage × 100, no prefix → 100% |

The format map also supplies unused `ability` = `loc_ability_ogryn_charge`. Referenced name `loc_ability_ogryn_charge`, hash `80d4e4d1`, entry 8367: **Bull Rush**. Pulverise name `loc_talent_ogryn_bleed_on_bull_rush`, hash `335781c4`, entry 3344. Only the necessary English display map at L1393–L1433 was read; the mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Charge forward with great force, knocking back Enemies and Staggering them. Gain +25% Attack Speed and +25% Movement Speed for 5s. Charge is stopped on collision with Monstrosities.

Base Cooldown: 25s

This is an augmented version of Bull Rush with an increased charge distance of 100%.
~~~

## English comparison

The independently read English agrees with the charge/Stagger, Monstrosity stop, +25% speed values, 5s duration, 25s base cooldown and Bull Rush identity. Its distance placeholder reconstructs to 100%, with wording that does not clearly distinguish added from final percentage; the verified maximum remains 12 × 2 = 24m. Melee-only attack speed, activation at lunge end, retained base passive, curve/radius, terrain limits and direct-impact-versus-Bleed distinctions supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability/ogryn_longer_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/582a28cf-14c5-4757-a51c-cb5924dbf0a3). The icon identifies the talent; it is not mechanism evidence.
