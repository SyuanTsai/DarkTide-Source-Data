# 利刃攻勢：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_stacking_rending_on_cleave`／hash`2112d795`；描述鍵`loc_trait_bespoke_stacking_melee_rending_on_cleave_desc`／hash`d4f876b6`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Bladed Momentum／利刃攻勢。

- 文件名稱：利刃攻勢(Bladed Momentum)。

- 適用武器：重劍、穿音速雙刀；描述鍵`loc_trait_bespoke_stacking_melee_rending_on_cleave_desc`／hash`d4f876b6`。

- 英文模板：Hitting multiple enemies in one sweep gives {rending:%s} Melee Rending for {time:%s} seconds. Stacks {stacks:%s} times.

- 繁中模板：單次揮擊命中多個敵人可獲得{rending:%s}近戰撕裂，持續{time:%s}秒，可疊加{stacks:%s}次。

- **靜態重建**：靜態重建依兩個實際 trait formatter；百分比值按百分比格式乘100並加前綴，時間與層數取各自模板欄位。

**重劍 P2**

- I 級 EN：`Hitting multiple enemies in one sweep gives +5% Melee Rending for 2.5 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+5%近戰撕裂，持續2.5秒，可疊加4次。`

- II 級 EN：`Hitting multiple enemies in one sweep gives +6% Melee Rending for 3 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+6%近戰撕裂，持續3秒，可疊加4次。`

- III 級 EN：`Hitting multiple enemies in one sweep gives +7% Melee Rending for 3.5 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+7%近戰撕裂，持續3.5秒，可疊加4次。`

- IV 級 EN：`Hitting multiple enemies in one sweep gives +8% Melee Rending for 4 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+8%近戰撕裂，持續4秒，可疊加4次。`

**穿音速雙刀 P1**

- I 級 EN：`Hitting multiple enemies in one sweep gives +4% Melee Rending for 2.5 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+4%近戰撕裂，持續2.5秒，可疊加4次。`

- II 級 EN：`Hitting multiple enemies in one sweep gives +5% Melee Rending for 3 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+5%近戰撕裂，持續3秒，可疊加4次。`

- III 級 EN：`Hitting multiple enemies in one sweep gives +6% Melee Rending for 3.5 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+6%近戰撕裂，持續3.5秒，可疊加4次。`

- IV 級 EN：`Hitting multiple enemies in one sweep gives +7% Melee Rending for 4 seconds. Stacks 4 times.`；繁中：`單次揮擊命中多個敵人可獲得+7%近戰撕裂，持續4秒，可疊加4次。`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | RAW 英文：`Hitting multiple enemies in one sweep`；繁中：`單次揮擊命中多個敵人`。 | `base_weapon_trait_buff_templates.lua` 459–504；`check_proc_functions.lua` 368–370、414–426、721–727；`attack.lua` 550–623。 | 核心相符；實際計數細節未在 RAW 展開。 | 實作以同一揮擊的 melee `target_number >= 2`、來源 item 匹配及每揮擊一次的閂鎖判定；不是擊殺數檢查。 |
| 每層撕裂值 | RAW 英文／繁中描述鍵 `{rending:%s}`；完整字串見本表上方原文。 | Combat Sword P2 trait 326–401；Transonic P1 trait 388–463；`TraitValueParser` 1–112。 | 格式一致；兩實作每層數值不同。 | 百分比 formatter 以 own tier override 乘100並加 `+`，不是套用共同 .05 備援後再相加。 |
| 持續時間與層數 | RAW 英文／繁中 `{time:%s}` 與 `{stacks:%s}`。 | Own trait 326–401、388–463；base template 459–516；`WeaponTraitParentProcBuff` 10–38、56–163。 | RAW 數值一致；計時刷新細節未涵蓋。 | 各級 formatter 讀 own duration 和 child max；child raw 5槽扣除1個佔位後最多4個有效層，成功再次觸發刷新共用計時。 |
| 普通、重擊、推後追擊與特殊揮掃 | RAW 只概括 `one sweep`，沒有逐動作表。 | 4個實際 Mark weapon template 中所有 action blocks；`ActionSweep` 286–310、1330–1503；`ActionPush` 52–115；`PushAttack` 50–107。 | RAW 未逐項列出動作；實際分類依攻擊路徑。 | ActionSweep 命中帶 melee；獨立純推擊帶 push；特殊切換本身不產生 on-hit。 |
| 效果作用對象 | RAW 使用 `Melee Rending`，沒有聲稱固定傷害增幅。 | `damage_calculation.lua` 45–102、629–660；Transonic light profile 27–95；`armor_settings.lua` 1–25；受控例的實際 light_linesman target_index=1 armor entry 見 `transonic_sword_transonic_knife_damage_profile_templates.lua` 50–105；`lerp_0_75` 端點見 `damage_profile_settings.lua` 64–70；profile selection/interpolation 見 `damage_profile.lua` 194–212、379–384。 | 效果類型相符；不應解讀為固定最終生命傷害百分比。 | 撕裂進入 melee armor-damage-modifier 計算池；後續結果還取決於目標護甲、profile 與其他修正。 |
| 實際適用型號 | RAW 本身未列 weapon family/Mark。 | Inventory name-key intersection、MasterItems UI receipt 與4個 Mark template import/trait append。 | 文件未涵蓋逐型號對應；只確認本項四個實際交集。 | Power Sword P1 的相似名稱 metadata-only 項目沒有本 name-key inventory binding，故不推定可用。 |
