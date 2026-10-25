# 致命連擊(Chained Deathblow)：重劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p2_increased_crit_chance_on_weakspot_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L452-L503)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L29-L44)。
- 適用型號：重劍 圖妥斯基 Mk VI、重劍 圖妥斯基 Mk VII、重劍 圖妥斯基 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [完整說明](README.md)：適用重劍 圖妥斯基 Mk VI、Mk VII、Mk IX；三個 Mark 各自接有普通／重擊 sweep、特殊傷害 sweep 與推擊後續 sweep。純推擊使用零 attack 傷害 profile；沒有 projectile／explosion 傷害路徑。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
