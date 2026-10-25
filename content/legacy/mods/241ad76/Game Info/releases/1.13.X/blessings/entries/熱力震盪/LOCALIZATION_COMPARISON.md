# 熱力震盪：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_lower_overheat_gives_faster_charge`／hash`da057b0d`；描述鍵`loc_trait_bespoke_lower_overheat_gives_faster_charge_desc`／hash`078227e8`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Volatile／熱力震盪。

- 文件名稱：熱力震盪(Volatile)。

- 適用武器：電漿槍；描述鍵`loc_trait_bespoke_lower_overheat_gives_faster_charge_desc`／hash`078227e8`。

- 英文模板：`{charge_speed:%s}Charge Speed on low Overheat. Stacks up to {stacks:%s} times.`（RAW 句尾一個 ASCII 空格）

- 繁中模板：低過熱時充能速度提高{charge_speed:%s}，最多疊加{stacks:%s}次。

- **靜態重建**：formatter 對 own 負值取 abs(value×100)，以每階正百分比代入；英文 placeholder 後沒有空格，且 RAW 句尾有一個 ASCII 空格，以下用文字標註避免 Markdown 行尾空白。

- **I**：EN `2.5%Charge Speed on low Overheat. Stacks up to 5 times.`（RAW 句尾一個 ASCII 空格）；繁中「低過熱時充能速度提高2.5%，最多疊加5次。」

- **II**：EN `3%Charge Speed on low Overheat. Stacks up to 5 times.`（RAW 句尾一個 ASCII 空格）；繁中「低過熱時充能速度提高3%，最多疊加5次。」

- **III**：EN `3.5%Charge Speed on low Overheat. Stacks up to 5 times.`（RAW 句尾一個 ASCII 空格）；繁中「低過熱時充能速度提高3.5%，最多疊加5次。」

- **IV**：EN `4%Charge Speed on low Overheat. Stacks up to 5 times.`（RAW 句尾一個 ASCII 空格）；繁中「低過熱時充能速度提高4%，最多疊加5次。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 低過熱時效果 | 描述鍵 loc_trait_bespoke_lower_overheat_gives_faster_charge_desc／hash078227e8；EN: {charge_speed:%s}Charge Speed on low Overheat.／ZH: 低過熱時充能速度提高{charge_speed:%s} | weapon_traits_bespoke_plasmagun_p1_buff_templates.lua23–62：bonus_step_func 依目前持用武器熱量計零至五階，低熱量階數較多。 | 文件未涵蓋 | 中英只概述低過熱時生效，沒有列出10%起點、四捨五入公式或裝填／通風門檻。 |
| 效果數值方向 | 描述鍵 loc_trait_bespoke_lower_overheat_gives_faster_charge_desc／hash078227e8；EN formatter依own負值重建正百分比；ZH為充能速度提高{charge_speed:%s} | weapon_traits_bespoke_plasmagun_p1.lua155–200：own charge_up_time 為每階 −2.5／−3／−3.5／−4%；trait_value_parser.lua8–20 自訂取絕對值後顯示，ChargeActionModule28–87 消費時間乘數。 | 文件未涵蓋 | RAW標籤使用Charge Speed／充能速度，沒有寫時間因子；本分析以實作的蓄力時間乘數表述，嚴格反比速率另列公式。 |
| 最多五階 | 描述鍵 loc_trait_bespoke_lower_overheat_gives_faster_charge_desc／hash078227e8；EN: Stacks up to {stacks:%s} times.／ZH: 最多疊加{stacks:%s}次。 | SteppedStatBuff10–51 與 wrapper23–62：上限五階，bonus_step_func 由目前熱量直接算出；own formatter 的 stacks 為字串5。 | 一致 | 上限相符；RAW未說明這不是由射擊事件逐次累積，而是熱量狀態導出的階數。 |
| 時間參數與完成門檻 | RAW 未列蓄力進度公式或直接射擊完成門檻。 | weapon_charge_templates34–48 的 min_charge=0.05／完成比例0.525；ChargeActionModule54–67 以時間參數計比例，OverheatActionModule38–58 依門檻判完成。 | 文件未涵蓋 | 固定條件下直接路徑達門檻需參數的一半；時間參數與實際完成秒數分開。 |
| 通風、切換與動態變化 | RAW 未列通風排除及充能中熱量更新。 | ConditionalFunctions74–103 將 vent_overheat 列為裝填狀態；ActionOverloadCharge21–23 先更新充能，再更新過熱模組。 | 文件未涵蓋 | 通風不直接加速；切回依當下熱量重算，新的熱量經 Buff 更新後才成為新階數。 |
