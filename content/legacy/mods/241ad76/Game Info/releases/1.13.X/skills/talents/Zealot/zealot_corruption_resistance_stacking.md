# 危境之際(On the Brink)：原始碼依據

[English](en/zealot_corruption_resistance_stacking.md)

[返回玩家說明](README.md#zealot_corruption_resistance_stacking)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_corruption_resistance_stacking)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_corruption_resistance_stacking`；名稱鍵：`loc_talent_zealot_corruption_resistance_stacking`；描述鍵：`loc_talent_zealot_corruption_resistance_stacking_desc`。
- 節點：`node_ccd0b423-3a44-4f74-8339-7c7b65ba2d63`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點掛載zealot_corruption_resistance_stacking；corruption_taken_multiplier從1插值至5×.1=.5，t=失去格數/5，等價於1−.1×格數。實際模板不是舊zealot_preacher_reduce_corruption_damage。
- 因此一格失去傷口對應0.9承傷倍率（降低10%），五格時0.5（降低50%）。這是對腐敗傷害承受倍率的減少，不是額外獲得健康或傷口。
- 本效果與殉道共用傷口計算，最高只計5格；沒有獨立觸發器、計時或堆層逾時。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2624–2643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2624-L2643)
- [scripts/settings/talent/talent_settings_zealot.lua：211–213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L211-L213)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：633–652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3096–3125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3096-L3125)
- [scripts/utilities/health.lua：117–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1916–1940](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1916-L1940)
- [scripts/utilities/attack/damage_taken_calculation.lua：368–372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L368-L372)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2624–2643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2624-L2643)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1916–1940](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1916-L1940)

## 算例條件與待確認事項

- **腐敗算例**：原本會獲得 20 點腐敗，3 層時為 20 × (1 − 3 × 10%) = 14 點；5 層時為 10 點。其他腐敗倍率另相乘，不會因此免疫所有腐敗來源。
- 示例只計算本節點給的腐敗傷害倍率，未合併其他承傷修正。
- 繁中及英文的「抗性」是效果描述；程式實際調整 corruption_taken_multiplier，應避免擴寫成免疫或腐敗上限減少。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`892c3a6b`。
- 中英文都表達殉道每層提供腐敗抗性；用承傷倍率說明其運作是實作細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_corruption_resistance_stacking.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/9bc683a7-534a-4244-8381-1a6c0463003f)

圖片僅供技能辨識，不作機制證據。

