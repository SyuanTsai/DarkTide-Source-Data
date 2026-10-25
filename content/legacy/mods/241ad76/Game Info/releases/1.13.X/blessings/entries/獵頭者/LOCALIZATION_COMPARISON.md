# 獵頭者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_weakspot_stacking_crit_chance`／hash`ddb302e2`；描述鍵`loc_trait_bespoke_weakspot_stacking_crit_chance_desc`／hash`a8474234`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Headhunter／獵頭者。

- 文件名稱：獵頭者(Headhunter)。

- 適用武器：機動自動槍、電能步槍、步兵鐳射槍、偵察鐳射槍、重伐木槍；描述鍵`loc_trait_bespoke_weakspot_stacking_crit_chance_desc`／hash`a8474234`。

- 英文模板：{crit_chance:%s} Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks {stacks:%s} times.

- 繁中模板：命中弱點後提高{crit_chance:%s}致命一擊機率，直至下次致命一擊。最多疊加{stacks:%s}次。

- **靜態重建**：- I 一般型號：EN `+14% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+14%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- II 一般型號：EN `+16% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+16%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- III 一般型號：EN `+18% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+18%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- IV 一般型號：EN `+20% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+20%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- I 偵察鐳射槍：EN `+3.5% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+3.5%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- II 偵察鐳射槍：EN `+4% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+4%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- III 偵察鐳射槍：EN `+4.5% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+4.5%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`
- IV 偵察鐳射槍：EN `+5% Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks 5 times.`；ZH `命中弱點後提高+5%致命一擊機率，直至下次致命一擊。最多疊加 5 次。`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每層數值與等級 | RAW EN `{crit_chance:%s} Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks {stacks:%s} times.`；RAW ZH `命中弱點後提高{crit_chance:%s}致命一擊機率，直至下次致命一擊。最多疊加{stacks:%s}次。`；name/desc hashes ddb302e2 / a8474234 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua:50–103; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua:109–162; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua:126–179; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua:328–381; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua:623–676 | 數值格式符合 | formatter顯示值與 tier 數值一致；一般四家族逐層 +14/+16/+18/+20%，偵察鐳射槍 +3.5/+4/+4.5/+5%，最多5層。 |
| 命中弱點與物品條件 | RAW EN `{crit_chance:%s} Critical Chance on Weak Spot Hit until your next Critical Hit. Stacks {stacks:%s} times.`；ZH `命中弱點後提高{crit_chance:%s}致命一擊機率，直至下次致命一擊。最多疊加{stacks:%s}次。`；描述 hash `a8474234` | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1849–1879（on_hit 與 item/weakspot gates）；scripts/settings/buff/helper_functions/check_proc_functions.lua:473–475,721–727；scripts/utilities/attack/attack.lua:577–623（attacking_item、hit_weakspot payload） | 符合（弱點命中）；文件未涵蓋（來源物品匹配與持用條件） | 實際需同時符合來源物品、持用與事件旗標 hit_weakspot；scripts/utilities/attack/weakspot.lua:9–19可由外部保證弱點效果改寫部位映射，本祝福不授予該效果。 |
| 直至下次致命一擊 | RAW EN `until your next Critical Hit`；ZH `直至下次致命一擊`；描述 hash `a8474234` | scripts/extension_systems/weapon/actions/action_weapon_base.lua:147–184（_check_for_critical_strike 擲骰並排 on_critical_strike）；scripts/extension_systems/weapon/actions/action_shoot.lua:100–160（非自動 ActionShoot.start）；596–615,997–1048（自動射擊狀態與 max_critical_shots）；scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua:56–89（同批先 add 再 clear） | 文件未涵蓋（擲出暴擊是否要求攻擊實際命中；同批事件結算順序） | 暴擊事件由成功擲骰產生，不要求命中目標；parent 將已處理批次先加層再清層。自動連發按實際 action state 與 max_critical_shots，RAW未限定每顆彈丸各自擲骰。 |
| 層數上限與時限 | RAW的stacks placeholder及「最多疊加」句 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua:50–103（max_stacks=5）；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua:109–162；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua:126–179；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua:328–381；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua:623–676；scripts/extension_systems/weapon/actions/action_weapon_base.lua:147–184；scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua:10–90,92–182；scripts/extension_systems/buff/buffs/buff.lua:404–411 | 符合（實際上限）；文件未涵蓋（獨立TTL與切槽規則） | RAW所列最多5次與5個有效層相符；未宣告獨立TTL或切槽行為。持用條件停用效果而不因切槽刪層，真正卸下來源武器才移除 buff。 |
| 動作範圍與模式 | RAW未細分武器動作、特殊功能、charge或projectile routes | scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua:267–393,583–763；scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua:263–387,547–633；scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua:205–331,828–832；scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua:243–371,760–764；scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua:241–351,824–828 | 文件未涵蓋 | 比較只涵蓋13個實際綁定型號；各動作依實際HitScan或Sweep接線，不把未綁定蓄力／投擲路徑納入。 |
