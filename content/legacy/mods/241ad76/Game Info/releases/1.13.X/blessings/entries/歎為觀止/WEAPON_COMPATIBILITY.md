# 歎為觀止：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 淨化噴火器 | 淨化噴火器 奧特米亞 Mk III | I–IV | 符合條件的擊殺有14%／16%／18%／20%機率引發固定威力1000、基本半徑3且不隨距離衰減的爆炸。 | [weapon_trait_bespoke_flamer_p1_chance_to_explode_elites_on_kill](weapon_trait_bespoke_flamer_p1_chance_to_explode_elites_on_kill.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| 烈焰力場法杖 | 烈焰力場法杖 裂隙避難所 Mk II | I–IV | 符合條件的擊殺有14%／16%／18%／20%機率引發固定威力600、基本半徑4且有距離衰減的爆炸。 | [weapon_trait_bespoke_forcestaff_p2_chance_to_explode_elites_on_kill](weapon_trait_bespoke_forcestaff_p2_chance_to_explode_elites_on_kill.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| 磷光爆破手槍 | 磷光爆破手槍 布蘭克斯 Mk XI | I–IV | 符合條件的擊殺有14%／16%／18%／20%機率引發固定威力600、基本半徑4且有距離衰減的爆炸。 | [weapon_trait_bespoke_phosphor_pistol_p1_chance_to_explode_elites_on_kill](weapon_trait_bespoke_phosphor_pistol_p1_chance_to_explode_elites_on_kill.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
