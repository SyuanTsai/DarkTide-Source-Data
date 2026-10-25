# Retribution Conduit: source evidence

[繁體中文](../cryptic_damage_vs_electrocuted_scaling_on_charge.md) | [Player description](README.md#cryptic_damage_vs_electrocuted_scaling_on_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_damage_vs_electrocuted_scaling_on_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_damage_vs_electrocuted_scaling_on_charge`; name key `loc_talent_cryptic_damage_vs_electrocuted_based_on_charge`; description key `loc_talent_cryptic_damage_vs_electrocuted_scaling_on_charge_desc`. Node `node_e58ba04c-1e81-4f25-bea9-38a0ee1e62f5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `remaining_ability_charges` reads integer `num_charges`. The `stat_buff_multipliers` function returns `0.1 + 0.05n`, multiplied by a base stat of 1. `damage_vs_electrocuted` adds to other damage stats in the common damage calculation.

## Fixed source evidence

- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1058-L1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/utilities/attack/damage_calculation.lua — L350-L360](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L350-L360)
- [scripts/settings/talent/talent_settings_cryptic.lua — L657-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L657-L660)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3665-L3684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3665-L3684)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2676-L2696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2676-L2696)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L584-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L584-L614)

## Example assumptions and limits

- **Effect**: Deal **10% increased damage to Electrocuted enemies**, plus **5% for each full charge currently held**. An incomplete charge does not count.
- **Example**: With 3 full charges, the bonus is `10% + 3 × 5% = 25%`, turning 100 base damage into 125. With another same-stage 20% bonus, `100 × (1 + 20% + 25%) = 145`.
- **Changes**: After a charge is spent, the bonus recalculates from the remaining full charges. Once the target's Electrocution ends, this bonus against Electrocuted targets no longer applies.

- The example assumes 3 full charges and base damage 100: the 25% bonus gives 125, or 145 with another same-stage 20% bonus.
- Charge count is the integer number of full remaining charges. Partial progress does not count, and spending charges changes the bonus.
- The full-charge basis and additive calculation supplement the English's current-charge wording. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_damage_vs_electrocuted_based_on_charge`, hash `d9d4b1f5`, entry 14121: **Retribution Conduit**.
- Description key `loc_talent_cryptic_damage_vs_electrocuted_scaling_on_charge_desc`, hash `232897f8`, entry 2291.

Full raw template:

~~~text
Gain {damage:%s} Damage vs Electrocuted, increased by {more_damage:%s} per current charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | +10% | `percentage`, prefix `+`: verified `talent_settings.cryptic_damage_vs_electrocuted_scaling_on_charge.base_damage_vs_electrocuted = 0.1` |
| `more_damage` | +5% | `percentage`, prefix `+`: verified `talent_settings.cryptic_damage_vs_electrocuted_scaling_on_charge.damage_per_charge = 0.05` |

The display mappings in `cryptic_talents.lua` L2684–L2695 use the already verified base and per-charge damage values.

Static reconstruction; not an observed game screen:

~~~text
Gain +10% Damage vs Electrocuted, increased by +5% per current charge.
~~~

## English comparison

The English correctly limits the damage bonus to Electrocuted targets and states the base +10% and extra +5% per current charge. It does not define full versus partial charges or how same-stage damage bonuses combine. Those calculation details and the preserved examples are supplements; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_damage_vs_electrocuted_scaling_on_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/eb093286-7cce-40e8-b518-3b5bc16dd38d). The icon identifies the talent; it is not mechanism evidence.
