# 暴走(Rampage)：重劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p2_increased_melee_damage_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L71-L135)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L14)。
- 適用型號：重劍 圖妥斯基 Mk VI、重劍 圖妥斯基 Mk VII、重劍 圖妥斯基 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[共用機制](SOURCE_INDEX.md#執行與計算)｜[完整型號](WEAPON_COMPATIBILITY.md)｜[等級總表](TIER_VALUES.md)
- 圖妥斯基 Mk VI／VII／IX：各型有兩個特殊掃擊；Mk IX 另有重擊掃擊。純推擊仍不符合。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
