# 集中火力：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 連段父／子模板：事件、層數、持用條件 | [連段父／子模板：事件、層數、持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L188-L219) |
| 連段計時與週期重設函式 | [連段計時與週期重設函式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L52-L62) |
| 擊中弱點加子層；非弱點射擊保留基礎層 | [擊中弱點加子層；非弱點射擊保留基礎層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L38-L77) |
| 父層初始建立一個子層 | [父層初始建立一個子層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| 子層無持續時間時不會倒數；reset_update_func由模板提供 | [子層無持續時間時不會倒數；reset_update_func由模板提供](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L159) |
| 父層向子層傳遞tier override並依有效層數加入數值 | [父層向子層傳遞tier override並依有效層數加入數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| 有效層數由stack_offset換算 | [有效層數由stack_offset換算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| tier override取代子層base值後逐有效層加算 | [tier override取代子層base值後逐有效層加算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 持用槽位條件 | [持用槽位條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 遠程命中處理後送出單一on_shoot結果 | [遠程命中處理後送出單一on_shoot結果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L220) |
| 命中掃描合併多目標弱點布林值 | [命中掃描合併多目標弱點布林值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L243) |
| 一般與攻擊類型暴擊機率合併／封頂 | [一般與攻擊類型暴擊機率合併／封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| 暴擊機率取整與PRD判定 | [暴擊機率取整與PRD判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| 百分比formatter乘100與格式精度 | [百分比formatter乘100與格式精度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| formatter buff_template／trait_override來源選擇 | [formatter buff_template／trait_override來源選擇](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| formatter數值自動精度選擇 | [formatter數值自動精度選擇](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| 裝備／持用生命週期 | [裝備／持用生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| 切出移除on_wield而非on_equip buff | [切出移除on_wield而非on_equip buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| laspistol_p1_m1 import_line | [laspistol_p1_m1 import_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| Laspistol M1 hipfire hitscan | [Laspistol M1 hipfire hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L203-L252) |
| Laspistol M1 aimed hitscan | [Laspistol M1 aimed hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L285-L335) |
| Laspistol M1 push不走shoot_hit_scan | [Laspistol M1 push不走shoot_hit_scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L498-L515) |
| Laspistol M1 append weapon traits | [Laspistol M1 append weapon traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L856-L860) |
| needlepistol_p1_m1 import_line | [needlepistol_p1_m1 import_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| Needlepistol M1 hipfire hitscan | [Needlepistol M1 hipfire hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L228-L238) |
| Needlepistol M1 aimed／chemical hitscan | [Needlepistol M1 aimed／chemical hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L313-L367) |
| Needlepistol M1 mode display | [Needlepistol M1 mode display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L815-L829) |
| Needlepistol M1 append weapon traits | [Needlepistol M1 append weapon traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| needlepistol_p1_m2 import_line | [needlepistol_p1_m2 import_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| Needlepistol M2 hipfire hitscan | [Needlepistol M2 hipfire hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L228-L238) |
| Needlepistol M2 aimed／chemical hitscan | [Needlepistol M2 aimed／chemical hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L313-L367) |
| Needlepistol M2 mode display | [Needlepistol M2 mode display](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L821-L826) |
| Needlepistol M2 append weapon traits | [Needlepistol M2 append weapon traits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
| Laspistol hitscan profile settings | [Laspistol hitscan profile settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/settings_templates/laspistol_hitscan_templates.lua#L10-L17) |
| Needlepistol dart／chemical hitscan profile settings | [Needlepistol dart／chemical hitscan profile settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_hitscan_templates.lua#L11-L18) |
| 化學針配置爆炸 | [化學針配置爆炸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/settings_templates/needlepistol_hitscan_templates.lua#L43-L59) |
| Buff maps tier override to child by parent_buff_template | [Buff maps tier override to child by parent_buff_template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| needlepistol_p1_m1 ukeys_line | [needlepistol_p1_m1 ukeys_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791) |
| needlepistol_p1_m1 append_line | [needlepistol_p1_m1 append_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L793) |
| needlepistol_p1_m2 ukeys_line | [needlepistol_p1_m2 ukeys_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788) |
| needlepistol_p1_m2 append_line | [needlepistol_p1_m2 append_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L790) |
| laspistol_p1_m1 ukeys_line | [laspistol_p1_m1 ukeys_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858) |
| laspistol_p1_m1 append_line | [laspistol_p1_m1 append_line](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L860) |
| 配置命中爆炸固定非爆擊 | [配置命中爆炸固定非爆擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L86-L139) |
| 穿透停止爆炸固定非爆擊 | [穿透停止爆炸固定非爆擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L272-L321) |
| 推擊未指定爆擊參數 | [推擊未指定爆擊參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L87) |
| 缺省攻擊參數 | [缺省攻擊參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L45-L83) |
| 爆擊參數false預設 | [爆擊參數false預設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L112-L114) |
| 同型號靈能推擊 | [同型號靈能推擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L570-L583) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩種實際武器 wrapper 都 clone 同一個 ranged chained-weakspot parent/child base；wrapper只指定自身 parent、child 名稱，沒有改事件或層數。父層在 on_shoot 事件上以 1.0 機率檢查，active_proc_func直接讀 hit_weakspot，並在同一事件最多加入一個子層；未命中弱點的射擊結果會移除累積層，保留起始基礎層。

- 子層 max_stacks=5、stack_offset=-1，父層初始化會先建立一個抵銷層，所以玩家可見有效層數從 0 起，最多 5。I–IV parent tier override 依序提供 critical_strike_chance 0.02/0.03/0.04/0.05；子層以 parent_buff_template 取得該階覆寫，並依有效層加算，覆蓋 base child 的 0.05 值。

- 模板沒有 child_duration；reset_update_func固定回傳 false。父層只在有 child_duration 時啟動倒數，因此停火或等待不會自然衰減。父與子都要求 item slot 正在持用，切出時加成不生效，但此 on_equip 型父層與子層不因普通切槽自動移除。

- 命中掃描處理完本發攻擊後才送一個 on_shoot 事件，payload hit_weakspot是掃描命中結果；多目標掃描會把命中結果合併成布林值。故任何目標的弱點命中足以加一層，單次掃描不按目標數重複加層；新層不影響當發已完成的爆擊檢定。

- 爆擊機率消費端合併一般爆擊率、攻擊類型爆擊率與武器處理值後封頂。此 trait 覆寫一般 critical_strike_chance 欄位，不是 ranged_critical_strike_chance 專屬欄位。

- 覆寫落點：child沒有unconditional stat_buffs；其critical_strike_chance=0.05位於conditional_stat_buffs。Buff.update_stat_buffs先對空的unconditional表計算，再對conditional表計算；同一個tier stat_buff_overrides key在conditional計算時取代0.05為當級0.02／0.03／0.04／0.05，之後才依有效層數加算。這不是tier值加上0.05；而且持用條件為false時條件式欄位不貢獻爆擊率。

- 化學針命中耗盡hitmass或穿透停止所產生的爆炸，透過既有hitscan爆炸函式明確傳false；它們與本發直接命中的爆擊旗標分開，沒有額外on_shoot。普通與靈能推擊使用相同已驗收push路徑，省略爆擊旗標並採用false預設。

- 令 n 為有效層數（0–5），d 為每層加成：I=0.02、II=0.03、III=0.04、IV=0.05。未套用本祝福前的完整爆擊機率 C₀ 已含該次攻擊適用的一般／攻擊類型／處理值；加成為 C_raw = C₀ + n×d。

- 爆擊機率消費端限制 C = min(1, max(0, C_raw))；若攻擊路徑要求爆擊轉傷害，該轉換在封頂後另行處理。爆擊判定將機率四捨五入至百分之一後進入 PRD。

- 每層是加法百分點：例如 IV 級五層加 0.25，即 +25 個百分點；不是將 C₀ 乘以 1.25。n=0 時本祝福貢獻為 0；五層封頂後再命中弱點不增加；下一個 hit_weakspot=false 的射擊事件把 n 歸零。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_110`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_110.png)｜[Issue附件](https://github.com/user-attachments/assets/b66dd253-275d-4c41-8ec0-8543458fa629)；圖示只作辨識。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 重型鐳射手槍等級覆寫 | [重型鐳射手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L421-L472) |
| 重型鐳射手槍Buff接入 | [重型鐳射手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L21-L25) |
| UI 重型鐳射手槍 | [UI 重型鐳射手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L938) |
| 重型鐳射手槍 奧克塔蘭MG Mk II匯入 | [重型鐳射手槍 奧克塔蘭MG Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| 重型鐳射手槍 奧克塔蘭MG Mk II接入 | [重型鐳射手槍 奧克塔蘭MG Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
| 針彈手槍等級覆寫 | [針彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L359-L408) |
| 針彈手槍Buff接入 | [針彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L16-L18) |
| UI 針彈手槍 | [UI 針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L961) |
| 針彈手槍 布蘭克斯 MkVI匯入 | [針彈手槍 布蘭克斯 MkVI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| 針彈手槍 布蘭克斯 MkVI接入 | [針彈手槍 布蘭克斯 MkVI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| 針彈手槍 布蘭克斯 MKII匯入 | [針彈手槍 布蘭克斯 MKII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| 針彈手槍 布蘭克斯 MKII接入 | [針彈手槍 布蘭克斯 MKII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
