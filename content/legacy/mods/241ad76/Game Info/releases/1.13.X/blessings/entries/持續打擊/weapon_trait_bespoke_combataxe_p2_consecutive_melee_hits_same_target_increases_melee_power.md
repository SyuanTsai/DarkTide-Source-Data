# 持續打擊(Relentless Strikes)：戰術斧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p2_consecutive_melee_hits_same_target_increases_melee_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L363-L426)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L23-L25)。
- 適用型號：戰術斧 埃托克斯 Mk II、戰術斧 埃托克斯 Mk IV、戰術斧 埃托克斯 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：戰術斧 埃托克斯 Mk II、Mk IV、Mk VII。三者的輕／重擊 profile 與特殊掃掠組合不同；推後連擊也是各自獨立的近戰 Sweep，純推擊則使用內／外圈推擊 profile。完整型號、動作與 profile 對照見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
