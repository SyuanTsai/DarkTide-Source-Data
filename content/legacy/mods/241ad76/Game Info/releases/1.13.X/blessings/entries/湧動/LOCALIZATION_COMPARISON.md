# 湧動：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_double_shot_on_crit`／hash`7873018f`；描述鍵`loc_trait_bespoke_double_shot_on_primary_crit_and_crit_chance_desc`／hash`821c8289`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Surge／湧動。

- 文件名稱：湧動(Surge)。

- 適用武器：虛空打擊力場法杖；描述鍵`loc_trait_bespoke_double_shot_on_crit_and_crit_chance_desc`／hash`acb93627`。

- 英文模板：{value:%s} Shots on Critical Hit. {crit_chance:%s} Ranged Crit Chance.

- 繁中模板：暴擊後會再射擊{value:%s}次。遠程暴擊機率{crit_chance:%s}。

- 適用武器：虛空爆破力場法杖、電流力場法杖；描述鍵`loc_trait_bespoke_double_shot_on_primary_crit_and_crit_chance_desc`／hash`821c8289`。

- 英文模板：{value:%s} Shots on Primary Critical Hit. {crit_chance:%s} Ranged Crit Chance.

- 繁中模板：主要武器暴擊會再射擊{value:%s}次，遠程武器暴擊機率提升{crit_chance:%s}。

- **靜態重建**：主要射擊描述鍵將 value 重建為 2、crit_chance 重建為 +2%／+3%／+4%／+5%；虛空打擊的通用致命一擊描述鍵使用相同數值。保留繁中「再射擊2次」的 RAW 重建，並在勘誤中區分文字的額外次數和實作的總共兩枚；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 射擊總數與繁中追加次數 | 英文 {value:%s} Shots；繁中再射擊{value:%s}次 | formatter固定value=2；合格射擊原本1枚，致命一擊且keyword有效時只增加1枚，總共2枚。 | 繁中描述勘誤 | 英文2指總枚數；繁中再射擊2次的追加次數用語與只增加1枚不一致。 |
| 暴擊機率與 crit_chance | {crit_chance:%s} Ranged Crit Chance. | I–IV own 值 .02/.03/.04/.05；formatter 從 own override 讀取，percentage 並加 +。 | 一致 | 原始值對應 +2/+3/+4/+5 個百分點。 |
| 主要射擊範圍 | Shots on Primary Critical Hit. | 虛空爆破與電流型號的綁定主要射擊均為 spawn_projectile。 | 一致 | 描述與兩個實際主要射擊相符。 |
| 虛空打擊動作範圍 | Shots on Critical Hit. | 主要與蓄力次要都是 spawn_projectile；其他攻擊模式不通過此 action-kind gate。 | 文件未涵蓋 | 通用 RAW 未逐一列出此型號所有可追加的 projectile 動作；沒有證據顯示文字與機制矛盾。 |
| 近戰、推擊與其它蓄力釋放 | RAW 未列出 | 近戰不是 spawn_projectile；虛空爆破蓄力是 trigger_explosion；電流蓄力是 chain_lightning。 | 文件未涵蓋 | 實際追加機制受動作 kind 限定，不外推至所有暴擊命中。 |
| 機率加成與追加模式的差別 | {crit_chance:%s} Ranged Crit Chance；未逐一列出蓄力模式 | P1 trigger_explosion與P3 can_crit=true chain_lightning都以ranged=true判定；機率加成有效，但不追加投射物。 | 文件未涵蓋 | 兩項效果由不同consumer控制，不能把追加模式的限制套到機率加成。 |
