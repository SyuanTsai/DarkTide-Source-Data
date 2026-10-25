# 轉移反噬：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 P 為排除前已讀取的 normalized 目前反噬比例，v 為該級排除量。實際結算為 P′ = clamp(P − v, 0, 1)；轉成百分點時 v × 100。P1/P3 的 v 為 0.07、0.08、0.09、0.10；P4 為 0.065、0.07、0.075、0.08。Buff 的 tier override 取代共用 fallback 0.05。
proc callback 只設一個布林待處理標記；一次 Buff update 最多依此標記排除一次，並在排除後清除。玩家 Buff 固定更新先執行 Buff 更新，再派送本幀 proc event，所以本幀稍後到達的合格事件要等下一次 Buff 更新才能排除。

依固定 Release 1.13.1 來源 SHA、三個實際 weapon/trait binding、完整 own tier/wrapper、RAW/UI/圖示收據、force-staff 實際 action 表與共用事件/排除路徑交叉核對。數學例以 normalized 反噬比例代入並通過算術自檢；未進行遊戲內實測。
