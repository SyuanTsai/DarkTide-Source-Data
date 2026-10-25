# 迅雷反射：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | reload_speed 加值 | RAW 顯示值 | 持續時間 |
|---|---:|---:|---:|
| I | 0.15 | +15% | 3 秒 |
| II | 0.20 | +20% | 3 秒 |
| III | 0.25 | +25% | 3 秒 |
| IV | 0.30 | +30% | 3 秒 |

加值是基準為 1 的 additive multiplier；不是換彈時間減幅。

[震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L132-L181)。
