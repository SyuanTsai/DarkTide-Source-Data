# 創傷：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 武器家族 | I級 | II級 | III級 | IV級 | 有效上限 |
|---|---:|---:|---:|---:|---:|
| 工兵鏟 | +14% | +16% | +18% | +20% | 5層 |
| 惡魔之爪劍 | +14% | +16% | +18% | +20% | 5層 |
| 撬棍 | +14% | +16% | +18% | +20% | 5層 |
| 碾壓者 | +14% | +16% | +18% | +20% | 5層 |
| 雷鎚 | +14% | +16% | +18% | +20% | 5層 |

- 每層數值套用至近戰衝擊修正；疊滿5層時，依等級合計為+70%／+80%／+90%／+100%。

[工兵鏟](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L64-L123)；[「惡魔之爪」劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p1.lua#L512-L573)；[撬棍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L64-L123)；[碾壓者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_2h_p1.lua#L74-L133)；[雷鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L549-L610)。
