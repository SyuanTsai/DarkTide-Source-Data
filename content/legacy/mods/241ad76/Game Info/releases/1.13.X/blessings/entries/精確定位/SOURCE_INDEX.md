# 精確定位：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 電能步槍 I–IV formatter | [電能步槍 I–IV formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L288-L373) |
| 電能步槍 wrapper | [電能步槍 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L27) |
| 擲彈兵臂鎧 I–IV formatter | [擲彈兵臂鎧 I–IV formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L190-L247) |
| 擲彈兵臂鎧 custom step wrapper | [擲彈兵臂鎧 custom step wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L27-L64) |
| 磷光手槍 I–IV formatter | [磷光手槍 I–IV formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L258-L343) |
| 磷光手槍 wrapper | [磷光手槍 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L22) |
| 衝覆者手槍 I–IV formatter及實際 buff key | [衝覆者手槍 I–IV formatter及實際 buff key](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L524-L609) |
| 衝覆者手槍 wrapper alias | [衝覆者手槍 wrapper alias](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L29) |
| 通用瞄準 charge 與射擊清層 | [通用瞄準 charge 與射擊清層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2681-L2770) |
| Gauntlet stepped base | [Gauntlet stepped base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2771-L2813) |
| 條件 stat 覆寫 | [條件 stat 覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L746) |
| stepped count clamp | [stepped count clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L79) |
| on_equip trait 安裝 | [on_equip trait 安裝](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| 裝備與切槽生命週期 | [裝備與切槽生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| 切槽時 on_equip 保留 | [切槽時 on_equip 保留](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| queued proc event delivery | [queued proc event delivery](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| Galvanic hip/aim/zoom shot | [Galvanic hip/aim/zoom shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L263-L400) |
| Galvanic zoom aim | [Galvanic zoom aim](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L411-L430) |
| Galvanic bash exits aim | [Galvanic bash exits aim](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L547-L562) |
| Gauntlet aim/projectile | [Gauntlet aim/projectile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L274-L340) |
| Gauntlet melee actions | [Gauntlet melee actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L425-L575) |
| Gauntlet special explosive melee | [Gauntlet special explosive melee](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1101-L1175) |
| Phosphor hip and aimed shots | [Phosphor hip and aimed shots](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L190-L321) |
| Phosphor whip exits aim | [Phosphor whip exits aim](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L501-L540) |
| Shotpistol hip shot | [Shotpistol hip shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L358-L390) |
| Shotpistol block shot | [Shotpistol block shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L464-L495) |
| Shotpistol block aim transitions | [Shotpistol block aim transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L562-L650) |
| Shotpistol push/special exits aim | [Shotpistol push/special exits aim](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L971-L1060) |
| aim action sets alternate-fire | [aim action sets alternate-fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_aim.lua#L20-L23) |
| block-aim firing transition | [block-aim firing transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_block_aiming.lua#L21-L55) |
| generic action stop-alternate flag | [generic action stop-alternate flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L46-L79) |
| shot updates fire_last_t | [shot updates fire_last_t](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L306-L329) |
| hitscan on_shoot event | [hitscan on_shoot event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L206-L224) |
| pellet on_shoot event | [pellet on_shoot event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L185-L236) |
| projectile event and spawn | [projectile event and spawn](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_projectile.lua#L28-L78) |
| player projectile snapshots stats | [player projectile snapshots stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_templates/item_projectile_unit_template.lua#L79-L100) |
| projectile buff snapshot read | [projectile buff snapshot read](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_projectile_unit_buff_extension.lua#L13-L23) |
| projectile snapshot is not updated | [projectile snapshot is not updated](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_projectile_unit_buff_extension.lua#L33-L65) |
| projectile Attack uses projectile attacker | [projectile Attack uses projectile attacker](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L537-L541) |
| generic power consumer | [generic power consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L65) |
| curve before generic modifier | [curve before generic modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| Gauntlet P1 grenade projectile binding | [Gauntlet P1 grenade projectile binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L342-L347) |
| Gauntlet grenade direct/fuse/impact profiles | [Gauntlet grenade direct/fuse/impact profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L27-L41) |
| Projectile impact Attack uses projectile attacker | [Projectile impact Attack uses projectile attacker](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L649-L658) |
| Projectile fuse Attack uses projectile attacker | [Projectile fuse Attack uses projectile attacker](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L359-L362) |
| Explosion queue carries attacker and owner flags | [Explosion queue carries attacker and owner flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L277-L290) |
| WeaponSystem queued explosion calls Attack | [WeaponSystem queued explosion calls Attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L306-L316) |
| Attack.execute reads attacker stat-buff extension | [Attack.execute reads attacker stat-buff extension](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L271-L285) |
| Base stack plus offset is clamped before subclass bonus step. | [Base stack plus offset is clamped before subclass bonus step.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L411) |
| Trait buffs table actual keys are added on_equip; trait ID and buff ID need not have ident | [Trait buffs table actual keys are added on_equip; trait ID and buff ID need not have ident](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L186) |
| Gauntlet aim action and unzoom transition. | [Gauntlet aim action and unzoom transition.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L274-L312) |
| Aimed Gauntlet shot is shoot_projectile. | [Aimed Gauntlet shot is shoot_projectile.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L313-L340) |
| Gauntlet left charged melee windup. | [Gauntlet left charged melee windup.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L425-L470) |
| Gauntlet right charged melee; push is direction override. | [Gauntlet right charged melee; push is direction override.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L480-L510) |
| Gauntlet alternate melee windup. | [Gauntlet alternate melee windup.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L538-L575) |
| Gauntlet alternate-fire settings. | [Gauntlet alternate-fire settings.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1248-L1274) |
| Phosphor zoom is kind aim. | [Phosphor zoom is kind aim.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L327-L340) |
| Pistol-whip follow-up sweep stops alternate fire. | [Pistol-whip follow-up sweep stops alternate fire.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L616-L640) |
| Reload follow-up attack is sweep. | [Reload follow-up attack is sweep.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L829-L850) |
| Shotpistol block is block_aiming. | [Shotpistol block is block_aiming.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L562-L610) |
| Block action chains to shoot_blocking. | [Block action chains to shoot_blocking.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L632-L650) |
| Block-from-shot has skip_enter_alternate_fire transition. | [Block-from-shot has skip_enter_alternate_fire transition.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L660-L700) |
| Special bash begins with windup. | [Special bash begins with windup.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L971-L1005) |
| Push/bash action is kind push and stops alternate fire. | [Push/bash action is kind push and stops alternate fire.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1032-L1060) |
| No-ammo push also stops alternate fire. | [No-ammo push also stops alternate fire.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1126-L1140) |
| Heavy bash sweep has push direction override and stops alternate fire. | [Heavy bash sweep has push direction override and stops alternate fire.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1212-L1235) |
| 純push及重型bash明列stop_alternate_fire=true，後者direction override不改action kind。 | [純push及重型bash明列stop_alternate_fire=true，後者direction override不改action kind。](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1126-L1235) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

三個家族沿用 `power_level_on_aim_time`：Buff讀玩家的 alternate-fire 與 shoot component；瞄準期間每 .4 秒累積，最多5步。射擊開始時暫停，射擊完成事件處理後標記清除，並在下一次Buff更新歸零。三個 own tier 用 lerped power modifier 設不同上限。

擲彈兵臂鎧改用 `chance_based_on_aim_time` 的 stepped buff，wrapper覆寫每步 stat、計步及0–5上限。它計算 `max(alternate_fire.start_t, action_shoot.fire_last_t)` 到最新固定更新時間的間隔；最近射擊不足0.8秒時直接沿用舊步數，否則未瞄準歸零，瞄準時按 `floor(elapsed/.4)` 重算。持用該臂鎧是 conditional stat 的必要條件；tier stat會替換conditional fallback值，不會多加一份。

三個通用家族由 hitscan/pellet 的 `on_shoot` 事件清除；Ogryn projectile 只送 `on_shoot_projectile`，其自訂步數依 `fire_last_t` 更新。Shotpistol block-aim可以接 pellet 射擊而保持瞄準；其他特殊動作是否終止瞄準依各自 action setting。電能步槍 bash、磷光鞭擊／follow-up、衝覆者 push/bash 明確結束瞄準。

四項皆使用通用 `power_level_modifier`，依 PowerLevel helper 對其他 modifier 偏移求和，套在 power-type 曲線換算後的輸入；不等於最終傷害乘數。Ogryn P1 grenade 使用預設 `item_projectile`：生成時複製玩家的 stat/keyword，投射物更新不重算；其攻擊以投射物的 stat snapshot 結算。

令 `s=min(5, floor(有效瞄準時間/0.4))`，單步增量 `p` 見集中表，累積 `t=s×p`。若同一威力池另有加成 `q`，power-type 曲線後輸入 `B` 的比較是 `B×(1+q+t)`，不是 `(1+q)×(1+t)`；`B` 不是最終生命傷害。通用 clone 在射擊事件處理後於下一次 Buff 更新清空；Ogryn callback 在發射後0.8秒內回傳old_steps，超過保留窗才重算，conditional stat 另有持用 gate。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_149`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_149.png)｜[Issue附件](https://github.com/user-attachments/assets/87b6548a-cbe0-4d68-a8bc-f0e457c17276)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電能步槍等級覆寫 | [電能步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L288-L373) |
| 電能步槍Buff接入 | [電能步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L27) |
| UI 電能步槍 | [UI 電能步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L857) |
| 電能步槍 布蘭克斯 Mk CV匯入 | [電能步槍 布蘭克斯 Mk CV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L17) |
| 電能步槍 布蘭克斯 Mk CV接入 | [電能步槍 布蘭克斯 Mk CV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L863-L865) |
| 擲彈兵臂鎧等級覆寫 | [擲彈兵臂鎧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L190-L247) |
| 擲彈兵臂鎧Buff接入 | [擲彈兵臂鎧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L27-L64) |
| UI 擲彈兵臂鎧 | [UI 擲彈兵臂鎧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1025) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III匯入 | [擲彈兵臂鎧 布拉斯托姆 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L17) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III接入 | [擲彈兵臂鎧 布拉斯托姆 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1295-L1297) |
| 磷光爆破手槍等級覆寫 | [磷光爆破手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L258-L343) |
| 磷光爆破手槍Buff接入 | [磷光爆破手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L22) |
| UI 磷光爆破手槍 | [UI 磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1100) |
| 磷光爆破手槍 布蘭克斯 Mk XI匯入 | [磷光爆破手槍 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| 磷光爆破手槍 布蘭克斯 Mk XI接入 | [磷光爆破手槍 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
| 衝覆者霰彈手槍和防暴盾牌等級覆寫 | [衝覆者霰彈手槍和防暴盾牌等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L524-L609) |
| 衝覆者霰彈手槍和防暴盾牌Buff接入 | [衝覆者霰彈手槍和防暴盾牌Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L29) |
| UI 衝覆者霰彈手槍和防暴盾牌 | [UI 衝覆者霰彈手槍和防暴盾牌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1203) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L16) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1533-L1535) |
