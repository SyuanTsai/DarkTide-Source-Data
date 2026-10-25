# 凌遲：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_power_on_weapon_special_hit`／hash`6c7642c3`；描述鍵`loc_trait_bespoke_increase_power_on_weapon_special_hit_desc`／hash`51c41ac8`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Torment／凌遲。

- 文件名稱：凌遲(Torment)。

- 適用武器：戴維爾戰鎬；描述鍵`loc_trait_bespoke_increase_power_on_weapon_special_hit_desc`／hash`51c41ac8`。

- 英文模板：{power_level:%s} Strength for {time:%s}s on Weapon Special Hit.

- 繁中模板：武器特殊攻擊命中時威力提升{power_level:%s}，持續{time:%s}秒。

- **靜態重建**：固定描述鍵 `loc_trait_bespoke_increase_power_on_weapon_special_hit_desc`；power_level 由 parent tier 以 percentage 與 + 前綴提供，time 由 parent 的 child_duration 以 number 提供。

- **I 級**：EN `+12% Strength for 3.5s on Weapon Special Hit.`；zh-TW `武器特殊攻擊命中時威力提升+12%，持續3.5秒。`

- **II 級**：EN `+16% Strength for 3.5s on Weapon Special Hit.`；zh-TW `武器特殊攻擊命中時威力提升+16%，持續3.5秒。`

- **III 級**：EN `+20% Strength for 3.5s on Weapon Special Hit.`；zh-TW `武器特殊攻擊命中時威力提升+20%，持續3.5秒。`

- **IV 級**：EN `+24% Strength for 3.5s on Weapon Special Hit.`；zh-TW `武器特殊攻擊命中時威力提升+24%，持續3.5秒。`

以上為固定 RAW placeholder 的靜態 I–IV 代入；tier formatter 每級提供 signed percentage，時間 formatter 提供 3.5；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 特殊攻擊命中 | EN 與繁中 RAW 都指定武器特殊攻擊命中。 | own wrapper 改用 on_melee_weapon_special_hit；三型號特殊 profile 明列 weapon_special=true，ActionSweep 傳入 melee。 | 三型號上勾／勾拉都符合，普通斬擊與純推擊不符合。 | 一致。base 的 item-match 檢查已被覆寫，不另外套用。 |
| 威力與等級 | RAW power_level placeholder；I–IV 重建為 +12%／+16%／+20%／+24%。 | parent stat_buffs tier 傳入 child，以同 key 替換 conditional fallback；PowerLevel 只對 melee 讀取。 | 一個有效層；原生威力曲線後同類修正相加。 | 一致；最終傷害、踉蹌及順劈結果比例是文件未涵蓋的範圍。 |
| 期限 | RAW time placeholder 重建 3.5 秒。 | parent child_duration=3.5，remove_t<t；滿層合格命中仍從事件處理 t 刷新。 | 再次命中延長同一效果，不疊高。 | 期限一致；刷新、嚴格到期邊界與快取時序屬文件未涵蓋。 |
| 首次生效與攻擊 | RAW 沒有說明首次結算及後續攻擊。 | Attack 的傷害與 HitReaction 先於 on_hit；ActionSweep 保存初始順劈預算。 | 首次命中不回溯；後續傷害／衝擊讀值可受益，原揮擊的預算不因觸發重算。 | 文件未涵蓋，沒有把省略稱為誤譯。 |
| 切換與移除 | RAW 沒有列切換或移除條件。 | held slot 同時限制 proc 與 child stat；parent retained，期限繼續；parent destroy 移除 externally-controlled child。 | 切出暫停加成，期限內切回可恢復剩餘效果；移除 parent 清除 child。 | 文件未涵蓋。 |
