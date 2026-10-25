# 優勢（近戰力量）：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_elite_kills_grants_stackable_melee_power`／hash`8b0f014e`；描述鍵`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc`／hash`20e73a3c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Superiority／優勢。

- 文件名稱：優勢（近戰力量）(Superiority)。

- 適用武器：機械神教動力劍、穿音速雙刀；描述鍵`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc`／hash`20e73a3c`。

- 英文模板：+{power_level:%s} Melee Strength for {time:%s}s on Elite or Specialist Kill. Stacks {stacks:%s} times, deteriorating one at a time.

- 繁中模板：擊殺精英或專家後近戰威力+{power_level:%s}，持續{time:%s}秒。可堆疊{stacks:%s}層，且層數會隨時間減少，每次減少一層。

- **靜態重建**：以下依兩個實際 variant 的 formatter、I–IV parent tier override、5 秒 child timer 與 3 層 child cap 重建；兩個 variant 的輸出數值相同。

| 等級 | 每層近戰威力 | 英文 RAW 靜態輸出 | 繁中 RAW 靜態輸出 |
|---|---:|---|---|
| I | +4% | +4% Melee Strength for 5s on Elite or Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英或專家後近戰威力+4%，持續5秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |
| II | +6% | +6% Melee Strength for 5s on Elite or Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英或專家後近戰威力+6%，持續5秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |
| III | +8% | +8% Melee Strength for 5s on Elite or Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英或專家後近戰威力+8%，持續5秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |
| IV | +10% | +10% Melee Strength for 5s on Elite or Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英或專家後近戰威力+10%，持續5秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 精英／專家死亡事件 | 英文 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`；RAW：`+{power_level:%s} Melee Strength for {time:%s}s on Elite or Specialist Kill. Stacks {stacks:%s} times, deteriorating one at a time.` | `scripts/settings/buff/helper_functions/check_proc_functions.lua` `on_elite_or_special_kill` 120–134 檢查 died 與 elite/special tags；`scripts/utilities/attack/attack.lua` `Attack.execute` 669–709 排入 on_kill。 | 一致 | 實作採死亡結果與目標標籤判斷，符合文字觸發條件。 |
| 精英／專家死亡事件 | 繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`；RAW：`擊殺精英或專家後近戰威力+{power_level:%s}，持續{time:%s}秒。可堆疊{stacks:%s}層，且層數會隨時間減少，每次減少一層。` | `scripts/settings/buff/helper_functions/check_proc_functions.lua` `on_elite_or_special_kill` 120–134 檢查 died 與 elite/special tags；`scripts/utilities/attack/attack.lua` `Attack.execute` 669–709 排入 on_kill。 | 一致 | 實作採死亡結果與目標標籤判斷，符合文字觸發條件。 |
| 近戰力量百分比 | 英文／繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`；`Melee Strength`／`近戰威力` 的參數 `{power_level:%s}`。 | `scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua` 82–113、115–136；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua` 165–197、199–220 使用 percentage formatter；`scripts/utilities/attack/power_level.lua` `power_level_buff_modifier` 25–60 僅 melee 讀此 stat。 | 一致 | 數字是 per-stack melee PowerLevel modifier；不代表最終傷害同倍率增加。 |
| 三層上限 | 英文／繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`：Stacks `{stacks:%s}` times／可堆疊`{stacks:%s}`層。 | P3 child `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua` 33–43；Transonic P1 child `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua` 37–47；`Buff.stat_buff_stacking_count` in `scripts/extension_systems/buff/buffs/buff.lua` 397–429. | 一致 | offset 抵銷一個 parent placeholder；有效層數最多3。 |
| 5秒期限與逐層衰退 | 英文／繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`：for `{time:%s}`s／持續`{time:%s}`秒，deteriorating one at a time／每次減少一層。 | `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua` (parent14–32, child33–43)與`scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua`(parent18–36, child37–47)各設child_duration=5／stacks_to_remove=1；`WeaponTraitParentProcBuff.update` 92–123、`_add_child_buff_stack` 134–163。 | 一致 | 兩個本項 wrapper 各自明設child_duration=5及stacks_to_remove=1；達cap的合格事件仍刷新。 |
| 持用限制 | 英文／繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`；兩語均未提及 wielded-slot 條件。 | P3 parent `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua` 14–32; Transonic P1 parent `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua` 18–36 set both conditional_proc_func and conditional_stat_buffs_func; child 33–43 / 37–47 also sets conditional_stat_buffs_func; `ConditionalFunctions.is_item_slot_wielded` at `scripts/settings/buff/helper_functions/conditional_functions.lua` 43–59 compares slots. | 文件未涵蓋 | 持用 gate 是程式條件；RAW 沒有敘述切換時效果或計時。 |
| 擊殺來源武器／攻擊類型 | 英文／繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`；未指定來源 item 或攻擊種類。 | `CheckProcFunctions.on_elite_or_special_kill` at `scripts/settings/buff/helper_functions/check_proc_functions.lua` 120–134 only checks died/tags; `Attack.execute` at `scripts/utilities/attack/attack.lua` 669–709 queues payload including attack_type/attacking_item, which the check does not compare; P3 parent `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua` 14–32 and Transonic P1 parent `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua` 18–36 add only held-slot conditional. | 文件未涵蓋 | RAW 未設同一來源武器限制；文件不把同一把武器的攻擊寫成必要條件。 |
| special mode／純推擊 | 英文／繁中 RAW｜`loc_trait_bespoke_elite_kills_grants_stackable_melee_power_desc` hash `20e73a3c`：只表述精英或專家擊殺，未列招式。 | 動力劍 P3 Mark scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua 1607–2699；雙刀 P1 Mark scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua 1940–2224、2332–2445、3160–3174；Weapon._init_weapon_special_implementation scripts/extension_systems/weapon/weapon.lua 50–65 原樣傳入 Mark tweak；WeaponSpecialActivateToggle.process_hit scripts/extension_systems/weapon/special_classes/weapon_special_activate_toggle.lua 72–87 僅在 push_template 存在時對 player_unit 呼叫 Push.add。 | 文件未涵蓋 | RAW 未列特殊模式命中效果；本 Mark 沒有 push_template，故通用命中鉤子的推力分支不會執行，也不會另作傷害攻擊。 |
