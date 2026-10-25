# 野蠻橫掃(Savage Sweep)：突擊鏈鋸劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainsword_p1_increased_attack_cleave_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L10-L70)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L13)。
- 適用型號：突擊鏈鋸劍 卡迪亞 Mk IV、突擊鏈鋸劍 卡迪亞 Mk XIIIg。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用：突擊鏈鋸劍 卡迪亞 Mk IV（chainsword_p1_m1）、Mk XIIIg（chainsword_p1_m2）；共用[玩家說明](README.md)。
- Mk IV的普通主攻擊／推擊後掃擊含skip_on_hit_proc=true黏附profile；特殊啟用替代profile與Mk XIIIg普通profile分開核對。Mk XIIIg普通／重擊／推擊後掃擊使用可送on_hit的profile；兩型號純推擊皆不符melee gate。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
