# 集中火力(Concentrated Fire)：針彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_needlepistol_p1_chained_weakspot_hits_increases_crit_chance`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L359-L408)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L16-L18)。
- 適用型號：針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- M1 MkVI 與 M2 MKII 共用相同四階數值、base wrapper 與 trait definition；metadata 按 needlepistol_p1 家族限制，inventory 接入兩個 mark。
- 普通、瞄準及 chemical fire configuration 都是 shoot_hit_scan；切換模式本身不是命中結果，化學射擊仍按該發 weakspot 結果加層或重設；毒素 tick 不另送本 trait 的 on_shoot 事件。
- [M1 normal／chemical configurations](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L228-L367)；[M2 normal／chemical configurations](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L228-L367)。
- 化學針直接命中與附帶爆炸分開：附帶爆炸固定不爆擊；共通層數與算例見[玩家說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
