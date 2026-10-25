# 驅魔者(Exorcist)：烈焰力場劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_p1_chained_hits_vents_warpcharge`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L543-L573)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L66-L107)。

- 適用型號：烈焰力場劍 朦朧 Mk II、烈焰力場劍 戴莫斯 Mk IV、烈焰力場劍 伊利斯 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"format_type": "percentage", "prefix": "+", "field": "vent_percentage", "tiers": [{"tier": "I", "value": 0.02, "display_percent": 2, "peril_percentage_points": 2}, {"tier": "II", "value": 0.03, "display_percent": 3, "peril_percentage_points": 3}, {"tier": "III", "value": 0.04, "display_percent": 4, "peril_percentage_points": 4}, {"tier": "IV", "value": 0.05, "display_percent": 5, "peril_percentage_points": 5}], "behavior": "Immediate subtraction from current Peril, clamped at 0; not a proportional reduction of the current Peril value.", "first_weakspot_sweep_only_initializes": true, "counting_unit": "one qualifying on_sweep_finish event", "default_combo_reset_duration_after_ended_action_seconds": 0.2}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
