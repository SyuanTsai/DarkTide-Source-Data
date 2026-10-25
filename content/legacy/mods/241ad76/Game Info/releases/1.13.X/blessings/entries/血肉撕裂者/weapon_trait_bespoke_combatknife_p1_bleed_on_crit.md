# 血肉撕裂者(Flesh Tearer)：戰刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatknife_p1_bleed_on_crit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L333-L371)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L17-L18)。

- 適用型號：戰刃 卡塔昌 Mk III、戰刃 卡塔昌 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_stacks_on_proc": [5, 6, 7, 8], "target_buff_template": "bleed", "target_stack_cap": 16, "duration_before_decay_seconds": 1.5, "damage_and_decay_interval_seconds": 0.5, "refresh_duration_on_stack": true, "decay_one_stack_per_interval": true, "power_formula": "500*(n/16)^2*(3-2*n/16)", "proc_condition": "item match + damage>0 + melee critical hit, current item slot wielded at queued proc processing", "allow_weapon_special": false, "first_target_only": false}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
