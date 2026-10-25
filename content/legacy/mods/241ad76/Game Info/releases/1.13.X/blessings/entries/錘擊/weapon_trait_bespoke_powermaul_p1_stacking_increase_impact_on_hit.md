# 錘擊(Hammerblow)：電擊錘實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p1_stacking_increase_impact_on_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p1.lua#L11-L74)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p1_buff_templates.lua#L17-L19)。
- 適用型號：電擊錘 阿格尼 Mk Ia、電擊錘 軍務部 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

實際型號：電擊錘 軍務部 Mk III、電擊錘 阿格尼 Mk Ia. 阿格尼 Mk Ia／軍務部 Mk III 特殊上勾掃擊可產生直接 on_hit；其延遲黏附 profile skip_on_hit_proc=true，不另加層，但若快取仍有效可使用近戰衝擊加成。 純推擊對應 action_push 內側 `default_push`／外側 `light_push`（`damage_types.physical`）；兩 profile 未設 `skip_on_hit_proc`，Attack.execute 可在來源物品與持用條件通過時送 on_hit 加層；`attack_type=push` 本身不使用近戰衝擊修正。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
