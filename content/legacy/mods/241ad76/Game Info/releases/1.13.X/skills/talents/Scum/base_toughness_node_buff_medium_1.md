# 韌性增幅(Toughness Boost)：原始碼依據

[English](en/base_toughness_node_buff_medium_1.md)

[返回玩家說明](README.md#base_toughness_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_toughness_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_toughness_node_buff_medium_1`；名稱鍵：`loc_talent_toughness_boost_medium`；描述鍵：`loc_talent_toughness_boost_medium_desc`。
- 節點：`node_8cfdec14-fd7f-49eb-94b4-40cb4a9016a1`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點只有1級；Buff依talent tier套用talent_overrides[1]的toughness=25，不能誤取模板預設15。
- max_toughness將breed基值加stat_buffs.toughness，再乘toughness_bonus，取ceil後加flat。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：366–394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L366-L394)
- [scripts/extension_systems/buff/buffs/buff.lua：226–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L254)
- [scripts/utilities/character_sheet.lua：36–43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/character_sheet.lua#L36-L43)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：79–88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：182–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L182-L205)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：231–265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L231-L265)

## 算例條件與待確認事項

- **算例**：原本 100 點變成 125 點；若另有 20% 最大韌性加成，則為 (100 + 25) × 1.2 = 150 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`329702b6`。
- 同源繁中與英文都是最大韌性增加，未見明確矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/stat/base_toughness_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/ad899680-6ea8-486b-976c-e0e875026aa8)

圖片僅供技能辨識，不作機制證據。

