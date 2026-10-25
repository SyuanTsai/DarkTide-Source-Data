# 慰藉精準：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_on_crit_kills`／hash`f59c278d`；描述鍵`loc_trait_bespoke_toughness_on_crit_kills_desc`／hash`f3f6d906`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Reassuringly Accurate／慰藉精準。

- 文件名稱：慰藉精準(Reassuringly Accurate)。

- 適用武器：重型鐳射手槍、擲彈兵臂鎧；描述鍵`loc_trait_bespoke_toughness_on_crit_kills_desc`／hash`f3f6d906`。

- 英文模板：{toughness:%s} Toughness on Critical Hit Kill.

- 繁中模板：致命一擊擊殺{toughness:%s}韌性。

- **靜態重建**：固定 RAW：EN `{toughness:%s} Toughness on Critical Hit Kill.`；繁中 `致命一擊擊殺{toughness:%s}韌性。`；描述鍵 hash `f3f6d906`。下表只將 `%s` 依實際 percentage formatter 加上 `+` 前綴並代入 tier 值，保留原句其餘字詞。

| Tier | Laspistol EN | Laspistol 繁中 | Gauntlet EN | Gauntlet 繁中 |
|---|---|---|---|---|
| I | `+10% Toughness on Critical Hit Kill.` | `致命一擊擊殺+10%韌性。` | `+24% Toughness on Critical Hit Kill.` | `致命一擊擊殺+24%韌性。` |
| II | `+12% Toughness on Critical Hit Kill.` | `致命一擊擊殺+12%韌性。` | `+28% Toughness on Critical Hit Kill.` | `致命一擊擊殺+28%韌性。` |
| III | `+14% Toughness on Critical Hit Kill.` | `致命一擊擊殺+14%韌性。` | `+32% Toughness on Critical Hit Kill.` | `致命一擊擊殺+32%韌性。` |
| IV | `+16% Toughness on Critical Hit Kill.` | `致命一擊擊殺+16%韌性。` | `+36% Toughness on Critical Hit Kill.` | `致命一擊擊殺+36%韌性。` |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發主句 | RAW 描述鍵 `loc_trait_bespoke_toughness_on_crit_kills_desc`（hash `f3f6d906`）：EN `{toughness:%s} Toughness on Critical Hit Kill.`；ZH `致命一擊擊殺{toughness:%s}韌性。` | `scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua:2109–2120` 只接 `on_kill`；`scripts/settings/buff/helper_functions/check_proc_functions.lua:352–354` 核實際暴擊與 `died`。 | 符合核心條件；exact item 限制文件未涵蓋 | RAW 說明暴擊擊殺；程式另核對實際武器 item。 |
| Tier formatter 與回復值 | 同一 RAW 描述鍵及 placeholder；手槍＋10／12／14／16%，臂鎧＋24／28／32／36%。 | `scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua:340–368` 的 `format_values.toughness` 與 tier `buffs`，及 `scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua:89–117` 的同名 formatter/tier，讀取 `toughness_fixed_percentage`；`scripts/settings/buff/helper_functions/shared_buff_functions.lua:10–27` 的 `regain_toughness_proc_func` 呼叫回復；`scripts/extension_systems/toughness/player_unit_toughness_extension.lua:253–285` 的 `PlayerUnitToughnessExtension.recover_percentage_toughness` 計算最大韌性預算與缺損封頂。 | 格式化等級值符合；分母／直接回復／缺損封頂文件未涵蓋 | formatter 顯示自身 tier 百分比；實際預算以目前最大韌性為分母，再以缺損限制。 |
| 攻擊模式與事件時持用 | RAW 未列 hit-scan、近戰、特殊、投射物路徑或 event 處理時的持用條件。 | `scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua:203–355` → `scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua:145–230`；臂鎧 sweep 為 `scripts/extension_systems/weapon/actions/action_sweep.lua:1475–1503`；exact-item/持用 gate 為 `scripts/settings/buff/helper_functions/check_proc_functions.lua:721–727`、`scripts/settings/buff/helper_functions/conditional_functions.lua:43–59`。 | 文件未涵蓋 | 不同實際攻擊需依 Attack event 的 crit 旗標、item 與處理時持用 gate 判定；weapon family 不足以替代接線證據。 |
| 額外特殊爆炸與推擊 | RAW 沒有列出可觸發及排除的特殊／推擊子路徑。 | 臂鎧直接 special hit 繼承 `scripts/extension_systems/weapon/actions/action_sweep.lua:1475–1503`；secondary blast 為 `scripts/extension_systems/weapon/actions/action_melee_explosive.lua:61–76`（crit=false）。手槍 push 為 `scripts/utilities/attack/push_attack.lua:80–99`，critical 預設值在 `scripts/utilities/attack/attack.lua:92–114`。 | 文件未涵蓋 | 排除結論來自實際攻擊 payload；不把武器或特殊動作整體排除。 |
| 回復分母、頻率與限制 | RAW 只有回復韌性的 tier placeholder，未指定比例分母、直接回復、重複事件、缺損上限或原生拒絕狀態。 | `scripts/settings/buff/helper_functions/shared_buff_functions.lua:10–27` 直接呼叫固定 tier fraction 並令 ignore stats=true；`scripts/extension_systems/toughness/player_unit_toughness_extension.lua:79–88,253–285,447–475` 定義 max、缺損 cap 與原生 state/keyword gates。 | 文件未涵蓋 | 來源明確表明是即時韌性回復預算，受目前缺損和原生狀態限制；無明確相反 RAW 數值。 |
