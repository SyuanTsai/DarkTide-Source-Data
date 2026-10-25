# 勢不可擋：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_pass_past_armor_on_heavy_attack`／hash`281bde35`；描述鍵`loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc`／hash`ca7dd319`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Unstoppable Force／勢不可擋。

- 文件名稱：勢不可擋(Unstoppable Force)。

- 適用武器：撬棍、砍刀、碎骨者；描述鍵`loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc`／hash`ca7dd319`。

- 英文模板：Fully Charged Heavy Attacks ignore Enemy Hit Mass and have {damage:%s} Damage.

- 繁中模板：完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加{damage:%s}。

- **靜態重建**：以下依固定 tier 值、百分比格式與前置加號重建 RAW 描述：

| 等級 | 英文格式化描述（locale 0） | 繁中格式化描述（locale 16） |
|---|---|---|
| I | Fully Charged Heavy Attacks ignore Enemy Hit Mass and have +2.5% Damage. | 完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加+2.5%。 |
| II | Fully Charged Heavy Attacks ignore Enemy Hit Mass and have +5% Damage. | 完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加+5%。 |
| III | Fully Charged Heavy Attacks ignore Enemy Hit Mass and have +7.5% Damage. | 完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加+7.5%。 |
| IV | Fully Charged Heavy Attacks ignore Enemy Hit Mass and have +10% Damage. | 完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加+10%。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發方式 | RAW [loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc, hash ca7dd319]：EN「Fully Charged Heavy Attacks ignore Enemy Hit Mass and have {damage:%s} Damage.」；zh-TW「完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加{damage:%s}。」 | damage_calculation.lua 內 local _calculate_damage_buff（scripts/utilities/attack/damage_calculation.lua:232–315，判定與消費行312–315）：auto_completed_action 且 melee/heavy profile，讀取 attacker_stat_buffs.melee_fully_charged_damage。 | 符合 | 「Fully Charged Heavy Attacks」對應自動完成的重型近戰攻擊；RAW 未展開程式旗標與武器 profile 細節。 |
| 無視敵人打擊質量 | RAW [loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc, hash ca7dd319]：EN「Fully Charged Heavy Attacks ignore Enemy Hit Mass and have {damage:%s} Damage.」；zh-TW「完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加{damage:%s}。」 | ActionSweep._calculate_max_hit_mass（scripts/extension_systems/weapon/actions/action_sweep.lua:328–338）：auto-completed sweep 持有 fully_charged_attacks_infinite_cleave 時回傳 math.huge；ActionSweep._process_hit（同檔1330–1380）分開處理 hit-mass、Armor abort 與 breed abort。 | 符合 | 此處以無限 hit mass 實作貫穿效果；不代表跳過 breed 中止或所有攻擊中止規則。 |
| 傷害數值格式 | RAW [loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc, hash ca7dd319]：EN「Fully Charged Heavy Attacks ignore Enemy Hit Mass and have {damage:%s} Damage.」；zh-TW「完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加{damage:%s}。」 | TraitValueParser.FORMATTING_FUNCTIONS.percentage（scripts/utilities/trait_value_parser.lua:7–21）無 value_manipulation 時乘100；FIND_VALUE_FUNCTIONS.trait_override（同檔51–55）讀 tier path；TraitValueParser._try_format_values（同檔86–105）套用 prefix；_number_value_formatter/_num_decimals（同檔189–228）決定小數。三個實際 trait 定義分別見 scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua:445–484、scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua:221–260、scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua:307–346。 | 符合 | 三個實際 formatter 都使用 percentage 與 + prefix；依實際 I–IV 值重建為 +2.5%、+5%、+7.5%、+10%，這是卡面格式，不是最終傷害必定等幅增加。 |
| 裝甲中止例外 | RAW 未涵蓋 Armor 中止例外；description key=loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc, hash=ca7dd319；EN「Fully Charged Heavy Attacks ignore Enemy Hit Mass and have {damage:%s} Damage.」；zh-TW「完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加{damage:%s}。」 | 三個實際 ProcBuff wrapper 的 specific_proc_func.on_sweep_start 僅在 params.is_heavy 且 item held 時設 active，conditional_keywords.ignore_armor_aborts_attack 再受 active+held 條件限制：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua:43–77、scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua:76–110、scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua:100–134；ActionSweep.start（scripts/extension_systems/weapon/actions/action_sweep.lua:286–300）送出 is_heavy；ActionSweep._process_hit（同檔1330–1380）只將 Armor.aborts_attack 與 max-mass/breed-abort 分開判定。 | 文件未涵蓋 | RAW 說明 hit mass 效果，未描述 held、重型 sweep-start 或 Armor.abort 的獨立條件；此程式行為是文件未涵蓋，不是 RAW 明確矛盾。 |
| 型號動作與自動完成邊界 | RAW 未涵蓋逐型號動作／輸入條件；description key=loc_trait_bespoke_pass_past_armor_and_damage_on_heavy_attack_desc, hash=ca7dd319；EN「Fully Charged Heavy Attacks ignore Enemy Hit Mass and have {damage:%s} Damage.」；zh-TW「完全蓄力後的重攻擊無視敵人的打擊質量，且傷害增加{damage:%s}。」 | 實際 scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua:740–811 的 action_right_light_pushfollow 選 heavy profile，但輸入 push_follow_up 沒有 auto_complete；ActionSweep.start（scripts/extension_systems/weapon/actions/action_sweep.lua:197–220）保存 auto-completed 狀態；damage_calculation.lua 內 local _calculate_damage_buff（scripts/utilities/attack/damage_calculation.lua:312–315）與 ActionSweep._calculate_max_hit_mass（scripts/extension_systems/weapon/actions/action_sweep.lua:328–338）各自要求該狀態才套傷害與無限 hit mass。 | 文件未涵蓋 | RAW 沒列各型號動作、profile 與輸入設定；正式變體頁依實際動作表說明 M2 追擊可走 held armor gate，但不因此取得完整蓄力傷害或無限貫穿。 |
