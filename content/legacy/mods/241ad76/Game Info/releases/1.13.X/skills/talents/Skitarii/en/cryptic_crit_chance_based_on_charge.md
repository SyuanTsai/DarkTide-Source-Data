# Last Stand Relay: source evidence

[繁體中文](../cryptic_crit_chance_based_on_charge.md) | [Player description](README.md#cryptic_crit_chance_based_on_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_crit_chance_based_on_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_crit_chance_based_on_charge`; name key `loc_talent_cryptic_crit_chance_based_on_charge`; description key `loc_talent_cryptic_crit_chance_based_on_charge_zero_desc`. Node `node_4d6556fa-f80a-4e6d-9c7d-a217abe950ee`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The conditional effect adds `0.04` when `remaining_ability_charges <= 0`; the permanent `critical_strike_chance` is `0.06`. The example's 7.5% base chance comes from the archetype.

## Fixed source evidence

- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1058-L1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua — L14-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L14-L24)
- [scripts/settings/talent/talent_settings_cryptic.lua — L589-L593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L589-L593)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3156-L3175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3156-L3175)
- [scripts/utilities/attack/critical_strike.lua — L10-L38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L10-L38)
- [scripts/settings/archetype/archetypes/cryptic_archetype.lua — L25-L26](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L25-L26)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2357-L2381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2357-L2381)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L672-L701](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L672-L701)

## Example assumptions and limits

- **Effect**: Always gain **6 percentage points of Critical Hit Chance**. With less than one full charge currently held, gain another **4 percentage points**, for **10 percentage points in total**.
- **Example**: At an original 7.5% chance, having a full charge gives `7.5% + 6% = 13.5%`. With no full charge, it gives `7.5% + 6% + 4% = 17.5%`.
- **Changes**: A charge being restored still counts as zero full charges even at **90% progress**. Once it becomes full, the extra 4 percentage points disappear.

- The example uses the archetype's 7.5% base Critical Hit Chance, adding the stat bonuses as percentage points to reach 13.5% with a full charge or 17.5% with none.
- The condition uses the number of full charges. An incomplete charge at 90% progress remains zero full charges until completed.
- The percentage-point calculation and full-charge condition supplement the English. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_crit_chance_based_on_charge`, hash `54aa6f0e`, entry 5503: **Last Stand Relay**.
- Description key `loc_talent_cryptic_crit_chance_based_on_charge_zero_desc`, hash `dd636885`, entry 14365.

Full raw template:

~~~text
Gain {crit_chance_low:%s} Crit Chance, increased to {crit_chance_high:%s} when at {low_charges:%s} charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `crit_chance_low` | +6% | `percentage`, prefix `+`: verified `talent_settings.cryptic_crit_chance_based_on_charge.critical_strike_chance = 0.06` |
| `crit_chance_high` | +10% | `percentage`, prefix `+`: verified base `0.06` + `extra_critical_strike_chance = 0.04` |
| `low_charges` | 0 | `number`: zero-full-charge condition, `talent_settings.cryptic_crit_chance_based_on_charge.low_charges` |

The display mappings in `cryptic_talents.lua` L2365–L2380 use the already verified base-plus-extra chance and zero-charge condition.

Static reconstruction; not an observed game screen:

~~~text
Gain +6% Crit Chance, increased to +10% when at 0 charges.
~~~

## English comparison

The English +6% Crit Chance, increased to +10% at zero charges, matches the permanent 0.06 plus conditional 0.04. It correctly describes 10% as the total talent bonus in that condition, not an extra 10%. The percentage-point addition, full-charge counting, partial-progress transition and original examples are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_crit_chance_based_on_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/5e8556aa-e9d9-4400-a863-bb26a5f11e17). The icon identifies the talent; it is not mechanism evidence.
