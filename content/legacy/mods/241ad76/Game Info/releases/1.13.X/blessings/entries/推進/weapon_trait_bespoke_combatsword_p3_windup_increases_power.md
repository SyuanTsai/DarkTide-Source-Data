# 推進(Thrust)：決鬥劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p3_windup_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L299-L348)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L15-L16)。
- 適用型號：決鬥劍 馬卡比安 Mk II、決鬥劍 馬卡比安 Mk IV、決鬥劍 馬卡比安 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：決鬥劍 馬卡比安 Mk II (combatsword_p3_m1)、決鬥劍 馬卡比安 Mk IV (combatsword_p3_m2)、決鬥劍 馬卡比安 Mk V (combatsword_p3_m3)。共用條件見[玩家說明](README.md)。
- 實際蓄力門檻依 mark；無獨立特殊開關。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
