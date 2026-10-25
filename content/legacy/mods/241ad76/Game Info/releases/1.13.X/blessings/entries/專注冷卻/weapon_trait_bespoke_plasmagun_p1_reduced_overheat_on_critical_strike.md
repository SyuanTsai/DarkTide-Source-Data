# 專注冷卻(Focused Cooling)：電漿槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_plasmagun_p1_reduced_overheat_on_critical_strike`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L300-L342)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L144-L152)。
- 適用型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 電漿槍 M35熔岩核心 Mk II／Mk III 共用此祝福的倍率與爆擊即時生熱條件；兩者普通與蓄力發射都走ActionShoot的同一消費端。
- 兩型號射擊設定可有差異，但不改本祝福倍率；直接／架槍蓄力的持續生熱及特殊排熱走其他數值。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
