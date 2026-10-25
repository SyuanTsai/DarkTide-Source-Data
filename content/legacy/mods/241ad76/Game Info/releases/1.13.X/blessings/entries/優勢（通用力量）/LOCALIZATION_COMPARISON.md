# 優勢（通用力量）：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_elite_kills_grants_stackable_power`／hash`d2dd2363`；描述鍵`loc_trait_bespoke_elite_kills_grants_stackable_power_desc`／hash`cd2a709c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Superiority／優勢。

- 文件名稱：優勢（通用力量）(Superiority)。

- 適用武器：撬棍、烈焰力場劍；描述鍵`loc_trait_bespoke_elite_kills_grants_stackable_power_desc`／hash`cd2a709c`。

- 英文模板：{power_level:%s} Strength for {time:%s} s on Elite and Specialist Kill. Stacks {stacks:%s} times, deteriorating one at a time.

- 繁中模板：擊殺精英和專家後威力提高{power_level:%s}，持續{time:%s}秒。可堆疊{stacks:%s}層，且層數會隨時間減少，每次減少一層。

- **靜態重建**：以下把同一 EN/ZH RAW 模板的 formatter 值逐級代入。`power_level` 依 own tier 百分比格式器加上 `+`；`time` 取本項父模板 7 秒，`stacks` 取 child `max_stacks=3`。

