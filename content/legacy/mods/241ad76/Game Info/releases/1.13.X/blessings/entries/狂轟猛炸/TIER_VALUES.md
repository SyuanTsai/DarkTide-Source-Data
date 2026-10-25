# 狂轟猛炸：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每層爆炸半徑加成 | 五層合計 |
|---|---:|---:|
| I | +3% | +15% |
| II | +4% | +20% |
| III | +5% | +25% |
| IV | +6% | +30% |

- 一層指連擊計數對應的加成階段，上限五層；不是五個獨立計時的增益。等級值取代備用 +3%。

- 外圈及近距離半徑套用相同倍率，完整起手、連接、裝填與切換條件見[完整說明](README.md)。

[震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L88-L131)。
