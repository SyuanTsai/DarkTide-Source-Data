# 武器單次命中傷害：已知步驟與取數缺口

核對來源：`Darktide-Source-Code` commit `ba6c148f3c2768ca3ce20d846a12e56e2f433f3e`。以下是靜態原始碼的計算路徑，並非可直接執行的完整傷害公式。所有路徑均相對於該來源 repository；「未抽取」也包含未形成可供公式使用的完整公開契約。

## 一次命中的計算順序

1. 武器 action 選 damage profile、蓄力值、暴擊狀態與 power level。近戰 `scripts/extension_systems/weapon/actions/action_sweep.lua` 的 `ActionSweep._calculate_max_hit_mass` 等路徑使用 action 的 `power_level`，否則使用 `scripts/settings/damage/power_level_settings.lua` 的 `default_power_level`。近戰 sweep 另決定穿透命中順序與 hit mass。遠程需先取得 hitscan／projectile profile、距離、散彈命中等情境；各遠程 action 的所有變種尚未完整確認。
2. `scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua` 的 `calculate_lerp_values`、`_add_lerped_tweak_modifiers_helper` 將物品 base stat value 轉換為 tweak 權重；`_add_tweak_stats` 對累積值 clamp。一般 template 的 `_resolve_template` 對 `lerp_basic`／`lerp_perfect` 插值。`scripts/utilities/weapon_stats.lua` 的 `_resolve_damage_template_lerps` 則讀 damage profile 端點；這些 UI 統計不等於完整戰鬥公式。
3. `scripts/utilities/attack/damage_profile.lua` 的 `DamageProfile.target_settings` 依 target index 選 `targets[index]`，缺目標才選 `default_target`。`lerp_values`、`lerp_value_from_path`、`progress_lerp_values_path` 取當前 target／root 的權重與 fallback，再由 `lerp_damage_profile_entry` 插值。遠程 `dropoff_scalar`／`ranges` 取距離衰減；`_distribute_power_level_to_power_type` 的 ranged near／far 混合使用 `math.sqrt(dropoff_scalar)`，不能一概視為線性。
4. `scripts/utilities/attack/damage_calculation.lua` 的 `DamageCalculation.calculate` 先套 target 的 `power_level_multiplier`，再進 `_base_damage`／`_power_level_scaled_damage`。`scripts/utilities/attack/power_level.lua` 的 `PowerLevel.scale_by_charge_level`、`scale_power_level_to_power_type_curve` 加入蓄力曲線、power 類型縮放與 power buff；`DamageProfile.power_distribution_from_power_level` 分配 attack power。以護甲對應的 `PowerLevelSettings.damage_output` 範圍及 `PowerLevel.power_level_percentage` 得到基礎數值，再由 `_calculate_damage_buff` 加入情境 buff。
5. `DamageProfile.armor_damage_modifier` 依 target／profile、護甲、暴擊、穿甲轉換、距離與蓄力選擇係數。`DamageCalculation.calculate` 的 `_rending_multiplier` 合併攻擊者 rending、目標 brittleness 與條件倍率，再套 `scripts/settings/damage/armor_settings.lua` 的 rending 護甲倍率與 overdamage 規則；不是單一固定穿甲乘數。
6. 暴擊或弱點命中進 `_finesse_boost_damage`：依 profile 的禁止旗標、crit boost、目標護甲 finesse boost、`Weakspot.finesse_boost_modifier`、boost curve 與 boost multiplier 算加成。`_boost_curve_multiplier` 在 boost curve 相鄰點間分段插值；`ui_finesse_multiplier` 僅是 UI 簡化路徑。
7. 加上 `_backstab_damage`、`_flanking_damage`，乘 `_hit_zone_damage_multiplier`、DoT 與雙方護甲類 stat buffs，套 `_apply_diminishing_returns_to_damage`。force field 有額外返回分支。`calculate` 返回計算傷害與效率等診斷值；護盾、韌性、實際扣血及死亡處理仍由後續執行期系統負責，完整順序未確認。

## 公式輸入盤點

