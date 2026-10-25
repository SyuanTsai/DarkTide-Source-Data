# 快速裝彈：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_reload_speed_on_slide`／hash`f4aa4527`；描述鍵`loc_trait_bespoke_reload_speed_on_slide_desc`／hash`0a6acca5`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Speedload／快速裝彈。

- 文件名稱：快速裝彈(Speedload)。

- 適用武器：步兵自動槍、槍托自動槍、撕裂者自動手槍、雙持自動手槍、偵察鐳射槍、重型鐳射手槍、針彈手槍、雙管霰彈槍、獵人霰彈槍、滅絕者霰彈槍、衝覆者霰彈手槍和防暴盾牌、快拔左輪手槍；描述鍵`loc_trait_bespoke_reload_speed_on_slide_desc`／hash`0a6acca5`。

- 英文模板：{reload_speed:%s} Reload Speed for {time:%s} seconds after Close Kill. Stacks {stacks:%s} times.

- 繁中模板：近距離擊殺敵人後，武器裝填速度增加{reload_speed:%s}，持續{time:%s}秒，最多疊加{stacks:%s}層。

- **靜態重建**：本體英文與繁中使用相同描述鍵/hash；速度值由各級 parent `stat_buffs.reload_speed` override取百分比，時間由該武器 own `child_duration`取數字，層數由 child `max_stacks=5`取數字。以下按實際武器秒數完整重建 I–IV；型號對應見表。

| 實際 child_duration | 適用 weapon_id | 等級 | 英文靜態句 | 繁中靜態句 |
|---|---|---|---|---|
| 2秒 | autopistol_p1, dual_autopistols_p1 | I | +7% Reload Speed for 2 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+7%，持續2秒，最多疊加5層。 |
| 2秒 | autopistol_p1, dual_autopistols_p1 | II | +8% Reload Speed for 2 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+8%，持續2秒，最多疊加5層。 |
| 2秒 | autopistol_p1, dual_autopistols_p1 | III | +9% Reload Speed for 2 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+9%，持續2秒，最多疊加5層。 |
| 2秒 | autopistol_p1, dual_autopistols_p1 | IV | +10% Reload Speed for 2 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+10%，持續2秒，最多疊加5層。 |
| 2.5秒 | autogun_p1, autogun_p2 | I | +7% Reload Speed for 2.5 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+7%，持續2.5秒，最多疊加5層。 |
| 2.5秒 | autogun_p1, autogun_p2 | II | +8% Reload Speed for 2.5 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+8%，持續2.5秒，最多疊加5層。 |
| 2.5秒 | autogun_p1, autogun_p2 | III | +9% Reload Speed for 2.5 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+9%，持續2.5秒，最多疊加5層。 |
| 2.5秒 | autogun_p1, autogun_p2 | IV | +10% Reload Speed for 2.5 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+10%，持續2.5秒，最多疊加5層。 |
| 3秒 | lasgun_p3, laspistol_p1, needlepistol_p1, shotgun_p2, shotgun_p3, shotgun_p4 | I | +7% Reload Speed for 3 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+7%，持續3秒，最多疊加5層。 |
| 3秒 | lasgun_p3, laspistol_p1, needlepistol_p1, shotgun_p2, shotgun_p3, shotgun_p4 | II | +8% Reload Speed for 3 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+8%，持續3秒，最多疊加5層。 |
| 3秒 | lasgun_p3, laspistol_p1, needlepistol_p1, shotgun_p2, shotgun_p3, shotgun_p4 | III | +9% Reload Speed for 3 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+9%，持續3秒，最多疊加5層。 |
| 3秒 | lasgun_p3, laspistol_p1, needlepistol_p1, shotgun_p2, shotgun_p3, shotgun_p4 | IV | +10% Reload Speed for 3 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+10%，持續3秒，最多疊加5層。 |
| 4秒 | shotpistol_shield_p1, stubrevolver_p1 | I | +7% Reload Speed for 4 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+7%，持續4秒，最多疊加5層。 |
| 4秒 | shotpistol_shield_p1, stubrevolver_p1 | II | +8% Reload Speed for 4 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+8%，持續4秒，最多疊加5層。 |
| 4秒 | shotpistol_shield_p1, stubrevolver_p1 | III | +9% Reload Speed for 4 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+9%，持續4秒，最多疊加5層。 |
| 4秒 | shotpistol_shield_p1, stubrevolver_p1 | IV | +10% Reload Speed for 4 seconds after Close Kill. Stacks 5 times. | 近距離擊殺敵人後，武器裝填速度增加+10%，持續4秒，最多疊加5層。 |

各型號在同一等級使用相同速度句型；只有自身 formatter 讀出的持續秒數依武器而異；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | 英文 RAW「after Close Kill」；繁中 RAW「近距離擊殺敵人後」；同一描述鍵/hash。 | 一般 wrappers 檢查同一攻擊物品、死亡結果、遠程或count_as_ranged與≤12.5公尺；Needle另有持有者標記表上的毒素死亡事件分支。 | 核心觸發詞義一致；條件未涵蓋 | RAW未列物品、持用、攻擊類型與距離實作條件，也未描述Needle標記死亡支線；key中的on_slide不等於遊戲顯示觸發。 |
| I–IV 裝填速度值 | RAW以 `{reload_speed:%s}` 顯示速度值；I–IV各級文字來自相同英文／繁中 hash。 | 12 個 own tier formatter 以 `percentage`、prefix `+` 讀 parent tier `stat_buffs.reload_speed`；value為0.07／0.08／0.09／0.10。 | 一致 | 每個有效層分別為+7%／+8%／+9%／+10%裝填速度；不是整段時間直接減少同百分比。 |
| 持續時間與最大層數 | RAW使用 `{time:%s}`、`{stacks:%s}`，並寫「Stacks 5 times」。 | 各 weapon own child_duration 是2／2.5／3／4秒之一；child max_stacks=5、stack_offset=−1，隱藏placeholder不算有效玩家層。 | 數值一致；刷新細節未涵蓋 | 靜態重建時間依實際weapon variant；RAW沒有敘述事件刷新整個時間窗的規則。 |
| 事件刷新與一般近距離擊殺 | RAW稱近距離擊殺後生效，未逐一列出所有可接受死亡事件來源。 | ParentProcBuff每個通過事件都重設整體timer；已達5層時仍刷新但不再加層。 | RAW未涵蓋細節 | RAW沒有說明事件重置單一效果計時，也沒有列出同物品、死亡、遠程及距離檢查。 |
| Needle標記毒素死亡例外 | RAW只寫近距離擊殺，未提標記或on_minion_death。 | 先由實際Needle遠程命中標記存活目標；毒素keyword消失後有固定影格寬限。死亡事件檢查tag表、toxin damage_type、位置與事件attacking_unit距離≤12.5m；受害者死亡事件送給敵方有效玩家，處理者仍須持用副手。 | RAW未涵蓋特別事件支線 | 死亡條件不重查當下toxin keyword或attacking_item；事件攻擊者可不同於標記者/持有者，不可將一般on_kill gate硬套到此支線。 |
| 速度值與實際動作時間 | RAW稱 Reload Speed 提高，沒有宣稱總裝填動作縮短相同百分比，也沒列裝填型態。 | reload_speed為additive_multiplier；各binding實際 reload_state、逐發shell reload與Mk III/Mk VIII特殊彈裝填讀取當時stat並在action start保存time_scale。 | RAW未涵蓋完整時間結算 | 基準時間、handling、其他加成與action cap會影響結果；逐發reload每段分別取樣。 |
