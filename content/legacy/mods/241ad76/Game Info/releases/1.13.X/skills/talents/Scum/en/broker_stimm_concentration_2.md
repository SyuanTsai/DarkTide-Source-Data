# Kalma II: source evidence

[繁體中文](../broker_stimm_concentration_2.md) | [Player description](README.md#broker_stimm_concentration_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_concentration_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_concentration_2`; name key `loc_talent_broker_stimm_concentration_a`; description key `loc_talent_stat_combat_ability_cooldown_regen_modifier`. Node `node_d2c5c6af-dc71-4f44-98de-be00ba3457b5`; category Stimm recipe; 2 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `combat_ability_resource_regen_modifier = 0.0625` is an `additive_multiplier` stat. With prerequisite nodes, the multiplier is 1.125. The ability extension calculates `(base_regen + flat_regen) × modifier`; the base is 0 while regeneration is paused.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L825-L864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L864)
- [scripts/settings/buff/buff_settings.lua — L742-L742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L742)
- [scripts/settings/talent/talent_settings_broker.lua — L738-L742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L738-L742)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L289-L313](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L289-L313)

## Example assumptions and limits

- **Recipe cost**: 2 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Regeneration rate**: Natural Combat Ability Regeneration gains 6.25%; prerequisite bonuses remain active and add at the same stage.

- **Ongoing regeneration example**: Selecting Kalma I through this node gives a total 12.5% bonus. A base recovery of 1 second of cooldown per second becomes 1.125 seconds per second, recovering 15 × 1.125 = 16.875 seconds over the 15-second Stimm effect.

- **Remaining-time example**: With 60 seconds remaining and normal ability regeneration active, 43.125 seconds remain after the 15-second Stimm: 60 − 16.875 = 43.125. Recovery then returns to its original rate.

- **While paused**: If natural Combat Ability Regeneration is paused by a state or a field that has not yet ended, this speed bonus does not start the countdown on its own.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_concentration_a`, hash `eab26b4f`, entry 15246: **Kalma II**.
- Description key `loc_talent_stat_combat_ability_cooldown_regen_modifier`, hash `04d3484f`, entry 291; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{combat_ability_cooldown_regen_modifier:%s} Cooldown Regeneration.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 2 → Roman numeral `II` | Raw name template: `Kalma {tier:%s}` → `Kalma II` |
| `combat_ability_cooldown_regen_modifier` | `combat_ability_resource_regen_modifier = 0.0625` | Percentage with `+`: `+6.25%` |

Display mapping `talent_settings_broker.lua` L738-L742 supplies the name tier and value. The description key/hash reuse the accepted cooldown/resource stat mapping; the JSONL entry omits its key. Reuse the [shared recipe generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
+6.25% Cooldown Regeneration.
~~~

## English comparison

The independently read English describes Cooldown Regeneration, reconstructed as +6.25%. This matches the accepted Combat Ability resource-regeneration stat and expresses a regeneration-rate bonus. It does not state an instant cooldown refund or permanently reduced cooldown duration. Additive prerequisites, the base/flat formula, paused-base behavior, recipe cost and duration supplement the label; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_concentration_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/8401a77b-6cc2-4b03-a0de-dd67296d008d). The icon identifies the talent; it is not mechanism evidence.
