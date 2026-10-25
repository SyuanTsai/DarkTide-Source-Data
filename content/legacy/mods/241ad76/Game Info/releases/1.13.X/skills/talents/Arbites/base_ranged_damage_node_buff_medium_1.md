# 遠程傷害增幅(Ranged Damage Boost)：原始碼依據

[English](en/base_ranged_damage_node_buff_medium_1.md)

[返回玩家說明](README.md#base_ranged_damage_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_ranged_damage_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_ranged_damage_node_buff_medium_1`；名稱鍵：`loc_talent_ranged_damage_medium`；描述鍵：`loc_talent_ranged_damage_medium_desc`。
- 節點：`node_a40126d6-c985-42b7-bffb-7234639e6704`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前節點tier1，ranged_damage=.1；DamageCalculation依攻擊類型將加成加入一般傷害階段。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：1129–1157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L1129-L1157)
- [scripts/utilities/attack/damage_calculation.lua：295–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：1637–1660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1637-L1660)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：806–832](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L806-L832)

## 算例條件與待確認事項

- **傷害算例**：沒有其他加成時，基礎 100 點遠程傷害變成 100 × (1 + 10%) = 110 點；原有同階段 25% 加成時，125 點變成 100 × (1 + 25% + 10%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d752c671`。
- 繁中與英文均為對應攻擊類型傷害加成，未見明確矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_ranged_damage_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/62b0bee6-3606-40bc-9d78-06f072535e59)

圖片僅供技能辨識，不作機制證據。

