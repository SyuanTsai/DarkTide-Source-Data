# 燃起來！：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_scaled_on_heat`／hash`0ecf6094`；描述鍵`loc_trait_bespoke_crit_chance_scaled_on_heat_desc`／hash`d4cd4a65`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Gets Hot!／燃起來！。

- 文件名稱：燃起來！(Gets Hot!)。

- 適用武器：電漿槍；描述鍵`loc_trait_bespoke_crit_chance_scaled_on_heat_desc`／hash`d4cd4a65`。

- 英文模板：Critical hit chance scales by your current heat level up to {crit_chance:%s}. Also increases critical ranged attacks damage by {ranged_crit_damage:%s}.

- 繁中模板：暴擊機率會根據當前的熱能等級提升，最高{crit_chance:%s}，同時遠程暴擊傷害增加{ranged_crit_damage:%s}。

- **靜態重建**：名稱 RAW：`loc_trait_bespoke_crit_chance_scaled_on_heat`，英文 `Gets Hot!`、繁中 `燃起來！`，hash `0ecf6094`。

- 描述 RAW：英文 `Critical hit chance scales by your current heat level up to {crit_chance:%s}. Also increases critical ranged attacks damage by {ranged_crit_damage:%s}.`；繁中 `暴擊機率會根據當前的熱能等級提升，最高{crit_chance:%s}，同時遠程暴擊傷害增加{ranged_crit_damage:%s}。`；兩語 hash 均為 `d4cd4a65`。

- 靜態 formatter 重建：`crit_chance` 與 `ranged_crit_damage` 都以 `trait_override` 讀取所選等級之 trait `stat_buffs` 值，百分比 formatter 乘 100 並加 `+` 前綴；I +5.5%／+4%，II +7%／+6%，III +8.5%／+8%，IV +10%／+10%。這些是每熱階的 formatter 佔位值，不是五階 runtime 上限，也非遊戲畫面截圖。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 目前熱能與升階 | EN: “Critical hit chance scales by your current heat level…”；繁中：暴擊機率會根據當前的熱能等級提升。 | Trait `stat_buffs` tier override × held-only dynamic `bonus_step`; `n=round(clamp01((heat−0.10)/0.90)×5)`, 0–5 階。 | 部分涵蓋 | 原文描述隨熱能變化，但未交代五個離散門檻、持用條件、裝填／散熱歸零或本階數範圍。 |
| 暴擊機率的 up to 上限 | EN: “up to {crit_chance:%s}”；繁中：最高{crit_chance:%s}。RAW hash `d4cd4a65`。 | Formatter 對選定 tier 讀每一熱階值；實際最多五階，I–IV 上限 +27.5／+35／+42.5／+50 pp。 | 與實際上限不一致 | 靜態佔位值 +5.5／+7／+8.5／+10% 是每熱階，不是 runtime 的五階最高值；中英文同一 hash，非繁中單獨翻譯問題。 |
| 遠程暴擊傷害 | EN: “increases critical ranged attacks damage by {ranged_crit_damage:%s}”；繁中：遠程暴擊傷害增加{ranged_crit_damage:%s}。RAW hash `d4cd4a65`。 | tier override 每熱階 +4／+6／+8／+10%；五階 +20／+30／+40／+50%，加入共用 finesse multiplier，作用於暴擊額外部分。 | 未涵蓋逐階累積與完整上限 | 句子有說增加遠程暴擊傷害，但沒有說數值依熱階累積，也沒有提供五階總上限；這是說明未涵蓋，不判為錯誤翻譯。 |
| 首次與本發升熱 | RAW 描述按目前熱能提升，未列射擊前後順序。 | 兩型號一般／蓄力射擊在ActionShoot開始時判定爆擊；_shoot結算之後才加熱。 | 文件未涵蓋 | 第一發使用已更新到機率池的熱階，不追溯使用自己造成的新熱能；後續按步階更新結果。 |
| 裝填、散熱與切換 | RAW 未列出持用槽與裝填狀態限制。 | wrapper在讀到未持用或is_reloading時回傳零步階；裝填與散熱action都列入reloading。 | 文件未涵蓋 | 當狀態評估到這些條件時加成為零；沒有獨立疊層或固定秒數可保存，未確認同影格快取先後。 |
| 特殊自傷與爆炸 | RAW 的遠程爆擊傷害句未區分特殊動作。 | 散熱與爆炸前週期自傷不傳爆擊旗標，Attack預設false；過熱爆炸明確false。 | 文件未涵蓋 | 這些傷害不會爆擊，因此不適用本項爆擊額外傷害係數。 |
| 機率上限與取整 | RAW 未列機率消費端、武器處理或取整。 | 一般機率池先clamp0–1，再做機率轉傷害，PRD前round到小數點後兩位；單發handling另加0.05。 | 文件未涵蓋 | 百分點、條件轉換及PRD輸入分開說明，不能由面板百分比推定固定每幾發爆擊。 |
