# 閃電反射：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 有效child層數S=clamp(raw_stacks−1,0,2)，parent控制raw_stacks最多2層：初始raw1→S0，格擋後raw2→S1。tier近戰威力增量p=.10/.15/.20/.25只作用一次。

- Buff把相同stat增量加總；PowerLevel以各威力修正相加減去7個基準重複量。沒有其他加成時近戰威力倍率為1+p，即1.10／1.15／1.20／1.25。同組原有+.20再加IV+.25，倍率1.45，不是1.20×1.25=1.50。

- PowerLevel先計算power-type curve，再乘上述倍率；傷害及踉蹌另經profile、護甲及傷害consumer，+25%威力不保證最終HP傷害+25%。

- 時間由格擋處理點t₀起算，P3移除點t₀+5，其他t₀+3；實際清除在嚴格大於移除點的fixed update。電擊buff獨立3秒，interval名義.3–.8秒隨機、首interval可帶frame offset，不能直接把3秒除固定.5猜tick數。

- 電擊profile attack8／impact100是power distribution參數，非固定HP／踉蹌點數。

- 電擊interval attack_type=buff，PowerLevel不套用僅melee的melee_power_level_modifier；I–IV這個威力增量不直接增加電擊profile的威力。

- tier百分比是近戰威力增量；child預設.2會被tier覆寫，沒有額外常駐20%。

- 效果持續與再次觸發鎖定為同一3秒／5秒，不再加一段同長冷卻。

- 電擊傷害及踉蹌需完整profile結算，不將attack8解讀為每跳8HP。