| 輸入 | 來源 Lua 路徑／函式 | 新格式目前欄位 | 缺口或難點 |
|---|---|---|---|
| 物品 base stat rating | `weapon_tweak_templates.lua`：`calculate_lerp_values`（完整路徑見上） | `values.curves[].input` 定義 0～1；`bars[].stats[].curveId` | 實際某件物品的 rating 未抽取，應由呼叫端輸入 |
| 一般 stat 端點 | 同上：`_resolve_template`、`_lerp_array` | `values.bars[].stats[].min/max`、`values.curves[].knots` | 陣列拆成 `.1`、`.2` 等純量；曲線表示 WP2 所有相關 bar 同時變動的端點，不是各 bar 獨立偏導數 |
| damage profile 綁定 | 武器 `actions`；`scripts/settings/damage/damage_profile_templates.lua` | `values.attackCombos[].steps[].damageProfile`；部分 stat key 的 `damage.<action>.<profile>.*` | 遠程所有 action 的 profile 清單、特殊／多 profile 選擇尚未形成獨立欄位；不唯一時為 null |
| damage profile lerp、target fallback、overrides | `scripts/utilities/attack/damage_profile.lua`：`lerp_values`、`lerp_value_from_path`；`weapon_stats.lua`：`_resolve_damage_template_lerps` | 部分 `bars[].stats[]` 端點；對應 curve 為 `NONLINEAR_LERP` | 未抽取完整 profile 樹、current_target_settings_lerp_values、各 bar 獨立貢獻與 runtime override 狀態；不能用兩點重建所有 damage 計算 |
| power level、charge level 與 charge scaler | `scripts/settings/damage/power_level_settings.lua`；`scripts/utilities/attack/power_level.lua`：`scale_by_charge_level`；`action_sweep.lua` | 未抽取 | 缺 action override、預設值、蓄力情境與分段曲線；stat rating 不能直接當 power level |
| attack／impact power distribution | `damage_profile.lua`：`power_distribution_from_power_level`、`_distribute_power_level_to_power_type` | 部分 `bars[].stats[].key = damage.<action>.<profile>.*power_distribution*` | 未抽取未受 bar 影響的常數與完整 target／root fallback；近遠、蓄力與 power buff 分支須分別建模 |
| power 輸出範圍與 percentage | `power_level_settings.lua`：`damage_output`、`power_level_curve_constants`；`power_level.lua`：`power_level_percentage` | 未抽取 | 通用公式常數不屬武器 bar |
| 各護甲 damage modifier | `damage_profile.lua`：`armor_damage_modifier`；`scripts/settings/damage/armor_settings.lua` | 部分 `bars[].stats[]` 的 damage profile 護甲端點 | 未抽取完整 attack／impact、crit、near／far、charge、target override 及預設係數；不能以缺欄位代表零 |
| cleave／hit mass、target index | `damage_profile.lua`：`max_hit_mass`、`_max_hit_mass`、`target_settings`；`action_sweep.lua` | 部分 `bars[].stats[]` 的 `cleave_distribution.*` | 未抽取敵人 hit mass、擊中順序、buff 無限 cleave 與穿透狀態；會影響選哪個 target profile |
| 距離／dropoff／近遠 profile | `damage_profile.lua`：`dropoff_scalar`、`ranges`、`_distribute_power_level_to_power_type` | 部分 `bars[].stats[]` 的 ranges／near／far 端點 | 距離為情境輸入；sqrt 混合與完整 profile 未抽取 |
| 暴擊、finesse／weakspot boost | `damage_calculation.lua`：`_finesse_boost_damage`；`scripts/utilities/attack/weakspot.lua`；`scripts/settings/damage/weakspot_settings.lua` | 部分 `bars[].stats[]` 的 boost 端點 | 暴擊／弱點布林、禁用旗標、breed 弱點類型及預設 boost 未抽取 |
| boost curve | `power_level_settings.lua`：`boost_curves`；`damage_calculation.lua`：`_boost_curve_multiplier` | 未抽取完整曲線 | 分段點與 profile 選用規則不同於 base stat 的兩端點曲線 |
| rending／brittleness | `damage_calculation.lua`：`_rending_multiplier`；`armor_settings.lua` | 未抽取 | 條件 stat buffs、上限、護甲類倍率與超額傷害規則均需 runtime 情境 |
| breed 生命值、護甲與部位倍率 | `scripts/settings/breed/breeds/renegade/renegade_rifleman_breed.lua`：`armor_type`、`hitzone_armor_override`、`hitzone_damage_multiplier`；`scripts/settings/difficulty/minion_difficulty_settings.lua` | 未抽取 | 尚無敵人資料契約；需 breed→難度健康值／hit mass 與部位映射 |
| 難度縮放 | `scripts/settings/difficulty/minion_difficulty_settings.lua`：health steps；`scripts/settings/difficulty/difficulty_settings.lua` | 未抽取 | 難度索引與 mutator 等執行期修正須區分；不能假設所有傷害乘同一難度常數，完整套用位置未確認 |
| 祝福／perk／天賦 buff | `scripts/settings/buff/buff_settings.lua`；`scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua`；`damage_calculation.lua`：`_calculate_damage_buff`；`power_level.lua`：`power_level_buff_modifier` | `values.blessings[]` 連到 blessings 的 `values.params`／`tiers[].params`；技能另有 `values.params` | 未抽取 perk 裝備選擇、buff 觸發／疊層／冷卻／雙方當前狀態；靜態參數不等於生效倍率 |
| 背刺、側襲、stagger、壓制、生命狀態 | `damage_calculation.lua`：`_backstab_damage`、`_flanking_damage`、`_calculate_damage_buff`、`_apply_diminishing_returns_to_damage` | 未抽取 | 需明確情境參數、blackboard 與目標健康狀態；任意執行函式不符合靜態取數原則 |
| 傷害類型／攻擊類型、命中部位、shield／force field | `damage_calculation.lua`：`calculate`；武器 action 與 breed | `values.actions[].type` 僅 UI 顯示類型；公式欄位未抽取 | UI 類型不可替代 gameplay attack_type／damage_type；實際扣血及韌性流程未確認 |

表內簡寫 `damage_profile.lua`、`damage_calculation.lua`、`power_level.lua` 均位於 `scripts/utilities/attack/`；`power_level_settings.lua`、`armor_settings.lua` 位於 `scripts/settings/damage/`；`weapon_stats.lua` 位於 `scripts/utilities/`。

## 建議後續工單範圍

先建立版本化的 damage profile／power settings 資料契約，輸出完整 target 樹、預設值、護甲表、boost／charge 分段曲線及每個 bar 的獨立 tweak 貢獻，並明確區分靜態常數與使用者情境。第二單補 breed／難度／部位與 hit mass。第三單建立 buff／perk 觸發狀態及近戰／遠程 action 到 profile 的完整綁定。最後以純函式實作有明確適用範圍的單次命中計算器，對照原始碼分支及已知遊戲實測案例；unknown 須傳播，不能以 UI 傷害或缺失值的零替代。
