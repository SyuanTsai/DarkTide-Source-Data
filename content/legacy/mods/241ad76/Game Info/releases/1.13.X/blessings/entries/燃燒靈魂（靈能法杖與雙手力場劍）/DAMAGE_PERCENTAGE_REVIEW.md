# 燃燒靈魂（靈能法杖與雙手力場劍）：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

層數新增量：`add = min(requested_stacks, max(tier_target_cap − current_warp_fire_stacks, 0))`。Staff I–IV `(requested, cap) = (1,6), (2,6), (3,6), (4,6)`；Force Greatsword 一般 `(requested, cap) = (1,3), (2,6), (3,9), (4,12)`；Warpshock Slash 每次 special request 為 `1, 1, 2, 3`，並使用同級巨劍 cap。若 `current == cap`，helper 走期限 refresh；若 `current > cap`，不加層也不 refresh。

`warp_fire` 的週期攻擊基礎 Power Level 依目前總層數 `S` 計：`x = S / 31`、`smoothstep(x) = x²(3 − 2x)`、`power_level = 500 × smoothstep(x)`。例如 `S=6` 時約為 `48.94`。這是輸入 profile 的 Power Level，不是最終生命傷害。


本文件把 RAW「每次暴擊新增層數」與程式內「目標總層數上限」分開。法杖三/四個動作家族的接線按實際武器 Mark 個別盤點；不把法杖 bash 近戰或獨立爆炸全域事件誤當合格路徑。Force Greatsword 的普通特殊近戰掃掠仍可依一般 melee critical 觸發；只有真實 Warpshock Slash profile 使用較低的 special request。命中要求與目標 Buff 存在等條件以具體 wrapper／Attack 路徑說明，不補寫 RAW 未有的限制字句。
