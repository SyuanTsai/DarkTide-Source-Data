# 未卜先知(Precognition)：決鬥劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p3_dodge_grants_finesse_bonus`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L130-L183)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L13)。
- 適用型號：決鬥劍 馬卡比安 Mk II、決鬥劍 馬卡比安 Mk IV、決鬥劍 馬卡比安 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

三個適用 mark 共用本 tier 表。普通／蓄力掃擊與 action_attack_special_riposte 等反擊是傷害路徑；招架本身是防禦動作，不造成可受加成的命中。反擊須為暴擊或弱點才提高 Finesse component。 推擊後追擊是獨立傷害攻擊，同樣按實際暴擊／弱點與有效數值判斷；純推擊不提高踉蹌力。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
