# 電流爆發(Voltaic Burst)：原始碼依據

[English](en/cryptic_electrocution_push.md)

[返回玩家說明](README.md#cryptic_electrocution_push)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_electrocution_push)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_electrocution_push`；名稱鍵：`loc_talent_cryptic_electrocution_push`；描述鍵：`loc_talent_cryptic_electrocution_push_desc`。
- 節點：`node_4f58a882-02f4-4d7d-99f4-d2f5a996a632`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_push_hit specific_check內施加Buff但return false，不啟動ProcBuff冷卻；on_push_finish才以should_go_on_cooldown觸發並重置旗標。
- cryptic_electrocution_default duration3、max1、refresh，非每名敵人各12秒。

## 原始碼依據

- [scripts/settings/buff/weapon_buff_templates.lua：2619–2674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2619-L2674)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：151–174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/talent/talent_settings_cryptic.lua：627–629](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L627-L629)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3449–3494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3449-L3494)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2553–2567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2553-L2567)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2480–2504](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2480-L2504)

## 算例條件與待確認事項

- **時間算例**：推擊在第 0 秒結束，下一次能施加電擊的推擊最早在第 12 秒後；冷卻中的推擊仍保留本身的普通效果。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`642d90e7`。
- 中英一致；補充整次推擊共享冷卻與開始時間。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_push.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/80106b42-e788-43cb-a07a-ee69f668002f)

圖片僅供技能辨識，不作機制證據。

