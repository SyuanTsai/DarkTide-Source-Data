# 開罐器：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Crowbar I–IV literal and dynamic formats | [Crowbar I–IV literal and dynamic formats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L545-L614) |
| Rippergun I–IV literal and dynamic formats | [Rippergun I–IV literal and dynamic formats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L156-L225) |
| Crowbar proc clone and special-active/non-blunt checks | [Crowbar proc clone and special-active/non-blunt checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L108-L122) |
| Rippergun proc clone and item/melee checks | [Rippergun proc clone and item/melee checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L17-L18) |
| Base target debuff proc event and defaults | [Base target debuff proc event and defaults](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L564-L579) |
| Single-stack target rending debuff values | [Single-stack target rending debuff values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376) |
| On-hit target debuff setup/add/refresh | [On-hit target debuff setup/add/refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Adding multiple stacks | [Adding multiple stacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L415) |
| Stack increment and refresh duration | [Stack increment and refresh duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457) |
| Stack-cap refresh handling | [Stack-cap refresh handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| Attack damage and HitReaction precede on-hit handling | [Attack damage and HitReaction precede on-hit handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383) |
| on_hit event params and attacking-item forwarding | [on_hit event params and attacking-item forwarding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621) |
| Queued proc-event processing | [Queued proc-event processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L255) |
| ProcBuff reads current conditional state | [ProcBuff reads current conditional state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L338) |
| Queueing proc-event params | [Queueing proc-event params](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L991) |
| Melee-hit and item-match predicates | [Melee-hit and item-match predicates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370) |
| Attacking-item name comparison | [Attacking-item name comparison](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L726) |
| Crowbar special-active conditional | [Crowbar special-active conditional](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L134-L150) |
| Rippergun M1 bayonet sweep | [Rippergun M1 bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L572-L669) |
| Rippergun M2 bayonet sweep | [Rippergun M2 bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L567-L664) |
| Rippergun M3 bayonet sweep | [Rippergun M3 bayonet sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L550-L647) |
| Rippergun M1 special action mapping | [Rippergun M1 special action mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L935-L972) |
| Rippergun M2 special action mapping | [Rippergun M2 special action mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L930-L967) |
| Rippergun M3 special action mapping | [Rippergun M3 special action mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L913-L950) |
| Crowbar special-mode light melee gate | [Crowbar special-mode light melee gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L640-L742) |
| Crowbar special-mode heavy melee gate | [Crowbar special-mode heavy melee gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L743-L830) |
| Crowbar special toggle and unwield behavior | [Crowbar special toggle and unwield behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L1827-L1842) |
| Weapon-special toggle hit handling | [Weapon-special toggle hit handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_activate_toggle.lua#L67-L88) |
| Unwield deactivation fallback | [Unwield deactivation fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1190-L1207) |
| Sweep attacks are melee | [Sweep attacks are melee](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1500) |
| Trait data registration | [Trait data registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua#L37-L64) |
| Buff wrapper registration | [Buff wrapper registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_templates.lua#L68-L95) |
| Crowbar trait import and append | [Crowbar trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L14) |
| Crowbar bespoke trait append | [Crowbar bespoke trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L2185-L2189) |
| Rippergun M1 trait import and append | [Rippergun M1 trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L15) |
| Rippergun M1 bespoke trait append | [Rippergun M1 bespoke trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L909-L913) |
| Rippergun M2 trait import and append | [Rippergun M2 trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L15) |
| Rippergun M2 bespoke trait append | [Rippergun M2 bespoke trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L904-L908) |
| Rippergun M3 trait import and append | [Rippergun M3 trait import and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L15) |
| Rippergun M3 bespoke trait append | [Rippergun M3 bespoke trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L887-L891) |
| Target brittleness enters shared rending formula | [Target brittleness enters shared rending formula](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| Rending armor modifiers and overflow | [Rending armor modifiers and overflow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L88) |
| Armor-type rending coefficients | [Armor-type rending coefficients](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Crowbar trait literal 在 `weapon_traits_bespoke_crowbar_p1.lua:545–614`；Rippergun literal 在 `weapon_traits_bespoke_ogryn_rippergun_p1.lua:156–225`。兩者的 I–IV 只覆寫 `target_buff_data.num_stacks_on_proc`：Crowbar 1/2/3/4，Rippergun 10/12/14/16。兩邊 `format_values` 均以 trait override 讀 stacks，並從 `rending_debuff` 讀每層 rending、duration 與 max_stacks。

- Crowbar wrapper clone `BaseWeaponTraitBuffTemplates.targets_receive_rending_debuff` 後覆寫 `check_proc_func`：同武器、melee hit、damage_type 不為 `blunt`；並將 `conditional_proc_func` 換成 `ConditionalFunctions.melee_weapon_special_active`。此條件在 ProcBuff 處理 queued event 時讀 slot component 的 `special_active`。特殊模式由 `WeaponSpecialActivateToggle` 切換；Crowbar的 `set_inactive_func` 只在手動切換時清旗標，回傳 true 代表unwield分支不再通用清旗標。

- Rippergun wrapper也 clone同一 debuff base，覆寫為同 item + `attack_type == melee`；它保留 base `is_item_slot_wielded` 條件。wrapper 沒有檢 `params.weapon_special`。P1 M1/M2/M3都將 `action_stab` 映射為武器特攻；該動作是 `stab` input 的 melee sweep，使用 `rippergun_weapon_special` profile。

- base proc template以 `proc_events.on_hit` 呼叫 `_add_debuff_on_hit_start/proc`。Start函式從trait tier override讀每次堆疊數；proc函式確認目標仍存活且有 buff extension，再把指定層數交給目標。每層 `rending_debuff` 是 `rending_multiplier=0.025`、duration 5、max_stacks/cap 16，增加層數刷新時間。target debuff是獨立目標 buff，因此後續任何來源的傷害都能讀取其 `target_stat_buffs.rending_multiplier`。

- DamageCalculation 在 `_rending_multiplier` 中把目標 `rending_multiplier` 與攻擊者撕裂來源加算後封頂 1；對 armored/super_armor/resistant/berserker 的裝甲倍率用撕裂補足，超過正常倍率的部分以 25% 效率計算。`Attack._execute` 先計算並處理傷害、再套用 HitReaction，最後發 `on_hit`；該事件資料傳入 attack_type、attacked_unit、damage_type、weapon_special 與 attacking_item，之後由 buff extension 佇列處理。

- 令每次合格事件加層q，現有層數n；新n=min(n+q,16)，目標脆弱B=.025n。單次q不等於百分比；q=4單次增加10%脆弱，q=16單次增加40%；以封頂後的總層數計算總脆弱。

- 同template_name共用目前層數；合格事件刷新start_time，滿16也刷新。倒數以proc處理時間t為起點；若t>start+5到期則整組結束，沒有逐層各自五秒期限。

- 其他合格撕裂/脆弱為R₀，總R=min(R₀+B,1)。取armor係數k（armored/super_armor/resistant/berserker為1、其他0）、x=kR，溢出係數o（四類.25、其他0）。

- 裝甲前傷害D、原裝甲倍率A：A≥1時F=A+xo；A<1且x>1−A時F=1+(x−(1−A))o；其他F=A+x。此階段傷害DF，增量D(F−A)，後續finesse、hitzone、減傷另算。

- D100、A.1、k1/o.25：B.1→20（原10，相對+100%）；B.4→50（相對+400%）；A.9、B.4→107.5；A1、B.4→110。k0時F=A不受這筆脆弱影響。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_059`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_059.png)｜[Issue附件](https://github.com/user-attachments/assets/06518882-7971-44c2-a245-2bc1a344a659)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 撬棍等級覆寫 | [撬棍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L545-L614) |
| 撬棍Buff接入 | [撬棍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L108-L122) |
| UI 撬棍 | [UI 撬棍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L214) |
| 撬棍 科技教士 型號6匯入 | [撬棍 科技教士 型號6匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L14) |
| 撬棍 科技教士 型號6接入 | [撬棍 科技教士 型號6接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua#L2187-L2189) |
| 撕裂槍等級覆寫 | [撕裂槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L156-L225) |
| 撕裂槍Buff接入 | [撕裂槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L17-L18) |
| UI 撕裂槍 | [UI 撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1038) |
| 撕裂槍 碎敵 Mk II匯入 | [撕裂槍 碎敵 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L15) |
| 撕裂槍 碎敵 Mk II接入 | [撕裂槍 碎敵 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L911-L913) |
| 撕裂槍 碎敵 Mk V匯入 | [撕裂槍 碎敵 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L15) |
| 撕裂槍 碎敵 Mk V接入 | [撕裂槍 碎敵 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m2.lua#L906-L908) |
| 撕裂槍 碎敵 Mk VI匯入 | [撕裂槍 碎敵 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L15) |
| 撕裂槍 碎敵 Mk VI接入 | [撕裂槍 碎敵 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m3.lua#L889-L891) |
