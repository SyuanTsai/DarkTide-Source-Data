# 死亡噴吐(Deathspitter)：戰鬥霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p1_increase_power_on_close_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L10-L73)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L8-L10)。
- 適用型號：戰鬥霰彈槍 紮羅娜 Mk VI、戰鬥霰彈槍 阿格里皮娜 Mk VII、戰鬥霰彈槍 奧克塔蘭 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 完整數值、觸發、層數期限、切換及算例見[完整說明](README.md)。
- 實際型號：戰鬥霰彈槍 紮羅娜 Mk VI、戰鬥霰彈槍 阿格里皮娜 Mk VII、戰鬥霰彈槍 奧克塔蘭 Mk IX。
- Mk IX 特殊燃燒彈的直接彈丸仍為遠程；後續燃燒 tick 不符合遠程擊殺條件。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
