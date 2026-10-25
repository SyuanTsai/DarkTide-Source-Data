# 揮拳出擊(Take a Swing)：撬棍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_crowbar_p1_increased_weakspot_damage_on_push`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L294-L343)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L25-L40)。
- 適用型號：撬棍 科技教士 型號6。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：撬棍 科技教士 型號6。該 Mark 有 34 個有效 action signatures，其中一般及特殊推擊後追擊分別為 `action_pushfollow`、`action_pushfollow_special`，兩者均接 `light_crowbar_tank` profile；推擊半徑 2.5、內／外 profile 為 `default_push`／`light_push`。型號差異見[型號說明](WEAPON_COMPATIBILITY.md)及[實際路徑](SOURCE_INDEX.md#執行與計算)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
