# 近在眉睫(Up Close)：原始碼依據

[English](en/adamant_close_kills_restore_toughness.md)

[返回玩家說明](README.md#adamant_close_kills_restore_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_close_kills_restore_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_close_kills_restore_toughness`；名稱鍵：`loc_talent_adamant_close_kills_restore_toughness`；描述鍵：`loc_talent_adamant_close_kills_restore_toughness_desc`。
- 節點：`node_efb7ef59-9432-462f-b551-91a5e93f0789`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill使用on_close_kill：attack_result=died，命中位置與attacking_unit位置距離平方<=DamageSettings.ranged_close_squared。CLOSE_RANGE=12.5，沒有attack_type限制；此事件仍是歸屬玩家的擊殺。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：298–304](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L298-L304)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：777–792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/settings/damage/damage_settings.lua：18–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2292–2305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2292-L2305)
- [scripts/settings/talent/talent_settings_adamant.lua：143–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L143-L145)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1057–1071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1057-L1071)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：522–556](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L522-L556)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，每次恢復 100 × 5% = 5 點；目前 98 點時只能補 2 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`550ce63d`。
- 繁中「近距離擊殺」與英文 Close Kill 一致；12.5公尺及百分比基準屬細節補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_close_kills_restore_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/3098a511-fa0f-444e-a9e2-8e6591688115)

圖片僅供技能辨識，不作機制證據。

