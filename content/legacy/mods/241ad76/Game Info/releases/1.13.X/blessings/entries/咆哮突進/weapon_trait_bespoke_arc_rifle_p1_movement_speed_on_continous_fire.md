# 咆哮突進(Roaring Advance)：電弧步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_arc_rifle_p1_movement_speed_on_continous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L312-L367)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L32-L38)。
- 適用型號：電弧步槍 布蘭克斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：電弧步槍 布蘭克斯 Mk IV（arc_rifle_p1_m1）。共用觸發與數值見[玩家說明](README.md)、[來源與公式](SOURCE_INDEX.md#執行與計算)與[等級數值](TIER_VALUES.md)。
- 腰射與架槍射擊均為射擊動作；架槍使用 ADS 擴散模板，兩者各自的停火清除門檻不同。近戰 bash 不增加射擊計數。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
