# 燃燒靈魂（靈能法杖與雙手力場劍）：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_warpfire_burn_on_crit`／hash`47a95669`；描述鍵`loc_trait_bespoke_warpfire_burn_on_crit_desc`／hash`d687cdb8`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Blazing Spirit／燃燒靈魂。

- 文件名稱：燃燒靈魂（靈能法杖與雙手力場劍）(Blazing Spirit)。

- 適用武器：虛空爆破力場法杖、虛空打擊力場法杖；描述鍵`loc_trait_bespoke_warpfire_burn_on_crit_desc`／hash`d687cdb8`。

- 英文模板：Enemy gains {stacks:%s} Stacks of Soulblaze on Critical Hit.

- 繁中模板：致命一擊命中後，使敵人疊加{stacks:%s}層靈魂之火。

- 適用武器：烈焰力場巨劍；描述鍵`loc_trait_bespoke_warpfire_burn_on_crit_special_desc`／hash`b5a14e87`。

- 英文模板：Enemy gains {stacks:%s} Stacks of Soulblaze on Critical Hit. Limited to {limit_stacks:%s} Stacks on Warpshock Slash Critical Hit.

- 繁中模板：暴擊時敵人獲得{stacks:%s}層靈魂之火。 亞空間電擊斬爆擊時，上限為{limit_stacks:%s}層。

- **靜態重建**：使用整數 formatter 把實際 tier override 代入各語系原始模板；不新增符號或改寫原句。

| Tier | Staff English RAW 重建 | Staff 繁中 RAW 重建 | Force Greatsword English RAW 重建 | Force Greatsword 繁中 RAW 重建 |
|---|---|---|---|---|
| I | Enemy gains 1 Stacks of Soulblaze on Critical Hit. | 致命一擊命中後，使敵人疊加1層靈魂之火。 | Enemy gains 1 Stacks of Soulblaze on Critical Hit. Limited to 1 Stacks on Warpshock Slash Critical Hit. | 暴擊時敵人獲得1層靈魂之火。 亞空間電擊斬爆擊時，上限為1層。 |
| II | Enemy gains 2 Stacks of Soulblaze on Critical Hit. | 致命一擊命中後，使敵人疊加2層靈魂之火。 | Enemy gains 2 Stacks of Soulblaze on Critical Hit. Limited to 1 Stacks on Warpshock Slash Critical Hit. | 暴擊時敵人獲得2層靈魂之火。 亞空間電擊斬爆擊時，上限為1層。 |
| III | Enemy gains 3 Stacks of Soulblaze on Critical Hit. | 致命一擊命中後，使敵人疊加3層靈魂之火。 | Enemy gains 3 Stacks of Soulblaze on Critical Hit. Limited to 2 Stacks on Warpshock Slash Critical Hit. | 暴擊時敵人獲得3層靈魂之火。 亞空間電擊斬爆擊時，上限為2層。 |
| IV | Enemy gains 4 Stacks of Soulblaze on Critical Hit. | 致命一擊命中後，使敵人疊加4層靈魂之火。 | Enemy gains 4 Stacks of Soulblaze on Critical Hit. Limited to 3 Stacks on Warpshock Slash Critical Hit. | 暴擊時敵人獲得4層靈魂之火。 亞空間電擊斬爆擊時，上限為3層。 |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 一般暴擊請求量 | EN RAW: Enemy gains {stacks:%s} Stacks of Soulblaze on Critical Hit.；繁中 RAW：致命一擊命中後，使敵人疊加{stacks:%s}層靈魂之火。`loc_trait_bespoke_warpfire_burn_on_crit_desc`／hash `d687cdb8`。 | P1 tier overrides：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua:196–234；P4 tier overrides：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua:196–234；巨劍 tier overrides：scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua:136–204；local _try_format_values：scripts/utilities/trait_value_parser.lua:77–110；_number_value_formatter：同檔189–202；_num_decimals：同檔204–228。 | 符合 | 每次合格暴擊的層數請求來自各 trait tier override；RAW placeholder 由整數 formatter 代入。 |
| Warpshock Slash 請求量與總上限 | EN RAW: Enemy gains {stacks:%s} Stacks of Soulblaze on Critical Hit. Limited to {limit_stacks:%s} Stacks on Warpshock Slash Critical Hit.；繁中 RAW：暴擊時敵人獲得{stacks:%s}層靈魂之火。 亞空間電擊斬爆擊時，上限為{limit_stacks:%s}層。`loc_trait_bespoke_warpfire_burn_on_crit_special_desc`／hash `b5a14e87`。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua:136–204 `num_stacks_on_proc_special`；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2291–2331 `num_stacks_on_proc_func` 按 `on_warp_slice_crit_hit` profile 選特殊請求量。 | 符合 | 每次真正特殊斬擊暴擊請求 1／1／2／3 層；雙手巨劍每級目標總上限 3／6／9／12 是另一個程式值，RAW 沒列出此總上限。 |
| 觸發條件與實際攻擊路徑 | 一般／特殊 EN 與繁中 RAW 分別為 key `loc_trait_bespoke_warpfire_burn_on_crit_desc` hash `d687cdb8`、`loc_trait_bespoke_warpfire_burn_on_crit_special_desc` hash `b5a14e87`；只寫 Critical Hit／暴擊，未列各動作條件。 | P1 wrapper：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua:20–21；P4 wrapper：scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua:19–20；base：scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2242–2331；`on_ranged_hit`／`on_explosion_hit`／`on_melee_crit_hit`／`on_warp_slice_crit_hit`：scripts/settings/buff/helper_functions/check_proc_functions.lua:362–402、428–436；`Attack._handle_buffs`：scripts/utilities/attack/attack.lua:577–623；純推擊下游：scripts/utilities/attack/push_attack.lua:78–86 `Attack.execute` 傳入 `attack_types.push`；卸下來源武器：scripts/extension_systems/weapon/player_unit_weapon_extension.lua:652–662、1290–1324。 | 文件未涵蓋 | RAW 未逐項列手持、同物品、命中事件、法杖 ranged／explosion 差異、巨劍正傷害與真實 warp_slice profile，也未列各 Mark 接線。 |
| 共享目標層數、上限與刷新 | EN 與繁中 RAW 只描述命中新增 Soulblaze 層數；未列跨來源共享層數、目標 cap 或期限刷新。 | `add_proc_debuff`：scripts/settings/buff/buff_utils.lua:48–79；`current_stacks`／`refresh_duration_of_stacking_buff`：scripts/extension_systems/buff/buff_extension_base.lua:592–608；零層 `add_stacking_buff`：同檔412–416；已驗收 cap 證據 SHA `dcfdb6d99385ab57914a72e60fb86dc917b8bbfa072226cc801b9e4c39130d05`。 | 文件未涵蓋 | 程式按目標既有同名 `warp_fire` 層數共算；等於本項 cap 可刷新但不加層，超過 cap 則不加層也不刷新。 |
| 目標週期傷害與期限 | EN 與繁中 RAW 沒有列目標層數上限、基礎期限、首次 tick 或 Power Level 公式。 | scripts/settings/buff/weapon_buff_templates.lua:101–150 `warp_fire`；scripts/extension_systems/buff/buffs/interval_buff.lua:17–64、66–117 `IntervalBuff`；scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua:417–442 `warpfire`。 | 文件未涵蓋 | 週期傷害來自目標 Soulblaze buff 與其 profile／計時器，不是暴擊祝福直接增加的傷害百分比；期限可能受 owner 狀態影響。 |
