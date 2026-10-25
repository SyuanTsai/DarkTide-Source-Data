# 慰藉精準：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 重型鐳射手槍 | 重型鐳射手槍 奧克塔蘭MG Mk II | I–IV | 奧克塔蘭MG Mk II 的一般與瞄準射擊都走命中掃描；只有同一件武器的實際致命一擊擊殺才回復韌性。 | [weapon_trait_bespoke_laspistol_p1_toughness_on_crit_kills](weapon_trait_bespoke_laspistol_p1_toughness_on_crit_kills.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
| 擲彈兵臂鎧 | 擲彈兵臂鎧 布拉斯托姆 Mk III | I–IV | 布拉斯托姆 Mk III 的一般／蓄力近戰掃擊、特殊動作直接拳擊及保留暴擊旗標的榴彈直擊／爆炸擊殺可觸發；特殊動作附加爆炸以非暴擊結算，單靠它擊殺不符合。 | [weapon_trait_bespoke_ogryn_gauntlet_p1_toughness_on_crit_kills](weapon_trait_bespoke_ogryn_gauntlet_p1_toughness_on_crit_kills.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L17)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1295-L1297) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
