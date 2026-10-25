# 浴血而生：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Independent own I–IV toughness_fixed_percentage .045/.05/.055/.06 and percentage plus formatter. | [Independent own I–IV toughness_fixed_percentage .045/.05/.055/.06 and percentage plus formatter.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L125-L155) |
| Actual direct clone toughness_recovery_on_close_kill, no subsequent own-prefixed override in file. | [Actual direct clone toughness_recovery_on_close_kill, no subsequent own-prefixed override in file.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L16) |
| Independent own I–IV toughness_fixed_percentage .045/.05/.055/.06 and percentage plus formatter. | [Independent own I–IV toughness_fixed_percentage .045/.05/.055/.06 and percentage plus formatter.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L606-L636) |
| Actual direct clone toughness_recovery_on_close_kill, no subsequent own-prefixed override in file. | [Actual direct clone toughness_recovery_on_close_kill, no subsequent own-prefixed override in file.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L35) |
| Independent own I–IV toughness_fixed_percentage .045/.05/.055/.06 and percentage plus formatter. | [Independent own I–IV toughness_fixed_percentage .045/.05/.055/.06 and percentage plus formatter.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L606-L636) |
| Actual direct clone toughness_recovery_on_close_kill, no subsequent own-prefixed override in file. | [Actual direct clone toughness_recovery_on_close_kill, no subsequent own-prefixed override in file.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L35) |
| Actual generic ProcBuff held-slot/item/on_ranged_close_kill; active_duration2, allow_proc_while_active true, no stack declaration; SharedBuffFunctions regain_toughness proc consumes own tier fixedpercentage. Timing meaning and consumer formula verified separately. | [Actual generic ProcBuff held-slot/item/on_ranged_close_kill; active_duration2, allow_proc_while_active true, no stack declaration; SharedBuffFunctions regain_toughness proc consumes own tier fixedpercentage. Timing meaning and consumer formula verified separately.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1475-L1487) |
| Exact item-name match | [Exact item-name match](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Currently wielded slot gate | [Currently wielded slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Ranged close-kill predicate | [Ranged close-kill predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318) |
| Hit-position range comparison | [Hit-position range comparison](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791) |
| Ranged close-distance constant | [Ranged close-distance constant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L23) |
| Kill event carries source item and position | [Kill event carries source item and position](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| Common ranged damage dispatcher | [Common ranged damage dispatcher](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| Pellet action ranged mode | [Pellet action ranged mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L402-L423) |
| Pellet target-hit event path | [Pellet target-hit event path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L512-L529) |
| Special shell selection | [Special shell selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L904-L914) |
| Rippergun Mk II hip/aimed pellet modes | [Rippergun Mk II hip/aimed pellet modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L230-L335) |
| Rippergun Mk II bayonet sweep | [Rippergun Mk II bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L572-L666) |
| Rippergun Mk V hip/aimed pellet modes | [Rippergun Mk V hip/aimed pellet modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L227-L331) |
| Rippergun Mk V bayonet sweep | [Rippergun Mk V bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L567-L661) |
| Rippergun Mk VI hip/aimed pellet modes | [Rippergun Mk VI hip/aimed pellet modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L209-L313) |
| Rippergun Mk VI bayonet sweep | [Rippergun Mk VI bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L550-L644) |
| Shotgun P3 Mk III hip fire | [Shotgun P3 Mk III hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L217-L268) |
| Shotgun P3 Mk III fire after reload | [Shotgun P3 Mk III fire after reload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L324-L366) |
| Shotgun P3 Mk III ADS | [Shotgun P3 Mk III ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L416-L464) |
| Shotgun P3 Mk III special toggle | [Shotgun P3 Mk III special toggle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L682-L700) |
| Shotgun P3 special-actions table | [Shotgun P3 special-actions table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L1131-L1136) |
| Shotgun P4 Mk III hip and special shell link | [Shotgun P4 Mk III hip and special shell link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L218-L273) |
| Shotgun P4 Mk III reload-chain shells | [Shotgun P4 Mk III reload-chain shells](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L329-L378) |
| Shotgun P4 Mk III ADS shells | [Shotgun P4 Mk III ADS shells](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L425-L478) |
| Shotgun P4 Mk III special ammo load | [Shotgun P4 Mk III special ammo load](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L700-L720) |
| Shotgun P4 Mk VIII hip/special shell link | [Shotgun P4 Mk VIII hip/special shell link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L218-L271) |
| Shotgun P4 Mk VIII reload-chain shells | [Shotgun P4 Mk VIII reload-chain shells](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L327-L372) |
| Shotgun P4 Mk VIII ADS shells | [Shotgun P4 Mk VIII ADS shells](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L421-L472) |
| Shotgun P4 Mk VIII special ammo load | [Shotgun P4 Mk VIII special ammo load](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L696-L716) |
| P4 special shell effects | [P4 special shell effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L283-L401) |
| P4 Mk III stun interval attack | [P4 Mk III stun interval attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L892-L946) |
| P4 Mk VIII rending effect | [P4 Mk VIII rending effect](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L947-L956) |
| P4 stun-tick damage profile | [P4 stun-tick damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L648-L690) |
| Toughness callback selects tier override | [Toughness callback selects tier override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27) |
| Maximum toughness and missing toughness | [Maximum toughness and missing toughness](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L100) |
| Percentage recovery and cap | [Percentage recovery and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285) |
| Recovery-blocked states | [Recovery-blocked states](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L475) |
| ProcBuff active duration setup | [ProcBuff active duration setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L11-L23) |
| ProcBuff active duration semantics | [ProcBuff active duration semantics](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| No-cooldown reactivation | [No-cooldown reactivation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff event processing calls recovery | [ProcBuff event processing calls recovery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L311-L346) |
| Formatter percentage conversion | [Formatter percentage conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| Formatter tier override resolution | [Formatter tier override resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L111) |
| Formatter decimal precision | [Formatter decimal precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L190-L227) |
| 擊殺事件先加入佇列 | [擊殺事件先加入佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 三個實際武器族各有自己的trait tier資料；I–IV級`toughness_fixed_percentage`均為0.045／0.05／0.055／0.06，formatter以percentage及`+`前綴顯示。各wrapper都直接clone `toughness_recovery_on_close_kill`，沒有自己的後置覆寫。SharedBuffFunctions使用tier override的`toughness_fixed_percentage`，只有缺少該鍵才退回base的0.02；這是覆寫，不是把0.02再加到tier值。

- Base ProcBuff只監聽on_kill。事件必須符合`on_item_match`（攻擊攜帶的item name等於此trait buff的item name）與`on_ranged_close_kill`（attack_result為died，且attack_type為ranged或damage_profile.count_as_ranged_attack為真）；此外conditional gate要求目前wielded_slot等於trait buff的slot。近距離以命中世界座標到攻擊者位置的距離平方判定，`<=12.5²`；缺少命中座標即失敗。

- 普通與瞄準射擊都使用shoot_pellets；RangedAction把直接彈丸的Attack.execute標為ranged。Rippergun三個Mark的刺刀action_stab使用melee sweep，因此不符。Shotgun P3的特殊輸入為toggle；實際fire_configuration未指定shotshell_special，不能把未被此weapon template引用的同名特殊彈殼定義套進此Mark。Shotgun P4 Mk III與Mk VIII的特殊動作載入獨立彈池，特殊彈仍由shoot_pellets射出，直接彈丸依然是ranged。P4 Mk III特殊彈另施加電擊狀態；後續interval damage透過Attack.execute以attack_type=buff及沒有count_as_ranged_attack的shock_grenade_stun_interval profile結算，所以該tick擊殺不符合本祝福。P4 Mk VIII特殊彈施加8秒單層rending stat buff，沒有interval傷害。

- 合格on_kill事件通過ProcBuff的持用及check_proc條件後，直接呼叫regain_toughness_proc_func。計算使用當時有效最大韌性乘tier比例；回復函式以ignore_stat_buffs=true跳過toughness_replenish_modifier與toughness_replenish_multiplier，並將韌性損傷降至至少0。實際回復為計算值與當下缺損兩者較小。若玩家死亡、未受強制協助的倒地或有prevent_toughness_replenish keyword，回復函式返回0。Base active_duration=2、allow_proc_while_active=true，沒有cooldown_duration；兩秒是ProcBuff狀態窗口，既不是持續回復，也不構成再觸發冷卻。

- 回復禁止條件還包含 prevent_toughness_replenish_except_all_combat_abilities 與 prevent_toughness_replenish_except_abilities；本項呼叫未提供技能 recovery reason，因此這些條件也可擋下本項。攻擊先排入擊殺事件，後由 ProcBuff 通過持用／item／遠程近距離條件時直接回復，不把兩秒活躍狀態視作回復持續時間。

- 令 M 為觸發處理時的有效最大韌性，p 為等級固定比例，D 為當下缺損。計算回復量=M×p；沒有禁止回復狀態時，實際回復量=min(M×p,D)。

- ignore_stat_buffs=true 跳過 toughness_replenish_modifier 與 toughness_replenish_multiplier；M 仍採目前最大韌性，其 toughness、toughness_bonus、toughness_bonus_flat 加成會被計入。

- III 級例：M=200、p=0.055、D=20，計算 200×0.055=11，實際恢復 11 點、剩 9 點缺損。IV 級例：M=200、p=0.06、D=5，計算 12 點，但實際只恢復 5 點。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_059`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_059.png)｜[Issue附件](https://github.com/user-attachments/assets/06518882-7971-44c2-a245-2bc1a344a659)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 撕裂槍等級覆寫 | [撕裂槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L125-L155) |
| 撕裂槍Buff接入 | [撕裂槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L16) |
| UI 撕裂槍 | [UI 撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1038) |
| 撕裂槍 碎敵 Mk II匯入 | [撕裂槍 碎敵 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L15) |
| 撕裂槍 碎敵 Mk II接入 | [撕裂槍 碎敵 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L911-L913) |
| 撕裂槍 碎敵 Mk V匯入 | [撕裂槍 碎敵 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L15) |
| 撕裂槍 碎敵 Mk V接入 | [撕裂槍 碎敵 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L906-L908) |
| 撕裂槍 碎敵 Mk VI匯入 | [撕裂槍 碎敵 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L15) |
| 撕裂槍 碎敵 Mk VI接入 | [撕裂槍 碎敵 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L889-L891) |
| 獵人霰彈槍等級覆寫 | [獵人霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L606-L636) |
| 獵人霰彈槍Buff接入 | [獵人霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L35) |
| UI 獵人霰彈槍 | [UI 獵人霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1172) |
| 獵人霰彈槍 奧克塔蘭 Mk III匯入 | [獵人霰彈槍 奧克塔蘭 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L14) |
| 獵人霰彈槍 奧克塔蘭 Mk III接入 | [獵人霰彈槍 奧克塔蘭 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L986-L988) |
| 滅絕者霰彈槍等級覆寫 | [滅絕者霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L606-L636) |
| 滅絕者霰彈槍Buff接入 | [滅絕者霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L35) |
| UI 滅絕者霰彈槍 | [UI 滅絕者霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1185) |
| 滅絕者霰彈槍 鐵腕 Mk III匯入 | [滅絕者霰彈槍 鐵腕 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L15) |
| 滅絕者霰彈槍 鐵腕 Mk III接入 | [滅絕者霰彈槍 鐵腕 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L1076-L1078) |
| 滅絕者霰彈槍 鐵腕 Mk VIII匯入 | [滅絕者霰彈槍 鐵腕 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L15) |
| 滅絕者霰彈槍 鐵腕 Mk VIII接入 | [滅絕者霰彈槍 鐵腕 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L1064-L1066) |
