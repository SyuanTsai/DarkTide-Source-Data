# 歐格林：來源文件與技術索引

[English](en/SOURCE_INDEX.md)

[返回玩家說明](README.md)｜[版本、日期與證據限制](../../../README.md)

[角色基礎效果](BASE_EFFECTS.md)｜[未直接使用的定義](UNUSED_DEFINITIONS.md)

[遊戲本體繁中描述比對](LOCALIZATION_COMPARISON.md)｜[百分比描述盤點](DAMAGE_PERCENTAGE_REVIEW.md)

固定來源 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。技能樹共 **86 個可選節點**，均為一點；同一配置最多分配 30 點。
[職業與基礎天賦](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)；[技能樹設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L3-L10)。內部 tree version 25 不等於遊戲發行版號。

名稱沿用翻譯表；機制為固定版本的程式分析，未進行遊戲內驗證。

| 技能／程式識別碼 | 分類 |
|---|---|
| [投彈完畢！](ogryn_box_explodes.md) / `ogryn_box_explodes` | 閃擊 |
| [破片炸彈](ogryn_grenade_frag.md) / `ogryn_grenade_frag` | 閃擊 |
| [投石問路](ogryn_grenade_friend_rock.md) / `ogryn_grenade_friend_rock` | 閃擊 |
| [那下不算！](ogryn_replenish_rock_on_miss.md) / `ogryn_replenish_rock_on_miss` | 閃擊 |
| [超巨量傷害箱](ogryn_big_box_of_hurt_more_bombs.md) / `ogryn_big_box_of_hurt_more_bombs` | 閃擊 |
| [破骨者之環](ogryn_melee_damage_coherency_improved.md) / `ogryn_melee_damage_coherency_improved` | 光環 |
| [優勝劣汰](ogryn_damage_vs_suppressed_coherency.md) / `ogryn_damage_vs_suppressed_coherency` | 光環 |
| [跟緊我！](ogryn_toughness_regen_aura.md) / `ogryn_toughness_regen_aura` | 光環 |
| [忠誠守護者](ogryn_taunt_shout.md) / `ogryn_taunt_shout` | 能力 |
| [不屈不撓](ogryn_longer_charge.md) / `ogryn_longer_charge` | 能力 |
| [貼身火力](ogryn_special_ammo.md) / `ogryn_special_ammo` | 能力 |
| [跺殺之靴](ogryn_charge_toughness.md) / `ogryn_charge_toughness` | 能力 |
| [粉碎](ogryn_charge_applies_bleed.md) / `ogryn_charge_applies_bleed` | 能力 |
| [再來](ogryn_taunt_staggers_reduce_cooldown.md) / `ogryn_taunt_staggers_reduce_cooldown` | 能力 |
| [槍林彈雨](ogryn_special_ammo_armor_pen.md) / `ogryn_special_ammo_armor_pen` | 能力 |
| [集火射擊](ogryn_special_ammo_fire_shots.md) / `ogryn_special_ammo_fire_shots` | 能力 |
| [重要干擾](ogryn_taunt_damage_taken_increase.md) / `ogryn_taunt_damage_taken_increase` | 能力 |
| [壯膽子彈](ogryn_ranged_stance_toughness_regen.md) / `ogryn_ranged_stance_toughness_regen` | 能力 |
| [一點都不痛！](ogryn_taunt_restore_toughness.md) / `ogryn_taunt_restore_toughness` | 能力 |
| [踐踏](ogryn_charge_trample.md) / `ogryn_charge_trample` | 能力 |
| [爆限超載](ogryn_leadbelcher_no_ammo_chance.md) / `ogryn_leadbelcher_no_ammo_chance` | 鑰石 |
| [麻木](ogryn_carapace_armor.md) / `ogryn_carapace_armor` | 鑰石 |
| [重拳出擊](ogryn_passive_heavy_hitter.md) / `ogryn_passive_heavy_hitter` | 鑰石 |
| [痛楚爆發](ogryn_carapace_armor_trigger_on_zero_stacks.md) / `ogryn_carapace_armor_trigger_on_zero_stacks` | 鑰石 |
| [最強壯！](ogryn_carapace_armor_add_stack_on_push.md) / `ogryn_carapace_armor_add_stack_on_push` | 鑰石 |
| [最堅韌！](ogryn_carapace_armor_more_toughness.md) / `ogryn_carapace_armor_more_toughness` | 鑰石 |
| [最大火力](ogryn_leadbelcher_cooldown_reduction.md) / `ogryn_leadbelcher_cooldown_reduction` | 鑰石 |
| [好槍法](ogryn_leadbelcher_crits.md) / `ogryn_leadbelcher_crits` | 鑰石 |
| [子彈風暴](ogryn_blo_ally_ranged_buffs.md) / `ogryn_blo_ally_ranged_buffs` | 鑰石 |
| [激鬥戰火](ogryn_blo_wield_speed.md) / `ogryn_blo_wield_speed` | 鑰石 |
| [退後！](ogryn_blo_melee.md) / `ogryn_blo_melee` | 鑰石 |
| [毫髮無傷](ogryn_heavy_hitter_tdr.md) / `ogryn_heavy_hitter_tdr` | 鑰石 |
| [強力劈砍](ogryn_heavy_hitter_cleave.md) / `ogryn_heavy_hitter_cleave` | 鑰石 |
| [越戰越勇](ogryn_heavy_hitter_max_stacks_improves_toughness.md) / `ogryn_heavy_hitter_max_stacks_improves_toughness` | 鑰石 |
| [震撼衝擊](ogryn_heavy_hitter_stagger.md) / `ogryn_heavy_hitter_stagger` | 鑰石 |
| [熱身完畢](ogryn_heavy_hitter_max_stacks_improves_attack_speed.md) / `ogryn_heavy_hitter_max_stacks_improves_attack_speed` | 鑰石 |
| [最好的防禦](ogryn_multi_heavy_toughness.md) / `ogryn_multi_heavy_toughness` | 技能 |
| [碾碎它們！](ogryn_single_heavy_toughness.md) / `ogryn_single_heavy_toughness` | 技能 |
| [關鍵人物](ogryn_increased_coherency_toughness.md) / `ogryn_increased_coherency_toughness` | 技能 |
| [射不停](ogryn_reload_speed_on_empty.md) / `ogryn_reload_speed_on_empty` | 技能 |
| [怒不可遏](ogryn_more_hits_more_damage.md) / `ogryn_more_hits_more_damage` | 技能 |
| [重量級](ogryn_ogryn_killer.md) / `ogryn_ogryn_killer` | 技能 |
| [猛擊](ogryn_melee_stagger.md) / `ogryn_melee_stagger` | 技能 |
| [削弱敵人](ogryn_targets_recieve_damage_taken_increase_debuff.md) / `ogryn_targets_recieve_damage_taken_increase_debuff` | 技能 |
| [堅韌不屈](ogryn_toughness_on_low_health.md) / `ogryn_toughness_on_low_health` | 技能 |
| [重毆](ogryn_heavy_bleeds.md) / `ogryn_heavy_bleeds` | 技能 |
| [沉重打擊](ogryn_staggering_increases_damage.md) / `ogryn_staggering_increases_damage` | 技能 |
| [勢不可擋](ogryn_movement_speed_after_ranged_kills.md) / `ogryn_movement_speed_after_ranged_kills` | 技能 |
| [彈藥儲存包](ogryn_increased_ammo_reserve.md) / `ogryn_increased_ammo_reserve` | 技能 |
| [領跑者](ogryn_multi_hits_grant_reload_speed.md) / `ogryn_multi_hits_grant_reload_speed` | 技能 |
| [發現更多](ogryn_free_reload_after_ability.md) / `ogryn_free_reload_after_ability` | 技能 |
| [絕不屈服](ogryn_knocked_allies_grant_damage_reduction.md) / `ogryn_knocked_allies_grant_damage_reduction` | 技能 |
| [嘎嘎！](ogryn_fully_charged_attacks_gain_damage_and_stagger.md) / `ogryn_fully_charged_attacks_gain_damage_and_stagger` | 技能 |
| [毀滅之樂](ogryn_nearby_bleeds_reduce_damage_taken.md) / `ogryn_nearby_bleeds_reduce_damage_taken` | 技能 |
| [韌性減傷](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | 技能 |
| [相親相愛好夥伴！](ogryn_damage_taken_by_all_increases_strength_tdr.md) / `ogryn_damage_taken_by_all_increases_strength_tdr` | 技能 |
| [全神貫注](ogryn_ally_movement_boost_on_ability.md) / `ogryn_ally_movement_boost_on_ability` | 技能 |
| [利刃出鞘](ogryn_windup_reduces_damage_taken.md) / `ogryn_windup_reduces_damage_taken` | 技能 |
| [誰敢攔我！](ogryn_windup_is_uninterruptible.md) / `ogryn_windup_is_uninterruptible` | 技能 |
| [屠殺](ogryn_kills_grant_crit_chance.md) / `ogryn_kills_grant_crit_chance` | 技能 |
| [報復時間](ogryn_revenge_damage.md) / `ogryn_revenge_damage` | 技能 |
| [主宰](ogryn_rending_on_elite_kills.md) / `ogryn_rending_on_elite_kills` | 技能 |
| [換彈完畢](ogryn_reloading_grants_damage.md) / `ogryn_reloading_grants_damage` | 技能 |
| [大爆炸](ogryn_increase_explosion_radius.md) / `ogryn_increase_explosion_radius` | 技能 |
| [睚眥必報](ogryn_blocking_reduces_push_cost.md) / `ogryn_blocking_reduces_push_cost` | 技能 |
| [渴求關注](ogryn_blocking_ranged_taunts.md) / `ogryn_blocking_ranged_taunts` | 技能 |
| [為了小子們](ogryn_protect_allies.md) / `ogryn_protect_allies` | 技能 |
| [頭腦簡單](ogryn_corruption_resistance.md) / `ogryn_corruption_resistance` | 技能 |
| [專注鬥士](ogryn_melee_attacks_give_mtdr.md) / `ogryn_melee_attacks_give_mtdr` | 技能 |
| [蠻橫之力](ogryn_pushing_applies_brittleness.md) / `ogryn_pushing_applies_brittleness` | 技能 |
| [火力全開](ogryn_explosions_burn.md) / `ogryn_explosions_burn` | 技能 |
| [堅不可摧](ogryn_block_all_attacks.md) / `ogryn_block_all_attacks` | 技能 |
| [士氣高昂](ogryn_damage_reduction_on_high_stamina.md) / `ogryn_damage_reduction_on_high_stamina` | 技能 |
| [好運連連](ogryn_crit_damage_increase.md) / `ogryn_crit_damage_increase` | 技能 |
| [狂暴猛擊](ogryn_stacking_attack_speed.md) / `ogryn_stacking_attack_speed` | 技能 |
| [擊潰他們](ogryn_melee_damage_after_heavy.md) / `ogryn_melee_damage_after_heavy` | 技能 |
| [專注](ogryn_drain_stamina_for_handling.md) / `ogryn_drain_stamina_for_handling` | 技能 |
| [大肌肌](ogryn_damage_reduction_after_elite_kill.md) / `ogryn_damage_reduction_after_elite_kill` | 技能 |
| [穩定握持](ogryn_toughness_while_bracing.md) / `ogryn_toughness_while_bracing` | 技能 |
| [休想再打中我......](ogryn_ranged_damage_immunity.md) / `ogryn_ranged_damage_immunity` | 技能 |
| [熟能生巧](ogryn_wield_speed_increase.md) / `ogryn_wield_speed_increase` | 技能 |
| [射盡殺戮](ogryn_ranged_improves_melee.md) / `ogryn_ranged_improves_melee` | 技能 |
| [猛砸爆裂](ogryn_melee_improves_ranged.md) / `ogryn_melee_improves_ranged` | 技能 |
| [格鬥兵](ogryn_ally_elite_kills_grant_cooldown.md) / `ogryn_ally_elite_kills_grant_cooldown` | 技能 |
| [精準打擊](ogryn_weakspot_damage.md) / `ogryn_weakspot_damage` | 技能 |
| [機動部署](ogryn_bracing_reduces_damage_taken.md) / `ogryn_bracing_reduces_damage_taken` | 技能 |
