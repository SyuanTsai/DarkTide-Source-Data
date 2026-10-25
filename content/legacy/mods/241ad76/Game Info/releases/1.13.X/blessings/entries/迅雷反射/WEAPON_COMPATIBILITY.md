# 迅雷反射：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 震盪槍 | 震盪槍 洛倫茲 Mk VI | I–IV | 合格弱點命中觸發 3 秒單份換彈速度加值，I–IV 為 15%／20%／25%／30%；不限定投射物或來源武器，切換武器仍保留。裝填動作開始時採樣速度，速度加值不是時間減幅。 | [weapon_trait_bespoke_ogryn_thumper_p2_weakspot_projectile_hit_increases_reload_speed](weapon_trait_bespoke_ogryn_thumper_p2_weakspot_projectile_hit_increases_reload_speed.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
