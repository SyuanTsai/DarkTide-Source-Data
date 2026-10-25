# Practiced Deployment: source evidence

[繁體中文](../broker_ability_stimm_field_sub_3.md) | [Player description](README.md#broker_ability_stimm_field_sub_3) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field_sub_3)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_stimm_field_sub_3`; name key `loc_talent_broker_ability_stimm_field_sub_3`; description key `loc_talent_broker_ability_stimm_field_sub_3_desc`. Node `node_c7a8a5c5-60d1-4c71-bc38-79121befb0c8`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent applies the permanent interval buff `broker_ability_stimm_field_sub_3`, checked server-side every 0.5 seconds. At startup it records whether `pocketable_small` already holds an item tagged `syringe`, and the remaining charge count of `pocketable_ability`.
- If the ordinary Stimm slot subsequently changes from empty to occupied, or the owner's remaining `pocketable_ability` charges increase, it calls `restore_ability_charge_percentage(combat_ability, 1)`. This restores one charge-cost fraction and clamps resource to the ability maximum. The two conditions are checked independently and can each make a call; both obey the same cap.
- `combat_ability` has one charge and 60 seconds of natural recovery, so a trigger directly restores a complete ability charge. Polling can add approximately 0.5 seconds of delay. If a Stimm is already held when the talent is added, initialization only records that state and does not immediately restore the ability.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L573-L587](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L573-L587)
- [scripts/settings/talent/talent_settings_broker.lua — L170-L188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L98-L112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L112)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3830-L3872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3830-L3872)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1165)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L573-L587](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L573-L587)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2071-L2093](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2071-L2093)

## Example assumptions and limits

- **Trigger:** newly acquiring a usable Stimm, or restoring one dedicated Stimm charge, fills one Stimm Supply ability charge.

- **Charge cap:** this ability has at most 1 charge. If it is already ready, the trigger cannot store an extra charge. A Stimm already in its slot when the talent is acquired does not immediately trigger restoration; availability must increase later.

- **Timing example:** if 40 seconds of cooldown remain when the effect triggers, the ability becomes usable again. The polling check applies the effect within approximately half a second.

One trigger restores one missing charge-cost fraction, filling the single-charge cap even when only part of the 60-second cooldown remains. Existing availability at initialization does not trigger restoration. Multiple triggers cannot accumulate charges beyond the maximum of 1. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_stimm_field_sub_3`, hash `e8ac27b2`, entry 15106: **Practiced Deployment**.
- Description key `loc_talent_broker_ability_stimm_field_sub_3_desc`, hash `88b27852`, entry 8865.

Full raw template:

~~~text
Once a Stimm becomes available to use (collected or otherwise), {stimm_field:%s} instantly becomes ready for deployment.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stimm_field` | `loc_talent_broker_ability_stimm_field` | Localized string → `Stimm Supply` (hash `56107528`, entry 5599) |

Display mapping: [broker_talents.lua L577–582](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L577-L582). The ability name comes from the same English resource.

Static reconstruction; not an observed game screen:

~~~text
Once a Stimm becomes available to use (collected or otherwise), Stimm Supply instantly becomes ready for deployment.
~~~

## English comparison

English identifies newly available Stimms, including availability gained by means other than collection, as making Stimm Supply ready. This agrees with the recorded availability transitions and complete one-charge restoration. Its word instantly describes readiness without spelling out the server's 0.5-second polling delay. Polling, initial-state handling and the charge cap are timing and capacity supplements, rather than an asserted numerical English contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_stimm_field_sub_3.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/c0ce43c8-1324-4c26-8319-c1f12c28fbb3). The icon identifies the talent; it is not mechanism evidence.
