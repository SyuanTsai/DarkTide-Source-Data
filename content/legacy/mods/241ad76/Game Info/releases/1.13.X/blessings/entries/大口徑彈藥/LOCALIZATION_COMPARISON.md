# 大口徑彈藥：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_cleave_on_crit`／hash`69135934`；描述鍵`loc_trait_bespoke_cleave_on_crit_and_stagger_desc`／hash`c4e454ec`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Man-Stopper／大口徑彈藥。

- 文件名稱：大口徑彈藥(Man-Stopper)。

- 適用武器：電能步槍、磷光爆破手槍、戰鬥霰彈槍、雙管霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_cleave_on_crit_and_stagger_desc`／hash`c4e454ec`。

- 英文模板：Increased Cleave on Critical Hit and gain {stagger:%s} Ranged Attack Stagger.

- 繁中模板：暴擊時順劈效果提升，且遠程攻擊硬直{stagger:%s}。

- **靜態重建**：I–IV的 `{stagger:%s}` 依五個變體的實際覆寫，分別重建為+10%／+15%／+20%／+25%。名稱與描述的精確英文／繁中同hash配對列於上方；遠程衝擊加成與暴擊順劈為分開的效果。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 暴擊時順劈 | Increased Cleave on Critical Hit.（描述鍵loc_trait_bespoke_cleave_on_crit_and_stagger_desc；hash c4e454ec） | [共用暴擊關鍵字](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1780-L1793)；[DamageProfile.max_hit_mass](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L66-L72)：暴擊時攻擊側順劈預算設為無限。 | 一致 | 程式實作的是暴擊時攻擊側順劈上限，不是一般攻擊常駐無限穿透。 |
| 遠程踉蹌 | gain {stagger:%s} Ranged Attack Stagger.（content/localization/items；description hash c4e454ec） | [I–IV覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L205-L244)；[StaggerCalculation遠程分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203)：五變體皆+10%／15%／20%／25%，與暴擊條件分開。 | 一致 | 數值與+百分比格式一致；修正進入後續踉蹌威力百分比換算，不等於最終踉蹌時間或生命傷害。 |
| 特殊彈路徑 | 本體描述未列特殊彈差異。 | 特殊彈選擇後仍由ActionShootPellets逐彈丸建立質量預算；彈丸數和物件穿透設定由各shell模板決定。 | 文件未涵蓋 | 僅補充型號／射擊模式差異，沒有本體描述矛盾。 |
| 磷光範圍爆炸 | 本體描述未列爆炸攻擊種類。 | HitScan在觸發條件成立時以attack_type.explosion另呼Explosion.create_explosion；直接彈丸與範圍爆炸分開處理。 | 文件未涵蓋 | 爆炸不是子彈沿射線的順劈；遠程踉蹌modifier按attack_type分流。 |
| 槍托與盾擊 | 本體描述未列近戰特殊動作。 | 揮擊式ActionSweep消費暴擊順劈質量；ActionPush/PushAttack輕推不走此質量預算，ranged_impact_modifier也不套用於melee/push。 | 文件未涵蓋 | 說明特殊動作路徑，不擴大本體宣稱。 |
| 裝甲與場景物件 | 本體描述未列穿透規則。 | HitMass.stopped_attack仍檢查destroy_on_impact及Armor.aborts_attack；HitScan對static object另走penetration_config與物件出口測試。 | 文件未涵蓋 | 暴擊順劈不會自行新增牆體穿透或移除攻擊中止條件。 |
