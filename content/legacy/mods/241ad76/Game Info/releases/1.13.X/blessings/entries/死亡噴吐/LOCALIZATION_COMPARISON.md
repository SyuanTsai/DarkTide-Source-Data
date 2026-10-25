# 死亡噴吐：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_power_on_close_kill`／hash`00d6e1d9`；描述鍵`loc_trait_bespoke_increase_power_on_close_kill_desc`／hash`fe798d47`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Deathspitter／死亡噴吐。

- 文件名稱：死亡噴吐(Deathspitter)。

- 適用武器：步兵自動槍、槍托自動槍、偵察鐳射槍、雙鏈重型機槍、戰鬥霰彈槍、雙管霰彈槍、獵人霰彈槍、滅絕者霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_increase_power_on_close_kill_desc`／hash`fe798d47`。

- 英文模板：{power_level:%s} Strength for {time:%s}s on Close Range Kill.

- 繁中模板：近戰攻擊擊殺後威力提升{power_level:%s}，持續{time:%s}秒。

- **靜態重建**：依同一 RAW 描述鍵 `loc_trait_bespoke_increase_power_on_close_kill_desc`、同一 hash `fe798d47`，以及百分比 formatter 的 `+` 前綴與 time formatter 逐級代入。八個變體使用 3.5 秒；雙管霰彈槍 P2 使用 5 秒：

- **I（0.05）**：其他八種 EN `+5% Strength for 3.5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+5%，持續3.5秒。`；雙管霰彈槍 P2 EN `+5% Strength for 5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+5%，持續5秒。`
- **II（0.055）**：其他八種 EN `+5.5% Strength for 3.5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+5.5%，持續3.5秒。`；雙管霰彈槍 P2 EN `+5.5% Strength for 5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+5.5%，持續5秒。`
- **III（0.06）**：其他八種 EN `+6% Strength for 3.5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+6%，持續3.5秒。`；雙管霰彈槍 P2 EN `+6% Strength for 5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+6%，持續5秒。`
- **IV（0.065）**：其他八種 EN `+6.5% Strength for 3.5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+6.5%，持續3.5秒。`；雙管霰彈槍 P2 EN `+6.5% Strength for 5s on Close Range Kill.`／繁中 `近戰攻擊擊殺後威力提升+6.5%，持續5秒。`

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發用詞 | 英文 RAW 為 “Close Range Kill”；繁中同 hash 寫「近戰攻擊擊殺後」。 | `check_proc_functions.lua:306–318`；實際九種 own binding 的 ranged action 見 coverage。 | 明確矛盾 | 條件要求 ranged attack 或明確 count_as_ranged_attack 的擊殺，不是近戰武器擊殺；繁中用詞應理解/修正為「近距離擊殺」。 |
| 距離及來源點 | 兩語描述均只說 close range，未標數值或距離基準。 | `check_proc_functions.lua:777–792`；`damage_settings.lua:18–24`。 | 文件未涵蓋 | 命中點至攻擊者當前位置，距離平方 ≤156.25 m²，即 ≤12.5 m；邊界含等號。 |
| I–IV 格式值 | 同一描述 key/hash 的 `{power_level:%s}` 和 `{time:%s}`。 | 九份 own tier/formatter ranges；`trait_value_parser.lua:8–32`。 | 一致 | formatter 加百分比符號和 `+`，tier 為 +5／+5.5／+6／+6.5%；時間八組3.5秒、雙管P2為5秒。 |
| 層數與到期 | 兩語 RAW 未說明每次合格事件增加層數、五層上限、重新觸發刷新或到期清層。 | Base parent/child `base_weapon_trait_buff_templates.lua:1358–1385`；`weapon_trait_parent_proc_buff.lua:56–182`；`buff.lua:397–429`。 | 文件未涵蓋 | 每個接受的 on_kill 事件加一有效層，最多五層；每次刷新共用倒數，滿層仍能刷新，到期整批移除。 |
| 射擊、特殊與持用條件 | 描述未列 exact-item、持用、特殊彈的直接/延遲事件條件。 | `check_proc_functions.lua:306–318,721–727`；coverage action matrix；P4/P1 tick source blocks。 | 文件未涵蓋 | 特殊彈直接 ranged 命中仍判定；近戰/推擊不觸發。P1燃燒與P4 M1電擊 buff tick 為 buff attack 且無 ranged opt-in，不觸發；P4 M2破甲無傷害 tick。 |
