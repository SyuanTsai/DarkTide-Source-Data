# 穿透(Pierce)：震盪槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p2_pass_past_armor_on_weapon_special`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L182-L221)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L27)。
- 適用型號：震盪槍 洛倫茲 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：震盪槍 洛倫茲 Mk VI（`ogryn_thumper_p1_m2`）。
- 原始 Mark 路由：`scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua` (175–210, 319–334, 448–572)。普通／瞄準 projectile 與撞擊／引信爆炸不呼叫 HitMass；Bash 左揮及接續右揮是 Sweep。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
