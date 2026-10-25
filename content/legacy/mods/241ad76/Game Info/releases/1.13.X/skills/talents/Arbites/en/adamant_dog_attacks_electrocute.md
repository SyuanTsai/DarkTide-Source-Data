# Voltaic Mandibles Augment: source evidence

[繁體中文](../adamant_dog_attacks_electrocute.md) | [Player description](README.md#adamant_dog_attacks_electrocute) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_dog_attacks_electrocute)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_dog_attacks_electrocute`; name key `loc_talent_adamant_dog_attacks_electrocute`; description key `loc_talent_adamant_dog_attacks_electrocute_desc`. Node `node_4c33cf5f-8516-4c2d-bc50-7afd037eb239`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- The attacker must be the owned companion, and `damage_profile.companion_pounce = true` must hold before the child buff is added. This does not establish unconditional Electrocution for every dog attack. Human, Ogryn and Monster pounce profiles, including initial/no_damage pounce, carry the flag.
- The child buff has `max_stacks = 1`, refresh, duration 5s, random interval [0.3, 0.8] and PowerLevel 500. Damage is attributed to the player owner rather than the companion. The `interrupter` tag skips interval damage.
- `shockmaul_stun_interval_damage` uses attack [50, 65], with default interpolation 0.5 → 57.5. Unarmoured ADM [0.305, 0.695] → 0.5, giving 28.75 per tick. Variable tick count is not converted into a fixed 5s total.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3244-L3291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3244-L3291)
- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua — L181-L287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L181-L287)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L7-L46](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L7-L46)
- [scripts/settings/equipment/weapon_templates/power_mauls/settings_templates/power_maul_damage_profile_templates.lua — L616-L657](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/settings_templates/power_maul_damage_profile_templates.lua#L616-L657)
- [scripts/settings/damage/damage_profile_settings.lua — L52-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_settings.lua#L52-L83)
- [scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua — L8-L12](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua#L8-L12)
- [scripts/utilities/attack/damage_profile.lua — L342-L381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L342-L381)
- [scripts/utilities/attack/damage_calculation.lua — L63-L108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L108)
- [scripts/settings/talent/talent_settings_adamant.lua — L149-L152](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L149-L152)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3215-L3242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3215-L3242)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L40-L61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L40-L61)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L125-L156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L125-L156)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1087-L1101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1087-L1101)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L586-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L586-L612)

## Example assumptions and limits

- **Trigger and duration**: Your Cyber-Mastiff's pounce and pinning attacks apply Electrocution on hit for 5s. Continued attacks can refresh the duration; they do not stack multiple copies of Electrocution.

- **Damage cadence**: After each damage tick, the next interval is random between 0.3 and 0.8s. The first tick also has a short update delay. A 5s effect therefore cannot be treated as a fixed tick count or fixed damage per second.

- **Damage example**: With no other bonus and an ordinary Unarmoured hit zone, baseline damage per tick is 57.5 × 0.5 = 28.75. Using the baseline Flak armour modifier of 1 gives 57.5. Actual damage still depends on enemy hit zones, resistances and other damage bonuses.

Electrocution status and each enemy's actual control response still require in-game confirmation. The `interrupter` exception is not mapped to an unverified enemy name.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_dog_attacks_electrocute`, hash `cb0985b3`, entry 13116: **Voltaic Mandibles Augment**.
- Description key `loc_talent_adamant_dog_attacks_electrocute_desc`, hash `f2c7dafd`, entry 15780.

Full raw template:

```text
Your Cyber-Mastiff Electrocutes enemies it attacks for {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| duration | talent_settings.dog_attacks_electrocute.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Your Cyber-Mastiff Electrocutes enemies it attacks for 5s.
```

## English comparison

The independently read English agrees with the owned Cyber-Mastiff and 5s duration. Its generic attack wording is broader than the established pounce-profile filter, but coverage across every actual dog attack remains unconfirmed from existing evidence. Refresh, damage cadence, attribution, the interrupter exception and damage calculations are supplementary. No explicit English contradiction is established; no expanded mechanism research was performed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dog_attacks_electrocute.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/4ce13efe-7a81-48cd-9bb6-47dfb55f63b8). The icon identifies the talent; it is not mechanism evidence.
