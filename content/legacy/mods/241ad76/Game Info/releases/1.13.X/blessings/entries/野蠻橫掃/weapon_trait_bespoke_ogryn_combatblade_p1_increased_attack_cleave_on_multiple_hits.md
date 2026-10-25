# 野蠻橫掃(Savage Sweep)：砍刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_combatblade_p1_increased_attack_cleave_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L120-L180)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L33)。
- 適用型號：砍刀 克魯克 Mk VI、砍刀 蠻牛屠夫 Mk III、砍刀 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用：砍刀 克魯克 Mk VI／蠻牛屠夫 Mk III／克魯克 Mk IV（ogryn_combatblade_p1_m1／m2／m3）；共用[玩家說明](README.md)。
- 各Mark有普通、重擊、推擊後掃擊及special uppercut；克魯克 Mk VI 另有重擊推擊後續連段，蠻牛屠夫 Mk III 為輕擊推擊後續連段。這些kind=sweep攻擊可檢查門檻；純推擊不行。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
