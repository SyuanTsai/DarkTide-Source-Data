# 偏轉(Deflector)：烈焰力場巨劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_2h_p1_can_block_ranged`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L93-L135)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L22)。

- 適用型號：烈焰力場巨劍 誓約 Mk VI、烈焰力場巨劍 誓約 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"values_scope": "One bound trait variant, shared by the two forcesword_2h_p1 marks.", "source_available_tiers_in_inventory": null, "block_cost_multiplier_by_tier": [0.775, 0.75, 0.725, 0.7], "block_cost_reduction_percent_by_tier": [22.5, 25, 27.5, 30], "active_condition": "The weapon item slot must be wielded and the player must be blocking.", "default_inner_block_angle_radians": "0.33*pi single-side angle; +/-59.4 degrees, total118.8 degrees", "default_outer_block_angle_radians": "pi", "linesman_rangedblock_cost": {"ranged_inner_lerp_basic": 0.75, "ranged_inner_lerp_perfect": 0.25, "ranged_outer": null, "default_inner_lerp_basic": 1, "default_inner_lerp_perfect": 0.5, "default_outer_lerp_basic": 3, "default_outer_lerp_perfect": 1}, "ranged_outer_cost_behavior": "No outer ranged cost exists; Block.is_blocking rejects a ranged attack when the angle is outside inner because the selected ranged block-cost entry is nil.", "other_stat_buffs": "The block consumer multiplies the generic block-cost multiplier/modifier and, for ranged attacks, the ranged-specific multiplier/modifier. No specific skill or equipment provider is attributed here.", "total_ranged_block_cone_degrees": 118.8, "block_cost_stat_condition": "item slot wielded; tier override applied through base conditional_stat_buffs", "ranged_keyword_condition": "item slot wielded (conditional keyword fallback gate)", "template_lerp_endpoints_are_not_perfect_block_costs": true, "resolved_ranged_inner_cost": 0.5, "ranged_inner_fallback_lerp": 0.5, "resolved_ranged_inner_cost_after_tier": [0.3875, 0.375, 0.3625, 0.35], "actual_ranged_block_condition": "blocking state and ranged keyword then angle/cost/profile gates"}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
