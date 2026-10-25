# 煉獄(Infernus)：步兵鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p1_burninating_on_crit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L306-L359)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L48)。

- 適用型號：步兵鐳射槍 卡特雷爾 Mk VII、步兵鐳射槍 卡特雷爾 Mk IIb、步兵鐳射槍 卡特雷爾 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_stacks_on_proc": [1, 2, 3, 4], "max_stacks": [3, 6, 9, 12], "target_buff": "flamer_assault", "target_buff_duration_seconds": 4, "interval_seconds": 0.5, "target_buff_max_stacks": 31, "interval_stack_removal": true, "refresh_duration_on_stack": true, "proc_chance": 1, "duration_multiplier_stat": "burning_duration", "duration_is_base": true}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
