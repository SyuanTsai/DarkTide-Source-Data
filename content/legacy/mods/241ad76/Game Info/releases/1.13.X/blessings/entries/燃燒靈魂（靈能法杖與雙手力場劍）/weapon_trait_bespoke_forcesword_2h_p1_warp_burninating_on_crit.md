# 燃燒靈魂（靈能法杖與雙手力場劍）(Blazing Spirit)：烈焰力場巨劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_2h_p1_warp_burninating_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L136-L204)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L23)。
- 適用型號：烈焰力場巨劍 誓約 Mk VI、烈焰力場巨劍 誓約 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [來源與公式](SOURCE_INDEX.md#執行與計算)｜[完整型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)
- 誓約 Mk VI 與 Mk VIII 共用一般請求量與逐級目標上限；只有真正 Warpshock Slash 暴擊使用 1／1／2／3 的特殊單次請求量。兩個 Mark 的 native special 皆以 0／10／20 充能門檻選擇低／中／高 profile，距離 30、起始延遲 0.25 秒、行程 0.75 秒；Mk VI 厚度 0.5，Mk VIII 厚度 0.25。其他實際近戰特殊掃掠的暴擊仍使用一般請求量。純推擊也會逐目標執行 Attack.execute，但 attack_type=push 且沒有暴擊旗標輸入，不符合巨劍的 melee-crit／warp_slice predicate。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
