# 思維活躍(Mind in Motion)：原始碼依據

[English](en/psyker_venting_improvements.md)

[返回玩家說明](README.md#psyker_venting_improvements)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_venting_improvements)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_venting_improvements`；名稱鍵：`loc_talent_psyker_venting_doesnt_slow`；描述鍵：`loc_talent_psyker_improved_venting_desc`。
- 節點：`node_dafc9b1b-859e-44df-bea9-33fecbd3afc7`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- vent_warp_charge_decrease_movement_reduction=0、reload_decrease_movement_reduction=0、movement_speed=.05 均在 stat_buffs。check_active_func 僅供啟用顯示，不將無條件 stat 改為 conditional_stat。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1955–1983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1955-L1983)
- [scripts/settings/talent/talent_settings_psyker.lua：236–240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L236-L240)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1594–1610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1594-L1610)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：747–774](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L747-L774)

## 算例條件與待確認事項

- **移速算例**：無其他修正、該階段原本每秒移動 5 公尺時，5 × (1 + 5%) = 5.25 公尺。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`86b17787`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_venting_improvements.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/86748037-d25a-449c-881a-b80060374012)

圖片僅供技能辨識，不作機制證據。

