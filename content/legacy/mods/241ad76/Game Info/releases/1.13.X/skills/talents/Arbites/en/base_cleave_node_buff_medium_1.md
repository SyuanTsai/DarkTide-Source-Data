# Cleave Boost: source evidence

[繁體中文](../base_cleave_node_buff_medium_1.md) | [Player description](README.md#base_cleave_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_cleave_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_cleave_node_buff_medium_1`; name key `loc_talent_cleave_boost_medium`; description key `loc_talent_cleave_boost_medium_desc`. Node `node_4cb10022-552a-4499-84e1-b956aa007511`; category Stat node; one point.

## Source-confirmed behavior and static derivation

`player_cleave_node_buff_medium_1` grants `max_hit_mass_attack_modifier` and `max_hit_mass_impact_modifier`, each 0.25. `DamageProfile.max_hit_mass` applies the respective modifiers to the attack and impact hit-mass limits.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L930-L963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L930-L963)
- [scripts/utilities/attack/damage_profile.lua — L36-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L62)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L1013-L1036](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1013-L1036)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1097-L1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1097-L1126)

## Example assumptions and limits

- **Cleave example**: Isolating cleave capacity, an attack that could pass through 10 units of enemy mass becomes 10 × (1 + 25%) = 12.5 units.

- **Practical effect**: It becomes easier to hit several enemies with one sweep. The number hit still depends on enemy mass, armour and the weapon's own penetration limits; this is not a 25% damage increase.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cleave_boost_medium`, hash `5583cb92`, entry 5565: **Cleave Boost**.
- Description key `loc_talent_cleave_boost_medium_desc`, hash `88737f68`, entry 8850.

Full raw template:

```text
{cleave:%s} Cleave.
```

| Placeholder | Value | Formatting |
|---|---|---|
| cleave | Tier-aware player_cleave_node_buff_medium_1.stat_buffs.max_hit_mass_attack_modifier = 0.25 | Percentage, + prefix → +25% |

Static reconstruction; not an observed game screen:

```text
+25% Cleave.
```

## English comparison

The independently read English agrees with the 25% cleave-capacity bonus. Separate damage/stagger capacities, the mass example and practical target-count limits are supplementary details. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_cleave_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/d3fa1c73-0a49-42ab-920c-11b7238af849). The icon identifies the talent; it is not mechanism evidence.
