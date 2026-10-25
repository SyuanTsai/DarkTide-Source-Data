# 高壓電：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- **同池公式**：令 B 為隔離後基礎主傷害、q 為其他同池比例、p 為本階級比例：D前＝B×(1＋q)，D後＝B×(1＋q＋p)，ΔD＝B×p，相對增幅＝p÷(1＋q)。

- **IV 級算例**：p＝0.25；B＝100、q＝0 時為 100→125。若已有 q＝0.20，則 120→145，絕對增加仍為 25，對原 120 的相對增幅為 20.83%，不是先把既有傷害乘 1.25。

- **範圍限制**：damage_vs_electrocuted 進通用主傷害池；後續攻擊可能另有 finesse、flat bonus、rending、背刺、側擊、特殊 profile、上限及遞減。算例只描述目標已電擊且相符武器持用時本祝福的主傷害貢獻。

- 五份 trait 均有獨立 I–IV 數值與 wrapper；tier override 取代同鍵 .5 備用值。

- 目標狀態以 live electrocuted group keyword 判定；P1、P2、盾牌 shout、push 與 P4 兩種特殊彈的狀態時序分開核對。

- 算例只描述通用主傷害加算池，沒有將 tier 比例說成整次命中的固定最終血量增幅。
