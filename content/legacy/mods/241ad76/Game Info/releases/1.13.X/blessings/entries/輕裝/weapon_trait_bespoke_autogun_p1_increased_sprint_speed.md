# 輕裝(Stripped Down)：步兵自動槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autogun_p1_increased_sprint_speed`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L546-L575)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L43)。
- 適用型號：步兵自動槍 阿格里皮娜 Mk I、步兵自動槍 弗拉克斯 Mk V、步兵自動槍 哥倫努 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

適用的實際 UI 型號：步兵自動槍 阿格里皮娜 Mk I (Infantry Autogun Agripinaa Mk I) (`autogun_p1_m1`)、步兵自動槍 弗拉克斯 Mk V (Infantry Autogun Vraks Mk V) (`autogun_p1_m2`)、步兵自動槍 哥倫努 Mk VIII (Infantry Autogun Columnus Mk VIII) (`autogun_p1_m3`)。這些型號共用同一 trait、I–IV 門檻與 ranged-dodge 條件；本祝福圖示為 `weapon_trait_056`。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
