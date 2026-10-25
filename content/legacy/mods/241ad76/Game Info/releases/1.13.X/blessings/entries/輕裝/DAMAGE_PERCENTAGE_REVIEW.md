# 輕裝：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

設 `f` 為目前剩餘耐力比例，`q` 為該級的 `conditional_threshold`。實際 gate 為：`手持相符祝福武器 AND 正在衝刺 AND q <= f`。I–IV 的 `q` 分別為 0.80、0.70、0.60、0.50；比較包含等號。

這裡沒有速度加成、傷害倍率或傷害百分比可代入。實際 sprint movement consumer 可讀取 `sprint_movement_speed`，但本祝福模板沒有寫該 stat；不能把耐力 threshold 當成加速數字。

80%／70%／60%／50% 指目前剩餘耐力占最大耐力的比例門檻，不是耐力消耗百分比，也不是傷害或移動速度加成；效果只影響實際採用 ranged Dodge 判定的可閃避攻擊。
