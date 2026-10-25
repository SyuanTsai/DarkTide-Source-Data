# 升溫：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_scaled_on_heat`／hash`d4f69cb8`；描述鍵`loc_trait_bespoke_power_bonus_scaled_on_heat_desc`／hash`88798c11`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Rising Heat／升溫。

- 文件名稱：升溫(Rising Heat)。

- 適用武器：電漿槍；描述鍵`loc_trait_bespoke_power_bonus_scaled_on_heat_desc`／hash`88798c11`。

- 英文模板：Up to {damage:%s} Strength scaling with Heat Level.

- 繁中模板：根據熱能等級，威力最多提升{damage:%s}。

- **靜態重建**：formatter 對 own 每階 power_level_modifier 使用 value×5×100 並加「+」前綴，自訂函式替代預設百分比乘100；完整四級句子對應五階上限：

- **I**：EN `Up to +7.5% Strength scaling with Heat Level.`；繁中「根據熱能等級，威力最多提升+7.5%。」

- **II**：EN `Up to +10% Strength scaling with Heat Level.`；繁中「根據熱能等級，威力最多提升+10%。」

- **III**：EN `Up to +15% Strength scaling with Heat Level.`；繁中「根據熱能等級，威力最多提升+15%。」

- **IV**：EN `Up to +20% Strength scaling with Heat Level.`；繁中「根據熱能等級，威力最多提升+20%。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 首次、裝填、排熱與切換 | 描述鍵 loc_trait_bespoke_power_bonus_scaled_on_heat_desc／hash88798c11；RAW 未列這些條件。 | wrapper104–143 要求持用／非重新裝填；ConditionalFunctions74–103 含 vent_overheat；ActionShoot308–343 先攻擊後加熱。 | 文件未涵蓋 | 效果讀最新快取；沒有命中後才建立的層數，射擊新熱能不追溯。 |
| 五階最大值 | RAW 描述 `Up to {damage:%s} Strength scaling with Heat Level.`／「根據熱能等級，威力最多提升{damage:%s}。」；description hash `88798c11`。 | weapon_traits_bespoke_plasmagun_p1.lua257–299 與 TraitValueParser8–20：每階值×5×100、加「+」前綴，顯示五階上限 +7.5／+10／+15／+20%。 | 一致 | RAW 的 Up to／最多對應五階上限；不是每階值。 |
| 依熱能變化 | 描述鍵 loc_trait_bespoke_power_bonus_scaled_on_heat_desc／hash88798c11；RAW 表示依 Heat Level scaling，但沒有公式。 | plasmagun_p1_buff_templates.lua104–143 的 bonus_step_func；SteppedStatBuff10–51：round(clamp01((h−0.10)/0.90)×5)，取零至五階。 | 文件未涵蓋 | RAW 未列閾值與階數公式，不能由省略推定矛盾。 |
| 威力與最終傷害 | 描述鍵 loc_trait_bespoke_power_bonus_scaled_on_heat_desc／hash88798c11；RAW 使用 Strength scaling／威力提升，未說明 damage profile 的結算比例。 | PowerLevel25–60／63–91 加總適用分量並乘曲線輸出；DamageProfile29–50 分配各power type，DamageCalculation219–228 與StaggerCalculation67–80消費。 | 文件未涵蓋 | RAW 沒有承諾最終傷害同比增加；玩家文案明確區分威力修正與最終傷害。 |
| 實際型號限制 | RAW 描述不列武器 mark。 | MasterItems 的 trait item power_bonus_scaled_on_heat 以 weapon_type_restriction=plasmagun_p1 限制；scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua:18匯入／985–987加入traits；scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua:18匯入／985–987加入traits | 文件未涵蓋 | 以固定 inventory／UI／trait 接線列適用型號，不由系列名外推。 |
