# 行刑者(Executor)：短刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_dual_shivs_p1_chained_weakspot_hits_increases_power`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L80-L139)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L9-L11)。

- 適用型號：短刀 臨時拼湊 型號1、短刀 臨時拼湊 型號3。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"power_level_modifier_per_stack": [0.045, 0.05, 0.055, 0.06], "display_percent_per_stack": [4.5, 5, 5.5, 6], "max_effective_stacks": 5, "max_total_modifier_by_tier": [0.225, 0.25, 0.275, 0.3], "max_total_percent_by_tier": [22.5, 25, 27.5, 30], "child_duration_seconds": 2.5, "stacks_to_remove_on_expiry": 5, "child_stack_offset": -1, "parent_placeholder_children": 1, "proc_event": "on_hit", "stack_condition": "attack_type == melee and hit_weakspot == true", "reset_condition": "A melee non-weakspot on_hit with target_index <= 1 removes all effective child stacks; later target_index body hits do not reset.", "available_tiers": null, "refreshes_at_stack_cap": true, "nonqualifying_hit_refreshes_child_timer": false, "effective_max_stacks": 5}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
