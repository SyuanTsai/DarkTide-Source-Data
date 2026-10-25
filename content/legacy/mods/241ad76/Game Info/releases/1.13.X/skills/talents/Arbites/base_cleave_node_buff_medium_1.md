# 順劈加成(Cleave Boost)：原始碼依據

[English](en/base_cleave_node_buff_medium_1.md)

[返回玩家說明](README.md#base_cleave_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_cleave_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_cleave_node_buff_medium_1`；名稱鍵：`loc_talent_cleave_boost_medium`；描述鍵：`loc_talent_cleave_boost_medium_desc`。
- 節點：`node_4cb10022-552a-4499-84e1-b956aa007511`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- player_cleave_node_buff_medium_1同時給max_hit_mass_attack_modifier及max_hit_mass_impact_modifier各.25；DamageProfile.max_hit_mass分別套用到attack與impact上限。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：930–963](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L930-L963)
- [scripts/utilities/attack/damage_profile.lua：36–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L62)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：1013–1036](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1013-L1036)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1097–1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1097-L1126)

## 算例條件與待確認事項

- **順劈算例**：單計順劈容量，原本可穿過 10 單位敵人質量的攻擊，變成 10 × (1 + 25%) = 12.5 單位。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`88737f68`。
- 繁中「順劈」與英文 Cleave 對應；未詳列傷害/衝擊質量上限不列勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_cleave_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/d3fa1c73-0a49-42ab-920c-11b7238af849)

圖片僅供技能辨識，不作機制證據。

