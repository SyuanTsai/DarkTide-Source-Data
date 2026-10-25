# 精確打擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- `n = clamp(floor(max(0, now - max(aim_start_t, fire_last_t)) / Δ), 0, 10)`。

- `Surgical bonus = n × 0.10`，即每步 +10 個百分點；10 步上限是 +100 個百分點。

- `P_final = clamp(P_base + P_generic + P_mode + P_handling + Surgical bonus, 0, 1) × (1 - crit_to_damage_conversion)`。其他來源與轉換按爆擊 consumer 的實際順序處理。

- 10Δ 表示在持續瞄準且沒有新射擊時達上限所需時間；射擊後以新的 `fire_last_t` 重新計算。

- 一般爆擊判定將最終機率四捨五入到兩位小數，使用偽隨機分布；強制爆擊或禁止爆擊的攻擊按各自覆寫規則處理，自動連射可以沿用同一輪已判定的狀態。

- 每步加成固定為10個百分點，各等級提升的是累積速度。

- 滿步提供100個百分點，再與原有爆擊率相加並封頂；不代表生命值傷害增加100%。

- 20%原有機率加5步50個百分點，合計70%；相對增加250%指機率池。
