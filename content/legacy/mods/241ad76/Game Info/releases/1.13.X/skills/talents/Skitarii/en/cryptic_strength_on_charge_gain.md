# Sequenced Charge: source evidence

[繁體中文](../cryptic_strength_on_charge_gain.md) | [Player description](README.md#cryptic_strength_on_charge_gain) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_strength_on_charge_gain)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_strength_on_charge_gain`; name key `loc_talent_cryptic_strength_on_charge_gain`; description key `loc_talent_cryptic_strength_on_charge_gain_desc`. Node `node_2c6fb874-3909-4aca-a12c-3f1b362aff55`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

`on_combat_ability_charge_replenished` triggers a single ProcBuff, without multiplying stacks by `params.num_charges_gained`. It grants `power_level_modifier = 0.125` for an active duration of `10` seconds and permits refreshing that duration.

The `power_type_curve` result multiplies `PowerLevel.power_level_buff_modifier`; each power type then enters the template's output calculation.

## Fixed source evidence

- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L846-L880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L880)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1559-L1580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1559-L1580)
- [scripts/utilities/attack/power_level.lua — L25-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L89)
- [scripts/settings/talent/talent_settings_cryptic.lua — L635-L638](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L635-L638)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3516-L3530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3516-L3530)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2593-L2612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2593-L2612)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2398-L2427](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2398-L2427)

## Example assumptions and limits

- **Trigger**: Replenishing at least **1 full Capacitance charge** grants **12.5% Strength** for **10 seconds**. Adding only partial progress without completing a charge does not trigger it.
- **Refresh**: Gaining another full charge during the effect resets the **10-second** duration. Gaining multiple charges at once does not multiply the Strength bonus.
- **Power example**: Suppose an attack's power before the modifier is **500**. With this effect, `500 × 1.125 = 562.5`. With another **20%** modifier at the same stage, `500 × (1 + 20% + 12.5%) = 662.5`.
- **Scope**: Strength affects the power used in damage, Impact and Cleave calculations. Actual results still depend on the weapon and target; this does not mean every final damage result increases by 12.5%.

The example illustrates the power stage, rather than assuming a uniform increase to every final damage, Impact or Cleave result.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_strength_on_charge_gain`, hash `6e7cd3d3`, entry 7176: **Sequenced Charge**.
- Description key `loc_talent_cryptic_strength_on_charge_gain_desc`, hash `9e3a3df6`, entry 10210.

Full raw template:

~~~text
Gain {strength:%s} Strength on gaining a charge. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{strength:%s}` | `0.125` → `+12.5%` | Percentage; `+` prefix |
| `{duration:%s}` | `10` | Number; template adds `s` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2601-L2611) uses `power_level_modifier` and `active_duration`. The English term “Strength” denotes the verified power effect.

Static reconstruction; not an observed game screen:

~~~text
Gain +12.5% Strength on gaining a charge. Lasts 10s.
~~~

## English comparison

The English correctly describes a charge-gain trigger and a 12.5% Strength effect lasting 10 seconds. The full-charge threshold, duration refresh, single bonus for multiple charges, and power-stage meaning of Strength are supplementary details. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_strength_on_charge_gain.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/0a7a0b4b-9d65-4b36-9825-ed610ad0a3ae). The icon identifies the talent; it is not mechanism evidence.
