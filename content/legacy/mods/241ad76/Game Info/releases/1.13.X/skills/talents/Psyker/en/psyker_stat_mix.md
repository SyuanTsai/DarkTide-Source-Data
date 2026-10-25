# Warp Ghost: source evidence

[繁體中文](../psyker_stat_mix.md) | [Player description](README.md#psyker_stat_mix) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_stat_mix)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_stat_mix`; name key `loc_talent_psyker_stat_mix`; description key `loc_talent_psyker_stat_mix_desc`. Node `node_61959df9-adf1-45a9-9e2f-4d9e3c7f8e00`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `warp_charge_dissipation_multiplier = 0.2` multiplies only the coefficients for the low, high and critical bands. The lowest fallback band in `SharedFunctions.update` uses `default_threshold_decay_rate_modifier` without this buff's multiplier. The other values are `stamina_modifier = 2` and `toughness_replenish_modifier = 0.25`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1841-L1849](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1841-L1849)
- [scripts/settings/talent/talent_settings_psyker.lua — L119-L123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L119-L123)
- [scripts/utilities/warp_charge.lua — L220-L239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L220-L239)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L44-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L60)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2723-L2747](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2723-L2747)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2136-L2162](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2136-L2162)

## Example assumptions and limits

- **How it works**: Gain 2 Stamina and 25% Toughness restoration. Natural Peril decay is 80% slower in affected bands. Active Quelling does not use this slowdown multiplier.

- **Restoration example**: Without other bonuses, an original 10 Toughness restored becomes 10 × 1.25 = 12.5. With an existing 20% bonus of the same type, 10 × (1 + 20% + 25%) = 14.5.

- **Natural decay example**: Within the same eligible Peril band, an original decrease of 5 percentage points per second becomes 5 × 0.2 = 1 percentage point per second. With other conditions unchanged, decay across that same band takes approximately five times as long.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_stat_mix`, hash `126c6a5f`, entry 1191: **Warp Ghost**.
- Description key `loc_talent_psyker_stat_mix_desc`, hash `df89fc40`, entry 14498.

Full raw template:

~~~text
{peril_reduction:%s} Passive Quelling, {stamina:%s} Stamina, and {toughness_replenish:%s} Toughness Replenishment.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `peril_reduction` | 1 - 0.2 = 0.8 | Percentage ×100, with `-` prefix: -80%. |
| `stamina` | 2 | Number, with `+` prefix: +2. |
| `toughness_replenish` | 0.25 | Percentage ×100, with `+` prefix: +25%. |

Display mapping: [psyker_talents.lua L2726-L2742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2726-L2742). Values reuse the accepted Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
-80% Passive Quelling, +2 Stamina, and +25% Toughness Replenishment.
~~~

## English comparison

The displayed Stamina and Toughness restoration bonuses agree, as does the 80% reduction to natural Peril decay in affected bands. “Passive Quelling” distinguishes this from active Quelling. The band exception, additive restoration stage and rate-to-time conversion are supplementary; the English does not explicitly claim that every Peril band receives the modifier.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_stat_mix.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/57acd7a3-65a7-460c-876c-3153b63d69a3). The icon identifies the talent; it is not mechanism evidence.
