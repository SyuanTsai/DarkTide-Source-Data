# 擴展性：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 反衝者 | 反衝者 洛倫茲 Mk V | I–IV | 反衝者 洛倫茲 Mk V：腰射與瞄準各以32顆 pellet 的單次射擊命中單位數觸發。 | [weapon_trait_bespoke_ogryn_thumper_p1_weapon_special_power_bonus_after_one_shots](weapon_trait_bespoke_ogryn_thumper_p1_weapon_special_power_bonus_after_one_shots.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| 惡棍槍 | 惡棍槍 洛倫茲 Mk VII | I–IV | 惡棍槍 洛倫茲 Mk VII：腰射與瞄準實際走 hitscan，依直接命中單位數觸發。 | [weapon_trait_bespoke_ogryn_thumper_p3_weapon_special_power_bonus_after_one_shots](weapon_trait_bespoke_ogryn_thumper_p3_weapon_special_power_bonus_after_one_shots.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
