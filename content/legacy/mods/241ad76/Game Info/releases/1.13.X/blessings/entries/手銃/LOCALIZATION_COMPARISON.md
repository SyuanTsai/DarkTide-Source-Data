# 手銃：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_rending_on_crit`／hash`1391c6e5`；描述鍵`loc_trait_bespoke_rending_on_crit_desc`／hash`3dea63a1`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Hand-Cannon／手銃。

- 文件名稱：手銃(Hand-Cannon)。

- 適用武器：磷光爆破手槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_rending_on_crit_desc`／hash`3dea63a1`。

- 英文模板：{rend:%s} Rending on Critical Hit.

- 繁中模板：致命一擊時{rend:%s}撕裂。

- **靜態重建**：依每個實際 trait 的 percentage 格式器，把 own tier 值乘以 100，再加上設定的「+」前綴；以下保留 RAW 句型並代入格式器結果。

| 等級 | Phosphor Blast Pistol 英文 | 磷光爆破手槍繁中 | Quickdraw Stub Revolver 英文 | 快拔左輪手槍繁中 |
|---|---|---|---|---|
| I | +5% Rending on Critical Hit. | 致命一擊時+5%撕裂。 | +30% Rending on Critical Hit. | 致命一擊時+30%撕裂。 |
| II | +7.5% Rending on Critical Hit. | 致命一擊時+7.5%撕裂。 | +40% Rending on Critical Hit. | 致命一擊時+40%撕裂。 |
| III | +10% Rending on Critical Hit. | 致命一擊時+10%撕裂。 | +50% Rending on Critical Hit. | 致命一擊時+50%撕裂。 |
| IV | +15% Rending on Critical Hit. | 致命一擊時+15%撕裂。 | +60% Rending on Critical Hit. | 致命一擊時+60%撕裂。 |
- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 卡面數值 | 英文 RAW（locale 0/16，同 hash `3dea63a1`）：`{rend:%s} Rending on Critical Hit.`；繁中 RAW（同 hash）：`致命一擊時{rend:%s}撕裂。`；描述鍵 `loc_trait_bespoke_rending_on_crit_desc`。 | Own tier 與格式器：`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua` 81–120、`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua` 481–520；`FORMATTING_FUNCTIONS.percentage`（`scripts/utilities/trait_value_parser.lua` 7–21）、`_try_format_values`（77–120）、`FIND_VALUE_FUNCTIONS.trait_override`（51–56）、`_number_value_formatter`（189–202）、`_num_decimals`（205–228）。 | 符合 | 各 own 值乘 100 並依 prefix、有效小數位數格式化；.075 顯示 7.5，與 RAW 句型一致。 |
| 暴擊與持用條件 | RAW 只寫「Rending on Critical Hit」，未說明持用欄位或何種攻擊可暴擊；描述鍵 `loc_trait_bespoke_rending_on_crit_desc`、hash `3dea63a1`。 | 共用模板 held 條件：`scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua` 2672–2680；`ConditionalFunctions.is_item_slot_wielded`（`scripts/settings/buff/helper_functions/conditional_functions.lua` 43–59）；`Buff._calculate_stat_buffs`／`Buff.update_stat_buffs`（`scripts/extension_systems/buff/buffs/buff.lua` 689–747）；射擊 `ActionShoot.start`／`ActionWeaponBase._check_for_critical_strike`（`scripts/extension_systems/weapon/actions/action_shoot.lua` 100–157、`scripts/extension_systems/weapon/actions/action_weapon_base.lua` 148–184）；Sweep `ActionSweep.start`／`ActionSweep._do_damage_to_unit`（`scripts/extension_systems/weapon/actions/action_sweep.lua` 218–228、1488–1501）。 | 文件未涵蓋 | RAW 未描述來源欄位條件、暴擊擲骰或各武器動作是否把暴擊結果傳入命中；依實際綁定路徑說明。 |
| 撕裂倍率與護甲結算 | RAW 說明暴擊時增加撕裂，未定義數值如何進入護甲計算；描述鍵 `loc_trait_bespoke_rending_on_crit_desc`、hash `3dea63a1`。 | `Buff._calculate_template_override_data`（`scripts/extension_systems/buff/buffs/buff.lua` 145–183）與 `Buff._calculate_stat_buffs`／`Buff.update_stat_buffs`（689–747）套用同 key own 值；`stat_buff_types`／`stat_buff_base_values`（`scripts/settings/buff/buff_settings.lua` 757–760、1045–1058）；局部 `_rending_multiplier`（`scripts/utilities/attack/damage_calculation.lua` 629–660）；`DamageProfile.armor_damage_modifier`（`scripts/utilities/attack/damage_profile.lua` 99–231、214–232）與 `DamageCalculation.calculate` 撕裂與三分支（`scripts/utilities/attack/damage_calculation.lua` 64–97，含 73–75 的護甲係數）；far/dropoff、default target、lerp fallback（`scripts/utilities/attack/damage_profile.lua` 22–27、236–242、321–359；`scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua` 5–11；`scripts/settings/damage/damage_profile_settings.lua` 9–10、72–95）；P1 M2 的 `stub_pistol_p1_m2` profile、crit_mod、far armor 表、default_target（`scripts/settings/equipment/weapon_templates/stub_pistols/settings_templates/stub_pistol_damage_profile_templates.lua` 73–106、252–335）與 M2 hitscan 100 m（`scripts/settings/equipment/weapon_templates/stub_pistols/settings_templates/stub_pistol_hitscan_templates.lua` 31–57）；armor settings（`scripts/settings/damage/armor_settings.lua` 8–19）。 | 文件未涵蓋 | RAW 未列中性值、17 項撕裂合計、三分支公式、critical armor profile 修正或超額撕裂折算；算例逐列標示距離、target_index 與 lerp 前提。 |
| 實際攻擊模式 | RAW 沒列型號、射擊模式或槍托特殊攻擊；描述鍵 `loc_trait_bespoke_rending_on_crit_desc`、hash `3dea63a1`。 | 各實際 action 與輸入連接：Phosphor `scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua` 111–188、190–307、501–932；Revolver M1 `scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua` 109–187、188–305、553–747；M2 `scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua` 108–186、187–306、464–659；完整路徑均位於 `scripts/settings/equipment/`。射擊消費者 `ActionShootHitScan`（`scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua` 145–220），特殊槍托使用 `ActionSweep`（`scripts/extension_systems/weapon/actions/action_sweep.lua` 218–228、1488–1501）。 | 文件未涵蓋 | RAW 未描述 Mark 綁定、腰射／瞄準 hitscan 或 Phosphor 裝填流程接出的 Sweep；按實際 action 和 profile 區分。 |
| 磷光背爆與持續傷害 | RAW 未提及背爆、燃燒週期傷害或暴擊旗標；描述鍵 `loc_trait_bespoke_rending_on_crit_desc`、hash `3dea63a1`。 | Hitscan 的 `HitScan.process_hits` 明確傳 `is_critical_strike=false`（`scripts/utilities/attack/hit_scan.lua` 312–320）；`Explosion.create_explosion` 與佇列更新／目標結算（`scripts/utilities/attack/explosion.lua` 50–59、270–306；`scripts/extension_systems/weapon/weapon_system.lua` 214–231、300–319）保留旗標；`templates.phosphor_burn.interval_func`（`scripts/settings/buff/weapon_buff_templates.lua` 2440–2472）未傳旗標，`Attack.execute` 預設 false（`scripts/utilities/attack/attack.lua` 45–83、108–114）。 | 文件未涵蓋 | 這些是 Phosphor 的獨立額外傷害路徑；程式明確傳 false 或使用 false 預設，故不套用暴擊撕裂。 |
