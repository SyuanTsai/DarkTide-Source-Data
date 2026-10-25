# Soulstealer: source evidence

[繁體中文](../psyker_toughness_on_warp_kill.md) | [Player description](README.md#psyker_toughness_on_warp_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_toughness_on_warp_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_toughness_on_warp_kill`; name key `loc_talent_psyker_toughness_on_warp_kill`; description key `loc_talent_psyker_toughness_on_warp_kill_desc`. Node `node_5cdd458f-bbfc-40a3-ac1f-4a229ddbbb6a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` uses `on_warp_kill` to check Warp Damage types and a death result, then calls `replenish_percentage(0.075, false)`. Restoration uses maximum Toughness, applies `toughness_replenish_modifier` and `toughness_replenish_multiplier`, and is finally limited by missing Toughness.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1435-L1448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1435-L1448)
- [scripts/settings/talent/talent_settings_psyker.lua — L199-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L199-L204)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L964-L979](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L964-L979)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L37-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L37-L62)

## Example assumptions and limits

- **Trigger:** Kill an enemy with a Warp Attack to restore 7.5% of maximum Toughness.

- **Restoration example:** At 100 maximum Toughness with no other restoration bonuses, each proc restores `100 × 7.5% = 7.5`. If current Toughness is 96, effective restoration is `100 − 96 = 4`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_toughness_on_warp_kill`, hash `f5eac803`, entry 15973: **Soulstealer**.
- Description key `loc_talent_psyker_toughness_on_warp_kill_desc`, hash `ffb1d758`, entry 16601.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness on Warp Attack Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.075 | Percentage: 7.5%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L969-L974 supplies `toughness` from `talent_settings_2.toughness_2.percent_toughness`. Accepted value and common percentage formatting are reused, retaining the decimal.

Static reconstruction; not an observed game screen:

~~~text
Replenish 7.5% Toughness on Warp Attack Kill.
~~~

## English comparison

The English explicitly requires a Warp Attack Kill and gives 7.5% Toughness, matching the accepted Warp-type/death check and base restoration value. It does not define the maximum-Toughness basis, other restoration modifiers or the deficit cap; these are supplements. No explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_toughness_on_warp_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/800b3bd1-a9a6-48ba-961c-66e12b256f37). The icon identifies the talent; it is not mechanism evidence.
