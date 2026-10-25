# Melee Damage Boost: source evidence

[繁體中文](../base_melee_damage_node_buff_medium_4.md) | [Player description](README.md#base_melee_damage_node_buff_medium_4) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_melee_damage_node_buff_medium_4)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_melee_damage_node_buff_medium_4`; name key `loc_talent_melee_damage_boost_medium`; description key `loc_talent_melee_damage_boost_medium_desc`. Node `node_94333107-ec28-44ca-b37e-2f714fc57ed5`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The current node has `cost = max_points = 1` and uses tier 1 `melee_damage = 0.1`, not the later tier 2/3/4 values that cannot be allocated here. `medium_4` clones the `medium_1` template; the two talent identifiers differ, so their bonuses add in the same stage.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L964-L995](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L964-L995)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L1109-L1132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1109-L1132)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1807-L1835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1807-L1835)

## Example assumptions and limits

- **How it works:** gain +10% Melee damage. The two same-name nodes each provide their own bonus; selecting both gives +20% in total.
- **Damage example:** without other bonuses, 100 × (1 + 10%) = 110. Selecting both nodes gives 120. With an existing same-stage 25% bonus, selecting one node gives 100 × (1 + 25% + 10%) = 135.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `7b5da013` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_melee_damage_boost_medium`, hash `cb9e7b48`, entry 13150: **Melee Damage Boost**.
- Description key `loc_talent_melee_damage_boost_medium_desc`, hash `7b5da013`, entry 8019.

Full raw template:

~~~text
{melee_damage:%s} Melee Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `melee_damage` | Tier 1 `player_melee_damage_node_buff_medium_4.stat_buffs.melee_damage = 0.1` | `percentage`, `+` prefix: `+10%` |

The display mapping finds the tier-specific `stat_buffs.melee_damage` in `player_melee_damage_node_buff_medium_4`. The accepted one-point node selects tier 1.

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Damage.
~~~

## English comparison

The English independently agrees with +10% Melee damage for this node. It does not claim that later tiers can be selected or that duplicate nodes multiply. Tier eligibility, separate identifiers and same-stage addition are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/stat/base_melee_damage_node_buff_medium_4.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/0c800eb0-7fc1-4c5c-b3c2-67d20a7db2ff). The icon identifies the talent; it is not mechanism evidence.
