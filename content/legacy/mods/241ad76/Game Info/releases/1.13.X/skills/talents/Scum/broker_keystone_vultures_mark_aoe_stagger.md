# 兀鷲推擊(Vulture's Push)：原始碼依據

[English](en/broker_keystone_vultures_mark_aoe_stagger.md)

[返回玩家說明](README.md#broker_keystone_vultures_mark_aoe_stagger)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_aoe_stagger)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_vultures_mark_aoe_stagger`；名稱鍵：`loc_talent_broker_keystone_vultures_mark_aoe_stagger`；描述鍵：`loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc`。
- 節點：`node_c2a46314-e334-402f-a37d-12e5f58d1594`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- proc buff 監聽 on_kill；check_proc_func 要求 CheckProcFunctions.on_ranged_hit 與 on_elite_or_special_kill 同時成立。後者要求攻擊結果為 died 且目標帶 elite 或 special tag；前者接受 ranged attack_type 或 count_as_ranged_attack damage profile。
- 符合條件時在玩家位置 + Vector3(0,0,0.65) 建立 broker_vultures_mark_aoe_stagger explosion。Explosion template 的 min_radius 和 radius 都是 3，篩選 villains。
- DamageProfileTemplate 設 attack power distribution=0、impact=0.55、stagger_override=medium；impact 對 unarmored/player 為 1、armored/resistant/berserker/disgustingly_resilient 為 0.4、super_armor/void_shield 為 0.1。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2426–2434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2426-L2434)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3432–3450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3432-L3450)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：120–145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L145)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：216–224](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L224)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua：228–239](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L228-L239)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua：499–531](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L499-L531)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2426–2434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2426-L2434)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1635–1657](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1635-L1657)

## 算例條件與待確認事項

- **範圍算例**：擊殺點不影響爆炸中心；爆炸固定以玩家位置上方 0.65 公尺為中心，作用半徑 3 公尺。
- **Impact 算例**：設定基礎 impact 0.55；套用超級護甲係數 0.1 後為 0.55×0.1=0.055（未計其他 power 或 stagger 修正）。
- 半徑內是否被擊退或踉蹌仍受目標的 stagger resistance、護甲及其他狀態修正影響。
- 只監聽 on_kill 並要求遠程擊殺；毒針手槍 毒素 on_minion_death 的印記特例不會自動滿足此升級的 on_kill handler。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d98831c7`。
- 繁中與英文都描述遠程擊殺精英／專家時推開附近敵人；程式設定 3 公尺爆炸及中等踉蹌，沒有直接攻擊傷害。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_vultures_mark_aoe_stagger.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/a887e60a-cbd4-4d49-8e44-20661f7f2dcb)

圖片僅供技能辨識，不作機制證據。

