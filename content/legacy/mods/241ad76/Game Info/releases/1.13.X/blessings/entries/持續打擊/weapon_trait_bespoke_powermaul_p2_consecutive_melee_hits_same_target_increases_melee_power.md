# 持續打擊(Relentless Strikes)：法務官電擊鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p2_consecutive_melee_hits_same_target_increases_melee_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L350-L413)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L103-L105)。
- 適用型號：法務官電擊鎚 布蘭克斯 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：法務官電擊鎚 布蘭克斯 Mk III。特殊模式有四種直接 powered melee Sweep；on-equip primer 在手持、特殊模式與近戰命中等條件成立時，另依目標是否觸電套用 stun buff。該 Mark 沒有本項所追蹤的爆炸路徑。完整動作對照見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
