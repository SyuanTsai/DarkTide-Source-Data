# 撕扯震盪：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 滿蓄力請求層數 | 每層脆弱 |
|---|---:|---:|
| I | 2 | 2.5% |
| II | 4 | 2.5% |
| III | 6 | 2.5% |
| IV | 8 | 2.5% |

部分蓄力乘該級層數後四捨五入；目標同名效果共用 16 層上限與 5 秒期限，正數請求在滿層時仍刷新期限。

[虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L289-L358)。
