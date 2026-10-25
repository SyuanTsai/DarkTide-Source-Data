# 破甲(Sunder)：動力劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_p1_pass_past_armor_on_weapon_special`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L296-L335)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p1_buff_templates.lua#L17)。
- 適用型號：動力劍 斯干達 Mk III、動力劍 阿克利斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：動力劍 斯干達 Mk III、動力劍 阿克利斯 Mk VI；完整觸發、時序、數值與算例見[完整說明](README.md)。
- 兩型號預設三秒、一次特殊攻擊窗，作用中可再次啟用；切出武器會關閉原生狀態。
- 推擊後追擊的特殊傷害設定分別為 `light_powersword_smiter_push_follow_up_active` 與 `light_powersword_stab_active`；兩者實際強度均為輕擊，使用穿透效果但不取得重擊增量。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
