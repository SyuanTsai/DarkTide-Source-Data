# 強化電流弧(Enhanced Voltaic Arcs)：電弧鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p3_enhanced_arc_jumps_angle`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L372-L445)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L103-L112)。
- 適用型號：電弧鎚 布蘭克斯 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[完整說明](README.md)
- 實際型號：電弧鎚 布蘭克斯 Mk III（powermaul_p3_m1）。
- 此型號掃擊原生最多跳躍 2 次；I–IV 額外 +1／+1／+2／+2，故上限為 3／3／4／4 次。角度 +5°／+7.5°／+10°／+12.5°，距離 +0.5／+1／+1.5／+2。連鎖掃擊另受動作開始時特殊攻擊已啟用的條件限制；純推擊及特殊 weapon_shout 不屬實際連鎖路徑。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
