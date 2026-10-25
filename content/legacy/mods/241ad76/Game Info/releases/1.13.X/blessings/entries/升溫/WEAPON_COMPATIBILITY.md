# 升溫：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 電漿槍 | 電漿槍 M35熔岩核心 Mk II | I–IV | 持用電漿槍 M35熔岩核心 Mk II／Mk III 時，每一熱能階使威力修正增加 I–IV 級 1.5%／2%／3%／4%，最高 +7.5%／+10%／+15%／+20%；這項威力修正不等於最終傷害同比增加。 | [weapon_trait_bespoke_plasmagun_p1_power_bonus_scaled_on_heat](weapon_trait_bespoke_plasmagun_p1_power_bonus_scaled_on_heat.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 | 電漿槍 M35熔岩核心 Mk III | I–IV | 持用電漿槍 M35熔岩核心 Mk II／Mk III 時，每一熱能階使威力修正增加 I–IV 級 1.5%／2%／3%／4%，最高 +7.5%／+10%／+15%／+20%；這項威力修正不等於最終傷害同比增加。 | [weapon_trait_bespoke_plasmagun_p1_power_bonus_scaled_on_heat](weapon_trait_bespoke_plasmagun_p1_power_bonus_scaled_on_heat.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
