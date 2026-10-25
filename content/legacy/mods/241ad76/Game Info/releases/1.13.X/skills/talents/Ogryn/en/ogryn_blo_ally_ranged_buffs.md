# Bulletstorm: source evidence

[繁體中文](../ogryn_blo_ally_ranged_buffs.md) | [Player description](README.md#ogryn_blo_ally_ranged_buffs) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_blo_ally_ranged_buffs)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_blo_ally_ranged_buffs`; name key `loc_talent_ogryn_blo_ally_ranged_buffs`; description key `loc_talent_ogryn_blo_ally_ranged_buffs_desc`. Node `node_e189b488-7881-4acf-ad96-3a90b6913e49`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The buff's `check_proc_func` checks only `params.is_leadbelcher_shot`, then enumerates `coherency_extension:in_coherence_units()` and adds the ally buff. There is no hit-result condition.
- The receiving buff has `max_stacks=1`, `refresh_duration_on_stack=true`, duration 8s and `ranged_damage=0.15`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2717-L2736](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2717-L2736)
- [scripts/settings/talent/talent_settings_ogryn.lua — L172-L175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L172-L175)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3638-L3677](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3638-L3677)
- [scripts/extension_systems/weapon/actions/action_shoot.lua — L481-L522](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L522)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L51-L52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L51-L52)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2717-L2736](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2717-L2736)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L859-L882](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L859-L882)

## Example assumptions and limits

- **Trigger**: Lucky Bullet triggering is enough; the shot does not have to hit an enemy.

- **Recipients**: You and allies in Coherency gain +15% ranged damage for 8s. Further procs restart the duration.

- **Timing example**: After a proc at 0s, another at 6s gives a fresh 8s duration, extending the buff to 14s.

- **Damage example**: Base ranged damage 100 becomes 100 × (1 + 15%) = 115. Another 20% at the same stage gives 135. This damage buff does not accumulate stacks.

Mechanisms are verified against the fixed public-source SHA; local Build 25606770 English and Chinese text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game.

## Chinese localization note retained from the verified result

The Chinese wording adds “when Lucky Bullet hits,” while the independently read English says “on Lucky Bullet.” Existing evidence checks the Lucky Bullet marker without checking a hit. The verified Chinese correction therefore recommends wording equivalent to “when Lucky Bullet triggers,” avoiding an extra hit requirement. This is a Chinese localization issue; the English trigger is consistent.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_blo_ally_ranged_buffs`, hash `668af910`, entry 6672: **Bulletstorm**.
- Description key `loc_talent_ogryn_blo_ally_ranged_buffs_desc`, hash `99f32156`, entry 9925.

Full raw template:

~~~text
{ranged_damage:%s} Ranged Damage to you and Allies in Coherency on Lucky Bullet. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| ranged_damage | ranged_damage 0.15 | Percentage with + prefix → +15% |
| duration | duration 8 | Number → 8; template supplies s |

Only the missing display map in the cited talent definition, lines 2717–2736, was read. Existing mechanism, numerical and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Ranged Damage to you and Allies in Coherency on Lucky Bullet. Lasts 8s.
~~~

## English comparison

The independently read English grants +15% ranged damage to you and allies in Coherency on Lucky Bullet for 8s, with no hit requirement. This agrees with the accepted evidence. The one-stack limit, refreshed expiry and 115/135 damage examples supplement the text. The separately retained Chinese correction does not establish an English contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_blo_ally_ranged_buffs.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/11755251-3d1b-4b31-867c-47acaea88760). The icon identifies the talent; it is not mechanism evidence.
