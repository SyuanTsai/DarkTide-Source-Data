# 老兵：來源文件與技術索引

[English](en/SOURCE_INDEX.md)

[返回玩家說明](README.md)｜[版本、日期與證據限制](../../../README.md)

[遊戲本體繁中描述比對](LOCALIZATION_COMPARISON.md)｜[77項百分比描述盤點](DAMAGE_PERCENTAGE_REVIEW.md)｜[角色基礎效果](BASE_EFFECTS.md)｜[未直接用於目前技能樹的定義](UNUSED_DEFINITIONS.md)

固定來源 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。技能樹共 **77 個節點**（76 個一點節點、1 個零點起始節點），同一配置最多分配 30 點；不是可同時選滿的 77 個天賦。

[職業與基礎天賦](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L40-L74)；[技能樹設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L3-L10)。內部 tree version 34 不等於遊戲發行版號。

名稱沿用翻譯表；機制為固定版本的程式分析，未進行遊戲內驗證。

| 技能／程式識別碼 | 分類 |
|---|---|
| [煙霧手雷](veteran_smoke_grenade.md) / `veteran_smoke_grenade` | 閃擊 |
| [擲彈兵](veteran_extra_grenade.md) / `veteran_extra_grenade` | 閃擊 |
| [手雷專家](veteran_improved_grenades.md) / `veteran_improved_grenades` | 閃擊 |
| [穿甲手雷](veteran_krak_grenade.md) / `veteran_krak_grenade` | 閃擊 |
| [炸藥儲備](veteran_replenish_grenades.md) / `veteran_replenish_grenades` | 閃擊 |
| [粉碎者破片手雷](veteran_grenade_apply_bleed.md) / `veteran_grenade_apply_bleed` | 閃擊 |
| [抵近殺敵](veteran_movement_speed_coherency.md) / `veteran_movement_speed_coherency` | 光環 |
| [火力小分隊](veteran_increased_damage_coherency.md) / `veteran_increased_damage_coherency` | 光環 |
| [生存專家](veteran_aura_gain_ammo_on_elite_kill_improved.md) / `veteran_aura_gain_ammo_on_elite_kill_improved` | 光環 |
| [火力齊射](veteran_combat_ability_stance.md) / `veteran_combat_ability_stance` | 能力 |
| [滲透](veteran_invisibility_on_combat_ability.md) / `veteran_invisibility_on_combat_ability` | 能力 |
| [低調](veteran_reduced_threat_after_combat_ability.md) / `veteran_reduced_threat_after_combat_ability` | 能力 |
| [處決者姿態](veteran_combat_ability_elite_and_special_outlines.md) / `veteran_combat_ability_elite_and_special_outlines` | 能力 |
| [目標引導增強](veteran_combat_ability_coherency_outlines.md) / `veteran_combat_ability_coherency_outlines` | 能力 |
| [火力反擊](veteran_combat_ability_ranged_roamer_outlines.md) / `veteran_combat_ability_ranged_roamer_outlines` | 能力 |
| [獵手決意](veteran_toughness_bonus_leaving_invisibility.md) / `veteran_toughness_bonus_leaving_invisibility` | 能力 |
| [戰術意識](veteran_elite_kills_reduce_cooldown.md) / `veteran_elite_kills_reduce_cooldown` | 能力 |
| [發號施令](veteran_combat_ability_stagger_nearby_enemies.md) / `veteran_combat_ability_stagger_nearby_enemies` | 能力 |
| [只有死亡，職責才會終結](veteran_combat_ability_revive_nearby_allies.md) / `veteran_combat_ability_revive_nearby_allies` | 能力 |
| [鷹眼](veteran_increased_weakspot_power_after_combat_ability.md) / `veteran_increased_weakspot_power_after_combat_ability` | 能力 |
| [責任與榮譽](veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) / `veteran_combat_ability_increase_and_restore_toughness_to_coherency` | 能力 |
| [掩護射擊](veteran_combat_ability_extra_charge.md) / `veteran_combat_ability_extra_charge` | 能力 |
| [肉搏戰](veteran_increased_close_damage_after_combat_ability.md) / `veteran_increased_close_damage_after_combat_ability` | 能力 |
| [敵人越大...](veteran_combat_ability_ogryn_outlines.md) / `veteran_combat_ability_ogryn_outlines` | 能力 |
| [狙擊專注](veteran_snipers_focus.md) / `veteran_snipers_focus` | 鑰石 |
| [滲透盔甲](veteran_snipers_focus_rending_bonus.md) / `veteran_snipers_focus_rending_bonus` | 鑰石 |
| [視野狹窄](veteran_snipers_focus_toughness_bonus.md) / `veteran_snipers_focus_toughness_bonus` | 鑰石 |
| [遠程刺客](veteran_snipers_focus_increased_stacks.md) / `veteran_snipers_focus_increased_stacks` | 鑰石 |
| [武器專家](veteran_weapon_switch_passive.md) / `veteran_weapon_switch_passive` | 鑰石 |
| [時刻警覺](veteran_weapon_switch_replenish_toughness.md) / `veteran_weapon_switch_replenish_toughness` | 鑰石 |
| [有備無患](veteran_weapon_switch_replenish_ammo.md) / `veteran_weapon_switch_replenish_ammo` | 鑰石 |
| [活力煥發](veteran_weapon_switch_replenish_stamina.md) / `veteran_weapon_switch_replenish_stamina` | 鑰石 |
| [鎖定目標](veteran_improved_tag.md) / `veteran_improved_tag` | 鑰石 |
| [目標擊倒！](veteran_improved_tag_dead_bonus.md) / `veteran_improved_tag_dead_bonus` | 鑰石 |
| [轉移火力！](veteran_improved_tag_dead_coherency_bonus.md) / `veteran_improved_tag_dead_coherency_bonus` | 鑰石 |
| [集中火力](veteran_improved_tag_more_damage.md) / `veteran_improved_tag_more_damage` | 鑰石 |
| [爆破小隊](veteran_aura_elite_kills_restore_grenade.md) / `veteran_aura_elite_kills_restore_grenade` | 技能 |
| [戰術裝填](veteran_faster_reload_on_non_empty_clips.md) / `veteran_faster_reload_on_non_empty_clips` | 技能 |
| [齊射能手](veteran_reload_speed_on_elite_kill.md) / `veteran_reload_speed_on_elite_kill` | 技能 |
| [堅定不移](veteran_increased_weakspot_damage.md) / `veteran_increased_weakspot_damage` | 技能 |
| [亡命之徒](veteran_increased_melee_crit_chance_and_melee_finesse.md) / `veteran_increased_melee_crit_chance_and_melee_finesse` | 技能 |
| [嗜血](veteran_all_kills_replenish_toughness.md) / `veteran_all_kills_replenish_toughness` | 技能 |
| [遊擊者](veteran_increase_damage_after_sprinting.md) / `veteran_increase_damage_after_sprinting` | 技能 |
| [趁火打劫](veteran_crits_apply_rending.md) / `veteran_crits_apply_rending` | 技能 |
| [不拋棄不放棄](veteran_movement_speed_towards_downed.md) / `veteran_movement_speed_towards_downed` | 技能 |
| [裂擊](veteran_rending_bonus.md) / `veteran_rending_bonus` | 技能 |
| [互惠互利](veteran_dodging_grants_crit.md) / `veteran_dodging_grants_crit` | 技能 |
| [靈活接敵](veteran_kill_grants_damage_to_other_slot.md) / `veteran_kill_grants_damage_to_other_slot` | 技能 |
| [鋸齒刀刃](veteran_hits_cause_bleed.md) / `veteran_hits_cause_bleed` | 技能 |
| [戰壕兵訓練](veteran_attack_speed.md) / `veteran_attack_speed` | 技能 |
| [猛攻](veteran_continous_hits_apply_rending.md) / `veteran_continous_hits_apply_rending` | 技能 |
| [韌性提升](base_toughness_node_buff_medium_2.md) / `base_toughness_node_buff_medium_2` | 技能 |
| [喘息片刻](veteran_replenish_toughness_outside_melee.md) / `veteran_replenish_toughness_outside_melee` | 技能 |
| [首輪齊射](veteran_bonus_crit_chance_on_ammo.md) / `veteran_bonus_crit_chance_on_ammo` | 技能 |
| [殺戮地帶](veteran_ranged_power_out_of_melee.md) / `veteran_ranged_power_out_of_melee` | 技能 |
| [突擊隊](veteran_no_ammo_consumption_on_lasweapon_crit.md) / `veteran_no_ammo_consumption_on_lasweapon_crit` | 技能 |
| [凋零烈焰](veteran_increased_ranged_cleave.md) / `veteran_increased_ranged_cleave` | 技能 |
| [振奮擊倒](veteran_replenish_toughness_on_weakspot_kill.md) / `veteran_replenish_toughness_on_weakspot_kill` | 技能 |
| [全副武裝](veteran_ammo_increase.md) / `veteran_ammo_increase` | 技能 |
| [天生領袖](veteran_allies_in_coherency_share_toughness_gain.md) / `veteran_allies_in_coherency_share_toughness_gain` | 技能 |
| [臨場發揮](veteran_better_deployables.md) / `veteran_better_deployables` | 技能 |
| [火力掩護](veteran_replenish_toughness_and_boost_allies.md) / `veteran_replenish_toughness_and_boost_allies` | 技能 |
| [求勝心](veteran_ally_kills_increase_damage.md) / `veteran_ally_kills_increase_damage` | 技能 |
| [擊殺紀錄](veteran_elite_kills_replenish_toughness.md) / `veteran_elite_kills_replenish_toughness` | 技能 |
| [密集隊形訓練](veteran_reduced_toughness_damage_in_coherency.md) / `veteran_reduced_toughness_damage_in_coherency` | 技能 |
| [遠射](veteran_increased_damage_based_on_range.md) / `veteran_increased_damage_based_on_range` | 技能 |
| [行雲流水](veteran_reduce_swap_time.md) / `veteran_reduce_swap_time` | 技能 |
| [死亡射手](veteran_ads_drain_stamina.md) / `veteran_ads_drain_stamina` | 技能 |
| [幹掉它！](veteran_big_game_hunter.md) / `veteran_big_game_hunter` | 技能 |
| [優越情節](veteran_increase_damage_vs_elites.md) / `veteran_increase_damage_vs_elites` | 技能 |
| [靈活應對](veteran_dodging_grants_stamina.md) / `veteran_dodging_grants_stamina` | 技能 |
| [鋼鐵意志](veteran_tdr_on_high_toughness.md) / `veteran_tdr_on_high_toughness` | 技能 |
| [荷槍實彈](veteran_clip_size.md) / `veteran_clip_size` | 技能 |
| [讓他們全趴下！](veteran_increase_suppression.md) / `veteran_increase_suppression` | 技能 |
| [秘密特工](veteran_increased_damage_when_flanking.md) / `veteran_increased_damage_when_flanking` | 技能 |
| [近戰傷害提升](base_melee_damage_node_buff_high_2.md) / `base_melee_damage_node_buff_high_2` | 技能 |
| [韌性減傷](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | 技能 |
