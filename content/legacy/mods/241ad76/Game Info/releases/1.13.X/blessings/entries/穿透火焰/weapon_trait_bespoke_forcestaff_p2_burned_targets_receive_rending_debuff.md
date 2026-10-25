# 穿透火焰(Penetrating Flame)：烈焰力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p2_burned_targets_receive_rending_debuff`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L273-L342)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L43)。

- 適用型號：烈焰力場法杖 裂隙避難所 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體短按火焰爆發與蓄力火焰攻擊的直接命中都走同一FlamerAction.damage_target；蓄力本身與燃燒DoT跳傷不觸發。

- 數值：`{"target_buff_template": "rending_burn_debuff", "target_stat_buff": "rending_multiplier", "num_stacks_on_proc": [1, 2, 3, 4], "rending_per_stack": 0.01, "rending_percent_per_stack": 1, "target_rending_added_per_proc": [0.01, 0.02, 0.03, 0.04], "duration_seconds": 5, "duration_refresh_on_stack": true, "actual_target_stack_cap": 20, "trait_target_buff_data_max_stacks": 31, "proc_chance": 1, "proc_cooldown_seconds": null, "condition": {"event": "proc_events.on_direct_flamer_hit", "conditional_proc_func": "ConditionalFunctions.is_item_slot_wielded", "check_proc_func": "CheckProcFunctions.attacked_unit_is_minion", "requires_target_alive_and_buff_extension": true, "requires_target_already_burning": false, "requires_damage_over_time_tick": false, "requires_charge": false}}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
