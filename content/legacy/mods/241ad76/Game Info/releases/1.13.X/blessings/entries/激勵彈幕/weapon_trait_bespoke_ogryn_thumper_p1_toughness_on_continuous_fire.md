# 激勵彈幕(Inspiring Barrage)：反衝者實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p1_toughness_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L125-L163)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L15-L18)。
- 適用型號：反衝者 洛倫茲 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：反衝者 洛倫茲 Mk V（ogryn_thumper_p1_m1）。腰射與瞄準射擊都是每次消耗一發的散射射擊；兩種射擊都設 keep_combo_on_start=true，瞄準與裝填設定 hold_combo=true，combo_reset_duration 為 0.5 秒。
- P1 的兩個射擊動作均能保留並推進連擊計數；是否回復仍以實際 on_ammo_consumed 事件與目前計數判斷。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
