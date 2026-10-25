# Flux Conduit Build-Up: source evidence

[繁體中文](../cryptic_crits_grant_power.md) | [Player description](README.md#cryptic_crits_grant_power) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_crits_grant_power)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_crits_grant_power`; name key `loc_talent_cryptic_crits_grant_power`; description key `loc_talent_cryptic_crits_grant_power_desc`. Node `node_654b8382-1628-45b9-9379-b264757a9191`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent listens for attack hits. `CheckProcFunctions.on_crit` checks `is_critical_strike`. The template has `cooldown_regen = 0.05` and a 4s duration. It converts the target recovery into 0.05 × 50 = 2.5 resource points, then divides by 4s for an extra 0.625 points/s. With the base 1 point/s, the total rate during the effect is 1.625 points/s.
- The template sets `allow_proc_while_active = true`. Each Critical hit can activate the proc again; `ProcBuff` updates `active_start_time` to that hit's time. The single template still applies only the fixed extra 0.625 points/s, so new Critical hits reset the 4s window without stacking the recovery bonus.
- This attack-hit check does not read `damage_amount`. The trigger uses the Critical Strike flag, rather than a fixed Health-damage value.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1587-L1609](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1587-L1609)
- [scripts/settings/talent/talent_settings_cryptic.lua — L433-L435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L433-L435)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1985-L2012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1985-L2012)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L336-L338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L338)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L335-L360](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L335-L360)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L846-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L863)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1587-L1609](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1587-L1609)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1347-L1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1347-L1373)

## Example assumptions and limits

- **How it works**: Capacitance recovery accelerates for 4s after a Critical hit. With a 50-point charge cost, the extra recovery over 4s is 2.5 points, equivalent to 5%.
- **How it works**: Another Critical hit within 4s restarts the window; it does not stack a higher recovery rate.
- **Recovery example**: With one charge costing 50 points, the extra recovery is 50 × 5% = 2.5 points over 4s. Including the base 1 point/s, total recovery over 4s is 4 × (1 + 2.5 ÷ 4) = 6.5 points. Another Critical hit extends the accelerated recovery period.

- At Voltaic Emitter's base recovery rate of 1 point/s, the rate for 4s after a Critical hit is 1 + 0.625 = 1.625 points/s. The 4s total is 6.5 points, including 2.5 extra compared with base recovery.
- Repeated Critical hits within 4s reset the 4s period on each hit. Extra recovery remains 0.625 points/s and is not multiplied by the number of Critical hits.
- Total recovery includes the original 1 point/s. This effect alone adds 2.5 points, or 5% of one 50-point charge.
- The example excludes precision-stance costs, recovery pauses and other recovery modifiers. The hit-event Critical Strike check requires no fixed damage amount.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_crits_grant_power`, hash `977e362d`, entry 9790: **Flux Conduit Build-Up**.
- Description key `loc_talent_cryptic_crits_grant_power_desc`, hash `10f2fa54`, entry 1105.

Full raw template:

~~~text
Critical hits generate {power:%s} {capacitance_keyword:%s} over {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{power:%s}` | 0.05 → 5% | `percentage`; no + prefix |
| `{capacitance_keyword:%s}` | Capacitance | `loc_string`; `loc_talent_cryptic_power_keyword` |
| `{duration:%s}` | 4 | `number`; s supplied by template |

The minimally read display map is `cryptic_talents.lua` L1587-L1609. `power` uses the verified `cryptic_crits_grant_power.cooldown_regen = 0.05`; `duration` uses `cooldown_regen_time = 4`. The Capacitance name is `loc_talent_cryptic_power_keyword` (hash `ecc15a9f`, English entry 15388).

Static reconstruction; not an observed game screen:

~~~text
Critical hits generate 5% Capacitance over 4s.
~~~

## English comparison

The original English Critical-hit trigger, 5% amount and 4s generation period agree with the accepted evidence. The one-charge basis, conversion to resource points and recovery rate, refresh without stacking, base recovery contribution and other costs/pauses are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_crits_grant_power.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/c63720c4-df53-4c05-9881-cd6a6bf33c79). The icon identifies the talent; it is not mechanism evidence.
