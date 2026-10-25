# 行軍之志(March)：原始碼依據

[English](en/adamant_movement_speed_on_block.md)

[返回玩家說明](README.md#adamant_movement_speed_on_block)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_movement_speed_on_block)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_movement_speed_on_block`；名稱鍵：`loc_talent_adamant_movement_speed_on_block`；描述鍵：`loc_talent_adamant_movement_speed_on_block_alt_desc`。
- 節點：`node_b93d4978-d0c5-4257-8725-9a1b20596f93`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 雖talent ID叫on_block，實際on_hit使用on_ranged_hit，proc_stat_buffs.movement_speed=.15，duration3。無cooldown，ProcBuff._can_activate在無cooldown情況回true，可重新計時。

## 原始碼依據

- [scripts/extension_systems/buff/buffs/proc_buff.lua：168–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L168-L184)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：431–434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L431-L434)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2092–2109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2092-L2109)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua：101–129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L101-L129)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2665–2684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2665-L2684)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1487–1513](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1487-L1513)

## 算例條件與待確認事項

- **移速算例**：單計此倍率，原本每秒移動 5 公尺，變成 5 × 1.15 = 5.75 公尺；其他動作減速仍照常處理。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f2ea4140`。
- 繁中「遠程命中」與英文 Ranged Hit 一致；不能因識別碼帶block誤寫成格擋。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_movement_speed_on_block.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/8f0bcba7-48bd-4d61-ad19-b03a65160eb5)

圖片僅供技能辨識，不作機制證據。

