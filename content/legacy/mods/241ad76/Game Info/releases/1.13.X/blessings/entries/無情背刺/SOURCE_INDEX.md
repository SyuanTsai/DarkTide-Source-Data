# 無情背刺：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Combat Blade I-IV and formatter | [Combat Blade I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L372-L411) |
| Shivs I-IV and formatter | [Shivs I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L372-L411) |
| Combat Blade wrapper | [Combat Blade wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L20) |
| Shivs wrapper | [Shivs wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L20) |
| Base passive | [Base passive](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2514-L2525) |
| Held slot condition | [Held slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Stat type | [Stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L691-L704) |
| Stat aggregation | [Stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Keyword aggregation | [Keyword aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L818) |
| Buff fixed update | [Buff fixed update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Stat cache rebuild | [Stat cache rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| Equip lifecycle | [Equip lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L650) |
| Unequip lifecycle | [Unequip lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L681) |
| Wield lifecycle | [Wield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L693) |
| Unwield lifecycle | [Unwield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Melee-only backstab gate | [Melee-only backstab gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L24) |
| Geometry and effective flag | [Geometry and effective flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L34-L65) |
| Damage input | [Damage input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L349-L354) |
| Armor stage order | [Armor stage order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L119) |
| Rending pool | [Rending pool](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| Overdamage armor factors | [Overdamage armor factors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19) |
| Sweep damage route | [Sweep damage route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| Push route dispatch | [Push route dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L75-L90) |
| Push attack type | [Push attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L86) |
| Projectile hit route | [Projectile hit route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L483-L541) |
| Weapon throw class | [Weapon throw class](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_throw.lua#L1-L29) |
| Catachan Mk III left light/heavy | [Catachan Mk III left light/heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L124-L263) |
| Catachan Mk III right light/heavy | [Catachan Mk III right light/heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L315-L459) |
| Catachan Mk III alternate chain | [Catachan Mk III alternate chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L511-L704) |
| Catachan Mk III push/follow | [Catachan Mk III push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L757-L879) |
| Catachan Mk III special punch | [Catachan Mk III special punch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L957) |
| Catachan Mk III heavy-jab combo hit | [Catachan Mk III heavy-jab combo hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1006-L1073) |
| Catachan Mk VI left light/heavy | [Catachan Mk VI left light/heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L124-L263) |
| Catachan Mk VI right light/heavy | [Catachan Mk VI right light/heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L315-L459) |
| Catachan Mk VI alternate chain | [Catachan Mk VI alternate chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L511-L776) |
| Catachan Mk VI push/follow | [Catachan Mk VI push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L834-L957) |
| Catachan Mk VI special punch | [Catachan Mk VI special punch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L958-L1032) |
| Catachan Mk VI heavy-jab combo hit | [Catachan Mk VI heavy-jab combo hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1080-L1148) |
| Shivs Mk I ordinary/heavy | [Shivs Mk I ordinary/heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L470-L905) |
| Shivs Mk I push/follow | [Shivs Mk I push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L964-L1090) |
| Shivs Mk I special throw | [Shivs Mk I special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1102-L1121) |
| Shivs Mk III ordinary/heavy | [Shivs Mk III ordinary/heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L487-L969) |
| Shivs Mk III push/follow | [Shivs Mk III push/follow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1028-L1154) |
| Shivs Mk III special throw | [Shivs Mk III special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1166-L1185) |
| Example knife profile | [Example knife profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L71-L101) |
| lerp_1 endpoints | [lerp_1 endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_settings.lua#L52-L55) |
| lerp_0_5 endpoints | [lerp_0_5 endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_settings.lua#L80-L83) |
| Damage profile values | [Damage profile values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L192-L211) |
| Damage profile interpolation | [Damage profile interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L379-L384) |
| Catachan Mk III special-chain windup | [Catachan Mk III special-chain windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L958-L1005) |
| Catachan Mk VI special-chain windup | [Catachan Mk VI special-chain windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1033-L1079) |
| Special jab damage profile | [Special jab damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L542-L619) |
| Heavy-jab follow-up damage profile | [Heavy-jab follow-up damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L231-L289) |
| lerp_2 endpoints | [lerp_2 endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_settings.lua#L24-L27) |
| lerp_0_75 endpoints | [lerp_0_75 endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_settings.lua#L64-L67) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

## 被動模板與持用條件

- `combatknife_p1` 與 `dual_shivs_p1` 的 own wrapper 分別直接 clone `BaseWeaponTraitBuffTemplates.rending_on_backstab`，沒有另加觸發事件、層數、期限或攻擊類型過濾。
- Base template 同時給裝備中的武器效果常駐 `allow_backstabbing` keyword，以及一項 `conditional_stat_buffs.backstab_rending_multiplier=1`。兩者是獨立欄位：keyword 不使用持用條件；撕裂數值的 conditional stat 以 `ConditionalFunctions.is_item_slot_wielded` 比較此 Buff 的 item slot 與目前 wielded slot。
- 兩個武器的 I–IV own tier 都完整覆寫同一 conditional stat 為 `.7/.8/.9/1.0`，各自 formatter 讀相同 tier override 並以 percentage、`+` prefix 輸出；沒有 suffix 推定，兩份完整 tier 與 formatter 分別核對。
- 裝備武器時 weapon extension 安裝 `on_equip` buffs，切換欄位只改變 `on_wield`／`on_unwield` 類別；此 base 是裝備時安裝的被動。從裝備欄移除時，weapon extension 移除 `on_equip` buffs 並刪除 weapon instance。Buff 更新後重算 stat buffs 與 keywords，所以首次效果在裝備及原生快取更新後生效，不在輸入切換的同一瞬間直接改寫已完成攻擊。

## 有效背刺與撕裂公式

- `AttackPositioning.is_backstabbing` 先要求 `attack_type=melee`。它把攻擊方向與目標水平朝向比較，`dot > 0.5` 才成立，且需目標存在 unit-data 與 breed 資料。之後 effective backstab 還須 damage profile 有 `backstab_bonus`，或攻擊者具有 `allow_backstabbing` keyword。`Attack.execute` 傳給 DamageCalculation 的是 effective backstab，不是單純幾何結果。
- DamageCalculation 以 `attacker_stat_buffs.backstab_rending_multiplier` 作為其中一項背刺撕裂乘數，這個 stat 類型是 `additive_multiplier`。Buff 將 tier `.7–1.0` 加到中性值 1，因此該項在有效背刺時成為 `1.7–2.0`，相對原生一項 neutral term 的淨增量 `p=.7–1.0`。
- `_rending_multiplier` 將 17 個中性為 1 的項目合併成撕裂增量並 cap 1。令 `r` 為合併撕裂增量、`a` 為 damage profile 對該護甲命中的 `armor_damage_modifier`、`o` 為該護甲類別的超額撕裂係數，則：`a≥1` 時 `M=a+r×o`；`a<1` 且 `1−a<r` 時 `M=1+(r−(1−a))×o`；否則 `M=a+r`。Armored／super_armor／resistant／berserker 類別的 `o=.25`、撕裂護甲類型倍率為 1。護甲階段後仍有 finesse、背刺傷害、flanking、hit-zone、DoT、護甲 Buff 與 diminishing-return 等修正；force field 另有原生覆寫。

## 四個 Mark 的攻擊種類與戰刃特殊連段

- 戰刃 P1 M1／M2 的普通 light/heavy、alternate 與推擊後續皆以 sweep 送入 melee `Attack.execute`；蓄力的 windup 不是命中本身。純推擊分開呼叫 `PushAttack.push`，`attack_type=push`，不符合背刺所需 melee 類型。
- 兩個戰刃 Mark 的特殊鍵首段都是 `action_special_jab` sweep，動作資產為 `attack_special_jab`，action 欄位 `damage_type=punch` 並連到 `jab_special`。該 profile 自身 `damage_type=blunt_thunder`，`weapon_special=true`，且對 `armor_types.resistant` 的 attack modifier 為 `lerp_2`；profile 沒有 `backstab_bonus`。因 trait 在裝備時提供常駐 `allow_backstabbing`，此 punch sweep 在持用撕裂數值且幾何／目標條件合格時仍可成為 effective backstab。
- 特殊拳擊可接 light/heavy 輸入進入 `action_melee_start_left_jab_combo` windup；windup 不造成命中，後續 `action_left_heavy_jab_combo` 才是另一個 sweep。它改用 `medium_combat_knife_ninja_fencer` profile（`backstab_bonus=0.25`，`damage_type=metal_slashing_light`），action `damage_type=knife`，動畫 sweep asset 為 `heavy_swing_down_left`。因此是後續刀刃重擊，不是把首拳 profile 延續使用。Mk VI 的後續 action 明設 `power_level=400`；後續刀刃重擊接回特殊拳擊的 `special_action` chain_time 為 .85 秒，Mk III 為 .4 秒；兩者首拳接 windup 的 `start_attack` chain_time 都是 .32 秒，首段 punch/profile 接線相同。
- 短刀 P1 M1／M2 的一般 light/alternate/heavy 與推擊後續是 sweep；純推擊仍為 push。特殊動作是 `weapon_throw`，`ActionWeaponThrow` 建立投射物，ProjectileDamageExtension 使用 `attack_type=ranged`，故不符合 effective melee backstab。
- Own wrappers 僅 clone passive，沒有為拳擊、刀刃後續、短刀投擲另加事件、攻擊種類過濾或第二段攻擊。兩段戰刃 sweep 各自套用原生 effective-backstab 判定；純 push 和短刀 ranged throw 被排除。

設 `p` 為本 tier 的背刺撕裂增量（I–IV `.70/.80/.90/1.00`），`r` 為原生 17 項撕裂合計在 cap=1 後的值，`a` 為本攻擊 profile 對本次護甲命中的 attack `armor_damage_modifier`，`o` 為該護甲類別的超額撕裂係數。此 trait 在 effective backstab 時使原生 backstab-rending term 由 1 變為 `1+p`；若其他撕裂項均中性且沒有既有增益，`r=min(p,1)`。

護甲階段採來源中的三分支：

- `a≥1`：`M=a+r×o`。
- `a<1` 且 `1−a<r`：`M=1+(r−(1−a))×o`。
- 其餘：`M=a+r`。

Profile armor modifiers 可是 damage-lerp endpoints；本例明示 `t=.5`，依原生線性插值取值，並非宣稱每場實戰固定為此倍率。戰刃 Mk VI 首段 punch 的 `jab_special` profile 對 resistant attack 使用 `lerp_2=[1.42,2.58]`，故 `a=2`；Tier I `r=.70` 時 `M=2+.70×.25=2.175`，normalized `B=100` 的階段值是 200→217.5。Mk III 後續 heavy-jab 刀刃 profile 對 resistant attack 使用 `lerp_1=[.67,1.33]`，故 `a=1`；Tier IV `r=1` 時 `M=1+.25=1.25`，`B=100` 的階段值是 100→125。這些是各自連接之 profile 的護甲階段比較，不是最終 HP 傷害。

`B×M` 是護甲／撕裂階段結果；後續 finesse、背刺傷害、flanking、hit-zone、DoT、攻防護甲 Buff、diminishing returns 及 force-field 規則仍需另行計算。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_197`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_197.png)｜[Issue附件](https://github.com/user-attachments/assets/fa42d7e1-e0d1-4701-bcc5-04caada37d5c)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L372-L411) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L20) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 短刀等級覆寫 | [短刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L372-L411) |
| 短刀Buff接入 | [短刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L20) |
| UI 短刀 | [UI 短刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L227) |
| 短刀 臨時拼湊 型號1匯入 | [短刀 臨時拼湊 型號1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| 短刀 臨時拼湊 型號3匯入 | [短刀 臨時拼湊 型號3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
