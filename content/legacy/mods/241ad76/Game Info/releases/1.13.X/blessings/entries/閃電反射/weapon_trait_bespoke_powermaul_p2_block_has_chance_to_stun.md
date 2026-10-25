# 閃電反射(Lightning Reflexes)：法務官電擊鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p2_block_has_chance_to_stun`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L540-L599)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L53-L89)。

- 適用型號：法務官電擊鎚 布蘭克斯 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"melee_power_level_modifier": [0.1, 0.15, 0.2, 0.25], "effective_active_stacks": 1, "initial_hidden_stack_count": 1, "active_hidden_stack_count": 2, "stack_offset": -1, "proc_chance": 1, "enemy_stun_duration_seconds": 3, "stun_interval_seconds_range": [0.3, 0.8], "stun_profile_attack_power_distribution": 8, "stun_profile_impact_power_distribution": 100, "base_perfect_block_window_seconds": 0.3, "duration_and_retrigger_lockout_seconds": 3}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
