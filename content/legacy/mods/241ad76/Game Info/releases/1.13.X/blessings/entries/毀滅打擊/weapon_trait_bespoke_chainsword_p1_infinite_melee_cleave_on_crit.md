# 毀滅打擊(Devastating Strike)：突擊鏈鋸劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainsword_p1_infinite_melee_cleave_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L136-L185)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L15)。
- 適用型號：突擊鏈鋸劍 卡迪亞 Mk IV、突擊鏈鋸劍 卡迪亞 Mk XIIIg。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用：突擊鏈鋸劍 卡迪亞 Mk IV（`chainsword_p1_m1`）與 Mk XIIIg（`chainsword_p1_m2`）；共通數值與機制見[執行與計算](SOURCE_INDEX.md#執行與計算)。
- Mk IV部分黏附profile會略過 `on_hit`；其直接普通／重擊profile及特殊啟用替代profile可按一般條件判定。Mk XIIIg直接掃擊所選profile未設 `skip_on_hit_proc`，但獨立的輕擊／重擊黏附追擊普通與末段profile全部設為略過 `on_hit`；因此Mk XIIIg黏附追擊追加命中不會觸發本祝福。純推擊和特殊切換本身不觸發。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
