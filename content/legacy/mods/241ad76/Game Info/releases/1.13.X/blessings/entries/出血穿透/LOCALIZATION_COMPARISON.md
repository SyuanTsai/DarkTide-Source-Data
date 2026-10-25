# 出血穿透：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_bleed_on_ranged`／hash`312743c2`；描述鍵`loc_trait_bespoke_bleed_on_ranged_desc`／hash`49118e7c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Puncture／出血穿透。

- 文件名稱：出血穿透(Puncture)。

- 適用武器：矛頭爆矢槍、爆彈手槍；描述鍵`loc_trait_bespoke_bleed_on_ranged_desc`／hash`49118e7c`。

- 英文模板：Ranged hits add {stacks:%s} stacks of bleed to enemies.

- 繁中模板：遠程攻擊命中將對敵人疊加{stacks:%s}層流血效果。

- **靜態重建**：保留同hash本體中英RAW，依兩trait I–IV重建每次遠程直接命中造成傷害新增1／2／3／4層流血；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級層數 | Ranged hits add {stacks:%s} | 兩trait I–IV覆寫1/2/3/4 | 一致 | 兩種武器相同，每合格命中固定增量。 |
| 命中條件 | 遠程攻擊命中 | base2035–2050 matchingitem+damage>0+ranged | 原文未列完整條件 | 不要求暴擊或穿透，命中需傷害且目標仍存活。 |
| 直接與爆炸 | 原文未列 | RangedAction22–29/77/135；shell profiles無ranged flag | 原文未列 | 直擊觸發，子爆炸不觸發。 |
| 多目標 | 原文未列 | HitScan226與Attack542–620 | 原文未列 | 各個合格直擊目標，不限第一名。 |
| 層數與期限 | 原文未列 | bleed235–258/IntervalBuff17–64 | 原文未列 | 16cap，1.5秒後每.5秒逐層退完；刷新保留節拍。 |
