# 猛攻：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 冥潮鐳射槍 | 冥潮鐳射槍 盧修斯 MK IIIa | I–IV | 三個已核對的冥潮鐳射槍盧修斯 Mark 共用相同 I–IV 數值；每步縮短 6%／8%／10%／12%，最多五步。蓄力模板基準時間依 Mark 不同。 | [weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks](weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| 冥潮鐳射槍 | 冥潮鐳射槍 盧修斯 MK V | I–IV | 三個已核對的冥潮鐳射槍盧修斯 Mark 共用相同 I–IV 數值；每步縮短 6%／8%／10%／12%，最多五步。蓄力模板基準時間依 Mark 不同。 | [weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks](weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| 冥潮鐳射槍 | 冥潮鐳射槍 盧修斯 Mk IV | I–IV | 三個已核對的冥潮鐳射槍盧修斯 Mark 共用相同 I–IV 數值；每步縮短 6%／8%／10%／12%，最多五步。蓄力模板基準時間依 Mark 不同。 | [weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks](weapon_trait_bespoke_lasgun_p2_faster_charge_on_chained_secondary_attacks.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
