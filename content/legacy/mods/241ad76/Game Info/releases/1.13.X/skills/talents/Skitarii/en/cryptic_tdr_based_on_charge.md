# Residual Current Buffer: source evidence

[繁體中文](../cryptic_tdr_based_on_charge.md) | [Player description](README.md#cryptic_tdr_based_on_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_tdr_based_on_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_tdr_based_on_charge`; name key `loc_talent_cryptic_tdr_based_on_charge`; description key `loc_talent_cryptic_tdr_based_on_charge_base_desc`. Node `node_1a138503-24e5-4a0f-8a07-9b311df58558`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

`stat_buff_multiplier` returns `1 − 0.1 − 0.025 × remaining_ability_charges`, multiplying the base value of `1`. The base and charge-dependent reductions add within this talent; the resulting damage-taken multiplier multiplies other independent damage-taken multipliers.

## Fixed source evidence

- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1058-L1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/settings/talent/talent_settings_cryptic.lua — L599-L602](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L599-L602)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3207-L3227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3207-L3227)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2406-L2426](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2406-L2426)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2184-L2214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2184-L2214)

## Example assumptions and limits

- **Operation**: Always reduce incoming Toughness damage by **10%**. Each fully charged unit of Capacitance currently held adds **2.5%** reduction.
- **Reduction example**: With **3 charges**, `10% + 3 × 2.5% = 17.5%`. Incoming Toughness damage **100** becomes `100 × 0.825 = 82.5`. With a separate **20%** Toughness damage reduction, `82.5 × 0.8 = 66` damage remains.
- **Update condition**: Only fully charged units count. The effect updates when Capacitance is spent or a charge finishes recharging. With **0 charges**, the **10%** base reduction remains.

The example assumes the stated independent 20% reduction and no other modifiers. Partially recharged units do not contribute an extra 2.5%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_tdr_based_on_charge`, hash `f6f0d3f8`, entry 16032: **Residual Current Buffer**.
- Description key `loc_talent_cryptic_tdr_based_on_charge_base_desc`, hash `3b317052`, entry 3847.

Full raw template:

~~~text
Gain {tdr:%s} Toughness Damage Reduction, increased by {tdr_per_charge:%s} per Current Charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{tdr:%s}` | `0.1` → `+10%` | Percentage; `+` prefix |
| `{tdr_per_charge:%s}` | `0.025` → `+2.5%` | Percentage; `+` prefix |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2414-L2425) uses `toughness_damage_taken_multiplier_base` and `toughness_damage_taken_multiplier_per_charge` for the displayed reductions.

Static reconstruction; not an observed game screen:

~~~text
Gain +10% Toughness Damage Reduction, increased by +2.5% per Current Charge.
~~~

## English comparison

The English specifies the correct base reduction and increase per currently held charge. The fully charged threshold, addition within this talent, multiplication with independent reductions, and immediate updates when the count changes are supplementary details. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_tdr_based_on_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/f34040ff-ebd0-4f7e-b857-4557ccdee00c). The icon identifies the talent; it is not mechanism evidence.
