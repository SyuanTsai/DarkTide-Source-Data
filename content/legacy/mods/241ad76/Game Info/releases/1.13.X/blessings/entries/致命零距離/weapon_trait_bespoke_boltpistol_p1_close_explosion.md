# 致命零距離(Lethal Proximity)：爆彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_boltpistol_p1_close_explosion`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L428-L469)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L20-L32)。

- 適用型號：爆彈手槍 戈德溫–布蘭克斯 Mk IV、爆彈手槍 戈德溫–布蘭克斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"stat": "explosion_radius_modifier", "radius_bonus_by_tier": [0.1, 0.15, 0.2, 0.25], "radius_percent_by_tier": [10, 15, 20, 25], "radius_multiplier_by_tier": [1.1, 1.15, 1.2, 1.25], "wrapper_default_radius_bonus": 0.1, "tier_value_overrides_wrapper": true, "defined_tiers": ["I", "II", "III", "IV"], "generic_radius_stat_persists_while_equipped": true, "zero_arming_distance_only_when_slot_wielded": true, "explosion_arming_distance_multiplier_when_wielded": 0, "values_by_mark": {"boltpistol_p1_m1": {"name_zh_tw": "爆彈手槍 戈德溫–布蘭克斯 Mk IV", "arming_distance_m": 5, "base_explosion_radius_m": 3, "base_close_radius_m": 0.75, "radius_bonus_by_tier": [10, 15, 20, 25], "effective_explosion_radius_m": [3.3, 3.45, 3.6, 3.75], "effective_close_radius_m": [0.825, 0.8625, 0.9, 0.9375], "damage_falloff": true, "scalable_radius": false, "kill_profile": "boltpistol_kill_explosion", "stop_profile": "boltpistol_stop_explosion", "close_profile_equals_full_profile_per_template": true}, "boltpistol_p1_m2": {"name_zh_tw": "爆彈手槍 戈德溫–布蘭克斯 Mk VI", "arming_distance_m": 3, "base_explosion_radius_m": 5, "base_close_radius_m": 1.75, "radius_bonus_by_tier": [10, 15, 20, 25], "effective_explosion_radius_m": [5.5, 5.75, 6, 6.25], "effective_close_radius_m": [1.925, 2.0125, 2.1, 2.1875], "damage_falloff": true, "scalable_radius": false, "kill_profile": "boltpistol_m2_kill_explosion", "stop_profile": "boltpistol_m2_stop_explosion", "close_profile_equals_full_profile_per_template": true}}, "shared_tier_radius_percent": [10, 15, 20, 25]}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
