# Covering Fire: source evidence

[繁體中文](../veteran_replenish_toughness_and_boost_allies.md) | [Player description](README.md#veteran_replenish_toughness_and_boost_allies) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_replenish_toughness_and_boost_allies)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_replenish_toughness_and_boost_allies`; installs veteran_replenish_toughness_of_ally_close_to_victim. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1227-L1251); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2273-L2301).
- Exact English name key `loc_talent_veteran_replenish_toughness_and_boost_allies`, hash `8c3ae6d0`: **Covering Fire**. Description key `loc_talent_veteran_replenish_toughness_and_boost_allies_desc`, hash `a72a212c`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- on_hit checks for a ranged kill, then traverses valid_player_units excluding the owner. Only chosen_ally receives 0.15 of maximum Toughness and the 0.15 damage buff for 6 seconds. Reapplication resets the damage-buff duration without stacking. [Ranged-kill trigger, ally selection and recipient effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1597-L1673); [Recovery, damage, range and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L164-L169).
- The initial comparison is distance_squared < 8 × 8. After a candidate, range is assigned that squared distance; the next comparison squares range again. A 5-metre candidate sets range=25, so a later 20-metre candidate can pass `400 < 625`. The calculation therefore guarantees neither the nearest ally nor that the final recipient is inside 8 metres. Actual traversal order and in-game manifestations have not been measured. [Ranged-kill trigger, ally selection and recipient effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1597-L1673); [Recovery, damage, range and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L164-L169).

## Recovery, damage and selection examples

For recovery, assume only one eligible ally, 5 metres from the ranged-kill victim, maximum Toughness 200 and no additional recovery modifiers; compare sufficient missing Toughness with a deficit of 10. For damage, isolate this 15% base-damage bonus on a starting value 100, with other bonuses and later damage processing excluded. For the selection example, assume traversal encounters the 5-metre ally before the 20-metre ally, with no intervening candidate. [Ranged-kill trigger, ally selection and recipient effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1597-L1673); [Recovery, damage, range and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L164-L169).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Only eligible ally at 5 metres; maximum Toughness 200; no other recovery modifier | `200 × 0.15 = 30 Toughness`; with deficit 10, actual recovery is `min(30, 10) = 10`. | The 15% basis is maximum Toughness; the missing amount limits actual recovery. |
| Recipient starting base damage 100; this bonus alone | `100 × (1 + 0.15) = 115` at the isolated damage stage, for 6 seconds. | The example does not fix every final-hit damage increase. Reapplication refreshes duration without adding a stack. |
| Traversal sees a 5-metre candidate then a 20-metre candidate | First `5² = 25 < 8² = 64`; range becomes 25. Then `20² = 400 < 25² = 625`. | The later ally can replace the first despite being outside 8 metres; actual traversal order is unmeasured. |

## Original English template and reconstruction

Full raw template, hash `a72a212c`:

```text
When you kill an Enemy with a Ranged Attack, Allies within {radius:%s} metres of the target Replenish {toughness:%s} Toughness & receive {base_damage:%s} to all Base Damage  for {duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `radius` | talent_settings_2.coop_3.range=8; number formatting | `8` |
| `toughness` | talent_settings_2.coop_3.toughness_percent=0.15; percentage formatting without sign prefix | `15%` |
| `base_damage` | talent_settings_2.coop_3.damage=0.15; percentage formatting with + prefix | `+15%` |
| `duration` | talent_settings_2.coop_3.duration=6; number formatting | `6` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2273-L2301); [Recovery, damage, range and duration settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L164-L169); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
When you kill an Enemy with a Ranged Attack, Allies within 8 metres of the target Replenish 15% Toughness & receive +15% to all Base Damage  for 6s.
```

Runtime color markup is excluded; this is not an observed game screen. The ranged-kill trigger, 15% Toughness recovery, +15% base-damage bonus and 6-second duration agree. The fixed 8-metre scope contradicts the accepted selection behavior because squared-distance reassignment can select an ally outside 8 metres. One English radius erratum is supported. The general word Allies does not explicitly promise every ally; the one-recipient limit, refresh without stacking and self-exclusion are additional details.

## Limits

The squared-distance selection defect is a static deduction from the accepted fixed-source evidence. Actual team traversal order and observed in-game recipients are unmeasured. Recovery is limited by missing Toughness; the isolated 100→115 example does not predict every final damage result.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_replenish_toughness_and_boost_allies.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/8c1dadf2-9263-4efa-a710-9da08a41eb3e)

The icon identifies the talent; it is not mechanism evidence.
