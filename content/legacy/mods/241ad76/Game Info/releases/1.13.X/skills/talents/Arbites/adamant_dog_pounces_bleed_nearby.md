# 重顎獠牙(Razor-Jaw Augment)：原始碼依據

[English](en/adamant_dog_pounces_bleed_nearby.md)

[返回玩家說明](README.md#adamant_dog_pounces_bleed_nearby)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_dog_pounces_bleed_nearby)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_dog_pounces_bleed_nearby`；名稱鍵：`loc_talent_adamant_dog_pounces_bleed_nearby`；描述鍵：`loc_talent_adamant_dog_pounces_bleed_nearby_desc`。
- 節點：`node_f3713ddf-8e7b-443e-97a6-b997188f6096`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- dog_bleed旗標才給bleed6層，owner為companion。旗標位於ogryn/monster pounce及cyber_mastiff_push_aoe/close；human持續pounce本身沒有旗標。
- 通用bleed max16、interval.5、duration1.5、interval_stack_removal。威力=500*smoothstep(n/16)，bleeding攻擊分布175、無甲ADM.5=>87.5*smoothstep；只是假設無其他增減傷的護甲基準。

## 原始碼依據

- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua：227–235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L227-L235)
- [scripts/settings/damage/damage_profiles/minion_damage_profile_templates.lua：3120–3182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/minion_damage_profile_templates.lua#L3120-L3182)
- [scripts/settings/buff/weapon_buff_templates.lua：235–259](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L259)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：30–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L30-L64)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：59–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：443–465](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L465)
- [scripts/settings/talent/talent_settings_adamant.lua：256–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L256-L258)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2691–2723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2691-L2723)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：40–61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L40-L61)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：125–156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L125-L156)
- [scripts/settings/breed/breed_actions/companion/companion_dog_actions.lua：250–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_dog_actions.lua#L250-L279)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1449–1463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1449-L1463)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1010–1038](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1010-L1038)

## 算例條件與待確認事項

- **傷害算例**：在無甲、無其他修正的基準下，令層數比例為 n ÷ 16，每次傷害為 87.5 × (n ÷ 16)² × [3 − 2 × (n ÷ 16)]。6 層約 27.69 點，12 層約 73.83 點，16 層為 87.5 點；12 層並非 6 層傷害的兩倍。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`549c0cdb`。
- 繁中與英文均描述撲擊周邊流血；對大型目標的攻擊旗標與非線性傷害為補充，不當成錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dog_pounces_bleed_nearby.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/549d3657-c19a-49a6-b8ad-2c1e77080dfa)

圖片僅供技能辨識，不作機制證據。

