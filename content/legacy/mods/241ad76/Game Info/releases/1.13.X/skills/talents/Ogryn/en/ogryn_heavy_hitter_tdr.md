# Don't Feel a Thing: source evidence

[繁體中文](../ogryn_heavy_hitter_tdr.md) | [Player description](README.md#ogryn_heavy_hitter_tdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_tdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_heavy_hitter_tdr`; name key `loc_talent_ogryn_passive_heavy_hitter_tdr`; description key `loc_talent_ogryn_passive_heavy_hitter_tdr_desc`. Node `node_fecbb13a-e9d0-43b6-8b85-ce8006717503`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The modifier buff has only one stack. `lerped_stat_buffs.toughness_damage_taken_multiplier` interpolates linearly from 1 to `1 − tdr × 8`; `lerp_t_func` directly reads shared `heavy_hitter_lerp_value`. `tdr=0.0125`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2396-L2415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2396-L2415)
- [scripts/settings/talent/talent_settings_ogryn.lua — L101-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L180-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L221)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L295-L308](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L295-L308)
- [scripts/settings/buff/buff_settings.lua — L1000-L1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1012)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2396-L2415](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2396-L2415)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1976-L1999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1976-L1999)

## Example assumptions and limits

- **Requirement**: Damage reduction follows Heavy Hitter's stacks; it decreases when those stacks decrease.

- **Formula and cap**: Each stack reduces the remaining Toughness-damage multiplier by 1.25 percentage points, up to 8 stacks. At full stacks, you take 90% of the original Toughness damage.

- **Example**: At 4 stacks the multiplier is 0.95, turning 100 Toughness damage into 95. At 8 stacks, 100 becomes 90.

This node changes `toughness_damage_taken_multiplier` and does not reduce Health damage. The bonus fully follows Heavy Hitter stacks and their refreshed 7.5s lifetime. `heavy_hitter_lerp_value` is a module-local shared variable; multiple-Ogryn update interactions are untested, and the player examples fix one character. Local Build 25606770 Chinese and English text and the fixed public source correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_passive_heavy_hitter_tdr`, hash `75b8b424`, entry 7649: **Don't Feel a Thing**.
- Description key `loc_talent_ogryn_passive_heavy_hitter_tdr_desc`, hash `063dfc94`, entry 382.

Full raw template:

~~~text
{talent_name:%s} also grants {toughness_damage_reduction:%s} Toughness Damage Reduction for each stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_passive_heavy_hitter | Localized string → Heavy Hitter |
| toughness_damage_reduction | tdr 0.0125 | Percentage selects two decimals with + prefix → +1.25% |

Only the missing display map in the cited talent definition, lines 2396–2415, was read. Two-decimal percentage formatting reuses [accepted formatting evidence](../../Veteran/en/veteran_increase_damage_after_sprinting.md); the formatter was not reread. Existing mechanism and values were reused.

Static reconstruction; not an observed game screen:

~~~text
Heavy Hitter also grants +1.25% Toughness Damage Reduction for each stack.
~~~

## English comparison

The independently read English grants Heavy Hitter +1.25% Toughness damage reduction per stack, matching the accepted value and explicit damage type. The linear interpolation, eight-stack cap, 95/90 examples, parent lifetime and shared-state limit supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_tdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/83bead6b-330f-466e-8c25-c7d383843b1c). The icon identifies the talent; it is not mechanism evidence.
