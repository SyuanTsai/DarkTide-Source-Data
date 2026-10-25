# 粉碎（Pulverise）：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 對一次 melee 或 ranged 爆擊判定，未套用 conversion 前的機率為 `p = clamp(p_base + p_global + p_type + p_handling, 0, 1)`；`p_type` 是該檢定的 melee 或 ranged 加成。粉碎加入 `p_global = 0.10／0.15／0.20／0.25`，所以它是直接加百分點，不是乘上1.10至1.25。

- 若此檢定沒有略過機率轉傷害修正，最終值為 `p_final = p × (1 − critical_strike_chance_to_damage_convert)`。以上算例明確假設 conversion 為0。

- ProcBuff 於 `t < active_start_time + 3` 時間有效。符合 item、slot、death 與 melee 條件的再次擊殺會用新事件時間更新 `active_start_time`；不將新時間加在原有剩餘秒數上，也不增加 stat stack。切出只令 slot condition 為 false，不改寫計時。

- 一般爆擊判定將最終機率四捨五入至兩位小數，使用偽隨機分布；強制或禁止爆擊按實際攻擊覆寫處理，榴彈爆炸沿用發射結果。

- **百分點**：四級加成直接加入通用爆擊率；不額外加入 base 的5個百分點，也不是傷害倍率。

- **時間勘誤**：靜態描述2秒，實際計時3秒。切出時暫停加成，期限照常倒數。

- **攻擊來源**：觸發要求同一臂鎧近戰擊殺；普通榴彈可沿用射擊爆擊結果，特殊拳擊爆炸固定非爆擊。
