# 殺戮狂潮：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_guaranteed_melee_crit_after_crit_weakspot_kill`／hash`20186e73`；描述鍵`loc_trait_bespoke_guaranteed_melee_crit_after_crit_weakspot_kill_new_desc`／hash`33471ac0`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Slaughter Spree／殺戮狂潮。

- 文件名稱：殺戮狂潮(Slaughter Spree)。

- 適用武器：戰術斧；描述鍵`loc_trait_bespoke_guaranteed_melee_crit_after_crit_weakspot_kill_new_desc`／hash`33471ac0`。

- 英文模板：{crit_chance:%s} Critical Chance (Next Melee Attack) on Weak Spot Critical Hit Kill.

- 繁中模板：擊中目標弱點並以暴擊造成擊殺後，下一次近戰攻擊的暴擊機率{crit_chance:%s}。

- **靜態重建**：依實際 tier、每層0.10與 formatter 的 abs(value)×10、百分比及「+」前綴，I–IV 代入如下：

- I：EN “+40% Critical Chance (Next Melee Attack) on Weak Spot Critical Hit Kill.”；繁中「擊中目標弱點並以暴擊造成擊殺後，下一次近戰攻擊的暴擊機率+40%。」

- II：EN “+60% Critical Chance (Next Melee Attack) on Weak Spot Critical Hit Kill.”；繁中「擊中目標弱點並以暴擊造成擊殺後，下一次近戰攻擊的暴擊機率+60%。」

- III：EN “+80% Critical Chance (Next Melee Attack) on Weak Spot Critical Hit Kill.”；繁中「擊中目標弱點並以暴擊造成擊殺後，下一次近戰攻擊的暴擊機率+80%。」

- IV：EN “+100% Critical Chance (Next Melee Attack) on Weak Spot Critical Hit Kill.”；繁中「擊中目標弱點並以暴擊造成擊殺後，下一次近戰攻擊的暴擊機率+100%。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與實作配對 | RAW name hash 20186e73；description key為_new_desc/hash 33471ac0；三Mark metadata與trait item restriction相符。 | UI／RAW receipts及固定inventory逐項配對三個Atrox Mark。 | 一致 | 三Mark共用同一實際trait。 |
| 觸發條件 | RAW：Weak Spot Critical Hit Kill。 | 父proc要求來源item、處理時持用、died、melee critical、hit_weakspot。 | 一致 | 不要求weapon_special；特殊揮擊只是可能符合的攻擊。 |
| 數值與formatter | RAW placeholder {crit_chance:%s}。 | Own tier stacks 4/6/8/10；abs(value)*10帶+；child每有效stack加.10近戰暴擊機率。 | 一致 | 靜態重建+40/+60/+80/+100個百分點；stat有效stack clamp至10。 |
| 下一次攻擊與期限 | RAW稱Next Melee Attack，未列持續時間。 | child duration5；sweep-start標finish；buff系統下一update清理。 | 文件未涵蓋 | 避免描述為同步刪除或保證同fixed-update額外命中。 |
| 層數、刷新、切換 | RAW未列stack、重複觸發、持用門檻及child生命週期。 | 內部child有效值最多10；重複kill不重置原5秒；parent有held gate，child沒有且不綁parent lifetime。 | 文件未涵蓋 | 已生成child切出／卸下來源斧後可存留至自身期限或sweep事件。 |
