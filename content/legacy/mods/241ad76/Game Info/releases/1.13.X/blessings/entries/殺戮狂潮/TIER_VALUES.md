# 殺戮狂潮：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | num_stacks_on_proc | 有效近戰暴擊機率加算 | 最長時間／消耗 |
|---|---:|---:|---|
| I | 4層 | +40 個百分點 | 5秒或掃掠開始事件後 |
| II | 6層 | +60 個百分點 | 5秒或掃掠開始事件後 |
| III | 8層 | +80 個百分點 | 5秒或掃掠開始事件後 |
| IV | 10層 | +100 個百分點 | 5秒或掃掠開始事件後 |

- 每層提供0.10 melee_critical_strike_chance；有效層數最多按10計算。這些是機率百分點，不是傷害倍率。

[戰術斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L320-L362)。
