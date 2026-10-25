# Light 'em Up: source evidence

[繁體中文](../ogryn_special_ammo_fire_shots.md) | [Player description](README.md#ogryn_special_ammo_fire_shots) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_special_ammo_fire_shots)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_special_ammo_fire_shots`; name key `loc_talent_ogryn_special_ammo_fire_shots`; description key `loc_talent_ogryn_special_ammo_fire_shots_new_desc`. Node `node_e4a4e00d-fd7d-49a8-a67e-7a09372c77da`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent special rule makes `ogryn_ranged_stance.start_func` add `ogryn_ranged_stance_fire_shots`. Its proc accepts only ranged hits on living minions and deduplicates `attacked_unit` per shot.
- Each qualifying hit adds up to `talent_settings.combat_ability_1.num_stacks = 4`, limited by total `max_stacks = 16`. At that limit it calls `refresh_duration_of_stacking_buff`.
- Generic `flamer_assault` is an `interval_buff` with duration 4, interval 0.5, `interval_stack_removal = true`, maximum stacks 31 and `refresh_duration_on_stack = true`. Each tick uses current stack count `n` in `power_level = 500 × (n/31)² × (3 − 2n/31)`, then calls `DamageProfileTemplates.burning`. This Ogryn talent adds only up to 16 actual stacks; 4-stack Power input is about 22.83 and 16-stack input about 262.09.
- After expiry, `interval_buff` removes one stack every 0.5s. The last stack is removed about 0.5s after the 4s retention timer; 16 stacks fully decay in about 12s. The internal talent-definition `name` string mentions 15% Rate of Fire, but this Burn node handles only Burn; Rate of Fire comes from the parent stance. That internal string is not the localized English description.
- Accepted single-tick Health-damage examples convert Power through `damage_output = 0.002`, profile attack and armour modifier. Bleed coefficient `175 × 0.5 = 87.5` and Burn coefficient `400 × 1.5 = 600` are then multiplied by `smoothstep(n/max)`; PowerLevel is not used directly as Health damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1503-L1526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1503-L1526)
- [scripts/settings/talent/talent_settings_ogryn.lua — L194-L202](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L202)
- [scripts/settings/talent/talent_settings_ogryn.lua — L271-L274](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L271-L274)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L93-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1851-L1899](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1899)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2382-L2439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2382-L2439)
- [scripts/settings/buff/weapon_buff_templates.lua — L50-L78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L21-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L21-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L301-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L1-L120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L1-L120)
- [scripts/settings/buff/weapon_buff_templates.lua — L50-L78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/settings/buff/weapon_buff_templates.lua — L235-L259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L19-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L301-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L443-L465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/damage_profile.lua — L386-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1503-L1526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1503-L1526)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1342-L1365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1342-L1365)

## Example assumptions and limits

- **Trigger**: While Point-Blank Barrage is active, ranged hits on a surviving enemy apply 4 Burn stacks per shot to that enemy. Multiple hits from the same shot do not apply stacks again.

- **Stacks and timing**: This talent adds stacks up to 16. Four successive shots can produce 4, 8, 12 and 16 stacks; another hit resets the 4s retention timer. Damage occurs about every 0.5s, followed by gradual stack removal after retention expires.

- **Damage example**: Against an Unarmoured target without other modifiers, each Burn tick deals 600 × (stacks ÷ 31)² × [3 − 2 × (stacks ÷ 31)]. Four stacks deal about 27.39, and 16 about 314.51. These are single-tick values, not total damage over the entire Burn.

Other Burn sources on the target count toward the talent addition limit. Actual Health damage depends on target armour and damage calculation; Power input is not fixed Health damage. Caster Burn-duration attributes can extend retention; approximately 12s assumes no extra extension. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_special_ammo_fire_shots`, hash `482f870d`, entry 4684: **Light 'em Up**.
- Description key `loc_talent_ogryn_special_ammo_fire_shots_new_desc`, hash `a391c6e8`, entry 10557.

Full raw template:

~~~text
Ranged Attacks apply {stacks:%s} Stacks of Burn while {ability:%s} is active. Max Stacks {max_stacks:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | combat_ability_1.num_stacks = 4 | Number → 4 |
| max_stacks | combat_ability_1.max_stacks = 16 | Number → 16 |
| ability | loc_talent_ogryn_combat_ability_special_ammo | Localized name → Point-Blank Barrage |

Referenced name `loc_talent_ogryn_combat_ability_special_ammo`, hash `7e117ab1`, entry 8180: **Point-Blank Barrage**. Only the necessary English display map at L1503–L1526 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Ranged Attacks apply 4 Stacks of Burn while Point-Blank Barrage is active. Max Stacks 16.
~~~

## English comparison

The independently read English matches 4 Burn stacks on ranged attacks during Point-Blank Barrage and maximum 16 stacks from this talent. The surviving-minion condition, per-shot deduplication, refresh behavior, shared 31-stack normalization, tick/retention/decay timing and Power-versus-Health-damage examples supplement the text. Its displayed English makes no additional Rate of Fire claim, so the internal definition name is not treated as an English contradiction. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_special_ammo_fire_shots.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/6f504222-c9bf-4dff-a549-138c3be3bde4). The icon identifies the talent; it is not mechanism evidence.
