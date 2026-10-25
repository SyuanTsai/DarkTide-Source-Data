# 勃然大怒(Thy Wrath be Swift)：原始碼依據

[English](en/zealot_damage_boosts_movement.md)

[返回玩家說明](README.md#zealot_damage_boosts_movement)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_damage_boosts_movement)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_damage_boosts_movement`；名稱鍵：`loc_talent_zealot_movement_speed_on_damaged`；描述鍵：`loc_talent_zealot_movement_speed_on_damaged_desc`。
- 節點：`node_9b7ccd7d-8eba-4b0e-9759-7e674c7dfde9`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_damage_taken只核對attacked_unit==holder，不要求health damage>0；active_duration2，movement_speed+.15。slowdown_immune與stun_immune為常駐keywords，不是proc_keywords。
- Stun.apply保留ignore_stun_immunity入口；本效果不等於所有控制免疫或Push系統的推力免疫。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3702–3729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3702-L3729)
- [scripts/settings/talent/talent_settings_zealot.lua：397–401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L397-L401)
- [scripts/utilities/attack/stun.lua：11–38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stun.lua#L11-L38)
- [scripts/utilities/attack/stun.lua：74–94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stun.lua#L74-L94)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3042–3062](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3042-L3062)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：725–751](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L725-L751)

## 算例條件與待確認事項

- **速度算例**：基礎移速 5 公尺／秒、沒有其他修正時，加速後為 5 × 1.15 = 5.75 公尺／秒。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bdaf3ea6`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_damage_boosts_movement.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/52db08a6-3729-466e-ac16-d02a1a7ebecb)

圖片僅供技能辨識，不作機制證據。

