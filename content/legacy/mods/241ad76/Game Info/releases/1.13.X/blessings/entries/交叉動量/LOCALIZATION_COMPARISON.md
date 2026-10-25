# 交叉動量：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_chained_melee`／hash`b3541eaf`；描述鍵`loc_trait_bespoke_power_bonus_on_chained_melee_desc`／hash`8180ce02`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Gauntlet Momentum／交叉動量。

- 文件名稱：交叉動量(Gauntlet Momentum)。

- 適用武器：擲彈兵臂鎧；描述鍵`loc_trait_bespoke_power_bonus_on_chained_melee_desc`／hash`8180ce02`。

- 英文模板：Each chained melee hit with the gauntlet adds a stack which increases Melee Strength by {power:%s}. Stacks {stacks:%s} times and each stack lasts for {time:%s} seconds.

- 繁中模板：每次使用鐵手套施展近戰連擊並命中時，近戰威力提升{power:%s}，可疊加{stacks:%s}層，且每層可持續{time:%s}秒。

- **靜態重建**：formatter 使用 parent 的 power_level_modifier（I–IV .02/.03/.04/.05）、child.max_stacks=10、parent.child_duration=1.5；完整句型如下。

| 等級 | 英文靜態重建 | 繁中靜態重建 |
|---|---|---|
| I | Each chained melee hit with the gauntlet adds a stack which increases Melee Strength by +2%. Stacks 10 times and each stack lasts for 1.5 seconds. | 每次使用鐵手套施展近戰連擊並命中時，近戰威力提升+2%，可疊加10層，且每層可持續1.5秒。 |
| II | Each chained melee hit with the gauntlet adds a stack which increases Melee Strength by +3%. Stacks 10 times and each stack lasts for 1.5 seconds. | 每次使用鐵手套施展近戰連擊並命中時，近戰威力提升+3%，可疊加10層，且每層可持續1.5秒。 |
| III | Each chained melee hit with the gauntlet adds a stack which increases Melee Strength by +4%. Stacks 10 times and each stack lasts for 1.5 seconds. | 每次使用鐵手套施展近戰連擊並命中時，近戰威力提升+4%，可疊加10層，且每層可持續1.5秒。 |
| IV | Each chained melee hit with the gauntlet adds a stack which increases Melee Strength by +5%. Stacks 10 times and each stack lasts for 1.5 seconds. | 每次使用鐵手套施展近戰連擊並命中時，近戰威力提升+5%，可疊加10層，且每層可持續1.5秒。 |；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | 名稱鍵 loc_trait_bespoke_power_bonus_on_chained_melee／hashb3541eaf：Gauntlet Momentum／交叉動量。 | 實際 ogryn_gauntlet_p1_m1 的family/pattern/mark RAW由 Items315–327／378–426組成擲彈兵臂鎧 布拉斯托姆 Mk III；同trait item接入。 | 一致 | 同資源與hash精確配對，文件沿用繁中本體名称。 |
| 觸發條件 | 描述鍵 loc_trait_bespoke_power_bonus_on_chained_melee_desc／hash8180ce02；EN/繁中描述皆稱拳套近戰命中加層（hash 8180ce02）。 | own parent78–95；CheckProc404–412；held43–60；Attack581–621。 on_hit + item match + wielded slot + attack_type=melee + target_number==1。 | 文件未涵蓋 | 沒有 combo 欄位；同次揮擊只計第一個命中目標。 |
| I–IV 每層威力 | 描述鍵 loc_trait_bespoke_power_bonus_on_chained_melee_desc／hash8180ce02；RAW 靜態重建 +2%、+3%、+4%、+5%。 | own trait302–361；child clone78–95／base155–165；Buff._add_overrides145–217／samekey695–725。 child 每有效層固定 melee_power_level_modifier=.05，四級皆 +5%。 | I–III 矛盾；IV 一致 | trait override 是 power_level_modifier；child stat key 不同，不能覆寫。 |
| 有效層數 | 描述鍵 loc_trait_bespoke_power_bonus_on_chained_melee_desc／hash8180ce02；RAW 稱可疊 10 層。 | WeaponTraitParentProcBuff23–38／56–74／134–163；Buff397–429；PlayerUnitBuffExtension230–257／643–660；BuffExtensionBase434–462。 child max_stacks=10 且 stack_offset=-1，最多 10 層有效加成。 | 一致 | 父 parent max_stacks=5 不是 child 有效上限。 |
| 持續時間 | 描述鍵 loc_trait_bespoke_power_bonus_on_chained_melee_desc／hash8180ce02；EN/繁中均稱每層 lasts/可持續 1.5 秒。 | WeaponTraitParentProcBuff.update92–132／_add_child_buff_stack134–163，own wrapper78–95。 共用閒置計時；每個完整 1.5 秒區間移除一層，合格事件刷新 timer，滿層亦刷新。 | 矛盾 | 多層能跨過最初 1.5 秒保留，不是每層獨立 TTL。 |
| 可受益攻擊 | 描述鍵 loc_trait_bespoke_power_bonus_on_chained_melee_desc／hash8180ce02；RAW 稱 melee hit；未區分動作與攻擊類型。 | M1 light596–685／heavy871–1100／special1149–1244；ActionMeleeExplosive61–74／91–102；ProjectileDamage480–540／652–653；PowerLevel25–61。 普通與重擊橫掃／特殊直接拳擊為 melee；榴彈直擊 ranged，榴彈與特殊爆炸 explosion；本 Mark 無獨立 push/push-follow，heavy push 方向仍是 melee。 普通榴彈引信路徑：scripts/settings/projectile/player_projectile_templates.lua27–42 的ogryn_gauntlet_grenadefuse/impact均接default_gauntlet_grenade；ProjectileDamageExtension340–361的fuse呼叫硬傳attack_type explosion。 | 文件未涵蓋 | 特殊拳擊的 blast 不繼承 direct-hit 的 melee 類型。 |
