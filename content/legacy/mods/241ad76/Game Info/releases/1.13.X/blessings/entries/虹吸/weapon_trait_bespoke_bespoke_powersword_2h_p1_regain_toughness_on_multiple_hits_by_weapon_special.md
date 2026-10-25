# 虹吸(Syphon)：上古神刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_bespoke_powersword_2h_p1_regain_toughness_on_multiple_hits_by_weapon_special`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L423-L464)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L252-L312)。
- 適用型號：上古神刃 軍務部 Mk X、上古神刃 軍務部 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號為上古神刃 軍務部 Mk X 與 Mk II，兩者接入相同完整 trait/buff ID，I–IV數值一致。
- 兩型號的輕／重擊、衝刺攻擊與推擊後追擊是橫掃；普通推擊是push。特殊鍵由toggle-special動作切換充能狀態，本身不派送本項橫掃命中。
- 動作名稱與攻擊profile有型號差異；祝福條件仍按共同正文的特殊能力起始快照、當前目標序號與單次資格判斷。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
