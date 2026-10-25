# 手銃(Hand-Cannon)：磷光爆破手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_phosphor_pistol_p1_rending_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L81-L120)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L18)。
- 適用型號：磷光爆破手槍 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際綁定：磷光爆破手槍 布蘭克斯 Mk XI（`phosphor_pistol_p1_m1`）。此實作 I–IV 為 +5%、+7.5%、+10%、+15%。
- 普通射擊與瞄準射擊皆為該型號的 Phosphor 命中掃描；小兵命中另觸發一次背爆，但該爆炸的暴擊旗標為否。裝填狀態另可接出 `action_pistol_whip_from_reload` 及 follow-up 兩個槍托 Sweep；兩者走一般近戰暴擊判定，且裝填轉換條件仍須成立。
- 此武器另有命中後的磷光燃燒和遠程撕裂目標效果；它們是原生武器效果，不能把其數值計入本祝福。

[共通執行與計算](SOURCE_INDEX.md#執行與計算)｜[實際型號](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[算例](DAMAGE_PERCENTAGE_REVIEW.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
