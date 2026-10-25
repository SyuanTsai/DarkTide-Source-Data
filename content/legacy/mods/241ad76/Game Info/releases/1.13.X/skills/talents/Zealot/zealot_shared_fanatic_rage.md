# 迅疾狂熱(Infectious Zeal)：原始碼依據

[English](en/zealot_shared_fanatic_rage.md)

[返回玩家說明](README.md#zealot_shared_fanatic_rage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_shared_fanatic_rage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_shared_fanatic_rage`；名稱鍵：`loc_talent_zealot_shared_fanatic_rage`；描述鍵：`loc_talent_zealot_shared_fanatic_rage_new_desc`。
- 節點：`node_2a3a12a6-983c-4998-8541-83e9266b031d`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此升級授予 `zealot_preacher_spread_fanatic_rage` special rule。個人 Fury buff 的 start_func 在伺服器端檢查該規則，並呼叫 `CoherencyUtils.add_buff_to_all_in_coherency(unit, buff_name, t, true)`；helper 的 true 參數將自己排除。
- 施加的是獨立 `zealot_fanatic_rage_shared` buff，duration=8、max_stacks=1，提供 `offensive_2.crit_chance=0.10`。共享值沒有讀取正義勇士的+10% special rule，故盟友仍固定+10%。
- 個人 Fury buff 的 start_func 只在 buff 初次建立時跑；滿層後重新加入會由 max-stack refresh 路徑重新計時個人 Fury start time，而不會重跑 start_func。共享 buff 因此可能在個人 Fury 被重新計時時仍按首次套用時間於8秒後結束。
- 本節點無單獨冷卻或層數；共享隊友集合是在 Fury buff 開始時按當下協同名單取得，不會在效果期間持續掃描補給新隊友。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1178–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1178-L1199)
- [scripts/settings/talent/talent_settings_zealot.lua：489–492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L489-L492)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：921–999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L921-L999)
- [scripts/extension_systems/coherency/coherency_utils.lua：5–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_utils.lua#L5-L25)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1377–1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1377-L1399)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1178–1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1178-L1199)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1377–1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1377-L1399)

## 算例條件與待確認事項

- **爆擊率算例**：隊友原本 5%，效果期間變成 5% + 10% = 15%。你的「正義勇士」不會把隊友這份 10 個百分點一起提高。
- 這段時間差是由原始碼的啟動回呼與重新計時路徑推導，未在遊戲內實測；應以固定 SHA 原始碼描述並與遊戲內表現確認。
- 程式只對當下協同集合呼叫加 buff；玩家中途進出協同的處理不由本節點持續監控。
- 若盟友自己也有可堆疊爆擊率的來源，最終爆擊率另行計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`95bbc544`。
- 英繁中都寫隊友在個人熾熱虔誠有效時取得爆擊率；程式是開始 Fury 時套用一次8秒共享 buff，個人 Fury 重新計時不會重跑分發。依1.13.1固定程式碼，持續效果時間可能與文案「while active」不一致；實際持續時間仍待遊戲內核對。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_shared_fanatic_rage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/d1133aca-9af8-4b47-934f-d073de0d4e1c)

圖片僅供技能辨識，不作機制證據。

