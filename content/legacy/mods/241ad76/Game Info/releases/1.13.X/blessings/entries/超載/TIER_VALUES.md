# 超載：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 等級共用數值

| 等級 | 立即減少熱量 | 觸發後熱量 | 基礎總半徑 | 基礎近區半徑 |
|---|---|---|---|---|
| I | 10個百分點 | 90% | 3公尺 | 2公尺 |
| II | 15個百分點 | 85% | 3.5公尺 | 2.25公尺 |
| III | 20個百分點 | 80% | 4公尺 | 2.5公尺 |
| IV | 25個百分點 | 75% | 4.5公尺 | 2.75公尺 |

[上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L634-L676)；[動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L508-L550)。
