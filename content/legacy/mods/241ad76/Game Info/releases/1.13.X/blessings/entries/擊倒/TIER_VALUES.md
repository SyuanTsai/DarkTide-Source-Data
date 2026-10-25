# 擊倒：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | `critical_strike_chance` | RAW顯示值 | 持續時間 |
|---|---:|---:|---:|
| I | 0.125 | +12.5% | 4.5秒 |
| II | 0.15 | +15% | 4.5秒 |
| III | 0.175 | +17.5% | 4.5秒 |
| IV | 0.20 | +20% | 4.5秒 |

這些是暴擊機率加算百分點，不是最終傷害倍率。

[戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L452-L503)；[惡霸棍棒](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L367-L416)。
