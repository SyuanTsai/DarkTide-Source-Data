# Gunslinger: base aura source evidence

[繁體中文](../broker_aura_gunslinger.md) | [Base effects](BASE_EFFECTS.md#broker_aura_gunslinger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_aura_gunslinger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `broker_aura_gunslinger`; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `broker_archetype.lua` includes `broker_aura_gunslinger` in `base_talents`. The talent applies the `broker_aura_gunslinger` Buff through the `broker_aura` Coherency identifier. Its base share is 0.05; the improved version separately copies the same template with a share of 0.1.
- The Buff listens for `on_ammo_pickup`, reads the `Pickups.by_name` data for that event's `pickup_name`, copies it and sets `modifier` to 0.05. It then gets its `coherency_system`'s `in_coherence_units` and calls `Ammo.add_ammo_using_pickup_data` for each.
- The Ammo utility calculates actual replenishment from each weapon slot's `pickup_amount_func` and reserve/magazine deficit. It only processes slots with `max_ammunition_reserve` greater than 0 and caps replenishment at the combined reserve and magazine deficit. Sharing uses `skip_proc = true` so its result cannot trigger the same pickup event again.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/broker_archetype.lua — L53-L71](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L53-L71)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L750-L776](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L750-L776)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L815-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L815-L863)
- [scripts/utilities/ammo.lua — L560-L616](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L560-L616)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L260-L309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [scripts/utilities/ammo.lua — L560-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L560-L615)
- [scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua — L3-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua — L3-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua — L3-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)
- [scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua — L3-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua#L3-L18)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L859-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L859-L863)

## Examples and limits

- If a pickup would replenish 100 rounds under the current weapon settings, and every member has enough room, 5% × 100 = 5 rounds per member. Actual amounts depend on each member's own weapon Ammo rules and remaining capacity.
- The 5% applies to the Ammo amount supplied by that pickup's data. It does not increase Ammo capacity or guarantee 5 rounds for every member.
- Actual replenishment depends on pickup type, each weapon slot's capacity and missing Ammo. This source passage does not specify a fixed round count for every weapon pickup.
- Whether a special mission large Ammo Crate uses the same event, and the actual sharing behavior, have not been verified in game.
- Local text from Build 25606770 corresponds to the fixed public source's version 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_aura_gunslinger`, hash `24295b77`, entry 2340: **Gunslinger**.
- Description key `loc_talent_broker_aura_gunslinger_desc`, hash `3df231fe`, entry 4040.

Full raw template:

~~~text
When an Ammo pickup is collected by you or allies in Coherency, you each replenish Ammo equal to {ammo:%s} of that pickup.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ammo` | `broker_aura_gunslinger.ammo_share = 0.05` | Percentage: `5%` |
| `talent` (not used in this raw description) | `loc_talent_broker_aura_gunslinger` | Localized string: `Gunslinger` |

Display mapping: `broker_talents.lua` L750-L776, finding `ammo_share` from the Buff template. The value reuses accepted `broker_buff_templates.lua` L815-L863 evidence; percentage and localized-string formatting are unchanged.

Static reconstruction; not an observed game screen:

~~~text
When an Ammo pickup is collected by you or allies in Coherency, you each replenish Ammo equal to 5% of that pickup.
~~~

## English comparison

The independently read English describes Ammo pickups collected by you or allies in Coherency, replenishing 5% of the pickup for each member. This agrees with the accepted pickup event, Coherency recipients and share value for the documented ordinary pickups. Each member's weapon calculation, rounding, deficit cap, improved-Aura replacement and prevention of recursive sharing supplement that wording. The existing evidence leaves the special mission large Ammo Crate's event and actual sharing unverified, so the universal wording for that case remains Cannot confirm, without an asserted English erratum.
