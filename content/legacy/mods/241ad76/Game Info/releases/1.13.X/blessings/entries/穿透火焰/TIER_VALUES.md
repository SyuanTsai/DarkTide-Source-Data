# 穿透火焰：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 等級 | 淨化噴火器每次直接命中 | 烈焰力場法杖每次直接命中 | 每層撕裂 | 單次新增撕裂 | 目標上限／期限 |
|---|---:|---:|---:|---:|---|
| I | 1層 | 1層 | 1個百分點 | 1個百分點 | 20層／5秒 |
| II | 2層 | 2層 | 1個百分點 | 2個百分點 | 20層／5秒 |
| III | 3層 | 3層 | 1個百分點 | 3個百分點 | 20層／5秒 |
| IV | 4層 | 4層 | 1個百分點 | 4個百分點 | 20層／5秒 |

[淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L309-L380)；[烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L273-L342)。
