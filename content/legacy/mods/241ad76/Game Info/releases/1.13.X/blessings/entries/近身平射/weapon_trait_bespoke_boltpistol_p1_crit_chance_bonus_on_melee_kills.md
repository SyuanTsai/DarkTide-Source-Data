# 近身平射(Point Blank)：爆彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_boltpistol_p1_crit_chance_bonus_on_melee_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L10-L63)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L11)。
- 適用型號：爆彈手槍 戈德溫–布蘭克斯 Mk IV、爆彈手槍 戈德溫–布蘭克斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 持續3.5秒；普通／瞄準射擊受遠程機率加成，近戰推撞擊殺可觸發。
- 每級加成與共通計時、刷新規則集中於本祝福頁；本頁僅列實作差異與來源。
- [boltpistol_p1_m1 action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L208-L289)。
- [boltpistol_p1_m1 action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L290-L370)。
- [boltpistol_p1_m1 action_push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L454-L547)。
- [boltpistol_p1_m2 action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L208-L289)。
- [boltpistol_p1_m2 action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L290-L370)。
- [boltpistol_p1_m2 action_push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L454-L547)。

- 直接射擊可受本祝福加成；另行生成的擊殺／停止及穿透停止爆炸固定非爆擊。M1／M2基礎起爆距離為5／3公尺，另套用其他來源倍率。完整配置與條件見[爆炸限制來源](SOURCE_INDEX.md#爆彈手槍爆炸限制來源)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
