# 轉移反噬(Transfer Peril)：虛空打擊力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p4_vents_warpcharge_on_weakspot_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L10-L39)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L12)。
- 適用型號：虛空打擊力場法杖 陰陽 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **實際型號**：虛空打擊力場法杖 陰陽 Mk IV。
- 普通射擊是直接投射物；蓄力會發射重型投射物，直接命中若判定為弱點可觸發，後續爆炸是另一攻擊事件。特殊鍵的刺擊、輕擊及重擊走近戰掃擊，實際弱點命中可觸發。推擊本體及手動排放反噬是分開動作。
- P4 I–IV 數值為 6.5、7、7.5、8 個百分點，與 P1/P3 不同。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
