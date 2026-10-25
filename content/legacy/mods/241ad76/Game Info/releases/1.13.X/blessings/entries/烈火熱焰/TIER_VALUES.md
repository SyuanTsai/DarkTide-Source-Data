# 烈火熱焰：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每層近端加成 | 五層近端值（無其他近遠修正） | 持續時間 | 有效層上限 |
|---|---:|---:|---:|---:|
| I | +7% | 1.35（+0.35） | 3.5秒 | 5 |
| II | +8% | 1.40（+0.40） | 3.5秒 | 5 |
| III | +9% | 1.45（+0.45） | 3.5秒 | 5 |
| IV | +10% | 1.50（+0.50） | 3.5秒 | 5 |

五層效果逐層相加；不是複利，也不代表最終傷害保證。

[步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L192-L255)；[槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L74-L137)；[矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L310-L373)；[戰鬥霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L74-L137)；[滅絕者霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L74-L137)；[衝覆者霰彈手槍和防暴盾牌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L674-L737)；[撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L61-L124)。
