# 能量循環：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_extended_activation_duration_on_chained_attacks`／hash`739921c8`；描述鍵`loc_trait_bespoke_extended_activation_duration_and_stagger_on_chained_attacks_desc`／hash`f49f49e5`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Power Cycler／能量循環。

- 文件名稱：能量循環(Power Cycler)。

- 適用武器：動力劍；描述鍵`loc_trait_bespoke_extended_activation_duration_and_stagger_on_chained_attacks_desc`／hash`f49f49e5`。

- 英文模板：{extra_hits:%s} Extra Chained Energised Hits and {stagger:%s} Impact on Energised Hits.

- 繁中模板：充能攻擊連擊次數增加{extra_hits:%s}次，且敵人受到充能攻擊時的衝擊增加{stagger:%s}。

- **靜態重建**：依各級實際 formatter 靜態代入。

- I — EN: 1 Extra Chained Energised Hits and 2.5% Impact on Energised Hits.｜繁中：充能攻擊連擊次數增加1次，且敵人受到充能攻擊時的衝擊增加2.5%。
- II — EN: 1 Extra Chained Energised Hits and 5% Impact on Energised Hits.｜繁中：充能攻擊連擊次數增加1次，且敵人受到充能攻擊時的衝擊增加5%。
- III — EN: 2 Extra Chained Energised Hits and 7.5% Impact on Energised Hits.｜繁中：充能攻擊連擊次數增加2次，且敵人受到充能攻擊時的衝擊增加7.5%。
- IV — EN: 2 Extra Chained Energised Hits and 10% Impact on Energised Hits.｜繁中：充能攻擊連擊次數增加2次，且敵人受到充能攻擊時的衝擊增加10%。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 額外充能次數 | 英中 RAW：I／II 額外 1 次，III／IV 額外 2 次。 | own extra_hits_max 為 1／1／2／2；有效步數上限同值，每步固定增加一次可用充能揮擊，合計上限為原生 1 次加當前有效步數。 | 一致 | 顯示的是額外次數，合計上限在所述連擊條件下為 2／2／3／3 次。 |
| 充能命中的衝擊百分比 | 英中 RAW 列 2.5%／5%／7.5%／10% 衝擊。 | own tier 覆寫 base conditional 同名值，再按有效連擊步數累計；III／IV 第二步合計為 15%／20%。 | 文件未涵蓋 | 原文只列每步來源值，沒有說明第二步再累計一次；不是傷害或最終踉蹌幅度的固定增幅。 |
| 充能條件 | 原文將衝擊效果限定為充能命中。 | 條件統計要求持用此劍且當前 special_active；充能傷害配置則在斬擊開始時依 special_active_at_start 選取。 | 一致 | 實際充能狀態控制加成；效果資料須讀到目前有效步數。 |
| 傷害窗消耗 | 原文只說增加充能連擊次數，沒有列消耗規則。 | on_exit_damage_window 在充能有效且命中或 abort 時每窗計一次；不是按敵人數計。當前停止門檻為原生一次加快取的有效步數。 | 文件未涵蓋 | 原文未說明命中／中止及動態次數檢查。 |
| 推擊與追擊 | 原文沒有列舉各種動作。 | 純 push 清除連擊，可降低當前門檻而使充能關閉；push-follow 是另一次 sweep，開始時仍充能才選充能配置。 | 文件未涵蓋 | 實際動作分類及清除連擊的後果補充了適用範圍。 |
| 首次生效與期限刷新 | 原文沒有說明連擊取樣時序或期限刷新。 | 連擊在 action:start 後更新，條件效果須待快取更新；充能自最近啟用／活目標命中／合格傷害窗刷新起滿三秒到期。 | 文件未涵蓋 | 不能保證孤立首揮已有一步加成，也不能把三秒當成整次啟用的硬上限。 |
| 再啟用與切換 | 原文沒有說明再啟用、切換及已消耗次數。 | P1 充能期間再啟用刷新起點但不退還次數；unwield 關閉充能且清除計數，切回需重新啟用。 | 文件未涵蓋 | 本項按兩個 P1 型號的完整特殊配置判定，不能套用 P3 保留計數的例外。 |
