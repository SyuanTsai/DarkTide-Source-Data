# 近戰傷害提升(Melee Damage Boost)：原始碼依據

[English](en/base_melee_damage_node_buff_high_2.md)

[返回玩家說明](README.md#base_melee_damage_node_buff_high_2)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_melee_damage_node_buff_high_2`；名稱鍵：`loc_talent_melee_damage_boost_medium`；描述鍵：`loc_talent_melee_damage_boost_medium_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2067-L2094)：`stat`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1181-L1204)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

high_2 複製 high_1；tier1 melee_damage=0.15。只在is_melee_attack時加入damage_stat_buffs。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/base_talents.lua，第 1181–1204 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1181-L1204)
- [scripts/settings/buff/player_buff_templates.lua，第 997–1026 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L997-L1026)
- [scripts/utilities/attack/damage_calculation.lua，第 295–301 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L301)
- [scripts/extension_systems/buff/buffs/buff.lua，第 226–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/stat/base_melee_damage_node_buff_high_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/b0fb41b1-81da-4263-8d21-101a3af0cbdb)

圖片僅供技能辨識，不作機制證據。

