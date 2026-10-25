# 罪不可赦(No Lenience)：原始碼依據

[English](en/adamant_execution_order_rending.md)

[返回玩家說明](README.md#adamant_execution_order_rending)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_execution_order_rending)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_execution_order_rending`；名稱鍵：`loc_talent_adamant_exterminator_stack_during_activation`；描述鍵：`loc_talent_execution_order_command_applies_brittleness_description`。
- 節點：`node_8abdbb78-a06d-4d97-959a-a46930ab0752`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 標記目標死亡時，_execution_order_proc 在升級 special rule 存在時建立 adamant_execution_order_rending。效果持續 8 秒、最多 1 層，stat_buffs.rending_multiplier=0.10。
- 共用 _rending_multiplier 讀取 attacker_stat_buffs.rending_multiplier，並與 brittleness、攻擊類型、暴擊、背刺、目標踉蹌等修正合併，最後 clamp 至 1。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2191–2210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2191-L2210)
- [scripts/settings/talent/talent_settings_adamant.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L102-L119)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：958–977](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L958-L977)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1137–1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1137-L1149)
- [scripts/utilities/attack/damage_calculation.lua：629–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/utilities/attack/damage_calculation.lua：63–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/settings/damage/armor_settings.lua：8–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2191–2210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2191-L2210)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1778–1802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1778-L1802)

## 算例條件與待確認事項

- 標記擊殺後 8 秒內撕裂修正額外取得 0.10；若共用公式已到 1.0 上限，此加成不會使最終值超過 1。
- 撕裂不等同無條件增加 10% 最終傷害；增幅視目標護甲與共用撕裂上限而定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`59853225`。
- 繁中「擊殺被標記的敵人後，獲得 10%撕裂效果，持續 8 秒」對應英文 “gain 10% Rending for 8s after a Marked Kill”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_execution_order_rending.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/ab53bec8-fd00-470c-8c5d-46cc58904f13)

圖片僅供技能辨識，不作機制證據。

