# 擴展性：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_weapon_special_power_bonus_after_one_shots`／hash`e639c6a3`；描述鍵`loc_trait_bespoke_weapon_special_power_bonus_after_one_shots_desc`／hash`8bb6569b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Expansive／擴展性。

- 文件名稱：擴展性(Expansive)。

- 適用武器：反衝者、惡棍槍；描述鍵`loc_trait_bespoke_weapon_special_power_bonus_after_one_shots_desc`／hash`8bb6569b`。

- 英文模板：{power_level:%s}Melee Strength for  {time:%s}s on Hitting 3+ Enemies with a Ranged Attack.

- 繁中模板：遠程攻擊命中至少三名敵人後近戰威力提升{power_level:%s}，持續{time:%s}秒。

- **靜態重建**：依固定格式參數將各級近戰威力百分比與持續時間代回同一中英 RAW 描述；以下是靜態文字重建，不是遊戲畫面。

| 等級 | 英文靜態輸出 | 繁中靜態輸出 |
|---|---|---|
| I | <code>+30%Melee Strength for  3.5s on Hitting 3+ Enemies with a Ranged Attack.</code> | <code>遠程攻擊命中至少三名敵人後近戰威力提升+30%，持續3.5秒。</code> |
| II | <code>+34%Melee Strength for  3.5s on Hitting 3+ Enemies with a Ranged Attack.</code> | <code>遠程攻擊命中至少三名敵人後近戰威力提升+34%，持續3.5秒。</code> |
| III | <code>+38%Melee Strength for  3.5s on Hitting 3+ Enemies with a Ranged Attack.</code> | <code>遠程攻擊命中至少三名敵人後近戰威力提升+38%，持續3.5秒。</code> |
| IV | <code>+42%Melee Strength for  3.5s on Hitting 3+ Enemies with a Ranged Attack.</code> | <code>遠程攻擊命中至少三名敵人後近戰威力提升+42%，持續3.5秒。</code> |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發門檻與 one_shots 名稱 | content/localization/items；locale 0/16；loc_trait_bespoke_weapon_special_power_bonus_after_one_shots_desc；hash 8bb6569b。EN RAW：{power_level:%s}Melee Strength for  {time:%s}s on Hitting 3+ Enemies with a Ranged Attack.；ZH RAW：遠程攻擊命中至少三名敵人後近戰威力提升{power_level:%s}，持續{time:%s}秒。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua：templates.weapon_trait_bespoke_ogryn_thumper_p1_weapon_special_power_bonus_after_one_shots，26–42；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua：templates.weapon_trait_bespoke_ogryn_thumper_p3_weapon_special_power_bonus_after_one_shots，27–43；scripts/settings/buff/helper_functions/check_proc_functions.lua：CheckProcFunctions.on_shoot_hit_multiple，584–591。 | 一致 | 兩語都寫命中至少3；trait ID的one_shots不是額外擊殺條件。 |
| 反衝者 Mk V 計數 | loc_trait_bespoke_weapon_special_power_bonus_after_one_shots_desc hash 8bb6569b；RAW要求一發遠程攻擊命中3+。 | scripts/extension_systems/weapon/actions/action_shoot_pellets.lua：ActionShootPellets._shoot，185–232（處理完本發射擊後送 on_shoot）；同檔 ActionShootPellets._process_hits，696–743（由 unit_to_damage_data_index 的不同單位鍵計數 num_hit_units）。 | 文件未涵蓋 | RAW不說32顆彈丸如何合併；實際 P1 hip/aim各32顆，同一單位只算1。 |
| 惡棍槍 Mk VII 計數 | loc_trait_bespoke_weapon_special_power_bonus_after_one_shots_desc hash 8bb6569b；RAW只稱 ranged attack；卡片 fire_mode 顯示 projectile。 | scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua：action_shoot_hip/action_shoot_zoomed 設定，197–245、311–362（runtime kind 為 shoot_hit_scan）；scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua：ActionShootHitScan._shoot，145–220；scripts/utilities/attack/hit_scan.lua：HitScan.process_hits，53–110、215–248（處理碰撞命中並按可結算直接受擊單位增加計數）。 | 文件未涵蓋 | 顯示欄位與runtime路徑不同；RAW未說內部用彈體或hitscan。 |
| 近戰威力範圍 | locale 0/16 同 hash 8bb6569b；EN寫 Melee Strength，ZH寫近戰威力提升。 | scripts/utilities/attack/power_level.lua：PowerLevel.power_level_buff_modifier，25–91（melee_power_level_modifier 僅在 attack_type=melee 取用）；scripts/utilities/attack/damage_calculation.lua：DamageCalculation.calculate，44–120（終局傷害另依 profile、目標與其他修正計算）。 | 一致 | 翻譯對應近戰威力，不是所有攻擊的固定終局傷害百分比。 |
| 首次生效 | locale 0/16 同 hash 8bb6569b；描述沒有指出同一次觸發攻擊結算先後。 | scripts/extension_systems/weapon/actions/action_shoot_pellets.lua：ActionShootPellets._shoot，185–232；scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua：ActionShootHitScan._shoot，195–220；scripts/extension_systems/buff/player_unit_buff_extension.lua：PlayerUnitBuffExtension.fixed_update，131–145（先 _update_proc_events，再 _update_stat_buffs_and_keywords）；scripts/extension_systems/buff/buff_extension_base.lua：BuffExtensionBase._update_proc_events，233–275，及 BuffExtensionBase._update_stat_buffs_and_keywords，330–354。 | 文件未涵蓋 | 觸發射擊已完成傷害；更新後的近戰才讀到新值。 |
| 計時與層數 | locale 0/16 同 hash 8bb6569b；EN duration placeholder及ZH持續時間對應。 | scripts/extension_systems/buff/buffs/proc_buff.lua：ProcBuff.is_proc_active／_is_proc_active，72–104；ProcBuff._can_activate，173–195；ProcBuff.update_proc_events，304–355；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua：P1 I–IV override，270–334；同目錄 weapon_traits_bespoke_ogryn_thumper_p3.lua：P3 I–IV override，270–334。 | 一致 | 重複事件刷新單一3.5秒Buff，不疊層。 |
| slot與切換 | locale 0/16 同 hash 8bb6569b；RAW未寫slot identity或切換中的現有Buff。 | scripts/settings/buff/helper_functions/check_proc_functions.lua：CheckProcFunctions.check_item_slot，664–691；scripts/extension_systems/weapon/player_unit_weapon_extension.lua：PlayerUnitWeaponExtension.on_wieldable_slot_equipped，633–650，on_wieldable_slot_unequipped，652–681，on_slot_wielded，685–735，on_slot_unwielded，743–785。 | 文件未涵蓋 | 新事件來源由slot helper檢查；切槽不取消已啟動Buff。 |
| 特殊 Bash與近戰 | loc_trait_bespoke_weapon_special_power_bonus_after_one_shots_desc hash 8bb6569b；RAW要求ranged attack。 | scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua：action_bash 的 kind=sweep，437–450；scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua：action_bash 的 kind=sweep，459–472；scripts/extension_systems/weapon/actions/action_sweep.lua：ActionSweep._do_damage_to_unit，1475–1503（attack_type=melee 並呼叫 Attack.execute）；兩個 wrapper 的 on_shoot 訂閱見 scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua，35–42，及 P3 同檔，36–43。 | 一致 | 多目標 Bash 仍不是 on_shoot。 |
| RAW formatter欄位 | locale 0/16 同 hash 8bb6569b。EN：{power_level:%s}Melee Strength for  {time:%s}s on Hitting 3+ Enemies with a Ranged Attack.；ZH：遠程攻擊命中至少三名敵人後近戰威力提升{power_level:%s}，持續{time:%s}秒。 | scripts/utilities/trait_value_parser.lua：TraitValueParser.trait_description，65–115；local _try_format_values，77–120；local _number_value_formatter，189–203；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua：own tier overrides，270–334；P3 同類 tier overrides，270–334。 | 文件未涵蓋 | 靜態重建保留英文 placeholder 後無空格與時間前雙空格；門檻字面3+。 |
