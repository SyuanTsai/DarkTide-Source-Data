# 致命連擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_crit_chance_on_weakspot_kill`／hash`5beacc86`；描述鍵`loc_trait_bespoke_increased_crit_chance_on_weakspot_kill_desc`／hash`ad662888`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Chained Deathblow／致命連擊。

- 文件名稱：致命連擊(Chained Deathblow)。

- 適用武器：重劍、機械神教動力劍；描述鍵`loc_trait_bespoke_increased_crit_chance_on_weakspot_kill_desc`／hash`ad662888`。

- 英文模板：{crit_chance:%s} Critical Chance for {time:%s}s on Weak Spot Kill.

- 繁中模板：弱點攻擊擊殺後致命一擊機率{crit_chance:%s}，持續{time:%s}秒。

- **靜態重建**：以下依同一 `content/localization/items` 資源、相同中英 key/hash，以及各 own formatter 的百分比前綴與 wrapper 的 3 秒，將四級值代入兩段 RAW 描述。

- I 級英文：`+5% Critical Chance for 3s on Weak Spot Kill.`
- I 級繁中：`弱點攻擊擊殺後致命一擊機率+5%，持續3秒。`
- II 級英文：`+10% Critical Chance for 3s on Weak Spot Kill.`
- II 級繁中：`弱點攻擊擊殺後致命一擊機率+10%，持續3秒。`
- III 級英文：`+15% Critical Chance for 3s on Weak Spot Kill.`
- III 級繁中：`弱點攻擊擊殺後致命一擊機率+15%，持續3秒。`
- IV 級英文：`+20% Critical Chance for 3s on Weak Spot Kill.`
- IV 級繁中：`弱點攻擊擊殺後致命一擊機率+20%，持續3秒。`

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發條件 | 英文 RAW：`on Weak Spot Kill.`；繁中 RAW：`弱點攻擊擊殺後`。 | 兩個 wrapper 收 `on_kill`；共用檢查要求 `attack_result == died` 且 `hit_weakspot=true`，另檢查 attacking item 與持用槽。 | 文件未涵蓋 | 弱點擊殺核心條件一致；RAW 未交代物品一致與目前持用槽的額外限制，本文依實作補足。 |
| I–IV 數值 | 英文 RAW 使用 `{crit_chance:%s}`；繁中 RAW 使用 `{crit_chance:%s}`，未在句中列出等級。 | 兩個 own formatter 都讀各自 `proc_stat_buffs.melee_critical_strike_chance`，前綴 `+`、percentage ×100；tier 是 .05/.10/.15/.20。 | 一致 | 四級靜態代入均得到 +5／+10／+15／+20%；這是機率百分點，不是最終傷害百分比。 |
| 持續時間 | 英文 RAW：`for {time:%s}s`；繁中 RAW：`持續{time:%s}秒`。 | 兩個 wrapper 各自 `active_duration=3`，formatter 以 number 讀取 3。 | 一致 | 同一 resource/key/hash；兩語 placeholder 位置都重建為 3 秒。 |
| 作用屬性範圍 | RAW 只寫 `Critical Chance`／`致命一擊機率`，沒有標明近戰或遠程。 | tier key 為 `melee_critical_strike_chance`；四個實際型號皆是近戰武器與近戰 sweep 路徑。 | 文件未涵蓋 | 程式已確認為近戰爆擊率加值，但 RAW 的一般文字未細分攻擊類型，沒有相反敘述。 |
| 再次觸發 | RAW 只寫 `on Weak Spot Kill`，未提刷新、疊層或冷卻。 | ProcBuff 設 `allow_proc_while_active=true` 且無 cooldown；每個通過條件的非 local 事件更新活動起始時間，單層計時重設。 | 文件未涵蓋 | 實作流程由固定來源直接證成；描述省略狀態管理不是機制矛盾。 |
