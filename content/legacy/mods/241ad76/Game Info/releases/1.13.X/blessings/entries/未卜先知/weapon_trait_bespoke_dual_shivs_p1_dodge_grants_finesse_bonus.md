# 未卜先知(Precognition)：短刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_dual_shivs_p1_dodge_grants_finesse_bonus`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L190-L243)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L15)。
- 適用型號：短刀 臨時拼湊 型號1、短刀 臨時拼湊 型號3。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

兩個適用 mark 共用本 tier 表。action_special_throw 繼承 ActionSpawnProjectile；生成投射物時複製當前 stat_buffs，因此投刀生成時效果需已生效才進入快照；生成後切走或效果到期，不重讀持有者的當下數值。命中只有暴擊或弱點才計 Finesse。毒素施加是獨立機制：合格投刀命中4層，暴擊與弱點各另加2層。interval tick用buff攻擊重算，不繼承投刀暴擊，不宣稱此祝福增加毒素tick傷害。 推擊後追擊是獨立傷害攻擊，同樣按實際暴擊／弱點與有效數值判斷；純推擊不提高踉蹌力。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
