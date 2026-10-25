# 恐怖阻擊(Terrifying Barrage)：烈焰力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p2_suppression_on_close_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L11-L62)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L16)。
- 適用型號：烈焰力場法杖 裂隙避難所 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：烈焰力場法杖 裂隙避難所 Mk II。I–IV 等級、近距離擊殺條件與效果相同。
- 普通火焰與蓄力火焰的直接攻擊為 ranged；延遲 flamer_assault 燃燒 tick 是 buff 類型且其 damage profile 不標 count_as_ranged_attack，故 tick 不符合遠程擊殺分支；杖擊／揮擊為近戰。
- 完整觸發條件、距離、效果及例外見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
