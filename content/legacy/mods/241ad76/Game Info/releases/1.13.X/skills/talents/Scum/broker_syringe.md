# 專用興奮劑充能：原始碼依據

[English](en/broker_syringe.md)

[返回基礎效果](BASE_EFFECTS.md#broker_syringe)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`broker_syringe`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- broker_syringe定義指向broker_ability_syringe；conditional_base_talent_funcs只在已選broker_stimm設定中的任一配方時啟用，target_slot=slot_pocketable_small。
- ability max_charges1、regen1、resourcecost與cooldown同以ceil(15+60×clamp01((usedpoints−1)/29))求取。P0時min0，但無配方不啟用。
- pocketable consume_on_use=false、consume_ability_usage_cost=true、pause_ability_resource_regen=true、givable=false、undroppable=true、auto_use=true；因此是可恢復的職業物品。
- syringe_broker_buff依provider的各配方tier套入stat和外部效果；效果結束移除外部效果。持續15秒，額外syringe_duration加上；同名root存在時ability pause未滿足。

## 原始碼依據

- 延長藥效額外增加5秒：[數值設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L374-L376)；[套用至興奮劑持續時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2001-L2006)。

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L72-L89)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L590-L597)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L140-L209)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/pocketables/syringe_broker_pocketable.lua#L6-L35)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4205)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L220-L305)

## 算例與待確認事項

- 15點配方：44秒恢復，基本週期15+44=59秒。30點配方：75秒恢復，基本週期90秒。
- 未進行遊戲內注射、欄位操作及多人分享驗證；沒有獨立描述鍵，不用相近鍵充作原文。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
