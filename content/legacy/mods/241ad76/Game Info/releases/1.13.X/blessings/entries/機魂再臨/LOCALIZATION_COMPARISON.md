# 機魂再臨：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_refund_charge_on_weapon_special_weakspot_kill`／hash`b760a1fc`；描述鍵`loc_trait_bespoke_refund_charge_on_weapon_special_weakspot_kill_desc`／hash`f87fcde6`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Machine Spirit Resurgent／機魂再臨。

- 文件名稱：機魂再臨(Machine Spirit Resurgent)。

- 適用武器：機械神教動力劍；描述鍵`loc_trait_bespoke_refund_charge_on_weapon_special_weakspot_kill_desc`／hash`f87fcde6`。

- 英文模板：Refund a Special charge on weapon Special weakspot kill. Can occur only every {time:%s}s.

- 繁中模板：武器特殊弱點擊殺時，退還一道特殊充能。每{time:%s}秒只能觸發一次。

- **靜態重建**：I–IV 依同一 RAW 占位符與各級覆寫重建：

- I — EN: Refund a Special charge on weapon Special weakspot kill. Can occur only every 5.5s.｜繁中：武器特殊弱點擊殺時，退還一道特殊充能。每5.5秒只能觸發一次。
- II — EN: Refund a Special charge on weapon Special weakspot kill. Can occur only every 4.5s.｜繁中：武器特殊弱點擊殺時，退還一道特殊充能。每4.5秒只能觸發一次。
- III — EN: Refund a Special charge on weapon Special weakspot kill. Can occur only every 3.5s.｜繁中：武器特殊弱點擊殺時，退還一道特殊充能。每3.5秒只能觸發一次。
- IV — EN: Refund a Special charge on weapon Special weakspot kill. Can occur only every 2.5s.｜繁中：武器特殊弱點擊殺時，退還一道特殊充能。每2.5秒只能觸發一次。

RAW占位符為 `{time:%s}`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發條件，description hash f87fcde6 | RAW：weapon Special weakspot kill／武器特殊弱點擊殺 | 死亡結果、weakspot及weapon_special三條件 | 一致 | 程式逐項檢查此條件。 |
| 返還一道特殊充能 | 英中RAW皆描述返還一道 | 回呼+1並以最大6截頂 | 文件未涵蓋 | 文本未說明滿充時的上限。 |
| {time:%s} 冷卻占位符 | I–IV 靜態代值為5.5／4.5／3.5／2.5秒 | tier cooldown_duration同值，事件處理後起算 | 一致 | number formatter直接輸出override值。 |
| 持用槽和實際攻擊物品 | RAW沒有逐列限制 | 處理時檢查目前持用槽及attacking_item.name | 文件未涵蓋 | 省略細部限制，非明確矛盾。 |
| 武器本身自然充能與切換 | RAW未描述 | activation消耗/排程自然回復；祝福另行返還；切出停用特殊狀態但留充能 | 文件未涵蓋 | 文本未涵蓋程式互動。 |
