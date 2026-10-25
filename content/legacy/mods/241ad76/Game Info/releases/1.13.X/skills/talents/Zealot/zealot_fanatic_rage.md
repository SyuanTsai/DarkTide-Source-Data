# 熾熱虔誠(Blazing Piety)：原始碼依據

[English](en/zealot_fanatic_rage.md)

[返回玩家說明](README.md#zealot_fanatic_rage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_fanatic_rage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_fanatic_rage`；名稱鍵：`loc_talent_zealot_fanatic_rage`；描述鍵：`loc_talent_zealot_fanatic_rage_crit_desc`。
- 節點：`node_9e19621f-a49c-46a1-837a-056d1ea935bb`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 主鑰石授予 `zealot_preacher_crits_grants_stack` 特殊規則；Piety proc buff 監聽 `on_minion_death` 與 `on_hit`。敵方 minion death 在伺服器端檢查距玩家≤25公尺且 side_name 不同；程式未另外檢查擊殺者。`on_hit` 若判斷為暴擊即加1層，兩種來源共用同一 talent resource。
- 資源上限25。每次 `_fanatic_rage_add_stack` 都把共享的 `remove_stack_t` 設為當下+8秒；即使已滿層，額外事件也重設此時間與8秒 Fury buff。Fury 基礎 buff 為+0.15 critical strike chance，duration=8，且滿層重複加入會 refresh duration。
- 若八秒沒有新事件，先減少1層，後續單層衰退間隔為 `abs(current_resource / 5 - 5) × 0.8` 秒；剩24層時約0.16秒，剩1層時約3.84秒。這個衰退 timer 同時由擊殺與暴擊重設。
- Fury buff 停止時 stop_func 會將 resource 清為0。因此連續維持觸發能延長狂怒；中斷後狂怒到期會重置計數，不能把未滿25的舊層數帶入下一輪。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1071–1107](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1071-L1107)
- [scripts/settings/talent/talent_settings_zealot.lua：459–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L459-L468)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：765–978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L765-L978)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：979–999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L979-L999)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1296–1329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1296-L1329)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1071–1107](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1071-L1107)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1296–1329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1296-L1329)

## 算例條件與待確認事項

- **爆擊率算例**：原本爆擊率 5%，狂怒時變成 5% + 15% = 20%，不是 5% × 1.15。附近死亡與暴擊命中各自計數，因此暴擊擊殺可能同時符合兩項。
- 距離條件依事件位置與玩家位置計算；若事件沒有位置，程式以玩家位置作為事件位置。
- 衰退間隔公式描述程式排程，實際節奏受伺服器更新步長影響。
- 暴擊層數要求該核心鑰石授予的 special rule；此處按目前主鑰石定義描述。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c80efade`。
- 中英文都表示敵人在範圍內死亡可累積到狂怒、暴擊也計入；小兵對象、共用層數、衰退及到期重置屬實作補足。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_fanatic_rage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/7e8dfc94-5f9b-4292-a4e6-8190bebb48bc)

圖片僅供技能辨識，不作機制證據。

