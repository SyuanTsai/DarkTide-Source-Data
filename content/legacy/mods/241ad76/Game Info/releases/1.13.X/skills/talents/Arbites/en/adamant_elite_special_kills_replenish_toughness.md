# Target Neutralised: source evidence

[繁體中文](../adamant_elite_special_kills_replenish_toughness.md) | [Player description](README.md#adamant_elite_special_kills_replenish_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_elite_special_kills_replenish_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_elite_special_kills_replenish_toughness`; name key `loc_talent_adamant_elite_special_kills_replenish_toughness`; description key `loc_talent_adamant_elite_special_kills_replenish_toughness_desc`. Node `node_3541dea3-3eba-4635-a80b-9dd635c02298`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_kill`, filtered through `on_elite_or_special_kill`, immediately calls `replenish_percentage(0.1, false)` and adds a 4s `adamant_toughness_on_elite_kill_effect`. The child buff has no `max_stacks` limit, so multiple instances can exist with independent timers; each replenishes `0.025 × dt` per update.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2257-L2291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2257-L2291)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/buff/buffs/buff.lua — L23-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L23-L83)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2257-L2271](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2257-L2271)
- [scripts/settings/talent/talent_settings_adamant.lua — L138-L142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L138-L142)
- [scripts/extension_systems/buff/buff_extension_base.lua — L433-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1034-L1056](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1034-L1056)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L493-L521](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L493-L521)

## Example assumptions and limits

- **Recovery**: Killing an Elite or Specialist instantly restores 10% of maximum Toughness, then restores another 2.5% per second for 4s. Consecutive kills each provide an independently timed recovery effect.

- **Recovery example**: At maximum Toughness 100, with sufficient deficit and no other recovery bonus, one kill restores 100 × 10% + 100 × 2.5% × 4 = 20 points in total. While two kills' continuous effects overlap, recovery totals 5 points per second; actual restoration cannot exceed the deficit.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_elite_special_kills_replenish_toughness`, hash `e8d1b55a`, entry 15116: **Target Neutralised**.
- Description key `loc_talent_adamant_elite_special_kills_replenish_toughness_desc`, hash `2ec3a4dd`, entry 3046.

Full raw template:

```text
Replenish {instant_toughness:%s} Toughness instantly, and {toughness:%s} Toughness over {duration:%s}s, on Elite or Specialist Kill.
```

| Placeholder | Value | Formatting |
|---|---|---|
| instant_toughness | talent_settings.elite_special_kills_replenish_toughness.instant_toughness = 0.1 | Percentage, no prefix → 10% |
| toughness | toughness × duration = 0.025 × 4 = 0.1 | Percentage, no prefix → 10% |
| duration | talent_settings.elite_special_kills_replenish_toughness.duration = 4 | Number → 4; template adds s |

Static reconstruction; not an observed game screen:

```text
Replenish 10% Toughness instantly, and 10% Toughness over 4s, on Elite or Specialist Kill.
```

## English comparison

The independently read English agrees with the qualifying kill, instant 10% recovery and another 10% over 4s. Maximum-Toughness basis, deficit limits, modifiers and independent overlapping instances are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_elite_special_kills_replenish_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/fc3f3a29-7b71-45d4-aec6-c72036ba9831). The icon identifies the talent; it is not mechanism evidence.
