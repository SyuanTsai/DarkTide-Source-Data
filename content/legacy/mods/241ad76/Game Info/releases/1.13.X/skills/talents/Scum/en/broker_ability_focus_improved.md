# Enhanced Desperado: source evidence

[繁體中文](../broker_ability_focus_improved.md) | [Player description](README.md#broker_ability_focus_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_focus_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_focus_improved`; name key `loc_talent_broker_ability_focus_improved`; description key `loc_talent_broker_ability_focus_improved_desc`. Node `node_4fa187c3-c910-4e93-b982-cc2e68d2515b`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This node selects `broker_ability_focus_improved`, reusing the shared `broker_focus` template with the improved state buff. The buff adds `sprint_movement_speed = 0.20`, `sprinting_cost_multiplier = 0`, `count_as_dodge_vs_ranged` and `suppression_immune`. Sprint Speed is additive; with only this effect, base 100 × (1 + 0.20) = 120.
- Highlighting uses enemy and player unit positions, `ranged_close = 12.5` metres and a whitelist of enemy tags. The state records its start time. The kill event must have a death result, use a Ranged attack or a weapon configured to count as Ranged, and have a hit position within 12.5 metres of the attacker.
- The extension function divides elapsed time since activation by `duration_max = 20`, takes the integer part, then divides `duration_extend = 1` second by `duration_divisor = 5` raised to that power. Thus each extension is 0.2 seconds after 20 seconds and 0.04 seconds after 40 seconds. The buff's start time can move forward only as far as the current time, preventing recovery of already elapsed duration.
- On start, magazine rounds return to reserve, the magazine is filled and free Ammo transfers are enabled. On stop, free transfers are disabled and the magazine is reconciled. The improved version's kill handling extends duration; other effects attached through talent rules depend on their respective branch nodes.
- Ranged kills use the close-kill check. Needle Pistol tracking has separate conditions: only the designated Needle Pistol, Ranged hits during focus and targets still alive are tracked. A death event must use Toxin Damage, and the death location must be within 12.5 metres of `params.attacking_unit`. This tracked Needle Pistol death exception cannot be generalized to all poisoned deaths.
- The ability has one charge, costs 45 resources per use and naturally replenishes 1 resource per second. Replenishment pauses while the state buff exists and resumes after it ends.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L104-L151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L104-L151)
- [scripts/settings/talent/talent_settings_broker.lua — L119-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L119-L141)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L37-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L37-L65)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L67-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L67-L180)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L243-L485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L243-L485)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L306-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/settings/damage/damage_settings.lua — L18-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L23)
- [scripts/settings/buff/buff_settings.lua — L977-L978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L977-L978)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L104-L151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L104-L151)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L578-L607](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L578-L607)

## Example assumptions and limits

- **Activation and protection:** immediately swap to your Ranged Weapon, fill the magazine and enter focus for 10 seconds. During focus, you count as Dodging Ranged Attacks, Sprint without Stamina cost and are immune to Suppression.

- **Sprint example:** Sprint Speed increases by 20%; an initial 5 metres/second becomes 5 × 1.2 = 6 metres/second.

- **Highlighting and extension:** highlight eligible enemies within 12.5 metres. Ranged kills at Close Range extend focus, initially by 1 second each; after 20 seconds from activation this falls to 0.2 seconds per kill, and after 40 seconds to 0.04 seconds. Each extension can restore remaining duration to at most 10 seconds.

- **Needle Pistol Toxin exception:** an enemy hit with a Ranged Needle Pistol attack and tracked during focus may extend the state even when Toxin Damage delivers the killing blow; it must also die at Close Range. Other Toxin kills do not automatically trigger this.

- **Ammo and cooldown:** reloading during focus does not consume reserve Ammo. Natural replenishment for the base 45-second cooldown starts only after focus ends; extending focus delays that start. At the end, the magazine is recalculated against remaining reserve Ammo, so a whole magazine of free rounds from the state is not retained.

The 12.5-metre check uses attacker position and hit/death location; a Toxin kill alone is insufficient. Base cooldown excludes the period of paused natural replenishment while focus remains active. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_focus_improved`, hash `df173866`, entry 14474: **Enhanced Desperado**.
- Description key `loc_talent_broker_ability_focus_improved_desc`, hash `a1148a57`, entry 10409.

Full raw template:

~~~text
Swaps to and reloads your Ranged Weapon, entering {talent_name:%s} for {duration:%s}s. For the duration, you count as Dodging against Ranged Attacks, Sprinting costs no Stamina, and you gain {sprint_movement_speed:%s} Sprint Speed.

While the ability is active, reloading your weapon does not reduce your Ammo Reserve.

Additionally, Enemies within Close Range become highlighted. Killing highlighted enemies with your Ranged Weapon extends the duration by {duration_extend:%s}s. After {duration_max:%s}s, the extending becomes diminished.

Base Cooldown: {cooldown:%s}s.

This is an augmented version of {default_talent:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_broker_ability_focus_improved` | Localized string → `Enhanced Desperado` |
| `duration` | `focus.duration = 10` | Number → `10` |
| `sprint_movement_speed` | `focus.sprint_movement_speed = 0.20` | Percentage with explicit plus prefix → `+20%` |
| `duration_extend` | `focus.duration_extend = 1` | Number → `1` |
| `duration_max` | `focus.duration_max = 20` | Number → `20` |
| `cooldown` | `focus.cooldown = 45` | Number → `45` |
| `default_talent` | `loc_talent_broker_ability_focus` | Localized string → `Desperado` (hash `e77f3e99`, entry 15020) |

Display mapping: [broker_talents.lua L109–139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L109-L139). Values reuse the verified document; talent names use the same English UI batch.

Static reconstruction; not an observed game screen:

~~~text
Swaps to and reloads your Ranged Weapon, entering Enhanced Desperado for 10s. For the duration, you count as Dodging against Ranged Attacks, Sprinting costs no Stamina, and you gain +20% Sprint Speed.

While the ability is active, reloading your weapon does not reduce your Ammo Reserve.

Additionally, Enemies within Close Range become highlighted. Killing highlighted enemies with your Ranged Weapon extends the duration by 1s. After 20s, the extending becomes diminished.

Base Cooldown: 45s.

This is an augmented version of Desperado.
~~~

## English comparison

English separately states the swap/reload, Ranged Dodging, free Sprinting, +20% Sprint Speed, free reload transfers, close-target highlighting, initial 1-second extension, diminution after 20 seconds and 45-second base cooldown. These agree with the accepted evidence. Suppression immunity, the 12.5-metre geometry, extension divisor and remaining-duration cap, tracked Needle Pistol exception, final Ammo reconciliation and cooldown pause are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability/broker_ability_focus_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/785f7b2c-0591-4cc4-b928-31c26b07d0f7). The icon identifies the talent; it is not mechanism evidence.
