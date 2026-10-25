# 轉移反噬：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | P1/P3 排除反噬 | P4 排除反噬 | 結算方式 |
|---|---:|---:|---|
| I | 7 個百分點 | 6.5 個百分點 | 目前反噬比例相減後限制在 0%–100% |
| II | 8 個百分點 | 7 個百分點 | 目前反噬比例相減後限制在 0%–100% |
| III | 9 個百分點 | 7.5 個百分點 | 目前反噬比例相減後限制在 0%–100% |
| IV | 10 個百分點 | 8 個百分點 | 目前反噬比例相減後限制在 0%–100% |

[虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L10-L39)；[電流力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L355-L384)；[虛空打擊力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L10-L39)。
