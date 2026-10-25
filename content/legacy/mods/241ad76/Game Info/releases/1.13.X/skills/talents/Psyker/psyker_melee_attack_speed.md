# 迅雷之勢(Lightning Speed)：原始碼依據

[English](en/psyker_melee_attack_speed.md)

[返回玩家說明](README.md#psyker_melee_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_melee_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_melee_attack_speed`；名稱鍵：`loc_talent_psyker_melee_attack_speed`；描述鍵：`loc_talent_psyker_melee_attack_speed_desc`。
- 節點：`node_f33e4491-1a9b-444b-b4f8-835aa37a6a87`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- melee_attack_speed=.1，加到動作播放速率。需區分攻擊速率與不受該係數影響的動作等待。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3162–3168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3162-L3168)
- [scripts/settings/talent/talent_settings_psyker.lua：46–48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L46-L48)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2241–2263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2241-L2263)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1734–1761](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1734-L1761)

## 算例條件與待確認事項

- **時間算例**：只比較受攻速影響的動作區段，原本 1 秒且沒有其他攻速加成時，變成 1 ÷ 1.1 ≈ 0.909 秒；不等於整個連段固定縮短 10%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`10f28165`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_melee_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/ac3d53fd-1b36-40d7-8ee1-275804b29c63)

圖片僅供技能辨識，不作機制證據。

