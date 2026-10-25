# 咆哮突進：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 完整 I–IV tier 值與格式器 | [完整 I–IV tier 值與格式器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L312-L367) |
| Arc Rifle實際Buff wrapper | [Arc Rifle實際Buff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L32-L38) |
| Autogun P2完整 I–IV tier 值 | [Autogun P2完整 I–IV tier 值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L378-L433) |
| Autogun P2實際Buff wrapper | [Autogun P2實際Buff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L30-L36) |
| Heavystubber完整 I–IV tier 值 | [Heavystubber完整 I–IV tier 值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L160-L215) |
| Heavystubber實際Buff wrapper | [Heavystubber實際Buff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L34-L40) |
| 連續射擊 step / counter 算式 | [連續射擊 step / counter 算式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1897-L1948) |
| 5層上限與持用條件 | [5層上限與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1965-L1977) |
| 每5%最大彈匣與裝填 gate | [每5%最大彈匣與裝填 gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/fire_step_functions.lua#L36-L50) |
| 射擊計數在首發更新 | [射擊計數在首發更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L455-L465) |
| 射擊結束時間 | [射擊結束時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L598-L612) |
| 停火 strict reset + spread selector | [停火 strict reset + spread selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L487-L530) |
| 目前 spread template 讀取 | [目前 spread template 讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1573-L1581) |
| Buff tier override與多層stat結算 | [Buff tier override與多層stat結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 兩stat為乘數型別 | [兩stat為乘數型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L693-L1033) |
| 備用射擊移動減速 consumer | [備用射擊移動減速 consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L160-L173) |
| 武器動作減速 consumer | [武器動作減速 consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_action_movement.lua#L114-L122) |
| 實際多路移動倍率組合 | [實際多路移動倍率組合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1468-L1513) |
| 最大彈匣容量讀取 | [最大彈匣容量讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L227-L242) |
| 按 item slot 持用條件 | [按 item slot 持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Buff fixed update 重建 stat cache | [Buff fixed update 重建 stat cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L146) |
| Arc Rifle Mk IV hip/braced actions | [Arc Rifle Mk IV hip/braced actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L306-L390) |
| Arc alternate-fire spread restoration | [Arc alternate-fire spread restoration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L897-L949) |
| Autogun P2 Mk II shooting actions | [Autogun P2 Mk II shooting actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L241-L312) |
| Autogun P2 Mk II active selectors | [Autogun P2 Mk II active selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L638-L674) |
| Autogun P2 Mk IV actions and selectors | [Autogun P2 Mk IV actions and selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L238-L660) |
| Autogun P2 Mk VIII actions and selectors | [Autogun P2 Mk VIII actions and selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L241-L674) |
| Heavy Stubber Mk V actions and selectors | [Heavy Stubber Mk V actions and selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L248-L714) |
| Heavy Stubber Mk IV actions and selectors | [Heavy Stubber Mk IV actions and selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L248-L715) |
| Heavy Stubber Mk VII actions and selectors | [Heavy Stubber Mk VII actions and selectors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L245-L746) |
| 實際 alternate-fire spread selector | [實際 alternate-fire spread selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L10-L24) |
| ADS時 ActionShoot採alternate設定 | [ADS時 ActionShoot採alternate設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L176-L212) |
| 停止 ADS 復原 base spread | [停止 ADS 復原 base spread](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L65-L78) |
| reload action-kind detection | [reload action-kind detection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L93-L103) |
| M1/M2/M3容量端點 | [M1/M2/M3容量端點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L46-L57) |
| 三款Autogun容量端點 | [三款Autogun容量端點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L118-L153) |
| 三款Heavystubber容量端點 | [三款Heavystubber容量端點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L631-L666) |
| Arc Mk IV hip spread timer | [Arc Mk IV hip spread timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/settings_templates/arc_rifle_spread_templates.lua#L258-L353) |
| Arc Mk IV ADS spread timer | [Arc Mk IV ADS spread timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/settings_templates/arc_rifle_spread_templates.lua#L354-L454) |
| Autogun P2 Mk II hip spread timer | [Autogun P2 Mk II hip spread timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L1463-L1651) |
| Autogun P2 Mk IV hip and ADS spread timers | [Autogun P2 Mk IV hip and ADS spread timers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L1968-L2397) |
| Autogun P2 Mk VIII hip and ADS spread timers | [Autogun P2 Mk VIII hip and ADS spread timers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2398-L2780) |
| Heavystubber Mk V hip spread timer | [Heavystubber Mk V hip spread timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L633-L1015) |
| Heavystubber Mk V ADS spread timer | [Heavystubber Mk V ADS spread timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L258-L444) |
| Heavystubber Mk IV hip and ADS spread timers | [Heavystubber Mk IV hip and ADS spread timers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1016-L1188) |
| Heavystubber Mk VII hip and ADS spread timers | [Heavystubber Mk VII hip and ADS spread timers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1189-L1960) |
| movement states selected by extension | [movement states selected by extension](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_movement_state.lua#L8-L24) |
| global shooting status initial value | [global shooting status initial value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L99-L108) |
| wield/unwield buff lifecycle | [wield/unwield buff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| on-wield and on-unwield transitions | [on-wield and on-unwield transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| reloading makes continuous step zero | [reloading makes continuous step zero](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L93-L103) |
| continuous fire effective layers | [continuous fire effective layers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L79) |
| offset effective count and cap | [offset effective count and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L429) |
| Autogun P2 Mk II defined but unselected ADS spread timer | [Autogun P2 Mk II defined but unselected ADS spread timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L1652-L1682) |
| ActionShoot obtains the unit-level shooting_status component | [ActionShoot obtains the unit-level shooting_status component](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L50-L60) |
| Autogun P2 M1 own ADS table (unselected contrast) | [Autogun P2 M1 own ADS table (unselected contrast)](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L1652-L1967) |
| Autogun P2 M2 hip timer table | [Autogun P2 M2 hip timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L1968-L2156) |
| Autogun P2 M2 ADS timer table | [Autogun P2 M2 ADS timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2157-L2397) |
| Autogun P2 M3 hip timer table | [Autogun P2 M3 hip timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2398-L2586) |
| Autogun P2 M3 ADS timer table | [Autogun P2 M3 ADS timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_spread_templates.lua#L2587-L2780) |
| Heavy Stubber M2 hip timer table | [Heavy Stubber M2 hip timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1016-L1088) |
| Heavy Stubber M2 braced timer table | [Heavy Stubber M2 braced timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1089-L1188) |
| Heavy Stubber M3 hip timer table | [Heavy Stubber M3 hip timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1189-L1573) |
| Heavy Stubber M3 braced timer table | [Heavy Stubber M3 braced timer table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/settings_templates/ogryn_heavystubber_spread_templates.lua#L1574-L1960) |
| PUE strict reset timer | [PUE strict reset timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L510-L529) |
| Alternate fire installs selected spread | [Alternate fire installs selected spread](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L10-L25) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 三個實作都繼承 `stacking_buff_on_continuous_fire`，但各自設定 `movement_speed_continuous_fire_step_func`。開始時讀取玩家 `shooting_status`、目前動作與武器槽元件；非 `use_combo` 分支以射擊計數除以步距後向下取整，最多五層。
- 本祝福的步距函式在裝填動作中回傳 0；其他時候由目前槽位所有有效彈匣的最大容量 M 計算 `max(1, floor(M×0.05))`。這三類實際武器各自為單一彈匣，容量值按模板的 basic/perfect 端點插值。
- `ActionShoot` 在一個連射組合的首發準備階段把 `shooting_status.num_shots` 加一，之後才進入射擊／命中流程。因此增層依已登記射擊數，不依傷害、命中目標或目標數；一發電弧多目標不增加額外計數。
- 三個 wrapper 對 base stepped buff 的 conditional stat 設 `.5` fallback，並以自家 tier 的兩項 `stat_buffs` 覆寫該值；Buff 逐有效層以 `multiplicative_multiplier` 累積，不把 tier 百分比另加到 `.5`。step 數由射擊計數動態計算，沒有本祝福獨立 TTL。
- 一項 stat 修正 alternate-fire 移動減速曲線的減速幅度，另一項修正武器動作自身減速幅度；兩者均在移動減速後段乘算。當相應基礎減速為 D、每層餘量倍率為 r、層數為 n 時，單一減速項變成 `D×r^n`。總移動倍率仍會與其他獨立曲線／效果合成。
- 效果受目前持用武器槽限制。停火後 `PlayerUnitWeaponExtension.fixed_update` 讀取當時生效的 spread template 與移動狀態，只有在 `not shooting`、沒有 `dont_clear_num_shots` 且 `t > shooting_end_time + num_shots_clear_time` 才歸零。Arc Mk IV hip=.25s、braced=.1s；自動槍的實際模板：Mk II hip=.1s，Mk IV與Mk VIII hip/ADS均=.1s；弗拉克斯 Mk II 雖定義自己的 ADS=.25s，alternate_fire_settings 卻選用 Mk VIII ADS=.1s，所以清除計時必須按實際選用模板判斷。重機槍 Mk V/Mk IV hip=.25s、ADS=.1s，Mk VII hip/ADS=.25s。這些值依各模板 still/moving 狀態及其繼承值核對；離地狀態映射到 moving。
- 槍托自動槍的推擊、重機槍的刺擊、電弧步槍的 bash 不登記射擊計數；`shooting_status` 是玩家單位共用元件，故持用另一把有射擊動作的武器時，ActionShoot 仍會增加這個計數。切槽不直接重置它；若在 timeout 歸零前切回，保留的發數會用回本武器的彈匣容量計算層數，且效果只在本武器持用時套用。裝填使 step 歸零；其後歸零時點仍由固定更新的 strict timeout 條件決定。

令 M 為目前槽位有效彈匣最大容量，S=max(1, floor(M×0.05))；令 N 為已登記射擊數。有效層數 n=min(floor(N/S),5)，因此 N=0 時為 0 層。每層 stat 值是餘量倍率 r：Arc／Autogun I–IV 為 0.90／0.85／0.80／0.75；Heavystubber 為 0.93／0.92／0.91／0.90。

對單項原有移動減速 D，n 層後 D′=D×rⁿ，該項的移動倍率從 1−D 變為 1−D′。每層的「降低減速」是乘算，不是對角色總移動速度加固定百分點；兩項 stat 分別接到 alternate-fire 減速與武器動作減速，總倍率還會與其他獨立修正相乘。

五層時 Arc／Autogun 各 tier 相對縮小原有減速幅度約 40.951%、55.629%、67.232%、76.270%；Heavystubber 約 30.432%、34.092%、37.597%、40.951%。例如算例均指定單項 D=40%、其他移動效果中性，故僅展示該項，不能當成所有動作下的角色總移動速度。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_113`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_113.png)｜[Issue附件](https://github.com/user-attachments/assets/a2c35e00-cdf2-43c6-a566-f132883bed9e)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電弧步槍等級覆寫 | [電弧步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L312-L367) |
| 電弧步槍Buff接入 | [電弧步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L32-L38) |
| UI 電弧步槍 | [UI 電弧步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L635) |
| 電弧步槍 布蘭克斯 Mk IV匯入 | [電弧步槍 布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L20) |
| 電弧步槍 布蘭克斯 Mk IV接入 | [電弧步槍 布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L1059-L1061) |
| 槍托自動槍等級覆寫 | [槍托自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L378-L433) |
| 槍托自動槍Buff接入 | [槍托自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L30-L36) |
| UI 槍托自動槍 | [UI 槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L671) |
| 槍托自動槍 弗拉克斯 Mk II匯入 | [槍托自動槍 弗拉克斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L16) |
| 槍托自動槍 弗拉克斯 Mk II接入 | [槍托自動槍 弗拉克斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L812-L814) |
| 槍托自動槍 格拉亞 Mk IV匯入 | [槍托自動槍 格拉亞 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L17) |
| 槍托自動槍 格拉亞 Mk IV接入 | [槍托自動槍 格拉亞 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L863-L865) |
| 槍托自動槍 阿格里皮娜 Mk VIII匯入 | [槍托自動槍 阿格里皮娜 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L16) |
| 槍托自動槍 阿格里皮娜 Mk VIII接入 | [槍托自動槍 阿格里皮娜 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L817-L819) |
| 雙鏈重型機槍等級覆寫 | [雙鏈重型機槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L160-L215) |
| 雙鏈重型機槍Buff接入 | [雙鏈重型機槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L34-L40) |
| UI 雙鏈重型機槍 | [UI 雙鏈重型機槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L979) |
| 雙鏈重型機槍 克魯克 Mk V匯入 | [雙鏈重型機槍 克魯克 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L16) |
| 雙鏈重型機槍 克魯克 Mk V接入 | [雙鏈重型機槍 克魯克 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L855-L857) |
| 雙鏈重型機槍 戈爾貢努姆 Mk IV匯入 | [雙鏈重型機槍 戈爾貢努姆 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L16) |
| 雙鏈重型機槍 戈爾貢努姆 Mk IV接入 | [雙鏈重型機槍 戈爾貢努姆 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L855-L857) |
| 雙鏈重型機槍 阿克利斯 Mk VII匯入 | [雙鏈重型機槍 阿克利斯 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L16) |
| 雙鏈重型機槍 阿克利斯 Mk VII接入 | [雙鏈重型機槍 阿克利斯 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L879-L881) |
