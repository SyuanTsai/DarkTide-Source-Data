# 開溜：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 自有 I–IV 與 formatter | [自有 I–IV 與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L656-L712) |
| 自有 wrapper | [自有 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L47-L59) |
| conditional 統計彙總 | [conditional 統計彙總](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 實際 proc 統計期限 | [實際 proc 統計期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L96) |
| 實際 proc 統計 dispatch | [實際 proc 統計 dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| 有效事件重設 timer | [有效事件重設 timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L321-L355) |
| incoming hit-scan 衝刺閃避事件 | [incoming hit-scan 衝刺閃避事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L143-L179) |
| 衝刺閃避條件與角度 | [衝刺閃避條件與角度](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua#L141-L180) |
| 衝刺速度 consumer | [衝刺速度 consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L142-L159) |
| 三型號 UI 名稱組合 | [三型號 UI 名稱組合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| 遊戲 UI 空圖示 fallback | [遊戲 UI 空圖示 fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L429-L434) |
| 玩家 buff extension 類別 | [玩家 buff extension 類別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L16-L20) |
| 玩家事件 map 佇列 | [玩家事件 map 佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L958-L992) |
| 玩家伺服器事件派送 | [玩家伺服器事件派送](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| Mk I trait module import | [Mk I trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| Mk I hip fire | [Mk I hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L244-L250) |
| Mk I ADS | [Mk I ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L320-L325) |
| Mk I flashlight special | [Mk I flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L482-L504) |
| Mk I trait registration | [Mk I trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| Mk V trait module import | [Mk V trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| Mk V hip fire | [Mk V hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L243-L249) |
| Mk V ADS | [Mk V ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L319-L324) |
| Mk V flashlight special | [Mk V flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L480-L502) |
| Mk V trait registration | [Mk V trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| Mk VIII trait module import | [Mk VIII trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| Mk VIII hip fire | [Mk VIII hip fire](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L243-L249) |
| Mk VIII ADS | [Mk VIII ADS](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L319-L324) |
| Mk VIII flashlight special | [Mk VIII flashlight special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L481-L503) |
| Mk VIII trait registration | [Mk VIII trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
| 同類加算與最大值結算 | [同類加算與最大值結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L695-L725) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 70°基準角度定義 | [70°基準角度定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/sprint.lua#L12-L14) |

## 執行與計算

本項唯一實作為 `weapon_trait_bespoke_autogun_p1_improved_sprint_dodge`，透過各型號的 bespoke autogun trait registration 使用同一 wrapper。wrapper 在合格的 `on_sprint_dodge` 事件下提供一秒 `proc_stat_buffs.sprint_movement_speed`，並以 `is_item_slot_wielded` 同時限制事件接受及速度統計套用。I／II 的 tier override 只有計時速度值；III／IV 另有 `conditional_stat_buffs.sprint_dodge_reduce_angle_threshold_rad = 10°`，由一般 conditional stat aggregation 在持用時生效，不等待 proc。

實際 `hit_scan` 先以玩家衝刺狀態和角度判斷該次 incoming ranged hit 是否 sprint-dodged，符合才把 `on_sprint_dodge` 加入該玩家的 `PlayerUnitBuffExtension` 事件佇列。玩家 extension 使用一般 `BuffExtensionBase` queued map；在目前來源中只有 MinionBuffExtension 明確把事件標成 local，而 pooled 玩家事件表在回收前會清空，因此本項實際玩家事件落入非 local refresh 分支。成功事件在伺服器處理時間記錄開始時間；無 cooldown 令再次成功事件可重設同一計時窗口。

實際 stat aggregation 的速度路徑是 `ProcBuff._is_proc_active(t)` 的嚴格 `t < start+1`，再 AND 持用條件；`active_time_offset_proc_buff` 子類雖有 `.2` offset predicate，但 proc stat aggregation 不呼叫該 `_is_active`，所以不將它解讀成延遲 `.2` 或 1.2 秒。切出使 held gate 關閉，on_equip buff 仍保留、計時不暫停；切回且未到期可用餘下時間。

- sprint_movement_speed 的 additive_multiplier 從基值1加總各來源；實際 sprint consumer 再乘 move_speed、movement_speed 與 weapon action modifier。角度 key 的 max_value 取最大來源，不能將其他修正與本項10°相加。

令 `m` 為階級加算係數（I／II／III／IV 為 .10/.125/.15/.15），`q` 為其他同類衝刺速度加算係數，`t₀` 為合格非 local 玩家事件被處理的時間。`H(t)` 在原槍持用且 `t<t₀+1` 時為 1，否則為 0。`V(t)=V₀(t)×(1+q+m×H(t))`；`V₀` 尚未包含這個衝刺速度係數，其他 movement_speed、角色狀態與武器動作乘數另行作用。實際更新仍受屬性快取及移動更新順序影響。

角度 stat 的型別是 max_value。令 `r` 為其他同類角度修正、`A` 表示持用原槍、`T` 表示 III／IV，則有效修正 `R=max(0,r,10°×1[A且T])`，一般門檻 `θ=70°−R`。`look_away_angle=acos(abs(dot(攻擊者方向,視線方向)))`，使用水平單位向量；一般側向條件為 `θ<look_away_angle`。衝刺超時只有持有允許超時閃避關鍵字才例外；另有 run_away_dodge 且 `dot<.5` 的分支。角度項獨立於速度 proc 的一秒期間。

逃離分支使用帶正負號的 dot，未取絕對值；其水平夾角不採一般側向判定的前後對稱折算。

## 圖示

- 原始 item.icon 與 icon_small 均為空字串；[實際遊戲UI回退](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L429-L434)使用通用 `content/ui/textures/icons/traits/weapon_trait_unknown`，不是此祝福的專屬圖示。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_unknown.png)｜[Issue附件](https://github.com/user-attachments/assets/d330a7e8-a3da-46cc-ab78-44445b228c71)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 步兵自動槍等級覆寫 | [步兵自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L656-L712) |
| 步兵自動槍Buff接入 | [步兵自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L47-L59) |
| UI 步兵自動槍 | [UI 步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L648) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 弗拉克斯 Mk V匯入 | [步兵自動槍 弗拉克斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| 步兵自動槍 弗拉克斯 Mk V接入 | [步兵自動槍 弗拉克斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 哥倫努 Mk VIII匯入 | [步兵自動槍 哥倫努 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| 步兵自動槍 哥倫努 Mk VIII接入 | [步兵自動槍 哥倫努 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
