# Toughest!: source evidence

[繁體中文](../ogryn_carapace_armor_more_toughness.md) | [Player description](README.md#ogryn_carapace_armor_more_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor_more_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_carapace_armor_more_toughness`; name key `loc_talent_ogryn_carapace_armor_more_toughness`; description key `loc_talent_ogryn_carapace_armor_more_toughness_desc`. Node `node_f4b9c999-6d19-4a1a-b18e-6f448c4b689a`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- When the special rule is enabled, the child buff activates `conditional_stat_buffs.toughness_replenish_modifier=0.025`, applied for each external child-buff stack. Feel No Pain separately has `stat_buffs.toughness_replenish_modifier=0.03`.
- The Toughness extension forms the recovery multiplier as `1 + total_toughness_replenish_stat_buff`. The two additive modifiers are summed before multiplying the base replenishment amount.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1728-L1755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1728-L1755)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L600-L624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L600-L624)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L228-L250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L228-L250)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L270)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1728-L1755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1728-L1755)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L786-L808](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L786-L808)

## Example assumptions and limits

- **Requirement**: With both Feel No Pain and Toughest! selected, each Feel No Pain stack grants an additional 2.5% Toughness replenishment.

- **Formula and limit**: At N stacks, this node adds 2.5% × N, alongside Feel No Pain's 3% × N, up to 10 stacks.

- **Example**: At 10 stacks, the replenishment multiplier is 1 + 10 × 5.5% = 1.55. A base restoration of 20 would restore 31, capped by missing Toughness.

The increase applies only to Toughness-replenishment routes that read `toughness_replenish_modifier`. Actual restoration cannot exceed missing Toughness. Mechanisms are verified against the fixed public-source SHA; local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_carapace_armor_more_toughness`, hash `70367a4e`, entry 7286: **Toughest!**.
- Description key `loc_talent_ogryn_carapace_armor_more_toughness_desc`, hash `2fd914ff`, entry 3116.

Full raw template:

~~~text
{talent_name:%s} grants {toughness_regen:%s} Toughness Replenishment per stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_carapace_armor | Localized string → Feel No Pain |
| toughness_regen | Conditional toughness_replenish_modifier 0.025 | Percentage with + prefix → +2.5% |

Only the missing display map in the cited talent definition, lines 1728–1755, was read. Existing mechanism, numerical and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Feel No Pain grants +2.5% Toughness Replenishment per stack.
~~~

## English comparison

The independently read English grants +2.5% Toughness replenishment per Feel No Pain stack, matching the accepted conditional modifier. Addition alongside the base 3%, the ten-stack limit, 1.55 multiplier, 31-point example, eligible replenishment routes and deficit cap supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_carapace_armor_more_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/d6e55419-0e35-49cc-9bd6-163bdff037d4). The icon identifies the talent; it is not mechanism evidence.
