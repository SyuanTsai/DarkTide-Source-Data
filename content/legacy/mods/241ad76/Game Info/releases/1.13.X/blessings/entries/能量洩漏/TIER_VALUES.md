# 能量洩漏：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 等級及熱量分段

| 等級 | 每段威力 | 最高段數 | 最高威力加成 |
|---|---|---|---|
| I | 1.5% | 5 | 7.5% |
| II | 2% | 5 | 10% |
| III | 3% | 5 | 15% |
| IV | 4% | 5 | 20% |

| 段數 | 參考熱量 | I級 | II級 | III級 | IV級 |
|---|---|---|---|---|---|
| 0 | 0% | 0% | 0% | 0% | 0% |
| 1 | 20% | 1.5% | 2% | 3% | 4% |
| 2 | 40% | 3% | 4% | 6% | 8% |
| 3 | 60% | 4.5% | 6% | 9% | 12% |
| 4 | 80% | 6% | 8% | 12% | 16% |
| 5 | 95% | 7.5% | 10% | 15% | 20% |

[上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L11-L53)；[動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L11-L53)。