| 等級 | 英文靜態重建 | 繁中靜態重建 |
|---|---|---|
| I | +5% Strength for 7 s on Elite and Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英和專家後威力提高+5%，持續7秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |
| II | +7.5% Strength for 7 s on Elite and Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英和專家後威力提高+7.5%，持續7秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |
| III | +10% Strength for 7 s on Elite and Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英和專家後威力提高+10%，持續7秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |
| IV | +12.5% Strength for 7 s on Elite and Specialist Kill. Stacks 3 times, deteriorating one at a time. | 擊殺精英和專家後威力提高+12.5%，持續7秒。可堆疊3層，且層數會隨時間減少，每次減少一層。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級值與百分比格式器 | RAW `loc_trait_bespoke_elite_kills_grants_stackable_power_desc`／hash `cd2a709c`；EN、繁中同一 hash 均以 `{power_level:%s}` 顯示力量增幅。 | `scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua:485–544`；`scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua:373–432`；`scripts/utilities/trait_value_parser.lua:7–21,51–72`。 | 符合 | 兩 own tiers p=.05/.075/.10/.125；百分比預設乘100、保留小數並加 prefix「+」，顯示 +5/+7.5/+10/+12.5%。 |
| 擊殺目標類別 | RAW 同 key/hash `cd2a709c`：EN “on Elite and Specialist Kill”；繁中「擊殺精英和專家後」。 | `scripts/settings/buff/helper_functions/check_proc_functions.lua` `CheckProcFunctions.on_elite_or_special_kill:120–134` 檢查 `attack_result=died` 且 `tags.elite OR tags.special`。 | 符合 | 原文列出精英與專家兩類；程式以任一類通過，不要求同一敵人同時具兩標籤。 |
| 持用條件、事件與時點 | RAW 同 key/hash `cd2a709c` 提到擊殺，未述持用槽與快取時序。 | `scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua:78–96`；`scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua:29–47`；`scripts/settings/buff/helper_functions/conditional_functions.lua:43–60`；`scripts/utilities/attack/attack.lua` local `_handle_buffs:550–623,669–711`；`scripts/extension_systems/buff/player_unit_buff_extension.lua` `fixed_update:131–145`。 | 文件未涵蓋 | own wrappers 要求祝福槽持用；Attack 死亡分支送 on_kill，之後才更新 proc/stat cache。 |
| 三層與七秒衰退 | RAW 同 key/hash `cd2a709c`：EN “Stacks 3 times, deteriorating one at a time.”；繁中「可堆疊3層…每次減少一層」。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua:78–107；scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua:29–58；scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua init:10–39, destroy:42–54, update_proc_events:56–90, update:92–163。 | 符合 | 兩 wrapper child_duration=7、max_stacks=3、offset=-1、stacks_to_remove=1；佔位不算有效層，新增層重設共用期限。 |
| 力量與最終傷害範圍 | RAW 同 key/hash `cd2a709c` 用 “Strength”／「威力」，未表明最終傷害比例。 | `scripts/utilities/attack/power_level.lua` `power_level_buff_modifier:25–60`、`scale_power_level_to_power_type_curve:63–91`；`scripts/utilities/attack/damage_calculation.lua` `_base_damage:587–614`。 | 符合 | global power 進入所有 attack_type 共用力量倍率；damage_type 與 attack_type 分開。純 push profile attack=0、impact 非零，力量作用於衝擊路徑，不等於普通 HP 傷害倍率。 |
| Crowbar action aliases、特殊模式與 sticky 追加命中 | RAW loc_trait_bespoke_elite_kills_grants_stackable_power_desc hash cd2a709c 只描述擊殺觸發；未列 action chain、特殊切換及 sticky 額外命中路徑。 | Crowbar scripts/settings/equipment/weapon_templates/crowbars/crowbar_p1_m1.lua:1078–1128,1129–1412,1414–1535；scripts/settings/equipment/weapon_templates/base_template_settings.lua:323–339；scripts/settings/equipment/weapon_templates/crowbars/settings_templates/crowbar_damage_profile_templates.lua:52–107,159–176,603–625,723–742；ActionSweep._update_hit_stickyness scripts/extension_systems/weapon/actions/action_sweep.lua:720–809,842–860；scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua:966–1007。 | 文件未涵蓋 | 普通、special 與 from-activate actions 透過 base aliases 保留 profile；toggle 不造成擊殺。sticky tick 帶原武器 item 並以 melee Attack.execute 執行，若造成合格擊殺可觸發。閃避離開另用 sticky_dodge_push：attack=0、impact 非零，只造成衝擊／擊退，不造成 HP 擊殺。 |
| Force Sword pushfollow fling 與純推擊 | RAW loc_trait_bespoke_elite_kills_grants_stackable_power_desc hash cd2a709c 描述 Strength，未分 attack type、damage type、impact 或 HP 傷害。 | Force Sword M1/M2/M3 profiles：scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua:1356–1402、forcesword_p1_m2.lua:1270–1312、forcesword_p1_m3.lua:1137–1179；ActionDamageTarget._deal_damage scripts/extension_systems/weapon/actions/action_damage_target.lua:105–160；ActionPush scripts/extension_systems/weapon/actions/action_push.lua:52–115；PushAttack.push scripts/utilities/attack/push_attack.lua:32–88；common push profiles scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua:82–130。 | 文件未涵蓋 | 三個 fling 的 damage_type 為 warp／physical／physical，但 ActionDamageTarget attack_type=ranged，仍受 global power。純 push profile attack=0、impact 非零；衝擊不等於普通生命值傷害。 |
| Force Sword M1/M2 special-active sticky 追加命中 | RAW 同 key/hash cd2a709c：EN “on Elite and Specialist Kill”；繁中「擊殺精英和專家後」。沒有列出特殊啟用後的黏附追加命中。 | scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua:103–125,150–172,395–425,492–520；scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua:103–123,149–171,396–420,490–515；scripts/extension_systems/weapon/actions/action_sweep.lua:ActionSweep._can_start_stickyness 666–713、ActionSweep._process_sweep_results 1091–1133、ActionSweep._update_hit_stickyness 720–809；scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua:445–530,744–840。 | 文件未涵蓋 | M1/M2 的特殊啟用掃擊沿用各自 light/heavy sticky settings；符合部位／護甲且掃擊中止時附著追加 profile。tick 以 melee Attack.execute 帶原武器 item，profile 有正 attack，因此可套用有效 global power，也可能在實際擊殺合格目標時送 on_kill；M3 使用 active-cleave 路徑。 |
