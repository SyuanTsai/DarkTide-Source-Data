# 破片四濺(Shrapnel)：震盪槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p2_close_explosion_applies_bleed`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L292-L330)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L31-L70)。

- 適用型號：震盪槍 洛倫茲 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_stacks_on_proc_by_tier": [1, 2, 3, 4], "defined_tiers": ["I", "II", "III", "IV"], "conditional": "is_item_slot_wielded", "exact_close_damage_profile_gate": "ogryn_thumper_p1_m2_close_instant", "trait_helper_max_stacks": 31, "actual_bleed_max_stacks": 16, "actual_bleed_max_stacks_cap": 16, "bleed_duration_seconds": 1.5, "bleed_tick_interval_seconds": 0.5, "bleed_refresh_duration_on_stack": true, "bleed_interval_stack_removal": true, "bleed_power_by_stacks": {"4": 78.125, "16": 500}}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
