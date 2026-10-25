# 正當手段(Justified Measures)：原始碼依據

[English](en/adamant_stacking_damage.md)

[返回玩家說明](README.md#adamant_stacking_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stacking_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stacking_damage`；名稱鍵：`loc_talent_adamant_stacking_damage`；描述鍵：`loc_talent_adamant_stacking_damage_desc`。
- 節點：`node_51aaefd1-2772-4d9e-b458-80c449db677e`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit的target_number>1跳過；子buff damage=.02、max_stacks5、duration5、refresh_duration_on_stack。傷害在命中後加層，不回溯改變觸發命中。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3593–3622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3593-L3622)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buff_extension_base.lua：433–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/talent/talent_settings_adamant.lua：391–395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L391-L395)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3593–3606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3593-L3606)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2536–2559](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2536-L2559)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2247–2279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2247-L2279)

## 算例條件與待確認事項

- **傷害算例**：滿層為 5 × 2% = 10%，基礎 100 點傷害變成 110 點；同階段原有 25% 加成時，125 點變成 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8191a7bf`。
- 繁中「攻擊命中後」與英文 on Successful Attack一致；首目標限制屬補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_stacking_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/d3c96bd5-6464-499a-a742-cd58ddf1fa02)

圖片僅供技能辨識，不作機制證據。

