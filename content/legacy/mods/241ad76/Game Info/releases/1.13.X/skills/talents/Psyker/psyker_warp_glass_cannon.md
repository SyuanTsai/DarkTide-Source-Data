# 亞空間意志(Empyric Resolve)：原始碼依據

[English](en/psyker_warp_glass_cannon.md)

[返回玩家說明](README.md#psyker_warp_glass_cannon)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_warp_glass_cannon)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_warp_glass_cannon`；名稱鍵：`loc_talent_psyker_warp_glass_cannon`；描述鍵：`loc_talent_psyker_warp_glass_cannon_desc`。
- 節點：`node_42b4a214-4619-4b7a-9a92-b17b8ed1f10f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- warp_charge_amount=.6 與 toughness_replenish_multiplier=.7 皆乘算。recover_percentage_toughness 在ignore_stat_buffs=false時才套恢復修正；直接設定韌性的效果不能自行套用。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3357–3364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3357-L3364)
- [scripts/settings/talent/talent_settings_psyker.lua：60–63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L60-L63)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2389–2430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2389-L2430)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：2109–2135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2109-L2135)

## 算例條件與待確認事項

- **反噬算例**：原本產生 20 個百分點反噬，變成 20 × 0.6 = 12 個百分點；另有獨立 10% 反噬減免時，為 20 × 0.6 × 0.9 = 10.8 個百分點。
- **恢復算例**：原本恢復 10 點韌性，變成 10 × 0.7 = 7 點；若另有 25% 恢復加成，則為 10 × 1.25 × 0.7 = 8.75 點，仍受最大韌性限制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3e435c7d`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_warp_glass_cannon.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/49c99b4c-1fdc-4355-900d-2e4b4c733ba8)

圖片僅供技能辨識，不作機制證據。

