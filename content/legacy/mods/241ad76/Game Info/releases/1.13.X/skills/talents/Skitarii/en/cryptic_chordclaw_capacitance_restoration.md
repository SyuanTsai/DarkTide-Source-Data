# Satiated Steel: source evidence

[繁體中文](../cryptic_chordclaw_capacitance_restoration.md) | [Player description](README.md#cryptic_chordclaw_capacitance_restoration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_chordclaw_capacitance_restoration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_chordclaw_capacitance_restoration`; name key `loc_talent_cryptic_chordclaw_capacitance_restoration`; description key `loc_talent_cryptic_chordclaw_capacitance_restoration_desc`. Node `node_fef9bd81-9333-4292-877d-95a71f773931`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger requires a kill result, `attack_type = melee` and a `damage_type` of `transonic_claw`, `transonic_claw_stick` or `transonic_claw_rip`.
- Each proc distributes 0.25 of the single-use cost over 5s, giving recovery of 0.05 of that cost per second. At a 50-point cost, this is an extra 2.5 points/s and 12.5 points over 5s. The template allows procs while active. `ProcBuff` updates the start time to the latest kill, resetting the 5s window without creating a stackable recovery multiplier.
- Recovery incrementally calls `restore_ability_charge_percentage`, converts the percentage into resource points using cost per charge and respects the ability resource pool's maximum. Fractional resource progress is retained.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L523-L545](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L523-L545)
- [scripts/settings/talent/talent_settings_cryptic.lua — L133-L157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L133-L157)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L945-L980](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L945-L980)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L226-L237](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L226-L237)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L335-L360](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L335-L360)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1156)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L523-L545](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L523-L545)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2245-L2268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2245-L2268)

## Example assumptions and limits

- **How it works**: A Chordclaw melee kill restores an additional 25% of the current Combat Ability's 50-point cost per charge over the next 5s, totalling 12.5 points of Capacitance.
- **How it works**: Another Chordclaw melee kill within 5s restarts the recovery period, without stacking a higher per-second rate. Normal natural recovery is calculated separately.
- **Recovery example**: 50 × 25% = 12.5 points, spread over 5s, so extra recovery is 12.5 ÷ 5 = 2.5 points/s. If it is not retriggered and the pool does not fill early, the complete 5s gives these 12.5 points.

- With a 50-point charge cost, one qualifying Chordclaw melee kill restores an extra 50 × 25% = 12.5 points over 5s, or 2.5 extra points/s.
- Retriggering during the 5s recovery period keeps extra recovery at 2.5 points/s. The 5s period starts again from the latest kill; it does not add a second 12.5-point recovery rate.
- The kill must be melee and use one of the specified Chordclaw damage types. Other weapons' kills, non-melee kills and non-killing hits do not trigger it.
- The 12.5 points are this effect's extra recovery. Base natural recovery and other effects are separate.
- Both language templates give 25% over 5s after Chordclaw kills. The three specific damage types and refresh behavior are omitted implementation details.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_chordclaw_capacitance_restoration`, hash `19578f15`, entry 1648: **Satiated Steel**.
- Description key `loc_talent_cryptic_chordclaw_capacitance_restoration_desc`, hash `18058d13`, entry 1573.

Full raw template:

~~~text
Chordclaw Kills restore {capacitance_percent:%s} {capacitance_keyword:%s} over {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{capacitance_percent:%s}` | 0.25 → 25% | `percentage`; no + prefix |
| `{capacitance_keyword:%s}` | Capacitance | `loc_string`; `loc_talent_cryptic_power_keyword` |
| `{duration:%s}` | 5 | `number`; s supplied by template |

The minimally read display map is `cryptic_talents.lua` L531-L545. The verified `chordclaw_ability.cooldown_restoration` settings supply `cooldown_percent_over_time = 0.25` and `cooldown_regen_time = 5`. Capacitance uses `loc_talent_cryptic_power_keyword` (hash `ecc15a9f`, English entry 15388).

Static reconstruction; not an observed game screen:

~~~text
Chordclaw Kills restore 25% Capacitance over 5s.
~~~

## English comparison

The English Chordclaw kill trigger, 25% total and 5s recovery period agree with the accepted evidence. Melee/specific-damage-type checks, the one-charge cost basis, incremental resource recovery, refresh without stacking and pool cap supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_chordclaw_capacitance_restoration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/756e60ad-5734-42a4-be62-759096344f67). The icon identifies the talent; it is not mechanism evidence.
