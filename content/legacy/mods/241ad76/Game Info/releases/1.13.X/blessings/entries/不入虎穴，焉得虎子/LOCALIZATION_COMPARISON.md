# 不入虎穴，焉得虎子：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_regen_on_punching_elites`／hash`5da2fc91`；描述鍵`loc_trait_bespoke_toughness_regen_on_punching_elites_desc`／hash`876ccdea`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：No Guts, No Glory／不入虎穴，焉得虎子。

- 文件名稱：不入虎穴，焉得虎子(No Guts, No Glory)。

- 適用武器：惡霸棍棒；描述鍵`loc_trait_bespoke_toughness_regen_on_punching_elites_desc`／hash`876ccdea`。

- 英文模板：{toughness:%s} Toughness Regeneration per second for {time:%s}s on Elite Special Action Hit.

- 繁中模板：特殊動作擊中精英後，韌性恢復值每秒{toughness:%s}，持續{time:%s}秒。

- **靜態重建**：本表保留同一描述鍵、hash與原始占位符；各級僅依實際formatter代入。
- I — EN: `+50% Toughness Regeneration per second for 2s on Elite Special Action Hit.`；繁中：`特殊動作擊中精英後，韌性恢復值每秒+50%，持續2秒。`
- II — EN: `+50% Toughness Regeneration per second for 3s on Elite Special Action Hit.`；繁中：`特殊動作擊中精英後，韌性恢復值每秒+50%，持續3秒。`
- III — EN: `+50% Toughness Regeneration per second for 4s on Elite Special Action Hit.`；繁中：`特殊動作擊中精英後，韌性恢復值每秒+50%，持續4秒。`
- IV — EN: `+50% Toughness Regeneration per second for 5s on Elite Special Action Hit.`；繁中：`特殊動作擊中精英後，韌性恢復值每秒+50%，持續5秒。`；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 四級格式值與持續時間 | 描述鍵 `loc_trait_bespoke_toughness_regen_on_punching_elites_desc`，hash `876ccdea`；EN: {toughness:%s} Toughness Regeneration per second for {time:%s}s on Elite Special Action Hit.；繁中：特殊動作擊中精英後，韌性恢復值每秒{toughness:%s}，持續{time:%s}秒。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua:417-472 `format_values`；scripts/extension_systems/buff/buffs/proc_buff.lua:78-104 active-window duration lookup | 符合（formatter顯示值） | 0.5 的 percentage formatter 與正號輸出 +50%；own active_duration 2／3／4／5 代入 time placeholder。 |
| 特殊動作命中精英 | 描述鍵 `loc_trait_bespoke_toughness_regen_on_punching_elites_desc`，hash `876ccdea`；EN/ZH 均提到 Elite Special Action Hit。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1216-1240 `toughness_regen_on_weapon_special_elites.check_proc_func`；scripts/settings/buff/helper_functions/check_proc_functions.lua:384-386 `on_melee_weapon_special_hit`、614-620 `on_elite_hit`；scripts/utilities/attack/attack.lua:577-623 `on_hit` payload | 符合（實際觸發條件） | 已接入掌擊為 melee 且 weapon_special=true；目標需 elite tag，擊殺不是條件。 |
| 同武器與持用條件 | 描述鍵 `loc_trait_bespoke_toughness_regen_on_punching_elites_desc`，hash `876ccdea`；EN/ZH 未寫明 item 限制或切槽條件。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1226-1238 `on_item_match` 與 `is_item_slot_wielded`；scripts/settings/buff/helper_functions/check_proc_functions.lua:721-727 `on_item_match`；scripts/settings/buff/helper_functions/conditional_functions.lua:43-59 `is_item_slot_wielded` | 文件未涵蓋 | 程式要求相同棍棒 item 並檢查持用槽；持用條件亦控制 active stat。 |
| 恢復率語意與原生條件 | 描述鍵 `loc_trait_bespoke_toughness_regen_on_punching_elites_desc`，hash `876ccdea`；EN/ZH 說明每秒韌性恢復，但沒有展開恢復流程。 | scripts/extension_systems/toughness/player_unit_toughness_extension.lua:116-184 `_update_toughness`；scripts/extension_systems/slot/slot_system.lua:80-116,675-707 `_update_occupied_slots`；scripts/extension_systems/slot/utilities/slot.lua:42-74 geometric slots；scripts/settings/toughness/archetype_toughness_templates.lua:69-89 Ogryn base rate；scripts/settings/toughness/weapon_toughness_templates.lua:9-31 default weapon multipliers | 文件未涵蓋 | 0.5 加進合格協同恢復修正；速率仍受無 AI 佔用近戰位置或 all-times coherency 解鎖、倍率、缺損、delay 與停用條件控制。 |
| 事件時間戳與立即恢復 | 描述鍵 `loc_trait_bespoke_toughness_regen_on_punching_elites_desc`，hash `876ccdea`；文字未說命中會即時補韌性或設定延遲。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:1233-1238 `proc_func`；scripts/extension_systems/toughness/player_unit_toughness_extension.lua:356-360 `set_toughness_regen_delay`；scripts/utilities/attack/attack.lua:376-383 damage/HitReaction before `_handle_buffs` | 文件未涵蓋 | 合格事件在傷害後重設恢復時間戳；韌性要等後續有效更新，沒有立即恢復呼叫。 |
| 重複命中、刷新與切槽 | 描述鍵 `loc_trait_bespoke_toughness_regen_on_punching_elites_desc`，hash `876ccdea`；未列層數、冷卻、刷新、切槽或卸裝細節。 | scripts/extension_systems/buff/buffs/proc_buff.lua:78-104、173-195、247-254、304-355；scripts/extension_systems/weapon/player_unit_weapon_extension.lua:633-693、743-785 | 文件未涵蓋 | 此單一 ProcBuff 無額外 cooldown；合格事件刷新活動起點，切槽持用 gate 關閉屬性但不暫停計時，卸裝才移除。 |
