# 放血者(Bloodletter)：突擊鏈鋸劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainsword_p1_bleed_on_activated_hit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L329-L367)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L25)。

- 適用型號：突擊鏈鋸劍 卡迪亞 Mk IV、突擊鏈鋸劍 卡迪亞 Mk XIIIg。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"target_buff_template": "bleed", "max_stacks": 16, "interval_seconds": 0.5, "duration_before_decay_seconds": 1.5, "stacks_removed_per_interval": 1, "refresh_duration_on_stack": true, "refresh_at_cap": true, "trait_default_max_stacks": 31, "dot_power_formula": "500*(n/16)^2*(3-2*n/16)", "damage_type": "bleeding", "attack_type": "buff", "damage_profile": "bleeding", "damage_profile_attack_power_distribution": 175, "power_is_not_final_hp_damage": true, "num_stacks_on_proc": [11, 12, 13, 14], "tiers": [{"tier": "I", "stacks": 11}, {"tier": "II", "stacks": 12}, {"tier": "III", "stacks": 13}, {"tier": "IV", "stacks": 14}]}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
