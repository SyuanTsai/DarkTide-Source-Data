# 猛犬出擊(Unleashed Brutality)：原始碼依據

[English](en/adamant_companion_focus_elite.md)

[返回玩家說明](README.md#adamant_companion_focus_elite)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_companion_focus_elite)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_companion_focus_elite`；名稱鍵：`loc_talent_adamant_cyber_mastiff_elites`；描述鍵：`loc_talent_adamant_cyber_mastiff_elites_desc`。
- 節點：`node_44f3d117-9099-42ab-9b11-8ff7a5ef1a66`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent special rule adamant_companion_elite_focus 由 companion dog target selector 讀取。selector 對 tags.elite 與 tags.special 分別加權 10。
- passive stat buff 同時提供 companion_damage_vs_elites=0.25 與 companion_damage_vs_special=0.25。共用 damage_calculation 依 companion attacker 與目標 tags 讀取 owner 對應 modifier。
- 程式碼核對固定至公開 Aussiemon/Darktide-Source-Code SHA 7e662fcda16219d775b84af50322be2e9cd9d62e；此公開程式碼與本機繁中／英文文字版本對應為1.13.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2474–2493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2474-L2493)
- [scripts/settings/talent/talent_settings_adamant.lua：411–419](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L411-L419)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3180–3187](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3180-L3187)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua：125–130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L125-L130)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua：256–288](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L256-L288)
- [scripts/utilities/attack/damage_calculation.lua：334–355](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2474–2493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2474-L2493)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1935–1961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1935-L1961)

## 算例條件與待確認事項

- 對帶 elite 或 special 標籤的目標，單獨計此天賦時 100 點基礎戰犬傷害變成 125 點。
- 精英與專家標籤依敵人 breed 判定；兩個分類同時存在時的 modifier 疊加需由實際目標標籤與共用 stat 結算決定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`596a5388`。
- 繁中「優先攻擊精英和專家敵人，對其造成 25%傷害」對應英文 “prioritises Elite and Specialist Enemies, and deals 25% Damage to them”；一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_companion_focus_elite.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/d61cee49-95ce-43fb-ae8a-b05ba598366b)

圖片僅供技能辨識，不作機制證據。

