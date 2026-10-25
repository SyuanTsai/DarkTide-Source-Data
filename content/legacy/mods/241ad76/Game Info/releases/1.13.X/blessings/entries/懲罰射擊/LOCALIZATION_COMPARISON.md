# 懲罰射擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_shot_power_bonus_after_weapon_special_cleave`／hash`e215d96e`；描述鍵`loc_trait_bespoke_shot_power_bonus_after_weapon_special_cleave_desc`／hash`8ec0ae8a`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Punishing Fire／懲罰射擊。

- 文件名稱：懲罰射擊(Punishing Fire)。

- 適用武器：反衝者、惡棍槍；描述鍵`loc_trait_bespoke_shot_power_bonus_after_weapon_special_cleave_desc`／hash`8ec0ae8a`。

- 英文模板：{power_level:%s} Strength bonus on your ranged attack for {time:%s} seconds after cleaving through several enemies with your weapon's special attack.

- 繁中模板：使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升{power_level:%s}，持續{time:%s}秒。

- **靜態重建**：以下依格式器輸出，將四級數值代入相同英文與繁中 RAW 描述句型：

- **I 級 EN**：+6% Strength bonus on your ranged attack for 3 seconds after cleaving through several enemies with your weapon's special attack.
- **I 級 繁中**：使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升+6%，持續3秒。
- **II 級 EN**：+9% Strength bonus on your ranged attack for 3 seconds after cleaving through several enemies with your weapon's special attack.
- **II 級 繁中**：使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升+9%，持續3秒。
- **III 級 EN**：+12% Strength bonus on your ranged attack for 3 seconds after cleaving through several enemies with your weapon's special attack.
- **III 級 繁中**：使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升+12%，持續3秒。
- **IV 級 EN**：+15% Strength bonus on your ranged attack for 3 seconds after cleaving through several enemies with your weapon's special attack.
- **IV 級 繁中**：使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升+15%，持續3秒。

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV 等級數值與格式器 | RAW key loc_trait_bespoke_shot_power_bonus_after_weapon_special_cleave_desc / hash 8ec0ae8a；EN: {power_level:%s} Strength bonus on your ranged attack for {time:%s} seconds after cleaving through several enemies with your weapon's special attack.；繁中：使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升{power_level:%s}，持續{time:%s}秒。 | P1 tier：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua:385–446；P3 tier：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua:385–446；required_num_hits 在 scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua:44–60 與 scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua:45–61 的 buff_data；ProcBuff.update_stat_buffs：scripts/extension_systems/buff/buffs/proc_buff.lua:288–300；TraitValueParser.trait_description 與 local _try_format_values：scripts/utilities/trait_value_parser.lua:65–109；FORMATTING_FUNCTIONS.percentage：scripts/utilities/trait_value_parser.lua:7–21。 | 符合 | RAW placeholders 由相應 tier formatter 填入 +6%、+9%、+12%、+15%；兩個 own tier 覆寫 wrapper 的 .05 fallback。觸發門檻 3 來自 wrapper buff_data，不是 tier 數值。 |
| 特殊攻擊觸發描述 | 同一 RAW key/hash 8ec0ae8a；EN: {power_level:%s} Strength bonus on your ranged attack for {time:%s} seconds after cleaving through several enemies with your weapon's special attack.；繁中: 使用武器特殊攻擊順劈多個敵人後，遠程攻擊威力提升{power_level:%s}，持續{time:%s}秒。 | P1 wrapper：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua:44–60；P3 wrapper：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua:45–61；ActionSweep._do_damage_to_unit：scripts/extension_systems/weapon/actions/action_sweep.lua:1498–1501；local _handle_buffs：scripts/utilities/attack/attack.lua:550–623。 | 符合 | 兩個實際 wrapper 都監聽 on_hit 並要求持用槽、同一 weapon item、on_multiple_melee_hit；兩個 inventory binding 的 weapon special 都是 action_bash。 |
| 多目標計數門檻 | 同一 RAW key/hash 8ec0ae8a 使用 “several enemies”／「順劈多個敵人」，沒有數字序號或重設說明。 | CheckProcFunctions.on_multiple_hit / on_multiple_melee_hit：scripts/settings/buff/helper_functions/check_proc_functions.lua:414–426；ActionSweep target_number 計數與重設：scripts/extension_systems/weapon/actions/action_sweep.lua:380–388,1330–1362。 | 文件未涵蓋 | 實作檢查本次事件 target_number>=3，並在每次 sweep 重設；不跨 Bash 攻擊累積，也不另外檢查擊殺、踉蹌或正傷害。 |
| 力量效果與攻擊類型 | 同一 RAW key/hash 8ec0ae8a 明確寫 ranged attack 的 Strength bonus。 | PowerLevel.power_level_buff_modifier：scripts/utilities/attack/power_level.lua:25–61；PowerLevel.scale_power_level_to_power_type_curve：scripts/utilities/attack/power_level.lua:63–91；RangedAction.execute_attack：scripts/utilities/action/ranged_action.lua:22–29；P1 ActionShootPellets._shoot/HitScan.raycast：scripts/extension_systems/weapon/actions/action_shoot_pellets.lua:151–182；P3 hit-scan action：scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua:145–200。 | 符合 | 先將原始力量依原生武器力量類型曲線換算，再乘由適用全域／遠程／弱點／條件修正加算構成的力量倍率；本祝福的 ranged_power_level_modifier 僅供遠程攻擊。P1 多彈丸逐發命中掃描、P3 命中掃描是效果消費路徑，Bash 是近戰觸發而非受益攻擊。 |
| 持續時間、刷新與切槽 | 同一 RAW key/hash 8ec0ae8a 說效果持續 3 seconds，未說明重觸發或切槽。 | ProcBuff.update/_can_activate：scripts/extension_systems/buff/buffs/proc_buff.lua:78–104,173–185,304–355；PlayerUnitBuffExtension.fixed_update：scripts/extension_systems/buff/player_unit_buff_extension.lua:131–145；ConditionalFunctions.is_item_slot_wielded：scripts/settings/buff/helper_functions/conditional_functions.lua:43–60。 | 文件未涵蓋 | own wrapper 3 秒、allow_proc_while_active=true、無冷卻；重觸發刷新同一效果，切槽不暫停計時而 held 條件暫停效果，移除武器會移除 on_equip buff。 |
