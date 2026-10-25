# 毒性陷阱(Booby Trap)：原始碼依據

[English](en/broker_ability_stimm_field_sub_2.md)

[返回玩家說明](README.md#broker_ability_stimm_field_sub_2)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field_sub_2)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_stimm_field_sub_2`；名稱鍵：`loc_talent_broker_ability_stimm_field_sub_2`；描述鍵：`loc_talent_broker_ability_stimm_field_sub_2_desc`。
- 節點：`node_1eebfc9e-efbd-4df8-9562-3097cb46af1f`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- broker_stimm_field_explode 規則讓 ProximityBrokerStimmField 在 destroy 收尾時檢查 is_job_completed；只有場域已達 life_time、工作正常完成時才生成 ExplosionTemplates.broker_stimm_field。未完成或取消的工作不通過該條件。
- 爆炸半徑3公尺，damage_type=grenade_frag，使用一般/近距離傷害模板；profile on_damage_dealt 設 neurotoxin_interval_buff3=7。Attack.execute 僅在造成正傷害且有目標 buff extension 時處理傷害後 buff，再用 add_internally_controlled_buff_with_stacks 精確加入7層。
- neurotoxin_interval_buff3 是毒素間隔 buff，duration=2.6秒、interval=0.35秒、最多30層、疊層重設持續時間。7層是爆炸命中時加入的疊層數，不等於7次傷害或直接7倍傷害。
- 場域工作的結束會解除能力資源暫停；冷卻60秒自然充能從部署物工作結束後恢復。此爆炸一次性，不以冷卻額外扣除或縮短。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：550–572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L550-L572)
- [scripts/settings/talent/talent_settings_broker.lua：170–188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：107–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L107-L125)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：153–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L153-L168)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：195–210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L195-L210)
- [scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua：599–625](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L599-L625)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua：428–490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L428-L490)
- [scripts/utilities/attack/attack.lua：713–749](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L713-L749)
- [scripts/utilities/attack/attack.lua：1097–1111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L1097-L1111)
- [scripts/settings/buff/weapon_buff_templates.lua：1493–1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1523)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：98–137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L137)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：825–884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/utilities/attack/damage_calculation.lua：219–228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)
- [scripts/settings/damage/power_level_settings.lua：7–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua：386–445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：550–572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L550-L572)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2117–2139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2117-L2139)

## 算例條件與待確認事項

- **毒素疊層算例**：爆炸命中並造成傷害時加入 7 層 neurotoxin_interval_buff3；此數字是狀態層數，該狀態每0.35秒結算、基礎持續2.6秒，不表示直接傷害為7倍。
- 爆炸在場域生命期正常完成時觸發；固定版本的結束流程以 is_job_completed 為必要條件。
- 毒素疊層附加在實際受到正爆炸傷害且具備 buff extension 的目標，不應解讀成無條件感染所有單位。
- 固定版傷害 profile 提供破片傷害與毒素後續傷害；本稿不將層數換算成固定總傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`59a6d46b`。
- 繁中與英文都寫場域時間結束後爆炸，並對附近敵人施加7層毒素。傷害 profile 的 on_damage_dealt 實際只對受爆炸正傷害目標加入7層，屬程式觸發條件補充，原文省略不構成翻譯勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_stimm_field_sub_2.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/c3cdd1a9-e1eb-4e29-9a5e-6bae44c280a4)

圖片僅供技能辨識，不作機制證據。

