# 奪顱者：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 一般五系列：每層近戰威力加成 | 重劍：每層近戰威力加成 | 有效上限 | 閒置移除 |
|---|---:|---:|---:|---|
| I | +3.5% | +6.5% | 5 層 | 3.5 秒後移除全部有效層 |
| II | +4% | +7% | 5 層 | 3.5 秒後移除全部有效層 |
| III | +4.5% | +7.5% | 5 層 | 3.5 秒後移除全部有效層 |
| IV | +5% | +8% | 5 層 | 3.5 秒後移除全部有效層 |

重劍圖妥斯基 Mk VI、Mk VII、Mk IX 是較高數值系列；其餘五個實作共用一般數值。上述百分比套在近戰威力，最終生命傷害另經傷害曲線與目標因素結算。

[突擊鏈斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L146-L205)；[戰鬥斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L401-L460)；[戰術斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L10-L69)；[重劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L186-L245)；[戴維爾戰鎬](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua#L256-L315)；[雷鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L429-L488)。
