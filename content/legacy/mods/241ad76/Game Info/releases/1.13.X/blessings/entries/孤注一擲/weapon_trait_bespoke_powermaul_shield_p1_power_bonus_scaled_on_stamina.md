# 孤注一擲(All or Nothing)：法務官電擊鎚和鎮壓護盾實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_shield_p1_power_bonus_scaled_on_stamina`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L444-L486)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L215-L217)。
- 適用型號：法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI、法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[查看逐型號對應](WEAPON_COMPATIBILITY.md)。法務官電擊鎚和鎮壓護盾 共核對 2 個實際標記；本武器依 own tier 使用每階 `0.2` 耐力比例步幅及最多五階。 特殊格擋／吶喊不是近戰 Sweep；一般、重擊及推擊後 Sweep 仍按近戰威力結算。 各標記實際動作與耐力樣板：法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI：耐力樣板 `powermaul_shield_p1_m1`；7 個 Sweep、2 個重擊 Sweep；特殊／特殊啟用 Sweep：此標記動作表未列特殊 Sweep；推擊後 Sweep：action_pushfollow。純推擊動作：action_push。 法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI：耐力樣板 `powermaul_shield_p1_m1`；8 個 Sweep、3 個重擊 Sweep；特殊／特殊啟用 Sweep：此標記動作表未列特殊 Sweep；推擊後 Sweep：action_pushfollow。純推擊動作：action_push。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
