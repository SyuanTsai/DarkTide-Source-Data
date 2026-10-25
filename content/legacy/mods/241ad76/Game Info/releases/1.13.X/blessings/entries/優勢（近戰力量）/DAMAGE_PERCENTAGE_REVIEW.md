# 優勢（近戰力量）：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

`p` 是每層 `melee_power_level_modifier`（I–IV 為 .04／.06／.08／.10），`s` 為有效層數（0–3）。本項增量 `bonus=p×s`；在 PowerLevel 消費公式其餘加算因子都為 neutral 1 的前提下，modifier pool 為 `1+p×s`，乘在 curve-scaled PowerLevel。

例：Tier IV 三層 `bonus=.10×3=.30`，modifier pool 從1.00成為1.30；若曲線轉換後力量值是100，修正後為130。這是在 modifier 上增加30個百分點、相對 neutral 提升30%，不是最終傷害+30%。非 melee attack_type 不讀此 stat；最終傷害仍由目標護甲、命中部位、damage profile、finesse 及其餘因子決定。

RAW 的逐層近戰威力百分比對應 `melee_power_level_modifier`：native PowerLevel consumer 只在 `attack_type=melee` 時讀取，並在 curve-scaled PowerLevel 上相乘。其他 modifier 因子均為 neutral 時，Tier IV 三層使本階段由1.00變為1.30；此值不等於最終傷害倍率。目標護甲、命中部位、damage profile、finesse 及力量轉換曲線仍參與實際傷害計算。
