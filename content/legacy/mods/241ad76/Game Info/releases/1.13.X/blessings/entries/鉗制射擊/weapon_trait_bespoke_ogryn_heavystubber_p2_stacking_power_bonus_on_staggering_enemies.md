# 鉗制射擊(Pinning Fire)：重伐木槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p2_stacking_power_bonus_on_staggering_enemies`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L859-L912)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L71-L72)。
- 適用型號：重伐木槍 克魯克 Mk IIa、重伐木槍 戈爾貢努姆 Mk IIIa、重伐木槍 阿克利斯 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

實際型號：重伐木槍 克魯克 Mk IIa（ogryn_heavystubber_p2_m1）、戈爾貢努姆 Mk IIIa（_m2）、阿克利斯 Mk II（_m3）。三者腰射與瞄準射擊皆為 hitscan；特殊動作切換手電筒，不產生命中事件。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
