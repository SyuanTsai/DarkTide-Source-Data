# 電能獠牙(Voltaic Mandibles Augment)：原始碼依據

[English](en/adamant_dog_attacks_electrocute.md)

[返回玩家說明](README.md#adamant_dog_attacks_electrocute)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_dog_attacks_electrocute)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_dog_attacks_electrocute`；名稱鍵：`loc_talent_adamant_dog_attacks_electrocute`；描述鍵：`loc_talent_adamant_dog_attacks_electrocute_desc`。
- 節點：`node_4c33cf5f-8516-4c2d-bc50-7afd037eb239`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 只有攻擊者是自己的companion，且damage_profile.companion_pounce=true才加入子buff；不是所有犬攻擊無條件電擊。human/ogryn/monster pounce與initial/no_damage pounce都有此旗標。
- 子buff max_stacks=1、refresh、duration5、interval[.3,.8]，威力500；傷害歸玩家owner而非犬。interrupter標籤會跳過interval傷害。
- shockmaul_stun_interval_damage的attack[50,65]預設插值.5=>57.5；無甲ADM[.305,.695]=>.5，故28.75；未把不固定跳數推成5秒總傷。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3244–3291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3244-L3291)
- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua：181–287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L181-L287)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：7–46](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L7-L46)
- [scripts/settings/equipment/weapon_templates/power_mauls/settings_templates/power_maul_damage_profile_templates.lua：616–657](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/settings_templates/power_maul_damage_profile_templates.lua#L616-L657)
- [scripts/settings/damage/damage_profile_settings.lua：52–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_settings.lua#L52-L83)
- [scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua：8–12](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua#L8-L12)
- [scripts/utilities/attack/damage_profile.lua：342–381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L342-L381)
- [scripts/utilities/attack/damage_calculation.lua：63–108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L108)
- [scripts/settings/talent/talent_settings_adamant.lua：149–152](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L149-L152)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3215–3242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3215-L3242)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：40–61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L40-L61)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua：125–156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L125-L156)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1087–1101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1087-L1101)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：586–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L586-L612)

## 算例條件與待確認事項

- **傷害算例**：未受其他加成、命中一般無甲部位時，單次基準電擊為 57.5 × 0.5 = 28.75 點；換成防彈護甲的基準係數 1，則為 57.5 點。實際仍受敵人部位、抗性與其他傷害加成影響。
- 電擊狀態與各敵人的實際控制反應仍須遊戲內確認；interrupter例外不擅自對應未核實的敵人名稱。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f2c7dafd`。
- 繁中與英文都概稱犬的攻擊；實作限定撲擊類傷害設定。觸發範圍的文字與實作差異待遊戲內核對對，不直接當成誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dog_attacks_electrocute.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/4ce13efe-7a81-48cd-9bb6-47dfb55f63b8)

圖片僅供技能辨識，不作機制證據。

