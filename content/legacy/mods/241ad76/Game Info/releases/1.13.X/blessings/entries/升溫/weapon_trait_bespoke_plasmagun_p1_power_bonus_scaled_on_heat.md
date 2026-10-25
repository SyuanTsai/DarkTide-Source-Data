# 升溫(Rising Heat)：電漿槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_plasmagun_p1_power_bonus_scaled_on_heat`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L257-L299)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L104-L143)。
- 適用型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 電漿槍 M35熔岩核心 Mk II／Mk III 共用本項等級、熱能階數與條件；普通及蓄力射擊均讀取當時威力修正。
- 兩型號射擊特性各有差異，不改寫此祝福的威力公式；裝填與特殊排熱期間不計入，切出不清除該武器本身的熱能。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
