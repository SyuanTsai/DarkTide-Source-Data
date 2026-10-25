# Wildfire II: source evidence

[繁體中文](../broker_stimm_combat_2.md) | [Player description](README.md#broker_stimm_combat_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_combat_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_combat_2`; name key `loc_talent_broker_stimm_combat_a`; description key `loc_talent_stat_power_level`. Node `node_34ccae82-45bf-499e-99ba-93ed864f14c5`; category Stimm recipe; 2 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `power_level_modifier = 0.04`. `PowerLevel` calculates Power before applying weapon curves; this cannot be treated as a fixed 4% increase to every final damage result.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/settings/talent/talent_settings_broker.lua — L586-L590](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L586-L590)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L88-L112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L88-L112)

## Example assumptions and limits

- **Recipe cost**: 2 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives two Power nodes: 500 × (1 + 2 × 4%) = 540.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_combat_a`, hash `fe5e6f12`, entry 16516: **Wildfire II**.
- Description key `loc_talent_stat_power_level`, hash `f8a49d31`, entry 16147; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{power_level:%s} Strength.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 2 → Roman numeral `II` | Raw name template: `Wildfire {tier:%s}` → `Wildfire II` |
| `power_level` | `power_level_modifier = 0.04` | Percentage with `+`: `+4%` |

The component key comes from the accepted document, paired to the same-build English entry by hash; its JSONL entry has no key field. Display mapping `talent_settings_broker.lua` L586-L590 supplies 0.04. Reuse the [shared recipe display generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted percentage formatting. The raw English stat label is Strength; the player explanation retains the verified Power meaning.

Static reconstruction; not an observed game screen:

~~~text
+4% Strength.
~~~

## English comparison

The independently read English labels this statistic Strength, with +4% reconstructed from the accepted Power modifier. That stat label does not claim a fixed 4% final Damage increase. It agrees with the mapped Power statistic and value. Recipe cost, duration, additive stacking and the subsequent weapon curves supplement the description; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_combat_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/e53e3328-a026-4e3c-8e91-c63cd69522c6). The icon identifies the talent; it is not mechanism evidence.
