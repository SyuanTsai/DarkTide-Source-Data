# 強化電流弧(Enhanced Voltaic Arcs)：電弧步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_arc_rifle_p1_enhanced_arc_jumps_angle`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L368-L441)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L39-L48)。
- 適用型號：電弧步槍 布蘭克斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[完整說明](README.md)
- 實際型號：電弧步槍 布蘭克斯 Mk IV（arc_rifle_p1_m1）。
- 此型號腰射／架槍原生最多跳躍 1／2 次；四級均額外 +1，故上限為 2／3 次。各級實際角度 +3°／+5°／+7.5°／+10°，距離 +0.3／+0.5／+0.75／+1。特殊 bash 不在其連鎖路徑。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
