# 凶殘之寧：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| Tier | vent_percentage | 每次消耗旗標減值 | base fallback |
|---|---:|---:|---:|
| I | .02 | 2 個百分點 | .01 |
| II | .03 | 3 個百分點 | .01 |
| III | .04 | 4 個百分點 | .01 |
| IV | .05 | 5 個百分點 | .01 |

own tier override 取代 wrapper .01 fallback。

[烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L450-L491)。
