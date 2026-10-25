# Competitive Urge: source evidence

[繁體中文](../veteran_ally_kills_increase_damage.md) | [Player description](README.md#veteran_ally_kills_increase_damage) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ally_kills_increase_damage)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_ally_kills_increase_damage`; installs veteran_allies_kills_chance_to_trigger_increased_damage. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1252-L1281); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L775-L830).
- Exact English name key `loc_talent_veteran_ally_kills_increase_damage`, hash `9d5cb643`: **Competitive Urge**. Description key `loc_talent_veteran_ally_kills_increase_damage_description`, hash `4b7d2d48`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The minion_death proc check excludes current_unit == attacking_unit. It has no Coherency or distance check; other non-self kill attributions may also pass this condition. The condition should not be narrowed to only allies in Coherency. [Non-self kill check, proc chance and single-stack buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2242-L2279).
- Qualifying events have on_minion_death_proc_chance=0.025. The recipient buff has max_stacks=1 and refresh_duration_on_stack=true, with active_duration=8. Its damage, melee_impact_modifier and suppression_dealt bonuses are each 0.2. Reapplication refreshes the 8-second duration without increasing the stack. [Non-self kill check, proc chance and single-stack buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2242-L2279); [Chance, bonuses and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L242-L248).

## Damage, chance and refresh examples

For damage, isolate the talent’s 20% bonus on a starting damage-stage value 100, with other bonuses and later damage processing excluded. For expectation, consider 40 qualifying proc opportunities, each with the stated 2.5% chance; an expectation is not a guaranteed count. For refresh, assume a first proc at time 0 and another at time 6 seconds, without intervening procs. [Non-self kill check, proc chance and single-stack buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2242-L2279); [Chance, bonuses and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L242-L248).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Starting damage-stage value 100; talent bonus only | `100 × (1 + 0.2) = 120`. | A 20% increase at this isolated stage does not establish every final-hit result. |
| 40 qualifying proc opportunities, each with probability 0.025 | Expected proc count `40 × 0.025 = 1`. | The expected count is 1, not a guaranteed trigger after 40 kills. |
| First proc at t=0; second at t=6 seconds; no later proc | Original expiry `0 + 8 = 8s`; refreshed expiry `6 + 8 = 14s`. | The second proc resets the duration; the buff remains at one stack. Actual update timing can affect the observed boundary. |

## Original English template and reconstruction

Full raw template, hash `4b7d2d48`:

```text
{proc_chance:%s} chance of {damage:%s} Base Damage, {melee_impact:%s} Melee Impact & {suppression:%s} Suppression for {duration:%s}s whenever an Ally kills an Enemy.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `proc_chance` | talent_settings_3.offensive_3.on_minion_death_proc_chance=0.025; percentage formatting without sign prefix | `2.5%` |
| `damage` | Lookup veteran_allies_kills_damage_buff.stat_buffs.damage=0.2; percentage formatting with + prefix | `+20%` |
| `melee_impact` | Lookup the same buff’s stat_buffs.melee_impact_modifier=0.2; percentage formatting with + prefix | `+20%` |
| `suppression` | Lookup the same buff’s stat_buffs.suppression_dealt=0.2; percentage formatting with + prefix | `+20%` |
| `duration` | talent_settings_3.offensive_3.active_duration=8; number formatting | `8` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L775-L830); [Non-self kill check, proc chance and single-stack buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2242-L2279); [Chance, bonuses and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L242-L248); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
2.5% chance of +20% Base Damage, +20% Melee Impact & +20% Suppression for 8s whenever an Ally kills an Enemy.
```

Runtime color markup is excluded; this is not an observed game screen. The ally-kill opportunity, 2.5% chance, three +20% bonuses and 8-second duration agree with the accepted behavior. The single-stack refresh and wider non-self event condition without a Coherency/distance gate are not described. The English does not say that ally kills are the only possible trigger attribution. No explicit English contradiction or English erratum is supported.

## Limits

The expected proc count is a static probability calculation, not a guarantee or an observed run. Special non-self kill attributions and exact update timing are not measured in game. The isolated damage example excludes other modifiers and later processing.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ally_kills_increase_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/284f479c-7f5d-463f-bf50-1003d34b9f5b)

The icon identifies the talent; it is not mechanism evidence.
