# Agile Engagement: source evidence

[繁體中文](../veteran_kill_grants_damage_to_other_slot.md) | [Player description](README.md#veteran_kill_grants_damage_to_other_slot) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_kill_grants_damage_to_other_slot)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_kill_grants_damage_to_other_slot`; installs both `veteran_melee_kills_grant_range_damage` and `veteran_ranged_kills_grant_melee_damage`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L463-L487); [Both talent links and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1828-L1870).
- Exact English name key `loc_talent_veteran_kill_grants_damage_to_other_slot`, hash `5c365733`: **Agile Engagement**. Description key `loc_talent_veteran_kill_grants_damage_to_other_slot_desc`, hash `27db301b`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- A melee kill activates `ranged_damage = 0.25`; a ranged kill activates `melee_damage = 0.25`. Each effect lasts 6 seconds. The trigger type and affected damage type are opposite. [Both talent links and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1828-L1870); [Melee/ranged kill damage procs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L956-L991).
- The two separate proc buffs can be active together, with their corresponding timers. Each allows procs while active, so another kill of the same type refreshes the relevant six-second duration without adding another 25% stack. [Melee/ranged kill damage procs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L956-L991); [Active proc refresh handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355).
- The applicable melee or ranged bonus adds into its damage multiplier. With only that bonus active in the isolated stage, base 100 becomes `100 × (1 + 0.25) = 125 damage`. Both buffs being active does not mean multiplying a hit by both 1.25 factors. [Melee/ranged kill damage procs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L956-L991); [Additive melee/ranged damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L320).

## Opposite-type damage and refresh examples

For damage, assume the bonus matching the stated attack type is already active, base damage 100, no other additive damage bonuses and no armor or later modifiers. For timing, assume qualifying melee kills at 0s and 4s, no intervening buff removal and no update-frame rounding. [Melee/ranged kill damage procs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L956-L991); [Active proc refresh handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355); [Additive melee/ranged damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L320).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Applicable opposite-type damage bonus already active; base 100 | `100 × (1 + 0.25) = 125 damage`. | The relevant damage stage receives the 25% bonus; actual final damage can differ. |
| Melee kills at 0s and 4s; six-second Ranged Damage bonus | Initial expiry is about 6s; the refresh gives `4 + 6 = 10s`. | The Ranged Damage timer refreshes; its bonus remains 25%, not 50%. |

## Original English template and reconstruction

Full raw template, hash `27db301b`:

```text
Killing an enemy with a Melee Attack grants {damage%s} Ranged Damage and killing an enemy with a Ranged Attack grants {damage%s} Melee Damage. Lasts {duration%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Read the melee-kill proc’s ranged_damage = 0.25; custom `abs(value) × 100`, signed percentage display; reused for both textual occurrences | `+25%` |
| `duration` | Read the melee-kill proc active_duration 6; default value formatter, followed by literal `s` | `6` |

[Both talent links and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1828-L1870); [Melee/ranged kill damage procs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L956-L991); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and default value formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L435); [Custom display conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction:

```text
Killing an enemy with a Melee Attack grants +25% Ranged Damage and killing an enemy with a Ranged Attack grants +25% Melee Damage. Lasts 6s.
```

Runtime color markup is excluded; this is not an observed game screen. Both kill-to-opposite-damage effects and the six-second duration agree with the installed procs. Independent overlapping effects, non-stacking refresh and additive-stage examples supplement the description; no English contradiction is supported.

## Limits

Individual special kill-event cases, exact proc/expiry timing, final damage with other modifiers and final game UI have not been measured. Damage examples isolate the applicable damage-type bonus.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_kill_grants_damage_to_other_slot.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/a7c3f5a6-113a-404a-873d-985481ec316b)

The icon identifies the talent; it is not mechanism evidence.
