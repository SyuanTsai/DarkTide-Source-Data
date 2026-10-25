# 連續發射（射擊連段）：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 擲彈兵臂鎧 布拉斯托姆 Mk III 每步 | 反衝者 洛倫茲 Mk V 每步 | 震盪槍 洛倫茲 Mk VI 每步 | 惡棍槍 洛倫茲 Mk VII 每步 | 電漿槍 M35熔岩核心 Mk II／III 每步 | 臂鎧／電漿槍五步合計 | 三型 Thumper 五步合計 |
|---|---:|---:|---:|---:|---:|---:|---:|
| I | +5% | +6% | +6% | +6% | +5% | +25% | +30% |
| II | +6% | +7% | +7% | +7% | +6% | +30% | +35% |
| III | +7% | +8% | +8% | +8% | +7% | +35% | +40% |
| IV | +8% | +9% | +9% | +9% | +8% | +40% | +45% |

每步是一般 Power 修正池加算；五步合計只是假設其他 Power 修正中性時的池內增量，不是最終生命傷害百分比。

[擲彈兵臂鎧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L10-L57)；[反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L164-L211)；[震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L40-L87)；[惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L164-L211)；[電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L111-L154)。
