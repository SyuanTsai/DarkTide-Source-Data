# 正中眉心：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_suppression_negation_on_weakspot`／hash`d3144a13`；描述鍵`loc_trait_bespoke_suppression_negation_on_weakspot_desc`／hash`ec414ad5`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Between the Eyes／正中眉心。

- 文件名稱：正中眉心(Between the Eyes)。

- 適用武器：機動自動槍、電能步槍、步兵鐳射槍、重型鐳射手槍、針彈手槍、重伐木槍；描述鍵`loc_trait_bespoke_suppression_negation_on_weakspot_desc`／hash`ec414ad5`。

- 英文模板：Gain Suppression Immunity for {time:%s}s on Weak Spot Hit.

- 繁中模板：命中弱點後獲得壓制免疫，持續{time:%s}秒。

- **靜態重建**：依 RAW 的時間欄位與 number formatter 靜態代入 I–IV；以下是文字重建，不是遊戲畫面

| 等級 | 英文靜態句 | 繁中靜態句 |
|---|---|---|
| I | Gain Suppression Immunity for 2.4s on Weak Spot Hit. | 命中弱點後獲得壓制免疫，持續2.4秒。 |
| II | Gain Suppression Immunity for 2.8s on Weak Spot Hit. | 命中弱點後獲得壓制免疫，持續2.8秒。 |
| III | Gain Suppression Immunity for 3.2s on Weak Spot Hit. | 命中弱點後獲得壓制免疫，持續3.2秒。 |
| IV | Gain Suppression Immunity for 3.6s on Weak Spot Hit. | 命中弱點後獲得壓制免疫，持續3.6秒。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 弱點命中觸發 | 英文／繁中同一描述鍵 `loc_trait_bespoke_suppression_negation_on_weakspot_desc`，hash `ec414ad5`；RAW：「Gain Suppression Immunity for {time:%s}s on Weak Spot Hit.」／「命中弱點後獲得壓制免疫，持續{time:%s}秒。」 | `scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua` 的 `CheckProcFunctions.all`／`CheckProcFunctions.on_weakspot_hit`，1810–1825；`scripts/settings/buff/helper_functions/check_proc_functions.lua` 的 `on_weakspot_hit`，473–475；`scripts/utilities/attack/attack.lua` local `_handle_buffs`，550–623。 | 一致 | RAW 明示弱點命中，parent 實際條件讀取命中事件的 hit_weakspot。 |
| 免疫與清除 | 同一 RAW description key/hash `ec414ad5`；英文寫 Suppression Immunity，繁中寫壓制免疫。 | `scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua` 的 suppression_negation_on_weakspot proc_func，1810–1825；`scripts/utilities/attack/suppression.lua` 的 `Suppression.clear_suppression`，276–282；`scripts/extension_systems/suppression/player_suppression_extension.lua` 的 suppression_immune gate，117–139，及 clear，208–222。 | 一致 | parent 呼叫 clear，keyword consumer 在 suppression 加入前檢查免疫。 |
| 持用與同物品條件 | RAW 未說明來源物品與持用槽位條件。 | `scripts/settings/buff/helper_functions/check_proc_functions.lua` 的 `on_item_match`，721–727；`scripts/settings/buff/helper_functions/conditional_functions.lua` 的 `is_item_slot_wielded`，43–59；`scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua`，1810–1825。 | 文件未涵蓋 | 事件物品須符合 buff context item，且 buff 條件要求持用該武器。 |
| 持續時間、刷新與首次生效 | 同 hash RAW 提供 `{time:%s}`；六個 own tier 各填 2.4／2.8／3.2／3.6 秒。 | Own active_duration and formatter: scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua, scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua, scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua, scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua, scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua, scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua; `scripts/extension_systems/buff/buffs/proc_buff.lua` methods `ProcBuff._is_proc_active` / `_active_duration` (78–105) and `ProcBuff.update_proc_events` (304–355); `scripts/extension_systems/buff/player_unit_buff_extension.lua` method `PlayerUnitBuffExtension.fixed_update` (131–147). | 一致 | formatter 取 own active_duration；合格事件刷新單一計時窗，keyword 在後續 cache 更新可讀取。 |
| 特殊近戰、純推擊與針彈化學後續傷害 | 同一英文／繁中 RAW（`loc_trait_bespoke_suppression_negation_on_weakspot_desc`, hash `ec414ad5`）只說弱點命中；沒有列出各動作類型、命中部位或毒素 tick 條件。 | `scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua` local action_bash 547–640 + `galvanic_rifle_damage_profile_templates.lua` 197–240；`action_sweep.lua` direct Sweep 1498–1501。Laspistol `action_push.lua` 70–90→`push_attack.lua` 48–86；Needle hitscan 及 explosion 流程見下列 refs，最後由 `attack.lua` local `_handle_buffs` 550–623 使用 hit_weakspot。 | 文件未涵蓋 | Galvanic 特殊 `action_bash` 是 Sweep，雖 profile `is_push=true` 仍送 melee 與實際 hit zone；Laspistol 純推擊通常送 torso；Needle AoE 選 center-mass actor，毒素 tick 不傳 hit zone。這些只按實際 hit_weakspot 判定，保留外部 guaranteed weakspot 覆寫例外。 |
