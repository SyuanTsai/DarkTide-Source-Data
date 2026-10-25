# 超壓：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 淨化噴火器 | 淨化噴火器 奧特米亞 Mk III | I–IV | 持用淨化噴火器 奧特米亞 Mk III 時，依可用彈量計算 0–5 階；I–IV 每階增加 +2%／+3%／+4%／+5%，最多五階。 | [weapon_trait_bespoke_flamer_p1_power_scales_with_clip_percentage](weapon_trait_bespoke_flamer_p1_power_scales_with_clip_percentage.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
