# Tactical Awareness: source evidence

[繁體中文](../veteran_elite_kills_reduce_cooldown.md) | [Player description](README.md#veteran_elite_kills_reduce_cooldown) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_elite_kills_reduce_cooldown)

## Identity and description

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Category: ability modifier; costs one talent point. [Current node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L997-L1029); [Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L746-L774).
- Talent: `veteran_elite_kills_reduce_cooldown`. Name key `loc_talent_veteran_elite_kills_reduce_cooldown`, hash `3a17b4f8`: **Tactical Awareness**.
- Actual description key `loc_talent_veteran_elite_kills_reduce_cooldown_alt_desc`, hash `83519bd4`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`. The name record's Narrative suffix is metadata, not part of the displayed name.

## Trigger, recovery ticks and refreshing

- The passive listens to `on_kill` and uses `CheckProcFunctions.on_special_kill`. It requires a death and the enemy's `special` tag; an ordinary Elite without that tag does not qualify. Legacy names and the unused six-second display field do not determine the trigger. [Specialist kill trigger and timed recovery buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2132-L2185); [Special kill condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L108-L119); [Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L746-L774).
- The granted `cooldown_reduction_on_elite_kills_buff` has `duration = 3`, `max_stacks = 1` and `refresh_duration_on_stack = true`. Its start callback sets `timer = fixed_t + 1`. When `t > timer`, its update adds 1 to the timer and calls `restore_ability_resource("combat_ability", 1)`. The first extra recovery therefore occurs around one second after the first grant, not instantly on the kill. [Specialist kill trigger and timed recovery buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2132-L2185); [Buff start callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48).
- Another qualifying kill refreshes the three-second duration of the same instance. It does not rerun the start callback or increase the extra recovery amount, so the original tick cadence continues. [Specialist kill trigger and timed recovery buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2132-L2185); [Refresh the existing single instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Buff start callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48).
- Duration checking marks the buff finished when `t > start + 3`, but the rest of that frame's update functions still run; removal follows the complete update. Under normal fixed-frame updates this produces approximately three one-unit returns near seconds 1, 2 and 3. Exact endpoints depend on the update frames. [Duration and update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L328); [Remove finished buffs after their update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L180-L208); [Specialist kill trigger and timed recovery buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2132-L2185).
- The unmodified Veteran combat ability naturally restores 1 resource unit per second. An extra one-unit tick therefore corresponds to one second of baseline cooldown progress. Resource recovery is capped by the available capacity: excess at full capacity is not banked for the next use. With multiple ability uses, recovery can continue toward uses still missing. [Base ability resource regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L19); [Ability-resource recovery and limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1173).

## Cooldown, refresh and capacity examples

Assume natural recovery of 1 unit/s, no other cost/recovery effects, and enough missing resource for every counted tick except the explicit capacity example. Approximate ticks as occurring at seconds 1, 2, 3 and so on; ignore fixed-frame boundary offsets. These are static examples, not game measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One qualifying kill; 25 seconds of baseline cooldown remaining | After about 3s, `25 − 3 natural − 3 extra = 19 seconds`; without the talent, `25 − 3 = 22 seconds`. | The talent adds 3 seconds of recovery during those 3 elapsed seconds, rather than instantly subtracting 6 seconds on the kill. |
| Another qualifying kill at about 1.5s; initial remaining cooldown 25s | New expiry is about `1.5 + 3 = 4.5s`; original ticks near 1, 2, 3 and 4 give 4 extra units. Remaining baseline cooldown is about `25 − 4.5 − 4 = 16.5 seconds`. | Refreshing prolongs the existing effect while keeping its cadence; the recovery rate does not stack. |
| A one-unit tick when only 0.4 units are missing | Actual return `min(1, 0.4) = 0.4 units`; excess `1 − 0.4 = 0.6 units` is discarded. | Full ability capacity cannot bank the unused recovery for a later cast. |
| Two-use capacity; one use is available and the other has a 20-unit deficit at a tick | Extra recovery reduces the missing amount from `20 − 1 = 19 units`, before separately accounting for natural progress. | Having one available use does not stop recovery toward the other missing use; the total capacity still limits recovery. |

[Specialist kill trigger and timed recovery buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2132-L2185); [Refresh the existing single instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L457); [Duration and update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L328); [Remove finished buffs after their update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L180-L208); [Base ability resource regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L7-L19); [Ability-resource recovery and limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1173).

## Original English template and reconstruction

Full raw template, hash `83519bd4`:

```text
{regen:%s} Cooldown Regeneneration for {time:%s}s on Specialist Enemy Kill.
```

| Parameter | Definition and formatting | Use in this raw template |
|---|---|---|
| `regen` | Actual `cdr = 1`; percentage formatting with `prefix = "+"` | `+100%` |
| `time` | Actual setting `duration = 3`; number formatting | `3` |
| `duration` | Legacy `talent_settings_3.passive_1.cooldown_reduction` reference (6-second value) | Unused; the template uses `time` |
| `talent_name` | Localized `loc_ability_veteran_base_ability` definition | Unused by this template |

[Talent and display parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L746-L774); [Actual display settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L54-L58); [Number and percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L427).

Static plain-text reconstruction, retaining the original spelling:

```text
+100% Cooldown Regeneneration for 3s on Specialist Enemy Kill.
```

This excludes runtime color markup and is not an observed game screen. The English agrees on Specialist Enemy kills, the nominal three-second effect and +100% recovery relative to the unmodified one-unit/s baseline. Recovery is implemented by discrete extra one-unit ticks. Tick phase, refresh behavior and capacity handling supplement the short text. Neither the obsolete Elite identifier nor the unused six-second field is an English description claim; no explicit contradiction or player-page erratum is supported.

## Limits

Fixed-frame tick/end timing, resource saturation and repeated-kill refresh have not been measured in game. The examples count only the stated resource events and use the unmodified natural recovery rate. With other recovery effects, keep resource units separate from the conversion to baseline cooldown seconds.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/ability_modifier/veteran_elite_kills_reduce_cooldown.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/57d6b442-9cee-45c3-ba74-4a191649eddb)

The icon identifies the talent; it is not mechanism evidence.
