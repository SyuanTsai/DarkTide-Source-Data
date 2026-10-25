# 快速裝填：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| I–IV tier及RAW formatter | [I–IV tier及RAW formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L392-L441) |
| 實際 ProcBuff wrapper | [實際 ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L27-L39) |
| Buff同名trait tier override合併 | [Buff同名trait tier override合併](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L159-L183) |
| Buff依slot loadout取得實際trait | [Buff依slot loadout取得實際trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L208-L217) |
| Tier override套用與stat aggregation | [Tier override套用與stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| ProcBuff active time window | [ProcBuff active time window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L105) |
| ProcBuff新建時初始inactive | [ProcBuff新建時初始inactive](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L11-L22) |
| 無cooldown時允許重觸 | [無cooldown時允許重觸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| Active與持用條件共同控制stat | [Active與持用條件共同控制stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L254) |
| Proc stat套用trait同名override | [Proc stat套用trait同名override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L299) |
| 合格事件重設active start time | [合格事件重設active start time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| 玩家進入閃避狀態送出on_dodge_start | [玩家進入閃避狀態送出on_dodge_start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L234-L246) |
| Proc event加入buff事件佇列 | [Proc event加入buff事件佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| buff cache重新計算stat | [buff cache重新計算stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L355) |
| Trait buffs列入on_equip | [Trait buffs列入on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| 裝備時加on_equip／真正卸下時移除 | [裝備時加on_equip／真正卸下時移除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L681) |
| 切換持用只操作on_wield類型 | [切換持用只操作on_wield類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| reload_speed stat型別 | [reload_speed stat型別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L955-L962) |
| Additive multiplier基值 | [Additive multiplier基值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1045-L1058) |
| 動作開始時記錄time scale與end time | [動作開始時記錄time scale與end time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L301-L329) |
| ActionHandler用total_time/time_scale算結束時間 | [ActionHandler用total_time/time_scale算結束時間](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365) |
| ActionHandler讀stat_buff並夾制action time scale | [ActionHandler讀stat_buff並夾制action time scale](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L383-L429) |
| 百分比formatter乘100並附百分號 | [百分比formatter乘100並附百分號](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L21) |
| 數字formatter用於時間placeholder | [數字formatter用於時間placeholder](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L22-L32) |
| trait_override讀取所選tier欄位 | [trait_override讀取所選tier欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Trait formatter產生placeholder字串 | [Trait formatter產生placeholder字串](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L117) |
| 原始百分比數值精度選擇 | [原始百分比數值精度選擇](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| 阿格里皮娜 Mk I腰射hitscan | [阿格里皮娜 Mk I腰射hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L246-L256) |
| 阿格里皮娜 Mk I瞄準hitscan及裝填 | [阿格里皮娜 Mk I瞄準hitscan及裝填](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L320-L328) |
| 阿格里皮娜 Mk I裝填stat consumer | [阿格里皮娜 Mk I裝填stat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L427-L480) |
| 阿格里皮娜 Mk I特殊功能切換 | [阿格里皮娜 Mk I特殊功能切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L482-L518) |
| 弗拉克斯 Mk V腰射hitscan | [弗拉克斯 Mk V腰射hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L245-L255) |
| 弗拉克斯 Mk V瞄準hitscan | [弗拉克斯 Mk V瞄準hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L319-L327) |
| 弗拉克斯 Mk V裝填stat consumer | [弗拉克斯 Mk V裝填stat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L426-L478) |
| 弗拉克斯 Mk V特殊功能切換 | [弗拉克斯 Mk V特殊功能切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L480-L516) |
| 哥倫努 Mk VIII腰射hitscan | [哥倫努 Mk VIII腰射hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L245-L255) |
| 哥倫努 Mk VIII瞄準hitscan | [哥倫努 Mk VIII瞄準hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L319-L327) |
| 哥倫努 Mk VIII裝填stat consumer | [哥倫努 Mk VIII裝填stat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L426-L479) |
| 哥倫努 Mk VIII特殊功能切換 | [哥倫努 Mk VIII特殊功能切換](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L481-L517) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定來源與實際 UI 接線確認一個 ranged trait `weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge`，限制鍵為 `autogun_p1`；實際三筆 binding 是阿格里皮娜 Mk I、弗拉克斯 Mk V、哥倫努 Mk VIII，使用相同 trait 與 I–IV 值。

- Tier 在 `stat_buffs.reload_speed` 設定 0.10／0.125／0.15／0.20。wrapper 是 `proc_buff`，`active_duration=2`、`predicted=false`，監聽 `on_dodge_start`，事件機率為 1，並以 `is_item_slot_wielded` 作為觸發條件；wrapper 的 `proc_stat_buffs.reload_speed=0.5` 是 fallback。

- trait rarity 覆寫會合併到同名 buff 的 `template_override_data.stat_buffs`。ProcBuff 的一般 stat 路徑沒有本項常駐 `stat_buffs`；生效時另讀 `proc_stat_buffs`，而共用 `_calculate_stat_buffs` 以同名 tier override 取代 0.5。因此實際效果是 tier 的 10%／12.5%／15%／20%，不是再加 50%，也不是永久套用 tier 值。

- ProcBuff新建時將active開始時間設在兩秒效果窗之前，所以剛裝備時並未active；首次效果須等符合條件的事件被處理並更新active開始時間。

- 玩家進入閃避狀態時，狀態機排入 `on_dodge_start`。符合持用條件且被處理的事件將 ProcBuff 的開始時間設為該次事件時間；此 wrapper 沒有 cooldown 欄位，所以效果內再次觸發可重新起算 2 秒，而非疊層。效果期間和裝填速度 stat 都受適用武器持用條件限制。

- trait buff 由武器 trait 提取到 `on_equip`；單純切換持用槽不等於卸下武器。切出時 ProcBuff 時鐘繼續，但 `conditional_proc_func` 不通過，當次 stat 更新不會加入其 proc stat；切回且仍在有效窗內時，後續 stat 快取更新可恢復該貢獻。真正卸下武器則會移除 on-equip buff。

- 三型號均將 `reload_speed` 列入 `action_reload.time_scale_stat_buffs`；腰射與瞄準射擊是 `shoot_hit_scan`，特殊輸入是切換手電筒，不會觸發本 trait。ActionHandler 在新動作開始時讀取當前 stat 計算 time scale 及 end time；已開始的 reload 不因後續 dodge、切換或計時到期而重新計算。

- `reload_speed` 的型別是 `additive_multiplier`，基值為 1。動作時間倍率另乘武器 handling 設定，並受全域／動作種類上限夾制；所以實際秒數必須保留相同型號、既有加成與上限前提。

- 令 `p` 為本級 Quickloader 加成（I／II／III／IV 為 0.10／0.125／0.15／0.20），`q` 為同一時點其他 `reload_speed` 加成的合計，`T₀` 為同型號、同一裝填動作、相同 handling 與 `q` 下不含 Quickloader 的動作時間。假設效果在開始裝填時計入、其他時間倍率不變，且沒有時間倍率上限介入：

  `reload_speed stat = 1 + q + p`

  `T₁ = T₀ × (1 + q) ÷ (1 + q + p)`

- 當 `q=0` 時，I／II／III／IV 的裝填時間比例依序為 `1/1.10=90.91%`、`1/1.125=88.89%`、`1/1.15=86.96%`、`1/1.20=83.33%`。這些是相對於基準裝填時間的結果，不是本祝福顯示的裝填速度百分比。

## 圖示

- MasterItems v138291 的實際 `icon`、`icon_small`、`mastery_icon` 均為空；目前沒有可核對的圖示。

- 公開 MasterItems 本體 SHA-256：`915b89ed057d0f2cedfc9d933b27db417c5abff7f4c5dc80904a611e46f72719`；與 Steam Build 的版本關聯未驗證，不據此宣稱遊戲必定沒有圖示。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 步兵自動槍等級覆寫 | [步兵自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L392-L441) |
| 步兵自動槍Buff接入 | [步兵自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L27-L39) |
| UI 步兵自動槍 | [UI 步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L648) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 弗拉克斯 Mk V匯入 | [步兵自動槍 弗拉克斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16) |
| 步兵自動槍 弗拉克斯 Mk V接入 | [步兵自動槍 弗拉克斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 哥倫努 Mk VIII匯入 | [步兵自動槍 哥倫努 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16) |
| 步兵自動槍 哥倫努 Mk VIII接入 | [步兵自動槍 哥倫努 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |
