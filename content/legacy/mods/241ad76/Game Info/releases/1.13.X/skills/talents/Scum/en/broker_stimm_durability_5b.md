# Regain: source evidence

[繁體中文](../broker_stimm_durability_5b.md) | [Player description](README.md#broker_stimm_durability_5b) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_durability_5b)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_durability_5b`; name key `loc_talent_broker_stimm_durability_c`; description key `loc_talent_buff_toughness_during_stimm`. Node `node_3ccea381-39a7-4411-b455-36d8fa65d30f`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `broker_syringe_toughness_over_time` is an `interval_buff` with `interval = 1` and no `start_interval_on_apply`. Its first execution occurs when `time > start + 1`. It has no duration of its own and is removed by the external syringe root.
- Each tick calls `replenish_percentage(0.05, false, "broker_syringe")`, applying the recovery multiplier and capping recovery at the deficit; it returns without recovery while knocked down.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4034-L4077](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4034-L4077)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L17-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L48)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_broker.lua — L723-L732](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L723-L732)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L665-L688](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L665-L688)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Ongoing recovery**: Restore 5% of maximum Toughness per second during the Stimm effect, affected by Toughness recovery bonuses. The first recovery occurs approximately 1 second after application.

- **Recovery example**: With maximum Toughness 100 and the 20% recovery bonus from Barrage I–IV, each tick restores 100 × 5% × 1.2 = 6. If only 3 Toughness is missing, it restores only 3.

- **Stopping conditions**: Recovery stops when the Stimm effect ends; it does not provide this recovery while knocked down.

Each tick schedules the next at the current update time + 1. The final number of recoveries depends on update steps, root-removal order and being knocked down; a 15-second duration does not guarantee exactly 15 ticks.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_durability_c`, hash `3e34e34e`, entry 4056: **Regain**.
- Description key `loc_talent_buff_toughness_during_stimm`, hash `6dd3d484`, entry 7140.

Full raw template:

~~~text
Replenish {toughness_amount:%s} Toughness every {interval:%s} seconds.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | `nil` → empty string | Raw name template: `Regain {tier:%s}`; no Roman numeral is appended |
| `toughness_amount` | `0.05` | Percentage with `+`: `+5%` |
| `interval` | `1` | Number: `1` |

Display mapping `talent_settings_broker.lua` L723-L732 supplies the values and leaves the name tier empty. Reuse the [shared recipe generator L12-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L114), accepted percentage and number formatting. The title trims the empty-tier trailing space.

Static reconstruction; not an observed game screen:

~~~text
Replenish +5% Toughness every 1 seconds.
~~~

## English comparison

The independently read English promises recurring Toughness recovery every 1 second, reconstructed as +5%. This matches the accepted nominal interval and recovery amount; the source template retains its plural "seconds" with 1. It does not specify maximum Toughness, recovery modifiers, first-tick delay, frame scheduling, deficit cap, knocked-down suppression or lifetime. Those existing details and the original example are supplements; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_durability_5b.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/f238889d-d7aa-45e0-8d16-9726389c7fe8). The icon identifies the talent; it is not mechanism evidence.
