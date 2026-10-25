# 狡猾射手：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_chained_weakspot_hits`／hash`91af0d57`；描述鍵`loc_trait_bespoke_power_bonus_on_chained_weakspot_hits_desc`／hash`3cc56256`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Trickshooter／狡猾射手。

- 文件名稱：狡猾射手(Trickshooter)。

- 適用武器：電能步槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_power_bonus_on_chained_weakspot_hits_desc`／hash`3cc56256`。

- 英文模板：`{power_level:%s} Strength on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. `

- 繁中模板：`連擊命中弱點（任意目標）時，威力提升{power_level:%s}，可疊加{stacks:%s}層。 `

- **靜態重建**：以下依兩份 trait 的 tier override、子層上限與繁中 formatter 重建各級 RAW 顯示。句尾保留 RAW 空格，以下以行內程式碼保留該空格。

| 等級 | 英文格式化描述（locale 0） | 繁中格式化描述（locale 16） |
|---|---|---|
| I | ``+4.5% Strength on Chained Weak Spot Hit (Any Target). Stacks 5 times. `` | ``連擊命中弱點（任意目標）時，威力提升+4.5%，可疊加5層。 `` |
| II | ``+5% Strength on Chained Weak Spot Hit (Any Target). Stacks 5 times. `` | ``連擊命中弱點（任意目標）時，威力提升+5%，可疊加5層。 `` |
| III | ``+5.5% Strength on Chained Weak Spot Hit (Any Target). Stacks 5 times. `` | ``連擊命中弱點（任意目標）時，威力提升+5.5%，可疊加5層。 `` |
| IV | ``+6% Strength on Chained Weak Spot Hit (Any Target). Stacks 5 times. `` | ``連擊命中弱點（任意目標）時，威力提升+6%，可疊加5層。 `` |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 弱點射擊觸發 | EN RAW：`{power_level:%s} Strength on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. `；繁中 RAW：`連擊命中弱點（任意目標）時，威力提升{power_level:%s}，可疊加{stacks:%s}層。 `；`loc_trait_bespoke_power_bonus_on_chained_weakspot_hits_desc`／hash `3cc56256`。 | base parent `chained_weakspot_hits_increases_power_ranged_parent`：`base_weapon_trait_buff_templates.lua:166–187`；`on_weakspot_hit`：`check_proc_functions.lua:473–475`；每發 hitscan 聚合：`action_shoot_hit_scan.lua:145–220`、`hit_scan.lua:215–243`。 | 符合 | 實際 gate 是手持槽位且本次 on_shoot 的 hit_weakspot=true；一發多目標合併為一個旗標，沒有連續命中計數或擊殺／暴擊條件。 |
| 威力值與類型 | EN RAW：{power_level:%s} Strength on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. ；繁中 RAW：連擊命中弱點（任意目標）時，威力提升{power_level:%s}，可疊加{stacks:%s}層。 ；loc_trait_bespoke_power_bonus_on_chained_weakspot_hits_desc／hash 3cc56256。 | Own tier ranged_power_level_modifier：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua:374–441、scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua:288–355；child wrapper 覆寫：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua:28–33、scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua:16–21；PowerLevel.power_level_buff_modifier (scripts/utilities/attack/power_level.lua:25–60) 僅由 ranged 攻擊消費此 stat；PowerLevel.scale_power_level_to_power_type_curve (scripts/utilities/attack/power_level.lua:63–92) 先換算曲線，再於87–89行乘合併修正。 | 符合 | RAW 的 Strength／威力是中間遠程威力修正，不保證相同比例的最終傷害；兩型號的 tier 值同為每有效層 .045/.05/.055/.06。 |
| 有效疊層上限 | EN RAW：`{power_level:%s} Strength on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. `；繁中 RAW：`連擊命中弱點（任意目標）時，威力提升{power_level:%s}，可疊加{stacks:%s}層。 `；RAW 的 `{stacks:%s}` 顯示最多層數／hash `3cc56256`。 | own child `max_stacks=5`、共用 child `stack_offset=-1`：兩套 tier／wrapper 與 `base_weapon_trait_buff_templates.lua:263–273`；raw 占位 child 和有效層換算：`weapon_trait_parent_proc_buff.lua:10–39`、`buff.lua:404–429`。 | 符合 | 內部一個占位層沒有 stat，另外最多五個有效層；每個符合條件的射擊新增一層，滿層請求不增加有效層。 |
| 共同期限與刷新 | EN RAW：`{power_level:%s} Strength on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. `；繁中 RAW：`連擊命中弱點（任意目標）時，威力提升{power_level:%s}，可疊加{stacks:%s}層。 `；兩語句均無時間 placeholder（hash `3cc56256`）。 | own parent `child_duration=3.5`：兩份 tier source；子層 add/reset/expiry/destroy：`weapon_trait_parent_proc_buff.lua:92–205`；固定更新的事件與屬性快取順序沿同 SHA common cache `parent-child-slot-context`、`activated-parent-hit-clear`。 | 文件未涵蓋 | RAW 沒有持續時間文字；程式設 3.5 秒共同倒數，成功射擊即使已滿層仍刷新，事件與快取重建後才供後續攻擊讀取。 |
| 近戰、推擊與操作 | EN RAW：`{power_level:%s} Strength on Chained Weak Spot Hit (Any Target). Stacks {stacks:%s} times. `；繁中 RAW：`連擊命中弱點（任意目標）時，威力提升{power_level:%s}，可疊加{stacks:%s}層。 `；兩語句未描述其他輸入路徑（hash `3cc56256`）。 | 三個 actual action table：Galvanic P1 M1 lines 231–640、Stub Revolver P1 M1 156–803、M2 155–714；Sweep 呼叫 melee：`action_sweep.lua:1498–1503`；純推擊逐目標 `Attack.execute(attack_type=push)`：`push_attack.lua:78–86`；父層只訂閱 `on_shoot`。 | 文件未涵蓋 | 槍托／手槍鞭擊／追擊是 melee Sweep，不觸發且不使用 ranged stat；純推擊仍有逐目標命中處理，但其事件和攻擊類型都不符合本祝福。 |
