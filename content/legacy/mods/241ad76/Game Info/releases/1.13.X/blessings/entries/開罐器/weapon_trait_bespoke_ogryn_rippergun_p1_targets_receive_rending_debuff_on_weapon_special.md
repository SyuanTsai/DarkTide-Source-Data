# 開罐器(Can Opener)：撕裂槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_rippergun_p1_targets_receive_rending_debuff_on_weapon_special`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L156-L225)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_rippergun_p1_buff_templates.lua#L17-L18)。

- 適用型號：撕裂槍 碎敵 Mk II、撕裂槍 碎敵 Mk V、撕裂槍 碎敵 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體每次10/12/14/16層；wrapper為同item與melee且保留持用gate，未檢weapon_special旗標；三標記實際melee special action均是action_stab。

- 數值：`{"target_buff_template": "rending_debuff", "target_stat_buff": "rending_multiplier", "rending_per_stack": 0.025, "rending_percent_per_stack": 2.5, "duration_seconds": 5, "duration_refresh_on_stack": true, "actual_target_stack_cap": 16, "trait_target_buff_data_default_max_stacks": 31, "proc_cooldown_seconds": null, "num_stacks_on_proc": [10, 12, 14, 16], "target_rending_added_per_proc": [0.25, 0.3, 0.35, 0.4], "rending_percent_added_per_proc": [25, 30, 35, 40], "condition": {"event": "proc_events.on_hit", "check_proc": ["attacking item matches trait item", "attack_type == melee"], "conditional_proc_func": "base is_item_slot_wielded", "held_slot_gate_in_wrapper": true, "weapon_special_flag_gate": false, "actual_special_action": "action_stab"}}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
