# 孤注一擲(All or Nothing)：工兵鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p3_power_bonus_scaled_on_stamina`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L237-L279)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L24)。
- 適用型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[查看逐型號對應](WEAPON_COMPATIBILITY.md)。工兵鏟 共核對 3 個實際標記；本武器依 own tier 使用每階 `0.2` 耐力比例步幅及最多五階。 各標記實際動作與耐力樣板：工兵鏟 軍務部 Mk I：耐力樣板 `default`；7 個 Sweep、2 個重擊 Sweep；特殊／特殊啟用 Sweep：action_special_uppercut；推擊後 Sweep：action_right_light_pushfollow。純推擊動作：action_push。 工兵鏟 軍務部 Mk III：耐力樣板 `default`；9 個 Sweep、3 個重擊 Sweep；特殊／特殊啟用 Sweep：action_left_down_light_special, action_left_heavy_special；推擊後 Sweep：action_right_light_pushfollow。純推擊動作：action_push。 工兵鏟 軍務部 Mk VII：耐力樣板 `default`；9 個 Sweep、3 個重擊 Sweep；特殊／特殊啟用 Sweep：action_left_down_light_special, action_left_heavy_special；推擊後 Sweep：action_right_light_pushfollow。純推擊動作：action_push。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
