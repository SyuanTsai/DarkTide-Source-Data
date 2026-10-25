# 生化武器關(Malocator)：原始碼依據

[English](en/adamant_execution_order_cdr.md)

[返回玩家說明](README.md#adamant_execution_order_cdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_execution_order_cdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_execution_order_cdr`；名稱鍵：`loc_talent_adamant_exterminator_ability_cooldown`；描述鍵：`loc_talent_execution_order_cdr_on_kill_description`。
- 節點：`node_dbdb2b08-b8ce-4dc5-88c9-139f0486b54c`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 標記擊殺依 special rule 加入 adamant_execution_order_cdr。效果 duration 使用 execution_order.time=8；talent settings 另有 cdr_time=3 欄位，但此模板沒有讀取它。
- 伺服器端計時器約每秒呼叫 restore_ability_resource(combat_ability,0.5)。法務官戰鬥技能每秒自然增加 1 resource，resource_cost_per_charge 以冷卻秒數設定；restore method 將資源 clamp 至最大值。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2239–2276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2239-L2276)
- [scripts/settings/talent/talent_settings_adamant.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：958–977](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L977)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1150–1183](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1150-L1183)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua：7–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L7-L24)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2257–2276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2257-L2276)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1752–1777](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1752-L1777)

## 算例條件與待確認事項

- 標記擊殺觸發後，理論恢復量為 8 × 0.5 = 4 秒；只缺 1.2 秒時，最多恢復 1.2 秒並充滿。
- 恢復按逐秒計時執行，實際次數受效果到期更新順序影響；4 秒是名目上限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1cb35d28`。
- 同源繁中與英文均為擊殺標記目標後增加冷卻恢復；實際持續8秒。另有未使用的cdr_time=3設定，但不構成文字或生效時間矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_cdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/83df9392-fcfa-43e9-b9e0-ceef6f50ade7)

圖片僅供技能辨識，不作機制證據。

