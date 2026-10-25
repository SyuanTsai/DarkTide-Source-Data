# 持續射擊(Sustained Fire)：滅絕者霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p4_followup_shots_ranged_damage`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L828-L869)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L49-L52)。
- 適用型號：滅絕者霰彈槍 鐵腕 Mk III、滅絕者霰彈槍 鐵腕 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 鐵腕 Mk III／Mk VIII 實際 wrapper 設 use_combo=true；兩型號使用連段 strict>.2秒重置。閒置首殼0，從可接續的裝填／瞄準／特殊裝填動作直接連到首殼可為1；末批霰彈用處理時玩家快取。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
