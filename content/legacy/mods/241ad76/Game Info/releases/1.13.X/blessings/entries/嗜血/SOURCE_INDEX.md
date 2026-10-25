# 嗜血：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 五實作完整own tiers | [五實作完整own tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L10-L52) |
| 五實作完整wrapper／內部buff映射 | [五實作完整wrapper／內部buff映射](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1076-L1160) |
| 特殊擊殺、道具匹配與持用閘門 | [特殊擊殺、道具匹配與持用閘門](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L568-L727) |
| 攻擊事件旗標與消耗消費端 | [攻擊事件旗標與消耗消費端](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L575-L710) |
| 爆擊判定與消耗時點 | [爆擊判定與消耗時點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L181) |
| 近戰爆擊率公式 | [近戰爆擊率公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| ActionSweep 各family實際profile selector | [ActionSweep 各family實際profile selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L528-L552) |
| 2H Chainsword push-follow active selector | [2H Chainsword push-follow active selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1346-L1439) |
| Cadia ordinary sticky and active route | [Cadia ordinary sticky and active route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L1810-L1867) |
| Force Sword active and fling distinction | [Force Sword active and fling distinction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua#L263-L284) |
| PowerSword P3 special action selection | [PowerSword P3 special action selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3429-L3434) |
| Chainaxe P1 own I–IV formatter與四級層數 | [Chainaxe P1 own I–IV formatter與四級層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L10-L52) |
| 2H Chainsword own I–IV formatter與四級層數 | [2H Chainsword own I–IV formatter與四級層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L10-L52) |
| Cadia Chainsword own I–IV formatter與四級層數 | [Cadia Chainsword own I–IV formatter與四級層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L286-L328) |
| Force Sword P1 own I–IV formatter與四級層數 | [Force Sword P1 own I–IV formatter與四級層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L10-L52) |
| PowerSword P3 own I–IV formatter與四級層數 | [PowerSword P3 own I–IV formatter與四級層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L140-L182) |
| Chainaxe實際wrapper child覆寫 | [Chainaxe實際wrapper child覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L8-L10) |
| 2H Chainsword實際wrapper child覆寫 | [2H Chainsword實際wrapper child覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L8-L10) |
| Cadia Chainsword實際wrapper child覆寫 | [Cadia Chainsword實際wrapper child覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L22-L24) |
| Force Sword P1實際wrapper child覆寫 | [Force Sword P1實際wrapper child覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L14-L16) |
| PowerSword P3實際wrapper child覆寫 | [PowerSword P3實際wrapper child覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L44-L46) |
| Base父proc條件、疊層加入及item slot上下文 | [Base父proc條件、疊層加入及item slot上下文](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1076-L1106) |
| Guaranteed keyword child之時限、上限和消耗事件 | [Guaranteed keyword child之時限、上限和消耗事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1107-L1124) |
| Chainaxe percentage child之時限、上限和消耗事件 | [Chainaxe percentage child之時限、上限和消耗事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1125-L1142) |
| PowerSword percentage capped child之時限、上限和消耗事件 | [PowerSword percentage capped child之時限、上限和消耗事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1143-L1160) |
| CheckProc的held slot條件 | [CheckProc的held slot條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L43-L60) |
| CheckProc特殊擊殺與完整item match | [CheckProc特殊擊殺與完整item match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L568-L727) |
| Attack on_hit gate與skip flag | [Attack on_hit gate與skip flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L575-L621) |
| Attack獨立on_kill事件與special/item參數 | [Attack獨立on_kill事件與special/item參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L711) |
| ActionWeaponBase爆擊關鍵字優先序及事件參數 | [ActionWeaponBase爆擊關鍵字優先序及事件參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| 近戰/遠程爆擊率計算 | [近戰/遠程爆擊率計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| Sweep先做爆擊判定 | [Sweep先做爆擊判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L217-L224) |
| Sweep開始事件於判定後排入 | [Sweep開始事件於判定後排入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L286-L298) |
| Player Buff更新、處理事件、刷新stats/keywords順序 | [Player Buff更新、處理事件、刷新stats/keywords順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| 內部Buff加入實際路由 | [內部Buff加入實際路由](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L209-L227) |
| 內部Buff按相同template建立stacking instance與疊層刷新條件 | [內部Buff按相同template建立stacking instance與疊層刷新條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L459) |
| max stack cap及滿層刷新條件 | [max stack cap及滿層刷新條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| Buff 5秒期限以start_time判定 | [Buff 5秒期限以start_time判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| 卸除時武器extension操作的buff target範圍 | [卸除時武器extension操作的buff target範圍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L680) |
| 切換武器on_unwield處理；本項子Buff非此武器buff list | [切換武器on_unwield處理；本項子Buff非此武器buff list](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Chainaxe P1 M1直接攻擊profile selectors | [Chainaxe P1 M1直接攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L360-L370) |
| Chainaxe P1 M2直接攻擊profile selectors | [Chainaxe P1 M2直接攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L364-L370) |
| Chainsword 2H P1 M1實際攻擊profile selectors | [Chainsword 2H P1 M1實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L507-L512) |
| Chainsword 2H P1 M2實際攻擊profile selectors | [Chainsword 2H P1 M2實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L479-L484) |
| Cadia Chainsword P1 M1實際攻擊profile selectors | [Cadia Chainsword P1 M1實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L329-L335) |
| Cadia Chainsword P1 M2實際攻擊profile selectors | [Cadia Chainsword P1 M2實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L370-L376) |
| Force Sword P1 M1實際攻擊profile selectors | [Force Sword P1 M1實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L418-L423) |
| Force Sword P1 M2實際攻擊profile selectors | [Force Sword P1 M2實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L415-L420) |
| Force Sword P1 M3實際攻擊profile selectors | [Force Sword P1 M3實際攻擊profile selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L306-L311) |
| PowerSword P3 M1 special action selectors | [PowerSword P3 M1 special action selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1787-L1810) |
| ActionSweep依特殊啟動狀態選普通或special profile | [ActionSweep依特殊啟動狀態選普通或special profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L411-L416) |
| ActionSweep按special_active選實際profile | [ActionSweep按special_active選實際profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1381-L1390) |
| ActionSweep以melee攻擊型別及當前profile送Attack事件 | [ActionSweep以melee攻擊型別及當前profile送Attack事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| BuffExtension更新buff並移除期限已到instance | [BuffExtension更新buff並移除期限已到instance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205) |
| CheckProc特殊擊殺只看weapon_special與died結果 | [CheckProc特殊擊殺只看weapon_special與died結果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L568-L570) |
| CheckProc以完整武器item名稱比對 | [CheckProc以完整武器item名稱比對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Chainaxe實際特殊與黏附profile旗標區域 | [Chainaxe實際特殊與黏附profile旗標區域](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/settings_templates/chain_axe_damage_profile_templates.lua#L232-L540) |
| Chainaxe實際重擊special/sticky profile旗標區域 | [Chainaxe實際重擊special/sticky profile旗標區域](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/settings_templates/chain_axe_damage_profile_templates.lua#L912-L1208) |
| 2H Chainsword active/push-follow與普通sticky profile旗標 | [2H Chainsword active/push-follow與普通sticky profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L356-L728) |
| 2H Chainsword active-smiter與重擊sticky profile旗標 | [2H Chainsword active-smiter與重擊sticky profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L1084-L1182) |
| 2H Chainsword重擊special及ordinary sticky profile旗標 | [2H Chainsword重擊special及ordinary sticky profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L1604-L1735) |
| Cadia Chainsword active與ordinary sticky profile旗標 | [Cadia Chainsword active與ordinary sticky profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/settings_templates/chain_sword_damage_profile_templates.lua#L364-L552) |
| Cadia Chainsword special light與M2 sticky profile旗標 | [Cadia Chainsword special light與M2 sticky profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/settings_templates/chain_sword_damage_profile_templates.lua#L900-L1181) |
| Force Sword normal與special-active profile旗標 | [Force Sword normal與special-active profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua#L29-L742) |
| Force Sword push-follow fling profile旗標 | [Force Sword push-follow fling profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua#L1223-L1280) |
| PowerSword P3 normal light及active profile旗標 | [PowerSword P3 normal light及active profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L2603-L2808) |
| PowerSword P3 normal/active smiter與stab profile旗標 | [PowerSword P3 normal/active smiter與stab profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L2810-L3141) |
| PowerSword P3 normal/active heavy profile旗標 | [PowerSword P3 normal/active heavy profile旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L3143-L3733) |
| 本項觸發／型號／期限／結算差異 | [本項觸發／型號／期限／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L2217-L2327) |
| 本項觸發／型號／期限／結算差異 | [本項觸發／型號／期限／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L478-L484) |
| 本項觸發／型號／期限／結算差異 | [本項觸發／型號／期限／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L843-L852) |
| 本項觸發／型號／期限／結算差異 | [本項觸發／型號／期限／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1290-L1324) |
| 本項觸發／型號／期限／結算差異 | [本項觸發／型號／期限／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1093-L1160) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 實際黏附傷害道具／配置接線 | [實際黏附傷害道具／配置接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L739-L786) |
| 實際直接橫掃道具接線 | [實際直接橫掃道具接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1499) |

## 執行與計算

- 固定範圍為 Release 1.13.1／Git SHA 7e662fcda16219d775b84af50322be2e9cd9d62e 的五個實作、十個實際 Mark。觸發依父模板的 `on_kill`、目前持用槽、完全相符的 attacking item，以及擊殺結果和實際 `damage_profile.weapon_special` 旗標；不要以特殊按鍵或武器家族名稱替代該旗標。

- Attack 的 `on_kill` 是獨立事件分支，不受 `on_hit` 的 `skip_on_hit_proc` 閘門阻擋。因此鏈斧普通黏附設定不帶特殊旗標時不符合；重型開膛劍與突擊鏈鋸劍部分普通黏附設定雖有 `skip_on_hit_proc=true`，但另有 `weapon_special=true`，其擊殺仍可能符合。Force Sword 與布蘭克斯動力劍需採用各自選中的 active-special profile；普通攻擊、推擊本體及 Force Sword fling follow-up 使用未標特殊的profile，不符合。

- 五個 own tier 均覆寫父模板的 `num_stacks_on_proc`，實際內部子效果各異：chainaxe_p1 為每層 +0.10 近戰爆擊率、最多 10 層；powersword_p3 為每層 +0.05、最多 8 層；chainsword_2h_p1、chainsword_p1、forcesword_p1 為 `guaranteed_melee_critical_strike` 關鍵字、最多 1 層。前三級以外的層數差別不能推定子效果相同。

- 兩個百分比效果監聽 `on_sweep_start`，橫掃先做爆擊判定，之後才排入消耗事件；所以已在屬性快取中的加成可作用於該次橫掃的爆擊判定。三個關鍵字效果監聽 `on_critical_strike`，只有實際產生爆擊事件才消耗；`prevent_critical_strike` 會先把機率設為 0。該事件沒有近戰類型過濾，因此切槽後的遠程爆擊也可能消耗關鍵字；關鍵字本身只把近戰爆擊機率設為必定成功。

- 父觸發事件處理後加入子效果；PlayerUnitBuffExtension 的固定更新先更新 buff、處理 proc events，然後重算 stat buffs/keywords。新效果不回溯作用於擊殺攻擊，並在事件處理與屬性更新後供後續攻擊使用。

- 同一子模板有 `max_stacks`，內部加層會累加至同一 stacking instance。這五個子模板沒有疊層重設 start time 的旗標；後續加層沿用首次加入的 5 秒起點，滿層不再加層或刷新。關鍵字子效果上限一層，tier請求4／6／8／10次加入也只保留一次效果。

- 子效果本身沒有持用槽條件，切槽例程操作武器上的 on-wield／on-unwield buff，沒有證據顯示切換會立即移除這個獨立內部效果。符合的觸發仍受持用槽與道具匹配限制。此處不推定移除父祝福會立即 cascade 清除已加入的子效果。

主控移除差異：此父效果是ProcBuff，透過add_internally_controlled_buff_with_stacks加入獨立內部效果；不是WeaponTraitParentProcBuff所持有的externally-controlled子層。父模板沒有stop_func，Buff.destroy843–852不清除此獨立instance；武器_remove_buffs1290–1324只操作實際external equipped/wielded索引。已有內部效果按自己的五秒/finish移除，不能套用強力一擊Parent.destroy清子層規則。

主控公式核對：CriticalStrike.chance33–37先clamp(base+additional,0,1)，再乘(1−critical_strike_chance_to_damage_convert)；ActionWeaponBase162–177先採prevent0，再採guaranteed1，否則一般chance；on_critical_strike產生於判定而非必須命中目標。

令 C0 為基礎近戰爆擊率，A 為其他一般與近戰爆擊率修正總和，t 為本項的近戰爆擊率加成比例，r 為爆擊率轉傷害的轉換比例。依 CriticalStrike.chance 的實際順序，先算 P = clamp(C0 + A + t, 0, 1)，再算 C = P × (1 − r)；一般 ActionWeaponBase 近戰呼叫不跳過這項轉換。若 prevent_critical_strike 關鍵字存在，ActionWeaponBase 先把爆擊機率設為 0，不進入此公式。鏈斧每層 t=0.10；布蘭克斯動力劍每層 t=0.05。前提 C0=5%、A=0、r=0 時，鏈斧 I：5%+4×10%=45%；鏈斧 IV：5%+10×10%=105%，先封頂為100%，相對原5%增加95個百分點；布蘭克斯動力劍 IV：5%+8×5%=45%。這些是爆擊率，不是最終傷害加成。三個關鍵字型實作在未被禁止爆擊時直接保證近戰爆擊，並非將某個百分點加數代入 t。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_070`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_070.png)｜[Issue附件](https://github.com/user-attachments/assets/13485cb7-1f86-45d4-b7a7-cb0be0e65585)；圖示只作辨識。


- **突擊鏈斧、重型開膛劍**：item.icon `content/ui/textures/icons/traits/weapon_trait_070`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_070.png)｜[Issue附件](https://github.com/user-attachments/assets/13485cb7-1f86-45d4-b7a7-cb0be0e65585)。

- **突擊鏈鋸劍**：item.icon `content/ui/textures/icons/traits/weapon_trait_078`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_078.png)｜[Issue附件](https://github.com/user-attachments/assets/6075bf97-6e86-4361-b3a4-6e3b9c42ab8a)。

- **烈焰力場劍、機械神教動力劍**：item.icon `content/ui/textures/icons/traits/weapon_trait_085`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_085.png)｜[Issue附件](https://github.com/user-attachments/assets/b8260f93-8c0d-4eb7-bf12-4f23cfc2aa8f)。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 突擊鏈斧等級覆寫 | [突擊鏈斧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L10-L52) |
| 突擊鏈斧Buff接入 | [突擊鏈斧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L8-L10) |
| UI 突擊鏈斧 | [UI 突擊鏈斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L4) |
| 突擊鏈斧 奧瑞斯特斯 Mk IV匯入 | [突擊鏈斧 奧瑞斯特斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L15) |
| 突擊鏈斧 奧瑞斯特斯 Mk IV接入 | [突擊鏈斧 奧瑞斯特斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m1.lua#L2074-L2076) |
| 突擊鏈斧 奧瑞斯特斯 Mk XII匯入 | [突擊鏈斧 奧瑞斯特斯 Mk XII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L14) |
| 突擊鏈斧 奧瑞斯特斯 Mk XII接入 | [突擊鏈斧 奧瑞斯特斯 Mk XII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_axes/chainaxe_p1_m2.lua#L1282-L1284) |
| 重型開膛劍等級覆寫 | [重型開膛劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L10-L52) |
| 重型開膛劍Buff接入 | [重型開膛劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L8-L10) |
| UI 重型開膛劍 | [UI 重型開膛劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L22) |
| 重型開膛劍 泰格魯斯 Mk III匯入 | [重型開膛劍 泰格魯斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L16) |
| 重型開膛劍 泰格魯斯 Mk III接入 | [重型開膛劍 泰格魯斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1537-L1539) |
| 重型開膛劍 泰格魯斯 Mk XV匯入 | [重型開膛劍 泰格魯斯 Mk XV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L15) |
| 重型開膛劍 泰格魯斯 Mk XV接入 | [重型開膛劍 泰格魯斯 Mk XV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L1538-L1540) |
| 突擊鏈鋸劍等級覆寫 | [突擊鏈鋸劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L286-L328) |
| 突擊鏈鋸劍Buff接入 | [突擊鏈鋸劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L22-L24) |
| UI 突擊鏈鋸劍 | [UI 突擊鏈鋸劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L40) |
| 突擊鏈鋸劍 卡迪亞 Mk IV匯入 | [突擊鏈鋸劍 卡迪亞 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L15) |
| 突擊鏈鋸劍 卡迪亞 Mk IV接入 | [突擊鏈鋸劍 卡迪亞 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L2424-L2426) |
| 突擊鏈鋸劍 卡迪亞 Mk XIIIg匯入 | [突擊鏈鋸劍 卡迪亞 Mk XIIIg匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L14) |
| 突擊鏈鋸劍 卡迪亞 Mk XIIIg接入 | [突擊鏈鋸劍 卡迪亞 Mk XIIIg接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L2030-L2032) |
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L10-L52) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L14-L16) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 烈焰力場劍 朦朧 Mk II匯入 | [烈焰力場劍 朦朧 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 烈焰力場劍 戴莫斯 Mk IV匯入 | [烈焰力場劍 戴莫斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671-L1673) |
| 烈焰力場劍 伊利斯 Mk V匯入 | [烈焰力場劍 伊利斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539-L1541) |
| 機械神教動力劍等級覆寫 | [機械神教動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L140-L182) |
| 機械神教動力劍Buff接入 | [機械神教動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L44-L46) |
| UI 機械神教動力劍 | [UI 機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L552) |
| 機械神教動力劍 布蘭克斯 Mk VI匯入 | [機械神教動力劍 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L15) |
| 機械神教動力劍 布蘭克斯 Mk VI接入 | [機械神教動力劍 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3372-L3374) |
