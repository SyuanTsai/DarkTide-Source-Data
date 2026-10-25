# 創傷(Trauma)：「惡魔之爪」劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p1_consecutive_hits_increases_stagger`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua#L512-L573)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p1_buff_templates.lua#L76-L80)。

- 適用型號：「惡魔之爪」劍 卡塔昌 Mk I、「惡魔之爪」劍 卡塔昌 Mk IV、「惡魔之爪」劍 卡塔昌 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"melee_impact_modifier_per_effective_stack": [0.14, 0.16, 0.18, 0.2], "max_effective_stacks": 5, "internal_child_max_stacks_including_placeholder": 6, "child_stack_offset": -1, "child_duration_seconds": 2, "initial_eligible_hits_for_first_effective_stack": 3, "eligible_hits_after_timeout_reset_for_first_effective_stack": 2, "timeout_rule": "last_hit_time + 2 < current_time", "timeout_armed_only_after_stack_progression": true, "refresh_at_max_stacks": true, "stagger_duration_multiplier_per_effective_stack": 1.1, "max_normal_branch_stagger_duration_multiplier": 1.61051, "conditional": "is_item_slot_wielded", "item_match": true}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
