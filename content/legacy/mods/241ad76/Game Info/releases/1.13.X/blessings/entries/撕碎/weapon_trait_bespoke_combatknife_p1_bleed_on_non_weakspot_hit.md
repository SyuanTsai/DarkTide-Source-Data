# 撕碎(Lacerate)：戰刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatknife_p1_bleed_on_non_weakspot_hit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L294-L332)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L19)。

- 適用型號：戰刃 卡塔昌 Mk III、戰刃 卡塔昌 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"values_scope": "Both bound variants share identical I–IV overrides.", "num_stacks_on_proc": [1, 2, 3, 4], "effective_target_bleed_cap": 16, "shared_bleed_duration_seconds": 1.5, "shared_bleed_tick_and_decay_interval_seconds": 0.5, "refresh_duration_on_stack": true, "first_stack_removal": "At the first existing bleed tick after the 1.5-second expiry; refreshing does not reset tick phase.", "source_available_tiers": null}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
