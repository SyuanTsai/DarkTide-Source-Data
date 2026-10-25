# Barrage I: source evidence

[繁體中文](../broker_stimm_durability_1.md) | [Player description](README.md#broker_stimm_durability_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_durability_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_durability_1`; name key `loc_talent_broker_stimm_durability_a`; description key `loc_talent_buff_toughness_on_stimm / loc_talent_stat_toughness_replenish_modifier / loc_talent_stat_damage_taken_multiplier`. Node `node_71791540-7dbc-4d3d-b931-630cab2a423a`; category Stimm recipe; 1 point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- Each selected recipe creates a `broker_syringe_toughness_restore`, calling `replenish_percentage(0.0625)` on its first valid update. When `first_time_affected = false`, it is marked `procced` in advance, so repeated re-entry into the same field application does not repeatedly grant the initial recovery. This one-time recovery is deferred while knocked down.
- Each node adds 0.05 to `toughness_replenish_modifier` and multiplies `damage_taken_multiplier` by 0.96. The former adds and the latter multiplies. `recover_percentage_toughness` also applies the total recovery modifier and caps recovery at missing Toughness.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3873-L3925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3873-L3925)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/buff_settings.lua — L768-L800](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L768-L800)
- [scripts/settings/buff/buff_settings.lua — L1006-L1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1006-L1028)
- [scripts/utilities/attack/damage_calculation.lua — L587-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/settings/talent/talent_settings_broker.lua — L650-L666](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L650-L666)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L390-L414](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L390-L414)

## Example assumptions and limits

- **Recipe cost**: 1 point. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Recovery on use**: Additionally restore 6.25% of maximum Toughness, affected by Toughness recovery bonuses and capped at maximum Toughness.

- **Ongoing effects**: Gain 5% Toughness Replenishment and multiply Damage Taken by 0.96, giving 4% Damage Reduction from this node.

- **Damage Reduction example**: Selecting Barrage I through this node gives 1 multiplicative Damage Reduction modifier. An incoming 100 Damage becomes 100 × 0.96^1 ≈ 96.000.

- **Recovery example**: With maximum Toughness 100 and recovery bonuses from this node and its prerequisites active, using the Stimm restores 100 × (1 × 6.25%) × (1 + 1 × 5%) = 6.5625; actual recovery is limited by missing Toughness.

The one-time recovery example assumes recipe recovery modifiers are already applied and the player is not knocked down. Actual synchronization and application order have not been verified in game.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_durability_a`, hash `6f8e5c73`, entry 7250: **Barrage I**.
- Description key `loc_talent_buff_toughness_on_stimm`, hash `75149821`, entry 7612.
- Description key `loc_talent_stat_toughness_replenish_modifier`, hash `805fdb71`, entry 8340; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_damage_taken_multiplier`, hash `9a749a67`, entry 9958; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
Replenish {toughness_amount:%s} Toughness.
{toughness_replenish_modifier:%s} Toughness Replenishment.
{damage_taken_multiplier:%s} Damage Reduction.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 1 → Roman numeral `I` | Raw name template: `Barrage {tier:%s}` → `Barrage I` |
| `toughness_amount` | `0.0625` | Percentage: `6.25%` |
| `toughness_replenish_modifier` | `0.05` | Percentage with `+`: `+5%` |
| `damage_taken_multiplier` | `0.96` | Custom `round(abs((value − 1) × 100))`, with `+`: `+4%` |

Display mapping `talent_settings_broker.lua` L650-L666 supplies the name tier, buff value and stat formats. Component keys/hashes reuse the accepted document; the stat JSONL entries omit keys. Reuse the [shared recipe generator L12-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L114) and accepted percentage formatting. Apply the custom Damage Reduction transform once. Components below follow definition order without claiming observed game layout.

Static reconstruction; not an observed game screen:

~~~text
Replenish 6.25% Toughness.
+5% Toughness Replenishment.
+4% Damage Reduction.
~~~

## English comparison

The independently read components describe Toughness recovery, Toughness Replenishment and Damage Reduction. Reconstructed 6.25%, +5% and +4% match the accepted buff/stat values; the Damage Reduction label correctly expresses the 0.96 Damage Taken multiplier. The maximum-Toughness basis, recovery bonuses/cap, first-update timing, knocked-down delay, field re-entry rule, stacking and cost supplement the labels. No clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_durability_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/883f2dd7-ad0d-4986-a5d0-32fa36a11e27). The icon identifies the talent; it is not mechanism evidence.
