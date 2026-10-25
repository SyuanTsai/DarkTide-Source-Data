# Dedicated Stimm charge: source evidence

[繁體中文](../broker_syringe.md) | [Base effects](BASE_EFFECTS.md#broker_syringe) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_syringe)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `broker_syringe`; no selectable talent point cost. The heading is a document label, not an independently matched game English name. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `broker_syringe` definition points to `broker_ability_syringe`. `conditional_base_talent_funcs` enables it only when any recipe in the `broker_stimm` settings is selected, with `target_slot = slot_pocketable_small`.
- The ability has `max_charges = 1` and `regen = 1`. Resource cost and cooldown both use `ceil(15 + 60 × clamp01((usedpoints − 1) / 29))`. At P = 0, the minimum is 0, but the ability is not enabled without a recipe.
- The pocketable has `consume_on_use = false`, `consume_ability_usage_cost = true`, `pause_ability_resource_regen = true`, `givable = false`, `undroppable = true` and `auto_use = true`. It is therefore a replenishable class item.
- `syringe_broker_buff` applies stats and external effects according to each of the provider's recipe tiers, removing the external effects at expiry. It lasts 15 seconds plus additional `syringe_duration`. While a root Buff of the same name exists, the ability's condition for ending its regeneration pause is not satisfied.

## Fixed source evidence

Long Lasting adds 5 seconds through the duration setting and its application to the Stimm duration (the first two references below).

- [scripts/settings/talent/talent_settings_broker.lua — L374-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L374-L376)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2001-L2006](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2001-L2006)
- [scripts/settings/archetype/archetypes/broker_archetype.lua — L72-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L72-L89)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L590-L597](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L590-L597)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L140-L209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L140-L209)
- [scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua — L6-L35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua#L6-L35)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4205)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L220-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L220-L305)

## Examples and limits

- A 15-point recipe has 44 seconds of recovery, for a basic cycle of 15 + 44 = 59 seconds. A 30-point recipe has 75 seconds of recovery, for a basic cycle of 90 seconds.
- In-game injection, slot operations and multiplayer sharing have not been verified. There is no standalone description key; a similar key is not used as substitute original text.
- Local text from Build 25606770 corresponds to the fixed public source's version 1.13.1.

## English comparison

No standalone game English description is paired to this ability in the existing evidence. The charge, consumption, duration and recovery formula are translated from the verified Chinese document. A direct English comparison remains **Cannot confirm**; the nearby Cartel Special or Equip Cartel Special descriptions do not substitute for a separate `broker_syringe` description.
