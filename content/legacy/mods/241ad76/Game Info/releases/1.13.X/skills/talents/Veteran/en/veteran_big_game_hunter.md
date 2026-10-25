# Bring it Down!: source evidence

[繁體中文](../veteran_big_game_hunter.md) | [Player description](README.md#veteran_big_game_hunter) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_big_game_hunter)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent and installed buff `veteran_big_game_hunter`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1470-L1496); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1075-L1101).
- Exact English name key `loc_talent_veteran_big_game_hunter`, hash `3fd6b675`: **Bring it Down!**. Description key `loc_talent_veteran_big_game_hunter_description`, hash `d17359f1`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The installed owner passive supplies `damage_vs_ogryn_and_monsters = 0.20`. The display reads this same buff stat. [Installed target-damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L815-L821); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1075-L1101).
- Shared damage calculation checks whether the target breed has `tags.ogryn` or `tags.monster`; eligible targets receive this term in `damage_stat_buffs`. Visual size is not the condition. The term has no `is_ranged` restriction, covering ordinary melee and ranged attacks through this shared path. Individual special damage sources are not established by this shared-path evidence. [Ogryn or Monster tag check and additive term](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L392-L401).
- The contribution adds to other bonuses at the same damage stage. An isolated 100 baseline becomes 120; with an existing +15% same-stage bonus, 115 becomes 135. Later modifiers and target damage-taken properties still affect final damage, so an extra final ×1.20 is not universal. [Shared damage-additive baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245); [Ogryn or Monster tag check and additive term](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L392-L401); [Later modifiers and damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L614).

## Target-category and additive damage examples

Assume an attack using the shared damage path with the owner’s stats, 100 damage before the stated additive stage, the listed target tags and no other or later modifiers. Ordinary melee and ranged attacks use the same illustrated category term. The second row includes only an existing +15% bonus at that stage. [Shared damage-additive baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245); [Ogryn or Monster tag check and additive term](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L392-L401); [Later modifiers and damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L614).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Ogryn- or Monster-tagged target; this talent alone | Before `100 × 1 = 100 damage`; after `100 × (1 + 0.20) = 120 damage`. | This isolated baseline gains 20 damage, or 20%. |
| Eligible target; existing +15% same-stage bonus | Before `100 × 1.15 = 115 damage`; after `100 × (1 + 0.15 + 0.20) = 135 damage`; relative gain `20/115 ≈ 17.39%`. | The talent adds 20 damage at this stage; its relative gain over the existing baseline is about 17.39%. |
| Hypothetical target with neither qualifying tag, regardless of appearance | No contribution from this talent: `100 × 1 = 100 damage` before and after. | Looking large does not replace the Ogryn or Monster classification. |

## Original English template and reconstruction

Full raw template, hash `d17359f1`:

```text
{damage%s} Damage (Ogryns & Monstrosities).
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Read `veteran_big_game_hunter.stat_buffs.damage_vs_ogryn_and_monsters = 0.20`; custom `abs(value) × 100 = 20`, percentage formatter and `+` prefix | `+20%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1075-L1101); [Installed target-damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L815-L821); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Custom display-value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Placeholder interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L285-L320). The custom manipulation replaces the default percentage conversion; 20 is not multiplied by 100 again. Preserve the raw `{damage%s}` spelling; the established interpolation permits the omitted colon.

Static plain-text reconstruction:

```text
+20% Damage (Ogryns & Monstrosities).
```

Runtime color markup is excluded; this is not an observed game screen. The configured percentage and named target categories agree. Tag-based eligibility, ordinary attack scope, special-source limits and same-stage addition supplement the original text. No English erratum is supported.

## Limits

Final game UI and damage outcomes have not been measured in game. Shared-path evidence does not independently verify every special damage source or individual enemy variant. The examples isolate their stated category and additive-stage assumptions; armor, critical/weakspot components and later modifiers can change final outcomes.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_big_game_hunter.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/fc1e80c9-c17b-4e96-909d-bab403221f03)

The icon identifies the talent; it is not mechanism evidence.
