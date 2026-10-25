# 撕碎：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 每次非弱點近戰傷害事件新增q層，兩個武器變體I–IV均為q=1／2／3／4。施加後N=min(n+q,16)。

- 目標流血輸入威力：s=N/16，P=500s²(3−2s)。6層P=158.203125，8層P=250，16層P=500；P不是直接扣血值。

- 最後刷新後先等1.5秒，再於期限後的既有跳傷節拍開始退層。設等待節拍相位δ為0至0.5秒，T=1.5+δ+(N−1)×.5秒；8層名義5–5.5秒、16層9–9.5秒，嚴格時間比較及固定更新另有延遲。

- bleeding profile power_distribution.attack=175；護甲倍率unarmored=.5、armored/resistant=.75、player/berserker/void_shield=1、super_armor=.25、disgustingly_resilient=.5，另經PowerLevel與傷害流程。175及P均不保證相同數字的HP傷害。

- I–IV新增層數不是傷害百分比。

- IV級單次施加4層對應輸入威力78.125；疊到8層為250，16層為500。輸入另經流血傷害設定、護甲與威力縮放。

- 消退計算保留既有跳傷相位；同層數加層或滿層觸發都刷新退層等待。
