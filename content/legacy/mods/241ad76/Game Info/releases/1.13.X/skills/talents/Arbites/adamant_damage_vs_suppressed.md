# 惡徒退散(Cower, Miscreants!)：原始碼依據

[English](en/adamant_damage_vs_suppressed.md)

[返回玩家說明](README.md#adamant_damage_vs_suppressed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_damage_vs_suppressed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_damage_vs_suppressed`；名稱鍵：`loc_talent_adamant_damage_vs_suppressed`；描述鍵：`loc_talent_adamant_damage_vs_suppressed_desc`。
- 節點：`node_0bf17803-4dbf-4ffd-8c23-2115ca8b2515`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- damage_vs_suppressed=.25在is_attacked_unit_suppressed成立時加入damage_stat_buffs，無攻擊類型條件、無額外持續buff。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：442–444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L442-L444)
- [scripts/settings/talent/talent_settings_adamant.lua：435–437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L435-L437)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2110–2116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2110-L2116)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2504–2519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2504-L2519)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2222–2246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2222-L2246)

## 算例條件與待確認事項

- **傷害算例**：攻擊受壓制的敵人，單計此效果，基礎 100 點傷害變成 100 × 1.25 = 125 點；原有同階段 20% 加成時，由 120 點變成 145 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0e174b92`。
- 繁中「被壓制的敵人」與英文 Suppressed Enemies對象一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_damage_vs_suppressed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/a72c3f5b-2dde-48d0-8f5c-1af4ba20a044)

圖片僅供技能辨識，不作機制證據。

