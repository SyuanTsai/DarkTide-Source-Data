# 穿透(Pierce)：反衝者實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p1_pass_past_armor_on_weapon_special`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L447-L488)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L61-L63)。
- 適用型號：反衝者 洛倫茲 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：反衝者 洛倫茲 Mk V（`ogryn_thumper_p1_m1`）。
- 原始 Mark 路由：`scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua` (174–203, 312–324, 437–562)。腰射／瞄準 pellets 呼叫 HitMass；Bash 左揮及接續右揮是 Sweep。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
