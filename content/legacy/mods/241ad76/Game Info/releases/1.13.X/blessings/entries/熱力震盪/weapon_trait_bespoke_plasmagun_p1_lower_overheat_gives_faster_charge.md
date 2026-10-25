# 熱力震盪(Volatile)：電漿槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_plasmagun_p1_lower_overheat_gives_faster_charge`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L155-L200)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L23-L62)。
- 適用型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 電漿槍 M35熔岩核心 Mk II／Mk III 的本祝福等級、熱量階數及蓄力參數端點相同。
- 一般／架槍蓄力皆適用，裝填與通風期間不套用；兩型號的射擊特性差異沒有改寫本祝福的蓄力時間公式。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
