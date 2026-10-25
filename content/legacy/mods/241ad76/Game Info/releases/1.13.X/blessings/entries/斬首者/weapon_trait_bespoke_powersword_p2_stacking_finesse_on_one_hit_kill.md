# 斬首者(Decapitator)：動力彎刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_p2_stacking_finesse_on_one_hit_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L551-L614)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L309-L323)。
- 適用型號：動力彎刀 阿里丁 Mk I、動力彎刀 執法者 Mk IIb。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：動力彎刀 阿里丁 Mk I、動力彎刀 執法者 Mk IIb。兩者均有啟動與未啟動 profile，但掃掠仍由各自 Mark 傳送來源物品；此 P2 實作使用自己的 tier 數值。逐 Mark profile 見[完整說明](WEAPON_COMPATIBILITY.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
