# 猛撞：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_crit_chance_on_push`／hash`71cd141b`；描述鍵`loc_trait_bespoke_crit_chance_on_push_desc`／hash`2141b458`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Bash／猛撞。

- 文件名稱：猛撞(Bash)。

- 適用武器：撬棍、砍刀；描述鍵`loc_trait_bespoke_crit_chance_on_push_desc`／hash`2141b458`。

- 英文模板：`{crit_chance:%s} Critical Chance for {time:%s}s on Pushing Enemies. `（RAW 尾端保留一個空白。）

- 繁中模板：推開敵人後{crit_chance:%s}致命一擊機率，持續{time:%s}秒。

- **靜態重建**：**名稱**：RAW key loc_trait_bespoke_crit_chance_on_push 的英文值是 Bash、zh-TW 值是「猛撞」，locale hash 為 71cd141b。完整名称依 pattern／family／mark 的 UI localization 欄位組合；四個實際 mark 綁定見 ui_bindings。

- **描述數值**：RAW 描述 key loc_trait_bespoke_crit_chance_on_push_desc 的 hash 為 2141b458，模板為 {crit_chance:%s} Critical Chance for {time:%s}s on Pushing Enemies.。兩種 trait 定義均把 crit_chance 指向 trait_override.proc_stat_buffs.melee_critical_strike_chance，formatter 顯示百分比並加 + 前綴；撬棍 I–IV 重建 +5%、+7.5%、+10%、+12.5%，砍刀重建 +7.5%、+10%、+12.5%、+15%。

- **時間**：time 取 wrapper buff_template.active_duration，兩種 wrapper 都為 3 秒，重建每階級顯示 3s。此靜態重建不代表遊戲中觸發時的畫面截圖，也不把 RAW 以外的事件條件塞入詞條文字。

- **RAW 範圍**：RAW 沒有說明弱推、目標數、傷害門檻、刷新、切換持用槽或推擊本身不能爆擊；這些由程式流程補充。RAW 的 Pushing Enemies 是字串原文，不足以證明 filter 的所有受體都限定為敵人。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發 | RAW：{crit_chance:%s} Critical Chance for {time:%s}s on Pushing Enemies.；zh-TW key hash 2141b458。 | ActionPush 在整次推擊後只送 on_push_finish；wrapper 要求 num_hit_units > 0，PushAttack 計數受 collision/filter 與 damage profile 約束。 | 部分一致 | 玩家文案寫「推擊處理到至少一個目標」；推空不觸發，弱推可觸發，不推定為敵人專屬。 |
| 階級數值 | RAW 以 {crit_chance:%s} 顯示 Critical Chance，未說明累加基礎值。 | 兩個完整 I–IV tier 都覆寫 melee_critical_strike_chance；ProcBuff 使用 tier 提供的整張 stat table。 | 補充 | 撬棍 +5／7.5／10／12.5 pp；砍刀 +7.5／10／12.5／15 pp；覆蓋 wrapper 1%，不另加。 |
| 持續時間 | RAW 參數 {time:%s}s。 | 兩個 wrapper 的 active_duration 均為 3 秒。 | 一致 | 所有階級持續 3 秒。 |
| 重觸發 | RAW 未述目標數、刷新或冷卻。 | 每次 ActionPush 一個 finish event；有效事件可在有效期間重觸發，刷新計時；無 cooldown/stack。 | 補充 | 同一次推擊多目標只觸發一次；再次有效推擊刷新 3 秒。 |
| 切換武器 | RAW 未述持用槽、切換或計時。 | on_equip 安裝的 trait buff 在普通切換中保留；held-slot 條件門控 proc 與 stat，計時照走。 | 補充 | 離手時不享加成，切回只用剩餘時間；其他武器推擊不刷新。 |
| 推擊爆擊 | RAW 未述推擊本身或觸發時序。 | PushAttack 呼叫 Attack.execute 未傳 is_critical_strike；預設 false；猛撞在 on_push_finish 後才生效。 | 補充 | 推擊本身不會爆擊；後續近戰攻擊可使用加成。 |
| 特殊動作 | RAW 未區分武器 action 類型。 | 撬棍模式切換為 toggle_special；Combatblade 上勾拳各 mark 都是 sweep，不是 push。 | 一致 | 上勾拳不觸發但可受已生效近戰爆擊率加成。 |
| 翻譯 | RAW 名稱 Bash，zh-TW locale hash 71cd141b；描述 locale hash 2141b458。 | Referneces/Translation.md 將 Bash 對應為「猛撞」。 | 一致 | 使用「猛撞」；不改稱「猛擊」。 |
