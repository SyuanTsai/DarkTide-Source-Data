# 輕裝：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 剩餘耐力門檻 | 英文描述靜態輸出 | 繁中描述靜態輸出 | 程式邊界 |
|---|---:|---|---|---|
| I | 80% | Gain Ranged Attack Immunity while sprinting with over 80% Stamina. | 衝刺耐力消耗超過80%時，使你免疫遠程攻擊。 | `current_fraction >= 0.80`（等於門檻也成立） |
| II | 70% | Gain Ranged Attack Immunity while sprinting with over 70% Stamina. | 衝刺耐力消耗超過70%時，使你免疫遠程攻擊。 | `current_fraction >= 0.70`（等於門檻也成立） |
| III | 60% | Gain Ranged Attack Immunity while sprinting with over 60% Stamina. | 衝刺耐力消耗超過60%時，使你免疫遠程攻擊。 | `current_fraction >= 0.60`（等於門檻也成立） |
| IV | 50% | Gain Ranged Attack Immunity while sprinting with over 50% Stamina. | 衝刺耐力消耗超過50%時，使你免疫遠程攻擊。 | `current_fraction >= 0.50`（等於門檻也成立） |

[步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L546-L575)；[槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L284-L313)；[偵察鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L168-L197)；[針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L459-L488)。
