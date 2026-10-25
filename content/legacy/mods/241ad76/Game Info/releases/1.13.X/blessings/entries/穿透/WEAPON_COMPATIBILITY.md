# 穿透：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 反衝者 | 反衝者 洛倫茲 Mk V | I–IV | 反衝者 洛倫茲 Mk V：腰射／瞄準 pellets 和特殊 Bash 讀取此項的實際修正；一般敵人質量扣除降低，護甲中止另於 Bash 被略過，預算與 Breed 中止仍保留。 | [weapon_trait_bespoke_ogryn_thumper_p1_pass_past_armor_on_weapon_special](weapon_trait_bespoke_ogryn_thumper_p1_pass_past_armor_on_weapon_special.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| 震盪槍 | 震盪槍 洛倫茲 Mk VI | I–IV | 震盪槍 洛倫茲 Mk VI：特殊 Bash 讀取 melee 衝擊、降低一般敵人 HitMass 並略過護甲中止；普通／瞄準彈體及爆炸沒有 HitMass consumer，不套用該質量修正。 | [weapon_trait_bespoke_ogryn_thumper_p2_pass_past_armor_on_weapon_special](weapon_trait_bespoke_ogryn_thumper_p2_pass_past_armor_on_weapon_special.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| 惡棍槍 | 惡棍槍 洛倫茲 Mk VII | I–IV | 惡棍槍 洛倫茲 Mk VII：腰射／瞄準 hit-scan 和特殊 Bash 讀取此項的實際修正；一般敵人質量扣除降低，護甲中止另於 Bash 被略過，預算與 Breed 中止仍保留。 | [weapon_trait_bespoke_ogryn_thumper_p3_pass_past_armor_on_weapon_special](weapon_trait_bespoke_ogryn_thumper_p3_pass_past_armor_on_weapon_special.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
