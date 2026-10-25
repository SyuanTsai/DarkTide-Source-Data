# Stimm Supply: source evidence

[繁體中文](../broker_ability_stimm_field.md) | [Player description](README.md#broker_ability_stimm_field) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_stimm_field`; name key `loc_talent_broker_ability_stimm_field`; description key `loc_talent_broker_ability_stimm_field_desc_3`. Node `node_e341cdcf-7254-4ac0-9f37-cb056b00d14d`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node selects the single-charge `broker_ability_stimm_field`. Placement consumes the use cost; the deployable uses `stimm_field.life_time = 20` and `proximity_radius = 3`. The ability's manual pause condition remains satisfied while that deployable is working, so natural replenishment for the 60-second cooldown resumes after it stops.
- On activation, the field applies `syringe_broker_buff_stimm_field` to living Operatives in range, adding, removing or reapplying effects as they enter and leave. Their Corruption taken multiplier is zero. Every 0.25 seconds, the server calls `reduce_permanent_damage(0.5)`. The formatted total is 20 / 0.25 × 0.5 = 40; actual healing is limited by the target's removable Corruption.
- If the pocket slot holds a normal Stimm tagged `syringe`, field construction adds that Stimm's field version and unequips the held item. The field version copies the original effects. With the Scum's own pocket Stimm ability, one use is consumed from remaining charges; without an available charge, Stimm talent effects are not copied.
- Leaving the range normally removes field effects; the deployable's end cleans up effects still applied in range. Fast Acting Stimms separately changes field lifetime to 5 seconds and lets effects continue for 15 seconds through its branch rule.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L495-L521](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L495-L521)
- [scripts/settings/talent/talent_settings_broker.lua — L170-L188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L98-L137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L137)
- [scripts/settings/equipment/weapon_templates/combat_abilities/broker_stimm_field.lua — L102-L130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/broker_stimm_field.lua#L102-L130)
- [scripts/settings/deployables/templates/broker_stimm_field_crate.lua — L5-L16](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/deployables/templates/broker_stimm_field_crate.lua#L5-L16)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L23-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L23-L105)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L127-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L127-L210)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L220-L364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L220-L364)
- [scripts/settings/buff/broker_buff_utils.lua — L14-L97](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L14-L97)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L786-L811](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L786-L811)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4205)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L825-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/extension_systems/health/player_unit_health_extension.lua — L270-L286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L270-L286)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L495-L521](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L495-L521)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L782-L813](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L782-L813)

## Example assumptions and limits

- **Deployment and range:** place a refitted Medi-Pack on the ground to form a gas field with a 3-metre radius, lasting 20 seconds by default. You and allies breathing the gas gain its effects.

- **Corruption healing:** remove up to 0.5 Corruption every 0.25 seconds. The displayed total is at most 20 ÷ 0.25 × 0.5 = 40; Corruption taken is zero while the field effect applies. It cannot clear Corruption that has consumed a complete Health segment. Leaving the field removes the base effect.

- **Stimm sharing:** if you carry a Stimm, the field gives its corresponding effects to allies in range. Deployment consumes or removes the corresponding Stimm use.

- **Cooldown:** base cooldown 60 seconds. Natural replenishment pauses while the field operates and starts after it ends.

The 40-point formatted maximum assumes enough removable Corruption and does not guarantee that every ally heals 40. Once none remains, it does not create extra Health. Shared Stimm effects depend on the type carried and available uses when the field is placed. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_stimm_field`, hash `56107528`, entry 5599: **Stimm Supply**.
- Description key `loc_talent_broker_ability_stimm_field_desc_3`, hash `81b45839`, entry 8426.

Full raw template:

~~~text
Deploy a refitted Medi-Pack on the ground, bolstering you and your allies for {duration:%s}s. Operatives breathing the Pack’s gas heal up to {total_corruption_heal:%s} Corruption over time and become immune to it.

Additionally, if you have a Stimm equipped, {stimm_field:%s} will copy its contents and disperse them into the air, granting its effects to any nearby allies.

Base Cooldown: {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `stimm_field.life_time = 20` | Number → `20` |
| `total_corruption_heal` | `life_time / interval × corruption_heal_amount = 20 / 0.25 × 0.5` | Number → `40` |
| `stimm_field` | `loc_talent_broker_ability_stimm_field` | Localized string → `Stimm Supply` |
| `cooldown` | `stimm_field.cooldown = 60` | Number → `60` |

Display mapping: [broker_talents.lua L500–517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L500-L517). All values and the total-healing derivation reuse the accepted document.

Static reconstruction; not an observed game screen:

~~~text
Deploy a refitted Medi-Pack on the ground, bolstering you and your allies for 20s. Operatives breathing the Pack’s gas heal up to 40 Corruption over time and become immune to it.

Additionally, if you have a Stimm equipped, Stimm Supply will copy its contents and disperse them into the air, granting its effects to any nearby allies.

Base Cooldown: 60s.
~~~

## English comparison

English says up to 40 Corruption over 20 seconds, rather than guaranteeing 40 actual healing, and explicitly describes Corruption immunity and copying an equipped Stimm's effects to nearby allies. These match the existing evidence. The 3-metre radius, tick interval, removable-Corruption limit, Stimm consumption, exit cleanup and paused natural replenishment are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability/broker_ability_stimm_field.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/70eb922d-eda2-4ed7-b945-ed3b305b10a6). The icon identifies the talent; it is not mechanism evidence.
