# Force of Will: source evidence

[繁體中文](../adamant_staggers_replenish_toughness.md) | [Player description](README.md#adamant_staggers_replenish_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_staggers_replenish_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_staggers_replenish_toughness`; name key `loc_talent_adamant_staggers_replenish_toughness`; description key `loc_talent_adamant_staggers_replenish_toughness_melee_desc`. Node `node_ff7e488d-67b2-4139-a794-6032177b6d56`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_hit` requires `on_staggering_hit AND on_melee_hit`; `target_number > 1` returns without recovery. Shared `on_staggering_hit` also accepts the `adamant_melee_weakspots_count_as_staggered` rule with a melee Weakspot Hit, without requiring an actual stagger result.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L543-L558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2306-L2323](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2306-L2323)
- [scripts/settings/talent/talent_settings_adamant.lua — L146-L148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L146-L148)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1072-L1086](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1072-L1086)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L557-L585](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L557-L585)

## Example assumptions and limits

- **Trigger**: A melee attack that Staggers its first hit target restores 7.5% of maximum Toughness. Hitting more enemies in the same attack does not increase the number of procs. With Concussive, qualifying melee Weakspot Hits can also trigger the recovery.

- **Recovery example**: At maximum Toughness 100 with no other recovery bonus, each proc restores 100 × 7.5% = 7.5 points. An attack hitting 3 enemies still restores at most 7.5 points, capped by the deficit.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_staggers_replenish_toughness`, hash `fb06b425`, entry 16301: **Force of Will**.
- Description key `loc_talent_adamant_staggers_replenish_toughness_melee_desc`, hash `050254b5`, entry 306.

Full raw template:

```text
Replenish {toughness:%s} Toughness on Staggering Melee Attack.
```

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | talent_settings.staggers_replenish_toughness.toughness = 0.075 | Percentage, no prefix → 7.5% |

Static reconstruction; not an observed game screen:

```text
Replenish 7.5% Toughness on Staggering Melee Attack.
```

## English comparison

The independently read English agrees with a Staggering Melee Attack trigger and 7.5% recovery. First-target gating, Concussive interaction, maximum-Toughness basis, recovery modifiers and deficit limits are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggers_replenish_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/898ad4c6-3f99-404d-8ff9-b15a9820f8e9). The icon identifies the talent; it is not mechanism evidence.
