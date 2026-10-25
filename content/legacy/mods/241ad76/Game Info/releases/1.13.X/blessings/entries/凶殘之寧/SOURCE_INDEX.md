# 凶殘之寧：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tier 與兩 placeholder formatter | [Own tier 與兩 placeholder formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L450-L491) |
| 完整實際 ProcBuff wrapper | [完整實際 ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L31-L47) |
| Shared vent start/proc/update | [Shared vent start/proc/update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L29-L53) |
| on_multiple_melee_hit predicate | [on_multiple_melee_hit predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L425) |
| held-slot condition | [held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| ProcBuff no-cooldown gate | [ProcBuff no-cooldown gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff update | [ProcBuff update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L197-L245) |
| Buff.update callback | [Buff.update callback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L328) |
| Buff-extension fixed-update order | [Buff-extension fixed-update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L146) |
| ActionSweep ordinal | [ActionSweep ordinal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1425) |
| ActionSweep melee payload | [ActionSweep melee payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1501) |
| Attack on_hit dispatch | [Attack on_hit dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L623) |
| M1 ordinary attacks | [M1 ordinary attacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L424-L593) |
| M1 push/follow path | [M1 push/follow path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L1726-L2054) |
| M1 special path | [M1 special path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2101-L2368) |
| M2 ordinary attacks | [M2 ordinary attacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L437-L605) |
| M2 push/follow path | [M2 push/follow path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L1556-L1890) |
| M2 special path | [M2 special path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2016-L2283) |
| ActionPush | [ActionPush](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L23-L112) |
| PushAttack | [PushAttack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L100) |
| WarpCharge.decrease_immediate | [WarpCharge.decrease_immediate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L94-L114) |
| Shared subtract and clamp | [Shared subtract and clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24) |
| M1 Wind Slash levels/settings | [M1 Wind Slash levels/settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2409-L2452) |
| M2 Wind Slash levels/settings | [M2 Wind Slash levels/settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2324-L2367) |
| Force Sword Wind Slash buff event hook | [Force Sword Wind Slash buff event hook](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L224-L259) |
| Wind Slash primer level routing | [Wind Slash primer level routing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L368-L410) |
| Wind Slash extra attack route | [Wind Slash extra attack route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L150-L204) |
| Wind Slash RangedAction dispatcher | [Wind Slash RangedAction dispatcher](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L29) |
| M1 fling action wiring | [M1 fling action wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L1844-L1895) |
| M2 fling action wiring | [M2 fling action wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L1674-L1725) |
| Damage-target ranged executor | [Damage-target ranged executor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L136-L164) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Own I–IV tier 位於 scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua:450-491，vent_percentage=.02/.03/.04/.05；formatter 用 percentage 並加「+」。wrapper scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua:31-47 的 fallback 為 .01；shared update 先讀 tier override，因此 tier 取代 fallback。
- Wrapper 是 ProcBuff，訂閱 on_hit，要求 held-slot，check_proc_func 為 on_multiple_melee_hit，required_num_hits=3。predicate 是 attack_type=melee 且當前 target_number>=3；不是過去三個事件累計，也不要求正傷、踉蹌或擊殺。
- shared_buff_functions.lua:29-36 快取玩家 warp_charge write component；38-40 只設 template_data.proc=true；42-53 在 Buff update 讀 override、呼叫 WarpCharge.decrease_immediate 並清旗標。
- PlayerUnitBuffExtension.fixed_update player_unit_buff_extension.lua:131-146 先 _update_buffs 再 _update_proc_events。ProcBuff.update 先 super.update；因此事件批次設下旗標後，後續 Buff.update 才消耗。同批多次 proc 仍是同一 bool，僅降一次。
- held-slot 在事件處理階段核對；已通過 gate 的 pending flag 不因之後切槽取消，因 update_func 無 held gate。若事件處理前已切槽，則不會建立旗標。沒有 cooldown、stack 或 duration。
- M1/M2 普通輕重擊與特殊啟用斬擊是 ActionSweep melee；特殊狀態啟動／取消事件本身不是本項近戰 on_hit；另有實際接入風刃的路徑，見下方額外攻擊。ActionPush/PushAttack 是 push，推擊自身不符合；推後 sweep 追擊有合格序號時可能觸發。兩型號甩擊都是 ActionDamageTarget，Attack.execute 硬傳 ranged 且無 target_number，不能觸發。
- ActionSweep 在傷害處理前遞增當前 target ordinal，再將其送給 Attack.execute。Attack.on_hit 仍受目標/派送 gate 影響；不能把所有碰撞或 breakable 都視為合格事件。
- immediate consumer 把目前反噬比例減 tier fraction、clamp 到[0,1]並設 idle，不是武器熱量或傷害倍率。原 state=exploding 時另呼叫 Interrupt.action(psyker_ability) 並記錄 survived-perils；不能承諾必然保命。

- 兩個 Mark 都把 Wind Slash low/middle/high 接在同一 special buff 路徑。Force Sword buff 可由 on_sweep_start 或 weapon_special_deactivate 的事件加上風刃效果；primer 依 charge 選等級。風刃的額外命中走 RangedAction.execute_attack，硬指定 attack_type=ranged，且沒有傳 target_number，不能把風刃命中數當 ActionSweep ordinal；因此風刃即使擊中多個目標也不觸發本 blessing。模板 slash_settings.attack_type=shout 是 impact/visual 設定，不能代替實際 Attack 分類。

P_after = clamp(P_before - r, 0, 1)，P 為目前反噬比例，r 為固定 tier 值。
I/II/III/IV：r=.02/.03/.04/.05，即 2/3/4/5 個百分點。IV 級 70%→clamp(.70-.05)=65%；相對起始值降 7.14%，但不是按剩餘值乘 .95。3% 用 IV 級則降至 0%。

proc 是 boolean：一個事件處理批次任何數量 n>=1 個合格事件都只留下 true 一次；下一次 Buff.update 消耗一次。旗標消耗後的新批次才可再次觸發。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_220`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_220.png)｜[Issue附件](https://github.com/user-attachments/assets/be8c86da-c7a2-49b0-a25f-93df4bb03455)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 烈焰力場巨劍等級覆寫 | [烈焰力場巨劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L450-L491) |
| 烈焰力場巨劍Buff接入 | [烈焰力場巨劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L31-L47) |
| UI 烈焰力場巨劍 | [UI 烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L245) |
| 烈焰力場巨劍 誓約 Mk VI匯入 | [烈焰力場巨劍 誓約 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VI接入 | [烈焰力場巨劍 誓約 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 誓約 Mk VIII匯入 | [烈焰力場巨劍 誓約 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VIII接入 | [烈焰力場巨劍 誓約 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |
