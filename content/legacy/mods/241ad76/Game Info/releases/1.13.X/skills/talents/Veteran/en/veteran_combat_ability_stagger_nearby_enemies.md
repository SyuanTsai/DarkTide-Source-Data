# Voice of Command: source evidence

[繁體中文](../veteran_combat_ability_stagger_nearby_enemies.md) | [Player description](README.md#veteran_combat_ability_stagger_nearby_enemies) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_stagger_nearby_enemies)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: combat ability; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1057-L1087); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L538-L564).
- Talent: `veteran_combat_ability_stagger_nearby_enemies`. Name key `loc_talent_veteran_combat_ability_stagger_nearby_enemies`, hash `36c11826`: **Voice of Command**.
- Actual description key `loc_talent_veteran_combat_ability_stagger_nearby_enemies_description`, hash `e3ff1400`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Shout, Toughness and cooldown

- This node selects `veteran_combat_ability_shout` with `class_tag = squad_leader`, radius 9, resource cost 40 per charge, and regeneration 1 resource unit per second. The action consumes a use at start; its listed configuration does not pause regeneration, so recharge begins on use. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L538-L564); [Voice of Command ability values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87); [Base ability resource settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Ability template and action flow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L5-L100); [Shout configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L90-L106); [Squad Leader base settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201).
- `ActionVeteranCombatAbility` calls `recover_max_toughness` for the user, clearing `toughness_damage`. This restores **all missing personal Toughness**, rather than the unused `toughness_replenish_percent = 0.5` configuration. Without an ally-recovery modifier, this call does not refill teammates' Toughness. [Self Toughness recovery action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L91); [Recover maximum Toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340); [Squad Leader base settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201).
- `ShoutAbility` uses the `veteran_shout` target template and applies `shout_stagger_veteran`. If the initial application does not cause stagger, it supplies a **heavy** forced-stagger parameter with duration **2.5 seconds**. That parameter is not evidence that every enemy always receives exactly 2.5 seconds of control: enemy resistance, current actions and states still require game observation. [Shout target template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L51-L65); [Shout configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L90-L106); [Shout stagger and fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L137-L149).

## Recovery, recharge and range examples

Assume the unmodified ability, no additional cooldown/resource recovery or ally-recovery effects, and the stated maximum Toughness. Range examples illustrate the configured radius; they do not guarantee the reaction of every enemy state. Ignore update-frame boundaries. These are static calculations, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum Toughness 100, current Toughness 30 | Missing Toughness is `100 − 30 = 70 points`; clearing the damage deficit returns current Toughness to **100**. | The ability refills the user's missing Toughness; it does not increase maximum Toughness. |
| One fully spent ability use | `40 resource units / (1 resource unit/s) = 40 seconds`. | Recharge starts on use under this baseline; other recharge/cost effects change the result. |
| Enemies at distances 8m and 10m | `8 < 9`, while `10 > 9`. | The first is inside the configured target radius and the second is outside it; actual stagger reactions depend on the target. |

[Recover maximum Toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L325-L340); [Self Toughness recovery action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L52-L91); [Voice of Command ability values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87); [Base ability resource settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Squad Leader base settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201); [Shout target template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L51-L65); [Ability template and action flow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L5-L100).

## Original English template and reconstruction

Full raw template, hash `e3ff1400`:

```text
Replenishes your Toughness & Staggers all Enemies within {range:%s}m.

Base Cooldown {cooldown:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `range` | `talent_settings_3.combat_ability.radius = 9`; number formatting | `9` |
| `cooldown` | Selected ability `cooldown = 40`; number formatting | `40` |
| `talent_name` | Defined as localized Voice of Command, but absent from this raw description | Unused by this template |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L538-L564); [Voice of Command ability values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87); [Squad Leader base settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201); [Number and localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L427); [Display parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction, preserving both original paragraphs:

```text
Replenishes your Toughness & Staggers all Enemies within 9m.

Base Cooldown 40s.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The described personal Toughness recovery, general stagger action, radius and base cooldown match the existing mechanism results. The full refill amount, recharge start and fallback parameters add unstated detail. The literal promise of successful stagger for **all** enemy types and states is not established by the existing static dossier; it remains **Cannot confirm**, rather than being labelled an English error without contrary evidence. No explicit English contradiction or player-page erratum is supported.

## Limits

Individual enemies' resistance, current actions, forced-stagger response and exact control duration have not been tested in game. The base ability's self-recovery is separate from modifier effects on allies. Radius alone does not prove the same stagger reaction for every target.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability/veteran_combat_ability_stagger_nearby_enemies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/73961902-95ea-4316-bda1-13b23dac1789)

The icon identifies the talent; it is not mechanism evidence.
