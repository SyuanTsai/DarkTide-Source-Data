# 堅定打擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_recovery_on_chained_attacks`／hash`a38b21e9`；描述鍵`loc_trait_bespoke_toughness_recovery_on_chained_attacks_desc`／hash`480a6aae`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Confident Strike／堅定打擊。

- 文件名稱：堅定打擊(Confident Strike)。

- 適用武器：廁所鏟、惡霸棍棒、砍刀、戴維爾戰鎬、動力錘、作戰大錘&板盾、法務官電擊鎚、電弧鎚、法務官電擊鎚和鎮壓護盾；描述鍵`loc_trait_bespoke_toughness_recovery_on_chained_attacks_desc`／hash`480a6aae`。

- 英文模板：{toughness:%s} toughness on Chained Hit.

- 繁中模板：重複攻擊後獲得{toughness:%s}韌性。

- **靜態重建**：顯示值依各實作的等級覆寫；格式器將百分比值乘 100、加上前綴與百分號。下表保留本體句型並逐級代入實際值。

| 等級 | 英文 RAW 重建 | 繁中 RAW 重建 |
|---|---|---|
| I | +5% toughness on Chained Hit. | 重複攻擊後獲得+5%韌性。 |
| II | +6% toughness on Chained Hit. | 重複攻擊後獲得+6%韌性。 |
| III | +7% toughness on Chained Hit. | 重複攻擊後獲得+7%韌性。 |
| IV | +8% toughness on Chained Hit. | 重複攻擊後獲得+8%韌性。 |

電弧鎚 布蘭克斯 Mk III 使用較低的專屬覆寫：

| 等級 | 英文 RAW 重建 | 繁中 RAW 重建 |
|---|---|---|
| I | +4% toughness on Chained Hit. | 重複攻擊後獲得+4%韌性。 |
| II | +5% toughness on Chained Hit. | 重複攻擊後獲得+5%韌性。 |
| III | +6% toughness on Chained Hit. | 重複攻擊後獲得+6%韌性。 |
| IV | +7% toughness on Chained Hit. | 重複攻擊後獲得+7%韌性。 |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 數值句型與顯示 | 英文 RAW `+{toughness:%s} toughness on Chained Hit.`；繁中 RAW `重複攻擊後獲得{toughness:%s}韌性。`（desc key／hash 480a6aae，同資源 locale 0/16）。 | 本體格式：trait_value_parser.lua `format_percentage` 8–32；實作覆寫及前綴：各 weapon_traits_bespoke_<wid>.lua tiers。 | 符合 | 各 tier 值經百分比格式化並帶 + 前綴；本體中英模板與重建句型一致。 |
| 命中與連擊條件 | RAW 只寫英文 `on Chained Hit`／繁中「重複攻擊後」；未列命中計數、目標存活快照、連擊快照或內部計數器。 | `base_weapon_trait_buff_templates.lua` `toughness_recovery_on_chained_attacks` 711–753；`action_sweep.lua` 1348–1354、1398–1404、1416–1437、`_handle_exit_procs` 944–963。 | 文件未涵蓋 | Sweep 在傷害前快照命中目標存活狀態；該 Sweep 隨後擊殺仍計數，且不要求正生命值傷害；RAW 未涵蓋這些細節。 |
| 恢復基準 | RAW 使用 `toughness`，未指出以最大值或缺少值作基準，也未說明上限。 | `PlayerUnitToughnessExtension.recover_percentage_toughness` `player_unit_toughness_extension.lua` 253–280；`max_toughness` 79–89。 | 文件未涵蓋 | 程式以最大韌性乘 tier 值，實際恢復不超過缺少韌性；恢復停用時為 0。 |
| 恢復加成倍率 | RAW 未提及韌性恢復 stat 修正。 | 基礎模板 745–750 以 `ignore_stat_buffs=true` 呼叫；consumer 261–270 只有 false 才套用 replenishment 修正。 | 文件未涵蓋 | 本祝福呼叫不乘韌性恢復倍率；最大韌性本身仍使用當前計算值。 |
| 次數、期限與冷卻 | RAW 未描述次數、期限、層數或冷卻。 | 基礎模板 711–753 是單一 ProcBuff 事件處理並直接回復韌性，沒有計時器或持續 stat 層。 | 文件未涵蓋 | 每個後續合格掃掠事件可直接恢復；沒有獨立限時增益、冷卻或可疊加效果。 |
| 手持與切槽 | RAW 未說明裝備槽或切槽。 | 基礎模板 conditional 719；`ConditionalFunctions.is_item_slot_wielded` 43–59；`PlayerUnitWeaponExtension` 633–680、743–785。 | 文件未涵蓋 | 事件需來源武器在手持槽；切槽不清除 on_equip Buff，實際卸除會移除它。 |
