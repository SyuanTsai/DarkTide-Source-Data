# 猛攻(Weight of Fire)：冥潮鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L258-L300)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L26-L58)。
- 適用型號：冥潮鐳射槍 盧修斯 MK IIIa、冥潮鐳射槍 盧修斯 MK V、冥潮鐳射槍 盧修斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用冥潮鐳射槍 盧修斯 MK IIIa、MK V、Mk IV；共通數值與生命週期見完整玩家說明。
- 三型號蓄力模板的 `lerp_basic／lerp_perfect` 端點分別為 0.8／0.4、0.65／0.25、1.0／0.5 秒；遊戲依武器屬性插值後才得到基準時間。
- MK IIIa、MK V 的特殊刺擊／重刺及 Mk IV 的特殊斬擊不在本祝福動作白名單；返回射擊重置連段。三個模板皆無實際 quick 射擊動作。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
