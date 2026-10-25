# 韌性提升(Toughness Boost)：原始碼依據

[English](en/base_toughness_node_buff_medium_2.md)

[返回玩家說明](README.md#base_toughness_node_buff_medium_2)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_toughness_node_buff_medium_2`；名稱鍵：`loc_talent_toughness_boost_medium`；描述鍵：`loc_talent_toughness_boost_medium_desc`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L576-L609)：`stat`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L206-L229)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 原始碼確認與程式推導

medium_2 複製 medium_1；必須讀 talent_overrides[1] 的25，不能沿用模板外層15。Buff._calculate_talent_override_data 依tier覆寫，預設tier1。max_toughness=(base+buff_extra)*toughness_bonus，ceil後加flat。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/base_talents.lua，第 206–229 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L206-L229)
- [scripts/settings/buff/player_buff_templates.lua，第 366–395 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L366-L395)
- [scripts/extension_systems/buff/buffs/buff.lua，第 226–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 79–88 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/stat/base_toughness_node_buff_medium_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455)｜[圖片附件](https://github.com/user-attachments/assets/1ef34fb3-ac4e-47d1-b7c1-0d13f10e3173)

圖片僅供技能辨識，不作機制證據。

