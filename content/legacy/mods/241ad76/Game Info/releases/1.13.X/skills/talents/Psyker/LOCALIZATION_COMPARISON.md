# 靈能者：遊戲本體繁中描述比對

[English](en/LOCALIZATION_COMPARISON.md)

[返回玩家說明](README.md)｜[技術索引](SOURCE_INDEX.md)

- 原文：本機 Steam Build 25606770，2026-10-02 擷取，ui 資源；繁中與英文依同一描述鍵／hash 配對。完整文字存於本版本 source/SteamBuild_25606770_1.13.1/，整個 Build 目錄受 Git 忽略。
- 機制：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。文字與程式來源皆為1.13.1；文字與實作的差異仍需遊戲內核對。
- 只有明確的效果方向、作用對象或數量／單位矛盾列為勘誤；省略機制或算例不算錯誤。

| 技能 | 結論 |
|---|---|
| [動能撕裂者](#psyker_smite_on_hit) | 文字與實作差異待遊戲內核對 |
| [顱腦崩裂](#psyker_brain_burst_improved) | 未見已確認矛盾 |
| [靈能攻擊](#psyker_grenade_throwing_knives) | 描述方向吻合，細節未列盡 |
| [乙太碎片](#psyker_throwing_knives_piercing) | 描述不完整，未見已確認矛盾 |
| [懲戒](#psyker_grenade_chain_lightning) | 未見已確認矛盾 |
| [動能共鳴](#psyker_ability_increase_brain_burst_speed) | 效果方向吻合，算例補足速度換算 |
| [迅捷碎片](#psyker_throwing_knives_cast_speed) | 描述吻合，部分格式參數是未掛載殘留 |
| [衰弱詛咒](#psyker_chain_lightning_improved_target_buff) | 未見已確認矛盾 |
| [蓄力打擊](#psyker_chain_lightning_heavy_attacks) | 未見已確認矛盾 |
| [動能釋放](#psyker_aura_damage_vs_elites) | 未見已確認矛盾 |
| [先知之眼](#psyker_cooldown_aura_improved) | 未見已確認矛盾 |
| [預兆](#psyker_aura_crit_chance_aura) | 未見已確認矛盾 |
| [靈能尖嘯](#psyker_shout_vent_warp_charge) | 未見明確矛盾 |
| [占卜者的注視](#psyker_combat_ability_stance) | 明確翻譯錯誤 |
| [平靜迸發](#psyker_shout_reduces_warp_charge_generation) | 未見明確矛盾 |
| [亞空間爆發](#psyker_discharge_damage_debuff) | 未見明確矛盾 |
| [蔓延火焰](#psyker_warpfire_on_shout) | 未見明確矛盾 |
| [預知未來](#psyker_overcharge_weakspot_kill_bonuses) | 未見明確矛盾 |
| [亞空間加速](#psyker_overcharge_increased_movement_speed) | 未見明確矛盾 |
| [靈能學者光環](#psyker_2_tier_3_name_2) | 未見明確矛盾 |
| [現實錨點](#psyker_overcharge_reduced_warp_charge) | 明確翻譯錯誤 |
| [念力護盾](#psyker_combat_ability_force_field) | 未見明確矛盾 |
| [強化護盾](#psyker_shield_extra_charge) | 未見明確矛盾 |
| [庇護所](#psyker_boost_allies_in_sphere) | 未見明確矛盾 |
| [念力穹頂](#psyker_sphere_shield) | 未見明確矛盾 |
| [衰弱界線](#psyker_shield_stun_passive) | 未見明確矛盾 |
| [亞空間突破](#psyker_overcharge_stance_infinite_casting) | 未見明確矛盾 |
| [亞空間虹吸](#psyker_passive_souls_from_elite_kills) | 未見明確矛盾 |
| [擾動命運](#psyker_new_mark_passive) | 待遊戲內核對 |
| [靈能強化](#psyker_empowered_ability) | 待遊戲內核對 |
| [平心靜氣](#psyker_reduced_warp_charge_cost_and_venting_speed) | 未見明確矛盾 |
| [吸精奪萃](#psyker_toughness_on_soul) | 未見明確矛盾 |
| [生物磁石](#psyker_empowered_grenades_passive_improved) | 未見明確矛盾 |
| [吸血閃電](#psyker_empowered_chain_lightnings_replenish_toughness_to_allies) | 未見明確矛盾 |
| [吞靈強擊](#psyker_empowered_ability_on_elite_kills) | 未見明確矛盾 |
| [完美主義](#psyker_mark_increased_max_stacks) | 未見明確矛盾 |
| [盜竊天命](#psyker_mark_kills_can_vent) | 未見明確矛盾 |
| [持久影響](#psyker_mark_increased_duration) | 未見明確矛盾 |
| [充能完畢](#psyker_empowered_grenades_increased_max_stacks) | 未見明確矛盾 |
| [涅槃](#psyker_warpfire_generate_souls) | 待遊戲內核對 |
| [靈能吸血鬼](#psyker_aura_souls_on_kill) | 未見明確矛盾 |
| [亞空間電池](#psyker_increased_max_souls) | 未見明確矛盾 |
| [殘忍命運](#psyker_mark_weakspot_kills) | 未見明確矛盾 |
| [靈魂竊賊](#psyker_toughness_on_warp_kill) | 未見明確矛盾 |
| [心如止水](#psyker_toughness_on_vent) | 未見明確矛盾 |
| [亞空間耗費](#psyker_toughness_on_melee) | 未見明確矛盾 |
| [堅毅](#psyker_crits_regen_toughness_movement_speed) | 未見明確矛盾 |
| [險惡燃燒](#psyker_elite_kills_add_warpfire) | 未見明確矛盾 |
| [戰鬥冥想](#psyker_chance_to_vent_on_kill) | 未見明確矛盾 |
| [完美時機](#psyker_crits_empower_next_attack) | 未見明確矛盾 |
| [野火](#psyker_spread_warpfire_on_kill) | 繁中原文勘誤 |
| [思維活躍](#psyker_venting_improvements) | 未見明確矛盾 |
| [惡意攻勢](#psyker_kills_stack_other_weapon_damage) | 未見明確矛盾 |
| [亞空間強化](#psyker_warp_charge_reduces_toughness_damage_taken) | 未見明確矛盾 |
| [看破](#psyker_improved_dodge) | 繁中原文勘誤 |
| [反射閃避](#psyker_dodge_after_crits) | 未見明確矛盾 |
| [穩固](#psyker_increased_vent_speed) | 待遊戲內核對 |
| [亞空間騎士](#psyker_damage_based_on_warp_charge) | 未見明確矛盾 |
| [精確瞄準](#psyker_guaranteed_crit_on_multiple_weakspot_hits) | 未見明確矛盾 |
| [傀儡師](#psyker_coherency_aura_size_increase) | 繁中原文勘誤 |
| [動能偏斜](#psyker_block_costs_warp_charge) | 未見明確矛盾 |
| [韌性增幅](#base_toughness_node_buff_medium_5) | 未見明確矛盾 |
| [韌性增幅](#base_toughness_node_buff_medium_4) | 未見明確矛盾 |
| [韌性減傷](#base_toughness_damage_reduction_node_buff_medium_1) | 未見明確矛盾 |
| [迅雷之勢](#psyker_melee_attack_speed) | 未見明確矛盾 |
| [亞空間分裂](#psyker_cleave_from_peril) | 繁中原文勘誤 |
| [汲魂者](#psyker_killing_enemy_with_warpfire_boosts) | 未見明確矛盾 |
| [骨折後遺症](#psyker_melee_weaving) | 未見明確矛盾 |
| [脆弱心智](#psyker_damage_vs_ogryns_and_monsters) | 未見明確矛盾 |
| [聚焦次元](#psyker_increased_warp_damage) | 未見明確矛盾 |
| [危險平衡](#psyker_weapon_attacks_peril_equilibrium) | 未見明確矛盾 |
| [武器在手，信心我有。](#psyker_reload_speed_warp_charge) | 未見明確矛盾 |
| [結晶意志](#psyker_alternative_peril_explosion) | 未見明確矛盾 |
| [靈能引導](#psyker_force_staff_bonus) | 未見明確矛盾 |
| [亞空間震波](#psyker_force_staff_quick_attack_bonus) | 未見明確矛盾 |
| [如夢似幻](#psyker_damage_to_peril_conversion) | 未見明確矛盾 |
| [無形專注](#psyker_damage_resistance_stun_immunity) | 未見明確矛盾 |
| [亞空間意志](#psyker_warp_glass_cannon) | 未見明確矛盾 |
| [亞空間幽魂](#psyker_stat_mix) | 未見明確矛盾 |
| [靈魂穿透](#psyker_warp_attacks_rending) | 未見明確矛盾 |
| [念力之握](#psyker_increased_blitz_damage) | 繁中原文勘誤 |

<a id="psyker_smite_on_hit"></a>
## 動能撕裂者(Kinetic Flayer)

- 描述鍵：`loc_talent_psyker_smite_on_hit_special_elite_desc`；hash：`63bc627a`。
- 結論：文字與實作差異待遊戲內核對。本機繁中描述稱反噬處於危險線以上時不觸發，但固定來源的完整檢查函式只驗證攻擊、傷害、敵人分類與存活狀態，沒有反噬條件。文字與程式來源皆為1.13.1；此差異仍待遊戲內核對，不單憑此判定翻譯錯誤。另，原始碼參數為 1.0，表示合格命中在冷卻外觸發率 100%。
- [原始碼推導與限制](psyker_smite_on_hit.md)。

<a id="psyker_brain_burst_improved"></a>
## 顱腦崩裂(Brain Rupture)

- 描述鍵：`loc_talent_psyker_brain_burst_improved_description`；hash：`681e4980`。
- 結論：未見已確認矛盾。核對到的繁中原文以顱腦崩裂作為 Brain Rupture 名稱，並以參數呈現傷害增幅；固定來源確認倍率為 1.5。文字與程式來源皆為1.13.1；實際表現仍待遊戲內核對。
- [原始碼推導與限制](psyker_brain_burst_improved.md)。

<a id="psyker_grenade_throwing_knives"></a>
## 靈能攻擊(Assail)

- 描述鍵：`loc_ability_psyker_blitz_throwing_knives_description`；hash：`72fc17b1`。
- 結論：描述方向吻合，細節未列盡。繁中原文描述追蹤投射物及甲殼護甲效果較差；原文未列使用次數、資源恢復及瞄準投擲的不同設定，這些屬描述不完整，沒有足以判定翻譯方向錯誤的證據。
- [原始碼推導與限制](psyker_grenade_throwing_knives.md)。

<a id="psyker_throwing_knives_piercing"></a>
## 乙太碎片(Ethereal Shards)

- 描述鍵：`loc_talent_psyker_throwing_knives_pierce_description`；hash：`392c597f`。
- 結論：描述不完整，未見已確認矛盾。繁中原文只說投射物能擊穿額外目標，沒有提供 hit-mass 的量、上限公式或保證增加的目標數。原始碼沒有固定的 +1 目標值；這種省略屬描述不完整。
- [原始碼推導與限制](psyker_throwing_knives_piercing.md)。

<a id="psyker_grenade_chain_lightning"></a>
## 懲戒(Smite)

- 描述鍵：`loc_ability_psyker_chain_lightning_description`；hash：`837f8e7f`。
- 結論：未見已確認矛盾。本地繁中說明的鎖定、眩暈、鄰近擴散與蓄力效果均可由固定來源確認；此草稿進一步把直接根目標上限、後續跳躍、電擊 tick 與反噬成本分開說明，沒有把內部時程誤寫成必定命中數。
- [原始碼推導與限制](psyker_grenade_chain_lightning.md)。

<a id="psyker_ability_increase_brain_burst_speed"></a>
## 動能共鳴(Kinetic Resonance)

- 描述鍵：`loc_talent_psyker_ability_increase_brain_burst_speed_desc`；hash：`ee94ffdd`。
- 結論：效果方向吻合，算例補足速度換算。本機繁中原文指使用戰鬥技能後加快顱腦崩裂充能並降低反噬；固定來源值為 +75% 速度、生成量 ×0.5、持續 10 秒。速度提升不能直接當作充能秒數減少 75%，此為公式解讀補充。
- [原始碼推導與限制](psyker_ability_increase_brain_burst_speed.md)。

<a id="psyker_throwing_knives_cast_speed"></a>
## 迅捷碎片(Quick Shards)

- 描述鍵：`loc_talent_psyker_throwing_knives_cast_speed_description`；hash：`da103b93`。
- 結論：描述吻合，部分格式參數是未掛載殘留。繁中原文說靈能攻擊充能速度加快；掛載的被動確實提高使用次數資源恢復速率 30%。定義裡的 speed/stacks/duration 沒有被該描述使用，也沒有由此節點掛載對應的速度疊層 buff；不可把它們當成已生效文字或原文錯誤。
- [原始碼推導與限制](psyker_throwing_knives_cast_speed.md)。

<a id="psyker_chain_lightning_improved_target_buff"></a>
## 衰弱詛咒(Enfeeble)

- 描述鍵：`loc_talent_psyker_chain_lightning_improved_target_buff_alt_description`；hash：`da40a0a2`。
- 結論：未見已確認矛盾。本地繁中說明指出遭你電擊的敵人會受到所有來源的基礎傷害增加；固定來源設定的強化倍率為 1.1，並由目標承受傷害倍率進入共用傷害計算。
- [原始碼推導與限制](psyker_chain_lightning_improved_target_buff.md)。

<a id="psyker_chain_lightning_heavy_attacks"></a>
## 蓄力打擊(Charged Strike)

- 描述鍵：`loc_talent_psyker_chain_lightning_damage_heavy_attacks_desc`；hash：`e84d2a21`。
- 結論：未見已確認矛盾。本地繁中說明列出近戰重擊電擊並造成傷害，與固定原始碼的重擊命中觸發及兩秒持續傷害效果相符。
- [原始碼推導與限制](psyker_chain_lightning_heavy_attacks.md)。

<a id="psyker_aura_damage_vs_elites"></a>
## 動能釋放(Kinetic Presence)

- 描述鍵：`loc_talent_psyker_base_3_description`；hash：`4fad8ca6`。
- 結論：未見已確認矛盾。本地繁中說明的受益者為自己與協同隊友，目標為精英敵人，增幅由固定原始碼確認為 10%。
- [原始碼推導與限制](psyker_aura_damage_vs_elites.md)。

<a id="psyker_cooldown_aura_improved"></a>
## 先知之眼(Seer's Presence)

- 描述鍵：`loc_talent_psyker_cooldown_aura_improved_description`；hash：`8daf59be`。
- 結論：未見已確認矛盾。本地繁中說明列出本人與協同隊友享有技能冷卻縮減；目前光環值為 10%，與固定原始碼設定一致。
- [原始碼推導與限制](psyker_cooldown_aura_improved.md)。

<a id="psyker_aura_crit_chance_aura"></a>
## 預兆(Prescience)

- 描述鍵：`loc_ability_psyker_gunslinger_aura_description`；hash：`a2000c1d`。
- 結論：未見已確認矛盾。本地繁中說明將此效果描述為本人與協同隊友增加爆擊率，固定原始碼的光環值為 0.05，暴擊計算以加法套用。
- [原始碼推導與限制](psyker_aura_crit_chance_aura.md)。

<a id="psyker_shout_vent_warp_charge"></a>
## 靈能尖嘯(Venting Shriek)

- 描述鍵：`loc_talent_psyker_shout_vent_warp_charge_description`；hash：`7d4501be`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_shout_vent_warp_charge.md)。

<a id="psyker_combat_ability_stance"></a>
## 占卜者的注視(Scrier's Gaze)

- 描述鍵：`loc_talent_psyker_combat_ability_overcharge_stance_improved_description`；hash：`00d42220`。
- 結論：明確翻譯錯誤。原文將注視寫成「進入／離開注視範圍」，容易誤解成地面區域；同源英文與實作均指角色進入／結束注視狀態。
- 繁中原文短引：觸發占卜師的注視。進入占卜師的注視範圍後，平息{vent:%s}反噬並獲得{base_damage:%s}附加傷害、{crit_chance:%s}爆擊率、{weakspot_damage:%s}弱點傷害、{tdr:%s}韌性減傷以及壓制免疫，同時每秒恢復{toughness:%s}韌性。
- 同源英文：Triggers Scrier's Gaze. When entering Scrier's Gaze you Quell {vent:%s} Peril as well as gain {base_damage:%s} Damage, {crit_chance:%s} Critical Chance, {weakspot_damage:%s} Weakspot Damage, {tdr:%s} Toughness Damage Reduction, and Suppression Immunity. You also replenish {toughness:%s} Toughness each second.
- [原始碼推導與限制](psyker_combat_ability_stance.md)。

<a id="psyker_shout_reduces_warp_charge_generation"></a>
## 平靜迸發(Becalming Eruption)

- 描述鍵：`loc_talent_psyker_shout_reduces_warp_charge_generation_description`；hash：`57df8e08`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_shout_reduces_warp_charge_generation.md)。

<a id="psyker_discharge_damage_debuff"></a>
## 亞空間爆發(Warp Rupture)

- 描述鍵：`loc_talent_psyker_discharge_damage_debuff_description`；hash：`c5561004`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_discharge_damage_debuff.md)。

<a id="psyker_warpfire_on_shout"></a>
## 蔓延火焰(Creeping Flames)

- 描述鍵：`loc_talent_psyker_warpfire_on_shout_desc`；hash：`8ec3e5f7`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_warpfire_on_shout.md)。

<a id="psyker_overcharge_weakspot_kill_bonuses"></a>
## 預知未來(Precognition)

- 描述鍵：`loc_ability_psyker_overcharge_weakspot_description`；hash：`492219ab`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_overcharge_weakspot_kill_bonuses.md)。

<a id="psyker_overcharge_increased_movement_speed"></a>
## 亞空間加速(Warp Speed)

- 描述鍵：`loc_ability_psyker_overcharge_movement_speed_description`；hash：`5f1da172`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_overcharge_increased_movement_speed.md)。

<a id="psyker_2_tier_3_name_2"></a>
## 靈能學者光環(Psykinetic's Aura)

- 描述鍵：`loc_talent_psyker_cooldown_on_elite_kills_desc`；hash：`eaf79e38`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。 詳細持續時間／觸發範圍以固定來源推導，仍須同版遊戲核對。
- [原始碼推導與限制](psyker_2_tier_3_name_2.md)。

<a id="psyker_overcharge_reduced_warp_charge"></a>
## 現實錨點(Reality Anchor)

- 描述鍵：`loc_ability_psyker_overcharge_reduced_warp_charge_vent_speed_description`；hash：`93f0b5f7`。
- 結論：明確翻譯錯誤。「降低已生成的反噬」把生成量減少寫成扣除現有反噬；同源英文與實作指注視期間新產生的反噬變少。
- 繁中原文短引：{talent_name:%s}啟動期間還會降低{warp_charge:%s}已生成的反噬並提高{venting:%s}平息效果。
- 同源英文：{talent_name:%s} now also reduces your Peril Generated by {warp_charge:%s} and increases Quellling by {venting:%s} while active.
- [原始碼推導與限制](psyker_overcharge_reduced_warp_charge.md)。

<a id="psyker_combat_ability_force_field"></a>
## 念力護盾(Telekine Shield)

- 描述鍵：`loc_talent_psyker_combat_ability_shield_description`；hash：`2d4c8bb1`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_combat_ability_force_field.md)。

<a id="psyker_shield_extra_charge"></a>
## 強化護盾(Bolstered Shield)

- 描述鍵：`loc_talent_psyker_force_field_charges_description`；hash：`5d19ee30`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_shield_extra_charge.md)。

<a id="psyker_boost_allies_in_sphere"></a>
## 庇護所(Sanctuary)

- 描述鍵：`loc_talent_psyker_force_field_grants_toughness_desc`；hash：`fe5dbdd8`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。 詳細持續時間／觸發範圍以固定來源推導，仍須同版遊戲核對。
- [原始碼推導與限制](psyker_boost_allies_in_sphere.md)。

<a id="psyker_sphere_shield"></a>
## 念力穹頂(Telekine Dome)

- 描述鍵：`loc_talent_psyker_force_field_dome_increased_cd_desc`；hash：`0b13a4ee`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_sphere_shield.md)。

<a id="psyker_shield_stun_passive"></a>
## 衰弱界線(Enervating Threshold)

- 描述鍵：`loc_talent_psyker_force_field_stun_increased_new_description`；hash：`900d2430`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。
- [原始碼推導與限制](psyker_shield_stun_passive.md)。

<a id="psyker_overcharge_stance_infinite_casting"></a>
## 亞空間突破(Warp Unbound)

- 描述鍵：`loc_talent_psyker_overcharge_infinite_casting_desc`；hash：`10334171`。
- 結論：未見明確矛盾。同一描述鍵的繁中與英文效果方向一致；未說明的公式、時序與額外條件屬描述不完整，不列為誤譯。與公開來源版本對應為1.13.1。 詳細持續時間／觸發範圍以固定來源推導，仍須同版遊戲核對。
- [原始碼推導與限制](psyker_overcharge_stance_infinite_casting.md)。

<a id="psyker_passive_souls_from_elite_kills"></a>
## 亞空間虹吸(Warp Siphon)

- 描述鍵：`loc_talent_psyker_souls_new_desc`；hash：`9ea525d4`。
- 結論：未見明確矛盾。同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。
- [原始碼推導與限制](psyker_passive_souls_from_elite_kills.md)。

<a id="psyker_new_mark_passive"></a>
## 擾動命運(Disrupt Destiny)

- 描述鍵：`loc_talent_psyker_marked_enemies_passive_updated_desc`；hash：`cfa752d8`。
- 結論：待遊戲內核對。現有本地化說明寫成每秒機率標記；源碼選敵邏輯則依可標記敵種、前向視角及視線條件挑選，逐秒只是目標狀態檢查／重選節奏。文字與程式來源皆為1.13.1；先保留差異待遊戲內核對。
- [原始碼推導與限制](psyker_new_mark_passive.md)。

<a id="psyker_empowered_ability"></a>
## 靈能強化(Empowered Psionics)

- 描述鍵：`loc_talent_psyker_empowered_ability_description`；hash：`8b4a7ea9`。
- 結論：待遊戲內核對。繁中與英文都將顱腦崩裂加成稱施放時間減少；固定原始碼實際按蓄力速度+50%計算。雙語一致的跨來源差異留待遊戲內核對；Assail免投擲次數與消耗強化層屬兩種資源，不判為矛盾。 懲戒傳導速度顯示與實際讀取亦有落差：此路徑優先取明定0.3秒，未乘強化倍率。
- [原始碼推導與限制](psyker_empowered_ability.md)。

<a id="psyker_reduced_warp_charge_cost_and_venting_speed"></a>
## 平心靜氣(Inner Tranquility)

- 描述鍵：`loc_talent_psyker_reduced_warp_charge_cost_venting_speed_desc`；hash：`e3048a81`。
- 結論：未見明確矛盾。同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。
- [原始碼推導與限制](psyker_reduced_warp_charge_cost_and_venting_speed.md)。

<a id="psyker_toughness_on_soul"></a>
## 吸精奪萃(Essence Harvest)

- 描述鍵：`loc_talent_psyker_toughness_regen_on_soul_desc`；hash：`fc9f3c0b`。
- 結論：未見明確矛盾。同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。
- [原始碼推導與限制](psyker_toughness_on_soul.md)。

<a id="psyker_empowered_grenades_passive_improved"></a>
## 生物磁石(Bio-Lodestone)

- 描述鍵：`loc_talent_psyker_increase_empower_chain_lighting_chance_description`；hash：`542f4465`。
- 結論：未見明確矛盾。同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。
- [原始碼推導與限制](psyker_empowered_grenades_passive_improved.md)。

<a id="psyker_empowered_chain_lightnings_replenish_toughness_to_allies"></a>
## 吸血閃電(Psychic Leeching)

- 描述鍵：`loc_talent_psyker_empowered_chain_lightnings_replenish_toughness_to_allies_description`；hash：`0f6ef5af`。
- 結論：未見明確矛盾。同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。
- [原始碼推導與限制](psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md)。

<a id="psyker_empowered_ability_on_elite_kills"></a>
## 吞靈強擊(Overpowering Souls)

- 描述鍵：`loc_talent_psyker_empowered_ability_on_elite_kills_description`；hash：`23c36e9e`。
- 結論：未見明確矛盾。同描述鍵的本機繁中與英文效果方向一致。補充公式、恢復上限與事件時序屬描述不完整；公開來源與遊戲文字版本對應為1.13.1。
- [原始碼推導與限制](psyker_empowered_ability_on_elite_kills.md)。

<a id="psyker_mark_increased_max_stacks"></a>
## 完美主義(Perfectionism)

- 描述鍵：`loc_talent_psyker_mark_increased_max_stacks_description`；hash：`781eac6d`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_mark_increased_max_stacks.md)。

<a id="psyker_mark_kills_can_vent"></a>
## 盜竊天命(Purloin Providence)

- 描述鍵：`loc_talent_psyker_mark_kills_can_vent_description`；hash：`01016112`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_mark_kills_can_vent.md)。

<a id="psyker_mark_increased_duration"></a>
## 持久影響(Lingering Influence)

- 描述鍵：`loc_talent_psyker_mark_increased_duration_description`；hash：`cacfbe0c`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_mark_increased_duration.md)。

<a id="psyker_empowered_grenades_increased_max_stacks"></a>
## 充能完畢(Charged Up)

- 描述鍵：`loc_talent_psyker_increased_empowered_chain_lightning_stacks_description`；hash：`61957b58`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_empowered_grenades_increased_max_stacks.md)。

<a id="psyker_warpfire_generate_souls"></a>
## 涅槃(In Fire Reborn)

- 描述鍵：`loc_talent_psyker_warpfire_generates_souls_desc`；hash：`d52dac75`。
- 結論：待遊戲內核對。繁中與英文均寫靈魂之火擊殺；固定來源也接受死亡時帶有靈魂之火的敵人，不要求本人尾刀。兩語言一致，跨來源實作差異尚待遊戲內核對，不列繁中誤譯。
- [原始碼推導與限制](psyker_warpfire_generate_souls.md)。

<a id="psyker_aura_souls_on_kill"></a>
## 靈能吸血鬼(Psychic Vampire)

- 描述鍵：`loc_talent_psyker_souls_on_kill_coop_desc`；hash：`03d352e7`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_aura_souls_on_kill.md)。

<a id="psyker_increased_max_souls"></a>
## 亞空間電池(Warp Battery)

- 描述鍵：`loc_talent_psyker_increased_souls_desc`；hash：`e69bf6d1`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_increased_max_souls.md)。

<a id="psyker_mark_weakspot_kills"></a>
## 殘忍命運(Cruel Fortune)

- 描述鍵：`loc_talent_psyker_mark_weakspot_stacks_description`；hash：`40c93869`。
- 結論：未見明確矛盾。同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。
- [原始碼推導與限制](psyker_mark_weakspot_kills.md)。

<a id="psyker_toughness_on_warp_kill"></a>
## 靈魂竊賊(Soulstealer)

- 描述鍵：`loc_talent_psyker_toughness_on_warp_kill_desc`；hash：`ffb1d758`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_toughness_on_warp_kill.md)。

<a id="psyker_toughness_on_vent"></a>
## 心如止水(Quietude)

- 描述鍵：`loc_talent_psyker_toughness_from_vent_and_gen_desc`；hash：`50f8f0f2`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_toughness_on_vent.md)。

<a id="psyker_toughness_on_melee"></a>
## 亞空間耗費(Warp Expenditure)

- 描述鍵：`loc_talent_psyker_toughness_on_melee_description`；hash：`3f010d59`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_toughness_on_melee.md)。

<a id="psyker_crits_regen_toughness_movement_speed"></a>
## 堅毅(Mettle)

- 描述鍵：`loc_talent_psyker_crits_regen_toughness_speed_description`；hash：`0da7190a`。
- 結論：未見明確矛盾。繁中與英文均將持續恢復和可疊層移速分段；補入「恢復速率不隨層數倍增」屬機制說明，不列錯誤。
- [原始碼推導與限制](psyker_crits_regen_toughness_movement_speed.md)。

<a id="psyker_elite_kills_add_warpfire"></a>
## 險惡燃燒(Perilous Combustion)

- 描述鍵：`loc_talent_psyker_elite_and_special_kills_add_warpfire_desc`；hash：`c4294372`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_elite_kills_add_warpfire.md)。

<a id="psyker_chance_to_vent_on_kill"></a>
## 戰鬥冥想(Battle Meditation)

- 描述鍵：`loc_talent_psyker_quell_on_kill_and_reduction_desc`；hash：`2b245e8a`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_chance_to_vent_on_kill.md)。

<a id="psyker_crits_empower_next_attack"></a>
## 完美時機(Perfect Timing)

- 描述鍵：`loc_talent_psyker_damage_on_crit_stacking_desc`；hash：`62b2dfb3`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_crits_empower_next_attack.md)。

<a id="psyker_spread_warpfire_on_kill"></a>
## 野火(Wildfire)

- 描述鍵：`loc_talent_psyker_warpfire_spread_desc`；hash：`7f4f685e`。
- 結論：繁中原文勘誤。繁中「被你的靈魂之火灼燒而亡」把條件縮成火焰擊殺；英文及執行條件是敵人死亡時仍受你的靈魂之火影響，其他攻擊完成擊殺也可觸發。
- 繁中原文短引：敵人被你的靈魂之火灼燒而亡時，附近所有敵人疊加最多{stacks:%s}層靈魂之火。最大層數不超過死亡敵人已疊加的層數。
- 同源英文：When an Enemy dies while affected by your Soulblaze, nearby Enemies each gain up to {stacks:%s} Stacks of Soulblaze. They cannot gain more stacks than the dying Enemy had.
- [原始碼推導與限制](psyker_spread_warpfire_on_kill.md)。

<a id="psyker_venting_improvements"></a>
## 思維活躍(Mind in Motion)

- 描述鍵：`loc_talent_psyker_improved_venting_desc`；hash：`86b17787`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_venting_improvements.md)。

<a id="psyker_kills_stack_other_weapon_damage"></a>
## 惡意攻勢(Malefic Momentum)

- 描述鍵：`loc_talent_psyker_kills_stack_other_weapon_damage_both_description`；hash：`ef213cd8`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_kills_stack_other_weapon_damage.md)。

<a id="psyker_warp_charge_reduces_toughness_damage_taken"></a>
## 亞空間強化(One with the Warp)

- 描述鍵：`loc_talent_psyker_toughness_damage_reduction_from_warp_charge_desc`；hash：`96e4cb7c`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_warp_charge_reduces_toughness_damage_taken.md)。

<a id="psyker_improved_dodge"></a>
## 看破(Anticipation)

- 描述鍵：`loc_talent_psyker_improved_dodge_description`；hash：`b7dff1d2`。
- 結論：繁中原文勘誤。繁中「有效閃避次數增加至」把增加量寫成新的總數；英文是增加指定次數，實際為原有次數再加 1，不是總共只能閃避 1 次。
- 繁中原文短引：有效閃避次數增加至{extra_consecutive_dodges:%s}次，視為有效閃避的時間增加{dodge_linger_time:%s}。
- 同源英文：Increase Effective Dodges by {extra_consecutive_dodges:%s} and time considered Dodging by {dodge_linger_time:%s}.
- [原始碼推導與限制](psyker_improved_dodge.md)。

<a id="psyker_dodge_after_crits"></a>
## 反射閃避(Empathic Evasion)

- 描述鍵：`loc_talent_psyker_dodge_after_crits_description`；hash：`654d056c`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_dodge_after_crits.md)。

<a id="psyker_increased_vent_speed"></a>
## 穩固(Solidity)

- 描述鍵：`loc_talent_psyker_increased_vent_speed_description`；hash：`479e9713`。
- 結論：待遊戲內核對。本機用語為平息速度，固定源碼把.7套到時間與間隔。兩來源皆為1.13.1；實際表現待遊戲內核對，不直接判定繁中誤譯。
- [原始碼推導與限制](psyker_increased_vent_speed.md)。

<a id="psyker_damage_based_on_warp_charge"></a>
## 亞空間騎士(Warp Rider)

- 描述鍵：`loc_talent_psyker_damage_based_on_warp_charge_desc`；hash：`bfd23655`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_damage_based_on_warp_charge.md)。

<a id="psyker_guaranteed_crit_on_multiple_weakspot_hits"></a>
## 精確瞄準(True Aim)

- 描述鍵：`loc_talent_psyker_weakspot_grants_crit_once_description`；hash：`2341fb06`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_guaranteed_crit_on_multiple_weakspot_hits.md)。

<a id="psyker_coherency_aura_size_increase"></a>
## 傀儡師(Puppet Master)

- 描述鍵：`loc_talent_psyker_coherency_size_increase_description`；hash：`5556945e`。
- 結論：繁中原文勘誤。繁中「光環範圍變為{radius_modifier}倍」混用倍率與增加量；實際效果是半徑增加 75%，也就是原本的 1.75 倍。
- 繁中原文短引：你的協同光環範圍變為{radius_modifier:%s}倍。
- 同源英文：{radius_modifier:%s} Radius for your Coherency Aura.
- [原始碼推導與限制](psyker_coherency_aura_size_increase.md)。

<a id="psyker_block_costs_warp_charge"></a>
## 動能偏斜(Kinetic Deflection)

- 描述鍵：`loc_talent_psyker_block_costs_warp_charge_desc`；hash：`136ee48b`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_block_costs_warp_charge.md)。

<a id="base_toughness_node_buff_medium_5"></a>
## 韌性增幅(Toughness Boost)

- 描述鍵：`loc_talent_toughness_boost_medium_desc`；hash：`329702b6`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](base_toughness_node_buff_medium_5.md)。

<a id="base_toughness_node_buff_medium_4"></a>
## 韌性增幅(Toughness Boost)

- 描述鍵：`loc_talent_toughness_boost_medium_desc`；hash：`329702b6`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](base_toughness_node_buff_medium_4.md)。

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>
## 韌性減傷(Toughness Damage Reduction)

- 描述鍵：`loc_talent_toughness_damage_reduction_medium_desc`；hash：`1272bcc0`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](base_toughness_damage_reduction_node_buff_medium_1.md)。

<a id="psyker_melee_attack_speed"></a>
## 迅雷之勢(Lightning Speed)

- 描述鍵：`loc_talent_psyker_melee_attack_speed_desc`；hash：`10f28165`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_melee_attack_speed.md)。

<a id="psyker_cleave_from_peril"></a>
## 亞空間分裂(Warp Splitting)

- 描述鍵：`loc_talent_psyker_cleave_from_peril_desc`；hash：`5de5fc01`。
- 結論：繁中原文勘誤。繁中「順劈攻擊傷害」把順劈能力寫成傷害增幅；英文是 Cleave，實際提高能穿過的敵人質量上限，不是直接提高每次命中的傷害。
- 繁中原文短引：根據目前反噬值，最多提高{max_cleave:%s}順劈攻擊傷害。
- 同源英文：Up to {max_cleave:%s} Cleave, based on Peril.
- [原始碼推導與限制](psyker_cleave_from_peril.md)。

<a id="psyker_killing_enemy_with_warpfire_boosts"></a>
## 汲魂者(Souldrinker)

- 描述鍵：`loc_talent_psyker_killing_enemy_with_warpfire_boosts_duration_desc`；hash：`3db8d226`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_killing_enemy_with_warpfire_boosts.md)。

<a id="psyker_melee_weaving"></a>
## 骨折後遺症(By Crack of Bone)

- 描述鍵：`loc_talent_psyker_melee_weaving_desc`；hash：`9a0cbda1`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_melee_weaving.md)。

<a id="psyker_damage_vs_ogryns_and_monsters"></a>
## 脆弱心智(Vulnerable Minds)

- 描述鍵：`loc_talent_psyker_damage_vs_ogryns_and_monsters_desc`；hash：`454bae2f`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_damage_vs_ogryns_and_monsters.md)。

<a id="psyker_increased_warp_damage"></a>
## 聚焦次元(Focused Warp)

- 描述鍵：`loc_talent_psyker_increased_warp_damage_desc`；hash：`f4703bae`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_increased_warp_damage.md)。

<a id="psyker_weapon_attacks_peril_equilibrium"></a>
## 危險平衡(Peril Equilibrium)

- 描述鍵：`loc_talent_psyker_weapon_attacks_peril_equilibrium_desc`；hash：`dc54df8c`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_weapon_attacks_peril_equilibrium.md)。

<a id="psyker_reload_speed_warp_charge"></a>
## 武器在手，信心我有。(Surety of Arms)

- 描述鍵：`loc_talent_psyker_reload_speed_warp_desc`；hash：`62b8a0d4`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_reload_speed_warp_charge.md)。

<a id="psyker_alternative_peril_explosion"></a>
## 結晶意志(Crystalline Will)

- 描述鍵：`loc_talent_psyker_alternative_peril_explosion_new_desc`；hash：`7ea53d48`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_alternative_peril_explosion.md)。

<a id="psyker_force_staff_bonus"></a>
## 靈能引導(Channeled Force)

- 描述鍵：`loc_talent_psyker_force_staff_both_bonus_desc`；hash：`44883ede`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_force_staff_bonus.md)。

<a id="psyker_force_staff_quick_attack_bonus"></a>
## 亞空間震波(Empyric Shock)

- 描述鍵：`loc_talent_psyker_force_staff_quick_attack_bonus_desc`；hash：`c4f73f93`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_force_staff_quick_attack_bonus.md)。

<a id="psyker_damage_to_peril_conversion"></a>
## 如夢似幻(Just a Dream)

- 描述鍵：`loc_talent_psyker_damage_to_peril_conversion_desc`；hash：`832ffb7a`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_damage_to_peril_conversion.md)。

<a id="psyker_damage_resistance_stun_immunity"></a>
## 無形專注(Immaterial Focus)

- 描述鍵：`loc_talent_psyker_damage_resistance_stun_immunity_desc`；hash：`c5294daa`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_damage_resistance_stun_immunity.md)。

<a id="psyker_warp_glass_cannon"></a>
## 亞空間意志(Empyric Resolve)

- 描述鍵：`loc_talent_psyker_warp_glass_cannon_desc`；hash：`3e435c7d`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_warp_glass_cannon.md)。

<a id="psyker_stat_mix"></a>
## 亞空間幽魂(Warp Ghost)

- 描述鍵：`loc_talent_psyker_stat_mix_desc`；hash：`df89fc40`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_stat_mix.md)。

<a id="psyker_warp_attacks_rending"></a>
## 靈魂穿透(Penetration of the Soul)

- 描述鍵：`loc_talent_psyker_warp_attacks_rending_alt_desc`；hash：`35bc88f1`。
- 結論：未見明確矛盾。核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。
- [原始碼推導與限制](psyker_warp_attacks_rending.md)。

<a id="psyker_increased_blitz_damage"></a>
## 念力之握(Psykinetic Grip)

- 描述鍵：`loc_talent_psyker_increased_blitz_damage_desc`；hash：`9b44cc81`。
- 結論：繁中原文勘誤。繁中「對……造成的……傷害」把三種閃擊寫成受攻擊的對象；實際是提高顱腦崩裂、懲戒與靈能攻擊本身造成的傷害。
- 繁中原文短引：對{blitz_one:%s}、{blitz_two:%s}和{blitz_three:%s}造成的{blitz_damage:%s}傷害
- 同源英文：{blitz_damage:%s} Damage for {blitz_one:%s}, {blitz_two:%s}, and {blitz_three:%s}.
- [原始碼推導與限制](psyker_increased_blitz_damage.md)。
