# 迅捷火焰：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

`reload_speed` 是 `additive_multiplier`，基準為 1。`action_reload.time_scale_stat_buffs` 只列 `reload_speed`，因此其他倍率與上限中性時：

- 單獨 Quickflame：`time_scale = 1 + p`，`動作時間 = phase_time ÷ time_scale`。
- 若已有相同 stat 加成 `q`：`time_scale = 1 + q + p`，不是 `(1+q) × (1+p)`。
- 實際 ActionHandler 還乘武器 handling 倍率並套上下限；phase state、已達門檻及中斷時點會影響實際秒數。

- 完整四階覆寫、wrapper、實際單一型號與兩種射擊模式已核對。

- 裝填開始保存倍率、原生階段門檻、中斷後重算及速度／時間算例已逐項複核。

- 固定來源的空匣自動裝填順序已確認，公式範例限定其他倍率與上下限中性。
