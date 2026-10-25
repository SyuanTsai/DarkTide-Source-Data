# 護甲之禍：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_rend_armor_on_charged_shots`／hash`c3565b9b`；描述鍵`loc_trait_bespoke_rend_armor_on_charged_shots_desc`／hash`363a7233`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Armourbane／護甲之禍。

- 文件名稱：護甲之禍(Armourbane)。

- 適用武器：冥潮鐳射槍；描述鍵`loc_trait_bespoke_rend_armor_on_charged_shots_desc`／hash`363a7233`。

- 英文模板：Adds {min_stack_count:%s}-{max_stack_count:%s} stacks of 2.5% Brittleness to hit enemies, based on charge level.

- 繁中模板：根據充能等級疊加{min_stack_count:%s}至{max_stack_count:%s}層脆弱，每層提升2.5%。

- **靜態重建**：依原文兩個數值欄位及固定來源的數字格式，將各級實際最小與最大層數代回英文與繁中 RAW；這是靜態文字重建，並非遊戲畫面

| 等級 | 英文靜態輸出 | 繁中靜態輸出 |
|---|---|---|
| I | Adds 2-6 stacks of 2.5% Brittleness to hit enemies, based on charge level. | 根據充能等級疊加2至6層脆弱，每層提升2.5%。 |
| II | Adds 4-8 stacks of 2.5% Brittleness to hit enemies, based on charge level. | 根據充能等級疊加4至8層脆弱，每層提升2.5%。 |
| III | Adds 6-10 stacks of 2.5% Brittleness to hit enemies, based on charge level. | 根據充能等級疊加6至10層脆弱，每層提升2.5%。 |
| IV | Adds 8-12 stacks of 2.5% Brittleness to hit enemies, based on charge level. | 根據充能等級疊加8至12層脆弱，每層提升2.5%。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 充能對應層數範圍 | content/localization/items；locale 0；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「Adds {min_stack_count:%s}-{max_stack_count:%s} stacks of 2.5% Brittleness to hit enemies, based on charge level.」 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua 301–421 的 templates.weapon_trait_bespoke_lasgun_p2_targets_receive_rending_debuff_on_charged_shots.format_values；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 611–649 的 num_stacks_on_proc_func 依實際 charge level 取值。 | 一致 | 英文RAW明示依充能等級取得最小至最大層數，與own tier值一致。 |
| 充能對應層數範圍 | content/localization/items；locale 16；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「根據充能等級疊加{min_stack_count:%s}至{max_stack_count:%s}層脆弱，每層提升2.5%。」 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua 301–421 的 templates.weapon_trait_bespoke_lasgun_p2_targets_receive_rending_debuff_on_charged_shots.format_values；scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 611–649 的 num_stacks_on_proc_func 依實際 charge level 取值。 | 一致 | 繁中RAW明示依充能等級疊加區間，與own tier值一致。 |
| 每層脆弱 | content/localization/items；locale 0；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「Adds {min_stack_count:%s}-{max_stack_count:%s} stacks of 2.5% Brittleness to hit enemies, based on charge level.」 | scripts/settings/buff/weapon_buff_templates.lua 366–376 的 templates.rending_debuff；每層增加 .025 rending_multiplier。 | 一致 | 英文RAW的每層2.5% Brittleness與目標 debuff 數值一致；不是直接傷害加成。 |
| 每層脆弱 | content/localization/items；locale 16；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「根據充能等級疊加{min_stack_count:%s}至{max_stack_count:%s}層脆弱，每層提升2.5%。」 | scripts/settings/buff/weapon_buff_templates.lua 366–376 的 templates.rending_debuff；每層增加 .025 rending_multiplier。 | 一致 | 繁中RAW的每層2.5%脆弱與目標 debuff 數值一致；實際傷害依護甲等條件結算。 |
| on_hit、持用與目標條件 | content/localization/items；locale 0；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「Adds {min_stack_count:%s}-{max_stack_count:%s} stacks of 2.5% Brittleness to hit enemies, based on charge level.」 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 599–610 的 targets_receive_rending_debuff_on_charged_shots；scripts/settings/buff/helper_functions/check_proc_functions.lua 606–608 attacked_unit_is_minion、622–624 hit_has_charge_level、721–727 on_item_match。實際另需held slot及on_hit。 | 文件未涵蓋 | RAW只提命中敵人，未逐項列出目前手持、相同物品、minion分類及charge欄位 gate；省略不是反向陳述。 |
| on_hit、持用與目標條件 | content/localization/items；locale 16；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「根據充能等級疊加{min_stack_count:%s}至{max_stack_count:%s}層脆弱，每層提升2.5%。」 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 599–610 的 targets_receive_rending_debuff_on_charged_shots；scripts/settings/buff/helper_functions/check_proc_functions.lua 606–608 attacked_unit_is_minion、622–624 hit_has_charge_level、721–727 on_item_match。實際另需held slot及on_hit。 | 文件未涵蓋 | 繁中RAW沒有列出事件、手持與目標分類細節，未與實際條件矛盾。 |
| 特殊刺刀攻擊 | content/localization/items；locale 0；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「Adds {min_stack_count:%s}-{max_stack_count:%s} stacks of 2.5% Brittleness to hit enemies, based on charge level.」 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 602–610；scripts/settings/buff/buff_utils.lua 81–90 的 BuffUtils.add_debuff_on_hit_proc；own target_buff_data 未設 allow_weapon_special=false，三Mark刺刀 Sweep 攜帶 charge level 1。 | 文件未涵蓋 | RAW未明列特殊刺刀；實際特殊命中沒有被本項target_buff_data排除，也不構成反向陳述。 |
| 特殊刺刀攻擊 | content/localization/items；locale 16；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「根據充能等級疊加{min_stack_count:%s}至{max_stack_count:%s}層脆弱，每層提升2.5%。」 | scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua 602–610；scripts/settings/buff/buff_utils.lua 81–90 的 BuffUtils.add_debuff_on_hit_proc；own target_buff_data 未設 allow_weapon_special=false，三Mark刺刀 Sweep 攜帶 charge level 1。 | 文件未涵蓋 | 繁中RAW省略特殊刺刀路徑，並未明確排除。 |
| 目標端上限、時間與刷新 | content/localization/items；locale 0；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「Adds {min_stack_count:%s}-{max_stack_count:%s} stacks of 2.5% Brittleness to hit enemies, based on charge level.」 | scripts/settings/buff/weapon_buff_templates.lua 366–376 的 templates.rending_debuff；scripts/extension_systems/buff/buff_extension_base.lua 434–462 的 BuffExtensionBase._add_buff、560–590 的 _check_max_stacks_cap。目標cap16、5秒，新增及到cap命中刷新。 | 文件未涵蓋 | RAW未敘述目標端上限、持續時間與刷新方式，是未涵蓋細節。 |
| 目標端上限、時間與刷新 | content/localization/items；locale 16；loc_trait_bespoke_rend_armor_on_charged_shots_desc，hash 363a7233。RAW：「根據充能等級疊加{min_stack_count:%s}至{max_stack_count:%s}層脆弱，每層提升2.5%。」 | scripts/settings/buff/weapon_buff_templates.lua 366–376 的 templates.rending_debuff；scripts/extension_systems/buff/buff_extension_base.lua 434–462 的 BuffExtensionBase._add_buff、560–590 的 _check_max_stacks_cap。目標cap16、5秒，新增及到cap命中刷新。 | 文件未涵蓋 | 繁中RAW未提目標端上限、時間與刷新，不能將省略視為明確矛盾。 |
