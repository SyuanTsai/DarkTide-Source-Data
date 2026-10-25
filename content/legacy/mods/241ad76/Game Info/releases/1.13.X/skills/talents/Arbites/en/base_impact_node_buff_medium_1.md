# Impact Boost: source evidence

[繁體中文](../base_impact_node_buff_medium_1.md) | [Player description](README.md#base_impact_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_impact_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_impact_node_buff_medium_1`; name key `loc_talent_impact_boost_medium`; description key `loc_talent_impact_boost_medium_desc`. Node `node_da43a66a-4f23-41fb-8257-6cf06d157433`; category Stat node; one point.

## Source-confirmed behavior and static derivation

`impact_modifier = 0.25` is incorporated into stagger strength by `StaggerCalculation`. The actual stagger type also depends on the enemy type's resistances and thresholds.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L901-L929](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L901-L929)
- [scripts/utilities/attack/stagger_calculation.lua — L67-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L180)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L204)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L989-L1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L989-L1012)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1127-L1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1127-L1156)

## Example assumptions and limits

- **Impact example**: Isolating the impact multiplier, 100 units of stagger strength becomes 100 × (1 + 25%) = 125 units.

- **Scope**: This affects whether the attack reaches an enemy's stagger threshold. It is not a health-damage bonus and does not guarantee a stronger stagger against every enemy.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_impact_boost_medium`, hash `007795f8`, entry 30: **Impact Boost**.
- Description key `loc_talent_impact_boost_medium_desc`, hash `f61917fa`, entry 15979.

Full raw template:

```text
{impact:%s} Impact.
```

| Placeholder | Value | Formatting |
|---|---|---|
| impact | Tier-aware player_impact_node_buff_medium_1.stat_buffs.impact_modifier = 0.25 | Percentage, + prefix → +25% |

Static reconstruction; not an observed game screen:

```text
+25% Impact.
```

## English comparison

The independently read English agrees with the 25% Impact bonus. The stagger-strength calculation, enemy thresholds, health-damage distinction and example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_impact_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/e8b31492-509e-479a-9369-203e36e1e1e4). The icon identifies the talent; it is not mechanism evidence.
