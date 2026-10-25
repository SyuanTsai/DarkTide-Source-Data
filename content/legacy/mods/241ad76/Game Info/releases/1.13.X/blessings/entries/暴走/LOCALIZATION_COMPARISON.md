# 暴走：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_melee_damage_on_multiple_hits`／hash`ab832d02`；描述鍵`loc_trait_bespoke_increased_melee_damage_on_multiple_hits_desc`／hash`b7bc5a42`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Rampage／暴走。

- 文件名稱：暴走(Rampage)。

- 適用武器：重型開膛劍、突擊鏈鋸劍、「惡魔之爪」劍、重劍、決鬥劍、上古神刃、動力劍、穿音速雙刀；描述鍵`loc_trait_bespoke_increased_melee_damage_on_multiple_hits_desc`／hash`b7bc5a42`。

- 英文模板：Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds.

- 繁中模板：一次攻擊命中至少{multiple_hit:%s}個敵人後，使你的傷害提高{damage:%s}，持續{time:%s}秒。

- **靜態重建**：- 名稱 RAW locale 0／16，同 hash ab832d02：Rampage／暴走
- 描述 RAW locale 0／16，同 hash b7bc5a42：Hitting at least {multiple_hit:%s} enemies with an attack, increases your damage by {damage:%s} for {time:%s} seconds.／一次攻擊命中至少{multiple_hit:%s}個敵人後，使你的傷害提高{damage:%s}，持續{time:%s}秒。
- 文件名稱沿用本體繁中「暴走」，不改寫遊戲 localization。
- 文件譯文靜態重建（繁中 locale 16 formatter）：
一般七類武器：
- I 級：一次攻擊命中至少3個敵人後，使你的傷害提高+24%，持續3.5秒。
- II 級：一次攻擊命中至少3個敵人後，使你的傷害提高+28%，持續3.5秒。
- III 級：一次攻擊命中至少3個敵人後，使你的傷害提高+32%，持續3.5秒。
- IV 級：一次攻擊命中至少3個敵人後，使你的傷害提高+36%，持續3.5秒。
穿音速雙刀：
- I 級：一次攻擊命中至少3個敵人後，使你的傷害提高9%，持續3.5秒。
- II 級：一次攻擊命中至少3個敵人後，使你的傷害提高12%，持續3.5秒。
- III 級：一次攻擊命中至少3個敵人後，使你的傷害提高15%，持續3.5秒。
- IV 級：一次攻擊命中至少3個敵人後，使你的傷害提高18%，持續3.5秒。
- 各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 命中數 | Hitting at least {multiple_hit:%s} enemies with an attack／一次攻擊命中至少{multiple_hit:%s}個敵人後 | common required_num_hits=3；sweep 傳 target_number 並檢查>=3。 | 門檻相符；存活目標細節文件未涵蓋 | RAW 未列事件欄位。 |
| 傷害效果 | increases your damage by {damage:%s}／使你的傷害提高{damage:%s} | own tier 覆寫 melee_power_level_modifier，併入近戰威力倍率。 | 計算層級文件未涵蓋 | 不寫成最終傷害增幅。 |
| 期限 | for {time:%s} seconds／持續{time:%s}秒 | own active_duration 均為 3.5；再次成功刷新起始時間。 | 可重建為 3.5 秒 | 由 actual tier 取值。 |
| 攻擊類型 | with an attack／一次攻擊 | common predicate 必須 melee；純 push 是 push。 | melee 限制文件未涵蓋 | 未列條件不是翻譯錯誤。 |
| 物品和事件條件 | RAW 未列 item/held/alive/breed 或 kill 等條件。 | item exact match、held condition、存活且有 breed 才排 event；無 kill/elite/weakspot/crit check。 | 文件未涵蓋 | 沒有明確矛盾。 |
