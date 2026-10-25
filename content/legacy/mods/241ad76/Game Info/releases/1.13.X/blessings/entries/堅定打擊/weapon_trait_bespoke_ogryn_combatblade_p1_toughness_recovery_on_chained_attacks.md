# 堅定打擊(Confident Strike)：砍刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_combatblade_p1_toughness_recovery_on_chained_attacks`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L311-L341)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L112)。
- 適用型號：砍刀 克魯克 Mk VI、砍刀 蠻牛屠夫 Mk III、砍刀 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：砍刀 克魯克 Mk VI、砍刀 蠻牛屠夫 Mk III、砍刀 克魯克 Mk IV。三款砍刀都把上勾特殊攻擊設為直接近戰掃掠；各 Mark 的普通／重擊掃掠與上勾掃掠都各自最多送出一次結束判定。 本組動作表：砍刀 克魯克 Mk VI：8 個直接掃掠動作；砍刀 蠻牛屠夫 Mk III：8 個直接掃掠動作；砍刀 克魯克 Mk IV：7 個直接掃掠動作。完整玩家規則見[玩家說明](README.md)，本型號實際路徑見[來源與計算](SOURCE_INDEX.md#執行與計算)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
