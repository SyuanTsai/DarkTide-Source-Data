# 韌性減傷(Toughness Damage Reduction)：原始碼依據

[English](en/base_toughness_damage_reduction_node_buff_medium_1.md)

[返回玩家說明](README.md#base_toughness_damage_reduction_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_toughness_damage_reduction_node_buff_medium_1`；名稱鍵：`loc_talent_toughness_damage_reduction_medium`；描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`。
- 節點：`node_13a3b9c2-d919-4e05-9ec4-01ee813c01f1`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前一點節點使用tier1 toughness_damage_taken_modifier=-.1，這是加算的modifier，不是multiplier=.9。共用傷害把modifier階段合成，再乘上獨立toughness_damage_taken_multiplier。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：432–460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L460)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：437–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：426–458](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L426-L458)

## 算例條件與待確認事項

- **減傷算例**：沒有其他加成時，100 × (1 − 10%) = 90 點韌性傷害。若已有同一加算階段的 20% 韌性減傷，則為 100 × (1 − 20% − 10%) = 70 點；獨立乘算的減傷效果另行相乘。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1272bcc0`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/stat/base_toughness_damage_reduction_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/f86258bf-77ad-44c3-99b0-628042e47315)

圖片僅供技能辨識，不作機制證據。

