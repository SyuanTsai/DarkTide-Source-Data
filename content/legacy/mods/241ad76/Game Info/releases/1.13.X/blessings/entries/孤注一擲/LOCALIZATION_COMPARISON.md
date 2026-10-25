# 孤注一擲：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_scaled_on_stamina`／hash`c92a8c2a`；描述鍵`loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash`ded4b2a1`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：All or Nothing／孤注一擲。

- 文件名稱：孤注一擲(All or Nothing)。

- 適用武器：戰鬥斧、戰術斧、工兵鏟、撬棍、戴維爾戰鎬、碎骨者、法務官電擊鎚、電弧鎚、法務官電擊鎚和鎮壓護盾；描述鍵`loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash`ded4b2a1`。

- 英文模板：Up to {power_level:%s} Strength, as Stamina depletes.

- 繁中模板：隨耐力消耗，威力最多提升{power_level:%s}。

- **靜態重建**：下表保留同 hash 原文句型，將各等級實際格式器輸出的百分比代入；一般八型號與碎骨者克魯克 Mk IIa 分列。

| 等級 | 一般八型號英文 | 一般八型號繁中 | 克魯克 Mk IIa 英文 | 克魯克 Mk IIa 繁中 |
|---|---|---|---|---|
| I | Up to +25% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+25%。 | Up to +15% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+15%。 |
| II | Up to +30% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+30%。 | Up to +20% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+20%。 |
| III | Up to +35% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+35%。 | Up to +25% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+25%。 |
| IV | Up to +40% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+40%。 | Up to +30% Strength, as Stamina depletes. | 隨耐力消耗，威力最多提升+30%。 |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 卡面威力數值 | 英文 RAW：「Up to {power_level:%s} Strength, as Stamina depletes.」；繁中 RAW：「隨耐力消耗，威力最多提升{power_level:%s}。」；`loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash `ded4b2a1`。 | 九個 own tier 的 format_values.power_level、find_value 與 value_manipulation：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua:461–505；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua:277–319；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua:237–279；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua:187–229；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua:113–155；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua:153–195；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua:307–349；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua:111–153；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua:444–486；TraitValueParser.trait_description（scripts/utilities/trait_value_parser.lua:65–73）、_try_format_values（同檔:77–117）、_number_value_formatter／_num_decimals（同檔:189–228）。 | 符合 | 同 hash 句型與每個 own tier 格式器讀到的數值相符；格式器將每階值乘五並轉為百分比，卡面是最大值。 |
| 耐力階段 | 英文 RAW：「Up to {power_level:%s} Strength, as Stamina depletes.」；繁中 RAW：「隨耐力消耗，威力最多提升{power_level:%s}。」；`loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash `ded4b2a1`。 | `Buff.update_stat_buffs`（scripts/extension_systems/buff/buffs/buff.lua:738–747）選擇 own 完整條件表；`SteppedStatBuff`（scripts/extension_systems/buff/buffs/stepped_stat_buff.lua:10–79）合併步階並限制 0–5；`base_weapon_trait_buff_templates`（scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:776–800）讀目前耐力比例及一般 0.20 步幅。 | 文件未涵蓋 | RAW 說明會隨耐力消耗增加，未寫出比例讀取、步幅、向下取整、五階上限或克魯克 Mk IIa 的 0.125 覆寫。 |
| 威力與結算 | 英文 RAW 使用「Strength」；繁中 RAW 使用「威力」；名稱鍵 `loc_trait_bespoke_power_bonus_scaled_on_stamina`／hash `c92a8c2a`，描述鍵 `loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash `ded4b2a1`。 | `PowerLevel.power_level_buff_modifier` 與 `scale_power_level_to_power_type_curve`（scripts/utilities/attack/power_level.lua:25–60、63–91）；`DamageProfile.power_distribution_from_power_level`／`max_hit_mass`（scripts/utilities/attack/damage_profile.lua:29–48）；`_power_level_scaled_damage`（scripts/utilities/attack/damage_calculation.lua:219–228）；`StaggerCalculation.calculate`（scripts/utilities/attack/stagger_calculation.lua:15–27）。 | 文件未涵蓋 | RAW 沒有把威力百分比定義成最終生命值傷害百分比；實際傷害、削韌與 Cleave 依各攻擊和目標曲線計算。 |
| 純推擊與推擊後攻擊 | 英文／繁中 RAW 僅描述威力隨耐力消耗變化；位置 `loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash `ded4b2a1`。 | `ActionPush._push`（scripts/extension_systems/weapon/actions/action_push.lua:52–100）與 `PushAttack.push`（scripts/utilities/attack/push_attack.lua:32–92）用 `attack_types.push`；後續獨立 Sweep 由 `ActionSweep._do_damage_to_unit`（scripts/extension_systems/weapon/actions/action_sweep.lua:1475–1505）以 `attack_types.melee` 結算。 | 文件未涵蓋 | RAW 未區分推擊與推擊後 Sweep；只有後者符合近戰威力的攻擊類型條件。 |
| 特殊、副命中與持用更新 | 英文／繁中 RAW 未列動作類別或裝備條件；位置 `loc_trait_bespoke_power_bonus_scaled_on_stamina_desc`／hash `ded4b2a1`。 | ActionSweep._try_make_chain_from_sweep_hit（scripts/extension_systems/weapon/actions/action_sweep.lua:1765–1808）連到 P3；chain settings 用 attack_types.arc（powermaul_p3_m1.lua:284–291、1473–1480）。ActionWeaponShout._collect_targets 讀取並傳遞 action_settings.attack_type（action_weapon_shout.lua:187、200–219），不會按 kind=weapon_shout 自行設定類別：P3 special pushfollow 明列 attack_types.shout（powermaul_p3_m1.lua:1539–1543）；鎮壓護盾 P1 M1/M2 special-release 雖是 weapon_shout，設定未提供 attack_type（powermaul_shield_p1_m1.lua:1265–1327、powermaul_shield_p1_m2.lua:1474–1536），故傳入與 Attack.execute 預設皆為 nil（attack.lua:45–83、148–154），都不是 melee。Buff 更新與武器移除分別見 PlayerUnitBuffExtension.fixed_update（player_unit_buff_extension.lua:131–145）及 weapon extension（player_unit_weapon_extension.lua:652–662）。Crowbar sticky gate 依 ActionSweep._can_start_stickyness（action_sweep.lua:666–713）與型號設定（crowbar_p1_m1.lua:85–152）；heavy 各 action/profile 的 melee_attack_strengths.heavy 對照列於 crowbar_p1_m1.lua:309–386、517–594、743–830、980–1067 與 crowbar_damage_profile_templates.lua:159–171、363–375、661–722、723–741。 | 文件未涵蓋 | 各 weapon_shout 路徑只按實際 action_settings.attack_type 判斷；P3 設為 shout，兩個護盾釋放未設欄位而落為 nil，不能從 kind 名稱推成 melee。Generated Crowbar aliases 保留各 BASE profile；八個 heavy 路徑均有實際 heavy 力量旗標。黏附不是所有特殊命中的必然後續：special_active、命中中止、有效目標與 hit-zone/prop 條件都必須符合。 |
