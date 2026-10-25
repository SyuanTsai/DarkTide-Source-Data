# 壓倒性的武力(Overwhelming Force)：電弧鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p3_staggering_hits_has_chance_to_stun`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p3.lua#L218-L270)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p3_buff_templates.lua#L75-L100)。
- 適用型號：電弧鎚 布蘭克斯 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 綁定型號：電弧鎚 布蘭克斯 Mk III。
- 每次合格事件另要求目標有elite或special標籤；active-special的shout事件沒有attack-type排除，但仍受結果與目標檢查限制。
- 新增眩暈時明確指定玩家owner；達一層上限刷新保留既有buff上下文。
- 等級、共同冷卻與完整觸發方式見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
