# 頭號目標(Prime Target)：原始碼依據

[English](en/zealot_elite_kills_empowers.md)

[返回玩家說明](README.md#zealot_elite_kills_empowers)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_elite_kills_empowers)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_elite_kills_empowers`；名稱鍵：`loc_talent_zealot_elite_kills_empowers`；描述鍵：`loc_talent_zealot_elite_kills_empowers_desc`。
- 節點：`node_5f95669c-df41-4278-bbcb-01eb63cf1c85`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_elite_kill添加單層effect，damage+.1，duration5；update以.15*dt/5恢復最大韌性百分比；refresh不重建多份每秒恢復效果。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2004–2045](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2004-L2045)
- [scripts/settings/talent/talent_settings_zealot.lua：43–48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L43-L48)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1917–1941](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1917-L1941)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1836–1864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1836-L1864)

## 算例條件與待確認事項

- **傷害與恢復算例**：基礎 100 點傷害變成 100 × 1.1 = 110 點；最大韌性 100 時，每秒補 100 × 15% ÷ 5 = 3 點。第 3 秒重新觸發、之後完整持續到第 8 秒，合計可補 24 點，仍以韌性缺額為限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3d3cbd01`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_elite_kills_empowers.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/e3c3d16b-83a0-4dfb-a797-080ed9e63c4b)

圖片僅供技能辨識，不作機制證據。

