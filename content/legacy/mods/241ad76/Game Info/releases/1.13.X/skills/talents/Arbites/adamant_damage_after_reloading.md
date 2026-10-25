# 凋零烈焰(Withering Fire)：原始碼依據

[English](en/adamant_damage_after_reloading.md)

[返回玩家說明](README.md#adamant_damage_after_reloading)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_damage_after_reloading)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_damage_after_reloading`；名稱鍵：`loc_talent_adamant_damage_after_reloading`；描述鍵：`loc_talent_adamant_damage_after_reloading_desc`。
- 節點：`node_0ebf45d0-b4da-42ea-8735-1d9c31ac2a9f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_reload啟動5秒proc_stat_buffs.ranged_damage=.15，allow_proc_while_active允許重新計時。DamageCalculation將ranged_damage−1加到damage_stat_buffs，不獨立乘最終傷害。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：295–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2498–2512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2498-L2512)
- [scripts/settings/talent/talent_settings_adamant.lua：125–128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L125-L128)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：971–990](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L971-L990)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：440–464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L440-L464)

## 算例條件與待確認事項

- **傷害算例**：單計此階段，基礎 100 點變成 100 × (1 + 15%) = 115 點；原有 25% 同階段加成時，125 點變成 100 × (1 + 25% + 15%) = 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e68c7c57`。
- 繁中「換彈後…遠程傷害」與英文 after Reloading／Ranged Damage 一致；補上重新計時及加算並非勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_damage_after_reloading.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/82a4d2c5-a0aa-4c05-a8ea-e03bc0e4932b)

圖片僅供技能辨識，不作機制證據。

