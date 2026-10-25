# 致命一擊(Deathblow)：重劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p2_infinite_melee_cleave_on_weakspot_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L246-L285)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L21)。
- 適用型號：重劍 圖妥斯基 Mk VI、重劍 圖妥斯基 Mk VII、重劍 圖妥斯基 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 完整數值、觸發、回退時序、切換與算例見[完整說明](README.md)。
- 實際型號：重劍 圖妥斯基 Mk VI、Mk VII、Mk IX；祝福條件與等級值相同。
- Mk VI 的推擊後斬擊使用 `light_combatsword_smiter`；Mk VII、Mk IX 使用 `light_combatsword_smiter_stab`。
- Mk IX 另有 `action_left_heavy_2` 重擊揮擊。三型號原生動作傷害設定與個別護甲質量倍率仍決定各自攻擊表現。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
