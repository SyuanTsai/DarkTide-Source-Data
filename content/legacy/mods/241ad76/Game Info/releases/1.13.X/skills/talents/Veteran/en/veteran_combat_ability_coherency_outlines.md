# Enhanced Target Priority: source evidence

[繁體中文](../veteran_combat_ability_coherency_outlines.md) | [Player description](README.md#veteran_combat_ability_coherency_outlines) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_combat_ability_coherency_outlines)

## Identity and recipient duration

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Ability modifier; the node costs one talent point. [Modifier node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L781-L803); [Selected rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L406-L429).
- Talent: `veteran_combat_ability_coherency_outlines`. Name key `loc_talent_veteran_combat_ability_coherency_outlines`, hash `e386d7f9`: **Enhanced Target Priority**.
- Actual description key `loc_talent_veteran_combat_ability_coherency_outlines_description`, hash `5a8d783e`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.
- The display field reads `combat_ability.outline_duration = 6`. The shared recipient template instead overrides its cloned duration with `coop_1.outline_short_duration = 5`. The English description therefore reconstructs **6 seconds** while allies receive the configured **five-second** effect. [Selected rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L406-L429); [Display duration and outline range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99); [Shared recipient duration and initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293); [Shared five-second setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L158-L160).

## Grant, recipient scope and refresh

- [Executioner's Stance](veteran_combat_ability_elite_and_special_outlines.md) starts with `apply_outlines = true`; a stance refresh sets it true again. The master update grants outlines only when that flag is true, then clears it. This is a grant at start/refresh, not continuous sharing every frame. [Start and refresh outline flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L129-L160); [Flag-controlled ally grant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L198).
- The grant uses the owner's current `in_coherence_units` and explicitly excludes the owner. Allies who enter Coherency after this grant do not automatically receive the effect before the next grant. [Flag-controlled ally grant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L198).
- `veteran_combat_ability_outlines_coherency` clones the ordinary outline template, with **duration 5**, **maximum stacks 1**, and **refresh on reapplication**. A new grant resets that one instance's remaining timer; it does not add a second stack or add five seconds to the old remaining duration. [Ordinary outline template and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L224-L267); [Shared recipient duration and initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293); [Shared five-second setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L158-L160); [Refresh an existing single instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457).
- Each recipient builds candidates from their own position. Shared outlines enable Elite/Special categories and disable Ranged Roamer and large-enemy rules. Ogryn, Monster, Captain and Cultist Captain categories are excluded before the Elite/Special test. Ordinary eligible Elites require `distance_squared / 50² < 1`; Specialists bypass that filter. [Recipient categories and candidate distance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L375-L465); [Display duration and outline range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99).
- Candidate lists are rebuilt at the recipient effect's start/refresh. This modifier shares the eligible outline effect, rather than copying all the owner's additional outline categories or combat bonuses. Stance and ally outline timers remain separate. [Ordinary outline template and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L224-L267); [Shared recipient duration and initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293); [Recipient categories and candidate distance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L375-L465); [Flag-controlled ally grant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L198); [Owner stance behavior](veteran_combat_ability_elite_and_special_outlines.md#stance-recovery-and-outlining).

## Timing and distance examples

Assume successful grants to allies currently in the owner's Coherency, ordinary eligible enemy categories, no later grants except the listed refresh, and the configured five-second duration. Distances are measured from the recipient, not the owner. Timing ignores update-frame and visual-highlight offsets. These are static examples, not observed outline measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Ally present at activation time 0 and again at qualifying stance refresh at 4s | Initial expiry `0 + 5 = 5s`; new expiry `4 + 5 = 9s`; remaining `5 − 4 = 1s` resets to `5s`. | Expiry moves to about time 9s: five seconds after the grant, rather than five seconds added to the old remainder. |
| Ally enters Coherency at 2s, after the initial grant; next grant at 4s | No new effect at 2s; next grant begins at 4s and expires at `4 + 5 = 9s`. | Entering the range later does not itself deliver the earlier outline grant. |
| Ordinary eligible Elite at 49m versus exactly 50m from the recipient | `49² / 50² = 2401 / 2500 = 0.9604 < 1`; `50² / 50² = 1`, which is not `< 1`. | The 49m Elite enters the candidate list; exactly 50m fails the strict boundary. |
| Ordinary eligible Elite versus Specialist at 55m from the recipient | Elite ratio `55² / 50² = 3025 / 2500 = 1.21` fails; a Specialist bypasses this distance test. | The two eligible categories do not use the same range restriction. |

[Flag-controlled ally grant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L141-L198); [Shared recipient duration and initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293); [Ordinary outline template and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L224-L267); [Recipient categories and candidate distance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L375-L465); [Shared five-second setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L158-L160); [Refresh an existing single instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457).

## Original English template and reconstruction

Full raw template, hash `5a8d783e`:

```text
{talent_name:%s} now outlines Elite & Specialist Enemies for Allies in Coherency for {duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `talent_name` | `loc_talent_veteran_combat_ability_elite_and_special_outlines`, hash `1a42be01`; localized string | `Executioner's Stance` |
| `duration` | `combat_ability.outline_duration = 6`; number formatting | `6`; shared recipient duration is 5 |

[Selected rule and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L406-L429); [Display duration and outline range](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L78-L99); [Shared recipient duration and initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L270-L293); [Shared five-second setting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L158-L160); [Number and localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L427).

Static plain-text reconstruction:

```text
Executioner's Stance now outlines Elite & Specialist Enemies for Allies in Coherency for 6s.
```

Runtime color markup is excluded; this is not an observed game screen. The six-second description field contradicts the five-second shared recipient duration. The ability name, Coherency recipients and ordinary Elite/Special categories agree. Grant timing, owner exclusion, reapplication, recipient-relative range and excluded extra categories supplement the short description.

## Limits

Actual outline visibility, network/update timing and visual offsets have not been measured. Candidate eligibility is not proof that an outline appears instantly on a particular game frame. The displayed six seconds must not replace the shared recipient effect's five-second duration in timing examples.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_combat_ability_coherency_outlines.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/2afc79fa-02f2-4943-b4e7-abe35435f7bd)

The icon identifies the talent; it is not mechanism evidence.
