# 連續發射：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 電弧步槍 布蘭克斯 Mk IV 每有效步 | 其他六種 10% 步距實作每有效步 | 撕裂槍系列每有效步 | 電弧步槍五步合計 | 其他實作五步合計 |
|---|---:|---:|---:|---:|---:|
| I | +1% | +5% | +5% | +5% | +25% |
| II | +1.5% | +6% | +6% | +7.5% | +30% |
| III | +2% | +7% | +7% | +10% | +35% |
| IV | +3% | +8% | +8% | +15% | +40% |

各列是攻擊力量修正池的增量；五步欄是假設五步全數生效，不是最終生命傷害百分比。一般步距為彈匣最大容量的 10%；撕裂槍系列為 8%，烈焰力場法杖 P2 零容量另受最低一步規則影響。

[電弧步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L60-L107)；[撕裂者自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L97-L144)；[雙持自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_autopistols_p1.lua#L97-L144)；[淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L50-L97)；[烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L382-L431)；[雙鏈重型機槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L48-L95)；[重伐木槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L811-L858)；[撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L313-L360)。
