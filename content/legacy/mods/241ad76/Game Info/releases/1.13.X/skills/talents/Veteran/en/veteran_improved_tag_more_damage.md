# Focused Fire: source evidence

[繁體中文](../veteran_improved_tag_more_damage.md) | [Player description](README.md#veteran_improved_tag_more_damage) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_improved_tag_more_damage)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Focus Target modifier `veteran_improved_tag_more_damage`; enables the same-named special rule. [One-point Keystone modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1993-L2015); [Modifier and display lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3075-L3096).
- Exact English name key `loc_talent_veteran_improved_tag_more_damage`, hash `6de468b6`: **Focused Fire**. Description key `loc_talent_veteran_improved_tag_more_damage_description`, hash `dd75ed2b`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The special rule selects a maximum of 6 stored Focus Target stacks instead of the base 4. The English max_stacks placeholder reads the target debuff's max_stacks value of 6. [Storage-limit selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3337-L3352); [Base and modified stack settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45); [Modifier and display lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3075-L3096); [Target debuff and allied damage variants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3504).
- Stack gain remains one every 1.5 seconds, and each applied target stack still multiplies damage taken by 1.05. Six stacks give 1.05^6=1.340095640625, rather than 1+0.05×6. [Base and modified stack settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L40-L45); [Target debuff and allied damage variants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3504); [Stacked stat calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747); [Damage stat aggregation modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L775).
- With Target Down! also selected, its nominal recovery fraction can reach 0.05×6=0.30, based on the actual applied mark count. With Redirect Fire! also selected, the increased-stacks allied buff allows 6 stacks, each with damage=0.025, for a 0.15 damage-stat contribution. These require the corresponding optional modifier; the cap increase alone does not grant their effects. [Marked-target death rewards](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309); [Target debuff and allied damage variants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3504).
- Raising storage does not automatically strengthen an already tagged target. A new tag is still required, and same-target upgrades apply only a positive difference between storage and applied stacks. [Same-target application and conditional reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3251-L3284).

## Six-stack examples and optional interactions

Assume Focused Fire is selected and one Veteran tags the target at the stated stored count. Damage examples use an otherwise 100-point result at the target damage-taken stage, with other target multipliers equal to 1. Optional death-reward examples additionally require the named modifier and a qualifying marked-target death; fractions are nominal requested recovery or stat contributions, not measured final recovery/damage.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 6 applied stacks; otherwise 100 damage | `100 × 1.05^6 = 134.0095640625 damage`, about `134.01`; gain about `34.01%`. | The target takes about 34.01% more damage than the stated unmarked baseline. |
| Compare 4 and 6 applied stacks at the same 100-point baseline | 4 stacks: `121.550625 damage`; 6 stacks: `134.0095640625`; ratio `1.05^6 / 1.05^4 = 1.1025`. | The two additional stacks give 10.25% more damage relative to the four-stack result. |
| Storage starts at 1 and reaches 6 | `(6 − 1) × 1.5 = 7.5 seconds`. | Five gain intervals are needed; server-update timing may be slightly later. |
| 6-stack marked death with the named optional modifier also selected | Target Down!: `0.05 × 6 = 0.30`, or `30%` nominal maximum-Toughness/Stamina recovery. Redirect Fire!: `0.025 × 6 = 0.15`, or `15%` damage-stat contribution. | These are conditional benefits of the separate modifiers. Actual recovery is subject to its limits; a damage-stat contribution is not a universal whole-hit gain. |

## Original English template and reconstruction

Full raw template, hash `dd75ed2b`:

```text
Focus Target Max Stacks increased to {max_stacks:%s}.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `max_stacks` | Read veteran_improved_tag_debuff.max_stacks=6; number formatting | `6` |

[Modifier and display lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3075-L3096); [Target debuff and allied damage variants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3479-L3504); [Number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L425).

Static plain-text reconstruction:

```text
Focus Target Max Stacks increased to 6.
```

Runtime color markup is excluded; this is not an observed game screen. The reconstructed six-stack maximum agrees with the accepted modified storage cap. Unchanged stack timing/per-stack multiplier, compounding, re-tag requirements and optional death-reward interactions are omitted. No explicit English contradiction or supported English erratum is present.

## Limits

The damage examples isolate one owner's target multiplier. Timing is theoretical and server-update dependent. The Target Down! and Redirect Fire! calculations require those separate modifiers and a qualifying marked-target death; they describe nominal fractions/stat contributions rather than universal final outcomes. Multiple-owner interactions and gameplay/UI outcomes were not measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_improved_tag_more_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/a95c5ea6-546f-462d-a073-56f9d1a21103)

The icon identifies the talent; it is not mechanism evidence.
