# 靜電電容消耗(Static Capacitor Drain)：原始碼依據

[English](en/cryptic_overload_keystone_permastack.md)

[返回玩家說明](README.md#cryptic_overload_keystone_permastack)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_permastack)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_overload_keystone_permastack`；名稱鍵：`loc_talent_cryptic_overload_keystone_permastack`；描述鍵：`loc_talent_cryptic_overload_keystone_permastack_desc`。
- 節點：`node_50941b31-87cd-4b4e-86f1-25c09ee86bb5`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 啟用此修正時，超載模板將觸發次數從0開始計數；每次完成超載增加1，並依序在8、16、24次加入傷害、韌性承傷與戰鬥技能資源回充 buff。每個門檻只增加一次，設定的次序索引隨取得而前進。
- 三個加成 buff 的最大層數均為1且沒有 duration；傷害為 additive_multiplier +0.15，韌性承傷倍率為 multiplicative_multiplier 0.8；第三個 buff 同時提供 combat_ability_resource_regen_modifier 與 combat_ability_resource_restored_modifier 各+0.25。
- 戰鬥技能自然回充由基礎回充速度乘資源回充倍率；適用直接恢復倍率的來源也可受+25%影響，但忽略 stat buffs 的直接恢復不受該倍率影響。以護教軍 discharge 為例，單道充能需50點、自然回充1點/秒；不計其他修正時，+25%後為1.25點/秒。
- 模板停止時會移除已發出的永久加成與計數層；加成沒有時間倒數，UI文字說明持續至死亡。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1325–1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1325-L1373)
- [scripts/settings/talent/talent_settings_cryptic.lua：3–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L3-L18)
- [scripts/settings/talent/talent_settings_cryptic.lua：264–295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L295)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1530–1572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1530-L1572)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1637–1645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1637-L1645)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1704–1723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1704-L1723)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1840–1866](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1840-L1866)
- [scripts/settings/buff/buff_settings.lua：742–743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L743)
- [scripts/settings/buff/buff_settings.lua：763–763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1120–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1120-L1179)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua：70–92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L92)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1325–1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1325-L1373)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1009–1031](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1009-L1031)

## 算例條件與待確認事項

- 靜態推演：第8次超載後+15%傷害，100點基礎傷害變115點；第16次後韌性承傷倍率0.80，100點原始韌性傷害變80點。
- 靜態推演：若一格充能需50點、自然回充1點/秒，從0補滿需50秒；倍率+25%後每秒回1.25點，需40秒。
- 超載次數以實際觸發次數計算，不是擊殺數或累積層數；溢出層數也不會多算超載次數。
- 回充秒數僅適用於所舉50點、1點/秒且回充未暫停的示例；其他技能的基礎資源與額外修正可能不同。
- 固定版確認加成 buff 無時間倒數，且停止鑰石被動時會清除；死亡時的整體重置流程不由此模板單獨證明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c193a6c8`。
- 繁中與英文都列出第8、16、24次超載取得三項加成，數值為15%傷害、20%韌性減傷、25%電容量生成，並說明持續至死亡。固定版門檻和 stat buff 數值一致；自然回充與適用直接恢復的實作、停止被動時清除屬 UI 未展開的細節，不視為翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_permastack.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/f0977f9f-2eb1-458a-a2c1-5e5642a284aa)

圖片僅供技能辨識，不作機制證據。

