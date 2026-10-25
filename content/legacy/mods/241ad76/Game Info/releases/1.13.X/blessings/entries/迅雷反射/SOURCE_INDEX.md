# 迅雷反射：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| I–IV own tier 與 formatter 設定 | [I–IV own tier 與 formatter 設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L132-L181) |
| ProcBuff trigger 與 duration | [ProcBuff trigger 與 duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L71-L83) |
| 通用弱點檢查 vs 類型專用 helper | [通用弱點檢查 vs 類型專用 helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L473-L498) |
| Attack 弱點判定與 on_hit 事件 | [Attack 弱點判定與 on_hit 事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L249-L254) |
| Attack on_hit 參數與篩選 | [Attack on_hit 參數與篩選](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L579-L621) |
| Mk VI 普通射擊接線 | [Mk VI 普通射擊接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L197-L274) |
| Mk VI 瞄準射擊與投射物接線 | [Mk VI 瞄準射擊與投射物接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L319-L381) |
| 直接命中／爆炸模板 | [直接命中／爆炸模板](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L65-L134) |
| 特殊近戰 sweep 與型號接線 | [特殊近戰 sweep 與型號接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L448-L668) |
| trait on_equip 安裝與 slot 生命周期 | [trait on_equip 安裝與 slot 生命周期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L624-L660) |
| trait Buff 經由玩家 on_equip 安裝 | [trait Buff 經由玩家 on_equip 安裝](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L163-L214) |
| reload action 消費 reload_speed | [reload action 消費 reload_speed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L382-L447) |
| ActionHandler 取樣與時間縮放 | [ActionHandler 取樣與時間縮放](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L294-L429) |
| TraitValueParser placeholder formatter | [TraitValueParser placeholder formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L117) |
| Rumbler impact resolves the actual projectile hit actor zone then calls Attack | [Rumbler impact resolves the actual projectile hit actor zone then calls Attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L433-L543) |
| Weakspot lookup and guaranteed keyword | [Weakspot lookup and guaranteed keyword](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/weakspot.lua#L9-L19) |
| Weakspot zone map lookup | [Weakspot zone map lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/weakspot.lua#L34-L41) |
| Explosion chooses a center-mass actor per target | [Explosion chooses a center-mass actor per target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L145-L193) |
| Explosion queues the selected actor with each target | [Explosion queues the selected actor with each target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L259-L271) |
| Queued explosion resolves actor to its actual hit zone and attacks target | [Queued explosion resolves actor to its actual hit zone and attacks target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L243-L312) |
| HitZone actor map construction | [HitZone actor map construction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_zone.lua#L42-L68) |
| HitZone name resolver | [HitZone name resolver](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_zone.lua#L13-L23) |
| Minion actor→zone and zone→actor getters | [Minion actor→zone and zone→actor getters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_data/minion_unit_data_extension.lua#L168-L177) |
| Actual instant Thumper explosion template profiles | [Actual instant Thumper explosion template profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L83-L110) |
| Complete default_grenade clone parent | [Complete default_grenade clone parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L19-L91) |
| Complete close_grenade clone parent | [Complete close_grenade clone parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L92-L135) |
| Complete Thumper standard instant clone and overrides | [Complete Thumper standard instant clone and overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1379-L1431) |
| Complete Thumper close instant clone and overrides | [Complete Thumper close instant clone and overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1432-L1460) |
| Complete light_ogryn_shotgun_tank profile definition | [Complete light_ogryn_shotgun_tank profile definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/settings_templates/thumper_damage_profile_templates.lua#L24-L162) |
| No-proc damage-type set | [No-proc damage-type set](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88) |
| ProcBuff active window | [ProcBuff active window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L80-L105) |
| No-cooldown ProcBuff can activate while active | [No-cooldown ProcBuff can activate while active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L194) |
| ProcBuff active stat predicate and stat update | [ProcBuff active stat predicate and stat update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L300) |
| ProcBuff processes queued events independently | [ProcBuff processes queued events independently](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L370) |
| Player Buff update processes events before stat rebuild | [Player Buff update processes events before stat rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Buff extension drains queued proc events | [Buff extension drains queued proc events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L281) |
| reload_speed is an additive multiplier | [reload_speed is an additive multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L960) |
| Additive multiplier base value is one | [Additive multiplier base value is one](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058) |
| Reload fixed update consumes stored scale | [Reload fixed update consumes stored scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L44-L53) |
| Reload functionality thresholds use stored scale | [Reload functionality thresholds use stored scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L90-L108) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- **綁定**：固定 inventory 只有一個此 trait binding：`weapon_trait_bespoke_ogryn_thumper_p2_weakspot_projectile_hit_increases_reload_speed`，限制 `thumper_p2`，實際 Mark `ogryn_thumper_p1_m2`（震盪槍 洛倫茲 Mk VI）。不以相近 suffix 推其他型號。
- **數值**：本 trait 的 I–IV `proc_stat_buffs.reload_speed` 為 `.15/.20/.25/.30`，覆寫 wrapper 同名 fallback `.5`；wrapper 設 3 秒、最多一層、`on_hit`，且無 cooldown 與顯式持用／來源物品／攻擊類型 gate。
- **命中資料**：Attack 以實際 hit zone 計算 `hit_weakspot`，再在通用可觸發命中路徑送出 `on_hit`。wrapper 的 `CheckProcFunctions.on_weakspot_hit` 只看該布林值，沒有呼叫 ranged-only 或 melee-only 版本。其他 `on_hit` 欄位不會收窄這個 wrapper。
- **攻擊覆蓋**：Mk VI 腰射及瞄準模式均接投射物模板；直接命中使用實際 hit_actor 對應區域；AoE 優先取每目標 center_mass actor，再於 WeaponSystem 解析實際 hit zone 交給 Attack。兩者仍須各自符合 breed 弱點 map／保證弱點 keyword 與通用 no-proc 篩選。其左右 bash 均接 melee sweep，若實際命中被判為弱點，也能符合同一 helper。純推擊或一般命中沒有弱點旗標時不觸發。
- **首次／刷新／切換**：trait Buff 隨裝備槽 `on_equip` 加入玩家 Buff extension；切換手持武器只處理 on_wield/on_unwield，不移除此 on_equip Buff。每次成功事件處理都可重設三秒起點；事件處理後才更新統計快取。卸下／替換原槽位會移除此 Buff。
- **換彈採樣**：實際 Rumbler reload action 把 `reload_speed` 列入 `time_scale_stat_buffs`。ActionHandler 在 action 開始時建立並保存倍率，將總時間除以倍率；已開始的 reload action 不會因後續命中而即時重新採樣。

- 令 `b` 為本祝福的換彈速度加值，`q` 為其他加到同一 stat 的效果；在本次示例中 `q=0`、沒有倍率 clamp，基準 reload-speed stat 為 `1`，所以 `M=1+q+b`。
- 對一段基礎時間 `T0`，實際該段時間按 action scale 為 `T=T0/M`。因此時間減幅為 `1−1/M`，不是 `b`。
- IV 級：`b=.30`、`T0=2.333s`，`M=1.30`，`T=2.333/1.30≈1.795s`，時間減幅 `1−1/1.30≈23.08%`。
- I 級：`b=.15`，`T=2.333/1.15≈2.029s`，時間減幅約 `13.04%`。
- 公式只說明 reload action 起始時取樣到的時間倍率；它不代表完整多階段裝填總時長，也不表示動作開始後的 buff 更新會追溯改變已保存倍率。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_234`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_234.png)｜[Issue附件](https://github.com/user-attachments/assets/51ba138d-a251-4d0f-9e71-557dc791caee)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 震盪槍等級覆寫 | [震盪槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L132-L181) |
| 震盪槍Buff接入 | [震盪槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L71-L85) |
| UI 震盪槍 | [UI 震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1074) |
| 震盪槍 洛倫茲 Mk VI匯入 | [震盪槍 洛倫茲 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| 震盪槍 洛倫茲 Mk VI接入 | [震盪槍 洛倫茲 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
