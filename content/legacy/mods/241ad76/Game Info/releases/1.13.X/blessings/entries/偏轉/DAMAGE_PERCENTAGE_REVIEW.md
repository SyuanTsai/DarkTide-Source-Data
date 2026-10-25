# 偏轉：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- I–IV倍率 `m = 0.775／0.75／0.725／0.7`；減免百分比 `(1 − m) × 100` 為22.5%／25%／27.5%／30%。

- 一般格擋成本在其他條件不變時再乘m，倍率同組相乘。例如其他倍率0.80與IV級0.70合計0.56，減免44%。

- `Block_cost = resolved_base_cost × general_block_cost_multiplier × general_block_cost_modifier × ranged_factors × (damage_profile.block_cost_multiplier or 1)`；ranged_factors僅遠程類型取專用multiplier與modifier，其他類型取1。

- 正常體力支付再由 `Stamina.drain` 乘 `stamina_cost_multiplier`；Block另有parry等動作例外、warp-charge支付分支。不得把本祝福誤當作那些能力的提供者。

- 遠程內圈模板端點0.75／0.25。沒有額外tweak時，解析成本 `C(t) = 0.75 + (0.25 − 0.75) × t`；例如t=0.5得到0.5，IV級乘0.7得到0.35，其他倍率均1。這是插值算例，不是完美格擋的時間判定。

- inner單側閾值 `0.33π ≈ 59.4°`，左右總扇形約118.8°。outer預設π，但遠程成本表沒有outer項目，超出inner時has_block_cost不成立。

- 三個正式型號的遠程inner成本都沒有base-stat映射調整，fallback t=0.5故解析值0.5；沒有其他成本倍率／支付改動時，I–IV成本0.3875／0.375／0.3625／0.35。

- 倍率減免與增加最大體力分開；近戰／遠程成本皆可減免。

- 成本乘算組與modifier加算組已核對，數值算例明示其他倍率前提。

- 模板端點不當作完美格擋成本；角度保留單側59.4°與總扇形118.8°。

- 若另有獨立體力消耗倍率0.80，IV級的0.35再乘0.80，最終支付0.28；此倍率不是模板插值t。
