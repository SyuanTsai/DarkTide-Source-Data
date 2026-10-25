# 揮拳出擊(Take a Swing)：碎骨者實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_hammer_2h_p1_increased_weakspot_damage_on_push`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua#L347-L398)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua#L135-L152)。
- 適用型號：碎骨者 克魯克 Mk IIa。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：碎骨者 克魯克 Mk IIa。此 Mark 持續 6 秒，與工兵鏟／撬棍的 3 秒不同；其推擊半徑為 3，內／外 profile 為 `ogryn_push`／`default_push`，推擊後只有 `action_pushfollow` 並使用 `ogryn_hammer_pushfollowup` profile。型號差異見[型號說明](WEAPON_COMPATIBILITY.md)及[實際路徑](SOURCE_INDEX.md#執行與計算)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
