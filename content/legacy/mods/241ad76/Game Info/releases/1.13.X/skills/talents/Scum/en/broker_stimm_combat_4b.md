# Fury I: source evidence

[繁體中文](../broker_stimm_combat_4b.md) | [Player description](README.md#broker_stimm_combat_4b) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_combat_4b)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_combat_4b`; name key `loc_talent_broker_stimm_combat_b`; description key `loc_talent_stat_power_level / loc_talent_stat_rending_multiplier`. Node `node_8eaa3a96-6b14-4511-ab1a-5dcecc1f666d`; category Stimm recipe; 4 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- `power_level_modifier = 0.04`. `PowerLevel` calculates Power before applying weapon curves; this cannot be treated as a fixed 4% increase to every final damage result.
- `rending_multiplier` increases the effective armour modifier when it is below 1. Crossing 1 and special profiles follow separate Rending rules; the example is limited to values that do not cross 1.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_calculation.lua — L69-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L109)
- [scripts/settings/talent/talent_settings_broker.lua — L614-L622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L614-L622)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L140-L165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L140-L165)

## Example assumptions and limits

- **Recipe cost**: 4 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Power**: Gain 4%, additive with prerequisite recipes and other Power bonuses at the same stage. Power then contributes to weapon Damage, Stagger and Cleave calculations.

- **Power example**: With this node alone, 500 × (1 + 4%) = 520. Selecting from Wildfire I through this tier gives four Power nodes: 500 × (1 + 4 × 4%) = 580.

- **Rending**: Gain 5% Rending; Fury I and II together give 15%.

- **Armour example**: With other conditions fixed, 100 Damage before armour and an original armour modifier of 0.5 give 100 × (0.5 + 0.05) = 55 with this node alone. Both Fury nodes together give 100 × (0.5 + 0.15) = 65.

`syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_combat_b`, hash `ea57fba3`, entry 15218: **Fury I**.
- Description key `loc_talent_stat_power_level`, hash `f8a49d31`, entry 16147; key supplied by the accepted source mapping, paired by hash.
- Description key `loc_talent_stat_rending_multiplier`, hash `0dd2df4e`, entry 910; key supplied by the accepted source mapping, paired by hash.

Full raw template:

~~~text
{power_level:%s} Strength.
{rending_multiplier:%s} Rending.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | Tier 1 → Roman numeral `I` | Raw name template: `Fury {tier:%s}` → `Fury I` |
| `power_level` | `power_level_modifier = 0.04` | Percentage with `+`: `+4%` |
| `rending_multiplier` | `0.05` | Percentage with `+`: `+5%` |

The component keys come from the accepted document, paired to the same-build English entries by hash; these JSONL entries have no key fields. Display mapping `talent_settings_broker.lua` L614-L622 supplies the name tier and stat values. Reuse the [shared recipe display generator L12-L53](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L12-L53) and accepted percentage formatting. Components below preserve definition order without claiming observed game layout.

Static reconstruction; not an observed game screen:

~~~text
+4% Strength.
+5% Rending.
~~~

## English comparison

The independently read English names Strength and Rending, reconstructed as +4% and +5%. Both match the accepted stat mappings and values. Rending does not state a universal final Damage multiplier; the armour-modifier rules supplement it. Recipe cost, duration, Power stacking and weapon curves are also supplementary details; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_combat_4b.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/1db9427d-9c25-4096-898f-57089a300fce). The icon identifies the talent; it is not mechanism evidence.
