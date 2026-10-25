# 利刃攻勢：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

本效果向撕裂計算池提供每層加值。令 `p` 為該型號／等級每層值、`n` 為有效層數（0–4）、`R_other` 為其他來源的合計，則本效果貢獻為 `n×p`，總撕裂池按原生規則封頂為 `R=min(1,R_other+n×p)`。

傷害端再依 `armor_damage_modifier` 與目標護甲套用原生撕裂分支；`n×p` 不是最終生命傷害倍率。詳細受控代入見算例。

RAW 的百分比、時間和層數 placeholder 可由兩個 own trait formatter 精確重建；I–IV 都與固定語系字串一致，沒有需要列入勘誤的數值衝突。RAW 沒有展開事件目標序號、每揮擊一次的閂鎖、持有條件、刷新方式或撕裂後續護甲公式，這些屬實作細節未涵蓋。父階級 `stat_buffs.melee_rending_multiplier` 透過 parent context 覆寫子層 fallback，而不是在 fallback .05 上再疊一份。
