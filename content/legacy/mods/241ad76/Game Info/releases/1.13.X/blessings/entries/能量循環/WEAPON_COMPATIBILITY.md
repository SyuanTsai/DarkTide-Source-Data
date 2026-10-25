# 能量循環：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 動力劍 | 動力劍 斯干達 Mk III | I–IV | 持用此劍且充能狀態有效時，I／II 最多增加 1 次、III／IV 最多增加 2 次連續充能揮擊；每個有效連擊步向近戰衝擊修正加入 2.5%／5%／7.5%／10%，不增加傷害。 | [weapon_trait_bespoke_powersword_p1_extended_activation_duration_on_chained_attacks](weapon_trait_bespoke_powersword_p1_extended_activation_duration_on_chained_attacks.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L12)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L1266-L1268) |
| 動力劍 | 動力劍 阿克利斯 Mk VI | I–IV | 持用此劍且充能狀態有效時，I／II 最多增加 1 次、III／IV 最多增加 2 次連續充能揮擊；每個有效連擊步向近戰衝擊修正加入 2.5%／5%／7.5%／10%，不增加傷害。 | [weapon_trait_bespoke_powersword_p1_extended_activation_duration_on_chained_attacks](weapon_trait_bespoke_powersword_p1_extended_activation_duration_on_chained_attacks.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L12)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L1624-L1626) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
