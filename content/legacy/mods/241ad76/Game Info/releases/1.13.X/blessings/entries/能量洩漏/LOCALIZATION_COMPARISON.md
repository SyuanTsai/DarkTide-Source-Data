# 能量洩漏：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_power_bonus_scaled_on_heat`／hash`b56e85e7`；描述鍵`loc_power_bonus_scaled_on_heat_desc`／hash`f3f274cf`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Energy Leakage／能量洩漏。

- 英文模板：Increases Strength up to {amount:%s}, scaled on Heat.

- 繁中模板：根據當前熱能，威力最多提升{amount:%s}。

- **靜態重建**：I級根據當前熱量最多增加+7.5%威力；IV級最多增加+20%；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 威力上限 | amount由trait每步值×5重建 | [條件覆寫及每步加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) | 一致 | I–IV最高7.5%／10%／15%／20%，不能用wrapper預設1%。 |
| 熱量分段 | 同hash中英只說根據熱量 | [上古神刃熱量步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L27-L66)、[動力彎刀熱量步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L27-L66) | 文件未涵蓋 | 先減10%再按0–5四捨五入，不是原始熱量乘上限。 |
| 最高加成門檻 | 描述up to／最多 | [上古神刃熱量步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L27-L66)、[動力彎刀熱量步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L27-L66)、[四捨五入定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134) | 文件未涵蓋 | 第五段理論門檻91%而非必須100%。 |
| 持用與切換 | 模板未列 | [持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[條件覆寫及每步加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) | 文件未涵蓋 | 切出停止加成，切回依當下熱量算。 |
| 一般威力範圍 | Strength／威力 | [威力同階段合併及曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)、[傷害分配與順劈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L80) | 一致 | 一般power參與傷害、順劈與踉蹌；不是固定最終傷害倍率。 |
| 期限與充能 | 模板未列 | [上古神刃熱量步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L27-L66)、[動力彎刀熱量步數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L27-L66) | 文件未涵蓋 | 沒有觸發事件或倒數；只讀熱量與持用，不要求充能仍啟用。 |
