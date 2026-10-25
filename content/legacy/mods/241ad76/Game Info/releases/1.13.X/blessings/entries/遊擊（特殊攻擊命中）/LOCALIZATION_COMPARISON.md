# 遊擊（特殊攻擊命中）：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_movement_speed_on_activated_hit`／hash`a87d06f4`；描述鍵`loc_trait_bespoke_movement_speed_on_activated_hit_desc`／hash`bbfc7a31`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Hit & Run／遊擊。

- 文件名稱：遊擊（特殊攻擊命中）(Hit & Run)。

- 適用武器：突擊鏈鋸劍；描述鍵`loc_trait_bespoke_movement_speed_on_activated_hit_desc`／hash`bbfc7a31`。

- 英文模板：`{movement_speed:%s} Movement Speed for {time:%s}s on Special Action Hit. `

- 繁中模板：特殊動作命中後{movement_speed:%s}移動速度，持續{time:%s}秒。

- **靜態重建**：英文與繁中描述以相同 RAW key/hash 配對。formatter 讀取各級 `stat_buffs.movement_speed`，以百分比及正號格式化，並讀取 wrapper `active_duration=4`；名稱消歧不改動 RAW 字串。

- I — EN: `+12.5% Movement Speed for 4s on Special Action Hit.`｜ZH-TW：`特殊動作命中後+12.5%移動速度，持續4秒。`
- II — EN: `+15% Movement Speed for 4s on Special Action Hit.`｜ZH-TW：`特殊動作命中後+15%移動速度，持續4秒。`
- III — EN: `+17.5% Movement Speed for 4s on Special Action Hit.`｜ZH-TW：`特殊動作命中後+17.5%移動速度，持續4秒。`
- IV — EN: `+20% Movement Speed for 4s on Special Action Hit.`｜ZH-TW：`特殊動作命中後+20%移動速度，持續4秒。`

各級重用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | RAW：`Special Action Hit`／「特殊動作命中」。 | ProcBuff 的 `on_hit` 還須通過同物品、melee、`weapon_special=true` 及目前持用條件。 | 觸發核心一致；實作條件較完整。 | 命中描述與實際特殊近戰命中相符，其他閘門由實作補充。 |
| 等級與時間 | RAW 使用 `{movement_speed:%s}`、`{time:%s}`；四級模板相同。 | trait formatter 讀 `.125/.15/.175/.20`，wrapper 設 4 秒。 | I–IV 數值及時間一致。 | 四級重建依實際格式參數，沒有把移速說成傷害。 |
| 名稱與頁面識別 | 本體名稱鍵 `loc_trait_bespoke_movement_speed_on_activated_hit`／hash `a87d06f4`；RAW 英文 Hit & Run、繁中遊擊。 | 既有 `hit-and-run` 是另一遠程祝福；此頁以新文件 id/title 消歧，保留原 name_key/hash。 | 文件譯名補充；RAW 不變。 | 避免同名頁面混淆，不改遊戲本體名稱或綁定。 |
| 型號與持用 | RAW 未列限制型號或持用條件。 | 本體 restriction 為 `chainsword_p1`；目前手持欄位作 stat gate，inventory 僅綁 Mk IV／Mk XIIIg。 | 文件未涵蓋。 | 不把 RAW 省略條件列為相反陳述。 |
| 刷新、切換與黏著後續傷害 | RAW 未說明計時、刷新、切換、推擊或黏著命中。 | 合格直接命中可刷新 4 秒而不疊層；sticky profiles `skip_on_hit_proc`，純 push 非 `on_hit` 特殊近戰命中。 | 文件未涵蓋。 | 這些是額外實作範圍與型號路由，不推定 RAW 有承諾。 |
