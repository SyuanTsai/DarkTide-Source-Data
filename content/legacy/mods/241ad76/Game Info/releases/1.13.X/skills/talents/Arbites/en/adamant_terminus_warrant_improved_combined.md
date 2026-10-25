# Writ of Judgement: source evidence

[繁體中文](../adamant_terminus_warrant_improved_combined.md) | [Player description](README.md#adamant_terminus_warrant_improved_combined) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant_improved_combined)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_terminus_warrant_improved_combined`; node `node_9964320a-cf72-40d7-ad57-d4e5bc4a7345`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- Improved combined uses the Terminus upgrade special rule. Both weapon-wield consumption branches create the same upgrade stat buff when `current_stacks >= max_stacks`; the base `max_stacks` is 20.
- The upgrade buff has `max_stacks = 1` and `duration = 12`. Its stat buffs supply `melee_attack_speed = 0.10`, `ranged_attack_speed = 0.10` and `critical_strike_chance = 0.10`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2051-L2098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2051-L2098)
- [scripts/settings/talent/talent_settings_adamant.lua — L331-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1657-L1659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1657-L1659)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1689-L1691](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1689-L1691)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1733-L1750](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1733-L1750)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2051-L2098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2051-L2098)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2147-L2169](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2147-L2169)

## Example assumptions and limits

- **Trigger threshold**: You must hold at least a full 20 stacks when spending them to trigger Writ of Judgement. Switching with fewer stacks does not trigger it.

- **Bonuses and examples**: For 12s, gain +10% Melee Attack Speed, +10% Ranged Attack Speed and +10 percentage points of Critical Hit Chance. For example, 5% chance becomes 15%, and an action that normally takes 1s and supports speed scaling takes 1 ÷ 1.1 ≈ 0.91s. Retriggering refreshes the duration without increasing magnitude.

Spending 20 stacks activates the 12s bonuses: +10% Melee Attack Speed, +10% Ranged Attack Speed and +10 percentage points of Critical Hit Chance.

This buff can activate together with the Terminus core buffs. Final Attack Speed and Critical Hit results still depend on shared stats and weapon calculation. The examples isolate the stated bonuses and assume an action that supports speed scaling.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_bullet_rain_ability`, hash `e22c0cc7`, entry 14666: **Writ of Judgement**.
- Description key `loc_talent_adamant_terminus_warrant_improved_combined_desc`, hash `fadfe4d8`, entry 16287.

Full raw template:

```text
Spending {melee_stacks:%s} stacks grants {attack_speed:%s} Melee and Ranged Attack Speed as well as {crit_chance:%s} Critical Hit Chance for {duration:%s}s.
```

The display maps the four placeholders to `talent_settings.terminus_warrant` values below. The raw template uses the `melee_stacks` placeholder even though accepted trigger evidence includes both corresponding weapon branches. Additional mappings for `rending`, `crit_damage`, `weakspot_damage` and `ranged_stacks` are absent from this template and are not inserted into its reconstruction. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| melee_stacks | max_stacks = 20 | Number → 20 |
| attack_speed | melee_attack_speed = 0.10 | Percentage with + prefix → +10% |
| crit_chance | 0.10 | Percentage with + prefix → +10% |
| duration | upgrade_duration = 12 | Number → 12; template adds s |

Static reconstruction; not an observed game screen:

```text
Spending 20 stacks grants +10% Melee and Ranged Attack Speed as well as +10% Critical Hit Chance for 12s.
```

## English comparison limits

The independently read English matches the full 20-stack spending threshold, both Attack Speed bonuses, Critical Hit Chance value and 12s duration. Single-stack refresh, examples, interaction with core buffs and final stat calculation limits are supplementary. Unused format mappings are not extra effects in the reconstructed English. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_terminus_warrant_improved_combined.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/34f0ccb1-7c44-4aaf-a697-e0ef2b6f2c0e). The icon identifies the talent; it is not mechanism evidence.
