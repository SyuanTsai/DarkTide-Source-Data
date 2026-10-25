# 偏轉(Deflector)：烈焰力場劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_p1_can_block_ranged`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L53-L95)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L17)。
- 適用型號：烈焰力場劍 朦朧 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 本變體只適用烈焰力場劍 朦朧 Mk II。

- 採用單手 `forcesword_p1_m1` 體力模板；遠程內圈成本與巨劍相同，集中算例見[結算](DAMAGE_PERCENTAGE_REVIEW.md)。一般格擋成本及體力模板參數是武器差異，不改變偏轉的等級倍率。

- 一般格擋模板的內圈端點：單手1.5／0.5，巨劍1.0／0.5；外圈端點：單手2.0／1.0，巨劍3.0／1.0。這些是插值端點，實際成本經各武器自己的模板與屬性解析；不影響集中表的偏轉倍率。

- 特殊動作使用 `WeaponSpecialWarpChargedAttacks`；啟動蓄力本身不等同按住格擋，仍依共用格擋條件判定。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
