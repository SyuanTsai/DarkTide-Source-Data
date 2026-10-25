# 韌性減傷(Toughness Damage Reduction)：原始碼依據

[English](en/base_toughness_damage_reduction_node_buff_medium_1.md)

[返回玩家說明](README.md#base_toughness_damage_reduction_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_toughness_damage_reduction_node_buff_medium_1`；名稱鍵：`loc_talent_toughness_damage_reduction_medium`；描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`。
- 節點：`node_6b1ed144-097b-4dd0-9fab-c56e5722ee5f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前節點一點，使用tier1的toughness_damage_taken_modifier=-.1；結算modifier與其他同階段修正相加，再乘toughness_damage_taken_multiplier。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：432–460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L460)
- [scripts/utilities/attack/damage_taken_calculation.lua：234–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：437–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：665–697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L665-L697)

## 算例條件與待確認事項

- **減傷算例**：單計韌性減傷階段，原本 100 點韌性傷害變成 100 × (1 − 10%) = 90 點。若已有同階段 20% 減傷，則為 100 × (1 − 20% − 10%) = 70 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1272bcc0`。
- 繁中「韌性減傷」與英文 Toughness Damage Reduction 一致；加算階段未在原文詳列。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_toughness_damage_reduction_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/af78e688-7708-4d00-88f0-913478235d41)

圖片僅供技能辨識，不作機制證據。

