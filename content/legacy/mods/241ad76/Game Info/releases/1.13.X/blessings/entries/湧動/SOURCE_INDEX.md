# 湧動：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own conditional_stat_buffs I–IV ranged crit-chance fractions .02/.03/.04/.05 and formatter fixed string value2. | [Own conditional_stat_buffs I–IV ranged crit-chance fractions .02/.03/.04/.05 and formatter fixed string value2.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L451-L496) |
| Own wrapper verbatim clone double_shot_on_crit; actual per-action applicability separately reviewed. | [Own wrapper verbatim clone double_shot_on_crit; actual per-action applicability separately reviewed.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L93) |
| Own conditional_stat_buffs I–IV ranged crit-chance fractions .02/.03/.04/.05 and formatter fixed string value2. | [Own conditional_stat_buffs I–IV ranged crit-chance fractions .02/.03/.04/.05 and formatter fixed string value2.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L311-L354) |
| Own wrapper verbatim clone double_shot_on_crit; actual per-action applicability separately reviewed. | [Own wrapper verbatim clone double_shot_on_crit; actual per-action applicability separately reviewed.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L45) |
| Own conditional_stat_buffs I–IV ranged crit-chance fractions .02/.03/.04/.05 and formatter fixed string value2. | [Own conditional_stat_buffs I–IV ranged crit-chance fractions .02/.03/.04/.05 and formatter fixed string value2.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L381-L426) |
| Own wrapper verbatim clone double_shot_on_crit; actual per-action applicability separately reviewed. | [Own wrapper verbatim clone double_shot_on_crit; actual per-action applicability separately reviewed.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L47) |
| Actual own trait import | [Actual own trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| Actual table.ukeys/table.append wiring | [Actual table.ukeys/table.append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
| Actual own trait import | [Actual own trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| Actual table.ukeys/table.append wiring | [Actual table.ukeys/table.append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| Actual own trait import | [Actual own trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| Actual table.ukeys/table.append wiring | [Actual table.ukeys/table.append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| base double-shot template | [base double-shot template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2351-L2363) |
| keyword enum | [keyword enum](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L24) |
| Buff keyword gate | [Buff keyword gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L137-L142) |
| Buff keyword evaluation | [Buff keyword evaluation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L820-L832) |
| held-slot helper | [held-slot helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| spawn kind dispatch | [spawn kind dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L70-L75) |
| P1 normal shot | [P1 normal shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L231-L241) |
| P1 charge setup | [P1 charge setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L316-L330) |
| P1 charged release | [P1 charged release](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L407-L415) |
| P3 normal shot | [P3 normal shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L278-L288) |
| P3 charge setup | [P3 charge setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L363-L380) |
| P3 charged release | [P3 charged release](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L442-L460) |
| P3 special melee | [P3 special melee](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L640-L648) |
| P4 normal shot | [P4 normal shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L230-L240) |
| P4 charge setup | [P4 charge setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L315-L330) |
| P4 charged release | [P4 charged release](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L404-L419) |
| P4 special melee | [P4 special melee](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L571-L579) |
| spawn start/count | [spawn start/count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L76-L145) |
| ranged crit checker | [ranged crit checker](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| crit chance algorithm | [crit chance algorithm](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| crit PRD rounding | [crit PRD rounding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| projectile crit initialization | [projectile crit initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L380-L438) |
| projectile stores crit | [projectile stores crit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L48-L59) |
| projectile attack uses crit | [projectile attack uses crit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L537-L540) |
| pending projectile cleanup | [pending projectile cleanup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L258-L290) |
| P1 melee special windup | [P1 melee special windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L462-L480) |
| P1 melee sweep | [P1 melee sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L566-L574) |
| Own conditional stat override replaces the base conditional fallback | [Own conditional stat override replaces the base conditional fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| P3 melee special windup | [P3 melee special windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L539-L550) |
| P4 melee special windup | [P4 melee special windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L470-L485) |
| P1 melee special setup | [P1 melee special setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L462-L480) |
| Projectile init copies crit | [Projectile init copies crit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L48-L59) |
| Action finish removes unfired projectiles | [Action finish removes unfired projectiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L258-L290) |
| P1 template import and append wiring | [P1 template import and append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| P1 trait ukeys and append | [P1 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| P3 template import and append wiring | [P3 template import and append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| P3 trait ukeys and append | [P3 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| P4 template import and append wiring | [P4 template import and append wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| P4 trait ukeys and append | [P4 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
| Critical chance source | [Critical chance source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| Spawn action crit gate | [Spawn action crit gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L231-L241) |
| P1 charged explosion | [P1 charged explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L407-L415) |
| P3 charged chain lightning | [P3 charged chain lightning](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L442-L460) |
| P4 charged secondary shot | [P4 charged secondary shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L404-L419) |
| 蓄力爆炸的遠程致命一擊判定 | [蓄力爆炸的遠程致命一擊判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_trigger_explosion.lua#L21-L55) |
| 連鎖閃電的遠程致命一擊判定 | [連鎖閃電的遠程致命一擊判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L110-L119) |
| 實際連鎖閃電允許致命一擊 | [實際連鎖閃電允許致命一擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L442-L461) |
| 投射物發射偏移與動作速度 | [投射物發射偏移與動作速度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L182-L215) |
| 動作結束處理尚未發出的投射物 | [動作結束處理尚未發出的投射物](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L251-L290) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 三個型號各自定義本祝福 I–IV 的 conditional ranged_critical_strike_chance：.02、.03、.04、.05；三個實作各自具有相同的 I–IV 數列。RAW formatter 從該 trait override 的 conditional_stat_buffs.ranged_critical_strike_chance 讀值，以 percentage 和 + 前綴顯示；Shots 的 value 是固定字串 2。
- 三個 wrapper 都 clone double_shot_on_crit base。base 有一層 conditional keyword critical_strike_second_projectile 和 .05 的遠程致命一擊機率 fallback；own tier override 提供 .02–.05 並取代該 fallback，不額外相加。
- base 只設定 conditional_stat_buffs_func=is_item_slot_wielded；Buff 在缺少獨立 conditional_keywords_func 時以同一函數作 keyword 條件，故致命一擊機率與追加投射物 keyword 都受當前持用槽位限制。此結論只適用這三個沿用該 base 的 wrapper。
- 這三個符合型號每次合格動作的 action kind 是 spawn_projectile。action 開始時以 is_ranged=true 計算一次致命一擊；基礎 num_projectiles 缺省為1，只有該結果為致命一擊且條件 keyword 存在時才加1，之後依迴圈生成兩個投射物，沿用同一致命一擊布林值，第二枚的發射偏移為0.1動作秒，實際發射門檻再除以time_scale。沒有第二次致命一擊擲骰，也不等第一枚命中才生成。
- 實際動作限制：虛空爆破與電流力場法杖的一般主要射擊為 spawn_projectile；前者蓄力釋放是 trigger_explosion，後者蓄力次要是 chain_lightning。虛空打擊法杖一般主要射擊和蓄力次要都為 spawn_projectile。三者近戰特殊掃擊不是投射物動作；推擊也未接入此路徑。
- 投射物初始化保存此次 is_critical_strike 和蓄力值，撞擊時把保存的致命一擊布林傳至 Attack；此處僅證明致命一擊結果快照，不推稱完整 owner 傷害屬性也都快照。spawning action 結束時，尚未發射的投射物會清除；已發射投射物的致命一擊結果不因換武器重新擲骰。
- 新射擊動作會重做致命一擊判定。這是射擊機率與追加一枚的效果，不保證多一枚命中、同一目標受傷或總傷害翻倍。

- trigger_explosion在start使用_check_for_critical_strike(false,true)，P3 chain_lightning在can_crit=true時使用同一遠程檢查；兩者仍讀取本祝福的遠程機率，但沒有追加投射物consumer。近戰模式的melee判定不讀取ranged_critical_strike_chance。

- 設 c 為職業基礎機率、一般與遠程加算機率、武器處理機率修正的總和，尚未限制到 0–1；p 為本祝福階級值，I–IV 為 .02／.03／.04／.05。沒有保證或禁止致命一擊時，先計算 clamp(c + p, 0, 1)，再乘上 (1 − critical_strike_chance_to_damage_convert)，最後取兩位小數送入 PRD。機率轉傷為 0 且未碰到上下限時，本祝福原始差即 2–5 個百分點。

- 無機率轉傷、未碰到上下限且 c = .10 時，IV 得 .10 + .05 = .15；差為 .05，即 5 個百分點，相對 .10 為 .05 ÷ .10 = 50%。這不是傷害倍率，也不是每組固定發數的致命一擊保證。

- 適用的單發射擊原本 num_projectiles = 1；動作開始時的致命一擊結果為真，且持用條件提供 critical_strike_second_projectile 時，num_projectiles + 1 = 2。第二枚使用同一布林結果，發射門檻為 (spawn_projectile_time + .1) ÷ time_scale；非遠端玩家的 spawn_projectile_time = fire_time，遠端玩家則為 max(fire_time − lag-compensation rewind, 0)。兩枚間隔仍為 .1 ÷ time_scale，並非命中第一枚後才觸發。

- 傷害算例以兩枚都擊中、每枚實際結算後各 150 為前提：總傷害 150 + 150 = 300。此處加總的是兩次攻擊的最終傷害，不把本祝福當成直接乘上整段傷害的 ×2 修正。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_062`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_062.png)｜[Issue附件](https://github.com/user-attachments/assets/c8817fbb-dac1-4242-be45-082494de8f2c)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 虛空爆破力場法杖等級覆寫 | [虛空爆破力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L451-L496) |
| 虛空爆破力場法杖Buff接入 | [虛空爆破力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L93-L95) |
| UI 虛空爆破力場法杖 | [UI 虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L805) |
| 虛空爆破力場法杖 陰陽 Mk III匯入 | [虛空爆破力場法杖 陰陽 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| 虛空爆破力場法杖 陰陽 Mk III接入 | [虛空爆破力場法杖 陰陽 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| 電流力場法杖等級覆寫 | [電流力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L311-L354) |
| 電流力場法杖Buff接入 | [電流力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L45) |
| UI 電流力場法杖 | [UI 電流力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L831) |
| 電流力場法杖 諾瑪努斯 Mk VI匯入 | [電流力場法杖 諾瑪努斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| 電流力場法杖 諾瑪努斯 Mk VI接入 | [電流力場法杖 諾瑪努斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| 虛空打擊力場法杖等級覆寫 | [虛空打擊力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L381-L426) |
| 虛空打擊力場法杖Buff接入 | [虛空打擊力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L47-L49) |
| UI 虛空打擊力場法杖 | [UI 虛空打擊力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L844) |
| 虛空打擊力場法杖 陰陽 Mk IV匯入 | [虛空打擊力場法杖 陰陽 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| 虛空打擊力場法杖 陰陽 Mk IV接入 | [虛空打擊力場法杖 陰陽 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
