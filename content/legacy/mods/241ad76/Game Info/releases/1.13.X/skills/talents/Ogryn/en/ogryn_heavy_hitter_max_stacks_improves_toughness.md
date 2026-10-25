# Unstoppable: source evidence

[繁體中文](../ogryn_heavy_hitter_max_stacks_improves_toughness.md) | [Player description](README.md#ogryn_heavy_hitter_max_stacks_improves_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_max_stacks_improves_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_heavy_hitter_max_stacks_improves_toughness`; name key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness`; description key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness_new_description`. Node `node_d5ea63a3-b384-492e-bf71-9e415f3d3f50`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- When the special rule is selected, the Heavy Hitter root buff adds this single-stack modifier buff at initialization. Its stat interpolates from 0 to `toughness_melee_replenish × 8`, with `toughness_melee_replenish=0.15`.
- The Toughness extension applies `toughness_melee_replenish` only when `recovery_type` is `melee_kill`. It combines this stat with the general `toughness_replenish_modifier` to obtain the recovery multiplier.
- The effective bonus follows the current Heavy Hitter stacks. `heavy_hitter_lerp_value` is module-local shared state; interactions between multiple Ogryns were not tested. Examples assume one character.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L620-L650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L620-L650)
- [scripts/settings/talent/talent_settings_ogryn.lua — L101-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L180-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L205)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L281-L294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L281-L294)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L228-L250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L228-L250)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L620-L650](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L620-L650)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2024-L2047](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2024-L2047)

## Example assumptions and limits

- **Requirement**: The bonus applies only to Toughness recovered from melee kills. Other sources of Toughness recovery receive no bonus from this node.

- **Formula and cap**: Each Heavy Hitter stack adds 15%, up to 8 stacks. At full stacks, the increase is 120%, giving 2.2 times the base melee-kill recovery.

- **Example**: If the base melee-kill recovery is 10 Toughness, 8 stacks recover `10 × (1 + 8 × 15%) = 22` Toughness, capped by the amount missing.

The 22-point example assumes no other recovery modifier. The bonus increases only melee-kill recovery, without increasing recovery from other events. Mechanisms are verified against the fixed public-source SHA, and local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness`, hash `d47d21bf`, entry 13746: **Unstoppable**.
- Description key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_toughness_new_description`, hash `e1a057de`, entry 14635.

Full raw template:

~~~text
{talent_name:%s} also grants {melee_toughness:%s} Toughness replenished from Melee Kills for each stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_passive_heavy_hitter | Localized string → Heavy Hitter; accepted same-build name |
| melee_toughness | 0.15 | Percentage with explicit + prefix → +15% |

Only the missing display mapping in the cited talent definition, lines 620–650, was read. Its extra stacks format value is not used by this raw template. Existing mechanism and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Heavy Hitter also grants +15% Toughness replenished from Melee Kills for each stack.
~~~

## English comparison

The independently read English explicitly describes Toughness replenished from melee kills for each Heavy Hitter stack. It matches the accepted recovery-type restriction and 15% per-stack bonus. The maximum, example, combination with other recovery modifiers and untested shared-state interaction supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_max_stacks_improves_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/82795688-8a0b-4db1-871c-1302a8f33299). The icon identifies the talent; it is not mechanism evidence.
