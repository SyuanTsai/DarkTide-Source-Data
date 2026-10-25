# Plasteel Plates: source evidence

[繁體中文](../adamant_plasteel_plates.md) | [Player description](README.md#adamant_plasteel_plates) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_plasteel_plates)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_plasteel_plates`; name key `loc_talent_adamant_plasteel_plates`; description key `loc_talent_adamant_plasteel_plates_desc`. Node `node_49bbfafc-233f-4a23-9a72-0412b4fcf719`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

Persistent `stat_buffs.toughness = 25`. The `max_toughness` calculation adds `toughness` to `_max_toughness`, applies `toughness_bonus`, rounds upward with `math.ceil`, then adds `toughness_bonus_flat`. This is not a proc that instantly restores 25 points.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L79-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)
- [scripts/settings/talent/talent_settings_adamant.lua — L170-L172](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L170-L172)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2364-L2370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2364-L2370)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1165-L1180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1165-L1180)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1348-L1378](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1348-L1378)

## Example assumptions and limits

- **Effect and example**: Increase maximum Toughness by 25 points. An original 100 points, with no percentage modifier, becomes 100 + 25 = 125.

- **Bonus order**: Add these 25 points to base Toughness before applying percentage bonuses to maximum Toughness. With another 20% maximum-Toughness bonus, the result is (100 + 25) × 1.2 = 150 points.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_plasteel_plates`, hash `ef3c0c4a`, entry 15558: **Plasteel Plates**.
- Description key `loc_talent_adamant_plasteel_plates_desc`, hash `a25db61a`, entry 10490.

Full raw template:

```text
{toughness:%s} Toughness.
```

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | talent_settings.plasteel_plates.toughness = 25 | Number, prefix + → +25 |

Static reconstruction; not an observed game screen:

```text
+25 Toughness.
```

## English comparison

The independently read English agrees with a flat +25 Toughness stat. Its maximum-stat basis, addition before percentage scaling, ceiling rounding and subsequent flat bonus are supplementary details. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_plasteel_plates.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/170599ce-ad50-4760-93b2-da650c6deac8). The icon identifies the talent; it is not mechanism evidence.
