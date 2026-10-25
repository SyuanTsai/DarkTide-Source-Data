# 克魯錫安輪盤：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_based_on_ammo_left`／hash`4b48aa5c`；描述鍵`loc_trait_bespoke_crit_chance_based_on_ammo_left_desc`／hash`b19fe517`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Crucian Roulette／克魯錫安輪盤。

- 文件名稱：克魯錫安輪盤(Crucian Roulette)。

- 適用武器：機動自動槍、磷光爆破手槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_crit_chance_based_on_ammo_left_desc`／hash`b19fe517`。

- 英文模板：{crit_chance:%s} Critical Chance for each expended round in your weapon (resets on reload).

- 繁中模板：每消耗武器中一發彈藥，你的暴擊幾率增加{crit_chance:%s}（換彈時重置）。

- **靜態重建**：以 Steam Build25606770 的同hash英文／繁中RAW配對，將每發爆擊率格式參數代入實際I–IV數值：自動槍0.45／0.5／0.55／0.6個百分點，兩種手槍4.5／5／5.5／6個百分點；加成依當時彈匣缺彈數計算。機制與數值依固定Git SHA核對；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每消耗一發提高暴擊機率 | EN Critical Chance for each expended round in your weapon；繁中每消耗武器中一發彈藥，暴擊幾率增加。 | 三個 format_values 讀取各自 buff tier critical_strike_chance；步數按持用槽彈匣缺彈數計算。 | 一致 | 通用暴擊亦適用於列出的敲擊/推擊。 |
| 換彈時重置 | EN resets on reload；繁中換彈時重置。 | 基底在 reload 時令 bonus step 為 0；裝填後按新彈匣重算。 | 一致 | 沒有獨立 duration 或 cooldown。 |
| 完全打空 | RAW 未明示空匣邊界。 | 基底在 missing_in_clip==max_ammunition_clip 時回傳 0。 | 文件未涵蓋 | 玩家正文說明實際邊界，不是 RAW 明確矛盾。 |
| 彈匣容量與備用彈 | RAW只寫每發已消耗彈藥。 | 以目前啟用彈匣的實際上限減目前彈數，不計備用；不是角色累計已發射總數。 | 文件未涵蓋 | 補充實際容量與未換滿、改變容量後的即時重計。 |
| 持用與切換 | RAW沒有細列武器槽條件。 | 持用槽同時控制一般conditional與stepped條件，切出不提供stat；切回依現存缺彈重計。 | 文件未涵蓋 | 不保留另一把武器的加成，也不需要切回先射擊才恢復。 |
| 背向爆破例外 | RAW描述Critical Chance。 | 磷光直接射擊正常判定，後續背向爆破明確傳入is_critical_strike=false。 | 文件未涵蓋 | 不能將通用爆擊率加成解讀成每個附帶傷害都可暴擊。 |
