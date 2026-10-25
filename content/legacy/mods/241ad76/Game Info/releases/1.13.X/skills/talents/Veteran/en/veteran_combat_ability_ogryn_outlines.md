# The Bigger they Are ...: source evidence

[繁體中文](../veteran_combat_ability_ogryn_outlines.md) | [Player description](README.md#veteran_combat_ability_ogryn_outlines) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_ogryn_outlines)

## Identity, duration and added categories

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Ability modifier; the node costs one talent point. [Modifier node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1686-L1709); [Selected modifier and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L373-L405).
- Talent: `veteran_combat_ability_ogryn_outlines`. Exact English name key `loc_talent_ranger_volley_fire_big_game_hunter`, hash `10c563cd`: **The Bigger they Are ...**. The original casing, spaces and three dots are preserved.
- Actual description key `loc_talent_veteran_combat_ability_ogryn_outlines_damage_description`, hash `3a6dce0c`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The selected rule makes the action use the increased-duration stance master, whose clone lasts **nine seconds** instead of six. The owner's outline template also selects a nine-second clone. [Selected modifier and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L373-L405); [Select the longer stance master](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_veteran_combat_ability.lua#L181-L191); [Nine-second master clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L219-L223); [Nine-second owner outline clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L268-L269); [Duration and retained damage format setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L76-L99).
- Added eligibility accepts `ogryn`, `monster`, `captain` and `cultist_captain` breed tags. These are the Ogryn, Monstrosity and Captain categories described by the English sentence, including Cultist Captains. Non-Special candidates still require `distance_squared < 50²`; Specialists bypass that distance filter. [Added categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477); [Duration and retained damage format setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L76-L99).

## Kill refresh and separate shared outlines

- The owner's qualifying kills of added eligible types also refresh the stance. The check uses enemy categories, without requiring an actual visible outline or a repeated distance test. Reapplication resets the selected master to its full **nine seconds**, rather than adding nine to the old remainder. [Owner kill classification and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L198); [Added categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477); [Nine-second master clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L219-L223); [Refresh an existing instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Accepted common stance behavior](veteran_combat_ability_elite_and_special_outlines.md#stance-recovery-and-outlining).
- [Enhanced Target Priority](veteran_combat_ability_coherency_outlines.md) uses its separate **five-second** ally template and restricted shared Elite/Special categories. This owner's nine-second outline variant does not turn the shared recipient duration into nine seconds or share the additional large-enemy categories. [Nine-second owner outline clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L268-L269); [Separate five-second shared recipient template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293); [Shared recipient duration setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L158-L160); [Added categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477).

## Retained damage field is unused

The talent defines `damage = combat_ability.damage_vs_ogryn_and_monsters = 0.25` with signed percentage formatting. However, the actual raw English template has no `damage` placeholder. Its installed passive has `conditional_stat_buffs = {}`; the stance-active condition does not populate that empty table. This modifier therefore applies **no additional 25% damage bonus against Ogryn/Monster targets** through that passive. The inherited Executioner's Stance damage modifiers are separate. [Selected modifier and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L373-L405); [Duration and retained damage format setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L76-L99); [Empty conditional damage-stat table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L342-L356); [Inherited damage stages](veteran_combat_ability_elite_and_special_outlines.md#damage-stages-and-isolated-upgrade-examples).

The unused field and empty stat table are not an English description contradiction: the actual sentence promises added outlines and a nine-second duration, without a damage claim.

## Duration, range and modifier examples

Assume the stated normal or longer master is selected, an owner kill otherwise qualifies, and no later refresh occurs. Distances are measured when outline candidates are built; timing ignores update-frame and visual offsets. The damage row holds every inherited component and other modifier fixed at the same active-stance instant and isolates this modifier alone. These are static examples, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Compare nominal six- and nine-second stance durations | `9 − 6 = 3 seconds`; `3 / 6 = 50%` longer. | The modifier adds three seconds to the nominal duration; this is not a 50% damage increase. |
| Nine-second stance at time 0; eligible owner kill at 7s | Remaining `9 − 7 = 2s` resets to `9s`; expiry becomes `7 + 9 = 16s`. | Refresh moves expiry to about time 16s; it does not give eleven seconds remaining. |
| Ordinary eligible large enemy at 49m versus exactly 50m | `49² / 50² = 0.9604 < 1`; exactly 50m gives `1` and fails `< 1`; a Specialist bypasses this test. | Added enemy categories retain the strict ordinary outline range and Specialist exemption. |
| Existing active-stance damage result 100 units against an eligible large target; compare this modifier alone | Additional species-damage modifier from this passive is `0`; the existing `100 damage units` remain `100`. | The unused 25% field does not turn this isolated result into 125; inherited stance bonuses are already included in the fixed input. |

[Nine-second master clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L219-L223); [Duration and retained damage format setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L76-L99); [Owner kill classification and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L198); [Refresh an existing instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Added categories and candidate range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L374-L477); [Empty conditional damage-stat table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L342-L356).

## Original English template and reconstruction

Full raw template, hash `3a6dce0c`:

```text
{talent_name:%s} now outlines all Ogryn, Captain, and Monstrosity Enemies and has its duration increased to {duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `talent_name` | `loc_talent_veteran_combat_ability_elite_and_special_outlines`, hash `1a42be01`; localized string | `Executioner's Stance` |
| `duration` | `combat_ability.duration_increased = 9`; number formatting | `9` |
| `damage` | Retained setting `0.25`; signed percentage formatting, but no placeholder in the raw template | Unused; would format as `+25%`, but this passive supplies no added stat |

[Selected modifier and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L373-L405); [Duration and retained damage format setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L76-L99); [Empty conditional damage-stat table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L342-L356); [Number, percentage and localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L427).

Static plain-text reconstruction:

```text
Executioner's Stance now outlines all Ogryn, Captain, and Monstrosity Enemies and has its duration increased to 9s.
```

Runtime color markup is excluded; this is not an observed game screen. The selected duration and added category rules agree with the English sentence. Range, owner-kill refresh, separate ally sharing and the unused damage field are supplementary details, not supported English errata.

## Limits

Actual outline visibility, enemy outcomes, damage measurements and frame timing have not been tested in game. The damage example isolates the modifier with inherited effects held fixed; it is not a complete weapon comparison or a statement that activating the full stance adds no damage.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_ogryn_outlines.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/0df9e7bd-7394-4f93-ba54-f8f6d2884d02)

The icon identifies the talent; it is not mechanism evidence.
