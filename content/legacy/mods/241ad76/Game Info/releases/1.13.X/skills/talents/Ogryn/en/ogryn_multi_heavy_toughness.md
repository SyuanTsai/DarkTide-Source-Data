# The Best Defence: source evidence

[繁體中文](../ogryn_multi_heavy_toughness.md) | [Player description](README.md#ogryn_multi_heavy_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_multi_heavy_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_multi_heavy_toughness`; name key `loc_talent_ogryn_toughness_on_multiple`; description key `loc_talent_ogryn_toughness_on_multiple_new_desc`. Node `node_219a7391-b6de-459c-83fd-631421d4f150`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_sweep_finish` reads `num_hit_units`: the multi-target branch requires `>1`, while the corresponding single-target branch requires `==1`. `ActionSweep` supplies the enemy-hit count and `is_heavy` when exiting the sweep.
- The multi-target branch uses `toughness_3.toughness=0.05` and `heavy_toughness=0.15`. The single-target counterpart uses `toughness_2.reduced_toughness=0.05` and `toughness=0.15`. Its display format references `toughness_3`, but the values agree in this release.
- `replenish_percentage(ignore_stat_buffs=false)` uses maximum Toughness, `toughness_replenish_modifier` and `multiplier`; recovery is capped by the amount missing.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1104-L1120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1104-L1120)
- [scripts/settings/talent/talent_settings_ogryn.lua — L315-L324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L315-L324)
- [scripts/extension_systems/weapon/actions/action_sweep.lua — L944-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L818-L837](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L818-L837)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L36-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L36-L62)

## Example assumptions and limits

- **Trigger**: Hit at least 2 enemies with one melee attack. At the end of that sweep, recover 5% of maximum Toughness, or 15% for a heavy attack. No kill is required.

- **Example**: With maximum Toughness 100, an ordinary attack recovers `100 × 5% = 5` points and a heavy attack recovers `100 × 15% = 15`. If current Toughness is 95, either can restore only the 5 points missing.

- **Counting**: Each qualifying sweep restores Toughness once, rather than once per enemy hit. Other Toughness recovery modifiers apply separately.

The numerical recovery example assumes no other modifier. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_toughness_on_multiple`, hash `877baa01`, entry 8797: **The Best Defence**.
- Description key `loc_talent_ogryn_toughness_on_multiple_new_desc`, hash `bcffeeff`, entry 12183.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness after hitting multiple Enemies with a single Melee Attack. This is increased to {heavy_toughness:%s} on Heavy Melee Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | toughness_3.toughness = 0.05 | Percentage without a prefix → 5% |
| heavy_toughness | toughness_3.heavy_toughness = 0.15 | Percentage without a prefix → 15% |

Only the missing display mapping in the cited talent definition, lines 818–837, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Replenish 5% Toughness after hitting multiple Enemies with a single Melee Attack. This is increased to 15% on Heavy Melee Attack.
~~~

## English comparison

The independently read English requires multiple enemies hit by a single melee attack, and replaces 5% with 15% for a heavy attack. It matches the accepted greater-than-one hit condition and amounts. End-of-sweep settlement, maximum-Toughness basis, modifiers and deficit cap supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_multi_heavy_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/67294825-4742-461c-8445-8eabf69981d3). The icon identifies the talent; it is not mechanism evidence.
