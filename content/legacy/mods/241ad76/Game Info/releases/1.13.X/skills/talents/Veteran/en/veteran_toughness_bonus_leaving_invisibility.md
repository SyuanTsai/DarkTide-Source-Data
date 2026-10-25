# Hunter's Resolve: source evidence

[繁體中文](../veteran_toughness_bonus_leaving_invisibility.md) | [Player description](README.md#veteran_toughness_bonus_leaving_invisibility) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_toughness_bonus_leaving_invisibility)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: ability modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L886-L909); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2155-L2195).
- Talent: `veteran_toughness_bonus_leaving_invisibility`. Name key `loc_talent_veteran_toughness_bonus_leaving_invisibility`, hash `bb8fe249`: **Hunter's Resolve**.
- Actual description key `loc_talent_veteran_toughness_bonus_leaving_invisibility_desc`, hash `59344e21`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

## Start, end and independent instances

- Starting [Infiltrate](veteran_invisibility_on_combat_ability.md) immediately adds `veteran_toughness_bonus_leaving_invisibility`. Its `toughness_damage_taken_multiplier = 0.5` is active **during Stealth**; it does not wait for Stealth to end. The effect changes Toughness damage taken, not maximum Toughness or health damage. [Grant on Stealth start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1215-L1217); [Toughness damage-reduction template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1096-L1108); [Multiplicative Toughness damage stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1002-L1003).
- `VeteranStealthBonusesBuff.duration()` returns `nil`, so the ordinary base duration timer does not control removal. Initialization sets `_in_invisibility = true`. On first observing that `veteran_invisibility` is absent, the instance records `_stop_t = t + 10`; it ends after that deadline. The **ten-second timer starts after leaving Stealth**. [Custom initialization and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L27); [Exit timer and removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L30-L44).
- The template has no `max_stacks` field. `BuffExtensionBase` creates a separate instance for a second application rather than merging the two into one. The stat uses `multiplicative_multiplier`, so two active `0.5` factors produce `0.5² = 0.25`. [Toughness damage-reduction template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1096-L1108); [BuffExtensionBase instance handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L484); [Multiplicative Toughness damage stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1002-L1003).
- Each instance starts its own ten-second countdown when it first observes an exit from Stealth. Once a countdown has started, entering Stealth again does not pause that existing countdown. [Custom initialization and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L27); [Exit timer and removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L30-L44).

## Toughness damage and timing examples

For damage, assume an attack that would otherwise cause **100 Toughness damage**, no other damage-reduction factors, and the stated number of active instances. Timing examples use [Infiltrate](veteran_invisibility_on_combat_ability.md)'s unmodified eight-second maximum Stealth duration and ignore frame boundaries. These are static examples, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One active instance | `100 × 0.5 = 50 Toughness damage`. | The hit causes half as much Toughness damage at this stage; this stat does not reduce health damage. |
| Stay in Stealth for 8 seconds | About `8 + 10 = 18 seconds` of total coverage from activation. | Coverage includes Stealth and the separate post-Stealth countdown. |
| Attack to leave Stealth at about 2 seconds | Coverage lasts to about `2 + 10 = 12 seconds` after activation. | An early exit starts the countdown earlier. |
| Two active instances overlap through extra uses or shorter cooldown | `100 × 0.5 × 0.5 = 25 Toughness damage`; `1 − 0.25 = 75%` reduction from these two factors. | The instances multiply and keep their own timers; two 50% reductions do not sum to 100%. |

[Toughness damage-reduction template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1096-L1108); [Custom initialization and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L7-L27); [Exit timer and removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/veteran_stealth_bonuses_buff.lua#L30-L44); [BuffExtensionBase instance handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L484); [Multiplicative Toughness damage stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1002-L1003).

## Original English template and reconstruction

Full raw template, hash `59344e21`:

```text
{talent_name:%s} provides {tdr%s} Toughness Damage Reduction for {duration%s}s on leaving Stealth.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `talent_name` | Localized key `loc_talent_veteran_invisibility_on_combat_ability`, hash `9776b86d` | `Infiltrate` |
| `tdr` | Multiplier `0.5`; custom `abs(1 − value) × 100` percentage conversion, then `+` prefix | `+50%` |
| `duration` | Template duration `10`; `format_type = value` uses the default string formatter | `10` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2155-L2195); [Toughness damage-reduction template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1096-L1108); [Percentage formatting and custom manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Localized-name and fallback value formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L426-L434); [Buff-template value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L482-L499); [Parameter formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Optional-colon interpolation pattern](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320).

The raw `{tdr%s}` and `{duration%s}` tokens intentionally remain unchanged here. The interpolation pattern allows zero or more colons, so both are substituted without needing to rewrite the template. The custom percentage manipulation replaces the default ×100 conversion. [Optional-colon interpolation pattern](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/localization/localization_manager.lua#L285-L320); [Percentage formatting and custom manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction, preserving original wording:

```text
Infiltrate provides +50% Toughness Damage Reduction for 10s on leaving Stealth.
```

This reconstruction excludes runtime color markup and is not an observed game screen. The English correctly describes the 50% Toughness damage reduction for ten seconds after leaving Stealth. It does not explicitly limit the effect to that period or state that it was inactive during Stealth; the earlier coverage is an additional mechanism detail. Independent instances, their multiplicative composition and countdown behavior are also unstated. No explicit English contradiction or player-page erratum is supported.

## Limits

The examples require their stated active-instance counts, damage stage and timing assumptions. Exact runtime boundaries and an in-game overlapping-use measurement have not been observed. The modifier does not establish a health-damage or maximum-Toughness benefit.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_toughness_bonus_leaving_invisibility.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/0c033c93-a850-4295-853d-10698ec96e89)

The icon identifies the talent; it is not mechanism evidence.
