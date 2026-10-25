# 遊擊（特殊攻擊命中）(Hit & Run)：突擊鏈鋸劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainsword_p1_movement_speed_on_activated_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L422-L473)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L27-L43)。
- 適用型號：突擊鏈鋸劍 卡迪亞 Mk IV、突擊鏈鋸劍 卡迪亞 Mk XIIIg。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：[突擊鏈鋸劍 卡迪亞 Mk IV](README.md)、[突擊鏈鋸劍 卡迪亞 Mk XIIIg](README.md)；共用觸發與等級見[玩家說明](README.md)。
- Mk IV 的特殊輕／重掃擊可觸發；推擊後接續的特殊右輕擊使用特殊刺擊。Mk XIIIg 的特殊輕／重掃擊可觸發；推擊後接續攻擊使用特殊輕擊設定。兩型號的純推擊均不符合觸發條件。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
