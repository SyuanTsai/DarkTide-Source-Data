# 壓倒性的武力：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_staggering_hits_has_chance_to_stun`／hash`8c6306ed`；描述鍵`loc_trait_bespoke_staggering_hits_has_chance_to_stun_desc`／hash`01e2b5b0`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Overwhelming Force／壓倒性的武力。

- 文件名稱：壓倒性的武力(Overwhelming Force)。

- 適用武器：電擊錘；描述鍵`loc_trait_bespoke_staggering_hits_has_chance_to_stun_desc`／hash`01e2b5b0`。

- 英文模板：Staggering an Enemy has a {chance:%s} Chance to Stun the enemy. Cooldown {cooldown:%s}.

- 繁中模板：使敵人踉蹌時有{chance:%s}機率對該敵人造成眩暈。冷卻時間{cooldown:%s}。

- 適用武器：電弧鎚；描述鍵`loc_trait_bespoke_staggering_hits_has_chance_to_stun_elites_specials_desc`／hash`d63b42e3`。

- 英文模板：Staggering an Elite or Specialist Enemy has a {chance:%s} Chance to Stun the Enemy. Cooldown {cooldown:%s}s.

- 繁中模板：使精英或專家敵人踉蹌時，有{chance:%s}機率將其暈眩。冷卻時間{cooldown:%s}秒。

- **靜態重建**：依照各實作的格式參數，將 I–IV 數值靜態代入原始描述模板：

