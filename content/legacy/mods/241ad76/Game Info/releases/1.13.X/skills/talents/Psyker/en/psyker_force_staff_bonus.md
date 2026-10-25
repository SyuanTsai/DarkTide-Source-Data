# Channeled Force: source evidence

[繁體中文](../psyker_force_staff_bonus.md) | [Player description](README.md#psyker_force_staff_bonus) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_force_staff_bonus)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_force_staff_bonus`; name key `loc_talent_psyker_force_staff_bonus`; description key `loc_talent_psyker_force_staff_both_bonus_desc`. Node `node_f0bb8060-6afc-4ae9-954d-3817cc054b35`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_action_finish` requires the `secondary` slot. For `forcestaff_p2_m1`, it checks `action_charge_flame` / `action_shoot_flame`; for other staffs, `action_charge` / `rapid_left`. A charge above 0.95 applies the Primary buff without requiring a successful hit. Each buff has a maximum of one stack and lasts 5 seconds, applying `force_staff_single_target_damage = 0.2` and the Secondary bonus of 0.1 respectively.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3704-L3782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3704-L3782)
- [scripts/settings/talent/talent_settings_psyker.lua — L93-L98](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L93-L98)
- [scripts/utilities/attack/damage_calculation.lua — L486-L506](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L486-L506)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2789-L2818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2789-L2818)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1997-L2026](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1997-L2026)

## Example assumptions and limits

- **Alternating attacks**: After a Force Staff charge exceeds 95% and the charge action finishes, Primary Attack Damage increases by 20% for 5 seconds. After a Primary Attack action finishes, Secondary Attack Damage increases by 10% for 5 seconds.

- **Refresh**: The bonuses have separate timers and can coexist. Repeated triggers reset the corresponding 5-second timer without stacking the same bonus.

- **Damage example**: Compare each bonus's own Damage stage, with both attacks originally dealing 100 and no other bonuses. Primary Attacks deal 100 × 1.2 = 120; Secondary Attacks deal 100 × 1.1 = 110. The bonuses affect different attacks and cannot be combined into a 30% increase on one hit.

The source explicitly checks action-finished events. The exact trigger timing for cancellations, weapon switches and attack chains on each staff still requires in-game confirmation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_force_staff_bonus`, hash `4df98799`, entry 5080: **Channeled Force**.
- Description key `loc_talent_psyker_force_staff_both_bonus_desc`, hash `44883ede`, entry 4443.

Full raw template:

~~~text
{damage:%s} Damage to Force Staff's Primary Attacks after Fully Charged Force Staff Secondary Attacks. Lasts {time:%s}s.

{secondary_damage:%s} Damage to Force Staff's Secondary Attacks after Force Staff Primary Attack. Lasts {secondary_time:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.2 | Percentage ×100, with `+` prefix: +20%. |
| `time` | 5 | Number: 5. |
| `secondary_damage` | 0.1 | Percentage ×100, with `+` prefix: +10%. |
| `secondary_time` | 5 | Number: 5. |

Display mapping: [psyker_talents.lua L2794-L2813](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2794-L2813). Values reuse the accepted Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage to Force Staff's Primary Attacks after Fully Charged Force Staff Secondary Attacks. Lasts 5s.

+10% Damage to Force Staff's Secondary Attacks after Force Staff Primary Attack. Lasts 5s.
~~~

## English comparison

The two attack-specific Damage bonuses and durations agree. “Fully Charged” gives no exact threshold; the verified cutoff is above 95%, applied on action finish without a hit requirement. Those details, separate refresh timers and the existing cancellation/timing questions are supplementary, without assuming the English requires an exact 100% charge.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_force_staff_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/a3ca9930-1aef-4718-9463-1b5da02a5b6b). The icon identifies the talent; it is not mechanism evidence.
