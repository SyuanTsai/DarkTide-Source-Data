# 請求暫停(Calling for a Time Out)：原始碼依據

[English](en/broker_passive_reduced_toughness_damage_during_reload.md)

[返回玩家說明](README.md#broker_passive_reduced_toughness_damage_during_reload)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_reduced_toughness_damage_during_reload)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_reduced_toughness_damage_during_reload`；名稱鍵：`loc_talent_broker_passive_reduced_toughness_damage_during_reload`；描述鍵：`loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc`。
- 節點：`node_2c613026-5cb8-44d3-aff8-29114f2f10b6`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_reload_start設is_reloading，ConditionalFunctions.is_reloading轉false時timestamp=t+4；toughness_damage_taken_modifier=-.25。

## 原始碼依據

- [scripts/utilities/attack/damage_taken_calculation.lua：228–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L228-L258)
- [scripts/settings/talent/talent_settings_broker.lua：276–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L276-L279)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1217–1261](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1217-L1261)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1180–1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1180-L1198)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1029–1058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1029-L1058)

## 算例條件與待確認事項

- **減傷算例**：原本承受 100 點韌性傷害，單計此效果變成 100 × 0.75 = 75 點；若同階段另有 20% 韌性減傷，則為 100 × (1 − 20% − 25%) = 55 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b4e891ca`。
- 繁中語序較不順，但與英文同為換彈期間及之後的韌性減傷，不列勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reduced_toughness_damage_during_reload.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/d28213f3-85a5-4de7-a380-f3799f671cc8)

圖片僅供技能辨識，不作機制證據。

