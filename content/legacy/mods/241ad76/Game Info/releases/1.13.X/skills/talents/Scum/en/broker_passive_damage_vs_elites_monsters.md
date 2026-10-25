# Punching Above One's Weight: source evidence

[繁體中文](../broker_passive_damage_vs_elites_monsters.md) | [Player description](README.md#broker_passive_damage_vs_elites_monsters) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_damage_vs_elites_monsters)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_damage_vs_elites_monsters`; name key `loc_talent_broker_passive_damage_vs_elites_monsters`; description key `loc_talent_broker_passive_damage_vs_elites_monsters_desc`. Node `node_596f2c9b-2980-4b96-8c2a-521611e83a65`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `damage_vs_elites = 0.15` and `damage_vs_monsters = 0.15` each check the corresponding breed tag and add to general damage bonuses. If both tags are present, each bonus is added once; the tags must not be assumed mutually exclusive.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L334-L337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L337)
- [scripts/utilities/attack/damage_calculation.lua — L403-L413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L403-L413)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2233-L2240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2233-L2240)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1766-L1788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1766-L1788)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1511-L1535](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1511-L1535)

## Example assumptions and limits

- **Targets**: A target with the Elite or Monster classification receives the corresponding 15% damage bonus. Being classified only as a Specialist does not automatically qualify it.

- **Damage example**: A base of 100 becomes 115. With another 25% bonus at the same stage, the result is 100 × (1 + 25% + 15%) = 140.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_damage_vs_elites_monsters`, hash `e2641fac`, entry 14681: **Punching Above One's Weight**.
- Description key `loc_talent_broker_passive_damage_vs_elites_monsters_desc`, hash `a7b80936`, entry 10803.

Full raw template:

~~~text
{multiplier:%s} Damage against Elites and Monstrosities.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `multiplier` | `stat_buffs.damage_vs_elites = 0.15` | Percentage with `+` prefix: `+15%` |

The accepted Buff value supplies the substitution. The display mapping at `broker_talents.lua` L1766-L1788 reads `stat_buffs.damage_vs_elites`; the separately verified Monster bonus is also 0.15. Reuse the accepted percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage against Elites and Monstrosities.
~~~

## English comparison

The English names Elites and Monstrosities and states the verified 15% bonus. No clear contradiction appears. Independent breed-tag checks, the Specialist-only limit and same-stage addition are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_vs_elites_monsters.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/280d8610-ccf2-4be3-a05b-6f4a140f8b23). The icon identifies the talent; it is not mechanism evidence.
