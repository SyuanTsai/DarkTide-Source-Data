# 燃燒靈魂（靈能法杖與雙手力場劍）(Blazing Spirit)：虛空爆破力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p1_warp_burninating_on_crits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L196-L234)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L20-L21)。
- 適用型號：虛空爆破力場法杖 陰陽 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [來源與公式](SOURCE_INDEX.md#執行與計算)｜[完整型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)
- 虛空爆破力場法杖陰陽 Mk III 的一般射擊使用 force_staff_ball 遠程投射物；蓄力後由指定位置建立 demolition 爆炸。只有實際傳入相同武器物品與暴擊旗標的逐目標遠程／爆炸命中才符合此 wrapper。bash 特殊輕／重掃掠是近戰，純推擊會逐目標執行 Attack.execute，但其 attack_type=push 不符合此 wrapper 的遠程／爆炸條件；此 Mark 沒有投擲動作。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
