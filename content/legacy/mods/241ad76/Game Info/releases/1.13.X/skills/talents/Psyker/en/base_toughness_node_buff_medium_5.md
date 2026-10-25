# Toughness Boost: source evidence

[繁體中文](../base_toughness_node_buff_medium_5.md) | [Player description](README.md#base_toughness_node_buff_medium_5) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toughness_node_buff_medium_5)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toughness_node_buff_medium_5`; name key `loc_talent_toughness_boost_medium`; description key `loc_talent_toughness_boost_medium_desc`. Node `node_0bbf73c4-d47e-4205-b8a3-1ee5879708cb`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The base talents map to `player_toughness_node_buff_medium_4` and `player_toughness_node_buff_medium_5`. Both clone `medium_1`; the ordinary one-point amount is `toughness = 15`.
- Maximum Toughness first adds flat `toughness`, then multiplies by `toughness_bonus`, and finally applies `ceil`.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L366-L398](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L366-L398)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L79-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L278-L301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L278-L301)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1206-L1234](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1206-L1234)

## Example assumptions and limits

- **Effect**: increase maximum Toughness by 15 points.

- **Toughness example**: with no other modifiers, 100 maximum Toughness becomes 100 + 15 = 115 points; selecting another node with the same effect gives 130 points. This increases the maximum rather than restoring Toughness over time.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_toughness_boost_medium`, hash `65a72c01`, entry 6617: **Toughness Boost**.
- Description key `loc_talent_toughness_boost_medium_desc`, hash `329702b6`, entry 3299.

Full raw template:

~~~text
{toughness:%s} Toughness.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | verified ordinary one-point flat amount `15` | tier-aware lookup, number with `+` prefix → `+15` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L282-L296) looks up `player_toughness_node_buff_medium_5.stat_buffs.toughness`. The existing verified amount of 15 and shared tier-aware number formatting are reused; no percentage conversion is applied.

Static reconstruction; not an observed game screen:

~~~text
+15 Toughness.
~~~

## English comparison

The English mapped flat amount agrees with the verified +15 bonus. Maximum rather than current Toughness, modifier order and rounding are omitted details; the text does not claim sustained restoration.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/stat/base_toughness_node_buff_medium_5.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/3d86850d-c891-443c-8f80-2f01ad34bdff). The icon identifies the talent; it is not mechanism evidence.
