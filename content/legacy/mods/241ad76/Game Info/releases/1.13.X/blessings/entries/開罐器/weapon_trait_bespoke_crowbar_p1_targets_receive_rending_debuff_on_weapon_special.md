# 開罐器(Can Opener)：撬棍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_crowbar_p1_targets_receive_rending_debuff_on_weapon_special`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L545-L614)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L108-L122)。

- 適用型號：撬棍 科技教士 型號6。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體每次1/2/3/4層；wrapper覆寫為同item、melee、damage_type不等於blunt，並讀proc當下的special_active，沒有持用gate；模式在unwield時保留。

- 數值：`{"target_buff_template": "rending_debuff", "target_stat_buff": "rending_multiplier", "rending_per_stack": 0.025, "rending_percent_per_stack": 2.5, "duration_seconds": 5, "duration_refresh_on_stack": true, "actual_target_stack_cap": 16, "trait_target_buff_data_default_max_stacks": 31, "proc_cooldown_seconds": null, "num_stacks_on_proc": [1, 2, 3, 4], "target_rending_added_per_proc": [0.025, 0.05, 0.075, 0.1], "rending_percent_added_per_proc": [2.5, 5, 7.5, 10], "condition": {"event": "proc_events.on_hit", "check_proc": ["attacking item matches trait item", "attack_type == melee", "damage_type != blunt"], "conditional_proc_func": "ConditionalFunctions.melee_weapon_special_active", "held_slot_gate_in_wrapper": false, "weapon_special_flag_gate": false}}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
