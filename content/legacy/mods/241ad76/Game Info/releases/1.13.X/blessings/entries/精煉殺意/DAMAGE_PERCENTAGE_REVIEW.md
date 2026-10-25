# 精煉殺意：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 F 為 base_finesse_damage，即此額外部分在弱點／暴擊／精準加成乘區前的值；S 為不含本祝福、已合併其他適用增量的原乘數；t 為 own tier 的 0.525／0.55／0.575／0.60。本項條件成立時，額外部分為 F×(S+t)，增量為 F×t；不成立時仍為 F×S。
- 只有 S=1 時，才可把額外部分寫成 F×(1+t)。已有同乘區增量時不可寫成 F×S×(1+t)。
- 令 B 為不受此乘區直接影響的其他傷害部分，在後續修正均不改變結果的控制算例中，最終傷害由 B+F×S 變為 B+F×(S+t)。實際結算之後仍有背刺／側襲、部位、效果傷害、護甲類型修正、遞減與力場等分支，不能把加成百分比當成固定最終增幅。
- 消費端在 hit_weakspot 分支內另外要求 attack_type==melee 與 target BuffExtension 的 keywords.toxin；stat 類型 additive_multiplier，own tier取代conditional fallback1.0，再以stat base1合成數值。formatter取own override的fraction，percentage乘100且加號prefix；四級RAW重建保持精確配對。

- 機制範圍只含 inventory 綁定的骨鋸 外科醫師 型號4。傷害消費端同時檢查弱點、melee 攻擊類型及目標毒素 keyword。

- 加成作用於弱點／精準額外傷害乘區。只有弱點或只有毒素、非近戰攻擊、推擊本體都不符合；同一武器的推擊後揮砍另行判定。

- RAW 沒有逐一列出近戰類型、held-slot 條件、toggle 與追加攻擊路由，這些屬文件未涵蓋。沒有已證明的 RAW—實作數值矛盾，errata 留空。

- 原F×(1+t)隔離算例以S=1為限；正式公式及控制算例另納已有同乘區增量與其他基礎部分。增量F×t與最終傷害相對增幅分開。
- 首次上毒需經排隊coating callback與target keyword cache更新，無同hit追溯或同frame下一tick保證。
