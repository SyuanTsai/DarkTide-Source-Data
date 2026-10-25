# 凌遲(Torment)：戴維爾戰鎬實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_pickaxe_2h_p1_increase_power_on_weapon_special_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua#L366-L415)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua#L27-L29)。
- 適用型號：戴維爾戰鎬 布蘭克斯 Mk Ia、戴維爾戰鎬 博羅維安 Mk III、戴維爾戰鎬 卡索拉斯 Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際接入布蘭克斯 Mk Ia、博羅維安 Mk III、卡索拉斯 Mk II。三者的特殊攻擊均是 melee sweep 且 profile 帶 `weapon_special=true`；前者為上勾 `ogryn_pickaxe_blunt`，後兩者為勾拉 `special_pull`。普通／重擊與 pushfollow profile 不觸發；純 push 不受益。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
