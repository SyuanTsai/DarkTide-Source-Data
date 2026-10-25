# 飛鏢彈(Flechette)：雙管霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p2_bleed_on_crit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L219-L257)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L22)。

- 適用型號：雙管霰彈槍 十字星 Mk XI、雙管霰彈槍 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_stacks_on_proc": [3, 4, 5, 6], "target_buff_template": "bleed", "target_stack_cap": 16, "duration_before_decay_seconds": 1.5, "damage_and_decay_interval_seconds": 0.5, "refresh_duration_on_stack": true, "decay_one_stack_per_interval": true, "power_formula": "500*(n/16)^2*(3-2*n/16)", "event": "on_pellet_hits", "proc_condition": "aggregated target damage>0 and critical flag; item slot wielded at processing", "per_target_per_pellet_shooting_event": 1, "stacks_scale_with_pellet_count": false, "first_target_only": false, "continuous_fire_required": false}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
