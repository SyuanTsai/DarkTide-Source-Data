# 散彈：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| shared parent and child base template | [shared parent and child base template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1587-L1637) |
| activated parent proc/add/reset gate | [activated parent proc/add/reset gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L18-L98) |
| parent child lifecycle/no duration timer | [parent child lifecycle/no duration timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L161) |
| trait tier override merge onto parent-linked child | [trait tier override merge onto parent-linked child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L225) |
| effective stack offset/max | [effective stack offset/max](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| conditional stat override and aggregation | [conditional stat override and aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| currently wielded slot condition | [currently wielded slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| initial shot critical roll | [initial shot critical roll](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L159) |
| action.start precedes queued on_action_start | [action.start precedes queued on_action_start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L266-L354) |
| pellets resolved then one on_shoot event | [pellets resolved then one on_shoot event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L160-L234) |
| damageable unit entry into hit map | [damageable unit entry into hit map](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L480-L550) |
| unique target count and hit events | [unique target count and hit events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L696-L744) |
| special shotshell selection | [special shotshell selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L904-L913) |
| health extension damageable test | [health extension damageable test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L103-L105) |
| active hazard prop test | [active hazard prop test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/level_props/hazard_prop.lua#L8-L28) |
| trait template loader | [trait template loader](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua#L80-L84) |
| buff wrapper loader | [buff wrapper loader](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_templates.lua#L111-L115) |
| percentage value display helper | [percentage value display helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| automatic number precision helper | [automatic number precision helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| shotgun_p1_m1 hip + from reload + ADS | [shotgun_p1_m1 hip + from reload + ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L215-L430) |
| shotgun_p1_m2 hip + from reload + ADS | [shotgun_p1_m2 hip + from reload + ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L215-L436) |
| shotgun_p1_m3 hip + from reload + ADS | [shotgun_p1_m3 hip + from reload + ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L215-L442) |
| shotgun_p1_m3 special shell loading | [shotgun_p1_m3 special shell loading](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L660-L665) |
| shotgun_p2_m1 single and double-shell fire actions | [shotgun_p2_m1 single and double-shell fire actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L307-L461) |
| shotgun_p2_m1 light bash | [shotgun_p2_m1 light bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L708-L719) |
| shotgun_p2_m1 heavy bash | [shotgun_p2_m1 heavy bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L799-L809) |
| shotgun_p2_m3 single and special double-shell fire actions | [shotgun_p2_m3 single and special double-shell fire actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L307-L470) |
| shotgun_p2_m3 light bash | [shotgun_p2_m3 light bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L701-L712) |
| shotgun_p2_m3 heavy bash | [shotgun_p2_m3 heavy bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L792-L802) |
| shotgun_p3_m1 hip + from reload + ADS | [shotgun_p3_m1 hip + from reload + ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L217-L463) |
| shotgun_p3_m1 toggle special action | [shotgun_p3_m1 toggle special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L682-L700) |
| shotgun_p4_m1 hip + from reload + ADS | [shotgun_p4_m1 hip + from reload + ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L218-L476) |
| shotgun_p4_m2 hip + from reload + ADS | [shotgun_p4_m2 hip + from reload + ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L218-L470) |
| shotpistol_shield_p1_m1 hip and block-shoot | [shotpistol_shield_p1_m1 hip and block-shoot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L358-L513) |
| shotpistol_shield_p1_m1 light shield bash | [shotpistol_shield_p1_m1 light shield bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1032-L1040) |
| shotpistol_shield_p1_m1 heavy shield bash | [shotpistol_shield_p1_m1 heavy shield bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1212-L1222) |
| activated parent clear branch is outside proc and conditional gates | [activated parent clear branch is outside proc and conditional gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L38-L93) |
| player buff extension dispatches proc events to every installed buff | [player buff extension dispatches proc events to every installed buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| player buff extension queues proc event for unit | [player buff extension queues proc event for unit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L991) |
| trait definitions target on_equip | [trait definitions target on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L185) |
| equipping weapon applies on_equip trait buff | [equipping weapon applies on_equip trait buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L642) |
| ordinary wield switch removes on_unwield and applies on_wield only | [ordinary wield switch removes on_unwield and applies on_wield only](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L693) |
| ordinary unwield removes on_wield and applies on_unwield only | [ordinary unwield removes on_wield and applies on_unwield only](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L780-L785) |
| on_equip trait buff removal requires slot unequip | [on_equip trait buff removal requires slot unequip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L662) |
| ActionHandler sets action handling name or none | [ActionHandler sets action handling name or none](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L291-L299) |
| ActionHandler calls action start then queues on_action_start | [ActionHandler calls action start then queues on_action_start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L329-L354) |
| weapon extension returns nil for none or resolves handling template | [weapon extension returns nil for none or resolves handling template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1593-L1600) |
| weapon extension resolves named tweak table | [weapon extension resolves named tweak table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1539-L1550) |
| ActionShoot reads fire_rate from current weapon handling template | [ActionShoot reads fire_rate from current weapon handling template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1232-L1237) |
| ActionShoot auto-fire predicate | [ActionShoot auto-fire predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L111-L122) |
| ActionShoot initial critical check gated by non-auto-fire | [ActionShoot initial critical check gated by non-auto-fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L157) |
| ActionShootPellets inherits ActionShoot | [ActionShootPellets inherits ActionShoot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L24-L27) |
| ActionShootPellets.start invokes parent start | [ActionShootPellets.start invokes parent start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L126-L128) |
| handling template immediate_single_shot fire-rate object | [handling template immediate_single_shot fire-rate object](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L271-L280) |
| handling template shotgun_from_reload fire-rate object | [handling template shotgun_from_reload fire-rate object](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L402-L408) |
| handling template stubrevolver_single_shot fire-rate object | [handling template stubrevolver_single_shot fire-rate object](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L793-L805) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 五個 trait literal 的 I–IV 覆寫均為 `ranged_critical_strike_chance=0.06/0.08/0.10/0.12`。五個 wrapper 都只 clone 同一 parent/child 基底，將 parent 的 child template 指向自己的 child，沒有額外 matching-prefix 覆寫。

- Parent 訂閱 `on_shoot`，proc chance 為1；child-add callback 僅在 `num_hit_units>1` 時回傳目標數，否則0。parent 與 child 都用目前持用 item slot 條件，因此切出時不能疊加或提供該 stat。

- `ActionShootPellets` 對單次 shotshell 的所有 pellet 做射線命中，在完整 shell hit resolution 後才送一次 `on_shoot`。`num_hit_units` 是 unique damageable-unit map 個數；同一 unit 的多顆 pellet、身體/弱點部位重複命中不重複計數。callback 不檢查 elite、弱點、擊殺或正傷害。

- Child base 的 ranged crit 0.10 會由每個 trait 對 parent 名稱的 tier override 合併到 parent-linked child。`Buff.update_stat_buffs` 選用 override 的整張 conditional stat table，故每個有效 child 層套 tier 0.06/0.08/0.10/0.12，替代 base 0.10，而非再加一次。child `max_stacks=5`、`stack_offset=-1`，占位一層不提供 stat，最多五個有效層。

- Base parent 沒有 `child_duration`，雖有 `stacks_to_remove=5`，定時移層分支沒有啟動條件；也沒有 cooldown。唯一清除事件是 action kind 為 `shoot_pellets` 的 `on_action_start`。Activated parent 的 clear branch 位於 proc chance 與 conditional_proc_func 檢查之後之外；它只用 specific check 驗 action kind，不受持用槽條件限制。

- Trait loader 將此祝福 buff 加在 `on_equip`。玩家的 buff extension 處理 queued proc event 時會逐一呼叫所有仍安裝 buff 的 `update_proc_events`；一般武器切換只移除 `on_wield` buff、套用 `on_unwield` buff，不移除此祝福的 `on_equip` buff。故切出後，另一把武器開始散彈射擊也會讓仍安裝的本祝福處理清除事件；持用槽條件只控制加層與 child stat。

- ActionHandler 先執行 `action:start()` 再將 `on_action_start` 排入 proc queue；`ActionShoot.start()` 的初始爆擊 roll 在 action start 內，因此散彈射擊動作的初始 roll 先於該 clear event 的處理。切出會令條件 stat 不生效，但只要 buff 未卸載，內部層數仍留存到下一次符合的清除事件。

- Tier stat 是遠程爆擊率，不加近戰爆擊率。共通爆擊 consumer 將基礎、generic、對應攻擊類型與操控修正相加並 clamp 0–1；一般 PRD 前再 round 至兩位小數。

- 命中 map 依 HealthExtension 可受傷害的不同單位生成，無 enemy/breed filter；active hazard prop 也可能計入，因此實際判定範圍比 RAW 的 Enemy 用語寬。

- 本項9個型號的24個散彈動作，實際處理設定分別為immediate_single_shot、shotgun_from_reload、stubrevolver_single_shot或預設none；其fire_rate都沒有auto_fire_time，因此全部會在start中先執行初始爆擊檢定，再排入清除事件。裝填接續射擊的0.3秒fire_time是開火延遲，不是祝福有效期限。

- `U` 為一發完整散彈結算後 `unit_to_damage_data_index` 的不同 damageable-unit 數；相同 unit 的多顆彈丸與身體/弱點命中只計一次。若 `U≤1`，新增層數 `ΔS=0`；否則 `ΔS=min(U,5−S)`。

- 此式的 `S` 是本次 `on_shoot` 增加層數前的有效層數，已處理該次 `shoot_pellets` 開始時的清除事件；本項24個單發射擊動作都先以舊層數做初始爆擊判定，再清到 `S=0`。因此本發 `U=2` 時重新得到兩層；`U≤1` 時維持零層，不把上一發的五層相加。

- `S=clamp(internal child stack count−1,0,5)`；減一對應 child 的 `stack_offset=-1` 占位層。tier每有效層 `r={0.06,0.08,0.10,0.12}`，`B=S×r` 是加入遠程爆擊率的原始增量。五層為+0.30/+0.40/+0.50/+0.60，即+30/+40/+50/+60個百分點。

- 爆擊池包含基礎、generic、相應攻擊類型及武器操控修正；此加成是其中的遠程爆擊 stat，不是傷害百分比。最終一般 PRD 分支把加總值限制到[0,1]並在擲骰前 round 至兩位小數。

- 本發 `on_shoot` 在完整 pellet hit resolution 後提供 `U`，不會影響產生該 `U` 的本發。下一個 `shoot_pellets` action 的清除 event 在 `ActionShoot.start` 初始 crit roll後排入。

- 沒有時間遞減或冷卻；層數留存在仍安裝的 on-equip parent/child buff。任何武器送出的 `on_action_start` 若 action kind 為 `shoot_pellets`，都可清除這些層數；清除分支在 proc chance 與 conditional_proc_func 之外，沒有持用槽條件。切出只令 stat conditional 失效；其他非 pellet 動作不清層。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_148`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_148.png)｜[Issue附件](https://github.com/user-attachments/assets/61b31e74-8402-4d31-84da-ddd9c5763b3b)；圖示只作辨識。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 戰鬥霰彈槍等級覆寫 | [戰鬥霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L309-L358) |
| 戰鬥霰彈槍Buff接入 | [戰鬥霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L18-L20) |
| UI 戰鬥霰彈槍 | [UI 戰鬥霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1131) |
| 戰鬥霰彈槍 紮羅娜 Mk VI匯入 | [戰鬥霰彈槍 紮羅娜 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L14) |
| 戰鬥霰彈槍 紮羅娜 Mk VI接入 | [戰鬥霰彈槍 紮羅娜 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L950-L952) |
| 戰鬥霰彈槍 阿格里皮娜 Mk VII匯入 | [戰鬥霰彈槍 阿格里皮娜 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L14) |
| 戰鬥霰彈槍 阿格里皮娜 Mk VII接入 | [戰鬥霰彈槍 阿格里皮娜 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m2.lua#L962-L964) |
| 戰鬥霰彈槍 奧克塔蘭 Mk IX匯入 | [戰鬥霰彈槍 奧克塔蘭 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L14) |
| 戰鬥霰彈槍 奧克塔蘭 Mk IX接入 | [戰鬥霰彈槍 奧克塔蘭 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m3.lua#L964-L966) |
| 雙管霰彈槍等級覆寫 | [雙管霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L348-L397) |
| 雙管霰彈槍Buff接入 | [雙管霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L25-L27) |
| UI 雙管霰彈槍 | [UI 雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1154) |
| 雙管霰彈槍 十字星 Mk XI匯入 | [雙管霰彈槍 十字星 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17) |
| 雙管霰彈槍 十字星 Mk XI接入 | [雙管霰彈槍 十字星 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L1110-L1112) |
| 雙管霰彈槍 克魯克 Mk IV匯入 | [雙管霰彈槍 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17) |
| 雙管霰彈槍 克魯克 Mk IV接入 | [雙管霰彈槍 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L1103-L1105) |
| 獵人霰彈槍等級覆寫 | [獵人霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L309-L358) |
| 獵人霰彈槍Buff接入 | [獵人霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L22-L24) |
| UI 獵人霰彈槍 | [UI 獵人霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1172) |
| 獵人霰彈槍 奧克塔蘭 Mk III匯入 | [獵人霰彈槍 奧克塔蘭 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L14) |
| 獵人霰彈槍 奧克塔蘭 Mk III接入 | [獵人霰彈槍 奧克塔蘭 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p3_m1.lua#L986-L988) |
| 滅絕者霰彈槍等級覆寫 | [滅絕者霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L309-L358) |
| 滅絕者霰彈槍Buff接入 | [滅絕者霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L22-L24) |
| UI 滅絕者霰彈槍 | [UI 滅絕者霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1185) |
| 滅絕者霰彈槍 鐵腕 Mk III匯入 | [滅絕者霰彈槍 鐵腕 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L15) |
| 滅絕者霰彈槍 鐵腕 Mk III接入 | [滅絕者霰彈槍 鐵腕 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m1.lua#L1076-L1078) |
| 滅絕者霰彈槍 鐵腕 Mk VIII匯入 | [滅絕者霰彈槍 鐵腕 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L15) |
| 滅絕者霰彈槍 鐵腕 Mk VIII接入 | [滅絕者霰彈槍 鐵腕 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p4_m2.lua#L1064-L1066) |
| 衝覆者霰彈手槍和防暴盾牌等級覆寫 | [衝覆者霰彈手槍和防暴盾牌等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L827-L876) |
| 衝覆者霰彈手槍和防暴盾牌Buff接入 | [衝覆者霰彈手槍和防暴盾牌Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L38-L40) |
| UI 衝覆者霰彈手槍和防暴盾牌 | [UI 衝覆者霰彈手槍和防暴盾牌](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1203) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L16) |
| 衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入 | [衝覆者霰彈手槍和防暴盾牌 審判 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1533-L1535) |
