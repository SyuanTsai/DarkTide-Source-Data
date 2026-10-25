# 壓倒性火力(Overwhelming Fire)：重伐木槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p2_consecutive_hits_increases_ranged_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L9-L90)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L13-L15)。
- 適用型號：重伐木槍 克魯克 Mk IIa、重伐木槍 戈爾貢努姆 Mk IIIa、重伐木槍 阿克利斯 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 克魯克 Mk IIa（ogryn_heavystubber_p2_m1）、戈爾貢努姆 Mk IIIa（ogryn_heavystubber_p2_m2）、阿克利斯 Mk II（ogryn_heavystubber_p2_m3）。
- 三型號均每 1 次同一目標的後續合格命中增加一層；穿透切換到另一目標會重設追蹤的目標與進度。
- 只有 M2（戈爾貢努姆 Mk IIIa）與 M3（阿克利斯 Mk II）的動作設定含穿透目標增量；M1（克魯克 Mk IIa）不套用此差異。特殊鍵只切換手電筒。
- 新目標的第一個合格命中會重設追蹤、清除既有有效層且不刷新計時；只有同目標後續合格命中會更新共用 2 秒計時。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
