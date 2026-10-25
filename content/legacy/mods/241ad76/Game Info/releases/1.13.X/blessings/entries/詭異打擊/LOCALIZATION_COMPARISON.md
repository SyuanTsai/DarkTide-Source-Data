# 詭異打擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_stacking_rending_on_weakspot`／hash`64521001`；描述鍵`loc_trait_bespoke_stacking_rending_debuff_on_weakspot_desc`／hash`fe38e2ee`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Uncanny Strike／詭異打擊。

- 文件名稱：詭異打擊(Uncanny Strike)。

- 適用武器：工兵鏟、戰刃、決鬥劍、短刀、烈焰力場劍；描述鍵`loc_trait_bespoke_stacking_rending_debuff_on_weakspot_desc`／hash`fe38e2ee`。

- 英文模板：`Hitting an enemy's weakspot applies {stacks:%s} stacks of {rending:%s} Brittleness. Duration {time:%s} seconds. {max_stacks:%s} max stacks. `

- 繁中模板：`擊中敵人弱點時使其疊加 {stacks:%s} 層{rending:%s}脆弱。持續 {time:%s} 秒。最多疊加 {max_stacks:%s} 層。 `

- **靜態重建**：- I（一般四系）：EN `Hitting an enemy's weakspot applies 2 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 2 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- I（短刀雙刃）：EN `Hitting an enemy's weakspot applies 1 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 1 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- II（一般四系）：EN `Hitting an enemy's weakspot applies 4 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 4 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- II（短刀雙刃）：EN `Hitting an enemy's weakspot applies 2 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 2 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- III（一般四系）：EN `Hitting an enemy's weakspot applies 6 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 6 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- III（短刀雙刃）：EN `Hitting an enemy's weakspot applies 3 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 3 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- IV（一般四系）：EN `Hitting an enemy's weakspot applies 8 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 8 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `
- IV（短刀雙刃）：EN `Hitting an enemy's weakspot applies 4 stacks of 2.5% Brittleness. Duration 5 seconds. 16 max stacks. `；繁中 `擊中敵人弱點時使其疊加 4 層2.5%脆弱。持續 5 秒。最多疊加 16 層。 `；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發與每次層數 | EN/ZH RAW 同為 loc_trait_bespoke_stacking_rending_debuff_on_weakspot_desc／hash fe38e2ee；靜態 formatter 依型號代入 stacks。 | 各五個 weapon_traits_bespoke_*.lua 自身tier區段；各 weapon_traits_bespoke_*_buff_templates.lua wrapper；BuffUtils.add_debuff_on_hit_start 37–46。 | 符合（層數）；文件未涵蓋（來源物品、Minion、存活與持用門檻）。 | 四系2/4/6/8、短刀1/2/3/4與各自formatter一致；額外predicate由程式實作。 |
| 每層脆弱數值 | 同一RAW描述鍵的 {rending:%s}；四級靜態文字各列2.5%。 | weapon_buff_templates.lua templates.rending_debuff 366–376；buff_settings.lua additive_multiplier 955–966。 | 符合（每層數值）；文件未涵蓋（加算池與最終傷害的轉換）。 | 實際目標rending_multiplier為0.025，屬加算rending項，不是固定HP傷害倍率。 |
| 持續時間與上限 | 同一RAW描述鍵含 Duration {time:%s} seconds 與 {max_stacks:%s} max stacks。 | weapon_buff_templates.lua 366–376；BuffExtensionBase._add_buff 434–490、_check_max_stacks_cap 560–608；MinionBuffExtension.add_internally_controlled_buff 206–223。 | 符合（5秒、16層）；文件未涵蓋（刷新與達上限時仍刷新）。 | 目標端同名stacking buff有5秒與16層cap；後續添加及滿層時刷新期限。 |
| 命中順序與武器動作 | RAW寫弱點命中，未限定普通、重擊、特殊或事件順序。 | scripts/settings/buff/helper_functions/check_proc_functions.lua on_weakspot_hit 473–496; scripts/utilities/attack/attack.lua local _execute 249–254、353–384、577–623; scripts/extension_systems/weapon/actions/action_sweep.lua _can_start_stickyness 666–713、_process_sweep_results 1091–1133、_update_hit_stickyness 720–809、dodge exit 842–860; scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua sticky_dodge_push 966–1006; scripts/utilities/action/sweep_stickyness.lua num_damage_instances_this_frame 41–77; Force Sword M1 settings/actions scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua 103–200、336–444、445–529、594–693、694–780、849–947、1091–1188; M2 scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua 103–199、332–441、442–523、588–686、687–775、842–940、1004–1102; M3 full scan scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua 1–1603. | 文件未涵蓋（事件前提、傷害後加層與動作差異）。 | 各命中以實際部位產生弱點旗標；傷害結算後才處理事件。M1/M2特殊啟動黏附後的三段追加命中各自沿一般 melee on_hit 路徑檢查；M3沒有同一sticky設定。 |
| 傷害與純推擊例外 | RAW寫目標套用Brittleness，未宣稱固定HP增幅或所有命中均為弱點。 | DamageCalculation._rending_multiplier 629–660、_armor_damage_modifier 71–95；PushAttack.push 32–103；ActionDamageTarget._deal_damage 105–164。 | 文件未涵蓋（護甲、finesse、profile及攻擊類型條件）。 | 目標rending進加算池、總值clamp 1後依profile/armor處理；純推擊使用torso，不能假設weakspot。 |
