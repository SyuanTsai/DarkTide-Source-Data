# 精確打擊：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 本祝福只有 I、II、III、IV 四級；每步固定增加10個百分點，最多10步。


## 武器變體數值

### 每步間隔 Δ

| 武器群組 | I | II | III | IV |
|---|---:|---:|---:|---:|
| 機動自動槍、矛頭爆矢槍、重伐木槍、反衝者、惡棍槍 | 0.350 秒 | 0.300 秒 | 0.250 秒 | 0.200 秒 |
| 爆彈手槍、冥潮鐳射槍、快拔左輪手槍 | 0.450 秒 | 0.400 秒 | 0.350 秒 | 0.300 秒 |
| 磷光爆破手槍 | 0.450 秒 | 0.400 秒 | 0.350 秒 | 0.325 秒 |

### 累積至 10 步的時間（10Δ）

| 武器群組 | I | II | III | IV |
|---|---:|---:|---:|---:|
| 機動自動槍、矛頭爆矢槍、重伐木槍、反衝者、惡棍槍 | 3.5 秒 | 3 秒 | 2.5 秒 | 2 秒 |
| 爆彈手槍、冥潮鐳射槍、快拔左輪手槍 | 4.5 秒 | 4 秒 | 3.5 秒 | 3 秒 |
| 磷光爆破手槍 | 4.5 秒 | 4 秒 | 3.5 秒 | 3.25 秒 |

[機動自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L260-L317)；[矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L134-L191)；[爆彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L168-L225)；[冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L120-L177)；[重伐木槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L565-L622)；[反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L212-L269)；[惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L212-L269)；[磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L344-L401)；[快拔左輪手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L190-L247)。
