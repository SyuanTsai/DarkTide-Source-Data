# 速效型興奮劑(Fast Acting Stimms)：原始碼依據

[English](en/broker_ability_stimm_field_sub_1.md)

[返回玩家說明](README.md#broker_ability_stimm_field_sub_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field_sub_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_stimm_field_sub_1`；名稱鍵：`loc_talent_broker_ability_stimm_field_sub_1`；描述鍵：`loc_talent_broker_ability_stimm_field_sub_1_desc`。
- 節點：`node_9abd28ea-b786-4e90-a185-4afabef584ec`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- special rule broker_stimm_field_linger 使 proximity 初始化時將 _life_time 改為 sub_1_life_time=5，並記錄 _linger_time=15。場域半徑仍為3公尺。
- 單位離場時，_remove_buff_from_unit 改呼叫 _make_linger，對已套用 buff 呼叫 remove_externally_controlled_buff_with_linger(local_id,...,15)。部署物生命期結束時 destroy 也會對仍在場域內的單位呼叫 _make_linger；所以離場或場域結束都可能保留已取得效果15秒，重新進場時會重新接回既有 buff。
- 場域工作生命期以5秒結束後不再有該 proximity job，player ability 的 manual pause fulfillment 因而恢復 resource regeneration；15秒 lingering buffs 不會延長能力冷卻暫停。冷卻資源每秒自然補1、每次充能成本60，所以部署後約5秒場域時間加60秒自然回充，共65秒至滿充。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：522–549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L522-L549)
- [scripts/settings/talent/talent_settings_broker.lua：170–188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：34–52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L34-L52)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：107–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L107-L125)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：308–364](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L308-L364)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua：220–305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L220-L305)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：98–137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L137)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：825–884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：522–549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L522-L549)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2094–2116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2094-L2116)

## 算例條件與待確認事項

- **冷卻算例**：基本場域5秒結束後恢復60秒自然充能，總計約5+60=65秒。隊友的場域效果可以再留15秒，但這不會延後場域冷卻。
- 15秒延續是離場或場域結束後身上效果的剩餘時間，不表示部署物本身再存在15秒。
- 冷卻以場域 job 結束作為恢復自然充能條件，沒有把效果延續時間加進暫停時長。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8022348e`。
- 繁中與英文都描述場域縮短至5秒、離開後效果再持續15秒；固定版程式在離場與場域結束時都讓已套用效果延續15秒。冷卻在場域本體結束後恢復是程式補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_stimm_field_sub_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/4ea2874c-338f-42ec-95cb-9f4c08e64794)

圖片僅供技能辨識，不作機制證據。

