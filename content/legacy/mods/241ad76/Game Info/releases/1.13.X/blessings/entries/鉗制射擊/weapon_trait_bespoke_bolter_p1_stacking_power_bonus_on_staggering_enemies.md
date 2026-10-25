# 鉗制射擊(Pinning Fire)：矛頭爆矢槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_bolter_p1_stacking_power_bonus_on_staggering_enemies`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L80-L133)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L14-L15)。
- 適用型號：矛頭爆矢槍 洛克 Mk IIb、矛頭爆矢槍 洛克 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

實際型號：矛頭爆矢槍 洛克 Mk IIb（bolter_p1_m1）、矛頭爆矢槍 洛克 Mk III（bolter_p1_m2）。腰射／瞄準 hitscan 彈在達到各自 5／3 基礎引爆距離並符合 hit-mass 或穿透停止條件時，可另排入 explosion 攻擊；範圍目標仍須由該次攻擊實際造成踉蹌，才可能加層。特殊 action_push 實際為近戰 sweep，若造成踉蹌也可觸發。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
