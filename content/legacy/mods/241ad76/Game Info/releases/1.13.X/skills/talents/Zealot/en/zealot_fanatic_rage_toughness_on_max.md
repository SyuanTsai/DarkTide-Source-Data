# Stalwart: source evidence

[繁體中文](../zealot_fanatic_rage_toughness_on_max.md) | [Player description](README.md#zealot_fanatic_rage_toughness_on_max) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_fanatic_rage_toughness_on_max)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_fanatic_rage_toughness_on_max`; name key `loc_talent_zealot_fanatic_rage_toughness`; description key `loc_talent_zealot_fanatic_rage_toughness_replenish_desc`. Node `node_e079e0d7-8d4b-45de-8e6b-5ed57f82c641`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This upgrade grants the `zealot_fanatic_rage_toughness` special rule. After Piety adds a stack and resource reaches 25, if `zealot_fanatic_rage_buff` is currently absent, immediately restore 0.5 of maximum Toughness by percentage. If the Fury Buff is already running, only its timer refreshes; this immediate restoration does not repeat.
- The Fury Buff's conditional Toughness damage multiplier is 0.75, reducing Toughness damage taken by 25%. Its condition explicitly requires talent resource `current_resource == max_resource`, both 25.
- Under the same full-stack condition, `update_func` restores `.02 × dt` of maximum Toughness, giving 2% per second. Damage events maintaining full stacks can sustain restoration; once resource falls below its cap, both the conditional damage modifier and periodic restoration stop applying.
- There is no additional cooldown. Immediate restoration occurs when the previously inactive Fury Buff is created; extra full-stack events refreshing Fury do not repeatedly restore 50%.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1139-L1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1139-L1177)
- [scripts/settings/talent/talent_settings_zealot.lua — L459-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L459-L468)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L774-L919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L774-L919)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L921-L978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L921-L978)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1330-L1353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1330-L1353)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_taken_calculation.lua — L223-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1139-L1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1139-L1177)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1330-L1353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1330-L1353)

## Example assumptions and limits

- **Activation**: Entering Fury restores 50% of maximum Toughness. Refreshing existing Fury does not grant another 50%.
- **Continuous effects**: While Fury's counter is at 25, gain 25% Toughness Damage Reduction and restore 2% of maximum Toughness per second. Both effects stop applying below full stacks.
- **Restoration and reduction example**: With maximum Toughness 100, activation restores at most 50. Maintaining full stacks for 8 seconds can restore another 100 × 2% × 8 = 16, limited by missing Toughness. An incoming 100 Toughness damage becomes 100 × 0.75 = 75.

- The static example assumes maximum Toughness 100 and no simultaneous damage. Toughness cap, damage taken and other restoration sources change actual results.
- Both languages describe one 50% restoration upon Fury activation. The accepted implementation additionally requires Fury to have been inactive and periodic effects to remain at full resource.
- The accepted Chinese comparison at hash `efdfa530` finds the direction of all three effects consistent. Refresh restrictions and maintaining 25 stacks are finer trigger limits; omitted details are not classified as translation errors. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_fanatic_rage_toughness`, hash `b8850d7c`, entry 11894: **Stalwart**.
- Description key `loc_talent_zealot_fanatic_rage_toughness_replenish_desc`, hash `efdfa530`, entry 15592.

Full raw template:

~~~text
Triggering Fury Replenishes {toughness:%s} Toughness. In addition, while Fury is Active, you have {toughness_damage_reduction:%s} Toughness Damage Reduction and replenish {toughness_small:%s} Toughness each second.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.5 → 50% | `percentage`; `talent_settings_3.passive_1.toughness_on_max_stacks` |
| `toughness_damage_reduction` | 0.75 → +25% | `percentage`, `+` prefix; `(1−0.75)×100` from the conditional Toughness damage multiplier |
| `toughness_small` | 0.02 → 2% | `percentage`; corresponding Toughness restoration per second |

The minimal display mapping at `zealot_talents.lua` L1139-L1173 uses the accepted values and reduction conversion. Its unused `talent_name` entry is not inserted.

Static reconstruction; not an observed game screen:

~~~text
Triggering Fury Replenishes 50% Toughness. In addition, while Fury is Active, you have +25% Toughness Damage Reduction and replenish 2% Toughness each second.
~~~

## English comparison

The English states 50% Toughness upon triggering Fury, +25% Toughness Damage Reduction and 2% Toughness restored each second during Fury. These amounts and effect directions agree with the accepted mechanisms. Existing-Fury refresh does not repeat the initial restoration, and continuous effects require resource to remain at 25; these finer conditions, maximum-Toughness basis and frame integration supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_fanatic_rage_toughness_on_max.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/0fd06e0a-ef14-4228-8cd5-02980c989f05). The icon identifies the talent; it is not mechanism evidence.
