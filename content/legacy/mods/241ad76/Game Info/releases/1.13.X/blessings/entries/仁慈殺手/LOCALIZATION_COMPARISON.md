# 仁慈殺手：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_weakspot_damage_on_bleeding`／hash`5214e0db`；描述鍵`loc_trait_bespoke_increased_weakspot_damage_on_bleeding_desc`／hash`37dccfa0`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Mercy Killer／仁慈殺手。

- 文件名稱：仁慈殺手(Mercy Killer)。

- 適用武器：戰刃、短刀；描述鍵`loc_trait_bespoke_increased_weakspot_damage_on_bleeding_desc`／hash`37dccfa0`。

- 英文模板：{damage:%s} Weak Spot Damage (Enemies with Bleed Stacks).

- 繁中模板：{damage:%s}弱點傷害（有流血層數的敵人）。

- **靜態重建**：RAW 英文：{damage:%s} Weak Spot Damage (Enemies with Bleed Stacks).
RAW 繁中：{damage:%s}弱點傷害（有流血層數的敵人）。

兩個 own tier formatter 均由 conditional_stat_buffs.melee_weakspot_damage_vs_bleeding 取值，percentage 乘 100 並加 + 前綴。I–IV 靜態重建如下：

- **I**：英文「+52.5% Weak Spot Damage (Enemies with Bleed Stacks).」；繁中「+52.5%弱點傷害（有流血層數的敵人）。」

- **II**：英文「+55% Weak Spot Damage (Enemies with Bleed Stacks).」；繁中「+55%弱點傷害（有流血層數的敵人）。」

- **III**：英文「+57.5% Weak Spot Damage (Enemies with Bleed Stacks).」；繁中「+57.5%弱點傷害（有流血層數的敵人）。」

- **IV**：英文「+60% Weak Spot Damage (Enemies with Bleed Stacks).」；繁中「+60%弱點傷害（有流血層數的敵人）。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| damage 占位符與完整 RAW | loc_trait_bespoke_increased_weakspot_damage_on_bleeding_desc / 37dccfa0；EN/ZH 原句如上。 | weapon_traits_bespoke_combatknife_p1.lua:412-451；weapon_traits_bespoke_dual_shivs_p1.lua:412-451；trait_value_parser.lua:8-20,51-55 | I–IV 靜態重建為 +52.5%、+55%、+57.5%、+60%。 | 兩套 own tier 各自以 conditional_stat_buffs.melee_weakspot_damage_vs_bleeding 取值；percentage 乘100、prefix +。 |
| 狀態與攻擊門檻 | RAW：Weak Spot Damage (Enemies with Bleed Stacks)。 | damage_calculation.lua:717-740；weapon_buff_templates.lua:235-260 | 需弱點命中、attack_type=melee、目標有 bleeding keyword；此 gate 不按 stacks 縮放。 | RAW 未提 melee gate，記為文件未涵蓋；不推成 RAW 矛盾。 |
| tier 與 fallback | RAW 描述加成，不列持用條件與 fallback。 | base_weapon_trait_buff_templates.lua:2526-2534；conditional_functions.lua:43-60；combatknife/dual_shivs wrapper:21 | held-slot base fallback 1.0 由各自 own tier 的同鍵數值取代，不與 tier 相加。 | 兩 wrapper 分別核實為 actual exact clone，持用條件是目前 wielded slot。 |
| 乘區公式與算例 | RAW 未宣稱整筆命中乘數。 | damage_calculation.lua:717-740,749-782；buff_settings.lua:883 | tier t 加到既有 finesse combined multiplier，故精準部分為 F×(S+t)。 | 算例明示 B/F/S、流血及弱點前提，並固定後續因素；不是遊戲實測。 |
| 武器攻擊路由 | RAW 不逐列動作或投射物型態。 | action_sweep.lua:1475-1501；push_attack.lua:32-102；四個 weapon template ranges；projectile_damage_extension.lua:482-541 | 戰刃特殊拳擊（special jab） 及短刀近戰鏈／pushfollow sweep 可逐擊符合；推擊本體 push 排除；短刀 special throw ranged 且 toxin 不等同 bleed。 | 只據四個 inventory-bound Mark 的實際 action table 與 dispatcher，不外推其他武器。 |
