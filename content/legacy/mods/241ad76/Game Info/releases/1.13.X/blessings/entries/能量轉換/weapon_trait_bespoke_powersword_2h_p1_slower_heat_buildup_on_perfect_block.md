# 能量轉換(Energy Transfer)：上古神刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_2h_p1_slower_heat_buildup_on_perfect_block`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L496-L575)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L368-L382)。
- 適用型號：上古神刃 軍務部 Mk X、上古神刃 軍務部 Mk II。

## 機制與公式

- 兩trait override皆為active_duration5、cooldown_duration0；proc_stat_buffs逐級`overheat_over_time_amount=0.84/0.82/0.80/0.78`、`overheat_dissipation_multiplier=1.03/1.04/1.05/1.06`。P1 wrapper預設active3/cooldown5及散熱1.5被取代；P2預設散熱1.5亦被取代。[Proc持續時間覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104)、[冷卻覆寫與可刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195)、[持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)。

- 兩wrapper監聽`on_block=1`，非name key所帶的perfect字樣；事件派送時一般block先發on_block，完美block再另發on_perfect_block。本trait不篩perfect或block_broken。[一般與完美格擋分別派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962)、[格擋及破防事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249)。

- 成功proc把_active_start_time設為當下t。allow_proc_while_active且cooldown0容許刷新；不是增加第二份ProcBuff。stat只在active且本slot持用時套用；切出不改起始t，故期限仍走。[冷卻覆寫與可刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195)、[持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)、[格擋刷新起始時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355)、[装備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[切出on_wield生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- overheat_over_time_amount與overheat_dissipation_multiplier均為multiplicative_multiplier。Overheat.increase_over_time讀`overheat_amount×overheat_over_time_amount`，Charging.fixed_update使用它；on_sweep_action_start改用increase_immediate，讀`overheat_amount×overheat_immediate_amount`，沒有本trait的over_time欄位。[倍率乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)、[產熱與散熱乘算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L900-L913)、[持續產熱倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L99)、[立即產熱使用不同欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L61)、[實際武器持續與開招產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L91)。

- Overheat.update只有state idle／lockout、熱量大於0且等待auto_vent_delay結束才自然散熱。三段decay rate modifier各乘dissipation倍率，再由SharedFunctions.update依當前熱量區間選rate。等待時間不讀此倍率；reload_state override扣熱分支亦沒有讀此倍率。[自然散熱延遲及狀態](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L102-L150)、[自然散熱倍率與解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L153-L171)、[自然散熱基礎速率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L60)。

- 格式heat_reduction為100−m×100加prefix負號，heat_dissipation為d×100−100加prefix正號；value_manipulation結果不再次乘100。[格式value_manipulation不重乘100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"active_duration": 5, "cooldown_duration": 0, "proc_stat_buffs": {"overheat_over_time_amount": [0.84, 0.82, 0.8, 0.78], "overheat_dissipation_multiplier": [1.03, 1.04, 1.05, 1.06]}, "proc_event": "on_block"}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
