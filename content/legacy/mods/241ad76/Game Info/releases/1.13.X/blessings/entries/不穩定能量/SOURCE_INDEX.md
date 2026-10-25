# 不穩定能量：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Force Greatsword own tiers and formatter | [Force Greatsword own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L53-L92) |
| Force Greatsword actual wrapper | [Force Greatsword actual wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L17-L21) |
| Force Sword own tiers and max formatter | [Force Sword own tiers and max formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L96-L138) |
| Force Sword actual wrapper | [Force Sword actual wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L18-L22) |
| Shared stepped base | [Shared stepped base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2121-L2145) |
| SteppedStatBuff consumer | [SteppedStatBuff consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L79) |
| Buff stack count and override calculation | [Buff stack count and override calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L411) |
| Buff tier selection and override delivery | [Buff tier selection and override delivery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L224) |
| Buff stat calculation | [Buff stat calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held slot condition | [Held slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Player buff fixed update and cache | [Player buff fixed update and cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Buff extension stat-cache refresh | [Buff extension stat-cache refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L354) |
| Native power modifier and curve | [Native power modifier and curve](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91) |
| Damage profile power distribution | [Damage profile power distribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L45) |
| Attack power inputs | [Attack power inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L216-L224) |
| Attack execution power data | [Attack execution power data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L271-L294) |
| Damage calculation power flow | [Damage calculation power flow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L220-L285) |
| Damage and impact stages | [Damage and impact stages](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L570-L615) |
| ActionSweep sticky per-tick attack loop | [ActionSweep sticky per-tick attack loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L739-L800) |
| ActionSweep melee item execution | [ActionSweep melee item execution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| ActionSweep special sweep damage | [ActionSweep special sweep damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1728-L1752) |
| ActionSweep sweep lifecycle | [ActionSweep sweep lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L250-L278) |
| ActionPush push action | [ActionPush push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L90) |
| PushAttack consumer | [PushAttack consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L88) |
| ActionDamageTarget followup | [ActionDamageTarget followup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L105-L164) |
| Vent action | [Vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_vent_warp_charge.lua#L17-L60) |
| Trait percent formatter | [Trait percent formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L21) |
| Trait description/local formatter | [Trait description/local formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L109) |
| Trait percent decimals | [Trait percent decimals](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L227) |
| Obscurus Mk II action set | [Obscurus Mk II action set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L336-L529) |
| Obscurus Mk II attack definitions | [Obscurus Mk II attack definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1240-L1461) |
| Deimos Mk IV action set | [Deimos Mk IV action set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L332-L523) |
| Deimos Mk IV attack definitions | [Deimos Mk IV attack definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1154-L1372) |
| Illisi Mk V action set | [Illisi Mk V action set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L225-L407) |
| Illisi Mk V attack definitions | [Illisi Mk V attack definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1021-L1238) |
| Covenant Mk VI action set | [Covenant Mk VI action set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L424-L593) |
| Covenant Mk VI special definitions | [Covenant Mk VI special definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L1726-L1900) |
| Covenant Mk VI powered attack definitions | [Covenant Mk VI powered attack definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2055-L2368) |
| Covenant Mk VIII action set | [Covenant Mk VIII action set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L437-L605) |
| Covenant Mk VIII special definitions | [Covenant Mk VIII special definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L1556-L1730) |
| Covenant Mk VIII powered attack definitions | [Covenant Mk VIII powered attack definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L1970-L2283) |
| ActionSweep | [ActionSweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L255) |
| Direct Sweep hit passes the selected profile, captured charge/base power, actual weapon item and pla | [Direct Sweep hit passes the selected profile, captured charge/base power, actual weapon item and pla](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1501) |
| Force Slash stores base power and attack type | [Force Slash stores base power and attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L26-L45) |
| The moving Force Slash resolves each collected target through RangedAction | [The moving Force Slash resolves each collected target through RangedAction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L150-L196) |
| The Force Slash ProcBuff listens for on_sweep_start and on_weapon_special_deactivate while the item  | [The Force Slash ProcBuff listens for on_sweep_start and on_weapon_special_deactivate while the item ](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L224-L240) |
| The selected Force Slash profile depends on the special-charge count and starts the moving slash/tar | [The selected Force Slash profile depends on the special-charge count and starts the moving slash/tar](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L301-L359) |
| RangedAction | [RangedAction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| The Greatsword Force Slash profile sets warp_slice on its low profile; middle/high profiles inherit  | [The Greatsword Force Slash profile sets warp_slice on its low profile; middle/high profiles inherit ](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/settings_templates/force_sword_2h_damage_profile_templates.lua#L801-L812) |
| Special activation adds WarpCharge/Peril | [Special activation adds WarpCharge/Peril](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_kill_count_charges.lua#L71-L76) |
| Buff item-slot template override context | [Buff item-slot template override context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L81-L89) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- **數值來源**：兩個實際 trait variant 的 I–IV stat_buffs.power_level_modifier 均為 .035/.04/.045/.05。各 wrapper 的 conditional_stat_buffs.power_level_modifier=.05 是 fallback；Buff 對同一 stat key 套用裝備 rarity 對應 tier override，因此 conditional 分支取 own p，不是 .05+p。
- **階數**：兩 wrapper 都使用 warpcharge_stepped_bonus。初始一層與 stack_offset=-1 抵消為零；SteppedStatBuff 讀 warp_charge.current_percentage，依 floor(P/.20) 計階並 clamp 0–4。本項沒有 stepped_stat_buffs 表，也沒有每次命中增加層數或獨立 TTL。
- **快取順序**：PlayerUnitBuffExtension.fixed_update 先更新 Buff，再處理 proc event，接著刷新 stat cache。階數依 Buff 更新讀到的 current_percentage 計算；Attack 透過玩家 Buff Extension 讀取當前 cache。peril 改變本身不是本祝福的觸發事件。
- **直接 Sweep**：ActionSweep.start 保存 action 的 charge_level、基礎 power_level 與 hit-mass 參數；這不會凍結本祝福的力量修正。每個直接命中呼叫 Attack.execute，使用該動作已保存的基礎輸入及當時玩家力量快取。
- **Push 與甩擊**：推擊本體以 attack_type=push 經 PushAttack 執行，傳入實際武器 item；推擊後的 ActionDamageTarget 甩擊以 attack_type=ranged 經 Attack 執行。此 stat 是通用 power_level_modifier，不限 melee attack type。
- **力量巨劍特殊斬擊**：Covenant Mk VI/VIII 的特殊斬擊依特殊充能層級選 low/middle/high Force Slash profile，設定斬擊基礎力量並收集移動路徑上的目標；後續逐目標由 RangedAction.execute_attack 以 ranged 類型呼叫 Attack，當次 Attack 仍讀玩家力量 cache。profile／基礎力量在斬擊啟動時決定，力量修正則於每次目標結算時讀取。
- **單手黏附命中**：Obscurus Mk II 與 Deimos Mk IV 的 light_sticky/heavy_sticky 會按黏附流程追加 Attack 呼叫；這些追加呼叫保存該攻擊的 charge/base power，但不另凍結 player modifier。只適用兩個實際配置 sticky 的 Mark。
- **結算界線**：power_level_modifier 先乘在原生武器力量曲線換算後的力量輸入。各 Attack/DamageProfile 再把該輸入依其 power distribution、攻擊／衝擊／順劈曲線與目標條件映射到結果；力量輸入增加不等於最終生命值傷害同率增加。

令 P 為 current_peril（0–1），k=min(4,floor(P/0.20))；每級每階 p 為 .035、.04、.045、.05。令 S_native 為原生武器力量類型曲線轉換後、套用力量修正前的力量輸入，q 為其餘當次適用力量修正相對基準 1 的淨加總，則本祝福後 S=S_native×(1+q+k×p)。每 20 個百分點跨一階；在 P=.65 時 k=3，不受顯示取整邊界影響。力量輸入再由各攻擊 profile 的傷害、衝擊與順劈分布處理，不能把這個輸入增幅直接當成最終 HP 傷害百分比。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_064`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_064.png)｜[Issue附件](https://github.com/user-attachments/assets/dba7c355-1bf0-46d3-ab64-a9bcffefe3e0)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 烈焰力場巨劍等級覆寫 | [烈焰力場巨劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L53-L92) |
| 烈焰力場巨劍Buff接入 | [烈焰力場巨劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L17-L21) |
| UI 烈焰力場巨劍 | [UI 烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L245) |
| 烈焰力場巨劍 誓約 Mk VI匯入 | [烈焰力場巨劍 誓約 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VI接入 | [烈焰力場巨劍 誓約 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 誓約 Mk VIII匯入 | [烈焰力場巨劍 誓約 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VIII接入 | [烈焰力場巨劍 誓約 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L96-L138) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L18-L22) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 烈焰力場劍 朦朧 Mk II匯入 | [烈焰力場劍 朦朧 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 烈焰力場劍 戴莫斯 Mk IV匯入 | [烈焰力場劍 戴莫斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671-L1673) |
| 烈焰力場劍 伊利斯 Mk V匯入 | [烈焰力場劍 伊利斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539-L1541) |
