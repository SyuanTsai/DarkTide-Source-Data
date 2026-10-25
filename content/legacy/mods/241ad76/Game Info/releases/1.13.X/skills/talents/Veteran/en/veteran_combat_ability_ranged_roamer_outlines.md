# Counter-Fire: source evidence

[繁體中文](../veteran_combat_ability_ranged_roamer_outlines.md) | [Player description](README.md#veteran_combat_ability_ranged_roamer_outlines) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_ranged_roamer_outlines)

## Identity and added targets

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Ability modifier; the node costs one talent point. [Modifier node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L832-L857); [Selected outline rule and display name](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L353-L372).
- Talent: `veteran_combat_ability_ranged_roamer_outlines`. Name key `loc_talent_veteran_combat_ability_ranged_enemies_outlines`, hash `7b0f97a3`: **Counter-Fire**.
- Actual description key `loc_talent_veteran_combat_ability_ranged_enemies_outlines_description`, hash `cc0d22dd`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- This adds the ranged-roamer outline rule to [Executioner's Stance](veteran_combat_ability_elite_and_special_outlines.md). Eligibility accepts `breed.volley_fire_target` when the rule is enabled, after excluding unenabled Ogryn/Monster/Captain categories. The ordinary Elite/Special outline rules remain. [Selected outline rule and display name](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L353-L372); [Outline categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477).
- Established examples are `renegade_rifleman` and `cultist_assault`. The same-version English UI names are **Scab Shooter** (`loc_breed_display_name_renegade_rifleman`, hash `bfbd7cab`) and **Dreg Stalker** (`loc_breed_display_name_cultist_assault`, hash `3b97772d`). These are examples, not an exhaustive enemy list. [Renegade Rifleman target flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/renegade/renegade_rifleman_breed.lua#L45-L71); [Cultist Assault target flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/cultist/cultist_assault_breed.lua#L45-L69).

## Outline range and kill refresh

- Ordinary non-Special candidates must be strictly less than **50 metres** from the owner when the outline list is built or rebuilt. The distance test is for candidate outlines, not for the owner's later kill eligibility. [Outline categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477); [Normal and increased duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99).
- The stance's owner-kill check uses `_can_show_outline` and the selected category rules. It does not require a ranged attack, a weakspot hit, an actually visible outline or a repeated 50-metre distance test. Killing one of the added eligible types can therefore refresh the stance even outside the outline range. [Owner kill classification and stance refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L198); [Outline categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477); [Accepted common stance behavior](veteran_combat_ability_elite_and_special_outlines.md#stance-recovery-and-outlining).
- A qualifying kill refreshes the master instance to its full duration: **six seconds** normally, or **nine seconds** with the large-enemy outline modifier's master variant. It resets the remaining timer rather than adding a full duration to it. [Owner kill classification and stance refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L198); [Nine-second master variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L222-L223); [Normal and increased duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99); [Refresh an existing instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457).
- This modifier adds target categories. The internal definition's `name` mentions a weakspot bonus, but its executable rule and actual English description supply no new weakspot-damage effect. Internal labels are not proof of an applied stat. [Selected outline rule and display name](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L353-L372); [Outline categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477).

## Timing and range examples

Assume the stance is active, the owner's kill otherwise qualifies, the named six- or nine-second master is selected, and no further refresh occurs after the listed kill. Distances are measured at candidate-list creation; timing ignores update-frame and visual offsets. These are static examples, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Normal stance at time 0; eligible kill at 4s | Remaining `6 − 4 = 2s` resets to `6s`; expiry becomes `4 + 6 = 10s`. | The added target category can refresh the ordinary stance to about time 10s. |
| Nine-second master selected; eligible kill at 4s | Remaining `9 − 4 = 5s` resets to `9s`; expiry becomes `4 + 9 = 13s`. | The selected longer master refreshes to nine seconds, not six. |
| Ordinary eligible shooter at 49m versus exactly 50m | `49² / 50² = 0.9604 < 1`; exactly 50m gives `1` and fails `< 1`. | The outline candidate boundary is strict. |
| Normal stance; added eligible target at 55m; owner kills it at 4s | Outline ratio `55² / 50² = 1.21` fails; kill eligibility has no distance retest, so expiry can still become `4 + 6 = 10s`. | Absence from the candidate outline list does not itself prevent a category-qualified kill refresh. |

[Outline categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477); [Owner kill classification and stance refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L198); [Normal and increased duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99); [Nine-second master variant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L222-L223); [Refresh an existing instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457).

## Original English template and reconstruction

Full raw template, hash `cc0d22dd`:

```text
{talent_name:%s} now outlines all human-sized Ranged Enemies.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `talent_name` | `loc_talent_veteran_combat_ability_elite_and_special_outlines`, hash `1a42be01`; localized string | `Executioner's Stance` |

[Selected outline rule and display name](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L353-L372); [Localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L427).

Static plain-text reconstruction:

```text
Executioner's Stance now outlines all human-sized Ranged Enemies.
```

Runtime color markup is excluded; this is not an observed game screen. The added eligible ranged-target category agrees with the selected rule. Range, kill refresh, attack-type independence and separate duration variants supplement the short sentence. The internal weakspot label is not a claim in the actual English template, so it creates no English erratum.

## Limits and the word all

The exact full set represented by the informal **all human-sized Ranged Enemies** wording has not been established by the available example-breed evidence. The concrete implementation uses `volley_fire_target` plus the retained category rules; the examples do not prove universal coverage or a counterexample. That broad wording is **Cannot confirm**, rather than a proven contradiction. Actual enemy outlines, timing and final game UI have not been measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_ranged_roamer_outlines.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/ca186661-9499-4f3f-9449-596caa35b7b6)

The icon identifies the talent; it is not mechanism evidence.
