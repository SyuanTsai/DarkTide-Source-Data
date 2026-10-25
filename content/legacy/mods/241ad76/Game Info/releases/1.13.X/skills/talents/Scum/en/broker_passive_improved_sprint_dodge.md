# Like the Wind: base passive source evidence

[繁體中文](../broker_passive_improved_sprint_dodge.md) | [Base effects](BASE_EFFECTS.md#broker_passive_improved_sprint_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_improved_sprint_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `broker_passive_improved_sprint_dodge`; no selectable talent point cost. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `broker_archetype.lua` lists `broker_passive_improved_sprint_dodge` as a default base talent. It applies both `broker_passive_improved_sprint_dodge` and `broker_passive_increased_dodges`. The former lowers the Sprint Dodge angle threshold and has the `sprint_dodge_in_overtime` keyword; the latter gives `extra_consecutive_dodges = 1`.
- The character's base Sprint Dodge angle is 70°. `Sprint.is_sprint_dodging` subtracts `stat_buffs.sprint_dodge_reduce_angle_threshold_rad` from 70°, then compares this with the incoming enemy's angle relative to the player's facing. Scum reduces it by 15°, giving 70° − 15° = 55°. The Dodge check requires `look_away_angle` greater than that threshold.
- When Sprint Stamina runs out, the Sprint state sets `sprint_overtime` to a positive value. Normally this state cannot trigger Sprint Dodge. The base passive's `sprint_dodge_in_overtime` keyword allows `Sprint.is_sprint_dodging` to pass this check.
- Consecutive Dodge decay begins at the weapon's `dodge_template.diminishing_return_start` (default 2) plus `extra_consecutive_dodges`; this passive adds 1. The actual starting count depends on the current weapon's template, and subsequent decay still follows that weapon's rules.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/broker_archetype.lua — L65-L67](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L65-L67)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L29-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L29-L59)
- [scripts/settings/talent/talent_settings_broker.lua — L228-L233](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L228-L233)
- [scripts/settings/talent/talent_settings_broker.lua — L307-L312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L307-L312)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1032-L1038](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1032-L1038)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1325-L1341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1325-L1341)
- [scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua — L141-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua#L141-L180)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua — L348-L369](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L348-L369)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L246-L260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L260)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L49-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L49-L59)
- [scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua — L10-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua#L10-L18)

## Examples and limits

- A base Sprint Dodge threshold of 70° becomes 55° after the 15° adjustment. An incoming angle of 60° fails the original threshold but passes after this passive because it is greater than 55°.
- If the weapon template's decay starting value is 2, the extra +1 makes it 3. A different weapon template changes the actual number.
- This passive changes the angle check for Dodging Ranged Attacks while Sprinting and permits the check during Sprint overtime after Stamina runs out. It does not increase every Dodge direction, duration or distance.
- Total Effective Consecutive Dodges still depend on `dodge_template` and the weapon's decay settings. The +1 is added to the weapon template's decay starting value.
- Local text from Build 25606770 corresponds to the fixed public source's version 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_improved_sprint_dodge`, hash `9ac70c19`, entry 9975: **Like the Wind**.
- Description key `loc_talent_broker_iconic_improved_dodges_desc`, hash `993a0d69`, entry 9884.

Full raw template:

~~~text
You are able to dodge while sprinting even when Stamina is depleted, and have a {dodge_angle:%s} degree Dodge Angle. {dodge_count:%s} Effective Dodges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dodge_angle` | `sprint_dodge_reduce_angle_threshold_rad`: 15° in radians | Convert to degrees and round; zero decimals with `+`: `+15` |
| `dodge_count` | `extra_consecutive_dodges = 1` | Number with `+`: `+1` |

Display mapping: `broker_talents.lua` L29-L59. Angle and count reuse the accepted `talent_settings_broker.lua` L228-L233 and L307-L312 values. The displayed +15 degree Dodge Angle describes the wider allowed angle; the accepted implementation subtracts 15° from the threshold.

Static reconstruction; not an observed game screen:

~~~text
You are able to dodge while sprinting even when Stamina is depleted, and have a +15 degree Dodge Angle. +1 Effective Dodges.
~~~

## English comparison

The independently read English says Dodging while Sprinting remains possible with depleted Stamina, grants +15 degree Dodge Angle and +1 Effective Dodges. The accepted overtime keyword supports the depleted-Stamina statement. Subtracting 15° from the Sprint Dodge threshold widens the permitted angle as described; +1 matches the extra consecutive Dodge stat. The strict angle threshold, Ranged Attack scope and weapon-dependent decay rules supplement the text. No clear contradiction appears.
