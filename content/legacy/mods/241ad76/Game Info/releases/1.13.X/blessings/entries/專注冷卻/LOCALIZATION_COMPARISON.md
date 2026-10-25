# 專注冷卻：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_reduced_overheat_on_crits`／hash`cf4040c3`；描述鍵`loc_trait_bespoke_reduced_overheat_on_crits_desc`／hash`39b124c2`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Focused Cooling／專注冷卻。

- 文件名稱：專注冷卻(Focused Cooling)。

- 適用武器：電漿槍；描述鍵`loc_trait_bespoke_reduced_overheat_on_crits_desc`／hash`39b124c2`。

- 英文模板：{heat_percentage:%s} Heat generation on Critical Hit.

- 繁中模板：致命一擊時熱量生成{heat_percentage:%s}。

- **靜態重建**：own formatter 先以 100−round(value×100) 取得 30／40／50／60，再經百分比 formatter 與負號前綴。英文 RAW 句尾另有一個 ASCII 空格，以此文字註記保留該資訊，Markdown 不放行尾空白。四級完整句子如下：

- **I**：EN `-30% Heat generation on Critical Hit.`；繁中「致命一擊時熱量生成-30%。」

- **II**：EN `-40% Heat generation on Critical Hit.`；繁中「致命一擊時熱量生成-40%。」

- **III**：EN `-50% Heat generation on Critical Hit.`；繁中「致命一擊時熱量生成-50%。」

- **IV**：EN `-60% Heat generation on Critical Hit.`；繁中「致命一擊時熱量生成-60%。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| RAW觸發文字 | EN「{heat_percentage:%s} Heat generation on Critical Hit. 」；ZH「致命一擊時熱量生成{heat_percentage:%s}。」；loc_trait_bespoke_reduced_overheat_on_crits_desc，hash 39b124c2。 | ActionWeaponBase._check_for_critical_strike 設定 is_active；ActionShoot.start 在實際 hitscan 前檢查，ActionShoot._add_heat 把同一狀態傳入 immediate heat consumer。檔案：action_weapon_base.lua#L148-L184、action_shoot.lua#L100-L160、#L568-L580。 | 文件未涵蓋 | 原文概述致命一擊時的熱量生成，未說明遊戲以射擊的 critical-strike 狀態判斷，也未說明成功命中目標不是必要條件；完整玩家說明依實際狀態表述。 |
| I–IV數值與方向 | 描述鍵 loc_trait_bespoke_reduced_overheat_on_crits_desc／hash39b124c2；RAW四級靜態句子顯示-30%／-40%／-50%／-60% Heat generation／熱量生成；數值由heat_percentage placeholder重建。 | Buff tier conditional override取代wrapper同key 0.5 fallback；Overheat.increase_immediate僅在is_critical_strike時再乘該stat。檔案：buff.lua#L735-L747、overheat.lua#L38-L50。 | 一致 | 倍率轉為降低量後與原文正負向描述相符；不把倍率0.7直接誤寫成只降低0.7%。 |
| 作用於新增熱量或現有熱量 | 描述鍵 loc_trait_bespoke_reduced_overheat_on_crits_desc／hash39b124c2；EN/ZH皆說明致命一擊時熱量生成；沒有逐步公式。 | Overheat.increase_immediate以critical倍率改變add_percentage；共用函式將新增量加至current_percentage再clamp。檔案：overheat.lua#L40-L53、shared_overheat_and_warp_charge_functions.lua#L5-L15。 | 文件未涵蓋 | 原文沒有區分新增熱量的相對倍率與現有熱量百分點；程式不會用本stat直接減少current_percentage。 |
| 蓄力／通風例外 | 描述鍵 loc_trait_bespoke_reduced_overheat_on_crits_desc／hash39b124c2；原文沒有區分持續蓄力heat、發射時immediate heat與vent移除。 | Overheat.increase_over_time只讀overheat_over_time_amount；update_venting讀vent_overheat_speed。檔案：overheat.lua#L82-L100、#L191-L212。 | 文件未涵蓋 | 兩條路徑不消費overheat_immediate_amount_critical_strike，玩家文案明列本項範圍。 |
| 首次、期限與持用條件 | 描述鍵 loc_trait_bespoke_reduced_overheat_on_crits_desc／hash39b124c2；RAW不列持用、首次快取、期限或切換。 | plasmagun_p1_buff_templates144–152普通Buff+heldslot條件；Buff689–747 conditionalmap；ActionShootHitScan22／48–54→ActionShoot100–160。 | 文件未涵蓋 | 持用條件數值快取有效即能套用，無先觸發的爆擊層數或計時。 |
