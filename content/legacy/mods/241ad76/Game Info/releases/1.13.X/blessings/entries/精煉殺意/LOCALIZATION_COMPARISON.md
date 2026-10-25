# 精煉殺意：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_weakspot_damage_against_toxin_status`／hash`38e007cd`；描述鍵`loc_trait_bespoke_increased_weakspot_damage_against_toxin_status_desc`／hash`fbd338c3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Refined Lethality／精煉殺意。

- 文件名稱：精煉殺意(Refined Lethality)。

- 適用武器：骨鋸；描述鍵`loc_trait_bespoke_increased_weakspot_damage_against_toxin_status_desc`／hash`fbd338c3`。

- 英文模板：Increased weakspot damage by {damage:%s} against enemies afflicted with Chem Toxin.

- 繁中模板：對受到化學毒素影響的敵人，造成的弱點傷害提高{damage:%s}。

- **靜態重建**：RAW 英文：Increased weakspot damage by {damage:%s} against enemies afflicted with Chem Toxin.
RAW 繁中：對受到化學毒素影響的敵人，造成的弱點傷害提高{damage:%s}。

TraitValueParser 讀取實際 own tier 的 conditional_stat_buffs，percentage 格式對 fraction 乘 100，並輸出百分比；本 trait 的 prefix 為 +。I–IV 靜態重建如下：

- **I**：英文「Increased weakspot damage by +52.5% against enemies afflicted with Chem Toxin.」；繁中「對受到化學毒素影響的敵人，造成的弱點傷害提高+52.5%。」

- **II**：英文「Increased weakspot damage by +55% against enemies afflicted with Chem Toxin.」；繁中「對受到化學毒素影響的敵人，造成的弱點傷害提高+55%。」

- **III**：英文「Increased weakspot damage by +57.5% against enemies afflicted with Chem Toxin.」；繁中「對受到化學毒素影響的敵人，造成的弱點傷害提高+57.5%。」

- **IV**：英文「Increased weakspot damage by +60% against enemies afflicted with Chem Toxin.」；繁中「對受到化學毒素影響的敵人，造成的弱點傷害提高+60%。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 數值占位符 damage | RAW desc hash fbd338c3：{damage:%s}；英文／繁中同 hash。 | weapon_traits_bespoke_saw_p1.lua:383-422；trait_value_parser.lua:8-20,51-55 | 靜態重建 I–IV 為 +52.5%、+55%、+57.5%、+60%。 | own tier fraction 直接取自條目；percentage 乘 100，prefix +。 |
| 弱點與毒素條件 | RAW desc：weakspot damage；against enemies afflicted with Chem Toxin。 | damage_calculation.lua:742-747；695-772 | 實作需 weakspot、melee，且目標有 keywords.toxin。 | RAW 描述數值與條件方向一致；未描述 melee gate 屬文件未涵蓋。 |
| 加成作用範圍 | RAW 只稱 weakspot damage，未指定最終傷害公式。 | damage_calculation.lua:695-772；buff_settings.lua:885 | stat 加到弱點／精準乘區，不直接乘整筆命中。 | 傷害公式把此 stat 放在符合弱點目標的弱點傷害路徑。 |
| 啟用與特殊路由 | RAW 未提持用、推擊或特殊切換路由。 | base_weapon_trait_buff_templates.lua:2535-2543；saw_p1_m1.lua:1355-1458；action_push.lua:52-111 | held-slot 條件；push 本體排除；toggle 不造成命中，啟用後近戰 sweep 仍可符合。 | 這些是文件未涵蓋的執行條件，不是已證明的描述矛盾。 |
| 首次上毒與持續傷害 | RAW說明對已有Chem Toxin的目標，未提供上毒與傷害先後或毒素tick類型。 | 實際coating callback在Attack傷害後排隊處理；兩個target buffs帶toxin；neurotoxin tick為buff attack type。 | 文件未涵蓋；首擊不使用本次稍後添加的毒素，毒素tick不屬近戰弱點。 | 後續direct/sticky hit仍需keyword已更新可讀，不保證同frame；傷痕不能取代keyword證據。 |
