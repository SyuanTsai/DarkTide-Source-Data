# Cyber-Mastiff tag command: source evidence

[繁體中文](../adamant_command_dog_with_tag.md) | [Base effects](BASE_EFFECTS.md#adamant_command_dog_with_tag) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_command_dog_with_tag)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `adamant_command_dog_with_tag`; no selectable talent point is spent.

## Source-confirmed behavior and static derivation

- The base talent supplies a name and description. The class-specific smart-tag system implements the command. The HUD reads `companion_command_tap` as `single` or `double_tap` and passes `is_double_tag`. `SmartTagExtension` selects the `adamant` resolver, requires an enemy breed and an existing companion, and returns `enemy_companion_target`.
- `enemy_companion_target` uses the `unit_threat_companion` tag, lifetime 25s and a double-tag group limit of 1. Each update, `CompanionTagManagerBaseExtension` reads the owner tags. The dog extension writes a valid living target to `whistle.current_target`. Moving platforms cancel the command; an unaggroed Daemonhost is not set as a new target.
- Target selection handles owner rescue before `whistle.current_target`. The commanded target must remain alive and obtain an attack token. An invalid command is cleared; normal combat scoring is used when no valid command target remains.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/adamant_archetype.lua — L66-L68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L66-L68)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L30-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L30-L34)
- [scripts/ui/hud/elements/smart_tagging/hud_element_smart_tagging.lua — L246-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/hud/elements/smart_tagging/hud_element_smart_tagging.lua#L246-L303)
- [scripts/extension_systems/smart_tag/smart_tag_extension.lua — L169-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smart_tag/smart_tag_extension.lua#L169-L194)
- [scripts/extension_systems/smart_tag/smart_tag_extension.lua — L238-L259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/smart_tag/smart_tag_extension.lua#L238-L259)
- [scripts/settings/smart_tag/double_tag_settings.lua — L3-L12](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag_settings.lua#L3-L12)
- [scripts/settings/smart_tag/double_tag/adamant_double_tag_settings.lua — L3-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag/adamant_double_tag_settings.lua#L3-L18)
- [scripts/settings/smart_tag/double_tag/adamant_double_tag_templates.lua — L9-L20](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/double_tag/adamant_double_tag_templates.lua#L9-L20)
- [scripts/settings/smart_tag/smart_tag_settings.lua — L9-L15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/smart_tag/smart_tag_settings.lua#L9-L15)
- [scripts/extension_systems/companion_tag_manager/companion_tag_manager_base_extension.lua — L25-L50](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/companion_tag_manager/companion_tag_manager_base_extension.lua#L25-L50)
- [scripts/extension_systems/companion_tag_manager/companion_tag_manager_dog_extension.lua — L12-L56](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/companion_tag_manager/companion_tag_manager_dog_extension.lua#L12-L56)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L108-L203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L108-L203)

## Example assumptions and limits

- **Target command**: Tagging an enemy with the companion command makes your Cyber-Mastiff prioritize that target. Input settings can use a single tap or double tap. One command target is retained at a time, with a maximum tag lifetime of 25s.

- **Priority**: If the owner is disabled, for example pinned by a Pox Hound or grabbed, rescue selection takes priority over the command target. Otherwise, the companion first tries a valid commanded target, then chooses targets automatically.

- **Limits**: An unaggroed Daemonhost is not a valid new command target. Entering a moving platform cancels the command. Target survival, attack eligibility and pathing still limit the actual chase.

If commanded target A is valid, it is prioritized. Switching to B retains one command target; qualifying owner rescue takes priority. Input depends on the player setting, so no physical keyboard/controller button is specified. The 25s tag lifetime is an upper limit, not a guarantee of continuous attacking or reaching the target. Rescue remains subject to `initial_target_disable_cooldown` after state entry, target and movement conditions.

Values and behavior reuse the verified fixed-version evidence. These are static explanations, not in-game input tests. The local English Build and fixed source both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Display-name key `loc_arbites_customization_dog_title`, hash `3ff1128e`, entry 4160: **Companion**. The document heading identifies the command behavior.
- Description key `loc_talent_arbites_mastiff_target_description`, hash `abf97cfc`, entry 11067.

Full raw text; no placeholders:

~~~text
Double Tap (tag button) to make your Cyber-Mastiff target an enemy.
~~~

## English comparison

The independently read English command is supported by the double-tap input option. It omits the single-tap preference, one-target limit, 25s lifetime, rescue priority, target validity, automatic fallback and moving-platform/Daemonhost restrictions. The fixed double-tap instruction should not be read as covering all configured input modes. No explicit English contradiction is established for the stated double-tap case.
