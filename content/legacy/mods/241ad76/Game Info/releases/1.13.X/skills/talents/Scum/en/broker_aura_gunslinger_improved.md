# Gunslinger Improved: source evidence

[繁體中文](../broker_aura_gunslinger_improved.md) | [Player description](README.md#broker_aura_gunslinger_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_aura_gunslinger_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_aura_gunslinger_improved`; name key `loc_talent_broker_aura_gunslinger_improved`; description key `loc_talent_broker_aura_gunslinger_improved_desc`. Node `node_8899507b-9a1c-41c4-8107-a3e559dc2172`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The improved Aura clones the base with `ammo_share = 0.1` and Coherency priority 1, taking precedence over the base priority 2. For the same `coherency_id`, only the copy with the lowest priority value is selected.
- `on_ammo_pickup` copies the pickup data and sets `modifier = 0.1`, then calls `Ammo.add_ammo_using_pickup_data(..., true)` for the collector's `in_coherence_units`; the final `true` prevents recursion. Each member's `ammo_amount_func` recalculates their own capacity.
- Exception: `large_ammunition_crate_pickup` ignores the modifier. If that source emits the same pickup event, sharing uses full capacity. The existing evidence therefore does not establish a strict 10% rule for every mission pickup.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L815-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L815-L863)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L260-L309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [scripts/utilities/ammo.lua — L560-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L560-L615)
- [scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua — L3-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/small_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua — L3-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/consumable/large_clip_pickup.lua#L3-L19)
- [scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua — L3-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/deployable/ammo_cache_deployable_pickup.lua#L3-L23)
- [scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua — L3-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/pickup/pickups/level/large_ammunition_crate_pickup.lua#L3-L18)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L859-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L859-L863)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L777-L802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L777-L802)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L353-L379](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L353-L379)

## Example assumptions and limits

- **Sharing:** when you or an ally with this Aura collect Ammo, the pickup is shared with members in that collector's Coherency. Each member uses their own weapon capacity; the collector's received rounds are not divided among the team.

- **Small Ammo example:** a small pickup normally replenishes 15% of reserve capacity. Each member receives their reserve maximum × 15% × 10%, rounded up. A reserve maximum of 200 gives 3 rounds; a maximum of 100 gives ⌈1.5⌉ = 2 rounds.

- **Large Ammo and Ammo Crates:** a large pickup normally replenishes 50%; at a reserve maximum of 200, sharing gives 10 rounds. A normal deployed Ammo Crate uses 10% of (reserve maximum + magazine capacity): 200 + 30 gives 23 rounds, still capped by the actual missing amount.

- **Duplicate limits:** multiple players with the same Aura do not provide multiple copies. This improved version's 10% replaces the base version's 5%. Shared Ammo cannot trigger another chain of sharing.

Whether the special mission large Ammo Crate uses the same event, and how its sharing actually behaves, remain unverified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_aura_gunslinger_improved`, hash `9826063e`, entry 9827: **Gunslinger Improved**.
- Description key `loc_talent_broker_aura_gunslinger_improved_desc`, hash `03a59c5c`, entry 231.

Full raw template:

~~~text
When an Ammo pickup is collected by you or allies in Coherency, you each replenish Ammo equal to {ammo:%s} of that pickup.

This is an augmented version of {talent:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ammo` | `broker_aura_gunslinger_improved.ammo_share = 0.1` | Percentage, no explicit plus prefix → `10%` |
| `talent` | `loc_talent_broker_aura_gunslinger` | Localized string → `Gunslinger` (hash `24295b77`, entry 2340) |

Display mapping: [broker_talents.lua L781–796](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L781-L796); the accepted share value and same-batch localized name are reused.

Static reconstruction; not an observed game screen:

~~~text
When an Ammo pickup is collected by you or allies in Coherency, you each replenish Ammo equal to 10% of that pickup.

This is an augmented version of Gunslinger.
~~~

## English comparison

The English pickup trigger, sharing to each Coherency member and 10% value agree for the documented ordinary pickups. Per-member capacity, rounding, priority and recursion prevention are supplements. The special mission `large_ammunition_crate_pickup` ignores the share modifier, but the existing document does not establish whether it emits the same event; the universal wording for that case remains Cannot confirm, without an asserted English erratum.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/aura/broker_aura_gunslinger_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/3927d1d0-9e15-4b96-9a91-00f0503e338c). The icon identifies the talent; it is not mechanism evidence.
