# 鉗制射擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_stacking_power_bonus_on_staggering_enemies`／hash`3ce9bdc4`；描述鍵`loc_trait_bespoke_stacking_power_bonus_on_staggering_enemies_desc`／hash`b5a354c9`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Pinning Fire／鉗制射擊。

- 文件名稱：鉗制射擊(Pinning Fire)。

- 適用武器：撕裂者自動手槍、矛頭爆矢槍、雙持自動手槍、重伐木槍；描述鍵`loc_trait_bespoke_stacking_power_bonus_on_staggering_enemies_desc`／hash`b5a354c9`。

- 英文模板：`{power_level:%s} Strength for every Enemy you Stagger. Stacks {stacks:%s} times. `

- 繁中模板：`每使一個敵人踉蹌，威力就提升{power_level:%s}，可疊加{stacks:%s}層。 `

- **靜態重建**：靜態值依實作四級 tier override 與 TraitValueParser 的百分比格式重建；每個合格踉蹌事件對應一層，堆疊參數為五。
- I EN: `+4.25% Strength for every Enemy you Stagger. Stacks 5 times.`
  I 繁中：`每使一個敵人踉蹌，威力就提升+4.25%，可疊加5層。`
- II EN: `+4.5% Strength for every Enemy you Stagger. Stacks 5 times.`
  II 繁中：`每使一個敵人踉蹌，威力就提升+4.5%，可疊加5層。`
- III EN: `+4.75% Strength for every Enemy you Stagger. Stacks 5 times.`
  III 繁中：`每使一個敵人踉蹌，威力就提升+4.75%，可疊加5層。`
- IV EN: `+5% Strength for every Enemy you Stagger. Stacks 5 times.`
  IV 繁中：`每使一個敵人踉蹌，威力就提升+5%，可疊加5層。`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每次踉蹌 | 「for every Enemy you Stagger」／「每使一個敵人踉蹌」 | base_weapon_trait_buff_templates.lua:2083–2097；check_proc_functions.lua:on_staggering_hit 543–558 | 核心一致；程式以實際 stagger_result 判定，另有明示特殊規則 | RAW 沒描述事件參數，但核心觸發語意相同。 |
| I–IV 每層威力值與五層上限 | 變數 power_level、stacks；英文格式含「Stacks 5 times」 | 四個 own trait tier ranges；trait_value_parser.lua:7–21、51–55、77–117 | 數值與層數一致 | 每層係數由 own tier override 取值，百分比 formatter 乘 100 並加 `+` 前綴。 |
| 來源武器條件 | RAW 沒列 attacking_item 條件 | check_proc_functions.lua:on_item_match 721–727 | 文件未涵蓋 | 程式另比對事件物品與祝福來源物品名稱。 |
| 目前持用條件 | RAW 沒列目前持用條件 | conditional_functions.lua:is_item_slot_wielded 43–59；ProcBuff.lua:_can_add_stat_and_keywords 247–261 | 文件未涵蓋 | 同一持用條件同時影響事件通過與威力 stat 貢獻。 |
| 期限與更新時序 | RAW 未提供時間變數或快取更新時序 | base parent child_duration2.5；weapon_trait_parent_proc_buff.lua:92–123、134–163；attack.lua:357–383 | 文件未涵蓋 | 期限和先結算命中傷害、再處理踉蹌事件是程式行為，不應補寫成 RAW 原文。 |
| 攻擊類型與特殊動作 | RAW 未限制近戰／遠程，也未列各武器特殊動作或 Bolter 爆炸 | base parent check；兩 Bolter hitscan templates；ranged_action.lua:86–139；weapon_system.lua:306–316；attack.lua:550–623 | 文件未涵蓋攻擊分類；實際 Bolter 爆炸路徑可送出 on_hit | Bolter 範圍目標以 explosion 攻擊類型和原物品執行 Attack；無 attack_type gate，但仍須該目標實際踉蹌並通過來源物品及持用條件。 |
