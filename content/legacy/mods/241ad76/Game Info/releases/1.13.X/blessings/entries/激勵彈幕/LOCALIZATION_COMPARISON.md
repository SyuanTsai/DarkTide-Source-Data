# 激勵彈幕：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_on_continuous_fire_alternative`／hash`02d303b6`；描述鍵`loc_trait_bespoke_toughness_on_continuous_fire_alternative_desc`／hash`e354597f`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Inspiring Barrage／激勵彈幕。

- 文件名稱：激勵彈幕(Inspiring Barrage)。

- 適用武器：反衝者、惡棍槍；描述鍵`loc_trait_bespoke_toughness_on_continuous_fire_alternative_desc`／hash`e354597f`。

- 英文模板：{toughness:%s} Toughness for every shot fired during continuous fire. Stacks {stacks:%s} times.

- 繁中模板：持續射擊期間的每次射擊都會使你的韌性增加{toughness:%s}，最多疊加{stacks:%s}層。

- **靜態重建**：依兩個 RAW 欄位與各級 own formatter 值替換 toughness，重建英文與繁中顯示；這是靜態文字重建，並非遊戲畫面。

| 等級 | 英文靜態輸出 | 繁中靜態輸出 |
|---|---|---|
| I | +1% Toughness for every shot fired during continuous fire. Stacks 5 times. | 持續射擊期間的每次射擊都會使你的韌性增加+1%，最多疊加5層。 |
| II | +2% Toughness for every shot fired during continuous fire. Stacks 5 times. | 持續射擊期間的每次射擊都會使你的韌性增加+2%，最多疊加5層。 |
| III | +3% Toughness for every shot fired during continuous fire. Stacks 5 times. | 持續射擊期間的每次射擊都會使你的韌性增加+3%，最多疊加5層。 |
| IV | +4% Toughness for every shot fired during continuous fire. Stacks 5 times. | 持續射擊期間的每次射擊都會使你的韌性增加+4%，最多疊加5層。 |

各級沿用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每次射擊與連擊倍率 | content/localization/items；locale 0；loc_trait_bespoke_toughness_on_continuous_fire_alternative_desc，hash e354597f。RAW：{toughness:%s} Toughness for every shot fired during continuous fire. Stacks {stacks:%s} times. | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua 125–163 format_values；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua 125–163 format_values；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 1907–1948 _number_of_continuous_fire_steps 讀 combo_count 並以 min(steps,5) 限乘數；同檔 2004–2013 檢查彈藥事件。 | 一致 | 各 tier 的 toughness 欄位是固定韌性百分比；程式以連擊計數控制每次直接回復，並將倍率上限設為五。 |
| 每次射擊與連擊倍率 | content/localization/items；locale 16；同一描述鍵 hash e354597f。RAW：持續射擊期間的每次射擊都會使你的韌性增加{toughness:%s}，最多疊加{stacks:%s}層。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua 125–163 formatter；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua 125–163 formatter；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 2004–2013 specific_check_proc_funcs.on_ammo_consumed 更新計數，2020–2025 specific_proc_func.on_ammo_consumed 直接回復 toughness_fixed_percentage × min(combo_count,5)，不建立持續五層 stat buff。 | 文件未涵蓋 | 繁中描述沒有說明連擊計數讀取及事件／層數資料型態；「疊加」不明確聲稱存在持續 Buff 層。 |
| 連續射擊的操作條件 | content/localization/items；locale 0；同一描述鍵 hash e354597f。RAW只說 fired shot during continuous fire。 | scripts/utilities/action/action_handler.lua 494–512 ActionHandler._update_combo_count；scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua 192–360 與 scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua 197–394 的射擊 action；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 2004–2013 specific_check_proc_funcs.on_ammo_consumed。 | 文件未涵蓋 | RAW未定義連擊計數如何開始、保留或重設；兩型號 own action flags 與逾時計數重設不同。 |
| 彈藥事件與攻擊命中 | content/localization/items；locale 16／0；同一描述鍵 hash e354597f，沒有命中、擊殺、弱點或爆擊文字。 | scripts/extension_systems/weapon/actions/action_shoot.lua 481–566 ActionShoot._spend_ammunition 發出彈藥事件；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 1997–2017 註冊 on_ammo_consumed/on_shoot_finish 及檢查，2020–2029 specific_proc_func.on_ammo_consumed 回復、on_shoot_finish 無作用。 | 文件未涵蓋 | 實作由彈藥事件觸發，不要求命中、擊殺、弱點或爆擊；原文沒有列出這些條件。 |
| 顯示倍率欄位 | content/localization/items；locale 0／16；同一描述鍵 hash e354597f 的實際占位符只有 toughness 與 stacks。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua 125–163 format_values；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua 125–163 format_values；ammo 欄位為未被 RAW 引用的字串 10%。 | 一致 | 未使用的 formatter ammo 欄位不會進入該 RAW 顯示，也不構成 10% 彈藥觸發條件。 |
| 直接回復與上限 | content/localization/items；locale 16；同一描述鍵 hash e354597f；RAW未描述滿韌性或回復封鎖。 | scripts/settings/buff/helper_functions/shared_buff_functions.lua 10–27 SharedBuffFunctions.regain_toughness_proc_func；scripts/extension_systems/toughness/player_unit_toughness_extension.lua 253–285 PlayerUnitToughnessExtension.recover_percentage_toughness，447–475 _toughness_regen_disabled。 | 文件未涵蓋 | 實際回復忽略 stat-buff 修正但仍按缺額封頂，並使用正常狀態封鎖檢查。 |
| 切換及卸下 | content/localization/items；locale 0／16；同一描述鍵 hash e354597f；RAW未描述持用或裝備生命週期。 | scripts/settings/buff/helper_functions/conditional_functions.lua 43–59 ConditionalFunctions.is_item_slot_wielded；scripts/extension_systems/weapon/player_unit_weapon_extension.lua 633–643 on_equip，652–662 on_wieldable_slot_unequipped，743–785 on_slot_unwielded。 | 文件未涵蓋 | 切槽關閉 held gate；卸下裝備槽才移除已安裝的 on_equip Buff。 |
| 事件來源與處理時持用 | content/localization/items；locale 0/16；desc key loc_trait_bespoke_toughness_on_continuous_fire_alternative_desc hash e354597f；RAW 提及射擊與連續射擊，未描述事件來源 item/slot。 | scripts/extension_systems/weapon/actions/action_shoot.lua ActionShoot._spend_ammunition 540-548 仅傳 t/ammo_usage/charged_ammo/crit；scripts/extension_systems/buff/buff_extension_base.lua 233-255 將 owner event queue 分發；scripts/extension_systems/buff/buffs/proc_buff.lua ProcBuff 304-338 沒有通用 item/slot equality；scripts/settings/buff/helper_functions/conditional_functions.lua ConditionalFunctions.is_item_slot_wielded 43-59 檢查目前 wielded slot；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 1997-2025 忽略 event params、讀目前 weapon_action combo。 | 文件未涵蓋 | 持用條件是事件處理時的目前槽位，並無獨立的事件來源 item/slot 等值檢查；不外推跨武器或投擲路徑。 |
