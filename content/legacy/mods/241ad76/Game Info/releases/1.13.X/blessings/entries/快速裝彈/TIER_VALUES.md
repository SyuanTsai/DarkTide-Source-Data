# 快速裝彈：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

每個有效層的 I–IV 數值相同；完整時間欄位依型號 own override 分列。

| 等級 | 每有效層裝填速度加成 | 最多5層合計 | 視為其他加成中立時單段時間比例 |
|---|---:|---:|---:|
| I | +7% | +35% | 74.07% |
| II | +8% | +40% | 71.43% |
| III | +9% | +45% | 68.97% |
| IV | +10% | +50% | 66.67% |

| weapon_id | 適用型號家族 | own child_duration（各級） | 有效層上限 |
|---|---|---:|---:|
| autogun_p1 | 步兵自動槍 | 2.5秒 | 5 |
| autogun_p2 | 槍托自動槍 | 2.5秒 | 5 |
| autopistol_p1 | 撕裂者自動手槍 | 2秒 | 5 |
| dual_autopistols_p1 | 雙持自動手槍 | 2秒 | 5 |
| lasgun_p3 | 偵察鐳射槍 | 3秒 | 5 |
| laspistol_p1 | 重型鐳射手槍 | 3秒 | 5 |
| needlepistol_p1 | 針彈手槍 | 3秒 | 5 |
| shotgun_p2 | 雙管霰彈槍 | 3秒 | 5 |
| shotgun_p3 | 獵人霰彈槍 | 3秒 | 5 |
| shotgun_p4 | 滅絕者霰彈槍 | 3秒 | 5 |
| shotpistol_shield_p1 | 衝覆者霰彈手槍和防暴盾牌 | 4秒 | 5 |
| stubrevolver_p1 | 快拔左輪手槍 | 4秒 | 5 |


[步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L442-L505)；[槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L220-L283)；[撕裂者自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L145-L208)；[雙持自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_autopistols_p1.lua#L145-L208)；[偵察鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L104-L167)；[重型鐳射手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L72-L135)；[針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L144-L207)；[雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L398-L461)；[獵人霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L478-L541)；[滅絕者霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L478-L541)；[衝覆者霰彈手槍和防暴盾牌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L74-L137)；[快拔左輪手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L74-L137)。
