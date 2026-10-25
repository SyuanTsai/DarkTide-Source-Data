# 達姆彈(Dumdum)：偵察鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p3_consecutive_hits_increases_close_damage`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L278-L327)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L18-L20)。
- 適用型號：奧克塔蘭Mk II偵察鐳射槍、奧克塔蘭Mk VId偵察鐳射槍、奧克塔蘭Mk VIIa偵察鐳射槍。

## 機制與公式

- 父Buff監聽本武器、持用狀態與非Buff攻擊的`on_hit`；不要求相同敵人或近距離。[共用父子Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1737-L1761)。

- `target_number>1`不計數；首次nil→0→1→2時第三次合格事件得到第一層，逾期重設0後第二次事件得到第一層。最多5層、有效層共用2秒期限，滿層命中也刷新。[計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L92-L114)；[期限與層數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua#L14-L86)。

- 直接hitscan未傳target_number，Attack預設0，穿透多個目標可多次計數。[hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L240)；[預設值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L92-L100)。

- 每層比例v依本變體覆寫；有效層n與距離d：`x=clamp((d−12.5)/17.5,0,1)`、額外比例`n×v×(1−sqrt(x))`，與同階段其他比例s相加成`1+s+n×v×(1−sqrt(x))`。[傷害公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297)。

- 命中事件在傷害後送出；子Buff統計更新後供後續傷害使用。[事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"unit": "每層近距離傷害百分比", "per_stack_percent": [4.5, 5, 5.5, 6], "max_effective_stacks": 5, "shared_duration_seconds": 2, "full_effect_distance_m": 12.5, "zero_effect_distance_m": 30, "distance_interpolation": "sqrt(clamp((distance-12.5)/17.5,0,1))", "cold_start_first_effective_hit": 3, "after_expiry_first_effective_hit": 2}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
