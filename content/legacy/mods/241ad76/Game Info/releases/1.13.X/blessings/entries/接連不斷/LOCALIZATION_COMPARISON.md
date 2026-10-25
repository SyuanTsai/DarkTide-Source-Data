# 接連不斷：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_stacking_crit_bonus_on_continuous_fire`／hash`0915b223`；描述鍵`loc_trait_bespoke_stacking_crit_bonus_on_continuous_fire_desc`／hash`8ee8155a`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Cavalcade／接連不斷。

- 文件名稱：接連不斷(Cavalcade)。

- 適用武器：撕裂者自動手槍、矛頭爆矢槍、雙持自動手槍、重伐木槍、撕裂槍；描述鍵`loc_trait_bespoke_stacking_crit_bonus_on_continuous_fire_desc`／hash`8ee8155a`。

- 英文模板：{crit_chance:%s} Critical Chance for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times.

- 繁中模板：持續射擊期間，每消耗{ammo:%s}彈藥，暴擊幾率增加{crit_chance:%s}，最多疊加{stacks:%s}層。

- **靜態重建**：依固定 RAW 欄位與各own formatter靜態代入；四個一般家族的ammo字串為10%，Ripper P1為8%，stacks為5；crit_chance以percentage與+前綴格式化。

- **四個一般家族**：自動手槍P1、爆矢槍P1、雙持自動手槍P1、重伐木槍P2
  - I：EN `+3.5% Critical Chance for every 10% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗10%彈藥，暴擊幾率增加+3.5%，最多疊加5層。」
  - II：EN `+4% Critical Chance for every 10% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗10%彈藥，暴擊幾率增加+4%，最多疊加5層。」
  - III：EN `+4.5% Critical Chance for every 10% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗10%彈藥，暴擊幾率增加+4.5%，最多疊加5層。」
  - IV：EN `+5% Critical Chance for every 10% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗10%彈藥，暴擊幾率增加+5%，最多疊加5層。」

