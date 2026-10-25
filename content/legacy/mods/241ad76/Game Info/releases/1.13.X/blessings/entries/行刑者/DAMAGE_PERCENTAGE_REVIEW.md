# 行刑者：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 p 為每層值 (0.045/0.05/0.055/0.06)，n 為觸發後仍有效的層數，0<=n<=5。child 以 additive_multiplier 累加各層，威力倍率 M=1+n*p。Tier IV 五層 M=1.30；Tier I–IV 滿層分別為1.225、1.25、1.275、1.30。PowerLevel.scale_power_level_to_power_type_curve 先依 power type 曲線縮放，再套用一般 power_level_modifier；DamageProfile 接著把威力分配到 damage/impact 等輸出，Cleave 的 hit-mass 及 stagger 也讀此類 power。算例的300明確是假定已完成 power-type curve、尚未套用行刑者與後續 damage profile 分配的威力輸入。

其他同階段威力來源加算：M=1+n*p+b_other。b_other=0.20、IV五層時M=1.50，對比原倍率1.20的相對威力收益為25%；不是1.20×1.30。父級tier override會取代child模板預設0.05，而非再加0.05。

- 三個實際接入變體的每層值、5層上限與2.5秒期限一致。

- 首次合格近戰弱點命中加層，逐目標事件可分別加層；首個非弱點近戰目標清層。

- 滿層合格命中仍刷新，揮空不立即清層，切出效果停用但期限繼續。

- 威力修正在威力類型曲線後套用，後續仍經傷害、踉蹌與順劈各自分配。

- 護盾霰彈手槍的相似程式定義缺對應trait item，不混入三個已接入近戰變體。
