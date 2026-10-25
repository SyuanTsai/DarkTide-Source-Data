# Shield Plates: source evidence

[繁體中文](../adamant_shield_plates.md) | [Player description](README.md#adamant_shield_plates) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_shield_plates)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_shield_plates`; name key `loc_talent_adamant_shield_plates`; description key `loc_talent_adamant_shield_plates_alt_desc`. Node `node_2c04a28e-bcad-4554-b738-37f89f37eee2`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_block` adds a 3s child buff with `max_stacks = 1` and refresh, recovering `0.15 × dt / 3` of maximum Toughness. `on_perfect_block` uses a custom `perfect_t`: only `t > perfect_t` immediately calls `replenish(0.1)`, then sets `perfect_t = t + 1`. The two recovery paths do not share that cooldown.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2480-L2497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2480-L2497)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/buff/buff_extension_base.lua — L433-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/talent/talent_settings_adamant.lua — L191-L196](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L191-L196)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2454-L2479](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2454-L2479)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1281-L1307](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1281-L1307)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1571-L1598](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1571-L1598)

## Example assumptions and limits

- **Recovery on Block**: Blocking an attack restores 15% of maximum Toughness over 3s. Another block resets the duration without increasing the recovery rate.

- **Perfect Block**: It also instantly restores 10% of maximum Toughness, with more than 1s required between these immediate recoveries. The continuous recovery is not limited by this cooldown.

- **Recovery example**: With maximum Toughness 100, sufficient missing Toughness and no other recovery bonuses, one Perfect Block triggering both effects restores 100 × 10% + 100 × 15% = 25 points: 10 immediately and 15 over 3s.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_shield_plates`, hash `3032bbe2`, entry 3134: **Shield Plates**.
- Description key `loc_talent_adamant_shield_plates_alt_desc`, hash `0ce5d555`, entry 835.

Full raw template:

```text
On Block, replenish {toughness:%s} Toughness over {duration:%s}s. On Perfect Block, instantly replenish {perfect_toughness:%s} Toughness. {cooldown:%s}s Cooldown.
```

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | talent_settings.shield_plates.toughness = 0.15 | Percentage; no prefix configured → 15% |
| perfect_toughness | talent_settings.shield_plates.perfect_toughness = 0.1 | Percentage; no prefix configured → 10% |
| duration | talent_settings.shield_plates.duration = 3 | Number → 3; template adds s |
| cooldown | talent_settings.shield_plates.icd = 1 | Number → 1; template adds s |

Static reconstruction; not an observed game screen:

```text
On Block, replenish 15% Toughness over 3s. On Perfect Block, instantly replenish 10% Toughness. 1s Cooldown.
```

## English comparison

The independently read English agrees with the two recovery triggers, 15% over 3s, instant 10% and 1s cooldown value. The continuous child cap/refresh, cooldown scope and strict time boundary, maximum-Toughness basis and combined example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_shield_plates.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/e51d3184-42e7-434f-8369-0ae7a6568619). The icon identifies the talent; it is not mechanism evidence.
