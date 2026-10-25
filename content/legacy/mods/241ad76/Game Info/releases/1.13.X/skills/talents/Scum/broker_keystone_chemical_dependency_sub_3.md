# 化學藥劑全開(Maxed Out Chems)：原始碼依據

[English](en/broker_keystone_chemical_dependency_sub_3.md)

[返回玩家說明](README.md#broker_keystone_chemical_dependency_sub_3)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency_sub_3)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_chemical_dependency_sub_3`；名稱鍵：`loc_talent_broker_keystone_chemical_dependency_sub_3`；描述鍵：`loc_talent_broker_keystone_chemical_dependency_sub_3_desc`。
- 節點：`node_2459c212-b00a-43ce-a3b6-ad55e67605ed`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 設定 sub_3_duration=60、sub_3_max_stacks=4，核心 duration=90、max_stacks=max_stacks_cap=3。啟用升級時 stack start_func 將 max_stacks 與 max_stacks_cap 各加 1，並把持續時間調整 60−90=−30 秒，故最終為 4 層／60 秒。
- buff 仍使用 refresh_duration_on_stack=true 與 refresh_duration_on_remove_stack=true；所有層共用 start_time，新增層與每次衰退後都重新開始完整 60 秒計時。
- 每層 +0.10 resource regen modifier 不變；能力回充消費端以 (base_resource_regen_per_second + flat_regen)×modifier 計算，因此 4 層使純基礎回充率乘 1.40。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2579–2613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2579-L2613)
- [scripts/settings/talent/talent_settings_broker.lua：454–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3524–3578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3578)
- [scripts/extension_systems/buff/buffs/buff.lua：29–44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua：631–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L863)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2579–2613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2579-L2613)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1612–1634](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1612-L1634)

## 算例條件與待確認事項

- **回充算例**：4 層為 1+4×0.10=1.40；基礎 60 秒的完整線性回充約為 60/1.40=42.86 秒。
- **衰退算例**：最後一次使用興奮劑後 60 秒移除 1 層；若仍無新層，再過 60 秒移除下一層。
- 回充時間示例假設回充不中斷、使用純基礎回充率且沒有其他修正；技能資源暫停或其他修正會改變實際時間。
- 新增第 4 層會延長依賴效果，卻把單層計時從 90 秒縮短為 60 秒；層數仍一次衰退一層。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`80f78eef`。
- 繁中與英文都指出每層改為 60 秒並將上限提高到 4；程式透過增加堆疊上限並把核心 90 秒時長減少 30 秒實作。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_chemical_dependency_sub_3.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/51827890-e735-4220-8959-bf37381e0fc8)

圖片僅供技能辨識，不作機制證據。

