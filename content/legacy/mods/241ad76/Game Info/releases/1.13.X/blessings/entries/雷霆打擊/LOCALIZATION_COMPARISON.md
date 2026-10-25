# 雷霆打擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff`／hash`a6a674f9`；描述鍵`loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash`e6048660`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Thunderstrike／雷霆打擊。

- 文件名稱：雷霆打擊(Thunderstrike)。

- 適用武器：工兵鏟、「惡魔之爪」劍、動力錘、作戰大錘&板盾、碾壓者、雷鎚；描述鍵`loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash`e6048660`。

- 英文模板：Target receives {stacks:%s} Stack(s) of {impact:%s} Impact if already Staggered. Lasts {time:%s}s.

- 繁中模板：處於硬直狀態的目標受到{stacks:%s}層{impact:%s}衝擊，持續{time:%s}秒。

- **靜態重建**：下表依各實作 formatter 的來源欄位，將 I–IV 的三個 RAW 參數靜態代入。

| 等級 | English RAW 重建 | 繁中 RAW 重建 |
|---|---|---|
| I | Target receives 1 Stack(s) of +10% Impact if already Staggered. Lasts 5s. | 處於硬直狀態的目標受到1層+10%衝擊，持續5秒。 |
| II | Target receives 2 Stack(s) of +10% Impact if already Staggered. Lasts 5s. | 處於硬直狀態的目標受到2層+10%衝擊，持續5秒。 |
| III | Target receives 3 Stack(s) of +10% Impact if already Staggered. Lasts 5s. | 處於硬直狀態的目標受到3層+10%衝擊，持續5秒。 |
| IV | Target receives 4 Stack(s) of +10% Impact if already Staggered. Lasts 5s. | 處於硬直狀態的目標受到4層+10%衝擊，持續5秒。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每次觸發加入層數 | 英文 RAW `Thunderstrike`；繁中 RAW `雷霆打擊`；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660`，RAW receipt `thunderstrike-primary-raw-verification.json`。兩語均以 `{stacks:%s}` 表示目標取得的層數。 | 各 own `templates.weapon_trait_bespoke_*` tier overrides：`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua:525–587`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua:350–410`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_p1.lua:141–201`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua:141–201`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_2h_p1.lua:195–255`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua:131–191`；共用 base `staggered_targets_receive_increased_stagger_debuff` 讀取 `target_buff_data.num_stacks_on_proc`：`scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:517–532`。 | 符合 | 格式參數是每個合格 proc 加入的層數；I–IV 數值直接來自六個 own trait 表。 |
| Impact 格式參數 | 英文 RAW `Thunderstrike`；繁中 RAW `雷霆打擊`；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660`。六個 formatter 都以 `percentage`、`prefix="+"` 讀 `{impact:%s}`。 | 各 own formatter：`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua:525–587`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua:350–410`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_p1.lua:141–201`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua:141–201`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_2h_p1.lua:195–255`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua:131–191`；target `stat_buffs.impact_modifier=0.1`：`scripts/settings/buff/weapon_buff_templates.lua:325–334`；`_calculate_stagger_buffs` 讀 `target_stat_buffs.impact_modifier`：`scripts/utilities/attack/stagger_calculation.lua:190–204`。 | 符合 | 每層靜態格式化為 +10% Impact；程式作用於衝擊修正，不是直接傷害欄位。 |
| 踉蹌條件時點 | 英文 RAW `Thunderstrike` 說 `if already Staggered`；繁中 RAW `雷霆打擊` 說目標處於硬直狀態；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660`。 | `Attack.execute` 完成 hit reaction 再送 on_hit：`scripts/utilities/attack/attack.lua:335–384`；`CheckProcFunctions.on_stagger_hit` 檢查事件處理時 live state：`scripts/settings/buff/helper_functions/check_proc_functions.lua:537–541`。 | 文件未涵蓋 | RAW 未標出檢查相對命中的時點；同一擊可先造成踉蹌，再由後續 queued 事件檢查當前狀態。 |
| 目標端持續時間 | 英文 RAW `Thunderstrike`；繁中 RAW `雷霆打擊`；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660` 均列 `{time:%s}` 秒。 | `increase_impact_received_while_staggered` 5 秒與 refresh：`scripts/settings/buff/weapon_buff_templates.lua:325–334`；helper 到原始累積 31 且 `stacks_to_add=0` 仍刷新：`scripts/settings/buff/buff_utils.lua:66–76`；到期與移除：`scripts/extension_systems/buff/buffs/buff.lua:29–42`、`scripts/extension_systems/buff/buff_extension_base.lua:187–204`。 | 文件未涵蓋 | 時間值一致，但 RAW 未描述刷新；只有通過 live stagger 與其它來源 gate 的事件能進入加層／刷新流程。 |
| 目標與事件附加條件 | 英文 RAW `Thunderstrike`；繁中 RAW `雷霆打擊`；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660` 只明示踉蹌條件。 | `conditional_proc_func=is_item_slot_wielded`、`on_item_match`、`on_stagger_hit`：`scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:517–532`、`scripts/settings/buff/helper_functions/conditional_functions.lua:43–59`、`scripts/settings/buff/helper_functions/check_proc_functions.lua:721–727`、`:537–541`；目標存活與 extension：`scripts/settings/buff/buff_utils.lua:48–79`。 | 文件未涵蓋 | 此為實際接線附加 gate；RAW 沒逐列來源物品、Minion 分類、生命狀態或 extension 條件，死亡目標不加層。 |
| 已施加 stat 的條件 | 英文 RAW `Thunderstrike` 的 `if already Staggered` 修飾觸發描述；繁中 RAW `雷霆打擊` 只說處於硬直狀態的目標；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660`。 | `increase_impact_received_while_staggered.stat_buffs` 無 conditional predicate：`scripts/settings/buff/weapon_buff_templates.lua:325–334`；目標 stat 無條件讀取：`scripts/utilities/attack/stagger_calculation.lua:190–204`。 | 文件未涵蓋 | 踉蹌是新增 debuff 的事件條件；RAW 未說明目標恢復後，已施加的無條件 stat 仍持續到 buff 到期。 |
| 有效層上限與倍率性質 | 英文 RAW `Thunderstrike`；繁中 RAW `雷霆打擊`；描述鍵 `loc_trait_bespoke_staggered_targets_receive_increased_stagger_debuff_desc`／hash `e6048660` 沒列最大層數，也沒有說 Impact 是傷害。 | `max_stacks=8` 的有效 stat clamp：`scripts/settings/buff/weapon_buff_templates.lua:325–334`、`scripts/extension_systems/buff/buffs/buff.lua:404–410`；模板沒有 `max_stacks_cap`，且 raw count 可增：`scripts/extension_systems/buff/buffs/buff.lua:453–458`；helper 原始累積 31：`scripts/settings/buff/buff_utils.lua:37–76`。 | 文件未涵蓋 | 8 是有效 impact stat 層上限；31 是 helper 累積原始層數界限。RAW 未規定這兩個內部界限。 |
| 特殊動作中的額外命中 | English RAW Target receives {stacks:%s} Stack(s) of {impact:%s} Impact if already Staggered. Lasts {time:%s}s.; 繁中 RAW 處於硬直狀態的目標受到{stacks:%s}層{impact:%s}衝擊，持續{time:%s}秒。 只描述目標踉蹌條件，沒有列舉特殊動作內的 sticky 後續攻擊。 | 工兵鏟 P3 M2/M3 的 action_left_down_light_special 與 action_left_heavy_special 分別設定 light_shovel_sticky/heavy_shovel_sticky：scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p3_m2.lua:341,430；combataxe_p3_m3.lua:341,430。Attack 路由與原物品：scripts/extension_systems/weapon/actions/action_sweep.lua:737–787。 | 文件未涵蓋 | 實際額外 Attack 只存在於配置 sticky setting 的這兩個 Mark；每一擊仍須獨立符合 on_hit、來源物品、手持、live-stagger 與存活等既有條件。 |
