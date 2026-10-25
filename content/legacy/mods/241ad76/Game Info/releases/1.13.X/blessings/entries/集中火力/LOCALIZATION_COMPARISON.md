# 集中火力：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_on_chained_weakspot_hits`／hash`cc0b463d`；描述鍵`loc_trait_bespoke_crit_chance_on_chained_weakspot_hits_desc`／hash`4c483691`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Concentrated Fire／集中火力。

- 文件名稱：集中火力(Concentrated Fire)。

- 適用武器：重型鐳射手槍、針彈手槍；描述鍵`loc_trait_bespoke_crit_chance_on_chained_weakspot_hits_desc`／hash`4c483691`。

- 英文模板：Up to {crit_chance:%s} Critical Chance on Chained Ranged Weak Spot Hit (Any Target).

- 繁中模板：連續遠端弱點攻擊最多{crit_chance:%s}致命一擊機率（任何目標）。

- **靜態重建**：RAW 靜態重建：crit_chance 使用 trait_override，依 I–IV 讀父層 critical_strike_chance 的 0.02／0.03／0.04／0.05。百分比 formatter 將值乘100；沒有指定 num_decimals，該整數值由數字 formatter 自動選零位小數，prefix 為「+」，因此每級靜態佔位值為 +2%／+3%／+4%／+5%。stacks 另從 base child buff_template 讀 max_stacks=5，但 RAW 描述沒有 {stacks} 佔位符；此顯示值不是五層總上限；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | “Chained Ranged Weak Spot Hit”／「連續遠端弱點攻擊」(content/localization/items；hash 4c483691)。 | on_shoot事件讀取hit_weakspot；普通及瞄準hitscan命中掃描後送出一次結果。 | 一致 | 每個射擊事件的弱點命中可以延續加層。 |
| 目標範圍 | “(Any Target)”／「（任何目標）」(content/localization/items；hash 4c483691)。 | 弱點結果按掃描目標合併成布林值，沒有固定目標或目標身分條件。 | 一致 | 不同敵人都可延續連段；一發多目標仍是同一次事件。 |
| 顯示數值與總上限 | RAW “Up to {crit_chance:%s} Critical Chance”／「最多{crit_chance:%s}致命一擊機率」（同資源，hash 4c483691）。 | crit_chance取每層tier override +2/3/4/5%；子層最多五個有效層，最高合計+10/15/20/25個百分點。 | 明確矛盾 | RAW的Up to／最多直接修飾每層格式值，未呈現五層總上限；玩家說明明列每層與總上限。 |
| 連段維持／重設 | 本體只提chained hit，未說明等待、身體命中、落空或重設。 | 沒有child_duration、reset_update_func恆false；下一個非弱點on_shoot事件移除所有累積層，保留零層基礎。 | 文件未涵蓋 | 本體沒有描述時間衰減或非弱點射擊後歸零的細節。 |
| 模式及切槽 | 本體未描述推撞、化學模式或換槽。 | 推撞不是on_shoot；針彈普通／化學射擊共用hitscan結果事件；持用條件停用切出時的加成。 | 文件未涵蓋 | 這些屬武器模式與持用條件，RAW未敘明。 |
| 特殊攻擊爆擊範圍 | RAW沒有區分直接化學針、其附帶爆炸及普通／靈能推擊。 | 化學針直接命中沿用開火爆擊旗標；其配置爆炸固定false，兩種推擊省略爆擊參數而預設false。 | 文件未涵蓋 | 一般爆擊率加成不會改變固定不爆擊的攻擊路徑。 |
