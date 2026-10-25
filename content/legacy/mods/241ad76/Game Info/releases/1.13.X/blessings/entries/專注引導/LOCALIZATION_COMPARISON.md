# 專注引導：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_uninterruptable_while_charging`／hash`768a0f8c`；描述鍵`loc_trait_bespoke_uninterruptable_while_charging_and_movement_desc`／hash`380bf3a7`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Focused Channelling／專注引導。

- 文件名稱：專注引導(Focused Channelling)。

- 適用武器：虛空爆破力場法杖、烈焰力場法杖、電流力場法杖、虛空打擊力場法杖；描述鍵`loc_trait_bespoke_uninterruptable_while_charging_and_movement_desc`／hash`380bf3a7`。

- 英文模板：Your Secondary Attack cannot be interrupted and loses {reduction:%s} of Secondary Attack Movement Speed penalties.

- 繁中模板：你的次要攻擊無法被打斷，且次要攻擊移動速度懲罰減輕{reduction:%s}。

- **靜態重建**：依 formatter 將同一中英模板依序代入 I–IV；保留原句型：
- I — EN: Your Secondary Attack cannot be interrupted and loses 20% of Secondary Attack Movement Speed penalties.｜繁中：你的次要攻擊無法被打斷，且次要攻擊移動速度懲罰減輕20%。
- II — EN: Your Secondary Attack cannot be interrupted and loses 30% of Secondary Attack Movement Speed penalties.｜繁中：你的次要攻擊無法被打斷，且次要攻擊移動速度懲罰減輕30%。
- III — EN: Your Secondary Attack cannot be interrupted and loses 40% of Secondary Attack Movement Speed penalties.｜繁中：你的次要攻擊無法被打斷，且次要攻擊移動速度懲罰減輕40%。
- IV — EN: Your Secondary Attack cannot be interrupted and loses 50% of Secondary Attack Movement Speed penalties.｜繁中：你的次要攻擊無法被打斷，且次要攻擊移動速度懲罰減輕50%。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 階級文字與顯示值 | 中英 RAW：Your Secondary Attack cannot be interrupted and loses {reduction:%s} of Secondary Attack Movement Speed penalties. / 你的次要攻擊無法被打斷，且次要攻擊移動速度懲罰減輕{reduction:%s}。；key loc_trait_bespoke_uninterruptable_while_charging_and_movement_desc hash 380bf3a7。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua:359–401 format_values.reduction；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua:181–223 format_values.reduction；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua:180–222 format_values.reduction；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua:289–331 format_values.reduction。 | 符合 | 同一 formatter 對 own 值 .8/.7/.6/.5 計算 100-round(value×100)，靜態輸出 20/30/40/50%。 |
| 次要攻擊作用範圍 | RAW 使用 Secondary Attack / 次要攻擊；無 wrapper action-name 列表。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2364–2390 conditional_stat_buffs_func；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua:78–81；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua:23–26；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua:18–21；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua:26–30。 | 文件未涵蓋 | 實作要求持用該物品且目前 action name 命中本武器 wrapper；不能由「次要攻擊」推成所有次要輸入。 |
| 移動懲罰公式 | RAW 僅稱 loses {reduction} of movement penalties，未列 action-kind 或公式。 | scripts/extension_systems/weapon/player_unit_weapon_extension.lua:1459–1496 PlayerUnitWeaponExtension.move_speed_modifier。 | 文件未涵蓋 | 程式只對 CHARGE_ACTIONS 套用 m=1-(1-m_action)×c；替代射擊倍率另算。 |
| 中斷與 stun 關鍵字 | RAW 稱不能被中斷；沒有說明 caller immunity override 或 damage protection。 | scripts/utilities/attack/interrupt.lua:10–67 Interrupt；scripts/utilities/attack/hit_reaction.lua:312–320 local_push。 | 文件未涵蓋 | ignore_immunity 可略過 uninterruptible；push template/caller 可略過 stun_immune；均不等於傷害免疫或所有控制免疫。 |
| 武器動作原生旗標 | RAW 未區分祝福條件與武器 action 自身設定。 | scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua:208–462 action tables；scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua:246–485 action tables；scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua:255–475 action tables；scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua:207–433 action tables。 | 文件未涵蓋 | 部分射擊/蓄能釋放本身已有 uninterruptible=true；不把該原生旗標算作祝福效果。 |
| 切換與移除 | RAW 未列武器切換、重新持用或卸下生命週期。 | scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua:168–210 trait on_equip installation；scripts/extension_systems/weapon/player_unit_weapon_extension.lua:633–643 on_wieldable_slot_equipped 安裝來源；652–662 on_wieldable_slot_unequipped 真正卸下武器並移除；743–785 on_slot_unwielded 切槽且保留 on_equip buff。 | 文件未涵蓋 | 裝備時安裝來源祝福；切槽不移除但持用 gate 關閉，真正卸下武器才移除該武器的祝福。 |
