# 超級充能(Supercharge)：動力劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_p1_targets_receive_rending_debuff_on_weapon_special_attacks`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L225-L295)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p1_buff_templates.lua#L16)。

- 適用型號：動力劍 斯干達 Mk III、動力劍 阿克利斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_stacks_on_proc": [1, 2, 3, 4], "rending_per_stack": 0.025, "max_stacks": 16, "duration": 5, "refresh_duration_on_stack": true, "condition": "on_hit, same item, held at proc processing, params.weapon_special, target alive with buff extension", "proc_cooldown": null, "total_rending_cap": 1}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
