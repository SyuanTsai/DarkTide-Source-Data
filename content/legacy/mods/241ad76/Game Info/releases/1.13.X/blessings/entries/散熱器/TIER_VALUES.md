# 散熱器：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 等級共用數值

| 等級 | 扣熱參數 | 鎖定每次扣熱 | 非鎖定每次扣熱 | 刷新窗口 |
|---|---|---|---|---|
| I | 4個百分點 | 約1.333個百分點 | 約0.333個百分點 | 3秒 |
| II | 6個百分點 | 2個百分點 | 0.5個百分點 | 3秒 |
| III | 8個百分點 | 約2.667個百分點 | 約0.667個百分點 | 3秒 |
| IV | 10個百分點 | 約3.333個百分點 | 約0.833個百分點 | 3秒 |

[上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L54-L98)；[動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L54-L98)。
