# 榮耀獵手(Gloryhunter)：爆彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_boltpistol_p1_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L278-L308)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L15)。
- 適用型號：爆彈手槍 戈德溫–布蘭克斯 Mk IV、爆彈手槍 戈德溫–布蘭克斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：爆彈手槍 戈德溫–布蘭克斯 Mk IV、爆彈手槍 戈德溫–布蘭克斯 Mk VI。
- 本變體 I–IV：I 18%／II 22%／III 26%／IV 30%。
- 攻擊模式差異：Mk IV／Mk VI 均有腰射及瞄準 hitscan 射擊，另有特殊動作推擊 sweep；未找到充能或手持投擲動作。 共用條件沒有對射擊／推擊另加限制。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
