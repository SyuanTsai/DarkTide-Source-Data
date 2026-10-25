# 飛鏢彈：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 等級 | 四種武器每目標每次合格射擊新增層數 | 目標層數上限 | 開始退層前等待 | 跳傷／退層間隔 |
|---|---:|---:|---:|---:|
| I | 3層 | 16層 | 1.5秒 | 0.5秒 |
| II | 4層 | 16層 | 1.5秒 | 0.5秒 |
| III | 5層 | 16層 | 1.5秒 | 0.5秒 |
| IV | 6層 | 16層 | 1.5秒 | 0.5秒 |

[撕裂槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_rippergun_p1.lua#L361-L401)；[戰鬥霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L270-L308)；[雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L219-L257)；[獵人霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L270-L308)。
