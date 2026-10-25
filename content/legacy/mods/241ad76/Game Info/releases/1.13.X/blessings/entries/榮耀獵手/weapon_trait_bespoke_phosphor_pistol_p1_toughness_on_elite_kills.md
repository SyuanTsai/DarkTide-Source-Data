# 榮耀獵手(Gloryhunter)：磷光爆破手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_phosphor_pistol_p1_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L50-L80)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L17)。
- 適用型號：磷光爆破手槍 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：磷光爆破手槍 布蘭克斯 Mk XI。
- 本變體 I–IV：I 17.5%／II 20%／III 22.5%／IV 25%。
- 攻擊模式差異：Mk XI 有腰射及瞄準 hitscan 射擊與 pistol-whip sweep（含連段／裝填中接續動作）。 有傷害的揮擊若帶同一物品的精英擊殺事件即可符合。
- 命中敵人或可受傷的活體物件接入的 backblast 爆炸與兩種施加路徑的磷光燃燒均保留物品，可於擊殺精英且此槍仍持用時觸發。爆炸附加燃燒僅施加至爆炸後仍存活的目標。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
