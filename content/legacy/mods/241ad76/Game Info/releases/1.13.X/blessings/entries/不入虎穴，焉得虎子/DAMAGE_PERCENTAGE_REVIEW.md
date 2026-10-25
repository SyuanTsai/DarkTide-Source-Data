# 不入虎穴，焉得虎子：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `e=0.5` 為活躍 tier 加進韌性協同率修正的值，`B` 為 Ogryn 基礎速率，`W`、`R` 為武器與其他速率倍率，`M` 為協同倍率。符合原生恢復分支（無 AI 佔用角色周圍近戰位置，或有明確 all-times coherency 解鎖）時，祝福帶來的額外速率為 `Δregen = B × W × R × e × M`；既有協同修正仍保留。之後另算 `toughness_regen_percent × max_toughness`，實際恢復量再受 `toughness_damage` 缺損封頂。

**前提算例**：`B=5/s, W=1, R=1, M=1, e=.5`；原生恢復分支可用、延遲已過、無停用或額外百分比恢復、缺損至少 2.5。此時 `Δregen=2.5/s`。這是速率額外輸入；tier formatter 的 +50% 不是最大韌性的 50%，也不是不受條件限制的最終恢復率。

- 中英描述使用同一 hash 與 formatter placeholder；I–IV 的額外恢復率格式值皆為 +50%，持續時間為 2／3／4／5 秒。
- 實際特殊命中須同一裝備 item、elite tag、melee 與 weapon-special 條件；文字沒有列出同 item 及持用條件。
- 原文未列韌性恢復分支、時間戳延遲、缺損封頂、重觸發刷新及切槽時剩餘時間；這些歸為文件未涵蓋，沒有另立數值勘誤。
