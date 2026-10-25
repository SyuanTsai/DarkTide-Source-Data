# 優化冷卻：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 `p` 為當級倍率、`n=clamp(combo_count,0,5)`、`q` 為其他 `overheat_amount` 乘數積，`s` 為動作階段倍率。該次生熱為 `H×q×p^n×s`。射擊的 `s` 是 `overheat_immediate_amount`（暴擊另乘critical modifier）；持續蓄力的 `s` 是 `overheat_over_time_amount`。系統之後把meter限制在0–1；自然衰減與vent分別使用其他stat，不在此式內。

- H 在算例用 normalized 比例 0.20，換算為熱能表 20 百分點；IV 五階相對減少 1−0.90⁵=0.40951。現有熱能表讀數、百分點差額與生熱相對降幅分開。

- 各級 .96／.94／.92／.90 取代 wrapper 同鍵 .9 備用值；每有效階逐次相乘，不另加備用值，也不把五階當五次百分比加法。

- 單一 stepped buff 的物理基準層加 offset−1 為零，效果由實際 combo 計數決定。原文的五層上限不能推定有獨立持續時間。

- 修正新生熱與自然散熱、特殊排熱、蓄力時間分開；首次生效須等目前階數進入數值快取。熱能表差額以百分點表示，相對降幅用百分比表示。
