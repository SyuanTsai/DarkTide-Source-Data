# 優化冷卻：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| own tiers and formatter | [own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L343-L389) |
| actual own wrapper | [actual own wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L153-L158) |
| percentage formatting | [percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L9-L20) |
| prefix order | [prefix order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L79-L108) |
| combo count source | [combo count source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1897-L1948) |
| base stepped wrapper | [base stepped wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1965-L1977) |
| stepped aggregation | [stepped aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L51) |
| same-key override and stack loop | [same-key override and stack loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| distinct charge duration stat | [distinct charge duration stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L723-L725) |
| heat stat categories | [heat stat categories](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L900-L907) |
| combo action-kind list | [combo action-kind list](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/action/action_handler_settings.lua#L48-L57) |
| action flag resolution | [action flag resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/action_availability.lua#L100-L128) |
| action starts before combo write | [action starts before combo write](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L320-L332) |
| combo increment and clear | [combo increment and clear](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L512) |
| combo idle reset | [combo idle reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1149-L1161) |
| M1 direct charge and primary shot | [M1 direct charge and primary shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L239-L384) |
| M1 brace charge and charged shot | [M1 brace charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L385-L534) |
| M1 vent action | [M1 vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L535-L631) |
| M1 reload action | [M1 reload action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L632-L687) |
| M2 direct charge and primary shot | [M2 direct charge and primary shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L239-L384) |
| M2 brace charge and charged shot | [M2 brace charge and charged shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L385-L534) |
| M2 vent action | [M2 vent action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L535-L631) |
| M2 reload action | [M2 reload action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L632-L687) |
| selected heat templates | [selected heat templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L34-L91) |
| charge action template selection | [charge action template selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L26-L65) |
| overload charge order | [overload charge order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge.lua#L8-L29) |
| charge heat producer | [charge heat producer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/overheat_action_module.lua#L18-L60) |
| charge-time consumer separation | [charge-time consumer separation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L28-L87) |
| shot heat producer | [shot heat producer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L568-L580) |
| immediate heat consumer | [immediate heat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L62) |
| charge heat consumer | [charge heat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L100) |
| natural decay consumer | [natural decay consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L155-L171) |
| vent consumer | [vent consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L174-L212) |
| normalized heat/clamp helpers | [normalized heat/clamp helpers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L71) |
| weapon update heat/action order | [weapon update heat/action order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L487-L508) |
| heat update all slots | [heat update all slots](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1384-L1390) |
| Buff system before weapon system | [Buff system before weapon system](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L309-L322) |
| M1 combo reset value | [M1 combo reset value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L840) |
| M2 combo reset value | [M2 combo reset value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L840) |
| unwield clears combo | [unwield clears combo](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/base_template_settings.lua#L109-L132) |
| combo idle reset call site | [combo idle reset call site](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L155-L166) |
| weapon system position after BuffExtension | [weapon system position after BuffExtension](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L512-L521) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 實際trait是 `weapon_trait_bespoke_plasmagun_p1_reduced_overheat_on_continuous_fire`，寫入 `overheat_amount`；own wrapper以 `use_combo=true` 合併 conditional fallback .9與base `stacking_buff_on_continuous_fire`。同key tier override取代fallback .9。base是單一stepped buff，offset−1加combo bonus；bonus讀 `weapon_action_component.combo_count`，最多五步。`overheat_amount` 是乘數類型，所以同一tier factor依effective count逐次相乘，得到 `p^n`。

- 兩型號的普通 `action_shoot` 和蓄力 `action_shoot_charged` 都是 `shoot_hit_scan`，每個動作增加一次combo。直接／架槍charge動作都 `hold_combo=true`，只保存原計數並在蓄力期間供stat使用。超過武器template的0.5秒combo閒置窗、開始非增加或維持動作、換槽、reload或vent都重置；其餘沒有自己的疊層期限。

- Buff extension先於weapon system更新。action handler呼叫 `action.start` 後才更新combo，因此新combo不會即時重算進已快取的當前stat；後續buff更新後，射擊或蓄力熱consumer再讀取更新後stat。shot熱計算是 `overheat_amount×overheat_immediate_amount`，暴擊多乘單獨crit modifier；held charge是 `overheat_amount×overheat_over_time_amount`。本項不改自然散熱的 `overheat_dissipation_multiplier` 或主動vent的 `vent_overheat_speed`，也不改獨立 `charge_up_time`。

- M1／M2都實際選用M1命名的直接蓄力、架槍蓄力與射擊heat templates；M2自有名稱的charge templates雖存在，但action未引用。

- ActionHandler494–512 有重新起手早退：reset override，或沒有 running_action、非 automatic_input 且未設 keep_combo_on_start 時，先清零而不執行增加／hold 分支。兩型號 charge_direct／charge 只有 hold_combo=true，沒有 keep_combo_on_start；因此本文件只說接續蓄力保留，手動閒置重新起手可清零。

- 令 `p` 為當級倍率、`n=clamp(combo_count,0,5)`、`q` 為其他 `overheat_amount` 乘數積，`s` 為動作階段倍率。該次生熱為 `H×q×p^n×s`。射擊的 `s` 是 `overheat_immediate_amount`（暴擊另乘critical modifier）；持續蓄力的 `s` 是 `overheat_over_time_amount`。系統之後把meter限制在0–1；自然衰減與vent分別使用其他stat，不在此式內。

- H 在算例用 normalized 比例 0.20，換算為熱能表 20 百分點；IV 五階相對減少 1−0.90⁵=0.40951。現有熱能表讀數、百分點差額與生熱相對降幅分開。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_153`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_153.png)｜[Issue附件](https://github.com/user-attachments/assets/67729505-43c4-4069-9e4b-d2fda4ca0e44)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L343-L389) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L153-L158) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 M35熔岩核心 Mk III匯入 | [電漿槍 M35熔岩核心 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| 電漿槍 M35熔岩核心 Mk III接入 | [電漿槍 M35熔岩核心 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
