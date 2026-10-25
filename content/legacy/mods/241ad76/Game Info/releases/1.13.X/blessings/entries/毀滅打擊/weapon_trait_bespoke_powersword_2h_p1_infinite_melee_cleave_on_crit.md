# 毀滅打擊(Devastating Strike)：上古神刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_2h_p1_infinite_melee_cleave_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L343-L392)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L191-L194)。
- 適用型號：上古神刃 軍務部 Mk X、上古神刃 軍務部 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用：上古神刃 軍務部 Mk X（`powersword_2h_p1_m1`）與 Mk II（`powersword_2h_p1_m2`）；共通內容見[執行與計算](SOURCE_INDEX.md#執行與計算)。
- 普通、重擊、衝刺及推擊後掃擊依特殊狀態選一般或powered profile；powered掃擊仍由ActionSweep以近戰攻擊處理。特殊鍵切換本身不命中。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
