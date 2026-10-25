# 極限電容(Redline Capacitors)：原始碼依據

[English](en/cryptic_redline.md)

[返回玩家說明](README.md#cryptic_redline)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_redline)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_redline`；名稱鍵：`loc_talent_cryptic_power_generation`；描述鍵：`loc_talent_cryptic_redline_charge_stacking_clarified_desc`。
- 節點：`node_4c399707-0cd3-4618-af06-a16a6cf05d28`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- cryptic_tree.lua 的節點125–153把 cryptic_redline 掛為護教軍鑰石；cryptic_talents.lua 將被動模板指向 cryptic_redline。顯示參數取 talent_settings_cryptic.lua 的5%層級、12秒、4層與+1最大充能。
- cryptic_redline 被動提供 ability_extra_charges=1，並監聽戰鬥技能充能補回及消耗事件。事件攜帶 num_charges_gained 或 num_charges_consumed；模板依事件數量逐次加入 cryptic_redline_stack。能力系統只在充能數實際增加或消耗時送出事件。
- cryptic_redline_stack 的 max_stacks 和 max_stacks_cap 均為4、duration為12秒；每次加層重設起始時間，達上限再觸發會重新計時但不增層。到期移除時若尚有多層，只移除1層並重設時間，因此層數逐個、每次約隔12秒衰減。
- 模板將 combat_ability_resource_regen_modifier 與 combat_ability_resource_restored_modifier 都設為每層0.05；Buff._calculate_stat_buffs 依層數重複套用，buff_settings 將兩者定為 additive_multiplier。能力系統自然回充公式會乘 regen modifier。直接恢復只有在 restore_ability_resource 的 ignore_stat_buffs=false 時才乘 restored modifier；restore_ability_charge_percentage 會明確傳 ignore_stat_buffs=true，因此該路徑不受紅線恢復倍率影響。
- 韌性承傷採 stepped_stat_buffs 表，不是把0.95連乘4次。每一層的表值為1−0.05×層數，且該屬性類型是 multiplicative_multiplier；因此1至4層分別為0.95、0.90、0.85、0.80。
- 額外充能由 ability_extra_charges 屬性加到能力最大充能數；實際可用上限仍依能力自身是否採用充能與其 max_charges/stat_buff 設定計算。

## 原始碼依據

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：125–153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L125-L153)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1393–1431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1393-L1431)
- [scripts/settings/talent/talent_settings_cryptic.lua：331–353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L331-L353)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1868–1936](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1868-L1936)
- [scripts/extension_systems/buff/buffs/buff.lua：689–733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)
- [scripts/extension_systems/buff/buffs/stepped_stat_buff.lua：10–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L29)
- [scripts/extension_systems/buff/buff_extension_base.lua：412–462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L462)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua：635–662](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L662)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：734–770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：773–879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1120–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1120-L1179)
- [scripts/settings/buff/buff_settings.lua：742–743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L743)
- [scripts/settings/buff/buff_settings.lua：1001–1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1001-L1004)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1393–1431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1393-L1431)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：125–153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L125-L153)

## 算例條件與待確認事項

- 靜態推演：4層下韌性傷害倍率為1−0.05×4=0.80；在沒有其他減傷、且100點傷害全由韌性承受時，實際承受80點。
- 靜態推演：以2%/秒的自然回充速率為例，4層後為2.4%/秒；這是回充資源速度增加20%，不是冷卻秒數直接減少20%。
- 靜態推演：3層時一次補回2個戰鬥技能充能，第1次到4層，第2次因達上限不增加層數，但重設12秒計時。
- 事件指向戰鬥技能充能，不應與閃擊充能或一般資源名稱混為一談；達上限的事件仍可重設持續時間。
- 回充速度+20%不等同冷卻時間直接減少20%；實際秒數還受技能基礎資源速率、其他增益、暫停條件及資源上限影響。直接恢復是否受加成依恢復路徑決定；例如 Higher Purpose 使用的 restore_ability_charge_percentage 會忽略 stat buffs。
- 以上是固定原始碼的靜態推演，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`22a7f709`。
- inventory 的繁中與英文都說明每次取得／消耗充能、5%韌性減傷與電容量生成、12秒、上限4層及額外最大充能。固定版將每層具體落在5%韌性承傷倍率步進與戰鬥技能資源回充倍率；直接恢復是否吃倍率由實際恢復路徑決定。未發現明確誤譯，UI未逐項展開不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone/cryptic_redline.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756)｜[圖片附件](https://github.com/user-attachments/assets/55fe932f-c298-4b33-ad21-efab7b9244e5)

圖片僅供技能辨識，不作機制證據。

