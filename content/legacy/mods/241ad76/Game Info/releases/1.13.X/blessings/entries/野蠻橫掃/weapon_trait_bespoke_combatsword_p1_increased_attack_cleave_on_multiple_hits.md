# 野蠻橫掃(Savage Sweep)：「惡魔之爪」劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p1_increased_attack_cleave_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua#L110-L170)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p1_buff_templates.lua#L19)。
- 適用型號：「惡魔之爪」劍 卡塔昌 Mk I、「惡魔之爪」劍 卡塔昌 Mk IV、「惡魔之爪」劍 卡塔昌 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用：「惡魔之爪」劍 卡塔昌 Mk I／IV／VII（combatsword_p1_m1／m2／m3）；共用[玩家說明](README.md)。
- 三型號皆有普通、重擊、推擊後掃擊；三者的格擋反擊 special sweep 是直接近戰掃擊，可在處理序號達3且profile允許時觸發；格擋／起手本身不觸發。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
