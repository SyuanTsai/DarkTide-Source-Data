# 刻不容緩：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `B` 為 `_base_damage` 中 `_power_level_scaled_damage` 輸出的 `base_damage`，`p` 為 tier `.14/.16/.18/.20`，`n` 為本次 DamageCalculation 開始時目標的原生 `stagger.count`。本項加入 `damage_stat_buffs` 加算池的項目為 `a=p×clamp(n,0,7)`；若既有同池加算為 `q`，且 `damage_taken_stat_buffs=1`、`buff_damage_bonus=0`，`_base_damage` 的中間輸出為 `B + B×(q+a) = B×(1+q+a)`。因此 `B=100, p=.20, n=4, q=0` 時係數 1→1.8、輸出 100→180；係數增加 80 個百分點，該受控輸出相對增加 80%。`B` 是已通過該武器／攻擊基礎曲線的輸入；後續護甲、命中區及傷害階段仍會改變最終生命值扣減。

固定 SHA 下核對 8 個實作、18 個實際 Mark、全 I–IV tiers 與 wrappers。Formatter 顯示 +14%／+16%／+18%／+20%，與 tier 數值一致；但英文 RAW “Up to {damage:%s}” 把效果寫成最高為卡面值，程式在 IV 且目標 count=7 時加入 +140 個百分點到 damage_stat_buffs 加算池，英文的 +20% 上限與實作明確矛盾。這不是最終 HP 傷害 +140%。繁中 RAW 未列每計數公式或上限，屬文件未涵蓋。每次傷害先取 count 再結算，本擊新增 count 不會回溯影響本擊。
