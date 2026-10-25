# Burst Limiter Override: source evidence

[繁體中文](../ogryn_leadbelcher_no_ammo_chance.md) | [Player description](README.md#ogryn_leadbelcher_no_ammo_chance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_leadbelcher_no_ammo_chance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_leadbelcher_no_ammo_chance`; name key `loc_talent_ogryn_chance_to_not_consume_ammo`; description key `loc_talent_ogryn_blo_new_alt_desc`. Node `node_e64ae2d0-e20a-486a-8cf6-9208cb9dd9e6`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `ogryn_blo_new_passive` adds `ogryn_blo_stacking_buff` on `on_ranged_kill`. The buff has `max_stacks=10`, duration 10s, `refresh_duration_on_stack=true`, and `ranged_damage=0.02` per stack.
- At the start of shooting, `free_ammo_proc_chance=0.15` is passed to Lucky Strike. `action_weapon_base` adds `leadbelcher_chance_bonus` to the input chance and resolves a PRD coin flip. On success, `action_shoot` follows the `ammo_usage=0` path, still sends `on_ammo_consumed`, and marks `is_leadbelcher_shot`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L362-L405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L362-L405)
- [scripts/settings/talent/talent_settings_ogryn.lua — L203-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L203-L210)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3567-L3606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3567-L3606)
- [scripts/extension_systems/weapon/actions/action_weapon_base.lua — L186-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L186-L214)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L132-L147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L132-L147)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L481-L522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L214-L224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L214-L224)
- [scripts/utilities/pseudo_random_distribution.lua — L7-L33](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/pseudo_random_distribution.lua#L7-L33)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L362-L405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L362-L405)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L568-L599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L568-L599)

## Example assumptions and limits

- **Lucky Bullet**: Ranged attacks with ammunition use a 15% base proc chance. A successful proc makes that shot consume no ammunition: a shot that normally uses 1 round uses 0. The chance adjusts with previous checks; shots are not independent fixed-probability rolls.

- **Damage from kills**: Each ranged kill adds one stack of 2% ranged damage, up to 10 stacks. Further kills reset the 10s duration.

- **Example**: Five ranged kills grant 10% ranged damage; 10 stacks grant 20%. With base damage 100, the full-stack result is 100 × 1.20 = 120.

The 15% is the base chance passed to PRD; the actual proc sequence depends on PRD state and is not a sequence of independent fixed-probability rolls. `blo_passive_lerp_value` is a module-shared value; interactions when multiple Ogryns are present have not been tested. Mechanisms are verified against the fixed public-source SHA; local Build 25606770 English and Chinese resources correspond to 1.13.1. Differences in actual text or behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_chance_to_not_consume_ammo`, hash `2e5d14e3`, entry 3025: **Burst Limiter Override**.
- Description key `loc_talent_ogryn_blo_new_alt_desc`, hash `1b448166`, entry 1776. `[Writer]` is export metadata, not displayed text.

Full raw template:

~~~text
{proc_chance:%s} chance of triggering Lucky Bullet and not consuming Ammo when making Ranged Attacks.

In addition, gain {ranged_damage:%s} Ranged Damage on Ranged Kills. Max Stacks {stacks:%s}. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| proc_chance | free_ammo_proc_chance 0.15 | Percentage → 15%; no prefix |
| ranged_damage | ranged_damage 0.02 | Percentage with + prefix → +2% |
| stacks | max_stacks 10 | Number → 10 |
| duration | Buff duration 10 | Number → 10; template supplies s |

Only the missing display map in the cited talent definition, lines 362–405, was read. Existing mechanism, values and formatter evidence were reused.

Static reconstruction; not an observed game screen:

~~~text
15% chance of triggering Lucky Bullet and not consuming Ammo when making Ranged Attacks.

In addition, gain +2% Ranged Damage on Ranged Kills. Max Stacks 10. Lasts 10s.
~~~

## English comparison

The independently read English contains two effects: a 15% Lucky Bullet chance to consume no ammunition on ranged attacks, and +2% ranged damage on ranged kills, capped at 10 stacks for 10s. These agree with the accepted evidence. The text does not prescribe independent rolls; PRD state, added chance, ammo-event bookkeeping, stack refresh and the 120-damage example supplement it. The existing multi-Ogryn shared-state limit is retained. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone/ogryn_leadbelcher_no_ammo_chance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/ea712cab-0dd4-47fa-a2c5-98edb7e41783). The icon identifies the talent; it is not mechanism evidence.
