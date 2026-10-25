# 推進(Thrust)：突擊鏈斧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainaxe_p1_windup_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L266-L315)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L19-L20)。
- 適用型號：突擊鏈斧 奧瑞斯特斯 Mk IV、突擊鏈斧 奧瑞斯特斯 Mk XII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：突擊鏈斧 奧瑞斯特斯 Mk IV (chainaxe_p1_m1)、突擊鏈斧 奧瑞斯特斯 Mk XII (chainaxe_p1_m2)。共用條件見[玩家說明](README.md)。
- 奧瑞斯特斯 Mk IV 有特殊起手 windup；Mk XII 特殊切換本身非蓄力事件。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
