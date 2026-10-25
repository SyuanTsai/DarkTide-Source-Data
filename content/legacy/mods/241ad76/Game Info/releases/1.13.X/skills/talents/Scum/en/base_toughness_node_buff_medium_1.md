# Toughness Boost: source evidence

[繁體中文](../base_toughness_node_buff_medium_1.md) | [Player description](README.md#base_toughness_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toughness_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toughness_node_buff_medium_1`; name key `loc_talent_toughness_boost_medium`; description key `loc_talent_toughness_boost_medium_desc`. Node `node_8cfdec14-fd7f-49eb-94b4-40cb4a9016a1`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node has only one tier. The buff uses `talent_overrides[1]` for that tier, giving `toughness = 25`; the template's default 15 must not be used.
- `max_toughness` adds `stat_buffs.toughness` to the breed's base value, multiplies by `toughness_bonus`, rounds up with `ceil`, then adds the flat value.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L366-L394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L366-L394)
- [scripts/extension_systems/buff/buffs/buff.lua — L226-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L254)
- [scripts/utilities/character_sheet.lua — L36-L43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L36-L43)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L79-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L182-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L182-L205)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L231-L265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L231-L265)

## Example assumptions and limits

- **How it adds**: increase maximum Toughness by 25 points. This adds to other fixed Toughness bonuses before applying percentage modifiers to maximum Toughness.
- **Examples**: an initial 100 points becomes 125. With another 20% maximum-Toughness bonus, the result is (100 + 25) × 1.2 = 150.

The examples isolate this node, except where the additional 20% maximum-Toughness bonus is explicitly included. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

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
| `{toughness:%s}` | `player_toughness_node_buff_medium_1`, tier 1: `talent_overrides[1].stat_buffs.toughness = 25` → `+25` | `number`; prefix `+`; `tier = true` |

The existing display mapping at `base_talents.lua` L186-L200 reads the Toughness stat from `player_toughness_node_buff_medium_1` with `tier = true`. The accepted tier-1 override is 25; it does not use the default 15.

Static reconstruction; not an observed game screen:

~~~text
+25 Toughness.
~~~

## English comparison

The English displays a fixed +25 Toughness, agreeing with the tier-1 value. It does not explicitly spell out maximum Toughness, the override selection, or the order of addition, percentage modification, rounding, and the final flat value. These are supplements, not contradictions.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/stat/base_toughness_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/ad899680-6ea8-486b-976c-e0e875026aa8). The icon identifies the talent; it is not mechanism evidence.
