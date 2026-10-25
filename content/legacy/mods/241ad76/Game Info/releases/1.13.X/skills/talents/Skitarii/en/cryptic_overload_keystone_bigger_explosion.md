# Critical Power Overload: source evidence

[繁體中文](../cryptic_overload_keystone_bigger_explosion.md) | [Player description](README.md#cryptic_overload_keystone_bigger_explosion) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_bigger_explosion)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_overload_keystone_bigger_explosion`; name key `loc_talent_cryptic_overload_keystone_bigger_explosion`; description key `loc_talent_cryptic_overload_keystone_bigger_explosion_desc`. Node `node_18456fa4-d46f-4a4e-ae55-1c1e9c09befd`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The modified special rule creates `cryptic_overload_keystone_debuff_explosion` when Power Overload triggers. The explosion template has both radius and minimum radius set to 8, filters enemy `villains`, and applies `cryptic_overload_keystone_increase_damage_taken_debuff` to enemies hit.
- The debuff lasts 8 seconds, has a maximum of 1 stack, supplies the `electrocuted` keyword, and sets `damage_taken_multiplier = 1.15`. Reapplying the same effect restarts its duration.
- The explosion uses `damage_type = buff`. Its attack and Impact `power_distribution` and all armour damage modifiers are zero. The explosion itself therefore deals no damage; it applies the Electrocution visual/state and damage-taken multiplier.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1284-L1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1284-L1305)
- [scripts/settings/talent/talent_settings_cryptic.lua — L264-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L270)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1540-L1548](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1540-L1548)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1809-L1821](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1809-L1821)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L299-L309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L299-L309)
- [scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua — L791-L835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/cryptic_damage_profile_templates.lua#L791-L835)
- [scripts/settings/buff/buff_settings.lua — L775-L775](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L775)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1284-L1305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1284-L1305)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L963-L985](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L963-L985)

## Example assumptions and limits

- **Trigger**: On Power Overload, enemies hit within **8 metres** around you receive Electrocution and increased damage taken for **8 seconds**.
- **Damage example**: An attack that would deal `100` to an affected enemy instead deals `100 × 1.15 = 115`, with no other modifiers. This increase comes from the enemy's damage taken; this area effect itself deals no explosion damage.
- **Repeated triggers**: The same effect has at most **1 stack**. Another hit refreshes the 8-second duration; it does not increase the bonus to 30%.

- The extra 15 points in the `100 → 115` example come from increased damage taken, not attack damage from the overload explosion.
- The fixed-version radius is 8 metres. The local English describes this as melee range without giving a numerical radius.
- The increased damage taken affects enemies hit by the explosion. It does not apply to enemies that were not hit.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_overload_keystone_bigger_explosion`, hash `bee5e91f`, entry 12308: **Critical Power Overload**.
- Description key `loc_talent_cryptic_overload_keystone_bigger_explosion_desc`, hash `4bcf4f12`, entry 4926.

Full raw template:

~~~text
The Overload now also applies an Electrocution effect to enemies in melee range, causing enemies hit to also take {damage_taken:%s} more damage for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_taken` | 15% | `percentage`: `math_round((1.15 − 1) × 100)`, no `+` prefix |
| `duration` | 8 | `number`: `aoe_damage_taken_multiplier_debuff_duration = 8` |

The display mapping in `cryptic_talents.lua` L1292–L1304 converts the verified `aoe_damage_taken_multiplier_debuff = 1.15` into its rounded increase percentage. It supplies no numerical range placeholder.

Static reconstruction; not an observed game screen:

~~~text
The Overload now also applies an Electrocution effect to enemies in melee range, causing enemies hit to also take 15% more damage for 8s.
~~~

## English comparison

The English matches the overload trigger, Electrocution effect on enemies hit, 15% more damage taken and 8-second duration. Its melee-range wording does not provide a numerical radius or explicitly contradict the fixed 8-metre area. The zero-damage explosion and one-stack refresh are supplements; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_bigger_explosion.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/a59865c6-45fb-4f1e-b360-b8100e541a00). The icon identifies the talent; it is not mechanism evidence.
