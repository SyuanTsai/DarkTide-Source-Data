# 韌性減傷(Toughness Damage Reduction)：原始碼依據

[English](en/base_toughness_damage_reduction_node_buff_medium_1.md)

[返回玩家說明](README.md#base_toughness_damage_reduction_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_toughness_damage_reduction_node_buff_medium_1`；名稱鍵：`loc_talent_toughness_damage_reduction_medium`；描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2095-L2122)：`stat`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

tier1 toughness_damage_taken_modifier=-0.1，是additive_multiplier；不得與toughness_damage_taken_multiplier的乘算類型混同。生命傷害不能直接套此韌性算例。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/base_talents.lua，第 437–463 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/settings/buff/player_buff_templates.lua，第 432–443 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L443)
- [scripts/extension_systems/buff/buffs/buff.lua，第 226–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255)
- [scripts/settings/buff/buff_settings.lua，第 1002–1003 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1002-L1003)
- [scripts/utilities/attack/damage_taken_calculation.lua，第 234–258 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/stat/base_toughness_damage_reduction_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/20744626-5cef-4e5c-afef-0474fde5a4b5)

圖片僅供技能辨識，不作機制證據。