| 等級 | P1 英文重建 | P1 繁中重建 | P3 英文重建 | P3 繁中重建 |
|---|---|---|---|---|
| I | Staggering an Enemy has a +10% Chance to Stun the enemy. Cooldown 5. | 使敵人踉蹌時有+10%機率對該敵人造成眩暈。冷卻時間5。 | Staggering an Elite or Specialist Enemy has a 10% Chance to Stun the Enemy. Cooldown 5s. | 使精英或專家敵人踉蹌時，有10%機率將其暈眩。冷卻時間5秒。 |
| II | Staggering an Enemy has a +15% Chance to Stun the enemy. Cooldown 4.5. | 使敵人踉蹌時有+15%機率對該敵人造成眩暈。冷卻時間4.5。 | Staggering an Elite or Specialist Enemy has a 15% Chance to Stun the Enemy. Cooldown 4.5s. | 使精英或專家敵人踉蹌時，有15%機率將其暈眩。冷卻時間4.5秒。 |
| III | Staggering an Enemy has a +20% Chance to Stun the enemy. Cooldown 4. | 使敵人踉蹌時有+20%機率對該敵人造成眩暈。冷卻時間4。 | Staggering an Elite or Specialist Enemy has a 20% Chance to Stun the Enemy. Cooldown 4s. | 使精英或專家敵人踉蹌時，有20%機率將其暈眩。冷卻時間4秒。 |
| IV | Staggering an Enemy has a +25% Chance to Stun the enemy. Cooldown 3.5. | 使敵人踉蹌時有+25%機率對該敵人造成眩暈。冷卻時間3.5。 | Staggering an Elite or Specialist Enemy has a 25% Chance to Stun the Enemy. Cooldown 3.5s. | 使精英或專家敵人踉蹌時，有25%機率將其暈眩。冷卻時間3.5秒。 |

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| P1機率與目標 | loc_trait_bespoke_staggering_hits_has_chance_to_stun_desc／hash 01e2b5b0；RAW：Staggering an Enemy has a {chance:%s} Chance to Stun the enemy. Cooldown {cooldown:%s}.／使敵人踉蹌時有{chance:%s}機率對該敵人造成眩暈。冷卻時間{cooldown:%s}。 | P1 ProcBuff templates.weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun與conditional_proc_func/proc_func：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua 78–102；tier formatter：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua 521–574 | 一致 | 踉蹌事件提供該級機率，但冷卻與完全傷害效率門檻未寫在這句描述。 |
| P3機率與目標 | loc_trait_bespoke_staggering_hits_has_chance_to_stun_elites_specials_desc／hash d63b42e3；RAW：Staggering an Elite or Specialist Enemy has a {chance:%s} Chance to Stun the Enemy. Cooldown {cooldown:%s}s.／使精英或專家敵人踉蹌時，有{chance:%s}機率將其暈眩。冷卻時間{cooldown:%s}秒。 | P3 ProcBuff templates.weapon_trait_bespoke_powermaul_p3_staggering_hits_has_chance_to_stun、conditional_proc_func與on_elite_or_special_hit：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua 75–100；CheckProcFunctions.on_elite_or_special_hit：scripts/settings/buff/helper_functions/check_proc_functions.lua 136–146 | 一致 | 程式要求目標 tags 含 elite 或 special；單獨 monster 標籤不足。 |
| P1額外事件條件 | P1 RAW description key/hash 01e2b5b0，只明示踉蹌與機率。 | P1 conditional_proc_func只檢查held槽：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua 78–102；P1 check_proc_func檢查damage_efficiency==full與stagger_result==stagger：同檔78–102；ProcBuff事件派送：scripts/extension_systems/buff/buffs/proc_buff.lua 304–356 | 文件未涵蓋 | RAW沒有說明持用槽或完全傷害效率門檻，也沒有列攻擊類型。 |
| P3完全傷害效率門檻 | P3 RAW description key/hash d63b42e3，未提傷害效率類別。 | armor_damage_modifier_to_damage_efficiency：scripts/settings/damage/attack_settings.lua 23–35；P3 check_proc_func檢查damage_efficiency==full與stagger_result==stagger：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua 75–100 | 文件未涵蓋 | 踉蹌描述沒有列出完全傷害效率門檻；full不等於正生命傷害。 |
| 純推擊事件 | 兩組RAW只說 staggering，未分攻擊路徑。 | PowerMaul push profile與damage efficiency：scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua 82–158；scripts/utilities/attack/damage_calculation.lua 104–115 | 文件未涵蓋 | 純推擊回報push，不符合full；後續Sweep是另一個攻擊事件，須獨立檢查。 |
| P3特殊啟用接續攻擊 | P3 RAW未列各特殊模式事件。 | P3 active push-follow的weapon_shout attack設定：scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua 1479–1549；ActionWeaponShout attack dispatch：scripts/extension_systems/weapon/actions/action_weapon_shout.lua 163–198；P3 wrapper無attack-type gate：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua 75–100 | 文件未涵蓋 | wrapper未設attack-type排除；仍須該次事件實際full、stagger及elite或special。 |
| 冷卻起算 | P1/P3 RAW分別給出冷卻數值模板，但未說成功／失敗起算順序。 | ProcBuff.on_hit、held conditional與_can_activate：scripts/extension_systems/buff/buffs/proc_buff.lua 304–321；proc_chance roll：同檔326–328；P1/P3 wrapper checks與proc_func：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua 78–102、weapon_traits_bespoke_powermaul_p3_buff_templates.lua 75–100；非local _active_start_time：scripts/extension_systems/buff/buffs/proc_buff.lua 338–346；server端目標BuffExtension/add：兩個wrapper同上 | 文件未涵蓋 | 持用與冷卻 gate 通過後才抽機率；抽中後再檢查 full/stagger 及 P3 標籤。全部 wrapper 條件通過即成功 proc 並啟動冷卻；server端只有目標有 BuffExtension 才新增 stun，新增效果不是 cooldown 起算 gate。 |
| 眩暈期限與週期攻擊 | 兩組RAW描述沒有列眩暈期限或週期攻擊。 | power_maul_stun buff duration/stacks/interval callback：scripts/settings/buff/weapon_buff_templates.lua 847–891；shock_grenade_stun_interval profile：scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua 648–690 | 文件未涵蓋 | buff為3秒一層且會週期攻擊；週期攻擊有獨立damage/impact值。 |
| P1/P3週期攻擊owner | P1與P3 RAW未列週期攻擊owner行為。 | P1/P3 power_maul_stun add與owner_unit參數：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua 78–102；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua 75–100；BuffArgs owner default/explicit fields：scripts/extension_systems/buff/utility/buff_args.lua 23–27、59–78；at-cap refresh/reuse：scripts/extension_systems/buff/buff_extension_base.lua 434–462、560–590 | 文件未涵蓋 | P1未指定owner，P3指定玩家；滿層重加沿用既有上下文，外部延長時不可按首次3秒窗口概括後續tick。 |
