# 殺戮協議(Keeping Protocol)：原始碼依據

[English](en/adamant_execution_order_permastack.md)

[返回玩家說明](README.md#adamant_execution_order_permastack)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_execution_order_permastack)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_execution_order_permastack`；名稱鍵：`loc_talent_execution_order_perma_buff`；描述鍵：`loc_talent_execution_order_perma_buff_new_description`。
- 節點：`node_d6d7d5c6-b681-41e1-b6c1-05e35ebb9715`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 每次標記擊殺建立 adamant_execution_order_permastack；模板 max_stacks=30、未設定短時效。每層提供 damage_vs_monsters=0.01，monster_damage_taken_multiplier=0.99。
- 共用傷害計算對 tags.monster 目標加上 damage_vs_monsters；怪獸攻擊時讀取受擊者的 monster_damage_taken_multiplier。該值屬 multiplicative_multiplier，堆層依 stack_count 逐層相乘。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2211–2238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2211-L2238)
- [scripts/settings/talent/talent_settings_adamant.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：958–977](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L977)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1184–1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1184-L1198)
- [scripts/settings/buff/buff_settings.lua：892–895](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L892-L895)
- [scripts/extension_systems/buff/buffs/buff.lua：397–410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/damage_calculation.lua：400–413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L400-L413)
- [scripts/utilities/attack/damage_calculation.lua：587–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L610)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2211–2238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2211-L2238)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1803–1826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1803-L1826)

## 算例條件與待確認事項

- 30 次標記擊殺：對 tags.monster 目標的攻擊 stat +30%；若怪獸原本打出 100 點傷害且不計其他修正，0.99^30 約為 74.0 點。
- 實際受影響對象依敵人 breed 的 monster 標籤決定；「巨獸」的遊戲分類需搭配同版內容確認。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`aaa5ea87`。
- 繁中「巨獸」對應英文 “Monstrosities”，兩者一致；程式 stat 使用 tags.monster，是否涵蓋完全相同敵人集合尚未確認，故待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_permastack.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/eeb40551-fbea-4de0-8e46-0a07e4bfcec6)

圖片僅供技能辨識，不作機制證據。

