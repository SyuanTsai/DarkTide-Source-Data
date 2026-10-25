# 精算順序(Calculated Priority)：原始碼依據

[English](en/cryptic_precision_stance_damage_on_elite_kill.md)

[返回玩家說明](README.md#cryptic_precision_stance_damage_on_elite_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_damage_on_elite_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_precision_stance_damage_on_elite_kill`；名稱鍵：`loc_talent_cryptic_precision_stance_damage_on_elite_kill`；描述鍵：`loc_talent_cryptic_precision_stance_damage_on_elite_kill_desc`。
- 節點：`node_b983128b-a5ad-487d-9fdd-66656de8ffb4`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 進階戰鬥教範buff存在時，on_kill同時要求on_ranged_kill與on_elite_kill，符合後增加cryptic_precision_stance_damage_on_elite_kill_stack。
- 每層damage=0.05，最多5層、10秒，新增層重設倒數。此為一般傷害同階段加算；5層增加25%，不是每次命中固定增加25點。
- 子buff獨立於能力存在，不在精準姿態stop_func追蹤的bonus_buff_ids中，因此能力關閉後已獲得的層數持續到自身10秒結束；只是無法再靠此能力取得新層。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：405–432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L405-L432)
- [scripts/settings/talent/talent_settings_cryptic.lua：120–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L120-L124)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：403–408](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L403-L408)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：461–502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L461-L502)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：698–715](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L698-L715)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：96–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L105)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：216–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L230)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：428–460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L428-L460)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：405–432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L405-L432)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2577–2599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2577-L2599)

## 算例條件與待確認事項

- 進階戰鬥教範啟動時，以遠程攻擊擊殺2名精英：獲得2層，共+10%傷害，持續10秒。
- 啟動期間累積5次符合條件的擊殺：達到5層上限，共+25%傷害；再取得一層時不會超過上限，但會重設10秒時間。
- 近戰擊殺、非精英擊殺，以及進階戰鬥教範未啟動時的擊殺都不符合此效果的程式條件。
- 此數值修正傷害，不代表每次命中固定多扣25點生命。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0da94924`。
- 繁中與英文都說進階戰鬥教範啟動時，擊殺精英可疊加傷害，並列出每層數值、10秒及5層上限；來源碼另外要求擊殺由遠程攻擊造成。文字未列這項限制，但沒有否定它。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_damage_on_elite_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/9cbfaa3e-c8bf-42b8-98a4-5e5c6ee9c033)

圖片僅供技能辨識，不作機制證據。

