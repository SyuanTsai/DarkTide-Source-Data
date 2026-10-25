# 優勢（近戰力量）：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 機械神教動力劍 | 機械神教動力劍 布蘭克斯 Mk VI | I–IV | 機械神教動力劍 布蘭克斯 Mk VI（powersword_p3_m1）：持用此武器時處理到合格擊殺事件，便每層增加該 tier 的近戰威力計算修正；最多 3 層，5 秒計時刷新後逐層衰退。 | [weapon_trait_bespoke_powersword_p3_elite_kills_grants_stackable_melee_power](weapon_trait_bespoke_powersword_p3_elite_kills_grants_stackable_melee_power.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3372-L3374) |
| 穿音速雙刀 | 穿音速雙刀 布蘭克斯 Mk XI | I–IV | 穿音速雙刀 布蘭克斯 Mk XI（transonic_sword_transonic_knife_p1_m1）：持用此武器時處理到合格擊殺事件，便每層增加該 tier 的近戰威力計算修正；最多 3 層，5 秒計時刷新後逐層衰退。 | [weapon_trait_bespoke_transonic_sword_transonic_knife_p1_elite_kills_grants_stackable_melee_power](weapon_trait_bespoke_transonic_sword_transonic_knife_p1_elite_kills_grants_stackable_melee_power.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3177-L3179) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
