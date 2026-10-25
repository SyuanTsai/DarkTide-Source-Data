# 狂熱(Hypex)：原始碼依據

[English](en/broker_stimm_concentration_5b.md)

[返回玩家說明](README.md#broker_stimm_concentration_5b)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_concentration_5b)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_concentration_5b`；名稱鍵：`loc_talent_broker_stimm_concentration_b`；描述鍵：`loc_talent_buff_cooldown_on_melee_kills`。
- 節點：`node_cfc646a9-648a-402d-bcb5-7656f2852309`；分類：興奮劑配方；配點成本：5 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- 掛載proc_buff後監聽on_kill並用CheckProcFunctions.on_melee_kill。子Buff duration=1、max_stacks=1、refresh_duration_on_stack=true，因此重觸發只重新計時。
- 子Buff combat_ability_resource_regen_modifier基值.75，再乘stat_buff_multiplier()返回的recipe參數.75；Buff._calculate_stat_buffs先相乘才累加，實際加成.5625。
- format_values.cooldown=.75在中英都顯示75%；這是固定實作與共同文字數值差異，實際數值尚待遊戲內核對，不列繁中誤譯。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3926–3958](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3926-L3958)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：825–864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L864)
- [scripts/settings/buff/buff_settings.lua：742–742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L742)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：116–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L116-L145)
- [scripts/settings/talent/talent_settings_broker.lua：758–768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L758-L768)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：689–712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L689-L712)

## 算例條件與待確認事項

- **恢復算例**：前置抗焦慮藥I～IV 提供 25%，再加這項 56.25%，該秒恢復倍率為 1 + 25% + 56.25% = 1.8125。原本每秒恢復 1 秒冷卻，現在該秒恢復 1.8125 秒。
- 藥效結束會移除觸發器；已經取得的1秒內部Buff依自身時間到期，不保證同時瞬間清除。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9c1a429b`。
- 同源繁中與英文都使用cooldown=75%參數；固定Buff數值.75又乘配方倍率.75，實際.5625。兩語一致，不能當作繁中翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_concentration_5b.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/77f46379-3f89-4c81-8240-a0dc288fb868)

圖片僅供技能辨識，不作機制證據。

