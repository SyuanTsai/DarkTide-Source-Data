# Reactor Coil Recharge: source evidence

[繁體中文](../cryptic_weakspot_kills_grant_power.md) | [Player description](README.md#cryptic_weakspot_kills_grant_power) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_weakspot_kills_grant_power)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_weakspot_kills_grant_power`; name key `loc_talent_cryptic_weakspot_kills_grant_power`; description key `loc_talent_cryptic_weakspot_kills_grant_power_desc`. Node `node_ade5d487-8fea-4bdd-8a72-ee470110c2a9`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Weakspot Kill talent listens for `on_kill`, checking `attack_result = died` and `hit_weakspot = true`, without requiring a particular weapon type. On success, it calls `restore_ability_charge_percentage` with 0.02.
- This function multiplies the single-use cost (cost per charge for charged abilities) by 0.02 to obtain resource points restored. Skitarii Combat Abilities cost 50 points per charge, so each Weakspot Kill adds 1 resource point, rather than 2% of the whole three-charge pool.
- Recovery is capped at the maximum resource pool. The underlying resource stores fractional values at fixed precision; the displayed usable full-charge count is floor(resource / cost per charge).

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1610-L1628](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1610-L1628)
- [scripts/settings/talent/talent_settings_cryptic.lua — L437-L439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L437-L439)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2013-L2033](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2013-L2033)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L84-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L94)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1156)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L861-L872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L861-L872)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1610-L1628](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1610-L1628)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1429-L1455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1429-L1455)

## Example assumptions and limits

- **How it works**: Killing an enemy with a Weakspot hit restores Capacitance equal to 2% of the current Combat Ability's cost per charge. With a 50-point charge cost, each Weakspot Kill restores 1 point.
- **How it works**: Capacitance progress accumulates. Every 50 points forms one full charge, and progress below 50 points is retained.

- For a Combat Ability with a 50-point cost, one Weakspot Kill restores 50 × 2% = 1 point of Capacitance. Resource must reach 50 points to add a full charge.
- From an empty resource pool, accumulating 50 Weakspot Kills without activating the ability gives 50 × 1 point = 50 points, equivalent to one charge. The three-charge 150-point pool caps recovery at its maximum.
- The 2% uses one charge's cost, rather than the maximum three-charge pool. Increasing maximum charge count does not increase this recovery amount; changing cost per charge does.
- Recovery occurs only when the hit is a Weakspot hit and the kill event reports the enemy as dead. Ordinary/non-Weakspot kills do not trigger it.
- Neither the local Traditional Chinese nor the English text states the 2% cost basis. The accepted recovery function supplies that basis; the omission alone is not an explicit contradiction.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_weakspot_kills_grant_power`, hash `44336d2e`, entry 4419: **Reactor Coil Recharge**.
- Description key `loc_talent_cryptic_weakspot_kills_grant_power_desc`, hash `7e092f5a`, entry 8178.

Full raw template:

~~~text
Weakspot Kills generate {power:%s} {capacitance_keyword:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{power:%s}` | 0.02 → 2% | `percentage`; no + prefix |
| `{capacitance_keyword:%s}` | Capacitance | `loc_string`; `loc_talent_cryptic_power_keyword` |

The minimally read display map is `cryptic_talents.lua` L1610-L1628. `power` uses the verified `cryptic_weakspot_kills_grant_power.cooldown_replenished_on_proc = 0.02`. The Capacitance name uses `loc_talent_cryptic_power_keyword` (hash `ecc15a9f`, English entry 15388).

Static reconstruction; not an observed game screen:

~~~text
Weakspot Kills generate 2% Capacitance.
~~~

## English comparison

The original English Weakspot Kill trigger and 2% amount agree with the accepted evidence. It does not explicitly give a denominator, so the single-charge cost basis is a supplement. Weapon independence, kill-event checks, fractional progress, full-charge display and maximum-pool cap also supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_weakspot_kills_grant_power.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/833b596d-dbc9-49fe-9f90-436140e700ed). The icon identifies the talent; it is not mechanism evidence.
