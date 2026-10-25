# Tank: source evidence

[繁體中文](../broker_stimm_durability_5a.md) | [Player description](README.md#broker_stimm_durability_5a) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_durability_5a)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_durability_5a`; name key `loc_talent_broker_stimm_durability_b`; description key `loc_talent_stat_toughness_replenish_modifier`. Node `node_0b600a94-b5b8-44e6-a8bc-1f07f88229bd`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `toughness_replenish_modifier = 0.3`, additive with 0.05 from each of the four prerequisites for a total multiplier of 1.5. It does not increase maximum Toughness.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3873-L3925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3873-L3925)
- [scripts/settings/talent/talent_settings_broker.lua — L718-L722](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L718-L722)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L491-L514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L491-L514)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery bonus**: Gain 30% Toughness Replenishment, additive with the 20% from Barrage I–IV for a total 50% bonus.

- **Recovery example**: An effect normally restoring 10 becomes 10 × (1 + 20% + 30%) = 15, capped at maximum Toughness.

- **Injection example**: With maximum Toughness 100, Barrage I–IV provide a total 25% one-time recovery. Applying this route's 50% recovery bonus gives 100 × 25% × 1.5 = 37.5.

The examples assume recovery bonuses are already active. Recovery sources that explicitly ignore stat buffs are unaffected.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_durability_b`, hash `e3530c66`, entry 14734: **Tank**.
- Description key `loc_talent_stat_toughness_replenish_modifier`, hash `805fdb71`, entry 8340; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{toughness_replenish_modifier:%s} Toughness Replenishment.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | `nil` → empty string | Raw name template: `Tank {tier:%s}`; no Roman numeral is appended |
| `toughness_replenish_modifier` | `0.3` | Percentage with `+`: `+30%` |

Display mapping `talent_settings_broker.lua` L718-L722 supplies the value and leaves the name tier empty. The component key/hash reuse the accepted document; the JSONL entry omits the key. Reuse the [shared recipe generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted percentage formatting. The title trims the empty-tier trailing space.

Static reconstruction; not an observed game screen:

~~~text
+30% Toughness Replenishment.
~~~

## English comparison

The independently read English names Toughness Replenishment. Reconstructed +30% agrees with the accepted recovery modifier and makes no maximum-Toughness claim. Additive prerequisites, recovery caps, stat-buff exceptions, cost, duration and the original examples supplement the label; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_durability_5a.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/35bab219-731c-41ac-80a8-27af4a02f1c2). The icon identifies the talent; it is not mechanism evidence.
