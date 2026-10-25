# 撕碎：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Combatknife tier override and format value | [Combatknife tier override and format value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L294-L332) |
| Dual Shivs tier override and format value | [Dual Shivs tier override and format value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L294-L332) |
| Source-only Saw candidate | [Source-only Saw candidate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L344-L382) |
| Combatknife wrapper clone | [Combatknife wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L19) |
| Dual Shivs wrapper clone | [Dual Shivs wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L19) |
| Shared proc and item-slot condition | [Shared proc and item-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2498-L2512) |
| Damage and non-weakspot melee helpers | [Damage and non-weakspot melee helpers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L483) |
| BuffUtils alive-target and buff-extension checks | [BuffUtils alive-target and buff-extension checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L48-L79) |
| BuffUtils special exclusion only when false | [BuffUtils special exclusion only when false](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L81-L89) |
| Combatknife M1 module import | [Combatknife M1 module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15-L16) |
| Combatknife M1 trait append | [Combatknife M1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1432-L1436) |
| Combatknife M2 module import | [Combatknife M2 module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15-L16) |
| Combatknife M2 trait append | [Combatknife M2 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1522-L1526) |
| Dual Shivs M1 module import | [Dual Shivs M1 module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14-L15) |
| Dual Shivs M1 trait append | [Dual Shivs M1 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1498-L1502) |
| Dual Shivs M2 module import | [Dual Shivs M2 module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14-L15) |
| Dual Shivs M2 trait append | [Dual Shivs M2 trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1577-L1581) |
| ActionSweep unique-target loop | [ActionSweep unique-target loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1091-L1112) |
| ActionSweep per-unit dedup | [ActionSweep per-unit dedup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1138-L1174) |
| ActionSweep Attack.execute per target | [ActionSweep Attack.execute per target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1500) |
| Attack on-hit parameters and dispatch | [Attack on-hit parameters and dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| Combatknife M1 special jab route | [Combatknife M1 special jab route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L952) |
| Combatknife M2 special jab route | [Combatknife M2 special jab route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L957-L1026) |
| Combatknife jab weapon_special flag | [Combatknife jab weapon_special flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L542-L549) |
| Dual Shivs M1 special throw | [Dual Shivs M1 special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1096-L1122) |
| Dual Shivs M2 special throw | [Dual Shivs M2 special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1160-L1187) |
| Projectile hit uses ranged attack type | [Projectile hit uses ranged attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L485-L540) |
| Shared bleed stack, timing, and power curve | [Shared bleed stack, timing, and power curve](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L258) |
| Shared bleed damage profile | [Shared bleed damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466) |
| Interval tick and one-stack decay | [Interval tick and one-stack decay](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| Buff timer refresh does not alter next interval | [Buff timer refresh does not alter next interval](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L453-L457) |
| UI family-pattern-mark formatting | [UI family-pattern-mark formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| weapon_buff_templates.lua shared bleed consumer | [weapon_buff_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L258) |
| interval_buff.lua shared bleed consumer | [interval_buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L352-L363) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L460-L466) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630) |
| buff_extension_base.lua shared bleed consumer | [buff_extension_base.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205) |
| buff_extension_base.lua shared bleed consumer | [buff_extension_base.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L647-L662) |
| buff_damage_profile_templates.lua shared bleed consumer | [buff_damage_profile_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68) |
| buff_damage_profile_templates.lua shared bleed consumer | [buff_damage_profile_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466) |
| power_level.lua shared bleed consumer | [power_level.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L92) |
| Held gate | [Held gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Matching item gate | [Matching item gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Queued proc | [Queued proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| At-cap refresh | [At-cap refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩個綁定 trait 的 I–IV target_buff_data.num_stacks_on_proc 都覆寫為1／2／3／4；wrapper 只 clone 共用 bleed_on_non_weakspot_hit_melee，沒有額外覆寫。

- Base 監聽 on_hit；要求匹配祝福物品、params.damage>0，以及 params.hit_weakspot=false 且 attack_type=melee。此 gate 不檢查暴擊、擊殺或 target_number==1。

- Wrapper 與 parent 都沒有把 allow_weapon_special 設為false。BuffUtils 只在該值明確為false時排除 weapon_special=true；所以標記為特殊的戰刃 jab 仍依非弱點／傷害條件判定。

- ActionSweep 的單次掃擊對碰撞目標去重後逐目標呼叫 Attack.execute；每個符合條件的不同目標都能各自排入 on_hit。雙短刀 special action 是 kind=weapon_throw，無法通過 melee gate。

- 新增層數寫入目標共用 bleed debuff；實際上限16層、期限1.5秒、節拍0.5秒。到期後每個 interval callback 先造成當前層數的 bleed damage，再要求移除1層。

- Buff refresh 重設 duration/start_time，但不重設 interval_buff 的 next_interval_t，因此第一次退層落在期限後下一個既有節拍；8層約5–5.5秒、16層約9–9.5秒名義退完，更新可再延後。

- 共用 bleed power 輸入為 P=500s²(3−2s)，s=min(n,16)/16；P不是固定生命值傷害。

- 每次非弱點近戰傷害事件新增q層，兩個武器變體I–IV均為q=1／2／3／4。施加後N=min(n+q,16)。

- 目標流血輸入威力：s=N/16，P=500s²(3−2s)。6層P=158.203125，8層P=250，16層P=500；P不是直接扣血值。

- 最後刷新後先等1.5秒，再於期限後的既有跳傷節拍開始退層。設等待節拍相位δ為0至0.5秒，T=1.5+δ+(N−1)×.5秒；8層名義5–5.5秒、16層9–9.5秒，嚴格時間比較及固定更新另有延遲。

- bleeding profile power_distribution.attack=175；護甲倍率unarmored=.5、armored/resistant=.75、player/berserker/void_shield=1、super_armor=.25、disgustingly_resilient=.5，另經PowerLevel與傷害流程。175及P均不保證相同數字的HP傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_193`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_193.png)｜[Issue附件](https://github.com/user-attachments/assets/c3b80cbc-5c0a-4281-abc5-14ab66716a72)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L294-L332) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L19) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 短刀等級覆寫 | [短刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L294-L332) |
| 短刀Buff接入 | [短刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L19) |
| UI 短刀 | [UI 短刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L227) |
| 短刀 臨時拼湊 型號1匯入 | [短刀 臨時拼湊 型號1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| 短刀 臨時拼湊 型號3匯入 | [短刀 臨時拼湊 型號3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
