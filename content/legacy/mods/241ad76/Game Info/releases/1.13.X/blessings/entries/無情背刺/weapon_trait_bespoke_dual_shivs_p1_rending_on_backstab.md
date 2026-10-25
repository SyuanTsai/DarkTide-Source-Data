# 無情背刺(Ruthless Backstab)：短刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_dual_shivs_p1_rending_on_backstab`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L372-L411)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L20)。
- 適用型號：短刀 臨時拼湊 型號1、短刀 臨時拼湊 型號3。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：短刀 臨時拼湊 型號1（`dual_shivs_p1_m1`）與短刀 臨時拼湊 型號3（`dual_shivs_p1_m2`）。
- 兩個 Mark 的普通／蓄力攻擊與推擊後續接入 sweep；純推擊走獨立 push。特殊招式是投擲，投射物使用 ranged 攻擊種類，因此不觸發本項 melee 背刺撕裂。
- 此 variant 使用 `weapon_trait_bespoke_dual_shivs_p1_rending_on_backstab`；完整 I–IV tier 與 wrapper 已獨立核對。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
