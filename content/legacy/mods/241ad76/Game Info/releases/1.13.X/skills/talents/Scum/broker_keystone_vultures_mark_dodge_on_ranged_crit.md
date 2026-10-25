# 兀鷲閃避(Vulture's Dodge)：原始碼依據

[English](en/broker_keystone_vultures_mark_dodge_on_ranged_crit.md)

[返回玩家說明](README.md#broker_keystone_vultures_mark_dodge_on_ranged_crit)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_dodge_on_ranged_crit)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_vultures_mark_dodge_on_ranged_crit`；名稱鍵：`loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit`；描述鍵：`loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc`。
- 節點：`node_7c3d0b39-9457-4c3e-a4f6-3334c6d07b96`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- proc buff 監聽 on_hit 並使用 CheckProcFunctions.on_crit_ranged；該 check 要求 params.is_critical_strike 且 attack_type=ranged 或 damage_profile.count_as_ranged_attack。
- 觸發時加入 broker_vultures_mark_dodge_on_ranged_crit_dodge_buff。此 buff max_stacks=1、duration=1、refresh_duration_on_stack=true，並掛 keywords.count_as_dodge_vs_melee 與 keywords.count_as_dodge_vs_ranged。
- Dodge.is_dodging 對 attack_type=melee 或 incapacitating_grab 使用 melee dodge rules，因此 count_as_dodge_vs_melee 也覆蓋擒抱；attack_type=ranged 則查 count_as_dodge_vs_ranged。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2450–2464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2450-L2464)
- [scripts/settings/talent/talent_settings_broker.lua：451–453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L451-L453)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3452–3477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3452-L3477)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：336–344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L344)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：100–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L127)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2450–2464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2450-L2464)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1681–1703](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1681-L1703)

## 算例條件與待確認事項

- **時間算例**：第 0 秒發生遠程暴擊時，判定 buff 為 1 秒；若第 0.6 秒再次遠程暴擊，計時重設，效果延至第 1.6 秒。
- **判定算例**：buff 活躍時，Dodge.is_dodging 對 melee、incapacitating_grab 與 ranged 類型會由對應 keyword 回傳為閃避。
- 實際攻擊是否被閃避，取決於該攻擊是否呼叫並採用 Dodge.is_dodging 判定；此 buff 本身不改變攻擊傷害或移動狀態。
- 此 buff 沒有 count_as_dodge_vs_all；它只命中 Dodge.is_dodging 的 melee、incapacitating_grab（使用 melee 規則）及 ranged 分支，其他攻擊類型若不採這些分支不會因此算作閃避。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c8880e0b`。
- 繁中與英文稱「所有攻擊」視為閃避；本版 Dodge.is_dodging 的實際 keyword 分支覆蓋 melee、incapacitating_grab（依 melee 規則）及 ranged，並未設 count_as_dodge_vs_all，故解讀依該函式實際查詢的攻擊類型。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_vultures_mark_dodge_on_ranged_crit.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/00fcee1e-616c-4283-ade2-f67fc6657a7e)

圖片僅供技能辨識，不作機制證據。

