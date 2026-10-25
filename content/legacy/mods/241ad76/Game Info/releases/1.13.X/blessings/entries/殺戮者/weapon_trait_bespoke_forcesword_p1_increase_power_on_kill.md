# 殺戮者(Slaughterer)：烈焰力場劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_p1_increase_power_on_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L209-L268)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L24-L25)。
- 適用型號：烈焰力場劍 朦朧 Mk II、烈焰力場劍 戴莫斯 Mk IV、烈焰力場劍 伊利斯 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **型號**：烈焰力場劍 朦朧 Mk II、烈焰力場劍 戴莫斯 Mk IV、烈焰力場劍 伊利斯 Mk V。
- **動作差異**：啟用特殊效果本身不造成命中；後續普通／蓄力揮斬及推擊後續斬擊符合。力場推擊後的甩飛使用遠程傷害路徑，不符合。
- **既有層數**：甩飛的生命傷害護甲倍率皆為零；仍持用本武器時，既有通用威力層數可參與其衝擊路徑，但護盾固定踉蹌值及目標衝擊倍率仍會限制結果。甩飛不能增加層數。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
