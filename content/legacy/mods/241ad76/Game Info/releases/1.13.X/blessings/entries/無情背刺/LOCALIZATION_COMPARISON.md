# 無情背刺：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_rending_on_backstabs`／hash`3c7c59e5`；描述鍵`loc_trait_bespoke_rending_on_backstabs_desc`／hash`ea32467a`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Ruthless Backstab／無情背刺。

- 文件名稱：無情背刺(Ruthless Backstab)。

- 適用武器：戰刃、短刀；描述鍵`loc_trait_bespoke_rending_on_backstabs_desc`／hash`ea32467a`。

- 英文模板：{rending:%s} Rending on Backstab Hit.

- 繁中模板：背刺攻擊時{rending:%s}撕裂。

- **靜態重建**：以下依兩個實際 variant 的 percentage formatter、`+` prefix 與完整 I–IV conditional tier override 靜態重建；兩個 variant 的輸出相同。

| 等級 | 撕裂增量 | 英文 RAW 靜態輸出 | 繁中 RAW 靜態輸出 |
|---|---:|---|---|
| I | +70% | +70% Rending on Backstab Hit. | 背刺攻擊時+70%撕裂。 |
| II | +80% | +80% Rending on Backstab Hit. | 背刺攻擊時+80%撕裂。 |
| III | +90% | +90% Rending on Backstab Hit. | 背刺攻擊時+90%撕裂。 |
| IV | +100% | +100% Rending on Backstab Hit. | 背刺攻擊時+100%撕裂。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 背刺命中時觸發（英文） | 英文 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；`{rending:%s} Rending on Backstab Hit.`。 | `AttackPositioning.is_backstabbing`，`scripts/utilities/attack/attack_positioning.lua` 13–24、34–65；`Attack.execute`，`scripts/utilities/attack/attack.lua` 349–354 傳 effective_backstab。 | 一致 | 英文只要求背刺命中；程式以有效背刺狀態選取撕裂項。 |
| 背刺命中時觸發（繁中） | 繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；`背刺攻擊時{rending:%s}撕裂。`。 | `AttackPositioning.is_backstabbing`，`scripts/utilities/attack/attack_positioning.lua` 13–24、34–65；`Attack.execute`，`scripts/utilities/attack/attack.lua` 349–354 傳 effective_backstab。 | 一致 | 繁中同樣描述背刺命中時撕裂，與原生背刺結算一致。 |
| 背刺幾何與近戰種類 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；沒有說明攻擊種類或幾何判定。 | `AttackPositioning.is_backstabbing` 與 `_is_outmanoeuvring`，`scripts/utilities/attack/attack_positioning.lua` 13–24、34–65：只取 melee，dot 必須嚴格大於 .5，並需 profile backstab_bonus 或 allow_backstabbing keyword。 | 文件未涵蓋 | 原文未列有效背刺的攻擊種類、方向門檻及許可來源；純 push 和 ranged throw 的排除屬程式範圍。 |
| 撕裂百分比與加算欄位 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；參數 `{rending:%s}`。 | 兩份 own tier 檔 `scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua` 372–411、`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua` 372–411；`buff_settings.stat_buff_types`，`scripts/settings/buff/buff_settings.lua` 691–704；`Buff._calculate_stat_buffs`，`scripts/extension_systems/buff/buffs/buff.lua` 689–747。 | 一致 | Formatter 以 + prefix 靜態顯示 .7/.8/.9/1；該值作 additive_multiplier 增入撕裂中性項。 |
| 持用武器時套用數值 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；未提及持用條件或切換。 | BaseWeaponTraitBuffTemplates.rending_on_backstab，`scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua` 2514–2525；`ConditionalFunctions.is_item_slot_wielded`，`scripts/settings/buff/helper_functions/conditional_functions.lua` 43–59；兩份 own wrapper `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua` 20、`scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua` 20。 | 文件未涵蓋 | 兩個 wrapper 均 clone 同一 base；stat 有持用判斷，但常駐 allow_backstabbing keyword 是另一欄位。 |
| 作用於護甲階段而非最終傷害 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；只標示增加 Rending，未說明傷害階段或最終幅度。 | `DamageCalculation`，`scripts/utilities/attack/damage_calculation.lua` 60–119、629–660；`ArmorSettings`，`scripts/settings/damage/armor_settings.lua` 8–19。 | 文件未涵蓋 | 原文沒有撕裂合併、cap、護甲分支、超額係數及後續傷害修正的細節。 |
| 等級、型號與特殊招式 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；未指定實際型號、Mark、純推擊、推擊後續或投擲。 | 戰刃 Mark `scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua` 124–1070 及 `scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua` 124–1145；短刀 `scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua` 470–1121 及 `scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua` 487–1185；`ActionSweep` `scripts/extension_systems/weapon/actions/action_sweep.lua` 1498–1501、`PushAttack.push` `scripts/utilities/attack/push_attack.lua` 80–86、`ActionWeaponThrow` `scripts/extension_systems/weapon/actions/action_weapon_throw.lua` 1–29、投射物 `scripts/extension_systems/projectile_damage/projectile_damage_extension.lua` 483–541。 | 文件未涵蓋 | 四個 Mark 的 sweep、push 與投擲路徑不同；原文未分述這些型號差異。 |
| 被動安裝、刷新與移除 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；未提及啟動、期限、層數、切換或卸下。 | `PlayerUnitWeaponExtension`，`scripts/extension_systems/weapon/player_unit_weapon_extension.lua` 633–693、743–785；`PlayerUnitBuffExtension.fixed_update`，`scripts/extension_systems/buff/player_unit_buff_extension.lua` 131–145；`Buff.update_keywords`，`scripts/extension_systems/buff/buffs/buff.lua` 808–818。 | 文件未涵蓋 | base 是 on_equip 被動，沒有本項自行新增的計時或層數；持用只限制條件 stat。 |
| 戰刃特殊鍵與後續命中 | 英文／繁中 RAW｜`loc_trait_bespoke_rending_on_backstabs_desc` hash `ea32467a`；只說背刺命中時增加撕裂，沒有指出特殊動作、damage type 或連段 profile。 | `action_special_jab`：`scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua` 881–957、`scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua` 958–1032；`action_melee_start_left_jab_combo` windup：`scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua` 958–1005、`scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua` 1033–1079；`action_left_heavy_jab_combo`：`scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua` 1006–1073、`scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua` 1080–1148；profiles：`scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua` `jab_special` 542–619、`medium_combat_knife_ninja_fencer` 231–289。 | 文件未涵蓋 | 特殊鍵第一段是 punch action 的 `jab_special` melee sweep；後續才是獨立 knife-profile melee sweep。兩段都能走 melee effective-backstab gate，但各自 profile、armor modifier 與接續設定不同；兩個 Mark 首拳接 windup 都是 .32 秒，只有後續刀刃重擊接回拳擊的 .4／.85 秒 chain_time 不同。 |
