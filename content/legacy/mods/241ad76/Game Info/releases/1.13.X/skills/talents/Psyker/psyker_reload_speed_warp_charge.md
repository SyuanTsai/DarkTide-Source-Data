# 武器在手，信心我有。(Surety of Arms)：原始碼依據

[English](en/psyker_reload_speed_warp_charge.md)

[返回玩家說明](README.md#psyker_reload_speed_warp_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_reload_speed_warp_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_reload_speed_warp_charge`；名稱鍵：`loc_talent_psyker_reload_speed_warp`；描述鍵：`loc_talent_psyker_reload_speed_warp_desc`。
- 節點：`node_e3d09295-0206-4166-91c4-2371e8abf9e3`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional reload_speed=.3，門檻<=.8。on_reload_start紀錄彈數；on_reload以實際增量/maxclip當charge_level呼叫increase_immediate，prevent_explosion=true。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3456–3517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3456-L3517)
- [scripts/settings/talent/talent_settings_psyker.lua：76–80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L76-L80)
- [scripts/utilities/warp_charge.lua：1–100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L1-L100)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2495–2518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2495-L2518)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1923–1948](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1923-L1948)

## 算例條件與待確認事項

- **裝填算例**：僅比較受裝填速度影響的區段，原需 3 秒，變成 3 ÷ 1.3 ≈ 2.31 秒。
- **反噬算例**：彈匣容量 40 發、補回 20 發、無其他反噬修正時，增加 20 ÷ 40 × 15% = 7.5 個百分點反噬；補回整個彈匣才增加 15 個百分點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`62b8a0d4`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_reload_speed_warp_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/5bac250d-4cc2-48b2-9832-8408652cec12)

圖片僅供技能辨識，不作機制證據。

