# 近戰增幅(Melee Damage Boost)：原始碼依據

[English](en/base_melee_damage_node_buff_medium_4.md)

[返回玩家說明](README.md#base_melee_damage_node_buff_medium_4)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_melee_damage_node_buff_medium_4)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_melee_damage_node_buff_medium_4`；名稱鍵：`loc_talent_melee_damage_boost_medium`；描述鍵：`loc_talent_melee_damage_boost_medium_desc`。
- 節點：`node_94333107-ec28-44ca-b37e-2f714fc57ed5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 目前節點cost=max_points=1，使用tier1的melee_damage=.1，不採後續未能分配的tier2/3/4值。medium_4是medium_1模板clone，兩個talent identifier不同，可同階段加算。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：964–995](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L964-L995)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：1109–1132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1109-L1132)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1807–1835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1807-L1835)

## 算例條件與待確認事項

- **傷害算例**：沒有其他加成，100 × (1 + 10%) = 110 點；兩個節點皆選取時為 120 點。已有 25% 同階段加成，再選一個節點則是 100 × (1 + 25% + 10%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7b5da013`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/stat/base_melee_damage_node_buff_medium_4.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/0c800eb0-7fc1-4c5c-b3c2-67d20a7db2ff)

圖片僅供技能辨識，不作機制證據。

