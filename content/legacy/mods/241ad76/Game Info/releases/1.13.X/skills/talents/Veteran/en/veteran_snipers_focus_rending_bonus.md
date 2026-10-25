# Chink in their Armour: source evidence

[繁體中文](../veteran_snipers_focus_rending_bonus.md) | [Player description](README.md#veteran_snipers_focus_rending_bonus) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_snipers_focus_rending_bonus)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: keystone modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1741-L1763); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2627-L2655).
- Talent: `veteran_snipers_focus_rending_bonus`. Name key `loc_talent_veteran_snipers_focus_rending_bonus`, hash `7387777e`: **Chink in their Armour**.
- Description key `loc_talent_veteran_snipers_focus_rending_bonus_description`, hash `9b41f430`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Mechanism

- The talent installs the `veteran_snipers_focus_rending_bonus` special rule. When Focus crosses from fewer than **10 raw stacks** to at least 10, it adds the separate `veteran_snipers_focus_rending_buff` with `rending_multiplier = 0.15`. Falling below 10 removes it, and stopping the main Focus buff also removes it. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2627-L2655); [Threshold handler](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753); [Separate Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2903-L2910); [Focus update and stop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2836-L2881).
- The threshold stays **10 stacks** when [Long Range Assassin](veteran_snipers_focus_increased_stacks.md) raises the effective Focus cap to 15. Focus's own triggers, counter and decay rules remain in [Marksman's Focus](veteran_snipers_focus.md). [Threshold handler](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2707-L2753).
- Rending combines with other sources and is capped at `1`; the armor-type behavior is determined by `ArmorSettings`. The stat improves applicable armor damage multipliers. It does not mean that every final damage result is multiplied by `1.15`. [Combined Rending](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660); [Armor types and Rending settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19); [Armor-stage calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95).

## Armor-stage examples

Isolate this talent's Rending contribution. Assume a noncritical hit that does not hit a weakspot, **100 damage units before armor settlement**, a Carapace (`super_armor`) target, the stated original armor damage multiplier and existing Rending, no other modifiers or later multipliers, and no cap binding in these examples. These are static examples, not measurements of a particular weapon or target.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Original armor multiplier `0.5`; no existing Rending | Before `100 × 0.5 = 50`; after `100 × (0.5 + 0.15) = 65` damage units; added `15 / 50 = 30%`. | This armor stage gains 30% under the stated conditions, despite the stat being 15% Rending. |
| Original armor multiplier `0.8`; no existing Rending | Before `100 × 0.8 = 80`; after `100 × (0.8 + 0.15) = 95` damage units; added `15 / 80 = 18.75%`. | A different original armor multiplier changes the relative damage gain. |
| Original armor multiplier `0.5`; existing Rending `0.1` | Before `100 × (0.5 + 0.1) = 60`; after `100 × (0.5 + 0.1 + 0.15) = 75` damage units; added `15 / 60 = 25%`. | The new talent's isolated benefit is relative to the already improved baseline. |

[Separate Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2903-L2910); [Armor types and Rending settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19); [Armor-stage calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95).

Focus's finesse contribution applies to ranged critical or weakspot hits. Using neither in the examples isolates the armor stage; a critical or weakspot hit needs the extra-component calculation and other finesse bonuses as well. These percentages are neither a fixed whole-build gain nor the total benefit of ten Focus stacks. [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782).

## Original English template and reconstruction

Full raw template, hash `9b41f430`:

```text
{rending:%s} Rending when at, or over, {stacks:%s} stacks of Focus.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `rending` | `rending_multiplier = 0.15` from `veteran_snipers_focus_rending_buff`; percentage with `+` prefix | `+15%` |
| `stacks` | Number; display value `10` | `10` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2627-L2655); [Separate Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2903-L2910); [Shared percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L426); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L690-L713).

Static plain-text reconstruction, preserving original punctuation:

```text
+15% Rending when at, or over, 10 stacks of Focus.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The exact English agrees with the inclusive ten-stack threshold and Rending value. It does not state the shared settlement formula, armor-stage examples or main-buff stop handling. Those details supplement the description; no English player-page erratum is supported.

## Limits

The examples preserve their stated armor, attack and baseline assumptions. Actual damage depends on the weapon, target armor and other Rending, finesse and later modifiers. Static translation and text comparison do not establish an in-game measurement or final UI observation.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_snipers_focus_rending_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/136d0a92-5459-4218-a2b3-324f367ba69d)

The icon identifies the talent; it is not mechanism evidence.
