# 撕扯震盪：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I-IV tier values and formatter | [Own I-IV tier values and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L289-L358) |
| Actual proc wrapper and action/item gates | [Actual proc wrapper and action/item gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L27-L77) |
| Global rending debuff values and caps | [Global rending debuff values and caps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376) |
| Stacking-stat count | [Stacking-stat count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| Declared stack cap and offset handling | [Declared stack cap and offset handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L413-L429) |
| Cap and per-stack duration refresh | [Cap and per-stack duration refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461) |
| Max-cap check implementation | [Max-cap check implementation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| Stat aggregation and value override path | [Stat aggregation and value override path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L725) |
| Rending stat type | [Rending stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L958-L964) |
| Damage calculation entry and target stagger/rending context | [Damage calculation entry and target stagger/rending context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L87) |
| Armor-aware rending calculation | [Armor-aware rending calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| Force Staff P1 Mk III template imports | [Force Staff P1 Mk III template imports](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L28-L67) |
| Secondary/primary action wiring | [Secondary/primary action wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L231-L315) |
| Secondary action continuation and charge route | [Secondary action continuation and charge route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L316-L406) |
| Additional action mappings | [Additional action mappings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L407-L460) |
| Melee special action mapping | [Melee special action mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L556-L577) |
| Heavy special action mapping | [Heavy special action mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L654-L672) |
| Vent action mapping | [Vent action mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L943-L956) |
| Other secondary action aliases | [Other secondary action aliases](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1160-L1165) |
| Action aliases and transitions | [Action aliases and transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1177-L1191) |
| Force Staff explosion template | [Force Staff explosion template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/settings_templates/force_staff_explosion_templates.lua#L12-L40) |
| Force Staff damage profile | [Force Staff damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/settings_templates/force_staff_damage_profile_templates.lua#L177-L256) |
| Charge template | [Charge template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L155-L182) |
| ChargeActionModule charge calculation | [ChargeActionModule charge calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L28-L73) |
| Explosion action call | [Explosion action call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_trigger_explosion.lua#L21-L56) |
| Weapon action state update | [Weapon action state update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L289-L317) |
| Explosion builds hit targets and carries charge | [Explosion builds hit targets and carries charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L259-L305) |
| Attack computes damage before dispatching hit buffs | [Attack computes damage before dispatching hit buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L345-L384) |
| Attack on-hit event data and queue | [Attack on-hit event data and queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L575-L621) |
| Attack no-proc types | [Attack no-proc types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88) |
| Damage type classification | [Damage type classification](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L31-L46) |
| Target Buff extension event loop | [Target Buff extension event loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L281) |
| ProcBuff no-cooldown activation | [ProcBuff no-cooldown activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L194) |
| ProcBuff per-event processing | [ProcBuff per-event processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L370) |
| Owner buff update order | [Owner buff update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Proc event enqueue | [Proc event enqueue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L958-L991) |
| Target extension hook availability | [Target extension hook availability](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L209-L256) |
| Rounding rule | [Rounding rule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134) |
| Per-target explosion hits | [Per-target explosion hits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L141-L213) |
| Queued explosion calls Attack once per target | [Queued explosion calls Attack once per target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L243-L317) |
| Multiple-stack add attempts are individual | [Multiple-stack add attempts are individual](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L415) |
| Wrapper live gate and charge rounding | [Wrapper live gate and charge rounding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L56-L74) |
| Actual Mk III primary projectile action | [Actual Mk III primary projectile action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L231-L241) |
| ActionShoot dispatches prepared charge to projectile action | [ActionShoot dispatches prepared charge to projectile action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L306-L314) |
| Ordinary ActionShoot prepared charge default | [Ordinary ActionShoot prepared charge default](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L421-L425) |
| ActionShootProjectile spawn arguments | [ActionShootProjectile spawn arguments](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_projectile.lua#L28-L73) |
| item_projectile local_init argument mapping | [item_projectile local_init argument mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_templates/item_projectile_unit_template.lua#L43-L105) |
| Projectile damage extension stores charge level | [Projectile damage extension stores charge level](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L48-L58) |
| Projectile impact fallback charge level | [Projectile impact fallback charge level](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L465-L471) |
| Projectile impact Attack call forwards charge | [Projectile impact Attack call forwards charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L537-L541) |
| Actual special sweep charge initialization | [Actual special sweep charge initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L233-L240) |
| Mk III light special config | [Mk III light special config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L559-L577) |
| Sweep hit Attack call forwards charge | [Sweep hit Attack call forwards charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1500) |
| Push Attack omits charge_level | [Push Attack omits charge_level](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L85) |
| Attack charge argument default | [Attack charge argument default](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L102-L110) |
| Secondary explosion charge config | [Secondary explosion charge config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L407-L415) |
| Secondary explosion extracts charge | [Secondary explosion extracts charge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_trigger_explosion.lua#L21-L36) |
| Buff duration expires by start time | [Buff duration expires by start time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| Buff extension removes finished buffs | [Buff extension removes finished buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L207) |
| Buff extension teardown removes held buffs | [Buff extension teardown removes held buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L142-L157) |
| Target buff added to target extension | [Target buff added to target extension](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L62-L74) |
| rapid_left projectile template binding | [rapid_left projectile template binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L304-L310) |
| Complete force_staff_ball impact settings | [Complete force_staff_ball impact settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L657-L676) |
| Projectile impact charge transform | [Projectile impact charge transform](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L471-L504) |
| Complete force_staff_ball damage profile | [Complete force_staff_ball damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/settings_templates/force_staff_damage_profile_templates.lua#L26-L95) |
| Attack on_hit eligibility gate | [Attack on_hit eligibility gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L581) |
| armor-consumer-review 1 | [armor-consumer-review 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L119) |
| armor-consumer-review 3 | [armor-consumer-review 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19) |
| first-effect-cache-review 1 | [first-effect-cache-review 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L97-L120) |
| first-effect-cache-review 2 | [first-effect-cache-review 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L206-L223) |
| first-effect-cache-review 3 | [first-effect-cache-review 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L934-L936) |
| first-effect-cache-review 4 | [first-effect-cache-review 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L488) |
| complete-special-sweep-review 1 | [complete-special-sweep-review 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L559-L653) |
| complete-special-sweep-review 2 | [complete-special-sweep-review 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L654-L749) |
| complete-special-sweep-review 3 | [complete-special-sweep-review 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L750-L846) |
| complete-special-sweep-review 4 | [complete-special-sweep-review 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L847-L942) |
| complete-special-sweep-review 5 | [complete-special-sweep-review 5](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/settings_templates/force_staff_damage_profile_templates.lua#L450-L498) |
| complete-special-sweep-review 6 | [complete-special-sweep-review 6](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/settings_templates/force_staff_damage_profile_templates.lua#L499-L517) |
| complete-special-sweep-review 7 | [complete-special-sweep-review 7](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/settings_templates/force_staff_damage_profile_templates.lua#L518-L540) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定 Release 1.13.1／來源 SHA 核對到一個 ranged 實作：weapon_trait_bespoke_forcestaff_p1_rend_armor_on_aoe_charge。實際 trait item 限制為 forcestaff_p1_m1，唯一 binding 是 forcestaff_p1 的 Mk III；武器模板匯入該 trait 表並把其 keys 接到 trait 清單。
- I–IV 的 target_buff_data.num_stacks_on_proc 是 2／4／6／8。自訂 proc_buff 監聽每次 on_hit，觸發機率 1，持用條件使用目前裝備欄位；另以 attacking item 比對及目前動作名稱檢查，只有符合次要範圍爆炸動作的命中事件會進入自訂處理。
- 自訂函式以事件參數的蓄力值乘該級層數，再呼叫 math.round；結果大於 0 時，對該命中目標加入同名 rending_debuff。目標必須有 buff_system extension。此實作沒有自身 cooldown 或額外命中後持續效果。
- wrapper 的 target_buff_data.max_stacks=31 會存入模板資料，但自訂 proc 函式不讀取該欄位，也沒有把它傳作目標 Buff override；實際目標上限由全域 rending_debuff 的 16 層設定決定。
- 實際武器主攻是投射物；次要動作先蓄力，再透過次要按鍵組合進入範圍爆炸；特殊動作是近戰揮擊，另有通風動作。wrapper 在事件處理時讀取目前 action_trigger_explosion，並不保留來源動作名稱；因此需另核對實際 charge producer，不能一概排除延遲主攻或特殊近戰命中。
- 爆炸每個實際受擊目標分別走 Attack.execute 並攜帶 charge_level、物品與目標資料。該 Force Staff 爆炸傷害型別不在 Attack 的 no-proc 清單，且實際 damage profile 未設定 skip_on_hit_proc；on-hit 事件會進入 owner buff 的緩衝佇列。佇列每個事件分別通過條件、可觸發與自訂檢查；無 cooldown 時同一批次各個符合條件的目標事件可以分別處理。因自訂檢查看的是事件處理時的 live action component，不能假定所有延遲處理都仍處於爆炸動作。
- 傷害計算先讀取目標端 rending_multiplier 並將它與其他 rending 因子合併，再依護甲類型和攻擊傷害設定計算；同一 hit 的傷害計算早於 on-hit 事件，所以本次新增值不會反作用於已結算的這次爆炸。

- 動作覆蓋更正：primary projectile spawn 未傳 charge；本型號 force_staff_ball impact 無速度轉換設定，所以預設 1 供給 Attack。實際 action_stab、action_stab_heavy、action_swipe、action_swipe_heavy 四種 special sweep 完整設定均未設 use_charge，ActionSweep 以 1 供給 Attack；三個實際 profile 與完整 override 均無 skip_on_hit_proc。排隊事件處理時若 live explosion、持用與攻擊 item 都符合，可按滿 tier 請求。純 push 的 charge=nil，wrapper轉0，無正數 add 或滿層 refresh。
- 新 target stat 等目標 BuffExtension 重建 cache 後，才可被傷害 getter 讀取；無追溯同 hit 或保證立即下一 hit 的效果。
- 同名 rending_debuff 在目標 extension 的 stacking_buffs 中共用 cap與timer；duration超過 start+5 後finished，extension update移除。owner切換不參與目標duration；target extension destroy清理剩餘buff。未由此來源推定死亡本身立即移除。

令 c 為 ChargeActionModule 產生並傳入命中事件的蓄力值（本型號路徑限制在 0–1），T 為所選級別的滿蓄力請求層數（I–IV 為 2／4／6／8）：

n_req = round(c × T)

若目標目前有 s 層本效果且尚未達上限，新增層數為 n_add = min(n_req, 16 − s)；若已滿 16 層，正數請求不增加層數，但全域加層路徑仍刷新期限。單層脆弱值為 0.025，所以此效果的目標端貢獻為 0.025 × stack_count，最高 0.40。

傷害消費端將目標 rending_multiplier 與攻擊者及其他情境的 rending 因子相加後封頂，並再乘護甲類型係數；傷害公式使用這個結果與該傷害 profile 的護甲傷害係數。因而 +0.10 是目標脆弱 stat 的增量，不等於整次攻擊傷害直接提高 10%。同次爆炸先計算傷害，再處理 on-hit 並添加脆弱；只有後續傷害能使用新加的層數。

- 護甲段令 B 為護甲乘算前傷害、A 為原始護甲傷害倍率、r 為總穿透增量封頂 1 後乘該護甲穿透係數、o 為超額穿透係數。A≥1 時新倍率為 A+r×o；A<1 且 r>1−A 時為 1+(r−(1−A))×o；其餘為 A+r。護甲段傷害為 B×新倍率，之後仍有 finesse、背刺／側襲、部位、DoT與護甲修正、遞減及力場覆寫。算例將這些後續因素排除，才可把該結果視為最終傷害。
- armored／super_armor／resistant／berserker 的穿透係數為1、超額係數為0.25；缺少設定的護甲類別按0處理，不能把40%脆弱套成固定全傷害倍率。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_010`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_010.png)｜[Issue附件](https://github.com/user-attachments/assets/3e607592-cc64-489a-9554-99198c287b16)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 虛空爆破力場法杖等級覆寫 | [虛空爆破力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L289-L358) |
| 虛空爆破力場法杖Buff接入 | [虛空爆破力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L27-L77) |
| UI 虛空爆破力場法杖 | [UI 虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L805) |
| 虛空爆破力場法杖 陰陽 Mk III匯入 | [虛空爆破力場法杖 陰陽 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| 虛空爆破力場法杖 陰陽 Mk III接入 | [虛空爆破力場法杖 陰陽 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
