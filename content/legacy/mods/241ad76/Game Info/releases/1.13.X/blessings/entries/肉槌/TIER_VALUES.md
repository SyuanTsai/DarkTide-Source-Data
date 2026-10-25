# 肉槌：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | `melee_power_level_modifier` | formatter |
|---|---:|---:|
| I | 0.15 | +15% |
| II | 0.20 | +20% |
| III | 0.25 | +25% |
| IV | 0.30 | +30% |

三個實際接入型號共用上述數值與 formatter；同 key 的 tier override 取代 wrapper conditional fallback 0.10，仍由持用且啟用狀態控制。

[砍刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L181-L220)。
