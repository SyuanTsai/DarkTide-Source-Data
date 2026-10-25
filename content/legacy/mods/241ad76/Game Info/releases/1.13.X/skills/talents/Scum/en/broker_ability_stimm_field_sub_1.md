# Fast Acting Stimms: source evidence

[繁體中文](../broker_ability_stimm_field_sub_1.md) | [Player description](README.md#broker_ability_stimm_field_sub_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field_sub_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_stimm_field_sub_1`; name key `loc_talent_broker_ability_stimm_field_sub_1`; description key `loc_talent_broker_ability_stimm_field_sub_1_desc`. Node `node_9abd28ea-b786-4e90-a185-4afabef584ec`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The special rule `broker_stimm_field_linger` changes `_life_time` to `sub_1_life_time = 5` during proximity initialization and records `_linger_time = 15`. The field radius remains 3 metres.
- When a unit leaves, `_remove_buff_from_unit` calls `_make_linger`, using `remove_externally_controlled_buff_with_linger(local_id, ..., 15)` on its applied buffs. When the deployable's lifetime ends, `destroy` also calls `_make_linger` for units still in the field. Thus leaving or field expiry can retain acquired effects for 15 seconds. Re-entering reconnects the existing buff to the field.
- After the field's 5-second working lifetime, its proximity job no longer exists, satisfying the player ability's manual-pause condition and resuming resource regeneration. The 15-second lingering buffs do not extend the cooldown pause. Resource naturally recovers at 1 per second and one charge costs 60, giving approximately 5 seconds of field time + 60 seconds of recovery = 65 seconds from deployment to full charge.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L522-L549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L522-L549)
- [scripts/settings/talent/talent_settings_broker.lua — L170-L188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L34-L52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L34-L52)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L107-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L107-L125)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L308-L364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L308-L364)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L220-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L220-L305)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L98-L137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L137)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L825-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L522-L549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L522-L549)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2094-L2116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2094-L2116)

## Example assumptions and limits

- **Field duration:** the field itself lasts only 5 seconds. After leaving its area, effects already received can continue for 15 seconds. If you stay until the field ends, those effects can last up to a further 15 seconds after it disappears.

- **Healing and Stimm effects:** the effects retained include Corruption healing and immunity, together with the Stimm effects shared by that deployment.

- **Cooldown:** the 60-second natural cooldown starts when the field ends, even while some allies' effects may linger for 15 seconds. Counting only this ability's duration and recovery, deployment to the next natural charge takes approximately 5 + 60 = 65 seconds.

The 15 seconds is remaining effect time after leaving or after field expiry; it does not keep the deployable alive for another 15 seconds. Natural recovery resumes when the field job ends, without adding the lingering duration to the pause. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_stimm_field_sub_1`, hash `52cafac2`, entry 5377: **Fast Acting Stimms**.
- Description key `loc_talent_broker_ability_stimm_field_sub_1_desc`, hash `8022348e`, entry 8325.

Full raw template:

~~~text
The duration of {stimm_field:%s} is shortened to {duration:%s}s, but its effects linger after leaving its area for {linger_duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stimm_field` | `loc_talent_broker_ability_stimm_field` | Localized string → `Stimm Supply` (hash `56107528`, entry 5599) |
| `duration` | `combat_ability.stimm_field.sub_1_life_time = 5` | Number → `5` |
| `linger_duration` | `combat_ability.stimm_field.sub_1_linger_time = 15` | Number → `15` |

Display mapping: [broker_talents.lua L527–540](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L527-L540). Both durations reuse accepted values.

Static reconstruction; not an observed game screen:

~~~text
The duration of Stimm Supply is shortened to 5s, but its effects linger after leaving its area for 15s.
~~~

## English comparison

English explicitly separates the field's 5-second duration from the 15-second duration of effects after leaving, matching the accepted behavior. It does not describe lingering when the field ends with a unit still inside, re-entry, or natural cooldown resuming after the field job ends. Those are supplements. The 15 seconds must not be added to the deployable lifetime or cooldown pause.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_stimm_field_sub_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/4ea2874c-338f-42ec-95cb-9f4c08e64794). The icon identifies the talent; it is not mechanism evidence.
