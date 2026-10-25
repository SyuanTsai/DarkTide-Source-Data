# 狡猾射手：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `n` 為當前有效層數（`0 ≤ n ≤ 5`），`p` 為每層 tier 值，`M₀` 為除本祝福外、原生威力修正池已合併的係數；`P` 是武器 profile 經曲線換算、尚未乘本祝福修正的中間威力輸入；PowerLevel.scale_power_level_to_power_type_curve 先完成曲線換算，再乘合併的威力修正（scripts/utilities/attack/power_level.lua:63–92）。則本祝福使 `P′ = P × (M₀ + n × p)`。其他修正皆中性時 `M₀=1`；同層 stat 是 additive multiplier，故每層相加。

| 等級 | 每層 p | 5 層時 n×p | 中性前提下的倍率 |
|---|---:|---:|---:|
| I | 0.045 | 0.225 | 1.225× |
| II | 0.05 | 0.25 | 1.25× |
| III | 0.055 | 0.275 | 1.275× |
| IV | 0.06 | 0.30 | 1.30× |

實際層數以內部層數偏移後的有效層數為準；一個 raw 占位層不提供 stat。各 tier 的 .045/.05/.055/.06 由百分比 formatter 乘 100，再依數值選 1 位或 0 位小數並套用前置 `+`，因此 UI 為 +4.5%／+5%／+5.5%／+6% 每層。此值進入遠程 attack/impact power distribution 及 profile 的 hit-mass 計算；並非保證相同比例的最終傷害、衝擊或穿透。

來源固定為 Darktide-Source-Code Release 1.13.1、commit `7e662fcda16219d775b84af50322be2e9cd9d62e`。本項核對了兩份完整 I–IV tier formatter、兩個 own parent/child wrapper、三個實際 UI binding、每個 Mark 的所有 executable action signatures、hitscan 弱點彙整、ProcBuff 條件／子層計時與遠程威力 consumers；RAW 依同資源與 locale/hash 配對。行為依實際字段和方法判定，不由 `chained` 名稱、Mark suffix 或近戰特殊名稱推定。

兩 wrapper 使用相同每層值、5 層上限與 3.5 秒共同刷新；子層只增加遠程威力。玩家範圍另區分一發 hitscan 的 aggregate 弱點事件、近戰 sweep/push event、first-hit damage-before-proc 時序及裝備槽切換／卸下生命週期。對 RAW 未描述的刷新期限及近戰排除只列「文件未涵蓋」，沒有明確翻譯矛盾，因此不建立勘誤。
