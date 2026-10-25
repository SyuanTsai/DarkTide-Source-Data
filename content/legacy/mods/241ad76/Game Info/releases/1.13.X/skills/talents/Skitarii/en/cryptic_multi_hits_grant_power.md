# Capacitor Reclamation Loop: source evidence

[繁體中文](../cryptic_multi_hits_grant_power.md) | [Player description](README.md#cryptic_multi_hits_grant_power) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_multi_hits_grant_power)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_multi_hits_grant_power`; name key `loc_talent_cryptic_multi_hits_grant_power`; description key `loc_talent_cryptic_multi_hits_grant_power_desc`. Node `node_17b66510-2729-4d8a-98a2-646758b5b00c`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent values require at least 3 targets, restore 0.01 of one charge's cost per proc and impose a 0.25s proc interval. The template takes `params.target_number`, falling back to `target_index` if it is not positive. It triggers only when this equals 3 and the current time is not before `multi_hit_window_end_t`. A successful proc sets the next eligible time to t + 0.25.
- Hitting at least 3 enemies is therefore implemented as one proc on the third target hit by the same attack. Fourth and later targets do not add recovery for that attack. The 0.25s is a proc interval, rather than a window for accumulating three separate hits.
- On success, `restore_ability_charge_percentage` restores 0.01 × cost per charge. At 50 points per charge, this is 0.5 points. The underlying fixed-precision resource accumulates progress, while full charges are floor(resource / cost per charge).

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1629-L1651](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1629-L1651)
- [scripts/settings/talent/talent_settings_cryptic.lua — L447-L451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L447-L451)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2034-L2071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2034-L2071)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L861-L872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L861-L872)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1629-L1651](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1629-L1651)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1543-L1569](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1543-L1569)

## Example assumptions and limits

- **How it works**: Hitting the third enemy with the same attack restores 1% of the current Combat Ability's 50-point cost per charge, or 0.5 points of Capacitance. Hitting more enemies still grants recovery only once for that attack.
- **How it works**: At least 0.25s must pass after recovery before another proc can trigger. Fractional Capacitance accumulates; 50 points forms one full charge.

- One attack hitting 4 enemies triggers once at the third target: 50 × 1% = 0.5 points of Capacitance. The fourth target does not trigger extra recovery for that attack.
- Eight qualifying procs, spaced far enough apart, restore 8 × 0.5 points = 4 points, retained as progress below one full charge.
- The code checks the third target's sequence number and imposes a 0.25s proc interval. It does not require three hits to accumulate within 0.25s.
- Each proc restores only 1% of one charge's cost, or 0.5 points at a 50-point cost. Changing the cost changes the points restored.
- Both local language templates specify at least 3 enemies in one attack and 1% recovery. The proc interval, third-target sequence number and fractional progress are omitted implementation details.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_multi_hits_grant_power`, hash `6f438130`, entry 7231: **Capacitor Reclamation Loop**.
- Description key `loc_talent_cryptic_multi_hits_grant_power_desc`, hash `998c8ded`, entry 9903.

Full raw template:

~~~text
Hitting {number:%s} or more enemies with an Attack restores {power:%s} {capacitance_keyword:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{number:%s}` | 3 | `number` |
| `{power:%s}` | 0.01 → 1% | `percentage`; no + prefix |
| `{capacitance_keyword:%s}` | Capacitance | `loc_string`; `loc_talent_cryptic_power_keyword` |

The minimally read display map is `cryptic_talents.lua` L1637-L1651. The verified `cryptic_multi_hits_grant_power` settings supply `num_hits = 3` and `cooldown_replenished_on_proc = 0.01`. Capacitance uses `loc_talent_cryptic_power_keyword` (hash `ecc15a9f`, English entry 15388).

Static reconstruction; not an observed game screen:

~~~text
Hitting 3 or more enemies with an Attack restores 1% Capacitance.
~~~

## English comparison

The English one-attack/at-least-three-enemy condition and 1% recovery agree with the accepted third-target proc. The one-charge basis, once-per-attack behavior, 0.25s interval and fractional resource progress supplement the description; it contains no conflicting accumulation-window claim.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_multi_hits_grant_power.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/7557cf7d-9d8b-41ba-bff3-582bdcc5c063). The icon identifies the talent; it is not mechanism evidence.
