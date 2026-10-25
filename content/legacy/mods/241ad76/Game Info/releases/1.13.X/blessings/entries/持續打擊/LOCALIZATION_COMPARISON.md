# 持續打擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_same_enemy_attacks`／hash`adffdaf9`；描述鍵`loc_trait_bespoke_power_bonus_on_same_enemy_attacks_desc`／hash`e3d226ab`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Relentless Strikes／持續打擊。

- 文件名稱：持續打擊(Relentless Strikes)。

- 適用武器：戰術斧、決鬥劍、法務官電擊鎚、骨鋸；描述鍵`loc_trait_bespoke_power_bonus_on_same_enemy_attacks_desc`／hash`e3d226ab`。

- 英文模板：{power_level:%s} Strength for {time:%s}s on Hit (Same Enemy). Stacks {stacks:%s} times.

- 繁中模板：命中（同一敵人）後威力提升{power_level:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。

- **靜態重建**：以下依四份完整 tier override、五個有效層上限及 locale 0／16 formatter，重建各級 RAW 顯示文字。

| 等級 | English RAW 格式化描述（locale 0） | 繁中 RAW 格式化描述（locale 16） |
|---|---|---|
| I | ``+4% Strength for 2s on Hit (Same Enemy). Stacks 5 times.`` | ``命中（同一敵人）後威力提升+4%，持續2秒，可疊加5層。`` |
| II | ``+6% Strength for 2s on Hit (Same Enemy). Stacks 5 times.`` | ``命中（同一敵人）後威力提升+6%，持續2秒，可疊加5層。`` |
| III | ``+8% Strength for 2s on Hit (Same Enemy). Stacks 5 times.`` | ``命中（同一敵人）後威力提升+8%，持續2秒，可疊加5層。`` |
| IV | ``+10% Strength for 2s on Hit (Same Enemy). Stacks 5 times.`` | ``命中（同一敵人）後威力提升+10%，持續2秒，可疊加5層。`` |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 同目標命中與第一層 | EN RAW：`{power_level:%s} Strength for {time:%s}s on Hit (Same Enemy). Stacks {stacks:%s} times.`；繁中 RAW：`命中（同一敵人）後威力提升{power_level:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。`；描述鍵 `loc_trait_bespoke_power_bonus_on_same_enemy_attacks_desc`，hash `e3d226ab`。 | base_weapon_trait_buff_templates.lua 的 actual parent `...same_target_increases_melee_power_parent`：2610–2634；BuffUtils.consecutive_hits_same_target_proc_func：buff_utils.lua 116–134；Attack.execute on_hit 參數：attack.lua 577–623。 | 符合 | 第一個不同目標命中只建立追蹤基準；其後同一目標的合格命中才增加層，符合 RAW 的同一敵人連續命中語意。 |
| 每層威力與攻擊類型 | EN RAW：`{power_level:%s} Strength ...`；繁中 RAW：`...威力提升{power_level:%s}...`；名稱與描述 locale 0／16 同 hash 配對，描述 hash `e3d226ab`。 | 四個 own trait tier block：weapon_traits_bespoke_combataxe_p2.lua 363–426；weapon_traits_bespoke_combatsword_p3.lua 349–412；weapon_traits_bespoke_powermaul_p2.lua 350–413；weapon_traits_bespoke_saw_p1.lua 241–304。PowerLevel.power_level_buff_modifier：power_level.lua 25–60，melee stat 僅在 attack_type=melee 進池。 | 符合 | 四實作每有效層同為 .04/.06/.08/.10；RAW 的 Strength 對應中間近戰威力修正，不是固定最終傷害百分比。 |
| 五個有效層上限 | EN RAW：`Stacks {stacks:%s} times.`；繁中 RAW：`可疊加{stacks:%s}層。`；描述 hash `e3d226ab`。 | base_weapon_trait_buff_templates.lua child：263–273；WeaponTraitParentProcBuff 初始化／placeholder：weapon_trait_parent_proc_buff.lua 10–53；Buff effective stack offset：buff.lua 404–429。 | 符合 | child raw max 5 並配合 stack_offset -1，五層為有 stat 的有效層；各 own formatter 直接讀 child max_stacks。 |
| 兩秒期限與刷新 | EN RAW：`for {time:%s}s`；繁中 RAW：`持續{time:%s}秒`；描述 hash `e3d226ab`。 | 四個 own trait tier block 分別設定 child_duration=2；BuffUtils.consecutive_hits_same_target_proc_func：buff_utils.lua 116–134；WeaponTraitTargetNumberParentProcBuff child reconcile/expiry：weapon_trait_target_number_parent_proc_buff.lua 52–86。 | 符合 | 同目標的後續合格命中刷新共同期限，滿層也刷新；新目標第一事件清舊層且不刷新既有期限，重新累積須再命中同一新目標。 |
| 特殊、推擊與額外命中路徑 | RAW 只寫 `on Hit (Same Enemy)`／`命中（同一敵人）`，未描述手持槽、特殊 profile、推擊攻擊類型或延遲撕裂例外；描述 hash `e3d226ab`。 | ActionSweep._do_damage_to_unit：action_sweep.lua 1475–1503；PushAttack.push：push_attack.lua 78–86；PowerLevel.power_level_buff_modifier：power_level.lua 25–60；Powermaul primer：weapon_buff_templates.lua 649–699；Saw rip profiles：saw_damage_profile_templates.lua 984–1093。; actual push profiles in common_damage_profile_templates.lua 82–197 have impact distribution and no skip_on_hit_proc | 文件未涵蓋 | parent 的事件條件不限制 melee 類型；推擊命中可能改變追蹤，但 push 不消費 melee stat。Powermaul 特殊是直接 Sweep，Saw rip 兩 profile 跳過命中觸發。 |
| 卡面百分比 formatter | EN／繁中 RAW 的 `{power_level:%s}`、`{time:%s}`、`{stacks:%s}` 分別由 tier stat、child_duration、child max 提供；描述 hash `e3d226ab`。 | TraitValueParser.percentage 與 _try_format_values：trait_value_parser.lua 7–32、43–105；_number_value_formatter／_num_decimals：trait_value_parser.lua 189–228；各 own tier 的 `format_type=percentage`, `prefix=+`。 | 符合 | 百分比將 .04/.06/.08/.10 轉為帶加號的 4%／6%／8%／10%；時間與層數使用 number formatter。 |
