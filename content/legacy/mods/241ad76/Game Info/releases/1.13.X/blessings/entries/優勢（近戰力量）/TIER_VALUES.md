# 優勢（近戰力量）：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每層近戰威力修正 | 三層上限 |
|---|---:|---:|
| I | +4% | +12% |
| II | +6% | +18% |
| III | +8% | +24% |
| IV | +10% | +30% |

此表列出每層 modifier 與三層有效上限；加成只進入 melee PowerLevel 計算，不是最終傷害百分比。兩個 tier API 的 available_tiers 目前未知。

[機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L81-L139)；[穿音速雙刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L164-L222)。
