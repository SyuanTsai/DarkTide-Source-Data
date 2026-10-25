# 憤怒(Wrath)：骨鋸實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_saw_p1_chained_hits_increases_melee_cleave`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L480-L531)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L66-L70)。

- 適用型號：骨鋸 外科醫師 型號4。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"proc_chance": 1.0, "proc_event": "on_sweep_finish", "success_condition": "num_hit_units > 0", "effective_stacks_added_per_successful_sweep": 1, "effective_stack_cap": 5, "initial_hidden_child_stack_count": 1, "child_template_max_stacks": 5, "child_stack_offset": -1, "internal_child_stack_limit": 6, "child_duration_seconds": 3.5, "refresh_timer_on_each_successful_add": true, "miss_clears_effective_stacks": true, "expiry_removes_active_stacks_together": true, "decay_update_condition": "remove_t < t; next server update after 3.5 seconds", "stat_key": "max_hit_mass_attack_modifier", "stat_type": "additive_multiplier", "cleave_hit_mass_only": true, "affects_impact_mass": false, "wielded_item_slot_required": true, "refresh_timer_on_successful_sweep_even_at_cap": true, "tier_cleave_bonus_percent": {"I": 10, "II": 15, "III": 20, "IV": 25}, "tier_cleave_bonus_fraction": {"I": 0.1, "II": 0.15, "III": 0.2, "IV": 0.25}, "max_hit_mass_attack_modifier_multiplier_at_cap": {"I": 1.5, "II": 1.75, "III": 2.0, "IV": 2.25}, "max_hit_mass_attack_modifier": [0.1, 0.15, 0.2, 0.25], "full_stack_bonus_percent": [50, 75, 100, 125]}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
