# 斬首者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_stacking_rending_on_one_hit_kills`／hash`fc38d118`；描述鍵`loc_trait_bespoke_stacking_rending_on_one_hit_kills_desc`／hash`685eb9c3`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Decapitator／斬首者。

- 文件名稱：斬首者(Decapitator)。

- 適用武器：戰鬥斧、動力彎刀、機械神教動力劍、骨鋸；描述鍵`loc_trait_bespoke_stacking_rending_on_one_hit_kills_desc`／hash`685eb9c3`。

- 英文模板：{finesse:%s} Finesse for {time:%s}s on Enemy One-Shot. Stacks {stacks:%s} times.

- 繁中模板：一擊斃命擊殺敵人後，{time:%s}秒內靈巧增加{finesse:%s}，最多疊加{stacks:%s}層。

- **靜態重建**：以下依各實作 tier 的 finesse 值、五秒 duration、五層上限及百分比／正號 formatter 靜態重建同 hash RAW 描述。

| 等級 | 戰鬥斧／骨鋸 English RAW | 動力劍 English RAW | 戰鬥斧／骨鋸 繁中 RAW | 動力劍 繁中 RAW |
|---|---|---|---|---|
| I | ``+14% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``+10% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+14%，最多疊加5層。`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+10%，最多疊加5層。`` |
| II | ``+16% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``+12% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+16%，最多疊加5層。`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+12%，最多疊加5層。`` |
| III | ``+18% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``+14% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+18%，最多疊加5層。`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+14%，最多疊加5層。`` |
| IV | ``+20% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``+16% Finesse for 5s on Enemy One-Shot. Stacks 5 times.`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+20%，最多疊加5層。`` | ``一擊斃命擊殺敵人後，5秒內靈巧增加+16%，最多疊加5層。`` |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發事件 | RAW：`{finesse:%s} Finesse for {time:%s}s on Enemy One-Shot. Stacks {stacks:%s} times.`；繁中 RAW：「一擊斃命擊殺敵人後，{time:%s}秒內靈巧增加{finesse:%s}，最多疊加{stacks:%s}層。」（描述鍵 `loc_trait_bespoke_stacking_rending_on_one_hit_kills_desc`，hash `685eb9c3`；資源 SHA `c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`）。 | `local _handle_attack`（`scripts/utilities/attack/attack.lua:508–514, 669–710`）要求 `died`、`damage + permanent_damage >= max_health`、`current_health_damage <= max_health * 0.2` 才令 `one_hit_kill` 成立；父模板 checker `on_one_hit_kill`（`scripts/settings/buff/helper_functions/check_proc_functions.lua:68–74`）。 `on_kill` is delivered during buff processing (`scripts/extension_systems/buff/buff_extension_base.lua:233–271`); the new stat is available after cache update for later attacks. | 文件未涵蓋 | RAW 未寫出旗標的健康門檻與事件欄位；詳細條件是程式補充，非 RAW 矛盾。 |
| 來源物品與持用 | RAW 未列來源 item 或持用槽條件；英中同 hash。 | `on_item_match` in `scripts/settings/buff/helper_functions/check_proc_functions.lua:721–727` compares event attacking item with trait source item; `ProcBuff._can_add_stat_and_keywords` in `scripts/extension_systems/buff/buffs/proc_buff.lua:247–253, 304–355` gates held-slot state and event acceptance. | 文件未涵蓋 | 四個 own parent 實際接入上述條件；不把另一武器擊殺算成本武器觸發。 |
| 效果欄位 | RAW 說 Finesse，繁中寫靈巧；兩語 hash `685eb9c3`。 | Own complete tier and wrapper ranges: scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p1.lua:274–337; scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p1_buff_templates.lua:27–52; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua:551–614; scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua:309–335; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua:323–386; scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua:63–88; scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua:114–177; scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua:19–44; effective stack offset is read by `Buff.stat_buff_stacking_count` in `scripts/extension_systems/buff/buffs/buff.lua:397–429`; child stat override/apply is `Buff._calculate_stat_buffs` in `scripts/extension_systems/buff/buffs/buff.lua:689–747`. | 符合 | 實際改變近戰靈巧傷害部分；舊 Combat Axe trait 名稱中的 `rending` 並非 armor-rending 欄位。 |
| tier、堆疊和時間 | RAW 有 tier placeholder、5 秒與最多 5 層；未寫刷新／移除順序。 | `WeaponTraitParentProcBuff.update` in `scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua:92–132` checks strict `remove_t < t`, removes `ceil((t-remove_t)/duration)` elapsed stacks up to the placeholder boundary, then restarts the shared timer at current `t`; accepted stack-add timer reset is `:134–163`. `init` `:10–39`, `destroy` `:42–54`, accepted event/stack add `:56–90`. | 符合 | 有效層共用期限；達上限仍刷新，更新延遲時會補扣已跨過的多個期限。RAW 未說明這些計時細節。 |
| 攻擊路徑邊界 | RAW 未提純推擊、profile、特殊掃掠或 delayed rip。 | Bound weapon actions and profile selectors are individually recorded with exact path/start_line/end_line in source blocks; `local _handle_attack` in `scripts/utilities/attack/attack.lua:508–514, 577–623, 669–710`; zero-health pure-push profile in `scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua:82–126`; Saw rip profiles in `scripts/settings/equipment/weapon_templates/saws/settings_templates/saw_damage_profile_templates.lua:984–1093`. | 文件未涵蓋 | 只有產生合格擊殺事件的攻擊才可能觸發；不將起手、切換或零傷害推擊算成擊殺，也不由 skip_on_hit 推定 skip_on_kill。 |
| 實際綁定範圍 | RAW name/description localization 不列 weapons 或 marks。 | Seven actual binding imports/appends are individually recorded in UI refs; paths: `scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p1_m1.lua:14,1270–1272`, `_m2.lua:14,1225–1227`, `_m3.lua:15,1530–1532`, `scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua:11,1741–1743`, `_m2.lua:11,2023–2025`, `powersword_p3_m1.lua:15,3372–3374`, and `scripts/settings/equipment/weapon_templates/saws/saw_p1_m1.lua:14,1833–1835`. | 文件未涵蓋 | 實際範圍只採目前四個 trait implementations、七個 binding marks。 |
