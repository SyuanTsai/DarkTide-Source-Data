# Against the Odds: source evidence

[繁體中文](../zealot_offensive_vs_many.md) | [Player description](README.md#zealot_offensive_vs_many) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_offensive_vs_many)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_offensive_vs_many`; name key `loc_talent_zealot_offensive_vs_many`; description key `loc_talent_zealot_offensive_vs_many_desc`. Node `node_5f6902c3-f9af-4bbf-b4ad-68a0d7da94a1`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The broadphase checks radius 5 every 0.1 seconds. For `N >= 2`, `stacks = min(1 + floor((N − 2) / 2), 5)`; otherwise 0. Each stack grants `damage` +0.02 and `max_hit_mass_attack_modifier` +0.1; interpolation uses `stacks / 5`. While disabled, the result returns to 0.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3129-L3220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3129-L3220)
- [scripts/settings/talent/talent_settings_zealot.lua — L214-L221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L214-L221)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2644-L2676](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2644-L2676)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1967-L1989](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1967-L1989)

## Example assumptions and limits

- **Stacks:** every 2 enemies within 5 metres grant +2% damage and +10% Cleave, up to 5 stacks at 10 enemies. Stacks decrease as enemies leave; bonuses are suspended while you are disabled.
- **Damage example:** 6 nearby enemies give 3 stacks, so base damage 100 becomes 100 × (1 + 3 × 2%) = 106. At 10 or more enemies, the maximum is 110. Other same-stage damage bonuses are added first.
- **Cleave example:** an original enemy hit-mass budget of 10 becomes 10 × (1 + 3 × 10%) = 13 at 3 stacks, or 15 at maximum stacks. This is the total mass you can cleave through, not a fixed extra 3 or 5 enemies.

- The Cleave example only demonstrates the hit-mass budget. Armour, weapon, enemy mass and the Cleave damage distribution still affect actual hits.
- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `d2cd1130` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_offensive_vs_many`, hash `e699905e`, entry 14966: **Against the Odds**.
- Description key `loc_talent_zealot_offensive_vs_many_desc`, hash `d2cd1130`, entry 13620.

Full raw template:

~~~text
For every {num_enemies:%s} enemies within {range:%s}m, gain {damage:%s} Damage and {cleave:%s} Cleave. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `num_enemies` | `2` | `number`: `2` |
| `range` | `5` | `number`: `5` |
| `damage` | `0.02` | `percentage`, `+` prefix: `+2%` |
| `cleave` | `0.1` | `percentage`, `+` prefix: `+10%` |
| `stacks` | `5` | `number`: `5` |

The display mapping uses the verified `initial_number_of_enemies`, `range`, `damage`, `cleave` and `max_stack` fields.

Static reconstruction; not an observed game screen:

~~~text
For every 2 enemies within 5m, gain +2% Damage and +10% Cleave. Stacks 5 times.
~~~

## English comparison

The English independently matches the enemy count, range, per-stack bonuses and maximum stacks. Dynamic updates, the disabled-state exception and Cleave's hit-mass basis are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_offensive_vs_many.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/9b626554-120f-43b1-b152-bf21224b6a42). The icon identifies the talent; it is not mechanism evidence.
