# 破甲(Sunder)：機械神教動力劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_p3_pass_past_armor_on_weapon_special`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L233-L272)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L61)。
- 適用型號：機械神教動力劍 布蘭克斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：機械神教動力劍 布蘭克斯 Mk VI；完整觸發、時序、數值與算例見[完整說明](README.md)。
- 預設四秒、最多六格充能；切出後保留未耗盡充能，但持用條件停用。
- 推擊後追擊使用一般輕擊設定，不取得重擊增量。特殊主動輕／重擊設定已逐一按實際強度對應。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
