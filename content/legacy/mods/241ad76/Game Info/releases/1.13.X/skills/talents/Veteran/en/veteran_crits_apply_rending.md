# Exploit Weakness: source evidence

[繁體中文](../veteran_crits_apply_rending.md) | [Player description](README.md#veteran_crits_apply_rending) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_crits_apply_rending)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_crits_apply_rending`; the actual installed buff is `veteran_melee_crits_increase_damage`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L242-L265); [Talent link and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1102-L1135).
- Exact English name key `loc_talent_veteran_crits_rend`, hash `3be1e165`: **Exploit Weakness**. Description key `loc_talent_veteran_crits_rend_alt_description`, hash `e32d7197`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A melee critical hit activates `damage = 0.20` on the player for 6 seconds. This is the generic damage stat, so subsequent melee and ranged damage can benefit while active. [Installed melee-critical damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798); [Melee-critical condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L388-L390); [Generic additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242).
- A subsequent qualifying melee critical hit refreshes the active duration without accumulating another 20% bonus. The expiry example uses the most recent trigger plus 6 seconds, subject to actual update timing. [Installed melee-critical damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798); [Proc activation and active duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355).
- Despite the internal talent identifier and name containing Rending, the talent links to the damage buff above. The separately defined `veteran_crits_apply_rending` buff applies `rending_debuff_medium` to an enemy, but this talent does not reference it. The current English description explicitly describes Damage and makes no Rending claim, so this internal naming mismatch is not an English erratum. [Talent link and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1102-L1135); [Installed melee-critical damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798); [Separate unreferenced Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2567-L2589).

## Active damage and refresh examples

For damage, assume the 20% effect is already active, base damage 100, no other additive damage bonuses and no armor or later modifiers. For timing, assume eligible melee-critical triggers occur at t = 0s and t = 4s with no intervening removal; the theoretical expiry ignores update-frame rounding. [Installed melee-critical damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798); [Proc activation and active duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355); [Generic additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L242).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Damage bonus already active; base damage 100 | `100 × (1 + 0.20) = 120 damage`. | This isolated damage stage gains 20%; a universal final-damage increase is not established. |
| Eligible triggers at 0s and 4s; six-second active duration | Initial expiry is about 6s; refresh at 4s gives `4 + 6 = 10s`. | The active period is refreshed; the damage bonus does not become 40%. |

## Original English template and reconstruction

Full raw template, hash `e32d7197`, represented as a JSON string to preserve its final ASCII space (U+0020):

```json
"Melee Critical Hits increase Damage by {damage:%s} for {duration:%s}s. "
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Read `veteran_melee_crits_increase_damage.proc_stat_buffs.damage = 0.20`; percentage formatting without a sign prefix | `20%` |
| `duration` | Read `active_duration = 6`; number formatter, with literal `s` in the template | `6` |

[Talent link and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1102-L1135); [Installed melee-critical damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L781-L798); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction, represented with the same trailing-space preservation:

```json
"Melee Critical Hits increase Damage by 20% for 6s. "
```

Runtime color markup is excluded; this is not an observed game screen. The melee-critical trigger, 20% damage value and six-second duration agree with the installed buff. Generic damage scope and non-stacking refresh supplement the wording. Neither the English name nor the active description asserts Rending; no English contradiction is supported.

## Limits

The intended reason for the internal naming/reference mismatch is unknown. Exact game proc/expiry timing, special attack cases, final damage with other modifiers and final game UI have not been measured.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_crits_apply_rending.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/fd178238-be59-4c18-8631-12423f5506fb)

The icon identifies the talent; it is not mechanism evidence.
