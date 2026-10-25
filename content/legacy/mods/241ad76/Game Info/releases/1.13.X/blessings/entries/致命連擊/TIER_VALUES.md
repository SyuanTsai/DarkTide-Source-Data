# 致命連擊：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 近戰爆擊率加值 | 持續時間 |
|---|---:|---:|
| I | +5 個百分點 | 3 秒 |
| II | +10 個百分點 | 3 秒 |
| III | +15 個百分點 | 3 秒 |
| IV | +20 個百分點 | 3 秒 |

加值來自 `melee_critical_strike_chance`，以機率百分點加入近戰爆擊計算。

[重劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L452-L503)；[機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L183-L232)。
