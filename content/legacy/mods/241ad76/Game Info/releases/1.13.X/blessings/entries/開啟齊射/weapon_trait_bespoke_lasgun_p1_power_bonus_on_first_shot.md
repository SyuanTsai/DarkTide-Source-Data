# 開啟齊射(Opening Salvo)：步兵鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p1_power_bonus_on_first_shot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L400-L441)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L18-L20)。
- 適用型號：步兵鐳射槍 卡特雷爾 Mk VII、步兵鐳射槍 卡特雷爾 Mk IIb、步兵鐳射槍 卡特雷爾 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 卡特雷爾MkVII、MkIIb、MkIX一般／瞄準射擊皆即時命中射擊；每次動作更新只執行一次射擊分支。tier及formatter選Autogun P3 buff ID；Lasgun同名wrapper已定義但未選用。手電筒切換不是射擊。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
