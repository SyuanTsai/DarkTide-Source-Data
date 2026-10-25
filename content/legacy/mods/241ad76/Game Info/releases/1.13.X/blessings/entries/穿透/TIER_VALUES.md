# 穿透：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 近戰衝擊修正 | 英文靜態輸出 | 繁中靜態輸出 | 實際作用邊界 |
|---|---:|---|---|---|
| I | +10% | Special Attacks gain +10% Stagger and ignore Hit Mass Bonus from Armour. | 特殊攻擊會獲得+10%硬直，並無視護甲提供的打擊質量。 | `melee_impact_modifier = 0.10`；只進 melee impact 分支。 |
| II | +15% | Special Attacks gain +15% Stagger and ignore Hit Mass Bonus from Armour. | 特殊攻擊會獲得+15%硬直，並無視護甲提供的打擊質量。 | `melee_impact_modifier = 0.15`；只進 melee impact 分支。 |
| III | +20% | Special Attacks gain +20% Stagger and ignore Hit Mass Bonus from Armour. | 特殊攻擊會獲得+20%硬直，並無視護甲提供的打擊質量。 | `melee_impact_modifier = 0.20`；只進 melee impact 分支。 |
| IV | +25% | Special Attacks gain +25% Stagger and ignore Hit Mass Bonus from Armour. | 特殊攻擊會獲得+25%硬直，並無視護甲提供的打擊質量。 | `melee_impact_modifier = 0.25`；只進 melee impact 分支。 |

[反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L447-L488)；[震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L182-L221)；[惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L447-L488)。
