# Low Profile: source evidence

[繁體中文](../veteran_reduced_threat_after_combat_ability.md) | [Player description](README.md#veteran_reduced_threat_after_combat_ability) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reduced_threat_after_combat_ability)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: ability modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L610-L632); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1268-L1302).
- Talent: `veteran_reduced_threat_after_combat_ability`. Name key `loc_talent_veteran_reduced_threat_after_combat_ability`, hash `6a142c22`: **Low Profile**.
- Actual description key `loc_talent_veteran_reduced_threat_after_stealth_desc`, hash `7d63094b`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Threat weight and ability triggers

- The talent loads the shared ability-trigger buff and its special rule. For non-Stealth abilities, the shared `on_combat_ability` handler adds the reduced-threat buff. [Infiltrate](veteran_invisibility_on_combat_ability.md) adds the same buff separately when Stealth starts. The shared handler's Stealth exclusion does not mean that Infiltrate fails to trigger Low Profile. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1268-L1302); [Ability trigger and threat template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031); [Grant on Stealth start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1219-L1221).
- `threat_weight_multiplier = 0.1` multiplies the relevant enemy target-selection weight by one tenth: a **90% reduction in that weight**. This is a scoring multiplier, not a 90% reduction in the probability of being attacked. Other target-selection conditions can still lead an enemy to choose you. [Threat multiplier setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L155-L157); [Ability trigger and threat template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031); [Target-selection weight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_target_selection.lua#L206-L217).

## Timing, single instance and reapplication

- The custom `VeteranStealthBonusesBuff` has no ordinary duration countdown while the Stealth buff is present. Low Profile is already active during Stealth. On first observing that Stealth is absent, it sets `_stop_t = t + 10`; removal follows that deadline. A non-Stealth ability reaches this absence check on its first update and starts the ten-second timer there. [Ability trigger and threat template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031); [Grant on Stealth start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1219-L1221); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44).
- The template uses `max_stacks = 1` and `refresh_duration_on_stack = true`. It does not stack additional threat reductions. Reapplying while that instance still exists invokes the shared stack/start-time handling, but that handling does not reset the custom `_stop_t` or `_in_invisibility` fields. Once the ten-second countdown has begun, another application does **not** restart it as a fresh ten-second period. [Ability trigger and threat template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031); [BuffExtensionBase instance handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Buff.add_stack refresh handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639); [Buff.set_start_time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L339-L348); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44).

## Threat and timing examples

For the weight example, hold all other target-selection conditions constant and isolate the weight stage changed by this talent. Timing examples assume one existing Low Profile instance and ignore update-frame boundaries. Reapplication means another grant while that same instance still exists; these are static examples, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Original weight is 100 | `100 × (1 − 0.90) = 100 × 0.1 = 10 weight units`. | The affected score is reduced by 90%; this does not establish a 10% chance of being attacked. |
| Leave Infiltrate at about 3 seconds after activation | The deadline is about `3 + 10 = 13 seconds` after activation. | Coverage includes Stealth and ten more seconds after exit. |
| The same instance's countdown starts at about 3s; another grant occurs at about 7s | The deadline remains about `3 + 10 = 13s`, leaving `13 − 7 = 6s`; it does not become `7 + 10 = 17s`. | A second grant during this countdown does not extend the active instance or compound its threat reduction. |

[Target-selection weight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_target_selection.lua#L206-L217); [Ability trigger and threat template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031); [VeteranStealthBonusesBuff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L44); [Buff.add_stack refresh handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639); [Buff.set_start_time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L339-L348).

## Original English template and reconstruction

Full raw template, hash `7d63094b`:

```text
{threat_multiplier:%s} Threat for {duration:%s}s on leaving Stealth.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `threat_multiplier` | `1 − 0.1 = 0.9`; percentage formatting multiplies by 100 and applies the `-` prefix | `-90%` |
| `duration` | `veteran_reduced_threat_generation.duration = 10`; number formatting | `10` |
| `talent_name` | Defined as localized Infiltrate, but absent from this raw description | Unused by this template |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1268-L1302); [Threat multiplier setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L155-L157); [Ability trigger and threat template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2031); [Percentage and prefix formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L482-L499); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction, preserving original wording:

```text
-90% Threat for 10s on leaving Stealth.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The stated reduction and ten-second post-Stealth coverage match the existing mechanism results. The template does not explicitly limit the effect to that period or that ability: earlier Stealth coverage and non-Stealth triggers are additional details. Single-instance behavior and the unchanged existing deadline are also unstated. No explicit English contradiction or player-page erratum is supported.

## Limits

The isolated weight calculation does not predict actual attack frequency, immunity, or which target an enemy will select. Exact update-frame timing and reapplication behavior have not been measured in game. Do not infer a refreshed custom deadline solely from the shared refresh flag.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_reduced_threat_after_combat_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/7a72c16f-0170-458e-9bd4-4d585cf523d3)

The icon identifies the talent; it is not mechanism evidence.
