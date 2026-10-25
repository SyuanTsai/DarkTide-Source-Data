# 韌性減傷(Toughness Damage Reduction)：原始碼依據

[English](en/base_toughness_damage_reduction_node_buff_medium_1.md)

[返回玩家說明](README.md#base_toughness_damage_reduction_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_toughness_damage_reduction_node_buff_medium_1`；名稱鍵：`loc_talent_toughness_damage_reduction_medium`；描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`。
- 節點：`node_9049de9c-7aef-4bda-bc26-2892d147c486`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- player_toughness_damage_reduction_node_buff_medium_1使用toughness_damage_taken_modifier=-.1，是additive_multiplier而非toughness_damage_taken_multiplier。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：432–443](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L443)
- [scripts/settings/buff/buff_settings.lua：1000–1020](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1020)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：437–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1680–1709](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1680-L1709)

## 算例條件與待確認事項

- **減傷算例**：原本 100 點韌性傷害、此階段無其他減傷時，100 × (1 − 10%) = 90 點。若已有 5% 同階段減傷，則為 100 × (1 − 5% − 10%) = 85 點；其他獨立乘算減傷再另外套用。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1272bcc0`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/stat/base_toughness_damage_reduction_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/57a54ed7-4f34-449f-9f2d-eb401a97b51a)

圖片僅供技能辨識，不作機制證據。

