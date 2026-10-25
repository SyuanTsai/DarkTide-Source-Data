# 燃燒靈魂：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_warp_burninating_on_crit`／hash`f33675ec`；描述鍵`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash`9144457a`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Blazing Spirit／燃燒靈魂。

- 文件名稱：燃燒靈魂(Blazing Spirit)。

- 適用武器：烈焰力場劍；描述鍵`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash`9144457a`。

- 英文模板：`Enemy gains {stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). `

- 繁中模板：暴擊使敵人疊加{stacks:%s}層靈魂之火，最多疊加{max_stacks:%s}層。

- **靜態重建**：- 使用 `format_type = "number"`，逐級將實際 tier override 整數代入 `{stacks:%s}` 與 `{max_stacks:%s}`；層數以整數顯示，不加百分比符號。

| Tier | English, locale 0 | 繁體中文，locale 16 |
|---|---|---|
| I | Enemy gains 1 Stack(s) of Soulblaze on Critical Hit, to a maximum of 3 Stack(s). | 暴擊使敵人疊加1層靈魂之火，最多疊加3層。 |
| II | Enemy gains 2 Stack(s) of Soulblaze on Critical Hit, to a maximum of 6 Stack(s). | 暴擊使敵人疊加2層靈魂之火，最多疊加6層。 |
| III | Enemy gains 3 Stack(s) of Soulblaze on Critical Hit, to a maximum of 9 Stack(s). | 暴擊使敵人疊加3層靈魂之火，最多疊加9層。 |
| IV | Enemy gains 4 Stack(s) of Soulblaze on Critical Hit, to a maximum of 12 Stack(s). | 暴擊使敵人疊加4層靈魂之火，最多疊加12層。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 每級新增層數與上限 | EN RAW：Enemy gains {stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). ；繁中 RAW：暴擊使敵人疊加{stacks:%s}層靈魂之火，最多疊加{max_stacks:%s}層。；`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash `9144457a`。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua:574–627 的 format_values/trait override；scripts/utilities/trait_value_parser.lua:77–110 local _try_format_values、189–202 _number_value_formatter、204–228 _num_decimals。 | 符合 | RAW兩個數值佔位符逐級讀取每次請求層數與本級上限，整數 formatter 不轉成百分比。 |
| 暴擊命中條件 | EN RAW：Enemy gains {stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). ；繁中 RAW：暴擊使敵人疊加{stacks:%s}層靈魂之火，最多疊加{max_stacks:%s}層。；`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash `9144457a`。 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2259–2290；scripts/settings/buff/helper_functions/check_proc_functions.lua:388–390 on_melee_crit_hit、396–398 on_shout_crit_hit、465–467 on_damaging_hit、721–727 on_item_match。 | 文件未涵蓋 | RAW未列同 item、手持及正傷害等程式檢查；文字沒有與這些條件相反的敘述。 |
| 同目標層數及上限互動 | EN RAW：Enemy gains {stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). ；繁中 RAW：暴擊使敵人疊加{stacks:%s}層靈魂之火，最多疊加{max_stacks:%s}層。；`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash `9144457a`。 | scripts/settings/buff/buff_utils.lua:37–79 add_debuff_on_hit_start/add_proc_debuff；scripts/extension_systems/buff/buff_extension_base.lua:412–416 add_internally_controlled_buff_with_stacks；target-cap review SHA dcfdb6d99385ab57914a72e60fb86dc917b8bbfa072226cc801b9e4c39130d05。 | 文件未涵蓋 | RAW說明本級最大值，但未說明其他來源的 warp_fire 層數共用、到上限刷新及超過本級上限時不刷新。 |
| 特殊模式、純推擊與追擊 | EN RAW：Enemy gains {stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). ；繁中 RAW：暴擊使敵人疊加{stacks:%s}層靈魂之火，最多疊加{max_stacks:%s}層。；`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash `9144457a`。 | scripts/extension_systems/weapon/actions/action_sweep.lua:1330–1365 _process_hit、1496–1501 Attack.execute；scripts/extension_systems/weapon/actions/action_sweep.lua:720–786 sticky Attack.execute、827–857 dodge-exit Attack.execute；scripts/utilities/attack/push_attack.lua:58–104 PushAttack.push；scripts/extension_systems/weapon/actions/action_damage_target.lua:105–164 _deal_damage；scripts/extension_systems/weapon/actions/action_activate_special.lua:39–62 fixed_update. | 文件未涵蓋 | RAW未逐列描述各型號動作路徑；M1／M2 黏附追加命中沿用近戰類型、同物品與當下暴擊旗標，M3 無此路徑；純 push 與 ranged follow-up 不符合本項條件。 |
| 目標靈魂之火期限與週期傷害 | EN RAW：Enemy gains {stacks:%s} Stack(s) of Soulblaze on Critical Hit, to a maximum of {max_stacks:%s} Stack(s). ；繁中 RAW：暴擊使敵人疊加{stacks:%s}層靈魂之火，最多疊加{max_stacks:%s}層。；`loc_trait_bespoke_warp_burninating_on_crit_desc`／hash `9144457a`。 | scripts/settings/buff/weapon_buff_templates.lua:101–150 warp_fire；scripts/extension_systems/buff/buffs/interval_buff.lua:17–64 首次 interval／到期順序、66–117 owner duration bonus；scripts/extension_systems/buff/buffs/buff.lua:619–630 Buff.set_start_time；scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua:417–442 warpfire profile. | 文件未涵蓋 | RAW未說明目標效果的31層總上限、8秒基礎期限、首次0.75秒週期時點、加層不重設週期、期限更新順序或以堆疊數計算的Power Level。 |
