# 褻瀆必懲(Punish Impiety)：原始碼依據

[English](en/zealot_push_attacks_attack_speed.md)

[返回玩家說明](README.md#zealot_push_attacks_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_push_attacks_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_push_attacks_attack_speed`；名稱鍵：`loc_talent_zealot_damage_after_heavy_attack`；描述鍵：`loc_talent_zealot_push_attacks_attack_speed_desc`。
- 節點：`node_cb819666-6781-499a-bb33-9a43ed61b4b3`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_push_finish建立push旗標，on_action_finish要求new_interrupting_action；下一個on_sweep_start標valid，再由首次on_hit觸發並清除valid。空揮在on_sweep_finish清掉旗標。
- 攻速只影響武器動作time_scale_stat_buffs列入melee_attack_speed的動作；共用處理先加算速度，再用total_time/time_scale換算動作時間。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2600–2659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2600-L2659)
- [scripts/settings/talent/talent_settings_zealot.lua：138–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L138-L141)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2386–2405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2386-L2405)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：675–697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L675-L697)

## 算例條件與待確認事項

- **速度算例**：只計這項加成，原本 1 秒的受影響動作變成 1 ÷ 1.1 ≈ 0.909 秒；已有同階段 20% 攻速時，則為 1 ÷ (1 + 20% + 10%) ≈ 0.769 秒。
- 算例假設沒有其他時間縮放與速度上限，不保證整套連段、切換或僵直均縮短相同比例。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ab4ad805`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_push_attacks_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/a2373334-1398-4475-b263-5b2d56cf8b90)

圖片僅供技能辨識，不作機制證據。

