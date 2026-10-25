# 巢都渣滓：來源文件與技術索引

[English](en/SOURCE_INDEX.md)

[返回玩家說明](README.md)｜[版本、日期與證據限制](../../../README.md)

[角色基礎效果](BASE_EFFECTS.md)｜[未直接使用的定義](UNUSED_DEFINITIONS.md)

[遊戲本體繁中描述比對](LOCALIZATION_COMPARISON.md)｜[百分比描述盤點](DAMAGE_PERCENTAGE_REVIEW.md)

固定來源 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。技能樹共 **79 個可選節點**，均為一點；同一配置最多分配 30 點。
[職業與基礎天賦](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L50-L74)；[技能樹設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L3-L10)。內部 tree version 15 不等於遊戲發行版號。

興奮劑配方樹另有獨立30點額度，每項成本1～5點且各只購買一次。
名稱沿用翻譯表；機制為固定版本的程式分析，未進行遊戲內驗證。

| 技能／程式識別碼 | 分類 |
|---|---|
| [擊暈](broker_blitz_flash_grenade_improved.md) / `broker_blitz_flash_grenade_improved` | 閃擊 |
| [炸彈使者](broker_blitz_missile_launcher.md) / `broker_blitz_missile_launcher` | 閃擊 |
| [化學手榴彈](broker_blitz_tox_grenade.md) / `broker_blitz_tox_grenade` | 閃擊 |
| [精進神射手](broker_aura_gunslinger_improved.md) / `broker_aura_gunslinger_improved` | 光環 |
| [惡棍](broker_coherency_melee_damage.md) / `broker_coherency_melee_damage` | 光環 |
| [無政府主義者](broker_coherency_anarchist.md) / `broker_coherency_anarchist` | 光環 |
| [強化亡命之徒](broker_ability_focus_improved.md) / `broker_ability_focus_improved` | 能力 |
| [化學性依賴](broker_ability_stimm_field.md) / `broker_ability_stimm_field` | 能力 |
| [橫衝直撞！](broker_ability_punk_rage.md) / `broker_ability_punk_rage` | 能力 |
| [熔爐怒吼](broker_ability_punk_rage_sub_2.md) / `broker_ability_punk_rage_sub_2` | 能力 |
| [凝聚殺意](broker_ability_punk_rage_sub_1.md) / `broker_ability_punk_rage_sub_1` | 能力 |
| [沸騰之血](broker_ability_punk_rage_sub_3.md) / `broker_ability_punk_rage_sub_3` | 能力 |
| [碎骨打擊](broker_ability_punk_rage_sub_4.md) / `broker_ability_punk_rage_sub_4` | 能力 |
| [專注凝神](broker_ability_focus_sub_3.md) / `broker_ability_focus_sub_3` | 能力 |
| [精準獵殺](broker_ability_focus_sub_2.md) / `broker_ability_focus_sub_2` | 能力 |
| [熟練部署](broker_ability_stimm_field_sub_3.md) / `broker_ability_stimm_field_sub_3` | 能力 |
| [速效型興奮劑](broker_ability_stimm_field_sub_1.md) / `broker_ability_stimm_field_sub_1` | 能力 |
| [毒性陷阱](broker_ability_stimm_field_sub_2.md) / `broker_ability_stimm_field_sub_2` | 能力 |
| [靈巧](broker_passive_improved_dodges.md) / `broker_passive_improved_dodges` | 鑰石 |
| [腎上腺素狂暴](broker_keystone_adrenaline_junkie.md) / `broker_keystone_adrenaline_junkie` | 鑰石 |
| [兀鷲印記](broker_keystone_vultures_mark_on_kill.md) / `broker_keystone_vultures_mark_on_kill` | 鑰石 |
| [化學性依賴](broker_keystone_chemical_dependency.md) / `broker_keystone_chemical_dependency` | 鑰石 |
| [化學強化](broker_keystone_chemical_dependency_sub_1.md) / `broker_keystone_chemical_dependency_sub_1` | 鑰石 |
| [化學增強](broker_keystone_chemical_dependency_sub_2.md) / `broker_keystone_chemical_dependency_sub_2` | 鑰石 |
| [化學藥劑全開](broker_keystone_chemical_dependency_sub_3.md) / `broker_keystone_chemical_dependency_sub_3` | 鑰石 |
| [兀鷲推擊](broker_keystone_vultures_mark_aoe_stagger.md) / `broker_keystone_vultures_mark_aoe_stagger` | 鑰石 |
| [堅毅獵手](broker_keystone_vultures_mark_increased_duration.md) / `broker_keystone_vultures_mark_increased_duration` | 鑰石 |
| [兀鷲閃避](broker_keystone_vultures_mark_dodge_on_ranged_crit.md) / `broker_keystone_vultures_mark_dodge_on_ranged_crit` | 鑰石 |
| [腎上腺素刺客](broker_keystone_adrenaline_junkie_sub_1.md) / `broker_keystone_adrenaline_junkie_sub_1` | 鑰石 |
| [振奮怒火](broker_keystone_adrenaline_junkie_sub_3.md) / `broker_keystone_adrenaline_junkie_sub_3` | 鑰石 |
| [腎上腺素突破](broker_keystone_adrenaline_junkie_sub_5.md) / `broker_keystone_adrenaline_junkie_sub_5` | 鑰石 |
| [失控攻擊](broker_keystone_adrenaline_junkie_sub_4.md) / `broker_keystone_adrenaline_junkie_sub_4` | 鑰石 |
| [腎上腺素懲戒者](broker_keystone_adrenaline_junkie_sub_2.md) / `broker_keystone_adrenaline_junkie_sub_2` | 鑰石 |
| [過街老鼠](broker_passive_longer_dodges.md) / `broker_passive_longer_dodges` | 鑰石 |
| [快速且致命](broker_passive_close_range_damage_on_dodge.md) / `broker_passive_close_range_damage_on_dodge` | 技能 |
| [特提恩是迎賓](broker_passive_first_target_damage.md) / `broker_passive_first_target_damage` | 技能 |
| [打你的臉](broker_passive_close_ranged_damage.md) / `broker_passive_close_ranged_damage` | 技能 |
| [精準暴力](broker_passive_restore_toughness_on_weakspot_kill.md) / `broker_passive_restore_toughness_on_weakspot_kill` | 技能 |
| [特提恩之聲](broker_passive_restore_toughness_on_close_ranged_kill.md) / `broker_passive_restore_toughness_on_close_ranged_kill` | 技能 |
| [翩翩蝶舞](broker_passive_ninja_grants_crit_chance.md) / `broker_passive_ninja_grants_crit_chance` | 技能 |
| [快速裝填](broker_passive_reload_speed_on_close_kill.md) / `broker_passive_reload_speed_on_close_kill` | 技能 |
| [能量爆發](broker_passive_stun_immunity_on_toughness_broken.md) / `broker_passive_stun_immunity_on_toughness_broken` | 技能 |
| [韌性增幅](base_toughness_node_buff_medium_1.md) / `base_toughness_node_buff_medium_1` | 技能 |
| [恢復姿態](broker_passive_stamina_on_successful_dodge.md) / `broker_passive_stamina_on_successful_dodge` | 技能 |
| [奧客](broker_passive_dodge_melee_on_slide.md) / `broker_passive_dodge_melee_on_slide` | 技能 |
| [沒甚麼，只是擦傷](broker_passive_replenish_toughness_on_ranged_toughness_damage.md) / `broker_passive_replenish_toughness_on_ranged_toughness_damage` | 技能 |
| [狂轟猛射](broker_passive_damage_on_reload.md) / `broker_passive_damage_on_reload` | 技能 |
| [堅韌疾速](broker_passive_stamina_grants_atk_speed.md) / `broker_passive_stamina_grants_atk_speed` | 技能 |
| [加重背刺](broker_passive_ramping_backstabs.md) / `broker_passive_ramping_backstabs` | 技能 |
| [移動目標](broker_passive_increased_ranged_dodges.md) / `broker_passive_increased_ranged_dodges` | 技能 |
| [樣本採集](broker_passive_stimm_cd_on_kill.md) / `broker_passive_stimm_cd_on_kill` | 技能 |
| [神經質](broker_passive_improved_dodges_at_full_stamina.md) / `broker_passive_improved_dodges_at_full_stamina` | 技能 |
| [暴擊幾率增幅](base_crit_chance_node_buff_low_1.md) / `base_crit_chance_node_buff_low_1` | 技能 |
| [近戰增幅](base_melee_damage_node_buff_medium_1.md) / `base_melee_damage_node_buff_medium_1` | 技能 |
| [強效毒藥](base_toxin_power_boost_1.md) / `base_toxin_power_boost_1` | 技能 |
| [黏黏手](broker_passive_reduce_swap_time.md) / `broker_passive_reduce_swap_time` | 技能 |
| [請求暫停](broker_passive_reduced_toughness_damage_during_reload.md) / `broker_passive_reduced_toughness_damage_during_reload` | 技能 |
| [街頭硬漢](broker_passive_knockback_on_taking_melee_damage.md) / `broker_passive_knockback_on_taking_melee_damage` | 技能 |
| [蓄力殲滅](broker_passive_crit_grants_damage.md) / `broker_passive_crit_grants_damage` | 技能 |
| [猛烈劈擊](broker_passive_melee_cleave_on_melee_kill.md) / `broker_passive_melee_cleave_on_melee_kill` | 技能 |
| [超暴力](broker_passive_melee_damage_carry_over.md) / `broker_passive_melee_damage_carry_over` | 技能 |
| [劇毒菌株](broker_passive_toxin_infected_enemies_take_increased_damage.md) / `broker_passive_toxin_infected_enemies_take_increased_damage` | 技能 |
| [毒藥狂熱](broker_passive_damage_after_toxined_enemies.md) / `broker_passive_damage_after_toxined_enemies` | 技能 |
| [連帶傷害](broker_passive_toxin_spread_on_kills.md) / `broker_passive_toxin_spread_on_kills` | 技能 |
| [額外彈藥袋](broker_passive_increased_blitz_ammo.md) / `broker_passive_increased_blitz_ammo` | 技能 |
| [塗讀武裝](broker_passive_melee_attacks_apply_toxin.md) / `broker_passive_melee_attacks_apply_toxin` | 技能 |
| [隨身毒素](broker_passive_blitz_inflicts_toxin.md) / `broker_passive_blitz_inflicts_toxin` | 技能 |
| [精準投毒](broker_passive_reduced_damage_by_toxined.md) / `broker_passive_reduced_damage_by_toxined` | 技能 |
| [毒性再生](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md) / `broker_passive_replenish_toughness_while_toxined_enemies_in_proximity` | 技能 |
| [軍火商](broker_passive_extended_mag.md) / `broker_passive_extended_mag` | 技能 |
| [趁人之危](broker_passive_damage_vs_heavy_staggered.md) / `broker_passive_damage_vs_heavy_staggered` | 技能 |
| [心狠手辣](broker_passive_melee_crit_instakill.md) / `broker_passive_melee_crit_instakill` | 技能 |
| [以小搏大](broker_passive_damage_vs_elites_monsters.md) / `broker_passive_damage_vs_elites_monsters` | 技能 |
| [甜蜜點](broker_passive_increased_weakspot_damage.md) / `broker_passive_increased_weakspot_damage` | 技能 |
| [延長藥效](broker_passive_stimm_increased_duration.md) / `broker_passive_stimm_increased_duration` | 技能 |
| [神佑興奮劑](broker_passive_stimm_cleanse_on_kill.md) / `broker_passive_stimm_cleanse_on_kill` | 技能 |
| [巢都格鬥家](broker_passive_dr_damage_tradeoff_on_stamina.md) / `broker_passive_dr_damage_tradeoff_on_stamina` | 技能 |
| [順手牽羊](broker_passive_low_ammo_regen.md) / `broker_passive_low_ammo_regen` | 技能 |
| [趁勝追擊](broker_passive_cleave_on_cleave.md) / `broker_passive_cleave_on_cleave` | 技能 |
| [裝備財閥特殊裝備](broker_stimm_activation_talent.md) / `broker_stimm_activation_talent` | 興奮劑配方 |
| [野火I](broker_stimm_combat_1.md) / `broker_stimm_combat_1` | 興奮劑配方 |
| [野火IV](broker_stimm_combat_4a.md) / `broker_stimm_combat_4a` | 興奮劑配方 |
| [野火II](broker_stimm_combat_2.md) / `broker_stimm_combat_2` | 興奮劑配方 |
| [野火III](broker_stimm_combat_3.md) / `broker_stimm_combat_3` | 興奮劑配方 |
| [狂怒I](broker_stimm_combat_4b.md) / `broker_stimm_combat_4b` | 興奮劑配方 |
| [狂怒II](broker_stimm_combat_5b.md) / `broker_stimm_combat_5b` | 興奮劑配方 |
| [野火V](broker_stimm_combat_5a.md) / `broker_stimm_combat_5a` | 興奮劑配方 |
| [獵鷹蕈劑I](broker_stimm_combat_4c.md) / `broker_stimm_combat_4c` | 興奮劑配方 |
| [獵鷹蕈劑II](broker_stimm_combat_5c.md) / `broker_stimm_combat_5c` | 興奮劑配方 |
| [抗焦慮藥I](broker_stimm_concentration_1.md) / `broker_stimm_concentration_1` | 興奮劑配方 |
| [抗焦慮藥II](broker_stimm_concentration_2.md) / `broker_stimm_concentration_2` | 興奮劑配方 |
| [抗焦慮藥III](broker_stimm_concentration_3.md) / `broker_stimm_concentration_3` | 興奮劑配方 |
| [抗焦慮藥IV](broker_stimm_concentration_4.md) / `broker_stimm_concentration_4` | 興奮劑配方 |
| [抗焦慮藥V](broker_stimm_concentration_5a.md) / `broker_stimm_concentration_5a` | 興奮劑配方 |
| [彈幕I](broker_stimm_durability_1.md) / `broker_stimm_durability_1` | 興奮劑配方 |
| [彈幕II](broker_stimm_durability_2.md) / `broker_stimm_durability_2` | 興奮劑配方 |
| [彈幕III](broker_stimm_durability_3.md) / `broker_stimm_durability_3` | 興奮劑配方 |
| [彈幕IV](broker_stimm_durability_4.md) / `broker_stimm_durability_4` | 興奮劑配方 |
| [坦克](broker_stimm_durability_5a.md) / `broker_stimm_durability_5a` | 興奮劑配方 |
| [激勵I](broker_stimm_celerity_1.md) / `broker_stimm_celerity_1` | 興奮劑配方 |
| [狂熱](broker_stimm_celerity_5c.md) / `broker_stimm_celerity_5c` | 興奮劑配方 |
| [激勵II](broker_stimm_celerity_2.md) / `broker_stimm_celerity_2` | 興奮劑配方 |
| [激勵III](broker_stimm_celerity_3.md) / `broker_stimm_celerity_3` | 興奮劑配方 |
| [激勵IV](broker_stimm_celerity_4.md) / `broker_stimm_celerity_4` | 興奮劑配方 |
| [激勵V](broker_stimm_celerity_5a.md) / `broker_stimm_celerity_5a` | 興奮劑配方 |
| [恢復](broker_stimm_durability_5b.md) / `broker_stimm_durability_5b` | 興奮劑配方 |
| [狂熱](broker_stimm_concentration_5b.md) / `broker_stimm_concentration_5b` | 興奮劑配方 |
| [集中藥](broker_stimm_concentration_5c.md) / `broker_stimm_concentration_5c` | 興奮劑配方 |
| [反射](broker_stimm_celerity_5b.md) / `broker_stimm_celerity_5b` | 興奮劑配方 |

## 圖示來源

[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12)

圖片僅供技能辨識，不作機制證據。

