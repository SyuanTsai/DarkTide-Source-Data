# 機會主義者(Opportunist)：動力錘實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_powermaul_p1_rending_vs_staggered`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_p1.lua#L313-L352)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_p1_buff_templates.lua#L14)。

- 適用型號：動力錘 阿克利斯 Mk I。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"melee_rending_vs_staggered_multiplier": [0.1, 0.15, 0.2, 0.25], "condition": "held and attack_type melee and (num_triggered_staggers>0 or count_as_staggered keyword)", "stacks": 1, "duration": null, "proc_cooldown": null, "rending_total_cap": 1, "overdamage_multiplier": 0.25}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
