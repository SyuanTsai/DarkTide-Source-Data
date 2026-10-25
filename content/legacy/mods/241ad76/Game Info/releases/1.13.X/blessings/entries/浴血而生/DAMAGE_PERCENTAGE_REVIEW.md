# 浴血而生：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 M 為觸發處理時的有效最大韌性，p 為等級固定比例，D 為當下缺損。計算回復量=M×p；沒有禁止回復狀態時，實際回復量=min(M×p,D)。

- ignore_stat_buffs=true 跳過 toughness_replenish_modifier 與 toughness_replenish_multiplier；M 仍採目前最大韌性，其 toughness、toughness_bonus、toughness_bonus_flat 加成會被計入。

- III 級例：M=200、p=0.055、D=20，計算 200×0.055=11，實際恢復 11 點、剩 9 點缺損。IV 級例：M=200、p=0.06、D=5，計算 12 點，但實際只恢復 5 點。

- 三組武器的四級比例相同，但均已核對各自的 tier 與直接 clone；基底 0.02 只作缺少覆寫時的備援，不與 0.045／0.05／0.055／0.06 相加。

- 兩秒活躍狀態沒有冷卻限制，也不提供持續回復；回復量不隨事件次數形成額外疊層。特別注意鐵腕 Mk III 特殊彈的直接遠程擊殺與後續電擊擊殺不同。
