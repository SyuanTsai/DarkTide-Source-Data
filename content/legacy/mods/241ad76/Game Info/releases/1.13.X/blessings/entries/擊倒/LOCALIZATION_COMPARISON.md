# 擊倒：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_crit_chance_after_punching_staggered_enemy`／hash`90a360d3`；描述鍵`loc_trait_bespoke_increased_crit_chance_after_punching_staggered_enemy_desc`／hash`46f2e4e3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Smackdown／擊倒。

- 文件名稱：擊倒(Smackdown)。

- 適用武器：戰刃、惡霸棍棒；描述鍵`loc_trait_bespoke_increased_crit_chance_after_punching_staggered_enemy_desc`／hash`46f2e4e3`。

- 英文模板：{crit_chance:%s} Critical Chance for {time:%s}s on Special Action Hit (Staggered Enemy).

- 繁中模板：特殊動作命中（硬直中的敵人）後，致命一擊機率{crit_chance:%s}，持續{time:%s}秒。

- **靜態重建**：兩個實作的數值與格式相同；依 own tier、帶「+」的百分比格式及 4.5 秒參數代入：

- I：EN “+12.5% Critical Chance for 4.5s on Special Action Hit (Staggered Enemy).”；繁中「特殊動作命中（硬直中的敵人）後，致命一擊機率+12.5%，持續4.5秒。」
- II：EN “+15% Critical Chance for 4.5s on Special Action Hit (Staggered Enemy).”；繁中「特殊動作命中（硬直中的敵人）後，致命一擊機率+15%，持續4.5秒。」
- III：EN “+17.5% Critical Chance for 4.5s on Special Action Hit (Staggered Enemy).”；繁中「特殊動作命中（硬直中的敵人）後，致命一擊機率+17.5%，持續4.5秒。」
- IV：EN “+20% Critical Chance for 4.5s on Special Action Hit (Staggered Enemy).”；繁中「特殊動作命中（硬直中的敵人）後，致命一擊機率+20%，持續4.5秒。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與資源配對 | 同一content/localization/items資源；名稱鍵/hash 90a360d3，描述key/hash 46f2e4e3，英／繁中同key/hash。 | RAW receipt逐locale/key/hash核對；兩武器共用同名及描述key。 | 一致 | 文件名沿用本體繁中名。 |
| 觸發條件 | EN Special Action Hit (Staggered Enemy)；zh-TW特殊動作命中（硬直中的敵人）。 | 同source item、weapon_special、melee，且檢查時target為踉蹌中的minion。 | 一致 | code讀目前目標狀態，不要求動作開始前已踉蹌。 |
| 機率數值與格式 | RAW有crit_chance placeholder，未列各級固定值。 | Own tier .125/.15/.175/.20；百分比formatter帶+。 | 一致 | 依formatter逐級重建+12.5／15／17.5／20%。 |
| 持續時間 | RAW為{time:%s}s／{time:%s}秒。 | formatter讀parent child_duration=4.5；每次合格事件處理可重設期限。 | 一致 | 靜態重建為4.5秒，刷新規則未否定固定持續。 |
| 層數、刷新、held、action-start與Mark差異 | RAW未說明層數、刷新、持用條件、暴擊旗標取樣時間或Mark攻擊。 | 有效child一層；有效事件刷新；持用source slot gate；crit於ActionSweep開始時保存；型號profile實際不同。 | 文件未涵蓋 | 屬實作補充，無明確RAW矛盾。 |
