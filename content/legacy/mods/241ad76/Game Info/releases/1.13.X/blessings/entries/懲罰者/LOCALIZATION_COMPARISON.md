# 懲罰者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_damage_on_close_kill`／hash`5d0f2ffa`；描述鍵`loc_trait_bespoke_increase_damage_on_close_kill_desc`／hash`b9c3e73b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Punisher／懲罰者。

- 文件名稱：懲罰者(Punisher)。

- 適用武器：步兵自動槍；描述鍵`loc_trait_bespoke_increase_damage_on_close_kill_desc`／hash`b9c3e73b`。

- 英文模板：{damage:%s} Damage for {time:%s} seconds on Kill.

- 繁中模板：擊殺後{damage:%s}傷害，持續{time:%s}秒。

- **靜態重建**：實際 formatter 輸出鍵名如下；`movement_speed` 雖讀取傷害數值，`damage` 鍵仍缺失：

| 等級 | movement_speed | time | damage |
|---|---:|---:|---|
| I | +2% | 1.75 | 未提供 |
| II | +3% | 1.75 | 未提供 |
| III | +4% | 1.75 | 未提供 |
| IV | +5% | 1.75 | 未提供 |

- **實際固定來源重建**：語系管理器已就緒並找到本RAW時，缺少`damage`會代入`"damage:undefined"`；四級的句子因此相同：

- **I**：EN `"damage:undefined" Damage for 1.75 seconds on Kill.`；繁中「擊殺後"damage:undefined"傷害，持續1.75秒。」

- **II**：EN `"damage:undefined" Damage for 1.75 seconds on Kill.`；繁中「擊殺後"damage:undefined"傷害，持續1.75秒。」

- **III**：EN `"damage:undefined" Damage for 1.75 seconds on Kill.`；繁中「擊殺後"damage:undefined"傷害，持續1.75秒。」

- **IV**：EN `"damage:undefined" Damage for 1.75 seconds on Kill.`；繁中「擊殺後"damage:undefined"傷害，持續1.75秒。」

- **按實作補充數值**：I／II／III／IV 每層的一般傷害為+2%／+3%／+4%／+5%。若修正占位符接線，這些才是可填入`damage`的數值；此補充不是原formatter的現行輸出；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發擊殺 | RAW「on Kill／擊殺後」；描述hash b9c3e73b。 | attack.lua669–710於died排on_kill；check_proc_functions.lua306–318／721–727要求遠程或count_as_ranged_attack及來源item相同。 | 擊殺一致；其他條件未涵蓋 | 只命中不觸發；處理時亦須仍持用來源槽。 |
| 12.5公尺距離 | RAW未列距離。 | check_proc_functions.lua777–792以射手到hit_world_position的平方距離≤CLOSE_RANGE²；damage_settings.lua18–23為12.5。 | 文件未涵蓋 | 門檻用於取得／刷新層數；已有一般傷害加成不再次受近距離門檻限制。 |
| 傷害占位符 | 英繁RAW皆要求{damage:%s}。 | autogun_p1.lua256–279只供movement_speed及time；TraitValueParser77–117保留鍵名；LocalizationManager285–320缺key代入帶引號的damage:undefined。 | 描述接線勘誤 | movement_speed讀的是damage數值，但未提供RAW需要的damage鍵；不假造目前可正常顯示+2%等句。 |
| 傷害結算 | RAW稱Damage，未列公式。 | damage_calculation.lua232–263及582–614以damage的additive_multiplier貢獻加入同一加傷池。 | 文件未涵蓋 | B先於加傷池；q、n、p及後續修正前提分清，不逐層獨立乘算。 |
| 層數與期限 | RAW time占位符由專屬child_duration輸出1.75秒。 | ParentProcBuff10–38／56–90／134–163建立占位子層、限制物理6／有效5，滿層add0仍刷新；remove_t<t移除有效5層。 | 時間一致；層數刷新未涵蓋 | 每層2／3／4／5%，五層10／15／20／25%；切換不重設共用時間。 |
| 模式、切換與首次生效 | RAW未列射擊模式、持用及更新時序。 | 3個實際autogun_p1模板腰射／ADS為shoot_hit_scan，特殊輸入toggle_special手電筒；held gate及attack.lua353–383先結算、後排事件，Buff更新再建stat快取。 | 文件未涵蓋 | 特殊輸入本身不擊殺；切出時proc／加傷停用，未到期可切回；新層不追溯加到觸發擊殺傷害。 |
