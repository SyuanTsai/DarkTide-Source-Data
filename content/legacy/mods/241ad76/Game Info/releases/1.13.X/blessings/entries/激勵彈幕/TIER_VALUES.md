# 激勵彈幕：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每個連擊計數單位的最大韌性百分比 | 單次回復倍率上限 |
|---|---:|---:|
| I | 1% | 5 |
| II | 2% | 5 |
| III | 3% | 5 |
| IV | 4% | 5 |

每次合格事件的計算使用當下原生連擊計數，最高以 5 倍計。

[反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L125-L163)；[惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L125-L163)。
