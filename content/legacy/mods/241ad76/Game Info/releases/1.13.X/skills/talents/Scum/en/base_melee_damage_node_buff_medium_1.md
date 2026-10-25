# Melee Damage Boost: source evidence

[繁體中文](../base_melee_damage_node_buff_medium_1.md) | [Player description](README.md#base_melee_damage_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_melee_damage_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_melee_damage_node_buff_medium_1`; name key `loc_talent_melee_damage_boost_medium`; description key `loc_talent_melee_damage_boost_medium_desc`. Node `node_6f1aae37-5d5d-4aa5-9028-60ef0c7afa29`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The single-tier node's tier 1 grants `melee_damage = 0.1`, added to the general `damage_stat_buffs` calculation.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L964-L992](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L964-L992)
- [scripts/utilities/attack/damage_calculation.lua — L293-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L305)
- [scripts/extension_systems/buff/buffs/buff.lua — L226-L254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L254)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L1037-L1060](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1037-L1060)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L936-L969](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L936-L969)

## Example assumptions and limits

- **Damage example**: A base 100 Melee Damage becomes 110. With an existing 25% Damage bonus at the same stage, the result is 100 × (1 + 25% + 10%) = 135.

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
| `{melee_damage:%s}` | Tier 1: 0.1 | Tier-aware Buff lookup; `percentage`, `+` prefix → `+10%` |

The existing display map at `base_talents.lua` L1037-L1060 resolves `player_melee_damage_node_buff_medium_1.stat_buffs.melee_damage` with `tier = true`. The verified single-tier value is 0.1; the reused percentage formatter displays +10%.

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Damage.
~~~

## English comparison

The English's Melee Damage statistic and +10% match the verified bonus. Its combination with other Damage bonuses at the same stage is a supplement to the short description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/stat/base_melee_damage_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/fa269ae5-914c-4444-a713-88c4591a79d9). The icon identifies the talent; it is not mechanism evidence.
