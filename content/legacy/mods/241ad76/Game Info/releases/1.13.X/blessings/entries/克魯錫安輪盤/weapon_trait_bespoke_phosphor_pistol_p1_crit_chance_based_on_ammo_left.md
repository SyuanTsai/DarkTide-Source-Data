# 克魯錫安輪盤(Crucian Roulette)：磷光爆破手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_phosphor_pistol_p1_crit_chance_based_on_ammo_left`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L10-L49)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L16)。
- 適用型號：磷光爆破手槍 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 每發加成使用手槍一組數值；普通射擊及近戰鞭打讀取通用爆擊池。命中帶出的背向爆破固定不是爆擊，加成不會改變此旗標。

- [射擊接入背爆](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_hitscan_templates.lua#L14-L21)；[爆破呼叫傳入false](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L315-L320)；[爆擊參數位置](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57)。

- **磷光爆破手槍 布蘭克斯 Mk XI**：[普通射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L193)、[瞄準射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L264)、[近戰](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L511)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
