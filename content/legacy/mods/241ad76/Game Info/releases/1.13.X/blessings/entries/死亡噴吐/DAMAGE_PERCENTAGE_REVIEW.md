# 死亡噴吐：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `p` 為每有效層數值（I–IV：.05/.055/.06/.065），`n` 為有效層數（0–5），`q` 為其他適用威力修正在同一計算池的合計偏移，`B` 為攻擊威力類型曲線完成後、通用威力修正前的輸入。則威力輸入 `P=B×(1+q+n×p)`。本祝福只改通用威力輸入；傷害分布、目標護甲等後續計算仍決定最終生命傷害。五層的增量依序為 .25/.275/.30/.325。成功事件處理後，子層倒數共用且每次符合條件的擊殺刷新；達到期限時整批有效層清除。近距離檢查是 `distance_squared(hit_world_position, current_attacker_position) ≤ 12.5² = 156.25 m²`。

已核對九種 own tier/wrapper、二十一個實際 item/Mark binding、相同 key 的 parent-to-child conditional stat 覆寫、觸發距離、事件先後、堆疊上限、刷新與切換。近戰 profile 不觸發 ranged-close kill；特殊彈的直接彈丸可符合，但燃燒／電擊 buff tick 不符合。威力示例只表示進入後續傷害流程的 power input，不代表最終傷害比例。
