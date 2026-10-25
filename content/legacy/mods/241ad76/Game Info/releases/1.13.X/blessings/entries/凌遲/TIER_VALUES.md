# 凌遲：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | `melee_power_level_modifier` | RAW formatter | duration |
|---|---:|---:|---:|
| I | 0.12 | +12% | 3.5 秒 |
| II | 0.16 | +16% | 3.5 秒 |
| III | 0.20 | +20% | 3.5 秒 |
| IV | 0.24 | +24% | 3.5 秒 |

三個實際戰鎬型號均使用相同 I–IV 數值與 3.5 秒 child duration。

[戴維爾戰鎬](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua#L366-L415)。
