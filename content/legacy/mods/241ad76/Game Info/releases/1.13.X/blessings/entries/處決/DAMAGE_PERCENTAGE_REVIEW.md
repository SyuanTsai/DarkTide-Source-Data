# 處決：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- **公式**：D前＝B×(1＋q)，D後＝B×(1＋q＋p)，增加量＝B×p，相對增幅＝p÷(1＋q)。B 為隔離主傷害，q 為其他同池淨加值，p 為本階級比例。

- **算例**：IV 級 B＝100、q＝0 為 100→120；q＝0.30 為 130→150，增加 20、相對約 15.38%。I–IV 在 q＝0 時為 105／110／115／120。

- **條件**：目標已符合踉蹌判定且武器持用；不含額外傷害部分、平加、破甲、背刺、側擊、轉換、上限或遞減，後續因素中性。最終整擊傷害保留其他結算，不能一律直接乘 1.05–1.20。

- 五個固定來源 tier 定義一致 I–IV `.05/.10/.15/.20`，wrapper clone 相同 `.20` held-slot conditional；tier override 取代基底。
- 七個 inventory bindings 與 5 variants 在 item metadata、weapon template trait_category、直接 trait wiring 及 family/pattern/mark 三段 UI 組名相符。
- Runtime consumer 是通用 DamageCalculation 的 `damage_vs_staggered` additive damage-stat，不是整個最後命中倍率；首次新踉蹌命中不回溯套用。
