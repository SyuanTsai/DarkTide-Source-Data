# 近戰增幅(Melee Damage Boost)：原始碼依據

[English](en/base_melee_damage_node_buff_medium_1.md)

[返回玩家說明](README.md#base_melee_damage_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_melee_damage_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_melee_damage_node_buff_medium_1`；名稱鍵：`loc_talent_melee_damage_boost_medium`；描述鍵：`loc_talent_melee_damage_boost_medium_desc`。
- 節點：`node_030fde55-407f-4bb3-bd36-46d70fe56bbf`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前節點tier1，melee_damage=.1；DamageCalculation依攻擊類型將加成加入一般傷害階段。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：964–992](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L964-L992)
- [scripts/utilities/attack/damage_calculation.lua：295–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：1037–1060](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1037-L1060)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：833–859](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L833-L859)

## 算例條件與待確認事項

- **傷害算例**：沒有其他加成時，基礎 100 點近戰傷害變成 100 × (1 + 10%) = 110 點；原有同階段 25% 加成時，125 點變成 100 × (1 + 25% + 10%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7b5da013`。
- 繁中與英文均為對應攻擊類型傷害加成，未見明確矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_melee_damage_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/8c224499-f2ca-420c-bcf6-39034e6a35b2)

圖片僅供技能辨識，不作機制證據。

