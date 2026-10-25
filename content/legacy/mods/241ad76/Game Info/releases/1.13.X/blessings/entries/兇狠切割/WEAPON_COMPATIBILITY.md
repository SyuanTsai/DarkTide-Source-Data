# 兇狠切割：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 「惡魔之爪」劍 | 「惡魔之爪」劍 卡塔昌 Mk I | I–IV | 持用此劍時，每個送達命中事件請求一層近戰衝擊增量，I–IV 每層 14%／16%／18%／20%、最多五層；橫掃開始或結束事件清層，不增加生命傷害。 | [weapon_trait_bespoke_combatsword_p1_increase_stagger_per_hit_in_sweep](weapon_trait_bespoke_combatsword_p1_increase_stagger_per_hit_in_sweep.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m1.lua#L1504-L1506) |
| 「惡魔之爪」劍 | 「惡魔之爪」劍 卡塔昌 Mk IV | I–IV | 持用此劍時，每個送達命中事件請求一層近戰衝擊增量，I–IV 每層 14%／16%／18%／20%、最多五層；橫掃開始或結束事件清層，不增加生命傷害。 | [weapon_trait_bespoke_combatsword_p1_increase_stagger_per_hit_in_sweep](weapon_trait_bespoke_combatsword_p1_increase_stagger_per_hit_in_sweep.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m2.lua#L1437-L1439) |
| 「惡魔之爪」劍 | 「惡魔之爪」劍 卡塔昌 Mk VII | I–IV | 持用此劍時，每個送達命中事件請求一層近戰衝擊增量，I–IV 每層 14%／16%／18%／20%、最多五層；橫掃開始或結束事件清層，不增加生命傷害。 | [weapon_trait_bespoke_combatsword_p1_increase_stagger_per_hit_in_sweep](weapon_trait_bespoke_combatsword_p1_increase_stagger_per_hit_in_sweep.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p1_m3.lua#L1346-L1348) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
