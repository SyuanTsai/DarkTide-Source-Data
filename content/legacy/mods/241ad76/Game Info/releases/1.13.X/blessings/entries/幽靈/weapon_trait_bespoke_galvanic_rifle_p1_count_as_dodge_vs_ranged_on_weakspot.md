# 幽靈(Ghost)：電能步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_galvanic_rifle_p1_count_as_dodge_vs_ranged_on_weakspot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L79-L108)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L13)。
- 適用型號：電能步槍 布蘭克斯 Mk CV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 腰射、瞄準與刺擊均可按實際弱點命中觸發；手電筒切換不攻擊。
- 本變體數值與共通觸發條件見集中頁；以下逐型號動作來源核對本變體的差異。
- [Galvanic Rifle P1 M1 hipfire hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L263-L317)。
- [Galvanic Rifle P1 M1 aimed hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L346-L385)。
- [Galvanic Rifle P1 M1 flashlight toggles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L512-L545)。
- [Galvanic Rifle P1 M1 melee stab sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L547-L634)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
