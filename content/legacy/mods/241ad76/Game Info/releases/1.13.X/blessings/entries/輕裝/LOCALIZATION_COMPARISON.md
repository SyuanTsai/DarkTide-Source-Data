# 輕裝：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_sprint_speed`／hash`05774d98`；描述鍵`loc_trait_bespoke_increased_sprint_speed_desc`／hash`4f33ede2`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Stripped Down／輕裝。

- 文件名稱：輕裝(Stripped Down)。

- 適用武器：步兵自動槍、槍托自動槍、偵察鐳射槍、針彈手槍；描述鍵`loc_trait_bespoke_increased_sprint_speed_desc`／hash`4f33ede2`。

- 英文模板：Gain Ranged Attack Immunity while sprinting with over {stamina:%s} Stamina.

- 繁中模板：衝刺耐力消耗超過{stamina:%s}時，使你免疫遠程攻擊。

- **靜態重建**：以下依固定來源的 percentage formatter、各 trait override 與同 hash 的中英 RAW，將門檻值乘以 100 後代入 placeholder 靜態重建

| 等級 | 剩餘耐力門檻 | 英文描述靜態輸出 | 繁中描述靜態輸出 | 程式邊界 |
|---|---:|---|---|---|
| I | 80% | Gain Ranged Attack Immunity while sprinting with over 80% Stamina. | 衝刺耐力消耗超過80%時，使你免疫遠程攻擊。 | `current_fraction >= 0.80`（等於門檻也成立） |
| II | 70% | Gain Ranged Attack Immunity while sprinting with over 70% Stamina. | 衝刺耐力消耗超過70%時，使你免疫遠程攻擊。 | `current_fraction >= 0.70`（等於門檻也成立） |
| III | 60% | Gain Ranged Attack Immunity while sprinting with over 60% Stamina. | 衝刺耐力消耗超過60%時，使你免疫遠程攻擊。 | `current_fraction >= 0.60`（等於門檻也成立） |
| IV | 50% | Gain Ranged Attack Immunity while sprinting with over 50% Stamina. | 衝刺耐力消耗超過50%時，使你免疫遠程攻擊。 | `current_fraction >= 0.50`（等於門檻也成立） |

四級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 英文 RAW 的條件句 | Gain Ranged Attack Immunity while sprinting with over {stamina:%s} Stamina. | 實際 gate 是持用相符武器、sprinting、current stamina fraction 達 tier threshold 三者同時成立。 | 部分涵蓋 | 文字未交代手持、衝刺狀態、計量方向與 attack consumer 限定。 |
| 繁中 RAW 的耐力方向 | 衝刺耐力消耗超過{stamina:%s}時，使你免疫遠程攻擊。 | 程式比較 threshold <= current_fraction；測的是剩餘耐力比例，而非已消耗耐力。 | 矛盾 | 繁中「耐力消耗超過」把剩餘比例說成消耗量，方向相反。 |
| 英文 RAW 的 over 邊界 | with over {stamina:%s} Stamina | actual comparison is threshold <= current_fraction; equality passes. | 矛盾 | 英文 over 通常表示嚴格大於，但程式包含相等門檻；顯示表和算例明列 >=。 |
| 四級數值與 formatter | I–IV placeholder | own override values are 0.80/0.70/0.60/0.50; percentage formatter renders 80/70/60/50%. | 一致 | 四個實際 trait 各自完整 tier block 相同，沒有跨 variant 推定。 |
| 手持、衝刺與耐力條件 | RAW 只提 sprinting 與 stamina | base template ANDs is_item_slot_wielded, is_sprinting and has_stamina. | 文件未涵蓋 | 文件補上三項同時條件；換手、停止衝刺或低於門檻時狀態關閉。 |
| 遠程攻擊免疫的範圍 | Ranged Attack Immunity | keyword affects ranged Dodge helper calls; the hitscan path skips is_undodgeable before testing dodge. | 文件未涵蓋 | RAW 未交代此 keyword 接入哪些攻擊判定；來源顯示實際 ranged Dodge consumer 才會採用，不能推為所有遠程傷害免疫。 |
| 名稱與速度 stat | name key 含 increased_sprint_speed | actual wrapper clones count_as_dodge_vs_ranged_while_sprinting; it adds no sprint_movement_speed stat. | 不一致於名稱暗示 | 鄰近 increased_sprint_speed template 是另一個不同 proc buff；本項不增加衝刺速度。 |
| 觸發事件與時限 | RAW 未列擊中、擊殺、層數或時間 | actual class_name=buff has only conditional state gates; no proc event, active_duration, stack cap or cooldown in the cloned template. | 文件未涵蓋 | 這是常駐條件式 keyword；狀態在 player buff fixed update 重算，不存留一個計時層。 |
