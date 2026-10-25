# 激勵彈幕(Inspiring Barrage)：惡棍槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p3_toughness_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L125-L163)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L16-L19)。
- 適用型號：惡棍槍 洛倫茲 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：惡棍槍 洛倫茲 Mk VII（ogryn_thumper_p1_m3）。腰射與瞄準射擊為每次消耗一發的 hitscan；兩種射擊都沒有 keep_combo_on_start，瞄準也沒有 hold_combo，裝填設 hold_combo=true，沒有自訂 combo_reset_duration，使用共用 0.2 秒預設。
- 從閒置起始時，P3 新動作會依通用規則把連擊計數重設為 0；後續動作是否延續取決於實際連擊鏈與重設條件。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
