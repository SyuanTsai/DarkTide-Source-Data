# Quietude: source evidence

[繁體中文](../psyker_toughness_on_vent.md) | [Player description](README.md#psyker_toughness_on_vent) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_toughness_on_vent)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_toughness_on_vent`; name key `loc_talent_psyker_toughness_from_vent`; description key `loc_talent_psyker_toughness_from_vent_and_gen_desc`. Node `node_0866df78-dac3-46dc-9af6-30119a64acbe`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node applies both Generation and vent templates: the former handles negative `percentage_change` and the latter positive values. Restoration proportion is `abs(old − new) × 0.4`, rather than current Peril multiplied by 0.4. The `format_values` manipulation for displayed `toughness` is recorded separately from this execution formula.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1449-L1484](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1449-L1484)
- [scripts/settings/talent/talent_settings_psyker.lua — L202-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L202-L204)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L980-L1008](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L980-L1008)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L63-L89)

## Example assumptions and limits

- **How it works:** Both rising and falling Peril restore Toughness. Each ten-percentage-point change restores 4% of maximum Toughness, proportional to the actual change.

- **Restoration example:** At 100 maximum Toughness with no other restoration bonuses, increasing Peril from 40% to 60% restores `100 × 20% × 0.4 = 8`. Subsequently reducing it from 60% to 50% restores another `100 × 10% × 0.4 = 4`. Full Toughness cannot be overfilled.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_toughness_from_vent`, hash `742e490a`, entry 7551: **Quietude**.
- Description key `loc_talent_psyker_toughness_from_vent_and_gen_desc`, hash `50f8f0f2`, entry 5262.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness for each {warp_charge:%s} of Peril Quelled or Generated.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.4; custom manipulation gives 0.4 × 10 = 4 | Custom percentage output: 4%; this replaces the default ×100. |
| `warp_charge` | 0.1 | Default percentage output: 10%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L985-L997 supplies `toughness = talent_settings_2.toughness_3.multiplier` with `value_manipulation(value) = value * 10`, and `warp_charge = 0.1`. The necessary display constant is 0.4 in `scripts/settings/talent/talent_settings_psyker.lua` L202-L204. A minimal display-only read of [talent_layout_parser.lua L379-L404](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404) confirms that custom manipulation replaces the default percentage ×100; it does not run in addition to it. Thus the static text is 4% Toughness per 10% Peril change, matching the accepted execution formula. No mechanism chain was retraced.

Static reconstruction; not an observed game screen:

~~~text
Replenish 4% Toughness for each 10% of Peril Quelled or Generated.
~~~

## English comparison

The English explicitly covers both Quelled and Generated Peril and states 4% Toughness per 10% Peril change after the mapped display manipulation. This agrees with the accepted absolute-change formula. It does not make restoration a fraction of current Peril or require ten-point chunks before any restoration. The maximum-Toughness basis, proportional changes, template sign handling and deficit cap supplement the wording; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_toughness_on_vent.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/12e587e5-b69a-49cd-8d0f-a8280b832197). The icon identifies the talent; it is not mechanism evidence.
