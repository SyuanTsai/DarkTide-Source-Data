# 致命頻率：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_melee_power_on_weapon_special_follow_up_hits`／hash`e03c3c69`；描述鍵`loc_trait_bespoke_increased_melee_power_on_weapon_special_follow_up_hits_desc`／hash`efca1cdc`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Deadly Frequencies／致命頻率。

- 文件名稱：致命頻率(Deadly Frequencies)。

- 適用武器：穿音速雙刀；描述鍵`loc_trait_bespoke_increased_melee_power_on_weapon_special_follow_up_hits_desc`／hash`efca1cdc`。

- 英文模板：After hitting an enemy with your Weapon Special attack, your next melee attacks will have {power:%s} increased Melee Strength.

- 繁中模板：使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高{power:%s}。

- **靜態重建**：formatter 以選定階級值乘 100，並保留 `+` 前綴。I–IV 精確代入中英 RAW 模板如下：

| Tier | 英文代入 | 繁中代入 |
|---|---|---|
| I | After hitting an enemy with your Weapon Special attack, your next melee attacks will have +15% increased Melee Strength. | 使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+15%。 |
| II | After hitting an enemy with your Weapon Special attack, your next melee attacks will have +20% increased Melee Strength. | 使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+20%。 |
| III | After hitting an enemy with your Weapon Special attack, your next melee attacks will have +25% increased Melee Strength. | 使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+25%。 |
| IV | After hitting an enemy with your Weapon Special attack, your next melee attacks will have +30% increased Melee Strength. | 使用武器特殊攻擊命中敵人後，下一次近戰攻擊的近戰威力將提高+30%。 |

以上為逐級靜態字串；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與 RAW 配對 | EN Deadly Frequencies／zh-TW 致命頻率；hash e03c3c69。 | 同固定 localization key/hash 的英中名稱逐位配對。 | 一致 | RAW exact-byte 驗證。 |
| 階級及 formatter | 兩語描述以 {power:%s} 留值欄，沒有列階級數字。 | own tier .15/.20/.25/.30；formatter 從 tier override 讀值並採 percentage/+。 | 一致 | 重建為 +15／20／25／30%。 |
| 特攻觸發範圍 | 描述要求命中 Weapon Special attack，未列實際動作。 | 只有 special activation/deactivation sweep 使用 weapon_special=true melee profiles；另要求 attacking item match。 | 實作補充 | special-active damage type 不等於 weapon_special。 |
| 下一次近戰攻擊的計數 | 英文說 next melee attacks，繁中寫「下一次近戰攻擊」；兩語均未交代完整計數窗、揮空扣數與期限。 | 合格 on_hit 設 counter=4；每個 held active sweep finish 扣一，不看 hit count。 | 語意需釐清；文件未涵蓋 | 繁中易被理解為只有下一擊；實際按掃掠完成扣次，通常觸發後還有三次，不按目標或軌跡數扣次。 |
| 首次及同掃掠結算 | RAW 未描述同一較長斬擊內的先後。 | Attack 傷害先結算才排 on_hit；後續 Buff update/cache 後，同一仍開啟的 sweep window 可讓較晚 hit 受益。 | 文件未涵蓋 | 此結論來自固定更新／事件順序，非遊戲測試；威力輸入不是最終傷害百分比。 |
