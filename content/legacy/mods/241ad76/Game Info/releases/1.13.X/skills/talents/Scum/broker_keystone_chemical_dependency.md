# 化學性依賴(Chemical Dependency)：原始碼依據

[English](en/broker_keystone_chemical_dependency.md)

[返回玩家說明](README.md#broker_keystone_chemical_dependency)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_chemical_dependency`；名稱鍵：`loc_talent_broker_keystone_chemical_dependency`；描述鍵：`loc_talent_broker_keystone_chemical_dependency_desc`。
- 節點：`node_3c497305-70ec-4d49-a1e8-2bc3fdc2504c`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings 設 combat_ability_cooldown_regen_modifier=0.10、duration=90、max_stacks=3。stack template 把 0.10 掛到 stat_buffs.combat_ability_resource_regen_modifier；此 stat 是 additive_multiplier，每層都在基準倍率 1 上加 0.10。
- proc buff 監聽 on_syringe_used；直接用注射器時 action_use_syringe 對使用者 buff extension 發出事件，Broker Stimm Field 的 proximity logic 也對取得場內注射器效果的 unit 發出相同事件。
- stack template 設 refresh_duration_on_stack=true、refresh_duration_on_remove_stack=true。層數共享同一 start_time；使用時重設計時，逾時時內部一次移除一層並重設計時，所以沒有新興奮劑時逐層每 90 秒減少。
- PlayerUnitAbilityExtension 將基礎回充率加上平坦回充後乘上 resource_regen_modifier；因此 3 層的 1.30 作用於回充速率，實際所需冷卻時間近似除以 1.30。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2465–2511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2465-L2511)
- [scripts/settings/talent/talent_settings_broker.lua：454–463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3478–3497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3478-L3497)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3524–3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3566)
- [scripts/extension_systems/weapon/actions/action_use_syringe.lua：129–134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_use_syringe.lua#L129-L134)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：297–304](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L297-L304)
- [scripts/settings/buff/buff_settings.lua：742–743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L743)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua：631–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L863)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2465–2511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2465-L2511)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1395–1428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1395-L1428)

## 算例條件與待確認事項

- **回充算例**：3 層將倍率由 1 變為 1+0.10+0.10+0.10=1.30；基礎 60 秒的完整線性回充約為 60/1.30=46.15 秒。
- **衰退算例**：最後一次使用後 90 秒移除 1 層，之後若仍無新層，下一層在再過 90 秒移除。
- 冷卻時間算例假設技能資源以固定基礎速率回充且期間不中斷；技能的實際資源池、暫停回充、其他修正與資源消耗會改變結果。
- 達 3 層後再使用興奮劑不增加第 4 層，但會重新計時堆疊 buff 計時；若同時選取化學強化升級，該次興奮劑仍會另行執行 50% 韌性回補。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e80edf15`。
- 繁中與英文一致描述使用興奮劑取得層數、每層的技能冷卻增幅、上限與逐層衰退；程式把增幅實作為戰鬥技能資源回充倍率，並由共用 syringe event 同時支援直接使用及 Stimm Field。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone/broker_keystone_chemical_dependency.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/9b42d72f-2429-446a-bf75-d5d87db98b36)

圖片僅供技能辨識，不作機制證據。

