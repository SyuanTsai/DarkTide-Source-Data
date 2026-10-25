# 迅捷火焰：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_faster_reload_on_empty_clip`／hash`13547a5e`；描述鍵`loc_trait_bespoke_faster_reload_on_empty_clip_desc`／hash`d39317a1`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Quickflame／迅捷火焰。

- 文件名稱：迅捷火焰(Quickflame)。

- 適用武器：淨化噴火器；描述鍵`loc_trait_bespoke_faster_reload_on_empty_clip_desc`／hash`d39317a1`。

- 英文模板：{reload_speed:%s} Reload Speed if empty.

- 繁中模板：彈夾打空時，裝填速度提高{reload_speed:%s}。

- **靜態重建**：四階描述沿用同一 RAW 描述鍵（實際等級為 I–IV）。formatter 讀取 own stat_buffs.reload_speed、乘 100 並加 + 前綴；I–IV 重建為 +24%／+28%／+32%／+36%。例如 IV 英文為 +36% Reload Speed if empty.；繁中為「彈夾打空時，裝填速度提高+36%。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發條件 | EN: {reload_speed:%s} Reload Speed if empty.／ZH-TW: 彈夾打空時，裝填速度提高{reload_speed:%s}。；同一 RAW hash d39317a1。 | base conditional gate：持用該武器、clip <= 0、目前 action 不是 reload。 | 文件未涵蓋 | RAW 的空匣條件與實作核心一致；持用槽位與正在裝填排除條件屬文件未涵蓋。 |
| 四階數值 | RAW 以 {reload_speed:%s} 提供數值位置。 | own tier .24/.28/.32/.36；formatter 以 percentage 和 + prefix 顯示。 | 一致 | 四階值來自實際 flamer_p1 own trait override。 |
| 速度與時間 | RAW 稱 Reload Speed，沒有說明 action duration 算法。 | reload_speed 是 additive_multiplier；reload_state start 將 stat cache 轉為並保存 time_scale，動作時間以 phase_time/time_scale 計。 | 文件未涵蓋 | 文案分開說明速度加算與時間縮短比例。 |
| 最後一發與自動裝填 | RAW 未說明最後一發與自動 reload 的更新順序。 | buff → character state → weapon 系統順序與 flamer clip_empty chain 顯示下一固定更新刷新 cache 後才開始 reload。 | 文件未涵蓋 | 僅適用此 bound flamer 的實際玩家路徑。 |
| 分段與中斷 | RAW 未列 reload phase 或取消門檻。 | flamer_rifle 使用 remove_canister/replace_canister 門檻；finish 以已保存 time_scale 處理已達門檻。 | 文件未涵蓋 | 補充實際武器行為，不宣稱 RAW 數值錯誤。 |
