# 持續阻擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_suppression_on_continuous_fire`／hash`99f3b21e`；描述鍵`loc_trait_bespoke_suppression_on_continuous_fire_desc`／hash`ecbe5a89`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Ceaseless Barrage／持續阻擊。

- 文件名稱：持續阻擊(Ceaseless Barrage)。

- 適用武器：槍托自動槍、雙鏈重型機槍；描述鍵`loc_trait_bespoke_suppression_on_continuous_fire_desc`／hash`ecbe5a89`。

- 英文模板：{suppression:%s} Suppression and {damage_vs_suppressed} Damage against Suppressed Enemies for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times.

- 繁中模板：持續射擊期間，每消耗{ammo:%s}彈藥，壓制增加{suppression:%s}，對被壓制的敵人造成的傷害也會增加{damage_vs_suppressed}，最多疊加{stacks:%s}層。

- **靜態重建**：以下依實際格式參數逐級代入 RAW 佔位值；每級使用相同句型。

| 等級 | 英文靜態重建 | 繁中靜態重建 |
|---|---|---|
| I | +12.5% Suppression and +4% Damage against Suppressed Enemies for every 2.5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗2.5%彈藥，壓制增加+12.5%，對被壓制的敵人造成的傷害也會增加+4%，最多疊加5層。 |
| II | +15% Suppression and +5% Damage against Suppressed Enemies for every 2.5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗2.5%彈藥，壓制增加+15%，對被壓制的敵人造成的傷害也會增加+5%，最多疊加5層。 |
| III | +17.5% Suppression and +6% Damage against Suppressed Enemies for every 2.5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗2.5%彈藥，壓制增加+17.5%，對被壓制的敵人造成的傷害也會增加+6%，最多疊加5層。 |
| IV | +20% Suppression and +7% Damage against Suppressed Enemies for every 2.5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗2.5%彈藥，壓制增加+20%，對被壓制的敵人造成的傷害也會增加+7%，最多疊加5層。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級數值與顯示 | RAW描述鍵 loc_trait_bespoke_suppression_on_continuous_fire_desc，hash ecbe5a89；{suppression:%s} Suppression and {damage_vs_suppressed} Damage against Suppressed Enemies for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times. / 持續射擊期間，每消耗{ammo:%s}彈藥，壓制增加{suppression:%s}，對被壓制的敵人造成的傷害也會增加{damage_vs_suppressed}，最多疊加{stacks:%s}層。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua:314–377 與 scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua:96–159；TraitValueParser.trait_description 65–72 呼叫 local _try_format_values；百分比 prefix 為 +。 | 符合 | formatter 依 tier stat_buffs 顯示壓制及對受壓制目標傷害百分比，彈匣與層數是固定字串。 |
| wrapper與實際接入 | RAW同上，只標示持續射擊、每2.5%彈匣、上限5層。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua:23–29; scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua:24–30; scripts/extension_systems/buff/buffs/buff.lua:Buff._calculate_stat_buffs 689–734 and Buff.update_stat_buffs 735–747. | 文件未涵蓋 | 兩組 wrapper 各自接入相同連續射擊基底；自身 tier 同鍵數值覆蓋0.5／0.06 fallback，不再加算。 |
| 射擊計數與步進 | RAW同上；對應文字為每消耗2.5%彈匣。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:_continuous_fire_start_func/_number_of_continuous_fire_steps 1897–1935; scripts/settings/buff/fire_step_functions.lua:suppression_continuous_fire_step_func 51–65; scripts/extension_systems/buff/buffs/stepped_stat_buff.lua:SteppedStatBuff.update_stat_buffs 32–51. | 文件未涵蓋 | 實作讀玩家射擊計數，按最大彈匣容量乘2.5%向下取整成每步發數並封頂5；裝填或無槽步進為0。 |
| 命中掃描、壓制與傷害先後 | RAW同上；「對被壓制敵人」限定保留。 | scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua:ActionShootHitScan._shoot 145–220; scripts/utilities/attack/hit_scan.lua:HitScan.process_hits 222–260; scripts/utilities/attack/attack.lua:Attack.execute → local _execute 45, 199–354; scripts/utilities/attack/damage_calculation.lua:DamageCalculation.calculate → local _calculate_damage_buff 44, 232–455. | 文件未涵蓋 | DamageCalculation 先讀攻擊前的 suppressed 狀態；HitScan 在傷害後才施加 suppression。首次施壓擊不回溯取得傷害加成。 |
| 各型號射擊門檻 | RAW同上，沒有逐型號列停火清除時間。 | scripts/extension_systems/weapon/player_unit_weapon_extension.lua:PlayerUnitWeaponExtension.fixed_update 510–530 and spread_template 1573–1580; scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua:1597–1607/2102–2112/2343–2353/2532–2542/2721–2731; scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua:390–397/650–662/958–969/1041–1074/1122–1137/1206–1219/1514–1525/1591–1606/1899–1910. | 文件未涵蓋 | 嚴格大於射擊結束時間加上目前狀態門檻才清零；自動槍六路徑均0.1秒，重型機槍依型號與瞄準狀態為0.1或0.25秒。 |
| 特殊近戰與既有傷害增益 | RAW描述連續射擊建立射擊步進。 | scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua:action_push; scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua:action_push; scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua:action_push; scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua:action_stab; scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua:action_stab; scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua:action_stab; scripts/extension_systems/weapon/actions/action_sweep.lua:ActionSweep._do_damage_to_unit 1475–1503; scripts/utilities/attack/damage_calculation.lua:DamageCalculation.calculate 44–455. | 文件未涵蓋 | 特殊近戰 Sweep 使用 melee 與原武器 item，不進 ActionShoot 計數或 HitScan 壓制施加；既有 damage_vs_suppressed 仍按攻擊前目標狀態由通用傷害路徑判定。 |
