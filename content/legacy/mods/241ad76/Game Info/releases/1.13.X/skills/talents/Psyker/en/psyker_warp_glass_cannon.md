# Empyric Resolve: source evidence

[繁體中文](../psyker_warp_glass_cannon.md) | [Player description](README.md#psyker_warp_glass_cannon) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_warp_glass_cannon)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_warp_glass_cannon`; name key `loc_talent_psyker_warp_glass_cannon`; description key `loc_talent_psyker_warp_glass_cannon_desc`. Node `node_42b4a214-4619-4b7a-9a92-b17b8ed1f10f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `warp_charge_amount = 0.6` and `toughness_replenish_multiplier = 0.7` are both multiplicative. `recover_percentage_toughness` applies the restoration modifier only when `ignore_stat_buffs = false`. Effects that set Toughness directly cannot automatically be assumed to use it.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3357-L3364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3357-L3364)
- [scripts/settings/talent/talent_settings_psyker.lua — L60-L63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L60-L63)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2389-L2430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2389-L2430)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2109-L2135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2109-L2135)

## Example assumptions and limits

- **How it works**: Peril generation decreases by 40%, while Toughness restoration affected by this modifier also decreases by 30%.

- **Peril example**: An attack that originally generates 20 percentage points of Peril generates 20 × 0.6 = 12. With another independent 10% Peril reduction, 20 × 0.6 × 0.9 = 10.8 percentage points.

- **Restoration example**: An original 10 Toughness restored becomes 10 × 0.7 = 7. With another 25% restoration bonus, 10 × 1.25 × 0.7 = 8.75, still limited by maximum Toughness.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_warp_glass_cannon`, hash `81e0c6d7`, entry 8436: **Empyric Resolve**.
- Description key `loc_talent_psyker_warp_glass_cannon_desc`, hash `3e435c7d`, entry 4059.

Full raw template:

~~~text
{peril_reduction:%s} Peril Generation. {toughness_reduction:%s} Toughness Replenished.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `peril_reduction` | 0.6 | `(1 - value) × 100`, with `-` prefix: -40%. |
| `toughness_reduction` | 0.7 | `(1 - math.abs(value)) × 100`, with `-` prefix: -30%. |

Display mapping: [psyker_talents.lua L2394-L2425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2394-L2425). Values and shared formatter behavior reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
-40% Peril Generation. -30% Toughness Replenished.
~~~

## English comparison

The two reductions agree with their accepted multiplicative values. The English does not specify how other modifiers combine or which restoration paths consult the stat buff; those are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_warp_glass_cannon.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/49c99b4c-1fdc-4355-900d-2e4b4c733ba8). The icon identifies the talent; it is not mechanism evidence.
