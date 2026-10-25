# 穿透火焰：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 淨化噴火器 | 淨化噴火器 奧特米亞 Mk III | I–IV | 淨化噴火器的直接火焰命中使目標依等級疊加1／2／3／4層脆弱。 | [weapon_trait_bespoke_flamer_p1_burned_targets_receive_rending_debuff](weapon_trait_bespoke_flamer_p1_burned_targets_receive_rending_debuff.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| 烈焰力場法杖 | 烈焰力場法杖 裂隙避難所 Mk II | I–IV | 烈焰力場法杖的短按火焰爆發或蓄力火焰攻擊直接命中時，依等級疊加1／2／3／4層脆弱。 | [weapon_trait_bespoke_forcestaff_p2_burned_targets_receive_rending_debuff](weapon_trait_bespoke_forcestaff_p2_burned_targets_receive_rending_debuff.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
