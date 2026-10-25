# Target Priority: source evidence

[繁體中文](../adamant_increased_damage_to_high_health.md) | [Player description](README.md#adamant_increased_damage_to_high_health) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_increased_damage_to_high_health)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_increased_damage_to_high_health`; name key `loc_talent_adamant_increased_damage_to_high_health`; description key `loc_talent_adamant_increased_damage_to_high_health_desc`. Node `node_2eb48f41-2b1a-42ae-9f0c-e5c6210c9949`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`damage_vs_healthy = 0.15`. `DamageCalculation` checks `current_health_percent() > HEALTHY_MIN_PERCENTAGE`, with `HEALTHY_MIN_PERCENTAGE = 0.75`. There is no timed buff.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L35-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L35-L39)
- [scripts/utilities/attack/damage_calculation.lua — L387-L390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L387-L390)
- [scripts/settings/talent/talent_settings_adamant.lua — L396-L399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L396-L399)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2335-L2342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2335-L2342)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2646-L2664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2646-L2664)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2070-L2095](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2070-L2095)

## Example assumptions and limits

- **Condition**: If the target's remaining Health before the hit is above 75% of its maximum, that attack deals 15% more damage. Exactly 75% does not qualify.

- **Damage example**: With target maximum Health 1000 and current Health 800, base damage 100 becomes 100 × 1.15 = 115. At current Health 750, it remains 100. With an existing same-stage 25% bonus and the threshold met, 125 becomes 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_increased_damage_to_high_health`, hash `c8d87caa`, entry 12968: **Target Priority**.
- Description key `loc_talent_adamant_increased_damage_to_high_health_desc`, hash `c5936e7c`, entry 12751.

Full raw template:

```text
{damage:%s} Damage to Enemies above {health:%s} Health.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.increased_damage_to_high_health.damage = 0.15 | Percentage; no prefix configured → 15% |
| health | talent_settings.increased_damage_to_high_health.health = 0.75 | Percentage; no prefix configured → 75% |

Static reconstruction; not an observed game screen:

```text
15% Damage to Enemies above 75% Health.
```

## English comparison

The independently read English agrees with the 15% damage bonus and strict above-75%-Health threshold. Per-hit timing, absence of a timed buff, the exact boundary example and additive damage calculation are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_increased_damage_to_high_health.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/29a7dad3-3f9c-4679-a37d-680025796f47). The icon identifies the talent; it is not mechanism evidence.
