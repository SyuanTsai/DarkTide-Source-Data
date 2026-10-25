# 近身平射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_bonus_on_melee_kills`／hash`92eda1aa`；描述鍵`loc_trait_bespoke_crit_chance_bonus_on_melee_kills_desc`／hash`f399a447`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Point Blank／近身平射。

- 文件名稱：近身平射(Point Blank)。

- 適用武器：爆彈手槍、針彈手槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_crit_chance_bonus_on_melee_kills_desc`／hash`f399a447`。

- 英文模板：{crit_chance:%s} Ranged Critical Chance after Melee Kill for {time:%s} seconds.

- 繁中模板：近戰擊殺後，遠程致命一擊機率提升{crit_chance:%s}，持續{time:%s}秒。

- **靜態重建**：RAW 名稱已是「近身平射」，與英文 Point Blank 同屬既有字串配對；保留此名稱。描述模板為「近戰擊殺後，遠程致命一擊機率提升{crit_chance:%s}，持續{time:%s}秒。」依 tier 與型號填入的值為14／16／18／20個百分點，以及3.5秒（爆彈手槍／針彈手槍）或2.5秒（快拔左輪手槍）；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | {crit_chance:%s} Ranged Critical Chance after Melee Kill for {time:%s} seconds.（content/localization/items；hash f399a447） | 共用 buff 監聽擊殺事件；檢查函式要求目標死亡且攻擊類型為近戰。 | 一致 | 本體描述的「近戰擊殺後」符合實際事件條件。 |
| 提升的機率種類 | Ranged Critical Chance（同一描述鍵；hash f399a447） | tier 覆寫 ranged_critical_strike_chance；致命一擊計算的遠程分支讀取此欄，近戰分支讀取另一欄。 | 一致 | 加成用於遠程攻擊的致命一擊機率，不增加近戰致命一擊機率。 |
| 各等級與型號時間 | 描述使用 {crit_chance:%s} 與 {time:%s} 格式參數，未逐級列數值。 | 三組 I–IV tier 定義相同為14／16／18／20%；爆彈手槍與針彈手槍3.5秒，快拔左輪手槍2.5秒。 | 一致 | RAW的crit_chance與time參數讀對應trait階級；三實作的機率與持續時間均能由格式器重建。 |
| 近距離與擊殺武器限制 | Melee Kill（description key loc_trait_bespoke_crit_chance_bonus_on_melee_kills_desc） | 檢查函式只判斷死亡結果與 melee 攻擊類型，不讀取距離或造成擊殺的武器。 | 文件未涵蓋 | 描述未細列距離或武器欄位；實作不添加這兩種限制。 |
| 重觸發、切換與射擊 | 本體描述只陳述擊殺後的加成及持續時間。 | 無 cooldown 的 ProcBuff 在合格擊殺時更新 active_start_time；stat 依活性時間提供，沒有射擊消耗路徑。 | 文件未涵蓋 | 補充重觸發重設時間、不疊層、切換不取消及射擊不消耗。 |
