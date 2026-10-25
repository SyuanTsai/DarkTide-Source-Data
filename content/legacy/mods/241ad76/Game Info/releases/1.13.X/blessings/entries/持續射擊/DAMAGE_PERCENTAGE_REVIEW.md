# 持續射擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令`p`為本祝福own tier係數（I–IV=.14/.16/.18/.20），`q`為同一damage bucket內其他加算的ranged_damage係數，`D`為該bucket的中性基數。符合ranged type或count_as_ranged_attack時，`D_after = D × (1 + q + p)`；不符合時本祝福不入此公式。既有+20% base wrapper被own tier覆寫，不能重複納入。後續profile曲線、護甲、距離、damage/impact分支及目標減傷另行結算。

已將RAW四級數值、own tier map與formatter、十個實際trait接線、十八個inventory/UI marks、held-slot及計數條件、法杖/霰彈槍特殊路徑、ranged damage consumer分開核對。描述中的第二至第四發是常見序列描述；程式條件實為1–3計數值，不把每個特殊/延遲模式硬映射成固定發射序號。
