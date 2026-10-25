# 能量轉換：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 一般與完美格擋分別派送 | [一般與完美格擋分別派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962) |
| 格擋及破防事件 | [格擋及破防事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249) |
| Proc持續時間覆寫 | [Proc持續時間覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| 冷卻覆寫與可刷新 | [冷卻覆寫與可刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195) |
| 持用條件與效果覆寫 | [持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300) |
| 格擋刷新起始時間 | [格擋刷新起始時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| 倍率乘算 | [倍率乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733) |
| 產熱與散熱乘算類型 | [產熱與散熱乘算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L900-L913) |
| 持續產熱倍率 | [持續產熱倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L99) |
| 立即產熱使用不同欄位 | [立即產熱使用不同欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L61) |
| 自然散熱延遲及狀態 | [自然散熱延遲及狀態](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L102-L150) |
| 自然散熱倍率與解除鎖定 | [自然散熱倍率與解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L153-L171) |
| 自然散熱基礎速率 | [自然散熱基礎速率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L60) |
| 實際武器持續與開招產熱 | [實際武器持續與開招產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L91) |
| 持用判定 | [持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 裝備生命週期 | [裝備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| 切出on_wield生命週期 | [切出on_wield生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 格式value_manipulation不重乘100 | [格式value_manipulation不重乘100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩trait override皆為active_duration5、cooldown_duration0；proc_stat_buffs逐級`overheat_over_time_amount=0.84/0.82/0.80/0.78`、`overheat_dissipation_multiplier=1.03/1.04/1.05/1.06`。P1 wrapper預設active3/cooldown5及散熱1.5被取代；P2預設散熱1.5亦被取代。[Proc持續時間覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104)、[冷卻覆寫與可刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195)、[持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)。

- 兩wrapper監聽`on_block=1`，非name key所帶的perfect字樣；事件派送時一般block先發on_block，完美block再另發on_perfect_block。本trait不篩perfect或block_broken。[一般與完美格擋分別派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L939-L962)、[格擋及破防事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L206-L249)。

- 成功proc把_active_start_time設為當下t。allow_proc_while_active且cooldown0容許刷新；不是增加第二份ProcBuff。stat只在active且本slot持用時套用；切出不改起始t，故期限仍走。[冷卻覆寫與可刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L195)、[持用條件與效果覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300)、[格擋刷新起始時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355)、[装備生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[切出on_wield生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- overheat_over_time_amount與overheat_dissipation_multiplier均為multiplicative_multiplier。Overheat.increase_over_time讀`overheat_amount×overheat_over_time_amount`，Charging.fixed_update使用它；on_sweep_action_start改用increase_immediate，讀`overheat_amount×overheat_immediate_amount`，沒有本trait的over_time欄位。[倍率乘算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733)、[產熱與散熱乘算類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L900-L913)、[持續產熱倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L99)、[立即產熱使用不同欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L61)、[實際武器持續與開招產熱](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L91)。

- Overheat.update只有state idle／lockout、熱量大於0且等待auto_vent_delay結束才自然散熱。三段decay rate modifier各乘dissipation倍率，再由SharedFunctions.update依當前熱量區間選rate。等待時間不讀此倍率；reload_state override扣熱分支亦沒有讀此倍率。[自然散熱延遲及狀態](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L102-L150)、[自然散熱倍率與解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L153-L171)、[自然散熱基礎速率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L44-L60)。

- 格式heat_reduction為100−m×100加prefix負號，heat_dissipation為d×100−100加prefix正號；value_manipulation結果不再次乘100。[格式value_manipulation不重乘100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L20)。

- 設本祝福持續產熱倍率m=0.84／0.82／0.80／0.78，自然散熱倍率d=1.03／1.04／1.05／1.06，其他對應倍率分別為B與V。

- 某段持續產熱基礎量Q：生效前Q×B，生效後Q×B×m。IV級Q=20個百分點、B=1為15.6；B=0.90時由18變14.04，相對原始20減29.8%，相對已有18再減22%。

- 本trait不改overheat_immediate_amount，因此開招立即產熱量在其他因素固定時不變；格擋不直接呼叫decrease_immediate。

- 自然散熱已啟動、區間速率和其他條件固定時，一秒基礎量C變為C×V×d。IV級C=8個百分點、V=1為8.48；40%→31.52%。V=1.20則9.6→10.176，相對已有速率再增加6%。

- 自然散熱流程會隨區間、延遲、上限或期限改變，算例明確只比較一秒固定條件，不把散熱6%誤寫為完整冷卻時間必定縮短6%。

- active期限為最近格擋K+5。K=10再13秒格擋，15→18秒；10觸發、11切出、14切回，剩約1秒，15到期。切換沒有凍結或重置K。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_241`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_241.png)｜[Issue附件](https://github.com/user-attachments/assets/71e66fb6-ddd3-461a-9283-4dbdfa7e5d96)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 上古神刃等級覆寫 | [上古神刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L496-L575) |
| 上古神刃Buff接入 | [上古神刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L368-L382) |
| UI 上古神刃 | [UI 上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L498) |
| 上古神刃 軍務部 Mk X匯入 | [上古神刃 軍務部 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L15) |
| 上古神刃 軍務部 Mk X接入 | [上古神刃 軍務部 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L2302-L2304) |
| 上古神刃 軍務部 Mk II匯入 | [上古神刃 軍務部 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L14) |
| 上古神刃 軍務部 Mk II接入 | [上古神刃 軍務部 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2455-L2457) |
| 動力彎刀等級覆寫 | [動力彎刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L370-L449) |
| 動力彎刀Buff接入 | [動力彎刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L253-L267) |
| UI 動力彎刀 | [UI 動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L534) |
| 動力彎刀 阿里丁 Mk I匯入 | [動力彎刀 阿里丁 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L11) |
| 動力彎刀 阿里丁 Mk I接入 | [動力彎刀 阿里丁 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L1741-L1743) |
| 動力彎刀 執法者 Mk IIb匯入 | [動力彎刀 執法者 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L11) |
| 動力彎刀 執法者 Mk IIb接入 | [動力彎刀 執法者 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L2023-L2025) |
