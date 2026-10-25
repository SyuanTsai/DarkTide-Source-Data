# 轉移反噬：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 虛空爆破力場法杖 | 虛空爆破力場法杖 陰陽 Mk III | I–IV | 排除目前反噬 7、8、9、10 個百分點（I–IV），依弱點命中事件生效。 | [weapon_trait_bespoke_forcestaff_p1_vents_warpcharge_on_weakspot_hits](weapon_trait_bespoke_forcestaff_p1_vents_warpcharge_on_weakspot_hits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| 電流力場法杖 | 電流力場法杖 諾瑪努斯 Mk VI | I–IV | 排除目前反噬 7、8、9、10 個百分點（I–IV），依弱點命中事件生效。 | [weapon_trait_bespoke_forcestaff_p3_vents_warpcharge_on_weakspot_hits](weapon_trait_bespoke_forcestaff_p3_vents_warpcharge_on_weakspot_hits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| 虛空打擊力場法杖 | 虛空打擊力場法杖 陰陽 Mk IV | I–IV | 排除目前反噬 6.5、7、7.5、8 個百分點（I–IV），依弱點命中事件生效。 | [weapon_trait_bespoke_forcestaff_p4_vents_warpcharge_on_weakspot_hits](weapon_trait_bespoke_forcestaff_p4_vents_warpcharge_on_weakspot_hits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
