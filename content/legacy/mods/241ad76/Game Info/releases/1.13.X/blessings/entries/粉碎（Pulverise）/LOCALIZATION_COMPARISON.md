# 粉碎（Pulverise）：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_on_melee_kill`／hash`2e6beae6`；描述鍵`loc_trait_bespoke_crit_chance_on_melee_kill_desc`／hash`23668ce9`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Pulverise／粉碎。

- 文件名稱：粉碎（Pulverise）。

- 適用武器：擲彈兵臂鎧；描述鍵`loc_trait_bespoke_crit_chance_on_melee_kill_desc`／hash`23668ce9`。

- 英文模板：{crit_chance:%s} Critical Chance for {time:%s}s on Melee Kill.

- 繁中模板：近戰擊殺後{crit_chance:%s}致命一擊機率，持續{time:%s}秒。

- **靜態重建**：I–IV機率占位符分別為 +10／+15／+20／+25%；時間占位符四級均為2秒。這是Steam Build25606770 RAW模板與格式器的靜態重建；實際計時四級均為3秒。依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | Pulverise；繁中 RAW「粉碎」（name key `loc_trait_bespoke_crit_chance_on_melee_kill`；hash `2e6beae6`）。 | 單一 bound trait 使用相同名稱 key。 | 一致 | 保留 RAW 名稱「粉碎」。 |
| 觸發方式 | `{crit_chance:%s} Critical Chance for {time:%s}s on Melee Kill.`（desc key hash `23668ce9`）。 | 要求 on_kill 事件、死亡結果、melee 攻擊、來源 item 與 buff item 相同，且該武器 slot 正在持用。 | 文件未涵蓋 | RAW 說明近戰擊殺與持續時間，沒有列出同 item 或持用條件。 |
| 機率種類 | RAW 只寫「Critical Chance」，沒有指定只限 melee 或 ranged。 | tier 修改通用 `critical_strike_chance`；近戰及遠程計算都把此通用欄加入各自機率。 | 一致 | 將它表述為通用爆擊率，不縮窄成單一攻擊類別。 |
| 持續時間 | 時間占位符以 buff_template 讀取 active_duration；base 為2秒。 | I–IV各級 runtime override 的 active_duration 均為3秒。 | 不一致 | 靜態遊戲描述顯示2秒，實際效果3秒；保留RAW，文件標明勘誤。 |
| 切換、重觸發及特殊攻擊 | RAW 未說明切換、重觸發疊層或近戰爆炸擊殺。 | 切出時計時繼續但 slot condition 暫停 stat；合格擊殺重設3秒、不疊層；special direct melee kill 可觸發，爆炸 kill 不可。 | 文件未涵蓋 | 補述實作差異；未發現與 RAW 明確矛盾。 |
| 普通榴彈與特殊爆炸 | RAW未區分兩條爆炸路徑。 | 普通榴彈直擊與引信／撞擊爆炸沿用發射爆擊旗標；特殊爆炸固定非爆擊。 | 文件未涵蓋 | 分別交代爆擊適用與近戰擊殺觸發，不把所有爆炸視為相同行為。 |
