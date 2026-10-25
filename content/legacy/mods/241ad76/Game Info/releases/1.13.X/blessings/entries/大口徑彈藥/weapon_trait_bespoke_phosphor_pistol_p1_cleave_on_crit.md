# 大口徑彈藥(Man-Stopper)：磷光爆破手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_phosphor_pistol_p1_cleave_on_crit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L175-L214)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L20)。

- 適用型號：磷光爆破手槍 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"ranged_impact_modifier_by_tier": [0.1, 0.15, 0.2, 0.25], "critical_attack_cleave_budget": "math.huge", "conditional": "while the trait item slot is wielded", "defined_tiers": ["I", "II", "III", "IV"], "impact_budget_is_not_infinite_from_this_keyword": true, "ranged_impact_requires_critical_hit": false, "ranged_impact_modifier": [0.1, 0.15, 0.2, 0.25]}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
