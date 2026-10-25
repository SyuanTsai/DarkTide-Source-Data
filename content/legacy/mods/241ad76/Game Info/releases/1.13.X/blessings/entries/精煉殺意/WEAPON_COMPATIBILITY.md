# 精煉殺意：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 骨鋸 | 骨鋸 外科醫師 型號4 | I–IV | 持用骨鋸對帶毒素狀態的目標造成近戰弱點命中時，I–IV 向弱點／精準額外傷害乘區加入 52.5%／55%／57.5%／60%；最終傷害增幅依其他傷害部分與加成而變。 | [weapon_trait_bespoke_saw_p1_increased_weakspot_damage_against_toxin_status](weapon_trait_bespoke_saw_p1_increased_weakspot_damage_against_toxin_status.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua#L1833-L1835) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
