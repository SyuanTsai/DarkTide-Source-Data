# Valuable Distraction: source evidence

[繁體中文](../ogryn_taunt_damage_taken_increase.md) | [Player description](README.md#ogryn_taunt_damage_taken_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_taunt_damage_taken_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_taunt_damage_taken_increase`; name key `loc_talent_ogryn_taunt_damage_taken_increase`; description key `loc_talent_ogryn_taunt_damage_taken_increase_description`. Node `node_2eef5b19-a13a-4f02-92f6-850ce20bb84f`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent's special rule makes `shout_target_templates.ogryn_shout` apply `ogryn_taunt_increased_damage_taken_buff` to affected enemies. Duration 15s, maximum stacks 1, `refresh_duration_on_stack=true`, and `stat_buffs.damage_taken_multiplier=1.2`.
- The same shout target also applies `taunted`. In `weapon_buff_templates`, this has `unique_buff_id=taunted` and duration 15s. On reapplication, `buff_extension_base._handle_unique_buffs` removes the old instance before adding the new one, restarting the taunt duration.
- `shout_target_templates` uses distinct exclusion fields for Daemonhost, mutator Daemonhost and Ritualist targets, among others. `ShoutAbility` is the consumer that applies the enemy buffs.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L115-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L115-L145)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L479-L488](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L479-L488)
- [scripts/settings/ability/shout_target_templates.lua — L67-L86](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L67-L86)
- [scripts/extension_systems/ability/utilities/shout_ability.lua — L90-L161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L90-L161)
- [scripts/settings/buff/weapon_buff_templates.lua — L1174-L1182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1174-L1182)
- [scripts/extension_systems/buff/buff_extension_base.lua — L529-L557](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L529-L557)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L415-L437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L415-L437)
- [scripts/utilities/attack/damage_calculation.lua — L587-L626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L115-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L115-L145)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1366-L1390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1366-L1390)

## Example assumptions and limits

- **Effect and duration**: Enemies affected by a Loyal Protector taunt wave take 20% more damage from all sources for 15s. You and your teammates benefit. Subsequent taunt waves restart the timer without adding percentages.

- **Damage example**: With other conditions fixed, 100 damage becomes 100 × 1.2 = 120. If the enemy also has Soften Them Up's 15% damage-taken increase, the two act at different stages: 100 × 1.15 × 1.2 = 138.

The increase is a 1.2 multiplier on damage taken by affected enemies. Final damage still depends on the target and other damage modifiers. Special enemies excluded by the target settings receive neither the taunt nor this damage increase. English and code evidence both correspond to 1.13.1; differences in actual behavior still require in-game confirmation. Omitted details are treated as supplementary information.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_taunt_damage_taken_increase`, hash `f8d4d8b8`, entry 16161: **Valuable Distraction**.
- Description key `loc_talent_ogryn_taunt_damage_taken_increase_description`, hash `07b19158`, entry 469.

Full raw template:

~~~text
Enemies affected by {talent_name:%s} take {base_damage:%s} Base Damage from all sources.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_ability_ogryn_taunt_shout | Localized string → Loyal Protector; accepted English key |
| base_damage | damage_taken_multiplier 1.2 | Custom manipulation round((1.2 − 1) × 100) → 20; percentage with + prefix → +20% |

The missing English display mapping was read only in the already cited talent definition, lines 115–145. Existing formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Enemies affected by Loyal Protector take +20% Base Damage from all sources.
~~~

## English comparison

The independently read English gives +20% damage from all sources against affected enemies. That agrees with the accepted 1.2 damage-taken multiplier. The capitalized term Base Damage does not itself specify a calculation stage; the 15s refresh, separate taunt instance, target exclusions and combined damage example supplement the statement. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_taunt_damage_taken_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/594ab4d6-12e3-4941-bf1a-c5812b128b23). The icon identifies the talent; it is not mechanism evidence.
