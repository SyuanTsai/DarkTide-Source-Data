# 亞空間亂舞：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| P1 own tiers and formatter | [P1 own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L402-L450) |
| P1 actual parent-child wrapper | [P1 actual parent-child wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L82-L92) |
| P2 own tiers and formatter | [P2 own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L224-L272) |
| P2 actual parent-child wrapper | [P2 actual parent-child wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L32-L42) |
| P3 own tiers and formatter | [P3 own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L223-L271) |
| P3 actual parent-child wrapper | [P3 actual parent-child wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L27-L37) |
| P4 own tiers and formatter | [P4 own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L332-L380) |
| P4 actual parent-child wrapper | [P4 actual parent-child wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L36-L46) |
| Base parent and child effect | [Base parent and child effect](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2184-L2227) |
| ActionHandler starts release then emits event | [ActionHandler starts release then emits event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L329-L354) |
| ProcBuff event conditions | [ProcBuff event conditions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Parent proc and capped stack addition | [Parent proc and capped stack addition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L90) |
| Parent timeout | [Parent timeout](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L131) |
| Parent stack duration refresh | [Parent stack duration refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| Parent override lookup for child | [Parent override lookup for child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| Conditional stat override selection | [Conditional stat override selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L735-L747) |
| Charge duration consumer | [Charge duration consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L28-L87) |
| Charge time stat category | [Charge time stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L723-L725) |
| Additive multiplier baseline | [Additive multiplier baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1057) |
| Buff and Weapon update ordering | [Buff and Weapon update ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L309-L319) |
| Trait percentage parser and affixes | [Trait percentage parser and affixes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L115) |
| Trait numeric precision | [Trait numeric precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| P1 charge/release action | [P1 charge/release action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L316-L434) |
| P2 charge/release action | [P2 charge/release action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L373-L466) |
| P3 charge/release action | [P3 charge/release action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L363-L462) |
| P4 charge/release action | [P4 charge/release action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L315-L419) |
| P1 charge template timing endpoints | [P1 charge template timing endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L155-L169) |
| P2 charge template timing endpoints | [P2 charge template timing endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L183-L197) |
| P3 charge template timing endpoints | [P3 charge template timing endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L220-L234) |
| P4 charge template timing endpoints | [P4 charge template timing endpoints](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L254-L268) |
| P1 template import and trait binding | [P1 template import and trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| P1 trait ukeys and append | [P1 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| P2 template import and trait binding | [P2 template import and trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| P2 trait ukeys and append | [P2 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| P3 template import and trait binding | [P3 template import and trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| P3 trait ukeys and append | [P3 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| P4 template import and trait binding | [P4 template import and trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| P4 trait ukeys and append | [P4 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
| P2 uncharged flame action and exclusion | [P2 uncharged flame action and exclusion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L268-L307) |
| P1 melee stab special action | [P1 melee stab special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L463-L485) |
| P3 melee stab special action | [P3 melee stab special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L537-L560) |
| P4 melee stab special action | [P4 melee stab special action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L468-L490) |
| Action kind resolves actual overload charge classes | [Action kind resolves actual overload charge classes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L52-L54) |
| P1 class uses ActionCharge | [P1 class uses ActionCharge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_position_finder.lua#L3-L6) |
| P1 update forwards charge module | [P1 update forwards charge module](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_position_finder.lua#L28-L29) |
| P2 class uses ActionCharge | [P2 class uses ActionCharge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge.lua#L3-L6) |
| P2 update forwards charge module | [P2 update forwards charge module](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge.lua#L21-L22) |
| P3/P4 class uses ActionCharge | [P3/P4 class uses ActionCharge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_target_finder.lua#L3-L6) |
| P3/P4 update forwards charge module | [P3/P4 update forwards charge module](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge_target_finder.lua#L28-L29) |
| ActionCharge creates actual module | [ActionCharge creates actual module](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L8-L22) |
| ActionCharge updates actual module | [ActionCharge updates actual module](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L55-L59) |
| Charge module class import | [Charge module class import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/action_modules.lua#L13-L15) |
| Charge module selector | [Charge module selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/action_modules.lua#L27-L29) |
| Weapon calculates lerp values and creates resolved tweak templates. | [Weapon calculates lerp values and creates resolved tweak templates.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L68-L78) |
| lerp_basic/lerp_perfect are interpolated to one numeric value using current/default lerp input. | [lerp_basic/lerp_perfect are interpolated to one numeric value using current/default lerp input.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L371-L402) |
| Current wielded weapon supplies resolved tweak template. | [Current wielded weapon supplies resolved tweak template.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1539-L1551) |
| Active charge template name retrieves the current resolved template. | [Active charge template name retrieves the current resolved template.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1633-L1641) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 四個實際 trait 都各自定義 I–IV 的 charge_up_time tier 值 −0.055／−0.065／−0.075／−0.085，並以百分比格式直接讀取對應 parent override；stacks placeholder 從 child 的 max_stacks 讀取。每個 wrapper 克隆基礎 parent/child，並把自己的 on_action_start 動作謂詞改成精確名稱：P1 action_trigger_explosion、P2 action_shoot_charged_flame、P3/P4 action_shoot_charged。P2/P3/P4 的同檔無 parent stepped alias 不在實際 trait.buffs 接線上，不作本項效果證據。

- 基礎 parent 在 on_action_start 以 100% chance 監聽事件，並要求該 trait 所屬武器槽仍持用；wrapper 的動作名檢查才決定是否加層。ActionHandler 先啟動 action，再送出帶 action_name/action_settings 的 on_action_start 事件；因此觸發點是合格釋放動作開始，不是擊中或命中傷害。

- parent child_duration 為 5 秒、stacks_to_remove 為 3；child max_stacks=3 且 stack_offset=−1，所以一個內部占位層不算有效玩家層，最高三層。每次合格事件最多加一個子層並重設共用期限，即使已達上限而沒有可新增的層也會刷新時間。持用條件同時控制觸發及 child 的 charge_up_time；切出後效果停用但期限繼續。

- tier 在 parent 的 charge_up_time stat_buffs key 覆寫 child fallback 的 +0.1；Buff 建構 child 時以 parent_buff_template 尋找該 trait override，再由 conditional_stat_buffs override table 取代基礎表。因此生效值是該階 own 負值，不是 +0.1 再加 tier。stat 類型為 additive_multiplier，基準為 1。

- 四種合格釋放各自不同：P1 觸發爆炸，P2 開始 flamer_gas 連續火焰釋放，P3 開始 chain_lightning，P4 生成蓄力投射物。普通未蓄力火焰及相關法杖近戰特殊動作不在精確動作謂詞內；P3 蓄力連鎖閃電是合格的次要攻擊；特殊鍵近戰動作不符合。其攻擊路徑只用來確認觸發動作，祝福 stat 本身不改傷害或力量。

- ChargeActionModule 每次 fixed_update 與 complete_time 都讀當前 BuffExtension charge_up_time，再乘當前 charge template 已解析的 charge_duration。Buff 快取在 Weapon extension 更新前；首個釋放才建立層，之後蓄力在快取反映新 child stat 時才縮短。charge_duration 由型號模板的 lerp_basic／lerp_perfect 端點解析；不得把兩端點當兩種獨立射擊模式，也不保證同影格或已完成蓄力追溯改時。

- 固定 SHA 共通快取只重用 parent placeholder/offset、child parent context、tier override 選取、ProcBuff event 與 held-slot 條件等已直接核實的相同區段；本項四個 wrapper 謂詞、四個 charge template、tier 值、RAW formatter 與型號接線由本項收據逐一核對。

- 四個蓄力模板的 kind 經 weapon_action_handler_data 對應三種 overload-charge 類別，均繼承 ActionCharge；其建構與 fixed_update 確實接入註冊的 ChargeActionModule，所以上述時間公式適用於這四種實際蓄力動作。

- 令 c_t 為每層實際 tier modifier（I −0.055、II −0.065、III −0.075、IV −0.085），r_t=|c_t| 為玩家所見正向縮短幅度；n 是目前有效層數（0–3），q 是其他 charge_up_time additive-multiplier 修正的合計。則修正因子 M=1+q+n×c_t=1+q−n×r_t；當前充能時間 T=T0×M。T0 是當前型號及充能插值所解析的無本祝福基準時間，不是固定命中或傷害值。

- 下表以 q=0 計算各層時間係數與相對 T0 縮短幅度。

| 等級 | 每層程式 modifier c_t | 每層時間縮短 r_t | 一層時間係數 | 三層時間係數 | 三層相對 T0 縮短 |
|---|---:|---:|---:|---:|---:|
| I | −5.5% | 5.5% | 0.945 | 0.835 | 16.5% |
| II | −6.5% | 6.5% | 0.935 | 0.805 | 19.5% |
| III | −7.5% | 7.5% | 0.925 | 0.775 | 22.5% |
| IV | −8.5% | 8.5% | 0.915 | 0.745 | 25.5% |

- 其他修正存在時，比較基準須分開：q-only 的時間為 Tq=T0×(1+q)，加入 n 層後為 T=T0×(1+q−n×r_t)；相對 q-only 的額外縮短比例為 (Tq−T)/Tq=(n×r_t)/(1+q)，不等同最終攻擊數值變化。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_015`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_015.png)｜[Issue附件](https://github.com/user-attachments/assets/a24dfe97-3d90-44b2-afb5-99309f88e6f4)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 虛空爆破力場法杖等級覆寫 | [虛空爆破力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p1.lua#L402-L450) |
| 虛空爆破力場法杖Buff接入 | [虛空爆破力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p1_buff_templates.lua#L82-L92) |
| UI 虛空爆破力場法杖 | [UI 虛空爆破力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L805) |
| 虛空爆破力場法杖 陰陽 Mk III匯入 | [虛空爆破力場法杖 陰陽 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L14) |
| 虛空爆破力場法杖 陰陽 Mk III接入 | [虛空爆破力場法杖 陰陽 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p1_m1.lua#L1162-L1164) |
| 烈焰力場法杖等級覆寫 | [烈焰力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p2.lua#L224-L272) |
| 烈焰力場法杖Buff接入 | [烈焰力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p2_buff_templates.lua#L32-L42) |
| UI 烈焰力場法杖 | [UI 烈焰力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L818) |
| 烈焰力場法杖 裂隙避難所 Mk II匯入 | [烈焰力場法杖 裂隙避難所 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L13) |
| 烈焰力場法杖 裂隙避難所 Mk II接入 | [烈焰力場法杖 裂隙避難所 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p2_m1.lua#L1223-L1225) |
| 電流力場法杖等級覆寫 | [電流力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L223-L271) |
| 電流力場法杖Buff接入 | [電流力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L27-L37) |
| UI 電流力場法杖 | [UI 電流力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L831) |
| 電流力場法杖 諾瑪努斯 Mk VI匯入 | [電流力場法杖 諾瑪努斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L13) |
| 電流力場法杖 諾瑪努斯 Mk VI接入 | [電流力場法杖 諾瑪努斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p3_m1.lua#L1299-L1301) |
| 虛空打擊力場法杖等級覆寫 | [虛空打擊力場法杖等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p4.lua#L332-L380) |
| 虛空打擊力場法杖Buff接入 | [虛空打擊力場法杖Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p4_buff_templates.lua#L36-L46) |
| UI 虛空打擊力場法杖 | [UI 虛空打擊力場法杖](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L844) |
| 虛空打擊力場法杖 陰陽 Mk IV匯入 | [虛空打擊力場法杖 陰陽 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L13) |
| 虛空打擊力場法杖 陰陽 Mk IV接入 | [虛空打擊力場法杖 陰陽 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_staffs/forcestaff_p4_m1.lua#L1151-L1153) |
