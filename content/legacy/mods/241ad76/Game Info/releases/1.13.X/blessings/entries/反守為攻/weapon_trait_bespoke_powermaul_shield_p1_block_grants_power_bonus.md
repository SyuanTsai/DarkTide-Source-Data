# 反守為攻(Offensive Defence)：法務官電擊鎚和鎮壓護盾實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_shield_p1_block_grants_power_bonus`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L203-L262)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L24-L64)。
- 適用型號：法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI、法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 綁定型號：法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI、布蘭克斯 Mk XI。
- 一般推擊保留0.4秒格擋窗口；推擊本身不觸發掃掠消耗，窗口內格擋到攻擊仍可累積。
- 特殊放出動作開始時也保留0.4秒窗口，推吼在開始後0.25秒發出；release 是不讀本近戰修正的獨立 weapon_shout。見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
