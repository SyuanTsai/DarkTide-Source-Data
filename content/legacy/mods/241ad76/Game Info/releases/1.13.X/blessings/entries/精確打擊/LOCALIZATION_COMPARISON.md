# 精確打擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_based_on_aim_time`／hash`6abd0dd5`；描述鍵`loc_trait_bespoke_crit_chance_based_on_aim_time_desc`／hash`4a242066`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Surgical／精確打擊。

- 文件名稱：精確打擊(Surgical)。

- 適用武器：機動自動槍、矛頭爆矢槍、爆彈手槍、冥潮鐳射槍、重伐木槍、反衝者、惡棍槍、磷光爆破手槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_crit_chance_based_on_aim_time_desc`／hash`4a242066`。

- 英文模板：{crit_chance:%s} Critical Chance for every {time:%s} second while aiming. Stacks {stacks:%s} times. Discharges all stacks upon firing.

- 繁中模板：瞄準時，每{time:%s}秒暴擊幾率增加{crit_chance:%s}，最多疊加{stacks:%s}層。射擊後清除所有層數。

- **靜態重建**：依本體名稱鍵與描述鍵的同hash中英RAW，使用實際trait格式占位符 `{crit_chance:%s}`、`{time:%s}`、`{stacks:%s}`，並以四級覆寫的間隔、+10個百分點與10步上限重建；保留RAW hash，玩家文件採詞表「爆擊率」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 瞄準時逐時間間隔增加機率 | RAW: `{crit_chance:%s} Critical Chance for every {time:%s} second while aiming.`／「瞄準時，每{time:%s}秒暴擊幾率增加{crit_chance:%s}。」 | 共享基底以alternate fire瞄準時間計算步數；trait format values提供crit_chance/time。 | 一致 | 本體句子描述瞄準時計時增加機率；玩家文件依詞表寫「爆擊率」。 |
| 最多10步 | RAW: `Stacks {stacks:%s} times.`／「最多疊加{stacks:%s}層。」 | formatter固定輸出10；SteppedStatBuff clamp有效步數0–10。 | 一致 | 格式值10與有效步數上限吻合。 |
| 射擊後清除 | RAW: `Discharges all stacks upon firing.`／「射擊後清除所有層數。」 | 每次實際射擊後ActionShoot更新fire_last_t，step函式按較新的時間重新計算。 | 一致 | 重算步數等效於射擊後放空既有加成；不依賴是否命中。 |
| 持用與退出瞄準 | 本體描述只寫瞄準時計時。 | 共用條件同時檢查持用槽與瞄準；切出停止瞄準，重新開始時更新開始時間。 | 文件未涵蓋 | 補充切出失效及重新瞄準從零計時。 |
| 同池加成與機率封頂 | 本體以 Critical Chance／暴擊幾率描述。 | 各階使用全域 critical_strike_chance，按步數加算；consumer相加後限制0–100%，再處理機率轉換。 | 一致 | 每步+10個百分點，不是將原有機率乘以1.1。 |
| 滿步維持、命中與冷卻 | 本體只寫最多10層及射擊清除。 | 持續瞄準且未射擊就維持10步；沒有獨立冷卻，實際射擊更新時間而不讀命中結果。 | 文件未涵蓋 | 補充未命中也重計、滿步無固定到期時間。 |
| 連射與特殊動作 | 本體未逐型號說明。 | 自動射擊可沿用一輪爆擊狀態；近戰特殊設定退出瞄準，照明切換不更新射擊時間。 | 文件未涵蓋 | 不能把每次彈丸或連射發數當作獨立新增步數。 |
