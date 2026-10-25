# 勢不可擋(Unstoppable Momentum)：原始碼依據

[English](en/ogryn_movement_speed_after_ranged_kills.md)

[返回玩家說明](README.md#ogryn_movement_speed_after_ranged_kills)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_movement_speed_after_ranged_kills)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_movement_speed_after_ranged_kills`；名稱鍵：`loc_talent_ogryn_ranged_kill_grant_movement_speed`；描述鍵：`loc_talent_ogryn_ranged_kill_grant_movement_speed_desc`。
- 節點：`node_a68be7fb-c454-4cfd-9ab9-626b1facc88b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_ranged_kill；proc_stat movement_speed=.2 active_duration3，沒有cooldown因此可再次觸發並覆寫_active_start_time。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：2248–2265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2248-L2265)
- [scripts/settings/talent/talent_settings_ogryn.lua：245–248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L245-L248)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：173–194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L194)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：323–345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L323-L345)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：743–763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L743-L763)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：459–485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L459-L485)

## 算例條件與待確認事項

- **速度算例**：原本每秒移動 5 公尺，沒有其他修正時變成 5 × 1.2 = 6 公尺／秒；已有同階段 10% 加成時，則為 5 × (1 + 10% + 20%) = 6.5 公尺／秒。
- 算例隔離移動速度倍率；實際速度另受移動狀態、武器與其他限制影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b22afedc`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_movement_speed_after_ranged_kills.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/01fd23cb-46d2-41fa-bfc3-d8b1d17f43a3)

圖片僅供技能辨識，不作機制證據。

