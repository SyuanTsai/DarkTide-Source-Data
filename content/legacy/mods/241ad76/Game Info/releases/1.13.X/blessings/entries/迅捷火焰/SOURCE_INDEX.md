# 迅捷火焰：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| own tier/formatter | [own tier/formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L98-L137) |
| own wrapper | [own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L24) |
| base empty-clip buff | [base empty-clip buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2916-L2925) |
| held slot predicate | [held slot predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| empty/reload predicate | [empty/reload predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L93-L119) |
| conditional stat override | [conditional stat override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| reload stat type | [reload stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L957-L963) |
| additive base | [additive base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058) |
| action start stores scale | [action start stores scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L301-L329) |
| action duration | [action duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365) |
| time scale math/clamp | [time scale math/clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429) |
| registered action kinds | [registered action kinds](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L45-L66) |
| reload ammo eligibility | [reload ammo eligibility](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L98-L123) |
| reload state total | [reload state total](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L470-L479) |
| actual mark inputs | [actual mark inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L31-L123) |
| unbraced fire | [unbraced fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L215-L287) |
| braced fire and empty chain | [braced fire and empty chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L288-L365) |
| brace transitions | [brace transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L366-L414) |
| reload and push actions | [reload and push actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L415-L504) |
| reload template/auto states | [reload template/auto states](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L514-L526) |
| flamer reload phases | [flamer reload phases](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/reload_templates/flamer_reload_template.lua#L3-L31) |
| reload action lifecycle | [reload action lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L24-L132) |
| reload state timing helpers | [reload state timing helpers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/reload_states.lua#L16-L38) |
| reload state thresholds | [reload state thresholds](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/reload_states.lua#L57-L105) |
| shoot action fixed update | [shoot action fixed update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L244-L345) |
| shoot ammo spend | [shoot ammo spend](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L566) |
| flamer empty running state | [flamer empty running state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L449-L475) |
| no-ammo reload conditions | [no-ammo reload conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L484-L575) |
| player buff refresh | [player buff refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| buff cache aggregation | [buff cache aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| system config buff order | [system config buff order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L320) |
| system config character order | [system config character order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L397-L410) |
| system config weapon order | [system config weapon order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L511-L524) |
| extension systems build order | [extension systems build order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L105) |
| extension fixed dispatch | [extension fixed dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L125-L183) |
| walking state weapon action call | [walking state weapon action call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L88-L104) |
| weapon fixed update | [weapon fixed update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L487-L508) |
| weapon action dispatcher | [weapon action dispatcher](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1112-L1126) |
| action handler fixed update | [action handler fixed update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L137-L165) |
| action chain processing | [action chain processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L762-L827) |
| bound trait import | [bound trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| bound trait append | [bound trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
| actual UI naming | [actual UI naming](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792-L804) |
| stat_buffs cached-table accessor | [stat_buffs cached-table accessor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L934-L936) |
| 主控條件與動作委派核對 | [主控條件與動作委派核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L105-L119) |
| 主控條件與動作委派核對 | [主控條件與動作委派核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L93-L102) |
| 主控條件與動作委派核對 | [主控條件與動作委派核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L24-L27) |
| 主控條件與動作委派核對 | [主控條件與動作委派核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L23-L26) |
| 主控條件與動作委派核對 | [主控條件與動作委派核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L100-L105) |
| 主控條件與動作委派核對 | [主控條件與動作委派核對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L73-L78) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Quickflame 自己的四階 `stat_buffs.reload_speed` 為 .24／.28／.32／.36；wrapper 直接 clone `faster_reload_on_empty_clip`。base 條件要求持用該 item slot 且 `has_empty_clip` 成立。後者檢查目前武器彈匣 ≤ 0，並排除目前 action kind 已屬於 reload state 的情況。
- base conditional fallback 對 `reload_speed` 設 1.5；Buff 計算時會用同 key 的 trait override `stat_buffs.reload_speed` 取代 fallback。因此 .24–.36 不是加到 1.5 上；`reload_speed` 本身是 additive_multiplier，與其他相同 stat 貢獻加算。
- `flamer_p1_m1` 的 `action_reload` 是 `reload_state`，且 `time_scale_stat_buffs` 列 `reload_speed`。ActionHandler 在動作開始時讀 BuffExtension 已聚合的 stat cache，計算並保存 `time_scale`；新 action name 設定後，空匣條件會在後續 cache 更新中因「正在裝填」而關閉，但當前 reload 仍沿用已保存倍率。階段時間與功能門檻除以此倍率，並受通用行動上限影響。
- 實際最後一發順序：`buff_system`、`character_state_machine_system`、`weapon_system` 依固定配置順序更新。角色狀態機在 weapon system 前呼叫 `update_weapon_actions`；當前射擊 action 在稍後 weapon system 的 ActionHandler 更新中才消耗最後一發。因此不是同一次 weapon update 先扣到 0 再開始 reload。下一固定更新先由 buff extension 看到空匣且 action 尚非 reload，建立 stat cache；再由角色狀態機把 `clip_empty` 接到 `action_reload`，開始時讀取該 cache。此結論限定此實際玩家更新路徑。
- 未架槍 `flamer_gas_burst` 消耗 1 發並允許接續 reload；架槍 `flamer_gas` 消耗 1 發，running state `clip_empty` 可接續 reload。若未走直接鏈結，auto no-ammo 條件要求空匣、有備用彈、非衝刺；no-ammo delay 在此 mark 為 .4 秒。近戰推擊不是 buff consumer，但可接續 reload。
- `remove_canister` phase 原始 4 秒：1.5 秒歸還舊彈匣彈藥、2.75 秒補彈並回轉狀態；`replace_canister` phase 2.5 秒，1.5 秒補彈與回轉。ActionReloadState 固定更新及 finish/interruption 時都用 action 已保存的 `time_scale` 處理已達門檻，不逐 tick 重取 Quickflame。
- 唯一直接接入是 trait `weapon_trait_bespoke_flamer_p1_faster_reload_on_empty_clip` → `flamer_p1_m1` 的 `flamer_p1`。不改火焰射擊、推擊、命中或傷害。

`reload_speed` 是 `additive_multiplier`，基準為 1。`action_reload.time_scale_stat_buffs` 只列 `reload_speed`，因此其他倍率與上限中性時：

- 單獨 Quickflame：`time_scale = 1 + p`，`動作時間 = phase_time ÷ time_scale`。
- 若已有相同 stat 加成 `q`：`time_scale = 1 + q + p`，不是 `(1+q) × (1+p)`。
- 實際 ActionHandler 還乘武器 handling 倍率並套上下限；phase state、已達門檻及中斷時點會影響實際秒數。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_165`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_165.png)｜[Issue附件](https://github.com/user-attachments/assets/007da39c-7650-4720-86f2-51f8f1aa9df2)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L98-L137) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L24) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 淨化噴火器 奧特米亞 Mk III匯入 | [淨化噴火器 奧特米亞 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 淨化噴火器 奧特米亞 Mk III接入 | [淨化噴火器 奧特米亞 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
