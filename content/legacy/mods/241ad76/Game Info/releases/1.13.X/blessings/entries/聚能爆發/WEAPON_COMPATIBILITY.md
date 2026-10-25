# 聚能爆發：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 電漿槍 | 電漿槍 M35熔岩核心 Mk II | I–IV | 射擊開始按當時有效充能階數增加 +2／+3／+4／+5 個百分點／階；普通直蓄最多2階，架槍滿蓄最多5階。 | [weapon_trait_bespoke_plasmagun_p1_charge_level_increases_critical_strike_chance](weapon_trait_bespoke_plasmagun_p1_charge_level_increases_critical_strike_chance.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
