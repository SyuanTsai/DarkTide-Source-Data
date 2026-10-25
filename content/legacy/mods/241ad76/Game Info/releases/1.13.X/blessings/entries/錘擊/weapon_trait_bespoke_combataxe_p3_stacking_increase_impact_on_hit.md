# 錘擊(Hammerblow)：工兵鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combataxe_p3_stacking_increase_impact_on_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p3.lua#L280-L343)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p3_buff_templates.lua#L25-L27)。
- 適用型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

實際型號：工兵鏟 軍務部 Mk I、工兵鏟 軍務部 Mk III、工兵鏟 軍務部 Mk VII. 三型號的特殊路徑不同：Mk I 為直接上勾斬；Mk III／Mk VII 可切換特殊模式並使用輕／重特殊掃擊，之後會各自建立 light_shovel_sticky／heavy_shovel_sticky 追加命中；這兩種 delayed profile 沒有 skip_on_hit_proc，可在同 item/held/on_hit 條件通過時再加層。 純推擊對應 action_push 內側 `default_push`／外側 `light_push`（`damage_types.physical`）；兩 profile 未設 `skip_on_hit_proc`，Attack.execute 可在來源物品與持用條件通過時送 on_hit 加層；`attack_type=push` 本身不使用近戰衝擊修正。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
