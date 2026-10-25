# 亞空間斬(Warp Slice)：烈焰力場巨劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_2h_p1_wind_slash_crits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L205-L234)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L24)。
- 適用型號：烈焰力場巨劍 誓約 Mk VI、烈焰力場巨劍 誓約 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [來源與公式](SOURCE_INDEX.md#執行與計算)｜[完整型號對應](WEAPON_COMPATIBILITY.md)｜[等級數值](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)
- 誓約 Mk VI 與 Mk VIII 共用同一 trait、四級冷卻與低／中／高風斬傷害 profile；兩型號武器特殊能力都以 0／10／20 充能作為 profile 門檻，斬擊距離與時間相同。Mk VI 風斬厚度為 0.5，Mk VIII 為 0.25；普通攻擊連段 profile 也依各自 action table 配置。


- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
