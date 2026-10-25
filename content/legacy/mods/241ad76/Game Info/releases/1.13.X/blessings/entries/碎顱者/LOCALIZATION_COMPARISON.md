# 碎顱者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_staggered_targets_receive_increased_damage_debuff`／hash`5fdffabc`；描述鍵`loc_trait_bespoke_staggered_targets_receive_increased_damage_debuff_desc`／hash`4da83b10`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Skullcrusher／碎顱者。

- 文件名稱：碎顱者(Skullcrusher)。

- 適用武器：工兵鏟、「惡魔之爪」劍、廁所鏟、惡霸棍棒、動力錘、作戰大錘&板盾、碾壓者、電擊錘、雷鎚；描述鍵`loc_trait_bespoke_staggered_targets_receive_increased_damage_debuff_desc`／hash`4da83b10`。

- 英文模板：Target receives {stacks:%s} Stack(s) of {damage:%s} Damage if already Staggered. Lasts {time:%s}s.

- 繁中模板：處於硬直狀態的目標受到{stacks:%s}層{damage:%s}傷害，持續{time:%s}秒。

- **靜態重建**：各等級沿用相同英文／繁中句型；下列以本項 own tier 覆寫 stacks、目標模板 damage 與 time 重建，並非遊戲畫面。
- **I** EN: `Target receives 1 Stack(s) of +10% Damage if already Staggered. Lasts 5s.`；ZH: `處於硬直狀態的目標受到1層+10%傷害，持續5秒。`
- **II** EN: `Target receives 2 Stack(s) of +10% Damage if already Staggered. Lasts 5s.`；ZH: `處於硬直狀態的目標受到2層+10%傷害，持續5秒。`
- **III** EN: `Target receives 3 Stack(s) of +10% Damage if already Staggered. Lasts 5s.`；ZH: `處於硬直狀態的目標受到3層+10%傷害，持續5秒。`
- **IV** EN: `Target receives 4 Stack(s) of +10% Damage if already Staggered. Lasts 5s.`；ZH: `處於硬直狀態的目標受到4層+10%傷害，持續5秒。`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發語句與目標狀態 | “if already Staggered”／「處於硬直狀態」 | base parent `on_stagger_hit`；`is_minion` 分類與 `MinionState.is_staggered`；Attack→HitReaction→on_hit 時序 | 條件核心可對應；分類與檢查時點未由 RAW 說明 | 事件處理時讀 Minion 分類及 live stagger；命中造成的新踉蹌可讓後續事件通過，但該擊傷害已結算。 |
| 每次請求層數 | `{stacks:%s}`／`{stacks:%s}層` | 各 own trait `target_buff_data.num_stacks_on_proc`；TraitValueParser | I–IV 數值一致 | 實作依 Tier I–IV 覆寫為 1／2／3／4 層。 |
| 每層 stat 與期限 | `{damage:%s}`／`{damage:%s}`；`Lasts {time:%s}s`／`持續{time:%s}秒` | target template conditional `damage_vs_staggered=0.1`、5 秒、refresh_on_stack | 每層 +10% 與 5 秒一致；實際踉蹌門檻未由 RAW 說明 | 這是 damage_vs_staggered 傷害池加算，非最終 HP 傷害百分比。 |
| 目標分類、來源與持用 | RAW 未列 Minion 分類、目標存活、來源物品或持用條件 | `on_stagger_hit`；`on_item_match`；`is_item_slot_wielded` | 文件未涵蓋 | 事件檢查 Minion 分類與 live stagger；helper 再要求目標存活、有 buff extension，並核對來源物品及持用。 |
| 目標效果上限與刷新 | RAW 未列有效上限／刷新規則 | target stat clamp 8；target max_stacks_cap 缺席；helper request max31；refresh_duration_on_stack | 文件未涵蓋 | 8 是有效 stat 層上限；31 是原始累積請求上限；到 31 的合格命中即使新增 0 層仍刷新 5 秒。 |
| 傷害計算消費條件 | RAW 未列傷害計算公式或快取時點 | DamageCalculation `target_is_staggered` 由本次 triggered stagger 或 target `count_as_staggered` 形成，並加算 attacker/target modifiers | 文件未涵蓋 | 消費端不是來源 proc predicate，也不直接呼叫 MinionState。 |
| 攻擊模式與特殊路由 | RAW 未列武器、攻擊類型或命中分流 | 21 個實際 Mark action/profile、ActionSweep sticky、impact-special explosion、Attack.execute、Slab block、profile skip_on_hit_proc | 文件未涵蓋 | 依實際事件分開判斷：可進 Attack 的揮擊／爆炸／推擊可檢查；格擋、啟動與電擊錘 sticky tick 不觸發。 |
