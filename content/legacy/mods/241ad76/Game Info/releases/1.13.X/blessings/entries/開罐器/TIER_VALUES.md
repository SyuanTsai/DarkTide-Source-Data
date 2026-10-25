# 開罐器：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 等級 | 撬棍：每次命中層數 | 撬棍：本次脆弱 | 撕裂槍：每次命中層數 | 撕裂槍：本次脆弱 |
|---|---:|---:|---:|---:|
| I | 1 | 2.5% | 10 | 25% |
| II | 2 | 5% | 12 | 30% |
| III | 3 | 7.5% | 14 | 35% |
| IV | 4 | 10% | 16 | 40% |

- 每層為2.5%撕裂；目標最多16層，持續5秒，新增層數會刷新倒數。

[撬棍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L545-L614)；[撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L156-L225)。
