# 電容回收迴路(Capacitor Reclamation Loop)：原始碼依據

[English](en/cryptic_multi_hits_grant_power.md)

[返回玩家說明](README.md#cryptic_multi_hits_grant_power)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_multi_hits_grant_power)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_multi_hits_grant_power`；名稱鍵：`loc_talent_cryptic_multi_hits_grant_power`；描述鍵：`loc_talent_cryptic_multi_hits_grant_power_desc`。
- 節點：`node_17b66510-2729-4d8a-98a2-646758b5b00c`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Talent 數值為至少3名目標的命中條件、每次0.01份成本，觸發間隔0.25秒。模板取 params.target_number（若不是正值則退回 target_index），只在其等於3且目前時間不早於 multi_hit_window_end_t 時觸發，成功後將下一次可觸發時間設為 t+0.25。
- 因此「3名以上」由同一攻擊的第3個目標命中觸發一次；額外第4名以後目標不再為該攻擊增加恢復。0.25秒是觸發間隔限制，不是用來累計3次分散命中的窗口。
- 成功時 restore_ability_charge_percentage 使用0.01 × 單份成本；單份50點時恢復0.5點，底層固定精度資源會累積，完整份數則取 floor(資源 / 每份成本)。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1629–1651](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1629-L1651)
- [scripts/settings/talent/talent_settings_cryptic.lua：447–451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L447-L451)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2034–2071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2034-L2071)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1103)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：861–872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L861-L872)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1629–1651](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1629-L1651)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1543–1569](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1543-L1569)

## 算例條件與待確認事項

- 一次攻擊命中4名敵人 第3名目標命中時觸發一次：50 × 1% = 0.5點電容量；第4名不再為這次攻擊額外觸發。
- 連續8次符合條件的觸發，且每次間隔足夠 8 × 0.5點 = 4點電容量，保留為未滿一份的進度。
- 程式以第三個目標序號判斷，並對觸發加0.25秒間隔；不是要求在0.25秒內累積命中3次。
- 每次只補單份成本的1%，即50點成本時0.5點；若成本改變，實際點數跟著改變。
- inventory 中英都明示單次攻擊命中3名以上及恢復1%；文字未提觸發間隔、第三目標序號或小數進度屬程式細節。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`998c8ded`。
- 繁中與英文均寫同一次攻擊命中3名以上敵人後恢復1%，與程式在命中第3個目標時觸發一次相符。0.25秒間隔及1%以單份成本為基準，是原文省略的程式細節，沒有相反描述。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_multi_hits_grant_power.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/7557cf7d-9d8b-41ba-bff3-582bdcc5c063)

圖片僅供技能辨識，不作機制證據。

