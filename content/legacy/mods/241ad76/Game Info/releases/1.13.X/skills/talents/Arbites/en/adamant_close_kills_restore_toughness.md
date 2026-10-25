# Up Close: source evidence

[繁體中文](../adamant_close_kills_restore_toughness.md) | [Player description](README.md#adamant_close_kills_restore_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_close_kills_restore_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_close_kills_restore_toughness`; name key `loc_talent_adamant_close_kills_restore_toughness`; description key `loc_talent_adamant_close_kills_restore_toughness_desc`. Node `node_efb7ef59-9432-462f-b551-91a5e93f0789`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_kill` uses `on_close_kill`: `attack_result = died`, with squared distance from the hit position to `attacking_unit` <= `DamageSettings.ranged_close_squared`. `CLOSE_RANGE = 12.5`; there is no `attack_type` restriction. The event is still a kill attributed to the player.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L298-L304](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L298-L304)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/settings/damage/damage_settings.lua — L18-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2292-L2305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2292-L2305)
- [scripts/settings/talent/talent_settings_adamant.lua — L143-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L143-L145)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1057-L1071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1057-L1071)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L522-L556](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L522-L556)

## Example assumptions and limits

- **Trigger**: Killing an enemy within 12.5m of yourself restores 5% of maximum Toughness. Both melee and ranged kills qualify.

- **Recovery example**: At maximum Toughness 100 with no other recovery bonus, each kill restores 100 × 5% = 5 points. If current Toughness is 98, only 2 points can be restored.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_close_kills_restore_toughness`, hash `a1741ac3`, entry 10428: **Up Close**.
- Description key `loc_talent_adamant_close_kills_restore_toughness_desc`, hash `550ce63d`, entry 5531.

Full raw template:

```text
Replenish {toughness:%s} Toughness on Close Kill.
```

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | talent_settings.close_kills_restore_toughness.toughness = 0.05 | Percentage, no prefix → 5% |

Static reconstruction; not an observed game screen:

```text
Replenish 5% Toughness on Close Kill.
```

## English comparison

The independently read English agrees with the close-kill trigger and 5% recovery. The exact 12.5m distance, melee/ranged scope, maximum-Toughness basis, recovery modifiers and deficit cap are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_close_kills_restore_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/3098a511-fa0f-444e-a9e2-8e6591688115). The icon identifies the talent; it is not mechanism evidence.
