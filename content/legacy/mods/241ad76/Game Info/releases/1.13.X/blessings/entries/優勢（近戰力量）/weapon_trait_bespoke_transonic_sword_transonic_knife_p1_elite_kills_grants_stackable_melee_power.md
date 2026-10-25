# 優勢（近戰力量）(Superiority)：穿音速雙刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_transonic_sword_transonic_knife_p1_elite_kills_grants_stackable_melee_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L164-L222)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L18-L36)。
- 適用型號：穿音速雙刀 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：穿音速雙刀 布蘭克斯 Mk XI（Paired Transonic Blades Branx Mk XI），Mark transonic_sword_transonic_knife_p1_m1。
- 特殊啟動與結束轉場的近戰揮擊仍可走擊殺檢查。此 Mark 未設定推力模板，也未設定「只在攻擊中止時處理」條件；特殊命中鉤子不會施加推力或執行第二次傷害攻擊。
- Tier、死亡事件、持用條件與層數衰退和另一 variant 相同。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
