# 遊擊（特殊攻擊命中）：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 突擊鏈鋸劍 | 突擊鏈鋸劍 卡迪亞 Mk IV | I–IV | 持用突擊鏈鋸劍，以特殊攻擊直接命中後，移動速度提高 I–IV +12.5%／+15%／+17.5%／+20%，持續 4 秒；再次合格命中刷新時間，不疊加。 | [weapon_trait_bespoke_chainsword_p1_movement_speed_on_activated_hit](weapon_trait_bespoke_chainsword_p1_movement_speed_on_activated_hit.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m1.lua#L2424-L2426) |
| 突擊鏈鋸劍 | 突擊鏈鋸劍 卡迪亞 Mk XIIIg | I–IV | 持用突擊鏈鋸劍，以特殊攻擊直接命中後，移動速度提高 I–IV +12.5%／+15%／+17.5%／+20%，持續 4 秒；再次合格命中刷新時間，不疊加。 | [weapon_trait_bespoke_chainsword_p1_movement_speed_on_activated_hit](weapon_trait_bespoke_chainsword_p1_movement_speed_on_activated_hit.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L14)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords/chainsword_p1_m2.lua#L2030-L2032) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
