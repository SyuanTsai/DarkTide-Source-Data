# 敏捷(Agile)：決鬥劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p3_weakspot_hit_resets_dodge_count`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L413-L454)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L21-L23)。
- 適用型號：決鬥劍 馬卡比安 Mk II、決鬥劍 馬卡比安 Mk IV、決鬥劍 馬卡比安 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

三個適用型號的數值與計數重置相同；普通、蓄力與推擊後斬擊的弱點命中可觸發。特殊格擋／招架本身不觸發，後續反擊弱點命中可觸發。三型號共用同一閃避設定。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
