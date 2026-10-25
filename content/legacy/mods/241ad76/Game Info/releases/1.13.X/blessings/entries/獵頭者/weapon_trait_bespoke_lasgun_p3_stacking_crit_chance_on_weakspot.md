# 獵頭者(Headhunter)：偵察鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p3_stacking_crit_chance_on_weakspot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L328-L381)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L21-L22)。
- 適用型號：偵察鐳射槍 奧克塔蘭 Mk VIc、偵察鐳射槍 奧克塔蘭 Mk XII、偵察鐳射槍 奧克塔蘭 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 奧克塔蘭 Mk VIc、Mk XII、Mk XIV 特殊鍵僅切換手電筒，不會送出命中攻擊事件；每層值比其他家族小。
- 完整機制見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
