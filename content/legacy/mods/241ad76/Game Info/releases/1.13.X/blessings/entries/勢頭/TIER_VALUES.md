# 勢頭：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 最大韌性的恢復基數 | 目標序號條件 | 觸發冷卻 |
|---|---:|---|---|
| I | 12% | 同次近戰攻擊第 3 個或後續目標 | 0.12 秒 |
| II | 13% | 同次近戰攻擊第 3 個或後續目標 | 0.12 秒 |
| III | 14% | 同次近戰攻擊第 3 個或後續目標 | 0.12 秒 |
| IV | 15% | 同次近戰攻擊第 3 個或後續目標 | 0.12 秒 |

五個武器系列數值相同；恢復基數再套用角色修正，實際恢復受當前韌性缺額限制。

[重型開膛劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L146-L200)；[烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L492-L546)；[惡霸棍棒](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L170-L224)；[砍刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L342-L396)；[雷鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L253-L307)。
