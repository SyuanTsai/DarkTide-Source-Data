# 破片四濺：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 變體tier覆寫 | [變體tier覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L292-L330) |
| 完整wrapper與實際profile gate | [完整wrapper與實際profile gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L31-L70) |
| ProcBuff條件及check順序 | [ProcBuff條件及check順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L339) |
| 持用條件 | [持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| CheckProc helper definitions | [CheckProc helper definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L434-L436) |
| 傷害與目標類型helper definitions | [傷害與目標類型helper definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L467) |
| 目標存活、層數及owner/source傳遞 | [目標存活、層數及owner/source傳遞](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Attack on_hit事件與damage_profile參數 | [Attack on_hit事件與damage_profile參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L620) |
| bleed template層數、時間與tick公式 | [bleed template層數、時間與tick公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260) |
| interval tick與到期逐層移除 | [interval tick與到期逐層移除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| stack-cap檢查 | [stack-cap檢查](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L384-L405) |
| 同名stack instance疊加及刷新 | [同名stack instance疊加及刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L455) |
| 滿cap刷新而不加層 | [滿cap刷新而不加層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| stack移除路徑 | [stack移除路徑](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L650-L662) |
| weapon template trait import | [weapon template trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| traits ukeys與append接入 | [traits ukeys與append接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L853-L857) |
| 腰射/瞄準projectile、fuse及impact設定 | [腰射/瞄準projectile、fuse及impact設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L65-L143) |
| fuse與impact爆炸更新路徑 | [fuse與impact爆炸更新路徑](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L279) |
| fuse explosion建立 | [fuse explosion建立](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L321-L362) |
| first impact suppression及impact explosion | [first impact suppression及impact explosion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L633-L660) |
| instant爆炸close與一般profile | [instant爆炸close與一般profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L83-L100) |
| close hit選profile | [close hit選profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L257-L263) |
| close profile傳入Attack.execute | [close profile傳入Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L288-L316) |
| on_non_kill helper definition | [on_non_kill helper definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L76-L82) |
| attacked-unit-is-minion helper definition | [attacked-unit-is-minion helper definition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L606-L608) |
| first bash sweep and melee damage profile | [first bash sweep and melee damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L448-L557) |
| second bash sweep and melee damage profile | [second bash sweep and melee damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L558-L668) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 適用變體是震盪槍洛倫茲 Mk VI。I–IV 級對應每次有效命中施加 1、2、3、4 層。wrapper 以 on_hit 事件呼叫通用 debuff helper，並以 is_item_slot_wielded 作為條件；沒有 item-match gate。wrapper 的 target_buff_data.max_stacks=31 是 helper 的輸入上限，不是 bleed 的實際上限。

- wrapper 的 check_proc_func 最後以 damage_profile.name == ogryn_thumper_p1_m2_close_instant 判定。前面四個 CheckProcFunctions 欄位是函式參照卻沒有括號呼叫，因此不會實際檢查傷害大於零、非擊殺、爆炸攻擊或目標為小兵。ProcBuff 先檢查持用條件，再呼叫此 profile gate，通過後才執行 helper。

- 腰射與瞄準投射物的 fuse 與 impact 設定都指向 ogryn_thumper_grenade_instant。投射物直接接觸使用 thumper_grenade_impact profile；first_impact_activated 會阻止第一次碰撞立即觸發 impact explosion。引信更新另有 min_lifetime 與 fuse_time 控制，不把「碰撞後固定 1.5 秒」當作觸發規則。符合本祝福 profile 的是爆炸傷害，而非直接碰撞傷害。

- Explosion 依各目標與爆炸中心的距離（扣除目標 breed 的 explosion_radius）或黏附於目標，判定 close hit；close hit 才選 close_damage_profile。爆炸外圈使用不同 profile。祝福以精確 close damage profile 名稱篩選，所以只套用在實際 close 區命中的目標，不是整個爆炸範圍。

- BuffUtils 僅要求目標仍存活且有 buff extension，並讀取本 tier 的層數、helper 上限與既有層數；它不比對 params.item。新建 bleed buff 時傳入 owner_unit/source_item。相同 bleed template 已存在時，BuffExtensionBase 對既有 instance 加層而不新建 instance，因此原有 owner/source context 可保留。

- 遊戲共用 bleed template 的 max_stacks 與 max_stacks_cap 均為 16；duration 1.5 秒、interval 0.5 秒、refresh_duration_on_stack=true、interval_stack_removal=true。若在 16 層時再次命中，stack-cap 分支不增加層數但會刷新起始時間／持續時間。層數依平滑函數 power_level = 500 × smoothstep(n/16) 影響 bleed tick；500 是 power_level 輸入，不等同固定生命傷害。到期後 interval_buff 每次傷害結算移除一層；既有 tick 時刻不因 set_start_time 而重新排程。

- 持用條件控制新增流血的proc，不是敵人身上共用bleed的持續條件；切換武器不移除既有bleed。

- 每次有效命中新增q=1／2／3／4層；命中後層數為min(n+q,16)，並刷新起始時間。

- 流血每次傷害結算的威力為P(n)=500×s²×(3−2s)，s=n/16。4層：s=0.25，P=78.125；16層：P=500。這是流血傷害設定的威力輸入，不是固定生命傷害。

- 基本刷新時間D=1.5秒，傷害間隔0.5秒。刷新不重排既有的下一次結算時刻；時間到期後，每次結算先使用當時層數造成傷害，再退1層。

- 若刷新時有N層且之後不再新增，設δ為到期至第一次退層結算的間隔，歸零時間約為D+δ+(N−1)×0.5秒。4層為3+δ秒，16層為9+δ秒；δ由既有結算排程與更新時刻決定，因此1.5秒只表示刷新時間。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_219`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_219.png)｜[Issue附件](https://github.com/user-attachments/assets/76d7ae66-9a8f-4e19-8443-246a889eee83)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 震盪槍等級覆寫 | [震盪槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L292-L330) |
| 震盪槍Buff接入 | [震盪槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L31-L70) |
| UI 震盪槍 | [UI 震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1074) |
| 震盪槍 洛倫茲 Mk VI匯入 | [震盪槍 洛倫茲 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| 震盪槍 洛倫茲 Mk VI接入 | [震盪槍 洛倫茲 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
