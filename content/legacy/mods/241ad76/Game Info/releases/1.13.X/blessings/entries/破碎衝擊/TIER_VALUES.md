# 破碎衝擊：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 等級 | 每次符合事件新增層數 | 每層撕裂 | 本次新增撕裂 | 目標上限 | 期限 |
|---|---:|---:|---:|---:|---:|
| I | 1 | 2.5% | 2.5個百分點 | 16層 | 5秒 |
| II | 2 | 2.5% | 5個百分點 | 16層 | 5秒 |
| III | 3 | 2.5% | 7.5個百分點 | 16層 | 5秒 |
| IV | 4 | 2.5% | 10個百分點 | 16層 | 5秒 |

[矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L10-L79)；[擲彈兵臂鎧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L120-L189)；[震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L222-L291)；[電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L41-L110)。
