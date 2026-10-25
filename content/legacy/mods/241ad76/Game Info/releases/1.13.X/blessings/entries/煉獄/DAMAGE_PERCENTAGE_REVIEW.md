# 煉獄：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- `x = current_flamer_assault_stacks / 31`；`smoothstep = x² × (3 − 2x)`；`power_level = 500 × smoothstep`。分母是目標效果cap31，與祝福tier cap不同。

- 12層的輸入為166.761773690；15層為237.907421705。burning profile attack power distribution400，再依PowerLevel、burning_damage、裝甲等結算；輸入不等於固定HP傷害。

- 其他來源可把同一 `flamer_assault` 堆至31層；Infernus只補至本級cap，不會改寫目標模板cap或替超過本級cap的現有層數刷新。

- 最後刷新後N層的名義清空時間為 `D + δ + (N − 1) × 0.5` 秒，`D = 4 × burning_duration`，δ為期限後第一個節拍相位，約0–0.5秒；無持續時間加成時，N12約9.5–10秒，N15約11–11.5秒，另有固定更新步長。

- 刷新會延後消退，節拍相位繼續；到期節拍先打當前N層的傷害再減為N−1。

- 本祝福沒有傷害百分比增益；新增層數與非線性燃燒威力分開計算。

- 全部正式變體的tier上限已逐一核對，磷光差異保留。

- 多來源共用層數、超過本級cap不刷新與按節拍逐層移除均納入結算。

- 4秒為基礎期限；燃燒持續時間倍率納入引擎公式，數值算例明示無此加成。
