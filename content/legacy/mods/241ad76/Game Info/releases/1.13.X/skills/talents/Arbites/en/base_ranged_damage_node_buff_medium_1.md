# Ranged Damage Boost: source evidence

[繁體中文](../base_ranged_damage_node_buff_medium_1.md) | [Player description](README.md#base_ranged_damage_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_ranged_damage_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_ranged_damage_node_buff_medium_1`; name key `loc_talent_ranged_damage_medium`; description key `loc_talent_ranged_damage_medium_desc`. Node `node_a40126d6-c985-42b7-bffb-7234639e6704`; category Stat node; one point.

## Source-confirmed behavior and static derivation

The current node uses tier 1, with `ranged_damage = 0.1`. `DamageCalculation` selects the bonus by attack type and adds it to the general damage-stat stage.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L1129-L1157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L1129-L1157)
- [scripts/utilities/attack/damage_calculation.lua — L295-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L1637-L1660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1637-L1660)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L806-L832](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L806-L832)

## Example assumptions and limits

- **Damage example**: With no other bonus, base ranged damage 100 becomes 100 × (1 + 10%) = 110. With an existing same-stage 25% bonus, 125 becomes 100 × (1 + 25% + 10%) = 135.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ranged_damage_medium`, hash `4530d417`, entry 4485: **Ranged Damage Boost**.
- Description key `loc_talent_ranged_damage_medium_desc`, hash `d752c671`, entry 13941.

Full raw template:

```text
{ranged_damage:%s} Ranged Damage.
```

| Placeholder | Value | Formatting |
|---|---|---|
| ranged_damage | Tier-aware buff-template lookup: player_ranged_damage_node_buff_medium_1 → stat_buffs.ranged_damage, tier 1 = 0.1 | Percentage, prefix + → +10% |

Static reconstruction; not an observed game screen:

```text
+10% Ranged Damage.
```

## English comparison

The independently read English agrees with +10% Ranged Damage for this tier-1 node. Same-stage addition and worked examples supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_ranged_damage_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/62b0bee6-3606-40bc-9d78-06f072535e59). The icon identifies the talent; it is not mechanism evidence.
