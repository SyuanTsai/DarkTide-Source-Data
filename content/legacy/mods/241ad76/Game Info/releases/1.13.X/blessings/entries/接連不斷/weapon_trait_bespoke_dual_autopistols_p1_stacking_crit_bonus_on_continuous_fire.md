# 接連不斷(Cavalcade)：雙持自動手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_dual_autopistols_p1_stacking_crit_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_autopistols_p1.lua#L10-L57)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_autopistols_p1_buff_templates.lua#L11-L16)。
- 適用型號：雙持自動手槍 布蘭克斯 MkIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：雙持自動手槍 布蘭克斯 MkIII（dual_autopistols_p1_m1）。共通規則見[玩家說明](README.md)、[來源與公式](SOURCE_INDEX.md#執行與計算)、[等級數值](TIER_VALUES.md)。
- 腰射／瞄準為 shoot_hit_scan；特殊 pistol-whip 是近戰 Sweep，會走近戰爆擊判定，可讀當時有效的通用爆擊率；不增加 N。停火清除時間：腰射0.5s、瞄準0.5s。該時間由目前spread／移動狀態選擇，不是祝福TTL。純推擊本身不做爆擊判定；若另有獨立追擊攻擊，依該攻擊自身判定。切槽令持用條件暫停本項stat，但不立即清除玩家共用 N；卸下武器才移除 on_equip trait buff。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
