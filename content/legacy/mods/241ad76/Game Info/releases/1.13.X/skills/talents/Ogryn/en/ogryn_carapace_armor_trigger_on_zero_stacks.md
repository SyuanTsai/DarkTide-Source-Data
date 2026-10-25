# Pained Outburst: source evidence

[繁體中文](../ogryn_carapace_armor_trigger_on_zero_stacks.md) | [Player description](README.md#ogryn_carapace_armor_trigger_on_zero_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_carapace_armor_trigger_on_zero_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_carapace_armor_trigger_on_zero_stacks`; name key `loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks`; description key `loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks_new_desc`. Node `node_a919d7de-281e-485f-aabb-5d7c18d3aa4c`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The parent buff's `on_stacks_removed_func` checks the threshold only in the child-removal callback; `ogryn_carapace_explosion.stacks=5`. The unique buff lasts 30s, with `has_unique_buff_id` preventing repeated creation during its lifetime.
- On starting the effect, if the character is alive and not knocked down, it calls `Toughness.replenish_percentage(unit,0.5,false,...)`. `false` means stat buffs are not bypassed. It then creates an explosion with `ogryn_carapace_armor_explosion`, radius 2.5m and the `ogryn_charge_finish` profile.
- `stack_offset=-1` makes visible stacks equal internal children minus one. The callback directly checks `num_child_stacks<=5`, so the accepted threshold is 4 visible stacks or fewer, one lower than the 5-stack threshold displayed by both languages.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1693-L1727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1693-L1727)
- [scripts/settings/talent/talent_settings_ogryn.lua — L97-L99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L97-L99)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L683-L760](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L683-L760)
- [scripts/extension_systems/buff/buffs/parent_proc_buff.lua — L170-L191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/parent_proc_buff.lua#L170-L191)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L113-L129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L113-L129)
- [scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua — L95-L125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/ogryn_damage_profile_templates.lua#L95-L125)
- [scripts/utilities/toughness/toughness.lua — L16-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L275)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1693-L1727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1693-L1727)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L740-L762](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L740-L762)

## Example assumptions and limits

- **Trigger**: With Pained Outburst selected, losing a Feel No Pain stack must leave 4 visible stacks or fewer, and at least 30s must have passed since the previous proc.

- **Effect**: Push back enemies within 2.5m and restore 50% of maximum Toughness. This is a pushback burst and deals no direct damage. Restoration applies Feel No Pain's replenishment bonus and is capped by missing Toughness.

- **Example**: After losing a stack and falling to 4, without Toughest!, the base restoration is 50% × (1 + 4 × 3%) = 56% of maximum Toughness. At maximum Toughness 100 and with sufficient deficit, 100 × 56% = 56 is restored. This restoration is skipped while knocked down.

- **English threshold difference**: The same-build English says 5 stacks or below. The accepted internal threshold, after the stack offset, is 4 visible stacks or fewer.

The check uses internal child count rather than the visible count after its stack offset. While knocked down, the explosion is still created, but the start function skips Toughness restoration. The 30s lockout is the unique buff's lifetime; another child removal is required after it expires. All direct-damage armour multipliers in the fixed-source burst profile are 0, so the burst pushes enemies back without direct damage. Local Build 25606770 and the fixed public source both correspond to 1.13.1. The threshold difference is recorded from the independently read English and existing evidence; actual presentation and behavior remain unobserved in game, and the shared difference alone does not establish a Chinese mistranslation.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks`, hash `307e4378`, entry 3147: **Pained Outburst**.
- Description key `loc_talent_ogryn_carapace_armor_trigger_on_zero_stacks_new_desc`, hash `d03260f0`, entry 13450.

Full raw template:

~~~text
When {talent_name:%s} reaches {stacks:%s} stacks or below, you push back Enemies and Replenish {toughness_replenish:%s} Toughness.

This effect can occur once every {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_carapace_armor | Localized string → Feel No Pain |
| stacks | ogryn_carapace_explosion.stacks 5 | Number → 5; the displayed value does not subtract the stack offset |
| toughness_replenish | toughness 0.5 | Percentage with + prefix → +50% |
| cooldown | Unique effect buff duration 30 | Number → 30; template supplies s |

Only the missing display map in the cited talent definition, lines 1693–1727, was read. Existing threshold, mechanism and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
When Feel No Pain reaches 5 stacks or below, you push back Enemies and Replenish +50% Toughness.

This effect can occur once every 30s.
~~~

## English comparison

The independently read English specifies a 5-stack-or-below threshold, +50% Toughness restoration, pushback and a 30s limit. The threshold explicitly differs from the accepted 4 visible stacks after the offset. The base effect and limit agree. The removal callback, later re-trigger requirement, 2.5m radius, zero direct damage, stat-buff interaction and knockdown exception supplement the text. No mechanism research was reopened.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_carapace_armor_trigger_on_zero_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/ee3a1966-a7c3-442f-a852-74a8b8ada09c). The icon identifies the talent; it is not mechanism evidence.
