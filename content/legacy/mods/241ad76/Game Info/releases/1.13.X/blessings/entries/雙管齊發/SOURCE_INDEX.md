# 雙管齊發：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| tier | [tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L576-L617) |
| wrapper | [wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L45-L115) |
| predicate | [predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L224) |
| M1-special | [M1-special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L307-L510) |
| M3-special | [M3-special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L307-L506) |
| ammo-constant | [ammo-constant](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L31) |
| M1-binding | [M1-binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17-L1112) |
| M3-binding | [M3-binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17-L1105) |
| shoot-start | [shoot-start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L185-L194) |
| handler-snapshot | [handler-snapshot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L266-L329) |
| special-pellets | [special-pellets](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L824-L914) |
| special-setter | [special-setter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1149-L1246) |
| shell-M1 | [shell-M1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L198-L225) |
| shell-M3 | [shell-M3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_shotshell_templates.lua#L478-L505) |
| bash-M1 | [bash-M1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L708-L798) |
| bash-M3 | [bash-M3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L701-L791) |
| bash-profile | [bash-profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_damage_profile_templates.lua#L1910-L2003) |
| kill-event | [kill-event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| event-queue | [event-queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| buff-process | [buff-process](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L288) |
| proc-buff | [proc-buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L371) |
| child-add | [child-add](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L384-L510) |
| child-cap | [child-cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| reload-M1 | [reload-M1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L559-L637) |
| reload-M3 | [reload-M3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L552-L630) |
| reload-template | [reload-template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/reload_templates/double_barrel_reload_template.lua#L11-L77) |
| reload-events | [reload-events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L24-L124) |
| scale | [scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L393-L427) |
| stat-type | [stat-type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L950-L968) |
| stat-base | [stat-base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1045-L1058) |
| trait-equip-target | [trait-equip-target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| weapon-equip-install | [weapon-equip-install](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| weapon-unwield-lifecycle | [weapon-unwield-lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| conditional-stat-override | [conditional-stat-override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| trait-description-numeric-precision | [trait-description-numeric-precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| trait-description-percentage-format | [trait-description-percentage-format](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| fixed-buff-system-order | [fixed-buff-system-order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L320) |
| fixed-weapon-system-order | [fixed-weapon-system-order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L511-L524) |
| fixed-player-buff-fixed-update | [fixed-player-buff-fixed-update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L147) |
| fixed-action-handler-fixed-update | [fixed-action-handler-fixed-update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L137-L174) |
| 近戰橫掃的實際攻擊分類 | [近戰橫掃的實際攻擊分類](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1360) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定來源為 Release 1.13.1、SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`。inventory 交集是一個 trait variant、兩個實際 mark bindings；trait item 限制 `shotgun_p2`，圖示身分為 `content/ui/textures/icons/traits/weapon_trait_216`。

- tier 將相同 parent buff 的 conditional `reload_speed` 設為 .4/.5/.6/.7；parent template 的 .5 為 fallback，因同一 stat key 的 tier override 取代它，不會重複相加。parent 監聽 on_kill 並採 `on_ranged_kill`；成功後只在 `weapon_action.special_active_at_start` 為 true 時建立內控 child。stat callback 僅檢查 child 是否存在，沒有 held-slot／source-item 條件。

- M1 的舉鏡 action 與 M3 的腰射 action 消耗兩發；彈量足夠時設定雙發 flag。不足兩發仍允許普通單發，但不設 flag。M1 腰射與 M3 舉鏡為普通單發。special shell 仍走 `shoot_pellets` 遠程路徑；兩把槍的 `action_bash` 是 sweep kind，damage_type 為 weapon_butt；ActionSweep 使用 melee attack_type。完整 bash profile1910–2003雖有is_push，但沒有count_as_ranged_attack，不符合ranged kill predicate。

- special shell 結束時 setter 關閉 inventory `special_active`，但不改寫 `weapon_action.special_active_at_start`；ProcBuff 讀後者。下一個 action start 才會用當時 inventory 狀態重寫快照。擊殺事件處理時必須仍保留雙發快照，因此不保證每個同一發射擊所排入的擊殺事件都能觸發。

- effect child 沒有固定 duration，max_stacks=1，監聽 on_reload；補彈功能點到達時設 done，但仍留在三種 reload action kinds 中，離開後才退出。補彈點前中斷不送 on_reload；若中斷處理時已跨過功能點，finish 也會追跑該事件。已啟動 action 的 time_scale 在動作開始時讀取並快取，因此標記稍後移除不會改變當前換彈倍率。

- trait parent 經 on_equip 安裝；正常切換使用欄位只處理 on_wield／on_unwield，不會只因切出移除 parent。child/stat/消耗 callback 無 held-slot gate；未核對其他武器的實際接入，不列作已證實觸發來源。

- `p` 是本祝福的 `reload_speed` 加法增量，`q` 是其他同類來源。`reload_speed` 類型是 additive_multiplier，基底為 1。

- M1/M3 reload action 把 `reload_speed` 列入 `time_scale_stat_buffs`；動作開始時用當前 stat cache 算倍率。此 action 單列一個 stat，未觸及上限時 `scale = 1 + q + p`。

- double_barrel reload template 的 eject_mag/eject_mag_restart 補彈閾值為 1.3 action-time 秒，fit_new_mag 為 .7 秒，cock_weapon 沒有 refill。牆鐘時間由 action scale 除算；已啟動動作沿用啟動時的倍率。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_216`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_216.png)｜[Issue附件](https://github.com/user-attachments/assets/6d2d415f-b370-43ef-a384-3c4da0f579f3)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 雙管霰彈槍等級覆寫 | [雙管霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L576-L617) |
| 雙管霰彈槍Buff接入 | [雙管霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L45-L117) |
| UI 雙管霰彈槍 | [UI 雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1154) |
| 雙管霰彈槍 十字星 Mk XI匯入 | [雙管霰彈槍 十字星 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17) |
| 雙管霰彈槍 十字星 Mk XI接入 | [雙管霰彈槍 十字星 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L1110-L1112) |
| 雙管霰彈槍 克魯克 Mk IV匯入 | [雙管霰彈槍 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17) |
| 雙管霰彈槍 克魯克 Mk IV接入 | [雙管霰彈槍 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L1103-L1105) |
