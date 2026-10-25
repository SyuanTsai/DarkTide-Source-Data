# 近身平射：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 對遠程攻擊，爆擊率先將基礎機率、全域加成、遠程專屬加成（含此祝福）與武器 handling 修正相加，再限制於0至1：`p_ranged = clamp(p_base + p_global + p_ranged_other + p_PointBlank + p_handling, 0, 1)`。

- 若該次計算沒有略過「爆擊率轉傷害」修正，之後再乘上 `(1 - critical_strike_chance_to_damage_convert)`。下方算例假設該轉換為0。

- 本祝福的 `p_PointBlank` 為I級0.14、II級0.16、III級0.18、IV級0.20；這是直接加入機率的百分點，不是把既有機率乘以1.14至1.20。近戰分支使用另一個 melee 機率欄位，因此不套用此加成。

- ProcBuff 活性判定為 `t < active_start_time + active_duration`。合格近戰擊殺在效果期間發生時，新的事件時間取代 `active_start_time`；不增加額外層數。

- 名稱中的「近身」不增加距離限制；條件是近戰攻擊造成死亡。
- I–IV 以14／16／18／20個百分點加入遠程機率池，近戰機率不加入。
- 同池加成相加後先限制0–100%，再按其他效果轉換；本祝福不提供固定傷害增幅。
