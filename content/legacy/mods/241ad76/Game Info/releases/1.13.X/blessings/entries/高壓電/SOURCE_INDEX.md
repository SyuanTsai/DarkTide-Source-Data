# 高壓電：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| powermaul_p1 own tier | [powermaul_p1 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L575-L614) |
| powermaul_p1 own tier | [powermaul_p1 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L103-L111) |
| powermaul_p2 own tier | [powermaul_p2 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L203-L242) |
| powermaul_p2 own tier | [powermaul_p2 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L90-L98) |
| powermaul_shield_p1 own tier | [powermaul_shield_p1 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L545-L584) |
| powermaul_shield_p1 own tier | [powermaul_shield_p1 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L206-L214) |
| shotgun_p4 own tier | [shotgun_p4 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L677-L716) |
| shotgun_p4 own tier | [shotgun_p4 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L37-L45) |
| shotpistol_shield_p1 own tier | [shotpistol_shield_p1 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L957-L996) |
| shotpistol_shield_p1 own tier | [shotpistol_shield_p1 own tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L43-L51) |
| electrocuted consumer | [electrocuted consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L32-L44) |
| electrocuted consumer | [electrocuted consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L94-L109) |
| electrocuted consumer | [electrocuted consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L357-L360) |
| electrocuted consumer | [electrocuted consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L582-L614) |
| tier replaces wrapper fallback | [tier replaces wrapper fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| held item conditional buff | [held item conditional buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| damage stat type | [damage stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L783) |
| generic damage stage | [generic damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L100) |
| generic damage buff assembly | [generic damage buff assembly](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L244) |
| keyword refresh table | [keyword refresh table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| server buff instance insertion | [server buff instance insertion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L488) |
| minion update and add callback | [minion update and add callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L97-L120) |
| target internal buff dispatch | [target internal buff dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L202-L224) |
| server add then RPC | [server add then RPC](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L343-L374) |
| target keyword lookup | [target keyword lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L900-L914) |
| buff keyword population | [buff keyword population](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L840) |
| P1 M1 five sticky instances | [P1 M1 five sticky instances](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L49-L64) |
| P1 M1 sticky special action | [P1 M1 sticky special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1121-L1129) |
| P1 M2 five sticky instances | [P1 M2 five sticky instances](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L49-L64) |
| P1 M2 sticky special action | [P1 M2 sticky special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1193-L1201) |
| sticky schedule and same-update loop | [sticky schedule and same-update loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/sweep_stickyness.lua#L41-L78) |
| P1 sticky attack then add | [P1 sticky attack then add](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L720-L812) |
| sticky electrocuted interval buff | [sticky electrocuted interval buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L570-L620) |
| sticky tick stack/duration | [sticky tick stack/duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L793-L797) |
| interval update timing | [interval update timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L48) |
| shock visual is not electrocuted | [shock visual is not electrocuted](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L621-L648) |
| P2 primer on equip | [P2 primer on equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L2129-L2134) |
| P2 post-hit primer branches | [P2 post-hit primer branches](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L649-L699) |
| P2 status branch templates | [P2 status branch templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L700-L792) |
| Attack dispatches on-hit after values | [Attack dispatches on-hit after values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L622) |
| P4 M1 hip/ADS special shell | [P4 M1 hip/ADS special shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L260-L273) |
| P4 M1 ADS special shell | [P4 M1 ADS special shell](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L465-L477) |
| P4 M2 shell mapping | [P4 M2 shell mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L265-L271) |
| P4 M2 ADS shell mapping | [P4 M2 ADS shell mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L466-L472) |
| M1 stun versus M2 rending shells | [M1 stun versus M2 rending shells](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L283-L400) |
| shotgun status and rending templates | [shotgun status and rending templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L892-L956) |
| pellet hit damage loop | [pellet hit damage loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L500-L525) |
| post-pellet buff add | [post-pellet buff add](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L696-L708) |
| shotpistol normal pellet action | [shotpistol normal pellet action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L358-L405) |
| shotpistol light shove | [shotpistol light shove](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1032-L1056) |
| shotpistol heavy bash | [shotpistol heavy bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1212-L1230) |
| push profiles attack zero | [push profiles attack zero](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L150) |
| shield push profiles attack zero | [shield push profiles attack zero](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L382-L455) |
| shield special shout settings | [shield special shout settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_shout_templates.lua#L6-L17) |
| shield shout damage action | [shield shout damage action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_shout.lua#L163-L193) |
| shield special damage profile | [shield special damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/settings_templates/power_maul_shield_damage_profile_templates.lua#L1006-L1078) |
| shield M1 special wiring | [shield M1 special wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1178-L1280) |
| shield M2 special wiring | [shield M2 special wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1387-L1488) |
| all shotgun pellets precede hit processing | [all shotgun pellets precede hit processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L151-L200) |
| powermaul_p1_m1 trait import | [powermaul_p1_m1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15) |
| powermaul_p1_m1 trait append | [powermaul_p1_m1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| powermaul_p1_m2 trait import | [powermaul_p1_m2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15) |
| powermaul_p1_m2 trait append | [powermaul_p1_m2 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| powermaul_p2_m1 trait import | [powermaul_p2_m1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L16) |
| powermaul_p2_m1 trait append | [powermaul_p2_m1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L2125-L2127) |
| powermaul_shield_p1_m1 trait import | [powermaul_shield_p1_m1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L16) |
| powermaul_shield_p1_m1 trait append | [powermaul_shield_p1_m1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1610-L1612) |
| powermaul_shield_p1_m2 trait import | [powermaul_shield_p1_m2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L16) |
| powermaul_shield_p1_m2 trait append | [powermaul_shield_p1_m2 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1828-L1830) |
| shotgun_p4_m1 trait import | [shotgun_p4_m1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L15) |
| shotgun_p4_m1 trait append | [shotgun_p4_m1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L1076-L1078) |
| shotgun_p4_m2 trait import | [shotgun_p4_m2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L15) |
| shotgun_p4_m2 trait append | [shotgun_p4_m2 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L1064-L1066) |
| shotpistol_shield_p1_m1 trait import | [shotpistol_shield_p1_m1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L16) |
| shotpistol_shield_p1_m1 trait append | [shotpistol_shield_p1_m1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1533-L1535) |
| 目標共同倒數及到期 | [目標共同倒數及到期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44) |
| duration_per_stack實際計算 | [duration_per_stack實際計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L518-L535) |
| 目標疊層刷新共同起算 | [目標疊層刷新共同起算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L488) |
| 滿層仍刷新起算時間 | [滿層仍刷新起算時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| 喊聲護甲倍率讀取 | [喊聲護甲倍率讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L99-L147) |
| 喊聲近遠倍率插值 | [喊聲近遠倍率插值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L147-L191) |
| 零護甲倍率及破甲邊界 | [零護甲倍率及破甲邊界](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L95) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- **五份 tier 與 wrapper**：電擊錘 P1、法務官電擊鎚 P2、鎚盾 P1、滅絕者霰彈槍 P4、衝覆者霰彈手槍和盾 P1 各自定義完整 I–IV tier。五個 wrapper 都是獨立定義；各自有 conditional_stat_buffs.damage_vs_electrocuted=0.5 備用值及 is_item_slot_wielded 條件。對應 tier 的 stat_buffs.damage_vs_electrocuted 覆寫同一鍵，因此實際值是 +10／15／20／25%，不是 .5 加上 tier。

- **目標狀態與傷害池**：MinionState.is_electrocuted 對六種 electrocuted group keyword 任一為真；傷害 consumer 不查施加者或同武器來源。成立時把 High Voltage 加入通用 damage_vs_electrocuted additive pool。這不是 finesse-only 屬性；主傷害後仍可能另算 finesse、rending、背刺、側擊及其他效果，因此階級百分比不是每次最終血量傷害的固定倍數。

- **電擊狀態時序**：server add 同步建立目標 buff instance，但 _on_add_buff 只啟用後續 MinionBuffExtension.update，不立即重建 _keywords。該 update 才呼叫 _update_stat_buffs_and_keywords 並由 buff:update_keywords 建立 live keyword map，has_keyword 讀此表。P1 黏附五實例在同一個 _update_hit_stickyness 呼叫的 for 迴圈內逐一先 Attack.execute、後加 tick；首例必先於本次 tick 加入，同迴圈中的後續實例不保證已讀到新狀態。目標 keyword refresh 完成後，仍存活的後續命中與 interval tick 可符合條件；不推定跨 extension 的同 frame 執行先後。

- **P2 特攻分支**：on_hit primer 在傷害已算完後查目標狀態。原先已電擊時加 3.5 秒、帶 electrocuted keyword 的 extra interval stun；原先未電擊時只加 0.1 秒、不帶該 keyword 的 basic stun。P2 未電擊目標的首擊不能靠其事後 basic stun 自我增傷。

- **霰彈槍特殊彈**：P4 M1 的 13 pellets 先完成 firing action damage loop，之後才加 shotgun_special_stun；該 buff 帶 3 秒 electrocuted keyword 並有 interval attacks。P4 M2 特殊彈加 8 秒、+0.25 rending 的 shotgun_special_rending_debuff，沒有 electrocuted keyword。Shotpistol P1 普通 pellet 與盾擊沒有本武器的電擊施加。

- **推擊與盾牌特殊攻擊**：light/default melee push 與 human/default shield push 的 attack 都是 0；直接推擊不增傷，追擊斬擊或重盾擊是獨立 attack。鎚盾特殊 shout profile 不施加 electrocuted；其 ranged near/far 各護甲 attack modifier 全為 0。DamageProfile 保留 Lua 中 truthy 的 0，近遠 lerp 後仍為 0；沒有其他破甲等機制改變倍率時，不產生可放大的生命傷害，不能只因 Attack.execute 就宣稱喊聲可正值增傷。

- **持用、切換與持續**：wrapper 由目前 item slot 條件提供 stat buff，沒有獨立計時器。離手時條件關閉，目標的狀態仍依目標 buff 時間持續；切回相符武器且 keyword 仍有效便可再次適用。不保證跨系統同 frame 的切換/refresh 邊界。

- **爆炸與適用範圍**：五種實際 weapon template、shotgun shell 與 shield-special wiring 未找到本項配置的 explosion template。若其他來源爆炸傷害進入相同 consumer，仍只依傷害計算時的 live target electrocuted keyword 與持用條件判定。

- **目標疊層與期限**：power_maul_sticky_tick clone shockmaul_stun_interval，繼承 refresh_duration_on_stack；覆寫 duration=.7、max_stacks/cap=5、duration_per_stack=true。Buff.duration 計算 .7×當前層數，_update_duration 以共同 start_time 到期；新增疊層及滿層重施都刷新 start_time，因此最多 3.5 秒，不是各層獨立倒數。其 interval Attack 使用固定 power，沒有以該層數乘 High Voltage。P2 extra/basic 及 shotgun stun/rending 各 max_stacks/cap=1、重施刷新自身期限。shotgun stun 的 interval_func 對正在踉蹌的 chaos_poxwalker_bomber 不執行該次間隔傷害；有效電擊 keyword 本身仍由該目標 buff 提供。

- **同池公式**：令 B 為隔離後基礎主傷害、q 為其他同池比例、p 為本階級比例：D前＝B×(1＋q)，D後＝B×(1＋q＋p)，ΔD＝B×p，相對增幅＝p÷(1＋q)。

- **IV 級算例**：p＝0.25；B＝100、q＝0 時為 100→125。若已有 q＝0.20，則 120→145，絕對增加仍為 25，對原 120 的相對增幅為 20.83%，不是先把既有傷害乘 1.25。

- **範圍限制**：damage_vs_electrocuted 進通用主傷害池；後續攻擊可能另有 finesse、flat bonus、rending、背刺、側擊、特殊 profile、上限及遞減。算例只描述目標已電擊且相符武器持用時本祝福的主傷害貢獻。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_222`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_222.png)｜[Issue附件](https://github.com/user-attachments/assets/a5bb3fdd-036e-4b45-b53c-bfea7b800645)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電擊錘等級覆寫 | [電擊錘等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L575-L616) |
| 電擊錘Buff接入 | [電擊錘Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L103-L111) |
| UI 電擊錘 | [UI 電擊錘](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L436) |
| 電擊錘 阿格尼 Mk Ia匯入 | [電擊錘 阿格尼 Mk Ia匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15) |
| 電擊錘 阿格尼 Mk Ia接入 | [電擊錘 阿格尼 Mk Ia接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| 電擊錘 軍務部 Mk III匯入 | [電擊錘 軍務部 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15) |
| 電擊錘 軍務部 Mk III接入 | [電擊錘 軍務部 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| 法務官電擊鎚等級覆寫 | [法務官電擊鎚等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L203-L242) |
| 法務官電擊鎚Buff接入 | [法務官電擊鎚Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L90-L98) |
| UI 法務官電擊鎚 | [UI 法務官電擊鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L454) |
| 法務官電擊鎚 布蘭克斯 Mk III匯入 | [法務官電擊鎚 布蘭克斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L16) |
| 法務官電擊鎚 布蘭克斯 Mk III接入 | [法務官電擊鎚 布蘭克斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p2_m1.lua#L2125-L2127) |
| 法務官電擊鎚和鎮壓護盾等級覆寫 | [法務官電擊鎚和鎮壓護盾等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L545-L586) |
| 法務官電擊鎚和鎮壓護盾Buff接入 | [法務官電擊鎚和鎮壓護盾Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L206-L214) |
| UI 法務官電擊鎚和鎮壓護盾 | [UI 法務官電擊鎚和鎮壓護盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L480) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI匯入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L16) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI接入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m1.lua#L1610-L1612) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI匯入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L16) |
| 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI接入 | [法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_maul_shields/powermaul_shield_p1_m2.lua#L1828-L1830) |
| 滅絕者霰彈槍等級覆寫 | [滅絕者霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L677-L716) |
| 滅絕者霰彈槍Buff接入 | [滅絕者霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L37-L45) |
| UI 滅絕者霰彈槍 | [UI 滅絕者霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1185) |
| 滅絕者霰彈槍 鐵腕 Mk III匯入 | [滅絕者霰彈槍 鐵腕 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L15) |
| 滅絕者霰彈槍 鐵腕 Mk III接入 | [滅絕者霰彈槍 鐵腕 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L1076-L1078) |
| 滅絕者霰彈槍 鐵腕 Mk VIII匯入 | [滅絕者霰彈槍 鐵腕 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L15) |
| 滅絕者霰彈槍 鐵腕 Mk VIII接入 | [滅絕者霰彈槍 鐵腕 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L1064-L1066) |
| 衝覆者霰彈手槍和防暴盾牌等級覆寫 | [衝覆者霰彈手槍和防暴盾牌等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L957-L998) |
| 衝覆者霰彈手槍和防暴盾牌Buff接入 | [衝覆者霰彈手槍和防暴盾牌Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L43-L53) |
| UI 衝覆者霰彈手槍和防暴盾牌 | [UI 衝覆者霰彈手槍和防暴盾牌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1203) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L16) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1533-L1535) |
