# 未卜先知(Precognition)：烈焰力場巨劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_2h_p1_dodge_grants_finesse_bonus`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L346-L399)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L30)。
- 適用型號：烈焰力場巨劍 誓約 Mk VI、烈焰力場巨劍 誓約 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

兩個適用 mark 共用本 tier 表。一般／蓄力與充能後特殊掃擊依命中是否暴擊或弱點進入 Finesse 計算。風刃使用 RangedAction.execute_attack，也讀通用 finesse_modifier_bonus；其快照暴擊旗標只關乎實際命中是否暴擊，不表示本祝福提供暴擊率。風刃每次命中時讀玩家當下數值；切走或2秒到期後，不保留投刀式的增傷快照。 推擊後抓擊依實際弱點命中結算。Mk VI 的後續連段是輕斬；Mk VIII 可接輕／重刺擊，均是分開結算的傷害攻擊。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
