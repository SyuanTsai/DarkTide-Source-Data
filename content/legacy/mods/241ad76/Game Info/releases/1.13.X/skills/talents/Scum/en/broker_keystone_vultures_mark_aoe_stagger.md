# Vulture's Push: source evidence

[繁體中文](../broker_keystone_vultures_mark_aoe_stagger.md) | [Player description](README.md#broker_keystone_vultures_mark_aoe_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_aoe_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_vultures_mark_aoe_stagger`; name key `loc_talent_broker_keystone_vultures_mark_aoe_stagger`; description key `loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc`. Node `node_c2a46314-e334-402f-a37d-12e5f58d1594`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc buff listens for `on_kill`. Its `check_proc_func` requires both `CheckProcFunctions.on_ranged_hit` and `on_elite_or_special_kill`. The latter requires `attack_result = died` and an `elite` or `special` tag; the former accepts a Ranged `attack_type` or a Damage profile with `count_as_ranged_attack`.
- A qualifying kill creates a `broker_vultures_mark_aoe_stagger` explosion at the player's position + `Vector3(0, 0, 0.65)`. The explosion template has both `min_radius` and `radius` set to 3 and filters `villains`. The kill location does not determine its centre: it is fixed 0.65 metres above the player, with a 3-metre radius.
- The Damage profile has attack Power distribution 0, Impact 0.55 and `stagger_override = medium`. Impact multipliers are 1 for `unarmored/player`, 0.4 for `armored/resistant/berserker/disgustingly_resilient`, and 0.1 for `super_armor/void_shield`. Isolating the Super Armour coefficient gives 0.55 × 0.1 = 0.055, before other Power or Stagger modifiers.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2426-L2434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2426-L2434)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3432-L3450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3432-L3450)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L145)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L216-L224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L224)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L228-L239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L228-L239)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua — L499-L531](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L499-L531)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2426-L2434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2426-L2434)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1635-L1657](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1635-L1657)

## Example assumptions and limits

- **Trigger:** a Ranged Elite or Specialist kill triggers the effect. Existing Vulture's Mark stacks are not required.

- **Area and effect:** it pushes enemies around you within 3 metres through Stagger, dealing no direct Damage.

- **Target differences:** whether an enemy is actually moved depends on Stagger resistance, armour and its current state. It cannot guarantee interrupting every enemy's action.

Knockback and Stagger within the radius still depend on the target's Stagger resistance, armour and other state modifiers. This upgrade only listens for a qualifying Ranged on_kill; the Needle Pistol Toxin on_minion_death exception that grants a Mark does not automatically satisfy this handler. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_vultures_mark_aoe_stagger`, hash `763b07e9`, entry 7679: **Vulture's Push**.
- Description key `loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc`, hash `d98831c7`, entry 14097.

Full raw template:

~~~text
Killing Elite or Special enemies with Ranged Attacks knocks all enemies around you backwards.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No placeholders in this English template | Raw text retained unchanged |

The English template has no display values to fill. Name and description are paired by the existing keys and hashes; no source-format lookup was necessary.

Static reconstruction; not an observed game screen:

~~~text
Killing Elite or Special enemies with Ranged Attacks knocks all enemies around you backwards.
~~~

## English comparison

English agrees on the Ranged Elite/Specialist kill trigger and an effect centred around the player. Its phrase knocks all enemies backwards states a universal displacement result. Existing evidence confirms a medium-Stagger explosion with target-dependent Impact, rather than guaranteed knockback against every target and state, so that universal result cannot be confirmed. The 3-metre radius, elevated centre, lack of direct Damage and separate Toxin exception are supplementary scope details; no further Stagger investigation was performed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_vultures_mark_aoe_stagger.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/a887e60a-cbd4-4d49-8e44-20661f7f2dcb). The icon identifies the talent; it is not mechanism evidence.
