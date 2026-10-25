# 激射：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 武器 | I | II | III | IV |
|---|---:|---:|---:|---:|
| 電能步槍 | 20%減耗 | 25%減耗 | 30%減耗 | 35%減耗 |
| 冥潮鐳射槍 | 20%減耗 | 30%減耗 | 40%減耗 | 50%減耗 |
| 針彈手槍 | 20%減耗 | 30%減耗 | 40%減耗 | 50%減耗 |

- 所有適用型號採用所屬武器的I–IV數值；減耗比例作用於目標命中質量。

[電能步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L163-L204)；[冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L422-L465)；[針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L72-L113)。
