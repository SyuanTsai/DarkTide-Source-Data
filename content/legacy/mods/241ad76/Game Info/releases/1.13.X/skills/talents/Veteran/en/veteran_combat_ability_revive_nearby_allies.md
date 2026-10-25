# Only In Death Does Duty End: source evidence

[繁體中文](../veteran_combat_ability_revive_nearby_allies.md) | [Player description](README.md#veteran_combat_ability_revive_nearby_allies) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_revive_nearby_allies)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: ability modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1088-L1110); [Selected revive rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605).
- Talent: `veteran_combat_ability_revive_nearby_allies`. Name key `loc_talent_veteran_combat_ability_revives`, hash `9533a7e9`: **Only In Death Does Duty End**.
- Actual description key `loc_talent_veteran_combat_ability_revives_new_description`, hash `1ae25548`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Revive rule and eligible allies

- The node installs `special_rules.shout_revives_allies`, with no `passive`. The `veteran_shout` target configuration has `allies.revive_allies = true`. `ShoutAbility._handle_allied_targets` queries allied players within `radius × shout_radius_modifier`, checks `PlayerUnitStatus.is_knocked_down`, then sets `force_assist = true`. It iterates the queried allies rather than selecting only one. No damage or kill trigger is required. [Selected revive rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605); [Shout target configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L51-L66); [Allied target query and Knocked Down check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L230-L296).
- The eligible state is **Knocked Down**. Being netted or pinned by an enemy, hanging from an edge, or awaiting rescue after death is not the Knocked Down condition used by this revive rule. The assistance is automatic rather than requiring the caster to hold a manual revive interaction for each ally. [Allied target query and Knocked Down check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L230-L296).

## Unattached modifier data and the live baseline

- The same-named buff contains `combat_ability_resource_cost_per_use_modifier = +0.5` and `shout_radius_modifier = −0.33`. If applied, these would mean **50% higher cost** and **33% smaller radius**, not shorter cooldown or greater range. This node reads the buff through `find_value` for formatting but does not install it as a passive. [Unattached same-named buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2509-L2516); [Selected revive rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605).
- `CharacterSheet` converts `talent.passive` entries into `class_loadout.passives`; `TalentExtension` applies that list. The selected node contributes its revive special rule without the same-named modifier buff. [Passive loadout construction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L325-L343); [Applying the passive loadout](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L130-L170); [Selected revive rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605).
- With no other modifiers, radius remains **9 metres**, resource cost **40 units per use**, and regeneration **1 unit/s**: one fully missing use takes **40 seconds**. The display definitions are not proof that the unused modifiers affect the player. [Squad Leader base settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201); [Selected ability values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87); [Base regeneration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Resource-cost accounting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1459); [Ability template and action flow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/veteran_combat_ability.lua#L5-L100).

## Range, state and cooldown examples

Assume the selected Voice of Command revive modifier, no additional radius/cost/recovery effects, and the stated ally states and distances. Ignore update-frame boundaries. These are static examples from the existing mechanism, not game observations.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Three Knocked Down allies at 5m, 8m and 10m | `5 < 9` and `8 < 9`, while `10 > 9`. | The first two are inside the configured radius and can both be revived by one use; the third is outside. |
| One fully spent use; 40-unit cost and 1 unit/s recovery | `40 units / (1 unit/s) = 40 seconds`. | This node does not apply the unused cost penalty; other modifiers can change the recharge time. |
| A Knocked Down ally and a netted ally, both at 8m | Both satisfy `8 < 9`, but only the Knocked Down ally satisfies this rule's state check. | Range alone does not make every incapacitated state eligible for this automatic revive. |

[Allied target query and Knocked Down check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L230-L296); [Squad Leader base settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L195-L201); [Selected ability values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L81-L87); [Base regeneration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L24); [Resource-cost accounting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1437-L1459); [Selected revive rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605).

## Original English template and reconstruction

Full raw template, hash `1ae25548`:

```text
{talent_name:%s} revives Knocked Down Allies within Radius.
```

| Parameter | Definition and formatting | Use in this raw template |
|---|---|---|
| `talent_name` | Localized `loc_talent_veteran_combat_ability_stagger_nearby_enemies`, English hash `36c11826` | Reconstructed as `Voice of Command` |
| `ability_cooldown` | Percentage definition reads the unattached buff's resource-cost modifier `+0.5` | Unused; the raw template has no cooldown token |
| `range` | Definition reads the unattached radius modifier `−0.33`, with an absolute-value/rounding manipulation | Unused; the raw template has no numeric range token |

[Selected revive rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L565-L605); [Unattached same-named buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2509-L2516); [Localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L427).

Static plain-text reconstruction:

```text
Voice of Command revives Knocked Down Allies within Radius.
```

This excludes runtime color markup and is not an observed game screen. The actual English agrees with the revive action, Knocked Down state and generic radius restriction. It makes no numeric radius, cooldown or modifier claim. The 9m/40s baseline, multiple eligible allies and state exclusions supplement the short text. The unattached modifier data therefore does not support an English erratum; no explicit contradiction is established.

## Limits

The established 9m/40s static baseline should be checked in game, together with exact assistance timing and target-state boundaries. These have not been measured in this translation task. Unused display definitions are distinct from installed buffs and from the actual English description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_revive_nearby_allies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/a8bcdde1-34e3-449d-9b46-e9130865b285)

The icon identifies the talent; it is not mechanism evidence.
