# 顱骨落地：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 兩種武器的共用等級數值

| 等級 | 每層額外傷害加成 | 5層額外傷害加成 | 每層產熱倍率 | 5層產熱減少 | 共同期限 |
|---|---|---|---|---|---|
| I | 1% | 5% | 0.97 | 14.13% | 3秒 |
| II | 2% | 10% | 0.96 | 18.46% | 3秒 |
| III | 3% | 15% | 0.95 | 22.62% | 3秒 |
| IV | 4% | 20% | 0.94 | 26.61% | 3秒 |

[上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L99-L177)；[動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L99-L177)。
