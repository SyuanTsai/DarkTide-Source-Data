# 斬首者(Decapitator)：戰鬥斧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p1_stacking_rending_on_one_hit_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua#L274-L337)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua#L27-L41)。
- 適用型號：戰鬥斧 拉沙德 Mk III、戰鬥斧 安塔克斯 Mk V、戰鬥斧 阿克利斯 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：戰鬥斧 拉沙德 Mk III、戰鬥斧 安塔克斯 Mk V、戰鬥斧 阿克利斯 Mk VIII。三者輕／重及特殊掃掠使用不同 profile；本實作四級值高於兩個動力劍實作。逐 Mark profile 見[完整說明](WEAPON_COMPATIBILITY.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
