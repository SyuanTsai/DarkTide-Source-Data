# 無情背刺(Ruthless Backstab)：戰刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatknife_p1_rending_on_backstab`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L372-L411)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L20)。
- 適用型號：戰刃 卡塔昌 Mk III、戰刃 卡塔昌 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：戰刃 卡塔昌 Mk III（`combatknife_p1_m1`）與戰刃 卡塔昌 Mk VI（`combatknife_p1_m2`）。
- 兩個 Mark 的特殊鍵首段都是使用 `jab_special` profile 的 punch-damage melee sweep；其後另經 windup 接入 `medium_combat_knife_ninja_fencer` 刀刃 profile sweep。Mk VI 後續設 `power_level=400`；後續刀刃重擊接回特殊拳擊的 `special_action` chain_time 是 .85 秒，Mk III 是 .4 秒。兩者首拳接 windup 的 `start_attack` chain_time 都是 .32 秒。
- 此 variant 使用 `weapon_trait_bespoke_combatknife_p1_rending_on_backstab`，tier 與被動 base 和另一 variant 分別核對後確認相同。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
