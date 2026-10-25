# 護教軍：來源文件與技術索引

[English](en/SOURCE_INDEX.md)

[返回玩家說明](README.md)｜[版本、日期與證據限制](../../../README.md)

[角色基礎效果](BASE_EFFECTS.md)｜[未直接使用的定義](UNUSED_DEFINITIONS.md)

[遊戲本體繁中描述比對](LOCALIZATION_COMPARISON.md)｜[百分比描述盤點](DAMAGE_PERCENTAGE_REVIEW.md)

固定來源 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。技能樹共 **97 個可選節點**，均為一點；同一配置最多分配 30 點。
[職業與基礎天賦](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L55-L84)；[技能樹設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L3-L10)。內部 tree version 18 不等於遊戲發行版號。

名稱沿用翻譯表；機制為固定版本的程式分析，未進行遊戲內驗證。

| 技能／程式識別碼 | 分類 |
|---|---|
| [整合型艾曼納圖斯力場](cryptic_grenade_ability_force_field.md) / `cryptic_grenade_ability_force_field` | 閃擊 |
| [滌罪伺服頭骨](cryptic_flamethrower.md) / `cryptic_flamethrower` | 閃擊 |
| [醫療伺服頭骨](cryptic_servo_skull_inject_ally.md) / `cryptic_servo_skull_inject_ally` | 閃擊 |
| [電弧手榴彈](cryptic_grenade_ability_arc_grenade.md) / `cryptic_grenade_ability_arc_grenade` | 閃擊 |
| [匠師伺服頭骨](cryptic_servo_skull_improved.md) / `cryptic_servo_skull_improved` | 閃擊 |
| [超載電弧手榴彈](cryptic_arc_grenades_brittleness.md) / `cryptic_arc_grenades_brittleness` | 閃擊 |
| [強化電弧手榴彈](cryptic_arc_grenades_weapon_malfunction.md) / `cryptic_arc_grenades_weapon_malfunction` | 閃擊 |
| [過載艾曼納圖斯力場](cryptic_force_field_duration_increase.md) / `cryptic_force_field_duration_increase` | 閃擊 |
| [動能排斥](cryptic_force_field_capacitance_restore.md) / `cryptic_force_field_capacitance_restore` | 閃擊 |
| [心智網指令](cryptic_servo_skull_improved_tagging.md) / `cryptic_servo_skull_improved_tagging` | 閃擊 |
| [電流抗性](cryptic_force_field_arcs.md) / `cryptic_force_field_arcs` | 閃擊 |
| [復甦](cryptic_coherency_regen_aura_improved.md) / `cryptic_coherency_regen_aura_improved` | 光環 |
| [彈藥存放](cryptic_ammo_aura.md) / `cryptic_ammo_aura` | 光環 |
| [碎敵信條](cryptic_aura_weapon_improved.md) / `cryptic_aura_weapon_improved` | 光環 |
| [弦爪重擊](cryptic_chordclaw.md) / `cryptic_chordclaw` | 能力 |
| [修復協定](cryptic_precision_stance_toughness_suppression.md) / `cryptic_precision_stance_toughness_suppression` | 能力 |
| [彈藥盤點之旨](cryptic_precision_stance_fire_rate_increased.md) / `cryptic_precision_stance_fire_rate_increased` | 能力 |
| [電流弧](cryptic_discharge_generates_arcs.md) / `cryptic_discharge_generates_arcs` | 能力 |
| [電能驅動](cryptic_discharge_attack_speed_increase.md) / `cryptic_discharge_attack_speed_increase` | 能力 |
| [電流超載](cryptic_discharge_toughness.md) / `cryptic_discharge_toughness` | 能力 |
| [軸向斬擊](cryptic_chordclaw_horizontal_swipe.md) / `cryptic_chordclaw_horizontal_swipe` | 能力 |
| [試探連擊](cryptic_chordclaw_quick_stab_combo.md) / `cryptic_chordclaw_quick_stab_combo` | 能力 |
| [通量導管蓄積](cryptic_crits_grant_power.md) / `cryptic_crits_grant_power` | 能力 |
| [反應爐線圈充能](cryptic_weakspot_kills_grant_power.md) / `cryptic_weakspot_kills_grant_power` | 能力 |
| [強化能量循環](cryptic_increased_passive_cooldown_regen.md) / `cryptic_increased_passive_cooldown_regen` | 能力 |
| [電容回收迴路](cryptic_multi_hits_grant_power.md) / `cryptic_multi_hits_grant_power` | 能力 |
| [電能發射器](cryptic_discharge.md) / `cryptic_discharge` | 能力 |
| [進階戰鬥教範](cryptic_precision_stance.md) / `cryptic_precision_stance` | 能力 |
| [鋼鐵富足](cryptic_chordclaw_capacitance_restoration.md) / `cryptic_chordclaw_capacitance_restoration` | 能力 |
| [千刀萬剮](cryptic_chordclaw_consecutive_bonus.md) / `cryptic_chordclaw_consecutive_bonus` | 能力 |
| [洞察之眼](cryptic_precision_stance_crit_cleave.md) / `cryptic_precision_stance_crit_cleave` | 能力 |
| [精算順序](cryptic_precision_stance_damage_on_elite_kill.md) / `cryptic_precision_stance_damage_on_elite_kill` | 能力 |
| [削切協議](cryptic_dissector.md) / `cryptic_dissector` | 鑰石 |
| [極限電容](cryptic_redline.md) / `cryptic_redline` | 鑰石 |
| [能量超載](cryptic_overload_keystone.md) / `cryptic_overload_keystone` | 鑰石 |
| [爆擊能量過載](cryptic_overload_keystone_bigger_explosion.md) / `cryptic_overload_keystone_bigger_explosion` | 鑰石 |
| [振奮過載](cryptic_overload_keystone_toughness_stamina.md) / `cryptic_overload_keystone_toughness_stamina` | 鑰石 |
| [靜電電容消耗](cryptic_overload_keystone_permastack.md) / `cryptic_overload_keystone_permastack` | 鑰石 |
| [伺服肌腱湧動](cryptic_dissector_crit_attack_speed.md) / `cryptic_dissector_crit_attack_speed` | 鑰石 |
| [熟練解剖者](cryptic_dissector_max_stacks.md) / `cryptic_dissector_max_stacks` | 鑰石 |
| [進階能量管理](cryptic_redline_strength.md) / `cryptic_redline_strength` | 鑰石 |
| [電容極限覆寫](cryptic_redline_rending.md) / `cryptic_redline_rending` | 鑰石 |
| [資源最佳化聖歌](cryptic_redline_extra_max_stacks.md) / `cryptic_redline_extra_max_stacks` | 鑰石 |
| [強化電容協議](cryptic_dissector_ability_stacks.md) / `cryptic_dissector_ability_stacks` | 鑰石 |
| [動力驅動](cryptic_overload_keystone_abilities.md) / `cryptic_overload_keystone_abilities` | 鑰石 |
| [崇高意圖](cryptic_dissector_power.md) / `cryptic_dissector_power` | 鑰石 |
| [脈衝延伸](cryptic_redline_toughness.md) / `cryptic_redline_toughness` | 鑰石 |
| [能量載分配鏈路](cryptic_crits_grant_tdr.md) / `cryptic_crits_grant_tdr` | 技能 |
| [適應性戰鬥記憶體](cryptic_dr_on_toughness_break.md) / `cryptic_dr_on_toughness_break` | 技能 |
| [閃避伺服恢復](cryptic_successful_dodge_stamina.md) / `cryptic_successful_dodge_stamina` | 技能 |
| [歐姆尼賽亞充能聖歌](cryptic_multi_hits_restore_toughness.md) / `cryptic_multi_hits_restore_toughness` | 技能 |
| [原初動力導流](cryptic_stamina_increases_damage.md) / `cryptic_stamina_increases_damage` | 技能 |
| [熵能轉移](cryptic_electrocution_toughness.md) / `cryptic_electrocution_toughness` | 技能 |
| [過載轉移晶格](cryptic_electrocution_defense.md) / `cryptic_electrocution_defense` | 技能 |
| [精準思算機同步](cryptic_weakspot_damage.md) / `cryptic_weakspot_damage` | 技能 |
| [電擊破壞協定](cryptic_pushing_grants_cleave.md) / `cryptic_pushing_grants_cleave` | 技能 |
| [輻射槽](cryptic_stacking_ranged_damage.md) / `cryptic_stacking_ranged_damage` | 技能 |
| [漸進裝甲矩陣](cryptic_stacking_tdr.md) / `cryptic_stacking_tdr` | 技能 |
| [報應導管](cryptic_damage_vs_electrocuted_scaling_on_charge.md) / `cryptic_damage_vs_electrocuted_scaling_on_charge` | 技能 |
| [電流標記陣列](cryptic_elite_kills_damage.md) / `cryptic_elite_kills_damage` | 技能 |
| [自我修復教義](cryptic_toughness_per_charge.md) / `cryptic_toughness_per_charge` | 技能 |
| [絕境中繼](cryptic_crit_chance_based_on_charge.md) / `cryptic_crit_chance_based_on_charge` | 技能 |
| [弱點分析教義](cryptic_afflicted_increased_damage.md) / `cryptic_afflicted_increased_damage` | 技能 |
| [離格動作例程](cryptic_mobile_defense.md) / `cryptic_mobile_defense` | 技能 |
| [能量溢流](cryptic_shared_toughness.md) / `cryptic_shared_toughness` | 技能 |
| [目標殲滅回饋](cryptic_stun_suppression_immune.md) / `cryptic_stun_suppression_immune` | 技能 |
| [二元彈道協議](cryptic_elite_kills_toughness.md) / `cryptic_elite_kills_toughness` | 技能 |
| [力量分配致動器](cryptic_push_stagger_stamina.md) / `cryptic_push_stagger_stamina` | 技能 |
| [卓越追蹤聖歌](cryptic_no_braced_movement_penalty.md) / `cryptic_no_braced_movement_penalty` | 技能 |
| [液壓衝擊](cryptic_better_heavies.md) / `cryptic_better_heavies` | 技能 |
| [混合戰鬥契約](cryptic_hybrid_damage.md) / `cryptic_hybrid_damage` | 技能 |
| [動能分配器](cryptic_toughness_on_damage_taken.md) / `cryptic_toughness_on_damage_taken` | 技能 |
| [無限抑制器](cryptic_melee_attacks_give_melee_attack_speed.md) / `cryptic_melee_attacks_give_melee_attack_speed` | 技能 |
| [電擊打擊導管](cryptic_melee_crits_electrocute_first.md) / `cryptic_melee_crits_electrocute_first` | 技能 |
| [槍械技師](cryptic_auto_reload.md) / `cryptic_auto_reload` | 技能 |
| [暗殺協議](cryptic_ranged_vs_bfg.md) / `cryptic_ranged_vs_bfg` | 技能 |
| [系統電擊](cryptic_electrocution_applies_brittleness.md) / `cryptic_electrocution_applies_brittleness` | 技能 |
| [彈藥預知](cryptic_ammo_reserve.md) / `cryptic_ammo_reserve` | 技能 |
| [電能修復](cryptic_coherency_toughness_on_ability.md) / `cryptic_coherency_toughness_on_ability` | 技能 |
| [救贖教範](cryptic_revive_speed_and_dr.md) / `cryptic_revive_speed_and_dr` | 技能 |
| [彈藥補給艙](cryptic_passive_ammo_replenishment.md) / `cryptic_passive_ammo_replenishment` | 技能 |
| [持續攻擊教義](cryptic_stacking_melee_damage.md) / `cryptic_stacking_melee_damage` | 技能 |
| [鍍鋅精密塗層](cryptic_stun_dr_power.md) / `cryptic_stun_dr_power` | 技能 |
| [莫比亞導體](cryptic_damage_on_ability.md) / `cryptic_damage_on_ability` | 技能 |
| [伺服核心充能引擎](cryptic_weakspot_kills_restore_toughness.md) / `cryptic_weakspot_kills_restore_toughness` | 技能 |
| [適應性戰鬥校準](cryptic_cleave_and_impact.md) / `cryptic_cleave_and_impact` | 技能 |
| [剩餘電流緩衝](cryptic_tdr_based_on_charge.md) / `cryptic_tdr_based_on_charge` | 技能 |
| [卓越防禦記憶模組](cryptic_ranged_stacking_toughness.md) / `cryptic_ranged_stacking_toughness` | 技能 |
| [標記優先聖詩](cryptic_specials_marking.md) / `cryptic_specials_marking` | 技能 |
| [守護協議](cryptic_disabled_allies_defense.md) / `cryptic_disabled_allies_defense` | 技能 |
| [數據感應協定](cryptic_ally_coherency_defenses.md) / `cryptic_ally_coherency_defenses` | 技能 |
| [序列充能](cryptic_strength_on_charge_gain.md) / `cryptic_strength_on_charge_gain` | 技能 |
| [屠殺協議](cryptic_toughness_replenishment_on_kill_bonus.md) / `cryptic_toughness_replenishment_on_kill_bonus` | 技能 |
| [精準戰鬥探測儀](cryptic_next_hit_all_damage_on_dodge.md) / `cryptic_next_hit_all_damage_on_dodge` | 技能 |
| [電流爆發](cryptic_electrocution_push.md) / `cryptic_electrocution_push` | 技能 |
| [抗腐護符](cryptic_corruption_resistance_doom.md) / `cryptic_corruption_resistance_doom` | 技能 |
| [威脅偵測指令](cryptic_ranged_kills_tdr.md) / `cryptic_ranged_kills_tdr` | 技能 |
