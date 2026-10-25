# Fire Away: source evidence

[繁體中文](../ogryn_explosions_burn.md) | [Player description](README.md#ogryn_explosions_burn) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_explosions_burn)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_explosions_burn`; name key `loc_talent_ogryn_explosions_burn_name`; description key `loc_talent_ogryn_explosions_burn_close_desc`. Node `node_a9fe859e-7658-4005-9c31-aa61e2d76638`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `close_explosion_hit` selects `close_stacks=2` or `stacks=1`, with maximum 8. `powermaul_explosion` is blacklisted.
- Uses `flamer_assault` and the shared 31-stack curve, duration 4s, interval 0.5s and `interval_stack_removal`. The `burning` profile's 400 × Unarmoured modifier 1.5 gives the 600 coefficient.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2383-L2387](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2383-L2387)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2441-L2480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2441-L2480)
- [scripts/settings/talent/talent_settings_ogryn.lua — L19-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L19-L23)
- [scripts/settings/buff/weapon_buff_templates.lua — L50-L78](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L19-L28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L28)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L301-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/utilities/attack/damage_calculation.lua — L219-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2113-L2135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2113-L2135)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1671-L1693](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1671-L1693)

## Example assumptions and limits

- **Trigger**: An explosion that damages an enemy still alive afterward applies 1 Burn stack. A hit in that explosion's central area applies 2 stacks instead, not an additional 2. The specified Power Maul explosion does not trigger it.

- **Stacks and timing**: This talent can bring Burn up to 8 stacks. Further triggers reset the 4s maintenance duration, including when already at 8 stacks. Damage occurs about every 0.5s; after the maintenance duration ends, stacks are removed progressively.

- **Damage formula**: Against Unarmoured targets with no other modifiers, each Burn tick deals `600 × (stacks ÷ 31)² × [3 − 2 × (stacks ÷ 31)]`. The denominator uses the shared Burn cap of 31, rather than this talent's application cap of 8.

- **Damage example**: Two stacks deal about 7.17 damage per tick; eight deal about 99.25. Armour and other damage bonuses affect actual values, and one tick's damage is not the total over the complete duration.

#### Chinese localization note

- The Chinese wording adds 2 stacks at close range and can be read as a total of 3. The actual central-area hit instead applies 2 stacks total.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_explosions_burn_name`, hash `9c8e3f4e`, entry 10103: **Fire Away**.
- Description key `loc_talent_ogryn_explosions_burn_close_desc`, hash `2024bc9e`, entry 2097.

Full raw template:

~~~text
Your Explosions apply {stacks:%s} Stack(s) of Burn. {more_stacks:%s} Stack(s) if close range. Max Stacks {max_stacks:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | shared explosions_burn.stacks = 1 | Number → 1 |
| more_stacks | shared explosions_burn.close_stacks = 2 | Number → 2 |
| max_stacks | shared explosions_burn.max_stacks = 8 | Number → 8 |

Only the missing display mapping in the cited talent definition, lines 2113–2135, was read. Accepted values, mechanisms and common formatting were reused. The [Writer] suffix is export metadata, not part of the description.

Static reconstruction; not an observed game screen:

~~~text
Your Explosions apply 1 Stack(s) of Burn. 2 Stack(s) if close range. Max Stacks 8.
~~~

## English comparison

The independently read English applies one Burn stack, states two stacks if close range, and gives an eight-stack maximum. Read as the alternative total for a close hit, it matches the accepted 1-or-2 selection; it does not say two additional stacks. The Chinese-only wording correction is not an English erratum. The central explosion-area interpretation, living/damaged target requirement, Power Maul exclusion, refresh/decay and shared damage curve supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_explosions_burn.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/c78dbead-adf5-4b9e-9629-9a3a0a93ae8c). The icon identifies the talent; it is not mechanism evidence.
