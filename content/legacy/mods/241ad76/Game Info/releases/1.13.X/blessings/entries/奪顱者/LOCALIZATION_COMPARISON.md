# 奪顱者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_power_on_hit`／hash`c9a0bfb2`；描述鍵`loc_trait_bespoke_increase_power_on_hit_desc`／hash`7ed40b89`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Headtaker／奪顱者。

- 文件名稱：奪顱者(Headtaker)。

- 適用武器：突擊鏈斧、戰鬥斧、戰術斧、重劍、戴維爾戰鎬、雷鎚；描述鍵`loc_trait_bespoke_increase_power_on_hit_desc`／hash`7ed40b89`。

- 英文模板：{power_level:%s} Strength for {time:%s}s on Hit. Stacks {stacks:%s} times.

- 繁中模板：命中後威力提升{power_level:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。

- **靜態重建**：RAW 英文：{power_level:%s} Strength for {time:%s}s on Hit. Stacks {stacks:%s} times.
RAW 繁中：命中後威力提升{power_level:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。

trait_value_parser.lua 的百分比／數字 formatter 將 own tier 的 decimal stat 轉成百分比、使用 + prefix 及必要小數位；I–IV 靜態重建如下（依描述模板及 formatter，並非遊戲畫面）：

| 武器實作 | 級別 | 英文靜態重建 | 繁中靜態重建 |
|---|---|---|---|
| 五個一般系列 | I | +3.5% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+3.5%，持續3.5秒，可疊加5層。 |
| 五個一般系列 | II | +4% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+4%，持續3.5秒，可疊加5層。 |
| 五個一般系列 | III | +4.5% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+4.5%，持續3.5秒，可疊加5層。 |
| 五個一般系列 | IV | +5% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+5%，持續3.5秒，可疊加5層。 |
| 重劍圖妥斯基 Mk VI／VII／IX | I | +6.5% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+6.5%，持續3.5秒，可疊加5層。 |
| 重劍圖妥斯基 Mk VI／VII／IX | II | +7% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+7%，持續3.5秒，可疊加5層。 |
| 重劍圖妥斯基 Mk VI／VII／IX | III | +7.5% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+7.5%，持續3.5秒，可疊加5層。 |
| 重劍圖妥斯基 Mk VI／VII／IX | IV | +8% Strength for 3.5s on Hit. Stacks 5 times. | 命中後威力提升+8%，持續3.5秒，可疊加5層。 |

- RAW 對 on Hit 與近戰類型、持用／item 條件、事件處理與快取先後、共用計時器細節未作說明，列「文件未涵蓋」而非勘誤。
- RAW 的 tier 數值、5 層及 3.5 秒均與對應 own tier／base wrapper 相符；數值與期限相符，省略條件列為「文件未涵蓋」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱與型號配對 | RAW name key loc_trait_bespoke_increase_power_on_hit/hash c9a0bfb2；description key loc_trait_bespoke_increase_power_on_hit_desc/hash 7ed40b89。 | 16個 binding 的 trait id、item restriction、template import/append、UI family/pattern/mark 與 RAW locale/hash 已逐筆核對。 | 一致 | 六個 trait variant 對六系列、16個實際 Mark；圖示 path 與附件 URL 分欄。 |
| 觸發條件 | RAW 說 on Hit，沒有列近戰、來源 item 或持用限制。 | Parent gate 是來源 item match、持用槽與 on_melee_hit；純 push 的 attack_type 不符合。鏈斧 sticky extra profiles 另設 skip_on_hit_proc=true。 | 文件未涵蓋 | 符合條件的初始主攻擊可以觸發；sticky 後續傷害不逐次加層。 |
| 每層數值與 formatter | RAW placeholder {power_level:%s}。 | 六份 own tier formatter 讀來源 trait 的 melee_power_level_modifier；五系列 .035/.04/.045/.05，重劍 .065/.07/.075/.08，百分比格式帶加號。 | 一致 | 同名 key 的 own tier 替換 child fallback .2，不與 .2 相加。 |
| 層數與期限 | RAW 提供 Stacks 5 times 與 time 3.5s。 | Child max5/offset−1 有效上限5；Parent uses shared inactivity timer, removes five effective stacks; capped accepted hit still refreshes timer. | 一致 | 不是逐層期限；3.5秒無新合格命中後全部移除。 |
| 快取／威力結算 | RAW 未述觸發當次何時生效或最終傷害換算。 | 命中先結算再發 on_hit；Buff 更新重建玩家 stat cache 後，後續 weapon update 才可讀新值。Power type curve 先換算，合併 modifier 再套用。 | 文件未涵蓋 | 例中 B=曲線換算後、合併威力加成前；不將 power modifier 稱作最終生命傷害百分比。 |
