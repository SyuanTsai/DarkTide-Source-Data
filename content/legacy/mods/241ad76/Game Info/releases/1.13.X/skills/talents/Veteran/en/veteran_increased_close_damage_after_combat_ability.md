# Close Quarters Killzone: source evidence

[繁體中文](../veteran_increased_close_damage_after_combat_ability.md) | [Player description](README.md#veteran_increased_close_damage_after_combat_ability) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_close_damage_after_combat_ability)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: ability modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1634-L1661); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1303-L1344).
- Talent: `veteran_increased_close_damage_after_combat_ability`. Name key `loc_talent_veteran_ability_assault`, hash `75036f13`: **Close Quarters Killzone**.
- Actual description key `loc_talent_veteran_ability_assault_desc`, hash `1eb58318`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Trigger and custom countdown

- A non-Stealth combat ability applies the buff through `veteran_buffs_after_combat_ability`. [Infiltrate](veteran_invisibility_on_combat_ability.md) applies it directly when Stealth starts. The template has `duration = 10`, `max_stacks = max_stacks_cap = 1`, and `damage_near = 0.15`. [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1303-L1344); [Shared combat ability trigger](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1977-L2014); [Grant on Stealth start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1223-L1225); [Close Damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047).
- `VeteranStealthBonusesBuff.duration()` returns `nil`, so the standard start-time expiry does not remove this effect. On first detecting that Stealth is absent, it records `_stop_t = t + 10`. The bonus is active during Stealth and for ten seconds afterwards. For a non-Stealth ability, the countdown starts at the first absence-check update. [Close Damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047); [Custom exit countdown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L15-L44).
- Reapplication does not add another stack. Although `refresh_duration_on_stack = true`, the shared start-time refresh does not reset `_stop_t` or `_in_invisibility`. An already-started countdown is not extended to another full ten seconds by applying the effect again. [Close Damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047); [Shared stack refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639); [Start-time setter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L339-L348); [Custom exit countdown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L15-L44).

## Distance formula and damage stage

Let `d` be the distance in metres supplied to the shared damage calculation. Isolating this talent from other distance bonuses, its additive contribution is:

```text
w(d) = sqrt(clamp((d − 12.5) / 17.5, 0, 1))
δ(d) = 0.15 × (1 − w(d))
Damage at this stage = B × (1 + g + δ(d))
```

`B` is damage entering the illustrated general multiplier stage and `g` is an existing additive bonus at that same stage. The shared calculation interpolates near and far damage bonuses with `w(d)` and adds the result to the general damage multiplier. Other talents' far bonuses enter the same interpolation separately; they are excluded from `δ(d)` above. [Shared distance contribution and damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L319); [Distance constants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L27).

- At `d ≤ 12.5m`, this talent contributes `0.15`; at `d = 16.875m`, it contributes `0.075`; at `d ≥ 30m`, it contributes zero. [Shared distance contribution and damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L319); [Distance constants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L27).
- The `damage_near` term itself has no ranged-only condition. Close melee and ranged attacks can benefit; it is not a `melee_damage` bonus. If the caller supplies no distance, the shared function defaults to zero. [Shared distance contribution and damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L319); [Default distance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L24-L26).
- The bonus adds to other general bonuses at this stage rather than multiplying an already-bonused result by `1.15`. The examples isolate this stage; downstream armor, hit-location and other effects are not modelled. [Shared distance contribution and damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L319).

## Damage and timing examples

Assume an active single instance and `B = 100 damage units` at the illustrated stage. Exclude other near/far bonuses and downstream modifiers; `g = 0` unless stated. Timing examples ignore update-frame boundaries and assume reapplication while the same instance still exists. These are static examples, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| `d ≤ 12.5m`, no other bonus | `δ = 0.15`; `100 × (1 + 0.15) = 115 damage units`. | The full contribution is 15% at this isolated stage. |
| `d = 16.875m` | `w = sqrt((16.875 − 12.5) / 17.5) = sqrt(0.25) = 0.5`; `δ = 0.075`; damage `100 × 1.075 = 107.5`. | Half the close bonus remains at this distance. |
| `d ≥ 30m` | `w = 1`; `δ = 0`; damage `100 × 1 = 100`. | This talent adds no damage at or beyond the far boundary. |
| `d ≤ 12.5m`, existing same-stage `g = 0.25` | Before: `100 × 1.25 = 125`; after: `100 × (1 + 0.25 + 0.15) = 140`; relative gain `(140 / 125 − 1) × 100% = 12%`. | The added 15 percentage points yield 12% more damage relative to this already-bonused baseline. |
| Leave Infiltrate at about 3s after activation | Coverage lasts to about `3 + 10 = 13s` after activation. | The active bonus includes Stealth and the separate post-exit timer. |
| That countdown began at about 3s; the same instance is reapplied at about 7s | Deadline stays about `13s`, leaving `13 − 7 = 6s`; it does not become `17s`. | Another application does not restart an existing custom countdown. |

[Shared distance contribution and damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L319); [Distance constants](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L27); [Close Damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047); [Custom exit countdown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L15-L44); [Shared stack refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L639); [Start-time setter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L339-L348).

## Original English template and reconstruction

Full raw template, hash `1eb58318`:

```text
{power%s} Close Damage for {duration%s}s on Combat Ability use.

When using {talent_name:%s}, this begins on leaving Stealth.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `power` | `damage_near = 0.15`; percentage formatting and `+` prefix | `+15%` |
| `duration` | Buff duration `10`; number formatting | `10` |
| `talent_name` | Localized key `loc_talent_veteran_invisibility_on_combat_ability`, hash `9776b86d` | `Infiltrate` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1303-L1344); [Close Damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Number and localized-name formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L427); [Buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L482-L499); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Optional-colon interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320).

The raw `{power%s}` and `{duration%s}` tokens intentionally retain their missing colons; the interpolation pattern permits zero or more colons. Static plain-text reconstruction, preserving both original paragraphs:

```text
+15% Close Damage for 10s on Combat Ability use.

When using Infiltrate, this begins on leaving Stealth.
```

This reconstruction excludes runtime color markup and is not an observed game screen. **The Infiltrate onset sentence is explicitly contradictory:** it says the effect begins on leaving Stealth, while the buff is granted with its active damage stat at Stealth start. The ten-second countdown begins after exit; the effect itself begins earlier. [Grant on Stealth start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1223-L1225); [Close Damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2032-L2047); [Custom exit countdown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L15-L44).

The English term `Close Damage` correctly refers to a distance-based contribution. The Chinese-only rendering as melee damage is not an English error. Distance thresholds, the interpolation curve, additive composition and reapplication behavior are unstated details, not additional English contradictions.

## Limits

The formula describes this talent's contribution at one damage stage, not a guaranteed whole-hit increase under every loadout. Exact update-frame timing, supplied-distance behavior for special attacks, and reapplication measured in game remain unobserved.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_increased_close_damage_after_combat_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/1181fe6e-4066-4d75-b996-a0eb01d7583d)

The icon identifies the talent; it is not mechanism evidence.
