# 效率：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tier values and formatter | [Own tier values and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L50-L95) |
| Own ProcBuff wrapper | [Own ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L27-L40) |
| Weapon-family/pattern UI loc wiring | [Weapon-family/pattern UI loc wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L871-L889) |
| Mk VII trait import | [Mk VII trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| Mk VII trait registration | [Mk VII trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| Mk IIb trait import | [Mk IIb trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| Mk IIb trait registration | [Mk IIb trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| Mk IX trait import | [Mk IX trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| Mk IX trait registration | [Mk IX trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
| Mk VII hip fire | [Mk VII hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L205-L229) |
| Mk VII aimed fire | [Mk VII aimed fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L280-L290) |
| Mk VII flashlight special | [Mk VII flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L449-L480) |
| Mk IIb hip fire | [Mk IIb hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L202-L226) |
| Mk IIb aimed fire | [Mk IIb aimed fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L277-L287) |
| Mk IIb flashlight special | [Mk IIb flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L446-L477) |
| Mk IX hip fire | [Mk IX hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L202-L226) |
| Mk IX aimed fire | [Mk IX aimed fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L278-L288) |
| Mk IX flashlight special | [Mk IX flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L447-L478) |
| Lasgun ammo templates | [Lasgun ammo templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L283-L319) |
| Ammo action gate | [Ammo action gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/utilities/action_utility.lua#L9-L23) |
| Integer rounding | [Integer rounding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L128-L134) |
| Shot-before-ammo order | [Shot-before-ammo order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L267-L341) |
| Ammo consumer | [Ammo consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L565) |
| Hit-scan shot event | [Hit-scan shot event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L203-L220) |
| ProcBuff initialization | [ProcBuff initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L11-L23) |
| ProcBuff cooldown | [ProcBuff cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L197) |
| Off-cooldown keyword | [Off-cooldown keyword](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L256-L284) |
| ProcBuff refresh | [ProcBuff refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L359) |
| Buff keyword aggregation | [Buff keyword aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L808-L840) |
| HUD slot visibility | [HUD slot visibility](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L897-L920) |
| Player event queue | [Player event queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L281) |
| Player keyword cache | [Player keyword cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L352) |
| Player keyword query | [Player keyword query](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L900-L902) |
| Trait buff installation | [Trait buff installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Trait buff removal | [Trait buff removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L636-L661) |
| Wield lifecycle | [Wield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L700) |
| Unwield lifecycle | [Unwield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L778) |
| RAW number/string formatter | [RAW number/string formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L22-L35) |
| RAW value selection | [RAW value selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L71) |
| RAW numeric precision | [RAW numeric precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| ProcBuff cooldown keyword branch proof 2 | [ProcBuff cooldown keyword branch proof 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L146-L171) |
| ProcBuff cooldown keyword branch proof 3 | [ProcBuff cooldown keyword branch proof 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff cooldown keyword branch proof 4 | [ProcBuff cooldown keyword branch proof 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L277-L285) |
| ProcBuff cooldown keyword branch proof 5 | [ProcBuff cooldown keyword branch proof 5](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L98-L105) |
| 本項事件／裝備差異 | [本項事件／裝備差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L190) |
| 本項事件／裝備差異 | [本項事件／裝備差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L780-L787) |
| 本項事件／裝備差異 | [本項事件／裝備差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

I–IV trait 覆寫 cooldown_duration 為 1.25／1／0.75／0.5 秒；wrapper 是 ProcBuff，訂閱 on_shoot，設定 allow_proc_while_cooling_down=true，並off-cooldown keyword 分支獨立加入 reduced_ammo_consumption，不依賴 proc-active keyword/conditional branch；本項 active_duration 為 0，冷卻到期後關鍵字可用。wrapper 的 1 秒是同名備用值，tier 的同名覆寫取代它；沒有 held-slot 條件。每次符合的射擊事件都把冷卻起點更新到 update_proc_events 的處理時間 t（不是 params.t），包括冷卻期間的事件。裝填與只切換手中武器都不自行產生該射擊事件；卸下來源物品才移除其 buff。HUD 持用欄位限制只影響顯示，並非效果條件。

三個實際型號的腰射與瞄準射擊皆為單發 hit-scan；特殊動作僅切換手電筒。射擊動作走同一個一般彈藥消耗分支：當該分支讀到玩家 buff cache 中的減耗關鍵字時，先處理可能存在的雙倍用量，再除以 3 四捨五入至整數，並把彈匣數量限制在不低於 0。命中與否不改變 trait 對 on_shoot 的訂閱。因關鍵字由玩家 buff cache 提供，這裡只對已核對的三個綁定型號陳述實際適用性，不推論未核對武器。

這項無active_duration覆寫，實際active_duration＝0；_is_cooling_down使用 t < active_start_time＋cooldown，等於邊界便到期。off_cooldown_keywords是獨立分支，不要求proc-active keyword條件。省彈讀取cached keyword；以事件處理時間及下一次更新為準，不能把擊發時間與立即扣彈時點視為同一個重新計時動作。

本項正常用量為非負整數。令 u 為省彈分支之前的用量，A 為目前彈匣量；若另有雙倍消耗，先由該分支更新 u。省彈關鍵字有效且沒有較早的免耗返回時，u′＝round(u÷3)，A′＝max(A−u′,0)，實際扣除 min(A,u′)。math.round對非負數使用floor(x＋0.5)。無本項時扣除min(A,u)，實際節省＝min(A,u)−min(A,u′)；只有A≥u時可直接以(u−u′)÷u求節省比例。u＝3得1，足量省2／3；u＝2得1，足量省1／2。u＝3、A＝1時兩者實際都扣1，無額外節省。本項不補充備用彈藥，也不直接改變傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_048`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_048.png)｜[Issue附件](https://github.com/user-attachments/assets/882a8dca-8f18-4327-901b-c03dba2ca7e7)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 步兵鐳射槍等級覆寫 | [步兵鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L50-L95) |
| 步兵鐳射槍Buff接入 | [步兵鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L27-L40) |
| UI 步兵鐳射槍 | [UI 步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L870) |
| 步兵鐳射槍 卡特雷爾 Mk VII匯入 | [步兵鐳射槍 卡特雷爾 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| 步兵鐳射槍 卡特雷爾 Mk VII接入 | [步兵鐳射槍 卡特雷爾 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 卡特雷爾 Mk IIb匯入 | [步兵鐳射槍 卡特雷爾 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IIb接入 | [步兵鐳射槍 卡特雷爾 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 卡特雷爾 Mk IX匯入 | [步兵鐳射槍 卡特雷爾 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IX接入 | [步兵鐳射槍 卡特雷爾 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
