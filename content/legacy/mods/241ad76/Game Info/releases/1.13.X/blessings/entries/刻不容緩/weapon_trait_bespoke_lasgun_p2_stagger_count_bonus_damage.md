# 刻不容緩(No Respite)：冥潮鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p2_stagger_count_bonus_damage`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L218-L257)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L15-L25)。
- 適用型號：冥潮鐳射槍 盧修斯 MK IIIa、冥潮鐳射槍 盧修斯 MK V、冥潮鐳射槍 盧修斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [完整說明](README.md)。實際型號：冥潮鐳射槍 盧修斯 MK IIIa、冥潮鐳射槍 盧修斯 MK V、冥潮鐳射槍 盧修斯 Mk IV。三 Mark 都有蓄力射擊；Mk IIIa／Mk V 是特殊刺刀 Sweep，Mk IV 是特殊斬擊 Sweep。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
