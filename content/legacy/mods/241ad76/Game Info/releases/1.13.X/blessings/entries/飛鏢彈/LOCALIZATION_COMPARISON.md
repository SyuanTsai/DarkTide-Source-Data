# 飛鏢彈：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_bleed_on_crit_ranged`／hash`d1d03cff`；描述鍵`loc_trait_bespoke_bleed_on_crit_ranged_desc`／hash`9a66212b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Flechette／飛鏢彈。

- 文件名稱：飛鏢彈(Flechette)。

- 適用武器：撕裂槍、戰鬥霰彈槍、雙管霰彈槍、獵人霰彈槍；描述鍵`loc_trait_bespoke_bleed_on_crit_ranged_desc`／hash`9a66212b`。

- 英文模板：{stacks:%s} Bleed Stacks on Critical Hit.

- 繁中模板：致命一擊後疊加{stacks:%s}層流血。

- **靜態重建**：保留本體RAW名稱與描述；依I–IV固定增量重建每目標每次射擊3／4／5／6層流血；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級層數 | {stacks:%s} Bleed Stacks | 四個trait I–IV覆寫 | 一致 | 每目標每次合格射擊新增3／4／5／6層。 |
| 暴擊條件 | Critical Hit／致命一擊 | on_pellet_hits + damage>0 + critical flag | 原文未列完整條件 | 指彈丸射擊暴擊造成傷害，不要求擊殺。 |
| 彈丸數量 | 暴擊命中 | ActionShootPellets696–721 | 原文未列 | 按目標彙總，同次射擊同一目標只施加一組，不乘彈丸數。 |
| 多目標 | 原文未列 | each hit_unit sends one event | 原文未列 | 各名合格存活目標各獲得層數，不限第一名。 |
| 上限與消退 | 原文未列 | bleed/IntervalBuff/BuffExtension | 原文未列 | 最多16層，1.5秒後按原有0.5秒跳傷節拍逐層移除。 |
| 重新施加 | 原文未列 | Buff.set_start_time及滿層刷新 | 原文未列 | 刷新退層期限，不重排跳傷節奏。 |
