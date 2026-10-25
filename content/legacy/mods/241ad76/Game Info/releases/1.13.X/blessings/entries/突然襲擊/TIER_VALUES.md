# 突然襲擊：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | `melee_critical_strike_chance` | RAW formatter | 持續時間 |
|---|---:|---:|---:|
| I | 0.075 | +7.5% | 3 秒 |
| II | 0.10 | +10% | 3 秒 |
| III | 0.125 | +12.5% | 3 秒 |
| IV | 0.15 | +15% | 3 秒 |

這些是近戰暴擊率的加算百分點，不是最終傷害倍率。

[廁所鏟](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L342-L397)。
