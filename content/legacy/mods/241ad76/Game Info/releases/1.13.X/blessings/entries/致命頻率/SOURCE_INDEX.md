# 致命頻率：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tier values and formatter | [Own tier values and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L464-L503) |
| Own custom proc wrapper | [Own custom proc wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L54-L95) |
| Special melee hit predicate | [Special melee hit predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| Attacking item predicate | [Attacking item predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L726) |
| Attack calculation before on-hit processing | [Attack calculation before on-hit processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L330-L383) |
| Attack hit payload and enqueue | [Attack hit payload and enqueue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621) |
| Ordinary light/heavy actions | [Ordinary light/heavy actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L670-L789) |
| Special-active follow-up actions | [Special-active follow-up actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L1074-L1489) |
| Push and ordinary pushfollow | [Push and ordinary pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L1537-L1685) |
| Special pushfollow | [Special pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L1769-L1849) |
| Special activation sweeps | [Special activation sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2111-L2228) |
| Special deactivation sweeps | [Special deactivation sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2332-L2445) |
| Weapon special profile flags | [Weapon special profile flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/settings_templates/transonic_sword_transonic_knife_damage_profile_templates.lua#L2250-L2291) |
| Sweep update and multi-spline window | [Sweep update and multi-spline window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L478-L537) |
| Sweep hit attack type | [Sweep hit attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1360) |
| Sweep finish enqueue | [Sweep finish enqueue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L964) |
| Proc event queue append | [Proc event queue append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L991) |
| Proc event batch handling | [Proc event batch handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L282) |
| ProcBuff queued event iteration | [ProcBuff queued event iteration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L370) |
| Player buff update/cache order | [Player buff update/cache order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L147) |
| Active buff cache rebuild | [Active buff cache rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L353) |
| Buff system fixed-update listing | [Buff system fixed-update listing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L320) |
| Weapon system fixed-update listing | [Weapon system fixed-update listing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L511-L524) |
| Extension system build ordering | [Extension system build ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L105) |
| Extension system fixed dispatch | [Extension system fixed dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L125-L183) |
| Weapon action fixed update dispatch | [Weapon action fixed update dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L137-L174) |
| Push attack classification | [Push attack classification](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L74-L89) |
| Melee power stat aggregation/gate | [Melee power stat aggregation/gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L60) |
| Power modifier multiplies scaled input | [Power modifier multiplies scaled input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| Melee power stat type | [Melee power stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L874-L879) |
| Actual trait import in weapon template | [Actual trait import in weapon template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L16) |
| Actual trait-key and append wiring | [Actual trait-key and append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3177-L3179) |
| Impact power consumer | [Impact power consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L75) |
| Power distribution and cleave stat consumer | [Power distribution and cleave stat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L46) |
| Sweep stored cleave budgets | [Sweep stored cleave budgets](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L235-L248) |
| Sweep cleave budget calculation | [Sweep cleave budget calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L328-L357) |
| Server correction cleave recomputation | [Server correction cleave recomputation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L360-L383) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Own trait 四階 melee_power_level_modifier 為 .15/.20/.25/.30；wrapper conditional fallback .10 同 key。Buff 通用計算將 own tier override 套到 conditional key，故是 tier 值取代 .10、不是再加 .10；stat 仍受 wrapper 的持用且 active gate 限制。
- on_hit helper 要求 weapon_special=true、attack_type=melee，並比對 attacking item。只有特殊啟動/解除掃掠使用設 weapon_special 的 special_smiter_ap/special_linesman；特殊狀態後續斬擊雖標 special-active，profile 沒有該 flag。
- 一般、特殊與 pushfollow sweep hit 是 melee；push 專用 attack_type=push。前者 active 時可受益，push 不觸發也不套 melee_power_level_modifier。
- Attack 先算傷害與 hit reaction，後排 on_hit；ActionSweep 處理所有 spline 後才排一個 finish。Proc event queue 依入列順序消費；本固定 SHA 下 BuffSystem 先於 WeaponSystem。因而同次已算完的命中不追溯；若同一 sweep window 跨到下一 Buff/cache 更新，後續 hit 能受益。
- 特殊命中設 counter=4；同一 sweep 的 finish 隨後扣到 3。往後每個 held+active sweep finish 扣一次，即使 miss；不是每個目標或 spline 各扣。再中符合特攻就重設4。無 TTL/堆疊；離手停用 stat 且不扣數，切回可恢復仍 active 的計數。

- 傷害、踉蹌及劈砍均接入 PowerLevel 的 melee modifier；原生威力類型縮放後才乘修正。ActionSweep 在 start 儲存一般與特殊模式的劈砍預算，觸發 on_hit 後較晚更新的傷害／踉蹌不能據此推定已儲存預算也重新計算。server_correction_occurred 另有明確重算路徑。

S_after = S_before × (1 + q + p)，其中 p 是本項 .15/.20/.25/.30，q 是同一 melee_power_level_modifier 的其他 additive contribution。此 modifier 在 power-type scaling 後乘入 scaled power-level 輸入，DamageCalculation 後續再使用該值及 profile/target 等資料；不是最終傷害百分比。attack_type=push 不會讀這個 melee modifier。 傷害與踉蹌分別以 damage／impact 威力類型讀取此修正；劈砍在掃掠開始時經 DamageProfile.max_hit_mass 取當時資料，伺服器校正另可重算。故同次較晚命中的傷害／踉蹌取值與已儲存劈砍預算的時點要分開。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_248`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_248.png)｜[Issue附件](https://github.com/user-attachments/assets/35aec3d1-ef69-4923-8034-2109c6646b57)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 穿音速雙刀等級覆寫 | [穿音速雙刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L464-L505) |
| 穿音速雙刀Buff接入 | [穿音速雙刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L54-L97) |
| UI 穿音速雙刀 | [UI 穿音速雙刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L622) |
| 穿音速雙刀 布蘭克斯 Mk XI匯入 | [穿音速雙刀 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L16) |
| 穿音速雙刀 布蘭克斯 Mk XI接入 | [穿音速雙刀 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3177-L3179) |
