# 燃起來！：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| I–IV tier overrides and trait formatter values | [I–IV tier overrides and trait formatter values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L201-L256) |
| Gets Hot! stepped wrapper and heat formula | [Gets Hot! stepped wrapper and heat formula](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L63-L103) |
| conditional stat uses tier override | [conditional stat uses tier override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| stepped stat buff base update | [stepped stat buff base update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L30) |
| stepped stat buff optional stepped table selection | [stepped stat buff optional stepped table selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L60-L79) |
| effective stack offset | [effective stack offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| wielded-slot condition | [wielded-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| reload and vent condition | [reload and vent condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L74-L103) |
| heat-step rounding | [heat-step rounding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134) |
| critical chance consumer | [critical chance consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| critical chance rounding and PRD | [critical chance rounding and PRD](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| base action critical roll | [base action critical roll](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| single-shot crit check at action start | [single-shot crit check at action start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L159) |
| immediate single-shot handling modifier | [immediate single-shot handling modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L271-L280) |
| Mk II normal hit-scan action | [Mk II normal hit-scan action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L318-L384) |
| Mk II charged hit-scan action | [Mk II charged hit-scan action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L385-L452) |
| Mk III normal hit-scan action | [Mk III normal hit-scan action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L318-L384) |
| Mk III charged hit-scan action | [Mk III charged hit-scan action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L472-L534) |
| hit-scan consumes the action critical flag | [hit-scan consumes the action critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L220) |
| shot resolves before heat is added | [shot resolves before heat is added](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L306-L343) |
| post-shot overheat increase | [post-shot overheat increase](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L568-L580) |
| Mk II vent and reload configuration | [Mk II vent and reload configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L535-L650) |
| Mk III vent and reload configuration | [Mk III vent and reload configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L535-L650) |
| vent self-damage action | [vent self-damage action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_vent_overheat.lua#L76-L115) |
| Attack.execute default critical flag | [Attack.execute default critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L45-L84) |
| Attack.execute crit default application | [Attack.execute crit default application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L92-L115) |
| overheat explosion explicitly noncritical | [overheat explosion explicitly noncritical](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_explosion.lua#L103-L123) |
| Mk II overheat explosion configuration | [Mk II overheat explosion configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L651-L679) |
| Mk III overheat explosion configuration | [Mk III overheat explosion configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L651-L679) |
| damage sequence adds finesse extra then continues hit multipliers | [damage sequence adds finesse extra then continues hit multipliers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L89-L107) |
| chance-to-damage conversion is a separate conditional path | [chance-to-damage conversion is a separate conditional path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L247-L263) |
| crit and weakspot boosts combine before base finesse is built | [crit and weakspot boosts combine before base finesse is built](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L715) |
| critical damage enters the shared finesse multiplier | [critical damage enters the shared finesse multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L749-L782) |
| trait formatter chooses requested tier override | [trait formatter chooses requested tier override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| trait formatter percentage scaling | [trait formatter percentage scaling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| trait formatter numeric precision | [trait formatter numeric precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| Mk II trait module import | [Mk II trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| Mk II trait UIDs and append | [Mk II trait UIDs and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| Mk III trait module import | [Mk III trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| Mk III trait UIDs and append | [Mk III trait UIDs and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
| 過熱爆炸前週期自傷 | [過熱爆炸前週期自傷](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_explosion.lua#L47-L75) |
| 單發爆擊參數與標準轉換 | [單發爆擊參數與標準轉換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- trait 的 I–IV tier override 分別寫入 `critical_strike_chance` 與 `ranged_critical_strike_damage`。wrapper 有 `max_stacks=1`、`stack_offset=-1`，有效一般堆層貢獻歸零；`bonus_step_func` 按持用狀態回傳 0–5 個熱階。`conditional_stat_buffs_func`／`conditional_stepped_stat_buffs_func` 都要求持用，並在 reload/vent 時停用。wrapper 的兩個 `.01` conditional fallback 同名 stat 會被 trait tier override 取代；trait 沒有 `stepped_stat_buffs` 額外表，因此不會每階再加 `.01`，也沒有雙份加成。

- 爆擊機率消費端把一般爆擊 stat、對應遠程／近戰 stat、攻擊處理值與職業基礎加總後 clamp 到 0–1；爆擊擲骰再把機率取至百分之一精度後走 PRD。此 trait 的爆擊率 stat 是一般爆擊機率。兩種 Plasma Gun 的一般與蓄力單發 hit-scan action 都使用 `immediate_single_shot`，另有 +0.05 處理值。

- 一般與蓄力射擊開始時先讀當前爆擊狀態，hit-scan 將該旗標交給傷害計算；`ActionShoot` 先 `_shoot`、再 `_add_heat`。因此本發新增熱能不會回頭提高本發已完成的爆擊判定。後續發射須等 dynamic stepped buff 更新後才使用新步階；來源可證明處理順序，未證明切換後同一影格的快取刷新時點。

- 最終傷害中，只有爆擊或弱點命中才計算 finesse extra；爆擊／弱點 boost 先合成並經 boost curve 形成 `base_finesse_damage`。`ranged_critical_strike_damage` 在爆擊時進入共用 finesse multiplier，`final_finesse_damage = base_finesse_damage × finesse_buff_damage_multiplier`，之後 finesse extra 被加回 damage 並繼續 hit-zone、DOT、護甲等處理。因此此百分比影響爆擊命中的額外 finesse 部分，不是整次 hit 的獨立全域倍率；爆擊兼弱點使用同一份合併後額外部分，不得算成兩份。

- 若配裝另有非零 `critical_strike_chance_to_damage_convert`，一般爆擊機率也會經獨立的 conversion 路徑進入 attack damage stat；本祝福本身不提供該 conversion。傷害算例把此值設為 0。

- 令 `n = round(clamp01((heat_fraction−0.10)/0.90)×5)`，`n∈{0,1,2,3,4,5}`。I–IV 每階一般爆擊機率加成 `d = 0.055/0.070/0.085/0.100`，即 +5.5/+7/+8.5/+10 個百分點；每階遠程爆擊傷害係數 `r = 0.04/0.06/0.08/0.10`。因此 `ΔP = n×d`，`h=n×r`。在五階時，`ΔP=+27.5/+35/+42.5/+50 個百分點`，`h=+20/+30/+40/+50%`。

- 對確實產生 finesse extra 的遠程爆擊命中，令 `F=base_finesse_damage`，令 `B` 代表其他命中傷害，`c` 代表同一共享 finesse multiplier 階段其他加成的合併淨額；假設其他同階項為中性，或已納入 `c`，且 downstream multipliers 不變：`D_before=B+F(1+c)`，`D_after=B+F(1+c+h)`，`ΔD=Fh`，`(D_after−D_before)/D_before=Fh/[B+F(1+c)]`。h 乘的是 F，不是 B+F。

- 一般爆擊機率池應另寫作 `P=clamp(P_base + P_general + P_attack_type + P_handling,0,1)`；Gets Hot 加到 `P_general`。Mk II／Mk III 的一般及蓄力單發 action 另加 0.05 handling。此單發路徑不略過機率轉傷害：先限制至0–1，再乘(1−critical_strike_chance_to_damage_convert)，最後取整至小數點後兩位供 PRD 判定，所以機率池例不代表固定爆擊頻率。

- 當爆擊同時命中弱點時，`F` 是程式將 crit 與 weakspot boost 合併後產生的 `base_finesse_damage`；不要對弱點及爆擊各自複製一份 F。若 `critical_strike_chance_to_damage_convert` 非零，會再有獨立的機率轉傷害項，此處公式不包含它。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_157`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_157.png)｜[Issue附件](https://github.com/user-attachments/assets/f71da10a-4d18-4981-be0e-6c4d185e59db)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L201-L256) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L63-L103) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 M35熔岩核心 Mk III匯入 | [電漿槍 M35熔岩核心 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| 電漿槍 M35熔岩核心 Mk III接入 | [電漿槍 M35熔岩核心 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
