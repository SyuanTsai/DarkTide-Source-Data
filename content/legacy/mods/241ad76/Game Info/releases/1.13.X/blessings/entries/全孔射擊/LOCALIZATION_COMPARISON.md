# 全孔射擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_hitting_single_enemy_with_all`／hash`adf6c70b`；描述鍵`loc_trait_bespoke_power_bonus_on_hitting_single_enemy_with_all_desc`／hash`d88ada0f`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Full Bore／全孔射擊。

- 文件名稱：全孔射擊(Full Bore)。

- 適用武器：反衝者、戰鬥霰彈槍、雙管霰彈槍、獵人霰彈槍、滅絕者霰彈槍、衝覆者霰彈手槍和防暴盾牌；描述鍵`loc_trait_bespoke_power_bonus_on_hitting_single_enemy_with_all_desc`／hash`d88ada0f`。

- 英文模板：{power_level:%s} Strength for {time:%s}s when every pellet in a shot hits the same enemy.

- 繁中模板：一次射擊的所有彈藥都命中同個敵人時，威力提升{power_level:%s}，持續{time:%s}秒。

- **靜態重建**：以下將同一RAW描述鍵的formatter placeholder依各級來源數值直接代入；保留英文與繁中原句型。

| 等級 | 英文靜態重建 | 繁中靜態重建 |
|---|---|---|
| I | 14% Strength for 5s when every pellet in a shot hits the same enemy. | 一次射擊的所有彈藥都命中同個敵人時，威力提升14%，持續5秒。 |
| II | 16% Strength for 5s when every pellet in a shot hits the same enemy. | 一次射擊的所有彈藥都命中同個敵人時，威力提升16%，持續5秒。 |
| III | 18% Strength for 5s when every pellet in a shot hits the same enemy. | 一次射擊的所有彈藥都命中同個敵人時，威力提升18%，持續5秒。 |
| IV | 20% Strength for 5s when every pellet in a shot hits the same enemy. | 一次射擊的所有彈藥都命中同個敵人時，威力提升20%，持續5秒。 |

反衝者 洛倫茲 Mk V 的 I–IV 將上表英文百分比依序替換為18%、22%、26%、30%，繁中數值亦依序替換為18%、22%、26%、30%。

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級數值與Strength formatter | 描述鍵 loc_trait_bespoke_power_bonus_on_hitting_single_enemy_with_all_desc，hash d88ada0f；EN {power_level:%s} Strength for {time:%s}s when every pellet in a shot hits the same enemy.；ZH 一次射擊的所有彈藥都命中同個敵人時，威力提升{power_level:%s}，持續{time:%s}秒。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua:335–384、shotgun_p1.lua:220–269、shotgun_p2.lua:298–347、shotgun_p3.lua:220–269、shotgun_p4.lua:220–269、shotpistol_shield_p1.lua:738–787；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1541–1555；scripts/utilities/attack/power_level.lua:25–60,63–92 | formatter數值一致；最終生命傷害比例文件未涵蓋 | 各級formatter數字與五秒相符；Strength實際是通用威力輸入修正，不等同固定HP傷害百分比。 |
| 全彈命中同一目標及目標分類 | 同上RAW描述：兩語都要求一發射擊所有彈丸命中同一敵人。 | scripts/extension_systems/weapon/actions/action_shoot_pellets.lua:175–237（ActionShootPellets更新）；scripts/settings/buff/helper_functions/check_proc_functions.lua:602–608（hit_all_pellets_on_same、is_minion）；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1541–1555 | 文件未涵蓋（額外要求事件目標屬 Minion 分類） | 程式同時要求聚合條件及獨立payload目標通過 MinionState.is_minion；多目標穿透不保證兩者是同一敵人。 |
| 發射完成、special shell及雙管聚合 | RAW用「一發射擊／a shot」描述全彈命中。 | scripts/extension_systems/weapon/actions/action_shoot_pellets.lua:145–184,175–237,495–540；scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua:399–462；shotgun_p2_m3.lua:307–368；shotgun_p3_m1.lua:682–694 | 一致（已發射彈丸按單次射擊聚合）；文件未涵蓋（特殊功能細節） | 裝填只選彈種而不產生射擊事件；雙管一個動作聚合該shell全部彈丸；P3手電筒不是射擊。 |
| 五秒時間、刷新及持用條件 | RAW時間placeholder：{time:%s}s／{time:%s}秒。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1541–1555；scripts/extension_systems/buff/buffs/proc_buff.lua:78–104,173–195,247–253,288–300,304–355；scripts/settings/buff/helper_functions/conditional_functions.lua:43–59 | 一致（5秒）；文件未涵蓋（刷新、切槽與stat gate） | 重新觸發會重設單層期限；條件同時gate proc_stat_buffs，切槽後效果停用但計時不中止，期限內切回可恢復剩餘時間。 |
| 既有威力效果與純推擊 | RAW說明Strength，未定義HP或踉蹌的最終呈現。 | scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua:1032–1080,1126–1170；scripts/utilities/attack/push_attack.lua:32–105；scripts/utilities/attack/attack.lua:345–354,376–380；scripts/utilities/attack/power_level.lua:25–35,87–90；scripts/utilities/attack/stagger_calculation.lua:67–78；scripts/utilities/attack/stagger.lua:235–243 (Stagger.apply_stagger)；scripts/extension_systems/shield/minion_shield_extension.lua:335–339 (盾牌反應覆寫)；scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua:382–463 | 文件未涵蓋（非射擊效果的套用範圍） | 盾推不是on_shoot而不會觸發；已啟用的generic modifier可影響其impact輸入；兩個實際push profiles攻擊值為0但有impact。適用的盾牌系統反應可用profile固定值20取代傳入力度；此處只描述該盾牌反應，不代表所有目標的最終踉蹌強度都是20。 |
| P1 M3燃燒特殊彈的後續傷害 | RAW描述一發射擊的全彈命中效果與持續時間，未描述燃燒特殊彈後續tick。 | scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua:118–144 (shotgun_burninating_special)；scripts/extension_systems/weapon/actions/action_shoot_pellets.lua:696–721 (_process_hits),746–773 (_add_shotshell_buff)；scripts/settings/buff/weapon_buff_templates.lua:50–78 (flamer_assault.interval_func)；scripts/extension_systems/buff/buffs/interval_buff.lua:17–48 (IntervalBuff.init/update)；scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua:301–328 (burning)；scripts/utilities/attack/attack.lua:216–226,271–287,345–354 (_execute/DamageCalculation)；scripts/utilities/attack/damage_profile.lua:29–33 (power_distribution_from_power_level)；scripts/utilities/attack/power_level.lua:25–60,63–92 (generic power modifier)；scripts/utilities/attack/damage_calculation.lua:587–614 (_base_damage) | 文件未涵蓋（燃燒tick是否讀取本項威力修正及其時點） | P1 M3命中會附加flamer_assault，後續interval tick以owner當時屬性呼叫Attack；generic power在tick的威力曲線後套用。僅在本項效果已進入快取且來源槍仍持用時適用；這不是射擊時保存的威力快照，也不回溯直接彈丸命中。 |
