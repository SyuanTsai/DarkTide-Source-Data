# 震懾：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 實際 consumed_hit_mass_modifier | 保留目標質量 | 消耗量相對減少 | formatter 靜態負值 |
|---|---:|---:|---:|---:|
| I | 0.70 | 70% | 30% | -30% |
| II | 0.60 | 60% | 40% | -40% |
| III | 0.50 | 50% | 50% | -50% |
| IV | 0.40 | 40% | 60% | -60% |

[碎骨者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua#L250-L306)；[骨鋸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L423-L479)；[雷鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L10-L66)。
