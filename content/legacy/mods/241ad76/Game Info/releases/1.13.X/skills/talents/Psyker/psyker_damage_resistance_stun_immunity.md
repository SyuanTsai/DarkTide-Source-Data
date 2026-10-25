# 無形專注(Immaterial Focus)：原始碼依據

[English](en/psyker_damage_resistance_stun_immunity.md)

[返回玩家說明](README.md#psyker_damage_resistance_stun_immunity)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_damage_resistance_stun_immunity)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_damage_resistance_stun_immunity`；名稱鍵：`loc_talent_psyker_damage_resistance_stun_immunity`；描述鍵：`loc_talent_psyker_damage_resistance_stun_immunity_desc`。
- 節點：`node_fb6fc9c4-aed8-46c8-88a2-0ec1fa8e1eb0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- damage_taken_multiplier=.9無條件；conditional keyword stun_immune 由current>=.97判定，從true變false時加入4秒buff，max_stacks1重新計時。stun免疫不可推成抓取或所有控制免疫。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1786–1833](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1786-L1833)
- [scripts/settings/talent/talent_settings_psyker.lua：112–115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L112-L115)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2701–2722](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2701-L2722)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：2082–2108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2082-L2108)

## 算例條件與待確認事項

- **減傷算例**：只比較此減傷階段，100 點傷害變成 100 × 0.9 = 90 點。若另有獨立 20% 減傷，則為 100 × 0.8 × 0.9 = 72 點，合計減少 28%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c5294daa`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_resistance_stun_immunity.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/288f8a4c-fee3-4e56-8e0b-b2419e2a115b)

圖片僅供技能辨識，不作機制證據。

