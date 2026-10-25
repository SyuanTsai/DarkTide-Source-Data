# 亞空間樞紐：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_crit_chance_scaled_on_peril`／hash`847eaa2c`；描述鍵`loc_trait_bespoke_increased_crit_chance_scaled_on_peril_desc`／hash`165aa31c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Warp Nexus／亞空間樞紐。

- 文件名稱：亞空間樞紐(Warp Nexus)。

- 適用武器：虛空爆破力場法杖、烈焰力場法杖、電流力場法杖、虛空打擊力場法杖；描述鍵`loc_trait_bespoke_increased_crit_chance_scaled_on_peril_desc`／hash`165aa31c`。

- 英文模板：Gain between {crit_chance:%s} and {crit_chance_max:%s} Critical Chance based on current level of peril.

- 繁中模板：根據當前反噬層數提升{crit_chance:%s}至{crit_chance_max:%s}致命一擊機率。

- **靜態重建**：依原始描述句型，以來源中各級格式參數逐級代入。

| 等級 | 英文重建（locale 0） | 繁中重建（locale 16） |
|---|---|---|
| I | Gain between 3.5% and 14% Critical Chance based on current level of peril. | 根據當前反噬層數提升3.5%至14%致命一擊機率。 |
| II | Gain between 4% and 16% Critical Chance based on current level of peril. | 根據當前反噬層數提升4%至16%致命一擊機率。 |
| III | Gain between 4.5% and 18% Critical Chance based on current level of peril. | 根據當前反噬層數提升4.5%至18%致命一擊機率。 |
| IV | Gain between 5% and 20% Critical Chance based on current level of peril. | 根據當前反噬層數提升5%至20%致命一擊機率。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 原文格式欄位 | `{crit_chance:%s}` 與 `{crit_chance_max:%s}` | formatter 分別讀取本武器 tier 的致命一擊 stat；最大值將單階值乘四並加百分比符號。 | I–IV 分別顯示 3.5–14%、4–16%、4.5–18%、5–20%。 | 使用各 trait 自己的格式器與覆寫值重建，不由 suffix 推定數值。 |
| wrapper 與 tier 覆寫 | 四 wrapper 都有同鍵 0.02；四個 tier 表列 0.035／0.04／0.045／0.05。 | Buff 計算對相同 stat key 優先採用 tier stat override，再依目前階數累加。 | 0.02 被覆寫，不是固定 2 個百分點再加上 tier 值。 | 相同鍵覆寫有 Buff runtime 的直接證據。 |
| 原文條件提示 | 描述只稱依當前反噬層數獲得增益，未列出階數門檻。 | 實作讀取 raw `current_percentage`，按每 0.20 向下取整並限制 0–4。 | 20% 門檻在 RAW 中文件未涵蓋。 | 保留原文措辭，不把程式門檻誤寫成 RAW 原句。 |
| 手持與刷新 | 兩個條件 gate 都檢查目前持有槽；玩家固定更新重算 buff stats。 | 換槽會在屬性更新時移除該武器增益，換回依當時反噬重算。 | 沒有獨立 proc 層、持續時間或冷卻。 | 已完成的攻擊致命一擊判定不回溯。 |
| 攻擊路徑 | 四把武器各有普通投射物／火焰及其蓄力模式，特殊 stab 為 sweep。 | 實際 action class 對可致命一擊路徑讀取致命一擊機率；純推擊和排放反噬不是本祝福攻擊判定。 | P3 連鎖沿用該次動作結果；P2 暴擊火焰命中可依模板加燃燒層。 | 不把 setup、純推、vent 或後續燃燒 tick 誤作新 proc。 |
