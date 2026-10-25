# Smash 'Em!: source evidence

[繁體中文](../ogryn_single_heavy_toughness.md) | [Player description](README.md#ogryn_single_heavy_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_single_heavy_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_single_heavy_toughness`; name key `loc_talent_ogryn_toughness_on_single_heavy`; description key `loc_talent_ogryn_toughness_on_single_heavy_new_desc`. Node `node_5e74a121-356d-454e-baca-0739626cbddd`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_sweep_finish` reads `num_hit_units`: the multi-target branch requires `>1`, while the corresponding single-target branch requires `==1`. `ActionSweep` supplies the enemy-hit count and `is_heavy` when exiting the sweep.
- The multi-target branch uses `toughness_3.toughness=0.05` and `heavy_toughness=0.15`. The single-target counterpart uses `toughness_2.reduced_toughness=0.05` and `toughness=0.15`. Its display format references `toughness_3`, but the values agree in this release.
- `replenish_percentage(ignore_stat_buffs=false)` uses maximum Toughness, `toughness_replenish_modifier` and `multiplier`; recovery is capped by the amount missing.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1087-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1087-L1103)
- [scripts/settings/talent/talent_settings_ogryn.lua — L315-L324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L315-L324)
- [scripts/extension_systems/weapon/actions/action_sweep.lua — L944-L961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L961)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L798-L817](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L798-L817)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L63-L87](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L63-L87)

## Example assumptions and limits

- **Trigger**: Hit exactly 1 enemy with one melee attack. At the end of that sweep, recover 5% of maximum Toughness, or 15% for a heavy attack. No kill is required.

- **Example**: With maximum Toughness 100, an ordinary attack recovers `100 × 5% = 5` points and a heavy attack recovers `100 × 15% = 15`. If current Toughness is 95, either can restore only the 5 points missing.

- **Counting**: Each qualifying sweep restores Toughness once, rather than once per enemy hit. Other Toughness recovery modifiers apply separately.

The numerical recovery example assumes no other modifier. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_toughness_on_single_heavy`, hash `3757286d`, entry 3588: **Smash 'Em!**.
- Description key `loc_talent_ogryn_toughness_on_single_heavy_new_desc`, hash `3a1cc6f0`, entry 3762.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness after hitting a single Enemy with a Melee Attack. Increased to {heavy_toughness:%s} Toughness if it is a Heavy Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | toughness_3.toughness = 0.05 | Percentage without a prefix → 5% |
| heavy_toughness | toughness_3.heavy_toughness = 0.15 | Percentage without a prefix → 15% |

Only the missing display mapping in the cited talent definition, lines 798–817, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Replenish 5% Toughness after hitting a single Enemy with a Melee Attack. Increased to 15% Toughness if it is a Heavy Attack.
~~~

## English comparison

The independently read English requires a single enemy hit by a melee attack and increases recovery to 15% for a heavy attack. It matches the accepted exact-one hit condition and amounts. End-of-sweep settlement, maximum-Toughness basis, modifiers and deficit cap supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_single_heavy_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/bdf5653a-6df6-4998-a781-ae623083055a). The icon identifies the talent; it is not mechanism evidence.
