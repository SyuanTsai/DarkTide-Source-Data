# Booby Trap: source evidence

[繁體中文](../broker_ability_stimm_field_sub_2.md) | [Player description](README.md#broker_ability_stimm_field_sub_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field_sub_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_stimm_field_sub_2`; name key `loc_talent_broker_ability_stimm_field_sub_2`; description key `loc_talent_broker_ability_stimm_field_sub_2_desc`. Node `node_1eebfc9e-efbd-4df8-9562-3097cb46af1f`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `broker_stimm_field_explode` rule makes `ProximityBrokerStimmField` check `is_job_completed` during `destroy` cleanup. It creates `ExplosionTemplates.broker_stimm_field` only when the field has reached its `life_time` and the job completes normally. Incomplete or cancelled jobs do not satisfy this condition.
- The explosion has a 3-metre radius and `damage_type = grenade_frag`, using ordinary and close-range Damage profiles. Their `on_damage_dealt` sets `neurotoxin_interval_buff3 = 7`. `Attack.execute` processes post-Damage buffs only when positive Damage was dealt and the target has a buff extension, then adds exactly 7 stacks through `add_internally_controlled_buff_with_stacks`.
- `neurotoxin_interval_buff3` is a Toxin interval buff with `duration = 2.6` seconds, `interval = 0.35` seconds, a maximum of 30 stacks, and duration refreshed on stacking. Seven is the number of status stacks added by the explosion; it does not mean 7 Damage ticks or directly seven times the Damage.
- Ending the field job releases the ability-resource pause, resuming its 60-second natural recovery after the deployable job finishes. The explosion occurs once and neither adds a separate cooldown cost nor shortens recovery.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L550-L572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L550-L572)
- [scripts/settings/talent/talent_settings_broker.lua — L170-L188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L107-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L107-L125)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L153-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L153-L168)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L195-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L195-L210)
- [scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua — L599-L625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L599-L625)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua — L428-L490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L428-L490)
- [scripts/utilities/attack/attack.lua — L713-L749](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L749)
- [scripts/utilities/attack/attack.lua — L1097-L1111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L1097-L1111)
- [scripts/settings/buff/weapon_buff_templates.lua — L1493-L1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L98-L137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L137)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L825-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/utilities/attack/damage_calculation.lua — L219-L228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)
- [scripts/settings/damage/power_level_settings.lua — L7-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua — L386-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L550-L572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L550-L572)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2117-L2139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2117-L2139)

## Example assumptions and limits

- **Trigger:** the field explodes when its duration ends. The base field ends after 20 seconds; if a duration-shortening effect also applies, the explosion occurs at the end of the actual field duration.

- **Explosion effect:** enemies hit and damaged by the 3-metre frag explosion receive 7 Toxin stacks. This is one explosion, rather than 7 stacks applied on every field pulse.

- **Cooldown:** the 60-second natural cooldown resumes after the field ends and explodes. The explosion itself does not extend the cooldown pause.

- **Damage example:** excluding other bonuses and special Damage Reduction, an Unarmoured target within 0.5 metres of the centre takes 20 × 500 × 300 ÷ 10000 = 300 explosion Damage. With the corresponding armour multiplier of 0.25, this becomes 300 × 0.25 = 75. Subsequent Toxin Damage is calculated separately.

Toxin stacks are applied only to targets that take positive explosion Damage and have a buff extension, rather than unconditionally infecting every unit. The fixed Damage profiles supply frag Damage followed by Toxin Damage; the stack count is not converted here into a fixed total Damage value. Normal lifetime completion is required. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_stimm_field_sub_2`, hash `33d4173c`, entry 3369: **Booby Trap**.
- Description key `loc_talent_broker_ability_stimm_field_sub_2_desc`, hash `59a6d46b`, entry 5810.

Full raw template:

~~~text
Once its duration ends, {stimm_field:%s} explodes, infecting nearby Enemies with {stacks:%s} stacks of {toxin:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stimm_field` | `loc_talent_broker_ability_stimm_field` | Localized string → `Stimm Supply` (hash `56107528`, entry 5599) |
| `stacks` | Maximum of the two profiles' `on_damage_dealt.neurotoxin_interval_buff3`, both `7` | Number → `7` |
| `toxin` | `loc_term_glossary_broker_toxin` | Localized string → `Chem Toxin` (hash `5ea7edc3`, entry 6134); `[Writer]` is suffix metadata outside the text |

Display mapping: [broker_talents.lua L554–567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L554-L567). Profile values reuse accepted evidence; localized strings use the same English resource.

Static reconstruction; not an observed game screen:

~~~text
Once its duration ends, Stimm Supply explodes, infecting nearby Enemies with 7 stacks of Chem Toxin.
~~~

## English comparison

English describes the explosion at duration expiry and 7 Chem Toxin stacks on nearby enemies, matching the accepted expiry trigger and stack amount. It leaves the 3-metre radius, normal job-completion condition, positive-Damage/buff-extension requirements and separate frag/Toxin processing unstated. These are supplements, and the stack count does not promise seven Damage ticks or seven times direct Damage.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_stimm_field_sub_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/c3cdd1a9-e1eb-4e29-9a5e-6bae44c280a4). The icon identifies the talent; it is not mechanism evidence.
