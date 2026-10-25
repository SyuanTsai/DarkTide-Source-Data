# 優化冷卻：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_reduced_heat_on_continuous_charge`／hash`4e05ef2d`；描述鍵`loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc`／hash`82e540b2`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Optimised Cooling／優化冷卻。

- 文件名稱：優化冷卻(Optimised Cooling)。

- 適用武器：電漿槍；描述鍵`loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc`／hash`82e540b2`。

- 英文模板：Maintaining continuous fire reduces overheat generation by {overheat_reduction:%s}. Stacks up to {stacks:%s} times.

- 繁中模板：{overheat_reduction:%s}持續射擊時的熱量生成。 最多可疊加{stacks:%s}層。

- **靜態重建**：own formatter 先以 100−round(value×100) 取得 4／6／8／10，再套用百分比 formatter，最後前置負號；stacks 為固定字串5。四級完整 RAW 句子如下：

- **I**：EN `Maintaining continuous fire reduces overheat generation by -4%. Stacks up to 5 times.`；繁中「-4%持續射擊時的熱量生成。 最多可疊加5層。」

- **II**：EN `Maintaining continuous fire reduces overheat generation by -6%. Stacks up to 5 times.`；繁中「-6%持續射擊時的熱量生成。 最多可疊加5層。」

- **III**：EN `Maintaining continuous fire reduces overheat generation by -8%. Stacks up to 5 times.`；繁中「-8%持續射擊時的熱量生成。 最多可疊加5層。」

- **IV**：EN `Maintaining continuous fire reduces overheat generation by -10%. Stacks up to 5 times.`；繁中「-10%持續射擊時的熱量生成。 最多可疊加5層。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發 | 描述鍵 loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc／hash82e540b2；EN Maintaining continuous fire／ZH 持續射擊時 | ActionHandler320–332／494–512，ActionAvailability100–128與兩型號實際shoot_hit_scan／hold_combo action。 每個實際shoot_hit_scan動作提高combo；蓄力hold現有計數。 | 一致（概述） | RAW沒有寫combo source、快取更新或hold/reset。 |
| tier方向 | 描述鍵 loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc／hash82e540b2；EN/ZH同hash description；formatter四值為−4/−6/−8/−10%。 | own tier343–389；TraitValueParser9–20／79–108；Overheat31–62／82–100。 own倍率.96/.94/.92/.90；formatter自訂百分比後再加負prefix。 | 英文符號方向矛盾 | “reduces … by -X%”與倍率小於1方向相反；繁中不另稱增加。 |
| 上限 | 描述鍵 loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc／hash82e540b2；EN最多5 times；ZH最多5層。 | base1907–1948／1965–1977，min_max_step0–5；own formatter stacks=5。 placeholder=5，bonus step封頂5。 | 一致（上限） | 數量一致，RAW未說明不是五次加法。 |
| 疊加方式 | 描述鍵 loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc／hash82e540b2；RAW稱stacks up to五次/層。 | Buff689–747 的multiplicative_multiplier迴圈；SteppedStatBuff10–51；buff_settings900–907。 每階重複乘tier值，IV五階=.9^5。 | 文件未涵蓋 | RAW沒提供聚合公式。 |
| 生熱範圍 | 描述鍵 loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc／hash82e540b2；RAW稱overheat generation／熱量生成。 | ActionShoot568–580、OverheatActionModule18–60；Overheat31–62／82–100／155–171／174–212。 ordinary/charged shot及held charge heat會讀；decay/vent別讀。 | 文件未涵蓋 | 原文未分辨兩種生熱producer或冷卻consumer。 |
| 重新起手、清除與期限 | 描述鍵 loc_trait_bespoke_reduced_heat_on_continuous_clarified_desc／hash82e540b2；RAW未列起手早退、裝填／排熱／切換或0.5秒條件。 | ActionHandler494–512／1149–1161；兩型號840的combo_reset_duration=.5；base_template_settings109–132的unwield。 | 文件未涵蓋 | 接續蓄力hold不等於閒置重新起手保留；新計數需經數值快取更新。 |
