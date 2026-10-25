# 靈能者：來源文件與技術索引

[English](en/SOURCE_INDEX.md)

[返回玩家說明](README.md)｜[版本、日期與證據限制](../../../README.md)

[遊戲本體繁中描述比對](LOCALIZATION_COMPARISON.md)｜[百分比描述盤點](DAMAGE_PERCENTAGE_REVIEW.md)｜[角色基礎效果](BASE_EFFECTS.md)｜[未直接用於目前技能樹的定義](UNUSED_DEFINITIONS.md)

固定來源 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。技能樹共 **81 個可選節點**，均為一點；同一配置最多分配 30 點。零點起始佔位 `not_selected` 不屬天賦效果，不列入 81 項。
[職業與基礎天賦](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L48-L65)；[技能樹設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L3-L36)。內部 tree version 26 不等於遊戲發行版號。

名稱沿用翻譯表；機制為固定版本的程式分析，未進行遊戲內驗證。

| 技能／程式識別碼 | 分類 |
|---|---|
| [動能撕裂者](psyker_smite_on_hit.md) / `psyker_smite_on_hit` | 閃擊 |
| [顱腦崩裂](psyker_brain_burst_improved.md) / `psyker_brain_burst_improved` | 閃擊 |
| [靈能攻擊](psyker_grenade_throwing_knives.md) / `psyker_grenade_throwing_knives` | 閃擊 |
| [乙太碎片](psyker_throwing_knives_piercing.md) / `psyker_throwing_knives_piercing` | 閃擊 |
| [懲戒](psyker_grenade_chain_lightning.md) / `psyker_grenade_chain_lightning` | 閃擊 |
| [動能共鳴](psyker_ability_increase_brain_burst_speed.md) / `psyker_ability_increase_brain_burst_speed` | 閃擊 |
| [迅捷碎片](psyker_throwing_knives_cast_speed.md) / `psyker_throwing_knives_cast_speed` | 閃擊 |
| [衰弱詛咒](psyker_chain_lightning_improved_target_buff.md) / `psyker_chain_lightning_improved_target_buff` | 閃擊 |
| [蓄力打擊](psyker_chain_lightning_heavy_attacks.md) / `psyker_chain_lightning_heavy_attacks` | 閃擊 |
| [動能釋放](psyker_aura_damage_vs_elites.md) / `psyker_aura_damage_vs_elites` | 光環 |
| [先知之眼](psyker_cooldown_aura_improved.md) / `psyker_cooldown_aura_improved` | 光環 |
| [預兆](psyker_aura_crit_chance_aura.md) / `psyker_aura_crit_chance_aura` | 光環 |
| [靈能尖嘯](psyker_shout_vent_warp_charge.md) / `psyker_shout_vent_warp_charge` | 能力 |
| [占卜者的注視](psyker_combat_ability_stance.md) / `psyker_combat_ability_stance` | 能力 |
| [平靜迸發](psyker_shout_reduces_warp_charge_generation.md) / `psyker_shout_reduces_warp_charge_generation` | 能力 |
| [亞空間爆發](psyker_discharge_damage_debuff.md) / `psyker_discharge_damage_debuff` | 能力 |
| [蔓延火焰](psyker_warpfire_on_shout.md) / `psyker_warpfire_on_shout` | 能力 |
| [預知未來](psyker_overcharge_weakspot_kill_bonuses.md) / `psyker_overcharge_weakspot_kill_bonuses` | 能力 |
| [亞空間加速](psyker_overcharge_increased_movement_speed.md) / `psyker_overcharge_increased_movement_speed` | 能力 |
| [靈能學者光環](psyker_2_tier_3_name_2.md) / `psyker_2_tier_3_name_2` | 能力 |
| [現實錨點](psyker_overcharge_reduced_warp_charge.md) / `psyker_overcharge_reduced_warp_charge` | 能力 |
| [念力護盾](psyker_combat_ability_force_field.md) / `psyker_combat_ability_force_field` | 能力 |
| [強化護盾](psyker_shield_extra_charge.md) / `psyker_shield_extra_charge` | 能力 |
| [庇護所](psyker_boost_allies_in_sphere.md) / `psyker_boost_allies_in_sphere` | 能力 |
| [念力穹頂](psyker_sphere_shield.md) / `psyker_sphere_shield` | 能力 |
| [衰弱界線](psyker_shield_stun_passive.md) / `psyker_shield_stun_passive` | 能力 |
| [亞空間突破](psyker_overcharge_stance_infinite_casting.md) / `psyker_overcharge_stance_infinite_casting` | 能力 |
| [亞空間虹吸](psyker_passive_souls_from_elite_kills.md) / `psyker_passive_souls_from_elite_kills` | 鑰石 |
| [擾動命運](psyker_new_mark_passive.md) / `psyker_new_mark_passive` | 鑰石 |
| [靈能強化](psyker_empowered_ability.md) / `psyker_empowered_ability` | 鑰石 |
| [平心靜氣](psyker_reduced_warp_charge_cost_and_venting_speed.md) / `psyker_reduced_warp_charge_cost_and_venting_speed` | 鑰石 |
| [吸精奪萃](psyker_toughness_on_soul.md) / `psyker_toughness_on_soul` | 鑰石 |
| [生物磁石](psyker_empowered_grenades_passive_improved.md) / `psyker_empowered_grenades_passive_improved` | 鑰石 |
| [吸血閃電](psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md) / `psyker_empowered_chain_lightnings_replenish_toughness_to_allies` | 鑰石 |
| [吞靈強擊](psyker_empowered_ability_on_elite_kills.md) / `psyker_empowered_ability_on_elite_kills` | 鑰石 |
| [完美主義](psyker_mark_increased_max_stacks.md) / `psyker_mark_increased_max_stacks` | 鑰石 |
| [盜竊天命](psyker_mark_kills_can_vent.md) / `psyker_mark_kills_can_vent` | 鑰石 |
| [持久影響](psyker_mark_increased_duration.md) / `psyker_mark_increased_duration` | 鑰石 |
| [充能完畢](psyker_empowered_grenades_increased_max_stacks.md) / `psyker_empowered_grenades_increased_max_stacks` | 鑰石 |
| [涅槃](psyker_warpfire_generate_souls.md) / `psyker_warpfire_generate_souls` | 鑰石 |
| [靈能吸血鬼](psyker_aura_souls_on_kill.md) / `psyker_aura_souls_on_kill` | 鑰石 |
| [亞空間電池](psyker_increased_max_souls.md) / `psyker_increased_max_souls` | 鑰石 |
| [殘忍命運](psyker_mark_weakspot_kills.md) / `psyker_mark_weakspot_kills` | 鑰石 |
| [靈魂竊賊](psyker_toughness_on_warp_kill.md) / `psyker_toughness_on_warp_kill` | 技能 |
| [心如止水](psyker_toughness_on_vent.md) / `psyker_toughness_on_vent` | 技能 |
| [亞空間耗費](psyker_toughness_on_melee.md) / `psyker_toughness_on_melee` | 技能 |
| [堅毅](psyker_crits_regen_toughness_movement_speed.md) / `psyker_crits_regen_toughness_movement_speed` | 技能 |
| [險惡燃燒](psyker_elite_kills_add_warpfire.md) / `psyker_elite_kills_add_warpfire` | 技能 |
| [戰鬥冥想](psyker_chance_to_vent_on_kill.md) / `psyker_chance_to_vent_on_kill` | 技能 |
| [完美時機](psyker_crits_empower_next_attack.md) / `psyker_crits_empower_next_attack` | 技能 |
| [野火](psyker_spread_warpfire_on_kill.md) / `psyker_spread_warpfire_on_kill` | 技能 |
| [思維活躍](psyker_venting_improvements.md) / `psyker_venting_improvements` | 技能 |
| [惡意攻勢](psyker_kills_stack_other_weapon_damage.md) / `psyker_kills_stack_other_weapon_damage` | 技能 |
| [亞空間強化](psyker_warp_charge_reduces_toughness_damage_taken.md) / `psyker_warp_charge_reduces_toughness_damage_taken` | 技能 |
| [看破](psyker_improved_dodge.md) / `psyker_improved_dodge` | 技能 |
| [反射閃避](psyker_dodge_after_crits.md) / `psyker_dodge_after_crits` | 技能 |
| [穩固](psyker_increased_vent_speed.md) / `psyker_increased_vent_speed` | 技能 |
| [亞空間騎士](psyker_damage_based_on_warp_charge.md) / `psyker_damage_based_on_warp_charge` | 技能 |
| [精確瞄準](psyker_guaranteed_crit_on_multiple_weakspot_hits.md) / `psyker_guaranteed_crit_on_multiple_weakspot_hits` | 技能 |
| [傀儡師](psyker_coherency_aura_size_increase.md) / `psyker_coherency_aura_size_increase` | 技能 |
| [動能偏斜](psyker_block_costs_warp_charge.md) / `psyker_block_costs_warp_charge` | 技能 |
| [韌性增幅](base_toughness_node_buff_medium_5.md) / `base_toughness_node_buff_medium_5` | 技能 |
| [韌性增幅](base_toughness_node_buff_medium_4.md) / `base_toughness_node_buff_medium_4` | 技能 |
| [韌性減傷](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | 技能 |
| [迅雷之勢](psyker_melee_attack_speed.md) / `psyker_melee_attack_speed` | 技能 |
| [亞空間分裂](psyker_cleave_from_peril.md) / `psyker_cleave_from_peril` | 技能 |
| [汲魂者](psyker_killing_enemy_with_warpfire_boosts.md) / `psyker_killing_enemy_with_warpfire_boosts` | 技能 |
| [骨折後遺症](psyker_melee_weaving.md) / `psyker_melee_weaving` | 技能 |
| [脆弱心智](psyker_damage_vs_ogryns_and_monsters.md) / `psyker_damage_vs_ogryns_and_monsters` | 技能 |
| [聚焦次元](psyker_increased_warp_damage.md) / `psyker_increased_warp_damage` | 技能 |
| [危險平衡](psyker_weapon_attacks_peril_equilibrium.md) / `psyker_weapon_attacks_peril_equilibrium` | 技能 |
| [武器在手，信心我有。](psyker_reload_speed_warp_charge.md) / `psyker_reload_speed_warp_charge` | 技能 |
| [結晶意志](psyker_alternative_peril_explosion.md) / `psyker_alternative_peril_explosion` | 技能 |
| [靈能引導](psyker_force_staff_bonus.md) / `psyker_force_staff_bonus` | 技能 |
| [亞空間震波](psyker_force_staff_quick_attack_bonus.md) / `psyker_force_staff_quick_attack_bonus` | 技能 |
| [如夢似幻](psyker_damage_to_peril_conversion.md) / `psyker_damage_to_peril_conversion` | 技能 |
| [無形專注](psyker_damage_resistance_stun_immunity.md) / `psyker_damage_resistance_stun_immunity` | 技能 |
| [亞空間意志](psyker_warp_glass_cannon.md) / `psyker_warp_glass_cannon` | 技能 |
| [亞空間幽魂](psyker_stat_mix.md) / `psyker_stat_mix` | 技能 |
| [靈魂穿透](psyker_warp_attacks_rending.md) / `psyker_warp_attacks_rending` | 技能 |
| [念力之握](psyker_increased_blitz_damage.md) / `psyker_increased_blitz_damage` | 技能 |
