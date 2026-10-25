# 破碎衝擊(Shattering Impact)：電漿槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_plasmagun_p1_targets_receive_rending_debuff`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L41-L110)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L15-L16)。

- 適用型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_stacks_on_proc_by_tier": [1, 2, 3, 4], "rending_per_target_stack": 0.025, "target_debuff_duration_seconds": 5, "target_debuff_max_stacks": 16, "target_debuff_max_rending_from_this_buff": 0.4, "refresh_duration_when_stacking": true, "proc_condition": "matching trait item and (attack_type == ranged or damage_profile.count_as_ranged_attack == true); active for the wielded item", "bound_weapon_routes": {"bolter_p1_m1_m2": "direct hits qualify; bolt-shell stop/kill explosions fail the ranged gate", "ogryn_gauntlet_p1_m1": "direct projectile impact, normal grenade explosion and special explosive-punch explosion qualify; direct melee/punch fails the ranged gate", "ogryn_thumper_p1_m2": "direct impact and instant blast qualify; both explosion profiles set count_as_ranged_attack=true", "plasmagun_p1_m1_m2": "direct hitscan qualifies; plasma overheat explosion fails the ranged gate"}, "available_tiers": null}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