- **撕裂槍P1**
  - I：EN `+3.5% Critical Chance for every 8% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗8%彈藥，暴擊幾率增加+3.5%，最多疊加5層。」
  - II：EN `+4% Critical Chance for every 8% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗8%彈藥，暴擊幾率增加+4%，最多疊加5層。」
  - III：EN `+4.5% Critical Chance for every 8% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗8%彈藥，暴擊幾率增加+4.5%，最多疊加5層。」
  - IV：EN `+5% Critical Chance for every 8% of magazine spent during continuous fire. Stacks 5 times.`；繁中「持續射擊期間，每消耗8%彈藥，暴擊幾率增加+5%，最多疊加5層。」

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | 英文Cavalcade、繁中「接連不斷」；`loc_trait_bespoke_stacking_crit_bonus_on_continuous_fire`，hash `0915b223`。 | 五個實際trait ID均使用相同name key；RAW resource content/localization/items之英文與繁中同hash配對。 | 一致 | 名稱與本項inventory實際綁定一致。 |
| 效果與I–IV formatter | 描述鍵 `loc_trait_bespoke_stacking_crit_bonus_on_continuous_fire_desc`／hash `8ee8155a`；EN `{crit_chance:%s} Critical Chance for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times.`；繁中 `持續射擊期間，每消耗{ammo:%s}彈藥，暴擊幾率增加{crit_chance:%s}，最多疊加{stacks:%s}層。`。 | 五個own tier位於scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_*.lua；critical_strike_chance用percentage及+前綴。Ripper自己的formatter ammo=8%，其餘四個=10%。 | 一致 | placeholder由各實際formatter代入；Ripper差異與其自身helper一致。 |
| 射擊計數 | RAW寫continuous fire及magazine比例，沒有說按命中或傷害計數。 | ActionShoot._prepare_shooting (scripts/extension_systems/weapon/actions/action_shoot.lua:402–479) 在命中前對player shooting_status.num_shots加一；miss計數，pellet及多目標不逐一加數。 | 文件未涵蓋 | 程式依射擊事件，而非命中或造成傷害。 |
| 門檻、取整與上限 | RAW列ammo比例與最多5層，未列最大容量M、floor、最小一發與步數公式。 | base `_number_of_continuous_fire_steps` (scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1907–1935)算floor(N/S)並封頂5；FireStepFunctions.default/Ripper於scripts/settings/buff/fire_step_functions.lua:6–20及66–80算max(1,floor(M×.10/.08))；SteppedStatBuff.stat_buff_stacking_count (scripts/extension_systems/buff/buffs/stepped_stat_buff.lua:32–51) clamp。 | 文件未涵蓋 | 取整與最低門檻未列RAW；Ripper顯示8%與實作相同，無確定矛盾。 |
| 爆擊判定 | RAW說Critical Chance，未承諾每發獨立判定或固定傷害加成。 | CriticalStrike.chance/is_critical_strike (scripts/utilities/attack/critical_strike.lua:5–39)合併base與stat inputs、clamp、轉換、round及PRD。 | 文件未涵蓋 | 此trait只提供generic critical_strike_chance stat；最終機率依攻擊和PRD判定。 |
| 停火、切槽與特殊動作 | RAW沒有列counter timeout、reload/slot gate或特殊動作。 | PlayerUnitWeaponExtension.fixed_update (scripts/extension_systems/weapon/player_unit_weapon_extension.lua:487–530)依當前spread/movement timer嚴格清除；各mark action見source refs，特殊不是ActionShoot射擊更新。 | 文件未涵蓋 | 補充未寫於RAW的執行細節，不把計時誤稱祝福TTL。 |
| 特殊近戰爆擊與純推擊 | RAW只說持續射擊時依彈匣比例增加Critical Chance；未區分特殊近戰、純推擊或各自的爆擊路徑。 | ActionSweep.start (scripts/extension_systems/weapon/actions/action_sweep.lua:207–248) 呼叫 ActionWeaponBase._check_for_critical_strike (scripts/extension_systems/weapon/actions/action_weapon_base.lua:148–184)，再由 CriticalStrike.chance/is_critical_strike (scripts/utilities/attack/critical_strike.lua:5–39). Bolter M1/M2 special action_push 的 kind=sweep (scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua:450–462; scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua:447–461). Dual pistol-whip Sweep: scripts/settings/equipment/weapon_templates/dual_autopistols/dual_autopistols_p1_m1.lua:490–503; Ripper stab Sweeps: scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua:582–587, ogryn_rippergun_p1_m2.lua:577–583, ogryn_rippergun_p1_m3.lua:560–566. 純PushAttack.push (scripts/utilities/attack/push_attack.lua:32–99) passes attack_type=push且不帶爆擊結果; Attack.execute (scripts/utilities/attack/attack.lua:45–61)於派送前清除攻擊引數. | 文件未涵蓋 | 三種實際特殊Sweep近戰可讀有效通用爆擊率且不加射擊N；手電筒切換無攻擊；純推擊不擲本項爆擊，不能混作追擊攻擊。 |
| 切槽與真正卸下 | RAW未提切槽、持用條件或卸下武器。 | conditional_functions.is_item_slot_wielded (scripts/settings/buff/helper_functions/conditional_functions.lua:43–59) 比對Buff所屬item slot與目前wielded slot; PlayerUnitWeaponExtension.on_slot_unwielded (scripts/extension_systems/weapon/player_unit_weapon_extension.lua:743–785) 移除on_wield並套用on_unwield; PlayerUnitWeaponExtension.on_wieldable_slot_unequipped (scripts/extension_systems/weapon/player_unit_weapon_extension.lua:652–681) 移除on_equip buffs並刪除weapon. | 文件未涵蓋 | 切槽令本項held-stat暫停但共享射擊N未因切槽本身清零；真正卸下才移除已安裝的trait buff。 |
