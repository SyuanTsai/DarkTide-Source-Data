# Enhanced Arc Grenades: source evidence

[繁體中文](../cryptic_arc_grenades_weapon_malfunction.md) | [Player description](README.md#cryptic_arc_grenades_weapon_malfunction) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_arc_grenades_weapon_malfunction)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_arc_grenades_weapon_malfunction`; name key `loc_talent_cryptic_arc_grenades_weapon_malfunction`; description key `loc_talent_cryptic_arc_grenades_weapon_malfunction_larger_desc`. Node `node_6810a9ea-3e9e-4b7f-8b19-576d774fea40`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Selecting the talent permanently applies the `cryptic_arc_grenades_weapon_malfunction` `server_only_proc_buff`. Its `on_hit` check requires a living target and a `damage_profile.name` of `arc_grenade` or `arc_grenade_chain_jump_damage`; qualifying hits call `MinionState.apply_weapon_malfunction`. That function requires the target to have a Buff extension and a `weapon_malfunction` component in its blackboard before setting `is_malfunctioning = true` and `malfunctioning_time = t + breed-specific duration`. Without a breed override, the default is 12s; the overrides listed in the code are also 12s. If the breed's `combat_vector_config` sets `should_switch_to_melee_under_weapon_malfunction`, the code also applies a constraint state for switching to melee. Direct explosions and chain arcs trigger through the `arc_grenade` and `arc_grenade_chain_jump_damage` damage sources respectively. Other Electrocution damage, such as the force field's own explosion, is outside this proc's damage-name check.
- The area explosion template `arc_grenade` uses a fixed power level of 500 and references `DamageProfileTemplates.arc_grenade`. Its power distribution is attack 0 / impact 50, with armour modifiers listed in the damage profile. Each arc jump references `arc_grenade_chain_jump_damage`, with attack 0 / impact 10, and also applies `arc_chain_damage`. Adding a chain node applies `arc_grenade_electrocution` and a target marker. The Electrocution template has one stack, `duration = 1.1`, `interval = 0.2`, starts the interval on application and uses a frame offset. On the server, living targets other than an already downed Poxburster receive `cryptic_arc_grenade_shock_damage`. This profile copies `cryptic_discharge_shock_damage`, sets `skip_on_hit_proc = true` and uses attack 600 / impact 100 power distribution. These fields alone do not establish a fixed amount of Health lost by any enemy; damage resolution, the enemy, armour and hit stage still matter. The weapon Malfunction template accepts only living targets hit by a profile named `arc_grenade` or `arc_grenade_chain_jump_damage`. The shared Attack flow emits `on_hit` only when the damage profile does not set `skip_on_hit_proc`, so damage hits from the ongoing Electrocution do not trigger this Malfunction effect.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L962-L984](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L962-L984)
- [scripts/settings/talent/talent_settings_cryptic.lua — L185-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L185-L194)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1332-L1356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1332-L1356)
- [scripts/utilities/minion_state.lua — L111-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L111-L145)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L482-L510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L510)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L38-L52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L38-L52)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L482-L520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L520)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L1204-L1250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1204-L1250)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L1724-L1819](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1724-L1819)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L59-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L59-L80)
- [scripts/settings/buff/weapon_buff_templates.lua — L2689-L2733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2689-L2733)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1332-L1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1332-L1343)
- [scripts/utilities/attack/attack.lua — L577-L622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L622)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L962-L984](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L962-L984)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1866-L1888](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1866-L1888)

## Example assumptions and limits

- **How it works**: When an Arc Grenade explosion or its arc hits an applicable Ranged Enemy, that enemy's ranged weapon Malfunctions, normally for 12s.
- **Timing example**: A hit at 0s initially makes the Malfunction expire at 12s. Another hit at 8s changes expiry to 8 + 12 = 20s. Some enemies can still switch to melee attacks.
- **How it works**: Standard Arc Grenades have a 10m explosion radius. Whether a weapon Malfunction occurs also depends on the target supporting that state.
- **Ongoing Electrocution limit**: Subsequent repeated Electrocution does not trigger or extend the weapon Malfunction again. Another qualifying explosion or arc hit is required to restart the timer.

- A Ranged Enemy hit by a valid arc at time `t` Malfunctions until `t + 12s`. A further hit at `t + 8s` updates expiry to `t + 20s`.
- The code changes the Malfunction state only for living enemies with a `weapon_malfunction` blackboard component. Targets that do not support that component do not have their weapons disabled by this effect.
- Malfunction restricts the specified ranged-weapon behavior. Some enemies instead use melee attacks.
- The talent checks only `arc_grenade` and `arc_grenade_chain_jump_damage`, so not all Electrocution damage can trigger it.
- Attack/impact power distribution, power level and armour modifiers cannot be treated as fixed Health loss for all enemies. An actual damage value for a named enemy would require that enemy's armour, hit location and complete damage resolution.
- `duration = 1.1` and `interval = 0.2` confirm repeated resolution, but their ratio alone does not establish a fixed tick count. Server update timing also affects the final resolution.
- These additions explain Arc Grenade damage structure and restrictions on triggering weapon Malfunction; they are not in-game measurements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_arc_grenades_weapon_malfunction`, hash `9658f591`, entry 9719: **Enhanced Arc Grenades**.
- Description key `loc_talent_cryptic_arc_grenades_weapon_malfunction_larger_desc`, hash `6282ba9c`, entry 6402.

Full raw template:

~~~text
Your {talent_name:%s} also cause Ranged Enemies affected to have their Ranged weapons Malfunction, making them unable to use them for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | `loc_talent_cryptic_arc_grenades` → Arc Grenades | `loc_string`; hash `cfab3f3d`, entry 13419 |
| `{duration:%s}` | 12 | `number`; literal s in the template |

The minimally read display map is `cryptic_talents.lua` L962-L984. `duration` is the literal value 12, and `talent_name` resolves to the same-build English Arc Grenades entry. The configured `range` uses the existing 10m radius, but this English template has no range placeholder; it is not inserted into the reconstruction.

Static reconstruction; not an observed game screen:

~~~text
Your Arc Grenades also cause Ranged Enemies affected to have their Ranged weapons Malfunction, making them unable to use them for 12s.
~~~

## English comparison

The original English ties affected Ranged Enemies' weapon Malfunction to Arc Grenades and states 12s; this agrees with the accepted default and listed breed overrides. Supported blackboard/Buff components, living-target checks, melee fallback, refresh timing and the exclusion of ongoing shock damage are supplementary limits. The text does not claim that every form of Electrocution triggers Malfunction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_arc_grenades_weapon_malfunction.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/501bab77-4618-480e-80e8-3abb022f6a68). The icon identifies the talent; it is not mechanism evidence.
