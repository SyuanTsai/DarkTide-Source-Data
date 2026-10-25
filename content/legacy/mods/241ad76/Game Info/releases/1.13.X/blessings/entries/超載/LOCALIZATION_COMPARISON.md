# 超載：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_explosion_on_overheat_lockout`／hash`1809b21c`；描述鍵`loc_explosion_on_overheat_lockout_desc`／hash`8cb60686`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Overload／超載。

- 英文模板：Upon reaching the Lockout state, you cause an Explosion around you and immediately reduce Heat by {overheat_reduction:%s}.

- 繁中模板：在進入鎖定狀態時，你周圍會產生爆炸，並且立即減少{overheat_reduction:%s}熱量。

- **靜態重建**：I級在進入鎖定時周圍爆炸並立即減少+10%熱量；IV級減少+25%熱量；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 觸發與爆炸 | 同hash中英皆描述進入Lockout時身周爆炸 | [鎖定事件與充能關閉](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63) | 一致 | 實際關閉充能並派送on_overheat_lockout；不要求命中或擊殺。 |
| 熱量格式 | overheat_reduction百分比prefix + | [固定百分點與限幅](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24) | 一致 | I–IV重建+10%/+15%/+20%/+25%；實際從熱量扣固定量。 |
| 鎖定保留 | 模板未說明爆炸後鎖定是否解除 | [熱量立即扣除及鎖定保留](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L64-L79) | 文件未涵蓋 | 100%扣完仍非0，保持lockout；不能推定散熱25%即可重新充能。 |
| 等級範圍 | 模板未列半徑 | [四等級爆炸設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L660-L699) | 文件未涵蓋 | 總半徑3/3.5/4/4.5，近區2/2.25/2.5/2.75；兩武器相同。 |
| 爆炸傷害區分 | 模板只寫Explosion/爆炸 | [近區傷害與衝擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1327-L1368)、[外圈衝擊與零基礎傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1369-L1434) | 文件未涵蓋 | 近區帶傷害，外圈基礎attack為0，皆有impact；不是全半徑固定傷害。 |
| 範圍與遮擋 | 模板未細分 | [通用半徑倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L430-L502)、[近遠區與掩體結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L250-L314) | 文件未涵蓋 | 通用半徑倍率、體型修正、掩體及嚴格近區判定依實際鏈。 |
| 冷卻與持用 | 模板未列 | [Proc是否需冷卻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195)、[機率與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L338) | 文件未涵蓋 | 沒有祝福冷卻，持用slot條件成立時才觸發。 |
