# 不入虎穴，焉得虎子(No Guts, No Glory)：惡霸棍棒實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p2_toughness_regen_on_weapon_special_elites`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L417-L472)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L22-L24)。
- 適用型號：惡霸棍棒 「布倫特專用」 Mk I、惡霸棍棒 「布倫特得意之作」 Mk II、惡霸棍棒 「布倫特猛擊」 Mk IIIb。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 型號：惡霸棍棒 「布倫特專用」 Mk I。三Mark的左右掌擊特殊掃掠都使用 `ogryn_club_special`；此型號普通攻擊、推擊及推後追擊依其action profile處理。
- 型號：惡霸棍棒 「布倫特得意之作」 Mk II。三Mark的左右掌擊特殊掃掠都使用 `ogryn_club_special`；此型號普通攻擊、推擊及推後追擊依其action profile處理。
- 型號：惡霸棍棒 「布倫特猛擊」 Mk IIIb。三Mark的左右掌擊特殊掃掠都使用 `ogryn_club_special`；此型號普通攻擊、推擊及推後追擊依其action profile處理。
- Mk II、Mk IIIb另有普通拳擊掃掠，但profile沒有特殊動作標記；不把拳擊名稱當成觸發條件。
[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
