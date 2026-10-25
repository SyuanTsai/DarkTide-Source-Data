# Overcharged Arc Grenades: source evidence

[繁體中文](../cryptic_arc_grenades_brittleness.md) | [Player description](README.md#cryptic_arc_grenades_brittleness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_arc_grenades_brittleness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_arc_grenades_brittleness`; name key `loc_talent_cryptic_arc_grenades_brittleness`; description key `loc_talent_cryptic_arc_grenades_brittleness_desc`. Node `node_d609f926-8570-41c2-9d4f-2954298c8f73`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent passive `cryptic_grenade_ability_arc_grenade_extra_arcs` sets the `arc_grenade_extra_arcs` stat buff to 2. At the start of the explosion, `player_grenade_explosion_templates.lua` sets `max_targets` to `base_num_arcs` (4) + `num_extra_arcs` (2), raising the initial target limit to 6. This does not extend the jump count of an individual arc chain. The special rule `cryptic_arc_grenade_gives_brittleness` is read by `_init_chain` in `arc_grenade_chain_lightning_source`. Whenever a chain node is added, the target receives 8 stacks of `rending_debuff`. The template gives a Rending multiplier of 0.025 per stack, lasts 5s, has `max_stacks = 16` and restarts its timer when stacks are added. One chain hit therefore adds 20%; repeated hits can accumulate up to 40%.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L985-L1015](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L985-L1015)
- [scripts/settings/talent/talent_settings_cryptic.lua — L185-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L185-L194)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1358-L1364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1358-L1364)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L482-L525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L482-L525)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L58-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L58-L80)
- [scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua — L112-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua#L112-L124)
- [scripts/settings/buff/weapon_buff_templates.lua — L366-L375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L375)
- [scripts/utilities/attack/damage_calculation.lua — L122-L247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L247)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L985-L1015](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L985-L1015)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1843-L1865](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1843-L1865)

## Example assumptions and limits

- **How it works**: Arc Grenades' initial arc limit increases from 4 to 6. The number of additional chain jumps per arc stays the same.
- **How it works**: An enemy hit by the arc chain receives 8 stacks of Brittleness, 2.5% each, lasting 5s.
- **Example**: One arc hit can apply 8 × 2.5% = 20% Brittleness. Another hit can continue stacking it, up to 16 stacks or 40%.
- **Damage example**: Comparing only the armour stage, assume 100 damage before armour, an original armour multiplier of 0.5 and a Rending coefficient of 1 for that armour. Eight Brittleness stacks raise damage from 100 × 0.5 = 50 to 100 × (0.5 + 20%) = 70. At 16 stacks it is 90. Crossing an armour multiplier of 1 requires a separate calculation.

- The base limit of 4 initial targets increases by 2 to 6. An enemy hit by an arc chain receives 8 × 2.5% = 20% added Rending for 5s.
- The extra 2 increase the explosion's initial arc target limit. Individual chains still obey their existing jump and target conditions.
- Eight Brittleness stacks are applied by nodes hit by the arc chain. Whether a hit occurs and whether further hits can reach 16 stacks depend on the arc selecting the same enemy again.
- Each stack is a 2.5% Rending multiplier, so 8 stacks give 20%. This is not an equal percentage increase to final damage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_arc_grenades_brittleness`, hash `514f9bc7`, entry 5282: **Overcharged Arc Grenades**.
- Description key `loc_talent_cryptic_arc_grenades_brittleness_desc`, hash `699afdc0`, entry 6887.

Full raw template:

~~~text
Increase the number of Arcs created by your {talent_name:%s} by {number:%s}. Enemies hit by the Arcs have {stacks:%s} Stacks of 2.5% Brittleness applied to them.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | `loc_talent_cryptic_arc_grenades` → Arc Grenades | `loc_string`; hash `cfab3f3d`, entry 13419 |
| `{number:%s}` | 2 | `number`; no prefix |
| `{stacks:%s}` | 8 | `number`; no prefix |

The minimally read display map is `cryptic_talents.lua` L985-L1015. `number` uses `arc_grenade.extra_arcs`, and `stacks` uses `rending_stacks_on_minions_hit_by_arc`; the accepted evidence supplies 2 and 8. The talent name is the same-build English key above. The 2.5% per stack is literal text in the original description.

Static reconstruction; not an observed game screen:

~~~text
Increase the number of Arcs created by your Arc Grenades by 2. Enemies hit by the Arcs have 8 Stacks of 2.5% Brittleness applied to them.
~~~

## English comparison

The additional 2 initial arcs, 8 Brittleness stacks per chain hit and literal 2.5% per stack agree with the accepted evidence. The 5s duration, timer refresh, 16-stack cap, unchanged chain length and armour-stage interpretation supplement the description. It does not claim an equal percentage increase to final damage.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_arc_grenades_brittleness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/14c1a0d8-2916-40d7-a7e2-8572a0b3e6d2). The icon identifies the talent; it is not mechanism evidence.
