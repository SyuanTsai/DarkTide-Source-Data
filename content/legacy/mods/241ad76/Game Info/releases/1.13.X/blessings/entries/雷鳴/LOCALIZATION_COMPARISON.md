# 雷鳴：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_targets_receive_rending_debuff`／hash`f3d437f2`；描述鍵`loc_trait_bespoke_targets_receive_rending_debuff_desc`／hash`409c5f8e`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Thunderous／雷鳴。

- 文件名稱：雷鳴(Thunderous)。

- 適用武器：突擊鏈斧、戰鬥斧、廁所鏟、惡霸棍棒、戴維爾戰鎬、碾壓者、法務官電擊鎚、電弧鎚、雷鎚；描述鍵`loc_trait_bespoke_targets_receive_rending_debuff_desc`／hash`409c5f8e`。

- 英文模板：Hitting an enemy gives them {stacks:%s} stacks of {rending:%s} Brittleness. Debuff lasts for {time:%s} seconds and can have a maximum of {max_stacks:%s} stacks.

- 繁中模板：攻擊命中敵人時使其疊加{stacks:%s}層{rending:%s}脆弱。減益效果最高疊加{max_stacks:%s}層，持續{time:%s}秒。

- **靜態重建**：依描述鍵 `loc_trait_bespoke_targets_receive_rending_debuff_desc`／hash `409c5f8e` 同一原文代入；`stacks` 來自本型號 own tier 的 `num_stacks_on_proc`，`rending` 為共用 target debuff 每層的 2.5%，`time=5`、`max_stacks=16`。五個家族 formatter 在 rending 值前輸出 `+`，另外四個不輸出；只差符號，不差數值。

**含 `+` 前綴**：廁所鏟 Ogryn Club P1/P2、戴維爾戰鎬、2H 碾壓者、雷鎚。
- I EN: Hitting an enemy gives them 1 stacks of +2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加1層+2.5%脆弱。減益效果最高疊加16層，持續5秒。
- II EN: Hitting an enemy gives them 2 stacks of +2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加2層+2.5%脆弱。減益效果最高疊加16層，持續5秒。
- III EN: Hitting an enemy gives them 3 stacks of +2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加3層+2.5%脆弱。減益效果最高疊加16層，持續5秒。
- IV EN: Hitting an enemy gives them 4 stacks of +2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加4層+2.5%脆弱。減益效果最高疊加16層，持續5秒。

**不含 `+` 前綴**：突擊鏈斧、戰鬥斧、法務官電擊鎚 P2、電弧鎚 P3。
- I EN: Hitting an enemy gives them 1 stacks of 2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加1層2.5%脆弱。減益效果最高疊加16層，持續5秒。
- II EN: Hitting an enemy gives them 2 stacks of 2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加2層2.5%脆弱。減益效果最高疊加16層，持續5秒。
- III EN: Hitting an enemy gives them 3 stacks of 2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加3層2.5%脆弱。減益效果最高疊加16層，持續5秒。
- IV EN: Hitting an enemy gives them 4 stacks of 2.5% Brittleness. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
  ZH: 攻擊命中敵人時使其疊加4層2.5%脆弱。減益效果最高疊加16層，持續5秒。

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發對象與事件 | EN: “Hitting an enemy…”；ZH:「攻擊命中敵人時…」。兩者都未再限定來源物品、Minion 類別或持用狀態。 | `base_weapon_trait_buff_templates.lua:564–579`；`check_proc_functions.lua:606–608,721–727`。 | 文件未涵蓋 | 實際 parent 只在一般 on_hit 事件、同物品命中遊戲 Minion、且此 item slot 持用時通過；事件結算後目標仍須 HEALTH_ALIVE，致死命中不施加減益。 |
| 每擊層數與單層數值 | 兩語都有 `{stacks}` 與 `{rending}`；四級 formatter 逐級輸出 1/2/3/4 層、每層 2.5%。 | 九個 own tier 的 `target_buff_data.num_stacks_on_proc=1/2/3/4`；共用 `rending_debuff.stat_buffs.rending_multiplier=.025`。 | 一致 | 實作層數與 formatter 相符；五家族顯示 +2.5%，四家族顯示 2.5%，差異只有明示正號。 |
| 目標上限與期限 | 兩語寫明最高 16 層、持續 5 秒。 | `weapon_buff_templates.lua:366–376` 對應 max_stacks/max_stacks_cap=16、duration=5；target extension 到達16層時阻止加層並刷新期限。 | 一致 | RAW 靜態數值與實際 target BuffExtension 上限一致；proc helper 的31層預算不是實際目標上限。 |
| 加層刷新方式 | 兩語只列期限和上限，未說明新增層數時如何處理既有期限。 | 同一 target `rending_debuff` 設 `refresh_duration_on_stack=true`；target BuffExtension 以 buff template 名稱共用既有層數，16層滿時仍刷新但不加超上限層。 | 文件未涵蓋 | 實作依新增層數刷新此目標 debuff 的期限；原文沒有描述刷新語義。 |
| 攻擊類型及特殊／推擊事件 | 兩語只寫命中敵人，未列普通、重擊、push、特殊、爆炸或 arc 的事件條件。 | 普通 base 沒有 attack_type／melee／weapon-special gate；Attack 的全域 profile/no-proc gate 及每條實際接線另見固定來源區段。 | 文件未涵蓋 | 實際走 Attack 且帶本物品的 push、爆炸或 arc 命中可按一般 gate 判斷；鏈斧黏附追加 profile 明確略過 on-hit。 |
| 傷害意義與先後 | 兩語稱目標受到脆弱／Brittleness，未描述同次命中的傷害先後或最終傷害倍率。 | `attack.lua:353–384,577–623`；`damage_calculation.lua:629–660`。 | 文件未涵蓋 | 觸發命中先完成傷害，再排送 on-hit；2.5% 是目標 rending 輸入，不足以推出固定最終傷害提升。 |
