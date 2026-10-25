# 煽風點火：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

設 `p` 為本項 `ranged_impact_modifier`，`m` 為 `stagger_burning_reduction_modifier`，`P` 為曲線映射前的 Impact input，`R` 為通過既有 early-return／finesse 處理後、乘本項前的有效原生踉蹌減免。持用且目前 action 是 `action_shoot` 時：

- Impact 輸入在無其他 Impact stat 時為 `P×(1+p)`；它接著經 power-level percentage 與 min/max curve 轉為踉蹌強度。若同 stat 已有 q，則為 `P×(1+q+p)`。
- 目標已有 burning keyword 時，減免為 `R×m`；未燃燒時，本項不改變 R。Tier I–IV 的 m 為 .60/.50/.40/.30，p 為 .30/.35/.40/.45。
- 之後計算會比較 R 與踉蹌強度及池；最終 threshold score 依序使用護甲修正後的踉蹌強度、pool 及 `−0.5×R`。不應直接將 p 當成最終踉蹌強度的同比增幅。

雙語名稱／描述鍵及 hash 由同一固定 RAW resource 精確配對。英文描述的 `on Burning Enemies` 緊接踉蹌抗性子句；繁中句首「攻擊正在燃燒的敵人時」可能讓衝擊子句也看似受燃燒條件限制，但程式只以 burning keyword 門控踉蹌減免，遠程衝擊 stat 無此條件。本文件分開說明燃燒限定的減免與不受燃燒限定的遠程衝擊，並在原文比較保留這項語意範圍提示。Formatter 僅對 stagger_reduction 做一次 `100×(1−m)`；impact_modifier 直接百分比格式化並加 `+`。
