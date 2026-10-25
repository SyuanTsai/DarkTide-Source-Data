# 持續打擊(Relentless Strikes)：決鬥劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p3_consecutive_melee_hits_same_target_increases_melee_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L349-L412)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L18-L20)。
- 適用型號：決鬥劍 馬卡比安 Mk II、決鬥劍 馬卡比安 Mk IV、決鬥劍 馬卡比安 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：決鬥劍 馬卡比安 Mk II、Mk IV、Mk V。三者的重擊 profile 不同；Mk II／IV 的格擋反擊使用 `combatsword_p3_parry_special`，Mk V 使用其 Mark 專用 profile。推後連擊為獨立近戰 Sweep。完整型號與 profile 對照見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
