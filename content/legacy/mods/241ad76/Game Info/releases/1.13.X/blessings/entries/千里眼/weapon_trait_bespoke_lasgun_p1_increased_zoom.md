# 千里眼(Telescopic Sight)：步兵鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p1_increased_zoom`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L11-L49)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L13-L26)。
- 適用型號：步兵鐳射槍 卡特雷爾 Mk VII、步兵鐳射槍 卡特雷爾 Mk IIb、步兵鐳射槍 卡特雷爾 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際綁定步兵鐳射槍 卡特雷爾 Mk VII（lasgun_p1_m1）、Mk IIb（lasgun_p1_m2）、Mk IX（lasgun_p1_m3）；三款的條件與四級效果相同。
- 三款腰射與瞄準射擊均為單發命中掃描；瞄準中特殊輸入維持 zoom 路徑，腰射特殊輸入只切換手電筒。三款 ADS 相機輸入相同，沒有已接線的型號數值例外；共通倍率與算例集中於完整說明。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
