# 凶殘之寧(Murderous Tranquility)：烈焰力場巨劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_2h_p1_vent_warp_charge_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L450-L491)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L31-L47)。
- 適用型號：烈焰力場巨劍 誓約 Mk VI、烈焰力場巨劍 誓約 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **Mk VI**：烈焰力場巨劍 誓約 Mk VI（forcesword_2h_p1_m1）。
- **Mk VIII**：烈焰力場巨劍 誓約 Mk VIII（forcesword_2h_p1_m2）。
- 兩 Mark 共用同一 melee variant，名稱取 metadata family/pattern/mark loc_ids。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
