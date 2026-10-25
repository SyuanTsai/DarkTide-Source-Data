# 推進：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_based_on_charge_time`／hash`080e50bd`；描述鍵`loc_trait_bespoke_power_bonus_based_on_charge_time_desc`／hash`f52eeed2`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Thrust／推進。

- 文件名稱：推進(Thrust)。

- 適用武器：突擊鏈斧、戰鬥斧、工兵鏟、重劍、決鬥劍、廁所鏟、惡霸棍棒、砍刀、戴維爾戰鎬、碾壓者、電擊錘、動力劍；描述鍵`loc_trait_bespoke_power_bonus_based_on_charge_time_desc`／hash`f52eeed2`。

- 英文模板：Up to {power_level:%s} Strength based on the charge time of your heavy attacks. Stacks {stacks:%s} times.

- 繁中模板：根據重攻擊蓄力時間長短，威力最多提升{power_level:%s}，可疊加{stacks:%s}層。

- **靜態重建**：依同一 RAW 格式參數，對四個 tier 分別進行靜態重建：
- I：Up to +5% Strength based on the charge time of your heavy attacks. Stacks 3 times.／根據重攻擊蓄力時間長短，威力最多提升+5%，可疊加3層。
- II：Up to +10% Strength based on the charge time of your heavy attacks. Stacks 3 times.／根據重攻擊蓄力時間長短，威力最多提升+10%，可疊加3層。
- III：Up to +15% Strength based on the charge time of your heavy attacks. Stacks 3 times.／根據重攻擊蓄力時間長短，威力最多提升+15%，可疊加3層。
- IV：Up to +20% Strength based on the charge time of your heavy attacks. Stacks 3 times.／根據重攻擊蓄力時間長短，威力最多提升+20%，可疊加3層。
各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 描述鍵／hash f52eeed2：power_level 參數 | 12 個 own formatter 均以百分比及正號顯示自己的 melee_power_level_modifier | I–IV 每層分別 +5／10／15／20% | 一致 | 原文與 formatter 同 hash；逐級重建。 |
| 描述鍵／hash f52eeed2：stacks 參數 | child max3、offset−1；raw sentinel1有效0，raw4有效3 | 最多三個有效堆疊 | 一致 | raw4含 offset sentinel。 |
| 描述鍵：charge time of heavy attacks／重攻擊蓄力 | 實際依 windup event，不依最後 profile strength；Mk III combo windup .5 秒後可接 light sweep | 特定蓄力階段可在 light profile 前建層 | 文件未涵蓋 | 保留 RAW，例外細節列實作來源。 |
| 描述鍵：Strength／威力 | melee modifier 先影響 power input，profile 後續計算 damage/impact/cleave | tier值非最終命中傷害同率 | 文件未涵蓋 | 算例限定原生曲線後、modifier前輸入。 |
| RAW未寫持用、切換、清除及純push | base held slot條件、action clear/retain與push type | 實際狀態流程已由source查證 | 文件未涵蓋 | 保留RAW，細節寫來源與玩家條列。 |
