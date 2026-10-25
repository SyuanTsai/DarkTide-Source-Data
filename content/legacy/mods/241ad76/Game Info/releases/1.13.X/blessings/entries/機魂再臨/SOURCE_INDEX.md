# 機魂再臨：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I–IV tiers / formatter | [Own I–IV tiers / formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L387-L418) |
| Own on-kill wrapper, gates and callback | [Own on-kill wrapper, gates and callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L89-L114) |
| P3 actual action graph and weapon-special tuning | [P3 actual action graph and weapon-special tuning](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L482-L2823) |
| Charge class init/recovery/activation | [Charge class init/recovery/activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_cooldown_charges.lua#L6-L68) |
| Special sweep activation/profile choice | [Special sweep activation/profile choice](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L258-L1740) |
| Death event payload | [Death event payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| Weakspot kill predicate | [Weakspot kill predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L94) |
| Weapon special kill predicate | [Weapon special kill predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L568-L570) |
| Exact attacking item predicate | [Exact attacking item predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Currently wielded slot gate | [Currently wielded slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| ProcBuff event handling and cooldown origin | [ProcBuff event handling and cooldown origin](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Unwield deactivation call | [Unwield deactivation call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_unwield.lua#L40-L50) |
| Equip/switch/unequip lifecycle | [Equip/switch/unequip lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| light_sword_linesman_active_p3 完整定義 | [light_sword_linesman_active_p3 完整定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L2691-L2809) |
| light_sword_smiter_active_p3 完整定義 | [light_sword_smiter_active_p3 完整定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L2896-L2975) |
| light_sword_stab_active_p3 完整定義 | [light_sword_stab_active_p3 完整定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L3062-L3142) |
| heavy_sword_linesman_active_p3 完整定義 | [heavy_sword_linesman_active_p3 完整定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L3245-L3365) |
| heavy_sword_smiter_active_p3 完整定義 | [heavy_sword_smiter_active_p3 完整定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L3442-L3536) |
| heavy_sword_stab_active_p3 完整定義 | [heavy_sword_stab_active_p3 完整定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/settings_templates/power_sword_damage_profile_templates.lua#L3634-L3733) |
| heavy_sword_linesman_active_p3 action_heavy_2_special | [heavy_sword_linesman_active_p3 action_heavy_2_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2271-L2273) |
| heavy_sword_smiter_active_p3 action_heavy_3_special | [heavy_sword_smiter_active_p3 action_heavy_3_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2511-L2513) |
| heavy_sword_stab_active_p3 action_heavy_1_special | [heavy_sword_stab_active_p3 action_heavy_1_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1875-L1877) |
| light_sword_linesman_active_p3 action_light_4_special | [light_sword_linesman_active_p3 action_light_4_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2435-L2437) |
| light_sword_linesman_active_p3 action_light_5_special | [light_sword_linesman_active_p3 action_light_5_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2676-L2678) |
| light_sword_smiter_active_p3 action_light_3_special | [light_sword_smiter_active_p3 action_light_3_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2196-L2198) |
| light_sword_stab_active_p3 action_light_1_special | [light_sword_stab_active_p3 action_light_1_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1787-L1789) |
| light_sword_stab_active_p3 action_light_2_special | [light_sword_stab_active_p3 action_light_2_special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2108-L2110) |
| 自然充能完整分支 1 | [自然充能完整分支 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_cooldown_charges.lua#L6-L45) |
| 自然充能完整分支 2 | [自然充能完整分支 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_cooldown_charges.lua#L56-L67) |
| 自然充能完整分支 3 | [自然充能完整分支 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2775-L2823) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

自身 Buff 是 on_kill ProcBuff，依序要求目前持用對應槽位、攻擊物品與祝福物品相同、攻擊結果為擊殺且命中弱點、攻擊傷害設定帶 weapon_special=true。P3 動力劍已啟用的特殊輕／重揮擊使用六種 active profile，皆設 weapon_special=true；未啟用的普通輕／重揮擊、純推擊及推擊追擊的 profile 不帶該旗標。蓄力起手本身不是造成擊殺的命中。

死亡結果會把 hit_weakspot、damage_profile.weapon_special、attacking_item 與 attack_result 放入 on_kill 事件。ProcBuff 收到事件後再檢查持用與其餘條件；第一次裝上時冷卻可用。成功事件的回呼直接對 slot_primary.num_special_charges 做 min(目前值+1, 最大值)，事件處理後才記錄冷卻開始時間。滿充時加值被上限截住，但事件仍成功，所以同樣進入冷卻。

P3特殊充能最大6道、每次啟用消耗1道；武器類別把首次自然回復排在啟用後5秒（4秒特殊時長+1秒冷卻），其後每秒回復一道，且在未持用時仍更新。祝福回呼不改此計時欄位。P3自訂停用回呼在一般切出時關閉特殊狀態並標記停用已處理，不落入通用清零剩餘充能分支；切出後保留充能與自然回復。真卸下武器會移除 on_equip 祝福並刪除武器實例。

- 六個 active profile 的完整定義均有 weapon_special=true，八筆本型號特殊動作欄位實際接入這六個 profile；不是單以啟用狀態或名稱推定。CheckProcFunctions.on_weapon_special_kill直接讀params.weapon_special與attack_result，事件 producer由damage_profile.weapon_special填值。
- WeaponSpecialCooldownCharges 每次 on_special_activation 都消耗1並令 next_charge_recovery_time=t+4+1；on_special_deactivation為no-op。返還callback只寫num_special_charges，不寫自然回充clock。

充能更新：`啟用後 = max(啟用前 − 1, 0)`；`祝福回呼後 = min(事件處理前 + 1, 6)`。自然回復獨立排程：`首次回復時間 = 啟用時間 + 4 秒 active_duration + 1 秒 cooldown`；未滿充到期加 1 道、下次排在目前更新時間+1秒。祝福冷卻不等於武器自然回復速度。

- 首次成功事件冷卻可用；tier差異只改祝福觸發冷卻，不改返還量/6道上限或自然回充速度。t_act每次啟用都重排next=t_act+5，不是只首次啟用才排定；自然更新只在未滿6且t≥next時加1，再以當次更新t+1排下一道。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_251`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_251.png)｜[Issue附件](https://github.com/user-attachments/assets/47fbf600-586e-4ed1-90de-36afbd08a350)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 機械神教動力劍等級覆寫 | [機械神教動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L387-L418) |
| 機械神教動力劍Buff接入 | [機械神教動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L89-L114) |
| UI 機械神教動力劍 | [UI 機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L552) |
| 機械神教動力劍 布蘭克斯 Mk VI匯入 | [機械神教動力劍 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L15) |
| 機械神教動力劍 布蘭克斯 Mk VI接入 | [機械神教動力劍 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3372-L3374) |
