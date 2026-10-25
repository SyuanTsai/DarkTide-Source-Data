# 適應性戰鬥記憶體(Adaptive Combat Engram)：原始碼依據

[English](en/cryptic_dr_on_toughness_break.md)

[返回玩家說明](README.md#cryptic_dr_on_toughness_break)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_dr_on_toughness_break)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_dr_on_toughness_break`；名稱鍵：`loc_talent_cryptic_dr_on_toughness_break`；描述鍵：`loc_talent_cryptic_dr_on_toughness_break_desc`。
- 節點：`node_3215cbda-7600-4e99-85d5-b29a6a22bc08`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_player_toughness_broken只接受params.unit=self；ProcBuff冷卻判定active_start+active_duration+cooldown_duration，所以最短再觸發間隔20秒，不是15秒。
- buff只在破韌事件之後啟用，不將已結算的破韌傷害倒算減少。

## 原始碼依據

- [scripts/extension_systems/buff/buffs/proc_buff.lua：151–174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/utilities/attack/damage_calculation.lua：584–611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua：615–619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L615-L619)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3273–3293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3273-L3293)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2491–2517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2491-L2517)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：294–324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L294-L324)

## 算例條件與待確認事項

- **減傷算例**：沒有其他減傷時，100 × (1 − 30%) = 70 點；若另有獨立的 25% 減傷，則是 100 × 0.70 × 0.75 = 52.5 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`05a4e1a1`。
- 中英都把15秒寫成觸發間隔，但固定來源採5秒效果後加15秒冷卻。屬雙語文字與來源實作差異，版本對應為1.13.1，不能定為繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_dr_on_toughness_break.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/ea4be2ad-8b84-4e83-a056-993beed7b39c)

圖片僅供技能辨識，不作機制證據。

