# 破碎衝擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_armor_rend_on_projectile_hit`／hash`36f31112`；描述鍵`loc_trait_bespoke_armor_rend_on_projectile_hit_desc`／hash`42048f77`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Shattering Impact／破碎衝擊。

- 文件名稱：破碎衝擊(Shattering Impact)。

- 適用武器：矛頭爆矢槍、擲彈兵臂鎧、震盪槍、電漿槍；描述鍵`loc_trait_bespoke_armor_rend_on_projectile_hit_desc`／hash`42048f77`。

- 英文模板：Target receives {stacks:%s} Stacks of {rending:%s} Brittleness on direct projectile hit. Debuff lasts for {time:%s} seconds and can have a maximum of {max_stacks:%s} stacks.

- 繁中模板：投射物直接命中目標時使其疊加{stacks:%s}層{rending:%s}脆弱。減益效果最高疊加{max_stacks:%s}層，持續{time:%s}秒。

- **靜態重建**：名稱key loc_trait_bespoke_armor_rend_on_projectile_hit、描述key loc_trait_bespoke_armor_rend_on_projectile_hit_desc。中英名稱hash均36f31112，描述hash均42048f77。繁中保留「投射物直接命中」原文，不延伸成所有爆炸均符合；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV層數 | {stacks:%s} Stacks of {rending:%s} Brittleness | Trait tier overrides + shared proc buff | 一致 | 四個trait覆寫為1/2/3/4層；每層2.5個百分點。 |
| 命中分類 | direct projectile hit | check_proc_functions.lua#L362-L366 | 文件未涵蓋 | ranged attack_type 或 count_as_ranged_attack 旗標皆可；臂鎧與震盪槍爆炸也符合。 |
| 武器爆炸 | 本體列直接投射物命中 | Bound weapon projectile/explosion profiles | 文件未涵蓋 | 臂鎧一般及特殊爆炸、震盪槍爆炸設遠程旗標；爆矢與電漿過熱爆炸不符合。 |
| 層數與期限 | 5秒、最多指定層數 | weapon_buff_templates.lua#L366-L376 | 一致 | 每層2.5%，最多16層；每次疊層及滿層觸發都刷新期限。 |
| 同次傷害 | 命中施加層數 | attack.lua#L353-L383 | 文件未涵蓋 | Attack.execute先算傷害後處理buff事件，新脆弱供後續命中使用。 |
| 傷害效果 | Brittleness/Rending | damage_calculation.lua#L629-L660 | 文件未涵蓋 | 實際傷害依原裝甲倍率和護甲分類係數變化，不是固定HP百分比。 |
| UI bindings | 4 variants、6 marks | inventory/metadata與武器模板append | 一致 | 四個精確 metadata 項都有型號關聯；I–IV 數值逐一核對。 |
