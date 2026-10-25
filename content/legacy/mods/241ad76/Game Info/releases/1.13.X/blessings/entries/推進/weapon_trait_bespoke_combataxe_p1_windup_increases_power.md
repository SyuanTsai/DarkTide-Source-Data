# 推進(Thrust)：戰鬥斧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p1_windup_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L154-L203)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua#L23-L24)。
- 適用型號：戰鬥斧 拉沙德 Mk III、戰鬥斧 安塔克斯 Mk V、戰鬥斧 阿克利斯 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：戰鬥斧 拉沙德 Mk III (combataxe_p1_m1)、戰鬥斧 安塔克斯 Mk V (combataxe_p1_m2)、戰鬥斧 阿克利斯 Mk VIII (combataxe_p1_m3)。共用條件見[玩家說明](README.md)。
- 特殊上勾／刺擊屬 sweep，特殊攻擊本身未另列 windup 觸發。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
