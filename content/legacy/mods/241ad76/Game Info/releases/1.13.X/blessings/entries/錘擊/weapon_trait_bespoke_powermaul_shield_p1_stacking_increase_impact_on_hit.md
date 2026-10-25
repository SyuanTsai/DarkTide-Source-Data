# 錘擊(Hammerblow)：法務官電擊鎚和鎮壓護盾實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_shield_p1_stacking_increase_impact_on_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L320-L383)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua#L152-L154)。
- 適用型號：法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI、法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

實際型號：法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk VI、法務官電擊鎚和鎮壓護盾 布蘭克斯 Mk XI. 布蘭克斯 Mk VI／Mk XI 的特殊蓄力是 block_windup；放出時會啟動真正的 weapon_shout。該動作使用 shield_push 傷害類型、未指定 attack_type；ActionWeaponShout 會把 nil attack_type 與原武器 item 傳入 Attack.execute。盾牌 profile 未設定 skip_on_hit_proc，且 shield_push 不在 no-proc 清單，因此合格命中可送同物品 on_hit 加層；nil attack_type 不會讀近戰衝擊修正。純推擊仍走獨立 PushAttack。 純推擊對應 action_push 內側 `human_shield_push`／外側 `default_shield_push`（`damage_types.physical`）；兩 profile 未設 `skip_on_hit_proc`，Attack.execute 可在來源物品與持用條件通過時送 on_hit 加層；`attack_type=push` 本身不使用近戰衝擊修正。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
