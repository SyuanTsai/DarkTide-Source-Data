# Stunstorm Grenade: source evidence

[繁體中文](../zealot_improved_stun_grenade.md) | [Player description](README.md#zealot_improved_stun_grenade) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_improved_stun_grenade)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_improved_stun_grenade`; name key `loc_zealot_improved_stun_grenade`; description key `loc_zealot_improved_stun_grenade_desc`. Node `node_efeefa9a-f503-46e7-afae-a61d76ad3a7e`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent `format_values.radius` reads `stat_buffs.explosion_radius_modifier_shock`, which the buff sets to **0.5**.
- The `shock_grenade` explosion template has `radius = 8`, `close_radius = 2`, `min_radius = 4` and `min_close_radius = 2`. `Explosion.apply_stat_radius_modifier` uses the original value plus `(stat_buff − 1)` before multiplying the radius, giving **1.5×**. The respective radii become **12/3/6/3**.
- The `shock_grenade` projectile has a **1.5-second fuse** and uses that explosion template. Capacity comes from `talent_settings_2.grenade.max_charges`, whose value is **3**.
- Hits apply `shock_grenade_interval`: `duration = 8`, `max_stacks = 1`, `max_stacks_cap = 1`, resetting duration. Its interval range is **0.3–0.8 seconds** and periodic damage uses `electrocution`.
- Periodic Electrocution uses `DEFAULT_POWER_LEVEL = 500`, `attack = 8` and Unarmoured `ADM = 0.5`, giving isolated damage `20 × (500 × 8 / 10000) × 0.5 = 4`. Flak `ADM = 1` gives **8**. `impact = 100` belongs to Stagger calculations and must not be included in Health damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L64-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L64-L91)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L94-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L94-L105)
- [scripts/settings/talent/talent_settings_zealot.lua — L319-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L513-L519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L513-L519)
- [scripts/settings/projectile/player_projectile_templates.lua — L413-L426](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L413-L426)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L66-L101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L66-L101)
- [scripts/utilities/attack/explosion.lua — L484-L502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L484-L502)
- [scripts/settings/buff/weapon_buff_templates.lua — L413-L474](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L413-L474)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L648-L690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690)
- [scripts/utilities/attack/explosion.lua — L429-L482](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L429-L482)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua — L21-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua — L63-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91)
- [scripts/utilities/attack/damage_profile.lua — L29-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80)
- [scripts/utilities/attack/damage_calculation.lua — L219-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L64-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L64-L91)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1400-L1425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1400-L1425)

## Example assumptions and limits

- **Operation**: Upgrade the base Stun Grenade with **50%** more blast radius. Carry up to **3**; fuse **1.5 seconds**.
- **Radius example**: With this talent as the only radius modifier, maximum radius is `8 × 1.5 = 12 metres`, and the close-range radius is `2 × 1.5 = 3 metres`. Hit detection still depends on explosion position and obstructions.
- **Electrocution**: Hits apply **8 seconds** of Electrocution, with damage approximately every **0.3–0.8 seconds**. Another hit refreshes the timer; the same effect does not build multiple stacks. Sustained control still depends on enemy control resistance.
- **Damage example**: For periodic Electrocution only, without other modifiers, one instance deals `8 × 0.5 = 4` to Unarmoured zones and `8 × 1 = 8` to Flak. The initial explosion is separate.
- **Exception**: A Poxwalker Bomber already in a staggered state does not take this periodic Electrocution damage. This does not mean it is completely immune to the grenade's explosion or control.

- With only this upgrade's radius modifier: maximum **8→12**, close range **2→3**.
- Throwing one grenade and having **2** left does not raise remaining charges above **3**; base capacity remains **3**.
- `radius` values are explosion-template settings; actual hits still use explosion target checks and distance calculations.
- **0.3–0.8 seconds** is the configured periodic interval range, not a guaranteed identical interval for every enemy and every instance.
- The exception concerns periodic Electrocution on an already staggered Poxwalker Bomber. Do not extend it to complete explosion or control immunity.
- Build **25606770**, description hash **`35fbc631`**: both Chinese and English describe the Stun Grenade and upgraded range, without a confirmed explicit Chinese translation error. Actual text/runtime presentation remains unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_zealot_improved_stun_grenade`, hash `25c50f32`, entry 2441: **Stunstorm Grenade**.
- Description key `loc_zealot_improved_stun_grenade_desc`, hash `35fbc631`, entry 3503.

Full raw template:

~~~json
"Throw a grenade that stuns all Enemies within its blast radius. \n\nThis is an augmented version of {talent_name:%s} with {radius:%s} blast radius."
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | `loc_ability_shock_grenade` → `Stun Grenade` | Localized string; ui hash `9bfd0b69`, entry 10067 |
| `{radius:%s}` | `0.5` → `+50%` | Percentage with explicit + prefix |

Only the missing display substitution was read in `zealot_talents.lua` L64-L91: `talent_name` uses `loc_string` with `loc_ability_shock_grenade`; `radius` uses the verified radius modifier, percentage formatting and a + prefix. No Buff or explosion retracing was performed.

Static reconstruction; not an observed game screen:

~~~text
Throw a grenade that stuns all Enemies within its blast radius.

This is an augmented version of Stun Grenade with +50% blast radius.
~~~

## English comparison

The English reconstruction names Stun Grenade and explicitly increases blast radius by +50%, agreeing with the accepted multiplier. Its “stuns all Enemies” wording is broader than the evidence's resistance-dependent control; the existing documentation does not establish every enemy's response, so retain that uncertainty without inferring a new immunity mechanism. Charge count, fuse, distinct radius zones, Electrocution duration/refresh, variable intervals and the periodic-damage exception are supplements. The Chinese comparison retains no confirmed mistranslation.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/tactical/zealot_improved_stun_grenade.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/73777d2d-3727-47dc-8093-0d25ec6a3cfd). The icon identifies the talent; it is not mechanism evidence.
