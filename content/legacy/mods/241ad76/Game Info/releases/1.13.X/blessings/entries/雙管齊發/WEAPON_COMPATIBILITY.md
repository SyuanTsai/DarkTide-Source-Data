# 雙管齊發：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 雙管霰彈槍 | 雙管霰彈槍 十字星 Mk XI | I–IV | - 十字星 Mk XI（shotgun_p2_m1）：舉鏡雙發為特殊模式，腰射為普通單發。
- 克魯克 Mk IV（shotgun_p2_m3）：腰射雙發為特殊模式，舉鏡為普通單發；四級數值相同。 | [weapon_trait_bespoke_shotgun_p2_reload_speed_on_ranged_weapon_special_kill](weapon_trait_bespoke_shotgun_p2_reload_speed_on_ranged_weapon_special_kill.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L1110-L1112) |
| 雙管霰彈槍 | 雙管霰彈槍 克魯克 Mk IV | I–IV | - 十字星 Mk XI（shotgun_p2_m1）：舉鏡雙發為特殊模式，腰射為普通單發。
- 克魯克 Mk IV（shotgun_p2_m3）：腰射雙發為特殊模式，舉鏡為普通單發；四級數值相同。 | [weapon_trait_bespoke_shotgun_p2_reload_speed_on_ranged_weapon_special_kill](weapon_trait_bespoke_shotgun_p2_reload_speed_on_ranged_weapon_special_kill.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L1103-L1105) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
