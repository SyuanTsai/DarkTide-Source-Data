# 偏轉：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Deflector I–IV values and formatting | [Deflector I–IV values and formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L93-L135) |
| Base ranged-block keyword and active conditions | [Base ranged-block keyword and active conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L3001-L3014) |
| Deflector buff clone | [Deflector buff clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L3-L4) |
| Specific buff-template clone | [Specific buff-template clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L22) |
| Buff-template registration | [Buff-template registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_templates.lua#L77) |
| Attack type enum | [Attack type enum](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/attack_settings.lua#L20) |
| Block defaults and default angles | [Block defaults and default angles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L24-L30) |
| Block active state and ranged keyword gate | [Block active state and ranged keyword gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L32-L100) |
| Unblockable damage profile exception | [Unblockable damage profile exception](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L103-L127) |
| Block-cost application | [Block-cost application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L130-L145) |
| General and ranged block-cost multipliers | [General and ranged block-cost multipliers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L275-L311) |
| Angle fallback and angle calculation | [Angle fallback and angle calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L314-L356) |
| Block check before attack damage application | [Block check before attack damage application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L456-L475) |
| Block action sets active block state | [Block action sets active block state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_block.lua#L18-L25) |
| Block-cost stat-buff combination types | [Block-cost stat-buff combination types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L705-L708) |
| Linesman ranged block stamina cost | [Linesman ranged block stamina cost](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/stamina/weapon_stamina_templates.lua#L82-L107) |
| Mk VI trait module import | [Mk VI trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15-L16) |
| Mk VI block action | [Mk VI block action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L1675-L1683) |
| Mk VI stamina template binding | [Mk VI stamina template binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2477) |
| Mk VI trait append | [Mk VI trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2793-L2797) |
| Mk VIII trait module import | [Mk VIII trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15-L16) |
| Mk VIII block action | [Mk VIII block action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L1505-L1513) |
| Mk VIII stamina template binding | [Mk VIII stamina template binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2392) |
| Mk VIII trait append | [Mk VIII trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2708-L2712) |
| Current UI name assembly | [Current UI name assembly](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| Current UI reads family/pattern/mark localization references | [Current UI reads family/pattern/mark localization references](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| Conditional stats override and stacking | [Conditional stats override and stacking](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Slot held gate | [Slot held gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Cost endpoint resolution | [Cost endpoint resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L371-L405) |
| Active stamina getter | [Active stamina getter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1673-L1681) |
| Stamina payment | [Stamina payment](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L42) |
| Block after modifiers and alternate payment | [Block after modifiers and alternate payment](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L145-L208) |
| Mk VI defence stat mapping | [Mk VI defence stat mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2768-L2775) |
| Mk VIII defence stat mapping | [Mk VIII defence stat mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2683-L2690) |
| Defence stamina mapping only default | [Defence stamina mapping only default](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/weapon_trait_templates/stamina_trait_templates.lua#L17-L48) |
| Default fallback lerp | [Default fallback lerp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/weapon_tweak_template_settings.lua#L7-L11) |
| Build resolved templates | [Build resolved templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L484-L500) |
| Keyword gate fallback | [Keyword gate fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L137-L143) |
| Conditional keyword calculation | [Conditional keyword calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L838) |
| Buff active-state usage | [Buff active-state usage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L1015-L1029) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Wrapper clone `can_block_ranged`。conditional keyword gate fallback使用 `conditional_stat_buffs_func = is_item_slot_wielded`，持用時即加入can_block_ranged；`check_active_func = all(is_item_slot_wielded,is_blocking)` 只標示Buff活動狀態。Block先要求blocking state，再只在 `attack_type == ranged` 時放寬允許類型，仍檢查角度及成本項目。後續 `attack_is_blockable` 保留unblockable例外判定。

- 兩個巨劍型號採 `linesman_rangedblock`；單手型號採 `forcesword_p1_m1`。三型號均未設定block_angles。遠程成本表只有inner；沒有outer成本，故遠程格擋需符合inner。

- `_calculate_block_angle` 計算面向與攻擊者水平位置方向的Vector3.angle，閾值 `0.33π` 是單側夾角59.4°，左右合計118.8°；不是總扇形59.4°，也不是子彈軌跡入射角。極近距離／無攻擊者時函式回傳0。

- 成本倍率tier放在override `stat_buffs`，但base的統計項目放在 `conditional_stat_buffs`，值1；Buff先以is_item_slot_wielded判斷條件，再用tier override替換1為0.775／0.75／0.725／0.7。base `stat_buffs` 空表，沒有額外常駐倍率。成本減免只需持用；遠程關鍵字以持用條件加入，實際Block另要求格擋。

- 模板 `lerp_basic` 與 `lerp_perfect` 是成本解析插值端點，`WeaponTweakTemplates._resolve_template` 依t插值，並非一般／完美格擋的兩種成本。Block消費的是已解析的數值。

- 最後Block成本再由Stamina.drain乘 `stamina_cost_multiplier` 並扣除目前體力；其他可用的支付方式由Block後續處理，此祝福本身不提供那些能力。

- 兩個巨劍型號的defence stat映射共用thunderhammer_p1_m1_defence_stat，僅涵蓋default內外圈、push與sprint；單手型號沒有stamina base-stat映射。三型號都未提供ranged路徑的插值t，遠程成本以fallback t=0.5解析為0.5。

- I–IV倍率 `m = 0.775／0.75／0.725／0.7`；減免百分比 `(1 − m) × 100` 為22.5%／25%／27.5%／30%。

- 一般格擋成本在其他條件不變時再乘m，倍率同組相乘。例如其他倍率0.80與IV級0.70合計0.56，減免44%。

- `Block_cost = resolved_base_cost × general_block_cost_multiplier × general_block_cost_modifier × ranged_factors × (damage_profile.block_cost_multiplier or 1)`；ranged_factors僅遠程類型取專用multiplier與modifier，其他類型取1。

- 正常體力支付再由 `Stamina.drain` 乘 `stamina_cost_multiplier`；Block另有parry等動作例外、warp-charge支付分支。不得把本祝福誤當作那些能力的提供者。

- 遠程內圈模板端點0.75／0.25。沒有額外tweak時，解析成本 `C(t) = 0.75 + (0.25 − 0.75) × t`；例如t=0.5得到0.5，IV級乘0.7得到0.35，其他倍率均1。這是插值算例，不是完美格擋的時間判定。

- inner單側閾值 `0.33π ≈ 59.4°`，左右總扇形約118.8°。outer預設π，但遠程成本表沒有outer項目，超出inner時has_block_cost不成立。

- 三個正式型號的遠程inner成本都沒有base-stat映射調整，fallback t=0.5故解析值0.5；沒有其他成本倍率／支付改動時，I–IV成本0.3875／0.375／0.3625／0.35。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_081`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_081.png)｜[Issue附件](https://github.com/user-attachments/assets/ce4a8d9f-8ffc-4194-bfbd-ef4db317aaf5)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 烈焰力場巨劍等級覆寫 | [烈焰力場巨劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L93-L135) |
| 烈焰力場巨劍Buff接入 | [烈焰力場巨劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L22) |
| UI 烈焰力場巨劍 | [UI 烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L245) |
| 烈焰力場巨劍 誓約 Mk VI匯入 | [烈焰力場巨劍 誓約 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VI接入 | [烈焰力場巨劍 誓約 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 誓約 Mk VIII匯入 | [烈焰力場巨劍 誓約 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VIII接入 | [烈焰力場巨劍 誓約 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |

## 單手型號差異來源

| 用途 | 固定原始碼 |
|---|---|
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L53-L95) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L17) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 烈焰力場劍 朦朧 Mk II匯入 | [烈焰力場劍 朦朧 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 單手體力成本端點 | [單手體力成本端點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/stamina/weapon_stamina_templates.lua#L255-L282) |
| 單手特殊模式 | [單手特殊模式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1477-L1483) |
| 單手體力模板 | [單手體力模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1503-L1508) |
| 單手完整base_stats無stamina目標 | [單手完整base_stats無stamina目標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1537-L1742) |
| 實際item.base_stats輸入 | [實際item.base_stats輸入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L68-L75) |
| base-stat路由 | [base-stat路由](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L123-L139) |
| base-stat目標應用 | [base-stat目標應用](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L456-L479) |
| 單手格擋動作 | [單手格擋動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1189-L1197) |
