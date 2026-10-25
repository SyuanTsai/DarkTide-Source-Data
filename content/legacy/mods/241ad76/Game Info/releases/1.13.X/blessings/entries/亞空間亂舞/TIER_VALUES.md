# 亞空間亂舞：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每層蓄力時間 modifier | 每層縮短 | 3層係數 | 3層總縮短 |
|---|---:|---:|---:|---:|
| I | −5.5% | 5.5% | 0.835 | 16.5% |
| II | −6.5% | 6.5% | 0.805 | 19.5% |
| III | −7.5% | 7.5% | 0.775 | 22.5% |
| IV | −8.5% | 8.5% | 0.745 | 25.5% |

- q=0 時，四個法杖實作相同；層數上限為三。

[虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L402-L450)；[烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L224-L272)；[電流力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L223-L271)；[虛空打擊力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L332-L380)。
