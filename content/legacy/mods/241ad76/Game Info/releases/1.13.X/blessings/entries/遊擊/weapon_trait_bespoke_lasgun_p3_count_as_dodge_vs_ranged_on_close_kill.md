# 遊擊(Hit & Run)：偵察鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p3_count_as_dodge_vs_ranged_on_close_kill`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L74-L103)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L11)。

- 適用型號：偵察鐳射槍 奧克塔蘭 Mk VIc、偵察鐳射槍 奧克塔蘭 Mk XII、偵察鐳射槍 奧克塔蘭 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 三型號等級與共用觸發規則一致；腰射與瞄準射擊皆適用。特殊鍵切換手電筒，不算擊殺。

- 等級與數值：[集中等級表](TIER_VALUES.md)。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
