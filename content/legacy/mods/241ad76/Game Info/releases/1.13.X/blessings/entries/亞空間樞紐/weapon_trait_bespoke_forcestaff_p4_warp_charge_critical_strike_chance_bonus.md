# 亞空間樞紐(Warp Nexus)：虛空打擊力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p4_warp_charge_critical_strike_chance_bonus`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L235-L288)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L21-L25)。
- 適用型號：虛空打擊力場法杖 陰陽 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 此型號的普通與蓄力攻擊都發射投射物；蓄力是不同投射物路徑。特殊近戰為 sweep。 共通階數、手持條件及算例見 [玩家說明](README.md)與[執行與計算](SOURCE_INDEX.md#執行與計算)；完整型號標籤見[武器對應](WEAPON_COMPATIBILITY.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
