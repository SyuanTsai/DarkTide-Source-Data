# Efficient Killer: source evidence

[繁體中文](../adamant_execution_order_crit.md) | [Player description](README.md#adamant_execution_order_crit) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_execution_order_crit)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_execution_order_crit`; node `node_e686dc62-a877-4eef-8a96-52743b1c0fcd`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- When the Marked target dies, `_execution_order_proc` checks this upgrade's special rule and creates `adamant_execution_order_crit` if selected. The effect has max stacks = 1 and lasts 8s. It supplies `critical_strike_chance = 0.10` and `critical_strike_damage = 0.25`; repeated triggers refresh the duration.
- `CriticalStrike.chance` adds `critical_strike_chance` to class base and weapon bonus chance, then clamps the result to 0..1. Shared damage calculation reads `critical_strike_damage`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2166-L2190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2166-L2190)
- [scripts/settings/talent/talent_settings_adamant.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L958-L966](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L966)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1123-L1136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1123-L1136)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/utilities/attack/damage_calculation.lua — L251-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L251-L258)
- [scripts/utilities/attack/damage_calculation.lua — L675-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L675-L782)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2166-L2190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2166-L2190)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1727-L1751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1727-L1751)

## Example assumptions and limits

- **Trigger and duration**: Killing a Marked enemy triggers the effect for 8s. Retriggering refreshes the duration.

- **Critical Hit Chance**: Adds 10 percentage points; for example, 5% becomes 15%.

- **Critical Hit Damage examples**: The +25% bonus affects the additional critical damage. If a normal hit deals 100 and a critical hit deals 150, the result is 100 + (150 − 100) × 1.25 = 162.5, about an 8.33% increase to the whole critical hit. If another weapon instead deals 200 on a critical hit, the result is 225, a 12.5% increase. Actual gains vary with the weapon and armor.

At a base Critical Hit Chance of 5%, this talent alone adds 10 percentage points, giving 15%. The final chance still includes weapon bonuses and a 100% cap.

The damage examples isolate this modifier and keep the normal-hit component unchanged. Final critical damage remains subject to melee/ranged-specific modifiers, weapon, armor and damage formulas.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_exterminator_toughness`, hash `4bda8fe5`, entry 4931: **Efficient Killer**.
- Description key `loc_talent_execution_order_crit_description`, hash `2b42cf3a`, entry 2803. The `[Writer]` suffix is resource metadata.

Full raw template:

```text
Gain {crit_chance:%s} Critical Hit Chance and {crit_damage:%s} Critical Hit Damage on Marked Kill. Lasts {time:%s}s.
```

The display maps `crit_chance`, `crit_damage` and `time` to the corresponding `talent_settings.execution_order` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| crit_chance | 0.10 | Percentage with + prefix → +10% |
| crit_damage | 0.25 | Percentage with + prefix → +25% |
| time | 8 | Number → 8; template adds s |

Static reconstruction; not an observed game screen:

```text
Gain +10% Critical Hit Chance and +25% Critical Hit Damage on Marked Kill. Lasts 8s.
```

## English comparison limits

The independently read English matches the Marked Kill trigger, Critical Hit Chance and Critical Hit Damage values, and 8s duration. Refresh behavior, the one-stack limit, percentage bases, examples and final calculation limits are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_crit.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/5c90d0a5-8150-4c04-84cf-9b0ae1d6e28f). The icon identifies the talent; it is not mechanism evidence.
